import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,R as F}from"./iframe-CSCYuKHF.js";import{c as w}from"./utils-DCADjnpI.js";import{m as y}from"./proxy-DgdbOAE3.js";import{A as M}from"./index-CnMaGjx1.js";import{L as O}from"./loader-circle-CxXKoYns.js";import{S as R}from"./shield-check-DBk54K9Q.js";import{S as _}from"./shield-alert-QzoV8AGS.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-BeIloL1I.js";import"./createLucideIcon-BvoP2Q-9.js";const N=({length:r=6,onComplete:c,onChange:i,status:t="idle",errorMessage:P="Invalid code. Please try again.",successMessage:V="Verified successfully!",autoFocus:T=!0,disabled:p=!1,className:D="",label:E="Verification Code",description:I="Enter the 6-digit code sent to your device"})=>{const[d,f]=l.useState(Array(r).fill("")),n=l.useRef([]);l.useEffect(()=>{T&&n.current[0]&&n.current[0].focus()},[T]),l.useEffect(()=>{t==="error"&&(f(Array(r).fill("")),setTimeout(()=>n.current[0]?.focus(),400))},[t,r]);const q=l.useCallback((o,s)=>{if(p||t==="loading")return;const a=s.replace(/\D/g,"").slice(-1),g=[...d];g[o]=a,f(g);const m=g.join("");i?.(m),a&&o<r-1&&n.current[o+1]?.focus(),m.length===r&&!m.includes("")&&c?.(m)},[d,r,p,t,i,c]),C=l.useCallback((o,s)=>{if(s.key==="Backspace"){s.preventDefault();const a=[...d];d[o]?(a[o]="",f(a),i?.(a.join(""))):o>0&&(a[o-1]="",f(a),i?.(a.join("")),n.current[o-1]?.focus())}else s.key==="ArrowLeft"&&o>0?n.current[o-1]?.focus():s.key==="ArrowRight"&&o<r-1&&n.current[o+1]?.focus()},[d,r,i]),A=l.useCallback(o=>{if(o.preventDefault(),p||t==="loading")return;const s=o.clipboardData.getData("text").replace(/\D/g,"").slice(0,r);if(!s)return;const a=Array(r).fill("");s.split("").forEach((m,k)=>{a[k]=m}),f(a),i?.(a.join(""));const g=Math.min(s.length,r-1);n.current[g]?.focus(),s.length===r&&c?.(s)},[r,p,t,i,c]),L=t==="error"?"border-status-error":t==="success"?"border-status-success":"border-border-primary focus-within:border-accent-blue";return e.jsxs(y.div,{className:w("flex flex-col items-center gap-4",D),initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3,ease:[.16,1,.3,1]},children:[e.jsxs("div",{className:"text-center space-y-1",children:[e.jsx("p",{className:"text-sm font-semibold text-text-primary",children:E}),e.jsx("p",{className:"text-xs text-text-secondary",children:I})]}),e.jsx("div",{className:"flex items-center gap-2.5",children:Array.from({length:r}).map((o,s)=>e.jsxs(F.Fragment,{children:[e.jsx(y.input,{ref:a=>{n.current[s]=a},type:"text",inputMode:"numeric",maxLength:1,value:d[s],disabled:p||t==="loading"||t==="success",onChange:a=>q(s,a.target.value),onKeyDown:a=>C(s,a),onPaste:A,"aria-label":`Digit ${s+1} of ${r}`,className:w("w-12 h-14 text-center text-xl font-bold rounded-xl border-2 bg-surface-primary text-text-primary","outline-none transition-all duration-200","focus:ring-2 focus:ring-accent-blue/30 focus:border-accent-blue","disabled:opacity-50 disabled:cursor-not-allowed","placeholder:text-text-quaternary",L),animate:t==="error"?{x:[0,-6,6,-4,4,0]}:t==="success"?{scale:[1,1.08,1]}:{},transition:{duration:.4}}),s===Math.floor(r/2)-1&&e.jsx("span",{className:"text-text-quaternary text-xl font-light mx-1",children:"–"})]},s))}),e.jsxs(M,{mode:"wait",children:[t==="loading"&&e.jsxs(y.div,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},className:"flex items-center gap-2 text-text-secondary",children:[e.jsx(O,{className:"w-4 h-4 animate-spin"}),e.jsx("span",{className:"text-xs font-medium",children:"Verifying..."})]},"loading"),t==="success"&&e.jsxs(y.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0},className:"flex items-center gap-2 text-status-success",children:[e.jsx(R,{className:"w-4 h-4"}),e.jsx("span",{className:"text-xs font-semibold",children:V})]},"success"),t==="error"&&e.jsxs(y.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0},className:"flex items-center gap-2 text-status-error",children:[e.jsx(_,{className:"w-4 h-4"}),e.jsx("span",{className:"text-xs font-semibold",children:P})]},"error")]})]})};N.displayName="SecurityOTPInput";N.__docgenInfo={description:"",methods:[],displayName:"SecurityOTPInput",props:{length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"(code: string) => void",signature:{arguments:[{type:{name:"string"},name:"code"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(code: string) => void",signature:{arguments:[{type:{name:"string"},name:"code"}],return:{name:"void"}}},description:""},status:{required:!1,tsType:{name:"union",raw:"'idle' | 'loading' | 'success' | 'error'",elements:[{name:"literal",value:"'idle'"},{name:"literal",value:"'loading'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'idle'",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Invalid code. Please try again.'",computed:!1}},successMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Verified successfully!'",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Verification Code'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Enter the 6-digit code sent to your device'",computed:!1}}}};const X={title:"Fintech/KYC/SecurityOTPInput",component:N,parameters:{layout:"centered"},tags:[],argTypes:{status:{control:"select",options:["idle","loading","success","error"]},length:{control:{type:"number",min:4,max:8,step:1}}}},u={args:{length:6,status:"idle",label:"Verification Code",description:"Enter the 6-digit code sent to your device"}},x={args:{...u.args,status:"loading"}},v={args:{...u.args,status:"success"}},b={args:{...u.args,status:"error",errorMessage:"Invalid code. Please try again."}},h={args:{length:4,status:"idle",label:"PIN",description:"Enter your 4-digit PIN"}},j={name:"🔐 Caso de Uso: Login 2FA",render:()=>{const[r,c]=l.useState("idle"),i=t=>{c("loading"),setTimeout(()=>{c(t==="123456"?"success":"error"),t!=="123456"&&setTimeout(()=>c("idle"),2e3)},1500)};return e.jsx("div",{className:"w-[400px] bg-surface-primary rounded-2xl border border-border-primary p-8",children:e.jsx(N,{status:r,onComplete:i,description:"Enter 123456 to succeed, any other to fail"})})}},S={name:"🎨 Playground",args:{...u.args},decorators:[r=>e.jsx("div",{className:"w-[400px]",children:e.jsx(r,{})})]};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    status: 'idle',
    label: 'Verification Code',
    description: 'Enter the 6-digit code sent to your device'
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'loading'
  }
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'success'
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    status: 'error',
    errorMessage: 'Invalid code. Please try again.'
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    status: 'idle',
    label: 'PIN',
    description: 'Enter your 4-digit PIN'
  }
}`,...h.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '🔐 Caso de Uso: Login 2FA',
  render: () => {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const handleComplete = (code: string) => {
      setStatus('loading');
      setTimeout(() => {
        setStatus(code === '123456' ? 'success' : 'error');
        if (code !== '123456') {
          setTimeout(() => setStatus('idle'), 2000);
        }
      }, 1500);
    };
    return <div className="w-[400px] bg-surface-primary rounded-2xl border border-border-primary p-8">
                <SecurityOTPInput status={status} onComplete={handleComplete} description='Enter 123456 to succeed, any other to fail' />
            </div>;
  }
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '🎨 Playground',
  args: {
    ...Default.args
  },
  decorators: [Story => <div className="w-[400px]"><Story /></div>]
}`,...S.parameters?.docs?.source}}};const Z=["Default","Loading","Success","Error","FourDigit","TwoFactorLogin","Playground"];export{u as Default,b as Error,h as FourDigit,x as Loading,S as Playground,v as Success,j as TwoFactorLogin,Z as __namedExportsOrder,X as default};
