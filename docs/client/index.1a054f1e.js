import{S as e,i as t,s as r,e as s,t as a,a as l,c as n,b as i,d as c,f as o,g as h,h as f,j as u,k as d,l as m,m as p,n as g,o as v,q as E,p as F,r as T,u as I,v as M,w as D,x as A}from"./client.ccff1415.js";import{f as b,a as y,d as $}from"./format.eaaaff95.js";import{M as V}from"./MainTitle.4a08041a.js";function w(e,t,r){const s=e.slice();return s[4]=t[r],s}function q(e,t,r){const s=e.slice();return s[1]=t[r],s}function H(e,t,r){const s=e.slice();return s[1]=t[r],s}function j(e){let t,r,g,v,E=e[1].name+"";return{c(){t=s("a"),r=a(E),g=l(),this.h()},l(e){t=n(e,"A",{href:!0});var s=i(t);r=c(s,E),g=o(s),s.forEach(h),this.h()},h(){f(t,"href",v="#"+e[1].slug),u(t,"archived",e[1].isArchived)},m(e,s){d(e,t,s),m(t,r),m(t,g)},p(e,s){1&s&&E!==(E=e[1].name+"")&&p(r,E),1&s&&v!==(v="#"+e[1].slug)&&f(t,"href",v),1&s&&u(t,"archived",e[1].isArchived)},d(e){e&&h(t)}}}function C(e){let t,r=e[1].header.stub+"";return{c(){t=s("div"),this.h()},l(e){t=n(e,"DIV",{class:!0}),i(t).forEach(h),this.h()},h(){f(t,"class","stub"),u(t,"archived",e[1].isArchived)},m(e,s){d(e,t,s),t.innerHTML=r},p(e,s){1&s&&r!==(r=e[1].header.stub+"")&&(t.innerHTML=r),1&s&&u(t,"archived",e[1].isArchived)},d(e){e&&h(t)}}}function L(e){let t,r,l,o=$(e[4].dateUnpublished).format("D MMM")+"";return{c(){t=s("div"),r=a("Jusqu'au "),l=a(o),this.h()},l(e){t=n(e,"DIV",{class:!0});var s=i(t);r=c(s,"Jusqu'au "),l=c(s,o),s.forEach(h),this.h()},h(){f(t,"class","end")},m(e,s){d(e,t,s),m(t,r),m(t,l)},p(e,t){1&t&&o!==(o=$(e[4].dateUnpublished).format("D MMM")+"")&&p(l,o)},d(e){e&&h(t)}}}function U(e){let t,r;return{c(){t=s("div"),r=a("Film indisponible"),this.h()},l(e){t=n(e,"DIV",{class:!0});var s=i(t);r=c(s,"Film indisponible"),s.forEach(h),this.h()},h(){f(t,"class","end")},m(e,s){d(e,t,s),m(t,r)},p:A,d(e){e&&h(t)}}}function x(e){let t,r,g,v,E,F,T,I,M,D,A,$,V,w,q,H,j,C,x,N,R=e[4].duree+"",k=`${b(e[4].artFr,e[4].titreFr)}${y("string"==typeof e[4].sousTitreFr?e[4].sousTitreFr[0]===e[4].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[4].sousTitreFr)}`,J=e[4].realisateurs+"",O=e[4].annee+"";function S(e,t){return 3===e[4].status?U:e[4].dateUnpublished?L:void 0}let z=S(e),G=z&&z(e);return{c(){t=s("li"),r=s("a"),g=s("div"),v=s("img"),T=l(),I=s("div"),M=a(R),D=l(),A=s("div"),$=s("div"),V=l(),w=s("div"),q=a(J),H=a(", "),j=a(O),C=l(),G&&G.c(),N=l(),this.h()},l(e){t=n(e,"LI",{class:!0});var s=i(t);r=n(s,"A",{rel:!0,href:!0});var a=i(r);g=n(a,"DIV",{class:!0});var l=i(g);v=n(l,"IMG",{loading:!0,src:!0,alt:!0}),T=o(l),I=n(l,"DIV",{class:!0});var f=i(I);M=c(f,R),f.forEach(h),l.forEach(h),D=o(a),A=n(a,"DIV",{class:!0});var u=i(A);$=n(u,"DIV",{class:!0}),i($).forEach(h),V=o(u),w=n(u,"DIV",{});var d=i(w);q=c(d,J),H=c(d,", "),j=c(d,O),d.forEach(h),C=o(u),G&&G.l(u),u.forEach(h),a.forEach(h),N=o(s),s.forEach(h),this.h()},h(){f(v,"loading","lazy"),v.src!==(E=e[4].thumb)&&f(v,"src",E),f(v,"alt",F=b(e[4].artFr,e[4].titreFr)),f(I,"class","duree"),f(g,"class","img-container"),f($,"class","titre"),f(A,"class","film-info"),f(r,"rel","prefetch"),f(r,"href",x="film/"+e[4].slug+"/"),f(t,"class","film"),u(t,"archived",e[4].isArchived)},m(e,s){d(e,t,s),m(t,r),m(r,g),m(g,v),m(g,T),m(g,I),m(I,M),m(r,D),m(r,A),m(A,$),$.innerHTML=k,m(A,V),m(A,w),m(w,q),m(w,H),m(w,j),m(A,C),G&&G.m(A,null),m(t,N)},p(e,s){1&s&&v.src!==(E=e[4].thumb)&&f(v,"src",E),1&s&&F!==(F=b(e[4].artFr,e[4].titreFr))&&f(v,"alt",F),1&s&&R!==(R=e[4].duree+"")&&p(M,R),1&s&&k!==(k=`${b(e[4].artFr,e[4].titreFr)}${y("string"==typeof e[4].sousTitreFr?e[4].sousTitreFr[0]===e[4].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[4].sousTitreFr)}`)&&($.innerHTML=k),1&s&&J!==(J=e[4].realisateurs+"")&&p(q,J),1&s&&O!==(O=e[4].annee+"")&&p(j,O),z===(z=S(e))&&G?G.p(e,s):(G&&G.d(1),G=z&&z(e),G&&(G.c(),G.m(A,null))),1&s&&x!==(x="film/"+e[4].slug+"/")&&f(r,"href",x),1&s&&u(t,"archived",e[4].isArchived)},d(e){e&&h(t),G&&G.d()}}}function N(e){let t,r,v,E,F,T,I,M,D=e[1].name+"",A=e[1].header.stub&&C(e),b=e[1].films,y=[];for(let t=0;t<b.length;t+=1)y[t]=x(w(e,b,t));return{c(){t=s("div"),r=s("h2"),v=a(D),F=l(),A&&A.c(),T=l(),I=s("ul");for(let e=0;e<y.length;e+=1)y[e].c();M=l(),this.h()},l(e){t=n(e,"DIV",{});var s=i(t);r=n(s,"H2",{class:!0,id:!0});var a=i(r);v=c(a,D),a.forEach(h),F=o(s),A&&A.l(s),T=o(s),I=n(s,"UL",{class:!0});var l=i(I);for(let e=0;e<y.length;e+=1)y[e].l(l);l.forEach(h),M=o(s),s.forEach(h),this.h()},h(){f(r,"class","collection"),f(r,"id",E=e[1].slug),u(r,"archived",e[1].isArchived),f(I,"class","grid")},m(e,s){d(e,t,s),m(t,r),m(r,v),m(t,F),A&&A.m(t,null),m(t,T),m(t,I);for(let e=0;e<y.length;e+=1)y[e].m(I,null);m(t,M)},p(e,s){if(1&s&&D!==(D=e[1].name+"")&&p(v,D),1&s&&E!==(E=e[1].slug)&&f(r,"id",E),1&s&&u(r,"archived",e[1].isArchived),e[1].header.stub?A?A.p(e,s):(A=C(e),A.c(),A.m(t,T)):A&&(A.d(1),A=null),1&s){let t;for(b=e[1].films,t=0;t<b.length;t+=1){const r=w(e,b,t);y[t]?y[t].p(r,s):(y[t]=x(r),y[t].c(),y[t].m(I,null))}for(;t<y.length;t+=1)y[t].d(1);y.length=b.length}},d(e){e&&h(t),A&&A.d(),g(y,e)}}}function R(e){let t,r,a,c,u,p,A,b,y,$,w,C;b=new V({});let L=e[0],U=[];for(let t=0;t<L.length;t+=1)U[t]=j(H(e,L,t));let x=e[0],R=[];for(let t=0;t<x.length;t+=1)R[t]=N(q(e,x,t));return{c(){t=s("meta"),r=s("meta"),a=s("meta"),c=s("meta"),u=l(),p=s("section"),A=s("div"),v(b.$$.fragment),y=l(),$=s("div");for(let e=0;e<U.length;e+=1)U[e].c();w=l();for(let e=0;e<R.length;e+=1)R[e].c();this.h()},l(e){const s=E('[data-svelte="svelte-2kporm"]',document.head);t=n(s,"META",{property:!0,content:!0}),r=n(s,"META",{property:!0,content:!0}),a=n(s,"META",{property:!0,content:!0}),c=n(s,"META",{property:!0,content:!0}),s.forEach(h),u=o(e),p=n(e,"SECTION",{});var l=i(p);A=n(l,"DIV",{class:!0});var f=i(A);F(b.$$.fragment,f),y=o(f),$=n(f,"DIV",{class:!0});var d=i($);for(let e=0;e<U.length;e+=1)U[e].l(d);d.forEach(h),w=o(f);for(let e=0;e<R.length;e+=1)R[e].l(f);f.forEach(h),l.forEach(h),this.h()},h(){document.title="\r\n    HENRI : Des films rares de la Cinémathèque française à voir en ligne\r\n  ",f(t,"property","og:url"),f(t,"content","https://www.cinematheque.fr/henri/"),f(r,"property","og:title"),f(r,"content","HENRI - Des films rares de la Cinémathèque française à voir en\r\n    ligne"),f(a,"property","og:image"),f(a,"content","https://www.cinematheque.fr/henri/logo-918x480.jpg"),f(c,"property","og:description"),f(c,"content","HENRI, la plateforme VOD de la Cinémathèque française vous propose\r\n    de découvrir gratuitement en ligne des films rares issus de ses collections."),f($,"class","collections-list"),f(A,"class","container")},m(e,s){m(document.head,t),m(document.head,r),m(document.head,a),m(document.head,c),d(e,u,s),d(e,p,s),m(p,A),T(b,A,null),m(A,y),m(A,$);for(let e=0;e<U.length;e+=1)U[e].m($,null);m(A,w);for(let e=0;e<R.length;e+=1)R[e].m(A,null);C=!0},p(e,[t]){if(1&t){let r;for(L=e[0],r=0;r<L.length;r+=1){const s=H(e,L,r);U[r]?U[r].p(s,t):(U[r]=j(s),U[r].c(),U[r].m($,null))}for(;r<U.length;r+=1)U[r].d(1);U.length=L.length}if(1&t){let r;for(x=e[0],r=0;r<x.length;r+=1){const s=q(e,x,r);R[r]?R[r].p(s,t):(R[r]=N(s),R[r].c(),R[r].m(A,null))}for(;r<R.length;r+=1)R[r].d(1);R.length=x.length}},i(e){C||(I(b.$$.fragment,e),C=!0)},o(e){M(b.$$.fragment,e),C=!1},d(e){h(t),h(r),h(a),h(c),e&&h(u),e&&h(p),D(b),g(U,e),g(R,e)}}}async function k({params:e,query:t}){const r=await this.fetch("collections.json");if(200===r.status)return{collections:await r.json()};this.error(r.status,data.message)}function J(e,t,r){$.locale("fr");let{collections:s}=t;return e.$set=e=>{"collections"in e&&r(0,s=e.collections)},[s]}export default class extends e{constructor(e){super(),t(this,e,J,R,r,{collections:0})}}export{k as preload};
