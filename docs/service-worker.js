!function(){"use strict";const e=["client/MainTitle.7ec7faa0.js","client/client.384e5c8b.js","client/a-propos.f434a731.js","client/[slug].44e87e77.js","client/cgu.13ead2b8.js","client/client.a4067767.js","client/index.37f95cd8.js","client/format.492bde03.js"].concat(["service-worker-index.html","favicon.png","global.css","logo-192.png","logo-512.png","logo-918x480.jpg","logo-918x480.png","logo-918x480_.png","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1586603446351").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1586603446351"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1586603446351").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
