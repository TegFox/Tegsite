import{S as se,i as re,s as oe,w as B,x as V,y as N,q as b,o as D,B as P,e as _,k as S,c as p,a as $,m as I,d as u,b as k,g as v,T as g,n as H,p as U,t as C,h as w,j as T,K as G,f as W,Q as j,l as y,_ as A}from"./index-3b7cb337.js";import{T as ue}from"./Title-b785155e.js";import{B as de}from"./Body-9765987e.js";/* empty css                                                 */import{g as me}from"./PageTransition-181132ed.js";import{H as ge}from"./HoverCard-89a81a74.js";/* empty css                                                      */import{$ as M,c as he,a as _e,S as pe,P as ve,M as $e}from"./SideBySide-b1281bd5.js";/* empty css            */import{R as fe}from"./ReactiveComp825-eeaafcce.js";function be(o){let{swiper:e,extendParams:s,on:t,emit:a}=o;s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null};function n(m){let h;return m&&(h=M(m),e.params.uniqueNavElements&&typeof m=="string"&&h.length>1&&e.$el.find(m).length===1&&(h=e.$el.find(m))),h}function l(m,h){const E=e.params.navigation;m&&m.length>0&&(m[h?"addClass":"removeClass"](E.disabledClass),m[0]&&m[0].tagName==="BUTTON"&&(m[0].disabled=h),e.params.watchOverflow&&e.enabled&&m[e.isLocked?"addClass":"removeClass"](E.lockClass))}function i(){if(e.params.loop)return;const{$nextEl:m,$prevEl:h}=e.navigation;l(h,e.isBeginning&&!e.params.rewind),l(m,e.isEnd&&!e.params.rewind)}function r(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&e.slidePrev()}function f(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&e.slideNext()}function c(){const m=e.params.navigation;if(e.params.navigation=he(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;const h=n(m.nextEl),E=n(m.prevEl);h&&h.length>0&&h.on("click",f),E&&E.length>0&&E.on("click",r),Object.assign(e.navigation,{$nextEl:h,nextEl:h&&h[0],$prevEl:E,prevEl:E&&E[0]}),e.enabled||(h&&h.addClass(m.lockClass),E&&E.addClass(m.lockClass))}function d(){const{$nextEl:m,$prevEl:h}=e.navigation;m&&m.length&&(m.off("click",f),m.removeClass(e.params.navigation.disabledClass)),h&&h.length&&(h.off("click",r),h.removeClass(e.params.navigation.disabledClass))}t("init",()=>{e.params.navigation.enabled===!1?F():(c(),i())}),t("toEdge fromEdge lock unlock",()=>{i()}),t("destroy",()=>{d()}),t("enable disable",()=>{const{$nextEl:m,$prevEl:h}=e.navigation;m&&m[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass),h&&h[e.enabled?"removeClass":"addClass"](e.params.navigation.lockClass)}),t("click",(m,h)=>{const{$nextEl:E,$prevEl:R}=e.navigation,q=h.target;if(e.params.navigation.hideOnClick&&!M(q).is(R)&&!M(q).is(E)){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===q||e.pagination.el.contains(q)))return;let L;E?L=E.hasClass(e.params.navigation.hiddenClass):R&&(L=R.hasClass(e.params.navigation.hiddenClass)),a(L===!0?"navigationShow":"navigationHide"),E&&E.toggleClass(e.params.navigation.hiddenClass),R&&R.toggleClass(e.params.navigation.hiddenClass)}});const O=()=>{e.$el.removeClass(e.params.navigation.navigationDisabledClass),c(),i()},F=()=>{e.$el.addClass(e.params.navigation.navigationDisabledClass),d()};Object.assign(e.navigation,{enable:O,disable:F,update:i,init:c,destroy:d})}function K(o,e,s){const t=o.slice();return t[7]=e[s],t}function Q(o,e,s){const t=o.slice();return t[10]=e[s],t}function z(o,e,s){const t=o.slice();return t[4]=e[s],t}function J(o){let e,s;return e=new fe({props:{$$slots:{alt:[ke]},$$scope:{ctx:o}}}),{c(){B(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,a){N(e,t,a),s=!0},p(t,a){const n={};a&8193&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function ke(o){let e,s,t=o[0].name+"",a,n,l,i=o[0].desc+"",r;return{c(){e=_("div"),s=_("div"),a=C(t),n=S(),l=_("div"),r=C(i),this.h()},l(f){e=p(f,"DIV",{slot:!0,class:!0});var c=$(e);s=p(c,"DIV",{class:!0});var d=$(s);a=w(d,t),d.forEach(u),n=I(c),l=p(c,"DIV",{class:!0});var O=$(l);r=w(O,i),O.forEach(u),c.forEach(u),this.h()},h(){k(s,"class","h2 allcaps wide"),k(l,"class","text"),k(e,"slot","alt"),k(e,"class","tac title-mobile svelte-b3xxr4")},m(f,c){v(f,e,c),g(e,s),g(s,a),g(e,n),g(e,l),g(l,r)},p(f,c){c&1&&t!==(t=f[0].name+"")&&T(a,t),c&1&&i!==(i=f[0].desc+"")&&T(r,i)},d(f){f&&u(e)}}}function X(o){let e,s;return e=new fe({props:{$$slots:{main:[Ee]},$$scope:{ctx:o}}}),{c(){B(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,a){N(e,t,a),s=!0},p(t,a){const n={};a&8193&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function Ee(o){let e,s,t=o[0].name+"",a,n,l,i=o[0].desc+"",r;return{c(){e=_("div"),s=_("div"),a=C(t),n=S(),l=_("p"),r=C(i),this.h()},l(f){e=p(f,"DIV",{slot:!0});var c=$(e);s=p(c,"DIV",{class:!0});var d=$(s);a=w(d,t),d.forEach(u),n=I(c),l=p(c,"P",{});var O=$(l);r=w(O,i),O.forEach(u),c.forEach(u),this.h()},h(){k(s,"class","h3 allcaps wide"),k(e,"slot","main")},m(f,c){v(f,e,c),g(e,s),g(s,a),g(e,n),g(e,l),g(l,r)},p(f,c){c&1&&t!==(t=f[0].name+"")&&T(a,t),c&1&&i!==(i=f[0].desc+"")&&T(r,i)},d(f){f&&u(e)}}}function Y(o){let e,s,t,a,n=o[0].base+"",l;return{c(){e=_("p"),s=C("Starts at "),t=_("strong"),a=C("US$"),l=C(n),this.h()},l(i){e=p(i,"P",{});var r=$(e);s=w(r,"Starts at "),t=p(r,"STRONG",{});var f=$(t);a=w(f,"US$"),l=w(f,n),f.forEach(u),r.forEach(u),this.h()},h(){G(e,"h4",!o[3])},m(i,r){v(i,e,r),g(e,s),g(e,t),g(t,a),g(t,l)},p(i,r){r&1&&n!==(n=i[0].base+"")&&T(l,n),r&8&&G(e,"h4",!i[3])},d(i){i&&u(e)}}}function Z(o){let e,s,t=o[0].prices,a=[];for(let n=0;n<t.length;n+=1)a[n]=x(Q(o,t,n));return{c(){e=_("p"),s=_("ul");for(let n=0;n<a.length;n+=1)a[n].c()},l(n){e=p(n,"P",{});var l=$(e);l.forEach(u),s=p(n,"UL",{});var i=$(s);for(let r=0;r<a.length;r+=1)a[r].l(i);i.forEach(u)},m(n,l){v(n,e,l),v(n,s,l);for(let i=0;i<a.length;i+=1)a[i].m(s,null)},p(n,l){if(l&1){t=n[0].prices;let i;for(i=0;i<t.length;i+=1){const r=Q(n,t,i);a[i]?a[i].p(r,l):(a[i]=x(r),a[i].c(),a[i].m(s,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=t.length}},d(n){n&&u(e),n&&u(s),j(a,n)}}}function Ce(o){let e=o[10].desc+"",s;return{c(){s=C(e)},l(t){s=w(t,e)},m(t,a){v(t,s,a)},p(t,a){a&1&&e!==(e=t[10].desc+"")&&T(s,e)},d(t){t&&u(s)}}}function we(o){let e,s,t=o[10].amnt+"",a;return{c(){e=_("strong"),s=C("$"),a=C(t)},l(n){e=p(n,"STRONG",{});var l=$(e);s=w(l,"$"),a=w(l,t),l.forEach(u)},m(n,l){v(n,e,l),g(e,s),g(e,a)},p(n,l){l&1&&t!==(t=n[10].amnt+"")&&T(a,t)},d(n){n&&u(e)}}}function De(o){let e,s,t=o[10].amnt+"",a,n,l=o[10].desc+"",i;return{c(){e=_("strong"),s=C("$"),a=C(t),n=C(" \u2014 "),i=C(l)},l(r){e=p(r,"STRONG",{});var f=$(e);s=w(f,"$"),a=w(f,t),f.forEach(u),n=w(r," \u2014 "),i=w(r,l)},m(r,f){v(r,e,f),g(e,s),g(e,a),v(r,n,f),v(r,i,f)},p(r,f){f&1&&t!==(t=r[10].amnt+"")&&T(a,t),f&1&&l!==(l=r[10].desc+"")&&T(i,l)},d(r){r&&u(e),r&&u(n),r&&u(i)}}}function x(o){let e,s;function t(l,i){if(l[10].amnt&&l[10].desc)return De;if(l[10].amnt)return we;if(l[10].desc)return Ce}let a=t(o),n=a&&a(o);return{c(){e=_("li"),n&&n.c(),s=S(),this.h()},l(l){e=p(l,"LI",{class:!0});var i=$(e);n&&n.l(i),s=I(i),i.forEach(u),this.h()},h(){k(e,"class","half-ls"),W(e,"text-align","left",!1)},m(l,i){v(l,e,i),n&&n.m(e,null),g(e,s)},p(l,i){a===(a=t(l))&&n?n.p(l,i):(n&&n.d(1),n=a&&a(l),n&&(n.c(),n.m(e,s)))},d(l){l&&u(e),n&&n.d()}}}function ee(o){let e,s=o[0].extra,t=[];for(let a=0;a<s.length;a+=1)t[a]=te(K(o,s,a));return{c(){for(let a=0;a<t.length;a+=1)t[a].c();e=y()},l(a){for(let n=0;n<t.length;n+=1)t[n].l(a);e=y()},m(a,n){for(let l=0;l<t.length;l+=1)t[l].m(a,n);v(a,e,n)},p(a,n){if(n&9){s=a[0].extra;let l;for(l=0;l<s.length;l+=1){const i=K(a,s,l);t[l]?t[l].p(i,n):(t[l]=te(i),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=s.length}},d(a){j(t,a),a&&u(e)}}}function te(o){let e,s=o[7]+"",t,a;return{c(){e=_("p"),t=C(s),a=S(),this.h()},l(n){e=p(n,"P",{});var l=$(e);t=w(l,s),a=I(l),l.forEach(u),this.h()},h(){G(e,"half-ls",o[3])},m(n,l){v(n,e,l),g(e,t),g(e,a)},p(n,l){l&1&&s!==(s=n[7]+"")&&T(t,s),l&8&&G(e,"half-ls",n[3])},d(n){n&&u(e)}}}function Se(o){let e,s,t,a,n,l=o[3]&&X(o),i=o[0].base&&Y(o),r=o[0].prices&&Z(o),f=o[0].extra&&ee(o);return{c(){e=_("div"),l&&l.c(),s=S(),i&&i.c(),t=S(),r&&r.c(),a=S(),f&&f.c(),this.h()},l(c){e=p(c,"DIV",{slot:!0,class:!0});var d=$(e);l&&l.l(d),s=I(d),i&&i.l(d),t=I(d),r&&r.l(d),a=I(d),f&&f.l(d),d.forEach(u),this.h()},h(){k(e,"slot","left"),k(e,"class","text")},m(c,d){v(c,e,d),l&&l.m(e,null),g(e,s),i&&i.m(e,null),g(e,t),r&&r.m(e,null),g(e,a),f&&f.m(e,null),n=!0},p(c,d){c[3]?l?(l.p(c,d),d&8&&b(l,1)):(l=X(c),l.c(),b(l,1),l.m(e,s)):l&&(H(),D(l,1,1,()=>{l=null}),U()),c[0].base?i?i.p(c,d):(i=Y(c),i.c(),i.m(e,t)):i&&(i.d(1),i=null),c[0].prices?r?r.p(c,d):(r=Z(c),r.c(),r.m(e,a)):r&&(r.d(1),r=null),c[0].extra?f?f.p(c,d):(f=ee(c),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},i(c){n||(b(l),n=!0)},o(c){D(l),n=!1},d(c){c&&u(e),l&&l.d(),i&&i.d(),r&&r.d(),f&&f.d()}}}function le(o){let e,s,t,a,n;return{c(){e=_("div"),s=_("div"),t=_("img"),n=S(),this.h()},l(l){e=p(l,"DIV",{class:!0});var i=$(e);s=p(i,"DIV",{class:!0});var r=$(s);t=p(r,"IMG",{src:!0,class:!0}),r.forEach(u),n=I(i),i.forEach(u),this.h()},h(){A(t.src,a=o[4])||k(t,"src",a),k(t,"class","img svelte-b3xxr4"),k(s,"class","swiper-in svelte-b3xxr4"),k(e,"class","swiper-slide svelte-b3xxr4")},m(l,i){v(l,e,i),g(e,s),g(s,t),g(e,n)},p(l,i){i&1&&!A(t.src,a=l[4])&&k(t,"src",a)},d(l){l&&u(e)}}}function Ie(o){var a;let e,s=(a=o[0].imgs)!=null?a:[],t=[];for(let n=0;n<s.length;n+=1)t[n]=le(z(o,s,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=y()},l(n){for(let l=0;l<t.length;l+=1)t[l].l(n);e=y()},m(n,l){for(let i=0;i<t.length;i+=1)t[i].m(n,l);v(n,e,l)},p(n,l){var i;if(l&1){s=(i=n[0].imgs)!=null?i:[];let r;for(r=0;r<s.length;r+=1){const f=z(n,s,r);t[r]?t[r].p(f,l):(t[r]=le(f),t[r].c(),t[r].m(e.parentNode,e))}for(;r<t.length;r+=1)t[r].d(1);t.length=s.length}},d(n){j(t,n),n&&u(e)}}}function ne(o){let e,s;return{c(){e=_("div"),s=C("Swipe / Scroll to look through gallery"),this.h()},l(t){e=p(t,"DIV",{class:!0});var a=$(e);s=w(a,"Swipe / Scroll to look through gallery"),a.forEach(u),this.h()},h(){k(e,"class","tac cap"),W(e,"margin-top","0.5rem",!1)},m(t,a){v(t,e,a),g(e,s)},d(t){t&&u(e)}}}function Te(o){let e,s,t,a,n;t=new pe({props:{modules:[ve,be,$e],mousewheel:{forceToAxis:!0},spaceBetween:30,slidesPerView:"auto",navigation:!0,pagination:{clickable:!0},$$slots:{default:[Ie]},$$scope:{ctx:o}}});let l=o[0].imgs&&o[0].imgs.length>1&&ne();return{c(){e=_("div"),s=_("div"),B(t.$$.fragment),a=S(),l&&l.c(),this.h()},l(i){e=p(i,"DIV",{slot:!0});var r=$(e);s=p(r,"DIV",{class:!0,style:!0});var f=$(s);V(t.$$.fragment,f),a=I(f),l&&l.l(f),f.forEach(u),r.forEach(u),this.h()},h(){k(s,"class","swiper-out svelte-b3xxr4"),W(s,"--swiper-theme-color","#fff"),k(e,"slot","right")},m(i,r){v(i,e,r),g(e,s),N(t,s,null),g(s,a),l&&l.m(s,null),n=!0},p(i,r){const f={};r&8193&&(f.$$scope={dirty:r,ctx:i}),t.$set(f),i[0].imgs&&i[0].imgs.length>1?l||(l=ne(),l.c(),l.m(s,null)):l&&(l.d(1),l=null)},i(i){n||(b(t.$$.fragment,i),n=!0)},o(i){D(t.$$.fragment,i),n=!1},d(i){i&&u(e),P(t),l&&l.d()}}}function Be(o){let e,s,t,a,n=o[3]&&J(o);return t=new _e({props:{width:"100%",reverse:"true",align:"center",maxChildWidth:"50vw",$$slots:{right:[Te],left:[Se]},$$scope:{ctx:o}}}),{c(){e=_("div"),n&&n.c(),s=S(),B(t.$$.fragment),this.h()},l(l){e=p(l,"DIV",{class:!0});var i=$(e);n&&n.l(i),s=I(i),V(t.$$.fragment,i),i.forEach(u),this.h()},h(){k(e,"class","padding svelte-b3xxr4")},m(l,i){v(l,e,i),n&&n.m(e,null),g(e,s),N(t,e,null),a=!0},p(l,i){l[3]?n?(n.p(l,i),i&8&&b(n,1)):(n=J(l),n.c(),b(n,1),n.m(e,s)):n&&(H(),D(n,1,1,()=>{n=null}),U());const r={};i&8201&&(r.$$scope={dirty:i,ctx:l}),t.$set(r)},i(l){a||(b(n),b(t.$$.fragment,l),a=!0)},o(l){D(n),D(t.$$.fragment,l),a=!1},d(l){l&&u(e),n&&n.d(),P(t)}}}function Ve(o){let e,s;return e=new ge({props:{background:o[1],overlayBackground:o[2],padding:"0",$$slots:{default:[Be]},$$scope:{ctx:o}}}),{c(){B(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,a){N(e,t,a),s=!0},p(t,[a]){const n={};a&2&&(n.background=t[1]),a&4&&(n.overlayBackground=t[2]),a&8201&&(n.$$scope={dirty:a,ctx:t}),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function Ne(o,e,s){let{info:t={}}=e,{background:a="linear-gradient(-45deg, #111111aa ,#bbbbff2b)"}=e,{overlayBackground:n=`linear-gradient(-45deg, ${me.colors.teg_grey}, #1C3562FF)`}=e,{includeTitleDesc:l=!0}=e;return o.$$set=i=>{"info"in i&&s(0,t=i.info),"background"in i&&s(1,a=i.background),"overlayBackground"in i&&s(2,n=i.overlayBackground),"includeTitleDesc"in i&&s(3,l=i.includeTitleDesc)},[t,a,n,l]}class ce extends se{constructor(e){super();re(this,e,Ne,Ve,oe,{info:0,background:1,overlayBackground:2,includeTitleDesc:3})}}function ie(o,e,s){const t=o.slice();return t[2]=e[s],t}function Pe(o){let e=o[0].desc+"",s;return{c(){s=C(e)},l(t){s=w(t,e)},m(t,a){v(t,s,a)},p(t,a){a&1&&e!==(e=t[0].desc+"")&&T(s,e)},d(t){t&&u(s)}}}function Oe(o){let e,s;return e=new ce({props:{info:o[2],includeTitleDesc:!1,background:"transparent",overlayBackground:"transparent"}}),{c(){B(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,a){N(e,t,a),s=!0},p(t,a){const n={};a&1&&(n.info=t[2]),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function ye(o){let e,s;return e=new ce({props:{info:o[2]}}),{c(){B(e.$$.fragment)},l(t){V(e.$$.fragment,t)},m(t,a){N(e,t,a),s=!0},p(t,a){const n={};a&1&&(n.info=t[2]),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){D(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function ae(o){let e,s,t,a,n;const l=[ye,Oe],i=[];function r(f,c){var d;return((d=f[0].info)!=null?d:[]).length>1||f[1]?0:1}return s=r(o),t=i[s]=l[s](o),{c(){e=_("div"),t.c(),a=S(),this.h()},l(f){e=p(f,"DIV",{});var c=$(e);t.l(c),a=I(c),c.forEach(u),this.h()},h(){W(e,"margin","2rem 0",!1)},m(f,c){v(f,e,c),i[s].m(e,null),g(e,a),n=!0},p(f,c){let d=s;s=r(f),s===d?i[s].p(f,c):(H(),D(i[d],1,1,()=>{i[d]=null}),U(),t=i[s],t?t.p(f,c):(t=i[s]=l[s](f),t.c()),b(t,1),t.m(e,a))},i(f){n||(b(t),n=!0)},o(f){D(t),n=!1},d(f){f&&u(e),i[s].d()}}}function Re(o){var l;let e,s,t=(l=o[0].info)!=null?l:[],a=[];for(let i=0;i<t.length;i+=1)a[i]=ae(ie(o,t,i));const n=i=>D(a[i],1,1,()=>{a[i]=null});return{c(){for(let i=0;i<a.length;i+=1)a[i].c();e=y()},l(i){for(let r=0;r<a.length;r+=1)a[r].l(i);e=y()},m(i,r){for(let f=0;f<a.length;f+=1)a[f].m(i,r);v(i,e,r),s=!0},p(i,r){var f;if(r&3){t=(f=i[0].info)!=null?f:[];let c;for(c=0;c<t.length;c+=1){const d=ie(i,t,c);a[c]?(a[c].p(d,r),b(a[c],1)):(a[c]=ae(d),a[c].c(),b(a[c],1),a[c].m(e.parentNode,e))}for(H(),c=t.length;c<a.length;c+=1)n(c);U()}},i(i){if(!s){for(let r=0;r<t.length;r+=1)b(a[r]);s=!0}},o(i){a=a.filter(Boolean);for(let r=0;r<a.length;r+=1)D(a[r]);s=!1},d(i){j(a,i),i&&u(e)}}}function We(o){let e,s,t,a,n;return e=new ue({props:{img:o[0].img,title:o[0].name,contain:o[0].contain,$$slots:{default:[Pe]},$$scope:{ctx:o}}}),a=new de({props:{$$slots:{default:[Re]},$$scope:{ctx:o}}}),{c(){B(e.$$.fragment),s=S(),t=_("div"),B(a.$$.fragment),this.h()},l(l){V(e.$$.fragment,l),s=I(l),t=p(l,"DIV",{});var i=$(t);V(a.$$.fragment,i),i.forEach(u),this.h()},h(){W(t,"margin-bottom","-3rem",!1)},m(l,i){N(e,l,i),v(l,s,i),v(l,t,i),N(a,t,null),n=!0},p(l,[i]){const r={};i&1&&(r.img=l[0].img),i&1&&(r.title=l[0].name),i&1&&(r.contain=l[0].contain),i&33&&(r.$$scope={dirty:i,ctx:l}),e.$set(r);const f={};i&35&&(f.$$scope={dirty:i,ctx:l}),a.$set(f)},i(l){n||(b(e.$$.fragment,l),b(a.$$.fragment,l),n=!0)},o(l){D(e.$$.fragment,l),D(a.$$.fragment,l),n=!1},d(l){P(e,l),l&&u(s),l&&u(t),P(a)}}}function qe(o,e,s){let{info:t}=e,{showTitleWhenSolo:a=!1}=e;return o.$$set=n=>{"info"in n&&s(0,t=n.info),"showTitleWhenSolo"in n&&s(1,a=n.showTitleWhenSolo)},[t,a]}class ze extends se{constructor(e){super();re(this,e,qe,We,oe,{info:0,showTitleWhenSolo:1})}}export{ze as I};
