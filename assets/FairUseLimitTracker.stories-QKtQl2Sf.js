import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as a}from"./utils-DCADjnpI.js";import{R as p}from"./refresh-cw-cONdBtn6.js";import{m as c}from"./proxy-DgdbOAE3.js";import{L as h}from"./landmark-BGpVH1Ij.js";import{G as y}from"./globe-b2g1SBAN.js";import{c as b}from"./createLucideIcon-BvoP2Q-9.js";import"./iframe-CSCYuKHF.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-BeIloL1I.js";const f=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]],g=b("badge-percent",f),d=({categories:n,className:l})=>e.jsxs("div",{className:a("w-full max-w-sm rounded-[2rem] p-6 bg-surface-primary border border-border-primary shadow-xl",l),children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h3",{className:"text-xl font-bold text-text-primary mb-1",children:"Fair Use Limits"}),e.jsx("p",{className:"text-sm text-text-tertiary",children:"Your monthly free allowances reset in 12 days"})]}),e.jsx("div",{className:"space-y-6",children:n.map((r,m)=>{const s=Math.min(r.used/r.total*100,100),t=s>=100,o=s>=80&&!t,x=r.currency?new Intl.NumberFormat("en-US",{style:"currency",currency:r.currency}).format(r.used):r.used,u=r.currency?new Intl.NumberFormat("en-US",{style:"currency",currency:r.currency}).format(r.total):r.total;return e.jsxs("div",{className:"relative bg-background-secondary rounded-2xl p-4 border border-border-primary",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:a("p-2 rounded-xl bg-white dark:bg-zinc-700 shadow-sm",r.color||"text-zinc-600 dark:text-zinc-300"),children:r.icon||e.jsx(p,{className:"w-4 h-4"})}),e.jsxs("div",{children:[e.jsx("p",{className:"font-semibold text-text-primary text-sm",children:r.title}),e.jsxs("p",{className:a("text-xs font-medium mix-blend-overlay",t?"text-red-600 dark:text-red-400":o?"text-amber-600 dark:text-amber-400":"text-text-tertiary"),children:[x," / ",u]})]})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:a("text-lg font-bold tracking-tight",t?"text-red-600 dark:text-red-400":o?"text-amber-600 dark:text-amber-400":"text-emerald-600 dark:text-emerald-400"),children:[t?"0":(100-s).toFixed(0),"%"]}),e.jsx("p",{className:"text-[10px] uppercase font-bold tracking-wider text-zinc-400 dark:text-zinc-500",children:"Left"})]})]}),e.jsx("div",{className:"relative h-2.5 w-full bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden",children:e.jsx(c.div,{initial:{width:0},animate:{width:`${s}%`},transition:{duration:1,ease:"easeOut",delay:m*.1},className:a("absolute top-0 left-0 h-full rounded-full transition-all duration-300",t?"bg-red-500":o?"bg-amber-500":"bg-gradient-to-r from-emerald-500 to-teal-400")})}),t&&e.jsx(c.p,{initial:{opacity:0,y:-5},animate:{opacity:1,y:0},className:"text-xs text-red-600 dark:text-red-400 font-medium mt-2 flex items-center gap-1",children:"You've exceeded your free limit. A 1% fee applies."})]},r.id)})}),e.jsx("button",{className:"w-full mt-6 py-3 rounded-xl border-2 border-dashed border-border-primary text-text-secondary font-semibold hover:border-zinc-300 dark:hover:border-zinc-600 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors",children:"Upgrade Plan for Higher Limits"})]});d.displayName="FairUseLimitTracker";d.__docgenInfo={description:"",methods:[],displayName:"FairUseLimitTracker",props:{categories:{required:!0,tsType:{name:"Array",elements:[{name:"LimitCategory"}],raw:"LimitCategory[]"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"Fintech/FX & International Payments/FairUseLimitTracker",component:d,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{categories:[{id:"atm",title:"Free ATM Withdrawals",used:250,total:400,currency:"USD",icon:e.jsx(h,{className:"w-5 h-5"}),color:"text-indigo-500"},{id:"fx",title:"No-Fee Currency Exchange",used:950,total:1e3,currency:"USD",icon:e.jsx(y,{className:"w-5 h-5"}),color:"text-emerald-500"},{id:"crypto",title:"Free Crypto Purchases",used:50,total:50,currency:"USD",icon:e.jsx(g,{className:"w-5 h-5"}),color:"text-amber-500"}]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    categories: [{
      id: 'atm',
      title: 'Free ATM Withdrawals',
      used: 250,
      total: 400,
      currency: 'USD',
      icon: <Landmark className="w-5 h-5" />,
      color: 'text-indigo-500'
    }, {
      id: 'fx',
      title: 'No-Fee Currency Exchange',
      used: 950,
      total: 1000,
      currency: 'USD',
      icon: <Globe className="w-5 h-5" />,
      color: 'text-emerald-500'
    }, {
      id: 'crypto',
      title: 'Free Crypto Purchases',
      used: 50,
      total: 50,
      currency: 'USD',
      icon: <BadgePercent className="w-5 h-5" />,
      color: 'text-amber-500'
    }]
  }
}`,...i.parameters?.docs?.source}}};const D=["Default"];export{i as Default,D as __namedExportsOrder,T as default};
