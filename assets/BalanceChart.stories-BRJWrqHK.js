import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-BK76Wfr-.js";import{n,t as r}from"./BalanceChart-Bj-XYW1K.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{n(),i=t(),a={title:`Fintech/Dashboard/BalanceChart`,component:r,tags:[`autodocs`]},o=(e,t,n)=>Array.from({length:e},(e,r)=>({label:`Day ${r+1}`,value:t+Math.sin(r*.3)*n+(Math.random()-.5)*n*.3})),s=o(30,5e3,800),c=o(30,5e3,2e3),l={args:{data:s,currency:`USD`,title:`Balance Evolution`,maskable:!0}},u={args:{data:s,currency:`EUR`,title:`Balance Evolution`}},d={args:{data:s,currency:`USD`,title:`Balance Evolution`,maskable:!0}},f={args:{data:s.slice(-7),currency:`USD`,title:`This Week`,maskable:!0}},p={args:{data:c,currency:`USD`,title:`Volatile Portfolio`}},m={args:{data:s.slice(-7),currency:`USD`,title:`This Week`,height:120}},h={args:{data:s,currency:`USD`,title:`Tall Chart`,height:250}},g={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,i.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,i.jsx)(e,{})})]},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    data: upwardTrendData,
    currency: 'USD',
    title: 'Balance Evolution',
    maskable: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    data: upwardTrendData,
    currency: 'EUR',
    title: 'Balance Evolution'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    data: upwardTrendData,
    currency: 'USD',
    title: 'Balance Evolution',
    maskable: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: upwardTrendData.slice(-7),
    currency: 'USD',
    title: 'This Week',
    maskable: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: volatileData,
    currency: 'USD',
    title: 'Volatile Portfolio'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: upwardTrendData.slice(-7),
    currency: 'USD',
    title: 'This Week',
    height: 120
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    data: upwardTrendData,
    currency: 'USD',
    title: 'Tall Chart',
    height: 250
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Default`,`EuroCurrency`,`Masked`,`MaskedHidden`,`VolatileTrend`,`WeekView`,`CustomHeight`,`DarkMode`]}))();export{h as CustomHeight,g as DarkMode,l as Default,u as EuroCurrency,d as Masked,f as MaskedHidden,p as VolatileTrend,m as WeekView,_ as __namedExportsOrder,a as default};