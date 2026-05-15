import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DL3IwwZJ.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{s as o,t as s}from"./es-CnNtA5mJ.js";import{Ft as c,Z as l,dr as u,p as d,q as f,t as p}from"./lucide-react-C3ayLXpj.js";var m,h,g,_,v=e((()=>{m=t(n()),s(),r(),h=a(),g=m.forwardRef(({items:e,position:t=`bottom`,size:n=`md`,magnification:r=!0,className:a=``},s)=>{let[c,l]=m.useState(null),u={sm:{icon:`w-10 h-10`,gap:`gap-2`,padding:`p-2`,magnifiedSize:56,normalSize:40},md:{icon:`w-14 h-14`,gap:`gap-3`,padding:`p-3`,magnifiedSize:72,normalSize:56},lg:{icon:`w-16 h-16`,gap:`gap-4`,padding:`p-4`,magnifiedSize:88,normalSize:64}},d={bottom:`bottom-4 left-1/2 -translate-x-1/2 flex-row`,left:`left-4 top-1/2 -translate-y-1/2 flex-col`,right:`right-4 top-1/2 -translate-y-1/2 flex-col`},{icon:f,gap:p,padding:g,magnifiedSize:v,normalSize:y}=u[n],b=e=>{if(!r||c===null)return y;let t=Math.abs(e-c);return t===0?v:t===1?Math.round(y*1.2):t===2?Math.round(y*1.1):y};return(0,h.jsx)(`div`,{ref:s,className:i(`fixed z-30`,d[t],a),children:(0,h.jsx)(o.div,{className:i(`flex items-end glass rounded-2xl border border-border-secondary shadow-2xl backdrop-blur-xl`,t===`bottom`?`flex-row`:`flex-col`,p,g),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{type:`spring`,stiffness:300,damping:30},children:e.map((e,t)=>(0,h.jsx)(_,{item:e,actualSize:b(t),onHoverStart:()=>l(t),onHoverEnd:()=>l(null)},e.id))})})}),g.displayName=`DockBar`,_=({item:e,actualSize:t,onHoverStart:n,onHoverEnd:r})=>{let[a,s]=m.useState(!1);return(0,h.jsxs)(`div`,{className:`relative flex flex-col items-center`,children:[a&&(0,h.jsxs)(o.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},className:`absolute -top-12 px-3 py-1.5 bg-gray-900/90 text-white text-xs font-medium rounded-lg backdrop-blur-sm whitespace-nowrap`,children:[e.label,(0,h.jsx)(`div`,{className:`absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45`})]}),(0,h.jsxs)(o.button,{onClick:e.onClick,onHoverStart:()=>{n(),s(!0)},onHoverEnd:()=>{r(),s(!1)},className:i(`relative flex items-center justify-center rounded-xl`,`bg-surface-primary/50 backdrop-blur-sm`,`hover:bg-surface-primary/80`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue`,e.active&&`ring-2 ring-accent-blue`),animate:{width:t,height:t},transition:{type:`spring`,stiffness:400,damping:25},children:[(0,h.jsx)(`div`,{className:`text-2xl`,children:e.icon}),e.badge&&(0,h.jsx)(o.div,{initial:{scale:0},animate:{scale:1},className:`absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full`,children:e.badge}),e.active&&(0,h.jsx)(o.div,{layoutId:`dock-active-indicator`,className:`absolute -bottom-1 w-1 h-1 bg-accent-blue rounded-full`,transition:{type:`spring`,stiffness:400,damping:30}})]})]})},g.__docgenInfo={description:``,methods:[],displayName:`DockBar`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`DockBarItem`}],raw:`DockBarItem[]`},description:`Dock items`},position:{required:!1,tsType:{name:`union`,raw:`'bottom' | 'left' | 'right'`,elements:[{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Position of the dock`,defaultValue:{value:`'bottom'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size of icons`,defaultValue:{value:`'md'`,computed:!1}},magnification:{required:!1,tsType:{name:`boolean`},description:`Enable magnification effect`,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Optional className for custom styling`,defaultValue:{value:`''`,computed:!1}}}}})),y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{n(),v(),p(),y=a(),b=[{id:`finder`,label:`Finder`,icon:(0,y.jsx)(`span`,{className:`text-xl`,children:`😊`}),active:!0},{id:`mail`,label:`Mail`,icon:(0,y.jsx)(c,{className:`w-5 h-5`}),badge:3},{id:`calendar`,label:`Calendar`,icon:(0,y.jsx)(u,{className:`w-5 h-5`}),badge:`12`},{id:`search`,label:`Spotlight`,icon:(0,y.jsx)(l,{className:`w-5 h-5`})},{id:`settings`,label:`Settings`,icon:(0,y.jsx)(f,{className:`w-5 h-5`})},{id:`user`,label:`Profile`,icon:(0,y.jsx)(d,{className:`w-5 h-5`})}],x={title:`Navigation/DockBar`,component:g,tags:[`autodocs`]},S={args:{items:b}},C={args:{items:b,magnification:!1}},w={args:{items:b,position:`left`}},T={args:{items:b,size:`sm`}},E={args:{items:b,size:`lg`}},D={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,y.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,y.jsx)(e,{})})]},O={parameters:{viewport:{defaultViewport:`mobile1`}}},k={parameters:{docs:{description:{story:`DockBar used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    magnification: false
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    position: 'left'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    size: 'sm'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    size: 'lg'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    themes: {
      themeOverride: 'dark'
    }
  },
  decorators: [Story => <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>]
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'DockBar used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`NoMagnification`,`LeftPosition`,`SmallSize`,`LargeSize`,`DarkMode`,`MobileView`,`FintechUseCase`]}))();export{D as DarkMode,S as Default,k as FintechUseCase,E as LargeSize,w as LeftPosition,O as MobileView,C as NoMagnification,T as SmallSize,A as __namedExportsOrder,x as default};