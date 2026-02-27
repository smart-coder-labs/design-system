import{j as a}from"./jsx-runtime-u17CrQMm.js";import{V as e}from"./VirtualCardPreview-Bm0mDSNG.js";import"./iframe-BveWeN4l.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./proxy-D3ObK0kG.js";import"./resolve-elements-juiWZL7b.js";import"./wifi-DJe-OHJe.js";import"./createLucideIcon-BcVBT_jq.js";import"./eye-off-YlJILpJ4.js";import"./eye-DhO804lO.js";const C={title:"Fintech/Cards/VirtualCardPreview",component:e,parameters:{layout:"centered"},tags:[],argTypes:{brand:{control:"select",options:["visa","mastercard","amex"]},gradient:{control:"select",options:["dark","blue","purple","gold","emerald"]}}},r={args:{cardholderName:"Carlos Medina",cardNumber:"4242 4242 4242 8421",expiryDate:"09/28",cvv:"314",brand:"visa",gradient:"dark"}},d={args:{...r.args,brand:"mastercard",gradient:"blue",cardNumber:"5412 7534 1234 9087"}},n={name:"🏆 Gold Card",args:{...r.args,gradient:"gold",brand:"amex",cardholderName:"Premium Member",balance:125e3,currency:"MXN"}},s={name:"❄️ Frozen Card",args:{...r.args,frozen:!0,balance:46800,currency:"MXN"}},o={name:"💳 Caso de Uso: All Card Variants",render:()=>a.jsxs("div",{className:"grid grid-cols-1 gap-6 max-w-[400px]",children:[a.jsx(e,{gradient:"dark",brand:"visa",cardholderName:"Carlos M."}),a.jsx(e,{gradient:"blue",brand:"mastercard",cardholderName:"Ana G."}),a.jsx(e,{gradient:"purple",brand:"visa",cardholderName:"Laura P."}),a.jsx(e,{gradient:"gold",brand:"amex",cardholderName:"Premium",balance:25e4,currency:"MXN"}),a.jsx(e,{gradient:"emerald",brand:"visa",cardholderName:"Eco Card"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    cardholderName: 'Carlos Medina',
    cardNumber: '4242 4242 4242 8421',
    expiryDate: '09/28',
    cvv: '314',
    brand: 'visa',
    gradient: 'dark'
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    brand: 'mastercard',
    gradient: 'blue',
    cardNumber: '5412 7534 1234 9087'
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '🏆 Gold Card',
  args: {
    ...Default.args,
    gradient: 'gold',
    brand: 'amex',
    cardholderName: 'Premium Member',
    balance: 125000,
    currency: 'MXN'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '❄️ Frozen Card',
  args: {
    ...Default.args,
    frozen: true,
    balance: 46800,
    currency: 'MXN'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '💳 Caso de Uso: All Card Variants',
  render: () => <div className="grid grid-cols-1 gap-6 max-w-[400px]">
            <VirtualCardPreview gradient="dark" brand="visa" cardholderName="Carlos M." />
            <VirtualCardPreview gradient="blue" brand="mastercard" cardholderName="Ana G." />
            <VirtualCardPreview gradient="purple" brand="visa" cardholderName="Laura P." />
            <VirtualCardPreview gradient="gold" brand="amex" cardholderName="Premium" balance={250000} currency="MXN" />
            <VirtualCardPreview gradient="emerald" brand="visa" cardholderName="Eco Card" />
        </div>
}`,...o.parameters?.docs?.source}}};const x=["Default","Mastercard","Gold","Frozen","AllVariants"];export{o as AllVariants,r as Default,s as Frozen,n as Gold,d as Mastercard,x as __namedExportsOrder,C as default};
