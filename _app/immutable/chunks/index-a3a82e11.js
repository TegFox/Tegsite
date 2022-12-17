import{W as m}from"./index-6b589072.js";function d(o){const t=o-1;return t*t*t+1}function $(o,{delay:t=0,duration:n=400,easing:s=m}={}){const c=+getComputedStyle(o).opacity;return{delay:t,duration:n,easing:s,css:r=>`opacity: ${r*c}`}}function g(o,{delay:t=0,duration:n=400,easing:s=d,x:c=0,y:r=0,opacity:i=0}={}){const a=getComputedStyle(o),e=+a.opacity,p=a.transform==="none"?"":a.transform,u=e*(1-i);return{delay:t,duration:n,easing:s,css:(f,y)=>`
			transform: ${p} translate(${(1-f)*c}px, ${(1-f)*r}px);
			opacity: ${e-u*y}`}}export{$ as a,d as c,g as f};
