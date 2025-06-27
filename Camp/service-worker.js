self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("camp-cache-v1").then(cache => {
      return cache.addAll([
        "index.html",
        "manifest.json",
        "icon.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
