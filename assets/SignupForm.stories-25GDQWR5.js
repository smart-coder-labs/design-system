import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as W,r as o}from"./iframe-CGazvlvx.js";import{c as D}from"./utils-CDN07tui.js";import{I as P}from"./Input-CPkCia-y.js";import{B as M}from"./Button-DiLt8not.js";import{P as v}from"./PasswordInput-SBT6ozHa.js";import{C as R}from"./Checkbox-DNKbkjdF.js";import{C as _}from"./circle-alert-Cwnn9TMZ.js";import{U as $}from"./user-BUNRy1CH.js";import{M as V}from"./mail-BqL58bhU.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-BNOm_ZMq.js";import"./resolve-elements-juiWZL7b.js";import"./eye-off-B_4ynpgu.js";import"./createLucideIcon-BMKVoASg.js";import"./eye-BXn_Qrrg.js";import"./check-D3Ma7fjX.js";import"./x-bkzh2GWz.js";import"./minus-BAByJQZj.js";const t=W.forwardRef(({onSubmit:s,isLoading:r=!1,error:f,className:j,...T},C)=>{const[b,N]=o.useState(""),[w,E]=o.useState(""),[i,k]=o.useState(""),[c,q]=o.useState(""),[S,F]=o.useState(!1),[I,n]=o.useState(""),A=async a=>{if(a.preventDefault(),n(""),!b||!w||!i||!c){n("Please fill in all fields");return}if(i!==c){n("Passwords do not match");return}if(i.length<8){n("Password must be at least 8 characters");return}if(!S){n("Please accept the terms and conditions");return}try{await s?.({name:b,email:w,password:i,confirmPassword:c,acceptTerms:S})}catch(y){n(y instanceof Error?y.message:"An error occurred")}},x=f||I;return e.jsxs("form",{ref:C,onSubmit:A,className:D("w-full max-w-xl space-y-10",j),...T,children:[e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("h2",{className:"text-4xl font-bold text-text-primary",children:"Create account"}),e.jsx("p",{className:"text-lg text-text-secondary",children:"Sign up to get started"})]}),x&&e.jsxs("div",{className:"flex items-center gap-2 p-3 bg-status-error/10 border border-status-error/20 rounded-xl text-status-error text-sm",children:[e.jsx(_,{className:"w-4 h-4 flex-shrink-0"}),e.jsx("span",{children:x})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(P,{type:"text",label:"Full Name",placeholder:"John Doe",value:b,onChange:a=>N(a.target.value),leftIcon:e.jsx($,{className:"w-4 h-4"}),required:!0,disabled:r}),e.jsx(P,{type:"email",label:"Email",placeholder:"you@example.com",value:w,onChange:a=>E(a.target.value),leftIcon:e.jsx(V,{className:"w-4 h-4"}),required:!0,disabled:r}),e.jsx(v,{label:"Password",placeholder:"Create a password",value:i,onChange:a=>k(a),required:!0,disabled:r}),e.jsx(v,{label:"Confirm Password",placeholder:"Confirm your password",value:c,onChange:a=>q(a),required:!0,disabled:r})]}),e.jsxs("label",{className:"flex items-start gap-2 cursor-pointer",children:[e.jsx(R,{id:"terms",checked:S,onCheckedChange:a=>F(a===!0)}),e.jsxs("span",{className:"text-sm text-text-secondary select-none",children:["I agree to the"," ",e.jsx("a",{href:"#",className:"text-accent-blue hover:underline",onClick:a=>a.preventDefault(),children:"Terms and Conditions"})," ","and"," ",e.jsx("a",{href:"#",className:"text-accent-blue hover:underline",onClick:a=>a.preventDefault(),children:"Privacy Policy"})]})]}),e.jsx(M,{type:"submit",variant:"primary",size:"lg",fullWidth:!0,loading:r,disabled:r,children:"Create Account"})]})});t.displayName="SignupForm";t.__docgenInfo={description:"",methods:[],displayName:"SignupForm",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: { name: string; email: string; password: string; confirmPassword: string; acceptTerms: boolean }) => void | Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ name: string; email: string; password: string; confirmPassword: string; acceptTerms: boolean }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"email",value:{name:"string",required:!0}},{key:"password",value:{name:"string",required:!0}},{key:"confirmPassword",value:{name:"string",required:!0}},{key:"acceptTerms",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const oe={title:"Components/SignupForm",component:t,parameters:{layout:"centered"},tags:["autodocs"]},m={args:{onSubmit:async s=>{console.log("Signup submitted:",s),await new Promise(r=>setTimeout(r,1e3))}}},l={args:{error:"This email is already registered. Please use a different email or sign in.",onSubmit:async s=>{console.log("Signup submitted:",s)}}},d={args:{isLoading:!0,onSubmit:async s=>{console.log("Signup submitted:",s)}}},u={render:()=>{const s=async r=>{console.log("Signup data:",r),await new Promise(f=>setTimeout(f,1500)),alert(`Account created for ${r.name} (${r.email})`)};return e.jsx(t,{onSubmit:s})}},p={render:()=>{const s=async r=>{if(r.email.includes("test"))throw new Error("Email domain not allowed for registration");alert("Account created successfully!")};return e.jsx(t,{onSubmit:s})}},g={render:()=>{const s=async r=>{console.log("This should not be called if passwords mismatch")};return e.jsx(t,{onSubmit:s,error:"Passwords do not match"})}},h={render:()=>{const s=async r=>{console.log("This should not be called with weak password")};return e.jsx(t,{onSubmit:s,error:"Password must be at least 8 characters"})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: async data => {
      console.log('Signup submitted:', data);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'This email is already registered. Please use a different email or sign in.',
    onSubmit: async data => {
      console.log('Signup submitted:', data);
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    onSubmit: async data => {
      console.log('Signup submitted:', data);
    }
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = async (data: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
      acceptTerms: boolean;
    }) => {
      console.log('Signup data:', data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert(\`Account created for \${data.name} (\${data.email})\`);
    };
    return <SignupForm onSubmit={handleSubmit} />;
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = async (data: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
      acceptTerms: boolean;
    }) => {
      // Simulate validation error
      if (data.email.includes('test')) {
        throw new Error('Email domain not allowed for registration');
      }
      alert('Account created successfully!');
    };
    return <SignupForm onSubmit={handleSubmit} />;
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = async (data: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
      acceptTerms: boolean;
    }) => {
      console.log('This should not be called if passwords mismatch');
    };
    return <SignupForm onSubmit={handleSubmit} error="Passwords do not match" />;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = async (data: {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
      acceptTerms: boolean;
    }) => {
      console.log('This should not be called with weak password');
    };
    return <SignupForm onSubmit={handleSubmit} error="Password must be at least 8 characters" />;
  }
}`,...h.parameters?.docs?.source}}};const ie=["Default","WithError","Loading","Interactive","WithValidationError","PasswordMismatch","WeakPassword"];export{m as Default,u as Interactive,d as Loading,g as PasswordMismatch,h as WeakPassword,l as WithError,p as WithValidationError,ie as __namedExportsOrder,oe as default};
