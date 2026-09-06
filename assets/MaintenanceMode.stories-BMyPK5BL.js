import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-C8gh9c0G.js";import{In as n,Tr as r,Un as i,t as a}from"./lucide-react-DGSEAICK.js";import{t as o}from"./jsx-runtime-WZfjI2gv.js";import{s,t as c}from"./es-DlQin2IG.js";import{n as l,t as u}from"./Button-CuzwJ1VM.js";var d,f,p=e((()=>{t(),c(),a(),u(),d=o(),f=({title:e=`We'll be back soon`,description:t=`We're currently performing some scheduled maintenance. We should be back shortly.`,estimatedReturnTime:a,showContactSupport:o=!0,customAction:c,fullPage:u=!0,className:f=``,onContactSupport:p})=>(0,d.jsx)(`div`,{className:`
    flex flex-col items-center justify-center text-center p-8
    ${u?`min-h-screen w-full bg-background-secondary`:`w-full h-full bg-surface-primary rounded-2xl`}
    ${f}
  `.trim().replace(/\s+/g,` `),children:(0,d.jsxs)(s.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,ease:[.16,1,.3,1]},className:`max-w-md mx-auto`,children:[(0,d.jsxs)(`div`,{className:`relative mb-8 inline-flex items-center justify-center`,children:[(0,d.jsx)(s.div,{className:`absolute inset-0 bg-accent-blue/10 rounded-full blur-xl`,animate:{scale:[1,1.2,1],opacity:[.5,.8,.5]},transition:{duration:4,repeat:1/0,ease:`easeInOut`}}),(0,d.jsx)(`div`,{className:`relative bg-surface-primary p-6 rounded-full shadow-lg border border-border-primary`,children:(0,d.jsx)(n,{className:`w-12 h-12 text-accent-blue`,strokeWidth:1.5})})]}),(0,d.jsx)(`h1`,{className:`text-3xl font-bold text-text-primary mb-4 tracking-tight`,children:e}),(0,d.jsx)(`p`,{className:`text-text-secondary text-lg mb-8 leading-relaxed`,children:t}),a&&(0,d.jsxs)(`div`,{className:`flex items-center justify-center gap-2 text-text-tertiary mb-8 bg-surface-tertiary/50 py-2 px-4 rounded-full inline-flex`,children:[(0,d.jsx)(i,{size:16}),(0,d.jsxs)(`span`,{className:`text-sm font-medium`,children:[`Expected return: `,a]})]}),(0,d.jsxs)(`div`,{className:`flex flex-col sm:flex-row items-center justify-center gap-4`,children:[c,o&&!c&&(0,d.jsx)(l,{variant:`outline`,onClick:p,rightIcon:(0,d.jsx)(r,{size:16}),children:`Contact Support`})]}),(0,d.jsx)(`div`,{className:`mt-12 text-sm text-text-quaternary`,children:(0,d.jsxs)(`p`,{children:[`System Status: `,(0,d.jsx)(`span`,{className:`text-status-warning font-medium`,children:`Maintenance`})]})})]})}),f.displayName=`MaintenanceMode`,f.__docgenInfo={description:``,methods:[],displayName:`MaintenanceMode`,props:{title:{required:!1,tsType:{name:`string`},description:`Title of the maintenance page
