const CACHE_NAME = 'acta-v1';
const ASSETS = [
  './',
  './index.html',
  './acta.css',
  './acta.js',
  './manifest.json',
  './icon.png'
];

// Cài đặt Cache
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Chạy Offline: Lấy file từ Cache ra nếu mất mạng
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
