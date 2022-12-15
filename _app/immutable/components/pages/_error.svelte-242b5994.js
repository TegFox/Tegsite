import{S as i,i as c,s as u,a as p,w as f,W as l,h as m,c as _,x as d,b as $,y as g,f as h,t as E,z as b,J as v}from"../../chunks/index-6779f09a.js";import{E as y}from"../../chunks/Error-df0efa1d.js";import{p as w}from"../../chunks/stores-621cd5f1.js";function S(r){let s,o,t,a;return document.title=s=`\r
        Error `+r[0]+": "+r[1]+`\r
    `,t=new y({props:{status:r[0],message:r[1]}}),{c(){o=p(),f(t.$$.fragment)},l(e){l("svelte-1to8gfe",document.head).forEach(m),o=_(e),d(t.$$.fragment,e)},m(e,n){$(e,o,n),g(t,e,n),a=!0},p(e,[n]){(!a||n&3)&&s!==(s=`\r
        Error `+e[0]+": "+e[1]+`\r
    `)&&(document.title=s)},i(e){a||(h(t.$$.fragment,e),a=!0)},o(e){E(t.$$.fragment,e),a=!1},d(e){e&&m(o),b(t,e)}}}function q(r,s,o){let t;v(r,w,n=>o(2,t=n));const a=t.status,e=t.error.message;return[a,e]}class W extends i{constructor(s){super(),c(this,s,q,S,u,{})}}export{W as default};
