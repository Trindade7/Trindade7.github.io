import{S as t,i as e,s,e as o,t as r,a,f as i,g as n,h as l,d as c,c as u,j as p,k as h,l as f,m,q as d,n as g,o as v}from"./client.41ad77be.js";function x(t,e,s){const o=t.slice();return o[1]=e[s],o}function b(t){let e,s,d,g,v,x,b,E,j=t[1].title+"";return{c(){e=o("li"),s=o("a"),d=r(j),v=a(),x=o("p"),b=r("Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis\r\n\t\t\t\t\trepudiandae eum vero officiis ipsa odio praesentium optio maxime\r\n\t\t\t\t\tvoluptates. Tempore eius nemo architecto pariatur numquam accusamus\r\n\t\t\t\t\tvoluptate debitis nesciunt dolores!"),E=a(),this.h()},l(t){e=i(t,"LI",{});var o=n(e);s=i(o,"A",{class:!0,rel:!0,href:!0});var r=n(s);d=l(r,j),r.forEach(c),v=u(o),x=i(o,"P",{class:!0});var a=n(x);b=l(a,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis\r\n\t\t\t\t\trepudiandae eum vero officiis ipsa odio praesentium optio maxime\r\n\t\t\t\t\tvoluptates. Tempore eius nemo architecto pariatur numquam accusamus\r\n\t\t\t\t\tvoluptate debitis nesciunt dolores!"),a.forEach(c),E=u(o),o.forEach(c),this.h()},h(){p(s,"class","text-4xl font-bold font-serif"),p(s,"rel","prefetch"),p(s,"href",g="blog/"+t[1].slug),p(x,"class","py-2")},m(t,o){h(t,e,o),f(e,s),f(s,d),f(e,v),f(e,x),f(x,b),f(e,E)},p(t,e){1&e&&j!==(j=t[1].title+"")&&m(d,j),1&e&&g!==(g="blog/"+t[1].slug)&&p(s,"href",g)},d(t){t&&c(e)}}}function E(t){let e,s,m,E,j,L,q=t[0],y=[];for(let e=0;e<q.length;e+=1)y[e]=b(x(t,q,e));return{c(){e=a(),s=o("div"),m=o("h4"),E=r("experience"),j=a(),L=o("ul");for(let t=0;t<y.length;t+=1)y[t].c();this.h()},l(t){d('[data-svelte="svelte-hfp9t8"]',document.head).forEach(c),e=u(t),s=i(t,"DIV",{class:!0});var o=n(s);m=i(o,"H4",{class:!0});var r=n(m);E=l(r,"experience"),r.forEach(c),j=u(o),L=i(o,"UL",{});var a=n(L);for(let t=0;t<y.length;t+=1)y[t].l(a);a.forEach(c),o.forEach(c),this.h()},h(){document.title="Blog",p(m,"class","font-bold uppercase text-corporateDark-primary py-5"),p(s,"class","posts container p-4 pt-10")},m(t,o){h(t,e,o),h(t,s,o),f(s,m),f(m,E),f(s,j),f(s,L);for(let t=0;t<y.length;t+=1)y[t].m(L,null)},p(t,[e]){if(1&e){let s;for(q=t[0],s=0;s<q.length;s+=1){const o=x(t,q,s);y[s]?y[s].p(o,e):(y[s]=b(o),y[s].c(),y[s].m(L,null))}for(;s<y.length;s+=1)y[s].d(1);y.length=q.length}},i:g,o:g,d(t){t&&c(e),t&&c(s),v(y,t)}}}function j(){return this.fetch("blog.json").then((t=>t.json())).then((t=>({posts:t})))}function L(t,e,s){let{posts:o}=e;return t.$$set=t=>{"posts"in t&&s(0,o=t.posts)},[o]}export default class extends t{constructor(t){super(),e(this,t,L,E,s,{posts:0})}}export{j as preload};
