import{j as a}from"./jsx-runtime-u17CrQMm.js";import{T as r}from"./Tag-Dofqacdw.js";import{S as f}from"./star-ys1Y4dJz.js";import{C as b}from"./code-B08CkIww.js";import{Z as x}from"./zap-DyDKIBR2.js";import{H as S}from"./hash-BE9PZY_o.js";import"./iframe-Dan5ncgG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./proxy-DCTGQFKY.js";import"./resolve-elements-juiWZL7b.js";import"./x-CtAXLAxX.js";import"./createLucideIcon-jCLSnv7o.js";const P={title:"Data Display/Tag",component:r,tags:[],argTypes:{variant:{control:"select",options:["default","primary","success","warning","error","info","outline"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"}}},e={args:{label:"Default Tag"}},s={args:{label:"Primary",variant:"primary"}},n={args:{label:"Success",variant:"success"}},o={args:{label:"Warning",variant:"warning"}},l={args:{label:"Error",variant:"error"}},t={args:{label:"Outline",variant:"outline"}},i={args:{label:"Featured",icon:f,variant:"primary"}},c={args:{label:"Removable",variant:"default",onRemove:()=>alert("Tag removed")}},m={args:{label:"Clickable",variant:"primary",onClick:()=>alert("Tag clicked")}},p={args:{label:"Small",size:"sm",variant:"primary"}},g={args:{label:"Large",size:"lg",variant:"primary"}},u={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx(r,{label:"Default",variant:"default"}),a.jsx(r,{label:"Primary",variant:"primary"}),a.jsx(r,{label:"Success",variant:"success"}),a.jsx(r,{label:"Warning",variant:"warning"}),a.jsx(r,{label:"Error",variant:"error"}),a.jsx(r,{label:"Info",variant:"info"}),a.jsx(r,{label:"Outline",variant:"outline"})]})},d={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx(r,{label:"javascript",variant:"primary",icon:b}),a.jsx(r,{label:"typescript",variant:"info",icon:b}),a.jsx(r,{label:"react",variant:"success",icon:x}),a.jsx(r,{label:"featured",variant:"warning",icon:f}),a.jsx(r,{label:"trending",variant:"error",icon:S})]})},v={render:()=>a.jsxs("div",{className:"flex flex-wrap gap-2",children:[a.jsx(r,{label:"Design",variant:"primary",onRemove:()=>{}}),a.jsx(r,{label:"Development",variant:"success",onRemove:()=>{}}),a.jsx(r,{label:"Marketing",variant:"warning",onRemove:()=>{}}),a.jsx(r,{label:"Sales",variant:"error",onRemove:()=>{}})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Tag'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Success',
    variant: 'success'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Warning',
    variant: 'warning'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Error',
    variant: 'error'
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Outline',
    variant: 'outline'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Featured',
    icon: Star,
    variant: 'primary'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Removable',
    variant: 'default',
    onRemove: () => alert('Tag removed')
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Clickable',
    variant: 'primary',
    onClick: () => alert('Tag clicked')
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small',
    size: 'sm',
    variant: 'primary'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large',
    size: 'lg',
    variant: 'primary'
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
            <Tag label="Default" variant="default" />
            <Tag label="Primary" variant="primary" />
            <Tag label="Success" variant="success" />
            <Tag label="Warning" variant="warning" />
            <Tag label="Error" variant="error" />
            <Tag label="Info" variant="info" />
            <Tag label="Outline" variant="outline" />
        </div>
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
            <Tag label="javascript" variant="primary" icon={Code} />
            <Tag label="typescript" variant="info" icon={Code} />
            <Tag label="react" variant="success" icon={Zap} />
            <Tag label="featured" variant="warning" icon={Star} />
            <Tag label="trending" variant="error" icon={Hash} />
        </div>
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
            <Tag label="Design" variant="primary" onRemove={() => {}} />
            <Tag label="Development" variant="success" onRemove={() => {}} />
            <Tag label="Marketing" variant="warning" onRemove={() => {}} />
            <Tag label="Sales" variant="error" onRemove={() => {}} />
        </div>
}`,...v.parameters?.docs?.source}}};const z=["Default","Primary","Success","Warning","Error","Outline","WithIcon","WithRemove","Clickable","Small","Large","AllVariants","CategoryTags","RemovableTags"];export{u as AllVariants,d as CategoryTags,m as Clickable,e as Default,l as Error,g as Large,t as Outline,s as Primary,v as RemovableTags,p as Small,n as Success,o as Warning,i as WithIcon,c as WithRemove,z as __namedExportsOrder,P as default};
