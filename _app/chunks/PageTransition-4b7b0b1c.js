import{$ as _,S as k,i as y,s as b,e as C,c as x,a as q,d,g as I,M as w,N as S,O as E,q as l,Y as A,a0 as P,o as p,l as m,n as T,E as H,p as D,J as F}from"./index-3b7cb337.js";var R="/_app/assets/headshot-6ae58d6f.png",L="/_app/assets/hsl1-44db2ef2.png",V="/_app/assets/hsl2-ed6f1d6e.png",j="/_app/assets/hsls1-3bde4697.png",z="/_app/assets/headshot-6ae58d6f.png",B="/_app/assets/hsls3-bc5b9e93.png",N={name:"Headshots",link:"headshot",img:R,desc:"Art of your character from the chest up",start:"25.00",info:[{name:"Lined Headshot",desc:"This is a placeholder description",base:"25.00",prices:[{amnt:"5.00",desc:"Add detailed background"},{desc:"Extra Charge for Complex Characters"}],extra:[],imgs:[L,V]},{name:"Lineless Headshot",desc:"This is a placeholder description",base:"40.00",prices:[{amnt:"5.00",desc:"Add detailed background"},{desc:"Extra Charge for Complex Characters"}],extra:[],imgs:[j,z,B]}]},Y="/_app/assets/illustration-fa653eb8.png",J="/_app/assets/ic1-7ddfc064.png",Q="/_app/assets/ic2-15c7893b.png",G="/_app/assets/ic3-68a45cbc.png",K="/_app/assets/ic4-8359a53d.png",U="/_app/assets/forest-81acb79c.png",W="/_app/assets/is2-0792d917.png",X="/_app/assets/is3-e2665ca9.png",Z="/_app/assets/is4-50febbf2.png",$={name:"Illustration",link:"illustration",img:Y,desc:"Show off your character(s) in a dynamic pose",start:"65.00",info:[{name:"Character Drawing",desc:"This is a placeholder description",base:"65.00",prices:[{amnt:"30.00",desc:"Add Extra Character"},{desc:"Extra Charge for Complex Characters"}],extra:[],imgs:[J,Q,G,K]},{name:"Scene Drawing",desc:"This is a placeholder description",base:"85.00",prices:[{amnt:"30.00",desc:"Add Extra Character"},{desc:"Extra Charge for Complex Characters"}],extra:[],imgs:[U,W,X,Z]}]},ee="/_app/assets/refsheet-0a219c24.png",ae="/_app/assets/rss1-d25d9891.png",se="/_app/assets/rss2-5c3028c1.png",te="/_app/assets/rss3-dcc86a9d.png",ne={name:"Reference Sheets",link:"refsheet",img:ee,desc:"A spread to detail every facet of your character",start:"60.00",info:[{name:"Reference Sheet",desc:"This is a placeholder description",base:"60.00",prices:[{amnt:"5.00",desc:"Additional Small Element (Paws, Tail, etc.)"},{amnt:"10.00",desc:"Additional Large Element (Bust, Outfit, etc.)"},{amnt:"20.00+",desc:"Additional Full Body Pose"},{desc:"Extra charge for Complex Characters"}],extra:[],imgs:[ae,se,te]}]},re="/_app/assets/stickers-21512f36.png",ce="/_app/assets/se1-c39d0b13.png",ie="/_app/assets/se2-0bbcd47b.png",oe="/_app/assets/se3-966afbcf.png",ue="/_app/assets/ss1-fb05b82c.png",de={name:"Stickers & Emotes",link:"stickers",img:re,desc:"Small icons with defined expressions",start:"8.00",contain:!0,info:[{name:"Emotes",desc:"This is a placeholder description",base:"8.00",prices:[{amnt:"30.00",desc:"Add Extra Character"},{amnt:"20.00+",desc:"Add Detailed background"},{desc:"Extra Charge for Complex Characters"}],extra:[],imgs:[ce,ie,oe]},{name:"Stickers",desc:"This is a placeholder description",base:"10.00",prices:[{amnt:"30.00",desc:"Add Extra Character"},{amnt:"20.00+",desc:"Add Detailed background"},{desc:"Extra Charge for Complex Characters"}],extra:[],imgs:[ue]}]},le="/_app/assets/more-9ddffbde.png",pe={name:"More Stuff & Things",link:"more",img:le,desc:"Other stuff that I'm trying out!",start:void 0,info:[{name:"Sketch Page",desc:"This is a placeholder description",extra:[],imgs:[]},{name:"Chibis",desc:"This is a placeholder description",extra:[],imgs:[]},{name:"Drawovers",desc:"This is a placeholder description",extra:[],imgs:[]}]},Je={comms:"askme",comm_form:"http://dance.goat.dance/",comm_types:[N,$,ne,de,pe],links:{home:{sname:"Home",path:"/"},prices:{sname:"Prices",path:"/prices"},ych:{sname:"YCH",path:"/ych"},termsfaq:{sname:"Terms / FAQ",path:"/terms"},about:{sname:"About",path:"/about"}},colors:{teg_grey:"#192231",teg_bloo:"#44daff",teg_light:"#35AEFF",teg_dark:"#01327E"},external:{placeholder:"http://dance.goat.dance/",twitter:"https://twitter.com/floofybluething",trello:"https://trello.com/b/zi6VfP7F/stuff",patreon:"http://dance.goat.dance/"}};function fe(e){const a=2.5949095;return(e*=2)<1?.5*(e*e*((a+1)*e-a)):.5*((e-=2)*e*((a+1)*e+a)+2)}function he(e){return e*e*((1.70158+1)*e-1.70158)}function me(e){return--e*e*((1.70158+1)*e+1.70158)+1}function u(e){const a=.36363636363636365,r=8/11,c=9/10,t=4356/361,s=35442/1805,n=16061/1805,i=e*e;return e<a?7.5625*i:e<r?9.075*i-9.9*e+3.4:e<c?t*i-s*e+n:10.8*e*e-20.52*e+10.72}function ge(e){return e<.5?.5*(1-u(1-e*2)):.5*u(e*2-1)+.5}function _e(e){return 1-u(1-e)}function be(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}function Ie(e){return 1-Math.sqrt(1-e*e)}function Oe(e){return Math.sqrt(1- --e*e)}function ve(e){return e<.5?4*e*e*e:.5*Math.pow(2*e-2,3)+1}function Me(e){return e*e*e}function f(e){const a=e-1;return a*a*a+1}function ke(e){return e<.5?.5*Math.sin(13*Math.PI/2*2*e)*Math.pow(2,10*(2*e-1)):.5*Math.sin(-13*Math.PI/2*(2*e-1+1))*Math.pow(2,-10*(2*e-1))+1}function ye(e){return Math.sin(13*e*Math.PI/2)*Math.pow(2,10*(e-1))}function Ce(e){return Math.sin(-13*(e+1)*Math.PI/2)*Math.pow(2,-10*e)+1}function xe(e){return e===0||e===1?e:e<.5?.5*Math.pow(2,20*e-10):-.5*Math.pow(2,10-e*20)+1}function qe(e){return e===0?e:Math.pow(2,10*(e-1))}function we(e){return e===1?e:1-Math.pow(2,-10*e)}function Se(e){return e/=.5,e<1?.5*e*e:(e--,-.5*(e*(e-2)-1))}function Ee(e){return e*e}function Ae(e){return-e*(e-2)}function Pe(e){return e<.5?8*Math.pow(e,4):-8*Math.pow(e-1,4)+1}function Te(e){return Math.pow(e,4)}function He(e){return Math.pow(e-1,3)*(1-e)+1}function De(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}function Fe(e){return e*e*e*e*e}function Re(e){return--e*e*e*e*e+1}function Le(e){return-.5*(Math.cos(Math.PI*e)-1)}function Ve(e){const a=Math.cos(e*Math.PI*.5);return Math.abs(a)<1e-14?1:1-a}function je(e){return Math.sin(e*Math.PI/2)}var Qe=Object.freeze(Object.defineProperty({__proto__:null,backIn:he,backInOut:fe,backOut:me,bounceIn:_e,bounceInOut:ge,bounceOut:u,circIn:Ie,circInOut:be,circOut:Oe,cubicIn:Me,cubicInOut:ve,cubicOut:f,elasticIn:ye,elasticInOut:ke,elasticOut:Ce,expoIn:qe,expoInOut:xe,expoOut:we,quadIn:Ee,quadInOut:Se,quadOut:Ae,quartIn:Te,quartInOut:Pe,quartOut:He,quintIn:Fe,quintInOut:De,quintOut:Re,sineIn:Ve,sineInOut:Le,sineOut:je,linear:_},Symbol.toStringTag,{value:"Module"}));function Ge(e,{delay:a=0,duration:r=400,easing:c=_}={}){const t=+getComputedStyle(e).opacity;return{delay:a,duration:r,easing:c,css:s=>`opacity: ${s*t}`}}function ze(e,{delay:a=0,duration:r=400,easing:c=f,x:t=0,y:s=0,opacity:n=0}={}){const i=getComputedStyle(e),o=+i.opacity,O=i.transform==="none"?"":i.transform,v=o*(1-n);return{delay:a,duration:r,easing:c,css:(h,M)=>`
			transform: ${O} translate(${(1-h)*t}px, ${(1-h)*s}px);
			opacity: ${o-v*M}`}}function g(e){let a,r,c;const t=e[4].default,s=F(t,e,e[3],null);return{c(){a=C("div"),s&&s.c()},l(n){a=x(n,"DIV",{});var i=q(a);s&&s.l(i),i.forEach(d)},m(n,i){I(n,a,i),s&&s.m(a,null),c=!0},p(n,i){e=n,s&&s.p&&(!c||i&8)&&w(s,t,e,e[3],c?E(t,e[3],i,null):S(e[3]),null)},i(n){c||(l(s,n),r||A(()=>{r=P(a,ze,{y:e[1]*-1,duration:e[2],easing:f}),r.start()}),c=!0)},o(n){p(s,n),c=!1},d(n){n&&d(a),s&&s.d(n)}}}function Be(e){let a=e[0],r,c,t=g(e);return{c(){t.c(),r=m()},l(s){t.l(s),r=m()},m(s,n){t.m(s,n),I(s,r,n),c=!0},p(s,[n]){n&1&&b(a,a=s[0])?(T(),p(t,1,1,H),D(),t=g(s),t.c(),l(t,1),t.m(r.parentNode,r)):t.p(s,n)},i(s){c||(l(t),c=!0)},o(s){p(t),c=!1},d(s){s&&d(r),t.d(s)}}}function Ne(e,a,r){let{$$slots:c={},$$scope:t}=a,{url:s=""}=a,{dist:n=35}=a,{duration:i=300}=a;return e.$$set=o=>{"url"in o&&r(0,s=o.url),"dist"in o&&r(1,n=o.dist),"duration"in o&&r(2,i=o.duration),"$$scope"in o&&r(3,t=o.$$scope)},[s,n,i,t,c]}class Ke extends k{constructor(a){super();y(this,a,Ne,Be,b,{url:0,dist:1,duration:2})}}export{N as H,$ as I,pe as M,Ke as P,ne as R,de as S,Ge as a,Qe as e,ze as f,Je as g};