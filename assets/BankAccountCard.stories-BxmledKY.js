import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as i}from"./BankAccountCard-D96EqBh_.js";import"./iframe-BcpDUSja.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./proxy-Anf5ZDsz.js";import"./resolve-elements-juiWZL7b.js";import"./landmark-6A5ETQXS.js";import"./createLucideIcon-BopTFegF.js";import"./index-BhgTTG7w.js";import"./eye-off-yerqHw-W.js";import"./eye-C9ltICu9.js";import"./check-BU1Pz0lZ.js";import"./copy-BxNuoxG2.js";import"./chevron-right-Bdxq067V.js";const j={title:"Fintech/Dashboard/BankAccountCard",component:i,parameters:{layout:"centered"},tags:[],argTypes:{accountType:{control:"select",options:["checking","savings","credit","investment"]}}},c={args:{accountName:"Personal Checking",accountType:"checking",balance:46800.5,currency:"MXN",locale:"es-MX",clabeOrIban:"012180001234567891"},decorators:[a=>e.jsx("div",{className:"w-[380px]",children:e.jsx(a,{})})]},r={args:{...c.args,accountName:"Emergency Fund",accountType:"savings",balance:15e4},decorators:[a=>e.jsx("div",{className:"w-[380px]",children:e.jsx(a,{})})]},s={args:{...c.args,accountName:"Platinum Card",accountType:"credit",balance:-12500,accountNumber:"•••• •••• •••• 8421"},decorators:[a=>e.jsx("div",{className:"w-[380px]",children:e.jsx(a,{})})]},o={args:{...c.args,accountName:"Investment Portfolio",accountType:"investment",balance:285e3,currency:"USD",locale:"en-US"},decorators:[a=>e.jsx("div",{className:"w-[380px]",children:e.jsx(a,{})})]},n={name:"👁️ Hidden Balance",args:{...c.args,hiddenByDefault:!0},decorators:[a=>e.jsx("div",{className:"w-[380px]",children:e.jsx(a,{})})]},t={name:"🏦 Caso de Uso: Multiple Accounts",render:()=>e.jsxs("div",{className:"space-y-4 w-[380px]",children:[e.jsx(i,{accountName:"Personal",accountType:"checking",balance:46800,currency:"MXN",locale:"es-MX"}),e.jsx(i,{accountName:"Savings",accountType:"savings",balance:15e4,currency:"MXN",locale:"es-MX"}),e.jsx(i,{accountName:"Investments",accountType:"investment",balance:68500,currency:"USD",locale:"en-US"})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    accountName: 'Personal Checking',
    accountType: 'checking',
    balance: 46800.50,
    currency: 'MXN',
    locale: 'es-MX',
    clabeOrIban: '012180001234567891'
  },
  decorators: [Story => <div className="w-[380px]"><Story /></div>]
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Checking.args,
    accountName: 'Emergency Fund',
    accountType: 'savings',
    balance: 150000
  },
  decorators: [Story => <div className="w-[380px]"><Story /></div>]
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Checking.args,
    accountName: 'Platinum Card',
    accountType: 'credit',
    balance: -12500,
    accountNumber: '•••• •••• •••• 8421'
  },
  decorators: [Story => <div className="w-[380px]"><Story /></div>]
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Checking.args,
    accountName: 'Investment Portfolio',
    accountType: 'investment',
    balance: 285000,
    currency: 'USD',
    locale: 'en-US'
  },
  decorators: [Story => <div className="w-[380px]"><Story /></div>]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '👁️ Hidden Balance',
  args: {
    ...Checking.args,
    hiddenByDefault: true
  },
  decorators: [Story => <div className="w-[380px]"><Story /></div>]
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '🏦 Caso de Uso: Multiple Accounts',
  render: () => <div className="space-y-4 w-[380px]">
            <BankAccountCard accountName="Personal" accountType="checking" balance={46800} currency="MXN" locale="es-MX" />
            <BankAccountCard accountName="Savings" accountType="savings" balance={150000} currency="MXN" locale="es-MX" />
            <BankAccountCard accountName="Investments" accountType="investment" balance={68500} currency="USD" locale="en-US" />
        </div>
}`,...t.parameters?.docs?.source}}};const M=["Checking","Savings","Credit","Investment","HiddenByDefault","MultipleAccounts"];export{c as Checking,s as Credit,n as HiddenByDefault,o as Investment,t as MultipleAccounts,r as Savings,M as __namedExportsOrder,j as default};
