!function(){"use strict";const e=1614577875182,t=`cache${e}`,n=["/client/client.01ab69e3.js","/client/inject_styles.5607aec6.js","/client/index.d45dde80.js","/client/ButtonLinkArrow.1e0a03a0.js","/client/PageTransitionWrapper.e0f0e703.js","/client/ProjectCard.116f4d3a.js","/client/TagList.3281d0df.js","/client/index.b35028bf.js","/client/[slug].45f3cbc9.js","/client/about.1ce8d490.js","/client/index.f1c56afd.js","/client/[slug].004308b9.js"].concat(["/service-worker-index.html","/1.png","/desktop.ini","/favicon.ico","/favicon.png","/icons/format_paint-24px.svg","/icons/palette-24px.svg","/logo-192.png","/logo-256.png","/logo-512.png","/logo.png","/logo.svg","/main.css","/manifest.json","/tailwind.css"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),o="only-if-cached"===t.request.cache&&!i;!c||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
