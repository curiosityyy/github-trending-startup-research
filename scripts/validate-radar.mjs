import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const dataPath = path.join(root, 'src/data/radar.json')
const radar = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const expectedDate = process.env.RADAR_EXPECTED_DATE || new Date().toISOString().slice(0, 10)
const errors = []

const requireText = (value, label) => {
  if (typeof value !== 'string' || value.trim().length < 2) errors.push(`${label} must be non-empty text`)
}

const requireUrl = (value, label) => {
  try {
    const url = new URL(value)
    if (!['http:', 'https:'].includes(url.protocol)) throw new Error('unsupported protocol')
  } catch {
    errors.push(`${label} must be an HTTP(S) URL`)
  }
}

if (radar.meta?.date !== expectedDate) errors.push(`meta.date must equal ${expectedDate}`)
if (radar.meta?.reportFile !== `startup_radar_${expectedDate}_zh.md`) errors.push('meta.reportFile does not match meta.date')
requireText(radar.meta?.snapshot, 'meta.snapshot')

const reportPath = path.join(root, 'docs', radar.meta?.reportFile || '')
if (!fs.existsSync(reportPath)) errors.push(`report is missing: ${reportPath}`)

if (!Array.isArray(radar.signals) || radar.signals.length < 5) errors.push('signals must contain at least 5 rows')
for (const [index, signal] of (radar.signals || []).entries()) {
  requireText(signal.source, `signals[${index}].source`)
  requireText(String(signal.count ?? ''), `signals[${index}].count`)
  requireText(signal.note, `signals[${index}].note`)
  requireText(signal.type, `signals[${index}].type`)
}

if (!Array.isArray(radar.themes) || radar.themes.length < 5) errors.push('themes must contain at least 5 rows')
for (const [index, theme] of (radar.themes || []).entries()) {
  requireText(theme.name, `themes[${index}].name`)
  requireText(theme.status, `themes[${index}].status`)
  requireText(theme.evidence, `themes[${index}].evidence`)
  requireText(theme.summary, `themes[${index}].summary`)
  if (!Array.isArray(theme.sources) || theme.sources.length < 1) errors.push(`themes[${index}].sources must not be empty`)
}

const datasetMinimums = { launches: 5, technical: 5, github: 8, market: 4, pain: 4 }
for (const [dataset, minimum] of Object.entries(datasetMinimums)) {
  const rows = radar.datasets?.[dataset]
  if (!Array.isArray(rows) || rows.length < minimum) {
    errors.push(`datasets.${dataset} must contain at least ${minimum} rows`)
    continue
  }
  for (const [index, item] of rows.entries()) {
    for (const field of ['name', 'source', 'metric', 'category', 'signal']) {
      requireText(item[field], `datasets.${dataset}[${index}].${field}`)
    }
    requireUrl(item.url, `datasets.${dataset}[${index}].url`)
  }
}

if (!Array.isArray(radar.opportunities) || radar.opportunities.length < 5 || radar.opportunities.length > 8) {
  errors.push('opportunities must contain 5 to 8 rows')
}

const ranks = new Set()
let previousScore = 101
for (const [index, item] of (radar.opportunities || []).entries()) {
  for (const field of ['rank', 'category', 'title', 'thesis', 'buyer', 'wedge', 'risk']) {
    requireText(item[field], `opportunities[${index}].${field}`)
  }
  if (ranks.has(item.rank)) errors.push(`duplicate opportunity rank: ${item.rank}`)
  ranks.add(item.rank)
  if (!Number.isInteger(item.score) || item.score < 0 || item.score > 100) errors.push(`invalid score at opportunities[${index}]`)
  if (item.score > previousScore) errors.push('opportunities must be sorted by descending score')
  previousScore = item.score
  if (!Array.isArray(item.proof) || item.proof.length < 2) errors.push(`opportunities[${index}].proof needs at least 2 items`)
  if (!Array.isArray(item.sources) || item.sources.length < 1) errors.push(`opportunities[${index}].sources must not be empty`)
  for (const [sourceIndex, source] of (item.sources || []).entries()) {
    if (!Array.isArray(source) || source.length !== 2) {
      errors.push(`opportunities[${index}].sources[${sourceIndex}] must be [label, url]`)
      continue
    }
    requireText(source[0], `opportunities[${index}].sources[${sourceIndex}][0]`)
    requireUrl(source[1], `opportunities[${index}].sources[${sourceIndex}][1]`)
  }
}

if (errors.length) {
  console.error(errors.map((error) => `- ${error}`).join('\n'))
  process.exit(1)
}

const datasetRows = Object.values(radar.datasets).reduce((total, rows) => total + rows.length, 0)
console.log(`Radar validation passed: ${radar.opportunities.length} opportunities, ${radar.themes.length} themes, ${datasetRows} dataset rows`)
