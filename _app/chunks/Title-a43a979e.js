import{S as B,i as C,s as G,Y as M,e as w,k as I,w as J,c as T,a as q,d as p,m as V,x as L,b as D,f as n,g as H,T as b,y as N,L as P,q as S,o as Y,B as X,G as A,P as F,J as K,t as Q,h as R,j as U,M as W,N as Z,O as y,a1 as $}from"./index-f3d7a0da.js";import{P as x,p as ee,a as ae}from"./PageTransition-d40d3932.js";function se(e){let s,r,_,m,l,o,g;const d=e[8].default,i=K(d,e,e[11],null);return{c(){s=w("div"),r=w("div"),_=Q(e[1]),m=I(),l=w("div"),i&&i.c(),this.h()},l(a){s=T(a,"DIV",{class:!0});var f=q(s);r=T(f,"DIV",{class:!0});var u=q(r);_=R(u,e[1]),u.forEach(p),m=V(f),l=T(f,"DIV",{class:!0});var k=q(l);i&&i.l(k),k.forEach(p),f.forEach(p),this.h()},h(){D(r,"class","h1 title-head svelte-1kqfv8n"),D(l,"class","sub1 title-body"),D(s,"class","title svelte-1kqfv8n"),n(s,"bottom",`calc(100vh - ${e[2]})`,!1)},m(a,f){H(a,s,f),b(s,r),b(r,_),b(s,m),b(s,l),i&&i.m(l,null),g=!0},p(a,f){(!g||f&2)&&U(_,a[1]),i&&i.p&&(!g||f&2048)&&W(i,d,a,a[11],g?y(d,a[11],f,null):Z(a[11]),null),f&4&&n(s,"bottom",`calc(100vh - ${a[2]})`,!1)},i(a){g||(S(i,a),o||M(()=>{o=$(s,ae,{}),o.start()}),g=!0)},o(a){Y(i,a),g=!1},d(a){a&&p(s),i&&i.d(a)}}}function te(e){let s=!1,r=()=>{s=!1},_,m,l,o,g,d,i,a,f,u,k=`calc(100vh - ${e[2]} + ${Math.min(e[5],e[4])}px )`,E,c,O;return M(e[9]),M(e[10]),a=new x({props:{url:e[6].url.pathname,$$slots:{default:[se]},$$scope:{ctx:e}}}),{c(){m=w("div"),l=w("div"),o=w("div"),g=I(),d=w("div"),i=I(),J(a.$$.fragment),f=I(),u=w("div"),this.h()},l(t){m=T(t,"DIV",{});var h=q(m);l=T(h,"DIV",{class:!0});var v=q(l);o=T(v,"DIV",{class:!0}),q(o).forEach(p),g=V(v),d=T(v,"DIV",{class:!0}),q(d).forEach(p),i=V(v),L(a.$$.fragment,v),f=V(v),u=T(v,"DIV",{class:!0});var j=q(u);j.forEach(p),v.forEach(p),h.forEach(p),this.h()},h(){D(o,"class","out out-bg svelte-1kqfv8n"),n(o,"height",e[2],!1),n(o,"position","absolute",!1),n(o,"transform",`translate3d(0, ${e[4]<e[5]?e[4]*z:0}px, 0)`,!1),n(o,"background-image",`url(${e[0]})`,!1),D(d,"class","out out-overlay svelte-1kqfv8n"),n(d,"background-image",e[7],!1),n(d,"height",e[2],!1),D(u,"class","hidey-hole svelte-1kqfv8n"),n(u,"height",k,!1),n(u,"top",e[2],!1),n(u,"background",e[3],!1),D(l,"class","out svelte-1kqfv8n"),n(l,"height",e[2],!1)},m(t,h){H(t,m,h),b(m,l),b(l,o),b(l,g),b(l,d),b(l,i),N(a,l,null),b(l,f),b(l,u),E=!0,c||(O=[P(window,"scroll",()=>{s=!0,clearTimeout(_),_=setTimeout(r,100),e[9]()}),P(window,"resize",e[10])],c=!0)},p(t,[h]){h&16&&!s&&(s=!0,clearTimeout(_),scrollTo(window.pageXOffset,t[4]),_=setTimeout(r,100)),h&4&&n(o,"height",t[2],!1),h&48&&n(o,"transform",`translate3d(0, ${t[4]<t[5]?t[4]*z:0}px, 0)`,!1),h&1&&n(o,"background-image",`url(${t[0]})`,!1),h&4&&n(d,"height",t[2],!1);const v={};h&64&&(v.url=t[6].url.pathname),h&2054&&(v.$$scope={dirty:h,ctx:t}),a.$set(v),h&52&&k!==(k=`calc(100vh - ${t[2]} + ${Math.min(t[5],t[4])}px )`)&&n(u,"height",k,!1),h&4&&n(u,"top",t[2],!1),h&8&&n(u,"background",t[3],!1),h&4&&n(l,"height",t[2],!1)},i(t){E||(S(a.$$.fragment,t),E=!0)},o(t){Y(a.$$.fragment,t),E=!1},d(t){t&&p(m),X(a),c=!1,A(O)}}}const z=.6;function le(e,s,r){let _;F(e,ee,c=>r(6,_=c));let{$$slots:m={},$$scope:l}=s,{img:o}=s,{title:g}=s,{height:d="96vh"}=s,{background:i="black"}=s;const a=`linear-gradient(transparent 25%, ${i} 95%)`;let f,u;function k(){r(4,f=window.pageYOffset)}function E(){r(5,u=window.outerHeight)}return e.$$set=c=>{"img"in c&&r(0,o=c.img),"title"in c&&r(1,g=c.title),"height"in c&&r(2,d=c.height),"background"in c&&r(3,i=c.background),"$$scope"in c&&r(11,l=c.$$scope)},[o,g,d,i,f,u,_,a,m,k,E,l]}class oe extends B{constructor(s){super();C(this,s,le,te,G,{img:0,title:1,height:2,background:3})}}export{oe as T};