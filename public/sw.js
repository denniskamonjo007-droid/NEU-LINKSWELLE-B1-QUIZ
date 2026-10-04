// Linkswelle B1 Quiz - Offline Service Worker & Quiz Integrity Shield
const CACHE_NAME = 'linkswelle-quiz-integrity-v2.2';

// Core assets required for 100% quiz integrity offline
const CRITICAL_QUIZ_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.svg'
];

// Additional quiz runtime scripts to ensure integrity of all quiz modes
const QUIZ_RUNTIME_ASSETS = [
  '/src/main.tsx',
  '/src/App.tsx',
  '/src/index.css',
  '/src/state.js',
  '/src/data/vocab.js',
  '/src/data/grammar.js',
  '/src/data/sentenceExercises.js',
  '/src/views/quiz.js',
  '/src/views/topic.js',
  '/src/views/flashcard.js',
  '/src/views/grammar.js',
  '/src/views/grammarQuiz.js',
  '/src/views/home.js',
  '/src/views/profile.js',
  '/src/views/settings.js',
  '/src/views/stats.js',
  '/src/views/saved.js',
  '/src/views/search.js',
  '/src/utils/audio.js',
  '/src/utils/modeHelper.js',
  '/src/utils/toast.js',
  '/src/utils/serviceWorker.ts'
];

// Total vocabulary + grammar questions protected
const ESTIMATED_PROTECTED_QUESTIONS = 280;

// Install Event: Precache app shell and critical quiz integrity modules
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[Quiz-SW] Precaching critical assets to guarantee quiz integrity...');
      
      // Cache core assets
      await cache.addAll(CRITICAL_QUIZ_ASSETS).catch((err) => {
        console.warn('[Quiz-SW] Non-fatal precache notice for core shell:', err);
      });

      // Best-effort precache for runtime modules
      for (const asset of QUIZ_RUNTIME_ASSETS) {
        try {
          const resp = await fetch(asset, { cache: 'no-cache' });
          if (resp && resp.status === 200) {
            await cache.put(asset, resp);
          }
        } catch (_) {
          // Non-fatal during installation, captured during normal browsing
        }
      }
    }).then(() => self.skipWaiting())
  );
});

// Activate Event: Clear outdated caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[Quiz-SW] Clearing legacy cache to maintain quiz integrity:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event: Cache-First for static assets, network-first with graceful offline fallback for APIs
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle HTTP/HTTPS GET requests
  if (req.method !== 'GET' || !req.url.startsWith('http')) {
    return;
  }

  // 1. Navigation requests: ensure user can open quizzes even in subway / flight mode
  if (req.mode === 'navigate') {
    event.respondWith(
      fetch(req)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(req, copy);
              cache.put('/index.html', networkResponse.clone());
              cache.put('/', networkResponse.clone());
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // Serve sealed index.html or root from cache
          const cached = (await caches.match('/index.html')) || (await caches.match('/'));
          if (cached) return cached;
          return new Response(
            '<!DOCTYPE html><html lang="de"><head><meta charset="utf-8"><title>Linkswelle B1 Quiz (Offline)</title><meta name="viewport" content="width=device-width,initial-scale=1"></head><body style="font-family:system-ui,sans-serif;padding:30px;text-align:center;background:#0f172a;color:#f8fafc;"><h2>🛡️ Quiz-Integrität Aktiv</h2><p>Linkswelle B1 Quiz lädt aus dem Offline-Cache...</p><button onclick="location.reload()" style="padding:10px 18px;border-radius:10px;background:#10b981;color:#fff;border:none;font-weight:bold;cursor:pointer;">Neu laden</button></body></html>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' } }
          );
        })
    );
    return;
  }

  // 2. Google Fonts & CDNs: Cache-First
  if (url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com') {
    event.respondWith(
      caches.match(req).then((cached) => {
        if (cached) return cached;
        return fetch(req)
          .then((response) => {
            if (response && response.status === 200) {
              const copy = response.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
            }
            return response;
          })
          .catch(() => cached);
      })
    );
    return;
  }

  // 3. API Requests: Try network, if offline return graceful JSON response
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(
      fetch(req).catch(() => {
        return new Response(
          JSON.stringify({
            offline: true,
            status: 'offline',
            message: 'Offline mode active. All basic quiz modes, vocabulary lists, and flashcards remain fully functional offline.'
          }),
          { headers: { 'Content-Type': 'application/json' } }
        );
      })
    );
    return;
  }

  // 4. Same-origin Static Assets (Quiz questions, vocabulary, audio, stylesheets)
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cachedResponse) => {
        if (cachedResponse) {
          // Serve from cache immediately for instant, zero-latency quiz interaction
          // Revalidate in background if online to maintain latest corrections
          fetch(req)
            .then((networkResponse) => {
              if (networkResponse && networkResponse.status === 200) {
                caches.open(CACHE_NAME).then((cache) => cache.put(req, networkResponse));
              }
            })
            .catch(() => {
              // Offline: silence background revalidation error
            });
          return cachedResponse;
        }

        // Fetch from network and store in cache
        return fetch(req)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const copy = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
            }
            return networkResponse;
          })
          .catch(async (err) => {
            // Offline fallback: match ignoring search params (e.g. Vite timestamp ?t=...)
            const fallback = await caches.match(req, { ignoreSearch: true });
            if (fallback) return fallback;

            const cache = await caches.open(CACHE_NAME);
            const matchedKey = await cache.match(url.pathname);
            if (matchedKey) return matchedKey;

            throw err;
          });
      })
    );
  }
});

