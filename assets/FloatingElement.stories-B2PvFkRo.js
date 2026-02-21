import{j as e}from"./jsx-runtime-u17CrQMm.js";import{F as a}from"./FloatingElement-Dm1lrkR_.js";import{S as n}from"./settings-F5-l3ViT.js";import{C as o}from"./cpu-CwubvihZ.js";import"./iframe-Dan5ncgG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./use-scroll-B4-l_STS.js";import"./proxy-DCTGQFKY.js";import"./resolve-elements-juiWZL7b.js";import"./use-transform-CqgZm8hS.js";import"./createLucideIcon-jCLSnv7o.js";const v={title:"Cyberpunk/FloatingElement",component:a,parameters:{layout:"fullscreen"}},t={decorators:[s=>e.jsxs("div",{className:"min-h-[300vh] bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 relative flex justify-center overflow-hidden",children:[e.jsx("div",{className:"fixed top-10 left-1/2 -translate-x-1/2 p-4 border border-zinc-200 dark:border-zinc-800 font-sans bg-black/50 backdrop-blur z-50 text-xl text-center",children:"Haz Scroll hacia abajo para ver cómo roza (scrubs) la rotación de los iconos mientras flotan:"}),e.jsx("div",{className:"absolute top-[80vh]",children:e.jsx(s,{})})]})],render:()=>e.jsxs("div",{className:"flex justify-center gap-32 items-center",children:[e.jsx(a,{rotationSpeed:1.5,className:"text-blue-500",children:e.jsx(n,{size:120,strokeWidth:1})}),e.jsx(a,{rotationSpeed:-.8,className:"text-zinc-500 mt-20",children:e.jsx(n,{size:200,strokeWidth:.5})}),e.jsx(a,{rotationSpeed:3,className:"text-zinc-900 dark:text-zinc-50 mt-10",children:e.jsx(o,{size:80,strokeWidth:1.5})})]})},r={decorators:[],args:{rotationSpeed:1,children:e.jsx("div",{className:"p-4 text-black border border-black bg-gray-200",children:"Bare Element"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="min-h-[300vh] bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 relative flex justify-center overflow-hidden">
        <div className="fixed top-10 left-1/2 -translate-x-1/2 p-4 border border-zinc-200 dark:border-zinc-800 font-sans bg-black/50 backdrop-blur z-50 text-xl text-center">
          Haz Scroll hacia abajo para ver cómo roza (scrubs) la rotación de los iconos mientras flotan:
        </div>
        <div className="absolute top-[80vh]">
          <Story />
        </div>
      </div>],
  render: () => <div className="flex justify-center gap-32 items-center">
      <FloatingElement rotationSpeed={1.5} className="text-blue-500">
        <Settings size={120} strokeWidth={1} />
      </FloatingElement>
      
      <FloatingElement rotationSpeed={-0.8} className="text-zinc-500 mt-20">
        <Settings size={200} strokeWidth={0.5} />
      </FloatingElement>

      <FloatingElement rotationSpeed={3} className="text-zinc-900 dark:text-zinc-50 mt-10">
        <Cpu size={80} strokeWidth={1.5} />
      </FloatingElement>
    </div>
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: [],
  args: {
    rotationSpeed: 1,
    children: <div className="p-4 text-black border border-black bg-gray-200">Bare Element</div>
  }
}`,...r.parameters?.docs?.source}}};const f=["EngineScrubbing","Bare"];export{r as Bare,t as EngineScrubbing,f as __namedExportsOrder,v as default};
