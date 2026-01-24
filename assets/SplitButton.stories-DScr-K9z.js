import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-B9hmpDEG.js";import{c as r}from"./utils-CDN07tui.js";import{m as v}from"./proxy-Dckdfu8t.js";import{C as D}from"./chevron-down-D5rx66yE.js";import{A as N}from"./index-D16B27Jy.js";import{c as O}from"./createLucideIcon-Ct5Zk_dD.js";import{C}from"./copy-rzAtjAjg.js";import{D as j}from"./download-DlByoX6U.js";import"./preload-helper-PPVm8Dsz.js";const T=[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]],P=O("save",T),x=l.forwardRef(({label:h,onClick:S,actions:g,variant:n="primary",size:p="md",disabled:t=!1,className:k},w)=>{const[m,u]=l.useState(!1),b=l.useRef(null);l.useEffect(()=>{const e=f=>{b.current&&!b.current.contains(f.target)&&u(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const o={primary:{button:"bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive",divider:"bg-white/20",container:""},secondary:{button:"bg-surface-secondary text-text-primary hover:bg-surface-tertiary active:bg-surface-tertiary/80",divider:"bg-border-primary",container:"border border-border-primary"},tertiary:{button:"bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary",divider:"bg-border-primary",container:"border border-border-primary"}},y={sm:{button:"h-8 px-3 text-sm",icon:"w-3.5 h-3.5",dropdown:"w-7"},md:{button:"h-10 px-4 text-base",icon:"w-4 h-4",dropdown:"w-9"},lg:{button:"h-12 px-5 text-lg",icon:"w-5 h-5",dropdown:"w-11"}},E=e=>{e.disabled||(e.onClick(),u(!1))};return a.jsxs("div",{ref:w,className:r("inline-flex rounded-xl overflow-visible shadow-sm relative",o[n].container,k),children:[a.jsxs("div",{className:"flex rounded-xl overflow-hidden",ref:b,children:[a.jsx(v.button,{whileTap:{scale:.98},onClick:S,disabled:t,className:r("flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20",o[n].button,y[p].button,t&&"opacity-50 cursor-not-allowed"),children:h}),a.jsx("div",{className:r("w-px",o[n].divider)}),a.jsx(v.button,{whileTap:{scale:.98},disabled:t,onClick:()=>!t&&u(!m),className:r("flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20",o[n].button,y[p].dropdown,t&&"opacity-50 cursor-not-allowed"),children:a.jsx(D,{className:r(y[p].icon,"transition-transform duration-200",m&&"rotate-180")})})]}),a.jsx(N,{children:m&&a.jsx(v.div,{initial:{opacity:0,scale:.95,y:-5},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-5},transition:{duration:.1},className:r("absolute right-0 top-full mt-2 z-dropdown","min-w-[160px] bg-surface-elevated border border-border-primary rounded-xl shadow-lg p-1"),children:g.map((e,f)=>a.jsxs("button",{onClick:()=>E(e),disabled:e.disabled,className:r("flex w-full items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer outline-none transition-colors","text-text-primary hover:bg-surface-secondary text-left","focus:bg-surface-secondary",e.disabled&&"opacity-50 cursor-not-allowed"),children:[e.icon&&a.jsx(e.icon,{className:"w-4 h-4"}),e.label]},f))})})]})});x.displayName="SplitButton";x.__docgenInfo={description:"",methods:[],displayName:"SplitButton",props:{label:{required:!0,tsType:{name:"string"},description:""},onClick:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},actions:{required:!0,tsType:{name:"Array",elements:[{name:"SplitButtonAction"}],raw:"SplitButtonAction[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const H={title:"Buttons/SplitButton",component:x,tags:[],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},i={args:{label:"Save",onClick:()=>alert("Primary action: Save"),actions:[{label:"Save as Draft",onClick:()=>alert("Save as Draft"),icon:P},{label:"Save as Template",onClick:()=>alert("Save as Template"),icon:C},{label:"Download",onClick:()=>alert("Download"),icon:j}]}},s={args:{label:"Share",variant:"secondary",onClick:()=>alert("Primary action: Share"),actions:[{label:"Share via Email",onClick:()=>alert("Share via Email")},{label:"Share via Link",onClick:()=>alert("Share via Link")},{label:"Copy Link",onClick:()=>alert("Copy Link"),icon:C}]}},c={args:{label:"Export",onClick:()=>alert("Primary action: Export"),actions:[{label:"Export as PDF",onClick:()=>alert("Export as PDF")},{label:"Export as CSV",onClick:()=>alert("Export as CSV"),disabled:!0},{label:"Export as JSON",onClick:()=>alert("Export as JSON")}]}},d={args:{label:"Actions",size:"sm",onClick:()=>alert("Primary action"),actions:[{label:"Option 1",onClick:()=>alert("Option 1")},{label:"Option 2",onClick:()=>alert("Option 2")}]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    onClick: () => alert('Primary action: Save'),
    actions: [{
      label: 'Save as Draft',
      onClick: () => alert('Save as Draft'),
      icon: Save
    }, {
      label: 'Save as Template',
      onClick: () => alert('Save as Template'),
      icon: Copy
    }, {
      label: 'Download',
      onClick: () => alert('Download'),
      icon: Download
    }]
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Share',
    variant: 'secondary',
    onClick: () => alert('Primary action: Share'),
    actions: [{
      label: 'Share via Email',
      onClick: () => alert('Share via Email')
    }, {
      label: 'Share via Link',
      onClick: () => alert('Share via Link')
    }, {
      label: 'Copy Link',
      onClick: () => alert('Copy Link'),
      icon: Copy
    }]
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Export',
    onClick: () => alert('Primary action: Export'),
    actions: [{
      label: 'Export as PDF',
      onClick: () => alert('Export as PDF')
    }, {
      label: 'Export as CSV',
      onClick: () => alert('Export as CSV'),
      disabled: true
    }, {
      label: 'Export as JSON',
      onClick: () => alert('Export as JSON')
    }]
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    size: 'sm',
    onClick: () => alert('Primary action'),
    actions: [{
      label: 'Option 1',
      onClick: () => alert('Option 1')
    }, {
      label: 'Option 2',
      onClick: () => alert('Option 2')
    }]
  }
}`,...d.parameters?.docs?.source}}};const I=["Default","Secondary","WithDisabledAction","Small"];export{i as Default,s as Secondary,d as Small,c as WithDisabledAction,I as __namedExportsOrder,H as default};
