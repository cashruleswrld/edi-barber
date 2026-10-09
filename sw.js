const CACHE = 'edi-v15';
const FILES = ['index.html', 'admin.html', 'style.css', 'app.js', 'jezik.js', 'kalendar.js', 'logo.png', 'manifest.json', 'manifest-admin.json', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
