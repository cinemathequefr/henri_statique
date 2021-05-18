import{S as e,i as t,s,e as r,t as l,m as n,E as i,c as a,a as o,b as f,d as u,n as h,h as c,j as m,B as d,D as p,f as g,k as v,o as F}from"./client.ee8e1566.js";import{l as T,f as E}from"./format.2c429d88.js";var L={filterHeaders:function(e,t){return T(e).map((e=>T({}).assign(e,{films:T(e.films).partition((e=>1===e.status||2===e.status)).value()}).value())).map((e=>T({}).assign(e,t?{films:e.films[0]}:{films:e.films[1]}).value())).filter((e=>e.films.length>0)).value()}};function y(e,t,s){const r=e.slice();return r[1]=t[s],r}function b(e,t,s){const r=e.slice();return r[4]=t[s],r}function $(e){let t;return{c(){t=l("Pas de données.")},l(e){t=f(e,"Pas de données.")},m(e,s){c(e,t,s)},p:d,d(e){e&&u(t)}}}function j(e){let t,s=e[0],l=[];for(let t=0;t<s.length;t+=1)l[t]=P(y(e,s,t));return{c(){t=r("ul");for(let e=0;e<l.length;e+=1)l[e].c()},l(e){t=a(e,"UL",{});var s=o(t);for(let e=0;e<l.length;e+=1)l[e].l(s);s.forEach(u)},m(e,s){c(e,t,s);for(let e=0;e<l.length;e+=1)l[e].m(t,null)},p(e,r){if(1&r){let n;for(s=e[0],n=0;n<s.length;n+=1){const i=y(e,s,n);l[n]?l[n].p(i,r):(l[n]=P(i),l[n].c(),l[n].m(t,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=s.length}},d(e){e&&u(t),F(l,e)}}}function H(e){let t,s=e[1].films,l=[];for(let t=0;t<s.length;t+=1)l[t]=x(b(e,s,t));return{c(){t=r("ul");for(let e=0;e<l.length;e+=1)l[e].c()},l(e){t=a(e,"UL",{});var s=o(t);for(let e=0;e<l.length;e+=1)l[e].l(s);s.forEach(u)},m(e,s){c(e,t,s);for(let e=0;e<l.length;e+=1)l[e].m(t,null)},p(e,r){if(1&r){let n;for(s=e[1].films,n=0;n<s.length;n+=1){const i=b(e,s,n);l[n]?l[n].p(i,r):(l[n]=x(i),l[n].c(),l[n].m(t,null))}for(;n<l.length;n+=1)l[n].d(1);l.length=s.length}},d(e){e&&u(t),F(l,e)}}}function x(e){let t,s,l,i,f=`${E.artTitre(e[4].artFr,e[4].titreFr)}${E.beforeAfterStr("string"==typeof e[4].sousTitreFr?e[4].sousTitreFr[0]===e[4].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[4].sousTitreFr)}`;return{c(){t=r("li"),s=r("a"),i=n(),this.h()},l(e){t=a(e,"LI",{});var r=o(t);s=a(r,"A",{href:!0}),o(s).forEach(u),r.forEach(u),i=h(e),this.h()},h(){g(s,"href",l="film/"+e[4].slug)},m(e,r){c(e,t,r),m(t,s),s.innerHTML=f,c(e,i,r)},p(e,t){1&t&&f!==(f=`${E.artTitre(e[4].artFr,e[4].titreFr)}${E.beforeAfterStr("string"==typeof e[4].sousTitreFr?e[4].sousTitreFr[0]===e[4].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[4].sousTitreFr)}`)&&(s.innerHTML=f),1&t&&l!==(l="film/"+e[4].slug)&&g(s,"href",l)},d(e){e&&u(t),e&&u(i)}}}function A(e){let t,s,n,i;return{c(){t=r("li"),s=r("a"),n=l("(Des films de cette section sont actuellement visibles.)"),this.h()},l(e){t=a(e,"LI",{style:!0});var r=o(t);s=a(r,"A",{href:!0});var l=o(s);n=f(l,"(Des films de cette section sont actuellement visibles.)"),l.forEach(u),r.forEach(u),this.h()},h(){g(s,"href",i="../#"+e[1].slug),p(t,"list-style-type","none")},m(e,r){c(e,t,r),m(t,s),m(s,n)},p(e,t){1&t&&i!==(i="../#"+e[1].slug)&&g(s,"href",i)},d(e){e&&u(t)}}}function P(e){let t,s,d,F,T,E,L=e[1].section+"",y=e[1].films&&H(e),b=!!e[1].hasPublishedFilms&&A(e);return{c(){t=r("li"),s=l(L),F=n(),y&&y.c(),T=n(),b&&b.c(),E=i(),this.h()},l(e){t=a(e,"LI",{style:!0,id:!0});var r=o(t);s=f(r,L),r.forEach(u),F=h(e),y&&y.l(e),T=h(e),b&&b.l(e),E=i(),this.h()},h(){p(t,"margin-top","24px"),g(t,"id",d=e[1].slug)},m(e,r){c(e,t,r),m(t,s),c(e,F,r),y&&y.m(e,r),c(e,T,r),b&&b.m(e,r),c(e,E,r)},p(e,r){1&r&&L!==(L=e[1].section+"")&&v(s,L),1&r&&d!==(d=e[1].slug)&&g(t,"id",d),e[1].films?y?y.p(e,r):(y=H(e),y.c(),y.m(T.parentNode,T)):y&&(y.d(1),y=null),e[1].hasPublishedFilms?b?b.p(e,r):(b=A(e),b.c(),b.m(E.parentNode,E)):b&&(b.d(1),b=null)},d(e){e&&u(t),e&&u(F),y&&y.d(e),e&&u(T),b&&b.d(e),e&&u(E)}}}function U(e){let t,s,p,g;function v(e,t){return e[0]?j:$}let F=v(e),T=F(e);return{c(){t=r("h1"),s=l("Les films"),p=n(),T.c(),g=i()},l(e){t=a(e,"H1",{});var r=o(t);s=f(r,"Les films"),r.forEach(u),p=h(e),T.l(e),g=i()},m(e,r){c(e,t,r),m(t,s),c(e,p,r),T.m(e,r),c(e,g,r)},p(e,[t]){F===(F=v(e))&&T?T.p(e,t):(T.d(1),T=F(e),T&&(T.c(),T.m(g.parentNode,g)))},i:d,o:d,d(e){e&&u(t),e&&u(p),T.d(e),e&&u(g)}}}async function D({params:e,query:t}){let s=await this.fetch("headers.json");if(200===s.status)return{headers:L.filterHeaders(await s.json(),!1)};this.error(res.status,data.message)}function I(e,t,s){let{headers:r}=t;return e.$$set=e=>{"headers"in e&&s(0,r=e.headers)},[r]}export default class extends e{constructor(e){super(),t(this,e,I,U,s,{headers:0})}}export{D as preload};
