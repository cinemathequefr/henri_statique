!function(){"use strict";const e=["client/dayjs_custom_locale_fr.2d3b460c.js","client/MainTitle.bcaa4c3e.js","client/a-propos.d8f83691.js","client/english.fb077754.js","client/cgu.dbb0fda8.js","client/index.413b3f0c.js","client/[slug].9ecba3a0.js","client/client.0cc423b4.js","client/PictoAge.f2dce1c2.js"].concat(["service-worker-index.htm","english.jpg","favicon.png","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff2","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff2","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff2","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff2","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff2","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff2","fonts/source-serif-pro-v10-latin-300.woff","fonts/source-serif-pro-v10-latin-300.woff2","fonts/source-serif-pro-v10-latin-300italic.woff","fonts/source-serif-pro-v10-latin-300italic.woff2","global.css","logo-192.png","logo-512.png","logo-918x480.jpg","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1613940916740").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1613940916740"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1613940916740").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
