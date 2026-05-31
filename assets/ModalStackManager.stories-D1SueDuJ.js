import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CNj2_6xa.js";import{t as r}from"./jsx-runtime-WZfjI2gv.js";import{n as i,t as a}from"./Button-C17fCOOV.js";import{a as o,c as s,i as c,n as l,o as u,r as d,s as f,t as p}from"./Modal-DHb6H0HK.js";import{t as m}from"./Modal-DMiCZssL.js";var h,g,_,v=e((()=>{h=t(n()),m(),a(),g=r(),_=e=>{let{initialStack:t=[],className:n,open:r,onCloseAll:a}=e,[m,_]=(0,h.useState)(t),[v,y]=(0,h.useState)(t.length>0),b=r===void 0?v:r;h.useEffect(()=>{b&&m.length===0&&t.length>0&&_(t)},[b,t,m.length]);let x=e=>{_(t=>[...t,e]),y(!0)},S=()=>{_(e=>e.slice(0,-1)),y(m.length>1),m.length<=1&&a&&a()},C=()=>{_([]),y(!1),a&&a()};return(0,g.jsx)(g.Fragment,{children:m.map((e,t)=>(0,g.jsxs)(p,{open:b&&t===m.length-1,onOpenChange:e=>{e||S()},size:e.size||`md`,children:[(0,g.jsx)(d,{}),(0,g.jsxs)(f,{children:[(0,g.jsx)(s,{children:e.title}),e.description&&(0,g.jsx)(o,{children:e.description})]}),(0,g.jsx)(c,{children:e.content}),(0,g.jsxs)(u,{children:[(0,g.jsx)(l,{children:(0,g.jsx)(i,{variant:`ghost`,children:`Cerrar`})}),t===m.length-1&&(0,g.jsx)(i,{variant:`primary`,onClick:()=>x({title:`Modal Secundario`,description:`Este modal se apila sobre el anterior.`,content:(0,g.jsx)(`p`,{children:`Contenido del modal secundario.`}),footer:(0,g.jsx)(i,{variant:`ghost`,onClick:C,children:`Cerrar todo`}),size:`sm`}),children:`Abrir otro modal`}),e.footer]})]},t))})},_.__docgenInfo={description:`ModalStackManager: gestiona múltiples modales apilados estilo macOS/iOS
- Animación de entrada/salida con Framer Motion
- Cada modal puede abrir otro modal encima
- Cierre individual o en cascada`,methods:[],displayName:`ModalStackManager`,props:{initialStack:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  title: string;
  description?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}`,signature:{properties:[{key:`title`,value:{name:`string`,required:!0}},{key:`description`,value:{name:`string`,required:!1}},{key:`content`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`footer`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}},{key:`size`,value:{name:`union`,raw:`'sm' | 'md' | 'lg' | 'xl' | 'full'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`},{name:`literal`,value:`'full'`}],required:!1}}]}}],raw:`ModalConfig[]`},description:`Initial modals to show (array of modal configs)`},className:{required:!1,tsType:{name:`string`},description:`Optional className for root`},open:{required:!1,tsType:{name:`boolean`},description:`Controlled open state (optional)`},onCloseAll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when all modals are closed`}}}})),y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{n(),v(),y=r(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,x={title:`Overlays/ModalStackManager`,component:_,tags:[`autodocs`],parameters:{layout:`centered`}},S={args:{modals:[]}},C={args:{modals:[{id:`1`,title:`Confirm Transfer`,content:`Send $250 to Alice?`,onClose:b(`close`)}]}},w={args:{modals:[{id:`1`,title:`Payment Confirmation`,content:`Send $250 to Alice Johnson?`,onClose:b(`close-1`)},{id:`2`,title:`Two-Factor Auth`,content:`Enter your 6-digit code`,onClose:b(`close-2`)}]}},T={args:{modals:[{id:`1`,title:`Step 1: Amount`,content:`Enter the amount to transfer`,onClose:b(`close-1`)},{id:`2`,title:`Step 2: Confirm`,content:`Review transfer details`,onClose:b(`close-2`)},{id:`3`,title:`Step 3: 2FA`,content:`Enter verification code`,onClose:b(`close-3`)}]}},E={args:{modals:[{id:`1`,title:`Send Money`,content:`Select recipient and amount ($250.00 to Alice Johnson)`,onClose:b(`close-1`)},{id:`2`,title:`Confirm Payment`,content:`Review: $250.00 from Checking •••• 4821 to Alice Johnson`,onClose:b(`close-2`)},{id:`3`,title:`Verify with 2FA`,content:`Enter the 6-digit code sent to your phone (•••• 4821)`,onClose:b(`close-3`)}]}},D={args:{modals:[]}},O={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,y.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,y.jsx)(e,{})})]},k={parameters:{viewport:{defaultViewport:`mobile1`}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    modals: []
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    modals: [{
      id: '1',
      title: 'Confirm Transfer',
      content: 'Send $250 to Alice?',
      onClose: action('close')
    }]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    modals: [{
      id: '1',
      title: 'Payment Confirmation',
      content: 'Send $250 to Alice Johnson?',
      onClose: action('close-1')
    }, {
      id: '2',
      title: 'Two-Factor Auth',
      content: 'Enter your 6-digit code',
      onClose: action('close-2')
    }]
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    modals: [{
      id: '1',
      title: 'Step 1: Amount',
      content: 'Enter the amount to transfer',
      onClose: action('close-1')
    }, {
      id: '2',
      title: 'Step 2: Confirm',
      content: 'Review transfer details',
      onClose: action('close-2')
    }, {
      id: '3',
      title: 'Step 3: 2FA',
      content: 'Enter verification code',
      onClose: action('close-3')
    }]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    modals: [{
      id: '1',
      title: 'Send Money',
      content: 'Select recipient and amount ($250.00 to Alice Johnson)',
      onClose: action('close-1')
    }, {
      id: '2',
      title: 'Confirm Payment',
      content: 'Review: $250.00 from Checking •••• 4821 to Alice Johnson',
      onClose: action('close-2')
    }, {
      id: '3',
      title: 'Verify with 2FA',
      content: 'Enter the 6-digit code sent to your phone (•••• 4821)',
      onClose: action('close-3')
    }]
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    modals: []
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`SingleModal`,`TwoModals`,`ThreeModals`,`PaymentFlowStack`,`EmptyStack`,`DarkMode`,`MobileView`]}))();export{O as DarkMode,S as Default,D as EmptyStack,k as MobileView,E as PaymentFlowStack,C as SingleModal,T as ThreeModals,w as TwoModals,A as __namedExportsOrder,x as default};