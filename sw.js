const CACHE = 'edi-v10';
const FILES = ['index.html', 'admin.html', 'racun.html', 'style.css', 'app.js', 'jezik.js', 'manifest.json', 'manifest-admin.json', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
