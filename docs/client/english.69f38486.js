import{S as e,i as t,s as r,h as s,t as a,p as n,c as i,b as l,j as o,d as c,q as f,e as h,k as u,f as m,g as d,m as p,n as g,J as v,l as E,u as $,v as y,w,o as b,r as T,x as F,y as I,C as k,z as j,A as M,K as D,L as q,M as A,E as V,B as C,H as U}from"./client.1d8867e4.js";import{d as N}from"./dayjs.min.aa792f10.js";import{M as O,c as R}from"./count_films.24d33929.js";import{P as x}from"./PictoAge.aa3926f5.js";import{f as H}from"./format.7c0a9964.js";import{u as B}from"./update_pick_status.88b97c4a.js";function L(e){let t,r,E,$,y,w,b,T;return{c(){t=s("div"),r=s("button"),E=a("Film title"),$=n(),y=s("button"),w=a("Recently added"),this.h()},l(e){t=i(e,"DIV",{class:!0});var s=l(t);r=i(s,"BUTTON",{class:!0});var a=l(r);E=o(a,"Film title"),a.forEach(c),$=f(s),y=i(s,"BUTTON",{class:!0});var n=l(y);w=o(n,"Recently added"),n.forEach(c),s.forEach(c),this.h()},h(){h(r,"class","svelte-12rtm69"),u(r,"on","title"===e[0]),h(y,"class","svelte-12rtm69"),u(y,"on","recent"===e[0]),h(t,"class","svelte-12rtm69")},m(s,a){m(s,t,a),d(t,r),d(r,E),d(t,$),d(t,y),d(y,w),b||(T=[p(r,"click",e[1]),p(y,"click",e[2])],b=!0)},p(e,[t]){1&t&&u(r,"on","title"===e[0]),1&t&&u(y,"on","recent"===e[0])},i:g,o:g,d(e){e&&c(t),b=!1,v(T)}}}function P(e,t,r){let{key:s="recent"}=t;return e.$$set=e=>{"key"in e&&r(0,s=e.key)},e.$$.update=()=>{1&e.$$.dirty&&r(0,s)},[s,()=>{r(0,s="title")},()=>{r(0,s="recent")}]}class S extends e{constructor(e){super(),t(this,e,P,L,r,{key:0})}}function z(e,t,r){const s=e.slice();return s[7]=t[r],s}function _(e){let t,r,s=`${H.artTitre(e[7].artFr,e[7].titreFr)}${H.beforeAfterStr("string"==typeof e[7].sousTitreFr?e[7].sousTitreFr[0]===e[7].sousTitreFr[0].toUpperCase()?".?!".indexOf(e[7].titreFr.slice(-1))>-1?" ":". ":" ":"","",e[7].sousTitreFr)}`;return{c(){r=C(),this.h()},l(e){r=C(),this.h()},h(){t=new U(r)},m(e,a){t.m(s,e,a),m(e,r,a)},p(e,r){4&r&&s!==(s=`${H.artTitre(e[7].artFr,e[7].titreFr)}${H.beforeAfterStr("string"==typeof e[7].sousTitreFr?e[7].sousTitreFr[0]===e[7].sousTitreFr[0].toUpperCase()?".?!".indexOf(e[7].titreFr.slice(-1))>-1?" ":". ":" ":"","",e[7].sousTitreFr)}`)&&t.p(s)},d(e){e&&c(r),e&&t.d()}}}function W(e){let t,r,s=`${H.artTitre(e[7].artEn,e[7].titreEn)}`;return{c(){r=C(),this.h()},l(e){r=C(),this.h()},h(){t=new U(r)},m(e,a){t.m(s,e,a),m(e,r,a)},p(e,r){4&r&&s!==(s=`${H.artTitre(e[7].artEn,e[7].titreEn)}`)&&t.p(s)},d(e){e&&c(r),e&&t.d()}}}function G(e){let t,r,n,f=N(e[7].dateUnpublished).format("MMM, D")+"";return{c(){t=s("div"),r=a("Until\r\n                  "),n=a(f),this.h()},l(e){t=i(e,"DIV",{class:!0});var s=l(t);r=o(s,"Until\r\n                  "),n=o(s,f),s.forEach(c),this.h()},h(){h(t,"class","end")},m(e,s){m(e,t,s),d(t,r),d(t,n)},p(e,t){4&t&&f!==(f=N(e[7].dateUnpublished).format("MMM, D")+"")&&b(n,f)},d(e){e&&c(t)}}}function J(e){let t,r,p,g,v,E,k,j,M,D,q,A,V,C,U,N,O,R,B,L,P,S,z,J,K,Q,X=e[7].duree+"",Y=e[7].realisateurs+"",Z=e[7].annee+"",ee=e[7].en+"";function te(e,t){return e[7].titreEn?W:_}let re=te(e),se=re(e);C=new x({props:{age:e[7].ageMin,size:"20"}});let ae=e[7].dateUnpublished&&G(e);return{c(){t=s("li"),r=s("a"),p=s("div"),g=s("img"),k=n(),j=s("div"),M=a(X),D=n(),q=s("div"),A=s("div"),se.c(),V=n(),$(C.$$.fragment),U=n(),N=s("div"),O=a(Y),R=a(", "),B=a(Z),L=n(),P=s("div"),S=a(ee),z=n(),ae&&ae.c(),K=n(),this.h()},l(e){t=i(e,"LI",{class:!0});var s=l(t);r=i(s,"A",{rel:!0,href:!0});var a=l(r);p=i(a,"DIV",{class:!0});var n=l(p);g=i(n,"IMG",{src:!0,alt:!0}),k=f(n),j=i(n,"DIV",{class:!0});var h=l(j);M=o(h,X),h.forEach(c),n.forEach(c),D=f(a),q=i(a,"DIV",{class:!0});var u=l(q);A=i(u,"DIV",{class:!0});var m=l(A);se.l(m),V=f(m),y(C.$$.fragment,m),m.forEach(c),U=f(u),N=i(u,"DIV",{});var d=l(N);O=o(d,Y),R=o(d,", "),B=o(d,Z),d.forEach(c),L=f(u),P=i(u,"DIV",{class:!0});var v=l(P);S=o(v,ee),v.forEach(c),z=f(u),ae&&ae.l(u),u.forEach(c),a.forEach(c),K=f(s),s.forEach(c),this.h()},h(){g.src!==(v=e[7].image.small)&&h(g,"src",v),h(g,"alt",E=H.artTitre(e[7].artFr,e[7].titreFr)),h(j,"class","duree"),h(p,"class","img-container"),h(A,"class","titre"),h(P,"class","english-reason svelte-1pfh3fq"),h(q,"class","film-info"),h(r,"rel","prefetch"),h(r,"href",J="film/"+e[7].slug+"/"),h(t,"class","film"),u(t,"ispick",1===e[7].status)},m(e,s){m(e,t,s),d(t,r),d(r,p),d(p,g),d(p,k),d(p,j),d(j,M),d(r,D),d(r,q),d(q,A),se.m(A,null),d(A,V),w(C,A,null),d(q,U),d(q,N),d(N,O),d(N,R),d(N,B),d(q,L),d(q,P),d(P,S),d(q,z),ae&&ae.m(q,null),d(t,K),Q=!0},p(e,s){(!Q||4&s&&g.src!==(v=e[7].image.small))&&h(g,"src",v),(!Q||4&s&&E!==(E=H.artTitre(e[7].artFr,e[7].titreFr)))&&h(g,"alt",E),(!Q||4&s)&&X!==(X=e[7].duree+"")&&b(M,X),re===(re=te(e))&&se?se.p(e,s):(se.d(1),se=re(e),se&&(se.c(),se.m(A,V)));const a={};4&s&&(a.age=e[7].ageMin),C.$set(a),(!Q||4&s)&&Y!==(Y=e[7].realisateurs+"")&&b(O,Y),(!Q||4&s)&&Z!==(Z=e[7].annee+"")&&b(B,Z),(!Q||4&s)&&ee!==(ee=e[7].en+"")&&b(S,ee),e[7].dateUnpublished?ae?ae.p(e,s):(ae=G(e),ae.c(),ae.m(q,null)):ae&&(ae.d(1),ae=null),(!Q||4&s&&J!==(J="film/"+e[7].slug+"/"))&&h(r,"href",J),4&s&&u(t,"ispick",1===e[7].status)},i(e){Q||(T(C.$$.fragment,e),Q=!0)},o(e){F(C.$$.fragment,e),Q=!1},d(e){e&&c(t),se.d(),I(C),ae&&ae.d()}}}function K(e){let t,r,u,p,g,v,E,C,U,N,R,x,H,B,L,P,_,W,G,K,Q,X=e[2].length+"";function Y(t){e[4](t)}U=new O({props:{lang:"en",count:e[0]}});let Z={};void 0!==e[1]&&(Z.key=e[1]),_=new S({props:Z}),D.push((()=>q(_,"key",Y)));let ee=e[2],te=[];for(let t=0;t<ee.length;t+=1)te[t]=J(z(e,ee,t));const re=e=>F(te[e],1,1,(()=>{te[e]=null}));return{c(){t=s("meta"),r=s("meta"),u=s("meta"),p=s("meta"),g=n(),v=s("section"),E=s("div"),C=s("h1"),$(U.$$.fragment),N=n(),R=s("article"),x=a("HENRI, Cinémathèque française's free VOD platform, offers a range of rare\r\n      cinematic gems from our film collection or presented in partnership with\r\n      directors, distributors, festivals or fellow archives from around the\r\n      world. We list below\r\n      "),H=s("span"),B=a(X),L=a(" films currently on view\r\n      that can be enjoyed by English-speaking audiences."),P=n(),$(_.$$.fragment),G=n(),K=s("ul");for(let e=0;e<te.length;e+=1)te[e].c();this.h()},l(e){const s=k('[data-svelte="svelte-adnzvm"]',document.head);t=i(s,"META",{property:!0,content:!0}),r=i(s,"META",{property:!0,content:!0}),u=i(s,"META",{property:!0,content:!0}),p=i(s,"META",{property:!0,content:!0}),s.forEach(c),g=f(e),v=i(e,"SECTION",{});var a=l(v);E=i(a,"DIV",{class:!0});var n=l(E);C=i(n,"H1",{class:!0});var h=l(C);y(U.$$.fragment,h),h.forEach(c),N=f(n),R=i(n,"ARTICLE",{class:!0});var m=l(R);x=o(m,"HENRI, Cinémathèque française's free VOD platform, offers a range of rare\r\n      cinematic gems from our film collection or presented in partnership with\r\n      directors, distributors, festivals or fellow archives from around the\r\n      world. We list below\r\n      "),H=i(m,"SPAN",{class:!0});var d=l(H);B=o(d,X),d.forEach(c),L=o(m," films currently on view\r\n      that can be enjoyed by English-speaking audiences."),m.forEach(c),P=f(n),y(_.$$.fragment,n),G=f(n),K=i(n,"UL",{class:!0});var $=l(K);for(let e=0;e<te.length;e+=1)te[e].l($);$.forEach(c),n.forEach(c),a.forEach(c),this.h()},h(){document.title="Films in English - HENRI - La Cinémathèque française",h(t,"property","og:url"),h(t,"content","https://www.cinematheque.fr/henri/english"),h(r,"property","og:title"),h(r,"content","Films in English - HENRI - La Cinémathèque française"),h(u,"property","og:image"),h(u,"content","https://www.cinematheque.fr/henri/english.jpg"),h(p,"property","og:description"),h(p,"content","HENRI, Cinémathèque française's free VOD platform, offers a range of rare cinematic gems from our film collection or presented in partnership with directors, distributors, festivals or fellow archives from around the\r\nworld. And some of them can be enjoyed by English-speaking audiences."),h(C,"class","main-title"),h(H,"class","count svelte-1pfh3fq"),h(R,"class","svelte-1pfh3fq"),h(K,"class","grid"),h(E,"class","container")},m(e,s){d(document.head,t),d(document.head,r),d(document.head,u),d(document.head,p),m(e,g,s),m(e,v,s),d(v,E),d(E,C),w(U,C,null),d(E,N),d(E,R),d(R,x),d(R,H),d(H,B),d(R,L),d(E,P),w(_,E,null),d(E,G),d(E,K);for(let e=0;e<te.length;e+=1)te[e].m(K,null);Q=!0},p(e,[t]){const r={};1&t&&(r.count=e[0]),U.$set(r),(!Q||4&t)&&X!==(X=e[2].length+"")&&b(B,X);const s={};if(!W&&2&t&&(W=!0,s.key=e[1],A((()=>W=!1))),_.$set(s),4&t){let r;for(ee=e[2],r=0;r<ee.length;r+=1){const s=z(e,ee,r);te[r]?(te[r].p(s,t),T(te[r],1)):(te[r]=J(s),te[r].c(),T(te[r],1),te[r].m(K,null))}for(V(),r=ee.length;r<te.length;r+=1)re(r);j()}},i(e){if(!Q){T(U.$$.fragment,e),T(_.$$.fragment,e);for(let e=0;e<ee.length;e+=1)T(te[e]);Q=!0}},o(e){F(U.$$.fragment,e),F(_.$$.fragment,e),te=te.filter(Boolean);for(let e=0;e<te.length;e+=1)F(te[e]);Q=!1},d(e){c(t),c(r),c(u),c(p),e&&c(g),e&&c(v),I(U),I(_),M(te,e)}}}async function Q({params:e,query:t}){let r=await(await this.fetch("count.json")).json(),s=await this.fetch("headers.json");if(200===s.status)return s=await s.json(),{count:r,filmsEn:E(s).map((e=>e.films)).flatten().filter((e=>(1===e.status||2===e.status)&&e.en)).value()};this.error(res.status,data.message)}function X(e,t,r){N.locale("en");let{count:s}=t,{filmsEn:a}=t;a=B(a),s=R(s);let n="recent",i={recent:E(a).orderBy([e=>e.datePublishedEn||e.datePublished,"order"],["asc","desc"]).reverse().value(),title:E(a).orderBy((e=>E.kebabCase(e.titreEn||e.titreFr))).value()},l=o(n);function o(e){return i[e]}return e.$$set=e=>{"count"in e&&r(0,s=e.count),"filmsEn"in e&&r(3,a=e.filmsEn)},e.$$.update=()=>{2&e.$$.dirty&&r(2,l=o(n))},[s,n,l,a,function(e){n=e,r(1,n)}]}export default class extends e{constructor(e){super(),t(this,e,X,K,r,{count:0,filmsEn:3})}}export{Q as preload};
