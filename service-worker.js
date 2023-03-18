var cacheName = 'pwaTeste+-v1.2';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './js/owl/jquery.min.js',

        './js/owl/owl.carousel.min.js',

        './js/owl/setup.js',

        './style/owl/owl.carousel.min.css',

        './style/owl/owl.theme.default.min.css',

        './img/icon_60.png',
        './img/icon_80.png',
        './img/icon_114.png',
        './img/icon_120.png',
        './img/icon_180.png',
        './img/icon_1024.png',
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});