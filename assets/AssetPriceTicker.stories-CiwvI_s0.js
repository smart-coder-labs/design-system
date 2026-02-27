import{j as e}from"./jsx-runtime-u17CrQMm.js";import{A as i}from"./AssetPriceTicker-DgmTbhdl.js";import"./utils-CDN07tui.js";import"./proxy-Anf5ZDsz.js";import"./iframe-BcpDUSja.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-juiWZL7b.js";import"./minus-BwTthkcv.js";import"./createLucideIcon-BopTFegF.js";import"./trending-up-CgGeoRO0.js";import"./trending-down-B7wuR4mO.js";const S={title:"Fintech/Investments/AssetPriceTicker",component:i,parameters:{layout:"centered"},tags:[],argTypes:{layout:{control:"select",options:["horizontal","vertical"]}}},c=[{id:"1",symbol:"BTC",name:"Bitcoin",price:97234.5,change:2.34,type:"crypto",icon:"₿"},{id:"2",symbol:"ETH",name:"Ethereum",price:3456.12,change:-.56,type:"crypto",icon:"Ξ"},{id:"3",symbol:"USD/MXN",name:"Dollar/Peso",price:17.15,change:.12,type:"forex",icon:"🇲🇽"},{id:"4",symbol:"AAPL",name:"Apple Inc.",price:245.8,change:1.45,type:"stock",icon:"🍎"},{id:"5",symbol:"TSLA",name:"Tesla",price:312.5,change:-2.1,type:"stock",icon:"⚡"}],r={args:{assets:c,layout:"horizontal"},decorators:[o=>e.jsx("div",{className:"w-[600px]",children:e.jsx(o,{})})]},a={args:{assets:c,layout:"vertical"},decorators:[o=>e.jsx("div",{className:"w-[400px]",children:e.jsx(o,{})})]},s={args:{assets:c,layout:"horizontal",compact:!0},decorators:[o=>e.jsx("div",{className:"w-[600px]",children:e.jsx(o,{})})]},t={name:"₿ Crypto Only",args:{assets:[{id:"1",symbol:"BTC",name:"Bitcoin",price:97234.5,change:2.34,type:"crypto",icon:"₿"},{id:"2",symbol:"ETH",name:"Ethereum",price:3456.12,change:-.56,type:"crypto",icon:"Ξ"},{id:"3",symbol:"SOL",name:"Solana",price:178.9,change:5.67,type:"crypto",icon:"☀️"},{id:"4",symbol:"ADA",name:"Cardano",price:.4523,change:-1.23,type:"crypto",icon:"💎"}],layout:"vertical"},decorators:[o=>e.jsx("div",{className:"w-[400px]",children:e.jsx(o,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    assets: defaultAssets,
    layout: 'horizontal'
  },
  decorators: [Story => <div className="w-[600px]"><Story /></div>]
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    assets: defaultAssets,
    layout: 'vertical'
  },
  decorators: [Story => <div className="w-[400px]"><Story /></div>]
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    assets: defaultAssets,
    layout: 'horizontal',
    compact: true
  },
  decorators: [Story => <div className="w-[600px]"><Story /></div>]
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '₿ Crypto Only',
  args: {
    assets: [{
      id: '1',
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 97234.50,
      change: 2.34,
      type: 'crypto',
      icon: '₿'
    }, {
      id: '2',
      symbol: 'ETH',
      name: 'Ethereum',
      price: 3456.12,
      change: -0.56,
      type: 'crypto',
      icon: 'Ξ'
    }, {
      id: '3',
      symbol: 'SOL',
      name: 'Solana',
      price: 178.90,
      change: 5.67,
      type: 'crypto',
      icon: '☀️'
    }, {
      id: '4',
      symbol: 'ADA',
      name: 'Cardano',
      price: 0.4523,
      change: -1.23,
      type: 'crypto',
      icon: '💎'
    }],
    layout: 'vertical'
  },
  decorators: [Story => <div className="w-[400px]"><Story /></div>]
}`,...t.parameters?.docs?.source}}};const A=["Horizontal","Vertical","Compact","CryptoOnly"];export{s as Compact,t as CryptoOnly,r as Horizontal,a as Vertical,A as __namedExportsOrder,S as default};
