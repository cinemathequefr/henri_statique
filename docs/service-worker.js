!function(){"use strict";const e=["client/MainTitle.82e5aa7b.js","client/client.e565ec0c.js","client/a-propos.8bbe1748.js","client/[slug].fd223f09.js","client/cgu.5f2e6d9f.js","client/client.54b281bc.js","client/index.50bd9117.js","client/format.492bde03.js"].concat(["service-worker-index.html","favicon.png","global.css","logo-192.png","logo-512.png","logo-918x480.jpg","logo-918x480.png","logo-918x480_.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1586450980320").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1586450980320"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1586450980320").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
