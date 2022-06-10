import{$ as V,a0 as w,S as k,i as v,s as p,Y as P,e as S,c as C,a as E,d as f,g,M as z,N as B,O as F,q as _,a1 as j,o as b,a2 as D,l as O,L as H,n as N,E as W,p as Y,J as A,b as J,f as M}from"./index-c6db0c01.js";const L=()=>{const n=V("__svelte__");return{page:{subscribe:n.page.subscribe},navigating:{subscribe:n.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:n.navigating.subscribe}},session:n.session,updated:n.updated}},kn={subscribe(n){return L().page.subscribe(n)}};var vn={comms:"askme",comm_form:"http://dance.goat.dance/",links:{home:{sname:"Home",path:"/"},prices:{sname:"Prices",path:"http://dance.goat.dance/"},ych:{sname:"YCH",path:"http://dance.goat.dance/"},termsfaq:{sname:"Terms / FAQ",path:"http://dance.goat.dance/"},about:{sname:"About",path:"/about"}},external:{placeholder:"http://dance.goat.dance/",twitter:"https://twitter.com/floofybluething",trello:"https://trello.com/b/zi6VfP7F/stuff",patreon:"http://dance.goat.dance/"},colors:{teg_grey:"#192231",teg_bloo:"#44daff",teg_light:"#35AEFF",teg_dark:"#01327E"}};function Q(n){const t=2.5949095;return(n*=2)<1?.5*(n*n*((t+1)*n-t)):.5*((n-=2)*n*((t+1)*n+t)+2)}function G(n){return n*n*((1.70158+1)*n-1.70158)}function K(n){return--n*n*((1.70158+1)*n+1.70158)+1}function I(n){const t=.36363636363636365,o=8/11,s=9/10,a=4356/361,r=35442/1805,e=16061/1805,u=n*n;return n<t?7.5625*u:n<o?9.075*u-9.9*n+3.4:n<s?a*u-r*n+e:10.8*n*n-20.52*n+10.72}function R(n){return n<.5?.5*(1-I(1-n*2)):.5*I(n*2-1)+.5}function U(n){return 1-I(1-n)}function X(n){return(n*=2)<1?-.5*(Math.sqrt(1-n*n)-1):.5*(Math.sqrt(1-(n-=2)*n)+1)}function Z(n){return 1-Math.sqrt(1-n*n)}function x(n){return Math.sqrt(1- --n*n)}function $(n){return n<.5?4*n*n*n:.5*Math.pow(2*n-2,3)+1}function T(n){return n*n*n}function m(n){const t=n-1;return t*t*t+1}function nn(n){return n<.5?.5*Math.sin(13*Math.PI/2*2*n)*Math.pow(2,10*(2*n-1)):.5*Math.sin(-13*Math.PI/2*(2*n-1+1))*Math.pow(2,-10*(2*n-1))+1}function tn(n){return Math.sin(13*n*Math.PI/2)*Math.pow(2,10*(n-1))}function en(n){return Math.sin(-13*(n+1)*Math.PI/2)*Math.pow(2,-10*n)+1}function un(n){return n===0||n===1?n:n<.5?.5*Math.pow(2,20*n-10):-.5*Math.pow(2,10-n*20)+1}function on(n){return n===0?n:Math.pow(2,10*(n-1))}function an(n){return n===1?n:1-Math.pow(2,-10*n)}function rn(n){return n/=.5,n<1?.5*n*n:(n--,-.5*(n*(n-2)-1))}function sn(n){return n*n}function cn(n){return-n*(n-2)}function ln(n){return n<.5?8*Math.pow(n,4):-8*Math.pow(n-1,4)+1}function fn(n){return Math.pow(n,4)}function dn(n){return Math.pow(n-1,3)*(1-n)+1}function hn(n){return(n*=2)<1?.5*n*n*n*n*n:.5*((n-=2)*n*n*n*n+2)}function _n(n){return n*n*n*n*n}function bn(n){return--n*n*n*n*n+1}function In(n){return-.5*(Math.cos(Math.PI*n)-1)}function pn(n){const t=Math.cos(n*Math.PI*.5);return Math.abs(t)<1e-14?1:1-t}function gn(n){return Math.sin(n*Math.PI/2)}var Pn=Object.freeze(Object.defineProperty({__proto__:null,backIn:G,backInOut:Q,backOut:K,bounceIn:U,bounceInOut:R,bounceOut:I,circIn:Z,circInOut:X,circOut:x,cubicIn:T,cubicInOut:$,cubicOut:m,elasticIn:tn,elasticInOut:nn,elasticOut:en,expoIn:on,expoInOut:un,expoOut:an,quadIn:sn,quadInOut:rn,quadOut:cn,quartIn:fn,quartInOut:ln,quartOut:dn,quintIn:_n,quintInOut:hn,quintOut:bn,sineIn:pn,sineInOut:In,sineOut:gn,linear:w},Symbol.toStringTag,{value:"Module"}));function Sn(n,{delay:t=0,duration:o=400,easing:s=w}={}){const a=+getComputedStyle(n).opacity;return{delay:t,duration:o,easing:s,css:r=>`opacity: ${r*a}`}}function y(n,{delay:t=0,duration:o=400,easing:s=m,x:a=0,y:r=0,opacity:e=0}={}){const u=getComputedStyle(n),i=+u.opacity,l=u.transform==="none"?"":u.transform,d=i*(1-e);return{delay:t,duration:o,easing:s,css:(h,c)=>`
			transform: ${l} translate(${(1-h)*a}px, ${(1-h)*r}px);
			opacity: ${i-d*c}`}}function q(n){let t,o,s,a;const r=n[7].default,e=A(r,n,n[6],null);return{c(){t=S("div"),e&&e.c()},l(u){t=C(u,"DIV",{});var i=E(t);e&&e.l(i),i.forEach(f)},m(u,i){g(u,t,i),e&&e.m(t,null),a=!0},p(u,i){n=u,e&&e.p&&(!a||i&64)&&z(e,r,n,n[6],a?F(r,n[6],i,null):B(n[6]),null)},i(u){a||(_(e,u),P(()=>{s&&s.end(1),o=j(t,y,{y:n[2]*-1,duration:n[3],delay:n[0]*n[4],easing:m}),o.start()}),a=!0)},o(u){b(e,u),o&&o.invalidate(),s=D(t,y,{y:n[2],duration:n[0],easing:T}),a=!1},d(u){u&&f(t),e&&e.d(u),u&&s&&s.end()}}}function mn(n){let t=n[1],o,s,a,r;P(n[8]);let e=q(n);return{c(){e.c(),o=O()},l(u){e.l(u),o=O()},m(u,i){e.m(u,i),g(u,o,i),s=!0,a||(r=H(window,"resize",n[8]),a=!0)},p(u,[i]){i&2&&p(t,t=u[1])?(N(),b(e,1,1,W),Y(),e=q(u),e.c(),_(e,1),e.m(o.parentNode,o)):e.p(u,i)},i(u){s||(_(e),s=!0)},o(u){b(e),s=!1},d(u){u&&f(o),e.d(u),a=!1,r()}}}const On=700;function Mn(n,t,o){let{$$slots:s={},$$scope:a}=t,r,{url:e=""}=t,{dist:u=35}=t,{duration:i=300}=t,{outduration:l=i*.5}=t,{delayconst:d=.75}=t;function h(){o(5,r=window.outerWidth)}return n.$$set=c=>{"url"in c&&o(1,e=c.url),"dist"in c&&o(2,u=c.dist),"duration"in c&&o(3,i=c.duration),"outduration"in c&&o(0,l=c.outduration),"delayconst"in c&&o(4,d=c.delayconst),"$$scope"in c&&o(6,a=c.$$scope)},n.$$.update=()=>{n.$$.dirty&40&&o(0,l=r>On?i*.5:0)},[l,e,u,i,d,r,a,s,h]}class Cn extends k{constructor(t){super();v(this,t,Mn,mn,p,{url:1,dist:2,duration:3,outduration:0,delayconst:4})}}function yn(n){let t,o;const s=n[2].default,a=A(s,n,n[1],null);return{c(){t=S("div"),a&&a.c(),this.h()},l(r){t=C(r,"DIV",{class:!0});var e=E(t);a&&a.l(e),e.forEach(f),this.h()},h(){J(t,"class","body-div svelte-1w141b7"),M(t,"background",n[0],!1)},m(r,e){g(r,t,e),a&&a.m(t,null),o=!0},p(r,[e]){a&&a.p&&(!o||e&2)&&z(a,s,r,r[1],o?F(s,r[1],e,null):B(r[1]),null),e&1&&M(t,"background",r[0],!1)},i(r){o||(_(a,r),o=!0)},o(r){b(a,r),o=!1},d(r){r&&f(t),a&&a.d(r)}}}function qn(n,t,o){let{$$slots:s={},$$scope:a}=t,{color:r}=t;return n.$$set=e=>{"color"in e&&o(0,r=e.color),"$$scope"in e&&o(1,a=e.$$scope)},[r,a,s]}class En extends k{constructor(t){super();v(this,t,qn,yn,p,{color:0})}}export{En as B,Cn as P,Sn as a,Pn as e,y as f,vn as g,kn as p};
