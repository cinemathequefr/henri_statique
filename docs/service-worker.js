!function(){"use strict";const e=["client/MainTitle.6b950eec.js","client/client.9683cf82.js","client/a-propos.213d2a5b.js","client/index.75c280c2.js","client/[slug].58c5426c.js","client/cgu.270cdddc.js","client/client.b5c746a0.js","client/format.a6af0c31.js"].concat(["service-worker-index.html","favicon.png","global.css","logo-192.png","logo-512.png","logo-918x480.jpg","manifest.json","wheel.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1590511735208").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1590511735208"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1590511735208").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const n=await t.match(e.request);if(n)return n;throw c}}))))})}();
