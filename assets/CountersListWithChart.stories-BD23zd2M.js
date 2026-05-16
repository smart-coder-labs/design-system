import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CeXTICq7.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{n as o,t as s}from"./Chart-D48hRCoE.js";var c,l,u,d=e((()=>{c=t(n()),r(),l=a(),o(),u=({title:e,items:t,chartType:n=`donut`,className:r})=>{let[a,o]=(0,c.useState)(null),u={labels:t.map(e=>e.label),datasets:[{data:t.map(e=>e.value),backgroundColor:t.map(e=>e.color||`#3b82f6`)}]};return(0,l.jsxs)(`div`,{className:i(`bg-surface-primary rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-6`,r),children:[(0,l.jsxs)(`div`,{className:`flex-1 flex flex-col gap-4 justify-center`,children:[e&&(0,l.jsx)(`h3`,{className:`text-lg font-semibold text-text-primary mb-2`,children:e}),t.map((e,t)=>{let n=a===t;return(0,l.jsxs)(`div`,{className:i(`flex items-center justify-between py-2 border-b last:border-b-0 transition-colors`,n?`bg-surface-secondary/80 rounded-lg px-3`:`border-gray-800`),onMouseEnter:()=>o(t),onMouseLeave:()=>o(null),onFocus:()=>o(t),onBlur:()=>o(null),tabIndex:0,role:`button`,"aria-pressed":n,children:[(0,l.jsx)(`span`,{className:i(`text-base font-medium`,`text-text-primary`),children:e.label}),(0,l.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,l.jsx)(`span`,{className:i(`text-xl font-bold`,`text-text-primary`),children:e.value}),(0,l.jsxs)(`span`,{className:`text-base font-semibold`,style:{color:e.color||`#3b82f6`},children:[e.percent,`%`]})]})]},t)})]}),(0,l.jsx)(`div`,{className:`flex items-center justify-center md:w-1/3`,children:(0,l.jsx)(s,{type:n,data:u,activeIndex:a,onSliceHover:e=>o(e)})})]})},u.__docgenInfo={description:``,methods:[],displayName:`CountersListWithChart`,props:{title:{required:!1,tsType:{name:`string`},description:``},items:{required:!0,tsType:{name:`Array`,elements:[{name:`CountersListWithChartItem`}],raw:`CountersListWithChartItem[]`},description:``},chartType:{required:!1,tsType:{name:`union`,raw:`'donut' | 'pie'`,elements:[{name:`literal`,value:`'donut'`},{name:`literal`,value:`'pie'`}]},description:``,defaultValue:{value:`'donut'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),f,p,m,h,g,_,v,y,b,x,S;e((()=>{d(),f=a(),p={title:`Data Display/CountersListWithChart`,component:u,tags:[`autodocs`]},m={args:{title:`Asset Allocation`,chartType:`donut`,items:[{label:`US Equities`,value:45e3,percent:45,color:`#007AFF`},{label:`Bonds`,value:2e4,percent:20,color:`#34C759`},{label:`Crypto`,value:15e3,percent:15,color:`#AF52DE`},{label:`Real Estate`,value:12e3,percent:12,color:`#FF9500`},{label:`Cash`,value:8e3,percent:8,color:`#5AC8FA`}]}},h={args:{title:`Expense Breakdown`,template:`pie`,chartType:`pie`,items:[{label:`Housing`,value:2200,percent:35,color:`#007AFF`},{label:`Food`,value:1200,percent:19,color:`#34C759`},{label:`Transport`,value:800,percent:13,color:`#FF9500`},{label:`Entertainment`,value:600,percent:10,color:`#AF52DE`},{label:`Savings`,value:1500,percent:24,color:`#5AC8FA`}]}},g={args:{title:`Portfolio Summary`,items:[{label:`Conservative`,value:6e4,percent:60,color:`#34C759`},{label:`Moderate`,value:3e4,percent:30,color:`#007AFF`},{label:`Aggressive`,value:1e4,percent:10,color:`#AF52DE`}]}},_={args:{items:[{label:`Checking`,value:5500,percent:28,color:`#007AFF`},{label:`Savings`,value:12e3,percent:60,color:`#34C759`},{label:`Investment`,value:2500,percent:13,color:`#AF52DE`}]}},v={args:{title:`Diversified Portfolio`,items:[{label:`US Large Cap`,value:35e3,percent:28,color:`#007AFF`},{label:`International`,value:2e4,percent:16,color:`#34C759`},{label:`Emerging Markets`,value:15e3,percent:12,color:`#FF9500`},{label:`Real Estate`,value:18e3,percent:14,color:`#AF52DE`},{label:`Bonds`,value:12e3,percent:10,color:`#5AC8FA`},{label:`Commodities`,value:1e4,percent:8,color:`#FF6482`},{label:`Crypto`,value:8e3,percent:6,color:`#FFD60A`},{label:`Cash`,value:7500,percent:6,color:`#30D158`}]}},y={args:{title:`Allocation`,items:[{label:`Total Portfolio`,value:1e5,percent:100,color:`#007AFF`}]}},b={args:{title:`New Account`,items:[{label:`Stocks`,value:0,percent:0,color:`#007AFF`},{label:`Bonds`,value:0,percent:0,color:`#34C759`},{label:`Cash`,value:500,percent:100,color:`#5AC8FA`}]}},x={args:{title:`Asset Allocation`,chartType:`donut`,items:[{label:`US Equities`,value:45e3,percent:45,color:`#007AFF`},{label:`Bonds`,value:2e4,percent:20,color:`#34C759`},{label:`Crypto`,value:15e3,percent:15,color:`#AF52DE`},{label:`Real Estate`,value:12e3,percent:12,color:`#FF9500`},{label:`Cash`,value:8e3,percent:8,color:`#5AC8FA`}]},decorators:[e=>(0,f.jsx)(`div`,{className:`dark p-4 bg-gray-900 min-h-screen`,children:(0,f.jsx)(e,{})})]},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Asset Allocation',
    chartType: 'donut',
    items: [{
      label: 'US Equities',
      value: 45000,
      percent: 45,
      color: '#007AFF'
    }, {
      label: 'Bonds',
      value: 20000,
      percent: 20,
      color: '#34C759'
    }, {
      label: 'Crypto',
      value: 15000,
      percent: 15,
      color: '#AF52DE'
    }, {
      label: 'Real Estate',
      value: 12000,
      percent: 12,
      color: '#FF9500'
    }, {
      label: 'Cash',
      value: 8000,
      percent: 8,
      color: '#5AC8FA'
    }]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Expense Breakdown',
    template: 'pie' as any,
    chartType: 'pie',
    items: [{
      label: 'Housing',
      value: 2200,
      percent: 35,
      color: '#007AFF'
    }, {
      label: 'Food',
      value: 1200,
      percent: 19,
      color: '#34C759'
    }, {
      label: 'Transport',
      value: 800,
      percent: 13,
      color: '#FF9500'
    }, {
      label: 'Entertainment',
      value: 600,
      percent: 10,
      color: '#AF52DE'
    }, {
      label: 'Savings',
      value: 1500,
      percent: 24,
      color: '#5AC8FA'
    }]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Portfolio Summary',
    items: [{
      label: 'Conservative',
      value: 60000,
      percent: 60,
      color: '#34C759'
    }, {
      label: 'Moderate',
      value: 30000,
      percent: 30,
      color: '#007AFF'
    }, {
      label: 'Aggressive',
      value: 10000,
      percent: 10,
      color: '#AF52DE'
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Checking',
      value: 5500,
      percent: 28,
      color: '#007AFF'
    }, {
      label: 'Savings',
      value: 12000,
      percent: 60,
      color: '#34C759'
    }, {
      label: 'Investment',
      value: 2500,
      percent: 13,
      color: '#AF52DE'
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Diversified Portfolio',
    items: [{
      label: 'US Large Cap',
      value: 35000,
      percent: 28,
      color: '#007AFF'
    }, {
      label: 'International',
      value: 20000,
      percent: 16,
      color: '#34C759'
    }, {
      label: 'Emerging Markets',
      value: 15000,
      percent: 12,
      color: '#FF9500'
    }, {
      label: 'Real Estate',
      value: 18000,
      percent: 14,
      color: '#AF52DE'
    }, {
      label: 'Bonds',
      value: 12000,
      percent: 10,
      color: '#5AC8FA'
    }, {
      label: 'Commodities',
      value: 10000,
      percent: 8,
      color: '#FF6482'
    }, {
      label: 'Crypto',
      value: 8000,
      percent: 6,
      color: '#FFD60A'
    }, {
      label: 'Cash',
      value: 7500,
      percent: 6,
      color: '#30D158'
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Allocation',
    items: [{
      label: 'Total Portfolio',
      value: 100000,
      percent: 100,
      color: '#007AFF'
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'New Account',
    items: [{
      label: 'Stocks',
      value: 0,
      percent: 0,
      color: '#007AFF'
    }, {
      label: 'Bonds',
      value: 0,
      percent: 0,
      color: '#34C759'
    }, {
      label: 'Cash',
      value: 500,
      percent: 100,
      color: '#5AC8FA'
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Asset Allocation',
    chartType: 'donut',
    items: [{
      label: 'US Equities',
      value: 45000,
      percent: 45,
      color: '#007AFF'
    }, {
      label: 'Bonds',
      value: 20000,
      percent: 20,
      color: '#34C759'
    }, {
      label: 'Crypto',
      value: 15000,
      percent: 15,
      color: '#AF52DE'
    }, {
      label: 'Real Estate',
      value: 12000,
      percent: 12,
      color: '#FF9500'
    }, {
      label: 'Cash',
      value: 8000,
      percent: 8,
      color: '#5AC8FA'
    }]
  },
  decorators: [Story => <div className="dark p-4 bg-gray-900 min-h-screen">
                <Story />
            </div>]
}`,...x.parameters?.docs?.source}}},S=[`Default`,`PieChart`,`ThreeItems`,`WithoutTitle`,`ManyItems`,`SingleItem`,`ZeroValues`,`DarkMode`]}))();export{x as DarkMode,m as Default,v as ManyItems,h as PieChart,y as SingleItem,g as ThreeItems,_ as WithoutTitle,b as ZeroValues,S as __namedExportsOrder,p as default};