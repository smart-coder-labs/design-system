import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as L,r as x}from"./iframe-B-5hg53G.js";import{c as T}from"./utils-CDN07tui.js";import{O as _}from"./OTPInput-CFmc1I7x.js";import{B as M}from"./Button-Dumis5Wa.js";import{C as W}from"./circle-check-4QFJ1IWT.js";import{S as O}from"./shield-GptgAu7U.js";import{C as $}from"./circle-alert-39Ms2wki.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-BFtQK4Qy.js";import"./createLucideIcon-CJTSccXv.js";const t=L.forwardRef(({onVerify:o,onResend:r,method:s="email",recipient:n,isLoading:w=!1,error:P,className:v,...V},j)=>{const[S,h]=x.useState(""),[N,E]=x.useState(!1),[b,y]=x.useState(""),A=async R=>{y("");try{await o?.(R),E(!0)}catch(a){y(a instanceof Error?a.message:"Invalid code"),h("")}},I=()=>{h(""),y(""),r?.()},g=P||b,C={sms:"SMS",email:"Email",app:"Authenticator App"},F=n?n.replace(/(.{2})(.*)(.{2})/,(R,a,q,k)=>`${a}${"*".repeat(Math.min(q.length,6))}${k}`):"";return N?e.jsxs("div",{ref:j,className:T("w-full max-w-md space-y-6 text-center",v),...V,children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("div",{className:"w-16 h-16 rounded-full bg-status-success/10 flex items-center justify-center",children:e.jsx(W,{className:"w-8 h-8 text-status-success"})})}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-semibold text-text-primary mb-2",children:"Verification Successful"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Your account has been verified successfully."})]})]}):e.jsxs("div",{ref:j,className:T("w-full max-w-md space-y-6",v),...V,children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("div",{className:"flex justify-center mb-4",children:e.jsx("div",{className:"w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center",children:e.jsx(O,{className:"w-8 h-8 text-accent-blue"})})}),e.jsx("h2",{className:"text-2xl font-bold text-text-primary",children:"Two-Factor Authentication"}),e.jsxs("p",{className:"text-sm text-text-secondary",children:["Enter the verification code sent to your ",C[s]]}),n&&e.jsx("p",{className:"text-xs text-text-tertiary font-medium",children:F})]}),g&&e.jsxs("div",{className:"flex items-center gap-2 p-3 bg-status-error/10 border border-status-error/20 rounded-xl text-status-error text-sm",children:[e.jsx($,{className:"w-4 h-4 flex-shrink-0"}),e.jsx("span",{children:g})]}),e.jsx("div",{className:"flex justify-center",children:e.jsx(_,{length:6,value:S,onChange:h,onComplete:A,disabled:w,error:!!g,autoFocus:!0})}),r&&e.jsxs("div",{className:"text-center",children:[e.jsx("p",{className:"text-sm text-text-secondary mb-2",children:"Didn't receive the code?"}),e.jsx(M,{variant:"ghost",size:"sm",onClick:I,disabled:w,children:"Resend Code"})]})]})});t.displayName="TwoFactorAuth";t.__docgenInfo={description:"",methods:[],displayName:"TwoFactorAuth",props:{onVerify:{required:!1,tsType:{name:"signature",type:"function",raw:"(code: string) => void | Promise<void>",signature:{arguments:[{type:{name:"string"},name:"code"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},onResend:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},method:{required:!1,tsType:{name:"union",raw:"'sms' | 'email' | 'app'",elements:[{name:"literal",value:"'sms'"},{name:"literal",value:"'email'"},{name:"literal",value:"'app'"}]},description:"",defaultValue:{value:"'email'",computed:!1}},recipient:{required:!1,tsType:{name:"string"},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const Z={title:"Components/TwoFactorAuth",component:t,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{method:"email",recipient:"john.doe@example.com",onVerify:async o=>{console.log("Verifying code:",o),await new Promise(r=>setTimeout(r,1e3))},onResend:()=>console.log("Resend code")}},c={args:{method:"sms",recipient:"+1 (555) 123-4567",onVerify:async o=>{console.log("Verifying code:",o),await new Promise(r=>setTimeout(r,1e3))},onResend:()=>console.log("Resend code")}},d={args:{method:"app",onVerify:async o=>{console.log("Verifying code:",o),await new Promise(r=>setTimeout(r,1e3))}}},l={args:{method:"email",recipient:"john.doe@example.com",error:"Invalid code. Please try again.",onVerify:async o=>{console.log("Verifying code:",o)},onResend:()=>console.log("Resend code")}},m={args:{method:"email",recipient:"john.doe@example.com",isLoading:!0,onVerify:async o=>{console.log("Verifying code:",o)}}},u={render:()=>{const o=async s=>{if(console.log("Verifying:",s),await new Promise(n=>setTimeout(n,1500)),s==="123456")alert("Verification successful!");else throw new Error("Invalid verification code")},r=()=>{alert("Verification code sent!")};return e.jsx(t,{method:"email",recipient:"john.doe@example.com",onVerify:o,onResend:r})}},p={args:{method:"app",onVerify:async o=>{console.log("Verifying code:",o),await new Promise(r=>setTimeout(r,1e3))}}},f={render:()=>{const o=async r=>{throw await new Promise(s=>setTimeout(s,500)),new Error("Invalid code. Please check and try again.")};return e.jsx(t,{method:"sms",recipient:"+1 (555) 123-4567",onVerify:o,onResend:()=>console.log("Resend")})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    method: 'email',
    recipient: 'john.doe@example.com',
    onVerify: async code => {
      console.log('Verifying code:', code);
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
    onResend: () => console.log('Resend code')
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    method: 'sms',
    recipient: '+1 (555) 123-4567',
    onVerify: async code => {
      console.log('Verifying code:', code);
      await new Promise(resolve => setTimeout(resolve, 1000));
    },
    onResend: () => console.log('Resend code')
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    method: 'app',
    onVerify: async code => {
      console.log('Verifying code:', code);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    method: 'email',
    recipient: 'john.doe@example.com',
    error: 'Invalid code. Please try again.',
    onVerify: async code => {
      console.log('Verifying code:', code);
    },
    onResend: () => console.log('Resend code')
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    method: 'email',
    recipient: 'john.doe@example.com',
    isLoading: true,
    onVerify: async code => {
      console.log('Verifying code:', code);
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleVerify = async (code: string) => {
      console.log('Verifying:', code);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate validation
      if (code === '123456') {
        alert('Verification successful!');
      } else {
        throw new Error('Invalid verification code');
      }
    };
    const handleResend = () => {
      alert('Verification code sent!');
    };
    return <TwoFactorAuth method="email" recipient="john.doe@example.com" onVerify={handleVerify} onResend={handleResend} />;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    method: 'app',
    onVerify: async code => {
      console.log('Verifying code:', code);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleVerify = async (code: string) => {
      // Always fail for demo
      await new Promise(resolve => setTimeout(resolve, 500));
      throw new Error('Invalid code. Please check and try again.');
    };
    return <TwoFactorAuth method="sms" recipient="+1 (555) 123-4567" onVerify={handleVerify} onResend={() => console.log('Resend')} />;
  }
}`,...f.parameters?.docs?.source}}};const ee=["Email","SMS","AuthenticatorApp","WithError","Loading","Interactive","WithoutResend","ValidationError"];export{d as AuthenticatorApp,i as Email,u as Interactive,m as Loading,c as SMS,f as ValidationError,l as WithError,p as WithoutResend,ee as __namedExportsOrder,Z as default};
