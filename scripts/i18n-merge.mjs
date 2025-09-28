import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const LOCALES_DIR = path.resolve(__dirname, '../src/lib/translations')
const REPORTS_DIR = path.resolve(__dirname, '../reports')

function readJson(p) { return JSON.parse(fs.readFileSync(p, 'utf8')) }
function writeJson(p, obj) {
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n')
}

function deepMerge(base, patch) {
  if (Array.isArray(base) || Array.isArray(patch)) return patch ?? base
  if (typeof base !== 'object' || typeof patch !== 'object' || !base || !patch) return patch ?? base
  const out = { ...base }
  for (const [k, v] of Object.entries(patch)) {
    out[k] = deepMerge(base[k], v)
  }
  return out
}

function main(locale = 'ja') {
  const tgtPath = path.join(LOCALES_DIR, `${locale}.json`)
  const cur = fs.existsSync(tgtPath) ? readJson(tgtPath) : {}
  const translatedPath = path.join(REPORTS_DIR, `todo-${locale}.json`) // The file completed by the translator is supposed to be placed here.
  if (!fs.existsSync(translatedPath)) {
    console.error(`No translated file at ${translatedPath}`)
    process.exit(1)
  }
  const patch = readJson(translatedPath)
  const merged = deepMerge(cur, patch)
  writeJson(tgtPath, merged)
  console.log(`[i18n-merge] merged into ${tgtPath}`)
}

main(process.argv[2]) // support locale from command line argument