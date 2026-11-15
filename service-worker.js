//step two
const cacheName = "site-cache-v5";
const files = [
  "/",
  "index.html",
  "script.js",
  "service-worker.js",
  "style.css",
  "assets/images/image-product-1.jpg",
  "assets/images/image-product-2.jpg",
  "assets/images/image-product-3.jpg",
  "assets/images/image-product-4.jpg",
  "assets/images/image-avatar.png"
];
self.addEventListener("install",(event)=>{
  event.waitUntil(
    caches.open(cacheName).then((cache)=>{
      return cache.addAll(files);
    })
  )
});
//step three
self.addEventListener("fetch",(event)=>{
  event.respondWith(
    caches.match(event.request).then((response)=>{
      return response || fetch(event.request);
    })
  )
});