import{S as e,i as t,s as r,K as s,E as a,h as i,e as l,t as n,m as c,c as o,a as d,b as u,d as f,n as m,f as h,g as p,j as v,l as g,F as b,L as E,p as $,v as y,k as w,o as A,y as k,x as F,H as V,A as I,q as M,r as T,u as D,w as x,D as C,B as S}from"./client.ee8e1566.js";import{f as N}from"./format.2c429d88.js";import{d as P,P as R}from"./PictoAge.f86ae1c0.js";import"./dayjs_custom_locale_fr.a273f595.js";function q(e){let t,r=!e[3]&&H(e);return{c(){r&&r.c(),t=a()},l(e){r&&r.l(e),t=a()},m(e,s){r&&r.m(e,s),i(e,t,s)},p(e,s){e[3]?r&&(r.d(1),r=null):r?r.p(e,s):(r=H(e),r.c(),r.m(t.parentNode,t))},d(e){r&&r.d(e),e&&f(t)}}}function H(e){let t,r,s,a,E,$,y,w,A,k,F,V,I,M,T,D,x,C;return{c(){t=l("div"),r=l("div"),s=n("Ce film comporte des images susceptibles de heurter la sensibilité de\r\n          certains spectateurs. Pour cette raison, il est déconseillé aux moins\r\n          de 16 ans."),a=c(),E=l("div"),$=l("label"),y=l("input"),w=c(),A=l("span"),k=c(),F=l("label"),V=n("Je confirme avoir pris connaissance de l'avertissement accompagnant\r\n            la diffusion de ce film."),I=c(),M=l("button"),T=n("Voir le film"),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=o(i,"DIV",{class:!0});var l=d(r);s=u(l,"Ce film comporte des images susceptibles de heurter la sensibilité de\r\n          certains spectateurs. Pour cette raison, il est déconseillé aux moins\r\n          de 16 ans."),l.forEach(f),a=m(i),E=o(i,"DIV",{class:!0});var n=d(E);$=o(n,"LABEL",{class:!0});var c=d($);y=o(c,"INPUT",{id:!0,type:!0,class:!0}),w=m(c),A=o(c,"SPAN",{class:!0}),d(A).forEach(f),c.forEach(f),k=m(n),F=o(n,"LABEL",{class:!0,for:!0});var h=d(F);V=u(h,"Je confirme avoir pris connaissance de l'avertissement accompagnant\r\n            la diffusion de ce film."),h.forEach(f),n.forEach(f),I=m(i),M=o(i,"BUTTON",{disabled:!0,class:!0});var p=d(M);T=u(p,"Voir le film"),p.forEach(f),i.forEach(f),this.h()},h(){h(r,"class","restrict-message svelte-3lsoyg"),h(y,"id","check"),h(y,"type","checkbox"),h(y,"class","svelte-3lsoyg"),h(A,"class","checkbox-custom svelte-3lsoyg"),h($,"class","checkbox-container svelte-3lsoyg"),h(F,"class","checkbox-label svelte-3lsoyg"),h(F,"for","check"),h(E,"class","restrict-agree svelte-3lsoyg"),M.disabled=D=!e[2],h(M,"class","svelte-3lsoyg"),h(t,"class","restrict svelte-3lsoyg"),p(t,"is-pick",e[1])},m(l,n){i(l,t,n),v(t,r),v(r,s),v(t,a),v(t,E),v(E,$),v($,y),y.checked=e[2],v($,w),v($,A),v(E,k),v(E,F),v(F,V),v(t,I),v(t,M),v(M,T),x||(C=[g(y,"change",e[7]),g(M,"click",e[4])],x=!0)},p(e,r){4&r&&(y.checked=e[2]),4&r&&D!==(D=!e[2])&&(M.disabled=D),2&r&&p(t,"is-pick",e[1])},d(e){e&&f(t),x=!1,b(C)}}}function j(e){let t,r,a;const n=e[6].default,u=s(n,e,e[5],null);let p=e[0]&&q(e);return{c(){t=l("div"),u&&u.c(),r=c(),p&&p.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var s=d(t);u&&u.l(s),r=m(s),p&&p.l(s),s.forEach(f),this.h()},h(){h(t,"class","restrict-container svelte-3lsoyg")},m(e,s){i(e,t,s),u&&u.m(t,null),v(t,r),p&&p.m(t,null),a=!0},p(e,[r]){u&&u.p&&32&r&&E(u,n,e,e[5],r,null,null),e[0]?p?p.p(e,r):(p=q(e),p.c(),p.m(t,null)):p&&(p.d(1),p=null)},i(e){a||($(u,e),a=!0)},o(e){y(u,e),a=!1},d(e){e&&f(t),u&&u.d(e),p&&p.d()}}}function L(e,t,r){let{$$slots:s={},$$scope:a}=t,{isRestricted:i=!1}=t,{isPick:l=!1}=t,n=!1,c=!1;return e.$$set=e=>{"isRestricted"in e&&r(0,i=e.isRestricted),"isPick"in e&&r(1,l=e.isPick),"$$scope"in e&&r(5,a=e.$$scope)},[i,l,n,c,function(){r(3,c=!0)},a,s,function(){n=this.checked,r(2,n)}]}class U extends e{constructor(e){super(),t(this,e,L,j,r,{isRestricted:0,isPick:1})}}function Y(e,t,r){const s=e.slice();return s[2]=t[r],s}function B(e){let t,r,s,a;r=new U({props:{isRestricted:e[0].restrict,isPick:1===e[0].status,$$slots:{default:[z]},$$scope:{ctx:e}}});let n=e[0].ageMin&&J(e);return{c(){t=l("div"),M(r.$$.fragment),s=c(),n&&n.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=d(t);T(r.$$.fragment,a),s=m(a),n&&n.l(a),a.forEach(f),this.h()},h(){h(t,"class","video-wrapper")},m(e,l){i(e,t,l),D(r,t,null),v(t,s),n&&n.m(t,null),a=!0},p(e,s){const a={};1&s&&(a.isRestricted=e[0].restrict),1&s&&(a.isPick=1===e[0].status),33&s&&(a.$$scope={dirty:s,ctx:e}),r.$set(a),e[0].ageMin?n?(n.p(e,s),1&s&&$(n,1)):(n=J(e),n.c(),$(n,1),n.m(t,null)):n&&(I(),y(n,1,1,(()=>{n=null})),F())},i(e){a||($(r.$$.fragment,e),$(n),a=!0)},o(e){y(r.$$.fragment,e),y(n),a=!1},d(e){e&&f(t),x(r),n&&n.d()}}}function _(e){let t,r,s,a,c;return{c(){t=l("div"),r=l("div"),s=l("div"),a=l("div"),c=n("Ce film n'est plus visible sur HENRI"),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=o(i,"DIV",{class:!0,style:!0});var l=d(r);s=o(l,"DIV",{class:!0});var n=d(s);a=o(n,"DIV",{});var m=d(a);c=u(m,"Ce film n'est plus visible sur HENRI"),m.forEach(f),n.forEach(f),l.forEach(f),i.forEach(f),this.h()},h(){h(s,"class","video-message"),h(r,"class","video-container"),C(r,"background-image","url("+e[0].thumb+")"),C(r,"background-repeat","no-repeat"),C(r,"background-size","contain"),C(r,"background-position","50% 50%"),h(t,"class","video-wrapper")},m(e,l){i(e,t,l),v(t,r),v(r,s),v(s,a),v(a,c)},p(e,t){1&t&&C(r,"background-image","url("+e[0].thumb+")")},i:S,o:S,d(e){e&&f(t)}}}function z(e){let t,r,s,a;return{c(){t=l("div"),r=l("iframe"),this.h()},l(e){t=o(e,"DIV",{class:!0});var s=d(t);r=o(s,"IFRAME",{title:!0,sandbox:!0,src:!0,frameborder:!0,allow:!0,allowfullscreen:!0}),d(r).forEach(f),s.forEach(f),this.h()},h(){h(r,"title",s=N.artTitre(e[0].artFr,e[0].titreFr)),h(r,"sandbox","allow-same-origin allow-scripts allow-popups"),r.src!==(a=`https://player.vimeo.com/video/${e[0].vimeo}?color=${1===e[0].status?"ff4256":"7db3af"}${e[0].blockDefaultCC?"":"&texttrack=fr"}`)&&h(r,"src",a),h(r,"frameborder","0"),h(r,"allow","fullscreen"),r.allowFullscreen=!0,h(t,"class","video-container")},m(e,s){i(e,t,s),v(t,r)},p(e,t){1&t&&s!==(s=N.artTitre(e[0].artFr,e[0].titreFr))&&h(r,"title",s),1&t&&r.src!==(a=`https://player.vimeo.com/video/${e[0].vimeo}?color=${1===e[0].status?"ff4256":"7db3af"}${e[0].blockDefaultCC?"":"&texttrack=fr"}`)&&h(r,"src",a)},d(e){e&&f(t)}}}function J(e){let t,r,s,a,c,m,p=e[0].ageMin+"";return c=new R({props:{age:e[0].ageMin}}),{c(){t=l("div"),r=n("Film déconseillé aux moins de\r\n            "),s=n(p),a=n("\r\n            ans\r\n            "),M(c.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=u(i,"Film déconseillé aux moins de\r\n            "),s=u(i,p),a=u(i,"\r\n            ans\r\n            "),T(c.$$.fragment,i),i.forEach(f),this.h()},h(){h(t,"class","age-info")},m(e,l){i(e,t,l),v(t,r),v(t,s),v(t,a),D(c,t,null),m=!0},p(e,t){(!m||1&t)&&p!==(p=e[0].ageMin+"")&&w(s,p);const r={};1&t&&(r.age=e[0].ageMin),c.$set(r)},i(e){m||($(c.$$.fragment,e),m=!0)},o(e){y(c.$$.fragment,e),m=!1},d(e){e&&f(t),x(c)}}}function O(e){let t,r,s,a=P(e[0].dateUnpublished).format(P().year()<P(e[0].dateUnpublished).year()?"dddd D MMMM YYYY":"dddd D MMMM")+"";return{c(){t=l("div"),r=n("Film visible sur HENRI jusqu'au\r\n          "),s=n(a),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=u(i,"Film visible sur HENRI jusqu'au\r\n          "),s=u(i,a),i.forEach(f),this.h()},h(){h(t,"class","end")},m(e,a){i(e,t,a),v(t,r),v(t,s)},p(e,t){1&t&&a!==(a=P(e[0].dateUnpublished).format(P().year()<P(e[0].dateUnpublished).year()?"dddd D MMMM YYYY":"dddd D MMMM")+"")&&w(s,a)},d(e){e&&f(t)}}}function K(e){let t,r,s=N.artTitre(e[0].artVo,e[0].titreVo)+"";return{c(){t=l("div"),r=n(s),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=d(t);r=u(a,s),a.forEach(f),this.h()},h(){h(t,"class","titre-vo colored")},m(e,s){i(e,t,s),v(t,r)},p(e,t){1&t&&s!==(s=N.artTitre(e[0].artVo,e[0].titreVo)+"")&&w(r,s)},d(e){e&&f(t)}}}function G(e){let t,r,s,a=e[0].titreNx+"",p=e[0].titreVo&&Q(e);return{c(){t=l("div"),r=n(a),s=c(),p&&p.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=u(i,a),s=m(i),p&&p.l(i),i.forEach(f),this.h()},h(){h(t,"class","titre-vo colored")},m(e,a){i(e,t,a),v(t,r),v(t,s),p&&p.m(t,null)},p(e,s){1&s&&a!==(a=e[0].titreNx+"")&&w(r,a),e[0].titreVo?p?p.p(e,s):(p=Q(e),p.c(),p.m(t,null)):p&&(p.d(1),p=null)},d(e){e&&f(t),p&&p.d()}}}function Q(e){let t,r,s,a=N.artTitre(e[0].artVo,e[0].titreVo)+"";return{c(){t=n("["),r=n(a),s=n("]")},l(e){t=u(e,"["),r=u(e,a),s=u(e,"]")},m(e,a){i(e,t,a),i(e,r,a),i(e,s,a)},p(e,t){1&t&&a!==(a=N.artTitre(e[0].artVo,e[0].titreVo)+"")&&w(r,a)},d(e){e&&f(t),e&&f(r),e&&f(s)}}}function W(e){let t;return{c(){t=l("span"),this.h()},l(e){t=o(e,"SPAN",{class:!0}),d(t).forEach(f),this.h()},h(){h(t,"class","iscc")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function X(e){let t,r,s,a,n,u,p,g,b=e[0].presentation.title+"";return{c(){t=l("div"),r=l("div"),s=l("div"),a=l("iframe"),p=c(),g=l("p"),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=o(i,"DIV",{class:!0});var l=d(r);s=o(l,"DIV",{class:!0});var n=d(s);a=o(n,"IFRAME",{title:!0,sandbox:!0,src:!0,frameborder:!0,allow:!0,allowfullscreen:!0}),d(a).forEach(f),n.forEach(f),p=m(l),g=o(l,"P",{class:!0}),d(g).forEach(f),l.forEach(f),i.forEach(f),this.h()},h(){h(a,"title",n=N.artTitre(e[0].artFr,e[0].titreFr)),h(a,"sandbox","allow-same-origin allow-scripts allow-popups"),a.src!==(u="https://player.vimeo.com/video/"+e[0].presentation.vimeo+"?color="+(1===e[0].status?"ff4256":"7db3af")+"&texttrack=fr")&&h(a,"src",u),h(a,"frameborder","0"),h(a,"allow","fullscreen"),a.allowFullscreen=!0,h(s,"class","video-container"),h(g,"class","title"),h(r,"class","video-wrapper presentation"),h(t,"class","presentation")},m(e,l){i(e,t,l),v(t,r),v(r,s),v(s,a),v(r,p),v(r,g),g.innerHTML=b},p(e,t){1&t&&n!==(n=N.artTitre(e[0].artFr,e[0].titreFr))&&h(a,"title",n),1&t&&a.src!==(u="https://player.vimeo.com/video/"+e[0].presentation.vimeo+"?color="+(1===e[0].status?"ff4256":"7db3af")+"&texttrack=fr")&&h(a,"src",u),1&t&&b!==(b=e[0].presentation.title+"")&&(g.innerHTML=b)},d(e){e&&f(t)}}}function Z(e){let t,r,s=e[0].isCatFilm&&ee(e),a=e[0].links||[],n=[];for(let t=0;t<a.length;t+=1)n[t]=te(Y(e,a,t));return{c(){t=l("div"),s&&s.c(),r=c();for(let e=0;e<n.length;e+=1)n[e].c()},l(e){t=o(e,"DIV",{});var a=d(t);s&&s.l(a),r=m(a);for(let e=0;e<n.length;e+=1)n[e].l(a);a.forEach(f)},m(e,a){i(e,t,a),s&&s.m(t,null),v(t,r);for(let e=0;e<n.length;e+=1)n[e].m(t,null)},p(e,i){if(e[0].isCatFilm?s?s.p(e,i):(s=ee(e),s.c(),s.m(t,r)):s&&(s.d(1),s=null),1&i){let r;for(a=e[0].links||[],r=0;r<a.length;r+=1){const s=Y(e,a,r);n[r]?n[r].p(s,i):(n[r]=te(s),n[r].c(),n[r].m(t,null))}for(;r<n.length;r+=1)n[r].d(1);n.length=a.length}},d(e){e&&f(t),s&&s.d(),A(n,e)}}}function ee(e){let t,r,s,a,c,m=N.artTitre(e[0].artFr,e[0].titreFr)+"";return{c(){t=l("a"),r=n("Plus de détails sur « "),s=n(m),a=n(" » sur le Catalogue des restaurations et tirages de la\r\n              Cinémathèque française"),this.h()},l(e){t=o(e,"A",{class:!0,href:!0});var i=d(t);r=u(i,"Plus de détails sur « "),s=u(i,m),a=u(i," » sur le Catalogue des restaurations et tirages de la\r\n              Cinémathèque française"),i.forEach(f),this.h()},h(){h(t,"class","catfilm colored"),h(t,"href",c="https://www.cinematheque.fr/catalogues/restaurations-tirages/film.php?id="+e[0].pk)},m(e,l){i(e,t,l),v(t,r),v(t,s),v(t,a)},p(e,r){1&r&&m!==(m=N.artTitre(e[0].artFr,e[0].titreFr)+"")&&w(s,m),1&r&&c!==(c="https://www.cinematheque.fr/catalogues/restaurations-tirages/film.php?id="+e[0].pk)&&h(t,"href",c)},d(e){e&&f(t)}}}function te(e){let t,r,s,a,n=e[2].text+"";return{c(){t=l("a"),s=c(),this.h()},l(e){t=o(e,"A",{class:!0,href:!0});var r=d(t);s=m(r),r.forEach(f),this.h()},h(){r=new V(s),h(t,"class","catfilm colored"),h(t,"href",a=e[2].url)},m(e,a){i(e,t,a),r.m(n,t),v(t,s)},p(e,s){1&s&&n!==(n=e[2].text+"")&&r.p(n),1&s&&a!==(a=e[2].url)&&h(t,"href",a)},d(e){e&&f(t)}}}function re(e){let t,r,s,a,g,b,E,A,M,T,D,x,C,S,P,R,q,H,j,L,U,Y,z,J,Q,ee,te,re,se,ae,ie,le,ne,ce,oe,de,ue,fe,me,he,pe,ve,ge,be,Ee,$e,ye,we,Ae,ke,Fe,Ve,Ie,Me,Te=e[0].section+"",De=`${N.artTitre(e[0].artFr,e[0].titreFr)}${N.beforeAfterStr('<div class="sous-titre-fr">',"</div>",e[0].sousTitreFr)}`,xe=e[0].realisateurs+"",Ce=N.beforeAfterStr(""," / ",e[0].pays)+"",Se=e[0].annee+"",Ne=e[0].duree+"",Pe=N.beforeAfterStr(" / ","",e[0].version)+"",Re=N.beforeAfterStr("<div>","</div>",e[0].adaptation)+"",qe=N.beforeAfterStr("<div>Avec ",".</div>",e[0].interpretation)+"",He=N.beforeAfterStr("<div>Accompagnement musical par ",".</div>",e[0].accompagnement)+"",je=N.beforeAfterStr('<div class="rem">',"</div>",e[0].remarque)+"",Le=N.beforeAfterStr('<div class="synopsis">',"</div>",e[0].synopsis)+"",Ue=N.beforeAfterStr("<div>","</div>",e[0].restauration)+"",Ye=N.beforeAfterStr("<hr><div>","</div>",e[0].comment)+"";document.title=D="\r\n    "+N.artTitre(e[0].artFr,e[0].titreFr)+"\r\n    ("+e[0].realisateurs+",\r\n    "+e[0].annee+") - HENRI - La Cinémathèque française\r\n  ";const Be=[_,B],_e=[];function ze(e,t){return 3===e[0].status?0:1}P=ze(e),R=_e[P]=Be[P](e);let Je=e[0].dateUnpublished&&3!==e[0].status&&O(e);function Oe(e,t){return e[0].titreNx?G:e[0].titreVo?K:void 0}let Ke=Oe(e),Ge=Ke&&Ke(e),Qe=e[0].isCC&&W(),We=e[0].presentation&&e[0].presentation.vimeo&&X(e),Xe=(e[0].isCatFilm||e[0].links)&&Z(e);return{c(){t=l("meta"),r=l("meta"),a=l("meta"),b=l("meta"),A=l("meta"),M=l("meta"),T=l("meta"),x=c(),C=l("section"),S=l("div"),R.c(),q=c(),H=l("article"),Je&&Je.c(),j=c(),L=l("div"),U=l("div"),Y=n(Te),z=c(),J=l("div"),Q=l("h1"),ee=c(),Ge&&Ge.c(),te=c(),re=l("div"),se=n(xe),ae=c(),ie=l("div"),le=n(Ce),ne=n(Se),ce=n("\r\n        /\r\n        "),oe=n(Ne),de=n(Pe),ue=c(),Qe&&Qe.c(),fe=c(),he=c(),ve=c(),be=c(),$e=c(),we=c(),ke=c(),We&&We.c(),Fe=c(),Ie=c(),Xe&&Xe.c(),this.h()},l(e){const s=k('[data-svelte="svelte-bzjnr2"]',document.head);t=o(s,"META",{property:!0,content:!0}),r=o(s,"META",{property:!0,content:!0}),a=o(s,"META",{property:!0,content:!0}),b=o(s,"META",{property:!0,content:!0}),A=o(s,"META",{property:!0,content:!0}),M=o(s,"META",{property:!0,content:!0}),T=o(s,"META",{property:!0,content:!0}),s.forEach(f),x=m(e),C=o(e,"SECTION",{class:!0});var i=d(C);S=o(i,"DIV",{class:!0});var l=d(S);R.l(l),q=m(l),H=o(l,"ARTICLE",{});var n=d(H);Je&&Je.l(n),j=m(n),L=o(n,"DIV",{});var c=d(L);U=o(c,"DIV",{class:!0});var h=d(U);Y=u(h,Te),h.forEach(f),c.forEach(f),z=m(n),J=o(n,"DIV",{class:!0});var p=d(J);Q=o(p,"H1",{class:!0}),d(Q).forEach(f),ee=m(p),Ge&&Ge.l(p),p.forEach(f),te=m(n),re=o(n,"DIV",{class:!0});var v=d(re);se=u(v,xe),v.forEach(f),ae=m(n),ie=o(n,"DIV",{});var g=d(ie);le=u(g,Ce),ne=u(g,Se),ce=u(g,"\r\n        /\r\n        "),oe=u(g,Ne),de=u(g,Pe),ue=m(g),Qe&&Qe.l(g),g.forEach(f),fe=m(n),he=m(n),ve=m(n),be=m(n),$e=m(n),we=m(n),ke=m(n),We&&We.l(n),Fe=m(n),Ie=m(n),Xe&&Xe.l(n),n.forEach(f),l.forEach(f),i.forEach(f),this.h()},h(){h(t,"property","og:title"),h(t,"content",e[1]),h(r,"property","og:url"),h(r,"content",s="https://www.cinematheque.fr/henri/film/"+e[0].slug+"/"),h(a,"property","og:description"),h(a,"content",g=e[0].synopsis),h(b,"property","og:image"),h(b,"content",E=e[0].thumb),h(A,"property","og:image:type"),h(A,"content","image/jpeg"),h(M,"property","og:image:width"),h(M,"content","533"),h(T,"property","og:image:height"),h(T,"content","400"),h(U,"class","collection"),h(Q,"class","colored"),h(J,"class","titre-film"),h(re,"class","realisateurs"),me=new V(he),pe=new V(ve),ge=new V(be),Ee=new V($e),ye=new V(we),Ae=new V(ke),Ve=new V(Ie),h(S,"class","container"),h(C,"class","film-page"),p(C,"archived",3===e[0].status),p(C,"ispick",1===e[0].status)},m(e,s){v(document.head,t),v(document.head,r),v(document.head,a),v(document.head,b),v(document.head,A),v(document.head,M),v(document.head,T),i(e,x,s),i(e,C,s),v(C,S),_e[P].m(S,null),v(S,q),v(S,H),Je&&Je.m(H,null),v(H,j),v(H,L),v(L,U),v(U,Y),v(H,z),v(H,J),v(J,Q),Q.innerHTML=De,v(J,ee),Ge&&Ge.m(J,null),v(H,te),v(H,re),v(re,se),v(H,ae),v(H,ie),v(ie,le),v(ie,ne),v(ie,ce),v(ie,oe),v(ie,de),v(ie,ue),Qe&&Qe.m(ie,null),v(H,fe),me.m(Re,H),v(H,he),pe.m(qe,H),v(H,ve),ge.m(He,H),v(H,be),Ee.m(je,H),v(H,$e),ye.m(Le,H),v(H,we),Ae.m(Ue,H),v(H,ke),We&&We.m(H,null),v(H,Fe),Ve.m(Ye,H),v(H,Ie),Xe&&Xe.m(H,null),Me=!0},p(e,[t]){(!Me||1&t&&s!==(s="https://www.cinematheque.fr/henri/film/"+e[0].slug+"/"))&&h(r,"content",s),(!Me||1&t&&g!==(g=e[0].synopsis))&&h(a,"content",g),(!Me||1&t&&E!==(E=e[0].thumb))&&h(b,"content",E),(!Me||1&t)&&D!==(D="\r\n    "+N.artTitre(e[0].artFr,e[0].titreFr)+"\r\n    ("+e[0].realisateurs+",\r\n    "+e[0].annee+") - HENRI - La Cinémathèque française\r\n  ")&&(document.title=D);let i=P;P=ze(e),P===i?_e[P].p(e,t):(I(),y(_e[i],1,1,(()=>{_e[i]=null})),F(),R=_e[P],R?R.p(e,t):(R=_e[P]=Be[P](e),R.c()),$(R,1),R.m(S,q)),e[0].dateUnpublished&&3!==e[0].status?Je?Je.p(e,t):(Je=O(e),Je.c(),Je.m(H,j)):Je&&(Je.d(1),Je=null),(!Me||1&t)&&Te!==(Te=e[0].section+"")&&w(Y,Te),(!Me||1&t)&&De!==(De=`${N.artTitre(e[0].artFr,e[0].titreFr)}${N.beforeAfterStr('<div class="sous-titre-fr">',"</div>",e[0].sousTitreFr)}`)&&(Q.innerHTML=De),Ke===(Ke=Oe(e))&&Ge?Ge.p(e,t):(Ge&&Ge.d(1),Ge=Ke&&Ke(e),Ge&&(Ge.c(),Ge.m(J,null))),(!Me||1&t)&&xe!==(xe=e[0].realisateurs+"")&&w(se,xe),(!Me||1&t)&&Ce!==(Ce=N.beforeAfterStr(""," / ",e[0].pays)+"")&&w(le,Ce),(!Me||1&t)&&Se!==(Se=e[0].annee+"")&&w(ne,Se),(!Me||1&t)&&Ne!==(Ne=e[0].duree+"")&&w(oe,Ne),(!Me||1&t)&&Pe!==(Pe=N.beforeAfterStr(" / ","",e[0].version)+"")&&w(de,Pe),e[0].isCC?Qe||(Qe=W(),Qe.c(),Qe.m(ie,null)):Qe&&(Qe.d(1),Qe=null),(!Me||1&t)&&Re!==(Re=N.beforeAfterStr("<div>","</div>",e[0].adaptation)+"")&&me.p(Re),(!Me||1&t)&&qe!==(qe=N.beforeAfterStr("<div>Avec ",".</div>",e[0].interpretation)+"")&&pe.p(qe),(!Me||1&t)&&He!==(He=N.beforeAfterStr("<div>Accompagnement musical par ",".</div>",e[0].accompagnement)+"")&&ge.p(He),(!Me||1&t)&&je!==(je=N.beforeAfterStr('<div class="rem">',"</div>",e[0].remarque)+"")&&Ee.p(je),(!Me||1&t)&&Le!==(Le=N.beforeAfterStr('<div class="synopsis">',"</div>",e[0].synopsis)+"")&&ye.p(Le),(!Me||1&t)&&Ue!==(Ue=N.beforeAfterStr("<div>","</div>",e[0].restauration)+"")&&Ae.p(Ue),e[0].presentation&&e[0].presentation.vimeo?We?We.p(e,t):(We=X(e),We.c(),We.m(H,Fe)):We&&(We.d(1),We=null),(!Me||1&t)&&Ye!==(Ye=N.beforeAfterStr("<hr><div>","</div>",e[0].comment)+"")&&Ve.p(Ye),e[0].isCatFilm||e[0].links?Xe?Xe.p(e,t):(Xe=Z(e),Xe.c(),Xe.m(H,null)):Xe&&(Xe.d(1),Xe=null),1&t&&p(C,"archived",3===e[0].status),1&t&&p(C,"ispick",1===e[0].status)},i(e){Me||($(R),Me=!0)},o(e){y(R),Me=!1},d(e){f(t),f(r),f(a),f(b),f(A),f(M),f(T),e&&f(x),e&&f(C),_e[P].d(),Je&&Je.d(),Ge&&Ge.d(),Qe&&Qe.d(),We&&We.d(),Xe&&Xe.d()}}}async function se({params:e,query:t}){let r=await this.fetch(`film/${e.slug}.json`);if(200===r.status)return{film:await r.json()};this.error(r.status,r.message)}function ae(e,t,r){P.locale("fr");let{film:s}=t;const a=`${N.artTitre(s.artFr,s.titreFr)} (${s.realisateurs}, ${s.annee}) à voir en ligne sur HENRI, la plateforme de nos collections films`;return e.$$set=e=>{"film"in e&&r(0,s=e.film)},[s,a]}export default class extends e{constructor(e){super(),t(this,e,ae,re,r,{film:0})}}export{se as preload};
