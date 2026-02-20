import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as r}from"./ResizablePanel-CSi3Nasy.js";import"./iframe-B-5hg53G.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";const o={title:"Layout/ResizablePanel",component:r,tags:[],parameters:{layout:"fullscreen"}},i={render:()=>e.jsxs("div",{style:{display:"flex",height:400,background:"#f7f7f9",padding:32},children:[e.jsx(r,{initialSize:"350px",minSize:200,maxSize:600,direction:"horizontal",children:e.jsxs("div",{style:{padding:24},children:[e.jsx("h3",{children:"Resizable Panel (Horizontal)"}),e.jsx("p",{children:"Arrastra el borde derecho para cambiar el tamaño."})]})}),e.jsxs("div",{style:{flex:1,padding:24},children:[e.jsx("h3",{children:"Contenido Fijo"}),e.jsx("p",{children:"Este panel no se redimensiona."})]})]})},a={render:()=>e.jsxs("div",{style:{height:500,width:600,background:"#f7f7f9",padding:32},children:[e.jsx(r,{initialSize:"250px",minSize:100,maxSize:400,direction:"vertical",children:e.jsxs("div",{style:{padding:24},children:[e.jsx("h3",{children:"Resizable Panel (Vertical)"}),e.jsx("p",{children:"Arrastra el borde inferior para cambiar el tamaño."})]})}),e.jsxs("div",{style:{height:200,background:"#fff",padding:24},children:[e.jsx("h3",{children:"Panel Inferior"}),e.jsx("p",{children:"Este panel no se redimensiona."})]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    height: 400,
    background: '#f7f7f9',
    padding: 32
  }}>
      <ResizablePanel initialSize="350px" minSize={200} maxSize={600} direction="horizontal">
        <div style={{
        padding: 24
      }}>
          <h3>Resizable Panel (Horizontal)</h3>
          <p>Arrastra el borde derecho para cambiar el tamaño.</p>
        </div>
      </ResizablePanel>
      <div style={{
      flex: 1,
      padding: 24
    }}>
        <h3>Contenido Fijo</h3>
        <p>Este panel no se redimensiona.</p>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 500,
    width: 600,
    background: '#f7f7f9',
    padding: 32
  }}>
      <ResizablePanel initialSize="250px" minSize={100} maxSize={400} direction="vertical">
        <div style={{
        padding: 24
      }}>
          <h3>Resizable Panel (Vertical)</h3>
          <p>Arrastra el borde inferior para cambiar el tamaño.</p>
        </div>
      </ResizablePanel>
      <div style={{
      height: 200,
      background: '#fff',
      padding: 24
    }}>
        <h3>Panel Inferior</h3>
        <p>Este panel no se redimensiona.</p>
      </div>
    </div>
}`,...a.parameters?.docs?.source}}};const c=["Horizontal","Vertical"];export{i as Horizontal,a as Vertical,c as __namedExportsOrder,o as default};
