import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-Ns4lj-Vt.js";import{n,t as r}from"./utils-4pdYZGDS.js";import{t as i}from"./jsx-runtime-BK76Wfr-.js";import{l as a,s as o,t as s}from"./es-Bab7Eu6H.js";import{n as c,t as l}from"./Spinner-CUkRTzFt.js";var u,d,f=e((()=>{t(),s(),c(),n(),u=i(),d=({isLoading:e,message:t,fullPage:n=!1,blur:i=!0,className:s,spinnerSize:c=`lg`})=>(0,u.jsx)(a,{children:e&&(0,u.jsx)(o.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:r(`flex flex-col items-center justify-center z-50`,n?`fixed inset-0`:`absolute inset-0 rounded-inherit`,i?`backdrop-blur-sm`:``,`bg-surface-primary/80`,s),children:(0,u.jsxs)(`div`,{className:r(`flex flex-col items-center gap-4`,i?`p-4`:`p-6 bg-surface-elevated rounded-xl shadow-lg border border-border-primary`),children:[(0,u.jsx)(l,{size:c}),t&&(0,u.jsx)(o.p,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},className:`text-sm font-medium text-text-secondary`,children:t})]})})}),d.displayName=`LoadingOverlay`,d.__docgenInfo={description:``,methods:[],displayName:`LoadingOverlay`,props:{isLoading:{required:!0,tsType:{name:`boolean`},description:`Whether the loading overlay is visible`},message:{required:!1,tsType:{name:`string`},description:`Optional message to display below the spinner`},fullPage:{required:!1,tsType:{name:`boolean`},description:`Whether to cover the entire viewport (fixed) or just the parent container (absolute)
@default false`,defaultValue:{value:`false`,computed:!1}},blur:{required:!1,tsType:{name:`boolean`},description:`Whether to apply a blur effect to the backdrop
@default true`,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom class name for the container`},spinnerSize:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size of the spinner
@default "lg"`,defaultValue:{value:`'lg'`,computed:!1}}}}})),p,m,h,g,_,v,y,b,x,S,C;e((()=>{t(),f(),p=i(),m={title:`Surfaces/LoadingOverlay`,component:d,tags:[`autodocs`],parameters:{layout:`centered`}},h={args:{loading:!0,children:(0,p.jsx)(`div`,{className:`w-96 h-48 bg-surface-primary rounded-2xl p-6`,children:`Content behind the overlay`})}},g={args:{loading:!0,message:`Processing your transaction...`,children:(0,p.jsx)(`div`,{className:`w-96 h-48 bg-surface-primary rounded-2xl p-6`,children:`Payment form content`})}},_={args:{loading:!0,message:`Sending $250.00 to Alice Johnson...`,spinnerSize:`lg`,children:(0,p.jsx)(`div`,{className:`w-96 h-48 bg-surface-primary rounded-2xl p-6`,children:`Payment details`})}},v={args:{loading:!0,message:`Verifying your identity...`,children:(0,p.jsx)(`div`,{className:`w-96 h-48 bg-surface-primary rounded-2xl p-6`,children:`Upload documents here`})}},y={args:{loading:!1,children:(0,p.jsx)(`div`,{className:`w-96 h-48 bg-surface-primary rounded-2xl p-6 flex items-center justify-center`,children:(0,p.jsx)(`p`,{className:`text-text-primary`,children:`Content is visible`})})}},b={args:{loading:!0,message:`Loading your portfolio...`,children:(0,p.jsx)(`div`,{className:`w-96 h-64 bg-surface-primary rounded-2xl p-6`,children:`Portfolio chart would render here`})}},x={decorators:[e=>(0,p.jsx)(`div`,{className:`relative h-96 w-full`,children:(0,p.jsx)(e,{})})],args:{loading:!0,fullPage:!0,message:`Loading...`}},S={args:{loading:!0,message:`Refreshing data...`,spinnerSize:`sm`,children:(0,p.jsx)(`div`,{className:`w-96 h-32 bg-surface-primary rounded-2xl p-6`,children:`Dashboard content`})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    children: <div className="w-96 h-48 bg-surface-primary rounded-2xl p-6">Content behind the overlay</div>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    message: 'Processing your transaction...',
    children: <div className="w-96 h-48 bg-surface-primary rounded-2xl p-6">Payment form content</div>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    message: 'Sending $250.00 to Alice Johnson...',
    spinnerSize: 'lg',
    children: <div className="w-96 h-48 bg-surface-primary rounded-2xl p-6">Payment details</div>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    message: 'Verifying your identity...',
    children: <div className="w-96 h-48 bg-surface-primary rounded-2xl p-6">Upload documents here</div>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    loading: false,
    children: <div className="w-96 h-48 bg-surface-primary rounded-2xl p-6 flex items-center justify-center"><p className="text-text-primary">Content is visible</p></div>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    message: 'Loading your portfolio...',
    children: <div className="w-96 h-64 bg-surface-primary rounded-2xl p-6">Portfolio chart would render here</div>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="relative h-96 w-full"><Story /></div>],
  args: {
    loading: true,
    fullPage: true,
    message: 'Loading...'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    message: 'Refreshing data...',
    spinnerSize: 'sm',
    children: <div className="w-96 h-32 bg-surface-primary rounded-2xl p-6">Dashboard content</div>
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithMessage`,`PaymentLoading`,`VerifyingID`,`NotLoading`,`PortfolioLoading`,`FullPageOverlay`,`SmallSpinner`]}))();export{h as Default,x as FullPageOverlay,y as NotLoading,_ as PaymentLoading,b as PortfolioLoading,S as SmallSpinner,v as VerifyingID,g as WithMessage,C as __namedExportsOrder,m as default};