import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ns4lj-Vt.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{l as o,s,t as c}from"./es-Bab7Eu6H.js";import{dr as l,er as u,it as d,rt as f,t as p}from"./lucide-react-DM_OnbjU.js";var m,h,g,_=e((()=>{m=t(n()),c(),p(),r(),h=a(),g=({className:e,onSave:t})=>{let[n,r]=(0,m.useState)(1),[a,c]=(0,m.useState)(`50`),[p,g]=(0,m.useState)(`S&P 500`),[_,v]=(0,m.useState)(`biweekly`);return(0,h.jsxs)(`div`,{className:i(`w-full max-w-sm bg-surface-primary rounded-[2rem] p-6 shadow-xl border border-border-primary overflow-hidden relative`,e),children:[(0,h.jsxs)(`div`,{className:`flex items-center gap-3 mb-6`,children:[(0,h.jsx)(`div`,{className:`p-2.5 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl shadow-sm`,children:(0,h.jsx)(d,{className:`w-5 h-5`})}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h3`,{className:`text-lg font-bold text-text-primary`,children:`Auto-Invest`}),(0,h.jsx)(`p`,{className:`text-sm text-text-tertiary`,children:`Dollar Cost Averaging`})]})]}),(0,h.jsxs)(`div`,{className:`mb-4`,children:[(0,h.jsx)(`div`,{className:`h-1.5 w-full bg-background-secondary rounded-full overflow-hidden flex`,children:(0,h.jsx)(s.div,{className:`h-full bg-indigo-500`,initial:{width:`50%`},animate:{width:n===1?`50%`:`100%`},transition:{duration:.3}})}),(0,h.jsxs)(`div`,{className:`flex justify-between items-center text-xs font-bold uppercase tracking-wider text-text-tertiary mt-2`,children:[(0,h.jsx)(`span`,{className:n===1?`text-indigo-600 dark:text-indigo-400`:``,children:`Step 1: What`}),(0,h.jsx)(`span`,{className:n===2?`text-indigo-600 dark:text-indigo-400`:``,children:`Step 2: When`})]})]}),(0,h.jsx)(`div`,{className:`relative min-h-[300px]`,children:(0,h.jsxs)(o,{mode:`wait`,children:[n===1&&(0,h.jsxs)(s.div,{initial:{x:-20,opacity:0},animate:{x:0,opacity:1},exit:{x:-20,opacity:0},className:`space-y-6`,children:[(0,h.jsxs)(`div`,{className:`space-y-3`,children:[(0,h.jsx)(`label`,{className:`text-sm font-semibold text-text-secondary block`,children:`I want to buy`}),(0,h.jsx)(`div`,{className:`flex gap-2 pb-2 overflow-x-auto custom-scrollbar`,children:[{id:`S&P 500`,name:`S&P 500`,type:`ETF`,color:`bg-blue-500`},{id:`Bitcoin`,name:`Bitcoin`,type:`Crypto`,color:`bg-orange-500`},{id:`Apple`,name:`Apple Inc.`,type:`Stock`,color:`bg-zinc-800`}].map(e=>(0,h.jsxs)(`button`,{onClick:()=>g(e.id),className:i(`flex-shrink-0 flex items-center gap-2 p-2 pr-4 rounded-xl border-2 transition-all`,p===e.id?`border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-500`:`border-border-primary hover:border-zinc-300 shadow-sm text-text-primary`),children:[(0,h.jsx)(`div`,{className:i(`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white`,e.color),children:e.name[0]}),(0,h.jsxs)(`div`,{className:`text-left leading-tight`,children:[(0,h.jsx)(`div`,{className:`text-sm font-bold`,children:e.name}),(0,h.jsx)(`div`,{className:`text-[10px] uppercase font-semibold text-text-tertiary`,children:e.type})]})]},e.id))})]}),(0,h.jsxs)(`div`,{className:`space-y-3`,children:[(0,h.jsx)(`label`,{className:`text-sm font-semibold text-text-secondary block`,children:`Amount`}),(0,h.jsxs)(`div`,{className:`relative`,children:[(0,h.jsx)(`span`,{className:`absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-text-tertiary`,children:`$`}),(0,h.jsx)(`input`,{type:`number`,value:a,onChange:e=>c(e.target.value),className:`w-full bg-background-secondary border border-border-primary rounded-2xl pl-10 pr-4 py-4 text-3xl font-black text-text-primary outline-none focus:ring-2 focus:ring-indigo-500 transition-shadow [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`})]})]}),(0,h.jsxs)(s.button,{whileTap:{scale:.96},onClick:()=>r(2),className:`w-full py-4 bg-zinc-900 hover:bg-zinc-700 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-zinc-900 rounded-xl font-bold flex items-center justify-center gap-2 mt-4 shadow-md hover:shadow-lg transition-all`,children:[`Continue `,(0,h.jsx)(u,{className:`w-5 h-5`})]})]},`step1`),n===2&&(0,h.jsxs)(s.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1},exit:{x:20,opacity:0},className:`space-y-6`,children:[(0,h.jsxs)(`div`,{className:`space-y-3`,children:[(0,h.jsxs)(`label`,{className:`text-sm font-semibold text-text-secondary block flex items-center gap-2`,children:[(0,h.jsx)(l,{className:`w-4 h-4`}),` Keep buying it`]}),(0,h.jsx)(`div`,{className:`grid grid-cols-2 gap-3`,children:[{id:`daily`,label:`Daily`,desc:`Every market day`},{id:`weekly`,label:`Weekly`,desc:`Every Monday`},{id:`biweekly`,label:`Bi/Weekly`,desc:`Every 15 days`},{id:`monthly`,label:`Monthly`,desc:`1st of month`}].map(e=>(0,h.jsxs)(`button`,{onClick:()=>v(e.id),className:i(`p-4 rounded-xl border-2 text-left transition-all`,_===e.id?`border-indigo-500 bg-indigo-50 dark:bg-indigo-500/10 ring-2 ring-indigo-500/20 shadow-sm text-indigo-900 dark:text-indigo-100`:`border-border-primary hover:border-zinc-300 text-text-primary`),children:[(0,h.jsx)(`div`,{className:`font-bold text-text-primary`,children:e.label}),(0,h.jsx)(`div`,{className:`text-xs text-text-tertiary mt-1 font-medium`,children:e.desc})]},e.id))})]}),(0,h.jsxs)(`div`,{className:`bg-indigo-50/50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-900/30 rounded-2xl p-4 text-sm text-indigo-900 dark:text-indigo-200`,children:[(0,h.jsx)(`b`,{children:`Summary:`}),` You will auto-invest `,(0,h.jsxs)(`b`,{children:[`$`,a]}),` in `,(0,h.jsx)(`b`,{children:p}),` on a `,(0,h.jsx)(`b`,{children:_}),` basis.`]}),(0,h.jsxs)(`div`,{className:`flex gap-3 pt-2`,children:[(0,h.jsx)(`button`,{onClick:()=>r(1),className:`px-6 py-4 rounded-xl font-bold text-text-tertiary bg-background-secondary hover:bg-background-secondary transition-colors`,children:`Back`}),(0,h.jsxs)(s.button,{whileTap:{scale:.96},onClick:()=>{t?.({amount:parseFloat(a)||0,asset:p,frequency:_})},className:`flex-1 py-4 bg-accent-blue hover:bg-accent-blue-hover text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-accent-blue/30 transition-all`,children:[(0,h.jsx)(f,{className:`w-5 h-5`}),` Activate`]})]})]},`step2`)]})})]})},g.displayName=`RecurringInvestConfigurator`,g.__docgenInfo={description:``,methods:[],displayName:`RecurringInvestConfigurator`,props:{className:{required:!1,tsType:{name:`string`},description:``},onSave:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(rule: AutomationRule) => void`,signature:{arguments:[{type:{name:`AutomationRule`},name:`rule`}],return:{name:`void`}}},description:``}}}})),v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{_(),v=a(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Fintech/Wealth & Crypto/RecurringInvestConfigurator`,component:g,tags:[`autodocs`]},x={args:{onSave:y()}},S={args:{onSave:y()},decorators:[e=>(0,v.jsx)(`div`,{className:`p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center`,children:(0,v.jsx)(e,{})})]},C={args:{onSave:y()},decorators:[e=>(0,v.jsxs)(`div`,{className:`p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center`,children:[(0,v.jsx)(`div`,{className:`text-center mb-4 text-sm text-text-tertiary`,children:`💡 Configure $50 Bitcoin every Monday`}),(0,v.jsx)(e,{})]})]},w={args:{onSave:y()},decorators:[e=>(0,v.jsxs)(`div`,{className:`p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center`,children:[(0,v.jsx)(`div`,{className:`text-center mb-4 text-sm text-text-tertiary`,children:`💡 DCA $200 into Ethereum on the 1st of each month`}),(0,v.jsx)(e,{})]})]},T={args:{onSave:y()},decorators:[e=>(0,v.jsxs)(`div`,{className:`p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center`,children:[(0,v.jsx)(`div`,{className:`text-center mb-4 text-sm text-text-tertiary`,children:`💡 $10,000 weekly into S&P 500 for long-term growth`}),(0,v.jsx)(e,{})]})]},E={args:{onSave:y()},decorators:[e=>(0,v.jsxs)(`div`,{className:`p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center`,children:[(0,v.jsx)(`div`,{className:`text-center mb-4 text-sm text-text-tertiary`,children:`💡 Start small: $5 daily into S&P 500`}),(0,v.jsx)(e,{})]})]},D={args:{onSave:y()},parameters:{backgrounds:{default:`dark`}},decorators:[e=>(0,v.jsx)(`div`,{className:`p-8 min-h-[500px] flex items-center justify-center`,style:{backgroundColor:`#1C1C1E`},children:(0,v.jsx)(e,{})})]},O={parameters:{viewport:{defaultViewport:`mobile1`}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    onSave: fn()
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    onSave: fn()
  },
  decorators: [Story => <div className="p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center">
        <Story />
      </div>]
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    onSave: fn()
  },
  decorators: [Story => <div className="p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center">
        <div className="text-center mb-4 text-sm text-text-tertiary">
          💡 Configure $50 Bitcoin every Monday
        </div>
        <Story />
      </div>]
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    onSave: fn()
  },
  decorators: [Story => <div className="p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center">
        <div className="text-center mb-4 text-sm text-text-tertiary">
          💡 DCA $200 into Ethereum on the 1st of each month
        </div>
        <Story />
      </div>]
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    onSave: fn()
  },
  decorators: [Story => <div className="p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center">
        <div className="text-center mb-4 text-sm text-text-tertiary">
          💡 $10,000 weekly into S&P 500 for long-term growth
        </div>
        <Story />
      </div>]
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    onSave: fn()
  },
  decorators: [Story => <div className="p-8 bg-surface-secondary min-h-[500px] flex items-center justify-center">
        <div className="text-center mb-4 text-sm text-text-tertiary">
          💡 Start small: $5 daily into S&P 500
        </div>
        <Story />
      </div>]
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    onSave: fn()
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [Story => <div className="p-8 min-h-[500px] flex items-center justify-center" style={{
    backgroundColor: '#1C1C1E'
  }}>
        <Story />
      </div>]
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`WithDefaultAmount`,`WeeklyBitcoinPlan`,`MonthlyETHSaver`,`LargeInvestment`,`SmallDCA`,`DarkMode`,`MobileView`]}))();export{D as DarkMode,x as Default,T as LargeInvestment,O as MobileView,w as MonthlyETHSaver,E as SmallDCA,C as WeeklyBitcoinPlan,S as WithDefaultAmount,k as __namedExportsOrder,b as default};