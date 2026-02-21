import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-CGazvlvx.js";import{S as o}from"./SystemBootPreloader-DDx50Sx8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-eQ3fKV.js";import"./proxy-BNOm_ZMq.js";import"./resolve-elements-juiWZL7b.js";const f={title:"Cyberpunk/04 - Global Aesthetics/SystemBootPreloader",component:o,parameters:{layout:"fullscreen"}},e={render:()=>{const[s,a]=n.useState(!1);return r.jsx("div",{className:"h-screen w-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex items-center justify-center flex-col",children:s?r.jsx("div",{className:"text-blue-500 text-3xl font-sans tracking-tight animate-pulse border-2 border-blue-500 p-8 bg-black/50",children:"SYSTEM ONLINE. (Refresh frame to see boot again)"}):r.jsx(o,{onComplete:()=>a(!0)})})}},t={decorators:[],render:()=>r.jsx(o,{onComplete:()=>{}})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [completed, setCompleted] = useState(false);
    return <div className="h-screen w-full bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 flex items-center justify-center flex-col">
        {completed ? <div className="text-blue-500 text-3xl font-sans tracking-tight animate-pulse border-2 border-blue-500 p-8 bg-black/50">
             SYSTEM ONLINE. (Refresh frame to see boot again)
           </div> : <SystemBootPreloader onComplete={() => setCompleted(true)} />}
      </div>;
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [],
  render: () => <SystemBootPreloader onComplete={() => {}} />
}`,...t.parameters?.docs?.source}}};const x=["Default","Bare"];export{t as Bare,e as Default,x as __namedExportsOrder,f as default};
