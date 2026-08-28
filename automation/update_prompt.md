# Startup Radar daily update

You maintain the Chinese Startup Radar report and its structured website data. Work autonomously, but edit only these paths:

- `src/data/radar.json`
- `docs/startup_radar_YYYY-MM-DD_zh.md` for today's UTC date
- `README.md`

Do not edit application code, dependencies, deployment files, scripts, historical reports, or Git configuration. Do not commit, push, deploy, start services, or expose credentials; the surrounding automation handles those steps.

Read `docs/startup_radar_method_zh.md`, the current `src/data/radar.json`, and the most recent Startup Radar report before researching. Produce a genuinely fresh daily snapshot, not a date-only rewrite.

## Sources to inspect

Use public, authorized pages only. Do not bypass CAPTCHA, login walls, signatures, rate limits, robots controls, or access restrictions. If a source blocks access, record the limitation and use another reputable source.

1. GitHub Trending with Language Any and Spoken Language Any across daily, weekly, and monthly windows.
2. Product Hunt current launches and product pages.
3. Show HN from the most recent seven days, using Hacker News or its public Algolia API; retain points/comments only as timestamped snapshots.
4. YC Company Directory and latest Requests for Startups.
5. Dealroom or Crunchbase for global market/funding signals when publicly accessible.
6. 36氪 and IT桔子 for recent China startup and funding signals.
7. Shopify App Store, Atlassian Marketplace, G2, or another first-party marketplace for recent ratings and concrete user complaints.

Prefer first-party and primary sources. Every precise claim, metric, project, company, rating, or financing event must have a direct source URL. Distinguish observation from inference. Stars, votes, funding, and comments are signals, not proof of demand or revenue.

## Required output

Update every section of `src/data/radar.json`:

- `meta`: today's UTC date, snapshot timestamp, and matching report filename.
- `signals`: at least five coverage rows.
- `themes`: at least five cross-source themes, with honest evidence labels and source names.
- `datasets.launches`: at least five current product launches.
- `datasets.technical`: at least five recent technical-community projects.
- `datasets.github`: at least eight repositories spanning the relevant Trending windows.
- `datasets.market`: at least four current investment or market signals, including China when evidence exists.
- `datasets.pain`: at least four concrete customer complaints or marketplace gaps.
- `opportunities`: five to eight scored hypotheses, sorted by descending score and following the documented 100-point rubric.

For each opportunity, name the buyer, narrow MVP wedge, supporting evidence, primary risk, and direct source links. Favor ideas a small team can validate; clearly label capital-heavy directions. Avoid generic “another AI assistant” recommendations.

Create `docs/startup_radar_YYYY-MM-DD_zh.md` with methodology, key changes since the prior report, source snapshots, detailed opportunity analysis, rejected/crowded directions, next experiments, and limitations. Add its link at the top of the README report list without removing history.

Before finishing, run:

```bash
RADAR_EXPECTED_DATE="$(date -u +%F)" node scripts/validate-radar.mjs
```

If current evidence is insufficient to satisfy validation honestly, stop with a clear failure instead of fabricating data.
