!function(){"use strict";const e=["client/dayjs_custom_locale_fr.e0eaeeb6.js","client/MainTitle.40182efa.js","client/a-propos.db501efa.js","client/english.30c40e23.js","client/cgu.1d73943d.js","client/index.16556d41.js","client/[slug].ba0bbc07.js","client/client.c9c3312a.js","client/PictoAge.44308a38.js"].concat(["service-worker-index.htm","english.jpg","favicon.png","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff2","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff2","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff2","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff2","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff2","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff","fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff2","fonts/source-serif-pro-v10-latin-300.woff","fonts/source-serif-pro-v10-latin-300.woff2","fonts/source-serif-pro-v10-latin-300italic.woff","fonts/source-serif-pro-v10-latin-300italic.woff2","global.css","logo-192.png","logo-512.png","logo-918x480.jpg","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1614620122313").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1614620122313"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1614620122313").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
