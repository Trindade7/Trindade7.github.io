import{_ as a,a as t,b as r,c as o,i as s,s as e,d as n,S as c,e as i,t as l,f,w as u,g as d,h as p,l as m,j as h,k as v,y as g,m as x,n as b,o as $,z as y,q as j,r as E,A as w,B as D,C as T,v as k}from"./client.a78ef762.js";import{T as q}from"./TagList.7196a363.js";function L(a){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var s,e=t(a);if(o){var n=t(this).constructor;s=Reflect.construct(e,arguments,n)}else s=e.apply(this,arguments);return r(this,s)}}function P(a){var t,r,o,s,e,n,c,k,L,P,R,A,C,S,I,V,z,B,H,M;return B=new q({props:{tags:a[4]}}),{c:function(){t=i("div"),r=i("small"),o=l(a[2]),e=f(),n=i("h3"),c=i("a"),k=l(a[0]),R=f(),A=i("p"),C=l(a[1]),S=f(),I=i("span"),V=f(),z=i("div"),u(B.$$.fragment),this.h()},l:function(s){t=d(s,"DIV",{class:!0});var i=p(t);r=d(i,"SMALL",{class:!0});var l=p(r);o=m(l,a[2]),l.forEach(h),e=v(i),n=d(i,"H3",{class:!0});var f=p(n);c=d(f,"A",{class:!0,href:!0,rel:!0});var u=p(c);k=m(u,a[0]),u.forEach(h),f.forEach(h),R=v(i),A=d(i,"P",{class:!0});var x=p(A);C=m(x,a[1]),x.forEach(h),S=v(i),I=d(i,"SPAN",{class:!0}),p(I).forEach(h),V=v(i),z=d(i,"DIV",{class:!0});var b=p(z);g(B.$$.fragment,b),b.forEach(h),i.forEach(h),this.h()},h:function(){x(r,"class",s=a[5]+" font-bold uppercase py-1 border-t-2 max-w-max"),x(c,"class",L="hover:underline hover:"+a[5]+" transition-colors"),x(c,"href",P="projects/"+a[3]),x(c,"rel","prefetch"),x(n,"class","text-xl font-bold py-4"),x(A,"class","description line-clamp-4"),x(I,"class","flex-auto"),x(z,"class","tags pt-4"),x(t,"class",H=a[6]+" project-card border-l-4  p-8 rounded bg-corporateDark-dark w-full h-full flex flex-col")},m:function(a,s){b(a,t,s),$(t,r),$(r,o),$(t,e),$(t,n),$(n,c),$(c,k),$(t,R),$(t,A),$(A,C),$(t,S),$(t,I),$(t,V),$(t,z),y(B,z,null),M=!0},p:function(a,e){var n=j(e,1)[0];(!M||4&n)&&E(o,a[2]),(!M||32&n&&s!==(s=a[5]+" font-bold uppercase py-1 border-t-2 max-w-max"))&&x(r,"class",s),(!M||1&n)&&E(k,a[0]),(!M||32&n&&L!==(L="hover:underline hover:"+a[5]+" transition-colors"))&&x(c,"class",L),(!M||8&n&&P!==(P="projects/"+a[3]))&&x(c,"href",P),(!M||2&n)&&E(C,a[1]);var i={};16&n&&(i.tags=a[4]),B.$set(i),(!M||64&n&&H!==(H=a[6]+" project-card border-l-4  p-8 rounded bg-corporateDark-dark w-full h-full flex flex-col"))&&x(t,"class",H)},i:function(a){M||(w(B.$$.fragment,a),M=!0)},o:function(a){D(B.$$.fragment,a),M=!1},d:function(a){a&&h(t),T(B)}}}function R(a,t,r){var o=t.title,s=void 0===o?"Project name here":o,e=t.description,n=void 0===e?"Cillum esse sint ea sunt labore quis dolore dolor mollit minim. Commodo\n    laboris commodo culpa exercitation non enim officia ut sint anim Lorem ex\n    deserunt cupidatat. Culpa officia magna quis magna ullamco do. Laboris enim\n    reprehenderit esse aliquip consequat occaecat commodo.":e,c=t.mainTool,i=void 0===c?"angular":c,l=t.slug,f=void 0===l?"":l,u="",d="";k((function(){r(5,u="text-tools-"+i),r(6,d="border-tools-"+i)}));var p=t.tags,m=void 0===p?[]:p;return a.$$set=function(a){"title"in a&&r(0,s=a.title),"description"in a&&r(1,n=a.description),"mainTool"in a&&r(2,i=a.mainTool),"slug"in a&&r(3,f=a.slug),"tags"in a&&r(4,m=a.tags)},[s,n,i,f,m,u,d]}var A=function(t){a(i,c);var r=L(i);function i(a){var t;return o(this,i),t=r.call(this),s(n(t),a,R,P,e,{title:0,description:1,mainTool:2,slug:3,tags:4}),t}return i}();export{A as P};
