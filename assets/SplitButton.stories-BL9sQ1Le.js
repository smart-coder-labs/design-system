import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ns4lj-Vt.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{l as o,s,t as c}from"./es-Bab7Eu6H.js";import{An as l,Fr as u,K as d,lt as f,nr as p,t as m,vt as h,wn as g,x as _}from"./lucide-react-DM_OnbjU.js";var v,y,b,x=e((()=>{v=t(n()),r(),y=a(),c(),m(),b=(0,v.forwardRef)(({label:e,onClick:t,actions:n,variant:r=`primary`,size:a=`md`,disabled:c=!1,className:l},u)=>{let[d,f]=(0,v.useState)(!1),m=(0,v.useRef)(null);(0,v.useEffect)(()=>{let e=e=>{m.current&&!m.current.contains(e.target)&&f(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]);let h={primary:{button:`bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive`,divider:`bg-white/20`,container:``},secondary:{button:`bg-surface-secondary text-text-primary hover:bg-surface-tertiary active:bg-surface-tertiary/80`,divider:`bg-border-primary`,container:`border border-border-primary`},tertiary:{button:`bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary`,divider:`bg-border-primary`,container:`border border-border-primary`}},g={sm:{button:`h-8 px-3 text-sm`,icon:`w-3.5 h-3.5`,dropdown:`w-7`},md:{button:`h-10 px-4 text-base`,icon:`w-4 h-4`,dropdown:`w-9`},lg:{button:`h-12 px-5 text-lg`,icon:`w-5 h-5`,dropdown:`w-11`}},_=e=>{e.disabled||(e.onClick(),f(!1))};return(0,y.jsxs)(`div`,{ref:u,className:i(`inline-flex rounded-xl overflow-visible shadow-sm relative`,h[r].container,l),children:[(0,y.jsxs)(`div`,{className:`flex rounded-xl overflow-hidden`,ref:m,children:[(0,y.jsx)(s.button,{whileTap:{scale:.98},onClick:t,disabled:c,className:i(`flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer`,h[r].button,g[a].button,c&&`opacity-50 cursor-not-allowed`),children:e}),(0,y.jsx)(`div`,{className:i(`w-px`,h[r].divider)}),(0,y.jsx)(s.button,{whileTap:{scale:.98},disabled:c,onClick:()=>!c&&f(!d),className:i(`flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer`,h[r].button,g[a].dropdown,c&&`opacity-50 cursor-not-allowed`),children:(0,y.jsx)(p,{className:i(g[a].icon,`transition-transform duration-200`,d&&`rotate-180`)})})]}),(0,y.jsx)(o,{children:d&&(0,y.jsx)(s.div,{initial:{opacity:0,scale:.95,y:-5},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-5},transition:{duration:.1},className:i(`absolute right-0 top-full mt-2 z-dropdown`,`min-w-[160px] bg-surface-elevated border border-border-primary rounded-xl shadow-lg p-1`),children:n.map((e,t)=>(0,y.jsxs)(`button`,{onClick:()=>_(e),disabled:e.disabled,className:i(`flex w-full items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer outline-none transition-colors`,`text-text-primary hover:bg-surface-secondary text-left`,`focus:bg-surface-secondary`,e.disabled&&`opacity-50 cursor-not-allowed`),children:[e.icon&&(0,y.jsx)(e.icon,{className:`w-4 h-4`}),e.label]},t))})})]})}),b.displayName=`SplitButton`,b.__docgenInfo={description:``,methods:[],displayName:`SplitButton`,props:{label:{required:!0,tsType:{name:`string`},description:``},onClick:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},actions:{required:!0,tsType:{name:`Array`,elements:[{name:`SplitButtonAction`}],raw:`SplitButtonAction[]`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'tertiary'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'tertiary'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),S,C,w,T,E,D,O,k,A,j,M;e((()=>{x(),m(),S={title:`Buttons/SplitButton`,component:b,tags:[`autodocs`]},C={args:{label:`Export`,onClick:()=>alert(`Exporting...`),actions:[{label:`Export as PDF`,icon:l,onClick:()=>alert(`Exporting as PDF`)},{label:`Export as CSV`,icon:l,onClick:()=>alert(`Exporting as CSV`)},{label:`Print`,icon:f,onClick:()=>alert(`Printing...`)}]}},w={args:{label:`Share Report`,onClick:()=>alert(`Sharing...`),actions:[{label:`Share via Email`,icon:d,onClick:()=>alert(`Email share`)},{label:`Share via Link`,icon:d,onClick:()=>alert(`Link share`)},{label:`Preview`,icon:g,onClick:()=>alert(`Preview`)}],variant:`primary`}},T={args:{label:`Export`,onClick:()=>alert(`Exporting...`),actions:[{label:`PDF`,icon:l,onClick:()=>alert(`PDF`)},{label:`CSV`,icon:l,onClick:()=>alert(`CSV`)}],disabled:!0}},E={args:{label:`Manage Document`,onClick:()=>alert(`Opening...`),actions:[{label:`Edit`,icon:h,onClick:()=>alert(`Editing`)},{label:`Archive`,icon:u,onClick:()=>alert(`Archiving`),disabled:!0},{label:`Delete`,icon:_,onClick:()=>alert(`Deleting`),disabled:!0}]}},D={args:{label:`More Options`,onClick:()=>alert(`Default action`),actions:[{label:`View Details`,icon:g,onClick:()=>alert(`Viewing details`)},{label:`Duplicate`,onClick:()=>alert(`Duplicating`)}],variant:`secondary`}},O={args:{label:`Actions`,onClick:()=>alert(`Default action`),actions:[{label:`Option 1`,onClick:()=>alert(`Option 1`)},{label:`Option 2`,onClick:()=>alert(`Option 2`)}],variant:`tertiary`}},k={args:{label:`Export`,onClick:()=>alert(`Exporting...`),actions:[{label:`PDF`,icon:l,onClick:()=>alert(`PDF`)},{label:`CSV`,icon:l,onClick:()=>alert(`CSV`)}],size:`sm`}},A={args:{label:`Share Report`,onClick:()=>alert(`Sharing...`),actions:[{label:`Email`,icon:d,onClick:()=>alert(`Email`)},{label:`Link`,icon:d,onClick:()=>alert(`Link`)}],size:`lg`}},j={parameters:{themes:{themeOverride:`dark`}},args:{label:`Export`,onClick:()=>alert(`Exporting...`),actions:[{label:`PDF`,icon:l,onClick:()=>alert(`PDF`)},{label:`CSV`,icon:l,onClick:()=>alert(`CSV`)}]}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Export',
    onClick: () => alert('Exporting...'),
    actions: [{
      label: 'Export as PDF',
      icon: Download,
      onClick: () => alert('Exporting as PDF')
    }, {
      label: 'Export as CSV',
      icon: Download,
      onClick: () => alert('Exporting as CSV')
    }, {
      label: 'Print',
      icon: Printer,
      onClick: () => alert('Printing...')
    }]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Share Report',
    onClick: () => alert('Sharing...'),
    actions: [{
      label: 'Share via Email',
      icon: Share2,
      onClick: () => alert('Email share')
    }, {
      label: 'Share via Link',
      icon: Share2,
      onClick: () => alert('Link share')
    }, {
      label: 'Preview',
      icon: Eye,
      onClick: () => alert('Preview')
    }],
    variant: 'primary'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Export',
    onClick: () => alert('Exporting...'),
    actions: [{
      label: 'PDF',
      icon: Download,
      onClick: () => alert('PDF')
    }, {
      label: 'CSV',
      icon: Download,
      onClick: () => alert('CSV')
    }],
    disabled: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Manage Document',
    onClick: () => alert('Opening...'),
    actions: [{
      label: 'Edit',
      icon: Edit3,
      onClick: () => alert('Editing')
    }, {
      label: 'Archive',
      icon: Archive,
      onClick: () => alert('Archiving'),
      disabled: true
    }, {
      label: 'Delete',
      icon: Trash2,
      onClick: () => alert('Deleting'),
      disabled: true
    }]
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'More Options',
    onClick: () => alert('Default action'),
    actions: [{
      label: 'View Details',
      icon: Eye,
      onClick: () => alert('Viewing details')
    }, {
      label: 'Duplicate',
      onClick: () => alert('Duplicating')
    }],
    variant: 'secondary'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    onClick: () => alert('Default action'),
    actions: [{
      label: 'Option 1',
      onClick: () => alert('Option 1')
    }, {
      label: 'Option 2',
      onClick: () => alert('Option 2')
    }],
    variant: 'tertiary'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Export',
    onClick: () => alert('Exporting...'),
    actions: [{
      label: 'PDF',
      icon: Download,
      onClick: () => alert('PDF')
    }, {
      label: 'CSV',
      icon: Download,
      onClick: () => alert('CSV')
    }],
    size: 'sm'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Share Report',
    onClick: () => alert('Sharing...'),
    actions: [{
      label: 'Email',
      icon: Share2,
      onClick: () => alert('Email')
    }, {
      label: 'Link',
      icon: Share2,
      onClick: () => alert('Link')
    }],
    size: 'lg'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    label: 'Export',
    onClick: () => alert('Exporting...'),
    actions: [{
      label: 'PDF',
      icon: Download,
      onClick: () => alert('PDF')
    }, {
      label: 'CSV',
      icon: Download,
      onClick: () => alert('CSV')
    }]
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Primary`,`Disabled`,`WithDisabledAction`,`Secondary`,`Tertiary`,`Small`,`Large`,`DarkMode`]}))();export{j as DarkMode,C as Default,T as Disabled,A as Large,w as Primary,D as Secondary,k as Small,O as Tertiary,E as WithDisabledAction,M as __namedExportsOrder,S as default};