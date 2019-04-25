var CACHE_NAME = 'irma-web-glue-cache';

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll([
          'index.html',
          'irma-web-glue.min.js',
          'irma-web-frontend/irma-web-frontend.min.css',
          'irma-web-frontend/fonts/Roboto/Roboto-Light.ttf',
          'irma-web-frontend/fonts/Roboto/Roboto-LightItalic.ttf'
        ]);
      })
  );
});

self.addEventListener('fetch', function(event) {

  // If this is not a regular GET request, just bypass to network
  if (event.request.method !== 'GET' || event.request.mode === 'cors') {
    return event.respondWith(fetch(event.request));
  }

  // Respond immediately with cached resource
  event.respondWith(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.match(event.request)
          .then(function(response) {
            if (response) {
              console.log("🤖 Service worker: request served from cache: " + event.request.url);
              return response;
            } else {
              // This request is not in the cache, just fall back to network
              console.log("🤖 Service worker: call through to network: " + event.request.url);
              return fetch(event.request);
            }
          });
      })
  );

  // Then update cached version in the background
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        // Is this a cached resource in the first place?
        if (cache.match(event.request)) {
          fetch(event.request).then(function (response) {
            console.log("🤖 Service worker: updated cache for: " + event.request.url);
            cache.put(event.request, response);
          });
        }
      })
  );
});
