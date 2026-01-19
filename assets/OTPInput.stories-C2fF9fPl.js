import{j as t}from"./jsx-runtime-u17CrQMm.js";import{O as c}from"./OTPInput-DA8e-xrt.js";import{r as p}from"./iframe-BQuKaBw1.js";import"./utils-CDN07tui.js";import"./proxy-DCsQVuEn.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Forms/OTPInput",component:c,tags:[],argTypes:{length:{control:{type:"number",min:4,max:8}},groupSize:{control:{type:"number",min:0,max:8}},disabled:{control:"boolean"},error:{control:"boolean"}}},s={render:r=>{const[e,a]=p.useState("");return t.jsxs("div",{className:"flex flex-col items-center gap-4",children:[t.jsx(c,{...r,value:e,onChange:a,onComplete:g=>alert(`Completed: ${g}`)}),t.jsxs("p",{className:"text-sm text-text-tertiary",children:["Current value: ",e]})]})},args:{length:6,groupSize:3}},n={render:r=>{const[e,a]=p.useState("");return t.jsx(c,{...r,value:e,onChange:a})},args:{length:4,groupSize:2}},o={render:r=>{const[e,a]=p.useState("");return t.jsx(c,{...r,value:e,onChange:a})},args:{length:6,groupSize:0}},u={args:{length:6,error:!0,value:"123"}},l={args:{length:6,disabled:!0,value:"123456"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div className="flex flex-col items-center gap-4">
                <OTPInput {...args} value={value} onChange={setValue} onComplete={val => alert(\`Completed: \${val}\`)} />
                <p className="text-sm text-text-tertiary">
                    Current value: {value}
                </p>
            </div>;
  },
  args: {
    length: 6,
    groupSize: 3
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <OTPInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    length: 4,
    groupSize: 2
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <OTPInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    length: 6,
    groupSize: 0 // Disable grouping
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    error: true,
    value: '123'
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    disabled: true,
    value: '123456'
  }
}`,...l.parameters?.docs?.source}}};const C=["Default","FourDigits","NoSeparator","WithError","Disabled"];export{s as Default,l as Disabled,n as FourDigits,o as NoSeparator,u as WithError,C as __namedExportsOrder,S as default};
