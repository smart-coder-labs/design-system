import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-2Bdvr1RY.js";import{G as r,Pn as i,Q as a,Xt as o,Y as s,Zn as c,_r as l,en as u,h as d,hr as f,i as p,t as m,tr as h,wr as g,x as _,xt as v}from"./lucide-react-ChvDEqVS.js";import{t as y}from"./jsx-runtime-WZfjI2gv.js";var b,x,S,C=e((()=>{b=t(n()),m(),x=y(),S=({actions:e,position:t=`bottom`,variant:n=`default`,showLabels:r=!1,dismissible:i=!1,onDismiss:a,className:o=``,offset:s=24,defaultActiveId:l})=>{let[u,d]=(0,b.useState)(!0),[f,m]=(0,b.useState)(!1),[h,g]=(0,b.useState)(l);(0,b.useEffect)(()=>{m(!0);let e=setTimeout(()=>m(!1),300);return()=>clearTimeout(e)},[]);let _=()=>{d(!1),a?.()},v=()=>{d(!0)},y=e=>{g(e.id),e.onClick()},S={top:`top-0 left-1/2 -translate-x-1/2`,bottom:`bottom-0 left-1/2 -translate-x-1/2`,"top-left":`top-0 left-0`,"top-right":`top-0 right-0`,"bottom-left":`bottom-0 left-0`,"bottom-right":`bottom-0 right-0`},C={default:`bg-surface-primary border border-border-primary shadow-lg`,compact:`bg-surface-primary border border-border-primary shadow-md`,glass:`glass border border-border-primary shadow-xl`},w={top:f?`animate-slide-down`:``,bottom:f?`animate-slide-up`:``,"top-left":f?`animate-scale-in`:``,"top-right":f?`animate-scale-in`:``,"bottom-left":f?`animate-scale-in`:``,"bottom-right":f?`animate-scale-in`:``},T=(e,t)=>{if(t)return`text-accent-blue border-b-2 border-accent-blue`;switch(e){case`primary`:return`text-accent-blue hover:bg-accent-blue/10`;case`danger`:return`text-status-error hover:bg-status-error/10`;default:return`text-text-primary hover:bg-background-tertiary/50`}};return!u&&i?(0,x.jsx)(`div`,{className:`floating-toolbar-collapsed fixed ${S[t]} z-50 ${o}`,style:{margin:`${s}px`},children:(0,x.jsx)(`button`,{onClick:v,className:`${C[n]} rounded-full p-3 hover:scale-110 transition-all duration-200 animate-scale-in`,"aria-label":`Expand toolbar`,children:(0,x.jsx)(c,{className:`w-5 h-5 text-text-primary`})})}):(0,x.jsxs)(`div`,{className:`floating-toolbar fixed ${S[t]} ${w[t]} z-50 ${o}`,style:{margin:`${s}px`},children:[(0,x.jsxs)(`div`,{className:`toolbar-container ${C[n]} rounded-2xl ${n===`compact`?`p-1.5`:`p-2`} flex items-center gap-1`,children:[(0,x.jsx)(`div`,{className:`flex items-center gap-1`,children:e.map(e=>{let t=h===e.id;return(0,x.jsxs)(`button`,{onClick:()=>y(e),disabled:e.disabled,className:`toolbar-action relative flex items-center gap-2 ${n===`compact`?`px-2.5 py-2`:`px-3 py-2.5`} rounded-xl font-medium text-sm transition-all duration-200 ${T(e.variant,t)} disabled:opacity-40 disabled:cursor-not-allowed group`,title:e.tooltip||e.label,"aria-label":e.label||e.tooltip,"aria-pressed":t,children:[(0,x.jsx)(`span`,{className:`flex-shrink-0 w-5 h-5`,children:e.icon}),r&&e.label&&(0,x.jsx)(`span`,{className:`whitespace-nowrap`,children:e.label}),e.tooltip&&!r&&!t&&(0,x.jsxs)(`span`,{className:`tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none shadow-lg`,children:[e.tooltip,(0,x.jsx)(`span`,{className:`tooltip-arrow absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-gray-900 dark:border-t-gray-100`})]})]},e.id)})}),i&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`div`,{className:`w-px h-6 bg-border-primary mx-1`}),(0,x.jsx)(`button`,{onClick:_,className:`dismiss-button flex items-center justify-center ${n===`compact`?`w-8 h-8`:`w-9 h-9`} rounded-xl text-text-secondary hover:text-text-primary hover:bg-background-tertiary/50 transition-all duration-200`,"aria-label":`Collapse toolbar`,children:(0,x.jsx)(p,{className:`w-4 h-4`})})]})]}),(0,x.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
        .floating-toolbar {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .toolbar-container {
          user-select: none;
          -webkit-user-select: none;
        }

        .toolbar-action {
          position: relative;
          overflow: visible;
        }

        .toolbar-action:not([aria-pressed="true"])::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: currentColor;
          opacity: 0;
          transition: opacity 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .toolbar-action:not([aria-pressed="true"]):hover::before {
          opacity: 0.08;
        }

        .toolbar-action:not([aria-pressed="true"]):active::before {
          opacity: 0.12;
        }

        .toolbar-action:disabled::before {
          opacity: 0;
        }

        .tooltip {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 100;
        }

        .dark .tooltip {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px) translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-12px) translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-up {
          animation: slideUp 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slide-down {
          animation: slideDown 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-scale-in {
          animation: scaleIn 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 640px) {
          .floating-toolbar {
            max-width: calc(100vw - 32px);
          }

          .toolbar-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .toolbar-container::-webkit-scrollbar {
            display: none;
          }
        }
      `}})]})},S.__docgenInfo={description:``,methods:[],displayName:`FloatingToolbar`,props:{actions:{required:!0,tsType:{name:`Array`,elements:[{name:`FloatingToolbarAction`}],raw:`FloatingToolbarAction[]`},description:``},position:{required:!1,tsType:{name:`union`,raw:`'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'`,elements:[{name:`literal`,value:`'top'`},{name:`literal`,value:`'bottom'`},{name:`literal`,value:`'top-left'`},{name:`literal`,value:`'top-right'`},{name:`literal`,value:`'bottom-left'`},{name:`literal`,value:`'bottom-right'`}]},description:``,defaultValue:{value:`'bottom'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'compact' | 'glass'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'compact'`},{name:`literal`,value:`'glass'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},showLabels:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},dismissible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},offset:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`24`,computed:!1}},defaultActiveId:{required:!1,tsType:{name:`string`},description:``}}}})),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{n(),C(),m(),w=y(),{action:T}=__STORYBOOK_MODULE_ACTIONS__,E=[{id:`bold`,icon:(0,w.jsx)(l,{className:`w-4 h-4`}),label:`Bold`,onClick:T(`bold`),tooltip:`Bold (Ctrl+B)`},{id:`italic`,icon:(0,w.jsx)(o,{className:`w-4 h-4`}),label:`Italic`,onClick:T(`italic`),tooltip:`Italic (Ctrl+I)`},{id:`underline`,icon:(0,w.jsx)(d,{className:`w-4 h-4`}),label:`Underline`,onClick:T(`underline`),tooltip:`Underline (Ctrl+U)`},{id:`color`,icon:(0,w.jsx)(v,{className:`w-4 h-4`}),label:`Color`,onClick:T(`color`),tooltip:`Text color`},{id:`delete`,icon:(0,w.jsx)(_,{className:`w-4 h-4`}),label:`Delete`,onClick:T(`delete`),variant:`danger`,tooltip:`Delete`}],D={title:`Navigation/FloatingToolbar`,component:S,tags:[`autodocs`]},O={args:{actions:E,position:`bottom`}},k={args:{actions:E.slice(0,4),position:`top`}},A={args:{actions:E.slice(0,3),variant:`compact`}},j={args:{actions:E,variant:`glass`}},M={args:{actions:E.slice(0,3),showLabels:!0}},N={args:{actions:E.slice(0,3),dismissible:!0,onDismiss:T(`dismissed`)}},P={args:{actions:[{id:`send`,icon:(0,w.jsx)(s,{className:`w-4 h-4`}),label:`Send`,onClick:T(`send`),tooltip:`Send money`},{id:`request`,icon:(0,w.jsx)(g,{className:`w-4 h-4`}),label:`Request`,onClick:T(`request`),tooltip:`Request money`},{id:`scan`,icon:(0,w.jsx)(a,{className:`w-4 h-4`}),label:`Scan`,onClick:T(`scan`),tooltip:`Scan QR`},{id:`card`,icon:(0,w.jsx)(i,{className:`w-4 h-4`}),label:`Card`,onClick:T(`card`),tooltip:`Card payment`}],variant:`glass`,position:`top`,showLabels:!0}},F={args:{actions:[{id:`confirm`,icon:(0,w.jsx)(h,{className:`w-4 h-4`}),label:`Approve`,onClick:T(`approve`),variant:`success`},{id:`reject`,icon:(0,w.jsx)(p,{className:`w-4 h-4`}),label:`Reject`,onClick:T(`reject`),variant:`danger`,tooltip:`Reject transaction`},{id:`share`,icon:(0,w.jsx)(r,{className:`w-4 h-4`}),label:`Share`,onClick:T(`share`),tooltip:`Share receipt`},{id:`save`,icon:(0,w.jsx)(f,{className:`w-4 h-4`}),label:`Save`,onClick:T(`save`),tooltip:`Save reference`}],variant:`glass`,showLabels:!0}},I={args:{actions:[{id:`upload`,icon:(0,w.jsx)(u,{className:`w-4 h-4`}),label:`Upload`,onClick:T(`upload`)},{id:`bold`,icon:(0,w.jsx)(l,{className:`w-4 h-4`}),label:`Bold`,onClick:T(`bold`),disabled:!0},{id:`italic`,icon:(0,w.jsx)(o,{className:`w-4 h-4`}),label:`Italic`,onClick:T(`italic`),disabled:!0},{id:`delete`,icon:(0,w.jsx)(_,{className:`w-4 h-4`}),label:`Delete`,onClick:T(`delete`),variant:`danger`}],variant:`compact`,showLabels:!0}},L={args:{actions:[{id:`delete`,icon:(0,w.jsx)(_,{className:`w-4 h-4`}),label:`Delete`,onClick:T(`delete`),variant:`danger`,tooltip:`Delete item`}]}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    actions: editingActions,
    position: 'bottom'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    actions: editingActions.slice(0, 4),
    position: 'top'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    actions: editingActions.slice(0, 3),
    variant: 'compact'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    actions: editingActions,
    variant: 'glass'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    actions: editingActions.slice(0, 3),
    showLabels: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    actions: editingActions.slice(0, 3),
    dismissible: true,
    onDismiss: action('dismissed')
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      id: 'send',
      icon: <Send className="w-4 h-4" />,
      label: 'Send',
      onClick: action('send'),
      tooltip: 'Send money'
    }, {
      id: 'request',
      icon: <ArrowUpDown className="w-4 h-4" />,
      label: 'Request',
      onClick: action('request'),
      tooltip: 'Request money'
    }, {
      id: 'scan',
      icon: <ScanQrCode className="w-4 h-4" />,
      label: 'Scan',
      onClick: action('scan'),
      tooltip: 'Scan QR'
    }, {
      id: 'card',
      icon: <CreditCard className="w-4 h-4" />,
      label: 'Card',
      onClick: action('card'),
      tooltip: 'Card payment'
    }],
    variant: 'glass',
    position: 'top',
    showLabels: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      id: 'confirm',
      icon: <Check className="w-4 h-4" />,
      label: 'Approve',
      onClick: action('approve'),
      variant: 'success'
    }, {
      id: 'reject',
      icon: <X className="w-4 h-4" />,
      label: 'Reject',
      onClick: action('reject'),
      variant: 'danger',
      tooltip: 'Reject transaction'
    }, {
      id: 'share',
      icon: <Share2 className="w-4 h-4" />,
      label: 'Share',
      onClick: action('share'),
      tooltip: 'Share receipt'
    }, {
      id: 'save',
      icon: <Bookmark className="w-4 h-4" />,
      label: 'Save',
      onClick: action('save'),
      tooltip: 'Save reference'
    }],
    variant: 'glass',
    showLabels: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      id: 'upload',
      icon: <ImageUp className="w-4 h-4" />,
      label: 'Upload',
      onClick: action('upload')
    }, {
      id: 'bold',
      icon: <Bold className="w-4 h-4" />,
      label: 'Bold',
      onClick: action('bold'),
      disabled: true
    }, {
      id: 'italic',
      icon: <Italic className="w-4 h-4" />,
      label: 'Italic',
      onClick: action('italic'),
      disabled: true
    }, {
      id: 'delete',
      icon: <Trash2 className="w-4 h-4" />,
      label: 'Delete',
      onClick: action('delete'),
      variant: 'danger'
    }],
    variant: 'compact',
    showLabels: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      id: 'delete',
      icon: <Trash2 className="w-4 h-4" />,
      label: 'Delete',
      onClick: action('delete'),
      variant: 'danger',
      tooltip: 'Delete item'
    }]
  }
}`,...L.parameters?.docs?.source}}},R=[`Default`,`TopPosition`,`CompactVariant`,`GlassVariant`,`WithLabels`,`Dismissible`,`PaymentActionsToolbar`,`MoneyReceiptActions`,`MediaEditingToolbar`,`SingleAction`]}))();export{A as CompactVariant,O as Default,N as Dismissible,j as GlassVariant,I as MediaEditingToolbar,F as MoneyReceiptActions,P as PaymentActionsToolbar,L as SingleAction,k as TopPosition,M as WithLabels,R as __namedExportsOrder,D as default};