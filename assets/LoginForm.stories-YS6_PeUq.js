import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ba3ihGpN.js";import{Pt as r,Yn as i,t as a}from"./lucide-react-B3llQuma.js";import{n as o,t as s}from"./utils-CcEteFRA.js";import{t as c}from"./jsx-runtime-WZfjI2gv.js";import{t as l}from"./Input-BenhK3TE.js";import{t as u}from"./Input-C3IU42GV.js";import{n as d,t as f}from"./Button-DSYoQGzG.js";import{t as p}from"./Checkbox-BWflqYlr.js";import{t as m}from"./Checkbox-BKIRhi39.js";import{t as h}from"./PasswordInput-Iy8jEF-T.js";import{t as g}from"./PasswordInput-TE0NYdBO.js";var _,v,y,b=e((()=>{_=t(n()),o(),u(),f(),g(),m(),a(),v=c(),y=_.forwardRef(({onSubmit:e,onForgotPassword:t,isLoading:n=!1,error:a,className:o,...c},u)=>{let[f,m]=(0,_.useState)(``),[g,y]=(0,_.useState)(``),[b,x]=(0,_.useState)(!1),[S,C]=(0,_.useState)(``),w=async t=>{if(t.preventDefault(),C(``),!f||!g){C(`Please fill in all fields`);return}try{await e?.({email:f,password:g,rememberMe:b})}catch(e){C(e instanceof Error?e.message:`An error occurred`)}},T=a||S;return(0,v.jsxs)(`form`,{ref:u,onSubmit:w,className:s(`w-full max-w-xl space-y-10`,o),...c,children:[(0,v.jsxs)(`div`,{className:`text-center space-y-4`,children:[(0,v.jsx)(`h2`,{className:`text-4xl font-bold text-text-primary`,children:`Welcome back`}),(0,v.jsx)(`p`,{className:`text-lg text-text-secondary`,children:`Sign in to your account to continue`})]}),T&&(0,v.jsxs)(`div`,{className:`flex items-center gap-2 p-3 bg-status-error/10 border border-status-error/20 rounded-xl text-status-error text-sm`,children:[(0,v.jsx)(i,{className:`w-4 h-4 flex-shrink-0`}),(0,v.jsx)(`span`,{children:T})]}),(0,v.jsxs)(`div`,{className:`space-y-6`,children:[(0,v.jsx)(l,{type:`email`,label:`Email`,placeholder:`you@example.com`,value:f,onChange:e=>m(e.target.value),leftIcon:(0,v.jsx)(r,{className:`w-4 h-4`}),required:!0,disabled:n}),(0,v.jsx)(h,{label:`Password`,placeholder:`Enter your password`,value:g,onChange:e=>y(e),required:!0,disabled:n})]}),(0,v.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,v.jsxs)(`label`,{className:`flex items-center gap-2 cursor-pointer`,children:[(0,v.jsx)(p,{id:`remember`,checked:b,onCheckedChange:e=>x(e===!0)}),(0,v.jsx)(`span`,{className:`text-sm text-text-secondary select-none`,children:`Remember me`})]}),t&&(0,v.jsx)(`button`,{type:`button`,onClick:t,className:`text-sm text-accent-blue hover:text-accent-blue-hover transition-colors`,children:`Forgot password?`})]}),(0,v.jsx)(d,{type:`submit`,variant:`primary`,size:`lg`,fullWidth:!0,loading:n,disabled:n,children:`Sign In`})]})}),y.displayName=`LoginForm`,y.__docgenInfo={description:``,methods:[],displayName:`LoginForm`,props:{onSubmit:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(data: { email: string; password: string; rememberMe: boolean }) => void | Promise<void>`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ email: string; password: string; rememberMe: boolean }`,signature:{properties:[{key:`email`,value:{name:`string`,required:!0}},{key:`password`,value:{name:`string`,required:!0}},{key:`rememberMe`,value:{name:`boolean`,required:!0}}]}},name:`data`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:``},onForgotPassword:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},isLoading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},error:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}},composes:[`Omit`]}})),x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{n(),b(),x=c(),{action:S}=__STORYBOOK_MODULE_ACTIONS__,C={title:`Forms/LoginForm`,component:y,tags:[`autodocs`],parameters:{layout:`centered`}},w={args:{onSubmit:S(`login-submit`)}},T={args:{onSubmit:S(`login-submit`),error:`Invalid email or password. Please try again.`}},E={args:{onSubmit:S(`login-submit`),loading:!0}},D={args:{onSubmit:S(`login-submit`),showTwoFactor:!0}},O={args:{onSubmit:S(`login-submit`),title:`FinBank Online`,subtitle:`Secure access to your accounts`,showTwoFactor:!0}},k={args:{onSubmit:S(`login-submit`),showForgotPassword:!0}},A={args:{onSubmit:S(`login-submit`),error:`Your account has been locked due to multiple failed attempts. Please contact support.`,loading:!1}},j={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,x.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,x.jsx)(e,{})})]},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: action('login-submit')
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: action('login-submit'),
    error: 'Invalid email or password. Please try again.'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: action('login-submit'),
    loading: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: action('login-submit'),
    showTwoFactor: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: action('login-submit'),
    title: 'FinBank Online',
    subtitle: 'Secure access to your accounts',
    showTwoFactor: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: action('login-submit'),
    showForgotPassword: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: action('login-submit'),
    error: 'Your account has been locked due to multiple failed attempts. Please contact support.',
    loading: false
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
}`,...j.parameters?.docs?.source}}},M=[`Default`,`WithError`,`Loading`,`WithTwoFactor`,`BankingLogin`,`ForgotPasswordForm`,`FullError`,`DarkMode`]}))();export{O as BankingLogin,j as DarkMode,w as Default,k as ForgotPasswordForm,A as FullError,E as Loading,T as WithError,D as WithTwoFactor,M as __namedExportsOrder,C as default};