!function(){"use strict";const t=1673257347120,e=`cache${t}`,s=["/client/client.dff9945f.js","/client/inject_styles.5607aec6.js","/client/index.c03a8278.js","/client/dayjs.min.c047810c.js","/client/dayjs_custom_locale_fr.1a4bfbc9.js","/client/count_films.88953f8f.js","/client/PictoAge.7f998ef5.js","/client/format.88f78d26.js","/client/update_pick_status.15af75ab.js","/client/archives_UNUSED_.1df2cf1b.js","/client/a-propos.1ebb7fd7.js","/client/english.f1fe0a43.js","/client/[slug].35f3db4f.js","/client/cgu.2e5cb516.js"].concat(["/service-worker-index.htm","/favicon.png","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff2","/fonts/source-serif-pro-v10-latin-300.woff","/fonts/source-serif-pro-v10-latin-300.woff2","/fonts/source-serif-pro-v10-latin-300italic.woff","/fonts/source-serif-pro-v10-latin-300italic.woff2","/global.css","/jlg-918x480.jpg","/jlg.jpg","/logo-192.png","/logo-512.png","/logo-918x480.jpg","/manifest.json"]),n=new Set(s);self.addEventListener("install",(t=>{t.waitUntil(caches.open(e).then((t=>t.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(t=>{t.waitUntil(caches.keys().then((async t=>{for(const s of t)s!==e&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url),i=s.protocol.startsWith("http"),c=s.hostname===self.location.hostname&&s.port!==self.location.port,o=s.host===self.location.host&&n.has(s.pathname),l="only-if-cached"===e.request.cache&&!o;!i||c||l||e.respondWith((async()=>o&&await caches.match(e.request)||async function(e){const s=await caches.open(`offline${t}`);try{const t=await fetch(e);return s.put(e,t.clone()),t}catch(t){const n=await s.match(e);if(n)return n;throw t}}(e.request))())}))}();
