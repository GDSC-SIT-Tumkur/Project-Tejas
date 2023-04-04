const staticCacheName = 'site-static-v1';
const dynamicCache = 'site-dynamic-v1';
const assets = [
  '/',
  './index.html',
  './js/app.js',
  './js/ui.js',
  './js/materialize.min.js',
  './css/styles.css',
  './css/materialize.min.css',
  './img/dish.png',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  'https://fonts.gstatic.com/s/materialicons/v47/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
  './pages/fallback.html',
  './pages/login.html',
  './pages/signup.html',
];

// cache size limit function
const limitCacheSize = (name, size)=>{
  caches.open(name).then(cache=>{
    cache.keys().then(keys=>{
      if(keys.length>size){
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    })
  })
}

// install event fires when the service worker is changed
self.addEventListener('install', evt => {
  // console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then(cache=>{
      console.log('caching shell assets');
      cache.addAll(assets)
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  // console.log('service worker activated');
  // delete all the old caches
  evt.waitUntil(
    caches.keys().then(keys=>{
      console.log(keys); //
      return Promise.all(keys
        .filter(key=>key !== staticCacheName))
        .map(key=>caches.delete())
    })
  );

});

// fetch event
self.addEventListener('fetch', evt=>{ // this is how we visit a page when the user is offline
  // console.log('fetch event', evt);
  // evt.respondWith(
  //   caches.match(evt.request).then(cacheRes=>{
  //     return cacheRes || fetch(evt.request).then(fetchRes=>{
  //       return caches.open(dynamicCache).then(cache=>{
  //         cache.put(evt.request.url, fetchRes.clone());
  //         limitCacheSize(dynamicCache, 20);
  //         return fetchRes;
  //       })
  //     })
  //   }).catch(()=>{
  //     // this is to check the html pages. Same thing can be done with the images
  //     if(evt.request.url.indexOf('.html')>-1){
  //       caches.match('./pages/fallback.html');
  //     }
  //   })
  // )

  
});

