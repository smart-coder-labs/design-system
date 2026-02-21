import{I as t}from"./Input-CPkCia-y.js";import"./jsx-runtime-u17CrQMm.js";import"./iframe-CGazvlvx.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-BNOm_ZMq.js";import"./resolve-elements-juiWZL7b.js";const u={title:"Forms/Input",component:t,tags:[],argTypes:{inputSize:{control:"radio",options:["sm","md","lg"]},disabled:{control:"boolean"}}},e={args:{label:"Email",placeholder:"Enter your email",type:"email"}},r={args:{label:"Password",type:"password",error:"Password is required"}},a={args:{label:"Username",helperText:"Choose a unique username"}},s={args:{label:"Small Input",inputSize:"sm"}},o={args:{label:"Large Input",inputSize:"lg"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    type: 'email'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    error: 'Password is required'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    helperText: 'Choose a unique username'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Input',
    inputSize: 'sm'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Input',
    inputSize: 'lg'
  }
}`,...o.parameters?.docs?.source}}};const d=["Default","WithError","WithHelperText","Small","Large"];export{e as Default,o as Large,s as Small,r as WithError,a as WithHelperText,d as __namedExportsOrder,u as default};
