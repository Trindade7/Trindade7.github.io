!function(){"use strict";const e=1613590093788,t=`cache${e}`,n=["/client/client.c888cfc4.js","/client/inject_styles.5607aec6.js","/client/index.db657114.js","/client/PageTransitionWrapper.9bc947ac.js","/client/about.e51b64ff.js","/client/index.7fa6e511.js","/client/[slug].e2c11044.js"].concat(["/service-worker-index.html","/1.png","/desktop.ini","/favicon.ico","/favicon.png","/global.css","/icons/format_paint-24px.svg","/icons/palette-24px.svg","/logo-192.png","/logo-256.png","/logo-512.png","/logo.png","/logo.svg","/main.css","/manifest.json","/tailwind.css"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),o="only-if-cached"===t.request.cache&&!i;!c||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
