import{S as i,i as c,s as u,a as p,w as l,W as f,h as m,c as _,x as d,b as $,y as g,f as h,t as E,z as b,J as v}from"../../../chunks/index-6779f09a.js";import{E as y}from"../../../chunks/Error-df0efa1d.js";import{p as q}from"../../../chunks/stores-621cd5f1.js";function w(s){let a,r,t,n;return document.title=a=`\r
        Error 404: `+s[0]+`\r
    `,t=new y({props:{status:"404",message:s[0]}}),{c(){r=p(),l(t.$$.fragment)},l(e){f("svelte-aqnug2",document.head).forEach(m),r=_(e),d(t.$$.fragment,e)},m(e,o){$(e,r,o),g(t,e,o),n=!0},p(e,[o]){(!n||o&1)&&a!==(a=`\r
        Error 404: `+e[0]+`\r
    `)&&(document.title=a)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){E(t.$$.fragment,e),n=!1},d(e){e&&m(r),b(t,e)}}}function x(s,a,r){let t;return v(s,q,e=>r(1,t=e)),[`Not found: ${t.url.pathname??""}`]}class J extends i{constructor(a){super(),c(this,a,x,w,u,{})}}export{J as default};
