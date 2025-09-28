import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const LOCALES_DIR = path.resolve(__dirname, '../src/lib/translations')
const REPORTS_DIR = path.resolve(__dirname, '../reports')

const base = 'en'
const targets = ['ja']

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'))
}

function writeJson(p, obj) {
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + '\n')
}

function flatten(obj, prefix = '', out = {}) {
  for (const [k, v] of Object.entries(obj ?? {})) {
    const key = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      flatten(v, key, out)
    } else {
      out[key] = v
    }
  }
  return out
}

function unflatten(flat) {
  const root = {}
  for (const [k, v] of Object.entries(flat)) {
    const parts = k.split('.')
    let cur = root
    for (let i = 0; i < parts.length; i++) {
      const p = parts[i]
      const isLast = i === parts.length - 1
      if (isLast) {
        // If a deeper object already exists, do not overwrite it with a primitive
        if (cur[p] && typeof cur[p] === 'object' && !Array.isArray(cur[p])) {
          // keep existing object (e.g., when both 'a.b' and 'a' exist); prefer deeper structure
        } else {
          cur[p] = v
        }
      } else {
        // Ensure the container is an object (convert from primitive if necessary)
        if (typeof cur[p] !== 'object' || cur[p] === null || Array.isArray(cur[p])) {
          cur[p] = {}
        }
        cur = cur[p]
      }
    }
  }
  return root
}

function main() {
  const basePath = path.join(LOCALES_DIR, `${base}.json`)
  const baseJson = readJson(basePath)
  const baseFlat = flatten(baseJson)

  for (const tgt of targets) {
    const tgtPath = path.join(LOCALES_DIR, `${tgt}.json`)
    const tgtJson = fs.existsSync(tgtPath) ? readJson(tgtPath) : {}
    const tgtFlat = flatten(tgtJson)

    const missing = {}
    const placeholder = {}

    // untranslated (no key in tgt or empty string)
    for (const key of Object.keys(baseFlat)) {
      if (!(key in tgtFlat) || tgtFlat[key] === '' || tgtFlat[key] == null) {
        missing[key] = baseFlat[key] // original text for reference
        placeholder[key] = ''         // empty template for translation
      }
    }

    // unused keys (present in tgt but not in en)
    const unused = {}
    for (const key of Object.keys(tgtFlat)) {
      if (!(key in baseFlat)) {
        unused[key] = tgtFlat[key]
      }
    }

    // output reports
    writeJson(path.join(REPORTS_DIR, `missing-${tgt}.json`), missing)
    writeJson(path.join(REPORTS_DIR, `unused-${tgt}.json`), unused)
    // template for translators
    writeJson(path.join(REPORTS_DIR, `todo-${tgt}.json`), unflatten(placeholder))
    console.log(`[i18n-report] ${tgt}: missing=${Object.keys(missing).length}, unused=${Object.keys(unused).length}`)
  }
}

main()