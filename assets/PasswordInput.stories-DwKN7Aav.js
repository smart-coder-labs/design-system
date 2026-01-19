import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as t}from"./PasswordInput-ikjBsmHB.js";import{r as m}from"./iframe-B3ue83QT.js";import"./utils-CDN07tui.js";import"./eye-off-Cm4ZEqEI.js";import"./createLucideIcon-DEqxIg5F.js";import"./eye-Cjfw9jX-.js";import"./proxy-f4HTbMBa.js";import"./check-DcafJKeN.js";import"./x-CBv38M9q.js";import"./preload-helper-PPVm8Dsz.js";const P={title:"Forms/PasswordInput",component:t,tags:[],argTypes:{showStrengthMeter:{control:"boolean"},disabled:{control:"boolean"},error:{control:"text"},helperText:{control:"text"}}},o={render:r=>{const[s,a]=m.useState("");return e.jsx("div",{className:"max-w-sm",children:e.jsx(t,{...r,value:s,onChange:a})})},args:{label:"Password",placeholder:"Enter your password"}},l={render:r=>{const[s,a]=m.useState("");return e.jsx("div",{className:"max-w-sm",children:e.jsx(t,{...r,value:s,onChange:a,showStrengthMeter:!1})})},args:{label:"Simple Password Field"}},n={render:r=>{const[s,a]=m.useState("");return e.jsx("div",{className:"max-w-sm",children:e.jsx(t,{...r,value:s,onChange:a,strengthRequirements:[{regex:/.{12,}/,label:"At least 12 characters"},{regex:/[!@#$%^&*]/,label:"Contains a special symbol (!@#$%^&*)"},{regex:/[0-9]{2,}/,label:"Contains at least 2 numbers"}]})})},args:{label:"High Security Password"}},u={render:r=>{const[s,a]=m.useState("weak");return e.jsx("div",{className:"max-w-sm",children:e.jsx(t,{...r,value:s,onChange:a})})},args:{label:"Login",error:"Incorrect password"}},c={args:{label:"Disabled Input",disabled:!0,value:"password123"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div className="max-w-sm">
                <PasswordInput {...args} value={value} onChange={setValue} />
            </div>;
  },
  args: {
    label: 'Password',
    placeholder: 'Enter your password'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div className="max-w-sm">
                <PasswordInput {...args} value={value} onChange={setValue} showStrengthMeter={false} />
            </div>;
  },
  args: {
    label: 'Simple Password Field'
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div className="max-w-sm">
                <PasswordInput {...args} value={value} onChange={setValue} strengthRequirements={[{
        regex: /.{12,}/,
        label: 'At least 12 characters'
      }, {
        regex: /[!@#$%^&*]/,
        label: 'Contains a special symbol (!@#$%^&*)'
      }, {
        regex: /[0-9]{2,}/,
        label: 'Contains at least 2 numbers'
      }]} />
            </div>;
  },
  args: {
    label: 'High Security Password'
  }
}`,...n.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('weak');
    return <div className="max-w-sm">
                <PasswordInput {...args} value={value} onChange={setValue} />
            </div>;
  },
  args: {
    label: 'Login',
    error: 'Incorrect password'
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    disabled: true,
    value: 'password123'
  }
}`,...c.parameters?.docs?.source}}};const V=["Default","WithoutStrengthMeter","CustomRequirements","WithError","Disabled"];export{n as CustomRequirements,o as Default,c as Disabled,u as WithError,l as WithoutStrengthMeter,V as __namedExportsOrder,P as default};
