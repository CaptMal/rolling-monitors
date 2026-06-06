// Service Worker for Rolling Monitors PWA
// Enables offline functionality and fast loading

const CACHE_NAME = 'rolling-monitors-v1';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './parametric.html',
  './synchronous.html',
  './manifest.json',
  './offline.html'
];

// Install event - cache all files
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching files for offline use');
      return cache.addAll(FILES_TO_CACHE).catch(err => {
        console.log('Some files could not be cached:', err);
        // Don't fail installation if some files can't be cached
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(response => {
      // Serve from cache if available
      if (response) {
        return response;
      }

      // Otherwise fetch from network
      return fetch(event.request).then(response => {
        // Don't cache non-successful responses
        if (!response || response.status !== 200 || response.type === 'basic') {
          return response;
        }

        // Clone the response
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });

        return response;
      }).catch(() => {
        // Offline fallback
        if (event.request.destination === 'document') {
          return caches.match('./offline.html');
        }
      });
    })
  );
});

// Background sync for observation logs
self.addEventListener('sync', event => {
  if (event.tag === 'sync-logs') {
    event.waitUntil(syncLogs());
  }
});

async function syncLogs() {
  // Sync any pending observations when connection restored
  console.log('Syncing observation logs...');
}

// Message handler for updating cache
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
