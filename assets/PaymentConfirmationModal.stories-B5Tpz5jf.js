import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as f}from"./iframe-ChONrTG_.js";import{c as y}from"./utils-CDN07tui.js";import{A as N}from"./index-DyeVvxBP.js";import{m as r}from"./proxy-CRCEyvcV.js";import{S as g}from"./shield-check-9axflegT.js";import{X as v}from"./x-Cg9q8tko.js";import{C}from"./clock-aZk4Lvps.js";import{A as w}from"./arrow-right-DTjdl9bi.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-juiWZL7b.js";import"./createLucideIcon-CdJ-Xkq_.js";const m=({open:d=!0,data:t,locale:x="en-US",onConfirm:s,onCancel:a,loading:p=!1,className:h=""})=>{const n=j=>new Intl.NumberFormat(x,{style:"currency",currency:t.currency,minimumFractionDigits:2}).format(j),b=t.amount+(t.fee||0);return e.jsx(N,{children:d&&e.jsxs(e.Fragment,{children:[e.jsx(r.div,{className:"fixed inset-0 bg-black/40 backdrop-blur-md z-50",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:a}),e.jsxs(r.div,{className:y("fixed top-1/2 left-1/2 z-50 w-[380px] max-w-[calc(100vw-2rem)]","bg-surface-primary border border-border-primary rounded-3xl shadow-xl overflow-hidden",h),initial:{opacity:0,scale:.92,x:"-50%",y:"-50%"},animate:{opacity:1,scale:1,x:"-50%",y:"-50%"},exit:{opacity:0,scale:.92,x:"-50%",y:"-50%"},transition:{type:"spring",stiffness:400,damping:30},role:"dialog","aria-label":"Payment Confirmation",children:[e.jsxs("div",{className:"relative flex items-center justify-center py-5 border-b border-border-secondary",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(g,{className:"w-4 h-4 text-accent-blue"}),e.jsx("h2",{className:"text-base font-bold text-text-primary",children:"Confirm Payment"})]}),e.jsx("button",{onClick:a,className:"absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-surface-secondary flex items-center justify-center text-text-tertiary hover:text-text-primary transition-colors","aria-label":"Close",children:e.jsx(v,{className:"w-3.5 h-3.5"})})]}),e.jsxs("div",{className:"text-center py-6 px-6",children:[e.jsx("p",{className:"text-xs text-text-tertiary mb-1",children:"You are sending"}),e.jsx("p",{className:"text-3xl font-bold text-text-primary tabular-nums",children:n(t.amount)}),e.jsxs("p",{className:"text-xs text-text-secondary mt-1",children:["to ",e.jsx("span",{className:"font-semibold text-text-primary",children:t.recipientName})]})]}),e.jsxs("div",{className:"mx-6 rounded-xl bg-surface-secondary/50 border border-border-secondary divide-y divide-border-secondary",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[e.jsx("span",{className:"text-xs text-text-tertiary",children:"Recipient"}),e.jsx("span",{className:"text-xs font-semibold text-text-primary",children:t.recipientName})]}),t.recipientBank&&e.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[e.jsx("span",{className:"text-xs text-text-tertiary",children:"Bank"}),e.jsx("span",{className:"text-xs font-medium text-text-secondary",children:t.recipientBank})]}),t.recipientAccount&&e.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[e.jsx("span",{className:"text-xs text-text-tertiary",children:"Account"}),e.jsx("span",{className:"text-xs font-mono font-medium text-text-secondary",children:t.recipientAccount})]}),t.concept&&e.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[e.jsx("span",{className:"text-xs text-text-tertiary",children:"Concept"}),e.jsx("span",{className:"text-xs font-medium text-text-secondary",children:t.concept})]}),e.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[e.jsx("span",{className:"text-xs text-text-tertiary",children:"Amount"}),e.jsx("span",{className:"text-xs font-semibold text-text-primary tabular-nums",children:n(t.amount)})]}),t.fee!==void 0&&t.fee>0&&e.jsxs("div",{className:"flex items-center justify-between px-4 py-3",children:[e.jsx("span",{className:"text-xs text-text-tertiary",children:"Fee"}),e.jsx("span",{className:"text-xs font-medium text-text-secondary tabular-nums",children:n(t.fee)})]}),e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-surface-secondary/40",children:[e.jsx("span",{className:"text-xs font-bold text-text-primary",children:"Total"}),e.jsx("span",{className:"text-sm font-bold text-text-primary tabular-nums",children:n(b)})]})]}),t.estimatedArrival&&e.jsxs("div",{className:"flex items-center justify-center gap-1.5 mt-4 text-xs text-text-tertiary",children:[e.jsx(C,{className:"w-3 h-3"}),e.jsxs("span",{children:["Estimated arrival: ",e.jsx("span",{className:"font-semibold text-text-secondary",children:t.estimatedArrival})]})]}),e.jsxs("div",{className:"flex flex-col gap-2 p-6",children:[e.jsx(r.button,{onClick:s,disabled:p,className:y("w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-colors","bg-accent-blue text-white hover:bg-accent-blue-hover active:bg-accent-blue-active","disabled:opacity-60 disabled:cursor-not-allowed","focus:outline-none focus:ring-2 focus:ring-accent-blue/30 focus:ring-offset-2"),whileTap:p?{}:{scale:.98},children:p?e.jsx(r.div,{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full",animate:{rotate:360},transition:{repeat:1/0,duration:.8,ease:"linear"}}):e.jsxs(e.Fragment,{children:["Confirm & Send ",e.jsx(w,{className:"w-4 h-4"})]})}),e.jsx("button",{onClick:a,className:"w-full py-2.5 text-sm font-semibold text-text-secondary hover:text-text-primary transition-colors",children:"Cancel"})]})]})]})})};m.displayName="PaymentConfirmationModal";m.__docgenInfo={description:"",methods:[],displayName:"PaymentConfirmationModal",props:{open:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},data:{required:!0,tsType:{name:"PaymentConfirmationData"},description:""},locale:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'en-US'",computed:!1}},onConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const q={title:"Fintech/Payments/PaymentConfirmationModal",component:m,parameters:{layout:"centered"},tags:[]},u={recipientName:"Ana García",recipientBank:"BBVA México",recipientAccount:"•••• •••• •••• 4521",amount:5e3,currency:"MXN",concept:"Rent payment — March",fee:0,estimatedArrival:"Instant (SPEI)"},i={args:{open:!0,data:u,locale:"es-MX"}},o={name:"💰 With Fee",args:{open:!0,data:{...u,fee:25,estimatedArrival:"1-2 business days"},locale:"es-MX"}},c={name:"🌍 International Transfer",args:{open:!0,data:{recipientName:"John Smith",recipientBank:"Chase Bank",recipientAccount:"•••• •••• •••• 9087",amount:1500,currency:"USD",concept:"Freelance payment",fee:35,estimatedArrival:"2-3 business days"},locale:"en-US"}},l={name:"🔐 Caso de Uso: Interactive Confirmation",render:()=>{const[d,t]=f.useState(!1),[x,s]=f.useState(!1),a=()=>{s(!0),setTimeout(()=>{s(!1),t(!1),alert("Payment sent successfully!")},2e3)};return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>t(!0),className:"px-6 py-3 bg-accent-blue text-white rounded-xl text-sm font-bold",children:"Send $5,000 MXN"}),e.jsx(m,{open:d,data:u,locale:"es-MX",loading:x,onConfirm:a,onCancel:()=>t(!1)})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    data: defaultData,
    locale: 'es-MX'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '💰 With Fee',
  args: {
    open: true,
    data: {
      ...defaultData,
      fee: 25,
      estimatedArrival: '1-2 business days'
    },
    locale: 'es-MX'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: '🌍 International Transfer',
  args: {
    open: true,
    data: {
      recipientName: 'John Smith',
      recipientBank: 'Chase Bank',
      recipientAccount: '•••• •••• •••• 9087',
      amount: 1500,
      currency: 'USD',
      concept: 'Freelance payment',
      fee: 35,
      estimatedArrival: '2-3 business days'
    },
    locale: 'en-US'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: '🔐 Caso de Uso: Interactive Confirmation',
  render: () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleConfirm = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
        alert('Payment sent successfully!');
      }, 2000);
    };
    return <div>
                <button onClick={() => setOpen(true)} className="px-6 py-3 bg-accent-blue text-white rounded-xl text-sm font-bold">
                    Send $5,000 MXN
                </button>
                <PaymentConfirmationModal open={open} data={defaultData} locale="es-MX" loading={loading} onConfirm={handleConfirm} onCancel={() => setOpen(false)} />
            </div>;
  }
}`,...l.parameters?.docs?.source}}};const O=["Default","WithFee","InternationalTransfer","Interactive"];export{i as Default,l as Interactive,c as InternationalTransfer,o as WithFee,O as __namedExportsOrder,q as default};
