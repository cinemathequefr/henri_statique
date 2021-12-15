import{l as e,S as t,i as s,s as r,h as l,t as n,p as i,I as a,c as o,b as f,j as u,d as h,q as c,f as m,g as d,n as p,G as g,e as v,o as F,A as T}from"./client.b5d1c1ed.js";import{f as L}from"./format.5230e28c.js";var b={filterHeaders:function(t,s){return e(t).map((t=>e({}).assign(t,{films:e(t.films).partition((e=>1===e.status||2===e.status)).value()}).value())).map((t=>e({}).assign(t,s?{films:t.films[0]}:{films:t.films[1]}).value())).filter((e=>e.films.length>0)).value()}};function y(e,t,s){const r=e.slice();return r[1]=t[s],r}function E(e,t,s){const r=e.slice();return r[4]=t[s],r}function $(e){let t;return{c(){t=n("Pas de données.")},l(e){t=u(e,"Pas de données.")},m(e,s){m(e,t,s)},p:p,d(e){e&&h(t)}}}function j(e){let t,s=e[0],r=[];for(let t=0;t<s.length;t+=1)r[t]=I(y(e,s,t));return{c(){t=l("ul");for(let e=0;e<r.length;e+=1)r[e].c()},l(e){t=o(e,"UL",{});var s=f(t);for(let e=0;e<r.length;e+=1)r[e].l(s);s.forEach(h)},m(e,s){m(e,t,s);for(let e=0;e<r.length;e+=1)r[e].m(t,null)},p(e,l){if(1&l){let n;for(s=e[0],n=0;n<s.length;n+=1){const i=y(e,s,n);r[n]?r[n].p(i,l):(r[n]=I(i),r[n].c(),r[n].m(t,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=s.length}},d(e){e&&h(t),T(r,e)}}}function A(e){let t,s=e[1].films,r=[];for(let t=0;t<s.length;t+=1)r[t]=H(E(e,s,t));return{c(){t=l("ul");for(let e=0;e<r.length;e+=1)r[e].c()},l(e){t=o(e,"UL",{});var s=f(t);for(let e=0;e<r.length;e+=1)r[e].l(s);s.forEach(h)},m(e,s){m(e,t,s);for(let e=0;e<r.length;e+=1)r[e].m(t,null)},p(e,l){if(1&l){let n;for(s=e[1].films,n=0;n<s.length;n+=1){const i=E(e,s,n);r[n]?r[n].p(i,l):(r[n]=H(i),r[n].c(),r[n].m(t,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=s.length}},d(e){e&&h(t),T(r,e)}}}function H(e){let t,s,r,n,a=`${L.artTitre(e[4].artFr,e[4].titreFr)}${L.beforeAfterStr("string"==typeof e[4].sousTitreFr?e[4].sousTitreFr[0]===e[4].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[4].sousTitreFr)}`;return{c(){t=l("li"),s=l("a"),n=i(),this.h()},l(e){t=o(e,"LI",{});var r=f(t);s=o(r,"A",{href:!0}),f(s).forEach(h),r.forEach(h),n=c(e),this.h()},h(){v(s,"href",r="film/"+e[4].slug)},m(e,r){m(e,t,r),d(t,s),s.innerHTML=a,m(e,n,r)},p(e,t){1&t&&a!==(a=`${L.artTitre(e[4].artFr,e[4].titreFr)}${L.beforeAfterStr("string"==typeof e[4].sousTitreFr?e[4].sousTitreFr[0]===e[4].sousTitreFr[0].toUpperCase()?". ":" ":"","",e[4].sousTitreFr)}`)&&(s.innerHTML=a),1&t&&r!==(r="film/"+e[4].slug)&&v(s,"href",r)},d(e){e&&h(t),e&&h(n)}}}function x(e){let t,s,r,i;return{c(){t=l("li"),s=l("a"),r=n("(Des films de cette section sont actuellement visibles.)"),this.h()},l(e){t=o(e,"LI",{style:!0});var l=f(t);s=o(l,"A",{href:!0});var n=f(s);r=u(n,"(Des films de cette section sont actuellement visibles.)"),n.forEach(h),l.forEach(h),this.h()},h(){v(s,"href",i="../#"+e[1].slug),g(t,"list-style-type","none")},m(e,l){m(e,t,l),d(t,s),d(s,r)},p(e,t){1&t&&i!==(i="../#"+e[1].slug)&&v(s,"href",i)},d(e){e&&h(t)}}}function I(e){let t,s,r,p,T,L,b=e[1].section+"",y=e[1].films&&A(e),E=!!e[1].hasPublishedFilms&&x(e);return{c(){t=l("li"),s=n(b),p=i(),y&&y.c(),T=i(),E&&E.c(),L=a(),this.h()},l(e){t=o(e,"LI",{style:!0,id:!0});var r=f(t);s=u(r,b),r.forEach(h),p=c(e),y&&y.l(e),T=c(e),E&&E.l(e),L=a(),this.h()},h(){g(t,"margin-top","24px"),v(t,"id",r=e[1].slug)},m(e,r){m(e,t,r),d(t,s),m(e,p,r),y&&y.m(e,r),m(e,T,r),E&&E.m(e,r),m(e,L,r)},p(e,l){1&l&&b!==(b=e[1].section+"")&&F(s,b),1&l&&r!==(r=e[1].slug)&&v(t,"id",r),e[1].films?y?y.p(e,l):(y=A(e),y.c(),y.m(T.parentNode,T)):y&&(y.d(1),y=null),e[1].hasPublishedFilms?E?E.p(e,l):(E=x(e),E.c(),E.m(L.parentNode,L)):E&&(E.d(1),E=null)},d(e){e&&h(t),e&&h(p),y&&y.d(e),e&&h(T),E&&E.d(e),e&&h(L)}}}function P(e){let t,s,r,g;function v(e,t){return e[0]?j:$}let F=v(e),T=F(e);return{c(){t=l("h1"),s=n("Les films"),r=i(),T.c(),g=a()},l(e){t=o(e,"H1",{});var l=f(t);s=u(l,"Les films"),l.forEach(h),r=c(e),T.l(e),g=a()},m(e,l){m(e,t,l),d(t,s),m(e,r,l),T.m(e,l),m(e,g,l)},p(e,[t]){F===(F=v(e))&&T?T.p(e,t):(T.d(1),T=F(e),T&&(T.c(),T.m(g.parentNode,g)))},i:p,o:p,d(e){e&&h(t),e&&h(r),T.d(e),e&&h(g)}}}async function U({params:e,query:t}){let s=await this.fetch("headers.json");if(200===s.status)return{headers:b.filterHeaders(await s.json(),!1)};this.error(res.status,data.message)}function N(e,t,s){let{headers:r}=t;return e.$$set=e=>{"headers"in e&&s(0,r=e.headers)},[r]}export default class extends t{constructor(e){super(),s(this,e,N,P,r,{headers:0})}}export{U as preload};