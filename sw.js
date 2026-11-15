// Dracid's Lists: the pages and data the network first, the last copy when there is none; the posters kept.
// Written by the export (qBit Player's My Lists). To take it out: replace with self.registration.unregister();
var V = 'dl1', PAGES = 'dl-pages-' + V, PICS = 'dl-pics-' + V, KEEP = 400;
var scope = new URL(self.registration.scope);
self.addEventListener('install', function(e) {
self.skipWaiting();
e.waitUntil(caches.open(PAGES).then(function(c) {
return Promise.all(['./', 'calendar', 'search', 'counts.json', 'coming.json', 'whatsnew.json'].map(function(u) { return c.add(u).catch(function() {}); }));
}));
});
self.addEventListener('activate', function(e) {
e.waitUntil(caches.keys().then(function(ks) {
return Promise.all(ks.filter(function(k) { return /^dl-/.test(k) && k !== PAGES && k !== PICS; }).map(function(k) { return caches.delete(k); }));
}).then(function() { return self.clients.claim(); }));
});
self.addEventListener('fetch', function(e) {
var r = e.request;
if (r.method !== 'GET') return;
var u = new URL(r.url);
if (u.origin === scope.origin && u.pathname.indexOf(scope.pathname) === 0) {
e.respondWith(fetch(r).then(function(res) {
if (res && res.ok && res.type === 'basic') { var cp = res.clone(); caches.open(PAGES).then(function(c) { return c.put(r, cp); }).catch(function() {}); }
return res;
}).catch(function() {
return caches.match(r, { ignoreSearch: true }).then(function(m) {
if (r.mode !== 'navigate') return m || Response.error();
return (m ? Promise.resolve(m) : caches.match(scope.href, { ignoreSearch: true })).then(function(h) {
if (!h) return Response.error();
return h.text().then(function(t) {
return new Response(t.replace('<head>', '<head><script>window.DL_COPY=1;<\/script>'), { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
});
});
});
}));
return;
}
if (u.hostname === 'image.tmdb.org') {
e.respondWith(caches.open(PICS).then(function(c) {
return c.match(r.url).then(function(m) {
if (m) return m;
return fetch(r.url, { mode: 'cors', credentials: 'omit' }).then(function(res) {
if (res && res.ok) {
c.put(r.url, res.clone()).then(function() { return c.keys(); }).then(function(ks) {
if (ks.length > KEEP) ks.slice(0, ks.length - KEEP).forEach(function(k) { c.delete(k); });
}).catch(function() {});
}
return res;
}, function() { return fetch(r); });
});
}).catch(function() { return fetch(r); }));
}
});
