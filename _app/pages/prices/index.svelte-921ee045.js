import{S as M,i as Q,s as z,w as C,x as T,y,q as k,o as w,B,J as A,e as g,k as j,c as v,a as p,d as c,m as O,b as _,f as P,g as E,T as m,M as F,N as J,O as L,n as le,p as se,Q as re,l as K,t as S,h as R,E as q}from"../../chunks/index-2106b571.js";import{B as ne,g as ie}from"../../chunks/Body-f9da4fe3.js";import{i as fe}from"../../chunks/prices-7b5e27c8.js";import{C as ae,T as ce}from"../../chunks/Card-0880b3cc.js";import{C as ue}from"../../chunks/Comms-0788a469.js";import{S as oe}from"../../chunks/SideBySide.svelte_svelte_type_style_lang-2e817ebd.js";import{R as me}from"../../chunks/ReactiveComp825-48bfaa3c.js";import{c as D}from"../../chunks/commtypes-e6343dfc.js";import{N as de}from"../../chunks/NotDone-84d3df85.js";const _e=i=>({}),W=i=>({}),he=i=>({}),X=i=>({}),$e=i=>({}),Y=i=>({});function ge(i){let e,r,t,l,n,o,s,a;const f=i[4].above,d=A(f,i,i[5],Y),I=i[4].hidden,h=A(I,i,i[5],X),N=i[4].below,$=A(N,i,i[5],W);return{c(){e=g("div"),r=g("div"),t=g("div"),d&&d.c(),l=j(),n=g("div"),h&&h.c(),o=j(),s=g("div"),$&&$.c(),this.h()},l(u){e=v(u,"DIV",{class:!0,style:!0});var b=p(e);r=v(b,"DIV",{class:!0});var V=p(r);t=v(V,"DIV",{class:!0});var H=p(t);d&&d.l(H),H.forEach(c),l=O(V),n=v(V,"DIV",{class:!0});var G=p(n);h&&h.l(G),G.forEach(c),o=O(V),s=v(V,"DIV",{class:!0});var U=p(s);$&&$.l(U),U.forEach(c),V.forEach(c),b.forEach(c),this.h()},h(){_(t,"class","above svelte-149f7jh"),_(n,"class","hidden svelte-149f7jh"),_(s,"class","below svelte-149f7jh"),_(r,"class","container svelte-149f7jh"),_(e,"class","grad svelte-149f7jh"),P(e,"--gradrevealdetails-max-height-delta",i[3]),P(e,"--gradrevealdetails-border-radius","calc("+i[0]+" - 1px)")},m(u,b){E(u,e,b),m(e,r),m(r,t),d&&d.m(t,null),m(r,l),m(r,n),h&&h.m(n,null),m(r,o),m(r,s),$&&$.m(s,null),a=!0},p(u,b){d&&d.p&&(!a||b&32)&&F(d,f,u,u[5],a?L(f,u[5],b,$e):J(u[5]),Y),h&&h.p&&(!a||b&32)&&F(h,I,u,u[5],a?L(I,u[5],b,he):J(u[5]),X),$&&$.p&&(!a||b&32)&&F($,N,u,u[5],a?L(N,u[5],b,_e):J(u[5]),W),(!a||b&8)&&P(e,"--gradrevealdetails-max-height-delta",u[3]),(!a||b&1)&&P(e,"--gradrevealdetails-border-radius","calc("+u[0]+" - 1px)")},i(u){a||(k(d,u),k(h,u),k($,u),a=!0)},o(u){w(d,u),w(h,u),w($,u),a=!1},d(u){u&&c(e),d&&d.d(u),h&&h.d(u),$&&$.d(u)}}}function ve(i){let e,r;return e=new ae({props:{padding:"0",img:i[1],height:i[2],borderRadius:i[0],$$slots:{default:[ge]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){y(e,t,l),r=!0},p(t,[l]){const n={};l&2&&(n.img=t[1]),l&4&&(n.height=t[2]),l&1&&(n.borderRadius=t[0]),l&41&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function pe(i,e,r){let{$$slots:t={},$$scope:l}=e,{borderRadius:n="16px"}=e,{img:o}=e,{height:s="auto"}=e,{maxHeightDelta:a}=e;return i.$$set=f=>{"borderRadius"in f&&r(0,n=f.borderRadius),"img"in f&&r(1,o=f.img),"height"in f&&r(2,s=f.height),"maxHeightDelta"in f&&r(3,a=f.maxHeightDelta),"$$scope"in f&&r(5,l=f.$$scope)},[n,o,s,a,t,l]}class be extends M{constructor(e){super();Q(this,e,pe,ve,z,{borderRadius:0,img:1,height:2,maxHeightDelta:3})}}function Z(i,e,r){const t=i.slice();return t[2]=e[r],t}function x(i,e,r){const t=i.slice();return t[2]=e[r],t}function De(i){let e,r=D[i[2]].name+"",t;return{c(){e=g("div"),t=S(r),this.h()},l(l){e=v(l,"DIV",{slot:!0,class:!0});var n=p(e);t=R(n,r),n.forEach(c),this.h()},h(){_(e,"slot","above"),_(e,"class","allcaps wide h3 half-ls")},m(l,n){E(l,e,n),m(e,t)},p:q,d(l){l&&c(e)}}}function ke(i){let e,r=D[i[2]].desc+"",t;return{c(){e=g("div"),t=S(r),this.h()},l(l){e=v(l,"DIV",{slot:!0,class:!0});var n=p(e);t=R(n,r),n.forEach(c),this.h()},h(){_(e,"slot","hidden"),_(e,"class","text half-ls")},m(l,n){E(l,e,n),m(e,t)},p:q,d(l){l&&c(e)}}}function we(i){let e,r,t,l=D[i[2]].start+"",n;return{c(){e=S("Starting at "),r=g("strong"),t=S("US$"),n=S(l)},l(o){e=R(o,"Starting at "),r=v(o,"STRONG",{});var s=p(r);t=R(s,"US$"),n=R(s,l),s.forEach(c)},m(o,s){E(o,e,s),E(o,r,s),m(r,t),m(r,n)},p:q,d(o){o&&c(e),o&&c(r)}}}function Ee(i){let e,r=D[i[2]].start&&we(i);return{c(){e=g("div"),r&&r.c(),this.h()},l(t){e=v(t,"DIV",{slot:!0,class:!0});var l=p(e);r&&r.l(l),l.forEach(c),this.h()},h(){_(e,"slot","below"),_(e,"class","text half-ls")},m(t,l){E(t,e,l),r&&r.m(e,null)},p(t,l){D[t[2]].start&&r.p(t,l)},d(t){t&&c(e),r&&r.d()}}}function ee(i){let e,r,t,l,n,o;return t=new be({props:{img:D[i[2]].img,height:"100%",maxHeightDelta:"3rem",$$slots:{below:[Ee],hidden:[ke],above:[De]},$$scope:{ctx:i}}}),{c(){e=g("a"),r=g("div"),C(t.$$.fragment),l=j(),this.h()},l(s){e=v(s,"A",{class:!0,href:!0,style:!0});var a=p(e);r=v(a,"DIV",{class:!0});var f=p(r);T(t.$$.fragment,f),f.forEach(c),l=O(a),a.forEach(c),this.h()},h(){_(r,"class","item-main svelte-14urrel"),_(e,"class","commtypes-grid-item svelte-14urrel"),_(e,"href",n=`${i[0]}${D[i[2]].link}`),P(e,"text-decoration","none"),P(e,"color","white")},m(s,a){E(s,e,a),m(e,r),y(t,r,null),m(e,l),o=!0},p(s,a){const f={};a&128&&(f.$$scope={dirty:a,ctx:s}),t.$set(f),(!o||a&1&&n!==(n=`${s[0]}${D[s[2]].link}`))&&_(e,"href",n)},i(s){o||(k(t.$$.fragment,s),o=!0)},o(s){w(t.$$.fragment,s),o=!1},d(s){s&&c(e),B(t)}}}function Ie(i){let e,r,t=Object.keys(D),l=[];for(let o=0;o<t.length;o+=1)l[o]=ee(Z(i,t,o));const n=o=>w(l[o],1,1,()=>{l[o]=null});return{c(){e=g("div");for(let o=0;o<l.length;o+=1)l[o].c();this.h()},l(o){e=v(o,"DIV",{slot:!0,class:!0});var s=p(e);for(let a=0;a<l.length;a+=1)l[a].l(s);s.forEach(c),this.h()},h(){_(e,"slot","main"),_(e,"class","commtypes-grid-outer svelte-14urrel")},m(o,s){E(o,e,s);for(let a=0;a<l.length;a+=1)l[a].m(e,null);r=!0},p(o,s){if(s&1){t=Object.keys(D);let a;for(a=0;a<t.length;a+=1){const f=Z(o,t,a);l[a]?(l[a].p(f,s),k(l[a],1)):(l[a]=ee(f),l[a].c(),k(l[a],1),l[a].m(e,null))}for(le(),a=t.length;a<l.length;a+=1)n(a);se()}},i(o){if(!r){for(let s=0;s<t.length;s+=1)k(l[s]);r=!0}},o(o){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)w(l[s]);r=!1},d(o){o&&c(e),re(l,o)}}}function Ve(i){let e,r,t,l,n=D[i[2]].start+"",o;return{c(){e=g("div"),r=S("Starting at "),t=g("strong"),l=S("US$"),o=S(n),this.h()},l(s){e=v(s,"DIV",{class:!0});var a=p(e);r=R(a,"Starting at "),t=v(a,"STRONG",{});var f=p(t);l=R(f,"US$"),o=R(f,n),f.forEach(c),a.forEach(c),this.h()},h(){_(e,"class","text half-ls")},m(s,a){E(s,e,a),m(e,r),m(e,t),m(t,l),m(t,o)},p:q,d(s){s&&c(e)}}}function Se(i){let e,r,t,l=D[i[2]].name+"",n,o,s,a=D[i[2]].desc+"",f,d,I,h,N,$=D[i[2]].start&&Ve(i);return{c(){e=g("div"),r=g("div"),t=g("div"),n=S(l),o=j(),s=g("div"),f=S(a),d=j(),$&&$.c(),I=j(),h=g("div"),N=S("Click to learn more!"),this.h()},l(u){e=v(u,"DIV",{class:!0});var b=p(e);r=v(b,"DIV",{class:!0});var V=p(r);t=v(V,"DIV",{class:!0});var H=p(t);n=R(H,l),H.forEach(c),o=O(V),s=v(V,"DIV",{class:!0});var G=p(s);f=R(G,a),G.forEach(c),d=O(V),$&&$.l(V),I=O(V),h=v(V,"DIV",{class:!0});var U=p(h);N=R(U,"Click to learn more!"),U.forEach(c),V.forEach(c),b.forEach(c),this.h()},h(){_(t,"class","h3 allcaps wide half-ls"),_(s,"class","text half-ls"),_(h,"class","cap"),_(r,"class","container svelte-14urrel"),_(e,"class","grad svelte-14urrel")},m(u,b){E(u,e,b),m(e,r),m(r,t),m(t,n),m(r,o),m(r,s),m(s,f),m(r,d),$&&$.m(r,null),m(r,I),m(r,h),m(h,N)},p(u,b){D[u[2]].start&&$.p(u,b)},d(u){u&&c(e),$&&$.d()}}}function te(i){let e,r,t,l,n,o;return t=new ae({props:{padding:"0",img:D[i[2]].img,height:"100%",$$slots:{default:[Se]},$$scope:{ctx:i}}}),{c(){e=g("a"),r=g("div"),C(t.$$.fragment),l=j(),this.h()},l(s){e=v(s,"A",{href:!0,style:!0});var a=p(e);r=v(a,"DIV",{class:!0});var f=p(r);T(t.$$.fragment,f),f.forEach(c),l=O(a),a.forEach(c),this.h()},h(){_(r,"class","item-alt svelte-14urrel"),_(e,"href",n=`${i[0]}${D[i[2]].link}`),P(e,"text-decoration","none"),P(e,"color","white")},m(s,a){E(s,e,a),m(e,r),y(t,r,null),m(e,l),o=!0},p(s,a){const f={};a&128&&(f.$$scope={dirty:a,ctx:s}),t.$set(f),(!o||a&1&&n!==(n=`${s[0]}${D[s[2]].link}`))&&_(e,"href",n)},i(s){o||(k(t.$$.fragment,s),o=!0)},o(s){w(t.$$.fragment,s),o=!1},d(s){s&&c(e),B(t)}}}function Re(i){let e,r,t=Object.keys(D),l=[];for(let o=0;o<t.length;o+=1)l[o]=te(x(i,t,o));const n=o=>w(l[o],1,1,()=>{l[o]=null});return{c(){for(let o=0;o<l.length;o+=1)l[o].c();e=K()},l(o){for(let s=0;s<l.length;s+=1)l[s].l(o);e=K()},m(o,s){for(let a=0;a<l.length;a+=1)l[a].m(o,s);E(o,e,s),r=!0},p(o,s){if(s&1){t=Object.keys(D);let a;for(a=0;a<t.length;a+=1){const f=x(o,t,a);l[a]?(l[a].p(f,s),k(l[a],1)):(l[a]=te(f),l[a].c(),k(l[a],1),l[a].m(e.parentNode,e))}for(le(),a=t.length;a<l.length;a+=1)n(a);se()}},i(o){if(!r){for(let s=0;s<t.length;s+=1)k(l[s]);r=!0}},o(o){l=l.filter(Boolean);for(let s=0;s<l.length;s+=1)w(l[s]);r=!1},d(o){re(l,o),o&&c(e)}}}function Ce(i){let e,r;return e=new oe({props:{slot:"alt",direction:"column",gap:"2rem",$$slots:{default:[Re]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){y(e,t,l),r=!0},p(t,l){const n={};l&129&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function Te(i){let e,r;return e=new me({props:{$$slots:{alt:[Ce],main:[Ie]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){y(e,t,l),r=!0},p(t,[l]){const n={};l&129&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function ye(i,e,r){let{routeBase:t}=e;return i.$$set=l=>{"routeBase"in l&&r(0,t=l.routeBase)},[t]}class Be extends M{constructor(e){super();Q(this,e,ye,Te,z,{routeBase:0})}}function je(i){let e;return{c(){e=S("Price estimates for my art!")},l(r){e=R(r,"Price estimates for my art!")},m(r,t){E(r,e,t)},d(r){r&&c(e)}}}function Oe(i){let e,r,t,l,n,o;return e=new ue({props:{status:ie.comms,large:!1}}),t=new Be({props:{routeBase:"/prices/"}}),n=new de({}),{c(){C(e.$$.fragment),r=j(),C(t.$$.fragment),l=j(),C(n.$$.fragment)},l(s){T(e.$$.fragment,s),r=O(s),T(t.$$.fragment,s),l=O(s),T(n.$$.fragment,s)},m(s,a){y(e,s,a),E(s,r,a),y(t,s,a),E(s,l,a),y(n,s,a),o=!0},p:q,i(s){o||(k(e.$$.fragment,s),k(t.$$.fragment,s),k(n.$$.fragment,s),o=!0)},o(s){w(e.$$.fragment,s),w(t.$$.fragment,s),w(n.$$.fragment,s),o=!1},d(s){B(e,s),s&&c(r),B(t,s),s&&c(l),B(n,s)}}}function Pe(i){let e,r;return e=new oe({props:{direction:"column",gap:"2rem",$$slots:{default:[Oe]},$$scope:{ctx:i}}}),{c(){C(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){y(e,t,l),r=!0},p(t,l){const n={};l&1&&(n.$$scope={dirty:l,ctx:t}),e.$set(n)},i(t){r||(k(e.$$.fragment,t),r=!0)},o(t){w(e.$$.fragment,t),r=!1},d(t){B(e,t)}}}function Ne(i){let e,r,t,l,n,o,s,a;return n=new ce({props:{img:fe,title:"Commission Prices",$$slots:{default:[je]},$$scope:{ctx:i}}}),s=new ne({props:{$$slots:{default:[Pe]},$$scope:{ctx:i}}}),{c(){e=g("title"),r=S("Prices - Teg Fox"),t=j(),l=g("div"),C(n.$$.fragment),o=j(),C(s.$$.fragment)},l(f){e=v(f,"TITLE",{});var d=p(e);r=R(d,"Prices - Teg Fox"),d.forEach(c),t=O(f),l=v(f,"DIV",{});var I=p(l);T(n.$$.fragment,I),o=O(I),T(s.$$.fragment,I),I.forEach(c)},m(f,d){E(f,e,d),m(e,r),E(f,t,d),E(f,l,d),y(n,l,null),m(l,o),y(s,l,null),a=!0},p(f,[d]){const I={};d&1&&(I.$$scope={dirty:d,ctx:f}),n.$set(I);const h={};d&1&&(h.$$scope={dirty:d,ctx:f}),s.$set(h)},i(f){a||(k(n.$$.fragment,f),k(s.$$.fragment,f),a=!0)},o(f){w(n.$$.fragment,f),w(s.$$.fragment,f),a=!1},d(f){f&&c(e),f&&c(t),f&&c(l),B(n),B(s)}}}class Qe extends M{constructor(e){super();Q(this,e,null,Ne,z,{})}}export{Qe as default};
