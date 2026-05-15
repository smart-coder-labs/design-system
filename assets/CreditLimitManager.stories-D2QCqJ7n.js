import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DL3IwwZJ.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{s as o,t as s}from"./es-CnNtA5mJ.js";import{H as c,Lt as l,rr as u,t as d}from"./lucide-react-C3ayLXpj.js";var f,p,m,h=e((()=>{f=t(n()),s(),d(),r(),p=a(),m=({maxLimit:e=1e4,initialLimit:t=1e4,currentBalance:n=1500,currency:r=`USD`,className:a,onSave:s})=>{let[d,m]=(0,f.useState)(t),[h,g]=(0,f.useState)(!1),[_,v]=(0,f.useState)(!1),y=e=>new Intl.NumberFormat(`en-US`,{style:`currency`,currency:r,maximumFractionDigits:0}).format(e),b=Math.max(n,0),x=e=>{e<b||(m(e),v(!1))},S=()=>{g(!0),setTimeout(()=>{g(!1),v(!0),s?.(d)},800)},C=d/e*100;return(0,p.jsxs)(`div`,{className:i(`w-full max-w-md bg-surface-primary rounded-[2rem] p-6 shadow-xl border border-border-primary`,a),children:[(0,p.jsxs)(`div`,{className:`flex items-center gap-3 mb-6`,children:[(0,p.jsx)(`div`,{className:`p-2.5 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 rounded-2xl shadow-sm`,children:(0,p.jsx)(c,{className:`w-5 h-5`})}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{className:`text-lg font-bold text-text-primary`,children:`Credit Limit`}),(0,p.jsx)(`p`,{className:`text-sm text-text-tertiary`,children:`Control your spending power`})]})]}),(0,p.jsxs)(`div`,{className:`bg-zinc-50 dark:bg-zinc-800/40 rounded-3xl p-6 border border-border-primary/50 mb-6`,children:[(0,p.jsx)(`div`,{className:`flex items-end justify-between mb-8`,children:(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-1`,children:`Active Limit`}),(0,p.jsx)(`h2`,{className:`text-4xl font-bold tracking-tight text-text-primary transition-all duration-100`,children:y(d)})]})}),(0,p.jsxs)(`div`,{className:`relative pt-4 pb-2`,children:[(0,p.jsxs)(`div`,{className:`relative h-2 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full`,children:[(0,p.jsx)(`div`,{className:i(`absolute top-0 left-0 h-full rounded-full`,d<e/2?`bg-emerald-500`:d<e*.8?`bg-violet-500`:`bg-amber-500`),style:{width:`${C}%`,transition:`width 80ms linear`},children:(0,p.jsx)(`div`,{className:`absolute right-0 top-1/2 -mt-3 -mr-3 w-6 h-6 bg-white border-2 border-inherit rounded-full shadow-lg cursor-pointer`})}),(0,p.jsx)(`input`,{type:`range`,min:b,max:e,step:100,value:d,onChange:e=>x(Number(e.target.value)),className:`absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer`})]}),(0,p.jsxs)(`div`,{className:`flex justify-between items-center mt-3 text-xs font-medium text-text-tertiary`,children:[(0,p.jsxs)(`span`,{children:[y(b),` (Balance)`]}),(0,p.jsxs)(`span`,{children:[y(e),` Max`]})]})]})]}),(0,p.jsxs)(`div`,{className:`bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-4 flex gap-3 border border-blue-100 dark:border-blue-900/30 mb-6`,children:[(0,p.jsx)(l,{className:`w-5 h-5 text-blue-500 shrink-0 mt-0.5`}),(0,p.jsx)(`p`,{className:`text-sm text-blue-800 dark:text-blue-300`,children:`Lowering your limit temporarily protects you from unauthorized large purchases. It doesn't affect your credit score.`})]}),(0,p.jsx)(o.button,{whileTap:{scale:.96},disabled:d===t&&!_,onClick:S,className:i(`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue`,d===t&&!_?`bg-background-secondary text-zinc-400 dark:text-zinc-500 cursor-not-allowed border border-transparent`:_?`bg-status-success/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800`:`bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:shadow-lg`),children:h?(0,p.jsx)(`span`,{className:`w-5 h-5 border-2 border-current border-t-transparent flex rounded-full animate-spin`}):_?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u,{className:`w-5 h-5`}),` `,(0,p.jsx)(`span`,{children:`Limit Saved`})]}):`Apply Changes`})]})},m.displayName=`CreditLimitManager`,m.__docgenInfo={description:``,methods:[],displayName:`CreditLimitManager`,props:{maxLimit:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`10000`,computed:!1}},initialLimit:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`10000`,computed:!1}},currentBalance:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1500`,computed:!1}},currency:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'USD'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},onSave:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(newLimit: number) => void`,signature:{arguments:[{type:{name:`number`},name:`newLimit`}],return:{name:`void`}}},description:``}}}})),g,_,v,y,b,x,S,C,w,T,E;e((()=>{h(),g=a(),_={title:`Fintech/Credit & BNPL/CreditLimitManager`,component:m,tags:[`autodocs`]},v={args:{maxLimit:1e4,initialLimit:5e3,currentBalance:1500,currency:`USD`}},y={args:{maxLimit:1e4,initialLimit:1e4,currentBalance:3200,currency:`USD`}},b={args:{maxLimit:5e3,initialLimit:1800,currentBalance:1750,currency:`USD`}},x={args:{maxLimit:5e4,initialLimit:25e3,currentBalance:8500,currency:`USD`}},S={args:{maxLimit:15e3,initialLimit:1e4,currentBalance:3200,currency:`EUR`}},C={args:{maxLimit:2e3,initialLimit:2e3,currentBalance:0,currency:`USD`}},w={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,g.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,g.jsx)(e,{})})]},T={parameters:{viewport:{defaultViewport:`mobile1`}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    maxLimit: 10000,
    initialLimit: 5000,
    currentBalance: 1500,
    currency: 'USD'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    maxLimit: 10000,
    initialLimit: 10000,
    currentBalance: 3200,
    currency: 'USD'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    maxLimit: 5000,
    initialLimit: 1800,
    currentBalance: 1750,
    currency: 'USD'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    maxLimit: 50000,
    initialLimit: 25000,
    currentBalance: 8500,
    currency: 'USD'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    maxLimit: 15000,
    initialLimit: 10000,
    currentBalance: 3200,
    currency: 'EUR'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    maxLimit: 2000,
    initialLimit: 2000,
    currentBalance: 0,
    currency: 'USD'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`FullLimit`,`NearBalance`,`HighLimit`,`EuroCurrency`,`ZeroBalance`,`DarkMode`,`MobileView`]}))();export{w as DarkMode,v as Default,S as EuroCurrency,y as FullLimit,x as HighLimit,T as MobileView,b as NearBalance,C as ZeroBalance,E as __namedExportsOrder,_ as default};