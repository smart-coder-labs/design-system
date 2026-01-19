import{j as a}from"./jsx-runtime-u17CrQMm.js";import{C as u}from"./ConfirmDialog-20jd9Qui.js";import{B as g}from"./Button-DGE0rp2O.js";import{r as l}from"./iframe-Cb93e_Z8.js";import"./Modal-CR_Tu7hD.js";import"./index-C-qY3IT9.js";import"./index-BWl-oFhJ.js";import"./index-BVqOlNMQ.js";import"./proxy-b22VB84a.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"Feedback/ConfirmDialog",component:u,parameters:{layout:"centered"},tags:[],argTypes:{variant:{control:"select",options:["default","destructive","warning","info"]},isLoading:{control:"boolean"}}},i=e=>{const[d,s]=l.useState(!1),[p,c]=l.useState(!1),m=()=>{if(e.isLoading!==void 0){e.onConfirm();return}c(!0),setTimeout(()=>{c(!1),s(!1),console.log("Confirmed!")},2e3)};return a.jsxs(a.Fragment,{children:[a.jsx(g,{onClick:()=>s(!0),children:"Open Confirm Dialog"}),a.jsx(u,{...e,open:d,onOpenChange:s,onConfirm:m,isLoading:e.isLoading||p})]})},n={render:e=>a.jsx(i,{...e}),args:{title:"Confirm Action",description:"Are you sure you want to proceed with this action? This cannot be undone.",confirmLabel:"Confirm",cancelLabel:"Cancel",variant:"default"}},r={render:e=>a.jsx(i,{...e}),args:{title:"Delete Account",description:"Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.",confirmLabel:"Delete Account",cancelLabel:"Cancel",variant:"destructive"}},o={render:e=>a.jsx(i,{...e}),args:{title:"Unsaved Changes",description:"You have unsaved changes. Are you sure you want to leave this page? Your changes will be lost.",confirmLabel:"Leave Page",cancelLabel:"Stay",variant:"warning"}},t={render:e=>a.jsx(i,{...e}),args:{title:"Update Available",description:"A new version of the application is available. Would you like to update now?",confirmLabel:"Update Now",cancelLabel:"Later",variant:"info"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <ConfirmDialogWrapper {...args} />,
  args: {
    title: 'Confirm Action',
    description: 'Are you sure you want to proceed with this action? This cannot be undone.',
    confirmLabel: 'Confirm',
    cancelLabel: 'Cancel',
    variant: 'default'
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <ConfirmDialogWrapper {...args} />,
  args: {
    title: 'Delete Account',
    description: 'Are you sure you want to delete your account? All of your data will be permanently removed. This action cannot be undone.',
    confirmLabel: 'Delete Account',
    cancelLabel: 'Cancel',
    variant: 'destructive'
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <ConfirmDialogWrapper {...args} />,
  args: {
    title: 'Unsaved Changes',
    description: 'You have unsaved changes. Are you sure you want to leave this page? Your changes will be lost.',
    confirmLabel: 'Leave Page',
    cancelLabel: 'Stay',
    variant: 'warning'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <ConfirmDialogWrapper {...args} />,
  args: {
    title: 'Update Available',
    description: 'A new version of the application is available. Would you like to update now?',
    confirmLabel: 'Update Now',
    cancelLabel: 'Later',
    variant: 'info'
  }
}`,...t.parameters?.docs?.source}}};const j=["Default","Destructive","Warning","Info"];export{n as Default,r as Destructive,t as Info,o as Warning,j as __namedExportsOrder,x as default};
