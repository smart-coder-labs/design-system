import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as c}from"./PortfolioDistribution-Bmn3BLCq.js";import"./iframe-BcpDUSja.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./proxy-Anf5ZDsz.js";import"./resolve-elements-juiWZL7b.js";import"./chart-pie-BWVUVf1D.js";import"./createLucideIcon-BopTFegF.js";import"./index-BhgTTG7w.js";const F={title:"Fintech/Investments/PortfolioDistribution",component:c,parameters:{layout:"centered"},tags:[]},t=[{id:"1",name:"Stocks",value:28500,color:"#007AFF",change:3.2},{id:"2",name:"Crypto",value:12e3,color:"#FF9500",change:-1.8},{id:"3",name:"Bonds",value:8e3,color:"#34C759",change:.5},{id:"4",name:"Real Estate",value:15e3,color:"#AF52DE",change:1.1},{id:"5",name:"Cash",value:5e3,color:"#8E8E93",change:0}],o={args:{assets:t,currency:"MXN",locale:"es-MX"},decorators:[a=>e.jsx("div",{className:"w-[500px]",children:e.jsx(a,{})})]},r={args:{assets:[{id:"1",name:"Crypto",value:4e4,color:"#FF9500",change:5.2},{id:"2",name:"Gold",value:2e4,color:"#FFD700",change:1.4}],currency:"USD",locale:"en-US"},decorators:[a=>e.jsx("div",{className:"w-[500px]",children:e.jsx(a,{})})]},s={name:"💰 Large Portfolio",args:{assets:[{id:"1",name:"US Equities",value:25e4,color:"#007AFF",change:2.1},{id:"2",name:"International",value:1e5,color:"#5AC8FA",change:-.3},{id:"3",name:"Fixed Income",value:8e4,color:"#34C759",change:.8},{id:"4",name:"Real Estate",value:12e4,color:"#AF52DE",change:1.5},{id:"5",name:"Commodities",value:3e4,color:"#FF9500",change:-2.1},{id:"6",name:"Cash",value:2e4,color:"#8E8E93",change:0}],currency:"USD",locale:"en-US"},decorators:[a=>e.jsx("div",{className:"w-[550px]",children:e.jsx(a,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    assets: defaultAssets,
    currency: 'MXN',
    locale: 'es-MX'
  },
  decorators: [Story => <div className="w-[500px]"><Story /></div>]
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    assets: [{
      id: '1',
      name: 'Crypto',
      value: 40000,
      color: '#FF9500',
      change: 5.2
    }, {
      id: '2',
      name: 'Gold',
      value: 20000,
      color: '#FFD700',
      change: 1.4
    }],
    currency: 'USD',
    locale: 'en-US'
  },
  decorators: [Story => <div className="w-[500px]"><Story /></div>]
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '💰 Large Portfolio',
  args: {
    assets: [{
      id: '1',
      name: 'US Equities',
      value: 250000,
      color: '#007AFF',
      change: 2.1
    }, {
      id: '2',
      name: 'International',
      value: 100000,
      color: '#5AC8FA',
      change: -0.3
    }, {
      id: '3',
      name: 'Fixed Income',
      value: 80000,
      color: '#34C759',
      change: 0.8
    }, {
      id: '4',
      name: 'Real Estate',
      value: 120000,
      color: '#AF52DE',
      change: 1.5
    }, {
      id: '5',
      name: 'Commodities',
      value: 30000,
      color: '#FF9500',
      change: -2.1
    }, {
      id: '6',
      name: 'Cash',
      value: 20000,
      color: '#8E8E93',
      change: 0
    }],
    currency: 'USD',
    locale: 'en-US'
  },
  decorators: [Story => <div className="w-[550px]"><Story /></div>]
}`,...s.parameters?.docs?.source}}};const S=["Default","TwoAssets","LargePortfolio"];export{o as Default,s as LargePortfolio,r as TwoAssets,S as __namedExportsOrder,F as default};
