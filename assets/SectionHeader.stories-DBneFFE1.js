import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as n}from"./SectionHeader-BXN7Cu2J.js";import{B as i}from"./Button-C6s9DX-s.js";import{F as c}from"./funnel-HT5GQMQI.js";import{P as d}from"./plus-XsOHkvm9.js";import{D as l}from"./download-BlPFDcw4.js";import"./iframe-FxOJXbvx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./proxy-PznluMrK.js";import"./createLucideIcon-DJ7P2U_s.js";const S={title:"Layout/SectionHeader",component:n,tags:[],argTypes:{size:{control:"radio",options:["sm","md","lg"]},divider:{control:"boolean"}}},t={args:{title:"Account Settings",description:"Manage your account settings and preferences."}},r={args:{title:"Projects",description:"View and manage your ongoing projects.",actions:e.jsxs(e.Fragment,{children:[e.jsx(i,{variant:"outline",leftIcon:e.jsx(c,{size:16}),children:"Filter"}),e.jsx(i,{variant:"primary",leftIcon:e.jsx(d,{size:16}),children:"New Project"})]})}},o={args:{title:"Notifications",description:"Choose what you want to be notified about.",divider:!0,actions:e.jsx(i,{variant:"ghost",children:"Mark all as read"})}},a={args:{size:"sm",title:"Personal Information",description:"Update your personal details here.",divider:!0}},s={args:{size:"lg",title:"Dashboard",description:"Welcome back! Here is an overview of your activity.",actions:e.jsx(i,{variant:"secondary",leftIcon:e.jsx(l,{size:16}),children:"Export Report"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Account Settings',
    description: 'Manage your account settings and preferences.'
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Projects',
    description: 'View and manage your ongoing projects.',
    actions: <>
                <Button variant="outline" leftIcon={<Filter size={16} />}>Filter</Button>
                <Button variant="primary" leftIcon={<Plus size={16} />}>New Project</Button>
            </>
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Notifications',
    description: 'Choose what you want to be notified about.',
    divider: true,
    actions: <Button variant="ghost">Mark all as read</Button>
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    title: 'Personal Information',
    description: 'Update your personal details here.',
    divider: true
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    title: 'Dashboard',
    description: 'Welcome back! Here is an overview of your activity.',
    actions: <Button variant="secondary" leftIcon={<Download size={16} />}>
                Export Report
            </Button>
  }
}`,...s.parameters?.docs?.source}}};const z=["Default","WithActions","WithDivider","Small","Large"];export{t as Default,s as Large,a as Small,r as WithActions,o as WithDivider,z as __namedExportsOrder,S as default};
