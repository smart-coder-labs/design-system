import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-jtk2jlYO.js";import{t as r}from"./jsx-runtime-BK76Wfr-.js";import{s as i,t as a}from"./es-DLZWAS6t.js";import{J as o,ft as s,hr as c,ht as l,in as u,ln as d,lr as f,nn as p,qt as m,t as h,ut as g,y as _}from"./lucide-react-LrcM5b-z.js";var v,y,b=e((()=>{v={},(function e(t,n,r,i){var a=!!(t.Worker&&t.Blob&&t.Promise&&t.OffscreenCanvas&&t.OffscreenCanvasRenderingContext2D&&t.HTMLCanvasElement&&t.HTMLCanvasElement.prototype.transferControlToOffscreen&&t.URL&&t.URL.createObjectURL),o=typeof Path2D==`function`&&typeof DOMMatrix==`function`,s=(function(){if(!t.OffscreenCanvas)return!1;try{var e=new OffscreenCanvas(1,1),n=e.getContext(`2d`);n.fillRect(0,0,1,1);var r=e.transferToImageBitmap();n.createPattern(r,`no-repeat`)}catch{return!1}return!0})();function c(){}function l(e){var r=n.exports.Promise,i=r===void 0?t.Promise:r;return typeof i==`function`?new i(e):(e(c,c),null)}var u=(function(e,t){return{transform:function(n){if(e)return n;if(t.has(n))return t.get(n);var r=new OffscreenCanvas(n.width,n.height);return r.getContext(`2d`).drawImage(n,0,0),t.set(n,r),r},clear:function(){t.clear()}}})(s,new Map),d=function(){var e=16,t,n,r={},i=0;return typeof requestAnimationFrame==`function`&&typeof cancelAnimationFrame==`function`?(t=function(t){var n=Math.random();return r[n]=requestAnimationFrame(function a(o){i===o||i+e-1<o?(i=o,delete r[n],t()):r[n]=requestAnimationFrame(a)}),n},n=function(e){r[e]&&cancelAnimationFrame(r[e])}):(t=function(t){return setTimeout(t,e)},n=function(e){return clearTimeout(e)}),{frame:t,cancel:n}}(),f=(function(){var t,n,i={};function o(e){function t(t,n){e.postMessage({options:t||{},callback:n})}e.init=function(t){var n=t.transferControlToOffscreen();e.postMessage({canvas:n},[n])},e.fire=function(r,a,o){if(n)return t(r,null),n;var s=Math.random().toString(36).slice(2);return n=l(function(a){function c(t){t.data.callback===s&&(delete i[s],e.removeEventListener(`message`,c),n=null,u.clear(),o(),a())}e.addEventListener(`message`,c),t(r,s),i[s]=c.bind(null,{data:{callback:s}})}),n},e.reset=function(){for(var t in e.postMessage({reset:!0}),i)i[t](),delete i[t]}}return function(){if(t)return t;if(!r&&a){var n=[`var CONFETTI, SIZE = {}, module = {};`,`(`+e.toString()+`)(this, module, true, SIZE);`,`onmessage = function(msg) {`,`  if (msg.data.options) {`,`    CONFETTI(msg.data.options).then(function () {`,`      if (msg.data.callback) {`,`        postMessage({ callback: msg.data.callback });`,`      }`,`    });`,`  } else if (msg.data.reset) {`,`    CONFETTI && CONFETTI.reset();`,`  } else if (msg.data.resize) {`,`    SIZE.width = msg.data.resize.width;`,`    SIZE.height = msg.data.resize.height;`,`  } else if (msg.data.canvas) {`,`    SIZE.width = msg.data.canvas.width;`,`    SIZE.height = msg.data.canvas.height;`,`    CONFETTI = module.exports.create(msg.data.canvas);`,`  }`,`}`].join(`
`);try{t=new Worker(URL.createObjectURL(new Blob([n])))}catch(e){return typeof console<`u`&&typeof console.warn==`function`&&console.warn(`🎊 Could not load worker`,e),null}o(t)}return t}})(),p={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:[`square`,`circle`],zIndex:100,colors:[`#26ccff`,`#a25afd`,`#ff5e7e`,`#88ff5a`,`#fcff42`,`#ffa62d`,`#ff36ff`],disableForReducedMotion:!1,scalar:1};function m(e,t){return t?t(e):e}function h(e){return e!=null}function g(e,t,n){return m(e&&h(e[t])?e[t]:p[t],n)}function _(e){return e<0?0:Math.floor(e)}function v(e,t){return Math.floor(Math.random()*(t-e))+e}function y(e){return parseInt(e,16)}function b(e){return e.map(x)}function x(e){var t=String(e).replace(/[^0-9a-f]/gi,``);return t.length<6&&(t=t[0]+t[0]+t[1]+t[1]+t[2]+t[2]),{r:y(t.substring(0,2)),g:y(t.substring(2,4)),b:y(t.substring(4,6))}}function S(e){var t=g(e,`origin`,Object);return t.x=g(t,`x`,Number),t.y=g(t,`y`,Number),t}function C(e){e.width=document.documentElement.clientWidth,e.height=document.documentElement.clientHeight}function w(e){var t=e.getBoundingClientRect();e.width=t.width,e.height=t.height}function T(e){var t=document.createElement(`canvas`);return t.style.position=`fixed`,t.style.top=`0px`,t.style.left=`0px`,t.style.pointerEvents=`none`,t.style.zIndex=e,t}function E(e,t,n,r,i,a,o,s,c){e.save(),e.translate(t,n),e.rotate(a),e.scale(r,i),e.arc(0,0,1,o,s,c),e.restore()}function D(e){var t=e.angle*(Math.PI/180),n=e.spread*(Math.PI/180);return{x:e.x,y:e.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:e.startVelocity*.5+Math.random()*e.startVelocity,angle2D:-t+(.5*n-Math.random()*n),tiltAngle:(Math.random()*.5+.25)*Math.PI,color:e.color,shape:e.shape,tick:0,totalTicks:e.ticks,decay:e.decay,drift:e.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:e.gravity*3,ovalScalar:.6,scalar:e.scalar,flat:e.flat}}function O(e,t){t.x+=Math.cos(t.angle2D)*t.velocity+t.drift,t.y+=Math.sin(t.angle2D)*t.velocity+t.gravity,t.velocity*=t.decay,t.flat?(t.wobble=0,t.wobbleX=t.x+10*t.scalar,t.wobbleY=t.y+10*t.scalar,t.tiltSin=0,t.tiltCos=0,t.random=1):(t.wobble+=t.wobbleSpeed,t.wobbleX=t.x+10*t.scalar*Math.cos(t.wobble),t.wobbleY=t.y+10*t.scalar*Math.sin(t.wobble),t.tiltAngle+=.1,t.tiltSin=Math.sin(t.tiltAngle),t.tiltCos=Math.cos(t.tiltAngle),t.random=Math.random()+2);var n=t.tick++/t.totalTicks,r=t.x+t.random*t.tiltCos,i=t.y+t.random*t.tiltSin,a=t.wobbleX+t.random*t.tiltCos,s=t.wobbleY+t.random*t.tiltSin;if(e.fillStyle=`rgba(`+t.color.r+`, `+t.color.g+`, `+t.color.b+`, `+(1-n)+`)`,e.beginPath(),o&&t.shape.type===`path`&&typeof t.shape.path==`string`&&Array.isArray(t.shape.matrix))e.fill(N(t.shape.path,t.shape.matrix,t.x,t.y,Math.abs(a-r)*.1,Math.abs(s-i)*.1,Math.PI/10*t.wobble));else if(t.shape.type===`bitmap`){var c=Math.PI/10*t.wobble,l=Math.abs(a-r)*.1,d=Math.abs(s-i)*.1,f=t.shape.bitmap.width*t.scalar,p=t.shape.bitmap.height*t.scalar,m=new DOMMatrix([Math.cos(c)*l,Math.sin(c)*l,-Math.sin(c)*d,Math.cos(c)*d,t.x,t.y]);m.multiplySelf(new DOMMatrix(t.shape.matrix));var h=e.createPattern(u.transform(t.shape.bitmap),`no-repeat`);h.setTransform(m),e.globalAlpha=1-n,e.fillStyle=h,e.fillRect(t.x-f/2,t.y-p/2,f,p),e.globalAlpha=1}else if(t.shape===`circle`)e.ellipse?e.ellipse(t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI):E(e,t.x,t.y,Math.abs(a-r)*t.ovalScalar,Math.abs(s-i)*t.ovalScalar,Math.PI/10*t.wobble,0,2*Math.PI);else if(t.shape===`star`)for(var g=Math.PI/2*3,_=4*t.scalar,v=8*t.scalar,y=t.x,b=t.y,x=5,S=Math.PI/x;x--;)y=t.x+Math.cos(g)*v,b=t.y+Math.sin(g)*v,e.lineTo(y,b),g+=S,y=t.x+Math.cos(g)*_,b=t.y+Math.sin(g)*_,e.lineTo(y,b),g+=S;else e.moveTo(Math.floor(t.x),Math.floor(t.y)),e.lineTo(Math.floor(t.wobbleX),Math.floor(i)),e.lineTo(Math.floor(a),Math.floor(s)),e.lineTo(Math.floor(r),Math.floor(t.wobbleY));return e.closePath(),e.fill(),t.tick<t.totalTicks}function k(e,t,n,a,o){var s=t.slice(),c=e.getContext(`2d`),f,p,m=l(function(t){function l(){f=p=null,c.clearRect(0,0,a.width,a.height),u.clear(),o(),t()}function m(){r&&!(a.width===i.width&&a.height===i.height)&&(a.width=e.width=i.width,a.height=e.height=i.height),!a.width&&!a.height&&(n(e),a.width=e.width,a.height=e.height),c.clearRect(0,0,a.width,a.height),s=s.filter(function(e){return O(c,e)}),s.length?f=d.frame(m):l()}f=d.frame(m),p=l});return{addFettis:function(e){return s=s.concat(e),m},canvas:e,promise:m,reset:function(){f&&d.cancel(f),p&&p()}}}function A(e,n){var r=!e,i=!!g(n||{},`resize`),o=!1,s=g(n,`disableForReducedMotion`,Boolean),c=a&&g(n||{},`useWorker`)?f():null,u=r?C:w,d=e&&c?!!e.__confetti_initialized:!1,p=typeof matchMedia==`function`&&matchMedia(`(prefers-reduced-motion)`).matches,m;function h(t,n,r){for(var i=g(t,`particleCount`,_),a=g(t,`angle`,Number),o=g(t,`spread`,Number),s=g(t,`startVelocity`,Number),c=g(t,`decay`,Number),l=g(t,`gravity`,Number),d=g(t,`drift`,Number),f=g(t,`colors`,b),p=g(t,`ticks`,Number),h=g(t,`shapes`),y=g(t,`scalar`),x=!!g(t,`flat`),C=S(t),w=i,T=[],E=e.width*C.x,O=e.height*C.y;w--;)T.push(D({x:E,y:O,angle:a,spread:o,startVelocity:s,color:f[w%f.length],shape:h[v(0,h.length)],ticks:p,decay:c,gravity:l,drift:d,scalar:y,flat:x}));return m?m.addFettis(T):(m=k(e,T,u,n,r),m.promise)}function y(n){var a=s||g(n,`disableForReducedMotion`,Boolean),f=g(n,`zIndex`,Number);if(a&&p)return l(function(e){e()});r&&m?e=m.canvas:r&&!e&&(e=T(f),document.body.appendChild(e)),i&&!d&&u(e);var _={width:e.width,height:e.height};c&&!d&&c.init(e),d=!0,c&&(e.__confetti_initialized=!0);function v(){if(c){var t={getBoundingClientRect:function(){if(!r)return e.getBoundingClientRect()}};u(t),c.postMessage({resize:{width:t.width,height:t.height}});return}_.width=_.height=null}function y(){m=null,i&&(o=!1,t.removeEventListener(`resize`,v)),r&&e&&(document.body.contains(e)&&document.body.removeChild(e),e=null,d=!1)}return i&&!o&&(o=!0,t.addEventListener(`resize`,v,!1)),c?c.fire(n,_,y):h(n,_,y)}return y.reset=function(){c&&c.reset(),m&&m.reset()},y}var j;function M(){return j||=A(null,{useWorker:!0,resize:!0}),j}function N(e,t,n,r,i,a,o){var s=new Path2D(e),c=new Path2D;c.addPath(s,new DOMMatrix(t));var l=new Path2D;return l.addPath(c,new DOMMatrix([Math.cos(o)*i,Math.sin(o)*i,-Math.sin(o)*a,Math.cos(o)*a,n,r])),l}function P(e){if(!o)throw Error(`path confetti are not supported in this browser`);var t,n;typeof e==`string`?t=e:(t=e.path,n=e.matrix);var r=new Path2D(t),i=document.createElement(`canvas`).getContext(`2d`);if(!n){for(var a=1e3,s=a,c=a,l=0,u=0,d,f,p=0;p<a;p+=2)for(var m=0;m<a;m+=2)i.isPointInPath(r,p,m,`nonzero`)&&(s=Math.min(s,p),c=Math.min(c,m),l=Math.max(l,p),u=Math.max(u,m));d=l-s,f=u-c;var h=10,g=Math.min(h/d,h/f);n=[g,0,0,g,-Math.round(d/2+s)*g,-Math.round(f/2+c)*g]}return{type:`path`,path:t,matrix:n}}function F(e){var t,n=1,r=`#000000`,i=`"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif`;typeof e==`string`?t=e:(t=e.text,n=`scalar`in e?e.scalar:n,i=`fontFamily`in e?e.fontFamily:i,r=`color`in e?e.color:r);var a=10*n,o=``+a+`px `+i,s=new OffscreenCanvas(a,a),c=s.getContext(`2d`);c.font=o;var l=c.measureText(t),u=Math.ceil(l.actualBoundingBoxRight+l.actualBoundingBoxLeft),d=Math.ceil(l.actualBoundingBoxAscent+l.actualBoundingBoxDescent),f=2,p=l.actualBoundingBoxLeft+f,m=l.actualBoundingBoxAscent+f;u+=f+f,d+=f+f,s=new OffscreenCanvas(u,d),c=s.getContext(`2d`),c.font=o,c.fillStyle=r,c.fillText(t,p,m);var h=1/n;return{type:`bitmap`,bitmap:s.transferToImageBitmap(),matrix:[h,0,0,h,-u*h/2,-d*h/2]}}n.exports=function(){return M().apply(this,arguments)},n.exports.reset=function(){M().reset()},n.exports.create=A,n.exports.shapeFromPath=P,n.exports.shapeFromText=F})((function(){return typeof window<`u`?window:typeof self<`u`?self:this||{}})(),v,!1),y=v.exports,v.exports.create})),x,S,C,w=e((()=>{x=t(n()),a(),h(),b(),S=r(),C=({goalName:e=`Viaje a Japón`,targetAmount:t=5e4,currentAmount:n=23500,icon:r=(0,S.jsx)(s,{size:24}),color:a=`blue`})=>{let[c,l]=(0,x.useState)(n),u=Math.min(100,Math.max(0,c/t*100)),d=()=>{let e=Math.min(c+1500,t);l(e),e>=t&&c<t&&y({particleCount:150,spread:70,origin:{y:.6},colors:[`#3b82f6`,`#10b981`,`#f59e0b`]})},f=(()=>{let e={blue:{bg:`bg-blue-50 dark:bg-blue-900`,text:`text-blue-600 dark:text-blue-50`,progress:`bg-blue-500`},emerald:{bg:`bg-emerald-50 dark:bg-emerald-900`,text:`text-emerald-600 dark:text-emerald-50`,progress:`bg-emerald-500`},violet:{bg:`bg-violet-50 dark:bg-violet-900`,text:`text-violet-600 dark:text-violet-50`,progress:`bg-violet-500`}};return e[a]||e.blue})();return(0,S.jsxs)(`div`,{className:`bg-surface-primary rounded-3xl border border-border-primary p-6 overflow-hidden relative shadow-sm hover:shadow-md transition-shadow`,children:[(0,S.jsx)(`div`,{className:`absolute -right-8 -top-8 w-32 h-32 rounded-full blur-3xl opacity-20 ${f.progress}`}),(0,S.jsxs)(`div`,{className:`flex justify-between items-start mb-6 align-top`,children:[(0,S.jsxs)(`div`,{className:`flex gap-4 items-center`,children:[(0,S.jsx)(`div`,{className:`w-14 h-14 rounded-2xl flex items-center justify-center ${f.bg} ${f.text} shrink-0`,children:r}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`h3`,{className:`font-bold text-lg text-text-primary leading-tight`,children:e}),(0,S.jsx)(`p`,{className:`text-sm font-medium text-text-tertiary mt-0.5 flex gap-2`,children:(0,S.jsxs)(`span`,{children:[Math.floor(u),`% completado`]})})]})]}),(0,S.jsx)(`button`,{className:`text-text-tertiary hover:text-text-secondary transition-colors p-2 -mr-2 -mt-2`,children:(0,S.jsx)(o,{size:20})})]}),(0,S.jsxs)(`div`,{className:`mb-6 relative pt-4`,children:[(0,S.jsx)(i.div,{initial:!1,animate:{x:`${u}%`,opacity:+(c>0)},transition:{type:`spring`,stiffness:100,damping:20},className:`absolute -top-3 -translate-x-1/2 flex flex-col items-center`,style:{width:`max-content`},children:(0,S.jsxs)(`div`,{className:`px-2 py-1 rounded bg-gray-900 dark:bg-surface-primary text-white dark:text-gray-900 text-[10px] font-bold tracking-wider relative`,children:[`$`,c.toLocaleString(`es-MX`),(0,S.jsx)(`div`,{className:`absolute -bottom-1 left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900 dark:border-t-white w-0 h-0`})]})}),(0,S.jsx)(`div`,{className:`h-4 w-full bg-background-secondary rounded-full overflow-hidden shadow-inner`,children:(0,S.jsx)(i.div,{initial:{width:0},animate:{width:`${u}%`},transition:{type:`spring`,stiffness:60,damping:15},className:`h-full rounded-full ${f.progress} relative`,children:(0,S.jsx)(`div`,{className:`absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite] -skew-x-12 translate-x-full`,style:{backgroundImage:`linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)`}})})}),(0,S.jsxs)(`div`,{className:`flex justify-between mt-2 text-xs font-semibold text-text-tertiary`,children:[(0,S.jsx)(`span`,{children:`$0`}),(0,S.jsxs)(`span`,{children:[`Meta: $`,t.toLocaleString(`es-MX`)]})]})]}),(0,S.jsxs)(`div`,{className:`grid grid-cols-2 gap-3 mt-4`,children:[(0,S.jsxs)(`button`,{onClick:d,disabled:c>=t,className:`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold transition-all ${c>=t?`bg-background-secondary text-text-tertiary cursor-not-allowed`:`bg-gray-900 text-white hover:bg-gray-700 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 hover:-translate-y-0.5 shadow-md active:scale-95`}`,children:[(0,S.jsx)(g,{size:18}),`Abonar`]}),(0,S.jsxs)(`button`,{className:`flex items-center justify-center gap-2 py-3 px-4 bg-background-secondary text-text-primary rounded-xl font-semibold hover:bg-border-primary/30 transition relative`,children:[(0,S.jsx)(_,{size:18,className:f.text}),`Auto-ahorro`,(0,S.jsx)(`span`,{className:`absolute -top-2 -right-2 bg-green-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-md uppercase tracking-wide`,children:`Activo`})]})]})]})},C.__docgenInfo={description:``,methods:[],displayName:`FinancialGoalTracker`,props:{goalName:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Viaje a Japón"`,computed:!1}},targetAmount:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`50000`,computed:!1}},currentAmount:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`23500`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``,defaultValue:{value:`<Plane size={24} />`,computed:!1}},color:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"blue"`,computed:!1}}}}})),T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V;e((()=>{w(),n(),h(),T=r(),E={title:`Fintech/Goals/FinancialGoalTracker`,component:C,parameters:{layout:`centered`},tags:[`autodocs`]},D={args:{goalName:`Viaje a Japón`,targetAmount:5e4,currentAmount:23500,color:`blue`},render:e=>(0,T.jsx)(`div`,{className:`w-full max-w-md`,children:(0,T.jsx)(C,{...e})})},O={args:{goalName:`Enganche Auto`,targetAmount:12e4,currentAmount:9e4,color:`emerald`,icon:(0,T.jsx)(f,{size:24})},render:e=>(0,T.jsx)(`div`,{className:`w-full max-w-md`,children:(0,T.jsx)(C,{...e})})},k={args:{goalName:`Casa Propia`,targetAmount:5e5,currentAmount:75e3,color:`purple`,icon:(0,T.jsx)(p,{size:24})},render:e=>(0,T.jsx)(`div`,{className:`w-full max-w-md`,children:(0,T.jsx)(C,{...e})})},A={args:{goalName:`Fondo de Emergencia`,targetAmount:3e4,currentAmount:1500,color:`yellow`,icon:(0,T.jsx)(s,{size:24})},render:e=>(0,T.jsx)(`div`,{className:`w-full max-w-md`,children:(0,T.jsx)(C,{...e})})},j={args:{goalName:`Curso Profesional`,targetAmount:15e3,currentAmount:14250,color:`blue`,icon:(0,T.jsx)(d,{size:24})},render:e=>(0,T.jsx)(`div`,{className:`w-full max-w-md`,children:(0,T.jsx)(C,{...e})})},M={args:{goalName:`Vacaciones en Cancún`,targetAmount:25e3,currentAmount:25e3,color:`emerald`,icon:(0,T.jsx)(s,{size:24})},render:e=>(0,T.jsx)(`div`,{className:`w-full max-w-md`,children:(0,T.jsx)(C,{...e})})},N={args:{goalName:`Retiro Adelantado`,targetAmount:5e6,currentAmount:45e4,color:`purple`},render:e=>(0,T.jsx)(`div`,{className:`w-full max-w-md`,children:(0,T.jsx)(C,{...e})})},P={args:{goalName:`Wedding Fund`,targetAmount:35e4,currentAmount:285e3,color:`rose`,icon:(0,T.jsx)(u,{size:24})},render:e=>(0,T.jsx)(`div`,{className:`w-full max-w-md`,children:(0,T.jsx)(C,{...e})})},F={args:{goalName:`Startup Capital`,targetAmount:1e6,currentAmount:35e4,color:`indigo`,icon:(0,T.jsx)(c,{size:24})},render:e=>(0,T.jsx)(`div`,{className:`w-full max-w-md`,children:(0,T.jsx)(C,{...e})})},I={args:{goalName:`MacBook Pro M4`,targetAmount:45e3,currentAmount:32e3,color:`gray`,icon:(0,T.jsx)(m,{size:24})},render:e=>(0,T.jsx)(`div`,{className:`w-full max-w-md`,children:(0,T.jsx)(C,{...e})})},L={render:()=>(0,T.jsxs)(`div`,{className:`w-full max-w-lg space-y-6`,children:[(0,T.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,T.jsx)(`h2`,{className:`text-lg font-bold text-text-primary`,children:`My Savings Goals`}),(0,T.jsx)(`span`,{className:`text-xs text-text-tertiary`,children:`4 goals • $132,500 remaining`})]}),(0,T.jsxs)(`div`,{className:`space-y-4`,children:[(0,T.jsx)(C,{goalName:`Emergency Fund`,targetAmount:5e4,currentAmount:32e3,color:`yellow`,icon:(0,T.jsx)(l,{size:24})}),(0,T.jsx)(C,{goalName:`Home Down Payment`,targetAmount:5e5,currentAmount:31e4,color:`purple`,icon:(0,T.jsx)(p,{size:24})}),(0,T.jsx)(C,{goalName:`New Car`,targetAmount:35e4,currentAmount:28e4,color:`emerald`,icon:(0,T.jsx)(f,{size:24})}),(0,T.jsx)(C,{goalName:`Europe Trip`,targetAmount:8e4,currentAmount:12500,color:`blue`,icon:(0,T.jsx)(s,{size:24})})]})]})},R={args:{goalName:`Debt Payoff`,targetAmount:25e3,currentAmount:18750,color:`red`,icon:(0,T.jsx)(l,{size:24})},render:e=>(0,T.jsx)(`div`,{className:`w-full max-w-md`,children:(0,T.jsx)(C,{...e})})},z={args:{goalName:`Dream Wedding Dress`,targetAmount:6e4,currentAmount:42e3,color:`pink`,icon:(0,T.jsx)(u,{size:24})},render:e=>(0,T.jsx)(`div`,{className:`w-full max-w-md`,children:(0,T.jsx)(C,{...e})})},B={args:{goalName:`Investment Portfolio`,targetAmount:2e5,currentAmount:1e5,color:`blue`},render:e=>(0,T.jsx)(`div`,{className:`w-full max-w-md`,children:(0,T.jsx)(C,{...e})})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    goalName: 'Viaje a Japón',
    targetAmount: 50000,
    currentAmount: 23500,
    color: 'blue'
  },
  render: args => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    goalName: 'Enganche Auto',
    targetAmount: 120000,
    currentAmount: 90000,
    color: 'emerald',
    icon: <Car size={24} />
  },
  render: args => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    goalName: 'Casa Propia',
    targetAmount: 500000,
    currentAmount: 75000,
    color: 'purple',
    icon: <Home size={24} />
  },
  render: args => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    goalName: 'Fondo de Emergencia',
    targetAmount: 30000,
    currentAmount: 1500,
    color: 'yellow',
    icon: <Plane size={24} />
  },
  render: args => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    goalName: 'Curso Profesional',
    targetAmount: 15000,
    currentAmount: 14250,
    color: 'blue',
    icon: <GraduationCap size={24} />
  },
  render: args => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    goalName: 'Vacaciones en Cancún',
    targetAmount: 25000,
    currentAmount: 25000,
    color: 'emerald',
    icon: <Plane size={24} />
  },
  render: args => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    goalName: 'Retiro Adelantado',
    targetAmount: 5000000,
    currentAmount: 450000,
    color: 'purple'
  },
  render: args => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    goalName: 'Wedding Fund',
    targetAmount: 350000,
    currentAmount: 285000,
    color: 'rose',
    icon: <Heart size={24} />
  },
  render: args => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    goalName: 'Startup Capital',
    targetAmount: 1000000,
    currentAmount: 350000,
    color: 'indigo',
    icon: <Building size={24} />
  },
  render: args => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    goalName: 'MacBook Pro M4',
    targetAmount: 45000,
    currentAmount: 32000,
    color: 'gray',
    icon: <Laptop size={24} />
  },
  render: args => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-lg space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-text-primary">My Savings Goals</h2>
        <span className="text-xs text-text-tertiary">4 goals • $132,500 remaining</span>
      </div>
      <div className="space-y-4">
        <FinancialGoalTracker goalName="Emergency Fund" targetAmount={50000} currentAmount={32000} color="yellow" icon={<PiggyBank size={24} />} />
        <FinancialGoalTracker goalName="Home Down Payment" targetAmount={500000} currentAmount={310000} color="purple" icon={<Home size={24} />} />
        <FinancialGoalTracker goalName="New Car" targetAmount={350000} currentAmount={280000} color="emerald" icon={<Car size={24} />} />
        <FinancialGoalTracker goalName="Europe Trip" targetAmount={80000} currentAmount={12500} color="blue" icon={<Plane size={24} />} />
      </div>
    </div>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    goalName: 'Debt Payoff',
    targetAmount: 25000,
    currentAmount: 18750,
    color: 'red',
    icon: <PiggyBank size={24} />
  },
  render: args => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    goalName: 'Dream Wedding Dress',
    targetAmount: 60000,
    currentAmount: 42000,
    color: 'pink',
    icon: <Heart size={24} />
  },
  render: args => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    goalName: 'Investment Portfolio',
    targetAmount: 200000,
    currentAmount: 100000,
    color: 'blue'
  },
  render: args => <div className="w-full max-w-md"><FinancialGoalTracker {...args} /></div>
}`,...B.parameters?.docs?.source}}},V=[`TravelGoal`,`CarGoal`,`HomeDownPayment`,`JustStarted`,`AlmostComplete`,`FullyFunded`,`LongTermGoal`,`WeddingSavings`,`BusinessStartup`,`NewLaptop`,`SavingsDashboard`,`RedColor`,`PinkColor`,`HalfwayPoint`]}))();export{j as AlmostComplete,F as BusinessStartup,O as CarGoal,M as FullyFunded,B as HalfwayPoint,k as HomeDownPayment,A as JustStarted,N as LongTermGoal,I as NewLaptop,z as PinkColor,R as RedColor,L as SavingsDashboard,D as TravelGoal,P as WeddingSavings,V as __namedExportsOrder,E as default};