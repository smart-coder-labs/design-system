import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-ChONrTG_.js";import{L as u}from"./list-filter-Dw-F1F3Y.js";import{m as t}from"./proxy-CRCEyvcV.js";import{C as o}from"./chevron-down-V8tdpked.js";import{A as l}from"./index-DyeVvxBP.js";import{W as h}from"./wallet-MCcEVmR-.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-CdJ-Xkq_.js";import"./resolve-elements-juiWZL7b.js";const c=({summary:m,details:x,deepDive:n,title:i,defaultExpanded:p=!1})=>{const[a,g]=y.useState(p?1:0),d=r=>{g(a===r?r-1:r)};return e.jsxs("div",{className:"bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"p-5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex flex-col",onClick:()=>d(1),children:[i&&e.jsxs("div",{className:"text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider flex items-center gap-2",children:[e.jsx(u,{size:14}),i]}),e.jsxs("div",{className:"flex justify-between items-center gap-4",children:[e.jsx("div",{className:"flex-1",children:m}),e.jsx(t.div,{animate:{rotate:a>=1?180:0},transition:{type:"spring",stiffness:200,damping:20},className:"w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center shrink-0",children:e.jsx(o,{size:18,className:"text-gray-500 dark:text-gray-400"})})]})]}),e.jsx(l,{initial:!1,children:a>=1&&e.jsx(t.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"border-t border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800",children:e.jsxs("div",{className:"p-5",children:[x,n&&e.jsx("div",{className:"mt-4 flex justify-center",children:e.jsxs("button",{onClick:r=>{r.stopPropagation(),d(2)},className:"text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 py-1.5 px-3 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center gap-1.5",children:[a===2?"Ocultar datos técnicos":"Ver datos técnicos en crudo",e.jsx(t.div,{animate:{rotate:a===2?180:0},children:e.jsx(o,{size:12})})]})})]})})}),e.jsx(l,{initial:!1,children:a===2&&n&&e.jsx(t.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.3,ease:"easeInOut"},className:"border-t border-gray-100 dark:border-gray-800 bg-gray-900 dark:bg-black text-gray-300",children:e.jsx("div",{className:"p-5 text-sm font-mono overflow-x-auto",children:n})})})]})};c.__docgenInfo={description:"",methods:[],displayName:"ProgressiveDisclosurePanel",props:{summary:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The primary summarized information"},details:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The detailed information revealed upon expanding"},deepDive:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Granular information revealed on a second expansion level if needed"},title:{required:!1,tsType:{name:"string"},description:"Optional title for the panel"},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const A={title:"Fintech/ProgressiveDisclosurePanel",component:c,parameters:{layout:"padded"},tags:["autodocs"]},s={args:{title:"Detalle de Operación",defaultExpanded:!1,summary:e.jsxs("div",{className:"flex items-center gap-4 cursor-pointer",children:[e.jsx("div",{className:"w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center",children:e.jsx(h,{className:"text-gray-500"})}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-gray-900 dark:text-white",children:"Pago a Amazon"}),e.jsx("p",{className:"text-sm text-gray-500",children:"Ayer, 14:30 hrs"})]}),e.jsxs("div",{className:"ml-auto text-right",children:[e.jsx("p",{className:"font-bold text-gray-900 dark:text-white",children:"-$1,250.00 MXN"}),e.jsx("p",{className:"text-xs text-green-500",children:"Completado"})]})]}),details:e.jsxs("div",{className:"space-y-4 text-sm text-gray-700 dark:text-gray-300",children:[e.jsxs("div",{className:"flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2",children:[e.jsx("span",{className:"text-gray-500",children:"Tarjeta Usada"}),e.jsx("span",{className:"font-medium",children:"Débito Física **** 4589"})]}),e.jsxs("div",{className:"flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2",children:[e.jsx("span",{className:"text-gray-500",children:"Categoría"}),e.jsx("span",{className:"font-medium",children:"Compras en Línea"})]}),e.jsxs("div",{className:"flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2",children:[e.jsx("span",{className:"text-gray-500",children:"No. de Autorización"}),e.jsx("span",{className:"font-medium",children:"0928347A"})]})]}),deepDive:e.jsx("pre",{children:`{
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
}`})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Detalle de Operación',
    defaultExpanded: false,
    summary: <div className="flex items-center gap-4 cursor-pointer">
        <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
          <Wallet className="text-gray-500" />
        </div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">Pago a Amazon</h4>
          <p className="text-sm text-gray-500">Ayer, 14:30 hrs</p>
        </div>
        <div className="ml-auto text-right">
          <p className="font-bold text-gray-900 dark:text-white">-$1,250.00 MXN</p>
          <p className="text-xs text-green-500">Completado</p>
        </div>
      </div>,
    details: <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
        <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
          <span className="text-gray-500">Tarjeta Usada</span>
          <span className="font-medium">Débito Física **** 4589</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
          <span className="text-gray-500">Categoría</span>
          <span className="font-medium">Compras en Línea</span>
        </div>
        <div className="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
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
}`,...s.parameters?.docs?.source}}};const C=["TransactionDetails"];export{s as TransactionDetails,C as __namedExportsOrder,A as default};
