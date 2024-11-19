const CACHE_NAME = 'app-cache-v1';
import { precacheAndRoute } from 'workbox-precaching';

// Precache los recursos definidos automáticamente por el plugin
precacheAndRoute(self.__WB_MANIFEST);

// Recursos adicionales a cachear manualmente
const urlsToCache = [
  '/',
  '/screenshots/screenshot-1.png',
  '/screenshots/screenshot-2.png',
  '/fonts/Inter.ttf',
  '/fonts/LeagueSpartan.ttf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});


// Maneja las solicitudes de red.
self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  console.log('Solicitud:', url);

  // Filtra solicitudes a la API de categorías o productos.
  if (url.includes('rakuun-tech-default-rtdb.firebaseio.com')) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          // Si la respuesta está en caché, retorna la versión almacenada.
          return cachedResponse;
        }

        // Si no está en caché, haz la solicitud a la red.
        return fetch(event.request)
          .then((networkResponse) => {
            // Clona la respuesta porque se consume una sola vez.
            const clonedResponse = networkResponse.clone();

            // Almacena la respuesta en el caché.
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clonedResponse);
              console.log('Respuesta almacenada en caché:', url);
            });

            return networkResponse; // Retorna la respuesta de la red.
          })
          .catch((error) => {
            console.error('Error al intentar obtener la información:', error);
            throw error;
          });
      })
    );
  }
});

// navigator.serviceWorker.ready.then(function(registration) {
//   registration.pushManager.subscribe({userVisibleOnly: true})
//   .then(function(subscription) {
//     console.log('Subscribed for push:', subscription.endpoint);
//   })
//   .catch(function(error) {
//     console.log('Subscription failed:', error);
//   });
// });

// self.addEventListener('push', function(event) {
//   const title = 'New Message';
//   const options = {
//     body: 'Hello, world!',
//   };
// event.waitUntil(self.registration.showNotification(title, options));
// });