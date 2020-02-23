'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "abb72016b8d1a019345deb6e95124f00",
"/main.dart.js": "8a3f9979d93d0cb5b463eb70885b9759",
"/README.md": "82aca13eed1379367e23b0b7673e16be",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/manifest.json": "0cd4c9d954c3e172e7515a3c1053e4e0",
"/assets/LICENSE": "d74bb323a25cc8df326f745f64c8f452",
"/assets/AssetManifest.json": "87e64ccb9dedb03e5d213f89c3bcef8f",
"/assets/FontManifest.json": "f90dc4e504658485a2cec090aba9b322",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/assets/images/github.png": "ef7a02b69836dc8b6a732a54c4200dcb",
"/assets/assets/images/linkedin.png": "1b18d461ce75c75fdb4d7b6ec08b3e65",
"/assets/assets/fonts/Merriweather-Light.ttf": "9341552d8cbfd150ac426cbd065c51a0"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request, {
          credentials: 'include'
        });
      })
  );
});
