import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-XNVef-eS.js";import{En as r,Fn as i,Tn as a,jn as o,t as s,tr as c,v as l}from"./lucide-react-DbXpDP9_.js";import{n as u,t as d}from"./utils-ijcE-ZHT.js";import{t as f}from"./jsx-runtime-DaLCRA3n.js";import{s as p,t as m}from"./es-CzpC66EN.js";import{n as h,t as g}from"./Button-Do7oE33J.js";var _,v,y,b=e((()=>{_=t(n()),u(),m(),s(),g(),v=f(),y=_.forwardRef(({codes:e,onCopy:t,onDownload:n,title:s=`Recovery Codes`,description:u=`Save these codes in a safe place. You can use them to access your account if you lose your device.`,showWarning:f=!0,className:m,...g},y)=>{let[b,x]=(0,_.useState)(null),[S,C]=(0,_.useState)(new Set),w=(e,n)=>{navigator.clipboard.writeText(e),x(n),setTimeout(()=>x(null),2e3),t?.(e)},T=e=>{C(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},E=()=>{let t=e.join(`
`),r=new Blob([t],{type:`text/plain`}),i=URL.createObjectURL(r),a=document.createElement(`a`);a.href=i,a.download=`recovery-codes.txt`,a.click(),URL.revokeObjectURL(i),n?.()};return(0,v.jsxs)(`div`,{ref:y,className:d(`w-full max-w-md space-y-4`,m),...g,children:[(0,v.jsxs)(`div`,{className:`text-center space-y-2`,children:[(0,v.jsx)(`h2`,{className:`text-xl font-bold text-text-primary`,children:s}),u&&(0,v.jsx)(`p`,{className:`text-sm text-text-secondary`,children:u})]}),f&&(0,v.jsxs)(`div`,{className:`flex items-start gap-3 p-4 bg-status-warning/10 border border-status-warning/20 rounded-xl`,children:[(0,v.jsx)(l,{className:`w-5 h-5 text-status-warning flex-shrink-0 mt-0.5`}),(0,v.jsxs)(`div`,{className:`flex-1`,children:[(0,v.jsx)(`p`,{className:`text-sm font-medium text-text-primary mb-1`,children:`Important`}),(0,v.jsx)(`p`,{className:`text-xs text-text-secondary`,children:`These codes can only be viewed once. Make sure to save them securely.`})]})]}),(0,v.jsx)(`div`,{className:`bg-surface-primary border border-border-primary rounded-xl p-4 space-y-2`,children:e.map((e,t)=>(0,v.jsxs)(p.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},transition:{delay:t*.05},className:`flex items-center justify-between gap-3 p-3 bg-surface-secondary rounded-lg`,children:[(0,v.jsxs)(`div`,{className:`flex items-center gap-3 flex-1 min-w-0`,children:[(0,v.jsx)(`span`,{className:`text-xs font-medium text-text-tertiary w-6 flex-shrink-0`,children:t+1}),(0,v.jsx)(`code`,{className:`text-sm font-mono text-text-primary flex-1 truncate`,children:S.has(t)?e:`•`.repeat(e.length)})]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,v.jsx)(h,{variant:`ghost`,size:`sm`,onClick:()=>T(t),children:S.has(t)?(0,v.jsx)(r,{className:`w-3.5 h-3.5`}):(0,v.jsx)(a,{className:`w-3.5 h-3.5`})}),(0,v.jsx)(h,{variant:`ghost`,size:`sm`,onClick:()=>w(e,t),children:b===t?(0,v.jsx)(c,{className:`w-3.5 h-3.5 text-status-success`}):(0,v.jsx)(i,{className:`w-3.5 h-3.5`})})]})]},t))}),(0,v.jsxs)(`div`,{className:`flex gap-2`,children:[(0,v.jsx)(h,{variant:`secondary`,fullWidth:!0,onClick:E,leftIcon:(0,v.jsx)(o,{className:`w-4 h-4`}),children:`Download Codes`}),(0,v.jsx)(h,{variant:`primary`,fullWidth:!0,onClick:()=>{e.forEach((e,t)=>w(e,t))},leftIcon:(0,v.jsx)(i,{className:`w-4 h-4`}),children:`Copy All`})]})]})}),y.displayName=`RecoveryCodeDisplay`,y.__docgenInfo={description:``,methods:[],displayName:`RecoveryCodeDisplay`,props:{codes:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},onCopy:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(code: string) => void`,signature:{arguments:[{type:{name:`string`},name:`code`}],return:{name:`void`}}},description:``},onDownload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},title:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Recovery Codes'`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Save these codes in a safe place. You can use them to access your account if you lose your device.'`,computed:!1}},showWarning:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}},composes:[`Omit`]}})),x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{b(),x=f(),S={title:`Data Display/RecoveryCodeDisplay`,component:y,parameters:{layout:`centered`},tags:[`autodocs`]},C=[`A3F9-2K8L-P5Q7-R1M4`,`B7N2-X4V6-W9Z3-T8Y1`,`C5H8-J2K4-L6M9-N3P7`,`D1Q4-R7S9-T2V5-W8X3`,`E6Y9-Z3A1-B4C7-D2F5`,`F8G2-H5J7-K1L4-M9N6`,`G3P7-Q1R4-S8T2-V5W9`,`H4X6-Y9Z2-A3B5-C8D1`],w={args:{codes:C}},T={args:{codes:C,onCopy:e=>console.log(`Copied code:`,e),onDownload:()=>console.log(`Downloaded codes`)}},E={args:{codes:C,title:`Backup Codes`,description:`Store these backup codes in a secure location. Each code can only be used once.`}},D={args:{codes:C,showWarning:!1}},O={args:{codes:[`A3F9-2K8L-P5Q7-R1M4`,`B7N2-X4V6-W9Z3-T8Y1`,`C5H8-J2K4-L6M9-N3P7`],title:`Emergency Access Codes`,description:`Use these codes if you lose access to your authenticator app.`}},k={args:{codes:[...C,`I7K3-L9M2-N5P8-Q1R4`,`J2S6-T9V3-W7X1-Y4Z8`,`K5A9-B2C6-D3F7-G1H4`,`L8J2-K5M9-N3P7-Q1R6`]}},A={args:{codes:C},render:()=>(0,x.jsx)(y,{codes:C,onCopy:e=>{alert(`Copied: ${e}`)},onDownload:()=>{alert(`Recovery codes downloaded!`)},title:`Your Recovery Codes`,description:`Save these codes securely. You'll need them to recover your account if you lose access.`})},j={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,x.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,x.jsx)(e,{})})]},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    codes: sampleCodes
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    codes: sampleCodes,
    onCopy: code => console.log('Copied code:', code),
    onDownload: () => console.log('Downloaded codes')
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    codes: sampleCodes,
    title: 'Backup Codes',
    description: 'Store these backup codes in a secure location. Each code can only be used once.'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    codes: sampleCodes,
    showWarning: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    codes: ['A3F9-2K8L-P5Q7-R1M4', 'B7N2-X4V6-W9Z3-T8Y1', 'C5H8-J2K4-L6M9-N3P7'],
    title: 'Emergency Access Codes',
    description: 'Use these codes if you lose access to your authenticator app.'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    codes: [...sampleCodes, 'I7K3-L9M2-N5P8-Q1R4', 'J2S6-T9V3-W7X1-Y4Z8', 'K5A9-B2C6-D3F7-G1H4', 'L8J2-K5M9-N3P7-Q1R6']
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    codes: sampleCodes
  },
  render: () => {
    const handleCopy = (code: string) => {
      alert(\`Copied: \${code}\`);
    };
    const handleDownload = () => {
      alert('Recovery codes downloaded!');
    };
    return <RecoveryCodeDisplay codes={sampleCodes} onCopy={handleCopy} onDownload={handleDownload} title="Your Recovery Codes" description="Save these codes securely. You'll need them to recover your account if you lose access." />;
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
}`,...j.parameters?.docs?.source}}},M=[`Default`,`WithActions`,`CustomTitle`,`WithoutWarning`,`FewCodes`,`ManyCodes`,`Interactive`,`DarkMode`]}))();export{E as CustomTitle,j as DarkMode,w as Default,O as FewCodes,A as Interactive,k as ManyCodes,T as WithActions,D as WithoutWarning,M as __namedExportsOrder,S as default};