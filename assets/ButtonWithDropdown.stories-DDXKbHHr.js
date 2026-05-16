import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ns4lj-Vt.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{l as o,s,t as c}from"./es-Bab7Eu6H.js";import{An as l,In as u,K as d,P as f,nr as p,t as m,x as h}from"./lucide-react-DM_OnbjU.js";var g,_,v,y=e((()=>{g=t(n()),r(),_=a(),c(),m(),v=(0,g.forwardRef)(({label:e,actions:t,variant:n=`primary`,size:r=`md`,disabled:a=!1,className:c},l)=>{let[u,d]=(0,g.useState)(!1),f=(0,g.useRef)(null);(0,g.useEffect)(()=>{let e=e=>{f.current&&!f.current.contains(e.target)&&d(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let m={primary:`bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive shadow-sm`,secondary:`bg-surface-secondary text-text-primary hover:bg-surface-tertiary active:bg-surface-tertiary/80 border border-border-primary`,tertiary:`bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary`},h={sm:{button:`h-8 px-3 text-sm gap-1.5`,icon:`w-3.5 h-3.5`},md:{button:`h-10 px-4 text-base gap-2`,icon:`w-4 h-4`},lg:{button:`h-12 px-5 text-lg gap-2.5`,icon:`w-5 h-5`}},v=e=>{e.disabled||(e.onClick(),d(!1))};return(0,_.jsxs)(`div`,{className:`relative inline-block text-left`,ref:f,children:[(0,_.jsxs)(s.button,{ref:l,whileTap:{scale:.98},disabled:a,onClick:()=>!a&&d(!u),className:i(`inline-flex items-center justify-center font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer`,m[n],h[r].button,a&&`opacity-50 cursor-not-allowed`,c),children:[e,(0,_.jsx)(p,{className:i(h[r].icon,`transition-transform duration-200`,u&&`rotate-180`)})]}),(0,_.jsx)(o,{children:u&&(0,_.jsx)(s.div,{initial:{opacity:0,scale:.95,y:-5},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-5},transition:{duration:.1},className:i(`absolute left-0 mt-2 z-dropdown`,`min-w-[160px] bg-surface-elevated border border-border-primary rounded-xl shadow-lg p-1`),children:t.map((e,t)=>(0,_.jsxs)(`button`,{onClick:()=>v(e),disabled:e.disabled,className:i(`flex w-full items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer outline-none transition-colors`,`text-text-primary hover:bg-surface-secondary text-left`,`focus:bg-surface-secondary`,e.disabled&&`opacity-50 cursor-not-allowed`),children:[e.icon&&(0,_.jsx)(e.icon,{className:`w-4 h-4`}),e.label]},t))})})]})}),v.displayName=`ButtonWithDropdown`,v.__docgenInfo={description:``,methods:[],displayName:`ButtonWithDropdown`,props:{label:{required:!0,tsType:{name:`string`},description:``},actions:{required:!0,tsType:{name:`Array`,elements:[{name:`ButtonWithDropdownAction`}],raw:`ButtonWithDropdownAction[]`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'tertiary'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'tertiary'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),b,x,S,C,w,T,E,D,O,k,A;e((()=>{y(),m(),b={title:`Buttons/ButtonWithDropdown`,component:v,tags:[`autodocs`]},x=[{label:`Download`,onClick:()=>{},icon:l},{label:`Share`,onClick:()=>{},icon:d},{label:`Edit`,onClick:()=>{},icon:f}],S={args:{label:`Actions`,actions:x,variant:`primary`,size:`md`}},C={args:{label:`Actions`,actions:x,variant:`secondary`}},w={args:{label:`More`,actions:x,variant:`tertiary`}},T={args:{label:`Actions`,actions:x,size:`sm`}},E={args:{label:`Actions`,actions:x,size:`lg`}},D={args:{label:`Actions`,actions:x,disabled:!0}},O={args:{label:`Actions`,actions:[{label:`Copy`,onClick:()=>{},icon:u},{label:`Edit`,onClick:()=>{},icon:f},{label:`Delete`,onClick:()=>{},icon:h,disabled:!0}]}},k={args:{label:`More Actions`,actions:[{label:`Download`,onClick:()=>{},icon:l},{label:`Share`,onClick:()=>{},icon:d},{label:`Edit`,onClick:()=>{},icon:f},{label:`Duplicate`,onClick:()=>{},icon:u},{label:`Delete`,onClick:()=>{},icon:h}]}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    actions: defaultActions,
    variant: 'primary',
    size: 'md'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    actions: defaultActions,
    variant: 'secondary'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'More',
    actions: defaultActions,
    variant: 'tertiary'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    actions: defaultActions,
    size: 'sm'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    actions: defaultActions,
    size: 'lg'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    actions: defaultActions,
    disabled: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    actions: [{
      label: 'Copy',
      onClick: () => {},
      icon: Copy
    }, {
      label: 'Edit',
      onClick: () => {},
      icon: Edit
    }, {
      label: 'Delete',
      onClick: () => {},
      icon: Trash2,
      disabled: true
    }]
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'More Actions',
    actions: [{
      label: 'Download',
      onClick: () => {},
      icon: Download
    }, {
      label: 'Share',
      onClick: () => {},
      icon: Share2
    }, {
      label: 'Edit',
      onClick: () => {},
      icon: Edit
    }, {
      label: 'Duplicate',
      onClick: () => {},
      icon: Copy
    }, {
      label: 'Delete',
      onClick: () => {},
      icon: Trash2
    }]
  }
}`,...k.parameters?.docs?.source}}},A=[`Primary`,`Secondary`,`Tertiary`,`Small`,`Large`,`Disabled`,`WithDisabledAction`,`ManyActions`]}))();export{D as Disabled,E as Large,k as ManyActions,S as Primary,C as Secondary,T as Small,w as Tertiary,O as WithDisabledAction,A as __namedExportsOrder,b as default};