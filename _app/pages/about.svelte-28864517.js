import{S as B,i as W,s as R,e as v,w as V,c as p,a as w,x as D,d as c,b as m,f as H,g as I,T as $,y as S,q as b,o as k,B as M,k as C,t as q,m as T,h as z,_ as ee,K as ce,j as Ve,E as G,n as be,p as we,Q as ke,l as ue,J as ne,M as se,N as ae,O as le,a3 as ge,a4 as de}from"../chunks/index-3b7cb337.js";import{A as De}from"../chunks/about-8d1c6325.js";import{C as te,T as Se}from"../chunks/Card-0dc67b46.js";import{B as oe}from"../chunks/Body-03b5c91c.js";import{g as K}from"../chunks/PageTransition-10c34403.js";import{R as Me}from"../chunks/ReactiveComp825-3b7f82e1.js";import{S as Ce,P as Te}from"../chunks/swiper-bundle.min-99f318f4.js";/* empty css                    */import{S as fe}from"../chunks/StackPanel-5a58f0c7.js";import{S as Ae}from"../chunks/ReactiveComp825.svelte_svelte_type_style_lang-0c9e685f.js";/* empty css                                                         */import"../chunks/stores-075b195e.js";function ye(i){let e,r,n,t,s;return{c(){e=v("div"),r=v("img"),t=C(),s=q(i[1]),this.h()},l(a){e=p(a,"DIV",{class:!0});var l=w(e);r=p(l,"IMG",{src:!0,class:!0}),t=T(l),s=z(l,i[1]),l.forEach(c),this.h()},h(){ee(r.src,n=i[0])||m(r,"src",n),m(r,"class","charicon-img svelte-v6a3wx"),m(e,"class","charicon-text svelte-v6a3wx"),ce(e,"charicon-bold",i[6]),H(e,"display","flex",!1),H(e,"flex-direction","column",!1),H(e,"gap","0.5rem",!1),H(e,"color",i[2],!1),H(e,"align-items","center",!1)},m(a,l){I(a,e,l),$(e,r),$(e,t),$(e,s)},p(a,l){l&1&&!ee(r.src,n=a[0])&&m(r,"src",n),l&2&&Ve(s,a[1]),l&64&&ce(e,"charicon-bold",a[6]),l&4&&H(e,"color",a[2],!1)},d(a){a&&c(e)}}}function He(i){let e,r,n,t;return n=new te({props:{background:i[4],padding:"0rem",$$slots:{default:[ye]},$$scope:{ctx:i}}}),{c(){e=v("a"),r=v("div"),V(n.$$.fragment),this.h()},l(s){e=p(s,"A",{href:!0});var a=w(e);r=p(a,"DIV",{class:!0});var l=w(r);D(n.$$.fragment,l),l.forEach(c),a.forEach(c),this.h()},h(){m(r,"class","charicon-outer svelte-v6a3wx"),m(e,"href",i[3]),H(e,"margin",i[5],!1)},m(s,a){I(s,e,a),$(e,r),S(n,r,null),t=!0},p(s,[a]){const l={};a&16&&(l.background=s[4]),a&199&&(l.$$scope={dirty:a,ctx:s}),n.$set(l),(!t||a&8)&&m(e,"href",s[3]),a&32&&H(e,"margin",s[5],!1)},i(s){t||(b(n.$$.fragment,s),t=!0)},o(s){k(n.$$.fragment,s),t=!1},d(s){s&&c(e),M(n)}}}function qe(i,e,r){let{img:n}=e,{name:t}=e,{color:s="white"}=e,{href:a}=e,{background:l="#00000088"}=e,{margin:o="0"}=e,{bold:f=!1}=e;return i.$$set=u=>{"img"in u&&r(0,n=u.img),"name"in u&&r(1,t=u.name),"color"in u&&r(2,s=u.color),"href"in u&&r(3,a=u.href),"background"in u&&r(4,l=u.background),"margin"in u&&r(5,o=u.margin),"bold"in u&&r(6,f=u.bold)},[n,t,s,a,l,o,f]}class Ie extends B{constructor(e){super();W(this,e,qe,He,R,{img:0,name:1,color:2,href:3,background:4,margin:5,bold:6})}}var ze="/_app/assets/teg-bffa6ff9.png",Pe="/_app/assets/kai-950159d0.png",xe="/_app/assets/alex-bce04edc.png",Ge="/_app/assets/piper-e249ef94.png",Be="/_app/assets/edgehusky-6051244c.png",We="/_app/assets/richard-72c307f1.png";function he(i,e,r){const n=i.slice();return n[1]=e[r],n}function me(i,e,r){const n=i.slice();return n[1]=e[r],n}function $e(i){let e,r;return e=new Ie({props:{bold:i[1].sona,img:i[1].img,name:i[1].name}}),{c(){V(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,t){S(e,n,t),r=!0},p:G,i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){M(e,n)}}}function Re(i){let e,r,n,t=i[0],s=[];for(let l=0;l<t.length;l+=1)s[l]=$e(he(i,t,l));const a=l=>k(s[l],1,1,()=>{s[l]=null});return{c(){e=v("div"),r=v("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=p(l,"DIV",{slot:!0,class:!0});var o=w(e);r=p(o,"DIV",{class:!0});var f=w(r);for(let u=0;u<s.length;u+=1)s[u].l(f);f.forEach(c),o.forEach(c),this.h()},h(){m(r,"class","about-flex-wrap svelte-1o348r2"),m(e,"slot","main"),m(e,"class","col-center")},m(l,o){I(l,e,o),$(e,r);for(let f=0;f<s.length;f+=1)s[f].m(r,null);n=!0},p(l,o){if(o&1){t=l[0];let f;for(f=0;f<t.length;f+=1){const u=he(l,t,f);s[f]?(s[f].p(u,o),b(s[f],1)):(s[f]=$e(u),s[f].c(),b(s[f],1),s[f].m(r,null))}for(be(),f=t.length;f<s.length;f+=1)a(f);we()}},i(l){if(!n){for(let o=0;o<t.length;o+=1)b(s[o]);n=!0}},o(l){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)k(s[o]);n=!1},d(l){l&&c(e),ke(s,l)}}}function _e(i){let e,r,n,t,s;return n=new Ie({props:{bold:i[1].sona,img:i[1].img,name:i[1].name}}),{c(){e=v("div"),r=v("div"),V(n.$$.fragment),t=C(),this.h()},l(a){e=p(a,"DIV",{class:!0});var l=w(e);r=p(l,"DIV",{class:!0});var o=w(r);D(n.$$.fragment,o),o.forEach(c),t=T(l),l.forEach(c),this.h()},h(){m(r,"class","swiper-slide-inner svelte-1o348r2"),m(e,"class","swiper-slide swiper-slide-outer svelte-1o348r2")},m(a,l){I(a,e,l),$(e,r),S(n,r,null),$(e,t),s=!0},p:G,i(a){s||(b(n.$$.fragment,a),s=!0)},o(a){k(n.$$.fragment,a),s=!1},d(a){a&&c(e),M(n)}}}function Fe(i){let e,r,n=i[0],t=[];for(let a=0;a<n.length;a+=1)t[a]=_e(me(i,n,a));const s=a=>k(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=ue()},l(a){for(let l=0;l<t.length;l+=1)t[l].l(a);e=ue()},m(a,l){for(let o=0;o<t.length;o+=1)t[o].m(a,l);I(a,e,l),r=!0},p(a,l){if(l&1){n=a[0];let o;for(o=0;o<n.length;o+=1){const f=me(a,n,o);t[o]?(t[o].p(f,l),b(t[o],1)):(t[o]=_e(f),t[o].c(),b(t[o],1),t[o].m(e.parentNode,e))}for(be(),o=n.length;o<t.length;o+=1)s(o);we()}},i(a){if(!r){for(let l=0;l<n.length;l+=1)b(t[l]);r=!0}},o(a){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)k(t[l]);r=!1},d(a){ke(t,a),a&&c(e)}}}function Ke(i){let e,r,n,t,s,a;return s=new Ce({props:{modules:[Te],slidesPerView:"auto",pagination:{clickable:!0},$$slots:{default:[Fe]},$$scope:{ctx:i}}}),{c(){e=v("div"),r=v("div"),n=q("Swipe (or click and drag) to navigate!"),t=C(),V(s.$$.fragment),this.h()},l(l){e=p(l,"DIV",{slot:!0});var o=w(e);r=p(o,"DIV",{class:!0});var f=w(r);n=z(f,"Swipe (or click and drag) to navigate!"),f.forEach(c),t=T(o),D(s.$$.fragment,o),o.forEach(c),this.h()},h(){m(r,"class","tac"),m(e,"slot","alt")},m(l,o){I(l,e,o),$(e,r),$(r,n),$(e,t),S(s,e,null),a=!0},p(l,o){const f={};o&64&&(f.$$scope={dirty:o,ctx:l}),s.$set(f)},i(l){a||(b(s.$$.fragment,l),a=!0)},o(l){k(s.$$.fragment,l),a=!1},d(l){l&&c(e),M(s)}}}function Le(i){let e,r,n,t,s,a,l,o,f;return o=new Me({props:{$$slots:{alt:[Ke],main:[Re]},$$scope:{ctx:i}}}),{c(){e=v("div"),r=v("div"),n=q("My OCs!"),t=C(),s=v("p"),a=q("These are all of my characters! More on the way \u{1F98A}"),l=C(),V(o.$$.fragment),this.h()},l(u){e=p(u,"DIV",{class:!0});var h=w(e);r=p(h,"DIV",{class:!0});var E=w(r);n=z(E,"My OCs!"),E.forEach(c),t=T(h),s=p(h,"P",{class:!0});var g=w(s);a=z(g,"These are all of my characters! More on the way \u{1F98A}"),g.forEach(c),h.forEach(c),l=T(u),D(o.$$.fragment,u),this.h()},h(){m(r,"class","h2"),m(s,"class","text"),H(s,"margin","0.5rem",!1),m(e,"class","text"),H(e,"text-align","center",!1)},m(u,h){I(u,e,h),$(e,r),$(r,n),$(e,t),$(e,s),$(s,a),I(u,l,h),S(o,u,h),f=!0},p(u,h){const E={};h&64&&(E.$$scope={dirty:h,ctx:u}),o.$set(E)},i(u){f||(b(o.$$.fragment,u),f=!0)},o(u){k(o.$$.fragment,u),f=!1},d(u){u&&c(e),u&&c(l),M(o,u)}}}function Oe(i){let e,r,n;return r=new te({props:{background:`linear-gradient(-30deg, ${K.colors.teg_dark}, ${K.colors.teg_light})`,$$slots:{default:[Le]},$$scope:{ctx:i}}}),{c(){e=v("div"),V(r.$$.fragment),this.h()},l(t){e=p(t,"DIV",{});var s=w(e);D(r.$$.fragment,s),s.forEach(c),this.h()},h(){H(e,"margin-bottom","2rem",!1)},m(t,s){I(t,e,s),S(r,e,null),n=!0},p(t,[s]){const a={};s&64&&(a.$$scope={dirty:s,ctx:t}),r.$set(a)},i(t){n||(b(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&c(e),M(r)}}}function je(i){return[[{name:"Teg",img:ze,sona:!0},{name:"Kai",img:Pe,sona:!0},{name:"Alex",img:xe,sona:!0},{name:"Piper",img:Ge,sona:!0},{name:"Edge Husky",img:Be,sona:!1},{name:"Richard",img:We,sona:!1}]]}class Je extends B{constructor(e){super();W(this,e,je,Oe,R,{})}}var Ne="/_app/assets/me-ba736901.png",Qe="/_app/assets/about_bg3-fe1e27d6.png";function Ze(i){let e,r;const n=i[4].default,t=ne(n,i,i[5],null);return{c(){e=v("div"),t&&t.c()},l(s){e=p(s,"DIV",{});var a=w(e);t&&t.l(a),a.forEach(c)},m(s,a){I(s,e,a),t&&t.m(e,null),r=!0},p(s,a){t&&t.p&&(!r||a&32)&&se(t,n,s,s[5],r?le(n,s[5],a,null):ae(s[5]),null)},i(s){r||(b(t,s),r=!0)},o(s){k(t,s),r=!1},d(s){s&&c(e),t&&t.d(s)}}}function Ue(i){let e,r,n;return r=new te({props:{background:i[1],padding:i[2],borderRadius:i[3],$$slots:{default:[Ze]},$$scope:{ctx:i}}}),{c(){e=v("a"),V(r.$$.fragment),this.h()},l(t){e=p(t,"A",{href:!0,class:!0});var s=w(e);D(r.$$.fragment,s),s.forEach(c),this.h()},h(){m(e,"href",i[0]),m(e,"class","cardbutton-outer svelte-1giihwe"),H(e,"text-decoration","none",!1),H(e,"color","white",!1),H(e,"cursor","pointer",!1)},m(t,s){I(t,e,s),S(r,e,null),n=!0},p(t,[s]){const a={};s&2&&(a.background=t[1]),s&4&&(a.padding=t[2]),s&8&&(a.borderRadius=t[3]),s&32&&(a.$$scope={dirty:s,ctx:t}),r.$set(a),(!n||s&1)&&m(e,"href",t[0])},i(t){n||(b(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&c(e),M(r)}}}function Xe(i,e,r){let{$$slots:n={},$$scope:t}=e,{href:s}=e,{background:a}=e,{padding:l="0.75rem"}=e,{borderRadius:o="8px"}=e;return i.$$set=f=>{"href"in f&&r(0,s=f.href),"background"in f&&r(1,a=f.background),"padding"in f&&r(2,l=f.padding),"borderRadius"in f&&r(3,o=f.borderRadius),"$$scope"in f&&r(5,t=f.$$scope)},[s,a,l,o,n,t]}class Ye extends B{constructor(e){super();W(this,e,Xe,Ue,R,{href:0,background:1,padding:2,borderRadius:3})}}function et(i){let e;const r=i[4].default,n=ne(r,i,i[5],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,s){n&&n.m(t,s),e=!0},p(t,s){n&&n.p&&(!e||s&32)&&se(n,r,t,t[5],e?le(r,t[5],s,null):ae(t[5]),null)},i(t){e||(b(n,t),e=!0)},o(t){k(n,t),e=!1},d(t){n&&n.d(t)}}}function tt(i){let e,r;return e=new fe({props:{direction:"row",gap:i[3],align:"center",$$slots:{default:[et]},$$scope:{ctx:i}}}),{c(){V(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,t){S(e,n,t),r=!0},p(n,t){const s={};t&8&&(s.gap=n[3]),t&32&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){M(e,n)}}}function rt(i){let e,r;return e=new Ye({props:{href:i[0],background:i[1],padding:i[2],$$slots:{default:[tt]},$$scope:{ctx:i}}}),{c(){V(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,t){S(e,n,t),r=!0},p(n,[t]){const s={};t&1&&(s.href=n[0]),t&2&&(s.background=n[1]),t&4&&(s.padding=n[2]),t&40&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){M(e,n)}}}function nt(i,e,r){let{$$slots:n={},$$scope:t}=e,{href:s}=e,{background:a}=e,{padding:l}=e,{gap:o="0.5rem"}=e;return i.$$set=f=>{"href"in f&&r(0,s=f.href),"background"in f&&r(1,a=f.background),"padding"in f&&r(2,l=f.padding),"gap"in f&&r(3,o=f.gap),"$$scope"in f&&r(5,t=f.$$scope)},[s,a,l,o,n,t]}class j extends B{constructor(e){super();W(this,e,nt,rt,R,{href:0,background:1,padding:2,gap:3})}}function st(i){let e,r,n;return{c(){e=ge("svg"),r=ge("path"),this.h()},l(t){e=de(t,"svg",{viewBox:!0,height:!0,width:!0});var s=w(e);r=de(s,"path",{d:!0,fill:!0}),w(r).forEach(c),s.forEach(c),this.h()},h(){m(r,"d",n=i[0].path),m(r,"fill",i[1]),m(e,"viewBox","0 0 24 24"),m(e,"height",i[2]),m(e,"width",i[3])},m(t,s){I(t,e,s),$(e,r)},p(t,[s]){s&1&&n!==(n=t[0].path)&&m(r,"d",n),s&2&&m(r,"fill",t[1]),s&4&&m(e,"height",t[2]),s&8&&m(e,"width",t[3])},i:G,o:G,d(t){t&&c(e)}}}function at(i,e,r){let{icon:n}=e,{color:t="white"}=e,{height:s=24}=e,{width:a=s}=e;return i.$$set=l=>{"icon"in l&&r(0,n=l.icon),"color"in l&&r(1,t=l.color),"height"in l&&r(2,s=l.height),"width"in l&&r(3,a=l.width)},[n,t,s,a]}class J extends B{constructor(e){super();W(this,e,at,st,R,{icon:0,color:1,height:2,width:3})}}const N='<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',Q='</title><path d="',Z='"/></svg>',lt={title:"GitHub",slug:"github",get svg(){return N+"GitHub"+Q+this.path+Z},path:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",source:"https://github.com/logos",hex:"181717",guidelines:"https://github.com/logos",license:void 0},it={title:"Microsoft Outlook",slug:"microsoftoutlook",get svg(){return N+"Microsoft Outlook"+Q+this.path+Z},path:"M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5V2.55q0-.44.3-.75.3-.3.75-.3h12.9q.44 0 .75.3.3.3.3.75V10.85l1.24.72h.01q.1.07.18.18.07.12.07.25zm-6-8.25v3h3v-3zm0 4.5v3h3v-3zm0 4.5v1.83l3.05-1.83zm-5.25-9v3h3.75v-3zm0 4.5v3h3.75v-3zm0 4.5v2.03l2.41 1.5 1.34-.8v-2.73zM9 3.75V6h2l.13.01.12.04v-2.3zM5.98 15.98q.9 0 1.6-.3.7-.32 1.19-.86.48-.55.73-1.28.25-.74.25-1.61 0-.83-.25-1.55-.24-.71-.71-1.24t-1.15-.83q-.68-.3-1.55-.3-.92 0-1.64.3-.71.3-1.2.85-.5.54-.75 1.3-.25.74-.25 1.63 0 .85.26 1.56.26.72.74 1.23.48.52 1.17.81.69.3 1.56.3zM7.5 21h12.39L12 16.08V17q0 .41-.3.7-.29.3-.7.3H7.5zm15-.13v-7.24l-5.9 3.54Z",source:"https://developer.microsoft.com/en-us/outlook/docs",hex:"0078D4",guidelines:void 0,license:void 0},ot={title:"Patreon",slug:"patreon",get svg(){return N+"Patreon"+Q+this.path+Z},path:"M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.623 8.641 8.623 4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z",source:"https://www.patreon.com/brand/downloads",hex:"FF424D",guidelines:"https://www.patreon.com/brand/downloads",license:void 0},Ee={title:"Svelte",slug:"svelte",get svg(){return N+"Svelte"+Q+this.path+Z},path:"M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z",source:"https://github.com/sveltejs/branding/blob/c4dfca6743572087a6aef0e109ffe3d95596e86a/svelte-logo.svg",hex:"FF3E00",guidelines:void 0,license:void 0},ft={title:"Trello",slug:"trello",get svg(){return N+"Trello"+Q+this.path+Z},path:"M21.147 0H2.853A2.86 2.86 0 000 2.853v18.294A2.86 2.86 0 002.853 24h18.294A2.86 2.86 0 0024 21.147V2.853A2.86 2.86 0 0021.147 0zM10.34 17.287a.953.953 0 01-.953.953h-4a.954.954 0 01-.954-.953V5.38a.953.953 0 01.954-.953h4a.954.954 0 01.953.953zm9.233-5.467a.944.944 0 01-.953.947h-4a.947.947 0 01-.953-.947V5.38a.953.953 0 01.953-.953h4a.954.954 0 01.953.953z",source:"https://atlassian.design/resources/logo-library",hex:"0052CC",guidelines:"https://atlassian.design/foundations/logos/",license:void 0},ct={title:"Twitter",slug:"twitter",get svg(){return N+"Twitter"+Q+this.path+Z},path:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",source:"https://brand.twitter.com",hex:"1DA1F2",guidelines:void 0,license:void 0};function ut(i){let e,r,n;return e=new J({props:{icon:ct}}),{c(){V(e.$$.fragment),r=q(`\r
                Twitter`)},l(t){D(e.$$.fragment,t),r=z(t,`\r
                Twitter`)},m(t,s){S(e,t,s),I(t,r,s),n=!0},p:G,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){M(e,t),t&&c(r)}}}function gt(i){let e,r,n;return e=new J({props:{icon:ft}}),{c(){V(e.$$.fragment),r=q(`\r
                Trello`)},l(t){D(e.$$.fragment,t),r=z(t,`\r
                Trello`)},m(t,s){S(e,t,s),I(t,r,s),n=!0},p:G,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){M(e,t),t&&c(r)}}}function dt(i){let e,r,n;return e=new J({props:{icon:ot}}),{c(){V(e.$$.fragment),r=q(`\r
                Patreon`)},l(t){D(e.$$.fragment,t),r=z(t,`\r
                Patreon`)},m(t,s){S(e,t,s),I(t,r,s),n=!0},p:G,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){M(e,t),t&&c(r)}}}function ht(i){let e,r,n;return e=new J({props:{icon:it}}),{c(){V(e.$$.fragment),r=q(`\r
                E-Mail`)},l(t){D(e.$$.fragment,t),r=z(t,`\r
                E-Mail`)},m(t,s){S(e,t,s),I(t,r,s),n=!0},p:G,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){M(e,t),t&&c(r)}}}function mt(i){let e,r,n,t,s,a,l,o,f,u,h,E,g,_,d,A,P,F;return h=new j({props:{href:K.external.twitter,background:re,$$slots:{default:[ut]},$$scope:{ctx:i}}}),g=new j({props:{href:K.external.trello,background:re,$$slots:{default:[gt]},$$scope:{ctx:i}}}),d=new j({props:{href:K.external.patreon,background:re,$$slots:{default:[dt]},$$scope:{ctx:i}}}),P=new j({props:{href:K.external.placeholder,background:re,$$slots:{default:[ht]},$$scope:{ctx:i}}}),{c(){e=v("div"),r=v("div"),n=v("div"),t=q("Important Links!"),s=C(),a=v("p"),l=q("Here are some links that you might be looking for \u{1F98A}"),o=C(),f=v("div"),u=v("div"),V(h.$$.fragment),E=C(),V(g.$$.fragment),_=C(),V(d.$$.fragment),A=C(),V(P.$$.fragment),this.h()},l(y){e=p(y,"DIV",{});var x=w(e);r=p(x,"DIV",{class:!0});var O=w(r);n=p(O,"DIV",{class:!0});var U=w(n);t=z(U,"Important Links!"),U.forEach(c),s=T(O),a=p(O,"P",{});var X=w(a);l=z(X,"Here are some links that you might be looking for \u{1F98A}"),X.forEach(c),O.forEach(c),o=T(x),f=p(x,"DIV",{});var Y=w(f);u=p(Y,"DIV",{class:!0});var L=w(u);D(h.$$.fragment,L),E=T(L),D(g.$$.fragment,L),_=T(L),D(d.$$.fragment,L),A=T(L),D(P.$$.fragment,L),L.forEach(c),Y.forEach(c),x.forEach(c),this.h()},h(){m(n,"class","h4"),H(a,"margin-top","0",!1),m(r,"class","text"),m(u,"class","flex-wrap mobile-space-evenly-825 bold wide allcaps svelte-w5bcto")},m(y,x){I(y,e,x),$(e,r),$(r,n),$(n,t),$(r,s),$(r,a),$(a,l),$(e,o),$(e,f),$(f,u),S(h,u,null),$(u,E),S(g,u,null),$(u,_),S(d,u,null),$(u,A),S(P,u,null),F=!0},p(y,[x]){const O={};x&1&&(O.$$scope={dirty:x,ctx:y}),h.$set(O);const U={};x&1&&(U.$$scope={dirty:x,ctx:y}),g.$set(U);const X={};x&1&&(X.$$scope={dirty:x,ctx:y}),d.$set(X);const Y={};x&1&&(Y.$$scope={dirty:x,ctx:y}),P.$set(Y)},i(y){F||(b(h.$$.fragment,y),b(g.$$.fragment,y),b(d.$$.fragment,y),b(P.$$.fragment,y),F=!0)},o(y){k(h.$$.fragment,y),k(g.$$.fragment,y),k(d.$$.fragment,y),k(P.$$.fragment,y),F=!1},d(y){y&&c(e),M(h),M(g),M(d),M(P)}}}const re="#000000aa";class $t extends B{constructor(e){super();W(this,e,null,mt,R,{})}}function _t(i){let e,r,n;return{c(){e=v("div"),r=v("img"),this.h()},l(t){e=p(t,"DIV",{slot:!0,class:!0});var s=w(e);r=p(s,"IMG",{src:!0}),s.forEach(c),this.h()},h(){ee(r.src,n=Ne)||m(r,"src",n),H(r,"width","296px",!1),m(e,"slot","left"),m(e,"class","col-center")},m(t,s){I(t,e,s),$(e,r)},p:G,d(t){t&&c(e)}}}function vt(i){let e,r,n,t,s,a,l,o,f,u,h,E,g,_;return g=new $t({}),{c(){e=v("div"),r=q("Hi! I'm Teg!"),n=C(),t=v("div"),s=v("p"),a=q(`I'm a Chinese American artist drawing furries and anthropomorphic animals! My interest in\r
                            art and drawing started in mid 2018, I started doing freelance work in the beginning of 2020,\r
                            and my work has only been improving since!`),l=C(),o=v("p"),f=q(`Beyond art and other furry stuff, I'm currently studying Computer Science at\r
                            Georgia Tech. I also enjoy taking photos, looking at branding standards,\r
                            making simple graphic designs, tinkering with electronics, and programming!`),u=C(),h=v("div"),E=C(),V(g.$$.fragment),this.h()},l(d){e=p(d,"DIV",{class:!0});var A=w(e);r=z(A,"Hi! I'm Teg!"),A.forEach(c),n=T(d),t=p(d,"DIV",{class:!0});var P=w(t);s=p(P,"P",{});var F=w(s);a=z(F,`I'm a Chinese American artist drawing furries and anthropomorphic animals! My interest in\r
                            art and drawing started in mid 2018, I started doing freelance work in the beginning of 2020,\r
                            and my work has only been improving since!`),F.forEach(c),l=T(P),o=p(P,"P",{});var y=w(o);f=z(y,`Beyond art and other furry stuff, I'm currently studying Computer Science at\r
                            Georgia Tech. I also enjoy taking photos, looking at branding standards,\r
                            making simple graphic designs, tinkering with electronics, and programming!`),y.forEach(c),P.forEach(c),u=T(d),h=p(d,"DIV",{}),w(h).forEach(c),E=T(d),D(g.$$.fragment,d),this.h()},h(){m(e,"class","h2"),m(t,"class","about-p"),H(h,"margin","3rem",!1)},m(d,A){I(d,e,A),$(e,r),I(d,n,A),I(d,t,A),$(t,s),$(s,a),$(t,l),$(t,o),$(o,f),I(d,u,A),I(d,h,A),I(d,E,A),S(g,d,A),_=!0},p:G,i(d){_||(b(g.$$.fragment,d),_=!0)},o(d){k(g.$$.fragment,d),_=!1},d(d){d&&c(e),d&&c(n),d&&c(t),d&&c(u),d&&c(h),d&&c(E),M(g,d)}}}function pt(i){let e,r,n;return r=new te({props:{background:"#00000088",padding:"1.5rem",$$slots:{default:[vt]},$$scope:{ctx:i}}}),{c(){e=v("div"),V(r.$$.fragment),this.h()},l(t){e=p(t,"DIV",{slot:!0});var s=w(e);D(r.$$.fragment,s),s.forEach(c),this.h()},h(){m(e,"slot","right")},m(t,s){I(t,e,s),S(r,e,null),n=!0},p(t,s){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),r.$set(a)},i(t){n||(b(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&c(e),M(r)}}}function bt(i){let e,r,n;return r=new Ae({props:{leftWidth:"296px",gap:"1rem",width:"1000px",mobileGap:"0",$$slots:{right:[pt],left:[_t]},$$scope:{ctx:i}}}),{c(){e=v("div"),V(r.$$.fragment),this.h()},l(t){e=p(t,"DIV",{class:!0});var s=w(e);D(r.$$.fragment,s),s.forEach(c),this.h()},h(){m(e,"class","col-center")},m(t,s){I(t,e,s),S(r,e,null),n=!0},p(t,s){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),r.$set(a)},i(t){n||(b(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&c(e),M(r)}}}function wt(i){let e,r;return e=new te({props:{background:`url(${Qe})`,padding:"1rem",$$slots:{default:[bt]},$$scope:{ctx:i}}}),{c(){V(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,t){S(e,n,t),r=!0},p(n,[t]){const s={};t&1&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){M(e,n)}}}class kt extends B{constructor(e){super();W(this,e,null,wt,R,{})}}const It=i=>({}),ve=i=>({}),Et=i=>({}),pe=i=>({});function Vt(i){let e,r,n,t,s,a,l,o;const f=i[7].left,u=ne(f,i,i[6],pe),h=i[7].right,E=ne(h,i,i[6],ve);return{c(){e=v("div"),r=v("div"),u&&u.c(),n=C(),t=v("div"),s=C(),a=v("div"),E&&E.c(),this.h()},l(g){e=p(g,"DIV",{class:!0,style:!0});var _=w(e);r=p(_,"DIV",{class:!0});var d=w(r);u&&u.l(d),d.forEach(c),n=T(_),t=p(_,"DIV",{class:!0}),w(t).forEach(c),s=T(_),a=p(_,"DIV",{class:!0});var A=w(a);E&&E.l(A),A.forEach(c),_.forEach(c),this.h()},h(){m(r,"class","sxs-flex-child svelte-wt997"),m(t,"class","sxs-flex-spacer"),m(a,"class","sxs-flex-child svelte-wt997"),m(e,"class","sxs-flex-outer svelte-wt997"),m(e,"style",l=`--sxs-child-width: ${i[0]};
             --sxs-max-child-width: ${i[1]};
             --sxs-align: ${i[5]};
             --sxs-gap: ${i[2]};
             --sxs-mobile-gap: ${i[3]};
             --sxs-mobile-dir: ${i[4]?"column-reverse":"column"}`)},m(g,_){I(g,e,_),$(e,r),u&&u.m(r,null),$(e,n),$(e,t),$(e,s),$(e,a),E&&E.m(a,null),o=!0},p(g,[_]){u&&u.p&&(!o||_&64)&&se(u,f,g,g[6],o?le(f,g[6],_,Et):ae(g[6]),pe),E&&E.p&&(!o||_&64)&&se(E,h,g,g[6],o?le(h,g[6],_,It):ae(g[6]),ve),(!o||_&63&&l!==(l=`--sxs-child-width: ${g[0]};
             --sxs-max-child-width: ${g[1]};
             --sxs-align: ${g[5]};
             --sxs-gap: ${g[2]};
             --sxs-mobile-gap: ${g[3]};
             --sxs-mobile-dir: ${g[4]?"column-reverse":"column"}`))&&m(e,"style",l)},i(g){o||(b(u,g),b(E,g),o=!0)},o(g){k(u,g),k(E,g),o=!1},d(g){g&&c(e),u&&u.d(g),E&&E.d(g)}}}function Dt(i,e,r){let{$$slots:n={},$$scope:t}=e,{childWidth:s="48%"}=e,{maxChildWidth:a="auto"}=e,{gap:l="4%"}=e,{mobileGap:o=l}=e,{reverse:f=!1}=e,{align:u="center"}=e;return i.$$set=h=>{"childWidth"in h&&r(0,s=h.childWidth),"maxChildWidth"in h&&r(1,a=h.maxChildWidth),"gap"in h&&r(2,l=h.gap),"mobileGap"in h&&r(3,o=h.mobileGap),"reverse"in h&&r(4,f=h.reverse),"align"in h&&r(5,u=h.align),"$$scope"in h&&r(6,t=h.$$scope)},[s,a,l,o,f,u,t,n]}class St extends B{constructor(e){super();W(this,e,Dt,Vt,R,{childWidth:0,maxChildWidth:1,gap:2,mobileGap:3,reverse:4,align:5})}}var Mt="/_app/assets/svelte-dc8a06dc.svg",Ct="/_app/assets/sveltekit-4cc474e3.svg";function Tt(i){let e,r,n,t,s;return{c(){e=v("img"),n=C(),t=v("img"),this.h()},l(a){e=p(a,"IMG",{src:!0,width:!0}),n=T(a),t=p(a,"IMG",{src:!0,width:!0}),this.h()},h(){ee(e.src,r=Mt)||m(e,"src",r),m(e,"width","15%"),ee(t.src,s=Ct)||m(t,"src",s),m(t,"width","80%")},m(a,l){I(a,e,l),I(a,n,l),I(a,t,l)},p:G,d(a){a&&c(e),a&&c(n),a&&c(t)}}}function At(i){let e,r,n;return r=new fe({props:{direction:"row",gap:"5%",$$slots:{default:[Tt]},$$scope:{ctx:i}}}),{c(){e=v("div"),V(r.$$.fragment),this.h()},l(t){e=p(t,"DIV",{});var s=w(e);D(r.$$.fragment,s),s.forEach(c),this.h()},h(){H(e,"width",i[0],!1),H(e,"margin",i[1],!1),H(e,"max-width",i[2],!1)},m(t,s){I(t,e,s),S(r,e,null),n=!0},p(t,[s]){const a={};s&8&&(a.$$scope={dirty:s,ctx:t}),r.$set(a),s&1&&H(e,"width",t[0],!1),s&2&&H(e,"margin",t[1],!1),s&4&&H(e,"max-width",t[2],!1)},i(t){n||(b(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&c(e),M(r)}}}function yt(i,e,r){let{width:n="100%"}=e,{margin:t="2rem 0"}=e,{maxWidth:s}=e;return i.$$set=a=>{"width"in a&&r(0,n=a.width),"margin"in a&&r(1,t=a.margin),"maxWidth"in a&&r(2,s=a.maxWidth)},[n,t,s]}class Ht extends B{constructor(e){super();W(this,e,yt,At,R,{width:0,margin:1,maxWidth:2})}}function qt(i){let e,r,n;return r=new Ht({props:{maxWidth:"40rem"}}),{c(){e=v("div"),V(r.$$.fragment),this.h()},l(t){e=p(t,"DIV",{slot:!0,class:!0});var s=w(e);D(r.$$.fragment,s),s.forEach(c),this.h()},h(){m(e,"slot","left"),m(e,"class","col-center")},m(t,s){I(t,e,s),S(r,e,null),n=!0},p:G,i(t){n||(b(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&c(e),M(r)}}}function zt(i){let e,r,n;return e=new J({props:{icon:lt}}),{c(){V(e.$$.fragment),r=q(`\r
                            Site Repo`)},l(t){D(e.$$.fragment,t),r=z(t,`\r
                            Site Repo`)},m(t,s){S(e,t,s),I(t,r,s),n=!0},p:G,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){M(e,t),t&&c(r)}}}function Pt(i){let e,r,n;return e=new J({props:{icon:Ee}}),{c(){V(e.$$.fragment),r=q(`\r
                            Svelte`)},l(t){D(e.$$.fragment,t),r=z(t,`\r
                            Svelte`)},m(t,s){S(e,t,s),I(t,r,s),n=!0},p:G,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){M(e,t),t&&c(r)}}}function xt(i){let e,r,n;return e=new J({props:{icon:Ee}}),{c(){V(e.$$.fragment),r=q(`\r
                            SvelteKit`)},l(t){D(e.$$.fragment,t),r=z(t,`\r
                            SvelteKit`)},m(t,s){S(e,t,s),I(t,r,s),n=!0},p:G,i(t){n||(b(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){M(e,t),t&&c(r)}}}function Gt(i){let e,r,n,t,s,a;return e=new j({props:{href:K.external.placeholder,background:ie,$$slots:{default:[zt]},$$scope:{ctx:i}}}),n=new j({props:{href:K.external.placeholder,background:ie,$$slots:{default:[Pt]},$$scope:{ctx:i}}}),s=new j({props:{href:K.external.placeholder,background:ie,$$slots:{default:[xt]},$$scope:{ctx:i}}}),{c(){V(e.$$.fragment),r=C(),V(n.$$.fragment),t=C(),V(s.$$.fragment)},l(l){D(e.$$.fragment,l),r=T(l),D(n.$$.fragment,l),t=T(l),D(s.$$.fragment,l)},m(l,o){S(e,l,o),I(l,r,o),S(n,l,o),I(l,t,o),S(s,l,o),a=!0},p(l,o){const f={};o&1&&(f.$$scope={dirty:o,ctx:l}),e.$set(f);const u={};o&1&&(u.$$scope={dirty:o,ctx:l}),n.$set(u);const h={};o&1&&(h.$$scope={dirty:o,ctx:l}),s.$set(h)},i(l){a||(b(e.$$.fragment,l),b(n.$$.fragment,l),b(s.$$.fragment,l),a=!0)},o(l){k(e.$$.fragment,l),k(n.$$.fragment,l),k(s.$$.fragment,l),a=!1},d(l){M(e,l),l&&c(r),M(n,l),l&&c(t),M(s,l)}}}function Bt(i){let e,r,n,t,s,a,l,o,f,u,h,E,g;return E=new fe({props:{direction:"row",align:"center",gap:"0.25rem",styleClass:"mobile-space-evenly-825",$$slots:{default:[Gt]},$$scope:{ctx:i}}}),{c(){e=v("div"),r=v("div"),n=q("This website was built with SvelteKit"),t=C(),s=v("p"),a=q(`This website was written in HTML5 CSS3 and Javascript ES6 using the SvelteKit Framework.\r
                    A static version of the site is deployed to GitHub pages using gh-pages. I do not collect any of\r
                    your data on this website.`),l=C(),o=v("p"),f=q("Clicks the buttons below for the code for this site and other relevant links!"),u=C(),h=v("div"),V(E.$$.fragment),this.h()},l(_){e=p(_,"DIV",{slot:!0});var d=w(e);r=p(d,"DIV",{class:!0});var A=w(r);n=z(A,"This website was built with SvelteKit"),A.forEach(c),t=T(d),s=p(d,"P",{class:!0});var P=w(s);a=z(P,`This website was written in HTML5 CSS3 and Javascript ES6 using the SvelteKit Framework.\r
                    A static version of the site is deployed to GitHub pages using gh-pages. I do not collect any of\r
                    your data on this website.`),P.forEach(c),l=T(d),o=p(d,"P",{class:!0});var F=w(o);f=z(F,"Clicks the buttons below for the code for this site and other relevant links!"),F.forEach(c),u=T(d),h=p(d,"DIV",{class:!0});var y=w(h);D(E.$$.fragment,y),y.forEach(c),d.forEach(c),this.h()},h(){m(r,"class","h4 allcaps wide"),m(s,"class","text"),m(o,"class","text"),m(h,"class","bold wide allcaps mobile-center-825"),m(e,"slot","right")},m(_,d){I(_,e,d),$(e,r),$(r,n),$(e,t),$(e,s),$(s,a),$(e,l),$(e,o),$(o,f),$(e,u),$(e,h),S(E,h,null),g=!0},p(_,d){const A={};d&1&&(A.$$scope={dirty:d,ctx:_}),E.$set(A)},i(_){g||(b(E.$$.fragment,_),g=!0)},o(_){k(E.$$.fragment,_),g=!1},d(_){_&&c(e),M(E)}}}function Wt(i){let e,r,n,t,s;return t=new St({props:{$$slots:{right:[Bt],left:[qt]},$$scope:{ctx:i}}}),{c(){e=v("div"),r=q("About This Site"),n=C(),V(t.$$.fragment),this.h()},l(a){e=p(a,"DIV",{class:!0});var l=w(e);r=z(l,"About This Site"),l.forEach(c),n=T(a),D(t.$$.fragment,a),this.h()},h(){m(e,"class","h3"),H(e,"margin-bottom","1rem",!1)},m(a,l){I(a,e,l),$(e,r),I(a,n,l),S(t,a,l),s=!0},p(a,l){const o={};l&1&&(o.$$scope={dirty:l,ctx:a}),t.$set(o)},i(a){s||(b(t.$$.fragment,a),s=!0)},o(a){k(t.$$.fragment,a),s=!1},d(a){a&&c(e),a&&c(n),M(t,a)}}}function Rt(i){let e,r,n;return r=new oe({props:{color:K.colors.teg_grey,$$slots:{default:[Wt]},$$scope:{ctx:i}}}),{c(){e=v("div"),V(r.$$.fragment)},l(t){e=p(t,"DIV",{});var s=w(e);D(r.$$.fragment,s),s.forEach(c)},m(t,s){I(t,e,s),S(r,e,null),n=!0},p(t,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),r.$set(a)},i(t){n||(b(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&c(e),M(r)}}}const ie="#00000088";class Ft extends B{constructor(e){super();W(this,e,null,Rt,R,{})}}function Kt(i){let e;return{c(){e=q("Hobbyist artist and photographer, Full time bloo fock")},l(r){e=z(r,"Hobbyist artist and photographer, Full time bloo fock")},m(r,n){I(r,e,n)},d(r){r&&c(e)}}}function Lt(i){let e,r;return e=new kt({}),{c(){V(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,t){S(e,n,t),r=!0},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){M(e,n)}}}function Ot(i){let e,r;return e=new Je({}),{c(){V(e.$$.fragment)},l(n){D(e.$$.fragment,n)},m(n,t){S(e,n,t),r=!0},i(n){r||(b(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){M(e,n)}}}function jt(i){let e,r,n,t,s,a,l,o,f,u,h,E;return s=new Se({props:{img:De,title:"About Me!",$$slots:{default:[Kt]},$$scope:{ctx:i}}}),l=new oe({props:{$$slots:{default:[Lt]},$$scope:{ctx:i}}}),f=new oe({props:{$$slots:{default:[Ot]},$$scope:{ctx:i}}}),h=new Ft({}),{c(){e=v("title"),r=q("About Me - Teg Fox"),n=C(),t=v("div"),V(s.$$.fragment),a=C(),V(l.$$.fragment),o=C(),V(f.$$.fragment),u=C(),V(h.$$.fragment)},l(g){e=p(g,"TITLE",{});var _=w(e);r=z(_,"About Me - Teg Fox"),_.forEach(c),n=T(g),t=p(g,"DIV",{});var d=w(t);D(s.$$.fragment,d),a=T(d),D(l.$$.fragment,d),o=T(d),D(f.$$.fragment,d),u=T(d),D(h.$$.fragment,d),d.forEach(c)},m(g,_){I(g,e,_),$(e,r),I(g,n,_),I(g,t,_),S(s,t,null),$(t,a),S(l,t,null),$(t,o),S(f,t,null),$(t,u),S(h,t,null),E=!0},p(g,[_]){const d={};_&1&&(d.$$scope={dirty:_,ctx:g}),s.$set(d);const A={};_&1&&(A.$$scope={dirty:_,ctx:g}),l.$set(A);const P={};_&1&&(P.$$scope={dirty:_,ctx:g}),f.$set(P)},i(g){E||(b(s.$$.fragment,g),b(l.$$.fragment,g),b(f.$$.fragment,g),b(h.$$.fragment,g),E=!0)},o(g){k(s.$$.fragment,g),k(l.$$.fragment,g),k(f.$$.fragment,g),k(h.$$.fragment,g),E=!1},d(g){g&&c(e),g&&c(n),g&&c(t),M(s),M(l),M(f),M(h)}}}class ar extends B{constructor(e){super();W(this,e,null,jt,R,{})}}export{ar as default};
