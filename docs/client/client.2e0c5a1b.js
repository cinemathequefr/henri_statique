function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function w(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?h(e):d(e)}function b(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function E(t){return b(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}class x{constructor(t,e=null){this.e=d("div"),this.a=e,this.u(t)}m(t,e=null){for(let n=0;n<this.n.length;n+=1)u(t,this.n[n],e);this.t=t}u(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}p(t){this.d(),this.u(t),this.m(this.t,this.a)}d(){this.n.forEach(f)}}let j;function L(t){j=t}function A(){if(!j)throw new Error("Function called outside component initialization");return j}function P(t){A().$$.on_mount.push(t)}const R=[],C=[],N=[],O=[],q=Promise.resolve();let U=!1;function k(t){N.push(t)}let I=!1;const D=new Set;function T(){if(!I){I=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];L(e),H(e.$$)}for(R.length=0;C.length;)C.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];D.has(e)||(D.add(e),e())}N.length=0}while(R.length);for(;O.length;)O.pop()();U=!1,I=!1,D.clear()}}function H(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const V=new Set;let B;function J(){B={r:0,c:[],p:B}}function G(){B.r||s(B.c),B=B.p}function K(t,e){t&&t.i&&(V.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(V.has(t))return;V.add(t),B.c.push(()=>{V.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function z(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function X(t,e){t&&t.l(e)}function Y(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),k(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(k)}function Q(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(R.push(t),U||(U=!0,q.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,o,a,c,i,l=[-1]){const u=j;L(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=o?o(e,p,(t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=s)&&(d.bound[t]&&d.bound[t](s),h&&Z(e,t)),n}):[],d.update(),h=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=v(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&K(e.$$.fragment),Y(e,n.target,n.anchor),T()}L(u)}class et{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const nt=[];function rt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!nt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const st={},ot=()=>({});function at(e){let n,r,s,o,a,c,i,p,h,$,_,S,x,j,L,A,P,R;return{c(){n=d("nav"),r=d("ul"),s=d("li"),o=g(),a=d("li"),c=d("a"),i=m("Les films"),h=g(),$=d("li"),_=d("a"),S=m("À propos"),j=g(),L=d("li"),A=d("a"),P=m("CGU"),this.h()},l(t){var e=v(n=w(t,"NAV",{class:!0})),l=v(r=w(e,"UL",{class:!0}));v(s=w(l,"LI",{class:!0})).forEach(f),o=E(l);var u=v(a=w(l,"LI",{class:!0})),p=v(c=w(u,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));i=b(p,"Les films"),p.forEach(f),u.forEach(f),h=E(l);var d=v($=w(l,"LI",{class:!0})),m=v(_=w(d,"A",{"aria-current":!0,href:!0,class:!0}));S=b(m,"À propos"),m.forEach(f),d.forEach(f),j=E(l);var g=v(L=w(l,"LI",{class:!0})),y=v(A=w(g,"A",{"aria-current":!0,href:!0,class:!0}));P=b(y,"CGU"),y.forEach(f),g.forEach(f),l.forEach(f),e.forEach(f),this.h()},h(){y(s,"class","svelte-1er7d6j"),y(c,"rel","prefetch"),y(c,"aria-current",p="film"===e[0]?"page":void 0),y(c,"href","film"),y(c,"class","svelte-1er7d6j"),y(a,"class","svelte-1er7d6j"),y(_,"aria-current",x="a-propos"===e[0]?"a-propos":void 0),y(_,"href","a-propos"),y(_,"class","svelte-1er7d6j"),y($,"class","svelte-1er7d6j"),y(A,"aria-current",R="cgu"===e[0]?"cgu":void 0),y(A,"href","cgu"),y(A,"class","svelte-1er7d6j"),y(L,"class","svelte-1er7d6j"),y(r,"class","svelte-1er7d6j"),y(n,"class","svelte-1er7d6j")},m(t,e){u(t,n,e),l(n,r),l(r,s),l(r,o),l(r,a),l(a,c),l(c,i),l(r,h),l(r,$),l($,_),l(_,S),l(r,j),l(r,L),l(L,A),l(A,P)},p(t,[e]){1&e&&p!==(p="film"===t[0]?"page":void 0)&&y(c,"aria-current",p),1&e&&x!==(x="a-propos"===t[0]?"a-propos":void 0)&&y(_,"aria-current",x),1&e&&R!==(R="cgu"===t[0]?"cgu":void 0)&&y(A,"aria-current",R)},i:t,o:t,d(t){t&&f(n)}}}function ct(t,e,n){let{segment:r}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment)}),[r]}class it extends et{constructor(t){super(),tt(this,t,ct,at,a,{segment:0})}}function lt(e){let n,r,s,o;return{c(){n=d("footer"),r=d("section"),s=d("div"),o=m("© 2020 La Cinémathèque française"),this.h()},l(t){var e=v(n=w(t,"FOOTER",{class:!0})),a=v(r=w(e,"SECTION",{})),c=v(s=w(a,"DIV",{class:!0}));o=b(c,"© 2020 La Cinémathèque française"),c.forEach(f),a.forEach(f),e.forEach(f),this.h()},h(){y(s,"class","container"),y(n,"class","svelte-114tgr6")},m(t,e){u(t,n,e),l(n,r),l(r,s),l(s,o)},p:t,i:t,o:t,d(t){t&&f(n)}}}class ut extends et{constructor(t){super(),tt(this,t,null,lt,a,{})}}function ft(e){let n,r;return{c(){n=d("script"),this.h()},l(t){const e=S('[data-svelte="svelte-a2kvt3"]',document.head);v(n=w(e,"SCRIPT",{async:!0,src:!0})).forEach(f),e.forEach(f),this.h()},h(){n.async=!0,n.src!==(r="https://www.googletagmanager.com/gtag/js?id="+e[0])&&y(n,"src",r)},m(t,e){l(document.head,n)},p(t,[e]){1&e&&n.src!==(r="https://www.googletagmanager.com/gtag/js?id="+t[0])&&y(n,"src",r)},i:t,o:t,d(t){f(n)}}}function pt(t,e,n){let r,{stores:s}=e,{id:o}=e;"undefined"!=typeof window&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},window.gtag("js",new Date),window.gtag("config",o));const{page:a}=s();return c(t,a,t=>n(3,r=t)),t.$set=(t=>{"stores"in t&&n(2,s=t.stores),"id"in t&&n(0,o=t.id)}),t.$$.update=(()=>{9&t.$$.dirty&&"undefined"!=typeof gtag&&window.gtag("config",o,{page_path:r.path})}),[o,a,s]}class dt extends et{constructor(t){super(),tt(this,t,pt,ft,a,{stores:2,id:0})}}function ht(t){let e,n,r,s;const o=new dt({props:{stores:ie,id:mt}}),a=new it({props:{segment:t[0]}}),c=t[2].default,l=function(t,e,n,r){if(t){const s=i(t,e,n,r);return t[0](s)}}(c,t,t[1],null),p=new ut({});return{c(){W(o.$$.fragment),e=g(),W(a.$$.fragment),n=g(),l&&l.c(),r=g(),W(p.$$.fragment)},l(t){X(o.$$.fragment,t),e=E(t),X(a.$$.fragment,t),n=E(t),l&&l.l(t),r=E(t),X(p.$$.fragment,t)},m(t,c){Y(o,t,c),u(t,e,c),Y(a,t,c),u(t,n,c),l&&l.m(t,c),u(t,r,c),Y(p,t,c),s=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),a.$set(n),l&&l.p&&2&e&&l.p(i(c,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(c,t[1],e,null))},i(t){s||(K(o.$$.fragment,t),K(a.$$.fragment,t),K(l,t),K(p.$$.fragment,t),s=!0)},o(t){M(o.$$.fragment,t),M(a.$$.fragment,t),M(l,t),M(p.$$.fragment,t),s=!1},d(t){Q(o,t),t&&f(e),Q(a,t),t&&f(n),l&&l.d(t),t&&f(r),Q(p,t)}}}let mt="UA-12333853-2";function gt(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=(t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)}),[r,o,s]}class $t extends et{constructor(t){super(),tt(this,t,gt,ht,a,{segment:0})}}function yt(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=m(r)},l(t){var s=v(e=w(t,"PRE",{}));n=b(s,r),s.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&f(e)}}}function vt(e){let n,r,s,o,a,c,i,p,h,x=e[1].message+"";document.title=n=e[0];let j=e[2]&&e[1].stack&&yt(e);return{c(){r=g(),s=d("h1"),o=m(e[0]),a=g(),c=d("p"),i=m(x),p=g(),j&&j.c(),h=$(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=E(t);var n=v(s=w(t,"H1",{class:!0}));o=b(n,e[0]),n.forEach(f),a=E(t);var l=v(c=w(t,"P",{class:!0}));i=b(l,x),l.forEach(f),p=E(t),j&&j.l(t),h=$(),this.h()},h(){y(s,"class","svelte-8od9u6"),y(c,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,s,e),l(s,o),u(t,a,e),u(t,c,e),l(c,i),u(t,p,e),j&&j.m(t,e),u(t,h,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&_(o,t[0]),2&e&&x!==(x=t[1].message+"")&&_(i,x),t[2]&&t[1].stack?j?j.p(t,e):((j=yt(t)).c(),j.m(h.parentNode,h)):j&&(j.d(1),j=null)},i:t,o:t,d(t){t&&f(r),t&&f(s),t&&f(a),t&&f(c),t&&f(p),j&&j.d(t),t&&f(h)}}}function wt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=(t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)}),[r,s,!1]}class bt extends et{constructor(t){super(),tt(this,t,wt,vt,a,{status:0,error:1})}}function Et(t){let n,r;const s=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a());return{c(){c&&W(c.$$.fragment),n=$()},l(t){c&&X(c.$$.fragment,t),n=$()},m(t,e){c&&Y(c,t,e),u(t,n,e),r=!0},p(t,e){const r=16&e?z(s,[F(t[4].props)]):{};if(o!==(o=t[4].component)){if(c){J();const t=c;M(t.$$.fragment,1,0,()=>{Q(t,1)}),G()}o?(W((c=new o(a())).$$.fragment),K(c.$$.fragment,1),Y(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&K(c.$$.fragment,t),r=!0)},o(t){c&&M(c.$$.fragment,t),r=!1},d(t){t&&f(n),c&&Q(c,t)}}}function _t(t){let e;const n=new bt({props:{error:t[0],status:t[1]}});return{c(){W(n.$$.fragment)},l(t){X(n.$$.fragment,t)},m(t,r){Y(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(K(n.$$.fragment,t),e=!0)},o(t){M(n.$$.fragment,t),e=!1},d(t){Q(n,t)}}}function St(t){let e,n,r,s;const o=[_t,Et],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),u(t,r,n),s=!0},p(t,s){let i=e;(e=c(t))===i?a[e].p(t,s):(J(),M(a[i],1,1,()=>{a[i]=null}),G(),(n=a[e])||(n=a[e]=o[e](t)).c(),K(n,1),n.m(r.parentNode,r))},i(t){s||(K(n),s=!0)},o(t){M(n),s=!1},d(t){a[e].d(t),t&&f(r)}}}function xt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[St]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new $t({props:s});return{c(){W(o.$$.fragment)},l(t){X(o.$$.fragment,t)},m(t,e){Y(o,t,e),n=!0},p(t,[e]){const n=12&e?z(r,[4&e&&{segment:t[2][0]},8&e&&F(t[3].props)]):{};83&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(K(o.$$.fragment,t),n=!0)},o(t){M(o.$$.fragment,t),n=!1},d(t){Q(o,t)}}}function jt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e;var l,u;return l=st,u=r,A().$$.context.set(l,u),t.$set=(t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1)}),[s,o,a,c,i,r]}class Lt extends et{constructor(t){super(),tt(this,t,jt,xt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4})}}const At=[/^\/film.json$/,/^\/film\/([^\/]+?).json$/],Pt=[{js:()=>import("./index.d782d680.js"),css:["index.d782d680.css","client.2e0c5a1b.css","MainTitle.823dfa88.css"]},{js:()=>import("./a-propos.8c1cb4d4.js"),css:["a-propos.8c1cb4d4.css","client.2e0c5a1b.css","MainTitle.823dfa88.css"]},{js:()=>import("./index.5a3b75c1.js"),css:["client.2e0c5a1b.css","MainTitle.823dfa88.css"]},{js:()=>import("./[slug].925adf59.js"),css:["client.2e0c5a1b.css"]},{js:()=>import("./cgu.cfed5578.js"),css:["cgu.cfed5578.css","client.2e0c5a1b.css"]}],Rt=(t=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/a-propos\/?$/,parts:[{i:1}]},{pattern:/^\/film\/?$/,parts:[{i:2}]},{pattern:/^\/film\/([^\/]+?)\/?$/,parts:[null,{i:3,params:e=>({slug:t(e[1])})}]},{pattern:/^\/cgu\/?$/,parts:[{i:4}]}])(decodeURIComponent);const Ct="undefined"!=typeof __SAPPER__&&__SAPPER__;let Nt,Ot,qt,Ut=!1,kt=[],It="{}";const Dt={page:rt({}),preloading:rt(null),session:rt(Ct&&Ct.session)};let Tt,Ht;Dt.session.subscribe(async t=>{if(Tt=t,!Ut)return;Ht=!0;const e=Ft(new URL(location.href)),n=Ot={},{redirect:r,props:s,branch:o}=await Qt(e);n===Ot&&await Yt(r,o,s,e.page)});let Vt,Bt=null;let Jt,Gt=1;const Kt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Mt={};function zt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Ft(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Ct.baseUrl))return null;let e=t.pathname.slice(Ct.baseUrl.length);if(""===e&&(e="/"),!At.some(t=>t.test(e)))for(let n=0;n<Rt.length;n+=1){const r=Rt[n],s=r.pattern.exec(e);if(s){const n=zt(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Wt(){return{x:pageXOffset,y:pageYOffset}}async function Xt(t,e,n,r){if(e)Jt=e;else{const t=Wt();Mt[Jt]=t,e=Jt=++Gt,Mt[Jt]=n?t:{x:0,y:0}}Jt=e,Nt&&Dt.preloading.set(!0);const s=Bt&&Bt.href===t.href?Bt.promise:Qt(t);Bt=null;const o=Ot={},{redirect:a,props:c,branch:i}=await s;if(o===Ot&&(await Yt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Mt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top})}Mt[Jt]=t,t&&scrollTo(t.x,t.y)}}async function Yt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Ft(new URL(t,document.baseURI));return n?(Kt[e.replaceState?"replaceState":"pushState"]({id:Jt},"",t),Xt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Dt.page.set(r),Dt.preloading.set(!1),Nt)Nt.$set(n);else{n.stores={page:{subscribe:Dt.page.subscribe},preloading:{subscribe:Dt.preloading.subscribe},session:Dt.session},n.level0={props:await qt};const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)te(t.nextSibling);te(t),te(e)}Nt=new Lt({target:Vt,props:n,hydrate:!0})}kt=e,It=JSON.stringify(r.query),Ut=!0,Ht=!1}async function Qt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;qt||(qt=Ct.preloaded[0]||ot.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Tt));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==It)return!0;const s=kt[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ht&&!u&&kt[c]&&kt[c].part===e.i)return kt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Zt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Pt[e.i]);let m;return m=Ut||!Ct.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Tt):{}:Ct.preloaded[c+1],o[`level${p}`]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Zt(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=(()=>t()),r.onerror=n,document.head.appendChild(r)})}function te(t){t.parentNode.removeChild(t)}function ee(t){const e=Ft(new URL(t,document.baseURI));if(e)return Bt&&t===Bt.href||function(t,e){Bt={href:t,promise:e}}(t,Qt(e)),Bt.promise}let ne;function re(t){clearTimeout(ne),ne=setTimeout(()=>{se(t)},20)}function se(t){const e=ae(t.target);e&&"prefetch"===e.rel&&ee(e.href)}function oe(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ae(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Ft(s);if(o){Xt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Kt.pushState({id:Jt},"",s.href)}}function ae(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ce(t){if(Mt[Jt]=Wt(),t.state){const e=Ft(new URL(location.href));e?Xt(e,t.state.id):location.href=location.href}else(function(t){Jt=t})(Gt=Gt+1),Kt.replaceState({id:Jt},"",location.href)}const ie=()=>(function(t){return A().$$.context.get(t)})(st);!function(t){var e;"scrollRestoration"in Kt&&(Kt.scrollRestoration="manual"),e=t.target,Vt=e,addEventListener("click",oe),addEventListener("popstate",ce),addEventListener("touchstart",se),addEventListener("mousemove",re),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Kt.replaceState({id:Gt},"",e);const n=new URL(location.href);if(Ct.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=Ct;qt||(qt=o&&o[0]),Yt(null,[],{error:c,status:a,session:s,level0:{props:qt},level1:{props:{status:a,error:c},component:bt},segments:o},{host:e,path:n,query:zt(r),params:{}})}();const r=Ft(n);return r?Xt(r,Gt,!0,t):void 0})}({target:document.querySelector("#sapper")});export{x as H,et as S,h as a,g as b,w as c,v as d,d as e,f,E as g,b as h,tt as i,y as j,u as k,l,W as m,t as n,X as o,Y as p,S as q,K as r,a as s,m as t,M as u,Q as v,P as w,_ as x,p as y,$ as z};
