import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-BUF2whoS.js";import{n,t as r}from"./utils-4pdYZGDS.js";import{t as i}from"./jsx-runtime-BK76Wfr-.js";import{l as a,s as o,t as s}from"./es-8Z2IY91W.js";import{$ as c,U as l,i as u,t as d,vn as f,zt as p}from"./lucide-react-D5svGO2N.js";var m,h,g=e((()=>{t(),s(),n(),d(),m=i(),h=({type:e=`faceId`,status:t=`idle`,onAuthenticate:n,onCancel:i,title:s,subtitle:d,open:h=!0,className:g=``})=>{let _=e===`faceId`,v=_?c:f,y=_?`Face ID`:`Touch ID`,b=_?`Look at your device to authenticate`:`Place your finger on the sensor`,x=s||y,S=d||b;return(0,m.jsx)(a,{children:h&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.div,{className:`fixed inset-0 bg-black/40 backdrop-blur-md z-50`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:i}),(0,m.jsxs)(o.div,{className:r(`fixed top-1/2 left-1/2 z-50 w-[300px]`,`bg-surface-primary border border-border-primary rounded-3xl shadow-xl p-8`,`flex flex-col items-center text-center`,g),initial:{opacity:0,scale:.92,x:`-50%`,y:`-50%`},animate:{opacity:1,scale:1,x:`-50%`,y:`-50%`},exit:{opacity:0,scale:.92,x:`-50%`,y:`-50%`},transition:{type:`spring`,stiffness:400,damping:30},role:`dialog`,"aria-label":x,children:[(0,m.jsx)(`button`,{onClick:i,className:`absolute top-3 right-3 w-7 h-7 rounded-full bg-surface-secondary flex items-center justify-center text-text-tertiary hover:text-text-primary transition-apple`,"aria-label":`Close`,children:(0,m.jsx)(u,{className:`w-3.5 h-3.5`})}),(0,m.jsxs)(`div`,{className:`relative mb-6`,children:[(0,m.jsx)(o.div,{className:r(`absolute inset-0 rounded-full`,t===`success`?`bg-status-success`:t===`failed`?`bg-status-error`:`bg-accent-blue`),style:{margin:`-12px`},variants:{idle:{scale:1,opacity:.3},scanning:{scale:[1,1.3,1],opacity:[.3,.6,.3],transition:{duration:1.5,repeat:1/0,ease:`easeInOut`}},success:{scale:1.1,opacity:0},failed:{scale:.95,opacity:0}},animate:t}),(0,m.jsx)(`div`,{className:r(`relative w-20 h-20 rounded-full flex items-center justify-center transition-apple duration-300`,t===`success`?`bg-status-success/10 text-status-success`:t===`failed`?`bg-status-error/10 text-status-error`:`bg-accent-blue/10 text-accent-blue`),children:(0,m.jsxs)(a,{mode:`wait`,children:[t===`scanning`&&(0,m.jsx)(o.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,m.jsx)(p,{className:`w-10 h-10 animate-spin`})},`scan`),t===`success`&&(0,m.jsx)(o.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:`spring`,stiffness:400,damping:20},children:(0,m.jsx)(l,{className:`w-10 h-10`})},`success`),(t===`idle`||t===`failed`)&&(0,m.jsx)(o.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:(0,m.jsx)(v,{className:`w-10 h-10`})},`icon`)]})})]}),(0,m.jsx)(`h3`,{className:`text-base font-bold text-text-primary mb-1`,children:x}),(0,m.jsx)(`p`,{className:`text-xs text-text-secondary leading-relaxed mb-6`,children:S}),(0,m.jsxs)(a,{mode:`wait`,children:[t===`success`&&(0,m.jsx)(o.p,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},className:`text-xs font-semibold text-status-success`,children:`Authentication successful`},`s`),t===`failed`&&(0,m.jsx)(o.p,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},className:`text-xs font-semibold text-status-error mb-4`,children:`Authentication failed. Try again.`},`f`)]}),(t===`idle`||t===`failed`)&&(0,m.jsx)(o.button,{onClick:n,className:r(`w-full py-3 px-6 rounded-xl text-sm font-semibold text-white`,`bg-accent-blue hover:bg-accent-blue-hover active:bg-accent-blue-active`,`transition-apple duration-200`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue`),whileTap:{scale:.97},children:t===`failed`?`Try Again`:`Authenticate with ${y}`})]})]})})},h.displayName=`BiometricPrompt`,h.__docgenInfo={description:``,methods:[],displayName:`BiometricPrompt`,props:{type:{required:!1,tsType:{name:`union`,raw:`'faceId' | 'touchId'`,elements:[{name:`literal`,value:`'faceId'`},{name:`literal`,value:`'touchId'`}]},description:``,defaultValue:{value:`'faceId'`,computed:!1}},status:{required:!1,tsType:{name:`union`,raw:`'idle' | 'scanning' | 'success' | 'failed'`,elements:[{name:`literal`,value:`'idle'`},{name:`literal`,value:`'scanning'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'failed'`}]},description:``,defaultValue:{value:`'idle'`,computed:!1}},onAuthenticate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},title:{required:!1,tsType:{name:`string`},description:``},subtitle:{required:!1,tsType:{name:`string`},description:``},open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{g(),_={title:`Fintech/KYC/BiometricPrompt`,component:h,tags:[`autodocs`]},v={args:{type:`faceId`,status:`idle`,open:!0}},y={args:{type:`faceId`,status:`scanning`,open:!0}},b={args:{type:`faceId`,status:`success`,open:!0}},x={args:{type:`faceId`,status:`failed`,open:!0}},S={args:{type:`touchId`,status:`idle`,open:!0}},C={args:{type:`touchId`,status:`scanning`,open:!0}},w={args:{type:`touchId`,status:`success`,open:!0}},T={args:{type:`touchId`,status:`failed`,open:!0}},E={args:{type:`faceId`,status:`idle`,open:!0,title:`Verify Identity`,subtitle:`Look at your device to continue with the transaction`}},D={args:{type:`faceId`,status:`idle`,open:!1}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'faceId',
    status: 'idle',
    open: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'faceId',
    status: 'scanning',
    open: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'faceId',
    status: 'success',
    open: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'faceId',
    status: 'failed',
    open: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'touchId',
    status: 'idle',
    open: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'touchId',
    status: 'scanning',
    open: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'touchId',
    status: 'success',
    open: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'touchId',
    status: 'failed',
    open: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'faceId',
    status: 'idle',
    open: true,
    title: 'Verify Identity',
    subtitle: 'Look at your device to continue with the transaction'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'faceId',
    status: 'idle',
    open: false
  }
}`,...D.parameters?.docs?.source}}},O=[`FaceIdIdle`,`FaceIdScanning`,`FaceIdSuccess`,`FaceIdFailed`,`TouchIdIdle`,`TouchIdScanning`,`TouchIdSuccess`,`TouchIdFailed`,`CustomLabels`,`Closed`]}))();export{D as Closed,E as CustomLabels,x as FaceIdFailed,v as FaceIdIdle,y as FaceIdScanning,b as FaceIdSuccess,T as TouchIdFailed,S as TouchIdIdle,C as TouchIdScanning,w as TouchIdSuccess,O as __namedExportsOrder,_ as default};