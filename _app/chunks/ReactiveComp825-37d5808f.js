import{S as k,i as x,s as J,J as W,e as w,k as V,c as b,a as y,d as v,m as p,b as u,g as M,T as g,M as C,N as D,O as E,q as I,o as S}from"./index-d9ccad35.js";const N=s=>({}),R=s=>({}),O=s=>({}),q=s=>({});function T(s){let t,a,m,_,f,h,n,r;const o=s[7].left,e=W(o,s,s[6],q),i=s[7].right,d=W(i,s,s[6],R);return{c(){t=w("div"),a=w("div"),e&&e.c(),m=V(),_=w("div"),f=V(),h=w("div"),d&&d.c(),this.h()},l(l){t=b(l,"DIV",{class:!0,style:!0});var c=y(t);a=b(c,"DIV",{class:!0});var G=y(a);e&&e.l(G),G.forEach(v),m=p(c),_=b(c,"DIV",{class:!0}),y(_).forEach(v),f=p(c),h=b(c,"DIV",{class:!0});var z=y(h);d&&d.l(z),z.forEach(v),c.forEach(v),this.h()},h(){u(a,"class","sxs-flex-left svelte-wt1l7z"),u(_,"class","sxs-flex-spacer"),u(h,"class","sxs-flex-right svelte-wt1l7z"),u(t,"class","sxs-flex-outer svelte-wt1l7z"),u(t,"style",n=`--sxs-left-width: ${s[0]};
             --sxs-max-child-width: ${s[1]};
             --sxs-width: ${s[2]};
             --sxs-gap: ${s[3]};
             --sxs-mobile-gap: ${s[4]};
             --sxs-mobile-dir: ${s[5]?"column-reverse":"column"}`)},m(l,c){M(l,t,c),g(t,a),e&&e.m(a,null),g(t,m),g(t,_),g(t,f),g(t,h),d&&d.m(h,null),r=!0},p(l,[c]){e&&e.p&&(!r||c&64)&&C(e,o,l,l[6],r?E(o,l[6],c,O):D(l[6]),q),d&&d.p&&(!r||c&64)&&C(d,i,l,l[6],r?E(i,l[6],c,N):D(l[6]),R),(!r||c&63&&n!==(n=`--sxs-left-width: ${l[0]};
             --sxs-max-child-width: ${l[1]};
             --sxs-width: ${l[2]};
             --sxs-gap: ${l[3]};
             --sxs-mobile-gap: ${l[4]};
             --sxs-mobile-dir: ${l[5]?"column-reverse":"column"}`))&&u(t,"style",n)},i(l){r||(I(e,l),I(d,l),r=!0)},o(l){S(e,l),S(d,l),r=!1},d(l){l&&v(t),e&&e.d(l),d&&d.d(l)}}}function j(s,t,a){let{$$slots:m={},$$scope:_}=t,{leftWidth:f="48%"}=t,{maxChildWidth:h="auto"}=t,{width:n="auto"}=t,{gap:r="4%"}=t,{mobileGap:o=r}=t,{reverse:e=!1}=t;return s.$$set=i=>{"leftWidth"in i&&a(0,f=i.leftWidth),"maxChildWidth"in i&&a(1,h=i.maxChildWidth),"width"in i&&a(2,n=i.width),"gap"in i&&a(3,r=i.gap),"mobileGap"in i&&a(4,o=i.mobileGap),"reverse"in i&&a(5,e=i.reverse),"$$scope"in i&&a(6,_=i.$$scope)},[f,h,n,r,o,e,_,m]}class P extends k{constructor(t){super();x(this,t,j,T,J,{leftWidth:0,maxChildWidth:1,width:2,gap:3,mobileGap:4,reverse:5})}}const A=s=>({}),B=s=>({}),F=s=>({}),U=s=>({});function H(s){let t,a,m,_,f;const h=s[1].main,n=W(h,s,s[0],U),r=s[1].alt,o=W(r,s,s[0],B);return{c(){t=w("div"),a=w("div"),n&&n.c(),m=V(),_=w("div"),o&&o.c(),this.h()},l(e){t=b(e,"DIV",{class:!0});var i=y(t);a=b(i,"DIV",{class:!0});var d=y(a);n&&n.l(d),d.forEach(v),m=p(i),_=b(i,"DIV",{class:!0});var l=y(_);o&&o.l(l),l.forEach(v),i.forEach(v),this.h()},h(){u(a,"class","main svelte-1nmwlci"),u(_,"class","alt svelte-1nmwlci"),u(t,"class","outer")},m(e,i){M(e,t,i),g(t,a),n&&n.m(a,null),g(t,m),g(t,_),o&&o.m(_,null),f=!0},p(e,[i]){n&&n.p&&(!f||i&1)&&C(n,h,e,e[0],f?E(h,e[0],i,F):D(e[0]),U),o&&o.p&&(!f||i&1)&&C(o,r,e,e[0],f?E(r,e[0],i,A):D(e[0]),B)},i(e){f||(I(n,e),I(o,e),f=!0)},o(e){S(n,e),S(o,e),f=!1},d(e){e&&v(t),n&&n.d(e),o&&o.d(e)}}}function K(s,t,a){let{$$slots:m={},$$scope:_}=t;return s.$$set=f=>{"$$scope"in f&&a(0,_=f.$$scope)},[_,m]}class Q extends k{constructor(t){super();x(this,t,K,H,J,{})}}export{Q as R,P as S};