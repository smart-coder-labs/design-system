import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BGx_IYCs.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{l as i,s as a,t as o}from"./es-Ch39IMKG.js";import{n as s,t as c}from"./utils-COD7dmCP.js";import{mt as l,st as u,t as d,tr as f}from"./lucide-react-B3O-UhxF.js";import{t as p}from"./react-dom-_v6GvRSd.js";var m,h,g,_,v=e((()=>{m=t(n()),h=t(p()),s(),o(),d(),g=r(),_=(0,m.forwardRef)(({icon:e=u,label:t,variant:n=`primary`,size:r=`md`,position:o=`bottom-right`,show:s=!0,className:l,disabled:d,...f},p)=>{let[_,v]=(0,m.useState)(!1);(0,m.useEffect)(()=>{v(!0)},[]);let y={primary:`bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive shadow-lg hover:shadow-xl`,secondary:`bg-surface-elevated text-text-primary hover:bg-surface-secondary active:bg-surface-tertiary border border-border-primary shadow-lg hover:shadow-xl`,tertiary:`bg-surface-tertiary text-text-primary hover:bg-surface-secondary shadow-md hover:shadow-lg`},b={sm:`h-10 min-w-[2.5rem] px-0`,md:`h-12 min-w-[3rem] px-0`,lg:`h-14 min-w-[3.5rem] px-0`},x={sm:`w-5 h-5`,md:`w-6 h-6`,lg:`w-7 h-7`},S={none:``,"bottom-right":`fixed bottom-6 right-6 z-30`,"bottom-left":`fixed bottom-6 left-6 z-30`,"top-right":`fixed top-6 right-6 z-30`,"top-left":`fixed top-6 left-6 z-30`},C=!!t,w=o!==`none`,T=(0,g.jsx)(i,{children:s&&(0,g.jsxs)(a.button,{ref:p,initial:{scale:0,opacity:0,rotate:-45},animate:{scale:1,opacity:1,rotate:0},exit:{scale:0,opacity:0,rotate:45},whileHover:{scale:1.05},whileTap:{scale:.95},transition:{type:`spring`,stiffness:400,damping:25},disabled:d,className:c(`flex items-center justify-center rounded-full transition-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue/20 cursor-pointer`,y[n],b[r],S[o],C?`px-5 rounded-full aspect-auto`:`aspect-square`,d&&`opacity-50 cursor-not-allowed shadow-none`,l),...f,children:[(0,g.jsx)(e,{className:c(x[r],C&&`mr-2`)}),C&&(0,g.jsx)(`span`,{className:`font-medium whitespace-nowrap`,children:t})]})});return w&&_?(0,h.createPortal)(T,document.body):T}),_.displayName=`FAB`,_.__docgenInfo={description:``,methods:[],displayName:`FAB`,props:{icon:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:``,defaultValue:{value:`Plus`,computed:!0}},label:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'tertiary'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'tertiary'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},position:{required:!1,tsType:{name:`union`,raw:`'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'none'`,elements:[{name:`literal`,value:`'bottom-right'`},{name:`literal`,value:`'bottom-left'`},{name:`literal`,value:`'top-right'`},{name:`literal`,value:`'top-left'`},{name:`literal`,value:`'none'`}]},description:``,defaultValue:{value:`'bottom-right'`,computed:!1}},show:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}},composes:[`Omit`]}})),y,b,x,S,C,w,T,E,D,O,k;e((()=>{v(),d(),y={title:`Buttons/FAB`,component:_,tags:[`autodocs`]},b={args:{}},x={args:{variant:`secondary`,icon:l}},S={args:{variant:`tertiary`,icon:f}},C={args:{size:`sm`}},w={args:{size:`lg`}},T={args:{label:`New Transaction`}},E={args:{show:!1}},D={args:{disabled:!0}},O={args:{position:`none`}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    icon: Pen
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary',
    icon: Camera
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'New Transaction'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    show: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'none'
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Secondary`,`Tertiary`,`Small`,`Large`,`Extended`,`Hidden`,`Disabled`,`PositionNone`]}))();export{b as Default,D as Disabled,T as Extended,E as Hidden,w as Large,O as PositionNone,x as Secondary,C as Small,S as Tertiary,k as __namedExportsOrder,y as default};