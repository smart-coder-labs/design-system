import{j as o}from"./jsx-runtime-u17CrQMm.js";import{S as n}from"./Switch-Bs_BY_J8.js";import{r as d}from"./iframe-CGazvlvx.js";import"./proxy-BNOm_ZMq.js";import"./resolve-elements-juiWZL7b.js";import"./preload-helper-PPVm8Dsz.js";const u={title:"Forms/Switch",component:n,tags:[],argTypes:{size:{control:"radio",options:["sm","md","lg"]},disabled:{control:"boolean"}}},e={render:t=>{const[a,c]=d.useState(!1);return o.jsx(n,{...t,checked:a,onCheckedChange:c})},args:{label:"Enable notifications"}},r={render:t=>{const[a,c]=d.useState(!1);return o.jsx(n,{...t,checked:a,onCheckedChange:c})},args:{label:"Dark Mode",description:"Toggle between light and dark theme"}},s={args:{label:"Disabled Switch",disabled:!0,checked:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onCheckedChange={setChecked} />;
  },
  args: {
    label: 'Enable notifications'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [checked, setChecked] = useState(false);
    return <Switch {...args} checked={checked} onCheckedChange={setChecked} />;
  },
  args: {
    label: 'Dark Mode',
    description: 'Toggle between light and dark theme'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Switch',
    disabled: true,
    checked: true
  }
}`,...s.parameters?.docs?.source}}};const k=["Default","WithDescription","Disabled"];export{e as Default,s as Disabled,r as WithDescription,k as __namedExportsOrder,u as default};
