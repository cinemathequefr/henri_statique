!function(){"use strict";const e=["client/MainTitle.908f4594.js","client/client.be32d8db.js","client/a-propos.f9f9649f.js","client/index.6a0aff6d.js","client/cgu.7ef0c9cd.js","client/[slug].09b20969.js","client/client.a1b8de58.js","client/format.a6af0c31.js"].concat(["service-worker-index.html","favicon.png","global.css","logo-192.png","logo-512.png","logo-918x480.jpg","manifest.json","wheel.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1592224925021").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1592224925021"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1592224925021").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
