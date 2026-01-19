import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as l}from"./utils-CDN07tui.js";import{R as f}from"./ResizablePanel-ctSkJern.js";import"./iframe-Cb93e_Z8.js";import"./preload-helper-PPVm8Dsz.js";const a=({left:r,right:d,initialLeftSize:t="320px",minLeftSize:n=200,maxLeftSize:o=600,className:c,style:m})=>e.jsxs("div",{className:l("relative flex h-full w-full bg-background","rounded-xl shadow-lg border border-border-primary overflow-hidden","md:flex-row flex-col",c),style:m,children:[e.jsx(f,{initialSize:t,minSize:n,maxSize:o,direction:"horizontal",className:l("bg-surface-secondary/80 backdrop-blur-xl border-r border-border-primary","transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]","flex-shrink-0"),style:{minHeight:0},children:e.jsx("div",{className:"h-full w-full p-6 flex flex-col gap-4",children:r})}),e.jsx("div",{className:"flex-1 h-full w-full bg-background p-6 flex flex-col gap-4",children:d})]});a.__docgenInfo={description:`SplitView (macOS Finder style):
- Left panel resizable
- Right panel fills remaining space
- Glass effect, subtle border, shadow
- Responsive, mobile stacks panels`,methods:[],displayName:"SplitView",props:{left:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Left panel content (Finder sidebar, etc)"},right:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Main panel content (Finder files, etc)"},initialLeftSize:{required:!1,tsType:{name:"string"},description:"Initial width of left panel (px or %)",defaultValue:{value:"'320px'",computed:!1}},minLeftSize:{required:!1,tsType:{name:"number"},description:"Minimum width of left panel (px)",defaultValue:{value:"200",computed:!1}},maxLeftSize:{required:!1,tsType:{name:"number"},description:"Maximum width of left panel (px)",defaultValue:{value:"600",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for root"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Optional style for root"}}};const b={title:"Layout/SplitView",component:a,tags:[],parameters:{layout:"fullscreen"}},i={render:()=>e.jsx("div",{style:{height:480,background:"#f5f5f7",padding:32},children:e.jsx(a,{left:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"Sidebar"}),e.jsxs("ul",{className:"flex flex-col gap-2 text-sm",children:[e.jsx("li",{className:"font-medium text-accent",children:"Favorites"}),e.jsx("li",{children:"Documents"}),e.jsx("li",{children:"Downloads"}),e.jsx("li",{children:"Pictures"}),e.jsx("li",{children:"Music"}),e.jsx("li",{children:"AirDrop"})]})]}),right:e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"font-semibold text-lg mb-2",children:"Files"}),e.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[e.jsx("div",{className:"bg-surface-secondary rounded-lg p-4 shadow-sm",children:"File 1"}),e.jsx("div",{className:"bg-surface-secondary rounded-lg p-4 shadow-sm",children:"File 2"}),e.jsx("div",{className:"bg-surface-secondary rounded-lg p-4 shadow-sm",children:"File 3"}),e.jsx("div",{className:"bg-surface-secondary rounded-lg p-4 shadow-sm",children:"File 4"}),e.jsx("div",{className:"bg-surface-secondary rounded-lg p-4 shadow-sm",children:"File 5"}),e.jsx("div",{className:"bg-surface-secondary rounded-lg p-4 shadow-sm",children:"File 6"})]})]}),initialLeftSize:"320px",minLeftSize:180,maxLeftSize:500})})},s={render:()=>e.jsx("div",{style:{height:340,background:"#f5f5f7",padding:16},children:e.jsx(a,{left:e.jsx("div",{children:"Panel Izquierdo"}),right:e.jsx("div",{children:"Panel Derecho"}),initialLeftSize:"40%",minLeftSize:120,maxLeftSize:400})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 480,
    background: '#f5f5f7',
    padding: 32
  }}>
      <SplitView left={<>
            <h3 className="font-semibold text-lg mb-2">Sidebar</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li className="font-medium text-accent">Favorites</li>
              <li>Documents</li>
              <li>Downloads</li>
              <li>Pictures</li>
              <li>Music</li>
              <li>AirDrop</li>
            </ul>
          </>} right={<>
            <h3 className="font-semibold text-lg mb-2">Files</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-surface-secondary rounded-lg p-4 shadow-sm">File 1</div>
              <div className="bg-surface-secondary rounded-lg p-4 shadow-sm">File 2</div>
              <div className="bg-surface-secondary rounded-lg p-4 shadow-sm">File 3</div>
              <div className="bg-surface-secondary rounded-lg p-4 shadow-sm">File 4</div>
              <div className="bg-surface-secondary rounded-lg p-4 shadow-sm">File 5</div>
              <div className="bg-surface-secondary rounded-lg p-4 shadow-sm">File 6</div>
            </div>
          </>} initialLeftSize="320px" minLeftSize={180} maxLeftSize={500} />
    </div>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 340,
    background: '#f5f5f7',
    padding: 16
  }}>
      <SplitView left={<div>Panel Izquierdo</div>} right={<div>Panel Derecho</div>} initialLeftSize="40%" minLeftSize={120} maxLeftSize={400} />
    </div>
}`,...s.parameters?.docs?.source}}};const v=["FinderStyle","Responsive"];export{i as FinderStyle,s as Responsive,v as __namedExportsOrder,b as default};
