import{S as M,i as O,s as q,Y as z,e as D,k as C,w as N,c as E,a as I,d as v,m as P,x as X,b as w,f as u,g as S,T as k,y as F,L as G,q as y,o as R,B as K,G as Q,P as U,J as A,t as W,h as Z,j as p,M as H,N as Y,O as j,a1 as x}from"./index-207f0fa7.js";import{P as $,p as ee,a as le}from"./Body-6c35514c.js";var he="/_app/assets/about-02f61df6.png";function se(l){let e,a,d,n,s,t,i;const r=l[8].default,f=A(r,l,l[11],null);return{c(){e=D("div"),a=D("div"),d=W(l[1]),n=C(),s=D("div"),f&&f.c(),this.h()},l(h){e=E(h,"DIV",{class:!0});var c=I(e);a=E(c,"DIV",{class:!0});var o=I(a);d=Z(o,l[1]),o.forEach(v),n=P(c),s=E(c,"DIV",{class:!0});var T=I(s);f&&f.l(T),T.forEach(v),c.forEach(v),this.h()},h(){w(a,"class","h1 title-head svelte-2sexex"),w(s,"class","sub1 title-body"),w(e,"class","title svelte-2sexex"),u(e,"bottom",`calc(100vh - ${l[2]})`,!1)},m(h,c){S(h,e,c),k(e,a),k(a,d),k(e,n),k(e,s),f&&f.m(s,null),i=!0},p(h,c){(!i||c&2)&&p(d,h[1]),f&&f.p&&(!i||c&2048)&&H(f,r,h,h[11],i?j(r,h[11],c,null):Y(h[11]),null),c&4&&u(e,"bottom",`calc(100vh - ${h[2]})`,!1)},i(h){i||(y(f,h),t||z(()=>{t=x(e,le,{}),t.start()}),i=!0)},o(h){R(f,h),i=!1},d(h){h&&v(e),f&&f.d(h)}}}function te(l){let e=!1,a=()=>{e=!1},d,n,s,t,i,r,f,h,c,o,T=`calc(100vh - ${l[2]} + ${Math.min(l[5],l[4])}px )`,V,m,B;return z(l[9]),z(l[10]),h=new $({props:{url:l[6].url.pathname,$$slots:{default:[se]},$$scope:{ctx:l}}}),{c(){n=D("div"),s=D("div"),t=D("div"),i=C(),r=D("div"),f=C(),N(h.$$.fragment),c=C(),o=D("div"),this.h()},l(g){n=E(g,"DIV",{});var _=I(n);s=E(_,"DIV",{class:!0});var b=I(s);t=E(b,"DIV",{class:!0}),I(t).forEach(v),i=P(b),r=E(b,"DIV",{class:!0}),I(r).forEach(v),f=P(b),X(h.$$.fragment,b),c=P(b),o=E(b,"DIV",{class:!0});var L=I(o);L.forEach(v),b.forEach(v),_.forEach(v),this.h()},h(){w(t,"class","out out-bg svelte-2sexex"),u(t,"height",l[2],!1),u(t,"position","absolute",!1),u(t,"transform",`translate3d(0, ${l[4]<l[5]?l[4]*J:0}px, 0)`,!1),u(t,"background-image",`url(${l[0]})`,!1),w(r,"class","out out-overlay svelte-2sexex"),u(r,"background-image",l[7],!1),u(r,"height",l[2],!1),w(o,"class","hidey-hole svelte-2sexex"),u(o,"height",T,!1),u(o,"top",l[2],!1),u(o,"background",l[3],!1),w(s,"class","out svelte-2sexex"),u(s,"height",l[2],!1)},m(g,_){S(g,n,_),k(n,s),k(s,t),k(s,i),k(s,r),k(s,f),F(h,s,null),k(s,c),k(s,o),V=!0,m||(B=[G(window,"scroll",()=>{e=!0,clearTimeout(d),d=setTimeout(a,100),l[9]()}),G(window,"resize",l[10])],m=!0)},p(g,[_]){_&16&&!e&&(e=!0,clearTimeout(d),scrollTo(window.pageXOffset,g[4]),d=setTimeout(a,100)),_&4&&u(t,"height",g[2],!1),_&48&&u(t,"transform",`translate3d(0, ${g[4]<g[5]?g[4]*J:0}px, 0)`,!1),_&1&&u(t,"background-image",`url(${g[0]})`,!1),_&4&&u(r,"height",g[2],!1);const b={};_&64&&(b.url=g[6].url.pathname),_&2054&&(b.$$scope={dirty:_,ctx:g}),h.$set(b),_&52&&T!==(T=`calc(100vh - ${g[2]} + ${Math.min(g[5],g[4])}px )`)&&u(o,"height",T,!1),_&4&&u(o,"top",g[2],!1),_&8&&u(o,"background",g[3],!1),_&4&&u(s,"height",g[2],!1)},i(g){V||(y(h.$$.fragment,g),V=!0)},o(g){R(h.$$.fragment,g),V=!1},d(g){g&&v(n),K(h),m=!1,Q(B)}}}const J=.6;function ae(l,e,a){let d;U(l,ee,m=>a(6,d=m));let{$$slots:n={},$$scope:s}=e,{img:t}=e,{title:i}=e,{height:r="96vh"}=e,{background:f="black"}=e;const h=`linear-gradient(transparent 25%, ${f} 95%)`;let c,o;function T(){a(4,c=window.pageYOffset)}function V(){a(5,o=window.outerHeight)}return l.$$set=m=>{"img"in m&&a(0,t=m.img),"title"in m&&a(1,i=m.title),"height"in m&&a(2,r=m.height),"background"in m&&a(3,f=m.background),"$$scope"in m&&a(11,s=m.$$scope)},[t,i,r,f,c,o,d,h,n,T,V,s]}class de extends M{constructor(e){super();O(this,e,ae,te,q,{img:0,title:1,height:2,background:3})}}function ie(l){let e,a;const d=l[5].default,n=A(d,l,l[4],null);return{c(){e=D("div"),n&&n.c(),this.h()},l(s){e=E(s,"DIV",{class:!0});var t=I(e);n&&n.l(t),t.forEach(v),this.h()},h(){w(e,"class","card-outer"),u(e,"border-radius",l[1],!1),u(e,"padding",l[2],!1),u(e,"background",l[0],!1),u(e,"background-size","cover",!1),u(e,"background-position","center",!1),u(e,"max-width","100vw",!1)},m(s,t){S(s,e,t),n&&n.m(e,null),a=!0},p(s,[t]){n&&n.p&&(!a||t&16)&&H(n,d,s,s[4],a?j(d,s[4],t,null):Y(s[4]),null),t&2&&u(e,"border-radius",s[1],!1),t&4&&u(e,"padding",s[2],!1),t&1&&u(e,"background",s[0],!1)},i(s){a||(y(n,s),a=!0)},o(s){R(n,s),a=!1},d(s){s&&v(e),n&&n.d(s)}}}function ne(l,e,a){let{$$slots:d={},$$scope:n}=e,{background:s="#222222"}=e,{borderRadius:t="16px"}=e,{padding:i="3rem 2rem"}=e,{height:r}=e;return l.$$set=f=>{"background"in f&&a(0,s=f.background),"borderRadius"in f&&a(1,t=f.borderRadius),"padding"in f&&a(2,i=f.padding),"height"in f&&a(3,r=f.height),"$$scope"in f&&a(4,n=f.$$scope)},[s,t,i,r,n,d]}class ge extends M{constructor(e){super();O(this,e,ne,ie,q,{background:0,borderRadius:1,padding:2,height:3})}}function fe(l){let e,a,d,n;const s=l[8].default,t=A(s,l,l[7],null);return{c(){e=D("div"),t&&t.c(),this.h()},l(i){e=E(i,"DIV",{class:!0,style:!0});var r=I(e);t&&t.l(r),r.forEach(v),this.h()},h(){w(e,"class",a="hsp "+l[6]+" svelte-3hfet9"),w(e,"style",d="align-items: "+l[0]+"; flex-direction: "+l[1]+"; gap: "+l[2]+"; flex-wrap:wrap; "+l[5]),u(e,"width",l[3],!1),u(e,"height",l[4],!1)},m(i,r){S(i,e,r),t&&t.m(e,null),n=!0},p(i,[r]){t&&t.p&&(!n||r&128)&&H(t,s,i,i[7],n?j(s,i[7],r,null):Y(i[7]),null),(!n||r&64&&a!==(a="hsp "+i[6]+" svelte-3hfet9"))&&w(e,"class",a),(!n||r&39&&d!==(d="align-items: "+i[0]+"; flex-direction: "+i[1]+"; gap: "+i[2]+"; flex-wrap:wrap; "+i[5]))&&w(e,"style",d),r&8&&u(e,"width",i[3],!1),r&16&&u(e,"height",i[4],!1)},i(i){n||(y(t,i),n=!0)},o(i){R(t,i),n=!1},d(i){i&&v(e),t&&t.d(i)}}}function oe(l,e,a){let{$$slots:d={},$$scope:n}=e,{align:s}=e,{direction:t}=e,{gap:i}=e,{width:r}=e,{height:f}=e,{style:h=""}=e,{styleClass:c=""}=e;return l.$$set=o=>{"align"in o&&a(0,s=o.align),"direction"in o&&a(1,t=o.direction),"gap"in o&&a(2,i=o.gap),"width"in o&&a(3,r=o.width),"height"in o&&a(4,f=o.height),"style"in o&&a(5,h=o.style),"styleClass"in o&&a(6,c=o.styleClass),"$$scope"in o&&a(7,n=o.$$scope)},[s,t,i,r,f,h,c,n,d]}class ce extends M{constructor(e){super();O(this,e,oe,fe,q,{align:0,direction:1,gap:2,width:3,height:4,style:5,styleClass:6})}}export{he as A,ge as C,ce as S,de as T};
