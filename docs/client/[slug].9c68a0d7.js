import{S as e,i as t,s as r,Q as s,E as a,f as i,h as n,t as l,q as c,j as o,b as d,k as u,d as f,u as m,e as h,m as p,g as v,o as g,M as $,R as b,T as E,U as w,w as y,A as I,l as V,V as k,W as A,X as M,n as T,Y as x,N as D,p as F,v as S,H as C,r as N,D as z,x as j,y as P,z as R,B as H,F as q,C as L,I as _,L as U}from"./client.17a814aa.js";import{d as Y}from"./dayjs.min.21ca5774.js";import"./dayjs_custom_locale_fr.a8872da9.js";import{f as B}from"./format.5ed3cbe1.js";import{P as O}from"./PictoAge.7dd3c438.js";function J(e){let t,r=!e[3]&&Z(e);return{c(){r&&r.c(),t=a()},l(e){r&&r.l(e),t=a()},m(e,s){r&&r.m(e,s),i(e,t,s)},p(e,s){e[3]?r&&(r.d(1),r=null):r?r.p(e,s):(r=Z(e),r.c(),r.m(t.parentNode,t))},d(e){r&&r.d(e),e&&f(t)}}}function Z(e){let t,r,s,a,b,E,w,y,I,V,k,A,M,T,x,D,F,S;return{c(){t=n("div"),r=n("div"),s=l("Ce film comporte des images susceptibles de heurter la sensibilité de\r\n          certains spectateurs. Pour cette raison, il est déconseillé aux moins\r\n          de 16 ans."),a=c(),b=n("div"),E=n("label"),w=n("input"),y=c(),I=n("span"),V=c(),k=n("label"),A=l("Je confirme avoir pris connaissance de l'avertissement accompagnant\r\n            la diffusion de ce film."),M=c(),T=n("button"),x=l("Voir le film"),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=o(i,"DIV",{class:!0});var n=d(r);s=u(n,"Ce film comporte des images susceptibles de heurter la sensibilité de\r\n          certains spectateurs. Pour cette raison, il est déconseillé aux moins\r\n          de 16 ans."),n.forEach(f),a=m(i),b=o(i,"DIV",{class:!0});var l=d(b);E=o(l,"LABEL",{class:!0});var c=d(E);w=o(c,"INPUT",{id:!0,type:!0,class:!0}),y=m(c),I=o(c,"SPAN",{class:!0}),d(I).forEach(f),c.forEach(f),V=m(l),k=o(l,"LABEL",{class:!0,for:!0});var h=d(k);A=u(h,"Je confirme avoir pris connaissance de l'avertissement accompagnant\r\n            la diffusion de ce film."),h.forEach(f),l.forEach(f),M=m(i),T=o(i,"BUTTON",{class:!0});var p=d(T);x=u(p,"Voir le film"),p.forEach(f),i.forEach(f),this.h()},h(){h(r,"class","restrict-message svelte-yl2ttf"),h(w,"id","check"),h(w,"type","checkbox"),h(w,"class","svelte-yl2ttf"),h(I,"class","checkbox-custom svelte-yl2ttf"),h(E,"class","checkbox-container svelte-yl2ttf"),h(k,"class","checkbox-label svelte-yl2ttf"),h(k,"for","check"),h(b,"class","restrict-agree svelte-yl2ttf"),T.disabled=D=!e[2],h(T,"class","svelte-yl2ttf"),h(t,"class","restrict svelte-yl2ttf"),p(t,"is-pick",e[1])},m(n,l){i(n,t,l),v(t,r),v(r,s),v(t,a),v(t,b),v(b,E),v(E,w),w.checked=e[2],v(E,y),v(E,I),v(b,V),v(b,k),v(k,A),v(t,M),v(t,T),v(T,x),F||(S=[g(w,"change",e[7]),g(T,"click",e[4])],F=!0)},p(e,r){4&r&&(w.checked=e[2]),4&r&&D!==(D=!e[2])&&(T.disabled=D),2&r&&p(t,"is-pick",e[1])},d(e){e&&f(t),F=!1,$(S)}}}function G(e){let t,r,a;const l=e[6].default,u=s(l,e,e[5],null);let p=e[0]&&J(e);return{c(){t=n("div"),u&&u.c(),r=c(),p&&p.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var s=d(t);u&&u.l(s),r=m(s),p&&p.l(s),s.forEach(f),this.h()},h(){h(t,"class","restrict-container svelte-yl2ttf")},m(e,s){i(e,t,s),u&&u.m(t,null),v(t,r),p&&p.m(t,null),a=!0},p(e,[r]){u&&u.p&&(!a||32&r)&&b(u,l,e,e[5],a?w(l,e[5],r,null):E(e[5]),null),e[0]?p?p.p(e,r):(p=J(e),p.c(),p.m(t,null)):p&&(p.d(1),p=null)},i(e){a||(y(u,e),a=!0)},o(e){I(u,e),a=!1},d(e){e&&f(t),u&&u.d(e),p&&p.d()}}}function Q(e,t,r){let{$$slots:s={},$$scope:a}=t,{isRestricted:i=!1}=t,{isPick:n=!1}=t,l=!1,c=!1;return e.$$set=e=>{"isRestricted"in e&&r(0,i=e.isRestricted),"isPick"in e&&r(1,n=e.isPick),"$$scope"in e&&r(5,a=e.$$scope)},[i,n,l,c,function(){r(3,c=!0)},a,s,function(){l=this.checked,r(2,l)}]}class W extends e{constructor(e){super(),t(this,e,Q,G,r,{isRestricted:0,isPick:1})}}const X=k(!1);function K(e){let t,r,a,V,k,A,M,T,x;const D=e[3].default,F=s(D,e,e[2],null);return{c(){t=n("div"),r=n("div"),F&&F.c(),a=c(),V=n("div"),k=n("button"),A=l("×"),this.h()},l(e){t=o(e,"DIV",{class:!0});var s=d(t);r=o(s,"DIV",{class:!0});var i=d(r);F&&F.l(i),i.forEach(f),a=m(s),V=o(s,"DIV",{class:!0});var n=d(V);k=o(n,"BUTTON",{class:!0});var l=d(k);A=u(l,"×"),l.forEach(f),n.forEach(f),s.forEach(f),this.h()},h(){h(r,"class","lightbox-content svelte-1cf4hj9"),h(k,"class","svelte-1cf4hj9"),h(V,"class","lightbox-close svelte-1cf4hj9"),h(t,"class","lightbox svelte-1cf4hj9"),p(t,"visible",e[0])},m(s,n){i(s,t,n),v(t,r),F&&F.m(r,null),v(t,a),v(t,V),v(V,k),v(k,A),M=!0,T||(x=[g(window,"keydown",e[4]),g(k,"click",e[1])],T=!0)},p(e,[r]){F&&F.p&&(!M||4&r)&&b(F,D,e,e[2],M?w(D,e[2],r,null):E(e[2]),null),(!M||1&r)&&p(t,"visible",e[0])},i(e){M||(y(F,e),M=!0)},o(e){I(F,e),M=!1},d(e){e&&f(t),F&&F.d(e),T=!1,$(x)}}}function ee(e,t,r){let s;A(e,X,(e=>r(0,s=e)));let{$$slots:a={},$$scope:i}=t;function n(){M(X,s=!1,s)}return e.$$set=e=>{"$$scope"in e&&r(2,i=e.$$scope)},[s,n,i,a,e=>{"Escape"===e.key&&n()}]}class te extends e{constructor(e){super(),t(this,e,ee,K,r,{})}}function re(e){let t;return{c(){t=n("div"),this.h()},l(e){t=o(e,"DIV",{id:!0,class:!0}),d(t).forEach(f),this.h()},h(){h(t,"id","viewer"),h(t,"class","svelte-x23ig1")},m(r,s){i(r,t,s),e[3](t)},p:T,i:T,o:T,d(r){r&&f(t),e[3](null)}}}function se(e,t,r){let s,a,i,{tileSources:n}=t;return x((async()=>{s=await Promise.all([import("./openseadragon.c46dbd14.js"),__inject_styles(["client-36b91491.css"])]).then((function(e){return e[0]})).then((function(e){return e.o})),r(2,a=new s.Viewer({id:"viewer",tileSources:n,alwaysBlend:!1,autoHideControls:!0,wrapHorizontal:!1,wrapVertical:!1,minZoomImageRatio:.75,maxZoomPixelRatio:4,showNavigationControl:!1,showNavigator:!1,mouseNavEnabled:!0,zoomPerClick:1.25,zoomPerScroll:1.25,animationTime:1,useCanvas:!0,autoResize:!0})),a.addHandler("open",(()=>{})),a.addHandler("close",(()=>{}))})),e.$$set=e=>{"tileSources"in e&&r(1,n=e.tileSources)},e.$$.update=()=>{6&e.$$.dirty&&(r(1,n),r(2,a),a&&a.open(n))},[i,n,a,function(e){D[e?"unshift":"push"]((()=>{i=e,r(0,i)}))}]}class ae extends e{constructor(e){super(),t(this,e,se,re,r,{tileSources:1})}}function ie(e,t,r){const s=e.slice();return s[5]=t[r],s}function ne(e){let t,r,s,a,l;r=new W({props:{isRestricted:e[0].restrict,isPick:1===e[0].status,$$slots:{default:[ce]},$$scope:{ctx:e}}});let u=(12==e[0].ageMin||16==e[0].ageMin)&&oe(e),p=10==e[0].ageMin&&de(e);return{c(){t=n("div"),j(r.$$.fragment),s=c(),u&&u.c(),a=c(),p&&p.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);P(r.$$.fragment,i),s=m(i),u&&u.l(i),a=m(i),p&&p.l(i),i.forEach(f),this.h()},h(){h(t,"class","video-wrapper")},m(e,n){i(e,t,n),R(r,t,null),v(t,s),u&&u.m(t,null),v(t,a),p&&p.m(t,null),l=!0},p(e,s){const i={};1&s&&(i.isRestricted=e[0].restrict),1&s&&(i.isPick=1===e[0].status),257&s&&(i.$$scope={dirty:s,ctx:e}),r.$set(i),12==e[0].ageMin||16==e[0].ageMin?u?(u.p(e,s),1&s&&y(u,1)):(u=oe(e),u.c(),y(u,1),u.m(t,a)):u&&(_(),I(u,1,1,(()=>{u=null})),L()),10==e[0].ageMin?p?p.p(e,s):(p=de(e),p.c(),p.m(t,null)):p&&(p.d(1),p=null)},i(e){l||(y(r.$$.fragment,e),y(u),l=!0)},o(e){I(r.$$.fragment,e),I(u),l=!1},d(e){e&&f(t),H(r),u&&u.d(),p&&p.d()}}}function le(e){let t,r,s,a,c;return{c(){t=n("div"),r=n("div"),s=n("div"),a=n("div"),c=l("Ce film n'est plus visible sur HENRI"),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=o(i,"DIV",{class:!0,style:!0});var n=d(r);s=o(n,"DIV",{class:!0});var l=d(s);a=o(l,"DIV",{});var m=d(a);c=u(m,"Ce film n'est plus visible sur HENRI"),m.forEach(f),l.forEach(f),n.forEach(f),i.forEach(f),this.h()},h(){h(s,"class","video-message"),h(r,"class","video-container"),U(r,"background-image","url("+e[0].image.medium+")"),U(r,"background-repeat","no-repeat"),U(r,"background-size","contain"),U(r,"background-position","50% 50%"),h(t,"class","video-wrapper")},m(e,n){i(e,t,n),v(t,r),v(r,s),v(s,a),v(a,c)},p(e,t){1&t&&U(r,"background-image","url("+e[0].image.medium+")")},i:T,o:T,d(e){e&&f(t)}}}function ce(e){let t,r,s,a;return{c(){t=n("div"),r=n("iframe"),this.h()},l(e){t=o(e,"DIV",{class:!0});var s=d(t);r=o(s,"IFRAME",{title:!0,sandbox:!0,src:!0,frameborder:!0,allow:!0}),d(r).forEach(f),s.forEach(f),this.h()},h(){h(r,"title",s=B.artTitre(e[0].artFr,e[0].titreFr)),h(r,"sandbox","allow-same-origin allow-scripts allow-popups"),S(r.src,a=`https://player.vimeo.com/video/${e[0].vimeo}?color=${1===e[0].status?"ff4256":"7db3af"}${e[0].blockDefaultCC?"":"&texttrack=fr"}`)||h(r,"src",a),h(r,"frameborder","0"),h(r,"allow","fullscreen"),r.allowFullscreen=!0,h(t,"class","video-container")},m(e,s){i(e,t,s),v(t,r)},p(e,t){1&t&&s!==(s=B.artTitre(e[0].artFr,e[0].titreFr))&&h(r,"title",s),1&t&&!S(r.src,a=`https://player.vimeo.com/video/${e[0].vimeo}?color=${1===e[0].status?"ff4256":"7db3af"}${e[0].blockDefaultCC?"":"&texttrack=fr"}`)&&h(r,"src",a)},d(e){e&&f(t)}}}function oe(e){let t,r,s,a,c,m,p=e[0].ageMin+"";return c=new O({props:{age:e[0].ageMin}}),{c(){t=n("div"),r=l("Film déconseillé aux moins de\r\n            "),s=l(p),a=l("\r\n            ans\r\n            "),j(c.$$.fragment),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=u(i,"Film déconseillé aux moins de\r\n            "),s=u(i,p),a=u(i,"\r\n            ans\r\n            "),P(c.$$.fragment,i),i.forEach(f),this.h()},h(){h(t,"class","age-info")},m(e,n){i(e,t,n),v(t,r),v(t,s),v(t,a),R(c,t,null),m=!0},p(e,t){(!m||1&t)&&p!==(p=e[0].ageMin+"")&&F(s,p);const r={};1&t&&(r.age=e[0].ageMin),c.$set(r)},i(e){m||(y(c.$$.fragment,e),m=!0)},o(e){I(c.$$.fragment,e),m=!1},d(e){e&&f(t),H(c)}}}function de(e){let t,r,s,a,c=e[0].ageMin+"";return{c(){t=n("div"),r=l("À partir de\r\n            "),s=l(c),a=l("\r\n            ans"),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=u(i,"À partir de\r\n            "),s=u(i,c),a=u(i,"\r\n            ans"),i.forEach(f),this.h()},h(){h(t,"class","age-info")},m(e,n){i(e,t,n),v(t,r),v(t,s),v(t,a)},p(e,t){1&t&&c!==(c=e[0].ageMin+"")&&F(s,c)},d(e){e&&f(t)}}}function ue(e){let t,r,s,a=Y(e[0].dateUnpublished).format(Y().year()<Y(e[0].dateUnpublished).year()?"dddd D MMMM YYYY":"dddd D MMMM")+"";return{c(){t=n("div"),r=l("Film visible sur HENRI jusqu'au\r\n          "),s=l(a),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=u(i,"Film visible sur HENRI jusqu'au\r\n          "),s=u(i,a),i.forEach(f),this.h()},h(){h(t,"class","end")},m(e,a){i(e,t,a),v(t,r),v(t,s)},p(e,t){1&t&&a!==(a=Y(e[0].dateUnpublished).format(Y().year()<Y(e[0].dateUnpublished).year()?"dddd D MMMM YYYY":"dddd D MMMM")+"")&&F(s,a)},d(e){e&&f(t)}}}function fe(e){let t,r,s=B.artTitre(e[0].artVo,e[0].titreVo)+"";return{c(){t=n("div"),r=l(s),this.h()},l(e){t=o(e,"DIV",{class:!0});var a=d(t);r=u(a,s),a.forEach(f),this.h()},h(){h(t,"class","titre-vo colored")},m(e,s){i(e,t,s),v(t,r)},p(e,t){1&t&&s!==(s=B.artTitre(e[0].artVo,e[0].titreVo)+"")&&F(r,s)},d(e){e&&f(t)}}}function me(e){let t,r,s,a=e[0].titreNx+"",p=e[0].titreVo&&he(e);return{c(){t=n("div"),r=l(a),s=c(),p&&p.c(),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=u(i,a),s=m(i),p&&p.l(i),i.forEach(f),this.h()},h(){h(t,"class","titre-vo colored")},m(e,a){i(e,t,a),v(t,r),v(t,s),p&&p.m(t,null)},p(e,s){1&s&&a!==(a=e[0].titreNx+"")&&F(r,a),e[0].titreVo?p?p.p(e,s):(p=he(e),p.c(),p.m(t,null)):p&&(p.d(1),p=null)},d(e){e&&f(t),p&&p.d()}}}function he(e){let t,r,s,a=B.artTitre(e[0].artVo,e[0].titreVo)+"";return{c(){t=l("["),r=l(a),s=l("]")},l(e){t=u(e,"["),r=u(e,a),s=u(e,"]")},m(e,a){i(e,t,a),i(e,r,a),i(e,s,a)},p(e,t){1&t&&a!==(a=B.artTitre(e[0].artVo,e[0].titreVo)+"")&&F(r,a)},d(e){e&&f(t),e&&f(r),e&&f(s)}}}function pe(e){let t;return{c(){t=n("span"),this.h()},l(e){t=o(e,"SPAN",{class:!0}),d(t).forEach(f),this.h()},h(){h(t,"class","iscc")},m(e,r){i(e,t,r)},d(e){e&&f(t)}}}function ve(e){let t,r,s,a,l,u,p,g,$=e[0].presentation.title+"";return{c(){t=n("div"),r=n("div"),s=n("div"),a=n("iframe"),p=c(),g=n("p"),this.h()},l(e){t=o(e,"DIV",{class:!0});var i=d(t);r=o(i,"DIV",{class:!0});var n=d(r);s=o(n,"DIV",{class:!0});var l=d(s);a=o(l,"IFRAME",{title:!0,sandbox:!0,src:!0,frameborder:!0,allow:!0}),d(a).forEach(f),l.forEach(f),p=m(n),g=o(n,"P",{class:!0}),d(g).forEach(f),n.forEach(f),i.forEach(f),this.h()},h(){h(a,"title",l=B.artTitre(e[0].artFr,e[0].titreFr)),h(a,"sandbox","allow-same-origin allow-scripts allow-popups"),S(a.src,u="https://player.vimeo.com/video/"+e[0].presentation.vimeo+"?color="+(1===e[0].status?"ff4256":"7db3af")+"&texttrack=fr")||h(a,"src",u),h(a,"frameborder","0"),h(a,"allow","fullscreen"),a.allowFullscreen=!0,h(s,"class","video-container"),h(g,"class","title"),h(r,"class","video-wrapper presentation"),h(t,"class","presentation")},m(e,n){i(e,t,n),v(t,r),v(r,s),v(s,a),v(r,p),v(r,g),g.innerHTML=$},p(e,t){1&t&&l!==(l=B.artTitre(e[0].artFr,e[0].titreFr))&&h(a,"title",l),1&t&&!S(a.src,u="https://player.vimeo.com/video/"+e[0].presentation.vimeo+"?color="+(1===e[0].status?"ff4256":"7db3af")+"&texttrack=fr")&&h(a,"src",u),1&t&&$!==($=e[0].presentation.title+"")&&(g.innerHTML=$)},d(e){e&&f(t)}}}function ge(e){let t,r,s,a,l,c;return{c(){t=n("div"),r=n("img"),this.h()},l(e){t=o(e,"DIV",{class:!0,id:!0});var s=d(t);r=o(s,"IMG",{width:!0,height:!0,class:!0,alt:!0,title:!0,src:!0}),s.forEach(f),this.h()},h(){h(r,"width","248"),h(r,"height","351"),h(r,"class","deepzoom-thumb svelte-1gjdwv4"),h(r,"alt","Cliquer pour agrandir"),h(r,"title",s=e[0].deepzoom[0].title||""),S(r.src,a="/henri/dzi/"+e[0].deepzoom[0].name+"/thumb.jpg")||h(r,"src",a),h(t,"class","deepzoom-thumb-container svelte-1gjdwv4"),h(t,"id","dzi"),p(t,"ispick",1===e[0].status)},m(s,a){i(s,t,a),v(t,r),l||(c=[g(r,"click",e[3]),g(r,"keydown",e[4])],l=!0)},p(e,i){1&i&&s!==(s=e[0].deepzoom[0].title||"")&&h(r,"title",s),1&i&&!S(r.src,a="/henri/dzi/"+e[0].deepzoom[0].name+"/thumb.jpg")&&h(r,"src",a),1&i&&p(t,"ispick",1===e[0].status)},d(e){e&&f(t),l=!1,$(c)}}}function $e(e){let t,r,s=e[0].isCatFilm&&be(e),a=e[0].links||[],l=[];for(let t=0;t<a.length;t+=1)l[t]=Ee(ie(e,a,t));return{c(){t=n("div"),s&&s.c(),r=c();for(let e=0;e<l.length;e+=1)l[e].c()},l(e){t=o(e,"DIV",{});var a=d(t);s&&s.l(a),r=m(a);for(let e=0;e<l.length;e+=1)l[e].l(a);a.forEach(f)},m(e,a){i(e,t,a),s&&s.m(t,null),v(t,r);for(let e=0;e<l.length;e+=1)l[e].m(t,null)},p(e,i){if(e[0].isCatFilm?s?s.p(e,i):(s=be(e),s.c(),s.m(t,r)):s&&(s.d(1),s=null),1&i){let r;for(a=e[0].links||[],r=0;r<a.length;r+=1){const s=ie(e,a,r);l[r]?l[r].p(s,i):(l[r]=Ee(s),l[r].c(),l[r].m(t,null))}for(;r<l.length;r+=1)l[r].d(1);l.length=a.length}},d(e){e&&f(t),s&&s.d(),z(l,e)}}}function be(e){let t,r,s,a,c,m=B.artTitre(e[0].artFr,e[0].titreFr)+"";return{c(){t=n("a"),r=l("Plus de détails sur « "),s=l(m),a=l(" » sur le Catalogue des restaurations et tirages de la\r\n              Cinémathèque française"),this.h()},l(e){t=o(e,"A",{class:!0,href:!0});var i=d(t);r=u(i,"Plus de détails sur « "),s=u(i,m),a=u(i," » sur le Catalogue des restaurations et tirages de la\r\n              Cinémathèque française"),i.forEach(f),this.h()},h(){h(t,"class","catfilm colored"),h(t,"href",c="https://www.cinematheque.fr/catalogues/restaurations-tirages/film.php?id="+e[0].pk)},m(e,n){i(e,t,n),v(t,r),v(t,s),v(t,a)},p(e,r){1&r&&m!==(m=B.artTitre(e[0].artFr,e[0].titreFr)+"")&&F(s,m),1&r&&c!==(c="https://www.cinematheque.fr/catalogues/restaurations-tirages/film.php?id="+e[0].pk)&&h(t,"href",c)},d(e){e&&f(t)}}}function Ee(e){let t,r,s,a,l=e[5].text+"";return{c(){t=n("a"),r=new C(!1),s=c(),this.h()},l(e){t=o(e,"A",{class:!0,href:!0});var a=d(t);r=N(a,!1),s=m(a),a.forEach(f),this.h()},h(){r.a=s,h(t,"class","catfilm colored"),h(t,"href",a=e[5].url)},m(e,a){i(e,t,a),r.m(l,t),v(t,s)},p(e,s){1&s&&l!==(l=e[5].text+"")&&r.p(l),1&s&&a!==(a=e[5].url)&&h(t,"href",a)},d(e){e&&f(t)}}}function we(e){let t,r,s,a=e[0].encadre+"";return{c(){t=n("section"),r=n("div"),s=n("article"),this.h()},l(e){t=o(e,"SECTION",{class:!0});var a=d(t);r=o(a,"DIV",{class:!0});var i=d(r);s=o(i,"ARTICLE",{}),d(s).forEach(f),i.forEach(f),a.forEach(f),this.h()},h(){h(r,"class","container"),h(t,"class","encadre")},m(e,n){i(e,t,n),v(t,r),v(r,s),s.innerHTML=a},p(e,t){1&t&&a!==(a=e[0].encadre+"")&&(s.innerHTML=a)},d(e){e&&f(t)}}}function ye(e){let t,r;return t=new te({props:{$$slots:{default:[Ie]},$$scope:{ctx:e}}}),{c(){j(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,s){R(t,e,s),r=!0},p(e,r){const s={};257&r&&(s.$$scope={dirty:r,ctx:e}),t.$set(s)},i(e){r||(y(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){H(t,e)}}}function Ie(e){let t,r;return t=new ae({props:{tileSources:"/henri/dzi/"+e[0].deepzoom[0].name+"/output.dzi"}}),{c(){j(t.$$.fragment)},l(e){P(t.$$.fragment,e)},m(e,s){R(t,e,s),r=!0},p(e,r){const s={};1&r&&(s.tileSources="/henri/dzi/"+e[0].deepzoom[0].name+"/output.dzi"),t.$set(s)},i(e){r||(y(t.$$.fragment,e),r=!0)},o(e){I(t.$$.fragment,e),r=!1},d(e){H(t,e)}}}function Ve(e){let t,r,s,g,$,b,E,w,V,k,A,M,T,x,D,S,z,j,P,R,H,U,Y,O,J,Z,G,Q,W,X,K,ee,te,re,se,ae,ie,ce,oe,de,he,be,Ee,Ie,Ve,ke,Ae,Me,Te,xe,De,Fe,Se,Ce,Ne,ze,je,Pe,Re=e[0].section+"",He=`${B.artTitre(e[0].artFr,e[0].titreFr)}${B.beforeAfterStr('<div class="sous-titre-fr">',"</div>",e[0].sousTitreFr)}`,qe=e[0].realisateurs+"",Le=B.beforeAfterStr(""," / ",e[0].pays)+"",_e=e[0].annee+"",Ue=e[0].duree+"",Ye=B.beforeAfterStr(" / ","",e[0].version)+"",Be=B.beforeAfterStr("<div>","</div>",e[0].adaptation)+"",Oe=B.beforeAfterStr("<div>Avec ",".</div>",e[0].interpretation)+"",Je=B.beforeAfterStr("<div>Accompagnement musical par ",".</div>",e[0].accompagnement)+"",Ze=B.beforeAfterStr('<div class="synopsis">',"</div>",e[0].synopsis)+"",Ge=B.beforeAfterStr('<div class="rem">',"</div>",e[0].remarque)+"",Qe=B.beforeAfterStr("<div>","</div>",e[0].restauration)+"",We=B.beforeAfterStr("<hr><div>","</div>",e[0].comment)+"";document.title=A="\r\n    "+B.artTitre(e[0].artFr,e[0].titreFr)+"\r\n    ("+e[0].realisateurs+",\r\n    "+e[0].annee+") - HENRI - La Cinémathèque française\r\n  ";const Xe=[le,ne],Ke=[];function et(e,t){return 3===e[0].status?0:1}D=et(e),S=Ke[D]=Xe[D](e);let tt=e[0].dateUnpublished&&3!==e[0].status&&ue(e);function rt(e,t){return e[0].titreNx?me:e[0].titreVo?fe:void 0}let st=rt(e),at=st&&st(e),it=e[0].isCC&&pe(),nt=e[0].presentation&&e[0].presentation.vimeo&&ve(e),lt=e[0].deepzoom&&ge(e),ct=(e[0].isCatFilm||e[0].links)&&$e(e),ot=e[0].encadre&&we(e),dt=e[0].deepzoom&&ye(e);return{c(){t=n("meta"),r=n("meta"),g=n("meta"),b=n("meta"),w=n("meta"),V=n("meta"),k=n("meta"),M=c(),T=n("section"),x=n("div"),S.c(),z=c(),j=n("article"),tt&&tt.c(),P=c(),R=n("div"),H=n("div"),U=l(Re),Y=c(),O=n("div"),J=n("h1"),Z=c(),at&&at.c(),G=c(),Q=n("div"),W=l(qe),X=c(),K=n("div"),ee=l(Le),te=l(_e),re=l("\r\n        /\r\n        "),se=l(Ue),ae=l(Ye),ie=c(),it&&it.c(),ce=c(),oe=new C(!1),de=c(),he=new C(!1),be=c(),Ee=new C(!1),Ie=c(),Ve=new C(!1),ke=c(),Ae=new C(!1),Me=c(),Te=new C(!1),xe=c(),nt&&nt.c(),De=c(),Fe=new C(!1),Se=c(),lt&&lt.c(),Ce=c(),ct&&ct.c(),Ne=c(),ot&&ot.c(),ze=c(),dt&&dt.c(),je=a(),this.h()},l(e){const s=q("svelte-umrx2v",document.head);t=o(s,"META",{property:!0,content:!0}),r=o(s,"META",{property:!0,content:!0}),g=o(s,"META",{property:!0,content:!0}),b=o(s,"META",{property:!0,content:!0}),w=o(s,"META",{property:!0,content:!0}),V=o(s,"META",{property:!0,content:!0}),k=o(s,"META",{property:!0,content:!0}),s.forEach(f),M=m(e),T=o(e,"SECTION",{class:!0});var i=d(T);x=o(i,"DIV",{class:!0});var n=d(x);S.l(n),z=m(n),j=o(n,"ARTICLE",{});var l=d(j);tt&&tt.l(l),P=m(l),R=o(l,"DIV",{});var c=d(R);H=o(c,"DIV",{class:!0});var h=d(H);U=u(h,Re),h.forEach(f),c.forEach(f),Y=m(l),O=o(l,"DIV",{class:!0});var p=d(O);J=o(p,"H1",{class:!0}),d(J).forEach(f),Z=m(p),at&&at.l(p),p.forEach(f),G=m(l),Q=o(l,"DIV",{class:!0});var v=d(Q);W=u(v,qe),v.forEach(f),X=m(l),K=o(l,"DIV",{});var $=d(K);ee=u($,Le),te=u($,_e),re=u($,"\r\n        /\r\n        "),se=u($,Ue),ae=u($,Ye),ie=m($),it&&it.l($),$.forEach(f),ce=m(l),oe=N(l,!1),de=m(l),he=N(l,!1),be=m(l),Ee=N(l,!1),Ie=m(l),Ve=N(l,!1),ke=m(l),Ae=N(l,!1),Me=m(l),Te=N(l,!1),xe=m(l),nt&&nt.l(l),De=m(l),Fe=N(l,!1),Se=m(l),lt&&lt.l(l),Ce=m(l),ct&&ct.l(l),l.forEach(f),n.forEach(f),i.forEach(f),Ne=m(e),ot&&ot.l(e),ze=m(e),dt&&dt.l(e),je=a(),this.h()},h(){h(t,"property","og:title"),h(t,"content",e[2]),h(r,"property","og:url"),h(r,"content",s="https://www.cinematheque.fr/henri/film/"+e[0].slug+"/"),h(g,"property","og:description"),h(g,"content",$=e[0].synopsis?.replace(/<([^>]+)>/gi,"")||""),h(b,"property","og:image"),h(b,"content",E=e[0].image.medium),h(w,"property","og:image:type"),h(w,"content","image/jpeg"),h(V,"property","og:image:width"),h(V,"content","528"),h(k,"property","og:image:height"),h(k,"content","396"),h(H,"class","collection"),h(J,"class","colored"),h(O,"class","titre-film"),h(Q,"class","realisateurs"),oe.a=de,he.a=be,Ee.a=Ie,Ve.a=ke,Ae.a=Me,Te.a=xe,Fe.a=Se,h(x,"class","container"),h(T,"class","film-page"),p(T,"archived",3===e[0].status),p(T,"ispick",1===e[0].status)},m(e,s){v(document.head,t),v(document.head,r),v(document.head,g),v(document.head,b),v(document.head,w),v(document.head,V),v(document.head,k),i(e,M,s),i(e,T,s),v(T,x),Ke[D].m(x,null),v(x,z),v(x,j),tt&&tt.m(j,null),v(j,P),v(j,R),v(R,H),v(H,U),v(j,Y),v(j,O),v(O,J),J.innerHTML=He,v(O,Z),at&&at.m(O,null),v(j,G),v(j,Q),v(Q,W),v(j,X),v(j,K),v(K,ee),v(K,te),v(K,re),v(K,se),v(K,ae),v(K,ie),it&&it.m(K,null),v(j,ce),oe.m(Be,j),v(j,de),he.m(Oe,j),v(j,be),Ee.m(Je,j),v(j,Ie),Ve.m(Ze,j),v(j,ke),Ae.m(Ge,j),v(j,Me),Te.m(Qe,j),v(j,xe),nt&&nt.m(j,null),v(j,De),Fe.m(We,j),v(j,Se),lt&&lt.m(j,null),v(j,Ce),ct&&ct.m(j,null),i(e,Ne,s),ot&&ot.m(e,s),i(e,ze,s),dt&&dt.m(e,s),i(e,je,s),Pe=!0},p(e,[t]){(!Pe||1&t&&s!==(s="https://www.cinematheque.fr/henri/film/"+e[0].slug+"/"))&&h(r,"content",s),(!Pe||1&t&&$!==($=e[0].synopsis?.replace(/<([^>]+)>/gi,"")||""))&&h(g,"content",$),(!Pe||1&t&&E!==(E=e[0].image.medium))&&h(b,"content",E),(!Pe||1&t)&&A!==(A="\r\n    "+B.artTitre(e[0].artFr,e[0].titreFr)+"\r\n    ("+e[0].realisateurs+",\r\n    "+e[0].annee+") - HENRI - La Cinémathèque française\r\n  ")&&(document.title=A);let a=D;D=et(e),D===a?Ke[D].p(e,t):(_(),I(Ke[a],1,1,(()=>{Ke[a]=null})),L(),S=Ke[D],S?S.p(e,t):(S=Ke[D]=Xe[D](e),S.c()),y(S,1),S.m(x,z)),e[0].dateUnpublished&&3!==e[0].status?tt?tt.p(e,t):(tt=ue(e),tt.c(),tt.m(j,P)):tt&&(tt.d(1),tt=null),(!Pe||1&t)&&Re!==(Re=e[0].section+"")&&F(U,Re),(!Pe||1&t)&&He!==(He=`${B.artTitre(e[0].artFr,e[0].titreFr)}${B.beforeAfterStr('<div class="sous-titre-fr">',"</div>",e[0].sousTitreFr)}`)&&(J.innerHTML=He),st===(st=rt(e))&&at?at.p(e,t):(at&&at.d(1),at=st&&st(e),at&&(at.c(),at.m(O,null))),(!Pe||1&t)&&qe!==(qe=e[0].realisateurs+"")&&F(W,qe),(!Pe||1&t)&&Le!==(Le=B.beforeAfterStr(""," / ",e[0].pays)+"")&&F(ee,Le),(!Pe||1&t)&&_e!==(_e=e[0].annee+"")&&F(te,_e),(!Pe||1&t)&&Ue!==(Ue=e[0].duree+"")&&F(se,Ue),(!Pe||1&t)&&Ye!==(Ye=B.beforeAfterStr(" / ","",e[0].version)+"")&&F(ae,Ye),e[0].isCC?it||(it=pe(),it.c(),it.m(K,null)):it&&(it.d(1),it=null),(!Pe||1&t)&&Be!==(Be=B.beforeAfterStr("<div>","</div>",e[0].adaptation)+"")&&oe.p(Be),(!Pe||1&t)&&Oe!==(Oe=B.beforeAfterStr("<div>Avec ",".</div>",e[0].interpretation)+"")&&he.p(Oe),(!Pe||1&t)&&Je!==(Je=B.beforeAfterStr("<div>Accompagnement musical par ",".</div>",e[0].accompagnement)+"")&&Ee.p(Je),(!Pe||1&t)&&Ze!==(Ze=B.beforeAfterStr('<div class="synopsis">',"</div>",e[0].synopsis)+"")&&Ve.p(Ze),(!Pe||1&t)&&Ge!==(Ge=B.beforeAfterStr('<div class="rem">',"</div>",e[0].remarque)+"")&&Ae.p(Ge),(!Pe||1&t)&&Qe!==(Qe=B.beforeAfterStr("<div>","</div>",e[0].restauration)+"")&&Te.p(Qe),e[0].presentation&&e[0].presentation.vimeo?nt?nt.p(e,t):(nt=ve(e),nt.c(),nt.m(j,De)):nt&&(nt.d(1),nt=null),(!Pe||1&t)&&We!==(We=B.beforeAfterStr("<hr><div>","</div>",e[0].comment)+"")&&Fe.p(We),e[0].deepzoom?lt?lt.p(e,t):(lt=ge(e),lt.c(),lt.m(j,Ce)):lt&&(lt.d(1),lt=null),e[0].isCatFilm||e[0].links?ct?ct.p(e,t):(ct=$e(e),ct.c(),ct.m(j,null)):ct&&(ct.d(1),ct=null),(!Pe||1&t)&&p(T,"archived",3===e[0].status),(!Pe||1&t)&&p(T,"ispick",1===e[0].status),e[0].encadre?ot?ot.p(e,t):(ot=we(e),ot.c(),ot.m(ze.parentNode,ze)):ot&&(ot.d(1),ot=null),e[0].deepzoom?dt?(dt.p(e,t),1&t&&y(dt,1)):(dt=ye(e),dt.c(),y(dt,1),dt.m(je.parentNode,je)):dt&&(_(),I(dt,1,1,(()=>{dt=null})),L())},i(e){Pe||(y(S),y(dt),Pe=!0)},o(e){I(S),I(dt),Pe=!1},d(e){f(t),f(r),f(g),f(b),f(w),f(V),f(k),e&&f(M),e&&f(T),Ke[D].d(),tt&&tt.d(),at&&at.d(),it&&it.d(),nt&&nt.d(),lt&&lt.d(),ct&&ct.d(),e&&f(Ne),ot&&ot.d(e),e&&f(ze),dt&&dt.d(e),e&&f(je)}}}async function ke({params:e,query:t}){let r=await this.fetch(`film/${e.slug}.json`);if(200===r.status)return{film:await r.json()};this.error(r.status,r.message)}function Ae(e,t,r){let s;A(e,X,(e=>r(1,s=e))),Y.locale("fr");let{film:a}=t;const i=`${B.artTitre(a.artFr,a.titreFr)} (${a.realisateurs}, ${a.annee}) à voir en ligne sur HENRI, la plateforme des collections films de la Cinémathèque française`;var n;a=V(n=a).assign({status:(1===n.status||2===n.status)&&n.dateUnpublished&&Y().isAfter(n.dateUnpublished,"day")?3:n.status}).value();return e.$$set=e=>{"film"in e&&r(0,a=e.film)},[a,s,i,()=>{M(X,s=!0,s)},e=>{"Enter"===e.code&&M(X,s=!0,s)}]}export default class extends e{constructor(e){super(),t(this,e,Ae,Ve,r,{film:0})}}export{ke as preload};

import __inject_styles from './inject_styles.5607aec6.js';