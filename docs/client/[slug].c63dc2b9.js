import{S as e,i as t,s as r,Q as s,E as a,f as i,h as n,t as l,q as c,j as o,b as d,k as u,d as f,u as m,e as h,m as p,g as v,o as g,M as b,R as E,T as y,U as $,w as A,A as M,l as w,p as I,v as V,H as k,r as T,D as F,F as D,C as x,I as C,x as S,y as N,z as R,B as P,L as q,n as H}from"./client.3a62ac3a.js";import{d as L}from"./dayjs.min.46cec71b.js";import"./dayjs_custom_locale_fr.08f1939f.js";import{f as j}from"./format.beb1e807.js";import{P as U}from"./PictoAge.2f69b4d3.js";function Y(e){let t,r=!e[3]&&B(e);return{c(){r&&r.c(),t=a()},l(e){r&&r.l(e),t=a()},m(e,s){r&&r.m(e,s),i(e,t,s)},p(e,s){e[3]?r&&(r.d(1),r=null):r?r.p(e,s):(r=B(e),r.c(),r.m(t.parentNode,t))},d(e){r&&r.d(e),e&&f(t)}}}function B(e){let t,r,s,a,E,y,$,A,M,w,I,V,k,T,F,D,x,C;return{c(){t=n("div"),r=n("div"),s=l("Ce film comporte des images susceptibles de heurter la sensibilité de\r\n          certains spectateurs. Pour cette raison, il est déconseillé aux moins\r\n          de 16 ans."),a=c(),E=n("div"),y=n("label"),$=n("input"),A=c(),M=n("span"),w=c(),I=n("label"),V=l("Je confirme avoir pris connaissance de l'avertissement accompagnant\r\n            la diffusion de ce film."),k=c(),T=n("button"),F=l("Voir le film"),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=o(i,"DIV",{class:!0});var n=d(r);s=u(n,"Ce film comporte des images susceptibles de heurter la sensibilité de\r\n          certains spectateurs. Pour cette raison, il est déconseillé aux moins\r\n          de 16 ans."),n.forEach(f),a=m(i),E=o(i,"DIV",{class:!0});var l=d(E);y=o(l,"LABEL",{class:!0});var c=d(y);$=o(c,"INPUT",{id:!0,type:!0,class:!0}),A=m(c),M=o(c,"SPAN",{class:!0}),d(M).forEach(f),c.forEach(f),w=m(l),I=o(l,"LABEL",{class:!0,for:!0});var h=d(I);V=u(h,"Je confirme avoir pris connaissance de l'avertissement accompagnant\r\n            la diffusion de ce film."),h.forEach(f),l.forEach(f),k=m(i),T=o(i,"BUTTON",{class:!0});var p=d(T);F=u(p,"Voir le film"),p.forEach(f),i.forEach(f),this.h()},h(){h(r,"class","restrict-message svelte-yl2ttf"),h($,"id","check"),h($,"type","checkbox"),h($,"class","svelte-yl2ttf"),h(M,"class","checkbox-custom svelte-yl2ttf"),h(y,"class","checkbox-container svelte-yl2ttf"),h(I,"class","checkbox-label svelte-yl2ttf"),h(I,"for","check"),h(E,"class","restrict-agree svelte-yl2ttf"),T.disabled=D=!e[2],h(T,"class","svelte-yl2ttf"),h(t,"class","restrict svelte-yl2ttf"),p(t,"is-pick",e[1])},m(n,l){i(n,t,l),v(t,r),v(r,s),v(t,a),v(t,E),v(E,y),v(y,$),$.checked=e[2],v(y,A),v(y,M),v(E,w),v(E,I),v(I,V),v(t,k),v(t,T),v(T,F),x||(C=[g($,"change",e[7]),g(T,"click",e[4])],x=!0)},p(e,r){4&r&&($.checked=e[2]),4&r&&D!==(D=!e[2])&&(T.disabled=D),2&r&&p(t,"is-pick",e[1])},d(e){e&&f(t),x=!1,b(C)}}}function O(e){let t,r,a;const l=e[6].default,u=s(l,e,e[5],null);let p=e[0]&&Y(e);return{c(){t=n("div"),u&&u.c(),r=c(),p&&p.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var s=d(t);u&&u.l(s),r=m(s),p&&p.l(s),s.forEach(f),this.h()},h(){h(t,"class","restrict-container svelte-yl2ttf")},m(e,s){i(e,t,s),u&&u.m(t,null),v(t,r),p&&p.m(t,null),a=!0},p(e,[r]){u&&u.p&&(!a||32&r)&&E(u,l,e,e[5],a?$(l,e[5],r,null):y(e[5]),null),e[0]?p?p.p(e,r):(p=Y(e),p.c(),p.m(t,null)):p&&(p.d(1),p=null)},i(e){a||(A(u,e),a=!0)},o(e){M(u,e),a=!1},d(e){e&&f(t),u&&u.d(e),p&&p.d()}}}function _(e,t,r){let{$$slots:s={},$$scope:a}=t,{isRestricted:i=!1}=t,{isPick:n=!1}=t,l=!1,c=!1;return e.$$set=e=>{"isRestricted"in e&&r(0,i=e.isRestricted),"isPick"in e&&r(1,n=e.isPick),"$$scope"in e&&r(5,a=e.$$scope)},[i,n,l,c,function(){r(3,c=!0)},a,s,function(){l=this.checked,r(2,l)}]}class z extends e{constructor(e){super(),t(this,e,_,O,r,{isRestricted:0,isPick:1})}}function J(e,t,r){const s=e.slice();return s[2]=t[r],s}function Q(e){let t,r,s,a,l;r=new z({props:{isRestricted:e[0].restrict,isPick:1===e[0].status,$$slots:{default:[K]},$$scope:{ctx:e}}});let u=(12==e[0].ageMin||16==e[0].ageMin)&&W(e),p=10==e[0].ageMin&&X(e);return{c(){t=n("div"),S(r.$$.fragment),s=c(),u&&u.c(),a=c(),p&&p.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);N(r.$$.fragment,i),s=m(i),u&&u.l(i),a=m(i),p&&p.l(i),i.forEach(f),this.h()},h(){h(t,"class","video-wrapper")},m(e,n){i(e,t,n),R(r,t,null),v(t,s),u&&u.m(t,null),v(t,a),p&&p.m(t,null),l=!0},p(e,s){const i={};1&s&&(i.isRestricted=e[0].restrict),1&s&&(i.isPick=1===e[0].status),33&s&&(i.$$scope={dirty:s,ctx:e}),r.$set(i),12==e[0].ageMin||16==e[0].ageMin?u?(u.p(e,s),1&s&&A(u,1)):(u=W(e),u.c(),A(u,1),u.m(t,a)):u&&(C(),M(u,1,1,(()=>{u=null})),x()),10==e[0].ageMin?p?p.p(e,s):(p=X(e),p.c(),p.m(t,null)):p&&(p.d(1),p=null)},i(e){l||(A(r.$$.fragment,e),A(u),l=!0)},o(e){M(r.$$.fragment,e),M(u),l=!1},d(e){e&&f(t),P(r),u&&u.d(),p&&p.d()}}}function G(e){let t,r,s,a,c;return{c(){t=n("div"),r=n("div"),s=n("div"),a=n("div"),c=l("Ce film n'est plus visible sur HENRI"),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=o(i,"DIV",{class:!0,style:!0});var n=d(r);s=o(n,"DIV",{class:!0});var l=d(s);a=o(l,"DIV",{});var m=d(a);c=u(m,"Ce film n'est plus visible sur HENRI"),m.forEach(f),l.forEach(f),n.forEach(f),i.forEach(f),this.h()},h(){h(s,"class","video-message"),h(r,"class","video-container"),q(r,"background-image","url("+e[0].image.medium+")"),q(r,"background-repeat","no-repeat"),q(r,"background-size","contain"),q(r,"background-position","50% 50%"),h(t,"class","video-wrapper")},m(e,n){i(e,t,n),v(t,r),v(r,s),v(s,a),v(a,c)},p(e,t){1&t&&q(r,"background-image","url("+e[0].image.medium+")")},i:H,o:H,d(e){e&&f(t)}}}function K(e){let t,r,s,a;return{c(){t=n("div"),r=n("iframe"),this.h()},l(e){t=o(e,"DIV",{class:!0});var s=d(t);r=o(s,"IFRAME",{title:!0,sandbox:!0,src:!0,frameborder:!0,allow:!0}),d(r).forEach(f),s.forEach(f),this.h()},h(){h(r,"title",s=j.artTitre(e[0].artFr,e[0].titreFr)),h(r,"sandbox","allow-same-origin allow-scripts allow-popups"),V(r.src,a=`https://player.vimeo.com/video/${e[0].vimeo}?color=${1===e[0].status?"ff4256":"7db3af"}${e[0].blockDefaultCC?"":"&texttrack=fr"}`)||h(r,"src",a),h(r,"frameborder","0"),h(r,"allow","fullscreen"),r.allowFullscreen=!0,h(t,"class","video-container")},m(e,s){i(e,t,s),v(t,r)},p(e,t){1&t&&s!==(s=j.artTitre(e[0].artFr,e[0].titreFr))&&h(r,"title",s),1&t&&!V(r.src,a=`https://player.vimeo.com/video/${e[0].vimeo}?color=${1===e[0].status?"ff4256":"7db3af"}${e[0].blockDefaultCC?"":"&texttrack=fr"}`)&&h(r,"src",a)},d(e){e&&f(t)}}}function W(e){let t,r,s,a,c,m,p=e[0].ageMin+"";return c=new U({props:{age:e[0].ageMin}}),{c(){t=n("div"),r=l("Film déconseillé aux moins de\r\n            "),s=l(p),a=l("\r\n            ans\r\n            "),S(c.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=u(i,"Film déconseillé aux moins de\r\n            "),s=u(i,p),a=u(i,"\r\n            ans\r\n            "),N(c.$$.fragment,i),i.forEach(f),this.h()},h(){h(t,"class","age-info")},m(e,n){i(e,t,n),v(t,r),v(t,s),v(t,a),R(c,t,null),m=!0},p(e,t){(!m||1&t)&&p!==(p=e[0].ageMin+"")&&I(s,p);const r={};1&t&&(r.age=e[0].ageMin),c.$set(r)},i(e){m||(A(c.$$.fragment,e),m=!0)},o(e){M(c.$$.fragment,e),m=!1},d(e){e&&f(t),P(c)}}}function X(e){let t,r,s,a,c=e[0].ageMin+"";return{c(){t=n("div"),r=l("À partir de\r\n            "),s=l(c),a=l("\r\n            ans"),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=u(i,"À partir de\r\n            "),s=u(i,c),a=u(i,"\r\n            ans"),i.forEach(f),this.h()},h(){h(t,"class","age-info")},m(e,n){i(e,t,n),v(t,r),v(t,s),v(t,a)},p(e,t){1&t&&c!==(c=e[0].ageMin+"")&&I(s,c)},d(e){e&&f(t)}}}function Z(e){let t,r,s,a=L(e[0].dateUnpublished).format(L().year()<L(e[0].dateUnpublished).year()?"dddd D MMMM YYYY":"dddd D MMMM")+"";return{c(){t=n("div"),r=l("Film visible sur HENRI jusqu'au\r\n          "),s=l(a),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=u(i,"Film visible sur HENRI jusqu'au\r\n          "),s=u(i,a),i.forEach(f),this.h()},h(){h(t,"class","end")},m(e,a){i(e,t,a),v(t,r),v(t,s)},p(e,t){1&t&&a!==(a=L(e[0].dateUnpublished).format(L().year()<L(e[0].dateUnpublished).year()?"dddd D MMMM YYYY":"dddd D MMMM")+"")&&I(s,a)},d(e){e&&f(t)}}}function ee(e){let t,r,s=j.artTitre(e[0].artVo,e[0].titreVo)+"";return{c(){t=n("div"),r=l(s),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=d(t);r=u(a,s),a.forEach(f),this.h()},h(){h(t,"class","titre-vo colored")},m(e,s){i(e,t,s),v(t,r)},p(e,t){1&t&&s!==(s=j.artTitre(e[0].artVo,e[0].titreVo)+"")&&I(r,s)},d(e){e&&f(t)}}}function te(e){let t,r,s,a=e[0].titreNx+"",p=e[0].titreVo&&re(e);return{c(){t=n("div"),r=l(a),s=c(),p&&p.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=u(i,a),s=m(i),p&&p.l(i),i.forEach(f),this.h()},h(){h(t,"class","titre-vo colored")},m(e,a){i(e,t,a),v(t,r),v(t,s),p&&p.m(t,null)},p(e,s){1&s&&a!==(a=e[0].titreNx+"")&&I(r,a),e[0].titreVo?p?p.p(e,s):(p=re(e),p.c(),p.m(t,null)):p&&(p.d(1),p=null)},d(e){e&&f(t),p&&p.d()}}}function re(e){let t,r,s,a=j.artTitre(e[0].artVo,e[0].titreVo)+"";return{c(){t=l("["),r=l(a),s=l("]")},l(e){t=u(e,"["),r=u(e,a),s=u(e,"]")},m(e,a){i(e,t,a),i(e,r,a),i(e,s,a)},p(e,t){1&t&&a!==(a=j.artTitre(e[0].artVo,e[0].titreVo)+"")&&I(r,a)},d(e){e&&f(t),e&&f(r),e&&f(s)}}}function se(e){let t;return{c(){t=n("span"),this.h()},l(e){t=o(e,"SPAN",{class:!0}),d(t).forEach(f),this.h()},h(){h(t,"class","iscc")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function ae(e){let t,r,s,a,l,u,p,g,b=e[0].presentation.title+"";return{c(){t=n("div"),r=n("div"),s=n("div"),a=n("iframe"),p=c(),g=n("p"),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=o(i,"DIV",{class:!0});var n=d(r);s=o(n,"DIV",{class:!0});var l=d(s);a=o(l,"IFRAME",{title:!0,sandbox:!0,src:!0,frameborder:!0,allow:!0}),d(a).forEach(f),l.forEach(f),p=m(n),g=o(n,"P",{class:!0}),d(g).forEach(f),n.forEach(f),i.forEach(f),this.h()},h(){h(a,"title",l=j.artTitre(e[0].artFr,e[0].titreFr)),h(a,"sandbox","allow-same-origin allow-scripts allow-popups"),V(a.src,u="https://player.vimeo.com/video/"+e[0].presentation.vimeo+"?color="+(1===e[0].status?"ff4256":"7db3af")+"&texttrack=fr")||h(a,"src",u),h(a,"frameborder","0"),h(a,"allow","fullscreen"),a.allowFullscreen=!0,h(s,"class","video-container"),h(g,"class","title"),h(r,"class","video-wrapper presentation"),h(t,"class","presentation")},m(e,n){i(e,t,n),v(t,r),v(r,s),v(s,a),v(r,p),v(r,g),g.innerHTML=b},p(e,t){1&t&&l!==(l=j.artTitre(e[0].artFr,e[0].titreFr))&&h(a,"title",l),1&t&&!V(a.src,u="https://player.vimeo.com/video/"+e[0].presentation.vimeo+"?color="+(1===e[0].status?"ff4256":"7db3af")+"&texttrack=fr")&&h(a,"src",u),1&t&&b!==(b=e[0].presentation.title+"")&&(g.innerHTML=b)},d(e){e&&f(t)}}}function ie(e){let t,r,s=e[0].isCatFilm&&ne(e),a=e[0].links||[],l=[];for(let t=0;t<a.length;t+=1)l[t]=le(J(e,a,t));return{c(){t=n("div"),s&&s.c(),r=c();for(let e=0;e<l.length;e+=1)l[e].c()},l(e){t=o(e,"DIV",{});var a=d(t);s&&s.l(a),r=m(a);for(let e=0;e<l.length;e+=1)l[e].l(a);a.forEach(f)},m(e,a){i(e,t,a),s&&s.m(t,null),v(t,r);for(let e=0;e<l.length;e+=1)l[e].m(t,null)},p(e,i){if(e[0].isCatFilm?s?s.p(e,i):(s=ne(e),s.c(),s.m(t,r)):s&&(s.d(1),s=null),1&i){let r;for(a=e[0].links||[],r=0;r<a.length;r+=1){const s=J(e,a,r);l[r]?l[r].p(s,i):(l[r]=le(s),l[r].c(),l[r].m(t,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=a.length}},d(e){e&&f(t),s&&s.d(),F(l,e)}}}function ne(e){let t,r,s,a,c,m=j.artTitre(e[0].artFr,e[0].titreFr)+"";return{c(){t=n("a"),r=l("Plus de détails sur « "),s=l(m),a=l(" » sur le Catalogue des restaurations et tirages de la\r\n              Cinémathèque française"),this.h()},l(e){t=o(e,"A",{class:!0,href:!0});var i=d(t);r=u(i,"Plus de détails sur « "),s=u(i,m),a=u(i," » sur le Catalogue des restaurations et tirages de la\r\n              Cinémathèque française"),i.forEach(f),this.h()},h(){h(t,"class","catfilm colored"),h(t,"href",c="https://www.cinematheque.fr/catalogues/restaurations-tirages/film.php?id="+e[0].pk)},m(e,n){i(e,t,n),v(t,r),v(t,s),v(t,a)},p(e,r){1&r&&m!==(m=j.artTitre(e[0].artFr,e[0].titreFr)+"")&&I(s,m),1&r&&c!==(c="https://www.cinematheque.fr/catalogues/restaurations-tirages/film.php?id="+e[0].pk)&&h(t,"href",c)},d(e){e&&f(t)}}}function le(e){let t,r,s,a,l=e[2].text+"";return{c(){t=n("a"),r=new k(!1),s=c(),this.h()},l(e){t=o(e,"A",{class:!0,href:!0});var a=d(t);r=T(a,!1),s=m(a),a.forEach(f),this.h()},h(){r.a=s,h(t,"class","catfilm colored"),h(t,"href",a=e[2].url)},m(e,a){i(e,t,a),r.m(l,t),v(t,s)},p(e,s){1&s&&l!==(l=e[2].text+"")&&r.p(l),1&s&&a!==(a=e[2].url)&&h(t,"href",a)},d(e){e&&f(t)}}}function ce(e){let t,r,s,a=e[0].encadre+"";return{c(){t=n("section"),r=n("div"),s=n("article"),this.h()},l(e){t=o(e,"SECTION",{class:!0});var a=d(t);r=o(a,"DIV",{class:!0});var i=d(r);s=o(i,"ARTICLE",{}),d(s).forEach(f),i.forEach(f),a.forEach(f),this.h()},h(){h(r,"class","container"),h(t,"class","encadre")},m(e,n){i(e,t,n),v(t,r),v(r,s),s.innerHTML=a},p(e,t){1&t&&a!==(a=e[0].encadre+"")&&(s.innerHTML=a)},d(e){e&&f(t)}}}function oe(e){let t,r,s,g,b,E,y,$,w,V,F,S,N,R,P,q,H,L,U,Y,B,O,_,z,J,K,W,X,re,ne,le,oe,de,ue,fe,me,he,pe,ve,ge,be,Ee,ye,$e,Ae,Me,we,Ie,Ve,ke,Te,Fe,De,xe,Ce,Se,Ne=e[0].section+"",Re=`${j.artTitre(e[0].artFr,e[0].titreFr)}${j.beforeAfterStr('<div class="sous-titre-fr">',"</div>",e[0].sousTitreFr)}`,Pe=e[0].realisateurs+"",qe=j.beforeAfterStr(""," / ",e[0].pays)+"",He=e[0].annee+"",Le=e[0].duree+"",je=j.beforeAfterStr(" / ","",e[0].version)+"",Ue=j.beforeAfterStr("<div>","</div>",e[0].adaptation)+"",Ye=j.beforeAfterStr("<div>Avec ",".</div>",e[0].interpretation)+"",Be=j.beforeAfterStr("<div>Accompagnement musical par ",".</div>",e[0].accompagnement)+"",Oe=j.beforeAfterStr('<div class="synopsis">',"</div>",e[0].synopsis)+"",_e=j.beforeAfterStr('<div class="rem">',"</div>",e[0].remarque)+"",ze=j.beforeAfterStr("<div>","</div>",e[0].restauration)+"",Je=j.beforeAfterStr("<hr><div>","</div>",e[0].comment)+"";document.title=F="\r\n    "+j.artTitre(e[0].artFr,e[0].titreFr)+"\r\n    ("+e[0].realisateurs+",\r\n    "+e[0].annee+") - HENRI - La Cinémathèque française\r\n  ";const Qe=[G,Q],Ge=[];function Ke(e,t){return 3===e[0].status?0:1}P=Ke(e),q=Ge[P]=Qe[P](e);let We=e[0].dateUnpublished&&3!==e[0].status&&Z(e);function Xe(e,t){return e[0].titreNx?te:e[0].titreVo?ee:void 0}let Ze=Xe(e),et=Ze&&Ze(e),tt=e[0].isCC&&se(),rt=e[0].presentation&&e[0].presentation.vimeo&&ae(e),st=(e[0].isCatFilm||e[0].links)&&ie(e),at=e[0].encadre&&ce(e);return{c(){t=n("meta"),r=n("meta"),g=n("meta"),E=n("meta"),$=n("meta"),w=n("meta"),V=n("meta"),S=c(),N=n("section"),R=n("div"),q.c(),H=c(),L=n("article"),We&&We.c(),U=c(),Y=n("div"),B=n("div"),O=l(Ne),_=c(),z=n("div"),J=n("h1"),K=c(),et&&et.c(),W=c(),X=n("div"),re=l(Pe),ne=c(),le=n("div"),oe=l(qe),de=l(He),ue=l("\r\n        /\r\n        "),fe=l(Le),me=l(je),he=c(),tt&&tt.c(),pe=c(),ve=new k(!1),ge=c(),be=new k(!1),Ee=c(),ye=new k(!1),$e=c(),Ae=new k(!1),Me=c(),we=new k(!1),Ie=c(),Ve=new k(!1),ke=c(),rt&&rt.c(),Te=c(),Fe=new k(!1),De=c(),st&&st.c(),xe=c(),at&&at.c(),Ce=a(),this.h()},l(e){const s=D("svelte-1oh5ng4",document.head);t=o(s,"META",{property:!0,content:!0}),r=o(s,"META",{property:!0,content:!0}),g=o(s,"META",{property:!0,content:!0}),E=o(s,"META",{property:!0,content:!0}),$=o(s,"META",{property:!0,content:!0}),w=o(s,"META",{property:!0,content:!0}),V=o(s,"META",{property:!0,content:!0}),s.forEach(f),S=m(e),N=o(e,"SECTION",{class:!0});var i=d(N);R=o(i,"DIV",{class:!0});var n=d(R);q.l(n),H=m(n),L=o(n,"ARTICLE",{});var l=d(L);We&&We.l(l),U=m(l),Y=o(l,"DIV",{});var c=d(Y);B=o(c,"DIV",{class:!0});var h=d(B);O=u(h,Ne),h.forEach(f),c.forEach(f),_=m(l),z=o(l,"DIV",{class:!0});var p=d(z);J=o(p,"H1",{class:!0}),d(J).forEach(f),K=m(p),et&&et.l(p),p.forEach(f),W=m(l),X=o(l,"DIV",{class:!0});var v=d(X);re=u(v,Pe),v.forEach(f),ne=m(l),le=o(l,"DIV",{});var b=d(le);oe=u(b,qe),de=u(b,He),ue=u(b,"\r\n        /\r\n        "),fe=u(b,Le),me=u(b,je),he=m(b),tt&&tt.l(b),b.forEach(f),pe=m(l),ve=T(l,!1),ge=m(l),be=T(l,!1),Ee=m(l),ye=T(l,!1),$e=m(l),Ae=T(l,!1),Me=m(l),we=T(l,!1),Ie=m(l),Ve=T(l,!1),ke=m(l),rt&&rt.l(l),Te=m(l),Fe=T(l,!1),De=m(l),st&&st.l(l),l.forEach(f),n.forEach(f),i.forEach(f),xe=m(e),at&&at.l(e),Ce=a(),this.h()},h(){h(t,"property","og:title"),h(t,"content",e[1]),h(r,"property","og:url"),h(r,"content",s="https://www.cinematheque.fr/henri/film/"+e[0].slug+"/"),h(g,"property","og:description"),h(g,"content",b=e[0].synopsis),h(E,"property","og:image"),h(E,"content",y=e[0].image.medium),h($,"property","og:image:type"),h($,"content","image/jpeg"),h(w,"property","og:image:width"),h(w,"content","528"),h(V,"property","og:image:height"),h(V,"content","396"),h(B,"class","collection"),h(J,"class","colored"),h(z,"class","titre-film"),h(X,"class","realisateurs"),ve.a=ge,be.a=Ee,ye.a=$e,Ae.a=Me,we.a=Ie,Ve.a=ke,Fe.a=De,h(R,"class","container"),h(N,"class","film-page"),p(N,"archived",3===e[0].status),p(N,"ispick",1===e[0].status)},m(e,s){v(document.head,t),v(document.head,r),v(document.head,g),v(document.head,E),v(document.head,$),v(document.head,w),v(document.head,V),i(e,S,s),i(e,N,s),v(N,R),Ge[P].m(R,null),v(R,H),v(R,L),We&&We.m(L,null),v(L,U),v(L,Y),v(Y,B),v(B,O),v(L,_),v(L,z),v(z,J),J.innerHTML=Re,v(z,K),et&&et.m(z,null),v(L,W),v(L,X),v(X,re),v(L,ne),v(L,le),v(le,oe),v(le,de),v(le,ue),v(le,fe),v(le,me),v(le,he),tt&&tt.m(le,null),v(L,pe),ve.m(Ue,L),v(L,ge),be.m(Ye,L),v(L,Ee),ye.m(Be,L),v(L,$e),Ae.m(Oe,L),v(L,Me),we.m(_e,L),v(L,Ie),Ve.m(ze,L),v(L,ke),rt&&rt.m(L,null),v(L,Te),Fe.m(Je,L),v(L,De),st&&st.m(L,null),i(e,xe,s),at&&at.m(e,s),i(e,Ce,s),Se=!0},p(e,[t]){(!Se||1&t&&s!==(s="https://www.cinematheque.fr/henri/film/"+e[0].slug+"/"))&&h(r,"content",s),(!Se||1&t&&b!==(b=e[0].synopsis))&&h(g,"content",b),(!Se||1&t&&y!==(y=e[0].image.medium))&&h(E,"content",y),(!Se||1&t)&&F!==(F="\r\n    "+j.artTitre(e[0].artFr,e[0].titreFr)+"\r\n    ("+e[0].realisateurs+",\r\n    "+e[0].annee+") - HENRI - La Cinémathèque française\r\n  ")&&(document.title=F);let a=P;P=Ke(e),P===a?Ge[P].p(e,t):(C(),M(Ge[a],1,1,(()=>{Ge[a]=null})),x(),q=Ge[P],q?q.p(e,t):(q=Ge[P]=Qe[P](e),q.c()),A(q,1),q.m(R,H)),e[0].dateUnpublished&&3!==e[0].status?We?We.p(e,t):(We=Z(e),We.c(),We.m(L,U)):We&&(We.d(1),We=null),(!Se||1&t)&&Ne!==(Ne=e[0].section+"")&&I(O,Ne),(!Se||1&t)&&Re!==(Re=`${j.artTitre(e[0].artFr,e[0].titreFr)}${j.beforeAfterStr('<div class="sous-titre-fr">',"</div>",e[0].sousTitreFr)}`)&&(J.innerHTML=Re),Ze===(Ze=Xe(e))&&et?et.p(e,t):(et&&et.d(1),et=Ze&&Ze(e),et&&(et.c(),et.m(z,null))),(!Se||1&t)&&Pe!==(Pe=e[0].realisateurs+"")&&I(re,Pe),(!Se||1&t)&&qe!==(qe=j.beforeAfterStr(""," / ",e[0].pays)+"")&&I(oe,qe),(!Se||1&t)&&He!==(He=e[0].annee+"")&&I(de,He),(!Se||1&t)&&Le!==(Le=e[0].duree+"")&&I(fe,Le),(!Se||1&t)&&je!==(je=j.beforeAfterStr(" / ","",e[0].version)+"")&&I(me,je),e[0].isCC?tt||(tt=se(),tt.c(),tt.m(le,null)):tt&&(tt.d(1),tt=null),(!Se||1&t)&&Ue!==(Ue=j.beforeAfterStr("<div>","</div>",e[0].adaptation)+"")&&ve.p(Ue),(!Se||1&t)&&Ye!==(Ye=j.beforeAfterStr("<div>Avec ",".</div>",e[0].interpretation)+"")&&be.p(Ye),(!Se||1&t)&&Be!==(Be=j.beforeAfterStr("<div>Accompagnement musical par ",".</div>",e[0].accompagnement)+"")&&ye.p(Be),(!Se||1&t)&&Oe!==(Oe=j.beforeAfterStr('<div class="synopsis">',"</div>",e[0].synopsis)+"")&&Ae.p(Oe),(!Se||1&t)&&_e!==(_e=j.beforeAfterStr('<div class="rem">',"</div>",e[0].remarque)+"")&&we.p(_e),(!Se||1&t)&&ze!==(ze=j.beforeAfterStr("<div>","</div>",e[0].restauration)+"")&&Ve.p(ze),e[0].presentation&&e[0].presentation.vimeo?rt?rt.p(e,t):(rt=ae(e),rt.c(),rt.m(L,Te)):rt&&(rt.d(1),rt=null),(!Se||1&t)&&Je!==(Je=j.beforeAfterStr("<hr><div>","</div>",e[0].comment)+"")&&Fe.p(Je),e[0].isCatFilm||e[0].links?st?st.p(e,t):(st=ie(e),st.c(),st.m(L,null)):st&&(st.d(1),st=null),(!Se||1&t)&&p(N,"archived",3===e[0].status),(!Se||1&t)&&p(N,"ispick",1===e[0].status),e[0].encadre?at?at.p(e,t):(at=ce(e),at.c(),at.m(Ce.parentNode,Ce)):at&&(at.d(1),at=null)},i(e){Se||(A(q),Se=!0)},o(e){M(q),Se=!1},d(e){f(t),f(r),f(g),f(E),f($),f(w),f(V),e&&f(S),e&&f(N),Ge[P].d(),We&&We.d(),et&&et.d(),tt&&tt.d(),rt&&rt.d(),st&&st.d(),e&&f(xe),at&&at.d(e),e&&f(Ce)}}}async function de({params:e,query:t}){let r=await this.fetch(`film/${e.slug}.json`);if(200===r.status)return{film:await r.json()};this.error(r.status,r.message)}function ue(e,t,r){L.locale("fr");let{film:s}=t;const a=`${j.artTitre(s.artFr,s.titreFr)} (${s.realisateurs}, ${s.annee}) à voir en ligne sur HENRI, la plateforme des collections films de la Cinémathèque française`;var i;return s=w(i=s).assign({status:(1===i.status||2===i.status)&&i.dateUnpublished&&L().isAfter(i.dateUnpublished,"day")?3:i.status}).value(),e.$$set=e=>{"film"in e&&r(0,s=e.film)},[s,a]}export default class extends e{constructor(e){super(),t(this,e,ue,oe,r,{film:0})}}export{de as preload};