@default "We'll be back soon"`,defaultValue:{value:`"We'll be back soon"`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Description text explaining the maintenance
@default "We're currently performing some scheduled maintenance. We should be back shortly."`,defaultValue:{value:`"We're currently performing some scheduled maintenance. We should be back shortly."`,computed:!1}},estimatedReturnTime:{required:!1,tsType:{name:`string`},description:`Estimated time when the service will be back`},showContactSupport:{required:!1,tsType:{name:`boolean`},description:`Whether to show a contact support button
@default true`,defaultValue:{value:`true`,computed:!1}},customAction:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Custom action button or link`},fullPage:{required:!1,tsType:{name:`boolean`},description:`Full page mode centers the content in the viewport
@default true`,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Custom class name`,defaultValue:{value:`''`,computed:!1}},onContactSupport:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback for contact support button`}}}})),m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{p(),m={title:`Surfaces/MaintenanceMode`,component:f,tags:[`autodocs`],parameters:{layout:`centered`}},h={args:{}},g={args:{title:`Scheduled Maintenance`,message:`We'll be performing a system upgrade. Service will resume at 6:00 AM EST.`,estimatedDuration:`2 hours`}},_={args:{title:`System Maintenance in Progress`,message:`Online banking is temporarily unavailable while we upgrade our systems. Your accounts and transactions are safe.`,estimatedDuration:`3 hours`,contactSupport:!0}},v={args:{title:`Trading Paused`,message:`Trading has been temporarily halted for scheduled maintenance. Open orders will not be affected.`,estimatedDuration:`1 hour`}},y={args:{title:`Under Maintenance`,message:`We're improving your experience. Please check back shortly.`,contactSupport:!0}},b={args:{title:`Quick Update`,message:`Back in 30 minutes!`,estimatedDuration:`30 minutes`}},x={args:{title:`CryptoVault Maintenance`,message:`Spot and futures trading are paused for scheduled maintenance. Withdrawals and deposits will resume automatically.`,estimatedDuration:`4 hours`,contactSupport:!0}},S={args:{title:`Scheduled Maintenance`,description:`We are upgrading our core banking systems to provide faster, more secure transactions.`,estimatedReturnTime:`4:00 AM EST`,showContactSupport:!0}},C={args:{title:`System Upgrade`,description:`Our mobile banking platform is being upgraded with new features.`,estimatedReturnTime:`Approximately 2 hours`,showContactSupport:!1}},w={args:{title:`Widget Unavailable`,description:`This feature is temporarily unavailable.`,fullPage:!1}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Scheduled Maintenance',
    message: 'We\\'ll be performing a system upgrade. Service will resume at 6:00 AM EST.',
    estimatedDuration: '2 hours'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'System Maintenance in Progress',
    message: 'Online banking is temporarily unavailable while we upgrade our systems. Your accounts and transactions are safe.',
    estimatedDuration: '3 hours',
    contactSupport: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Trading Paused',
    message: 'Trading has been temporarily halted for scheduled maintenance. Open orders will not be affected.',
    estimatedDuration: '1 hour'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Under Maintenance',
    message: 'We\\'re improving your experience. Please check back shortly.',
    contactSupport: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Quick Update',
    message: 'Back in 30 minutes!',
    estimatedDuration: '30 minutes'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'CryptoVault Maintenance',
    message: 'Spot and futures trading are paused for scheduled maintenance. Withdrawals and deposits will resume automatically.',
    estimatedDuration: '4 hours',
    contactSupport: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Scheduled Maintenance',
    description: 'We are upgrading our core banking systems to provide faster, more secure transactions.',
    estimatedReturnTime: '4:00 AM EST',
    showContactSupport: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'System Upgrade',
    description: 'Our mobile banking platform is being upgraded with new features.',
    estimatedReturnTime: 'Approximately 2 hours',
    showContactSupport: false
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Widget Unavailable',
    description: 'This feature is temporarily unavailable.',
    fullPage: false
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`ScheduledMaintenance`,`BankingSystemDown`,`TradingHalted`,`WithContact`,`ShortMessage`,`CryptoExchangeDowntime`,`BankingMaintenance`,`ContactSupportDisabled`,`InlineWidget`]}))();export{S as BankingMaintenance,_ as BankingSystemDown,C as ContactSupportDisabled,x as CryptoExchangeDowntime,h as Default,w as InlineWidget,g as ScheduledMaintenance,b as ShortMessage,v as TradingHalted,y as WithContact,T as __namedExportsOrder,m as default};