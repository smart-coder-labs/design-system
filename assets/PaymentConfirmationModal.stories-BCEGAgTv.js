import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-D15PU-2o.js";import{H as n,Tr as r,Un as i,i as a,t as o}from"./lucide-react-BwGO_ZZQ.js";import{n as s,t as c}from"./utils-ijcE-ZHT.js";import{t as l}from"./jsx-runtime-DaLCRA3n.js";import{l as u,s as d,t as f}from"./es-CNBxpAzP.js";var p,m,h=e((()=>{t(),f(),s(),o(),p=l(),m=({open:e=!0,data:t,locale:o=`en-US`,onConfirm:s,onCancel:l,loading:f=!1,className:m=``})=>{let h=e=>new Intl.NumberFormat(o,{style:`currency`,currency:t.currency,minimumFractionDigits:2}).format(e),g=t.amount+(t.fee||0);return(0,p.jsx)(u,{children:e&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.div,{className:`fixed inset-0 bg-black/40 backdrop-blur-md z-50`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:l}),(0,p.jsxs)(d.div,{className:c(`fixed top-1/2 left-1/2 z-50 w-[380px] max-w-[calc(100vw-2rem)]`,`bg-surface-primary border border-border-primary rounded-3xl shadow-xl overflow-hidden`,m),initial:{opacity:0,scale:.92,x:`-50%`,y:`-50%`},animate:{opacity:1,scale:1,x:`-50%`,y:`-50%`},exit:{opacity:0,scale:.92,x:`-50%`,y:`-50%`},transition:{type:`spring`,stiffness:400,damping:30},role:`dialog`,"aria-label":`Payment Confirmation`,children:[(0,p.jsxs)(`div`,{className:`relative flex items-center justify-center py-5 border-b border-border-secondary`,children:[(0,p.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,p.jsx)(n,{className:`w-4 h-4 text-accent-blue`}),(0,p.jsx)(`h2`,{className:`text-base font-bold text-text-primary`,children:`Confirm Payment`})]}),(0,p.jsx)(`button`,{onClick:l,className:`absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-surface-secondary flex items-center justify-center text-text-tertiary hover:text-text-primary transition-apple`,"aria-label":`Close`,children:(0,p.jsx)(a,{className:`w-3.5 h-3.5`})})]}),(0,p.jsxs)(`div`,{className:`text-center py-6 px-6`,children:[(0,p.jsx)(`p`,{className:`text-xs text-text-tertiary mb-1`,children:`You are sending`}),(0,p.jsx)(`p`,{className:`text-3xl font-bold text-text-primary tabular-nums`,children:h(t.amount)}),(0,p.jsxs)(`p`,{className:`text-xs text-text-secondary mt-1`,children:[`to `,(0,p.jsx)(`span`,{className:`font-semibold text-text-primary`,children:t.recipientName})]})]}),(0,p.jsxs)(`div`,{className:`mx-6 rounded-xl bg-surface-secondary/50 border border-border-secondary divide-y divide-border-secondary`,children:[(0,p.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-3`,children:[(0,p.jsx)(`span`,{className:`text-xs text-text-tertiary`,children:`Recipient`}),(0,p.jsx)(`span`,{className:`text-xs font-semibold text-text-primary`,children:t.recipientName})]}),t.recipientBank&&(0,p.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-3`,children:[(0,p.jsx)(`span`,{className:`text-xs text-text-tertiary`,children:`Bank`}),(0,p.jsx)(`span`,{className:`text-xs font-medium text-text-secondary`,children:t.recipientBank})]}),t.recipientAccount&&(0,p.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-3`,children:[(0,p.jsx)(`span`,{className:`text-xs text-text-tertiary`,children:`Account`}),(0,p.jsx)(`span`,{className:`text-xs font-mono font-medium text-text-secondary`,children:t.recipientAccount})]}),t.concept&&(0,p.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-3`,children:[(0,p.jsx)(`span`,{className:`text-xs text-text-tertiary`,children:`Concept`}),(0,p.jsx)(`span`,{className:`text-xs font-medium text-text-secondary`,children:t.concept})]}),(0,p.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-3`,children:[(0,p.jsx)(`span`,{className:`text-xs text-text-tertiary`,children:`Amount`}),(0,p.jsx)(`span`,{className:`text-xs font-semibold text-text-primary tabular-nums`,children:h(t.amount)})]}),t.fee!==void 0&&t.fee>0&&(0,p.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-3`,children:[(0,p.jsx)(`span`,{className:`text-xs text-text-tertiary`,children:`Fee`}),(0,p.jsx)(`span`,{className:`text-xs font-medium text-text-secondary tabular-nums`,children:h(t.fee)})]}),(0,p.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-3 bg-surface-secondary/40`,children:[(0,p.jsx)(`span`,{className:`text-xs font-bold text-text-primary`,children:`Total`}),(0,p.jsx)(`span`,{className:`text-sm font-bold text-text-primary tabular-nums`,children:h(g)})]})]}),t.estimatedArrival&&(0,p.jsxs)(`div`,{className:`flex items-center justify-center gap-1.5 mt-4 text-xs text-text-tertiary`,children:[(0,p.jsx)(i,{className:`w-3 h-3`}),(0,p.jsxs)(`span`,{children:[`Estimated arrival: `,(0,p.jsx)(`span`,{className:`font-semibold text-text-secondary`,children:t.estimatedArrival})]})]}),(0,p.jsxs)(`div`,{className:`flex flex-col gap-2 p-6`,children:[(0,p.jsx)(d.button,{onClick:s,disabled:f,className:c(`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-apple`,`bg-accent-blue text-white hover:bg-accent-blue-hover active:bg-accent-blue-active`,`disabled:opacity-60 disabled:cursor-not-allowed`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2`),whileTap:f?{}:{scale:.98},children:f?(0,p.jsx)(d.div,{className:`w-5 h-5 border-2 border-white/30 border-t-white rounded-full`,animate:{rotate:360},transition:{repeat:1/0,duration:.8,ease:`linear`}}):(0,p.jsxs)(p.Fragment,{children:[`Confirm & Send `,(0,p.jsx)(r,{className:`w-4 h-4`})]})}),(0,p.jsx)(`button`,{onClick:l,className:`w-full py-2.5 text-sm font-semibold text-text-secondary hover:text-text-primary transition-apple`,children:`Cancel`})]})]})]})})},m.displayName=`PaymentConfirmationModal`,m.__docgenInfo={description:``,methods:[],displayName:`PaymentConfirmationModal`,props:{open:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},data:{required:!0,tsType:{name:`PaymentConfirmationData`},description:``},locale:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'en-US'`,computed:!1}},onConfirm:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{h(),g=l(),_={title:`Fintech/Payments/PaymentConfirmationModal`,component:m,tags:[`autodocs`]},v={args:{open:!0,amount:250,currency:`USD`,recipient:`alice@example.com`,description:`Payment for invoice #1234`,onConfirm:()=>alert(`Confirmed!`),onCancel:()=>alert(`Cancelled`)}},y={args:{open:!0,amount:.025,currency:`BTC`,recipient:`bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh`,description:`Bitcoin transfer`,network:`Bitcoin`,fee:`$1.20`,onConfirm:()=>alert(`Confirmed!`),onCancel:()=>alert(`Cancelled`)}},b={args:{open:!0,amount:15e3,currency:`USD`,recipient:`company@business.com`,description:`Quarterly service payment`,fee:`$45.00`,onConfirm:()=>alert(`Confirmed!`),onCancel:()=>alert(`Cancelled`)}},x={args:{open:!0,amount:100,currency:`USDC`,recipient:`0x1234...5678`,description:`Swap confirmation`,loading:!0,onConfirm:()=>alert(`Confirmed!`),onCancel:()=>alert(`Cancelled`)}},S={args:{open:!0,amount:3500,currency:`USD`,recipient:`Acme Corporation`,description:`Invoice INV-2025-4421`,fee:`$15.00`,bankName:`Chase Bank`,accountLastFour:`4823`,onConfirm:()=>alert(`Confirmed!`),onCancel:()=>alert(`Cancelled`)}},C={args:{open:!0,amount:0,currency:`USD`,recipient:`test@example.com`,description:`Test transaction — zero value`,onConfirm:()=>alert(`Confirmed!`),onCancel:()=>alert(`Cancelled`)}},w={args:{open:!0,amount:12500,currency:`EUR`,recipient:`Global Bank GmbH`,description:`SWIFT transfer for Q3 services`,fee:`€35.00`,bankName:`Deutsche Bank`,accountLastFour:`7712`,estimatedArrival:`3-5 business days`,onConfirm:()=>alert(`Confirmed!`),onCancel:()=>alert(`Cancelled`)}},T={args:{open:!0,amount:1e-4,currency:`BTC`,recipient:`bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq`,description:`Test micro-transaction`,network:`Bitcoin`,fee:`0.00005 BTC`,onConfirm:()=>alert(`Confirmed!`),onCancel:()=>alert(`Cancelled`)}},E={args:{open:!0,amount:500,currency:`USDC`,recipient:`0xDeFi...Wallet`,description:`DeFi yield deposit`,fee:`$2.50`,onConfirm:()=>alert(`Confirmed!`),onCancel:()=>alert(`Cancelled`)},decorators:[e=>(0,g.jsx)(`div`,{className:`dark`,children:(0,g.jsx)(e,{})})]},D={args:{open:!0,amount:75,currency:`USD`,recipient:`merchant@store.com`,description:`Online purchase — Order #8832`,onConfirm:()=>alert(`Confirmed!`),onCancel:()=>alert(`Cancelled`)},decorators:[e=>(0,g.jsx)(`div`,{className:`max-w-[320px] mx-auto`,children:(0,g.jsx)(e,{})})]},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    amount: 250.00,
    currency: 'USD',
    recipient: 'alice@example.com',
    description: 'Payment for invoice #1234',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled')
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    amount: 0.025,
    currency: 'BTC',
    recipient: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    description: 'Bitcoin transfer',
    network: 'Bitcoin',
    fee: '$1.20',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled')
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    amount: 15000.00,
    currency: 'USD',
    recipient: 'company@business.com',
    description: 'Quarterly service payment',
    fee: '$45.00',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled')
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    amount: 100.00,
    currency: 'USDC',
    recipient: '0x1234...5678',
    description: 'Swap confirmation',
    loading: true,
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled')
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    amount: 3500.00,
    currency: 'USD',
    recipient: 'Acme Corporation',
    description: 'Invoice INV-2025-4421',
    fee: '$15.00',
    bankName: 'Chase Bank',
    accountLastFour: '4823',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled')
  }
}`,...S.parameters?.docs?.source},description:{story:`Bank transfer with fee`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    amount: 0.00,
    currency: 'USD',
    recipient: 'test@example.com',
    description: 'Test transaction — zero value',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled')
  }
}`,...C.parameters?.docs?.source},description:{story:`Zero amount payment — edge case`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    amount: 12500.00,
    currency: 'EUR',
    recipient: 'Global Bank GmbH',
    description: 'SWIFT transfer for Q3 services',
    fee: '€35.00',
    bankName: 'Deutsche Bank',
    accountLastFour: '7712',
    estimatedArrival: '3-5 business days',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled')
  }
}`,...w.parameters?.docs?.source},description:{story:`International wire transfer`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    amount: 0.0001,
    currency: 'BTC',
    recipient: 'bc1qar0srrr7xfkvy5l643lydnw9re59gtzzwf5mdq',
    description: 'Test micro-transaction',
    network: 'Bitcoin',
    fee: '0.00005 BTC',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled')
  }
}`,...T.parameters?.docs?.source},description:{story:`High-precision crypto amount`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    amount: 500.00,
    currency: 'USDC',
    recipient: '0xDeFi...Wallet',
    description: 'DeFi yield deposit',
    fee: '$2.50',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled')
  },
  decorators: [Story => <div className="dark">
        <Story />
      </div>]
}`,...E.parameters?.docs?.source},description:{story:`Dark mode`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    amount: 75.00,
    currency: 'USD',
    recipient: 'merchant@store.com',
    description: 'Online purchase — Order #8832',
    onConfirm: () => alert('Confirmed!'),
    onCancel: () => alert('Cancelled')
  },
  decorators: [Story => <div className="max-w-[320px] mx-auto">
        <Story />
      </div>]
}`,...D.parameters?.docs?.source},description:{story:`Mobile narrow container`,...D.parameters?.docs?.description}}},O=[`Default`,`CryptoPayment`,`LargeAmount`,`Loading`,`BankTransfer`,`ZeroAmount`,`InternationalWire`,`CryptoSmallAmount`,`DarkMode`,`Mobile`]}))();export{S as BankTransfer,y as CryptoPayment,T as CryptoSmallAmount,E as DarkMode,v as Default,w as InternationalWire,b as LargeAmount,x as Loading,D as Mobile,C as ZeroAmount,O as __namedExportsOrder,_ as default};