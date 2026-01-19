import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as m}from"./utils-CDN07tui.js";const t=({children:s,top:n=0,zIndex:c=20,className:d,style:l})=>e.jsx("div",{className:m("sticky","bg-surface-secondary/80 backdrop-blur-xl border border-border-primary shadow-sm","rounded-xl","px-4 py-2",d),style:{top:n,zIndex:c,...l},children:s});t.__docgenInfo={description:`StickyContainer: Apple/macOS style sticky surface
- Uses position: sticky
- Glass effect, border, shadow
- Top offset configurable
- Responsive, works in scrollable containers`,methods:[],displayName:"StickyContainer",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to render inside the sticky container"},top:{required:!1,tsType:{name:"number"},description:"Top offset in px (default: 0)",defaultValue:{value:"0",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"Z-index (default: 20)",defaultValue:{value:"20",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styles"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Optional style for custom CSS"}}};const f={title:"Layout/StickyContainer",component:t,tags:[],parameters:{layout:"fullscreen"}},a={render:()=>e.jsxs("div",{style:{height:480,overflowY:"auto",background:"#f5f5f7",padding:32},children:[e.jsx(t,{top:0,children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-semibold text-lg",children:"Sticky Header"}),e.jsx("span",{className:"text-sm text-text-secondary",children:"(scroll down)"})]})}),e.jsx("div",{style:{height:900},children:e.jsx("div",{className:"mt-8 text-sm text-text-secondary",children:"Contenido largo para probar el sticky..."})})]})},r={render:()=>e.jsxs("div",{style:{height:480,overflowY:"auto",background:"#f5f5f7",padding:32},children:[e.jsx("div",{style:{height:40}}),e.jsx(t,{top:40,children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"font-semibold text-lg",children:"Sticky con offset 40px"})})}),e.jsx("div",{style:{height:900},children:e.jsx("div",{className:"mt-8 text-sm text-text-secondary",children:"Contenido largo para probar el sticky con offset..."})})]})},o={name:"🛠️ Caso de Uso: Sticky Toolbar",render:()=>e.jsxs("div",{style:{height:520,overflowY:"auto",background:"#f5f5f7",padding:32},children:[e.jsx(t,{top:0,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("button",{className:"px-3 py-1 rounded bg-accent text-text-primary text-sm font-medium shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",children:"Save"}),e.jsx("button",{className:"px-3 py-1 rounded bg-surface text-text-primary text-sm font-medium border border-border-primary",children:"Cancel"}),e.jsx("span",{className:"ml-auto text-xs text-text-secondary",children:"Sticky Toolbar: permanece visible al hacer scroll"})]})}),e.jsx("div",{style:{height:900},children:e.jsx("div",{className:"mt-8 text-sm text-text-secondary",children:"Simulación de contenido editable largo..."})})]}),decorators:[s=>e.jsx("div",{className:"w-full max-w-2xl mx-auto",children:e.jsx(s,{})})]},i={name:"📑 Caso de Uso: Sticky Section Header",render:()=>e.jsxs("div",{style:{height:520,overflowY:"auto",background:"#f5f5f7",padding:32},children:[e.jsx(t,{top:0,children:e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"font-semibold text-lg",children:"Section: General Info"})})}),e.jsx("div",{style:{height:900},children:e.jsx("div",{className:"mt-8 text-sm text-text-secondary",children:"Contenido de la sección General Info..."})})]}),decorators:[s=>e.jsx("div",{className:"w-full max-w-xl mx-auto",children:e.jsx(s,{})})]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 480,
    overflowY: 'auto',
    background: '#f5f5f7',
    padding: 32
  }}>
      <StickyContainer top={0}>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Sticky Header</span>
          <span className="text-sm text-text-secondary">(scroll down)</span>
        </div>
      </StickyContainer>
      <div style={{
      height: 900
    }}>
        <div className="mt-8 text-sm text-text-secondary">Contenido largo para probar el sticky...</div>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 480,
    overflowY: 'auto',
    background: '#f5f5f7',
    padding: 32
  }}>
      <div style={{
      height: 40
    }} />
      <StickyContainer top={40}>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Sticky con offset 40px</span>
        </div>
      </StickyContainer>
      <div style={{
      height: 900
    }}>
        <div className="mt-8 text-sm text-text-secondary">Contenido largo para probar el sticky con offset...</div>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '🛠️ Caso de Uso: Sticky Toolbar',
  render: () => <div style={{
    height: 520,
    overflowY: 'auto',
    background: '#f5f5f7',
    padding: 32
  }}>
      <StickyContainer top={0}>
        <div className="flex items-center gap-3">
          <button className="px-3 py-1 rounded bg-accent text-text-primary text-sm font-medium shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">Save</button>
          <button className="px-3 py-1 rounded bg-surface text-text-primary text-sm font-medium border border-border-primary">Cancel</button>
          <span className="ml-auto text-xs text-text-secondary">Sticky Toolbar: permanece visible al hacer scroll</span>
        </div>
      </StickyContainer>
      <div style={{
      height: 900
    }}>
        <div className="mt-8 text-sm text-text-secondary">Simulación de contenido editable largo...</div>
      </div>
    </div>,
  decorators: [Story => <div className="w-full max-w-2xl mx-auto">
        <Story />
      </div>]
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '📑 Caso de Uso: Sticky Section Header',
  render: () => <div style={{
    height: 520,
    overflowY: 'auto',
    background: '#f5f5f7',
    padding: 32
  }}>
      <StickyContainer top={0}>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg">Section: General Info</span>
        </div>
      </StickyContainer>
      <div style={{
      height: 900
    }}>
        <div className="mt-8 text-sm text-text-secondary">Contenido de la sección General Info...</div>
      </div>
    </div>,
  decorators: [Story => <div className="w-full max-w-xl mx-auto">
        <Story />
      </div>]
}`,...i.parameters?.docs?.source}}};const u=["Default","CustomOffset","StickyToolbar","StickySectionHeader"];export{r as CustomOffset,a as Default,i as StickySectionHeader,o as StickyToolbar,u as __namedExportsOrder,f as default};
