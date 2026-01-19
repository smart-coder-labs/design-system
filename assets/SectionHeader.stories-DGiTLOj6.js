import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as v}from"./iframe-vYzePaRW.js";import{c as n}from"./utils-CDN07tui.js";import{B as i}from"./Button-Bvw_y_KB.js";import{F as j}from"./funnel-DTYTIikH.js";import{P as b}from"./plus-D-jPqI7z.js";import{D as w}from"./download-DO7YiRJe.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-DMGrdN83.js";import"./createLucideIcon-Ckxz52bH.js";const c=v.forwardRef(({className:p,title:u,description:l,actions:d,size:m="md",divider:f=!1,...g},x)=>{const h={sm:"text-lg",md:"text-2xl",lg:"text-3xl"},y={sm:"text-sm",md:"text-base",lg:"text-lg"};return e.jsx("div",{ref:x,className:n("flex flex-col gap-4 w-full",f&&"border-b border-border-primary pb-4 mb-4",p),...g,children:e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4",children:[e.jsxs("div",{className:"space-y-1 flex-1",children:[e.jsx("h2",{className:n("font-bold text-text-primary tracking-tight",h[m]),children:u}),l&&e.jsx("p",{className:n("text-text-secondary leading-relaxed",y[m]),children:l})]}),d&&e.jsx("div",{className:"flex items-center gap-2 flex-shrink-0 mt-1 sm:mt-0",children:d})]})})});c.displayName="SectionHeader";c.__docgenInfo={description:"",methods:[],displayName:"SectionHeader",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The main title of the section."},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional description or subtitle."},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional actions to display on the right side (e.g., Buttons)."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size of the header, affecting typography.
@default "md"`,defaultValue:{value:"'md'",computed:!1}},divider:{required:!1,tsType:{name:"boolean"},description:`Whether to show a divider line at the bottom.
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const k={title:"Layout/SectionHeader",component:c,tags:[],argTypes:{size:{control:"radio",options:["sm","md","lg"]},divider:{control:"boolean"}}},t={args:{title:"Account Settings",description:"Manage your account settings and preferences."}},a={args:{title:"Projects",description:"View and manage your ongoing projects.",actions:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"outline",leftIcon:e.jsx(j,{size:16}),children:"Filter"}),e.jsx(i,{variant:"primary",leftIcon:e.jsx(b,{size:16}),children:"New Project"})]})}},r={args:{title:"Notifications",description:"Choose what you want to be notified about.",divider:!0,actions:e.jsx(i,{variant:"ghost",children:"Mark all as read"})}},o={args:{size:"sm",title:"Personal Information",description:"Update your personal details here.",divider:!0}},s={args:{size:"lg",title:"Dashboard",description:"Welcome back! Here is an overview of your activity.",actions:e.jsx(i,{variant:"secondary",leftIcon:e.jsx(w,{size:16}),children:"Export Report"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Account Settings',
    description: 'Manage your account settings and preferences.'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Projects',
    description: 'View and manage your ongoing projects.',
    actions: <>
                <Button variant="outline" leftIcon={<Filter size={16} />}>Filter</Button>
                <Button variant="primary" leftIcon={<Plus size={16} />}>New Project</Button>
            </>
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Notifications',
    description: 'Choose what you want to be notified about.',
    divider: true,
    actions: <Button variant="ghost">Mark all as read</Button>
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    title: 'Personal Information',
    description: 'Update your personal details here.',
    divider: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    title: 'Dashboard',
    description: 'Welcome back! Here is an overview of your activity.',
    actions: <Button variant="secondary" leftIcon={<Download size={16} />}>
                Export Report
            </Button>
  }
}`,...s.parameters?.docs?.source}}};const F=["Default","WithActions","WithDivider","Small","Large"];export{t as Default,s as Large,o as Small,a as WithActions,r as WithDivider,F as __namedExportsOrder,k as default};
