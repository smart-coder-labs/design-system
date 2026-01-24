import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-B9hmpDEG.js";import{c as m}from"./utils-CDN07tui.js";import{m as d}from"./proxy-Dckdfu8t.js";import{X as N}from"./x-BlxxFCad.js";import{M as j}from"./minus-K4AdBcyl.js";import{S as k}from"./square-CsH2a22R.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Ct5Zk_dD.js";const p=x.forwardRef(({title:l,onClose:t,onMinimize:h,onMaximize:g,showControls:f=!0,variant:a="default",className:y,children:v,...b},w)=>{const[n,u]=x.useState(!1),c={default:{frame:"bg-surface-elevated border-border-primary",titleBar:"bg-surface-secondary/50",title:"text-text-primary"},dark:{frame:"bg-gray-900 border-gray-800",titleBar:"bg-gray-800/50",title:"text-gray-100"}};return e.jsxs("div",{ref:w,className:m("rounded-xl border shadow-xl overflow-hidden",c[a].frame,y),...b,children:[e.jsxs("div",{className:m("flex items-center justify-between px-4 py-3 border-b backdrop-blur-sm",c[a].titleBar,a==="default"?"border-border-primary":"border-gray-800"),onMouseEnter:()=>u(!0),onMouseLeave:()=>u(!1),children:[f&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(d.button,{whileHover:{scale:1.1},whileTap:{scale:.95},onClick:t,className:"w-3 h-3 rounded-full bg-[#FF5F57] hover:bg-[#FF5F57]/80 flex items-center justify-center group transition-colors focus:outline-none","aria-label":"Close",children:n&&e.jsx(N,{className:"w-2 h-2 text-[#8B0000] opacity-0 group-hover:opacity-100 transition-opacity",strokeWidth:3})}),e.jsx(d.button,{whileHover:{scale:1.1},whileTap:{scale:.95},onClick:h,className:"w-3 h-3 rounded-full bg-[#FEBC2E] hover:bg-[#FEBC2E]/80 flex items-center justify-center group transition-colors focus:outline-none","aria-label":"Minimize",children:n&&e.jsx(j,{className:"w-2 h-2 text-[#8B6914] opacity-0 group-hover:opacity-100 transition-opacity",strokeWidth:3})}),e.jsx(d.button,{whileHover:{scale:1.1},whileTap:{scale:.95},onClick:g,className:"w-3 h-3 rounded-full bg-[#28C840] hover:bg-[#28C840]/80 flex items-center justify-center group transition-colors focus:outline-none","aria-label":"Maximize",children:n&&e.jsx(k,{className:"w-1.5 h-1.5 text-[#0F5323] opacity-0 group-hover:opacity-100 transition-opacity",strokeWidth:3})})]}),l&&e.jsx("div",{className:m("absolute left-1/2 -translate-x-1/2 text-sm font-medium",c[a].title),children:l}),e.jsx("div",{className:"w-[52px]"})]}),e.jsx("div",{className:"overflow-auto",children:v})]})});p.displayName="WindowFrame";p.__docgenInfo={description:"",methods:[],displayName:"WindowFrame",props:{title:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMinimize:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMaximize:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showControls:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'dark'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'default'",computed:!1}}}};const E={title:"Surfaces/WindowFrame",component:p,tags:[],argTypes:{variant:{control:"select",options:["default","dark"]},showControls:{control:"boolean"}}},r={args:{title:"Document.txt",onClose:()=>alert("Close clicked"),onMinimize:()=>alert("Minimize clicked"),onMaximize:()=>alert("Maximize clicked"),children:e.jsxs("div",{className:"p-6",children:[e.jsx("h2",{className:"text-xl font-bold mb-4 text-text-primary",children:"Welcome to macOS Window"}),e.jsx("p",{className:"text-text-secondary mb-4",children:"This window frame mimics the classic macOS window style with traffic light controls."}),e.jsx("p",{className:"text-text-secondary",children:"Hover over the control buttons to see the icons appear, just like in macOS."})]})}},s={args:{title:"Terminal",variant:"dark",onClose:()=>alert("Close clicked"),onMinimize:()=>alert("Minimize clicked"),onMaximize:()=>alert("Maximize clicked"),children:e.jsx("div",{className:"p-6 bg-gray-900",children:e.jsxs("div",{className:"font-mono text-green-400 space-y-2",children:[e.jsx("p",{children:"$ npm run dev"}),e.jsx("p",{className:"text-gray-500",children:"Starting development server..."}),e.jsx("p",{className:"text-gray-500",children:"Server running at http://localhost:3000"}),e.jsxs("p",{className:"flex",children:[e.jsx("span",{children:"$"}),e.jsx("span",{className:"animate-pulse ml-1",children:"_"})]})]})})}},o={args:{title:"Settings",showControls:!1,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h2",{className:"text-xl font-bold mb-4 text-text-primary",children:"Settings"}),e.jsx("p",{className:"text-text-secondary",children:"This window has no control buttons."})]})}},i={args:{title:"Long Document",onClose:()=>alert("Close clicked"),children:e.jsx("div",{className:"p-6 space-y-4",children:Array.from({length:20}).map((l,t)=>e.jsxs("p",{className:"text-text-secondary",children:["Paragraph ",t+1,": Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."]},t))})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Document.txt',
    onClose: () => alert('Close clicked'),
    onMinimize: () => alert('Minimize clicked'),
    onMaximize: () => alert('Maximize clicked'),
    children: <div className="p-6">
                <h2 className="text-xl font-bold mb-4 text-text-primary">Welcome to macOS Window</h2>
                <p className="text-text-secondary mb-4">
                    This window frame mimics the classic macOS window style with traffic light controls.
                </p>
                <p className="text-text-secondary">
                    Hover over the control buttons to see the icons appear, just like in macOS.
                </p>
            </div>
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Terminal',
    variant: 'dark',
    onClose: () => alert('Close clicked'),
    onMinimize: () => alert('Minimize clicked'),
    onMaximize: () => alert('Maximize clicked'),
    children: <div className="p-6 bg-gray-900">
                <div className="font-mono text-green-400 space-y-2">
                    <p>$ npm run dev</p>
                    <p className="text-gray-500">Starting development server...</p>
                    <p className="text-gray-500">Server running at http://localhost:3000</p>
                    <p className="flex">
                        <span>$</span>
                        <span className="animate-pulse ml-1">_</span>
                    </p>
                </div>
            </div>
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Settings',
    showControls: false,
    children: <div className="p-6">
                <h2 className="text-xl font-bold mb-4 text-text-primary">Settings</h2>
                <p className="text-text-secondary">
                    This window has no control buttons.
                </p>
            </div>
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Long Document',
    onClose: () => alert('Close clicked'),
    children: <div className="p-6 space-y-4">
                {Array.from({
        length: 20
      }).map((_, i) => <p key={i} className="text-text-secondary">
                        Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>)}
            </div>
  }
}`,...i.parameters?.docs?.source}}};const _=["Default","Dark","WithoutControls","LargeContent"];export{s as Dark,r as Default,i as LargeContent,o as WithoutControls,_ as __namedExportsOrder,E as default};
