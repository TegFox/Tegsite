import{S as L,i as N,s as X,T as z,k,a as y,w as Y,l as T,m as D,h as w,c as H,x as j,n as I,L as M,p as o,b as O,I as b,y as A,M as q,f as P,t as S,z as B,N as G,H as J,C as K,q as Q,r as R,u as U,D as W,E as Z,F as $,V as x}from"./index-83c5a036.js";import{p as ee,a as te}from"./index-6a62affd.js";import{P as ae}from"./PageTransition-9a9b3699.js";function se(e){let a,r,_,m,l,i,d;const g=e[9].default,n=K(g,e,e[12],null);return{c(){a=k("div"),r=k("div"),_=Q(e[1]),m=y(),l=k("div"),n&&n.c(),this.h()},l(t){a=T(t,"DIV",{class:!0});var f=D(a);r=T(f,"DIV",{class:!0});var h=D(r);_=R(h,e[1]),h.forEach(w),m=H(f),l=T(f,"DIV",{class:!0});var p=D(l);n&&n.l(p),p.forEach(w),f.forEach(w),this.h()},h(){I(r,"class","h1 title-head svelte-170ypwh"),I(l,"class","sub1 title-body"),I(a,"class","title svelte-170ypwh"),o(a,"bottom",`calc(100vh - ${e[2]})`)},m(t,f){O(t,a,f),b(a,r),b(r,_),b(a,m),b(a,l),n&&n.m(l,null),d=!0},p(t,f){(!d||f&2)&&U(_,t[1]),n&&n.p&&(!d||f&4096)&&W(n,g,t,t[12],d?$(g,t[12],f,null):Z(t[12]),null),f&4&&o(a,"bottom",`calc(100vh - ${t[2]})`)},i(t){d||(P(n,t),i||z(()=>{i=x(a,te,{}),i.start()}),d=!0)},o(t){S(n,t),d=!1},d(t){t&&w(a),n&&n.d(t)}}}function le(e){let a=!1,r=()=>{a=!1},_,m,l,i,d,g,n,t,f,h,p=`calc(100vh - ${e[2]} + ${Math.min(e[6],e[5])}px )`,E,V,c;return z(e[10]),z(e[11]),t=new ae({props:{url:e[7].url.pathname,$$slots:{default:[se]},$$scope:{ctx:e}}}),{c(){m=k("div"),l=k("div"),i=k("div"),d=y(),g=k("div"),n=y(),Y(t.$$.fragment),f=y(),h=k("div"),this.h()},l(s){m=T(s,"DIV",{});var u=D(m);l=T(u,"DIV",{class:!0});var v=D(l);i=T(v,"DIV",{class:!0}),D(i).forEach(w),d=H(v),g=T(v,"DIV",{class:!0}),D(g).forEach(w),n=H(v),j(t.$$.fragment,v),f=H(v),h=T(v,"DIV",{class:!0});var F=D(h);F.forEach(w),v.forEach(w),u.forEach(w),this.h()},h(){I(i,"class","out out-bg svelte-170ypwh"),M(i,"bg-contain",e[4]),o(i,"height",e[2]),o(i,"position","absolute"),o(i,"transform",`translate3d(0, ${e[5]<e[6]?e[5]*C:0}px, 0)`),o(i,"background-image",`url(${e[0]})`),I(g,"class","out out-overlay svelte-170ypwh"),o(g,"background-image",e[8]),o(g,"height",e[2]),I(h,"class","hidey-hole svelte-170ypwh"),o(h,"height",p),o(h,"top",e[2]),o(h,"background",e[3]),I(l,"class","out svelte-170ypwh"),o(l,"height",e[2])},m(s,u){O(s,m,u),b(m,l),b(l,i),b(l,d),b(l,g),b(l,n),A(t,l,null),b(l,f),b(l,h),E=!0,V||(c=[q(window,"scroll",()=>{a=!0,clearTimeout(_),_=setTimeout(r,100),e[10]()}),q(window,"resize",e[11])],V=!0)},p(s,[u]){u&32&&!a&&(a=!0,clearTimeout(_),scrollTo(window.pageXOffset,s[5]),_=setTimeout(r,100)),(!E||u&16)&&M(i,"bg-contain",s[4]),u&4&&o(i,"height",s[2]),u&96&&o(i,"transform",`translate3d(0, ${s[5]<s[6]?s[5]*C:0}px, 0)`),u&1&&o(i,"background-image",`url(${s[0]})`),u&4&&o(g,"height",s[2]);const v={};u&128&&(v.url=s[7].url.pathname),u&4102&&(v.$$scope={dirty:u,ctx:s}),t.$set(v),u&100&&p!==(p=`calc(100vh - ${s[2]} + ${Math.min(s[6],s[5])}px )`)&&o(h,"height",p),u&4&&o(h,"top",s[2]),u&8&&o(h,"background",s[3]),u&4&&o(l,"height",s[2])},i(s){E||(P(t.$$.fragment,s),E=!0)},o(s){S(t.$$.fragment,s),E=!1},d(s){s&&w(m),B(t),V=!1,G(c)}}}const C=.6;function ie(e,a,r){let _;J(e,ee,c=>r(7,_=c));let{$$slots:m={},$$scope:l}=a,{img:i}=a,{title:d}=a,{height:g="96vh"}=a,{background:n="black"}=a,{contain:t=!1}=a;const f=`linear-gradient(transparent 25%, ${n} 95%)`;let h,p;document.body.clientHeight;function E(){r(5,h=window.pageYOffset)}function V(){r(6,p=window.outerHeight)}return e.$$set=c=>{"img"in c&&r(0,i=c.img),"title"in c&&r(1,d=c.title),"height"in c&&r(2,g=c.height),"background"in c&&r(3,n=c.background),"contain"in c&&r(4,t=c.contain),"$$scope"in c&&r(12,l=c.$$scope)},[i,d,g,n,t,h,p,_,f,m,E,V,l]}class ue extends L{constructor(a){super(),N(this,a,ie,le,X,{img:0,title:1,height:2,background:3,contain:4})}}export{ue as T};
