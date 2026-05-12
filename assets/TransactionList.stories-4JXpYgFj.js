import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as d,a as c}from"./TransactionList-Mafr3Nzs.js";import"./iframe-CSCYuKHF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DCADjnpI.js";import"./proxy-DgdbOAE3.js";import"./resolve-elements-BeIloL1I.js";import"./eye-off-CIbTOIjP.js";import"./createLucideIcon-BvoP2Q-9.js";import"./eye-B8wltVQw.js";import"./ellipsis-BTf16sOc.js";import"./car-HRowGh5I.js";import"./gift-BnlNd-Ug.js";import"./credit-card-rs59XFtk.js";import"./zap-B7uehKEf.js";import"./house-DAbYiuhU.js";import"./arrow-up-right-8EvnMypr.js";import"./shopping-bag-vdvXS1Pz.js";import"./heart-BKPcttTt.js";import"./utensils-CSfdyL4X.js";import"./circle-x-Ke_GxSp4.js";import"./clock-D3cELhPy.js";import"./circle-check-CWeBnz3x.js";const E={title:"Fintech/Dashboard/TransactionList",component:d,parameters:{layout:"centered"},tags:[]},n=[{id:"1",title:"Starbucks Coffee",description:"Av. Reforma 222",amount:89.5,type:"expense",category:"food",status:"completed",date:"Today, 10:30 AM"},{id:"2",title:"Salary Deposit",description:"Acme Corp.",amount:45e3,type:"income",category:"work",status:"completed",date:"Today, 8:00 AM"},{id:"3",title:"Netflix",description:"Monthly sub",amount:299,type:"expense",category:"utilities",status:"completed",date:"Yesterday"},{id:"4",title:"Transfer to Ana",description:"Rent",amount:5e3,type:"expense",category:"transfer",status:"pending",date:"Yesterday"},{id:"5",title:"Amazon",description:"Electronics",amount:1250,type:"expense",category:"shopping",status:"completed",date:"Feb 22"},{id:"6",title:"Freelance",description:"Design project",amount:12e3,type:"income",category:"work",status:"completed",date:"Feb 21"},{id:"7",title:"Uber",description:"Trip to airport",amount:345,type:"expense",category:"transport",status:"completed",date:"Feb 20"},{id:"8",title:"Failed Payment",description:"Insurance",amount:2400,type:"expense",category:"other",status:"failed",date:"Feb 19"}],a={args:{transactions:n,currency:"MXN",locale:"es-MX"},decorators:[r=>e.jsx("div",{className:"w-[420px]",children:e.jsx(r,{})})]},t={args:{transactions:[]},decorators:[r=>e.jsx("div",{className:"w-[420px]",children:e.jsx(r,{})})]},s={name:"📊 Single Transaction Row",render:()=>e.jsx("div",{className:"w-[420px] bg-surface-primary rounded-xl p-2 border border-border-primary",children:e.jsx(c,{transaction:n[0],currency:"MXN",locale:"es-MX"})})},o={name:"👁️ Masked Amounts",render:()=>e.jsx("div",{className:"w-[420px] bg-surface-primary rounded-xl p-2 border border-border-primary space-y-0.5",children:n.slice(0,3).map(r=>e.jsx(c,{transaction:r,currency:"MXN",locale:"es-MX",masked:!0},r.id))})},i={name:"🏦 Caso de Uso: Banking Dashboard",args:{transactions:n,currency:"MXN",locale:"es-MX",title:"Recent Activity"},decorators:[r=>e.jsx("div",{className:"w-[450px]",children:e.jsx(r,{})})]};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    transactions: sampleTransactions,
    currency: 'MXN',
    locale: 'es-MX'
  },
  decorators: [Story => <div className="w-[420px]"><Story /></div>]
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    transactions: []
  },
  decorators: [Story => <div className="w-[420px]"><Story /></div>]
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '📊 Single Transaction Row',
  render: () => <div className="w-[420px] bg-surface-primary rounded-xl p-2 border border-border-primary">
            <TransactionRow transaction={sampleTransactions[0]} currency="MXN" locale="es-MX" />
        </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '👁️ Masked Amounts',
  render: () => <div className="w-[420px] bg-surface-primary rounded-xl p-2 border border-border-primary space-y-0.5">
            {sampleTransactions.slice(0, 3).map(tx => <TransactionRow key={tx.id} transaction={tx} currency="MXN" locale="es-MX" masked />)}
        </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: '🏦 Caso de Uso: Banking Dashboard',
  args: {
    transactions: sampleTransactions,
    currency: 'MXN',
    locale: 'es-MX',
    title: 'Recent Activity'
  },
  decorators: [Story => <div className="w-[450px]"><Story /></div>]
}`,...i.parameters?.docs?.source}}};const B=["Default","Empty","SingleRow","MaskedAmounts","BankingDashboard"];export{i as BankingDashboard,a as Default,t as Empty,o as MaskedAmounts,s as SingleRow,B as __namedExportsOrder,E as default};
