import{j as a}from"./jsx-runtime-u17CrQMm.js";import{L as o}from"./Label-BwNaakGx.js";import{I as t}from"./Input-DWo3NzoY.js";import"./Text-Dhy74_-M.js";import"./iframe-Dan5ncgG.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-DCTGQFKY.js";import"./resolve-elements-juiWZL7b.js";const h={title:"Typography/Label",component:o,parameters:{layout:"centered",docs:{description:{component:"A semantic wrapper around the Text component for form labels."}}},tags:[]},e={args:{children:"Email Address",htmlFor:"email"}},r={args:{children:"Password",htmlFor:"password",required:!0}},s={render:()=>a.jsxs("div",{className:"w-72",children:[a.jsx(o,{htmlFor:"username",required:!0,children:"Username"}),a.jsx(t,{id:"username",placeholder:"Enter username"})]})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Email Address',
    htmlFor: 'email'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Password',
    htmlFor: 'password',
    required: true
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-72">
            <Label htmlFor="username" required>Username</Label>
            <Input id="username" placeholder="Enter username" />
        </div>
}`,...s.parameters?.docs?.source}}};const g=["Default","Required","WithInput"];export{e as Default,r as Required,s as WithInput,g as __namedExportsOrder,h as default};
