import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BUF2whoS.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{Xn as o,Zn as s,Zt as c,i as l,t as u,v as d}from"./lucide-react-D5svGO2N.js";var f,p,m,h=e((()=>{f=t(n()),r(),p=a(),u(),m=(0,f.forwardRef)(({variant:e=`info`,title:t,icon:n,dismissible:r=!1,onDismiss:a,className:u,children:f,...m},h)=>{let g={info:{container:`bg-status-info/10 border-status-info/20 text-status-info`,icon:c},success:{container:`bg-status-success/10 border-status-success/20 text-status-success`,icon:o},warning:{container:`bg-status-warning/10 border-status-warning/20 text-status-warning`,icon:d},error:{container:`bg-status-error/10 border-status-error/20 text-status-error`,icon:s},neutral:{container:`bg-surface-secondary border-border-primary text-text-primary`,icon:c}},_=n||g[e].icon;return(0,p.jsxs)(`div`,{ref:h,className:i(`relative flex gap-3 p-4 rounded-xl border`,g[e].container,u),...m,children:[(0,p.jsx)(`div`,{className:`flex-shrink-0 mt-0.5`,children:(0,p.jsx)(_,{className:`w-5 h-5`})}),(0,p.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[t&&(0,p.jsx)(`h4`,{className:`font-semibold mb-1`,children:t}),(0,p.jsx)(`div`,{className:i(`text-sm`,e===`neutral`?`text-text-secondary`:``),children:f})]}),r&&a&&(0,p.jsx)(`button`,{onClick:a,className:`flex-shrink-0 p-1 rounded-lg hover:bg-black/10 transition-colors focus:outline-none`,"aria-label":`Dismiss`,children:(0,p.jsx)(l,{className:`w-4 h-4`})})]})}),m.displayName=`Callout`,m.__docgenInfo={description:``,methods:[],displayName:`Callout`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'info' | 'success' | 'warning' | 'error' | 'neutral'`,elements:[{name:`literal`,value:`'info'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'neutral'`}]},description:``,defaultValue:{value:`'info'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:``},icon:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:``},dismissible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),g,_,v,y,b,x,S,C,w,T;e((()=>{h(),g={title:`Surfaces/Callout`,component:m,tags:[`autodocs`]},_={args:{variant:`info`,title:`Information`,children:`Your transaction limit has been updated to $5,000 daily.`}},v={args:{variant:`success`,title:`Payment Successful`,children:`Your payment of $1,250.00 has been processed successfully.`}},y={args:{variant:`warning`,title:`Low Balance Alert`,children:`Your checking account balance is below $100. Consider transferring funds.`}},b={args:{variant:`error`,title:`Transaction Failed`,children:`The transaction could not be completed due to insufficient funds.`}},x={args:{variant:`neutral`,title:`Note`,children:`This action cannot be undone. Please review before proceeding.`}},S={args:{variant:`info`,children:`Your session will expire in 5 minutes.`}},C={args:{variant:`info`,title:`Announcement`,children:`New features are available. Check out the updated dashboard.`,dismissible:!0,onDismiss:()=>{}}},w={args:{variant:`warning`,title:`Update Required`,children:`Please update your app to the latest version for improved security.`,dismissible:!0,onDismiss:()=>{}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Information',
    children: 'Your transaction limit has been updated to $5,000 daily.'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Payment Successful',
    children: 'Your payment of $1,250.00 has been processed successfully.'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Low Balance Alert',
    children: 'Your checking account balance is below $100. Consider transferring funds.'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Transaction Failed',
    children: 'The transaction could not be completed due to insufficient funds.'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'neutral',
    title: 'Note',
    children: 'This action cannot be undone. Please review before proceeding.'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    children: 'Your session will expire in 5 minutes.'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'info',
    title: 'Announcement',
    children: 'New features are available. Check out the updated dashboard.',
    dismissible: true,
    onDismiss: () => {}
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'warning',
    title: 'Update Required',
    children: 'Please update your app to the latest version for improved security.',
    dismissible: true,
    onDismiss: () => {}
  }
}`,...w.parameters?.docs?.source}}},T=[`Info`,`Success`,`Warning`,`Error`,`Neutral`,`WithoutTitle`,`Dismissible`,`DismissibleWarning`]}))();export{C as Dismissible,w as DismissibleWarning,b as Error,_ as Info,x as Neutral,v as Success,y as Warning,S as WithoutTitle,T as __namedExportsOrder,g as default};