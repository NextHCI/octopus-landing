import { access, readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')

async function readSource(file) {
  return readFile(path.join(root, 'src', file), 'utf8')
}

async function assertFile(file) {
  try {
    await access(path.join(root, 'src', file))
  } catch {
    throw new Error(`Missing required file: src/${file}`)
  }
}

function assertIncludes(haystack, needle, label) {
  if (!haystack.includes(needle)) {
    throw new Error(`Expected ${label} to include ${needle}`)
  }
}

function assertNotIncludes(haystack, needle, label) {
  if (haystack.includes(needle)) {
    throw new Error(`Expected ${label} to omit legacy marker ${needle}`)
  }
}

const [html, css, js] = await Promise.all([
  readSource('index.html'),
  readSource('styles.css'),
  readSource('script.js')
])

const androidApkUrl = 'https://octopus.shiweinan.com/apk/octopus_release.apk'
const legacyAndroidApkUrl = 'http://ring.shiweinan.com:32850/api/v1/update/redirect'

for (const asset of [
  'assets/hero-hub.png',
  'assets/capture-preview.svg',
  'assets/sync-preview.png',
  'assets/privacy-security.png',
  'assets/icons/windows.svg',
  'assets/icons/apple.svg',
  'assets/icons/android.svg',
  'assets/icons/cloud-fill.svg'
]) {
  await assertFile(asset)
}

for (const marker of [
  '<section class="hero"',
  'class="hub-stage"',
  'id="capture"',
  'id="smart"',
  'id="sync"',
  'id="privacy"',
  'id="ecosystem"',
  'id="download"',
  'data-i18n="hero_title_a"',
  './assets/hero-hub.png',
  './assets/capture-preview.svg',
  './assets/sync-preview.png',
  './assets/privacy-security.png'
]) {
  assertIncludes(html, marker, 'src/index.html')
}

assertIncludes(html, androidApkUrl, 'src/index.html')
assertNotIncludes(html, legacyAndroidApkUrl, 'src/index.html')

for (const marker of [
  '.hub-stage',
  '.specs-grid',
  '.feature-inner',
  '.feature-inner>*{min-width:0}',
  '.viz-shadow,.sync-preview{max-width:100%}',
  '.eco-grid',
  '.cta'
]) {
  assertIncludes(css, marker, 'src/styles.css')
}

for (const marker of [
  'window.toggleLang',
  'renderEcoTiles',
  'data-count',
  './assets/icons/'
]) {
  assertIncludes(js, marker, 'src/script.js')
}

for (const legacyMarker of [
  'hero-octopusapp.png',
  'workflow-octopusapp.png',
  'hwm-world-model.png',
  'service-showcase',
  'signal-band'
]) {
  assertNotIncludes(html + css + js, legacyMarker, 'landing source')
}

console.log('Octopus landing source matches the octo reference structure.')
