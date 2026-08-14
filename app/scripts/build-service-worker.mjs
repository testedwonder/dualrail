import { createHash } from 'node:crypto'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join, relative, resolve, sep } from 'node:path'
import { fileURLToPath } from 'node:url'

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distRoot = join(appRoot, 'dist')

function normalizeBasePath(value) {
  const basePath = value?.trim() || '/'
  if (!basePath.startsWith('/') || !basePath.endsWith('/') || basePath.includes('..')) {
    throw new Error('VITE_BASE_PATH must be an absolute path ending in "/".')
  }
  return basePath
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const files = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? walk(path) : [path]
  }))
  return files.flat()
}

const basePath = normalizeBasePath(process.env.VITE_BASE_PATH)
const files = (await walk(distRoot))
  .map((path) => relative(distRoot, path).split(sep).join('/'))
  .filter((path) => path !== 'sw.js')
  .sort()

if (!files.includes('index.html') || !files.includes('manifest.webmanifest')) {
  throw new Error('Vite output is missing index.html or manifest.webmanifest.')
}

const digest = createHash('sha256')
for (const path of files) {
  digest.update(path)
  digest.update(await readFile(join(distRoot, path)))
}

const cacheName = `dualrail-atlas-${digest.digest('hex').slice(0, 12)}`
const precacheUrls = [basePath, ...files.map((path) => `${basePath}${path}`)]
const serviceWorker = `const CACHE_PREFIX = 'dualrail-atlas-';
const CACHE_NAME = ${JSON.stringify(cacheName)};
const BASE_PATH = ${JSON.stringify(basePath)};
const INDEX_URL = \`\${BASE_PATH}index.html\`;
const PRECACHE_URLS = ${JSON.stringify(precacheUrls, null, 2)};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((names) => Promise.all(names
        .filter((name) => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
        .map((name) => caches.delete(name))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request).catch(async () => {
        const cache = await caches.open(CACHE_NAME);
        return (await cache.match(request.url, { ignoreVary: true }))
          || cache.match(INDEX_URL, { ignoreVary: true });
      }),
    );
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME)
      .then((cache) => cache.match(request.url, { ignoreVary: true }))
      .then((cached) => cached || fetch(request)),
  );
});
`

await writeFile(join(distRoot, 'sw.js'), serviceWorker, 'utf8')
console.log(`Generated ${cacheName} with ${precacheUrls.length} offline URL(s) at ${basePath}.`)