const CACHE = 'gestao-lancamentos-pwa-v1';
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  // The Apps Script system stays online and is deliberately not cached.
  // The service worker exists primarily to make the shell installable.
});
