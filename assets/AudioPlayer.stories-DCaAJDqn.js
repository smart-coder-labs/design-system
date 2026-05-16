import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ns4lj-Vt.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{R as o,c as s,dt as c,l,t as u,yt as d,z as f}from"./lucide-react-DM_OnbjU.js";import{n as p,t as m}from"./Slider-DUdHXSoM.js";import{n as h,t as g}from"./Combobox-CcfhFJQC.js";var _,v,y,b=e((()=>{_=t(n()),u(),p(),r(),v=a(),h(),y=({src:e,title:t,artist:n,coverArt:r,autoPlay:a=!1,className:u})=>{let p=(0,_.useRef)(null),[h,y]=(0,_.useState)(!1),[b,x]=(0,_.useState)(0),[S,C]=(0,_.useState)(0),[w,T]=(0,_.useState)(1),[E,D]=(0,_.useState)(!1),[O,k]=(0,_.useState)(1);(0,_.useEffect)(()=>{let e=p.current;if(!e)return;a&&e.play().catch(()=>y(!1));let t=()=>x(e.currentTime),n=()=>C(e.duration),r=()=>y(!0),i=()=>y(!1),o=()=>y(!1);return e.addEventListener(`timeupdate`,t),e.addEventListener(`durationchange`,n),e.addEventListener(`play`,r),e.addEventListener(`pause`,i),e.addEventListener(`ended`,o),()=>{e.removeEventListener(`timeupdate`,t),e.removeEventListener(`durationchange`,n),e.removeEventListener(`play`,r),e.removeEventListener(`pause`,i),e.removeEventListener(`ended`,o)}},[a]);let A=[{value:`0.5`,label:`Speed: 0.5x`},{value:`1`,label:`Speed: 1.0x`},{value:`1.5`,label:`Speed: 1.5x`},{value:`2`,label:`Speed: 2.0x`},{value:`download`,label:`Download`}],j=()=>{p.current&&(h?p.current.pause():p.current.play())},M=e=>{p.current&&(p.current.currentTime=e,x(e))},N=e=>{let t=e;p.current&&(p.current.volume=t,T(t),D(t===0))},P=()=>{p.current&&(p.current.muted=!E,D(!E),E?(T(1),p.current.volume=1):T(0))},F=e=>{p.current&&(p.current.currentTime+=e)},I=e=>{p.current&&(p.current.playbackRate=e,k(e))},L=e=>isNaN(e)?`0:00`:`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,`0`)}`;return(0,v.jsxs)(`div`,{className:i(`flex flex-col gap-4 p-4 rounded-2xl bg-surface-primary border border-border-primary shadow-sm w-full max-w-md`,u),children:[(0,v.jsx)(`audio`,{ref:p,src:e}),(0,v.jsxs)(`div`,{className:`flex items-center gap-4`,children:[r?(0,v.jsx)(`div`,{className:i(`w-16 h-16 rounded-xl overflow-hidden bg-surface-secondary flex-shrink-0 shadow-inner`,h&&`animate-pulse-slow`),children:(0,v.jsx)(`img`,{src:r,alt:t,className:`w-full h-full object-cover`})}):(0,v.jsx)(`div`,{className:`w-16 h-16 rounded-xl bg-gradient-to-br from-accent-blue to-purple-500 flex-shrink-0 flex items-center justify-center text-black font-bold text-xl shadow-inner`,children:t?t[0]:(0,v.jsx)(l,{className:`text-white`})}),(0,v.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,v.jsx)(`h3`,{className:`font-semibold text-text-primary truncate`,children:t||`Unknown Track`}),(0,v.jsx)(`p`,{className:`text-sm text-text-secondary truncate`,children:n||`Unknown Artist`})]}),(0,v.jsx)(`div`,{className:`w-36`,children:(0,v.jsx)(g,{items:A.map(e=>({...e,label:e.value===`download`?e.label:`${e.label}${O===Number(e.value)?` ✓`:``}`})),value:String(O),onChange:t=>{if(t===`download`){window.open(e,`_blank`);return}I(Number(t))},placeholder:`Options`})})]}),(0,v.jsxs)(`div`,{className:`flex flex-col gap-1`,children:[(0,v.jsx)(m,{value:b,min:0,max:S||100,step:.1,onValueChange:M,className:`py-2`}),(0,v.jsxs)(`div`,{className:`flex justify-between text-xs font-mono text-text-tertiary`,children:[(0,v.jsx)(`span`,{children:L(b)}),(0,v.jsx)(`span`,{children:L(S)})]})]}),(0,v.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,v.jsxs)(`div`,{className:`flex items-center gap-2 group w-24`,children:[(0,v.jsx)(`button`,{onClick:P,className:`text-text-secondary hover:text-text-primary transition-colors`,children:E||w===0?(0,v.jsx)(s,{className:`w-4 h-4`}):(0,v.jsx)(l,{className:`w-4 h-4`})}),(0,v.jsx)(m,{value:E?0:w,min:0,max:1,step:.01,onValueChange:N,className:`w-full`})]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,v.jsx)(`button`,{onClick:()=>F(-10),className:`text-text-secondary hover:text-text-primary transition-colors p-1`,children:(0,v.jsx)(f,{className:`w-5 h-5`})}),(0,v.jsx)(`button`,{onClick:j,className:`w-12 h-12 rounded-full bg-text-primary text-surface-primary flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md`,children:h?(0,v.jsx)(d,{className:`w-5 h-5`}):(0,v.jsx)(c,{className:`w-5 h-5 ml-0.5`})}),(0,v.jsx)(`button`,{onClick:()=>F(10),className:`text-text-secondary hover:text-text-primary transition-colors p-1`,children:(0,v.jsx)(o,{className:`w-5 h-5`})})]}),(0,v.jsx)(`div`,{className:`w-24 flex justify-end`,children:(0,v.jsxs)(`span`,{className:`text-xs font-medium text-accent-blue bg-accent-blue/10 px-2 py-1 rounded-md`,children:[O,`x`]})})]})]})},y.__docgenInfo={description:``,methods:[],displayName:`AudioPlayer`,props:{src:{required:!0,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`string`},description:``},artist:{required:!1,tsType:{name:`string`},description:``},coverArt:{required:!1,tsType:{name:`string`},description:``},autoPlay:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),x,S,C,w,T,E,D,O,k,A,j;e((()=>{b(),x=a(),S={title:`Data Display/AudioPlayer`,component:y,tags:[`autodocs`]},C={args:{src:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`,title:`Ambient Waves`,artist:`SoundHelix`}},w={args:{src:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3`,title:`Summer Vibes`,artist:`Synthwave Band`,coverArt:`https://picsum.photos/seed/audio/200/200`}},T={args:{src:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3`}},E={args:{src:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3`,title:`Auto Play Track`,artist:`Test Artist`,autoPlay:!1}},D={args:{src:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3`,title:`Very Long Song Title That Should Definitely Be Truncated When Displayed In The Audio Player Component`,artist:`Artist with an Extremely Long Name for Testing Purposes and Edge Cases`}},O={args:{src:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3`,title:`Podcast Episode 247`,artist:`Tech Talks Daily`,coverArt:`https://picsum.photos/seed/podcast/400/400`}},k={args:{src:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3`,title:`Dark Mode Vibes`,artist:`Night Owl`},decorators:[e=>(0,x.jsx)(`div`,{className:`dark p-4 bg-gray-900 rounded-lg max-w-md`,children:(0,x.jsx)(e,{})})]},A={args:{src:`https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`,title:`Mobile Track`,artist:`Portable Beats`,coverArt:`https://picsum.photos/seed/mobile/200/200`},decorators:[e=>(0,x.jsx)(`div`,{className:`max-w-sm mx-auto`,children:(0,x.jsx)(e,{})})]},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Ambient Waves',
    artist: 'SoundHelix'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    title: 'Summer Vibes',
    artist: 'Synthwave Band',
    coverArt: 'https://picsum.photos/seed/audio/200/200'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
    title: 'Auto Play Track',
    artist: 'Test Artist',
    autoPlay: false // keeps it from actually auto-playing in storybook
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
    title: 'Very Long Song Title That Should Definitely Be Truncated When Displayed In The Audio Player Component',
    artist: 'Artist with an Extremely Long Name for Testing Purposes and Edge Cases'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
    title: 'Podcast Episode 247',
    artist: 'Tech Talks Daily',
    coverArt: 'https://picsum.photos/seed/podcast/400/400'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    title: 'Dark Mode Vibes',
    artist: 'Night Owl'
  },
  decorators: [Story => <div className="dark p-4 bg-gray-900 rounded-lg max-w-md">
                <Story />
            </div>]
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    title: 'Mobile Track',
    artist: 'Portable Beats',
    coverArt: 'https://picsum.photos/seed/mobile/200/200'
  },
  decorators: [Story => <div className="max-w-sm mx-auto">
                <Story />
            </div>]
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithCoverArt`,`NoMetadata`,`AutoPlay`,`LongTitle`,`LongCoverArt`,`DarkMode`,`MobilePlayer`]}))();export{E as AutoPlay,k as DarkMode,C as Default,O as LongCoverArt,D as LongTitle,A as MobilePlayer,T as NoMetadata,w as WithCoverArt,j as __namedExportsOrder,S as default};