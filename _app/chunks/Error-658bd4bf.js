import{S as H,i as J,s as K,e as f,w as R,c as d,a as v,x as q,d as i,b as u,g as $,T as n,y as M,q as N,o as W,B as P,_ as z,E as L,t as V,k as b,h as x,m as T,f as A,j as G}from"./index-3b7cb337.js";import{n as F}from"./notdone-12066466.js";import{B as Q}from"./Body-03b5c91c.js";import{S as X}from"./SideBySideUneven-bb782d1c.js";/* empty css                                                      */import{S as Y}from"./StackPanel-a65dec7a.js";import{R as Z}from"./ReactiveComp-a9dcc462.js";function tt(c){let t,a,r;return{c(){t=f("div"),a=f("img"),this.h()},l(e){t=d(e,"DIV",{slot:!0,class:!0});var s=v(t);a=d(s,"IMG",{src:!0,class:!0}),s.forEach(i),this.h()},h(){z(a.src,r=F)||u(a,"src",r),u(a,"class","img svelte-1xxjgs4"),u(t,"slot","left"),u(t,"class","align-right svelte-1xxjgs4")},m(e,s){$(e,t,s),n(t,a)},p:L,d(e){e&&i(t)}}}function et(c){let t,a,r,e,s,o,_,E,y,p,O,S,I,w,D;return{c(){t=f("div"),a=f("div"),r=V("Oops!"),e=b(),s=f("div"),o=V("There was an error trying to load that page!"),_=b(),E=f("div"),y=V("Status code: "),p=f("strong"),O=V(c[0]),S=b(),I=f("div"),w=f("code"),D=V(c[1]),this.h()},l(g){t=d(g,"DIV",{slot:!0});var m=v(t);a=d(m,"DIV",{class:!0});var l=v(a);r=x(l,"Oops!"),l.forEach(i),e=T(m),s=d(m,"DIV",{class:!0});var h=v(s);o=x(h,"There was an error trying to load that page!"),h.forEach(i),_=T(m),E=d(m,"DIV",{class:!0});var j=v(E);y=x(j,"Status code: "),p=d(j,"STRONG",{});var C=v(p);O=x(C,c[0]),C.forEach(i),j.forEach(i),S=T(m),I=d(m,"DIV",{});var k=v(I);w=d(k,"CODE",{});var B=v(w);D=x(B,c[1]),B.forEach(i),k.forEach(i),m.forEach(i),this.h()},h(){u(a,"class","h1 allcaps wide"),u(s,"class","text"),u(E,"class","text"),A(E,"margin-top","1rem",!1),u(t,"slot","right")},m(g,m){$(g,t,m),n(t,a),n(a,r),n(t,e),n(t,s),n(s,o),n(t,_),n(t,E),n(E,y),n(E,p),n(p,O),n(t,S),n(t,I),n(I,w),n(w,D)},p(g,m){m&1&&G(O,g[0]),m&2&&G(D,g[1])},d(g){g&&i(t)}}}function st(c){let t,a,r;return a=new X({props:{width:"90vw",leftWidth:"40vw",maxChildWidth:"40vw",$$slots:{right:[et],left:[tt]},$$scope:{ctx:c}}}),{c(){t=f("div"),R(a.$$.fragment),this.h()},l(e){t=d(e,"DIV",{slot:!0});var s=v(t);q(a.$$.fragment,s),s.forEach(i),this.h()},h(){u(t,"slot","main")},m(e,s){$(e,t,s),M(a,t,null),r=!0},p(e,s){const o={};s&7&&(o.$$scope={dirty:s,ctx:e}),a.$set(o)},i(e){r||(N(a.$$.fragment,e),r=!0)},o(e){W(a.$$.fragment,e),r=!1},d(e){e&&i(t),P(a)}}}function at(c){let t,a,r,e,s,o,_,E,y,p,O,S,I,w,D,g,m;return{c(){t=f("img"),r=b(),e=f("div"),s=V("Oops!"),o=b(),_=f("div"),E=V("There was an error trying to load that page!"),y=b(),p=f("div"),O=V("Status code: "),S=f("strong"),I=V(c[0]),w=b(),D=f("div"),g=f("code"),m=V(c[1]),this.h()},l(l){t=d(l,"IMG",{src:!0,class:!0}),r=T(l),e=d(l,"DIV",{class:!0});var h=v(e);s=x(h,"Oops!"),h.forEach(i),o=T(l),_=d(l,"DIV",{class:!0});var j=v(_);E=x(j,"There was an error trying to load that page!"),j.forEach(i),y=T(l),p=d(l,"DIV",{class:!0});var C=v(p);O=x(C,"Status code: "),S=d(C,"STRONG",{});var k=v(S);I=x(k,c[0]),k.forEach(i),C.forEach(i),w=T(l),D=d(l,"DIV",{class:!0});var B=v(D);g=d(B,"CODE",{});var U=v(g);m=x(U,c[1]),U.forEach(i),B.forEach(i),this.h()},h(){z(t.src,a=F)||u(t,"src",a),u(t,"class","img-mobile svelte-1xxjgs4"),u(e,"class","h1 allcaps wide tac"),u(_,"class","tac tex"),u(p,"class","text tac"),A(p,"margin-bottom","-1rem",!1),u(D,"class","tac")},m(l,h){$(l,t,h),$(l,r,h),$(l,e,h),n(e,s),$(l,o,h),$(l,_,h),n(_,E),$(l,y,h),$(l,p,h),n(p,O),n(p,S),n(S,I),$(l,w,h),$(l,D,h),n(D,g),n(g,m)},p(l,h){h&1&&G(I,l[0]),h&2&&G(m,l[1])},d(l){l&&i(t),l&&i(r),l&&i(e),l&&i(o),l&&i(_),l&&i(y),l&&i(p),l&&i(w),l&&i(D)}}}function rt(c){let t,a,r;return a=new Y({props:{direction:"column",align:"center",gap:"1.5rem",$$slots:{default:[at]},$$scope:{ctx:c}}}),{c(){t=f("div"),R(a.$$.fragment),this.h()},l(e){t=d(e,"DIV",{slot:!0});var s=v(t);q(a.$$.fragment,s),s.forEach(i),this.h()},h(){u(t,"slot","alt")},m(e,s){$(e,t,s),M(a,t,null),r=!0},p(e,s){const o={};s&7&&(o.$$scope={dirty:s,ctx:e}),a.$set(o)},i(e){r||(N(a.$$.fragment,e),r=!0)},o(e){W(a.$$.fragment,e),r=!1},d(e){e&&i(t),P(a)}}}function lt(c){let t,a,r;return a=new Z({props:{$$slots:{alt:[rt],main:[st]},$$scope:{ctx:c}}}),{c(){t=f("div"),R(a.$$.fragment),this.h()},l(e){t=d(e,"DIV",{class:!0});var s=v(t);q(a.$$.fragment,s),s.forEach(i),this.h()},h(){u(t,"class","col-center")},m(e,s){$(e,t,s),M(a,t,null),r=!0},p(e,s){const o={};s&7&&(o.$$scope={dirty:s,ctx:e}),a.$set(o)},i(e){r||(N(a.$$.fragment,e),r=!0)},o(e){W(a.$$.fragment,e),r=!1},d(e){e&&i(t),P(a)}}}function it(c){let t,a,r,e;return r=new Q({props:{$$slots:{default:[lt]},$$scope:{ctx:c}}}),{c(){t=f("div"),a=f("div"),R(r.$$.fragment),this.h()},l(s){t=d(s,"DIV",{class:!0});var o=v(t);a=d(o,"DIV",{class:!0});var _=v(a);q(r.$$.fragment,_),_.forEach(i),o.forEach(i),this.h()},h(){u(a,"class","container svelte-1xxjgs4"),u(t,"class","main svelte-1xxjgs4")},m(s,o){$(s,t,o),n(t,a),M(r,a,null),e=!0},p(s,[o]){const _={};o&7&&(_.$$scope={dirty:o,ctx:s}),r.$set(_)},i(s){e||(N(r.$$.fragment,s),e=!0)},o(s){W(r.$$.fragment,s),e=!1},d(s){s&&i(t),P(r)}}}function ot(c,t,a){let{status:r}=t,{message:e}=t;return c.$$set=s=>{"status"in s&&a(0,r=s.status),"message"in s&&a(1,e=s.message)},[r,e]}class ht extends H{constructor(t){super();J(this,t,ot,it,K,{status:0,message:1})}}export{ht as E};
