import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DL3IwwZJ.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{An as o,In as s,at as c,rr as l,t as u,wr as d}from"./lucide-react-C3ayLXpj.js";import{n as f,t as p}from"./Button-l9_4D6Ta.js";import{r as m,t as h}from"./Input-D8lRvsgl.js";import{a as g,i as _,n as v,o as y,r as b,s as x}from"./Select-P9elGSPd.js";var S,C,w,T=e((()=>{S=t(n()),r(),C=a(),f(),m(),x(),u(),w=({defaultValue:e=`1234567890`,format:t=`code128`,scale:n=3,includeText:r=!0,showInput:a=!1,className:u})=>{let[f,m]=(0,S.useState)(e),[x,w]=(0,S.useState)(t),[T,E]=(0,S.useState)(``),[D,O]=(0,S.useState)(!0),[k,A]=(0,S.useState)(!1);return(0,S.useEffect)(()=>{if(!f)return;O(!0);let e=`https://bwipjs-api.metafloor.com/?bcid=${x}&text=${encodeURIComponent(f)}&scale=${n}&rotate=N${r?`&includetext`:``}`,t=new Image;t.src=e,t.onload=()=>{E(e),O(!1)},t.onerror=()=>{O(!1)}},[f,x,n,r]),(0,C.jsxs)(`div`,{className:i(`flex flex-col items-center gap-6 p-6 rounded-2xl bg-surface-primary border border-border-primary shadow-sm w-full max-w-md`,u),children:[a&&(0,C.jsxs)(`div`,{className:`w-full space-y-4`,children:[(0,C.jsxs)(`div`,{className:`space-y-2`,children:[(0,C.jsx)(`label`,{className:`text-sm font-medium text-text-secondary`,children:`Content`}),(0,C.jsx)(h,{value:f,onChange:e=>m(e.target.value),placeholder:`Enter value...`,className:`w-full`})]}),(0,C.jsxs)(`div`,{className:`space-y-2`,children:[(0,C.jsx)(`label`,{className:`text-sm font-medium text-text-secondary`,children:`Format`}),(0,C.jsxs)(v,{value:x,onValueChange:e=>w(e),children:[(0,C.jsx)(g,{children:(0,C.jsx)(y,{placeholder:`Select format`})}),(0,C.jsxs)(b,{children:[(0,C.jsx)(_,{value:`code128`,children:`Code 128 (Standard)`}),(0,C.jsx)(_,{value:`ean13`,children:`EAN-13 (Retail)`}),(0,C.jsx)(_,{value:`upca`,children:`UPC-A (US Retail)`}),(0,C.jsx)(_,{value:`code39`,children:`Code 39`}),(0,C.jsx)(_,{value:`itf14`,children:`ITF-14 (Logistics)`})]})]})]})]}),(0,C.jsxs)(`div`,{className:`relative min-h-[120px] w-full flex items-center justify-center p-4 bg-white rounded-xl border border-border-secondary shadow-inner overflow-hidden`,children:[D&&(0,C.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center bg-white/80 z-10`,children:(0,C.jsx)(c,{className:`w-6 h-6 text-accent-blue animate-spin`})}),T?(0,C.jsx)(`img`,{src:T,alt:`Barcode ${f}`,className:`max-w-full h-auto object-contain mix-blend-multiply`}):(0,C.jsxs)(`div`,{className:`flex flex-col items-center text-text-tertiary`,children:[(0,C.jsx)(d,{className:`w-8 h-8 mb-2 opacity-50`}),(0,C.jsx)(`span`,{className:`text-xs`,children:`Invalid Data`})]})]}),(0,C.jsxs)(`div`,{className:`flex items-center gap-2 w-full`,children:[(0,C.jsxs)(p,{variant:`outline`,className:`flex-1`,onClick:()=>{navigator.clipboard.writeText(f),A(!0),setTimeout(()=>A(!1),2e3)},title:`Copy value to clipboard`,children:[k?(0,C.jsx)(l,{className:`w-4 h-4 mr-2`}):(0,C.jsx)(s,{className:`w-4 h-4 mr-2`}),k?`Copied`:`Copy Text`]}),(0,C.jsxs)(p,{variant:`primary`,className:`flex-1`,onClick:async()=>{try{let e=await(await fetch(T)).blob(),t=window.URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`barcode-${f}-${Date.now()}.png`,document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(t)}catch(e){console.error(`Error downloading barcode:`,e),window.open(T,`_blank`)}},disabled:!T||D,children:[(0,C.jsx)(o,{className:`w-4 h-4 mr-2`}),`Download`]})]})]})},w.__docgenInfo={description:``,methods:[],displayName:`BarcodeGenerator`,props:{defaultValue:{required:!1,tsType:{name:`string`},description:`Initial value for the barcode`,defaultValue:{value:`"1234567890"`,computed:!1}},format:{required:!1,tsType:{name:`union`,raw:`'code128' | 'ean13' | 'upca' | 'code39' | 'itf14' | 'qrcode'`,elements:[{name:`literal`,value:`'code128'`},{name:`literal`,value:`'ean13'`},{name:`literal`,value:`'upca'`},{name:`literal`,value:`'code39'`},{name:`literal`,value:`'itf14'`},{name:`literal`,value:`'qrcode'`}]},description:`Barcode format (default: code128)`,defaultValue:{value:`"code128"`,computed:!1}},scale:{required:!1,tsType:{name:`number`},description:`Scale factor (1-5, default: 3)`,defaultValue:{value:`3`,computed:!1}},includeText:{required:!1,tsType:{name:`boolean`},description:`Show the text value below the barcode`,defaultValue:{value:`true`,computed:!1}},showInput:{required:!1,tsType:{name:`boolean`},description:`Show an internal input to change the value`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Class name for the container`}}}})),E,D,O,k,A,j,M,N,P,F;e((()=>{T(),E={title:`Data Display/BarcodeGenerator`,component:w,tags:[`autodocs`]},D={args:{defaultValue:`1234567890`,format:`code128`,scale:3,includeText:!0}},O={args:{defaultValue:`5901234123457`,format:`ean13`,scale:3}},k={args:{defaultValue:`725272730706`,format:`upca`,scale:3}},A={args:{defaultValue:`HELLO123`,format:`code39`,scale:3}},j={args:{defaultValue:`https://example.com/payment`,format:`qrcode`,scale:5,includeText:!1}},M={args:{defaultValue:`PROD-2024-001`,format:`code128`,scale:3,showInput:!0}},N={args:{defaultValue:`9876543210`,format:`code128`,includeText:!1}},P={args:{defaultValue:`INV-001`,format:`code128`,scale:5}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '1234567890',
    format: 'code128',
    scale: 3,
    includeText: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '5901234123457',
    format: 'ean13',
    scale: 3
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '725272730706',
    format: 'upca',
    scale: 3
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'HELLO123',
    format: 'code39',
    scale: 3
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://example.com/payment',
    format: 'qrcode',
    scale: 5,
    includeText: false
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'PROD-2024-001',
    format: 'code128',
    scale: 3,
    showInput: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: '9876543210',
    format: 'code128',
    includeText: false
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'INV-001',
    format: 'code128',
    scale: 5
  }
}`,...P.parameters?.docs?.source}}},F=[`Default`,`Code128`,`EAN13`,`UPCA`,`Code39`,`QRCode`,`WithInput`,`WithoutText`,`LargeScale`]}))();export{D as Code128,D as Default,A as Code39,O as EAN13,P as LargeScale,j as QRCode,k as UPCA,M as WithInput,N as WithoutText,F as __namedExportsOrder,E as default};