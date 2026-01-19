import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as x}from"./iframe-B3ue83QT.js";import{C as y}from"./check-DcafJKeN.js";import{C as f}from"./copy-Dsg7rPgu.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DEqxIg5F.js";const a=({code:s,language:d="typescript",showLineNumbers:l=!1,className:p=""})=>{const[m,n]=x.useState(!1),u=()=>{navigator.clipboard.writeText(s),n(!0),setTimeout(()=>n(!1),2e3)};return e.jsxs("div",{className:`relative group rounded-xl overflow-hidden bg-background-secondary border border-border-primary ${p}`,children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-background-tertiary/50 border-b border-border-primary",children:[e.jsx("span",{className:"text-xs font-medium text-text-tertiary uppercase tracking-wider",children:d}),e.jsx("button",{onClick:u,className:"p-1.5 rounded-lg hover:bg-background-tertiary text-text-tertiary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20","aria-label":"Copy code",children:m?e.jsx(y,{className:"w-4 h-4 text-status-success"}):e.jsx(f,{className:"w-4 h-4"})})]}),e.jsx("div",{className:"p-4 overflow-x-auto",children:e.jsx("pre",{className:"font-mono text-sm text-text-primary leading-relaxed",children:e.jsx("code",{children:l?s.split(`
`).map((g,i)=>e.jsxs("div",{className:"table-row",children:[e.jsx("span",{className:"table-cell text-right pr-4 text-text-quaternary select-none w-8",children:i+1}),e.jsx("span",{className:"table-cell whitespace-pre",children:g||" "})]},i)):s})})})]})};a.displayName="CodeBlock";a.__docgenInfo={description:"",methods:[],displayName:"CodeBlock",props:{code:{required:!0,tsType:{name:"string"},description:""},language:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'typescript'",computed:!1}},showLineNumbers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const w={title:"Typography/CodeBlock",component:a,parameters:{layout:"centered",docs:{description:{component:"A component for displaying code snippets with syntax highlighting structure and copy functionality."}}},tags:[]},c=`import React from 'react';
import { Button } from './Button';

export const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>Click me</Button>
    </div>
  );
};`,r={args:{code:c,language:"tsx"}},t={args:{code:c,language:"tsx",showLineNumbers:!0}},o={args:{language:"json",code:JSON.stringify({name:"design-system",version:"1.0.0",description:"A premium design system",scripts:{test:"jest",build:"tsc",storybook:"storybook dev -p 6006"},dependencies:{react:"^18.2.0","framer-motion":"^10.16.4","lucide-react":"^0.292.0"}},null,2),showLineNumbers:!0},render:s=>e.jsx("div",{className:"w-[500px]",children:e.jsx(a,{...s})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    code: sampleCode,
    language: 'tsx'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    code: sampleCode,
    language: 'tsx',
    showLineNumbers: true
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    language: 'json',
    code: JSON.stringify({
      name: 'design-system',
      version: '1.0.0',
      description: 'A premium design system',
      scripts: {
        test: 'jest',
        build: 'tsc',
        storybook: 'storybook dev -p 6006'
      },
      dependencies: {
        react: '^18.2.0',
        'framer-motion': '^10.16.4',
        'lucide-react': '^0.292.0'
      }
    }, null, 2),
    showLineNumbers: true
  },
  render: args => <div className="w-[500px]">
            <CodeBlock {...args} />
        </div>
}`,...o.parameters?.docs?.source}}};const k=["Default","WithLineNumbers","LongCode"];export{r as Default,o as LongCode,t as WithLineNumbers,k as __namedExportsOrder,w as default};
