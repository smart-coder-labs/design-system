import{j as s}from"./jsx-runtime-u17CrQMm.js";import{S as c}from"./SearchInput-DfeOXMhE.js";import{r as l}from"./iframe-CGazvlvx.js";import"./utils-CDN07tui.js";import"./Spinner-Nh3MRrN9.js";import"./proxy-BNOm_ZMq.js";import"./resolve-elements-juiWZL7b.js";import"./Label-BwNaakGx.js";import"./Text-Dhy74_-M.js";import"./search-D6Ssf2h5.js";import"./createLucideIcon-BMKVoASg.js";import"./index-C-eQ3fKV.js";import"./x-bkzh2GWz.js";import"./preload-helper-PPVm8Dsz.js";const L={title:"Forms/SearchInput",component:c,tags:[],argTypes:{isLoading:{control:"boolean"},disabled:{control:"boolean"},placeholder:{control:"text"}}},e={render:o=>{const[t,n]=l.useState("");return s.jsx("div",{className:"max-w-sm",children:s.jsx(c,{...o,value:t,onChange:n,onSearch:i=>console.log("Searching for:",i)})})},args:{placeholder:"Search users..."}},r={render:o=>{const[t,n]=l.useState("Searching...");return s.jsx("div",{className:"max-w-sm",children:s.jsx(c,{...o,value:t,onChange:n,isLoading:!0})})},args:{placeholder:"Search..."}},a={args:{value:"Cannot search",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div className="max-w-sm">
                <SearchInput {...args} value={value} onChange={setValue} onSearch={val => console.log('Searching for:', val)} />
            </div>;
  },
  args: {
    placeholder: 'Search users...'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('Searching...');
    return <div className="max-w-sm">
                <SearchInput {...args} value={value} onChange={setValue} isLoading={true} />
            </div>;
  },
  args: {
    placeholder: 'Search...'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Cannot search',
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};const w=["Default","Loading","Disabled"];export{e as Default,a as Disabled,r as Loading,w as __namedExportsOrder,L as default};