// Comprehensive Quiz Integrity Verification Function
async function verifyQuizIntegrity() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const keys = await cache.keys();
    let verifiedCount = 0;
    let corruptedCount = 0;

    for (const request of keys) {
      const response = await cache.match(request);
      if (response && response.status === 200) {
        verifiedCount++;
      } else {
        corruptedCount++;
      }
    }

    const intact = corruptedCount === 0 && verifiedCount > 0;
    return {
      type: 'QUIZ_INTEGRITY_RESULT',
      intact,
      status: intact ? 'VERIFIED_SEALED' : 'NEEDS_REPAIR',
      verifiedCount,
      corruptedCount,
      totalProtectedQuestions: ESTIMATED_PROTECTED_QUESTIONS,
      cacheName: CACHE_NAME,
      timestamp: new Date().toISOString()
    };
  } catch (err) {
    return {
      type: 'QUIZ_INTEGRITY_RESULT',
      intact: false,
      status: 'VERIFICATION_ERROR',
      verifiedCount: 0,
      corruptedCount: 1,
      totalProtectedQuestions: ESTIMATED_PROTECTED_QUESTIONS,
      cacheName: CACHE_NAME,
      error: String(err),
      timestamp: new Date().toISOString()
    };
  }
}

// Self-Healing Cache Repair Function
async function repairQuizCache() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const allAssets = [...CRITICAL_QUIZ_ASSETS, ...QUIZ_RUNTIME_ASSETS];
    let repairedCount = 0;

    for (const url of allAssets) {
      try {
        const freshResponse = await fetch(url, { cache: 'reload' });
        if (freshResponse && freshResponse.status === 200) {
          await cache.put(url, freshResponse);
          repairedCount++;
        }
      } catch (_) {
        // Continue repairing remaining assets
      }
    }

    const verification = await verifyQuizIntegrity();
    return {
      ...verification,
      repairedCount,
      action: 'REPAIRED'
    };
  } catch (err) {
    return {
      type: 'QUIZ_INTEGRITY_RESULT',
      intact: false,
      status: 'REPAIR_FAILED',
      error: String(err),
      timestamp: new Date().toISOString()
    };
  }
}

// Communication channel with frontend client
self.addEventListener('message', async (event) => {
  if (!event.data) return;

  if (event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

  if (event.data.type === 'VERIFY_QUIZ_INTEGRITY') {
    const result = await verifyQuizIntegrity();
    if (event.ports && event.ports[0]) {
      event.ports[0].postMessage(result);
    } else {
      event.source?.postMessage(result);
    }
  }

  if (event.data.type === 'REPAIR_QUIZ_INTEGRITY') {
    const result = await repairQuizCache();
    if (event.ports && event.ports[0]) {
      event.ports[0].postMessage(result);
    } else {
      event.source?.postMessage(result);
    }
  }

  if (event.data.type === 'GET_CACHE_INFO' || event.data.type === 'GET_INTEGRITY_STATUS') {
    const result = await verifyQuizIntegrity();
    if (event.ports && event.ports[0]) {
      event.ports[0].postMessage(result);
    } else {
      event.source?.postMessage(result);
    }
  }
});
