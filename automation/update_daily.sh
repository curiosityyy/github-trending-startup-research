#!/usr/bin/env bash
set -Eeuo pipefail

export HOME=/home/ec2-user
export PATH=/home/ec2-user/.local/share/fnm/node-versions/v22.22.0/installation/bin:/usr/local/bin:/usr/bin:/bin

repo=/home/ec2-user/project/github-trending-startup-research
codex_bin=/home/ec2-user/.local/share/fnm/node-versions/v22.22.0/installation/bin/codex
today=$(date -u +%F)
run_root=$(mktemp -d /tmp/startup-radar-update.XXXXXX)
worktree="$run_root/worktree"
lock_file=/tmp/startup-radar-update.lock

exec 9>"$lock_file"
if ! flock -n 9; then
  echo "Another Startup Radar update is already running"
  exit 1
fi

cleanup() {
  if [ -d "$worktree" ]; then
    git -C "$repo" worktree remove --force "$worktree" >/dev/null 2>&1 || true
  fi
  rm -rf "$run_root"
}
trap cleanup EXIT

if [ "${1:-}" = "--validate-only" ]; then
  cd "$repo"
  RADAR_EXPECTED_DATE="$(node -p "require('./src/data/radar.json').meta.date")" node scripts/validate-radar.mjs
  npm run build -- --outDir "$run_root/validation-dist"
  test -s "$run_root/validation-dist/index.html"
  echo "Validation-only run passed"
  exit 0
fi

git -C "$repo" fetch origin main
base_commit=$(git -C "$repo" rev-parse origin/main)
git -C "$repo" worktree add --detach "$worktree" "$base_commit"

cd "$worktree"
npm ci

{
  cat automation/update_prompt.md
  printf '\nToday is %s UTC. Use this exact date for the snapshot and report filename.\n' "$today"
} | "$codex_bin" exec \
  --ephemeral \
  --cd "$worktree" \
  --approve-for-me \
  --output-last-message "$run_root/codex-last-message.txt" \
  -

changed_paths=$(git status --porcelain=v1 | cut -c4-)
if [ -z "$changed_paths" ]; then
  echo "Codex produced no content changes"
  exit 1
fi

unexpected=$(printf '%s\n' "$changed_paths" | grep -Ev '^(README\.md|src/data/radar\.json|docs/startup_radar_[0-9]{4}-[0-9]{2}-[0-9]{2}_zh\.md)$' || true)
if [ -n "$unexpected" ]; then
  echo "Unexpected changed paths:"
  printf '%s\n' "$unexpected"
  exit 1
fi

RADAR_EXPECTED_DATE="$today" node scripts/validate-radar.mjs
npm run build
test -s dist/index.html
test -n "$(find dist/assets -maxdepth 1 -type f -name '*.js' -print -quit)"

git add README.md src/data/radar.json "docs/startup_radar_${today}_zh.md"
git diff --cached --check
git config user.name "Startup Radar Bot"
git config user.email "startup-radar-bot@users.noreply.github.com"
git commit -m "Update Startup Radar for $today"

git fetch origin main
if [ "$(git rev-parse origin/main)" != "$base_commit" ]; then
  echo "Remote main changed during the run; refusing a non-fast-forward update"
  exit 1
fi
env -u GH_TOKEN -u GITHUB_TOKEN git push origin HEAD:main

release_id="${today}-$(date -u +%H%M%S)-$(git rev-parse --short HEAD)"
release_dir="$repo/.releases/$release_id"
mkdir -p "$repo/.releases"
mv dist "$release_dir"

previous_release=$(readlink "$repo/current" 2>/dev/null || true)
ln -sfn ".releases/$release_id" "$repo/current.next"
mv -Tf "$repo/current.next" "$repo/current"

if ! curl -fsS --max-time 15 -o /dev/null http://127.0.0.1/startup-radar/; then
  if [ -n "$previous_release" ]; then
    ln -sfn "$previous_release" "$repo/current.next"
    mv -Tf "$repo/current.next" "$repo/current"
  fi
  echo "Deployment health check failed; previous release restored"
  exit 1
fi

git -C "$repo" fetch origin main
if [ -z "$(git -C "$repo" status --porcelain=v1)" ] && [ "$(git -C "$repo" branch --show-current)" = "main" ]; then
  git -C "$repo" merge --ff-only origin/main || true
fi

echo "Startup Radar updated successfully to $release_id"
