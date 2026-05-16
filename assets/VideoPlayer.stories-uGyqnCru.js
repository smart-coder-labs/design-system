import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BGx_IYCs.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{l as i,s as a,t as o}from"./es-Ch39IMKG.js";import{n as s,t as c}from"./utils-COD7dmCP.js";import{Ct as l,Ft as u,Ot as d,c as f,ct as p,gt as m,l as h,t as g}from"./lucide-react-B3O-UhxF.js";import{n as _,t as v}from"./Slider-P8o9guSF.js";var y,b,x,S=e((()=>{y=t(n()),o(),g(),v(),s(),b=r(),x=({src:e,poster:t,autoPlay:n=!1,loop:r=!1,muted:o=!1,className:s})=>{let g=(0,y.useRef)(null),v=(0,y.useRef)(null),x=(0,y.useRef)(null),[S,C]=(0,y.useState)(!1),[w,T]=(0,y.useState)(0),[E,D]=(0,y.useState)(0),[O,k]=(0,y.useState)(1),[A,j]=(0,y.useState)(o),[M,N]=(0,y.useState)(!1),[P,F]=(0,y.useState)(!0),[I,L]=(0,y.useState)(!0),[R,z]=(0,y.useState)(!1);(0,y.useEffect)(()=>{let e=g.current;if(!e)return;n&&e.play().catch(()=>{C(!1)}),k(e.volume),j(e.muted);let t=()=>T(e.currentTime),r=()=>D(e.duration),i=()=>C(!0),a=()=>C(!1),o=()=>z(!0),s=()=>{z(!1),L(!1)},c=()=>L(!1);return e.addEventListener(`timeupdate`,t),e.addEventListener(`durationchange`,r),e.addEventListener(`play`,i),e.addEventListener(`pause`,a),e.addEventListener(`waiting`,o),e.addEventListener(`playing`,s),e.addEventListener(`loadeddata`,c),()=>{e.removeEventListener(`timeupdate`,t),e.removeEventListener(`durationchange`,r),e.removeEventListener(`play`,i),e.removeEventListener(`pause`,a),e.removeEventListener(`waiting`,o),e.removeEventListener(`playing`,s),e.removeEventListener(`loadeddata`,c)}},[n]);let B=()=>{F(!0),x.current&&clearTimeout(x.current),S&&(x.current=setTimeout(()=>{F(!1)},2e3))},V=()=>{S&&F(!1)},H=(0,y.useCallback)(()=>{g.current&&(S?g.current.pause():g.current.play())},[S]),U=(0,y.useCallback)(()=>{g.current&&(g.current.muted=!A,j(!A),A?(k(1),g.current.volume=1):k(0))},[A]),W=e=>{let t=e;g.current&&(g.current.volume=t,k(t),j(t===0))},G=e=>{let t=e;g.current&&(g.current.currentTime=t,T(t))},K=(0,y.useCallback)(()=>{document.fullscreenElement?(document.exitFullscreen(),N(!1)):(v.current?.requestFullscreen(),N(!0))},[]),q=e=>`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,`0`)}`;return(0,b.jsxs)(`div`,{ref:v,className:c(`relative group overflow-hidden bg-black rounded-xl shadow-lg`,M?`w-full h-full rounded-none`:`w-full aspect-video`,s),onMouseMove:B,onMouseLeave:V,children:[(0,b.jsx)(`video`,{ref:g,src:e,poster:t,loop:r,muted:o,className:`w-full h-full object-contain`,onClick:H}),(I||R)&&(0,b.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center pointer-events-none`,children:(0,b.jsx)(u,{className:`w-12 h-12 text-white animate-spin opacity-80`})}),!S&&!I&&!R&&(0,b.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] transition-opacity`,children:(0,b.jsx)(`button`,{onClick:H,className:`w-16 h-16 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/30 hover:scale-110 transition-all duration-200 group/play`,children:(0,b.jsx)(p,{className:`w-8 h-8 text-white fill-white ml-1`})})}),(0,b.jsx)(i,{children:P&&(0,b.jsxs)(a.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:20},transition:{duration:.2},className:`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent`,children:[(0,b.jsx)(`div`,{className:`mb-4 group/slider`,children:(0,b.jsx)(_,{value:w,min:0,max:E||100,step:.1,onValueChange:G,className:`cursor-pointer`})}),(0,b.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,b.jsx)(`button`,{onClick:H,className:`text-white hover:text-accent-blue transition-colors`,children:S?(0,b.jsx)(m,{className:`w-6 h-6 fill-current`}):(0,b.jsx)(p,{className:`w-6 h-6 fill-current`})}),(0,b.jsxs)(`div`,{className:`flex items-center gap-2 group/volume`,children:[(0,b.jsx)(`button`,{onClick:U,className:`text-white hover:text-accent-blue transition-colors`,children:A||O===0?(0,b.jsx)(f,{className:`w-5 h-5`}):(0,b.jsx)(h,{className:`w-5 h-5`})}),(0,b.jsx)(`div`,{className:`w-0 overflow-hidden group-hover/volume:w-24 transition-all duration-300`,children:(0,b.jsx)(_,{value:A?0:O,min:0,max:1,step:.01,onValueChange:W,className:`w-20 ml-2`})})]}),(0,b.jsxs)(`div`,{className:`text-xs font-medium text-white/90 font-mono`,children:[q(w),` / `,q(E)]})]}),(0,b.jsx)(`div`,{className:`flex items-center gap-4`,children:(0,b.jsx)(`button`,{onClick:K,className:`text-white hover:text-accent-blue transition-colors`,children:M?(0,b.jsx)(l,{className:`w-5 h-5`}):(0,b.jsx)(d,{className:`w-5 h-5`})})})]})]})})]})},x.__docgenInfo={description:``,methods:[],displayName:`VideoPlayer`,props:{src:{required:!0,tsType:{name:`string`},description:``},poster:{required:!1,tsType:{name:`string`},description:``},autoPlay:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},loop:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},muted:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),C,w,T,E,D,O,k,A,j,M,N;e((()=>{S(),C={title:`Data Display/VideoPlayer`,component:x,tags:[`autodocs`]},w={args:{src:`https://www.w3schools.com/html/mov_bbb.mp4`,poster:`https://picsum.photos/seed/fintech/800/450`,title:`Investment Basics Guide`}},T={args:{src:`https://www.w3schools.com/html/mov_bbb.mp4`,poster:`https://picsum.photos/seed/learn/800/450`,title:`Portfolio Diversification`,description:`Learn how to build a diversified investment portfolio that balances risk and reward.`}},E={args:{src:`https://www.w3schools.com/html/mov_bbb.mp4`,title:`Weekly Market Review`}},D={args:{src:`https://www.w3schools.com/html/mov_bbb.mp4`,poster:`https://picsum.photos/seed/market/800/450`,autoPlay:!1,title:`Market Update`}},O={args:{src:`https://www.w3schools.com/html/mov_bbb.mp4`,poster:`https://picsum.photos/seed/nocontrols/800/450`,controls:!1,title:`Background Video`}},k={args:{src:`https://example.com/slow-video.mp4`,poster:void 0,title:`Loading Example`}},A={parameters:{themes:{themeOverride:`dark`}},args:{src:`https://www.w3schools.com/html/mov_bbb.mp4`,poster:`https://picsum.photos/seed/darkvideo/800/450`,title:`Financial Education Series`}},j={parameters:{viewport:{defaultViewport:`mobile1`}}},M={parameters:{docs:{description:{story:`VideoPlayer in a loading state, showing skeleton or placeholder UI while data is being fetched.`}}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://picsum.photos/seed/fintech/800/450',
    title: 'Investment Basics Guide'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://picsum.photos/seed/learn/800/450',
    title: 'Portfolio Diversification',
    description: 'Learn how to build a diversified investment portfolio that balances risk and reward.'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Weekly Market Review'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://picsum.photos/seed/market/800/450',
    autoPlay: false,
    title: 'Market Update'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://picsum.photos/seed/nocontrols/800/450',
    controls: false,
    title: 'Background Video'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://example.com/slow-video.mp4',
    poster: undefined,
    title: 'Loading Example'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    poster: 'https://picsum.photos/seed/darkvideo/800/450',
    title: 'Financial Education Series'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'VideoPlayer in a loading state, showing skeleton or placeholder UI while data is being fetched.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`WithDescription`,`NoPoster`,`AutoPlay`,`ControlsHidden`,`LoadingFallback`,`DarkMode`,`MobileView`,`LoadingState`]}))();export{D as AutoPlay,O as ControlsHidden,A as DarkMode,w as Default,k as LoadingFallback,M as LoadingState,j as MobileView,E as NoPoster,T as WithDescription,N as __namedExportsOrder,C as default};