importScripts('/serviceworker-cache-polyfill.js');

var CACHE_NAME = 'flickr-browser';

// File want to cache
var urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/cache.js',
  '/dist/build.js',
  '/serviceworker-cache-polyfill.js',
];


// Set the callback for the install step
self.addEventListener('install', function(event) {
  // perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


self.addEventListener('fetch', function(event) {

  console.log('[serviceWorker]: Fetching ' + event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then(function (res) {
        return res || fetch(event.request)
          .then(function (res) {
            caches.open(CACHE_NAME)
              .then(function (cache) {
                cache.put(event.request, res.clone());
                return res;
              })
          });
      })
  );

});


self.addEventListener('activate', function(event) {

  console.log('[serviceWorker]: Actived');
  var whiteList = ['flickr-browser'];

  event.waitUntil(
    caches.keys()
      .then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            if (whiteList.indexOf(cacheName) === -1) {
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(function () {
        console.log('[serviceWorker]: Clients Claims');
        return self.clients.claim();
      })
  );
});
