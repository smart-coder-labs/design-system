import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-BQuKaBw1.js";import{c as o}from"./utils-CDN07tui.js";import{m as x}from"./proxy-DCsQVuEn.js";import{C as k}from"./chevron-down-B2Vrcf0G.js";import{A as E}from"./index-DWG6ZTkU.js";import{F as O}from"./file-text-DWPBz06E.js";import{I as S}from"./image-MHWLmbuE.js";import{V}from"./video-BGI4YgaW.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-7-Glrotp.js";const u=t.forwardRef(({label:y,actions:g,variant:w="primary",size:b="md",disabled:i=!1,className:D},h)=>{const[c,d]=t.useState(!1),p=t.useRef(null);t.useEffect(()=>{const e=m=>{p.current&&!p.current.contains(m.target)&&d(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const v={primary:"bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive shadow-sm",secondary:"bg-surface-secondary text-text-primary hover:bg-surface-tertiary active:bg-surface-tertiary/80 border border-border-primary",tertiary:"bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary"},f={sm:{button:"h-8 px-3 text-sm gap-1.5",icon:"w-3.5 h-3.5"},md:{button:"h-10 px-4 text-base gap-2",icon:"w-4 h-4"},lg:{button:"h-12 px-5 text-lg gap-2.5",icon:"w-5 h-5"}},C=e=>{e.disabled||(e.onClick(),d(!1))};return a.jsxs("div",{className:"relative inline-block text-left",ref:p,children:[a.jsxs(x.button,{ref:h,whileTap:{scale:.98},disabled:i,onClick:()=>!i&&d(!c),className:o("inline-flex items-center justify-center font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20",v[w],f[b].button,i&&"opacity-50 cursor-not-allowed",D),children:[y,a.jsx(k,{className:o(f[b].icon,"transition-transform duration-200",c&&"rotate-180")})]}),a.jsx(E,{children:c&&a.jsx(x.div,{initial:{opacity:0,scale:.95,y:-5},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-5},transition:{duration:.1},className:o("absolute left-0 mt-2 z-dropdown","min-w-[160px] bg-surface-elevated border border-border-primary rounded-xl shadow-lg p-1"),children:g.map((e,m)=>a.jsxs("button",{onClick:()=>C(e),disabled:e.disabled,className:o("flex w-full items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer outline-none transition-colors","text-text-primary hover:bg-surface-secondary text-left","focus:bg-surface-secondary",e.disabled&&"opacity-50 cursor-not-allowed"),children:[e.icon&&a.jsx(e.icon,{className:"w-4 h-4"}),e.label]},m))})})]})});u.displayName="ButtonWithDropdown";u.__docgenInfo={description:"",methods:[],displayName:"ButtonWithDropdown",props:{label:{required:!0,tsType:{name:"string"},description:""},actions:{required:!0,tsType:{name:"Array",elements:[{name:"ButtonWithDropdownAction"}],raw:"ButtonWithDropdownAction[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const J={title:"Buttons/ButtonWithDropdown",component:u,tags:[],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},n={args:{label:"Download",actions:[{label:"Download as PDF",onClick:()=>alert("Download as PDF"),icon:O},{label:"Download as Image",onClick:()=>alert("Download as Image"),icon:S},{label:"Download as Video",onClick:()=>alert("Download as Video"),icon:V}]}},r={args:{label:"Actions",variant:"secondary",actions:[{label:"Edit",onClick:()=>alert("Edit")},{label:"Duplicate",onClick:()=>alert("Duplicate")},{label:"Delete",onClick:()=>alert("Delete")}]}},l={args:{label:"Export",actions:[{label:"Export as CSV",onClick:()=>alert("Export as CSV")},{label:"Export as Excel",onClick:()=>alert("Export as Excel"),disabled:!0},{label:"Export as JSON",onClick:()=>alert("Export as JSON")}]}},s={args:{label:"Options",size:"sm",variant:"secondary",actions:[{label:"Option 1",onClick:()=>alert("Option 1")},{label:"Option 2",onClick:()=>alert("Option 2")}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Download',
    actions: [{
      label: 'Download as PDF',
      onClick: () => alert('Download as PDF'),
      icon: FileText
    }, {
      label: 'Download as Image',
      onClick: () => alert('Download as Image'),
      icon: Image
    }, {
      label: 'Download as Video',
      onClick: () => alert('Download as Video'),
      icon: Video
    }]
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    variant: 'secondary',
    actions: [{
      label: 'Edit',
      onClick: () => alert('Edit')
    }, {
      label: 'Duplicate',
      onClick: () => alert('Duplicate')
    }, {
      label: 'Delete',
      onClick: () => alert('Delete')
    }]
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Export',
    actions: [{
      label: 'Export as CSV',
      onClick: () => alert('Export as CSV')
    }, {
      label: 'Export as Excel',
      onClick: () => alert('Export as Excel'),
      disabled: true
    }, {
      label: 'Export as JSON',
      onClick: () => alert('Export as JSON')
    }]
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Options',
    size: 'sm',
    variant: 'secondary',
    actions: [{
      label: 'Option 1',
      onClick: () => alert('Option 1')
    }, {
      label: 'Option 2',
      onClick: () => alert('Option 2')
    }]
  }
}`,...s.parameters?.docs?.source}}};const R=["Default","Secondary","WithDisabledAction","Small"];export{n as Default,r as Secondary,s as Small,l as WithDisabledAction,R as __namedExportsOrder,J as default};
