import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-DaLCRA3n.js";import{n,t as r}from"./AssetPriceTicker-xfL7fVoH.js";var i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i=t(),a={title:`Fintech/Investments/AssetPriceTicker`,component:r,tags:[`autodocs`]},o=[{id:`1`,symbol:`BTC`,name:`Bitcoin`,price:67450.32,change:2.45,type:`crypto`,icon:`₿`},{id:`2`,symbol:`ETH`,name:`Ethereum`,price:3456.78,change:-1.23,type:`crypto`,icon:`⟠`},{id:`3`,symbol:`AAPL`,name:`Apple Inc.`,price:198.45,change:.87,type:`stock`},{id:`4`,symbol:`GOOGL`,name:`Alphabet Inc.`,price:175.2,change:-.32,type:`stock`},{id:`5`,symbol:`EUR/USD`,name:`Euro`,price:1.0923,change:.15,type:`forex`},{id:`6`,symbol:`SOL`,name:`Solana`,price:142.56,change:5.67,type:`crypto`,icon:`◎`}],s={args:{assets:o,currency:`USD`,layout:`horizontal`}},c={args:{assets:o,currency:`USD`,layout:`vertical`}},l={args:{assets:o.slice(0,4),currency:`USD`,layout:`horizontal`,compact:!0}},u={args:{assets:o.slice(0,4),currency:`USD`,layout:`vertical`,compact:!0}},d={args:{assets:o.filter(e=>e.type===`crypto`),currency:`USD`,layout:`horizontal`}},f={args:{assets:o.filter(e=>e.type===`stock`),currency:`USD`,layout:`vertical`}},p={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,i.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,i.jsx)(e,{})})]},m={parameters:{viewport:{defaultViewport:`mobile1`}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    assets: sampleAssets,
    currency: 'USD',
    layout: 'horizontal'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    assets: sampleAssets,
    currency: 'USD',
    layout: 'vertical'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    assets: sampleAssets.slice(0, 4),
    currency: 'USD',
    layout: 'horizontal',
    compact: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    assets: sampleAssets.slice(0, 4),
    currency: 'USD',
    layout: 'vertical',
    compact: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    assets: sampleAssets.filter(a => a.type === 'crypto'),
    currency: 'USD',
    layout: 'horizontal'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    assets: sampleAssets.filter(a => a.type === 'stock'),
    currency: 'USD',
    layout: 'vertical'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`VerticalLayout`,`CompactHorizontal`,`CompactVertical`,`CryptoOnly`,`StocksOnly`,`DarkMode`,`MobileView`]}))();export{l as CompactHorizontal,u as CompactVertical,d as CryptoOnly,p as DarkMode,s as Default,m as MobileView,f as StocksOnly,c as VerticalLayout,h as __namedExportsOrder,a as default};