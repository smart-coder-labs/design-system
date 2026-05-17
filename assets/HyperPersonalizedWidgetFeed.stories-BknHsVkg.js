import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-D15PU-2o.js";import{K as r,Pn as i,Tt as a,nr as o,rr as s,sn as c,t as l,ut as u}from"./lucide-react-BwGO_ZZQ.js";import{t as d}from"./jsx-runtime-DaLCRA3n.js";import{s as f,t as p}from"./es-CNBxpAzP.js";var m,h,g,_=e((()=>{m=t(n()),p(),l(),h=d(),g=({initialWidgets:e=[{id:`w1`,title:`Saldo Principal`,type:`balance`,visible:!0,order:1},{id:`w2`,title:`Análisis de Gastos`,type:`spending`,visible:!0,order:2},{id:`w3`,title:`Portafolio Cripto`,type:`crypto`,visible:!1,order:3},{id:`w4`,title:`Metas de Ahorro`,type:`savings`,visible:!0,order:4}]})=>{let[t,n]=(0,m.useState)(e),[l,d]=(0,m.useState)(!1),p=e=>{n(t.map(t=>t.id===e?{...t,visible:!t.visible}:t))},g=t.filter(e=>e.visible).sort((e,t)=>e.order-t.order),_=t.filter(e=>!e.visible).sort((e,t)=>e.order-t.order),v=e=>{switch(e){case`balance`:return(0,h.jsxs)(`div`,{className:`flex justify-between items-end p-4 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl text-white shadow-lg`,children:[(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-wider text-blue-100 mb-1`,children:`Cuentas`}),(0,h.jsx)(`h3`,{className:`text-3xl font-black tracking-tight`,children:`$45,200.00`})]}),(0,h.jsx)(i,{size:32,className:`opacity-30`})]});case`spending`:return(0,h.jsxs)(`div`,{className:`p-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-xl shadow-sm text-gray-900 dark:text-white`,children:[(0,h.jsxs)(`div`,{className:`flex justify-between items-center mb-3`,children:[(0,h.jsx)(`h4`,{className:`font-semibold text-sm`,children:`Gastos del mes`}),(0,h.jsx)(o,{size:16,className:`text-gray-400`})]}),(0,h.jsx)(`div`,{className:`h-2 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden`,children:(0,h.jsx)(`div`,{className:`h-full bg-red-500 w-[70%]`})}),(0,h.jsx)(`p`,{className:`text-xs text-gray-500 mt-2`,children:`Has gastado el 70% de tu presupuesto.`})]});case`crypto`:return(0,h.jsxs)(`div`,{className:`p-4 bg-black rounded-xl text-white shadow-sm border border-gray-800`,children:[(0,h.jsxs)(`div`,{className:`flex justify-between items-center mb-3`,children:[(0,h.jsx)(`h4`,{className:`font-semibold text-sm`,children:`Criptomonedas`}),(0,h.jsx)(s,{size:16,className:`text-emerald-400`})]}),(0,h.jsx)(`p`,{className:`text-xl font-bold font-mono`,children:`0.054 BTC`}),(0,h.jsx)(`p`,{className:`text-xs text-emerald-400 mt-1 flex items-center gap-1`,children:`+2.4% hoy`})]});default:return(0,h.jsxs)(`div`,{className:`p-4 bg-emerald-50 dark:bg-emerald-900 border border-emerald-100 dark:border-emerald-800 rounded-xl shadow-sm text-emerald-900 dark:text-emerald-300`,children:[(0,h.jsx)(`h4`,{className:`font-semibold text-sm mb-1`,children:`Ahorro Automático`}),(0,h.jsx)(`p`,{className:`text-2xl font-bold`,children:`$1,250.50`})]})}};return(0,h.jsxs)(`div`,{className:`max-w-md mx-auto relative rounded-3xl bg-gray-50 dark:bg-black p-4 min-h-[500px] border border-gray-200 dark:border-gray-800 overflow-hidden`,children:[(0,h.jsxs)(`div`,{className:`flex justify-between items-center mb-6 px-2`,children:[(0,h.jsx)(`h2`,{className:`text-lg font-bold text-gray-900 dark:text-white`,children:`Resumen`}),(0,h.jsx)(`button`,{onClick:()=>d(!l),className:`p-2 rounded-full transition-colors ${l?`bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-50`:`bg-white text-gray-500 dark:bg-gray-900 dark:text-gray-400 border border-gray-200 dark:border-gray-800`}`,children:(0,h.jsx)(r,{size:18})})]}),(0,h.jsxs)(`div`,{className:`space-y-4 relative`,children:[g.map((e,t)=>(0,h.jsxs)(f.div,{layout:!0,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:`flex items-center gap-2`,children:[l&&(0,h.jsxs)(`div`,{className:`flex gap-1 items-center shrink-0`,children:[(0,h.jsx)(`div`,{className:`cursor-grab active:cursor-grabbing text-gray-400 p-1 hover:text-gray-600 dark:hover:text-gray-300`,children:(0,h.jsx)(c,{size:16})}),(0,h.jsx)(`button`,{onClick:()=>p(e.id),className:`w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600`,children:(0,h.jsx)(a,{size:14})})]}),(0,h.jsx)(`div`,{className:`flex-1 min-w-0`,children:v(e.type)})]},e.id)),l&&_.length>0&&(0,h.jsxs)(f.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`mt-8 pt-6 border-t border-dashed border-gray-300 dark:border-gray-700`,children:[(0,h.jsx)(`h3`,{className:`text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 px-2`,children:`Widgets Inactivos`}),(0,h.jsx)(`div`,{className:`space-y-3`,children:_.map(e=>(0,h.jsxs)(`div`,{className:`flex justify-between items-center p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800`,children:[(0,h.jsx)(`span`,{className:`text-sm font-medium text-gray-600 dark:text-gray-300`,children:e.title}),(0,h.jsx)(`button`,{onClick:()=>p(e.id),className:`w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600`,children:(0,h.jsx)(u,{size:14})})]},e.id))})]})]})]})},g.__docgenInfo={description:``,methods:[],displayName:`HyperPersonalizedWidgetFeed`,props:{initialWidgets:{required:!1,tsType:{name:`Array`,elements:[{name:`WidgetData`}],raw:`WidgetData[]`},description:``,defaultValue:{value:`[
  { id: 'w1', title: 'Saldo Principal', type: 'balance', visible: true, order: 1 },
  { id: 'w2', title: 'Análisis de Gastos', type: 'spending', visible: true, order: 2 },
  { id: 'w3', title: 'Portafolio Cripto', type: 'crypto', visible: false, order: 3 },
  { id: 'w4', title: 'Metas de Ahorro', type: 'savings', visible: true, order: 4 },
]`,computed:!1}}}}})),v,y,b,x,S,C,w,T,E,D,O;e((()=>{n(),_(),v=d(),y={title:`Fintech/Dashboard/HyperPersonalizedWidgetFeed`,component:g,tags:[`autodocs`],parameters:{layout:`fullscreen`}},b={args:{}},x={args:{premium:!0}},S={args:{showBudgetAlerts:!0}},C={args:{premium:!0,showBudgetAlerts:!0,showSpendingInsights:!0,showSavingsGoals:!0}},w={args:{premium:!0,showBudgetAlerts:!1,showSpendingInsights:!0,showSavingsGoals:!1}},T={args:{premium:!1,showBudgetAlerts:!1,showSpendingInsights:!1,showSavingsGoals:!1,initialWidgets:[{id:`w1`,title:`Saldo Principal`,type:`balance`,visible:!1,order:1},{id:`w2`,title:`Análisis de Gastos`,type:`spending`,visible:!1,order:2}]}},E={args:{premium:!0,showBudgetAlerts:!0,showSpendingInsights:!0,showSavingsGoals:!0,initialWidgets:[{id:`w1`,title:`Saldo Principal`,type:`balance`,visible:!0,order:1},{id:`w2`,title:`Análisis de Gastos`,type:`spending`,visible:!0,order:2},{id:`w3`,title:`Portafolio Cripto`,type:`crypto`,visible:!0,order:3},{id:`w4`,title:`Metas de Ahorro`,type:`savings`,visible:!0,order:4},{id:`w5`,title:`Préstamos Activos`,type:`balance`,visible:!0,order:5},{id:`w6`,title:`Inversiones`,type:`savings`,visible:!0,order:6},{id:`w7`,title:`Recompensas`,type:`spending`,visible:!0,order:7},{id:`w8`,title:`Tarjetas Virtuales`,type:`crypto`,visible:!0,order:8}]}},D={args:{premium:!0,showBudgetAlerts:!0},decorators:[e=>(0,v.jsx)(`div`,{className:`dark p-4 bg-gray-900 min-h-screen`,children:(0,v.jsx)(e,{})})]},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    premium: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    showBudgetAlerts: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    premium: true,
    showBudgetAlerts: true,
    showSpendingInsights: true,
    showSavingsGoals: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    premium: true,
    showBudgetAlerts: false,
    showSpendingInsights: true,
    showSavingsGoals: false
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    premium: false,
    showBudgetAlerts: false,
    showSpendingInsights: false,
    showSavingsGoals: false,
    initialWidgets: [{
      id: 'w1',
      title: 'Saldo Principal',
      type: 'balance',
      visible: false,
      order: 1
    }, {
      id: 'w2',
      title: 'Análisis de Gastos',
      type: 'spending',
      visible: false,
      order: 2
    }]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    premium: true,
    showBudgetAlerts: true,
    showSpendingInsights: true,
    showSavingsGoals: true,
    initialWidgets: [{
      id: 'w1',
      title: 'Saldo Principal',
      type: 'balance',
      visible: true,
      order: 1
    }, {
      id: 'w2',
      title: 'Análisis de Gastos',
      type: 'spending',
      visible: true,
      order: 2
    }, {
      id: 'w3',
      title: 'Portafolio Cripto',
      type: 'crypto',
      visible: true,
      order: 3
    }, {
      id: 'w4',
      title: 'Metas de Ahorro',
      type: 'savings',
      visible: true,
      order: 4
    }, {
      id: 'w5',
      title: 'Préstamos Activos',
      type: 'balance',
      visible: true,
      order: 5
    }, {
      id: 'w6',
      title: 'Inversiones',
      type: 'savings',
      visible: true,
      order: 6
    }, {
      id: 'w7',
      title: 'Recompensas',
      type: 'spending',
      visible: true,
      order: 7
    }, {
      id: 'w8',
      title: 'Tarjetas Virtuales',
      type: 'crypto',
      visible: true,
      order: 8
    }]
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    premium: true,
    showBudgetAlerts: true
  },
  decorators: [Story => <div className="dark p-4 bg-gray-900 min-h-screen">
        <Story />
      </div>]
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithPremiumUser`,`WithBudgetAlerts`,`FullFinancialFeed`,`CustomWidgets`,`NoWidgetsVisible`,`ManyWidgets`,`DarkMode`]}))();export{w as CustomWidgets,D as DarkMode,b as Default,C as FullFinancialFeed,E as ManyWidgets,T as NoWidgetsVisible,S as WithBudgetAlerts,x as WithPremiumUser,O as __namedExportsOrder,y as default};