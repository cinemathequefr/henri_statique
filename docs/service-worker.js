!function(){"use strict";const t=1675234519415,e=`cache${t}`,s=["/client/client.5bf702ff.js","/client/inject_styles.5607aec6.js","/client/index.9915c47a.js","/client/dayjs.min.0e0f2ac1.js","/client/dayjs_custom_locale_fr.f2e8c6b0.js","/client/count_films.86a91bf5.js","/client/PictoAge.7885602c.js","/client/format.478f2351.js","/client/update_pick_status.82df6df0.js","/client/archives_UNUSED_.6f0ab797.js","/client/a-propos.f1d6c5ad.js","/client/english.191f4107.js","/client/[slug].9436ab78.js","/client/cgu.654c7e3f.js"].concat(["/service-worker-index.htm","/favicon.png","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-300italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-600.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-700.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-italic.woff2","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff","/fonts/source-sans-pro-v14-latin-ext_latin_greek_cyrillic-regular.woff2","/fonts/source-serif-pro-v10-latin-300.woff","/fonts/source-serif-pro-v10-latin-300.woff2","/fonts/source-serif-pro-v10-latin-300italic.woff","/fonts/source-serif-pro-v10-latin-300italic.woff2","/global.css","/jlg-918x480.jpg","/jlg.jpg","/logo-192.png","/logo-512.png","/logo-918x480.jpg","/manifest.json"]),n=new Set(s);self.addEventListener("install",(t=>{t.waitUntil(caches.open(e).then((t=>t.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(t=>{t.waitUntil(caches.keys().then((async t=>{for(const s of t)s!==e&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url),i=s.protocol.startsWith("http"),c=s.hostname===self.location.hostname&&s.port!==self.location.port,o=s.host===self.location.host&&n.has(s.pathname),a="only-if-cached"===e.request.cache&&!o;!i||c||a||e.respondWith((async()=>o&&await caches.match(e.request)||async function(e){const s=await caches.open(`offline${t}`);try{const t=await fetch(e);return s.put(e,t.clone()),t}catch(t){const n=await s.match(e);if(n)return n;throw t}}(e.request))())}))}();
