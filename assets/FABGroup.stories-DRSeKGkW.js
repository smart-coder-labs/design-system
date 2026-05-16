import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DuoaHqPM.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{l as i,s as a,t as o}from"./es-lKEstbry.js";import{n as s,t as c}from"./utils-COD7dmCP.js";import{K as l,On as u,Yt as d,ft as f,hn as p,i as m,mt as h,s as g,st as _,t as v,tr as y,z as b}from"./lucide-react-Js4yG5Ra.js";import{t as x}from"./react-dom-B5hnP7Wk.js";var S,C,w,T,E=e((()=>{S=t(n()),C=t(x()),s(),o(),v(),w=r(),T=(0,S.forwardRef)(({actions:e,position:t=`bottom-right`,className:n},r)=>{let[o,s]=(0,S.useState)(!1),[l,u]=(0,S.useState)(!1);(0,S.useEffect)(()=>{u(!0)},[]);let d={none:``,"bottom-right":`fixed bottom-6 right-6 z-30`,"bottom-left":`fixed bottom-6 left-6 z-30`,"top-right":`fixed top-6 right-6 z-30`,"top-left":`fixed top-6 left-6 z-30`},f=t!==`none`,p=(0,w.jsxs)(`div`,{ref:r,className:c(`flex flex-col-reverse items-end gap-3`,d[t],n),children:[(0,w.jsx)(i,{children:o&&e.map((e,t)=>{let n=e.icon;return(0,w.jsxs)(a.div,{initial:{scale:0,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:0,opacity:0,y:20},transition:{type:`spring`,stiffness:400,damping:25,delay:t*.05},className:`flex items-center gap-3`,children:[(0,w.jsx)(a.span,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{delay:t*.05+.1},className:`px-3 py-1.5 bg-surface-elevated border border-border-primary rounded-lg shadow-md text-sm font-medium text-text-primary whitespace-nowrap`,children:e.label}),(0,w.jsx)(a.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{e.onClick(),s(!1)},className:c(`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-apple focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer`,{primary:`bg-accent-blue text-white hover:bg-accent-blueHover`,secondary:`bg-surface-elevated text-text-primary hover:bg-surface-secondary border border-border-primary`,tertiary:`bg-surface-tertiary text-text-primary hover:bg-surface-secondary`}[e.variant||`secondary`]),children:(0,w.jsx)(n,{className:`w-5 h-5`})})]},t)})}),(0,w.jsx)(a.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>s(!o),className:c(`w-14 h-14 rounded-full bg-accent-blue text-white flex items-center justify-center shadow-xl transition-apple focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer`,`hover:bg-accent-blue-hover`),children:(0,w.jsx)(a.div,{animate:{rotate:o?45:0},transition:{type:`spring`,stiffness:400,damping:25},children:o?(0,w.jsx)(m,{className:`w-6 h-6`}):(0,w.jsx)(_,{className:`w-6 h-6`})})})]});return f&&l?(0,C.createPortal)(p,document.body):p}),T.displayName=`FABGroup`,T.__docgenInfo={description:``,methods:[],displayName:`FABGroup`,props:{actions:{required:!0,tsType:{name:`Array`,elements:[{name:`FABGroupAction`}],raw:`FABGroupAction[]`},description:``},position:{required:!1,tsType:{name:`union`,raw:`'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'none'`,elements:[{name:`literal`,value:`'bottom-right'`},{name:`literal`,value:`'bottom-left'`},{name:`literal`,value:`'top-right'`},{name:`literal`,value:`'top-left'`},{name:`literal`,value:`'none'`}]},description:``,defaultValue:{value:`'bottom-right'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),D,O,k,A,j,M,N,P,F,I,L,R,z,B;e((()=>{E(),v(),{action:D}=__STORYBOOK_MODULE_ACTIONS__,O=[{icon:h,label:`Write Note`,onClick:D(`write-note`)},{icon:y,label:`Take Photo`,onClick:D(`take-photo`)},{icon:p,label:`Upload Document`,onClick:D(`upload-doc`)},{icon:d,label:`Gallery`,onClick:D(`gallery`)}],k=[{icon:l,label:`Send Money`,onClick:D(`send-money`),variant:`primary`},{icon:u,label:`Pay Card`,onClick:D(`pay-card`)},{icon:f,label:`New Savings Goal`,onClick:D(`new-savings`)},{icon:b,label:`Enable Security`,onClick:D(`security`),variant:`tertiary`}],A={title:`Buttons/FABGroup`,component:T,tags:[`autodocs`]},j={args:{actions:O},parameters:{layout:`fullscreen`}},M={args:{actions:O,position:`none`}},N={args:{actions:[{icon:h,label:`Edit`,onClick:D(`edit`)},{icon:y,label:`Capture`,onClick:D(`capture`)}]},parameters:{layout:`fullscreen`}},P={args:{actions:k,position:`bottom-right`},parameters:{layout:`fullscreen`}},F={args:{actions:O,position:`bottom-left`},parameters:{layout:`fullscreen`}},I={args:{actions:O,position:`top-right`},parameters:{layout:`fullscreen`}},L={args:{actions:O,position:`top-left`},parameters:{layout:`fullscreen`}},R={args:{actions:[{icon:Plus,label:`Quick Add`,onClick:D(`quick-add`),variant:`primary`}]},parameters:{layout:`fullscreen`}},z={args:{actions:[{icon:l,label:`Wire Transfer`,onClick:D(`wire`),variant:`primary`},{icon:u,label:`Freeze Card`,onClick:D(`freeze`)},{icon:g,label:`View Balance`,onClick:D(`balance`)},{icon:f,label:`Set Goal`,onClick:D(`goal`)},{icon:b,label:`Security Check`,onClick:D(`shield`)},{icon:y,label:`Deposit Check`,onClick:D(`deposit`)},{icon:p,label:`Statements`,onClick:D(`statements`)}],position:`bottom-right`},parameters:{layout:`fullscreen`}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    actions: defaultActions
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    actions: defaultActions,
    position: 'none'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      icon: Pen,
      label: 'Edit',
      onClick: action('edit')
    }, {
      icon: Camera,
      label: 'Capture',
      onClick: action('capture')
    }]
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    actions: fintechActions,
    position: 'bottom-right'
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    actions: defaultActions,
    position: 'bottom-left'
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    actions: defaultActions,
    position: 'top-right'
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    actions: defaultActions,
    position: 'top-left'
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      icon: Plus,
      label: 'Quick Add',
      onClick: action('quick-add'),
      variant: 'primary'
    }]
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      icon: Send,
      label: 'Wire Transfer',
      onClick: action('wire'),
      variant: 'primary'
    }, {
      icon: CreditCard,
      label: 'Freeze Card',
      onClick: action('freeze')
    }, {
      icon: Wallet,
      label: 'View Balance',
      onClick: action('balance')
    }, {
      icon: PiggyBank,
      label: 'Set Goal',
      onClick: action('goal')
    }, {
      icon: Shield,
      label: 'Security Check',
      onClick: action('shield')
    }, {
      icon: Camera,
      label: 'Deposit Check',
      onClick: action('deposit')
    }, {
      icon: FileText,
      label: 'Statements',
      onClick: action('statements')
    }],
    position: 'bottom-right'
  },
  parameters: {
    layout: 'fullscreen'
  }
}`,...z.parameters?.docs?.source}}},B=[`Default`,`PositionNone`,`TwoActions`,`FintechActions`,`BottomLeft`,`TopRight`,`TopLeft`,`SingleAction`,`ManyActions`]}))();export{F as BottomLeft,j as Default,P as FintechActions,z as ManyActions,M as PositionNone,R as SingleAction,L as TopLeft,I as TopRight,N as TwoActions,B as __namedExportsOrder,A as default};