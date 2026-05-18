import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CmoObUFa.js";import{F as r,Fn as i,G as a,er as o,jn as s,t as c,x as l}from"./lucide-react-Dg7gJGVx.js";import{n as u,t as d}from"./utils-ijcE-ZHT.js";import{t as f}from"./jsx-runtime-DaLCRA3n.js";import{l as p,s as m,t as h}from"./es-Bjq_ogfB.js";var g,_,v,y=e((()=>{g=t(n()),u(),h(),c(),_=f(),v=(0,g.forwardRef)(({label:e,actions:t,variant:n=`primary`,size:r=`md`,disabled:i=!1,className:a},s)=>{let[c,l]=(0,g.useState)(!1),u=(0,g.useRef)(null);(0,g.useEffect)(()=>{let e=e=>{u.current&&!u.current.contains(e.target)&&l(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let f={primary:`bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive shadow-sm`,secondary:`bg-surface-secondary text-text-primary hover:bg-surface-tertiary active:bg-surface-tertiary/80 border border-border-primary`,tertiary:`bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary`},h={sm:{button:`h-8 px-3 text-sm gap-1.5`,icon:`w-3.5 h-3.5`},md:{button:`h-10 px-4 text-base gap-2`,icon:`w-4 h-4`},lg:{button:`h-12 px-5 text-lg gap-2.5`,icon:`w-5 h-5`}},v=e=>{e.disabled||(e.onClick(),l(!1))};return(0,_.jsxs)(`div`,{className:`relative inline-block text-left`,ref:u,children:[(0,_.jsxs)(m.button,{ref:s,whileTap:{scale:.98},disabled:i,onClick:()=>!i&&l(!c),className:d(`inline-flex items-center justify-center font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer`,f[n],h[r].button,i&&`opacity-50 cursor-not-allowed`,a),children:[e,(0,_.jsx)(o,{className:d(h[r].icon,`transition-transform duration-200`,c&&`rotate-180`)})]}),(0,_.jsx)(p,{children:c&&(0,_.jsx)(m.div,{initial:{opacity:0,scale:.95,y:-5},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-5},transition:{duration:.1},className:d(`absolute left-0 mt-2 z-dropdown`,`min-w-[160px] bg-surface-elevated border border-border-primary rounded-xl shadow-lg p-1`),children:t.map((e,t)=>(0,_.jsxs)(`button`,{onClick:()=>v(e),disabled:e.disabled,className:d(`flex w-full items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer outline-none transition-colors`,`text-text-primary hover:bg-surface-secondary text-left`,`focus:bg-surface-secondary`,e.disabled&&`opacity-50 cursor-not-allowed`),children:[e.icon&&(0,_.jsx)(e.icon,{className:`w-4 h-4`}),e.label]},t))})})]})}),v.displayName=`ButtonWithDropdown`,v.__docgenInfo={description:``,methods:[],displayName:`ButtonWithDropdown`,props:{label:{required:!0,tsType:{name:`string`},description:``},actions:{required:!0,tsType:{name:`Array`,elements:[{name:`ButtonWithDropdownAction`}],raw:`ButtonWithDropdownAction[]`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'tertiary'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'tertiary'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),b,x,S,C,w,T,E,D,O,k,A;e((()=>{y(),c(),b={title:`Buttons/ButtonWithDropdown`,component:v,tags:[`autodocs`]},x=[{label:`Download`,onClick:()=>{},icon:s},{label:`Share`,onClick:()=>{},icon:a},{label:`Edit`,onClick:()=>{},icon:r}],S={args:{label:`Actions`,actions:x,variant:`primary`,size:`md`}},C={args:{label:`Actions`,actions:x,variant:`secondary`}},w={args:{label:`More`,actions:x,variant:`tertiary`}},T={args:{label:`Actions`,actions:x,size:`sm`}},E={args:{label:`Actions`,actions:x,size:`lg`}},D={args:{label:`Actions`,actions:x,disabled:!0}},O={args:{label:`Actions`,actions:[{label:`Copy`,onClick:()=>{},icon:i},{label:`Edit`,onClick:()=>{},icon:r},{label:`Delete`,onClick:()=>{},icon:l,disabled:!0}]}},k={args:{label:`More Actions`,actions:[{label:`Download`,onClick:()=>{},icon:s},{label:`Share`,onClick:()=>{},icon:a},{label:`Edit`,onClick:()=>{},icon:r},{label:`Duplicate`,onClick:()=>{},icon:i},{label:`Delete`,onClick:()=>{},icon:l}]}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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