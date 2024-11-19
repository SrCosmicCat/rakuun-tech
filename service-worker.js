const CACHE_NAME = 'app-cache-v1';
const urlsToCache = [
  '/', 
  '/index.html',
  '/favicon.ico',
  '/manifest.json',
  '/screenshots/screenshot-1.png',
  '/screenshots/screenshot-2.png',
  '/fonts/Inter.ttf',
  '/fonts/LeagueSpartan.ttf',
  '/static/js/bundle.js', // Ajusta según tu estructura.
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      // Cachear recursos estáticos
      await cache.addAll(urlsToCache);

      // Cachear dinámicamente categorías y productos
      const dynamicResources = [
        'https://rakuun-tech-default-rtdb.firebaseio.com/categorias.json',
        'https://rakuun-tech-default-rtdb.firebaseio.com/productos.json',
      ];

      await Promise.all(
        dynamicResources.map(async (url) => {
          try {
            const response = await fetch(url);
            if (response.ok) {
              const request = new Request(url);
              await cache.put(request, response);
            }
          } catch (error) {
            console.error(`Failed to cache ${url}:`, error);
          }
        })
      );
      console.log('Resources cached successfully');
    })()
  );
});

// Interceptar las solicitudes y servir desde el caché si es posible
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Devuelve la respuesta del caché si existe
      if (cachedResponse) {
        return cachedResponse;
      }

      // Si no está en caché, intenta obtenerla de la red
      return fetch(event.request)
        .then((networkResponse) => {
          // Opcional: Guardar la respuesta en caché para futuras solicitudes
          return caches.open(CACHE_NAME).then((cache) => {
            if (event.request.url.startsWith('https://rakuun-tech-default-rtdb.firebaseio.com')) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          });
        })
        .catch((error) => {
          console.error(`Fetch failed for ${event.request.url}:`, error);
        });
    })
  );
});

// Actualizar el Service Worker
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
