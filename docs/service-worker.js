!function(){"use strict";const e=["client/MainTitle.b2ac87e3.js","client/client.6d43cc31.js","client/a-propos.0080f527.js","client/index.96214665.js","client/[slug].bf3e81b1.js","client/cgu.59636f1c.js","client/client.2a57ce78.js","client/format.a6af0c31.js"].concat(["service-worker-index.html","favicon.png","global.css","logo-192.png","logo-512.png","logo-918x480.jpg","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1589215788729").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1589215788729"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url);c.protocol.startsWith("http")&&(c.hostname===self.location.hostname&&c.port!==self.location.port||(c.host===self.location.host&&t.has(c.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1589215788729").then(async t=>{try{const c=await fetch(e.request);return t.put(e.request,c.clone()),c}catch(c){const n=await t.match(e.request);if(n)return n;throw c}}))))})}();
