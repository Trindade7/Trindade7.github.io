import{S as t,i as s,s as e,e as a,t as l,c as o,b as r,g as n,d as c,h as f,j as h,k as i,m as p,a as u,f as m,n as g,E as d,o as x,p as $,q as v,r as b,u as E,v as D,w,x as y,K as j,z as A,A as L,C as k,D as P,F as S}from"./client.75e3d1e0.js";import{P as M}from"./PageTransitionWrapper.e6575bc9.js";function I(t,s,e){const a=t.slice();return a[8]=s[e],a}function V(t){let s,e,u,m=t[8]+"";return{c(){s=a("small"),e=l("#"),u=l(m),this.h()},l(t){s=o(t,"SMALL",{class:!0});var a=r(s);e=n(a,"#"),u=n(a,m),a.forEach(c),this.h()},h(){f(s,"class","uppercase font-bold")},m(t,a){h(t,s,a),i(s,e),i(s,u)},p(t,s){16&s&&m!==(m=t[8]+"")&&p(u,m)},d(t){t&&c(s)}}}function H(t){let s,e,x,$,v,b,E,D,w,y,j,A,L,k,P,S,M,H,N,z,B,T,W=t[4].slice(1),q=[];for(let s=0;s<W.length;s+=1)q[s]=V(I(t,W,s));return{c(){s=a("div"),e=a("div"),x=a("small"),$=l(t[6]),b=u(),E=a("span"),D=u(),w=a("small"),y=l(t[2]),j=u(),A=a("a"),L=a("h3"),k=l(t[1]),S=u(),M=a("p"),H=l(t[3]),N=u(),z=a("span"),B=u(),T=a("div");for(let t=0;t<q.length;t+=1)q[t].c();this.h()},l(a){s=o(a,"DIV",{class:!0});var l=r(s);e=o(l,"DIV",{class:!0});var f=r(e);x=o(f,"SMALL",{class:!0});var h=r(x);$=n(h,t[6]),h.forEach(c),b=m(f),E=o(f,"SPAN",{class:!0}),r(E).forEach(c),D=m(f),w=o(f,"SMALL",{class:!0});var i=r(w);y=n(i,t[2]),i.forEach(c),f.forEach(c),j=m(l),A=o(l,"A",{href:!0});var p=r(A);L=o(p,"H3",{class:!0});var u=r(L);k=n(u,t[1]),u.forEach(c),p.forEach(c),S=m(l),M=o(l,"P",{class:!0});var g=r(M);H=n(g,t[3]),g.forEach(c),N=m(l),z=o(l,"SPAN",{class:!0}),r(z).forEach(c),B=m(l),T=o(l,"DIV",{class:!0});var d=r(T);for(let t=0;t<q.length;t+=1)q[t].l(d);d.forEach(c),l.forEach(c),this.h()},h(){f(x,"class",v=t[5]+" font-bold uppercase border-t-2 max-w-max"),f(E,"class","flex-auto"),f(w,"class","opacity-70"),f(e,"class","flex flex-row pb-4"),f(L,"class","text-2xl font-serif font-bold hover:text-corporateDark-primary hover:underline focus:text-corporateDark-primary focus:underline transition-colors"),f(A,"href",P="blog/"+t[0]),f(M,"class","description py-4"),f(z,"class","flex-auto"),f(T,"class","tags opacity-70 flex flex-row flex-wrap gap-2 max-w-full"),f(s,"class","project-card py-4 w-full h-full flex flex-col")},m(t,a){h(t,s,a),i(s,e),i(e,x),i(x,$),i(e,b),i(e,E),i(e,D),i(e,w),i(w,y),i(s,j),i(s,A),i(A,L),i(L,k),i(s,S),i(s,M),i(M,H),i(s,N),i(s,z),i(s,B),i(s,T);for(let t=0;t<q.length;t+=1)q[t].m(T,null)},p(t,[s]){if(32&s&&v!==(v=t[5]+" font-bold uppercase border-t-2 max-w-max")&&f(x,"class",v),4&s&&p(y,t[2]),2&s&&p(k,t[1]),1&s&&P!==(P="blog/"+t[0])&&f(A,"href",P),8&s&&p(H,t[3]),16&s){let e;for(W=t[4].slice(1),e=0;e<W.length;e+=1){const a=I(t,W,e);q[e]?q[e].p(a,s):(q[e]=V(a),q[e].c(),q[e].m(T,null))}for(;e<q.length;e+=1)q[e].d(1);q.length=W.length}},i:g,o:g,d(t){t&&c(s),d(q,t)}}}function N(t,s,e){let{slug:a=""}=s,{title:l="Project name here"}=s,{pubDate:o=""}=s,{lead:r=""}=s,{tags:n=[]}=s,c=n[0],f="";return x((()=>{console.log(n),e(5,f="text-tools-"+c)})),t.$$set=t=>{"slug"in t&&e(0,a=t.slug),"title"in t&&e(1,l=t.title),"pubDate"in t&&e(2,o=t.pubDate),"lead"in t&&e(3,r=t.lead),"tags"in t&&e(4,n=t.tags)},[a,l,o,r,n,f,c]}class z extends t{constructor(t){super(),s(this,t,N,H,e,{slug:0,title:1,pubDate:2,lead:3,tags:4})}}function B(t,s,e){const a=t.slice();return a[1]=s[e],a[3]=e,a}function T(t){let s;return{c(){s=a("hr"),this.h()},l(t){s=o(t,"HR",{class:!0}),this.h()},h(){f(s,"class","text-corporateDark-light dark:text-corporateDark-dark")},m(t,e){h(t,s,e)},d(t){t&&c(s)}}}function W(t){let s,e,l,n,i;const p=[t[1]];let g={};for(let t=0;t<p.length;t+=1)g=S(g,p[t]);e=new z({props:g});let d=t[3]!==t[0].length-1&&T();return{c(){s=a("li"),$(e.$$.fragment),l=u(),d&&d.c(),n=j(),this.h()},l(t){s=o(t,"LI",{class:!0});var a=r(s);b(e.$$.fragment,a),a.forEach(c),l=m(t),d&&d.l(t),n=j(),this.h()},h(){f(s,"class","py-4 flex-1")},m(t,a){h(t,s,a),E(e,s,null),h(t,l,a),d&&d.m(t,a),h(t,n,a),i=!0},p(t,s){const a=1&s?A(p,[L(t[1])]):{};e.$set(a),t[3]!==t[0].length-1?d||(d=T(),d.c(),d.m(n.parentNode,n)):d&&(d.d(1),d=null)},i(t){i||(D(e.$$.fragment,t),i=!0)},o(t){w(e.$$.fragment,t),i=!1},d(t){t&&c(s),y(e),t&&c(l),d&&d.d(t),t&&c(n)}}}function q(t){let s,e,p,g,x,$,v=t[0],b=[];for(let s=0;s<v.length;s+=1)b[s]=W(B(t,v,s));const E=t=>w(b[t],1,1,(()=>{b[t]=null}));return{c(){s=a("div"),e=a("h3"),p=l("My posts"),g=u(),x=a("ul");for(let t=0;t<b.length;t+=1)b[t].c();this.h()},l(t){s=o(t,"DIV",{class:!0});var a=r(s);e=o(a,"H3",{class:!0});var l=r(e);p=n(l,"My posts"),l.forEach(c),g=m(a),x=o(a,"UL",{class:!0});var f=r(x);for(let t=0;t<b.length;t+=1)b[t].l(f);f.forEach(c),a.forEach(c),this.h()},h(){f(e,"class","font-serif font-bold text-4xl uppercase py-10"),f(x,"class","sm:flex sm:flex-row sm:flex-wrap sm:gap-6"),f(s,"class","posts p-4 pb-32 m-auto")},m(t,a){h(t,s,a),i(s,e),i(e,p),i(s,g),i(s,x);for(let t=0;t<b.length;t+=1)b[t].m(x,null);$=!0},p(t,s){if(1&s){let e;for(v=t[0],e=0;e<v.length;e+=1){const a=B(t,v,e);b[e]?(b[e].p(a,s),D(b[e],1)):(b[e]=W(a),b[e].c(),D(b[e],1),b[e].m(x,null))}for(k(),e=v.length;e<b.length;e+=1)E(e);P()}},i(t){if(!$){for(let t=0;t<v.length;t+=1)D(b[t]);$=!0}},o(t){b=b.filter(Boolean);for(let t=0;t<b.length;t+=1)w(b[t]);$=!1},d(t){t&&c(s),d(b,t)}}}function C(t){let s,e,l,r;return l=new M({props:{$$slots:{default:[q]},$$scope:{ctx:t}}}),{c(){s=a("meta"),e=u(),$(l.$$.fragment),this.h()},l(t){const a=v('[data-svelte="svelte-yjzi3u"]',document.head);s=o(a,"META",{name:!0,content:!0}),a.forEach(c),e=m(t),b(l.$$.fragment,t),this.h()},h(){f(s,"name","Description"),f(s,"content","Posts about Software development, mostly Web, and mental health"),document.title="Blog"},m(t,a){i(document.head,s),h(t,e,a),E(l,t,a),r=!0},p(t,[s]){const e={};17&s&&(e.$$scope={dirty:s,ctx:t}),l.$set(e)},i(t){r||(D(l.$$.fragment,t),r=!0)},o(t){w(l.$$.fragment,t),r=!1},d(t){c(s),t&&c(e),y(l,t)}}}function F(){return this.fetch("blog.json").then((t=>t.json())).then((t=>({posts:t})))}function K(t,s,e){let{posts:a}=s;return t.$$set=t=>{"posts"in t&&e(0,a=t.posts)},[a]}export default class extends t{constructor(t){super(),s(this,t,K,C,e,{posts:0})}}export{F as preload};