import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as k,r as n}from"./iframe-Cb93e_Z8.js";import{c as N}from"./utils-CDN07tui.js";import{I}from"./Input-C_E_938v.js";import{B as q}from"./Button-DGE0rp2O.js";import{P as C}from"./PasswordInput-DIAutw6M.js";import{C as M}from"./Checkbox-CRoPLbQV.js";import{C as T}from"./circle-alert-_hmxvS_r.js";import{M as W}from"./mail-DPzt2fJt.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-b22VB84a.js";import"./eye-off-CXV91Xl9.js";import"./createLucideIcon-DjNmKTqa.js";import"./eye-8WKNxEmb.js";import"./check-C_0B53zo.js";import"./x-cLebVC1h.js";import"./minus-z8RVuAbV.js";const t=k.forwardRef(({onSubmit:r,onForgotPassword:o,isLoading:s=!1,error:p,className:f,...S},v)=>{const[g,P]=n.useState(""),[b,j]=n.useState(""),[x,F]=n.useState(!1),[L,w]=n.useState(""),E=async a=>{if(a.preventDefault(),w(""),!g||!b){w("Please fill in all fields");return}try{await r?.({email:g,password:b,rememberMe:x})}catch(h){w(h instanceof Error?h.message:"An error occurred")}},y=p||L;return e.jsxs("form",{ref:v,onSubmit:E,className:N("w-full max-w-xl space-y-10",f),...S,children:[e.jsxs("div",{className:"text-center space-y-4",children:[e.jsx("h2",{className:"text-4xl font-bold text-text-primary",children:"Welcome back"}),e.jsx("p",{className:"text-lg text-text-secondary",children:"Sign in to your account to continue"})]}),y&&e.jsxs("div",{className:"flex items-center gap-2 p-3 bg-status-error/10 border border-status-error/20 rounded-xl text-status-error text-sm",children:[e.jsx(T,{className:"w-4 h-4 flex-shrink-0"}),e.jsx("span",{children:y})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(I,{type:"email",label:"Email",placeholder:"you@example.com",value:g,onChange:a=>P(a.target.value),leftIcon:e.jsx(W,{className:"w-4 h-4"}),required:!0,disabled:s}),e.jsx(C,{label:"Password",placeholder:"Enter your password",value:b,onChange:a=>j(a),required:!0,disabled:s})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx(M,{id:"remember",checked:x,onCheckedChange:a=>F(a===!0)}),e.jsx("span",{className:"text-sm text-text-secondary select-none",children:"Remember me"})]}),o&&e.jsx("button",{type:"button",onClick:o,className:"text-sm text-accent-blue hover:text-accent-blue-hover transition-colors",children:"Forgot password?"})]}),e.jsx(q,{type:"submit",variant:"primary",size:"lg",fullWidth:!0,loading:s,disabled:s,children:"Sign In"})]})});t.displayName="LoginForm";t.__docgenInfo={description:"",methods:[],displayName:"LoginForm",props:{onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: { email: string; password: string; rememberMe: boolean }) => void | Promise<void>",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ email: string; password: string; rememberMe: boolean }",signature:{properties:[{key:"email",value:{name:"string",required:!0}},{key:"password",value:{name:"string",required:!0}},{key:"rememberMe",value:{name:"boolean",required:!0}}]}},name:"data"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},onForgotPassword:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const Z={title:"Components/LoginForm",component:t,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{onSubmit:async r=>{console.log("Login submitted:",r),await new Promise(o=>setTimeout(o,1e3))}}},m={args:{error:"Invalid email or password. Please try again.",onSubmit:async r=>{console.log("Login submitted:",r)}}},l={args:{isLoading:!0,onSubmit:async r=>{console.log("Login submitted:",r)}}},c={args:{onSubmit:async r=>{console.log("Login submitted:",r)},onForgotPassword:()=>{console.log("Forgot password clicked")}}},d={render:()=>{const r=async s=>{console.log("Login data:",s),await new Promise(p=>setTimeout(p,1500)),alert(`Logged in as ${s.email}`)},o=()=>{alert("Password reset link sent to your email")};return e.jsx(t,{onSubmit:r,onForgotPassword:o})}},u={render:()=>{const r=async o=>{throw new Error("Account locked. Please contact support.")};return e.jsx(t,{onSubmit:r,onForgotPassword:()=>console.log("Forgot password")})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: async data => {
      console.log('Login submitted:', data);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'Invalid email or password. Please try again.',
    onSubmit: async data => {
      console.log('Login submitted:', data);
    }
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    onSubmit: async data => {
      console.log('Login submitted:', data);
    }
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: async data => {
      console.log('Login submitted:', data);
    },
    onForgotPassword: () => {
      console.log('Forgot password clicked');
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = async (data: {
      email: string;
      password: string;
      rememberMe: boolean;
    }) => {
      console.log('Login data:', data);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      alert(\`Logged in as \${data.email}\`);
    };
    const handleForgotPassword = () => {
      alert('Password reset link sent to your email');
    };
    return <LoginForm onSubmit={handleSubmit} onForgotPassword={handleForgotPassword} />;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = async (data: {
      email: string;
      password: string;
      rememberMe: boolean;
    }) => {
      // Simulate validation error
      throw new Error('Account locked. Please contact support.');
    };
    return <LoginForm onSubmit={handleSubmit} onForgotPassword={() => console.log('Forgot password')} />;
  }
}`,...u.parameters?.docs?.source}}};const ee=["Default","WithError","Loading","WithForgotPassword","Interactive","WithValidationError"];export{i as Default,d as Interactive,l as Loading,m as WithError,c as WithForgotPassword,u as WithValidationError,ee as __namedExportsOrder,Z as default};
