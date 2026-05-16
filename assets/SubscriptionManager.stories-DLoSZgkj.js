import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-B_S8iqXg.js";import{An as r,P as i,Qn as a,St as o,U as s,Vn as c,t as l,ur as u}from"./lucide-react-D-LjNNxx.js";import{t as d}from"./jsx-runtime-DaLCRA3n.js";import{l as f,s as p,t as m}from"./es-BRhHMXe0.js";var h,g,_,v=e((()=>{h=t(n()),m(),l(),g=d(),_=()=>{let[e,t]=(0,h.useState)([{id:`1`,name:`NetStream`,category:`Entretenimiento`,cost:299,status:`active`,icon:i,nextBilling:`12 Nov`,color:`bg-red-500 text-white`},{id:`2`,name:`AudioMax`,category:`Música`,cost:149,status:`active`,icon:o,nextBilling:`15 Nov`,color:`bg-green-500 text-white`,warning:!0},{id:`3`,name:`FitPlus`,category:`Salud`,cost:599,status:`active`,icon:r,nextBilling:`22 Nov`,color:`bg-orange-500 text-white`},{id:`4`,name:`CloudStore 2TB`,category:`Productividad`,cost:199,status:`active`,icon:c,nextBilling:`28 Nov`,color:`bg-blue-500 text-white`}]),[n,l]=(0,h.useState)(null),d=(n,r)=>{r.stopPropagation(),t(e.map(e=>e.id===n?{...e,status:`canceling`}:e)),setTimeout(()=>{t(e=>e.map(e=>e.id===n?{...e,status:`canceled`}:e)),l(null)},2e3)},m=e.filter(e=>e.status===`active`).reduce((e,t)=>e+t.cost,0);return(0,g.jsxs)(`div`,{className:`bg-surface-primary rounded-3xl border border-border-primary overflow-hidden max-w-md mx-auto shadow-sm`,children:[(0,g.jsxs)(`div`,{className:`p-6 bg-background-secondary dark:bg-gray-900 border-b border-border-primary`,children:[(0,g.jsxs)(`h2`,{className:`text-xl font-bold text-text-primary flex items-center gap-2 mb-1`,children:[(0,g.jsx)(u,{className:`text-blue-500`}),`Suscripciones`]}),(0,g.jsx)(`p`,{className:`text-sm text-text-tertiary mb-4`,children:`Gasto mensual proyectado`}),(0,g.jsxs)(`div`,{className:`text-4xl font-black text-text-primary tracking-tight`,children:[`$`,m.toLocaleString(`es-MX`),(0,g.jsx)(`span`,{className:`text-sm font-medium text-text-tertiary ml-1`,children:`/ mes`})]})]}),(0,g.jsxs)(`div`,{className:`p-4 space-y-3`,children:[e.map(e=>{let t=n===e.id,r=e.icon;return e.status===`canceled`?null:(0,g.jsxs)(p.div,{layout:!0,onClick:()=>l(t?null:e.id),className:`relative border rounded-2xl p-4 cursor-pointer overflow-hidden transition-all ${t?`bg-accent-blue-tint border-accent-blue/20 shadow-md ring-1 ring-accent-blue/10`:`bg-surface-primary border-border-primary hover:border-border-primary hover:shadow-sm`}`,children:[e.warning&&!t&&(0,g.jsx)(`div`,{className:`absolute top-0 right-0 p-2 text-amber-500`,children:(0,g.jsx)(s,{size:16})}),(0,g.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,g.jsx)(`div`,{className:`p-3 rounded-xl ${e.color} shadow-sm shrink-0`,children:(0,g.jsx)(r,{size:20})}),(0,g.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,g.jsx)(`h4`,{className:`font-semibold text-text-primary text-base truncate`,children:e.name}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-medium text-text-tertiary mt-0.5`,children:[(0,g.jsx)(`span`,{children:e.category}),(0,g.jsx)(`span`,{className:`w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600`}),(0,g.jsxs)(`span`,{children:[`Renueva el `,e.nextBilling]})]})]}),(0,g.jsx)(`div`,{className:`text-right`,children:(0,g.jsxs)(`p`,{className:`font-bold text-text-primary`,children:[`$`,e.cost]})})]}),(0,g.jsx)(f,{children:t&&(0,g.jsxs)(p.div,{initial:{height:0,opacity:0,marginTop:16},animate:{height:`auto`,opacity:1,marginTop:16},exit:{height:0,opacity:0,marginTop:0},className:`overflow-hidden`,children:[(0,g.jsxs)(`div`,{className:`pt-4 border-t border-blue-100 dark:border-blue-900/30 flex gap-2`,children:[(0,g.jsx)(`button`,{disabled:e.status===`canceling`,onClick:t=>d(e.id,t),className:`flex-1 py-2 rounded-xl text-sm font-semibold transition-all ${e.status===`canceling`?`bg-background-secondary text-text-tertiary dark:bg-gray-900 cursor-not-allowed`:`bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-900 dark:text-red-400 dark:hover:bg-red-800 border border-red-100 dark:border-red-900/30`}`,children:e.status===`canceling`?`Procesando...`:`Cancelar Suscripción`}),(0,g.jsxs)(`button`,{className:`flex-1 bg-surface-primary text-text-secondary hover:bg-background-secondary border border-border-primary dark:bg-gray-900 dark:text-text-primary dark:border-gray-700 font-semibold text-sm rounded-xl py-2 transition-all flex items-center justify-center gap-1`,children:[`Pausar `,(0,g.jsx)(a,{size:14})]})]}),e.warning&&(0,g.jsxs)(`div`,{className:`mt-3 p-3 bg-amber-50 dark:bg-amber-900 rounded-lg flex gap-2 border border-amber-100 dark:border-amber-900/30`,children:[(0,g.jsx)(s,{size:16,className:`text-amber-500 shrink-0`}),(0,g.jsx)(`p`,{className:`text-xs text-amber-700 dark:text-amber-400 font-medium`,children:`Este servicio aumentó de precio un 10% el mes pasado. Considera revisarlo.`})]})]})})]},e.id)}),e.filter(e=>e.status===`canceled`).length>0&&(0,g.jsxs)(`p`,{className:`text-center text-xs font-semibold text-green-600 dark:text-green-50 mt-6 bg-green-50 dark:bg-green-900 py-2 rounded-lg border border-green-100 dark:border-green-800`,children:[`Has cancelado `,e.filter(e=>e.status===`canceled`).length,` suscripción(es) exitosamente.`]})]})]})},_.__docgenInfo={description:``,methods:[],displayName:`SubscriptionManager`}})),y,b,x,S,C,w,T,E,D,O,k;e((()=>{v(),y=d(),b={title:`Fintech/Subscriptions/SubscriptionManager`,component:_,tags:[`autodocs`]},x={args:{}},S={parameters:{themes:{themeOverride:`dark`}},args:{}},C={parameters:{viewport:{defaultViewport:`mobile1`}}},w={parameters:{docs:{description:{story:`SubscriptionManager used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},T={parameters:{docs:{description:{story:`Showcases edge case where multiple subscriptions have price increase warnings or billing issues. Tests the component ability to highlight concurrent warnings.`}}}},E={render:()=>(0,y.jsx)(`div`,{className:`bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-8 rounded-2xl`,children:(0,y.jsx)(_,{})}),parameters:{docs:{description:{story:`SubscriptionManager displayed on a gradient background simulating a financial dashboard overlay, testing visual contrast and integration polish.`}}}},D={decorators:[e=>(0,y.jsx)(`div`,{className:`max-w-sm mx-auto my-4`,children:(0,y.jsx)(e,{})})],parameters:{viewport:{defaultViewport:`mobile1`},docs:{description:{story:`Mobile viewport simulation demonstrating how the subscription manager behaves with limited horizontal space on a phone screen.`}}}},O={render:()=>(0,y.jsx)(`div`,{style:{padding:20},children:(0,y.jsx)(_,{subscriptions:[]})})},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {}
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'SubscriptionManager used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Showcases edge case where multiple subscriptions have price increase warnings or billing issues. Tests the component ability to highlight concurrent warnings.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 p-8 rounded-2xl">
      <SubscriptionManager />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'SubscriptionManager displayed on a gradient background simulating a financial dashboard overlay, testing visual contrast and integration polish.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="max-w-sm mx-auto my-4">
        <Story />
      </div>],
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'Mobile viewport simulation demonstrating how the subscription manager behaves with limited horizontal space on a phone screen.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 20
  }}>
      <SubscriptionManager subscriptions={[]} />
    </div>
}`,...O.parameters?.docs?.source}}},k=[`Default`,`DarkMode`,`MobileView`,`FintechUseCase`,`WithMultipleWarnings`,`TotalCostOverlay`,`LongSubscriptionList`,`WithEmptySubscriptions`]}))();export{S as DarkMode,x as Default,w as FintechUseCase,D as LongSubscriptionList,C as MobileView,E as TotalCostOverlay,O as WithEmptySubscriptions,T as WithMultipleWarnings,k as __namedExportsOrder,b as default};