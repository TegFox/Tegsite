import{S as G,i as K,s as U,k as v,w as V,l as w,m as I,x as S,h as f,n as g,p as y,b,I as $,y as M,f as _,t as k,z as D,a as C,q as L,c as A,r as q,J as te,L as ie,u as Ee,g as de,d as $e,W as pe,B as P,e as oe,C as _e,D as ve,E as we,F as be,X as fe,Y as ce}from"../../../../chunks/index-83c5a036.js";import{i as Ve}from"../../../../chunks/about-6329d0a4.js";import{T as Se}from"../../../../chunks/Title-288b408a.js";import{B as ae}from"../../../../chunks/Body-2ab86e8b.js";import{C as re}from"../../../../chunks/Card-48731f69.js";import{g as B}from"../../../../chunks/GlobalVars-0ed962cb.js";import{R as Me}from"../../../../chunks/ReactiveComp825-edf0b378.js";import{S as De,P as Te,M as ye,a as Ce}from"../../../../chunks/swiper-bundle.min-bb7fb3a8.js";/* empty css                             */import{S as le}from"../../../../chunks/StackPanel-60788f45.js";import{S as Ae}from"../../../../chunks/SideBySideUneven-e21548d3.js";/* empty css                                                                  */const Re=""+new URL("../../../../assets/3c-bffa6ff9.png",import.meta.url).href,Le=""+new URL("../../../../assets/kai-950159d0.png",import.meta.url).href,qe=""+new URL("../../../../assets/alex-b051ea18.png",import.meta.url).href,He=""+new URL("../../../../assets/piper-e249ef94.png",import.meta.url).href,ze=""+new URL("../../../../assets/edgehusky-6051244c.png",import.meta.url).href,Pe=""+new URL("../../../../assets/richard-72c307f1.png",import.meta.url).href,F={teg:{name:"Teg",pfp:Re,sona:!0},kai:{name:"Kai",pfp:Le,sona:!0},alex:{name:"Alex",pfp:qe,sona:!0},piper:{name:"Piper",pfp:He,sona:!0},edge_husky:{name:"Edge Husky",pfp:ze,sona:!1},richard:{name:"Richard",pfp:Pe,sona:!1}};function xe(i){let e,r,n,t,s;return{c(){e=v("div"),r=v("img"),t=C(),s=L(i[1]),this.h()},l(a){e=w(a,"DIV",{class:!0});var l=I(e);r=w(l,"IMG",{src:!0,alt:!0,class:!0}),t=A(l),s=q(l,i[1]),l.forEach(f),this.h()},h(){te(r.src,n=i[0])||g(r,"src",n),g(r,"alt",i[1]),g(r,"class","charicon-img svelte-v6a3wx"),g(e,"class","charicon-text svelte-v6a3wx"),ie(e,"charicon-bold",i[6]),y(e,"display","flex"),y(e,"flex-direction","column"),y(e,"gap","0.5rem"),y(e,"color",i[2]),y(e,"align-items","center")},m(a,l){b(a,e,l),$(e,r),$(e,t),$(e,s)},p(a,l){l&1&&!te(r.src,n=a[0])&&g(r,"src",n),l&2&&g(r,"alt",a[1]),l&2&&Ee(s,a[1]),l&64&&ie(e,"charicon-bold",a[6]),l&4&&y(e,"color",a[2])},d(a){a&&f(e)}}}function Be(i){let e,r,n,t;return n=new re({props:{background:i[4],padding:"0rem",$$slots:{default:[xe]},$$scope:{ctx:i}}}),{c(){e=v("a"),r=v("div"),V(n.$$.fragment),this.h()},l(s){e=w(s,"A",{href:!0,class:!0});var a=I(e);r=w(a,"DIV",{class:!0});var l=I(r);S(n.$$.fragment,l),l.forEach(f),a.forEach(f),this.h()},h(){g(r,"class","charicon-outer svelte-v6a3wx"),g(e,"href",i[3]),g(e,"class","white-link"),y(e,"margin",i[5])},m(s,a){b(s,e,a),$(e,r),M(n,r,null),t=!0},p(s,[a]){const l={};a&16&&(l.background=s[4]),a&199&&(l.$$scope={dirty:a,ctx:s}),n.$set(l),(!t||a&8)&&g(e,"href",s[3]),a&32&&y(e,"margin",s[5])},i(s){t||(_(n.$$.fragment,s),t=!0)},o(s){k(n.$$.fragment,s),t=!1},d(s){s&&f(e),D(n)}}}function Fe(i,e,r){let{img:n}=e,{name:t}=e,{color:s="white"}=e,{href:a}=e,{background:l="#00000088"}=e,{margin:o="0"}=e,{bold:u=!1}=e;return i.$$set=c=>{"img"in c&&r(0,n=c.img),"name"in c&&r(1,t=c.name),"color"in c&&r(2,s=c.color),"href"in c&&r(3,a=c.href),"background"in c&&r(4,l=c.background),"margin"in c&&r(5,o=c.margin),"bold"in c&&r(6,u=c.bold)},[n,t,s,a,l,o,u]}class ke extends G{constructor(e){super(),K(this,e,Fe,Be,U,{img:0,name:1,color:2,href:3,background:4,margin:5,bold:6})}}function ue(i,e,r){const n=i.slice();return n[0]=e[r],n}function me(i,e,r){const n=i.slice();return n[0]=e[r],n}function he(i){let e,r;return e=new ke({props:{bold:F[i[0]].sona,img:F[i[0]].pfp,name:F[i[0]].name,href:`/chars/${i[0]}`}}),{c(){V(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,t){M(e,n,t),r=!0},p:P,i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){D(e,n)}}}function Ge(i){let e,r,n,t,s,a,l=Object.keys(F),o=[];for(let c=0;c<l.length;c+=1)o[c]=he(ue(i,l,c));const u=c=>k(o[c],1,1,()=>{o[c]=null});return{c(){e=v("div"),r=v("div"),n=L("Click cards for more info!"),t=C(),s=v("div");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){e=w(c,"DIV",{slot:!0,class:!0});var m=I(e);r=w(m,"DIV",{class:!0});var p=I(r);n=q(p,"Click cards for more info!"),p.forEach(f),t=A(m),s=w(m,"DIV",{class:!0});var d=I(s);for(let E=0;E<o.length;E+=1)o[E].l(d);d.forEach(f),m.forEach(f),this.h()},h(){g(r,"class","text tac"),y(r,"margin-bottom","1rem"),g(s,"class","about-flex-wrap svelte-fvq3y0"),g(e,"slot","main"),g(e,"class","col-center")},m(c,m){b(c,e,m),$(e,r),$(r,n),$(e,t),$(e,s);for(let p=0;p<o.length;p+=1)o[p].m(s,null);a=!0},p(c,m){if(m&0){l=Object.keys(F);let p;for(p=0;p<l.length;p+=1){const d=ue(c,l,p);o[p]?(o[p].p(d,m),_(o[p],1)):(o[p]=he(d),o[p].c(),_(o[p],1),o[p].m(s,null))}for(de(),p=l.length;p<o.length;p+=1)u(p);$e()}},i(c){if(!a){for(let m=0;m<l.length;m+=1)_(o[m]);a=!0}},o(c){o=o.filter(Boolean);for(let m=0;m<o.length;m+=1)k(o[m]);a=!1},d(c){c&&f(e),pe(o,c)}}}function ge(i){let e,r,n,t,s;return n=new ke({props:{bold:F[i[0]].sona,img:F[i[0]].pfp,name:F[i[0]].name}}),{c(){e=v("a"),r=v("div"),V(n.$$.fragment),t=C(),this.h()},l(a){e=w(a,"A",{class:!0,href:!0});var l=I(e);r=w(l,"DIV",{class:!0});var o=I(r);S(n.$$.fragment,o),o.forEach(f),t=A(l),l.forEach(f),this.h()},h(){g(r,"class","swiper-slide-inner svelte-fvq3y0"),g(e,"class","swiper-slide swiper-slide-outer white-link svelte-fvq3y0"),g(e,"href",`/chars/${i[0]}`)},m(a,l){b(a,e,l),$(e,r),M(n,r,null),$(e,t),s=!0},p:P,i(a){s||(_(n.$$.fragment,a),s=!0)},o(a){k(n.$$.fragment,a),s=!1},d(a){a&&f(e),D(n)}}}function Ke(i){let e,r,n=Object.keys(F),t=[];for(let a=0;a<n.length;a+=1)t[a]=ge(me(i,n,a));const s=a=>k(t[a],1,1,()=>{t[a]=null});return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=oe()},l(a){for(let l=0;l<t.length;l+=1)t[l].l(a);e=oe()},m(a,l){for(let o=0;o<t.length;o+=1)t[o].m(a,l);b(a,e,l),r=!0},p(a,l){if(l&0){n=Object.keys(F);let o;for(o=0;o<n.length;o+=1){const u=me(a,n,o);t[o]?(t[o].p(u,l),_(t[o],1)):(t[o]=ge(u),t[o].c(),_(t[o],1),t[o].m(e.parentNode,e))}for(de(),o=n.length;o<t.length;o+=1)s(o);$e()}},i(a){if(!r){for(let l=0;l<n.length;l+=1)_(t[l]);r=!0}},o(a){t=t.filter(Boolean);for(let l=0;l<t.length;l+=1)k(t[l]);r=!1},d(a){pe(t,a),a&&f(e)}}}function Ue(i){let e,r,n,t,s,a;return s=new De({props:{modules:[Te,ye],slidesPerView:"auto",mousewheel:{forceToAxis:!0},pagination:{clickable:!0},$$slots:{default:[Ke]},$$scope:{ctx:i}}}),{c(){e=v("div"),r=v("div"),n=L("Swipe or Scroll to navigate, click for more info!"),t=C(),V(s.$$.fragment),this.h()},l(l){e=w(l,"DIV",{slot:!0,style:!0});var o=I(e);r=w(o,"DIV",{class:!0});var u=I(r);n=q(u,"Swipe or Scroll to navigate, click for more info!"),u.forEach(f),t=A(o),S(s.$$.fragment,o),o.forEach(f),this.h()},h(){g(r,"class","text tac"),g(e,"slot","alt"),y(e,"--swiper-theme-color","#fff")},m(l,o){b(l,e,o),$(e,r),$(r,n),$(e,t),M(s,e,null),a=!0},p(l,o){const u={};o&32&&(u.$$scope={dirty:o,ctx:l}),s.$set(u)},i(l){a||(_(s.$$.fragment,l),a=!0)},o(l){k(s.$$.fragment,l),a=!1},d(l){l&&f(e),D(s)}}}function Oe(i){let e,r,n,t,s,a,l,o,u;return o=new Me({props:{$$slots:{alt:[Ue],main:[Ge]},$$scope:{ctx:i}}}),{c(){e=v("div"),r=v("div"),n=L("My OCs!"),t=C(),s=v("p"),a=L("These are all of my characters! More on the way 🦊"),l=C(),V(o.$$.fragment),this.h()},l(c){e=w(c,"DIV",{class:!0});var m=I(e);r=w(m,"DIV",{class:!0});var p=I(r);n=q(p,"My OCs!"),p.forEach(f),t=A(m),s=w(m,"P",{class:!0});var d=I(s);a=q(d,"These are all of my characters! More on the way 🦊"),d.forEach(f),m.forEach(f),l=A(c),S(o.$$.fragment,c),this.h()},h(){g(r,"class","h2"),g(s,"class","text"),y(s,"margin","0.5rem"),g(e,"class","text"),y(e,"text-align","center")},m(c,m){b(c,e,m),$(e,r),$(r,n),$(e,t),$(e,s),$(s,a),b(c,l,m),M(o,c,m),u=!0},p(c,m){const p={};m&32&&(p.$$scope={dirty:m,ctx:c}),o.$set(p)},i(c){u||(_(o.$$.fragment,c),u=!0)},o(c){k(o.$$.fragment,c),u=!1},d(c){c&&f(e),c&&f(l),D(o,c)}}}function We(i){let e,r,n;return r=new re({props:{background:`linear-gradient(-30deg, ${B.colors.teg_dark}, ${B.colors.teg_light})`,$$slots:{default:[Oe]},$$scope:{ctx:i}}}),{c(){e=v("div"),V(r.$$.fragment),this.h()},l(t){e=w(t,"DIV",{});var s=I(e);S(r.$$.fragment,s),s.forEach(f),this.h()},h(){y(e,"margin-bottom","2rem")},m(t,s){b(t,e,s),M(r,e,null),n=!0},p(t,[s]){const a={};s&32&&(a.$$scope={dirty:s,ctx:t}),r.$set(a)},i(t){n||(_(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&f(e),D(r)}}}class je extends G{constructor(e){super(),K(this,e,null,We,U,{})}}const Je=""+new URL("../../../../assets/me-ba736901.png",import.meta.url).href,Ze=""+new URL("../../../../assets/about_bg3-a9a30d8c.png",import.meta.url).href;function Ne(i){let e,r;const n=i[4].default,t=_e(n,i,i[5],null);return{c(){e=v("div"),t&&t.c()},l(s){e=w(s,"DIV",{});var a=I(e);t&&t.l(a),a.forEach(f)},m(s,a){b(s,e,a),t&&t.m(e,null),r=!0},p(s,a){t&&t.p&&(!r||a&32)&&ve(t,n,s,s[5],r?be(n,s[5],a,null):we(s[5]),null)},i(s){r||(_(t,s),r=!0)},o(s){k(t,s),r=!1},d(s){s&&f(e),t&&t.d(s)}}}function Qe(i){let e,r,n;return r=new re({props:{background:i[1],padding:i[2],borderRadius:i[3],$$slots:{default:[Ne]},$$scope:{ctx:i}}}),{c(){e=v("a"),V(r.$$.fragment),this.h()},l(t){e=w(t,"A",{href:!0,class:!0});var s=I(e);S(r.$$.fragment,s),s.forEach(f),this.h()},h(){g(e,"href",i[0]),g(e,"class","cardbutton-outer svelte-1giihwe"),y(e,"text-decoration","none"),y(e,"color","white"),y(e,"cursor","pointer")},m(t,s){b(t,e,s),M(r,e,null),n=!0},p(t,[s]){const a={};s&2&&(a.background=t[1]),s&4&&(a.padding=t[2]),s&8&&(a.borderRadius=t[3]),s&32&&(a.$$scope={dirty:s,ctx:t}),r.$set(a),(!n||s&1)&&g(e,"href",t[0])},i(t){n||(_(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&f(e),D(r)}}}function Xe(i,e,r){let{$$slots:n={},$$scope:t}=e,{href:s}=e,{background:a}=e,{padding:l="0.75rem"}=e,{borderRadius:o="8px"}=e;return i.$$set=u=>{"href"in u&&r(0,s=u.href),"background"in u&&r(1,a=u.background),"padding"in u&&r(2,l=u.padding),"borderRadius"in u&&r(3,o=u.borderRadius),"$$scope"in u&&r(5,t=u.$$scope)},[s,a,l,o,n,t]}class Ye extends G{constructor(e){super(),K(this,e,Xe,Qe,U,{href:0,background:1,padding:2,borderRadius:3})}}function et(i){let e;const r=i[4].default,n=_e(r,i,i[5],null);return{c(){n&&n.c()},l(t){n&&n.l(t)},m(t,s){n&&n.m(t,s),e=!0},p(t,s){n&&n.p&&(!e||s&32)&&ve(n,r,t,t[5],e?be(r,t[5],s,null):we(t[5]),null)},i(t){e||(_(n,t),e=!0)},o(t){k(n,t),e=!1},d(t){n&&n.d(t)}}}function tt(i){let e,r;return e=new le({props:{direction:"row",gap:i[3],align:"center",$$slots:{default:[et]},$$scope:{ctx:i}}}),{c(){V(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,t){M(e,n,t),r=!0},p(n,t){const s={};t&8&&(s.gap=n[3]),t&32&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){D(e,n)}}}function rt(i){let e,r;return e=new Ye({props:{href:i[0],background:i[1],padding:i[2],$$slots:{default:[tt]},$$scope:{ctx:i}}}),{c(){V(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,t){M(e,n,t),r=!0},p(n,[t]){const s={};t&1&&(s.href=n[0]),t&2&&(s.background=n[1]),t&4&&(s.padding=n[2]),t&40&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){D(e,n)}}}function nt(i,e,r){let{$$slots:n={},$$scope:t}=e,{href:s}=e,{background:a}=e,{padding:l}=e,{gap:o="0.5rem"}=e;return i.$$set=u=>{"href"in u&&r(0,s=u.href),"background"in u&&r(1,a=u.background),"padding"in u&&r(2,l=u.padding),"gap"in u&&r(3,o=u.gap),"$$scope"in u&&r(5,t=u.$$scope)},[s,a,l,o,n,t]}class j extends G{constructor(e){super(),K(this,e,nt,rt,U,{href:0,background:1,padding:2,gap:3})}}function st(i){let e,r,n;return{c(){e=fe("svg"),r=fe("path"),this.h()},l(t){e=ce(t,"svg",{viewBox:!0,height:!0,width:!0});var s=I(e);r=ce(s,"path",{d:!0,fill:!0}),I(r).forEach(f),s.forEach(f),this.h()},h(){g(r,"d",n=i[0].path),g(r,"fill",i[1]),g(e,"viewBox","0 0 24 24"),g(e,"height",i[2]),g(e,"width",i[3])},m(t,s){b(t,e,s),$(e,r)},p(t,[s]){s&1&&n!==(n=t[0].path)&&g(r,"d",n),s&2&&g(r,"fill",t[1]),s&4&&g(e,"height",t[2]),s&8&&g(e,"width",t[3])},i:P,o:P,d(t){t&&f(e)}}}function at(i,e,r){let{icon:n}=e,{color:t="white"}=e,{height:s=24}=e,{width:a=s}=e;return i.$$set=l=>{"icon"in l&&r(0,n=l.icon),"color"in l&&r(1,t=l.color),"height"in l&&r(2,s=l.height),"width"in l&&r(3,a=l.width)},[n,t,s,a]}class J extends G{constructor(e){super(),K(this,e,at,st,U,{icon:0,color:1,height:2,width:3})}}const Z='<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',N='</title><path d="',Q='"/></svg>',lt={title:"GitHub",slug:"github",get svg(){return Z+"GitHub"+N+this.path+Q},path:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",source:"https://github.com/logos",hex:"181717",guidelines:"https://github.com/logos",license:void 0},it={title:"Microsoft Outlook",slug:"microsoftoutlook",get svg(){return Z+"Microsoft Outlook"+N+this.path+Q},path:"M7.88 12.04q0 .45-.11.87-.1.41-.33.74-.22.33-.58.52-.37.2-.87.2t-.85-.2q-.35-.21-.57-.55-.22-.33-.33-.75-.1-.42-.1-.86t.1-.87q.1-.43.34-.76.22-.34.59-.54.36-.2.87-.2t.86.2q.35.21.57.55.22.34.31.77.1.43.1.88zM24 12v9.38q0 .46-.33.8-.33.32-.8.32H7.13q-.46 0-.8-.33-.32-.33-.32-.8V18H1q-.41 0-.7-.3-.3-.29-.3-.7V7q0-.41.3-.7Q.58 6 1 6h6.5V2.55q0-.44.3-.75.3-.3.75-.3h12.9q.44 0 .75.3.3.3.3.75V10.85l1.24.72h.01q.1.07.18.18.07.12.07.25zm-6-8.25v3h3v-3zm0 4.5v3h3v-3zm0 4.5v1.83l3.05-1.83zm-5.25-9v3h3.75v-3zm0 4.5v3h3.75v-3zm0 4.5v2.03l2.41 1.5 1.34-.8v-2.73zM9 3.75V6h2l.13.01.12.04v-2.3zM5.98 15.98q.9 0 1.6-.3.7-.32 1.19-.86.48-.55.73-1.28.25-.74.25-1.61 0-.83-.25-1.55-.24-.71-.71-1.24t-1.15-.83q-.68-.3-1.55-.3-.92 0-1.64.3-.71.3-1.2.85-.5.54-.75 1.3-.25.74-.25 1.63 0 .85.26 1.56.26.72.74 1.23.48.52 1.17.81.69.3 1.56.3zM7.5 21h12.39L12 16.08V17q0 .41-.3.7-.29.3-.7.3H7.5zm15-.13v-7.24l-5.9 3.54Z",source:"https://developer.microsoft.com/en-us/outlook/docs",hex:"0078D4",guidelines:void 0,license:void 0},ot={title:"Patreon",slug:"patreon",get svg(){return Z+"Patreon"+N+this.path+Q},path:"M0 .48v23.04h4.22V.48zm15.385 0c-4.764 0-8.641 3.88-8.641 8.65 0 4.755 3.877 8.623 8.641 8.623 4.75 0 8.615-3.868 8.615-8.623C24 4.36 20.136.48 15.385.48z",source:"https://www.patreon.com/brand/downloads",hex:"FF424D",guidelines:"https://www.patreon.com/brand/downloads",license:void 0},Ie={title:"Svelte",slug:"svelte",get svg(){return Z+"Svelte"+N+this.path+Q},path:"M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767 4.109 4.109 0 0 1-.703-3.107 3.898 3.898 0 0 1 .134-.522l.105-.321.287.21a7.21 7.21 0 0 0 2.186 1.092l.208.063-.02.208a1.253 1.253 0 0 0 .226.83 1.337 1.337 0 0 0 1.435.533 1.231 1.231 0 0 0 .343-.15l5.59-3.562a1.164 1.164 0 0 0 .524-.778 1.242 1.242 0 0 0-.211-.937 1.338 1.338 0 0 0-1.435-.533 1.23 1.23 0 0 0-.343.15l-2.133 1.36a4.078 4.078 0 0 1-1.135.499 4.44 4.44 0 0 1-4.765-1.766 4.108 4.108 0 0 1-.702-3.108 3.855 3.855 0 0 1 1.742-2.582l5.589-3.563a4.072 4.072 0 0 1 1.135-.499 4.44 4.44 0 0 1 4.765 1.767 4.109 4.109 0 0 1 .703 3.107 3.943 3.943 0 0 1-.134.522l-.105.321-.286-.21a7.204 7.204 0 0 0-2.187-1.093l-.208-.063.02-.207a1.255 1.255 0 0 0-.226-.831 1.337 1.337 0 0 0-1.435-.532 1.231 1.231 0 0 0-.343.15L8.62 9.368a1.162 1.162 0 0 0-.524.778 1.24 1.24 0 0 0 .211.937 1.338 1.338 0 0 0 1.435.533 1.235 1.235 0 0 0 .344-.151l2.132-1.36a4.067 4.067 0 0 1 1.135-.498 4.44 4.44 0 0 1 4.765 1.766 4.108 4.108 0 0 1 .702 3.108 3.857 3.857 0 0 1-1.742 2.583l-5.589 3.562a4.072 4.072 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.412 6.412 0 0 0-2.896 4.295 6.753 6.753 0 0 0 .666 4.336 6.43 6.43 0 0 0-.96 2.396 6.833 6.833 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.41 6.41 0 0 0 2.896-4.295 6.756 6.756 0 0 0-.665-4.336 6.429 6.429 0 0 0 .958-2.396 6.831 6.831 0 0 0-1.167-5.168Z",source:"https://github.com/sveltejs/branding/blob/c4dfca6743572087a6aef0e109ffe3d95596e86a/svelte-logo.svg",hex:"FF3E00",guidelines:void 0,license:void 0},ft={title:"Trello",slug:"trello",get svg(){return Z+"Trello"+N+this.path+Q},path:"M21.147 0H2.853A2.86 2.86 0 000 2.853v18.294A2.86 2.86 0 002.853 24h18.294A2.86 2.86 0 0024 21.147V2.853A2.86 2.86 0 0021.147 0zM10.34 17.287a.953.953 0 01-.953.953h-4a.954.954 0 01-.954-.953V5.38a.953.953 0 01.954-.953h4a.954.954 0 01.953.953zm9.233-5.467a.944.944 0 01-.953.947h-4a.947.947 0 01-.953-.947V5.38a.953.953 0 01.953-.953h4a.954.954 0 01.953.953z",source:"https://atlassian.design/resources/logo-library",hex:"0052CC",guidelines:"https://atlassian.design/foundations/logos/",license:void 0},ct={title:"Twitter",slug:"twitter",get svg(){return Z+"Twitter"+N+this.path+Q},path:"M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",source:"https://brand.twitter.com",hex:"1DA1F2",guidelines:void 0,license:void 0};function ut(i){let e,r,n;return e=new J({props:{icon:ct}}),{c(){V(e.$$.fragment),r=L(`\r
                Twitter`)},l(t){S(e.$$.fragment,t),r=q(t,`\r
                Twitter`)},m(t,s){M(e,t,s),b(t,r,s),n=!0},p:P,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){D(e,t),t&&f(r)}}}function mt(i){let e,r,n;return e=new J({props:{icon:ft}}),{c(){V(e.$$.fragment),r=L(`\r
                Trello`)},l(t){S(e.$$.fragment,t),r=q(t,`\r
                Trello`)},m(t,s){M(e,t,s),b(t,r,s),n=!0},p:P,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){D(e,t),t&&f(r)}}}function ht(i){let e,r,n;return e=new J({props:{icon:ot}}),{c(){V(e.$$.fragment),r=L(`\r
                Patreon`)},l(t){S(e.$$.fragment,t),r=q(t,`\r
                Patreon`)},m(t,s){M(e,t,s),b(t,r,s),n=!0},p:P,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){D(e,t),t&&f(r)}}}function gt(i){let e,r,n;return e=new J({props:{icon:it}}),{c(){V(e.$$.fragment),r=L(`\r
                E-Mail`)},l(t){S(e.$$.fragment,t),r=q(t,`\r
                E-Mail`)},m(t,s){M(e,t,s),b(t,r,s),n=!0},p:P,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){D(e,t),t&&f(r)}}}function dt(i){let e,r,n,t,s,a,l,o,u,c,m,p,d,E,h,R,H,x;return m=new j({props:{href:B.external.twitter,background:ne,$$slots:{default:[ut]},$$scope:{ctx:i}}}),d=new j({props:{href:B.external.trello,background:ne,$$slots:{default:[mt]},$$scope:{ctx:i}}}),h=new j({props:{href:B.external.patreon,background:ne,$$slots:{default:[ht]},$$scope:{ctx:i}}}),H=new j({props:{href:B.external.email,background:ne,$$slots:{default:[gt]},$$scope:{ctx:i}}}),{c(){e=v("div"),r=v("div"),n=v("div"),t=L("Important Links!"),s=C(),a=v("p"),l=L("Here are some links that you might find useful 🦊"),o=C(),u=v("div"),c=v("div"),V(m.$$.fragment),p=C(),V(d.$$.fragment),E=C(),V(h.$$.fragment),R=C(),V(H.$$.fragment),this.h()},l(T){e=w(T,"DIV",{});var z=I(e);r=w(z,"DIV",{class:!0});var W=I(r);n=w(W,"DIV",{class:!0});var X=I(n);t=q(X,"Important Links!"),X.forEach(f),s=A(W),a=w(W,"P",{});var Y=I(a);l=q(Y,"Here are some links that you might find useful 🦊"),Y.forEach(f),W.forEach(f),o=A(z),u=w(z,"DIV",{});var ee=I(u);c=w(ee,"DIV",{class:!0});var O=I(c);S(m.$$.fragment,O),p=A(O),S(d.$$.fragment,O),E=A(O),S(h.$$.fragment,O),R=A(O),S(H.$$.fragment,O),O.forEach(f),ee.forEach(f),z.forEach(f),this.h()},h(){g(n,"class","h4"),y(a,"margin-top","0"),g(r,"class","text"),g(c,"class","flex-wrap mobile-space-evenly-825 bold wide allcaps svelte-w5bcto")},m(T,z){b(T,e,z),$(e,r),$(r,n),$(n,t),$(r,s),$(r,a),$(a,l),$(e,o),$(e,u),$(u,c),M(m,c,null),$(c,p),M(d,c,null),$(c,E),M(h,c,null),$(c,R),M(H,c,null),x=!0},p(T,[z]){const W={};z&1&&(W.$$scope={dirty:z,ctx:T}),m.$set(W);const X={};z&1&&(X.$$scope={dirty:z,ctx:T}),d.$set(X);const Y={};z&1&&(Y.$$scope={dirty:z,ctx:T}),h.$set(Y);const ee={};z&1&&(ee.$$scope={dirty:z,ctx:T}),H.$set(ee)},i(T){x||(_(m.$$.fragment,T),_(d.$$.fragment,T),_(h.$$.fragment,T),_(H.$$.fragment,T),x=!0)},o(T){k(m.$$.fragment,T),k(d.$$.fragment,T),k(h.$$.fragment,T),k(H.$$.fragment,T),x=!1},d(T){T&&f(e),D(m),D(d),D(h),D(H)}}}const ne="#000000aa";class $t extends G{constructor(e){super(),K(this,e,null,dt,U,{})}}function pt(i){let e,r,n;return{c(){e=v("div"),r=v("img"),this.h()},l(t){e=w(t,"DIV",{slot:!0,class:!0});var s=I(e);r=w(s,"IMG",{src:!0,alt:!0}),s.forEach(f),this.h()},h(){te(r.src,n=Je)||g(r,"src",n),g(r,"alt","Teg"),y(r,"width","296px"),g(e,"slot","left"),g(e,"class","col-center")},m(t,s){b(t,e,s),$(e,r)},p:P,d(t){t&&f(e)}}}function _t(i){let e,r,n,t,s,a,l,o,u,c,m,p,d,E;return d=new $t({}),{c(){e=v("div"),r=L("Hey, I'm Teg!"),n=C(),t=v("div"),s=v("p"),a=L(`I'm a Chinese American artist drawing furries and anthropomorphic animals! My interest in\r
                            art and drawing started in mid 2018, I started doing freelance work in the beginning of 2020,\r
                            and my work has only been improving since!`),l=C(),o=v("p"),u=L(`Beyond art and other furry stuff, I'm currently studying Computer Science at\r
                            Georgia Tech, and doing photography and graphic design. In my free time I also do lots of\r
                            exploring, traveling, and urbanism/transit advocacy!`),c=C(),m=v("div"),p=C(),V(d.$$.fragment),this.h()},l(h){e=w(h,"DIV",{class:!0});var R=I(e);r=q(R,"Hey, I'm Teg!"),R.forEach(f),n=A(h),t=w(h,"DIV",{class:!0});var H=I(t);s=w(H,"P",{});var x=I(s);a=q(x,`I'm a Chinese American artist drawing furries and anthropomorphic animals! My interest in\r
                            art and drawing started in mid 2018, I started doing freelance work in the beginning of 2020,\r
                            and my work has only been improving since!`),x.forEach(f),l=A(H),o=w(H,"P",{});var T=I(o);u=q(T,`Beyond art and other furry stuff, I'm currently studying Computer Science at\r
                            Georgia Tech, and doing photography and graphic design. In my free time I also do lots of\r
                            exploring, traveling, and urbanism/transit advocacy!`),T.forEach(f),H.forEach(f),c=A(h),m=w(h,"DIV",{}),I(m).forEach(f),p=A(h),S(d.$$.fragment,h),this.h()},h(){g(e,"class","h2"),g(t,"class","about-p"),y(m,"margin","3rem")},m(h,R){b(h,e,R),$(e,r),b(h,n,R),b(h,t,R),$(t,s),$(s,a),$(t,l),$(t,o),$(o,u),b(h,c,R),b(h,m,R),b(h,p,R),M(d,h,R),E=!0},p:P,i(h){E||(_(d.$$.fragment,h),E=!0)},o(h){k(d.$$.fragment,h),E=!1},d(h){h&&f(e),h&&f(n),h&&f(t),h&&f(c),h&&f(m),h&&f(p),D(d,h)}}}function vt(i){let e,r,n;return r=new re({props:{background:"#00000088",padding:"1.5rem",$$slots:{default:[_t]},$$scope:{ctx:i}}}),{c(){e=v("div"),V(r.$$.fragment),this.h()},l(t){e=w(t,"DIV",{slot:!0});var s=I(e);S(r.$$.fragment,s),s.forEach(f),this.h()},h(){g(e,"slot","right")},m(t,s){b(t,e,s),M(r,e,null),n=!0},p(t,s){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),r.$set(a)},i(t){n||(_(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&f(e),D(r)}}}function wt(i){let e,r,n;return r=new Ae({props:{leftWidth:"296px",gap:"1rem",width:"1000px",mobileGap:"0",$$slots:{right:[vt],left:[pt]},$$scope:{ctx:i}}}),{c(){e=v("div"),V(r.$$.fragment),this.h()},l(t){e=w(t,"DIV",{class:!0});var s=I(e);S(r.$$.fragment,s),s.forEach(f),this.h()},h(){g(e,"class","col-center")},m(t,s){b(t,e,s),M(r,e,null),n=!0},p(t,s){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),r.$set(a)},i(t){n||(_(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&f(e),D(r)}}}function bt(i){let e,r;return e=new re({props:{background:`url(${Ze})`,padding:"1rem",$$slots:{default:[wt]},$$scope:{ctx:i}}}),{c(){V(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,t){M(e,n,t),r=!0},p(n,[t]){const s={};t&1&&(s.$$scope={dirty:t,ctx:n}),e.$set(s)},i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){D(e,n)}}}class kt extends G{constructor(e){super(),K(this,e,null,bt,U,{})}}const It=""+new URL("../../../../assets/svelte-d083d52a.svg",import.meta.url).href,Et=""+new URL("../../../../assets/sveltekit-4e7085b6.svg",import.meta.url).href;function Vt(i){let e,r,n,t,s;return{c(){e=v("img"),n=C(),t=v("img"),this.h()},l(a){e=w(a,"IMG",{src:!0,alt:!0,width:!0}),n=A(a),t=w(a,"IMG",{src:!0,alt:!0,width:!0}),this.h()},h(){te(e.src,r=It)||g(e,"src",r),g(e,"alt","SvelteKit logo"),g(e,"width","15%"),te(t.src,s=Et)||g(t,"src",s),g(t,"alt","SvelteKit Word Mark"),g(t,"width","80%")},m(a,l){b(a,e,l),b(a,n,l),b(a,t,l)},p:P,d(a){a&&f(e),a&&f(n),a&&f(t)}}}function St(i){let e,r,n;return r=new le({props:{direction:"row",gap:"5%",$$slots:{default:[Vt]},$$scope:{ctx:i}}}),{c(){e=v("div"),V(r.$$.fragment),this.h()},l(t){e=w(t,"DIV",{});var s=I(e);S(r.$$.fragment,s),s.forEach(f),this.h()},h(){y(e,"width",i[0]),y(e,"margin",i[1]),y(e,"max-width",i[2])},m(t,s){b(t,e,s),M(r,e,null),n=!0},p(t,[s]){const a={};s&8&&(a.$$scope={dirty:s,ctx:t}),r.$set(a),s&1&&y(e,"width",t[0]),s&2&&y(e,"margin",t[1]),s&4&&y(e,"max-width",t[2])},i(t){n||(_(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&f(e),D(r)}}}function Mt(i,e,r){let{width:n="100%"}=e,{margin:t="2rem 0"}=e,{maxWidth:s}=e;return i.$$set=a=>{"width"in a&&r(0,n=a.width),"margin"in a&&r(1,t=a.margin),"maxWidth"in a&&r(2,s=a.maxWidth)},[n,t,s]}class Dt extends G{constructor(e){super(),K(this,e,Mt,St,U,{width:0,margin:1,maxWidth:2})}}function Tt(i){let e,r,n;return r=new Dt({props:{maxWidth:"40rem"}}),{c(){e=v("div"),V(r.$$.fragment),this.h()},l(t){e=w(t,"DIV",{slot:!0,class:!0});var s=I(e);S(r.$$.fragment,s),s.forEach(f),this.h()},h(){g(e,"slot","left"),g(e,"class","col-center")},m(t,s){b(t,e,s),M(r,e,null),n=!0},p:P,i(t){n||(_(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&f(e),D(r)}}}function yt(i){let e,r,n;return e=new J({props:{icon:lt}}),{c(){V(e.$$.fragment),r=L(`\r
                            Site Repo`)},l(t){S(e.$$.fragment,t),r=q(t,`\r
                            Site Repo`)},m(t,s){M(e,t,s),b(t,r,s),n=!0},p:P,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){D(e,t),t&&f(r)}}}function Ct(i){let e,r,n;return e=new J({props:{icon:Ie}}),{c(){V(e.$$.fragment),r=L(`\r
                            Svelte`)},l(t){S(e.$$.fragment,t),r=q(t,`\r
                            Svelte`)},m(t,s){M(e,t,s),b(t,r,s),n=!0},p:P,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){D(e,t),t&&f(r)}}}function At(i){let e,r,n;return e=new J({props:{icon:Ie}}),{c(){V(e.$$.fragment),r=L(`\r
                            SvelteKit`)},l(t){S(e.$$.fragment,t),r=q(t,`\r
                            SvelteKit`)},m(t,s){M(e,t,s),b(t,r,s),n=!0},p:P,i(t){n||(_(e.$$.fragment,t),n=!0)},o(t){k(e.$$.fragment,t),n=!1},d(t){D(e,t),t&&f(r)}}}function Rt(i){let e,r,n,t,s,a;return e=new j({props:{href:B.external.siterepo,background:se,$$slots:{default:[yt]},$$scope:{ctx:i}}}),n=new j({props:{href:B.external.svelte,background:se,$$slots:{default:[Ct]},$$scope:{ctx:i}}}),s=new j({props:{href:B.external.sveltekit,background:se,$$slots:{default:[At]},$$scope:{ctx:i}}}),{c(){V(e.$$.fragment),r=C(),V(n.$$.fragment),t=C(),V(s.$$.fragment)},l(l){S(e.$$.fragment,l),r=A(l),S(n.$$.fragment,l),t=A(l),S(s.$$.fragment,l)},m(l,o){M(e,l,o),b(l,r,o),M(n,l,o),b(l,t,o),M(s,l,o),a=!0},p(l,o){const u={};o&1&&(u.$$scope={dirty:o,ctx:l}),e.$set(u);const c={};o&1&&(c.$$scope={dirty:o,ctx:l}),n.$set(c);const m={};o&1&&(m.$$scope={dirty:o,ctx:l}),s.$set(m)},i(l){a||(_(e.$$.fragment,l),_(n.$$.fragment,l),_(s.$$.fragment,l),a=!0)},o(l){k(e.$$.fragment,l),k(n.$$.fragment,l),k(s.$$.fragment,l),a=!1},d(l){D(e,l),l&&f(r),D(n,l),l&&f(t),D(s,l)}}}function Lt(i){let e,r,n,t,s,a,l,o,u,c,m,p,d;return p=new le({props:{direction:"row",align:"center",gap:"0.25rem",styleClass:"mobile-space-evenly-825",$$slots:{default:[Rt]},$$scope:{ctx:i}}}),{c(){e=v("div"),r=v("div"),n=L("This website was built with SvelteKit"),t=C(),s=v("p"),a=L(`This website was written in HTML5 CSS3 and Javascript ES6 using the SvelteKit Framework.\r
                    A static version of the site is deployed to GitHub pages using gh-pages. I do not collect any of\r
                    your data on this website.`),l=C(),o=v("p"),u=L("Clicks the buttons below for the code for this site and other relevant links!"),c=C(),m=v("div"),V(p.$$.fragment),this.h()},l(E){e=w(E,"DIV",{slot:!0});var h=I(e);r=w(h,"DIV",{class:!0});var R=I(r);n=q(R,"This website was built with SvelteKit"),R.forEach(f),t=A(h),s=w(h,"P",{class:!0});var H=I(s);a=q(H,`This website was written in HTML5 CSS3 and Javascript ES6 using the SvelteKit Framework.\r
                    A static version of the site is deployed to GitHub pages using gh-pages. I do not collect any of\r
                    your data on this website.`),H.forEach(f),l=A(h),o=w(h,"P",{class:!0});var x=I(o);u=q(x,"Clicks the buttons below for the code for this site and other relevant links!"),x.forEach(f),c=A(h),m=w(h,"DIV",{class:!0});var T=I(m);S(p.$$.fragment,T),T.forEach(f),h.forEach(f),this.h()},h(){g(r,"class","h4 allcaps wide"),g(s,"class","text"),g(o,"class","text"),g(m,"class","bold wide allcaps mobile-center-825"),g(e,"slot","right")},m(E,h){b(E,e,h),$(e,r),$(r,n),$(e,t),$(e,s),$(s,a),$(e,l),$(e,o),$(o,u),$(e,c),$(e,m),M(p,m,null),d=!0},p(E,h){const R={};h&1&&(R.$$scope={dirty:h,ctx:E}),p.$set(R)},i(E){d||(_(p.$$.fragment,E),d=!0)},o(E){k(p.$$.fragment,E),d=!1},d(E){E&&f(e),D(p)}}}function qt(i){let e,r,n,t,s;return t=new Ce({props:{$$slots:{right:[Lt],left:[Tt]},$$scope:{ctx:i}}}),{c(){e=v("div"),r=L("About This Site"),n=C(),V(t.$$.fragment),this.h()},l(a){e=w(a,"DIV",{class:!0});var l=I(e);r=q(l,"About This Site"),l.forEach(f),n=A(a),S(t.$$.fragment,a),this.h()},h(){g(e,"class","h3"),y(e,"margin-bottom","1rem")},m(a,l){b(a,e,l),$(e,r),b(a,n,l),M(t,a,l),s=!0},p(a,l){const o={};l&1&&(o.$$scope={dirty:l,ctx:a}),t.$set(o)},i(a){s||(_(t.$$.fragment,a),s=!0)},o(a){k(t.$$.fragment,a),s=!1},d(a){a&&f(e),a&&f(n),D(t,a)}}}function Ht(i){let e,r,n;return r=new ae({props:{color:B.colors.teg_grey,$$slots:{default:[qt]},$$scope:{ctx:i}}}),{c(){e=v("div"),V(r.$$.fragment)},l(t){e=w(t,"DIV",{});var s=I(e);S(r.$$.fragment,s),s.forEach(f)},m(t,s){b(t,e,s),M(r,e,null),n=!0},p(t,[s]){const a={};s&1&&(a.$$scope={dirty:s,ctx:t}),r.$set(a)},i(t){n||(_(r.$$.fragment,t),n=!0)},o(t){k(r.$$.fragment,t),n=!1},d(t){t&&f(e),D(r)}}}const se="#00000088";class zt extends G{constructor(e){super(),K(this,e,null,Ht,U,{})}}function Pt(i){let e;return{c(){e=L("Hobbyist artist and photographer, Full time bloo fock")},l(r){e=q(r,"Hobbyist artist and photographer, Full time bloo fock")},m(r,n){b(r,e,n)},d(r){r&&f(e)}}}function xt(i){let e,r;return e=new kt({}),{c(){V(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,t){M(e,n,t),r=!0},i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){D(e,n)}}}function Bt(i){let e,r;return e=new je({}),{c(){V(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,t){M(e,n,t),r=!0},i(n){r||(_(e.$$.fragment,n),r=!0)},o(n){k(e.$$.fragment,n),r=!1},d(n){D(e,n)}}}function Ft(i){let e,r,n,t,s,a,l,o,u,c,m,p;return s=new Se({props:{img:Ve,title:"About Me!",$$slots:{default:[Pt]},$$scope:{ctx:i}}}),l=new ae({props:{$$slots:{default:[xt]},$$scope:{ctx:i}}}),u=new ae({props:{$$slots:{default:[Bt]},$$scope:{ctx:i}}}),m=new zt({}),{c(){e=v("title"),r=L("About Me - Teg Fox"),n=C(),t=v("div"),V(s.$$.fragment),a=C(),V(l.$$.fragment),o=C(),V(u.$$.fragment),c=C(),V(m.$$.fragment)},l(d){e=w(d,"TITLE",{});var E=I(e);r=q(E,"About Me - Teg Fox"),E.forEach(f),n=A(d),t=w(d,"DIV",{});var h=I(t);S(s.$$.fragment,h),a=A(h),S(l.$$.fragment,h),o=A(h),S(u.$$.fragment,h),c=A(h),S(m.$$.fragment,h),h.forEach(f)},m(d,E){b(d,e,E),$(e,r),b(d,n,E),b(d,t,E),M(s,t,null),$(t,a),M(l,t,null),$(t,o),M(u,t,null),$(t,c),M(m,t,null),p=!0},p(d,[E]){const h={};E&1&&(h.$$scope={dirty:E,ctx:d}),s.$set(h);const R={};E&1&&(R.$$scope={dirty:E,ctx:d}),l.$set(R);const H={};E&1&&(H.$$scope={dirty:E,ctx:d}),u.$set(H)},i(d){p||(_(s.$$.fragment,d),_(l.$$.fragment,d),_(u.$$.fragment,d),_(m.$$.fragment,d),p=!0)},o(d){k(s.$$.fragment,d),k(l.$$.fragment,d),k(u.$$.fragment,d),k(m.$$.fragment,d),p=!1},d(d){d&&f(e),d&&f(n),d&&f(t),D(s),D(l),D(u),D(m)}}}class er extends G{constructor(e){super(),K(this,e,null,Ft,U,{})}}export{er as default};