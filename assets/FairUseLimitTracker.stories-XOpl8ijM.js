import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-jtk2jlYO.js";import{n,t as r}from"./utils-4pdYZGDS.js";import{t as i}from"./jsx-runtime-BK76Wfr-.js";import{s as a,t as o}from"./es-DLZWAS6t.js";import{Jt as s,Nn as c,at as l,t as u}from"./lucide-react-LrcM5b-z.js";var d,f,p=e((()=>{t(),o(),n(),u(),d=i(),f=({categories:e,className:t})=>(0,d.jsxs)(`div`,{className:r(`w-full max-w-sm rounded-[2rem] p-6 bg-surface-primary border border-border-primary shadow-xl`,t),children:[(0,d.jsxs)(`div`,{className:`mb-6`,children:[(0,d.jsx)(`h3`,{className:`text-xl font-bold text-text-primary mb-1`,children:`Fair Use Limits`}),(0,d.jsx)(`p`,{className:`text-sm text-text-tertiary`,children:`Your monthly free allowances reset in 12 days`})]}),(0,d.jsx)(`div`,{className:`space-y-6`,children:e.map((e,t)=>{let n=Math.min(e.used/e.total*100,100),i=n>=100,o=n>=80&&!i,s=e.currency?new Intl.NumberFormat(`en-US`,{style:`currency`,currency:e.currency}).format(e.used):e.used,c=e.currency?new Intl.NumberFormat(`en-US`,{style:`currency`,currency:e.currency}).format(e.total):e.total;return(0,d.jsxs)(`div`,{className:`relative bg-background-secondary rounded-2xl p-4 border border-border-primary`,children:[(0,d.jsxs)(`div`,{className:`flex items-center justify-between mb-3`,children:[(0,d.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,d.jsx)(`div`,{className:r(`p-2 rounded-xl bg-white dark:bg-zinc-700 shadow-sm`,e.color||`text-zinc-600 dark:text-zinc-300`),children:e.icon||(0,d.jsx)(l,{className:`w-4 h-4`})}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`font-semibold text-text-primary text-sm`,children:e.title}),(0,d.jsxs)(`p`,{className:r(`text-xs font-medium mix-blend-overlay`,i?`text-red-600 dark:text-red-400`:o?`text-amber-600 dark:text-amber-400`:`text-text-tertiary`),children:[s,` / `,c]})]})]}),(0,d.jsxs)(`div`,{className:`text-right`,children:[(0,d.jsxs)(`p`,{className:r(`text-lg font-bold tracking-tight`,i?`text-red-600 dark:text-red-400`:o?`text-amber-600 dark:text-amber-400`:`text-emerald-600 dark:text-emerald-400`),children:[i?`0`:(100-n).toFixed(0),`%`]}),(0,d.jsx)(`p`,{className:`text-[10px] uppercase font-bold tracking-wider text-zinc-400 dark:text-zinc-500`,children:`Left`})]})]}),(0,d.jsx)(`div`,{className:`relative h-2.5 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden`,children:(0,d.jsx)(a.div,{initial:{width:0},animate:{width:`${n}%`},transition:{duration:1,ease:`easeOut`,delay:t*.1},className:r(`absolute top-0 left-0 h-full rounded-full transition-all duration-300`,i?`bg-red-500`:o?`bg-amber-500`:`bg-gradient-to-r from-emerald-500 to-teal-400`)})}),i&&(0,d.jsx)(a.p,{initial:{opacity:0,y:-5},animate:{opacity:1,y:0},className:`text-xs text-red-600 dark:text-red-400 font-medium mt-2 flex items-center gap-1`,children:`You've exceeded your free limit. A 1% fee applies.`})]},e.id)})}),(0,d.jsx)(`button`,{className:`w-full mt-6 py-3 rounded-xl border-2 border-dashed border-border-primary text-text-secondary font-semibold hover:border-zinc-300 dark:hover:border-zinc-600 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors`,children:`Upgrade Plan for Higher Limits`})]}),f.displayName=`FairUseLimitTracker`,f.__docgenInfo={description:``,methods:[],displayName:`FairUseLimitTracker`,props:{categories:{required:!0,tsType:{name:`Array`,elements:[{name:`LimitCategory`}],raw:`LimitCategory[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{t(),p(),u(),m=i(),h=[{id:`transfers`,title:`Fintech/FX & International Payments/FairUseLimitTracker`,used:12,total:20,icon:(0,m.jsx)(l,{className:`w-4 h-4`}),color:`text-blue-500`},{id:`withdrawals`,used:5,total:10,icon:(0,m.jsx)(s,{className:`w-4 h-4`}),color:`text-emerald-500`},{id:`virtual-cards`,used:3,total:5,icon:(0,m.jsx)(c,{className:`w-4 h-4`}),color:`text-purple-500`}],g={component:f,tags:[`autodocs`]},_={args:{categories:h}},v={args:{categories:h.map(e=>({...e,used:e.total*.85}))}},y={args:{categories:[{id:`transfers`,title:`Transfers`,used:20,total:20,icon:(0,m.jsx)(l,{className:`w-4 h-4`}),color:`text-blue-500`},{id:`withdrawals`,title:`ATM Withdrawals`,used:12,total:10,icon:(0,m.jsx)(s,{className:`w-4 h-4`}),color:`text-emerald-500`}]}},b={args:{categories:[{id:`spending`,title:`Monthly Spending`,used:2500,total:5e3,currency:`USD`,icon:(0,m.jsx)(c,{className:`w-4 h-4`}),color:`text-blue-500`},{id:`savings`,title:`Savings Goal`,used:18e4,total:5e5,currency:`MXN`,icon:(0,m.jsx)(s,{className:`w-4 h-4`}),color:`text-emerald-500`}]}},x={args:{categories:[{id:`single`,title:`International Transfers`,used:3,total:5,icon:(0,m.jsx)(l,{className:`w-4 h-4`}),color:`text-blue-500`}]}},S={args:{categories:[]}},C={args:{categories:h.map(e=>({...e,used:0}))}},w={args:{categories:[...h,{id:`debit-card`,title:`Debit Card Purchases`,used:42,total:50,icon:(0,m.jsx)(c,{className:`w-4 h-4`}),color:`text-amber-500`}]},decorators:[e=>(0,m.jsx)(`div`,{className:`max-w-sm mx-auto`,children:(0,m.jsx)(e,{})})]},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    categories
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    categories: categories.map(c => ({
      ...c,
      used: c.total * 0.85
    }))
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    categories: [{
      id: 'transfers',
      title: 'Transfers',
      used: 20,
      total: 20,
      icon: <RefreshCw className="w-4 h-4" />,
      color: 'text-blue-500'
    }, {
      id: 'withdrawals',
      title: 'ATM Withdrawals',
      used: 12,
      total: 10,
      icon: <Landmark className="w-4 h-4" />,
      color: 'text-emerald-500'
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    categories: [{
      id: 'spending',
      title: 'Monthly Spending',
      used: 2500,
      total: 5000,
      currency: 'USD',
      icon: <CreditCard className="w-4 h-4" />,
      color: 'text-blue-500'
    }, {
      id: 'savings',
      title: 'Savings Goal',
      used: 180000,
      total: 500000,
      currency: 'MXN',
      icon: <Landmark className="w-4 h-4" />,
      color: 'text-emerald-500'
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    categories: [{
      id: 'single',
      title: 'International Transfers',
      used: 3,
      total: 5,
      icon: <RefreshCw className="w-4 h-4" />,
      color: 'text-blue-500'
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    categories: []
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    categories: categories.map(c => ({
      ...c,
      used: 0
    }))
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    categories: [...categories, {
      id: 'debit-card',
      title: 'Debit Card Purchases',
      used: 42,
      total: 50,
      icon: <CreditCard className="w-4 h-4" />,
      color: 'text-amber-500'
    }]
  },
  decorators: [Story => <div className="max-w-sm mx-auto">
        <Story />
      </div>]
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WarningLimits`,`ExceededLimits`,`CurrencyLimits`,`SingleCategory`,`EmptyLimits`,`AllAtZero`,`MobileCard`]}))();export{C as AllAtZero,b as CurrencyLimits,_ as Default,S as EmptyLimits,y as ExceededLimits,w as MobileCard,x as SingleCategory,v as WarningLimits,T as __namedExportsOrder,g as default};