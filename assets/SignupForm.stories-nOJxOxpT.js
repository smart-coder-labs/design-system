import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DuoaHqPM.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{n as i,t as a}from"./utils-COD7dmCP.js";import{Un as o,jt as s,p as c,t as l}from"./lucide-react-Js4yG5Ra.js";import{t as u}from"./Input-BYVaDk4p.js";import{t as d}from"./Input-FZ8_2E-2.js";import{n as f,t as p}from"./Button-Cafbi4DX.js";import{n as m,t as h}from"./Checkbox-mLTCN9GT.js";import{t as g}from"./PasswordInput-Brbw3FZ4.js";import{t as _}from"./PasswordInput-BHB_P37h.js";var v,y,b,x=e((()=>{v=t(n()),i(),d(),p(),_(),h(),l(),y=r(),b=v.forwardRef(({onSubmit:e,isLoading:t=!1,error:n,className:r,...i},l)=>{let[d,p]=(0,v.useState)(``),[h,_]=(0,v.useState)(``),[b,x]=(0,v.useState)(``),[S,C]=(0,v.useState)(``),[w,T]=(0,v.useState)(!1),[E,D]=(0,v.useState)(``),O=async t=>{if(t.preventDefault(),D(``),!d||!h||!b||!S){D(`Please fill in all fields`);return}if(b!==S){D(`Passwords do not match`);return}if(b.length<8){D(`Password must be at least 8 characters`);return}if(!w){D(`Please accept the terms and conditions`);return}try{await e?.({name:d,email:h,password:b,confirmPassword:S,acceptTerms:w})}catch(e){D(e instanceof Error?e.message:`An error occurred`)}},k=n||E;return(0,y.jsxs)(`form`,{ref:l,onSubmit:O,className:a(`w-full max-w-xl space-y-10`,r),...i,children:[(0,y.jsxs)(`div`,{className:`text-center space-y-4`,children:[(0,y.jsx)(`h2`,{className:`text-4xl font-bold text-text-primary`,children:`Create account`}),(0,y.jsx)(`p`,{className:`text-lg text-text-secondary`,children:`Sign up to get started`})]}),k&&(0,y.jsxs)(`div`,{className:`flex items-center gap-2 p-3 bg-status-error/10 border border-status-error/20 rounded-xl text-status-error text-sm`,children:[(0,y.jsx)(o,{className:`w-4 h-4 flex-shrink-0`}),(0,y.jsx)(`span`,{children:k})]}),(0,y.jsxs)(`div`,{className:`space-y-6`,children:[(0,y.jsx)(u,{type:`text`,label:`Full Name`,placeholder:`John Doe`,value:d,onChange:e=>p(e.target.value),leftIcon:(0,y.jsx)(c,{className:`w-4 h-4`}),required:!0,disabled:t}),(0,y.jsx)(u,{type:`email`,label:`Email`,placeholder:`you@example.com`,value:h,onChange:e=>_(e.target.value),leftIcon:(0,y.jsx)(s,{className:`w-4 h-4`}),required:!0,disabled:t}),(0,y.jsx)(g,{label:`Password`,placeholder:`Create a password`,value:b,onChange:e=>x(e),required:!0,disabled:t}),(0,y.jsx)(g,{label:`Confirm Password`,placeholder:`Confirm your password`,value:S,onChange:e=>C(e),required:!0,disabled:t})]}),(0,y.jsxs)(`label`,{className:`flex items-start gap-2 cursor-pointer`,children:[(0,y.jsx)(m,{id:`terms`,checked:w,onCheckedChange:e=>T(e===!0)}),(0,y.jsxs)(`span`,{className:`text-sm text-text-secondary select-none`,children:[`I agree to the`,` `,(0,y.jsx)(`a`,{href:`#`,className:`text-accent-blue hover:underline`,onClick:e=>e.preventDefault(),children:`Terms and Conditions`}),` `,`and`,` `,(0,y.jsx)(`a`,{href:`#`,className:`text-accent-blue hover:underline`,onClick:e=>e.preventDefault(),children:`Privacy Policy`})]})]}),(0,y.jsx)(f,{type:`submit`,variant:`primary`,size:`lg`,fullWidth:!0,loading:t,disabled:t,children:`Create Account`})]})}),b.displayName=`SignupForm`,b.__docgenInfo={description:``,methods:[],displayName:`SignupForm`,props:{onSubmit:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(data: { name: string; email: string; password: string; confirmPassword: string; acceptTerms: boolean }) => void | Promise<void>`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ name: string; email: string; password: string; confirmPassword: string; acceptTerms: boolean }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`email`,value:{name:`string`,required:!0}},{key:`password`,value:{name:`string`,required:!0}},{key:`confirmPassword`,value:{name:`string`,required:!0}},{key:`acceptTerms`,value:{name:`boolean`,required:!0}}]}},name:`data`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:``},isLoading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},error:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}},composes:[`Omit`]}})),S,C,w,T,E,D,O,k,A,j,M;e((()=>{x(),S=r(),C={title:`Forms/SignupForm`,component:b,parameters:{layout:`centered`},tags:[`autodocs`]},w={args:{onSubmit:async e=>{console.log(`Signup submitted:`,e),await new Promise(e=>setTimeout(e,1e3))}}},T={args:{error:`This email is already registered. Please use a different email or sign in.`,onSubmit:async e=>{console.log(`Signup submitted:`,e)}}},E={args:{isLoading:!0,onSubmit:async e=>{console.log(`Signup submitted:`,e)}}},D={render:()=>(0,S.jsx)(b,{onSubmit:async e=>{console.log(`Signup data:`,e),await new Promise(e=>setTimeout(e,1500)),alert(`Account created for ${e.name} (${e.email})`)}})},O={render:()=>(0,S.jsx)(b,{onSubmit:async e=>{if(e.email.includes(`test`))throw Error(`Email domain not allowed for registration`);alert(`Account created successfully!`)}})},k={render:()=>(0,S.jsx)(b,{onSubmit:async e=>{console.log(`This should not be called if passwords mismatch`)},error:`Passwords do not match`})},A={render:()=>(0,S.jsx)(b,{onSubmit:async e=>{console.log(`This should not be called with weak password`)},error:`Password must be at least 8 characters`})},j={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,S.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,S.jsx)(e,{})})]},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: async data => {
      console.log('Signup submitted:', data);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    error: 'This email is already registered. Please use a different email or sign in.',
    onSubmit: async data => {
      console.log('Signup submitted:', data);
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    isLoading: true,
    onSubmit: async data => {
      console.log('Signup submitted:', data);
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    themes: {
      themeOverride: 'dark'
    }
  },
  decorators: [Story => <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>]
}`,...j.parameters?.docs?.source}}},M=[`Default`,`WithError`,`Loading`,`Interactive`,`WithValidationError`,`PasswordMismatch`,`WeakPassword`,`DarkMode`]}))();export{j as DarkMode,w as Default,D as Interactive,E as Loading,k as PasswordMismatch,A as WeakPassword,T as WithError,O as WithValidationError,M as __namedExportsOrder,C as default};