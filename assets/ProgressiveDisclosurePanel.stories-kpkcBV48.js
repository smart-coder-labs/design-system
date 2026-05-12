import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as f}from"./iframe-CSCYuKHF.js";import{L as h}from"./list-filter-CIn-_p15.js";import{m as s}from"./proxy-DgdbOAE3.js";import{C as d}from"./chevron-down-C9ur_GT2.js";import{A as c}from"./index-CnMaGjx1.js";import{W as y}from"./wallet-B8M4hQGs.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BvoP2Q-9.js";import"./resolve-elements-BeIloL1I.js";const l=({summary:m,details:p,deepDive:n,title:i,defaultExpanded:x=!1})=>{const[a,u]=f.useState(x?1:0),o=t=>{u(a===t?t-1:t)};return e.jsxs("div",{className:"bg-surface-primary rounded-2xl border border-border-primary shadow-sm overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"p-5 cursor-pointer hover:bg-background-secondary transition-colors flex flex-col",onClick:()=>o(1),children:[i&&e.jsxs("div",{className:"text-sm font-medium text-text-tertiary mb-3 uppercase tracking-wider flex items-center gap-2",children:[e.jsx(h,{size:14}),i]}),e.jsxs("div",{className:"flex justify-between items-center gap-4",children:[e.jsx("div",{className:"flex-1",children:m}),e.jsx(s.div,{animate:{rotate:a>=1?180:0},transition:{type:"spring",stiffness:200,damping:20},className:"w-8 h-8 rounded-full bg-background-secondary flex items-center justify-center shrink-0",children:e.jsx(d,{size:18,className:"text-text-tertiary"})})]})]}),e.jsx(c,{initial:!1,children:a>=1&&e.jsx(s.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"border-t border-border-primary bg-background-secondary/50",children:e.jsxs("div",{className:"p-5",children:[p,n&&e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsxs("button",{onClick:t=>{t.stopPropagation(),o(2)},className:"text-xs font-medium text-accent-blue hover:text-accent-blue-hover py-1.5 px-3 rounded-md hover:bg-accent-blue-tint transition-colors flex items-center gap-1.5",children:[a===2?"Ocultar datos técnicos":"Ver datos técnicos en crudo",e.jsx(s.div,{animate:{rotate:a===2?180:0},children:e.jsx(d,{size:12})})]})})]})})}),e.jsx(c,{initial:!1,children:a===2&&n&&e.jsx(s.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"border-t border-border-primary bg-zinc-100 dark:bg-zinc-900 text-text-primary",children:e.jsx("div",{className:"p-5 text-sm font-mono overflow-x-auto",children:n})})})]})};l.__docgenInfo={description:"",methods:[],displayName:"ProgressiveDisclosurePanel",props:{summary:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The primary summarized information"},details:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The detailed information revealed upon expanding"},deepDive:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Granular information revealed on a second expansion level if needed"},title:{required:!1,tsType:{name:"string"},description:"Optional title for the panel"},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const z={title:"Fintech/ProgressiveDisclosurePanel",component:l,parameters:{layout:"padded"},tags:["autodocs"]},r={args:{title:"Detalle de Operación",defaultExpanded:!1,summary:e.jsxs("div",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("div",{className:"w-12 h-12 bg-background-secondary rounded-full flex items-center justify-center",children:e.jsx(y,{className:"text-gray-500"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-text-primary",children:"Pago a Amazon"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Ayer, 14:30 hrs"})]}),e.jsxs("div",{className:"ml-auto text-right",children:[e.jsx("p",{className:"font-bold text-text-primary",children:"-$1,250.00 MXN"}),e.jsx("p",{className:"text-xs text-green-500",children:"Completado"})]})]}),details:e.jsxs("div",{className:"space-y-4 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex justify-between border-b border-border-primary pb-2",children:[e.jsx("span",{className:"text-gray-500",children:"Tarjeta Usada"}),e.jsx("span",{className:"font-medium",children:"Débito Física **** 4589"})]}),e.jsxs("div",{className:"flex justify-between border-b border-border-primary pb-2",children:[e.jsx("span",{className:"text-gray-500",children:"Categoría"}),e.jsx("span",{className:"font-medium",children:"Compras en Línea"})]}),e.jsxs("div",{className:"flex justify-between border-b border-border-primary pb-2",children:[e.jsx("span",{className:"text-gray-500",children:"No. de Autorización"}),e.jsx("span",{className:"font-medium",children:"0928347A"})]})]}),deepDive:e.jsx("pre",{children:`{
  "id": "tx_2M8c...",
  "status": "cleared",
  "cleared_at": "2023-11-14T14:32:00Z",
  "merchant": {
    "name": "Amazon MX",
    "mcc": "5399",
    "city": "CDMX",
    "country": "MX"
  },
  "network": "Visa",
  "auth_method": "emv_contactless"
}`})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Detalle de Operación',
    defaultExpanded: false,
    summary: <div className="flex items-center gap-4 cursor-pointer">
        <div className="w-12 h-12 bg-background-secondary rounded-full flex items-center justify-center">
          <Wallet className="text-gray-500" />
        </div>
        <div>
          <h4 className="font-bold text-text-primary">Pago a Amazon</h4>
          <p className="text-sm text-gray-500">Ayer, 14:30 hrs</p>
        </div>
        <div className="ml-auto text-right">
          <p className="font-bold text-text-primary">-$1,250.00 MXN</p>
          <p className="text-xs text-green-500">Completado</p>
        </div>
      </div>,
    details: <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
        <div className="flex justify-between border-b border-border-primary pb-2">
          <span className="text-gray-500">Tarjeta Usada</span>
          <span className="font-medium">Débito Física **** 4589</span>
        </div>
        <div className="flex justify-between border-b border-border-primary pb-2">
          <span className="text-gray-500">Categoría</span>
          <span className="font-medium">Compras en Línea</span>
        </div>
        <div className="flex justify-between border-b border-border-primary pb-2">
          <span className="text-gray-500">No. de Autorización</span>
          <span className="font-medium">0928347A</span>
        </div>
      </div>,
    deepDive: <pre>
{\`{
  "id": "tx_2M8c...",
  "status": "cleared",
  "cleared_at": "2023-11-14T14:32:00Z",
  "merchant": {
    "name": "Amazon MX",
    "mcc": "5399",
    "city": "CDMX",
    "country": "MX"
  },
  "network": "Visa",
  "auth_method": "emv_contactless"
}\`}
      </pre>
  }
}`,...r.parameters?.docs?.source}}};const A=["TransactionDetails"];export{r as TransactionDetails,A as __namedExportsOrder,z as default};
