import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as b}from"./iframe-CGazvlvx.js";import{c as M}from"./utils-CDN07tui.js";import{M as v}from"./minus-BAByJQZj.js";import{S as z}from"./square-Cl1kdGPS.js";import{X as f}from"./x-bkzh2GWz.js";import{m as u}from"./proxy-BNOm_ZMq.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BMKVoASg.js";import"./resolve-elements-juiWZL7b.js";const n=b.forwardRef(({onClose:o,onMinimize:s,onMaximize:i,variant:y="macos",className:w,...g},h)=>y==="windows"?e.jsxs("div",{ref:h,className:M("flex items-center gap-1",w),...g,children:[s&&e.jsx("button",{onClick:s,className:"w-12 h-8 flex items-center justify-center hover:bg-surface-secondary transition-colors","aria-label":"Minimize",children:e.jsx(v,{className:"w-4 h-4 text-text-secondary"})}),i&&e.jsx("button",{onClick:i,className:"w-12 h-8 flex items-center justify-center hover:bg-surface-secondary transition-colors","aria-label":"Maximize",children:e.jsx(z,{className:"w-3.5 h-3.5 text-text-secondary"})}),o&&e.jsx("button",{onClick:o,className:"w-12 h-8 flex items-center justify-center hover:bg-status-error text-status-error transition-colors","aria-label":"Close",children:e.jsx(f,{className:"w-4 h-4"})})]}):e.jsxs("div",{ref:h,className:M("flex items-center gap-2",w),...g,children:[o&&e.jsx(u.button,{onClick:o,className:"w-3 h-3 rounded-full bg-status-error flex items-center justify-center group",whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":"Close",children:e.jsx(f,{className:"w-2 h-2 text-status-error opacity-0 group-hover:opacity-100 transition-opacity"})}),s&&e.jsx(u.button,{onClick:s,className:"w-3 h-3 rounded-full bg-status-warning flex items-center justify-center group",whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":"Minimize",children:e.jsx(v,{className:"w-2 h-2 text-status-warning opacity-0 group-hover:opacity-100 transition-opacity"})}),i&&e.jsx(u.button,{onClick:i,className:"w-3 h-3 rounded-full bg-status-success flex items-center justify-center group",whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":"Maximize",children:e.jsx(z,{className:"w-1.5 h-1.5 text-status-success opacity-0 group-hover:opacity-100 transition-opacity"})})]}));n.displayName="WindowControls";n.__docgenInfo={description:"",methods:[],displayName:"WindowControls",props:{onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMinimize:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMaximize:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'macos' | 'windows'",elements:[{name:"literal",value:"'macos'"},{name:"literal",value:"'windows'"}]},description:"",defaultValue:{value:"'macos'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"Components/WindowControls",component:n,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{variant:"macos",onClose:()=>console.log("Close"),onMinimize:()=>console.log("Minimize"),onMaximize:()=>console.log("Maximize")}},a={args:{variant:"windows",onClose:()=>console.log("Close"),onMinimize:()=>console.log("Minimize"),onMaximize:()=>console.log("Maximize")}},t={args:{variant:"macos",onClose:()=>console.log("Close")}},l={args:{variant:"windows",onClose:()=>console.log("Close")}},c={args:{variant:"macos",onMinimize:()=>console.log("Minimize"),onMaximize:()=>console.log("Maximize")}},m={args:{variant:"windows",onMinimize:()=>console.log("Minimize"),onMaximize:()=>console.log("Maximize")}},d={render:()=>{const o=()=>{confirm("Are you sure you want to close this window?")&&alert("Window closed")},s=()=>{alert("Window minimized")},i=()=>{alert("Window maximized")};return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"macOS Style"}),e.jsx(n,{variant:"macos",onClose:o,onMinimize:s,onMaximize:i})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium mb-4",children:"Windows Style"}),e.jsx(n,{variant:"windows",onClose:o,onMinimize:s,onMaximize:i})]})]})}},x={render:()=>e.jsxs("div",{className:"w-[600px] bg-surface-primary border border-border-primary rounded-xl overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-b border-border-primary",children:[e.jsx(n,{variant:"macos",onClose:()=>console.log("Close"),onMinimize:()=>console.log("Minimize"),onMaximize:()=>console.log("Maximize")}),e.jsx("h3",{className:"text-sm font-semibold text-text-primary",children:"Document.pdf"}),e.jsx("div",{className:"w-[52px]"})," "]}),e.jsx("div",{className:"p-8 text-center text-text-secondary",children:"Window content goes here"})]})},p={render:()=>e.jsxs("div",{className:"w-[600px] bg-surface-primary border border-border-primary rounded-xl overflow-hidden",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b border-border-primary",children:[e.jsx("h3",{className:"text-sm font-semibold text-text-primary",children:"Document.pdf"}),e.jsx(n,{variant:"windows",onClose:()=>console.log("Close"),onMinimize:()=>console.log("Minimize"),onMaximize:()=>console.log("Maximize")})]}),e.jsx("div",{className:"p-8 text-center text-text-secondary",children:"Window content goes here"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'macos',
    onClose: () => console.log('Close'),
    onMinimize: () => console.log('Minimize'),
    onMaximize: () => console.log('Maximize')
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'windows',
    onClose: () => console.log('Close'),
    onMinimize: () => console.log('Minimize'),
    onMaximize: () => console.log('Maximize')
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'macos',
    onClose: () => console.log('Close')
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'windows',
    onClose: () => console.log('Close')
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'macos',
    onMinimize: () => console.log('Minimize'),
    onMaximize: () => console.log('Maximize')
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'windows',
    onMinimize: () => console.log('Minimize'),
    onMaximize: () => console.log('Maximize')
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleClose = () => {
      if (confirm('Are you sure you want to close this window?')) {
        alert('Window closed');
      }
    };
    const handleMinimize = () => {
      alert('Window minimized');
    };
    const handleMaximize = () => {
      alert('Window maximized');
    };
    return <div className="space-y-8">
                <div>
                    <h3 className="text-sm font-medium mb-4">macOS Style</h3>
                    <WindowControls variant="macos" onClose={handleClose} onMinimize={handleMinimize} onMaximize={handleMaximize} />
                </div>
                <div>
                    <h3 className="text-sm font-medium mb-4">Windows Style</h3>
                    <WindowControls variant="windows" onClose={handleClose} onMinimize={handleMinimize} onMaximize={handleMaximize} />
                </div>
            </div>;
  }
}`,...d.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-[600px] bg-surface-primary border border-border-primary rounded-xl overflow-hidden">
                {/* macOS Window */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-border-primary">
                    <WindowControls variant="macos" onClose={() => console.log('Close')} onMinimize={() => console.log('Minimize')} onMaximize={() => console.log('Maximize')} />
                    <h3 className="text-sm font-semibold text-text-primary">Document.pdf</h3>
                    <div className="w-[52px]" /> {/* Spacer for centering */}
                </div>
                <div className="p-8 text-center text-text-secondary">
                    Window content goes here
                </div>
            </div>;
  }
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="w-[600px] bg-surface-primary border border-border-primary rounded-xl overflow-hidden">
                {/* Windows Window */}
                <div className="flex items-center justify-between px-4 py-2 border-b border-border-primary">
                    <h3 className="text-sm font-semibold text-text-primary">Document.pdf</h3>
                    <WindowControls variant="windows" onClose={() => console.log('Close')} onMinimize={() => console.log('Minimize')} onMaximize={() => console.log('Maximize')} />
                </div>
                <div className="p-8 text-center text-text-secondary">
                    Window content goes here
                </div>
            </div>;
  }
}`,...p.parameters?.docs?.source}}};const D=["MacOS","Windows","MacOSCloseOnly","WindowsCloseOnly","MacOSMinimizeMaximize","WindowsMinimizeMaximize","Interactive","InWindowHeader","WindowsWindowHeader"];export{x as InWindowHeader,d as Interactive,r as MacOS,t as MacOSCloseOnly,c as MacOSMinimizeMaximize,a as Windows,l as WindowsCloseOnly,m as WindowsMinimizeMaximize,p as WindowsWindowHeader,D as __namedExportsOrder,I as default};
