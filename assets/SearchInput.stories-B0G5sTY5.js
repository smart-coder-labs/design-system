import{j as s}from"./jsx-runtime-u17CrQMm.js";import{S as c}from"./SearchInput-Bx1uDiBM.js";import{r as l}from"./iframe-BMG7cCGY.js";import"./utils-CDN07tui.js";import"./Spinner-BPu6tEcb.js";import"./proxy-BFHmY9N3.js";import"./Label-BwNaakGx.js";import"./Text-Dhy74_-M.js";import"./search-Bhuei--_.js";import"./createLucideIcon-11Koirjv.js";import"./index-pZkA2wgP.js";import"./x-B0Jcz84x.js";import"./preload-helper-PPVm8Dsz.js";const V={title:"Forms/SearchInput",component:c,tags:[],argTypes:{isLoading:{control:"boolean"},disabled:{control:"boolean"},placeholder:{control:"text"}}},e={render:o=>{const[t,n]=l.useState("");return s.jsx("div",{className:"max-w-sm",children:s.jsx(c,{...o,value:t,onChange:n,onSearch:u=>console.log("Searching for:",u)})})},args:{placeholder:"Search users..."}},a={render:o=>{const[t,n]=l.useState("Searching...");return s.jsx("div",{className:"max-w-sm",children:s.jsx(c,{...o,value:t,onChange:n,isLoading:!0})})},args:{placeholder:"Search..."}},r={args:{value:"Cannot search",disabled:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div className="max-w-sm">
                <SearchInput {...args} value={value} onChange={setValue} onSearch={val => console.log('Searching for:', val)} />
            </div>;
  },
  args: {
    placeholder: 'Search users...'
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('Searching...');
    return <div className="max-w-sm">
                <SearchInput {...args} value={value} onChange={setValue} isLoading={true} />
            </div>;
  },
  args: {
    placeholder: 'Search...'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Cannot search',
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};const L=["Default","Loading","Disabled"];export{e as Default,r as Disabled,a as Loading,L as __namedExportsOrder,V as default};
