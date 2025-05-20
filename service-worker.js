const CACHE_NAME = "maillol-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/admin.html",
  "/admin.fr.html",
  "/img/logo_maillol_graffiti.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});