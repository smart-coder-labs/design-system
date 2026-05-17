import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-D0o8cdjS.js";import{at as n,o as r,t as i}from"./lucide-react-yAgQzC9Q.js";import{t as a}from"./jsx-runtime-DaLCRA3n.js";import{s as o,t as s}from"./es-biEEKJuQ.js";import{n as c,t as l}from"./Button-ChIMYuM7.js";var u,d,f=e((()=>{t(),s(),i(),l(),u=a(),d=({title:e=`No Internet Connection`,description:t=`Please check your network settings and try again.`,onRetry:i,isRetrying:a=!1,fullPage:s=!1,className:l=``,icon:d})=>(0,u.jsx)(`div`,{className:`
    flex flex-col items-center justify-center text-center p-8
    ${s?`fixed inset-0 z-50 bg-background-primary/95 backdrop-blur-sm`:`w-full h-full bg-surface-primary rounded-2xl`}
    ${l}
  `.trim().replace(/\s+/g,` `),children:(0,u.jsxs)(o.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.4,ease:[.16,1,.3,1]},className:`max-w-md mx-auto flex flex-col items-center`,children:[(0,u.jsxs)(`div`,{className:`mb-6 relative`,children:[(0,u.jsx)(o.div,{className:`absolute inset-0 bg-status-error/10 rounded-full blur-xl`,animate:{opacity:[.3,.6,.3],scale:[1,1.1,1]},transition:{duration:3,repeat:1/0,ease:`easeInOut`}}),(0,u.jsx)(`div`,{className:`relative bg-surface-secondary p-5 rounded-full`,children:d||(0,u.jsx)(r,{className:`w-10 h-10 text-text-secondary`,strokeWidth:1.5})})]}),(0,u.jsx)(`h3`,{className:`text-xl font-semibold text-text-primary mb-2`,children:e}),(0,u.jsx)(`p`,{className:`text-text-secondary mb-8 leading-relaxed`,children:t}),i&&(0,u.jsx)(c,{variant:`primary`,onClick:i,loading:a,leftIcon:a?void 0:(0,u.jsx)(n,{size:16}),children:`Try Again`})]})}),d.displayName=`OfflineState`,d.__docgenInfo={description:``,methods:[],displayName:`OfflineState`,props:{title:{required:!1,tsType:{name:`string`},description:`Title of the offline state
@default "No Internet Connection"`,defaultValue:{value:`"No Internet Connection"`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text
@default "Please check your network settings and try again."`,defaultValue:{value:`"Please check your network settings and try again."`,computed:!1}},onRetry:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback function when the retry button is clicked`},isRetrying:{required:!1,tsType:{name:`boolean`},description:`Whether the retry action is currently in progress`,defaultValue:{value:`false`,computed:!1}},fullPage:{required:!1,tsType:{name:`boolean`},description:`Whether to display as a full page overlay
@default false`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom class name`,defaultValue:{value:`''`,computed:!1}},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Custom icon to display`}}}})),p,m,h,g,_,v,y,b,x,S;e((()=>{f(),p={title:`Surfaces/OfflineState`,component:d,tags:[`autodocs`]},m={args:{message:`You are currently offline. Some features may be unavailable.`}},h={args:{title:`No Internet Connection`,message:`Please check your connection and try again.`}},g={args:{title:`Connection Lost`,message:`We could not reach our servers.`,icon:`wifi`}},_={args:{title:`Connection Error`,message:`Unable to connect to the server.`,onRetry:()=>alert(`Retrying...`),retryLabel:`Try Again`}},v={args:{message:`Offline`}},y={args:{title:`No Internet Connection`,message:`Your data is safe and will sync automatically when reconnected.`,icon:`bank`,onRetry:()=>console.log(`Retrying...`),retryLabel:`Reconnect`}},b={args:{title:`Scheduled Maintenance`,message:`We are upgrading our systems. Expected completion: 3:00 AM EST.`,icon:`maintenance`}},x={args:{title:`Too Many Requests`,message:`Please wait 60 seconds before trying again.`,icon:`clock`}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'You are currently offline. Some features may be unavailable.'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No Internet Connection',
    message: 'Please check your connection and try again.'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Connection Lost',
    message: 'We could not reach our servers.',
    icon: 'wifi'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Connection Error',
    message: 'Unable to connect to the server.',
    onRetry: () => alert('Retrying...'),
    retryLabel: 'Try Again'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Offline'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No Internet Connection',
    message: 'Your data is safe and will sync automatically when reconnected.',
    icon: 'bank',
    onRetry: () => console.log('Retrying...'),
    retryLabel: 'Reconnect'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Scheduled Maintenance',
    message: 'We are upgrading our systems. Expected completion: 3:00 AM EST.',
    icon: 'maintenance'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Too Many Requests',
    message: 'Please wait 60 seconds before trying again.',
    icon: 'clock'
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithTitle`,`CustomIcon`,`WithRetry`,`Minimal`,`BankingOffline`,`ServerMaintenance`,`RateLimited`]}))();export{y as BankingOffline,g as CustomIcon,m as Default,v as Minimal,x as RateLimited,b as ServerMaintenance,_ as WithRetry,h as WithTitle,S as __namedExportsOrder,p as default};