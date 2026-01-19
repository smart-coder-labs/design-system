import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as x}from"./utils-CDN07tui.js";const t=({children:a,columns:s=3,gap:c=16,className:p,style:h})=>{const m=Array.from({length:s},()=>[]);return a.forEach((i,l)=>{m[l%s].push(i)}),e.jsx("div",{className:x("w-full flex",p),style:{gap:c,...h},role:"list",children:m.map((i,l)=>e.jsx("div",{className:"flex-1 flex flex-col",style:{gap:c},role:"listitem",children:i},l))})};t.__docgenInfo={description:`MasonryLayout: Apple-minimal masonry grid
- Responsive, fluid columns
- Animaciones suaves al reordenar
- Accesible y configurable`,methods:[],displayName:"MasonryLayout",props:{children:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:"Array of React nodes to render as items"},columns:{required:!1,tsType:{name:"number"},description:"Number of columns (default: 3)",defaultValue:{value:"3",computed:!1}},gap:{required:!1,tsType:{name:"number"},description:"Gap between items (default: 16px)",defaultValue:{value:"16",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for root"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Optional style for root"}}};const y={title:"Layout/MasonryLayout",component:t,tags:[],parameters:{layout:"fullscreen"}},u=[{id:1,height:120,title:"Card 1",color:"bg-accent/80"},{id:2,height:180,title:"Card 2",color:"bg-surface-secondary"},{id:3,height:100,title:"Card 3",color:"bg-surface-secondary"},{id:4,height:160,title:"Card 4",color:"bg-accent/80"},{id:5,height:140,title:"Card 5",color:"bg-surface-secondary"},{id:6,height:200,title:"Card 6",color:"bg-accent/80"},{id:7,height:110,title:"Card 7",color:"bg-surface-secondary"},{id:8,height:170,title:"Card 8",color:"bg-accent/80"},{id:9,height:130,title:"Card 9",color:"bg-surface-secondary"}],r={render:()=>e.jsx("div",{style:{background:"#f5f5f7",padding:32,minHeight:600},children:e.jsx(t,{columns:3,gap:24,children:u.map(a=>e.jsx("div",{className:`rounded-xl shadow-md ${a.color} p-4 text-center text-sm font-medium`,style:{height:a.height},children:a.title},a.id))})})},o={render:()=>e.jsx("div",{style:{background:"#f5f5f7",padding:32,minHeight:600},children:e.jsx(t,{columns:2,gap:16,children:u.map(a=>e.jsx("div",{className:`rounded-xl shadow-md ${a.color} p-4 text-center text-sm font-medium`,style:{height:a.height},children:a.title},a.id))})})},d={name:"🖼️ Caso de Uso: Galería de Imágenes",render:()=>e.jsx("div",{style:{background:"#f5f5f7",padding:32,minHeight:600},children:e.jsx(t,{columns:4,gap:20,children:[...Array(12)].map((a,s)=>e.jsxs("div",{className:"rounded-xl shadow bg-surface-secondary overflow-hidden flex flex-col",style:{height:100+s%4*40},children:[e.jsx("img",{src:`https://picsum.photos/seed/${s}/400/300`,alt:`Imagen ${s+1}`,className:"w-full h-32 object-cover"}),e.jsxs("div",{className:"p-2 text-xs text-text-secondary",children:["Imagen ",s+1]})]},s))})}),decorators:[a=>e.jsx("div",{className:"w-full max-w-5xl mx-auto",children:e.jsx(a,{})})]},n={name:"🛒 Caso de Uso: Cards de Producto",render:()=>e.jsx("div",{style:{background:"#f5f5f7",padding:32,minHeight:600},children:e.jsx(t,{columns:3,gap:24,children:[...Array(9)].map((a,s)=>e.jsxs("div",{className:"rounded-xl shadow bg-white border border-border-primary p-4 flex flex-col items-center gap-2 overflow-hidden",style:{height:120+s%3*40},children:[e.jsx("img",{src:`https://dummyimage.com/80x80/eee/aaa&text=P${s+1}`,alt:`Producto ${s+1}`,className:"w-16 h-16 object-cover rounded-lg"}),e.jsxs("div",{className:"font-semibold text-sm text-center break-words w-full",children:["Producto ",s+1]}),e.jsxs("div",{className:"text-xs text-text-secondary text-center break-words w-full",children:["$ ",(100+s*10).toFixed(2)]})]},s))})}),decorators:[a=>e.jsx("div",{className:"w-full max-w-4xl mx-auto",children:e.jsx(a,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#f5f5f7',
    padding: 32,
    minHeight: 600
  }}>
      <MasonryLayout columns={3} gap={24}>
        {sampleItems.map(item => <div key={item.id} className={\`rounded-xl shadow-md \${item.color} p-4 text-center text-sm font-medium\`} style={{
        height: item.height
      }}>
            {item.title}
          </div>)}
      </MasonryLayout>
    </div>
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: '#f5f5f7',
    padding: 32,
    minHeight: 600
  }}>
      <MasonryLayout columns={2} gap={16}>
        {sampleItems.map(item => <div key={item.id} className={\`rounded-xl shadow-md \${item.color} p-4 text-center text-sm font-medium\`} style={{
        height: item.height
      }}>
            {item.title}
          </div>)}
      </MasonryLayout>
    </div>
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '🖼️ Caso de Uso: Galería de Imágenes',
  render: () => <div style={{
    background: '#f5f5f7',
    padding: 32,
    minHeight: 600
  }}>
      <MasonryLayout columns={4} gap={20}>
        {[...Array(12)].map((_, i) => <div key={i} className="rounded-xl shadow bg-surface-secondary overflow-hidden flex flex-col" style={{
        height: 100 + i % 4 * 40
      }}>
            <img src={\`https://picsum.photos/seed/\${i}/400/300\`} alt={\`Imagen \${i + 1}\`} className="w-full h-32 object-cover" />
            <div className="p-2 text-xs text-text-secondary">Imagen {i + 1}</div>
          </div>)}
      </MasonryLayout>
    </div>,
  decorators: [Story => <div className="w-full max-w-5xl mx-auto">
        <Story />
      </div>]
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '🛒 Caso de Uso: Cards de Producto',
  render: () => <div style={{
    background: '#f5f5f7',
    padding: 32,
    minHeight: 600
  }}>
      <MasonryLayout columns={3} gap={24}>
        {[...Array(9)].map((_, i) => <div key={i} className="rounded-xl shadow bg-white border border-border-primary p-4 flex flex-col items-center gap-2 overflow-hidden" style={{
        height: 120 + i % 3 * 40
      }}>
            <img src={\`https://dummyimage.com/80x80/eee/aaa&text=P\${i + 1}\`} alt={\`Producto \${i + 1}\`} className="w-16 h-16 object-cover rounded-lg" />
            <div className="font-semibold text-sm text-center break-words w-full">Producto {i + 1}</div>
            <div className="text-xs text-text-secondary text-center break-words w-full">$ {(100 + i * 10).toFixed(2)}</div>
          </div>)}
      </MasonryLayout>
    </div>,
  decorators: [Story => <div className="w-full max-w-4xl mx-auto">
        <Story />
      </div>]
}`,...n.parameters?.docs?.source}}};const v=["Default","Responsive","GalleryUseCase","ProductCardsUseCase"];export{r as Default,d as GalleryUseCase,n as ProductCardsUseCase,o as Responsive,v as __namedExportsOrder,y as default};
