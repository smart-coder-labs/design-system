import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as A}from"./iframe-B9hmpDEG.js";import{c}from"./utils-CDN07tui.js";import{m as _}from"./proxy-Dckdfu8t.js";import{A as le}from"./index-D16B27Jy.js";import{B as i}from"./Badge-C67hik30.js";import{U as G}from"./user-vLgOxJJS.js";import{M as W}from"./mail-t6NwiPei.js";import{P as q}from"./phone-mhzzIgCI.js";import{M as H}from"./map-pin-DAZ_tWJb.js";import{S as o}from"./server-eW4B9yeG.js";import{H as D}from"./hash-CXzrsbjt.js";import{P as V}from"./package-BYORkAc3.js";import{C as t}from"./calendar-Du7NghD0.js";import{C as O}from"./clock-C85Z1Q3W.js";import{C as E}from"./credit-card-CtCc-zIj.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Ct5Zk_dD.js";const d=A.forwardRef(({items:a,variant:r="default",size:m="md",columns:Y=1,hoverable:Z=!1,divider:X=!1,className:$,...J},Q)=>{const[ee,K]=A.useState(null),u={sm:{key:"text-xs",value:"text-sm",gap:"gap-1",padding:"p-3"},md:{key:"text-sm",value:"text-base",gap:"gap-1.5",padding:"p-4"},lg:{key:"text-base",value:"text-lg",gap:"gap-2",padding:"p-5"}},ae={default:"space-y-2",card:"bg-surface-primary border border-border-primary rounded-xl shadow-sm overflow-hidden",inline:"flex flex-wrap gap-6",grid:"grid gap-4"},se={1:"grid-cols-1",2:"grid-cols-1 md:grid-cols-2",3:"grid-cols-1 md:grid-cols-2 xl:grid-cols-3",4:"grid-cols-1 md:grid-cols-2 xl:grid-cols-4"},re=async(s,l)=>{try{await navigator.clipboard.writeText(s),K(l),setTimeout(()=>K(null),2e3)}catch(T){console.error("Failed to copy:",T)}},oe=_.div;return e.jsx(oe,{ref:Q,className:c(ae[r],r==="grid"&&se[Y],$),initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.22,ease:[.16,1,.3,1]},...J,children:a.map((s,l)=>{const T=_.div;return e.jsxs(T,{className:c("group",r==="inline"?"flex items-center gap-2":c("flex flex-col",u[m].gap,r==="card"&&u[m].padding),r==="card"&&X&&l!==a.length-1&&"border-b border-border-primary",Z&&"transition-colors hover:bg-surface-secondary/30 rounded-lg",s.copyable&&"cursor-pointer"),onClick:()=>{s.copyable&&typeof s.value=="string"&&re(s.value,l)},initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{duration:.2,delay:l*.03,ease:[.16,1,.3,1]},whileHover:s.copyable?{scale:1.01}:{},children:[e.jsxs("div",{className:c("flex items-center gap-2",r==="inline"?"":"mb-0.5"),children:[s.icon&&e.jsx("span",{className:"text-text-tertiary flex-shrink-0",children:s.icon}),e.jsxs("span",{className:c("font-medium text-text-secondary",u[m].key),children:[s.key,r==="inline"&&":"]})]}),e.jsxs("div",{className:"flex items-center gap-2 min-w-0 relative",children:[e.jsx("span",{className:c("font-semibold text-text-primary break-words",u[m].value,s.copyable&&"group-hover:text-accent-blue transition-colors"),children:s.value}),s.badge&&e.jsx("span",{className:"flex-shrink-0",children:s.badge}),s.copyable&&e.jsxs(e.Fragment,{children:[e.jsx("svg",{className:"w-4 h-4 text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"})}),e.jsx(le,{children:ee===l&&e.jsx(_.span,{initial:{opacity:0,y:10,scale:.8},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.8},transition:{duration:.2},className:"absolute -top-8 left-1/2 -translate-x-1/2 bg-accent-blue text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg z-50",children:"¡Copiado!"})})]})]})]},l)})})});d.displayName="KeyValueInfo";const L=A.forwardRef((a,r)=>e.jsx(d,{ref:r,...a,size:"sm"}));L.displayName="CompactKeyValueInfo";const F=A.forwardRef((a,r)=>e.jsx(d,{ref:r,...a,variant:"inline"}));F.displayName="InlineKeyValueInfo";d.__docgenInfo={description:"",methods:[],displayName:"KeyValueInfo",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    key: React.ReactNode;
    value: React.ReactNode;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    copyable?: boolean;
}`,signature:{properties:[{key:"key",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"badge",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"copyable",value:{name:"boolean",required:!1}}]}}],raw:"KeyValueItem[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'card' | 'inline' | 'grid'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'card'"},{name:"literal",value:"'inline'"},{name:"literal",value:"'grid'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:"",defaultValue:{value:"1",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},divider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};L.__docgenInfo={description:"",methods:[],displayName:"CompactKeyValueInfo",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'card' | 'inline' | 'grid'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'card'"},{name:"literal",value:"'inline'"},{name:"literal",value:"'grid'"}]},description:""}},composes:["Omit"]};F.__docgenInfo={description:"",methods:[],displayName:"InlineKeyValueInfo",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""}},composes:["Omit"]};const ze={title:"Data Display/KeyValueInfo",component:d,parameters:{layout:"centered",docs:{description:{component:"Un componente elegante para mostrar información clave-valor al estilo Apple. Ideal para perfiles, especificaciones, metadatos y datos estructurados."}}},tags:[],argTypes:{variant:{control:"select",options:["default","card","inline","grid"],description:"Variante visual del componente"},size:{control:"radio",options:["sm","md","lg"],description:"Tamaño del texto y espaciado"},columns:{control:"select",options:[1,2,3,4],description:'Número de columnas (solo para variant="grid")'},hoverable:{control:"boolean",description:"Efecto hover en los items"},divider:{control:"boolean",description:'Mostrar divisores entre items (variant="card")'}}},ie=[{key:"Nombre",value:"Ana García Martínez"},{key:"Email",value:"ana.garcia@example.com",copyable:!0},{key:"Teléfono",value:"+52 33 1234 5678",copyable:!0},{key:"Ciudad",value:"Guadalajara, Jalisco"}],B=[{key:"Nombre",value:"Ana García Martínez",icon:e.jsx(G,{className:"w-4 h-4"})},{key:"Email",value:"ana.garcia@example.com",icon:e.jsx(W,{className:"w-4 h-4"}),copyable:!0},{key:"Teléfono",value:"+52 33 1234 5678",icon:e.jsx(q,{className:"w-4 h-4"}),copyable:!0},{key:"Ciudad",value:"Guadalajara, Jalisco",icon:e.jsx(H,{className:"w-4 h-4"})}],ce=[{key:"Pedido",value:"#ORD-2025-1234",badge:e.jsx(i,{variant:"success",size:"sm",children:"Entregado"})},{key:"Fecha",value:"23 de noviembre, 2025"},{key:"Total",value:"$1,299.00 MXN"},{key:"Método de pago",value:"Visa •••• 4242"}],n=[{key:"CPU",value:"Apple M3 Max",icon:e.jsx(o,{className:"w-4 h-4"})},{key:"Memoria",value:"64 GB",icon:e.jsx(D,{className:"w-4 h-4"})},{key:"Almacenamiento",value:"1 TB SSD",icon:e.jsx(V,{className:"w-4 h-4"})},{key:"Sistema",value:"macOS Sonoma 14.1",icon:e.jsx(o,{className:"w-4 h-4"})}],te=[{key:"Creado",value:"Hace 3 días",icon:e.jsx(t,{className:"w-4 h-4"})},{key:"Modificado",value:"Hace 2 horas",icon:e.jsx(O,{className:"w-4 h-4"})},{key:"Autor",value:"Carlos Ramírez",icon:e.jsx(G,{className:"w-4 h-4"})},{key:"Estado",value:"Publicado",badge:e.jsx(i,{variant:"success",size:"sm",dot:!0,children:"Activo"})}],v={args:{items:ie,variant:"default",size:"md",columns:1,hoverable:!1,divider:!1}},p={args:{items:B,variant:"card",size:"md",columns:1,hoverable:!1,divider:!1},decorators:[a=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(a,{})})]},y={args:{items:ce,variant:"card",size:"md",columns:1,hoverable:!1,divider:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(a,{})})]},x={args:{items:B,variant:"card",size:"md",columns:1,hoverable:!0,divider:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(a,{})})]},g={args:{items:[{key:"Version",value:"3.2.1"},{key:"Build",value:"1234"},{key:"Environment",value:"Production"}],variant:"inline",size:"md",columns:1,hoverable:!1,divider:!1},decorators:[a=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{})})]},h={args:{items:n,variant:"grid",size:"md",columns:2,hoverable:!1,divider:!1},decorators:[a=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{})})]},f={args:{items:[{key:"CPU",value:"M3 Max",icon:e.jsx(o,{className:"w-4 h-4"})},{key:"RAM",value:"64 GB",icon:e.jsx(D,{className:"w-4 h-4"})},{key:"Storage",value:"1 TB",icon:e.jsx(V,{className:"w-4 h-4"})},{key:"GPU",value:"40 cores",icon:e.jsx(o,{className:"w-4 h-4"})},{key:"Display",value:'16.2"',icon:e.jsx(V,{className:"w-4 h-4"})},{key:"Weight",value:"2.15 kg",icon:e.jsx(D,{className:"w-4 h-4"})}],variant:"grid",size:"md",columns:3,hoverable:!1,divider:!1},decorators:[a=>e.jsx("div",{className:"w-full max-w-4xl",children:e.jsx(a,{})})]},w={args:{items:n,variant:"card",size:"sm",columns:1,hoverable:!1,divider:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(a,{})})]},b={args:{items:n,variant:"card",size:"md",columns:1,hoverable:!1,divider:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(a,{})})]},k={args:{items:n,variant:"card",size:"lg",columns:1,hoverable:!1,divider:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-xl",children:e.jsx(a,{})})]},N={name:"🎨 Con Iconos",args:{items:B,variant:"card",size:"md",columns:1,hoverable:!1,divider:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(a,{})})]},S={name:"🏷️ Con Badges",args:{items:te,variant:"card",size:"md",columns:1,hoverable:!1,divider:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(a,{})})]},j={name:"📋 Copiable",args:{items:[{key:"API Key",value:"sk_live_51H8xYZ...abc123",copyable:!0},{key:"Secret",value:"whsec_def456...xyz789",copyable:!0},{key:"Webhook URL",value:"https://api.example.com/webhooks",copyable:!0}],variant:"card",size:"md",columns:1,hoverable:!0,divider:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(a,{})})]},C={name:"👤 Caso de Uso: Perfil de Usuario",args:{items:[{key:"Nombre completo",value:"María López Hernández",icon:e.jsx(G,{className:"w-4 h-4"})},{key:"Correo electrónico",value:"maria.lopez@empresa.mx",icon:e.jsx(W,{className:"w-4 h-4"}),copyable:!0},{key:"Teléfono",value:"+52 55 9876 5432",icon:e.jsx(q,{className:"w-4 h-4"}),copyable:!0},{key:"Ubicación",value:"Ciudad de México, México",icon:e.jsx(H,{className:"w-4 h-4"})},{key:"Miembro desde",value:"15 de marzo, 2023",icon:e.jsx(t,{className:"w-4 h-4"})},{key:"Rol",value:"Desarrollador Senior",badge:e.jsx(i,{variant:"primary",size:"sm",children:"Premium"})}],variant:"card",size:"md",columns:1,hoverable:!0,divider:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(a,{})})]},z={name:"📦 Caso de Uso: Detalles de Pedido",args:{items:[{key:"Número de pedido",value:"#ORD-2025-1234",badge:e.jsx(i,{variant:"success",size:"sm",children:"Entregado"})},{key:"Fecha de pedido",value:"20 de noviembre, 2025",icon:e.jsx(t,{className:"w-4 h-4"})},{key:"Fecha de entrega",value:"23 de noviembre, 2025",icon:e.jsx(t,{className:"w-4 h-4"})},{key:"Total",value:"$2,499.00 MXN",icon:e.jsx(E,{className:"w-4 h-4"})},{key:"Método de pago",value:"Mastercard •••• 5678",icon:e.jsx(E,{className:"w-4 h-4"})},{key:"Dirección de envío",value:"Av. Reforma 123, CDMX",icon:e.jsx(H,{className:"w-4 h-4"})}],variant:"card",size:"md",columns:1,hoverable:!1,divider:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(a,{})})]},M={name:"💻 Caso de Uso: Especificaciones del Sistema",args:{items:[{key:"Procesador",value:"Apple M3 Max (16 núcleos)",icon:e.jsx(o,{className:"w-4 h-4"})},{key:"GPU",value:"Apple M3 Max GPU (40 núcleos)",icon:e.jsx(o,{className:"w-4 h-4"})},{key:"Memoria RAM",value:"64 GB Unificada",icon:e.jsx(D,{className:"w-4 h-4"})},{key:"Almacenamiento",value:"1 TB SSD NVMe",icon:e.jsx(V,{className:"w-4 h-4"})},{key:"Sistema operativo",value:"macOS Sonoma 14.1",icon:e.jsx(o,{className:"w-4 h-4"})},{key:"Arquitectura",value:"arm64 (Apple Silicon)",icon:e.jsx(o,{className:"w-4 h-4"})}],variant:"grid",size:"md",columns:2,hoverable:!1,divider:!1},decorators:[a=>e.jsx("div",{className:"w-full max-w-3xl",children:e.jsx(a,{})})]},P={name:"🔑 Caso de Uso: Credenciales API",args:{items:[{key:"API Key",value:"sk_live_51H8xYZ2eZvKYlo2C...abc123",copyable:!0,badge:e.jsx(i,{variant:"success",size:"sm",dot:!0,children:"Activa"})},{key:"Secret Key",value:"whsec_def456ghi789jkl012...xyz789",copyable:!0,badge:e.jsx(i,{variant:"warning",size:"sm",children:"Sensible"})},{key:"Webhook URL",value:"https://api.example.com/webhooks/stripe",copyable:!0},{key:"Environment",value:"Production",badge:e.jsx(i,{variant:"error",size:"sm",children:"Live"})},{key:"Creada",value:"15 de octubre, 2025",icon:e.jsx(t,{className:"w-4 h-4"})},{key:"Último uso",value:"Hace 5 minutos",icon:e.jsx(O,{className:"w-4 h-4"})}],variant:"card",size:"md",columns:1,hoverable:!0,divider:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{})})]},I={name:"📏 Versión Compacta",args:{items:n,variant:"card",size:"sm",columns:1,hoverable:!1,divider:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(a,{})})]},R={name:"➡️ Versión Inline",args:{items:[{key:"Version",value:"3.2.1"},{key:"Build",value:"1234"},{key:"Env",value:"Production"},{key:"Region",value:"us-west-2"}],variant:"inline",size:"md",columns:1,hoverable:!1,divider:!1},decorators:[a=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(a,{})})]},U={name:"🎨 Playground",args:{items:B,variant:"card",size:"md",columns:1,hoverable:!0,divider:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(a,{})})]};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleUserData,
    variant: 'default',
    size: 'md',
    columns: 1,
    hoverable: false,
    divider: false
  }
}`,...v.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleUserDataWithIcons,
    variant: 'card',
    size: 'md',
    columns: 1,
    hoverable: false,
    divider: false
  },
  decorators: [Story => <div className="w-full max-w-lg">
                <Story />
            </div>]
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleOrderData,
    variant: 'card',
    size: 'md',
    columns: 1,
    hoverable: false,
    divider: true
  },
  decorators: [Story => <div className="w-full max-w-lg">
                <Story />
            </div>]
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleUserDataWithIcons,
    variant: 'card',
    size: 'md',
    columns: 1,
    hoverable: true,
    divider: true
  },
  decorators: [Story => <div className="w-full max-w-lg">
                <Story />
            </div>]
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'Version',
      value: '3.2.1'
    }, {
      key: 'Build',
      value: '1234'
    }, {
      key: 'Environment',
      value: 'Production'
    }],
    variant: 'inline',
    size: 'md',
    columns: 1,
    hoverable: false,
    divider: false
  },
  decorators: [Story => <div className="w-full max-w-2xl">
                <Story />
            </div>]
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleSystemInfo,
    variant: 'grid',
    size: 'md',
    columns: 2,
    hoverable: false,
    divider: false
  },
  decorators: [Story => <div className="w-full max-w-2xl">
                <Story />
            </div>]
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      key: 'CPU',
      value: 'M3 Max',
      icon: <Server className="w-4 h-4" />
    }, {
      key: 'RAM',
      value: '64 GB',
      icon: <Hash className="w-4 h-4" />
    }, {
      key: 'Storage',
      value: '1 TB',
      icon: <Package className="w-4 h-4" />
    }, {
      key: 'GPU',
      value: '40 cores',
      icon: <Server className="w-4 h-4" />
    }, {
      key: 'Display',
      value: '16.2"',
      icon: <Package className="w-4 h-4" />
    }, {
      key: 'Weight',
      value: '2.15 kg',
      icon: <Hash className="w-4 h-4" />
    }],
    variant: 'grid',
    size: 'md',
    columns: 3,
    hoverable: false,
    divider: false
  },
  decorators: [Story => <div className="w-full max-w-4xl">
                <Story />
            </div>]
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleSystemInfo,
    variant: 'card',
    size: 'sm',
    columns: 1,
    hoverable: false,
    divider: true
  },
  decorators: [Story => <div className="w-full max-w-md">
                <Story />
            </div>]
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleSystemInfo,
    variant: 'card',
    size: 'md',
    columns: 1,
    hoverable: false,
    divider: true
  },
  decorators: [Story => <div className="w-full max-w-lg">
                <Story />
            </div>]
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleSystemInfo,
    variant: 'card',
    size: 'lg',
    columns: 1,
    hoverable: false,
    divider: true
  },
  decorators: [Story => <div className="w-full max-w-xl">
                <Story />
            </div>]
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '🎨 Con Iconos',
  args: {
    items: sampleUserDataWithIcons,
    variant: 'card',
    size: 'md',
    columns: 1,
    hoverable: false,
    divider: true
  },
  decorators: [Story => <div className="w-full max-w-lg">
                <Story />
            </div>]
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '🏷️ Con Badges',
  args: {
    items: sampleMetadata,
    variant: 'card',
    size: 'md',
    columns: 1,
    hoverable: false,
    divider: true
  },
  decorators: [Story => <div className="w-full max-w-lg">
                <Story />
            </div>]
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '📋 Copiable',
  args: {
    items: [{
      key: 'API Key',
      value: 'sk_live_51H8xYZ...abc123',
      copyable: true
    }, {
      key: 'Secret',
      value: 'whsec_def456...xyz789',
      copyable: true
    }, {
      key: 'Webhook URL',
      value: 'https://api.example.com/webhooks',
      copyable: true
    }],
    variant: 'card',
    size: 'md',
    columns: 1,
    hoverable: true,
    divider: true
  },
  decorators: [Story => <div className="w-full max-w-lg">
                <Story />
            </div>]
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '👤 Caso de Uso: Perfil de Usuario',
  args: {
    items: [{
      key: 'Nombre completo',
      value: 'María López Hernández',
      icon: <User className="w-4 h-4" />
    }, {
      key: 'Correo electrónico',
      value: 'maria.lopez@empresa.mx',
      icon: <Mail className="w-4 h-4" />,
      copyable: true
    }, {
      key: 'Teléfono',
      value: '+52 55 9876 5432',
      icon: <Phone className="w-4 h-4" />,
      copyable: true
    }, {
      key: 'Ubicación',
      value: 'Ciudad de México, México',
      icon: <MapPin className="w-4 h-4" />
    }, {
      key: 'Miembro desde',
      value: '15 de marzo, 2023',
      icon: <Calendar className="w-4 h-4" />
    }, {
      key: 'Rol',
      value: 'Desarrollador Senior',
      badge: <Badge variant="primary" size="sm">Premium</Badge>
    }],
    variant: 'card',
    size: 'md',
    columns: 1,
    hoverable: true,
    divider: true
  },
  decorators: [Story => <div className="w-full max-w-lg">
                <Story />
            </div>]
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '📦 Caso de Uso: Detalles de Pedido',
  args: {
    items: [{
      key: 'Número de pedido',
      value: '#ORD-2025-1234',
      badge: <Badge variant="success" size="sm">Entregado</Badge>
    }, {
      key: 'Fecha de pedido',
      value: '20 de noviembre, 2025',
      icon: <Calendar className="w-4 h-4" />
    }, {
      key: 'Fecha de entrega',
      value: '23 de noviembre, 2025',
      icon: <Calendar className="w-4 h-4" />
    }, {
      key: 'Total',
      value: '$2,499.00 MXN',
      icon: <CreditCard className="w-4 h-4" />
    }, {
      key: 'Método de pago',
      value: 'Mastercard •••• 5678',
      icon: <CreditCard className="w-4 h-4" />
    }, {
      key: 'Dirección de envío',
      value: 'Av. Reforma 123, CDMX',
      icon: <MapPin className="w-4 h-4" />
    }],
    variant: 'card',
    size: 'md',
    columns: 1,
    hoverable: false,
    divider: true
  },
  decorators: [Story => <div className="w-full max-w-lg">
                <Story />
            </div>]
}`,...z.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '💻 Caso de Uso: Especificaciones del Sistema',
  args: {
    items: [{
      key: 'Procesador',
      value: 'Apple M3 Max (16 núcleos)',
      icon: <Server className="w-4 h-4" />
    }, {
      key: 'GPU',
      value: 'Apple M3 Max GPU (40 núcleos)',
      icon: <Server className="w-4 h-4" />
    }, {
      key: 'Memoria RAM',
      value: '64 GB Unificada',
      icon: <Hash className="w-4 h-4" />
    }, {
      key: 'Almacenamiento',
      value: '1 TB SSD NVMe',
      icon: <Package className="w-4 h-4" />
    }, {
      key: 'Sistema operativo',
      value: 'macOS Sonoma 14.1',
      icon: <Server className="w-4 h-4" />
    }, {
      key: 'Arquitectura',
      value: 'arm64 (Apple Silicon)',
      icon: <Server className="w-4 h-4" />
    }],
    variant: 'grid',
    size: 'md',
    columns: 2,
    hoverable: false,
    divider: false
  },
  decorators: [Story => <div className="w-full max-w-3xl">
                <Story />
            </div>]
}`,...M.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '🔑 Caso de Uso: Credenciales API',
  args: {
    items: [{
      key: 'API Key',
      value: 'sk_live_51H8xYZ2eZvKYlo2C...abc123',
      copyable: true,
      badge: <Badge variant="success" size="sm" dot>Activa</Badge>
    }, {
      key: 'Secret Key',
      value: 'whsec_def456ghi789jkl012...xyz789',
      copyable: true,
      badge: <Badge variant="warning" size="sm">Sensible</Badge>
    }, {
      key: 'Webhook URL',
      value: 'https://api.example.com/webhooks/stripe',
      copyable: true
    }, {
      key: 'Environment',
      value: 'Production',
      badge: <Badge variant="error" size="sm">Live</Badge>
    }, {
      key: 'Creada',
      value: '15 de octubre, 2025',
      icon: <Calendar className="w-4 h-4" />
    }, {
      key: 'Último uso',
      value: 'Hace 5 minutos',
      icon: <Clock className="w-4 h-4" />
    }],
    variant: 'card',
    size: 'md',
    columns: 1,
    hoverable: true,
    divider: true
  },
  decorators: [Story => <div className="w-full max-w-2xl">
                <Story />
            </div>]
}`,...P.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '📏 Versión Compacta',
  args: {
    items: sampleSystemInfo,
    variant: 'card',
    size: 'sm',
    columns: 1,
    hoverable: false,
    divider: true
  },
  decorators: [Story => <div className="w-full max-w-md">
                <Story />
            </div>]
}`,...I.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '➡️ Versión Inline',
  args: {
    items: [{
      key: 'Version',
      value: '3.2.1'
    }, {
      key: 'Build',
      value: '1234'
    }, {
      key: 'Env',
      value: 'Production'
    }, {
      key: 'Region',
      value: 'us-west-2'
    }],
    variant: 'inline',
    size: 'md',
    columns: 1,
    hoverable: false,
    divider: false
  },
  decorators: [Story => <div className="w-full max-w-2xl">
                <Story />
            </div>]
}`,...R.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: '🎨 Playground',
  args: {
    items: sampleUserDataWithIcons,
    variant: 'card',
    size: 'md',
    columns: 1,
    hoverable: true,
    divider: true
  },
  decorators: [Story => <div className="w-full max-w-lg">
                <Story />
            </div>]
}`,...U.parameters?.docs?.source}}};const Me=["Default","Card","CardWithDividers","CardHoverable","Inline","Grid2Columns","Grid3Columns","SmallSize","MediumSize","LargeSize","WithIcons","WithBadges","Copyable","UserProfile","OrderDetails","SystemSpecifications","APICredentials","CompactVersion","InlineVersion","Playground"];export{P as APICredentials,p as Card,x as CardHoverable,y as CardWithDividers,I as CompactVersion,j as Copyable,v as Default,h as Grid2Columns,f as Grid3Columns,g as Inline,R as InlineVersion,k as LargeSize,b as MediumSize,z as OrderDetails,U as Playground,w as SmallSize,M as SystemSpecifications,C as UserProfile,S as WithBadges,N as WithIcons,Me as __namedExportsOrder,ze as default};
