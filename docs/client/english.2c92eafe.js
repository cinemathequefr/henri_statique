import{S as e,i as t,s as r,e as s,t as a,a as n,c as l,b as i,d as o,g as c,f,h,j as u,k as d,l as m,z as p,x as g,A as v,m as E,o as y,q as $,p as b,r as w,u as k,v as F,w as I,n as T,B as D,C as j,D as M,E as V,H as C}from"./client.091b6e0b.js";import{l as U,f as A,d as N,a as q}from"./format.b34ddf96.js";import{M as R}from"./MainTitle.720e7927.js";function x(e){let t,r,E,y,$,b,w,k;return{c(){t=s("div"),r=s("button"),E=a("Film title"),y=n(),$=s("button"),b=a("Recently added"),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=i(t);r=l(s,"BUTTON",{class:!0});var a=i(r);E=o(a,"Film title"),a.forEach(c),y=f(s),$=l(s,"BUTTON",{class:!0});var n=i($);b=o(n,"Recently added"),n.forEach(c),s.forEach(c),this.h()},h(){h(r,"class","svelte-12rtm69"),u(r,"on","title"===e[0]),h($,"class","svelte-12rtm69"),u($,"on","recent"===e[0]),h(t,"class","svelte-12rtm69")},m(s,a){d(s,t,a),m(t,r),m(r,E),m(t,y),m(t,$),m($,b),w||(k=[p(r,"click",e[1]),p($,"click",e[2])],w=!0)},p(e,[t]){1&t&&u(r,"on","title"===e[0]),1&t&&u($,"on","recent"===e[0])},i:g,o:g,d(e){e&&c(t),w=!1,v(k)}}}function H(e,t,r){let{key:s="recent"}=t;return e.$set=e=>{"key"in e&&r(0,s=e.key)},e.$$.update=()=>{1&e.$$.dirty&&r(0,s)},[s,()=>{r(0,s="title")},()=>{r(0,s="recent")}]}class O extends e{constructor(e){super(),t(this,e,H,x,r,{key:0})}}function B(e,t,r){const s=e.slice();return s[6]=t[r],s}function L(e){let t,r,s=`${A(e[6].artFr,e[6].titreFr)}${q("string"==typeof e[6].sousTitreFr?e[6].sousTitreFr[0]===e[6].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[6].sousTitreFr)}`;return{c(){r=V(),this.h()},l(e){r=V(),this.h()},h(){t=new C(r)},m(e,a){t.m(s,e,a),d(e,r,a)},p(e,r){2&r&&s!==(s=`${A(e[6].artFr,e[6].titreFr)}${q("string"==typeof e[6].sousTitreFr?e[6].sousTitreFr[0]===e[6].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[6].sousTitreFr)}`)&&t.p(s)},d(e){e&&c(r),e&&t.d()}}}function S(e){let t,r,s=""+A(e[6].artEn,e[6].titreEn);return{c(){r=V(),this.h()},l(e){r=V(),this.h()},h(){t=new C(r)},m(e,a){t.m(s,e,a),d(e,r,a)},p(e,r){2&r&&s!==(s=""+A(e[6].artEn,e[6].titreEn))&&t.p(s)},d(e){e&&c(r),e&&t.d()}}}function P(e){let t,r,n,f=N(e[6].dateUnpublished).format("MMM, D")+"";return{c(){t=s("div"),r=a("Until\r\n                  "),n=a(f),this.h()},l(e){t=l(e,"DIV",{class:!0});var s=i(t);r=o(s,"Until\r\n                  "),n=o(s,f),s.forEach(c),this.h()},h(){h(t,"class","end")},m(e,s){d(e,t,s),m(t,r),m(t,n)},p(e,t){2&t&&f!==(f=N(e[6].dateUnpublished).format("MMM, D")+"")&&E(n,f)},d(e){e&&c(t)}}}function W(e){let t,r,u,p,g,v,y,$,b,w,k,F,I,T,D,j,M,V,C,U,N,q,R,x=e[6].duree+"",H=e[6].realisateurs+"",O=e[6].annee+"",B=e[6].en+"";function W(e,t){return e[6].titreEn?S:L}let z=W(e),G=z(e),J=e[6].dateUnpublished&&P(e);return{c(){t=s("li"),r=s("a"),u=s("div"),p=s("img"),y=n(),$=s("div"),b=a(x),w=n(),k=s("div"),F=s("div"),G.c(),I=n(),T=s("div"),D=a(H),j=a(", "),M=a(O),V=n(),C=s("div"),U=a(B),N=n(),J&&J.c(),R=n(),this.h()},l(e){t=l(e,"LI",{class:!0});var s=i(t);r=l(s,"A",{rel:!0,href:!0});var a=i(r);u=l(a,"DIV",{class:!0});var n=i(u);p=l(n,"IMG",{src:!0,alt:!0}),y=f(n),$=l(n,"DIV",{class:!0});var h=i($);b=o(h,x),h.forEach(c),n.forEach(c),w=f(a),k=l(a,"DIV",{class:!0});var d=i(k);F=l(d,"DIV",{class:!0});var m=i(F);G.l(m),m.forEach(c),I=f(d),T=l(d,"DIV",{});var g=i(T);D=o(g,H),j=o(g,", "),M=o(g,O),g.forEach(c),V=f(d),C=l(d,"DIV",{class:!0});var v=i(C);U=o(v,B),v.forEach(c),N=f(d),J&&J.l(d),d.forEach(c),a.forEach(c),R=f(s),s.forEach(c),this.h()},h(){p.src!==(g=e[6].thumb)&&h(p,"src",g),h(p,"alt",v=A(e[6].artFr,e[6].titreFr)),h($,"class","duree"),h(u,"class","img-container"),h(F,"class","titre"),h(C,"class","english-reason svelte-ejxa4k"),h(k,"class","film-info"),h(r,"rel","prefetch"),h(r,"href",q="film/"+e[6].slug+"/"),h(t,"class","film")},m(e,s){d(e,t,s),m(t,r),m(r,u),m(u,p),m(u,y),m(u,$),m($,b),m(r,w),m(r,k),m(k,F),G.m(F,null),m(k,I),m(k,T),m(T,D),m(T,j),m(T,M),m(k,V),m(k,C),m(C,U),m(k,N),J&&J.m(k,null),m(t,R)},p(e,t){2&t&&p.src!==(g=e[6].thumb)&&h(p,"src",g),2&t&&v!==(v=A(e[6].artFr,e[6].titreFr))&&h(p,"alt",v),2&t&&x!==(x=e[6].duree+"")&&E(b,x),z===(z=W(e))&&G?G.p(e,t):(G.d(1),G=z(e),G&&(G.c(),G.m(F,null))),2&t&&H!==(H=e[6].realisateurs+"")&&E(D,H),2&t&&O!==(O=e[6].annee+"")&&E(M,O),2&t&&B!==(B=e[6].en+"")&&E(U,B),e[6].dateUnpublished?J?J.p(e,t):(J=P(e),J.c(),J.m(k,null)):J&&(J.d(1),J=null),2&t&&q!==(q="film/"+e[6].slug+"/")&&h(r,"href",q)},d(e){e&&c(t),G.d(),J&&J.d()}}}function z(e){let t,r,u,p,g,v,V,C,U,A,N,q,x,H,L,S,P,z,G,J,K=e[1].length+"";function Q(t){e[3].call(null,t)}C=new R({props:{lang:"en"}});let X={};void 0!==e[0]&&(X.key=e[0]),S=new O({props:X}),D.push(()=>j(S,"key",Q));let Y=e[1],Z=[];for(let t=0;t<Y.length;t+=1)Z[t]=W(B(e,Y,t));return{c(){t=s("meta"),r=s("meta"),u=s("meta"),p=s("meta"),g=n(),v=s("section"),V=s("div"),y(C.$$.fragment),U=n(),A=s("article"),N=a("HENRI, Cinémathèque française's free VOD platform, offers a range of rare\r\n      cinematic gems from our film collection or presented in partnership with\r\n      directors, distributors, festivals or fellow archives from around the\r\n      world. We list below\r\n      "),q=s("span"),x=a(K),H=a(" films currently on view\r\n      that can be enjoyed by English-speaking audiences."),L=n(),y(S.$$.fragment),z=n(),G=s("ul");for(let e=0;e<Z.length;e+=1)Z[e].c();this.h()},l(e){const s=$('[data-svelte="svelte-12h4ga3"]',document.head);t=l(s,"META",{property:!0,content:!0}),r=l(s,"META",{property:!0,content:!0}),u=l(s,"META",{property:!0,content:!0}),p=l(s,"META",{property:!0,content:!0}),s.forEach(c),g=f(e),v=l(e,"SECTION",{});var a=i(v);V=l(a,"DIV",{class:!0});var n=i(V);b(C.$$.fragment,n),U=f(n),A=l(n,"ARTICLE",{class:!0});var h=i(A);N=o(h,"HENRI, Cinémathèque française's free VOD platform, offers a range of rare\r\n      cinematic gems from our film collection or presented in partnership with\r\n      directors, distributors, festivals or fellow archives from around the\r\n      world. We list below\r\n      "),q=l(h,"SPAN",{class:!0});var d=i(q);x=o(d,K),d.forEach(c),H=o(h," films currently on view\r\n      that can be enjoyed by English-speaking audiences."),h.forEach(c),L=f(n),b(S.$$.fragment,n),z=f(n),G=l(n,"UL",{class:!0});var m=i(G);for(let e=0;e<Z.length;e+=1)Z[e].l(m);m.forEach(c),n.forEach(c),a.forEach(c),this.h()},h(){document.title="HENRI for English speakers - HENRI - La Cinémathèque française",h(t,"property","og:url"),h(t,"content","https://www.cinematheque.fr/henri/english"),h(r,"property","og:title"),h(r,"content","HENRI for English speakers - La Cinémathèque française"),h(u,"property","og:image"),h(u,"content","https://www.cinematheque.fr/henri/english.jpg"),h(p,"property","og:description"),h(p,"content","HENRI, Cinémathèque française's free VOD platform, offers a range of rare cinematic gems from our film collection or presented in partnership with directors, distributors, festivals or fellow archives from around the\r\nworld. And some of them can be enjoyed by English-speaking audiences."),h(q,"class","count svelte-ejxa4k"),h(A,"class","svelte-ejxa4k"),h(G,"class","grid"),h(V,"class","container")},m(e,s){m(document.head,t),m(document.head,r),m(document.head,u),m(document.head,p),d(e,g,s),d(e,v,s),m(v,V),w(C,V,null),m(V,U),m(V,A),m(A,N),m(A,q),m(q,x),m(A,H),m(V,L),w(S,V,null),m(V,z),m(V,G);for(let e=0;e<Z.length;e+=1)Z[e].m(G,null);J=!0},p(e,[t]){(!J||2&t)&&K!==(K=e[1].length+"")&&E(x,K);const r={};if(!P&&1&t&&(P=!0,r.key=e[0],M(()=>P=!1)),S.$set(r),2&t){let r;for(Y=e[1],r=0;r<Y.length;r+=1){const s=B(e,Y,r);Z[r]?Z[r].p(s,t):(Z[r]=W(s),Z[r].c(),Z[r].m(G,null))}for(;r<Z.length;r+=1)Z[r].d(1);Z.length=Y.length}},i(e){J||(k(C.$$.fragment,e),k(S.$$.fragment,e),J=!0)},o(e){F(C.$$.fragment,e),F(S.$$.fragment,e),J=!1},d(e){c(t),c(r),c(u),c(p),e&&c(g),e&&c(v),I(C),I(S),T(Z,e)}}}async function G({params:e,query:t}){let r=await this.fetch("collections-headers.json");if(200===r.status){r=await r.json();return{filmsEn:U(r).map(e=>e.films).flatten().filter(e=>!e.isArchived&&e.en).value()}}this.error(res.status,data.message)}function J(e,t,r){N.locale("en");let{filmsEn:s}=t,a="recent",n={recent:U(s).orderBy(e=>e.datePublished).reverse().value(),title:U(s).orderBy(e=>U.kebabCase(e.titreEn||e.titreFr)).value()},l=i(a);function i(e){return n[e]}return e.$set=e=>{"filmsEn"in e&&r(2,s=e.filmsEn)},e.$$.update=()=>{1&e.$$.dirty&&r(1,l=i(a))},[a,l,s,function(e){a=e,r(0,a)}]}export default class extends e{constructor(e){super(),t(this,e,J,z,r,{filmsEn:2})}}export{G as preload};