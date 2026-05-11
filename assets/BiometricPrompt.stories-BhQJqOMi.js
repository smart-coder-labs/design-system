import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as I}from"./iframe-ChONrTG_.js";import{c}from"./utils-CDN07tui.js";import{A as y}from"./index-DyeVvxBP.js";import{m as a}from"./proxy-CRCEyvcV.js";import{X as w}from"./x-Cg9q8tko.js";import{L as N}from"./loader-circle-_fNQ7UVw.js";import{S as k}from"./shield-check-9axflegT.js";import{c as C}from"./createLucideIcon-CdJ-Xkq_.js";import{F as A}from"./fingerprint-pattern-9YGVYQDR.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-juiWZL7b.js";const D=[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]],q=C("scan-face",D),u=({type:p="faceId",status:t="idle",onAuthenticate:m,onCancel:s,title:f,subtitle:n,open:b=!0,className:v=""})=>{const x=p==="faceId",j=x?q:A,h=x?"Face ID":"Touch ID",S=x?"Look at your device to authenticate":"Place your finger on the sensor",g=f||h,F=n||S,T={idle:{scale:1,opacity:.3},scanning:{scale:[1,1.3,1],opacity:[.3,.6,.3],transition:{duration:1.5,repeat:1/0,ease:"easeInOut"}},success:{scale:1.1,opacity:0},failed:{scale:.95,opacity:0}};return e.jsx(y,{children:b&&e.jsxs(e.Fragment,{children:[e.jsx(a.div,{className:"fixed inset-0 bg-black/40 backdrop-blur-md z-50",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:s}),e.jsxs(a.div,{className:c("fixed top-1/2 left-1/2 z-50 w-[300px]","bg-surface-primary border border-border-primary rounded-3xl shadow-xl p-8","flex flex-col items-center text-center",v),initial:{opacity:0,scale:.92,x:"-50%",y:"-50%"},animate:{opacity:1,scale:1,x:"-50%",y:"-50%"},exit:{opacity:0,scale:.92,x:"-50%",y:"-50%"},transition:{type:"spring",stiffness:400,damping:30},role:"dialog","aria-label":g,children:[e.jsx("button",{onClick:s,className:"absolute top-3 right-3 w-7 h-7 rounded-full bg-surface-secondary flex items-center justify-center text-text-tertiary hover:text-text-primary transition-colors","aria-label":"Close",children:e.jsx(w,{className:"w-3.5 h-3.5"})}),e.jsxs("div",{className:"relative mb-6",children:[e.jsx(a.div,{className:c("absolute inset-0 rounded-full",t==="success"?"bg-status-success":t==="failed"?"bg-status-error":"bg-accent-blue"),style:{margin:"-12px"},variants:T,animate:t}),e.jsx("div",{className:c("relative w-20 h-20 rounded-full flex items-center justify-center transition-colors duration-300",t==="success"?"bg-status-success/10 text-status-success":t==="failed"?"bg-status-error/10 text-status-error":"bg-accent-blue/10 text-accent-blue"),children:e.jsxs(y,{mode:"wait",children:[t==="scanning"&&e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(N,{className:"w-10 h-10 animate-spin"})},"scan"),t==="success"&&e.jsx(a.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:400,damping:20},children:e.jsx(k,{className:"w-10 h-10"})},"success"),(t==="idle"||t==="failed")&&e.jsx(a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:e.jsx(j,{className:"w-10 h-10"})},"icon")]})})]}),e.jsx("h3",{className:"text-base font-bold text-text-primary mb-1",children:g}),e.jsx("p",{className:"text-xs text-text-secondary leading-relaxed mb-6",children:F}),e.jsxs(y,{mode:"wait",children:[t==="success"&&e.jsx(a.p,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},className:"text-xs font-semibold text-status-success",children:"Authentication successful"},"s"),t==="failed"&&e.jsx(a.p,{initial:{opacity:0,y:6},animate:{opacity:1,y:0},className:"text-xs font-semibold text-status-error mb-4",children:"Authentication failed. Try again."},"f")]}),(t==="idle"||t==="failed")&&e.jsx(a.button,{onClick:m,className:c("w-full py-3 px-6 rounded-xl text-sm font-semibold text-white","bg-accent-blue hover:bg-accent-blue-hover active:bg-accent-blue-active","transition-colors duration-200","focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:ring-offset-2"),whileTap:{scale:.97},children:t==="failed"?"Try Again":`Authenticate with ${h}`})]})]})})};u.displayName="BiometricPrompt";u.__docgenInfo={description:"",methods:[],displayName:"BiometricPrompt",props:{type:{required:!1,tsType:{name:"union",raw:"'faceId' | 'touchId'",elements:[{name:"literal",value:"'faceId'"},{name:"literal",value:"'touchId'"}]},description:"",defaultValue:{value:"'faceId'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'idle' | 'scanning' | 'success' | 'failed'",elements:[{name:"literal",value:"'idle'"},{name:"literal",value:"'scanning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'failed'"}]},description:"",defaultValue:{value:"'idle'",computed:!1}},onAuthenticate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const R={title:"Fintech/KYC/BiometricPrompt",component:u,parameters:{layout:"centered"},tags:[],argTypes:{type:{control:"select",options:["faceId","touchId"]},status:{control:"select",options:["idle","scanning","success","failed"]}}},i={name:"👤 Face ID — Idle",args:{type:"faceId",status:"idle",open:!0}},r={name:"👤 Face ID — Scanning",args:{type:"faceId",status:"scanning",open:!0}},o={name:"👤 Face ID — Success",args:{type:"faceId",status:"success",open:!0}},l={name:"👆 Touch ID — Idle",args:{type:"touchId",status:"idle",open:!0}},d={name:"🔐 Caso de Uso: Interactive Face ID",render:()=>{const[p,t]=I.useState("idle"),[m,s]=I.useState(!0),f=()=>{t("scanning"),setTimeout(()=>{const n=Math.random()>.3;t(n?"success":"failed"),n&&setTimeout(()=>s(!1),1500)},2e3)};return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>{s(!0),t("idle")},className:"px-4 py-2 bg-accent-blue text-white rounded-xl text-sm font-semibold",children:"Open Biometric Prompt"}),e.jsx(u,{type:"faceId",status:p,open:m,onAuthenticate:f,onCancel:()=>s(!1)})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '👤 Face ID — Idle',
  args: {
    type: 'faceId',
    status: 'idle',
    open: true
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: '👤 Face ID — Scanning',
  args: {
    type: 'faceId',
    status: 'scanning',
    open: true
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '👤 Face ID — Success',
  args: {
    type: 'faceId',
    status: 'success',
    open: true
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '👆 Touch ID — Idle',
  args: {
    type: 'touchId',
    status: 'idle',
    open: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '🔐 Caso de Uso: Interactive Face ID',
  render: () => {
    const [status, setStatus] = useState<'idle' | 'scanning' | 'success' | 'failed'>('idle');
    const [open, setOpen] = useState(true);
    const handleAuth = () => {
      setStatus('scanning');
      setTimeout(() => {
        const success = Math.random() > 0.3;
        setStatus(success ? 'success' : 'failed');
        if (success) setTimeout(() => setOpen(false), 1500);
      }, 2000);
    };
    return <div>
                <button onClick={() => {
        setOpen(true);
        setStatus('idle');
      }} className="px-4 py-2 bg-accent-blue text-white rounded-xl text-sm font-semibold">
                    Open Biometric Prompt
                </button>
                <BiometricPrompt type="faceId" status={status} open={open} onAuthenticate={handleAuth} onCancel={() => setOpen(false)} />
            </div>;
  }
}`,...d.parameters?.docs?.source}}};const X=["FaceIdIdle","FaceIdScanning","FaceIdSuccess","TouchIdIdle","InteractiveFaceId"];export{i as FaceIdIdle,r as FaceIdScanning,o as FaceIdSuccess,d as InteractiveFaceId,l as TouchIdIdle,X as __namedExportsOrder,R as default};
