import { access, readFile } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = join(appRoot, 'dist')
const basePath = process.env.VITE_BASE_PATH?.trim() || '/'

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const [html, manifestText, serviceWorker] = await Promise.all([
  readFile(join(distRoot, 'index.html'), 'utf8'),
  readFile(join(distRoot, 'manifest.webmanifest'), 'utf8'),
  readFile(join(distRoot, 'sw.js'), 'utf8'),
])
const manifest = JSON.parse(manifestText)

assert(basePath.startsWith('/') && basePath.endsWith('/'), 'Expected an absolute VITE_BASE_PATH ending in "/".')
assert(html.includes(`href="${basePath}manifest.webmanifest"`), 'Built HTML does not use the release base path for its manifest.')
assert(html.includes(`href="${basePath}icon-180.png"`), 'Built HTML is missing its path-safe Apple touch icon.')
assert(html.includes(`src="${basePath}assets/`), 'Built HTML does not use the release base path for JavaScript.')
assert(manifest.start_url === './' && manifest.scope === './', 'Manifest start_url and scope must remain deployment-relative.')
assert(manifest.display === 'standalone', 'Manifest must request standalone display mode.')
assert(manifest.icons?.some((icon) => icon.sizes === '192x192'), 'Manifest is missing its 192px icon.')
assert(manifest.icons?.some((icon) => icon.sizes === '512x512' && icon.purpose === 'maskable'), 'Manifest is missing its maskable 512px icon.')
assert(serviceWorker.includes(`const BASE_PATH = ${JSON.stringify(basePath)}`), 'Service worker was generated for a different base path.')
assert(serviceWorker.includes(`${basePath}manifest.webmanifest`), 'Service worker does not precache the manifest.')
assert(serviceWorker.includes(`${basePath}assets/`), 'Service worker does not precache built assets.')
assert(serviceWorker.includes('cache.match(request.url, { ignoreVary: true })'), 'Service worker does not match immutable assets independently of response Vary headers.')

await Promise.all(['icon-180.png', 'icon-192.png', 'icon-512.png', 'icon-maskable-512.png'].map((name) => access(join(distRoot, name))))
console.log(`PASS: installable offline release verified at base path ${basePath}.`)