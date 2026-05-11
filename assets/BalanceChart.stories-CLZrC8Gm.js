import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as c}from"./BalanceChart-zMb6JNly.js";import"./iframe-ChONrTG_.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./proxy-CRCEyvcV.js";import"./resolve-elements-juiWZL7b.js";import"./trending-up-BY8VOg_w.js";import"./createLucideIcon-CdJ-Xkq_.js";import"./trending-down-OCjltsaj.js";import"./eye-off-DqvRUFFh.js";import"./eye-CgmXT_7E.js";const b={title:"Fintech/Dashboard/BalanceChart",component:c,parameters:{layout:"centered"},tags:[]},l=[{label:"Mon",value:42500},{label:"Tue",value:43200},{label:"Wed",value:41800},{label:"Thu",value:44500},{label:"Fri",value:45e3},{label:"Sat",value:44200},{label:"Sun",value:46800}],n=[{label:"Mon",value:55e3},{label:"Tue",value:53e3},{label:"Wed",value:50200},{label:"Thu",value:48800},{label:"Fri",value:47500},{label:"Sat",value:46100},{label:"Sun",value:44300}],r={args:{data:l,currency:"MXN",locale:"es-MX",title:"Balance — Last 7 Days"},decorators:[a=>e.jsx("div",{className:"w-[420px]",children:e.jsx(a,{})})]},s={name:"📉 Down Trend",args:{data:n,currency:"MXN",locale:"es-MX",title:"Balance — Last 7 Days"},decorators:[a=>e.jsx("div",{className:"w-[420px]",children:e.jsx(a,{})})]},o={name:"💵 USD Account",args:{data:l.map(a=>({...a,value:a.value/17})),currency:"USD",locale:"en-US",title:"USD Balance"},decorators:[a=>e.jsx("div",{className:"w-[420px]",children:e.jsx(a,{})})]},t={name:"🎨 Playground",args:{...r.args},decorators:[a=>e.jsx("div",{className:"w-[500px]",children:e.jsx(a,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    data: weekData,
    currency: 'MXN',
    locale: 'es-MX',
    title: 'Balance — Last 7 Days'
  },
  decorators: [Story => <div className="w-[420px]"><Story /></div>]
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '📉 Down Trend',
  args: {
    data: downTrend,
    currency: 'MXN',
    locale: 'es-MX',
    title: 'Balance — Last 7 Days'
  },
  decorators: [Story => <div className="w-[420px]"><Story /></div>]
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: '💵 USD Account',
  args: {
    data: weekData.map(d => ({
      ...d,
      value: d.value / 17
    })),
    currency: 'USD',
    locale: 'en-US',
    title: 'USD Balance'
  },
  decorators: [Story => <div className="w-[420px]"><Story /></div>]
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '🎨 Playground',
  args: {
    ...Default.args
  },
  decorators: [Story => <div className="w-[500px]"><Story /></div>]
}`,...t.parameters?.docs?.source}}};const N=["Default","DownTrend","USDAccount","Playground"];export{r as Default,s as DownTrend,t as Playground,o as USDAccount,N as __namedExportsOrder,b as default};
