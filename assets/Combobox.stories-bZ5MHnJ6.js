import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as t}from"./Combobox-BPsZuisB.js";import{R as u}from"./iframe-Dan5ncgG.js";import"./utils-CDN07tui.js";import"./chevrons-up-down-CZJVMvdU.js";import"./createLucideIcon-jCLSnv7o.js";import"./index-Q4GMJ2Et.js";import"./proxy-DCTGQFKY.js";import"./resolve-elements-juiWZL7b.js";import"./search-FUrsjGVy.js";import"./preload-helper-PPVm8Dsz.js";const S={title:"Forms/Combobox",component:t,tags:[],argTypes:{onChange:{action:"changed"}}},i=[{value:"next.js",label:"Next.js"},{value:"sveltekit",label:"SvelteKit"},{value:"nuxt.js",label:"Nuxt.js"},{value:"remix",label:"Remix"},{value:"astro",label:"Astro"},{value:"wordpress",label:"WordPress"},{value:"express.js",label:"Express.js"},{value:"nest.js",label:"Nest.js"}],o={render:s=>{const[a,r]=u.useState("");return e.jsx("div",{className:"w-[300px] p-4",children:e.jsx(t,{...s,items:i,value:a,onChange:r})})}},l={render:s=>{const[a,r]=u.useState("next.js");return e.jsx("div",{className:"w-[300px] p-4",children:e.jsx(t,{...s,items:i,value:a,onChange:r})})}},m={render:s=>e.jsx("div",{className:"w-[300px] p-4",children:e.jsx(t,{...s,items:i,disabled:!0})})},n={render:s=>{const[a,r]=u.useState("");return e.jsx("div",{className:"w-[300px] p-4",children:e.jsx(t,{...s,items:i,value:a,onChange:r,placeholder:"Select a framework...",searchPlaceholder:"Filter frameworks..."})})}},c={render:s=>{const[a,r]=u.useState("");return e.jsx("div",{className:"w-[300px] p-4",children:e.jsx(t,{...s,items:[],value:a,onChange:r,emptyMessage:"No frameworks found."})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState('');
    return <div className="w-[300px] p-4">
                <Combobox {...args} items={frameworks} value={value} onChange={setValue} />
            </div>;
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState('next.js');
    return <div className="w-[300px] p-4">
                <Combobox {...args} items={frameworks} value={value} onChange={setValue} />
            </div>;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <div className="w-[300px] p-4">
                <Combobox {...args} items={frameworks} disabled />
            </div>;
  }
}`,...m.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState('');
    return <div className="w-[300px] p-4">
                <Combobox {...args} items={frameworks} value={value} onChange={setValue} placeholder="Select a framework..." searchPlaceholder="Filter frameworks..." />
            </div>;
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState('');
    return <div className="w-[300px] p-4">
                <Combobox {...args} items={[]} value={value} onChange={setValue} emptyMessage="No frameworks found." />
            </div>;
  }
}`,...c.parameters?.docs?.source}}};const N=["Default","WithPreselection","Disabled","CustomPlaceholder","EmptyState"];export{n as CustomPlaceholder,o as Default,m as Disabled,c as EmptyState,l as WithPreselection,N as __namedExportsOrder,S as default};
