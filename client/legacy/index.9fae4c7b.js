import{_ as t,a,b as e,c as r,i as n,s,d as o,S as i,e as c,f as l,t as u,g as f,h as p,j as d,k as h,l as m,m as v,n as g,o as x,p as $,q as w,r as b,u as E,v as y,w as D,x as P,y as T,z as A,A as I,B as j,C as q,D as V,E as k,F as S,G as R,H as C,I as H,J as L,K as N}from"./client.e1b058ee.js";import{B}from"./ButtonLinkArrow.3b3552fc.js";import{P as J}from"./PageTransitionWrapper.46a26cf2.js";import{P as W}from"./ProjectCard.4ea927f4.js";import"./TagList.c01b298a.js";function G(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=a(t);if(r){var o=a(this).constructor;n=Reflect.construct(s,arguments,o)}else n=s.apply(this,arguments);return e(this,n)}}function M(t){var a,e,r,n,s,o,i,y,D,P,T,A,I,j,q,V,k,S,R,C,H,L,N;return{c:function(){a=c("div"),e=c("div"),r=c("header"),n=c("span"),s=l(),o=c("div"),i=l(),y=c("div"),D=l(),P=c("div"),T=l(),A=c("div"),I=c("span"),j=u(t[0]),q=l(),V=c("span"),k=u(t[1]),S=l(),R=c("span"),C=u("|"),this.h()},l:function(c){a=f(c,"DIV",{class:!0});var l=p(a);e=f(l,"DIV",{class:!0});var u=p(e);r=f(u,"HEADER",{class:!0});var v=p(r);n=f(v,"SPAN",{class:!0}),p(n).forEach(d),s=h(v),o=f(v,"DIV",{class:!0}),p(o).forEach(d),i=h(v),y=f(v,"DIV",{class:!0}),p(y).forEach(d),D=h(v),P=f(v,"DIV",{class:!0}),p(P).forEach(d),v.forEach(d),T=h(u),A=f(u,"DIV",{class:!0});var g=p(A);I=f(g,"SPAN",{id:!0,class:!0});var x=p(I);j=m(x,t[0]),x.forEach(d),q=h(g),V=f(g,"SPAN",{id:!0,class:!0});var $=p(V);k=m($,t[1]),$.forEach(d),S=h(g),R=f(g,"SPAN",{class:!0});var w=p(R);C=m(w,"|"),w.forEach(d),g.forEach(d),u.forEach(d),l.forEach(d),this.h()},h:function(){v(n,"class","flex-auto"),v(o,"class","rounded-lg p-1 sm:p-1.5 bg-gray"),v(y,"class","rounded-lg p-1 sm:p-1.5 bg-secondary"),v(P,"class","rounded-lg p-1 sm:p-1.5 bg-danger"),v(r,"class","flex flex-row p-1 sm:p-2 gap-2 bg-gray-darkest"),v(I,"id","greeting"),v(I,"class","line"),v(V,"id","name"),v(V,"class","italic text-corporateDark-primary"),v(R,"class",H="cursor "+(t[0].length?"-ml-4":"")+" svelte-1eduuk4"),v(A,"class","content font-code bg-gray-dark h-full md:h-40 p-4 bg-opacity-70"),v(e,"class","console text-xl rounded w-full sm:w-80 lg:w-96 overflow-hidden"),v(a,"class","component-conatiner relative")},m:function(c,l){g(c,a,l),x(a,e),x(e,r),x(r,n),x(r,s),x(r,o),x(r,i),x(r,y),x(r,D),x(r,P),x(e,T),x(e,A),x(A,I),x(I,j),x(A,q),x(A,V),x(V,k),x(A,S),x(A,R),x(R,C),L||(N=$(y,"click",t[2]),L=!0)},p:function(t,a){var e=w(a,1)[0];1&e&&b(j,t[0]),2&e&&b(k,t[1]),1&e&&H!==(H="cursor "+(t[0].length?"-ml-4":"")+" svelte-1eduuk4")&&v(R,"class",H)},i:E,o:E,d:function(t){t&&d(a),L=!1,N()}}}var _="Hi there, I'm José :)";function z(t,a,e){var r,n;y((function(){setTimeout((function(){o(100)}),500)}));var s=0;function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:50;s<9?(e(0,r+=_[s]),setTimeout(o,t)):9===s?(e(0,r+=_[s]),setTimeout((function(){return o()}),1e3)):s<_.length&&(e(1,n+=_[s]),setTimeout(o,t)),s++}return e(0,r=""),e(1,n=""),[r,n,function(){e(1,n=""),e(0,r=""),s=0,setTimeout((function(){return o(s)}),1e3)}]}var K=function(a){t(c,i);var e=G(c);function c(t){var a;return r(this,c),a=e.call(this),n(o(a),t,z,M,s,{}),a}return c}();function O(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,s=a(t);if(r){var o=a(this).constructor;n=Reflect.construct(s,arguments,o)}else n=s.apply(this,arguments);return e(this,n)}}function F(t,a,e){var r=t.slice();return r[1]=a[e],r}function Q(t){var a;return{c:function(){a=u("View all")},l:function(t){a=m(t,"View all")},m:function(t,e){g(t,a,e)},d:function(t){t&&d(a)}}}function U(t){for(var a,e,r,n,s=[t[1]],o={},i=0;i<s.length;i+=1)o=N(o,s[i]);return e=new W({props:o}),{c:function(){a=c("div"),D(e.$$.fragment),r=l(),this.h()},l:function(t){a=f(t,"DIV",{style:!0,class:!0});var n=p(a);T(e.$$.fragment,n),r=h(n),n.forEach(d),this.h()},h:function(){V(a,"flex","1 1 360px"),v(a,"class","project-card-container w-full ")},m:function(t,s){g(t,a,s),A(e,a,null),x(a,r),n=!0},p:function(t,a){var r=1&a?k(s,[S(t[1])]):{};e.$set(r)},i:function(t){n||(I(e.$$.fragment,t),n=!0)},o:function(t){j(e.$$.fragment,t),n=!1},d:function(t){t&&d(a),q(e)}}}function X(t){var a;return{c:function(){a=u("All Projects")},l:function(t){a=m(t,"All Projects")},m:function(t,e){g(t,a,e)},d:function(t){t&&d(a)}}}function Y(t){var a,e,r,n,s,o,i,$,w,b,E,y,P,V,k,S,N,J,W,G,M,_,z,O,Y,Z,tt,at,et,rt,nt,st,ot,it,ct,lt,ut,ft,pt,dt,ht,mt,vt,gt,xt;n=new K({}),ut=new B({props:{url:"projects",$$slots:{default:[Q]},$$scope:{ctx:t}}});for(var $t=t[0],wt=[],bt=0;bt<$t.length;bt+=1)wt[bt]=U(F(t,$t,bt));var Et=function(t){return j(wt[t],1,1,(function(){wt[t]=null}))};return gt=new B({props:{url:"projects",$$slots:{default:[X]},$$scope:{ctx:t}}}),{c:function(){a=c("div"),e=c("div"),r=c("div"),D(n.$$.fragment),s=l(),o=c("div"),i=c("h1"),$=u("Striving for awesome\n\t\t\t\t\t"),w=c("span"),b=u("web apps"),E=l(),y=c("p"),P=u("I am a Software Developer with focus in Web and Cross Platform apps.\n\t\t\t\t\tPlus a sprincle of design, drawing and painting."),V=l(),k=c("div"),S=c("a"),N=R("svg"),J=R("title"),W=u("GitHub"),G=R("path"),M=l(),_=c("a"),z=R("svg"),O=R("title"),Y=u("Twitter"),Z=R("path"),tt=l(),at=c("hr"),et=l(),rt=c("section"),nt=c("header"),st=c("h3"),ot=u("Projects"),it=l(),ct=c("span"),lt=l(),D(ut.$$.fragment),ft=l(),pt=c("div");for(var t=0;t<wt.length;t+=1)wt[t].c();dt=l(),ht=c("div"),mt=c("span"),vt=l(),D(gt.$$.fragment),this.h()},l:function(t){a=f(t,"DIV",{class:!0});var c=p(a);e=f(c,"DIV",{class:!0});var l=p(e);r=f(l,"DIV",{class:!0});var u=p(r);T(n.$$.fragment,u),u.forEach(d),s=h(l),o=f(l,"DIV",{class:!0});var v=p(o);i=f(v,"H1",{class:!0});var g=p(i);$=m(g,"Striving for awesome\n\t\t\t\t\t"),w=f(g,"SPAN",{class:!0});var x=p(w);b=m(x,"web apps"),x.forEach(d),g.forEach(d),E=h(v),y=f(v,"P",{class:!0});var D=p(y);P=m(D,"I am a Software Developer with focus in Web and Cross Platform apps.\n\t\t\t\t\tPlus a sprincle of design, drawing and painting."),D.forEach(d),V=h(v),k=f(v,"DIV",{class:!0});var A=p(k);S=f(A,"A",{"aria-label":!0,target:!0,rel:!0,class:!0,href:!0,"data-tippy-content":!0});var I=p(S);N=f(I,"svg",{class:!0,role:!0,viewBox:!0,xmlns:!0},1);var j=p(N);J=f(j,"title",{},1);var q=p(J);W=m(q,"GitHub"),q.forEach(d),G=f(j,"path",{d:!0},1),p(G).forEach(d),j.forEach(d),I.forEach(d),M=h(A),_=f(A,"A",{"aria-label":!0,target:!0,rel:!0,class:!0,href:!0,"data-tippy-content":!0});var R=p(_);z=f(R,"svg",{class:!0,role:!0,viewBox:!0,xmlns:!0},1);var C=p(z);O=f(C,"title",{},1);var H=p(O);Y=m(H,"Twitter"),H.forEach(d),Z=f(C,"path",{d:!0},1),p(Z).forEach(d),C.forEach(d),R.forEach(d),A.forEach(d),v.forEach(d),l.forEach(d),tt=h(c),at=f(c,"HR",{class:!0}),et=h(c),rt=f(c,"SECTION",{id:!0,class:!0});var L=p(rt);nt=f(L,"HEADER",{class:!0});var B=p(nt);st=f(B,"H3",{class:!0});var K=p(st);ot=m(K,"Projects"),K.forEach(d),it=h(B),ct=f(B,"SPAN",{class:!0}),p(ct).forEach(d),lt=h(B),T(ut.$$.fragment,B),B.forEach(d),ft=h(L),pt=f(L,"DIV",{class:!0});for(var F=p(pt),Q=0;Q<wt.length;Q+=1)wt[Q].l(F);F.forEach(d),dt=h(L),ht=f(L,"DIV",{class:!0});var U=p(ht);mt=f(U,"SPAN",{class:!0}),p(mt).forEach(d),vt=h(U),T(gt.$$.fragment,U),U.forEach(d),L.forEach(d),c.forEach(d),this.h()},h:function(){v(r,"class","pb-4 sm:pr-8 md:pr-11"),v(w,"class","text-corporateDark-primary"),v(i,"class","text-5xl md:text-7xl leading-tight space-y-1 pb-4 font-serif font-black"),v(y,"class","py-4 text-xl"),v(G,"d","M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"),v(N,"class","h-7 fill-current text-gray-600 hover:text-green-700"),v(N,"role","img"),v(N,"viewBox","0 0 24 24"),v(N,"xmlns","http://www.w3.org/2000/svg"),v(S,"aria-label","Github @Trindade7"),v(S,"target","_blank"),v(S,"rel","noopener"),v(S,"class","link p-1 hover:text-corporateDark-primary transition-colors"),v(S,"href","https://github.com/Trindade7"),v(S,"data-tippy-content","@Trindade7"),v(Z,"d","M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"),v(z,"class","h-7 fill-current text-gray-600 hover:text-green-700"),v(z,"role","img"),v(z,"viewBox","0 0 24 24"),v(z,"xmlns","http://www.w3.org/2000/svg"),v(_,"aria-label","Twitter @Trindade7Jose"),v(_,"target","_blank"),v(_,"rel","noopener"),v(_,"class","link p-1 hover:text-corporateDark-primary transition-colors"),v(_,"href","https://twitter.com/Trindade7Jose"),v(_,"data-tippy-content","@Trindade7Jose"),v(k,"class","mt-6 w-4/5 lg:w-full flex flex-row gap-4 items-center"),v(o,"class","info md:pt-0"),v(e,"class","intro flex flex-col sm:flex-row pb-20"),v(at,"class"," text-gray"),v(st,"class","text-2xl font-bold "),v(ct,"class","flex-auto"),v(nt,"class","flex flex-row py-4"),v(pt,"class","projects py-8 flex flex-row flex-wrap gap-4"),v(mt,"class","flex-auto"),v(ht,"class","pb-4 flex flex-row"),v(rt,"id","projects"),v(rt,"class","projects-container pb-16"),v(a,"class","flex flex-col mx-auto px-4 pt-9 md:pt-16")},m:function(t,c){g(t,a,c),x(a,e),x(e,r),A(n,r,null),x(e,s),x(e,o),x(o,i),x(i,$),x(i,w),x(w,b),x(o,E),x(o,y),x(y,P),x(o,V),x(o,k),x(k,S),x(S,N),x(N,J),x(J,W),x(N,G),x(k,M),x(k,_),x(_,z),x(z,O),x(O,Y),x(z,Z),x(a,tt),x(a,at),x(a,et),x(a,rt),x(rt,nt),x(nt,st),x(st,ot),x(nt,it),x(nt,ct),x(nt,lt),A(ut,nt,null),x(rt,ft),x(rt,pt);for(var l=0;l<wt.length;l+=1)wt[l].m(pt,null);x(rt,dt),x(rt,ht),x(ht,mt),x(ht,vt),A(gt,ht,null),xt=!0},p:function(t,a){var e={};if(16&a&&(e.$$scope={dirty:a,ctx:t}),ut.$set(e),1&a){var r;for($t=t[0],r=0;r<$t.length;r+=1){var n=F(t,$t,r);wt[r]?(wt[r].p(n,a),I(wt[r],1)):(wt[r]=U(n),wt[r].c(),I(wt[r],1),wt[r].m(pt,null))}for(C(),r=$t.length;r<wt.length;r+=1)Et(r);H()}var s={};16&a&&(s.$$scope={dirty:a,ctx:t}),gt.$set(s)},i:function(t){if(!xt){I(n.$$.fragment,t),I(ut.$$.fragment,t);for(var a=0;a<$t.length;a+=1)I(wt[a]);I(gt.$$.fragment,t),xt=!0}},o:function(t){j(n.$$.fragment,t),j(ut.$$.fragment,t),wt=wt.filter(Boolean);for(var a=0;a<wt.length;a+=1)j(wt[a]);j(gt.$$.fragment,t),xt=!1},d:function(t){t&&d(a),q(n),q(ut),L(wt,t),q(gt)}}}function Z(t){var a,e,r,n;return r=new J({props:{$$slots:{default:[Y]},$$scope:{ctx:t}}}),{c:function(){a=c("meta"),e=l(),D(r.$$.fragment),this.h()},l:function(t){var n=P('[data-svelte="svelte-eiu027"]',document.head);a=f(n,"META",{name:!0,content:!0}),n.forEach(d),e=h(t),T(r.$$.fragment,t),this.h()},h:function(){document.title="José Tridade - Web Developer",v(a,"name","description"),v(a,"content","José Tridade is a Developer with focus in Web and Cross Platform apps. Plus a sprincle of design, drawing and painting currently based in Luanda, Angola")},m:function(t,s){x(document.head,a),g(t,e,s),A(r,t,s),n=!0},p:function(t,a){var e=w(a,1)[0],n={};16&e&&(n.$$scope={dirty:e,ctx:t}),r.$set(n)},i:function(t){n||(I(r.$$.fragment,t),n=!0)},o:function(t){j(r.$$.fragment,t),n=!1},d:function(t){d(a),t&&d(e),q(r,t)}}}function tt(t){return[[{title:"Project name here",description:"Aute eu duis ut eu ipsum officia eiusmod elit ad anim incididunt aute et. Culpa amet velit in culpa amet pariatur non non sit. Tempor ex cillum culpa occaecat id. Ad fugiat do laboris Lorem et elit. Velit do magna aliquip cupidatat aliqua ut anim magna et aute esse Lorem. Consequat quis duis elit velit elit in ullamco qui. Qui officia adipisicing reprehenderit cupidatat reprehenderit Lorem non irure cupidatat occaecat proident.",mainTool:"python",tags:["ts","firebase","other"]},{title:"Hello world",description:"Laborum aliquip est Lorem reprehenderit anim adipisicing. Non elit reprehenderit id labore labore eu aute. Ut reprehenderit excepteur anim id commodo consequat. Ad nostrud esse deserunt qui labore ipsum incididunt laboris.",mainTool:"nodejs",tags:["css","firebase"]},{title:"Our Space",description:"Adipisicing cupidatat aliquip nulla ut anim laboris labore aliqua adipisicing elit.",mainTool:"angular",tags:["sass","firebase"]},{title:"Kuimba",description:"Reprehenderit sunt excepteur id aliqua sint ad occaecat nisi ut id consequat labore qui. Amet dolore consequat fugiat ex consequat ullamco exercitation Lorem enim proident laboris. Dolor laboris dolor culpa magna elit ut veniam consectetur. Irure voluptate aute aliqua quis excepteur.",mainTool:"angular",tags:["sass","firebase","wasm","rust"]}]]}var at=function(a){t(c,i);var e=O(c);function c(t){var a;return r(this,c),a=e.call(this),n(o(a),t,tt,Z,s,{}),a}return c}();export default at;
