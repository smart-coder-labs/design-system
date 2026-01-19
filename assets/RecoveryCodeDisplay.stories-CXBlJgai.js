import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as E,r as N}from"./iframe-vYzePaRW.js";import{c as M}from"./utils-CDN07tui.js";import{B as n}from"./Button-Bvw_y_KB.js";import{T as K}from"./triangle-alert-BmHQhHDE.js";import{m as Y}from"./proxy-DMGrdN83.js";import{E as B}from"./eye-off-Boap1H4l.js";import{E as P}from"./eye-C56rJwJx.js";import{C as I}from"./check-Bwk7sq60.js";import{C as j}from"./copy-olGZ0BUq.js";import{D as V}from"./download-DO7YiRJe.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Ckxz52bH.js";const y=E.forwardRef(({codes:a,onCopy:h,onDownload:f,title:R="Recovery Codes",description:x="Save these codes in a safe place. You can use them to access your account if you lose your device.",showWarning:D=!0,className:b,...S},T)=>{const[W,C]=N.useState(null),[v,L]=N.useState(new Set),w=(o,s)=>{navigator.clipboard.writeText(o),C(s),setTimeout(()=>C(null),2e3),h?.(o)},k=o=>{L(s=>{const t=new Set(s);return t.has(o)?t.delete(o):t.add(o),t})},A=()=>{const o=a.join(`
`),s=new Blob([o],{type:"text/plain"}),t=URL.createObjectURL(s),g=document.createElement("a");g.href=t,g.download="recovery-codes.txt",g.click(),URL.revokeObjectURL(t),f?.()};return e.jsxs("div",{ref:T,className:M("w-full max-w-md space-y-4",b),...S,children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h2",{className:"text-xl font-bold text-text-primary",children:R}),x&&e.jsx("p",{className:"text-sm text-text-secondary",children:x})]}),D&&e.jsxs("div",{className:"flex items-start gap-3 p-4 bg-status-warning/10 border border-status-warning/20 rounded-xl",children:[e.jsx(K,{className:"w-5 h-5 text-status-warning flex-shrink-0 mt-0.5"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("p",{className:"text-sm font-medium text-text-primary mb-1",children:"Important"}),e.jsx("p",{className:"text-xs text-text-secondary",children:"These codes can only be viewed once. Make sure to save them securely."})]})]}),e.jsx("div",{className:"bg-surface-primary border border-border-primary rounded-xl p-4 space-y-2",children:a.map((o,s)=>e.jsxs(Y.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:s*.05},className:"flex items-center justify-between gap-3 p-3 bg-surface-secondary rounded-lg",children:[e.jsxs("div",{className:"flex items-center gap-3 flex-1 min-w-0",children:[e.jsx("span",{className:"text-xs font-medium text-text-tertiary w-6 flex-shrink-0",children:s+1}),e.jsx("code",{className:"text-sm font-mono text-text-primary flex-1 truncate",children:v.has(s)?o:"•".repeat(o.length)})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(n,{variant:"ghost",size:"sm",onClick:()=>k(s),children:v.has(s)?e.jsx(B,{className:"w-3.5 h-3.5"}):e.jsx(P,{className:"w-3.5 h-3.5"})}),e.jsx(n,{variant:"ghost",size:"sm",onClick:()=>w(o,s),children:W===s?e.jsx(I,{className:"w-3.5 h-3.5 text-status-success"}):e.jsx(j,{className:"w-3.5 h-3.5"})})]})]},s))}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{variant:"secondary",fullWidth:!0,onClick:A,leftIcon:e.jsx(V,{className:"w-4 h-4"}),children:"Download Codes"}),e.jsx(n,{variant:"primary",fullWidth:!0,onClick:()=>{a.forEach((o,s)=>w(o,s))},leftIcon:e.jsx(j,{className:"w-4 h-4"}),children:"Copy All"})]})]})});y.displayName="RecoveryCodeDisplay";y.__docgenInfo={description:"",methods:[],displayName:"RecoveryCodeDisplay",props:{codes:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onCopy:{required:!1,tsType:{name:"signature",type:"function",raw:"(code: string) => void",signature:{arguments:[{type:{name:"string"},name:"code"}],return:{name:"void"}}},description:""},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Recovery Codes'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Save these codes in a safe place. You can use them to access your account if you lose your device.'",computed:!1}},showWarning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const ee={title:"Components/RecoveryCodeDisplay",component:y,parameters:{layout:"centered"},tags:["autodocs"]},r=["A3F9-2K8L-P5Q7-R1M4","B7N2-X4V6-W9Z3-T8Y1","C5H8-J2K4-L6M9-N3P7","D1Q4-R7S9-T2V5-W8X3","E6Y9-Z3A1-B4C7-D2F5","F8G2-H5J7-K1L4-M9N6","G3P7-Q1R4-S8T2-V5W9","H4X6-Y9Z2-A3B5-C8D1"],c={args:{codes:r}},d={args:{codes:r,onCopy:a=>console.log("Copied code:",a),onDownload:()=>console.log("Downloaded codes")}},l={args:{codes:r,title:"Backup Codes",description:"Store these backup codes in a secure location. Each code can only be used once."}},i={args:{codes:r,showWarning:!1}},m={args:{codes:["A3F9-2K8L-P5Q7-R1M4","B7N2-X4V6-W9Z3-T8Y1","C5H8-J2K4-L6M9-N3P7"],title:"Emergency Access Codes",description:"Use these codes if you lose access to your authenticator app."}},p={args:{codes:[...r,"I7K3-L9M2-N5P8-Q1R4","J2S6-T9V3-W7X1-Y4Z8","K5A9-B2C6-D3F7-G1H4","L8J2-K5M9-N3P7-Q1R6"]}},u={args:{codes:r},render:()=>{const a=f=>{alert(`Copied: ${f}`)},h=()=>{alert("Recovery codes downloaded!")};return e.jsx(y,{codes:r,onCopy:a,onDownload:h,title:"Your Recovery Codes",description:"Save these codes securely. You'll need them to recover your account if you lose access."})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    codes: sampleCodes
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    codes: sampleCodes,
    onCopy: code => console.log('Copied code:', code),
    onDownload: () => console.log('Downloaded codes')
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    codes: sampleCodes,
    title: 'Backup Codes',
    description: 'Store these backup codes in a secure location. Each code can only be used once.'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    codes: sampleCodes,
    showWarning: false
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    codes: ['A3F9-2K8L-P5Q7-R1M4', 'B7N2-X4V6-W9Z3-T8Y1', 'C5H8-J2K4-L6M9-N3P7'],
    title: 'Emergency Access Codes',
    description: 'Use these codes if you lose access to your authenticator app.'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    codes: [...sampleCodes, 'I7K3-L9M2-N5P8-Q1R4', 'J2S6-T9V3-W7X1-Y4Z8', 'K5A9-B2C6-D3F7-G1H4', 'L8J2-K5M9-N3P7-Q1R6']
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    codes: sampleCodes
  },
  render: () => {
    const handleCopy = (code: string) => {
      alert(\`Copied: \${code}\`);
    };
    const handleDownload = () => {
      alert('Recovery codes downloaded!');
    };
    return <RecoveryCodeDisplay codes={sampleCodes} onCopy={handleCopy} onDownload={handleDownload} title="Your Recovery Codes" description="Save these codes securely. You'll need them to recover your account if you lose access." />;
  }
}`,...u.parameters?.docs?.source}}};const se=["Default","WithActions","CustomTitle","WithoutWarning","FewCodes","ManyCodes","Interactive"];export{l as CustomTitle,c as Default,m as FewCodes,u as Interactive,p as ManyCodes,d as WithActions,i as WithoutWarning,se as __namedExportsOrder,ee as default};
