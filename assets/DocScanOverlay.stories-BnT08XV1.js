import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ns4lj-Vt.js";import{t as r}from"./jsx-runtime-BK76Wfr-.js";import{l as i,s as a,t as o}from"./es-Bab7Eu6H.js";import{Xn as s,Zn as c,i as l,ot as u,r as d,t as f,ur as p}from"./lucide-react-DM_OnbjU.js";var m,h,g,_=e((()=>{m=t(n()),o(),f(),h=r(),g=({scanState:e=`scanning`,instructionMessage:t=`Alinea tu identificación dentro del recuadro`,documentType:n=`ID`,onCapture:r,onRetake:o,onCancel:f})=>{let[g,_]=(0,m.useState)(e),[v,y]=(0,m.useState)(!1);(0,m.useEffect)(()=>{_(e)},[e]);let b=()=>{_(`detecting`),setTimeout(()=>{y(!0),setTimeout(()=>y(!1),150),setTimeout(()=>{_(Math.random()>.2?`success`:`error`),r&&r()},1500)},1e3)},x=n===`SELFIE`?`w-[55%] aspect-[3/4] rounded-full`:`w-[85%] aspect-[16/10] rounded-xl`;return(0,h.jsxs)(`div`,{className:`relative w-full max-w-sm mx-auto overflow-hidden bg-gray-950 rounded-3xl aspect-[9/16] flex flex-col items-center justify-between shadow-2xl ring-1 ring-white/10`,style:{colorScheme:`dark`},children:[(0,h.jsx)(`div`,{className:`absolute inset-0 bg-gray-900 pointer-events-none opacity-50`}),v&&(0,h.jsx)(`div`,{className:`absolute inset-0 bg-white z-50 animate-out fade-out duration-300 pointer-events-none`}),(0,h.jsxs)(`div`,{className:`relative z-10 w-full p-4 flex justify-between items-center text-white`,children:[(0,h.jsx)(`button`,{onClick:f,className:`p-2 bg-black/40 rounded-full hover:bg-black/60 transition`,children:(0,h.jsx)(l,{size:20})}),(0,h.jsxs)(`div`,{className:`flex bg-black/40 rounded-full px-3 py-1 gap-2 border border-white/10 items-center`,children:[(0,h.jsx)(d,{size:14,className:`text-yellow-400`}),(0,h.jsx)(`span`,{className:`text-xs font-medium`,children:`Auto-captura`})]}),(0,h.jsx)(`div`,{className:`w-9`}),` `]}),(0,h.jsxs)(`div`,{className:`relative z-10 w-full flex flex-col items-center justify-center flex-1 gap-4`,children:[(0,h.jsx)(`div`,{className:`px-6 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center min-w-44 text-center`,children:(0,h.jsx)(i,{mode:`wait`,children:g===`idle`||g===`scanning`?(0,h.jsx)(a.p,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:`text-sm font-medium text-white`,children:t},`scan`):g===`detecting`?(0,h.jsxs)(a.p,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:`text-sm font-medium text-blue-400 flex items-center gap-2`,children:[(0,h.jsx)(u,{size:14,className:`animate-spin`}),` Procesando bordes...`]},`detect`):g===`success`?(0,h.jsxs)(a.p,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:`text-sm font-medium text-green-400 flex items-center gap-2`,children:[(0,h.jsx)(s,{size:14}),` ¡Escaneo Perfecto!`]},`success`):(0,h.jsxs)(a.p,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:`text-sm font-medium text-red-400 flex items-center gap-2`,children:[(0,h.jsx)(c,{size:14}),` Imagen borrosa, intenta de nuevo`]},`error`)})}),(0,h.jsx)(`div`,{className:`relative`,children:(0,h.jsxs)(a.div,{animate:{borderColor:g===`success`?`rgba(74, 222, 128, 0.8)`:g===`error`?`rgba(248, 113, 113, 0.8)`:g===`detecting`?`rgba(96, 165, 250, 0.8)`:`rgba(255, 255, 255, 0.4)`},className:`border-2 ${x} relative`,style:{boxShadow:`0 0 0 9999px rgba(0,0,0,0.6)`},children:[[`top-left`,`top-right`,`bottom-left`,`bottom-right`].map(e=>(0,h.jsx)(`div`,{className:`absolute w-8 h-8 ${e===`top-left`?`border-t-4 border-l-4 rounded-tl-xl`:e===`top-right`?`border-t-4 border-r-4 rounded-tr-xl`:e===`bottom-left`?`border-b-4 border-l-4 rounded-bl-xl`:`border-b-4 border-r-4 rounded-br-xl`} ${e===`top-left`?`-top-1 -left-1`:e===`top-right`?`-top-1 -right-1`:e===`bottom-left`?`-bottom-1 -left-1`:`-bottom-1 -right-1`} ${g===`success`?`border-green-400`:g===`error`?`border-red-400`:g===`detecting`?`border-blue-400`:`border-white`}`},e)),(g===`scanning`||g===`detecting`)&&(0,h.jsx)(a.div,{initial:{top:`0%`},animate:{top:`100%`},transition:{duration:2,repeat:1/0,ease:`linear`,repeatType:`reverse`},className:`absolute left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.6)] z-20`})]})})]}),(0,h.jsx)(`div`,{className:`relative z-10 w-full p-5 flex justify-center items-center bg-gradient-to-t from-black via-black/80 to-transparent`,children:g===`idle`||g===`scanning`?(0,h.jsx)(`button`,{onClick:b,className:`w-16 h-16 rounded-full border-4 border-white flex items-center justify-center shrink-0 active:scale-95 transition`,children:(0,h.jsx)(`div`,{className:`w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden`,children:(0,h.jsx)(p,{className:`text-black`,size:24})})}):g===`success`?(0,h.jsxs)(`button`,{className:`w-full py-4 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition`,children:[`Continuar `,(0,h.jsx)(s,{size:18})]}):g===`error`?(0,h.jsxs)(`button`,{onClick:()=>_(`idle`),className:`w-full py-4 bg-red-500 hover:bg-red-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition`,children:[`Reintentar `,(0,h.jsx)(u,{size:18})]}):(0,h.jsx)(`div`,{className:`w-16 h-16 rounded-full border-4 border-gray-600 animate-pulse`})})]})},g.__docgenInfo={description:``,methods:[],displayName:`DocScanOverlay`,props:{scanState:{required:!1,tsType:{name:`union`,raw:`'idle' | 'scanning' | 'detecting' | 'success' | 'error'`,elements:[{name:`literal`,value:`'idle'`},{name:`literal`,value:`'scanning'`},{name:`literal`,value:`'detecting'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:`Target state of the scan`,defaultValue:{value:`'scanning'`,computed:!1}},instructionMessage:{required:!1,tsType:{name:`string`},description:`Message to help user align document`,defaultValue:{value:`'Alinea tu identificación dentro del recuadro'`,computed:!1}},documentType:{required:!1,tsType:{name:`union`,raw:`'ID' | 'PASSPORT' | 'SELFIE'`,elements:[{name:`literal`,value:`'ID'`},{name:`literal`,value:`'PASSPORT'`},{name:`literal`,value:`'SELFIE'`}]},description:`Document type being scanned`,defaultValue:{value:`'ID'`,computed:!1}},onCapture:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onRetake:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{_(),n(),v=r(),y={title:`Fintech/KYC/DocScanOverlay`,component:g,parameters:{layout:`centered`},tags:[`autodocs`]},b={args:{documentType:`ID`,scanState:`scanning`}},x={args:{documentType:`SELFIE`,instructionMessage:`Mueve tu rostro dentro del óvalo`,scanState:`scanning`}},S={args:{documentType:`PASSPORT`,instructionMessage:`Alinea tu pasaporte dentro del marco`,scanState:`scanning`}},C={args:{documentType:`ID`,scanState:`idle`,instructionMessage:`Prepara tu identificación para comenzar`}},w={args:{documentType:`ID`,scanState:`detecting`,instructionMessage:`Analizando documento...`}},T={args:{documentType:`ID`,scanState:`success`,instructionMessage:`Documento verificado correctamente`}},E={args:{documentType:`ID`,scanState:`error`,instructionMessage:`No pudimos leer tu documento. Intenta de nuevo.`}},D={args:{documentType:`SELFIE`,scanState:`success`,instructionMessage:`Rostro verificado correctamente`}},O={args:{documentType:`SELFIE`,scanState:`error`,instructionMessage:`No pudimos detectar tu rostro. Asegúrate de tener buena iluminación.`}},k={args:{documentType:`PASSPORT`,scanState:`detecting`,instructionMessage:`Procesando datos del pasaporte...`}},A={render:()=>(0,v.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,v.jsx)(`p`,{className:`text-xs text-text-secondary`,children:`El componente simula automáticamente el escaneo al hacer clic en "Simular Captura"`}),(0,v.jsx)(g,{documentType:`ID`,scanState:`scanning`,instructionMessage:`Haz clic en el botón de captura para simular`})]})},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    documentType: 'ID',
    scanState: 'scanning'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    documentType: 'SELFIE',
    instructionMessage: 'Mueve tu rostro dentro del óvalo',
    scanState: 'scanning'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    documentType: 'PASSPORT',
    instructionMessage: 'Alinea tu pasaporte dentro del marco',
    scanState: 'scanning'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    documentType: 'ID',
    scanState: 'idle',
    instructionMessage: 'Prepara tu identificación para comenzar'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    documentType: 'ID',
    scanState: 'detecting',
    instructionMessage: 'Analizando documento...'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    documentType: 'ID',
    scanState: 'success',
    instructionMessage: 'Documento verificado correctamente'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    documentType: 'ID',
    scanState: 'error',
    instructionMessage: 'No pudimos leer tu documento. Intenta de nuevo.'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    documentType: 'SELFIE',
    scanState: 'success',
    instructionMessage: 'Rostro verificado correctamente'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    documentType: 'SELFIE',
    scanState: 'error',
    instructionMessage: 'No pudimos detectar tu rostro. Asegúrate de tener buena iluminación.'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    documentType: 'PASSPORT',
    scanState: 'detecting',
    instructionMessage: 'Procesando datos del pasaporte...'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className="flex flex-col items-center gap-4">
        <p className="text-xs text-text-secondary">El componente simula automáticamente el escaneo al hacer clic en "Simular Captura"</p>
        <DocScanOverlay documentType="ID" scanState="scanning" instructionMessage="Haz clic en el botón de captura para simular" />
      </div>;
  }
}`,...A.parameters?.docs?.source}}},j=[`IDCard`,`Selfie`,`PassportScan`,`IdleState`,`DetectingState`,`SuccessState`,`ErrorState`,`SelfieSuccess`,`SelfieError`,`PassportDetecting`,`Interactive`]}))();export{w as DetectingState,E as ErrorState,b as IDCard,C as IdleState,A as Interactive,k as PassportDetecting,S as PassportScan,x as Selfie,O as SelfieError,D as SelfieSuccess,T as SuccessState,j as __namedExportsOrder,y as default};