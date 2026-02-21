import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as N}from"./iframe-CGazvlvx.js";import{c as q}from"./utils-CDN07tui.js";import{m as P}from"./proxy-BNOm_ZMq.js";import{X as I}from"./x-bkzh2GWz.js";import{T as C}from"./tag-BTzaE2Mp.js";import{C as w}from"./circle-check-big-B5_XrEet.js";import{S as R}from"./star-CAIW9ukj.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-juiWZL7b.js";import"./createLucideIcon-BMKVoASg.js";const a=N.forwardRef(({label:S,variant:D="default",size:b="md",icon:h,onDelete:y,onClick:x,disabled:f=!1,className:T,...z},j)=>{const k={default:"bg-surface-secondary text-text-primary border-border-primary hover:bg-surface-tertiary",primary:"bg-accent-blue/10 text-accent-blue border-accent-blue/20 hover:bg-accent-blue/20",success:"bg-status-success/10 text-status-success border-status-success/20 hover:bg-status-success/20",warning:"bg-status-warning/10 text-status-warning border-status-warning/20 hover:bg-status-warning/20",error:"bg-status-error/10 text-status-error border-status-error/20 hover:bg-status-error/20",info:"bg-status-info/10 text-status-info border-status-info/20 hover:bg-status-info/20"},v={sm:{container:"h-6 px-2 gap-1 text-xs",icon:"w-3 h-3",deleteButton:"w-3.5 h-3.5"},md:{container:"h-8 px-3 gap-1.5 text-sm",icon:"w-4 h-4",deleteButton:"w-4 h-4"},lg:{container:"h-10 px-4 gap-2 text-base",icon:"w-5 h-5",deleteButton:"w-5 h-5"}},r=!!x&&!f,W=P.div;return e.jsxs(W,{ref:j,whileHover:r?{scale:1.02}:void 0,whileTap:r?{scale:.98}:void 0,onClick:r?x:void 0,className:q("inline-flex items-center justify-center rounded-full border font-medium transition-colors",k[D],v[b].container,r&&"cursor-pointer",f&&"opacity-50 cursor-not-allowed",T),children:[h&&e.jsx(h,{className:v[b].icon}),e.jsx("span",{children:S}),y&&!f&&e.jsx("button",{onClick:E=>{E.stopPropagation(),y()},className:"rounded-full hover:bg-black/10 transition-colors focus:outline-none p-0.5","aria-label":"Delete",children:e.jsx(I,{className:v[b].deleteButton})})]})});a.displayName="Chip";a.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},icon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const K={title:"Data Display/Chip",component:a,tags:[],argTypes:{variant:{control:"select",options:["default","primary","success","warning","error","info"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},s={args:{label:"Default Chip"}},n={args:{label:"Primary",variant:"primary"}},t={args:{label:"Success",variant:"success"}},i={args:{label:"Warning",variant:"warning"}},o={args:{label:"Error",variant:"error"}},l={args:{label:"Tagged",icon:C,variant:"primary"}},c={args:{label:"Deletable",variant:"default",onDelete:()=>alert("Chip deleted")}},p={args:{label:"Clickable",variant:"primary",onClick:()=>alert("Chip clicked")}},m={args:{label:"Small Chip",size:"sm",variant:"primary"}},u={args:{label:"Large Chip",size:"lg",variant:"primary"}},d={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{label:"Default",variant:"default"}),e.jsx(a,{label:"Primary",variant:"primary"}),e.jsx(a,{label:"Success",variant:"success",icon:w}),e.jsx(a,{label:"Warning",variant:"warning"}),e.jsx(a,{label:"Error",variant:"error"}),e.jsx(a,{label:"Info",variant:"info"})]})},g={render:()=>e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(a,{label:"React",variant:"primary",icon:R,onDelete:()=>{}}),e.jsx(a,{label:"TypeScript",variant:"info",icon:C,onDelete:()=>{}}),e.jsx(a,{label:"Tailwind",variant:"success",icon:w,onDelete:()=>{}})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Chip'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Success',
    variant: 'success'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    variant: 'warning'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Error',
    variant: 'error'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Tagged',
    icon: Tag,
    variant: 'primary'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Deletable',
    variant: 'default',
    onDelete: () => alert('Chip deleted')
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Clickable',
    variant: 'primary',
    onClick: () => alert('Chip clicked')
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Chip',
    size: 'sm',
    variant: 'primary'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Chip',
    size: 'lg',
    variant: 'primary'
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
            <Chip label="Default" variant="default" />
            <Chip label="Primary" variant="primary" />
            <Chip label="Success" variant="success" icon={CheckCircle} />
            <Chip label="Warning" variant="warning" />
            <Chip label="Error" variant="error" />
            <Chip label="Info" variant="info" />
        </div>
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
            <Chip label="React" variant="primary" icon={Star} onDelete={() => {}} />
            <Chip label="TypeScript" variant="info" icon={Tag} onDelete={() => {}} />
            <Chip label="Tailwind" variant="success" icon={CheckCircle} onDelete={() => {}} />
        </div>
}`,...g.parameters?.docs?.source}}};const M=["Default","Primary","Success","Warning","Error","WithIcon","WithDelete","Clickable","Small","Large","AllVariants","WithIconsAndDelete"];export{d as AllVariants,p as Clickable,s as Default,o as Error,u as Large,n as Primary,m as Small,t as Success,i as Warning,c as WithDelete,l as WithIcon,g as WithIconsAndDelete,M as __namedExportsOrder,K as default};
