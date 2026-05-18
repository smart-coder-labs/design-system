import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-XNVef-eS.js";import{i as r,t as i}from"./lucide-react-DbXpDP9_.js";import{n as a,t as o}from"./utils-ijcE-ZHT.js";import{t as s}from"./jsx-runtime-DaLCRA3n.js";import{l as c,s as l,t as u}from"./es-CzpC66EN.js";import{t as d}from"./react-dom-BVNA-xMG.js";var f,p,m,h,g=e((()=>{f=t(n()),p=t(d()),a(),u(),i(),m=s(),h=({message:e,variant:t=`default`,action:n,duration:i=5e3,onClose:a,show:s=!0})=>{let[u,d]=(0,f.useState)(!1);(0,f.useEffect)(()=>{d(!0)},[]),(0,f.useEffect)(()=>{if(s&&i>0){let e=setTimeout(()=>{a?.()},i);return()=>clearTimeout(e)}},[s,i,a]);let h=(0,m.jsx)(c,{children:s&&(0,m.jsx)(l.div,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:`spring`,stiffness:400,damping:30},className:`fixed bottom-6 left-1/2 -translate-x-1/2 z-30 max-w-md w-full mx-4`,children:(0,m.jsxs)(`div`,{className:o(`flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg`,{default:`bg-surface-elevated text-text-primary border border-border-primary`,success:`bg-status-success/10 text-status-success border border-status-success/20`,error:`bg-status-error/10 text-status-error border border-status-error/20`,warning:`bg-status-warning/10 text-status-warning border border-status-warning/20`,info:`bg-status-info/10 text-status-info border border-status-info/20`}[t]),children:[(0,m.jsx)(`p`,{className:`flex-1 text-sm font-medium`,children:e}),(0,m.jsxs)(`div`,{className:`flex items-center gap-2`,children:[n&&(0,m.jsx)(`button`,{onClick:()=>{n.onClick(),a?.()},className:`text-sm font-semibold hover:opacity-80 transition-opacity focus:outline-none`,children:n.label}),a&&(0,m.jsx)(`button`,{onClick:a,className:`p-1 rounded-lg hover:bg-black/10 transition-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2`,"aria-label":`Close`,children:(0,m.jsx)(r,{className:`w-4 h-4`})})]})]})})});return u?(0,p.createPortal)(h,document.body):null},h.displayName=`Snackbar`})),_,v,y,b,x,S,C,w,T,E,D;e((()=>{g(),_=s(),v={title:`Surfaces/Snackbar`,component:h,tags:[`autodocs`]},y={args:{open:!0,message:`Transaction completed successfully`}},b={args:{open:!0,message:`Transfer of 0.5 BTC completed`,variant:`success`}},x={args:{open:!0,message:`Transaction failed. Insufficient funds.`,variant:`error`}},S={args:{open:!0,message:`Network congestion detected. Fees may be higher.`,variant:`warning`}},C={args:{open:!0,message:`2FA required for this withdrawal.`,variant:`info`}},w={args:{open:!0,message:`Item moved to trash`,action:{label:`Undo`,onClick:()=>alert(`Undo clicked`)}}},T={args:{open:!0,message:`This will auto-dismiss`,autoHideDuration:3e3}},E={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,_.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,_.jsx)(e,{})})]},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    message: 'Transaction completed successfully'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    message: 'Transfer of 0.5 BTC completed',
    variant: 'success'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    message: 'Transaction failed. Insufficient funds.',
    variant: 'error'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    message: 'Network congestion detected. Fees may be higher.',
    variant: 'warning'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    message: '2FA required for this withdrawal.',
    variant: 'info'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    message: 'Item moved to trash',
    action: {
      label: 'Undo',
      onClick: () => alert('Undo clicked')
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    message: 'This will auto-dismiss',
    autoHideDuration: 3000
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Success`,`Error`,`Warning`,`Info`,`WithAction`,`AutoHide`,`DarkMode`]}))();export{T as AutoHide,E as DarkMode,y as Default,x as Error,C as Info,b as Success,S as Warning,w as WithAction,D as __namedExportsOrder,v as default};