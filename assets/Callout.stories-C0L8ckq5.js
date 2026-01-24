import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as C}from"./iframe-FxOJXbvx.js";import{c as g}from"./utils-CDN07tui.js";import{I as f}from"./info-DnANjmgJ.js";import{C as N}from"./circle-alert-C9xwu2Nj.js";import{T as S}from"./triangle-alert-DtyNdUYC.js";import{C as j}from"./circle-check-big-DPpN20tU.js";import{X as k}from"./x-dbi_dvs5.js";import{L as I}from"./lightbulb-DEGBIAjJ.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DJ7P2U_s.js";const u=C.forwardRef(({variant:l="info",title:d,icon:h,dismissible:b=!1,onDismiss:m,className:v,children:x,...y},w)=>{const p={info:{container:"bg-status-info/10 border-status-info/20 text-status-info",icon:f},success:{container:"bg-status-success/10 border-status-success/20 text-status-success",icon:j},warning:{container:"bg-status-warning/10 border-status-warning/20 text-status-warning",icon:S},error:{container:"bg-status-error/10 border-status-error/20 text-status-error",icon:N},neutral:{container:"bg-surface-secondary border-border-primary text-text-primary",icon:f}},T=h||p[l].icon;return e.jsxs("div",{ref:w,className:g("relative flex gap-3 p-4 rounded-xl border",p[l].container,v),...y,children:[e.jsx("div",{className:"flex-shrink-0 mt-0.5",children:e.jsx(T,{className:"w-5 h-5"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[d&&e.jsx("h4",{className:"font-semibold mb-1",children:d}),e.jsx("div",{className:g("text-sm",l==="neutral"?"text-text-secondary":""),children:x})]}),b&&m&&e.jsx("button",{onClick:m,className:"flex-shrink-0 p-1 rounded-lg hover:bg-black/10 transition-colors focus:outline-none","aria-label":"Dismiss",children:e.jsx(k,{className:"w-4 h-4"})})]})});u.displayName="Callout";u.__docgenInfo={description:"",methods:[],displayName:"Callout",props:{variant:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},dismissible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const V={title:"Surfaces/Callout",component:u,tags:[],argTypes:{variant:{control:"select",options:["info","success","warning","error","neutral"]},dismissible:{control:"boolean"}}},r={args:{variant:"info",title:"Information",children:"This is an informational callout to draw attention to important details."}},s={args:{variant:"success",title:"Success",children:"Your changes have been saved successfully."}},a={args:{variant:"warning",title:"Warning",children:"This action cannot be undone. Please proceed with caution."}},t={args:{variant:"error",title:"Error",children:"An error occurred while processing your request. Please try again."}},n={args:{variant:"neutral",title:"Note",children:"This is a neutral callout for general information."}},o={args:{variant:"info",title:"Pro Tip",icon:I,children:"You can use keyboard shortcuts to speed up your workflow."}},i={args:{variant:"info",title:"Dismissible Callout",dismissible:!0,onDismiss:()=>alert("Callout dismissed"),children:"This callout can be dismissed by clicking the X button."}},c={args:{variant:"info",children:"This callout has no title, just content."}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    children: 'This is an informational callout to draw attention to important details.'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Success',
    children: 'Your changes have been saved successfully.'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Warning',
    children: 'This action cannot be undone. Please proceed with caution.'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Error',
    children: 'An error occurred while processing your request. Please try again.'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    title: 'Note',
    children: 'This is a neutral callout for general information.'
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Pro Tip',
    icon: Lightbulb,
    children: 'You can use keyboard shortcuts to speed up your workflow.'
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Dismissible Callout',
    dismissible: true,
    onDismiss: () => alert('Callout dismissed'),
    children: 'This callout can be dismissed by clicking the X button.'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'This callout has no title, just content.'
  }
}`,...c.parameters?.docs?.source}}};const B=["Info","Success","Warning","Error","Neutral","WithCustomIcon","Dismissible","WithoutTitle"];export{i as Dismissible,t as Error,r as Info,n as Neutral,s as Success,a as Warning,o as WithCustomIcon,c as WithoutTitle,B as __namedExportsOrder,V as default};
