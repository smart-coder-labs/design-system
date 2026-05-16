import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CeXTICq7.js";import{t as r}from"./jsx-runtime-BK76Wfr-.js";import{s as i,t as a}from"./es-ClQM_AK5.js";import{Qt as o,V as s,Vn as c,d as l,r as u,t as d}from"./lucide-react-4IZDqrWk.js";var f,p,m,h,g=e((()=>{f=t(n()),a(),d(),p=r(),m=()=>{let[e,t]=(0,f.useState)([{id:`1`,name:`Starbucks Center`,amount:85,category:null},{id:`2`,name:`Uber Eats`,amount:320.5,category:null},{id:`3`,name:`Telcel Recarga`,amount:200,category:null},{id:`4`,name:`Zara Paseo`,amount:1450,category:null}]),[n,r]=(0,f.useState)([{id:`food`,name:`Alimentos`,icon:l,total:1200,color:`bg-orange-500`},{id:`coffee`,name:`Café`,icon:c,total:450,color:`bg-amber-600`},{id:`shopping`,name:`Compras`,icon:s,total:3200,color:`bg-pink-500`},{id:`services`,name:`Servicios`,icon:u,total:900,color:`bg-blue-500`}]),[a,d]=(0,f.useState)(null),m=(i,a,o)=>{if(Math.abs(a.offset.x)>50||Math.abs(a.offset.y)>50){let i=n[Math.floor(Math.random()*n.length)],a=e.find(e=>e.id===o);a&&(t(e=>e.filter(e=>e.id!==o)),r(e=>e.map(e=>e.id===i.id?{...e,total:e.total+a.amount}:e)))}d(null)};return(0,p.jsxs)(`div`,{className:`bg-surface-primary border border-border-primary rounded-3xl p-6 shadow-sm overflow-hidden select-none`,children:[(0,p.jsxs)(`div`,{className:`mb-8`,children:[(0,p.jsx)(`h2`,{className:`text-xl font-bold text-text-primary`,children:`Ordena tus Gastos`}),(0,p.jsx)(`p`,{className:`text-sm text-gray-500 dark:text-gray-400`,children:`Arrastra los gastos sin categorizar a sus cubetas correspondientes.`})]}),(0,p.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-8 relative`,children:[(0,p.jsxs)(`div`,{className:`bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 border-2 border-dashed border-border-primary min-h-[300px]`,children:[(0,p.jsxs)(`h3`,{className:`text-xs font-black uppercase tracking-widest text-gray-400 mb-4 flex items-center gap-2 px-2`,children:[(0,p.jsx)(o,{size:14}),` Bandeja de Entrada (`,e.length,`)`]}),(0,p.jsx)(`div`,{className:`space-y-3 relative z-10 w-full h-full`,children:e.length===0?(0,p.jsxs)(`div`,{className:`absolute inset-0 flex flex-col items-center justify-center text-gray-400 opacity-50`,children:[(0,p.jsx)(h,{size:48,className:`mb-2`}),(0,p.jsx)(`span`,{className:`font-semibold text-sm`,children:`Todo ordenado`})]}):e.map(e=>(0,p.jsxs)(i.div,{drag:!0,dragSnapToOrigin:!0,onDragStart:()=>d(e.id),onDragEnd:(t,n)=>m(t,n,e.id),whileDrag:{scale:1.05,opacity:.9,zIndex:50,cursor:`grabbing`},className:`bg-surface-primary border border-border-primary p-4 rounded-xl shadow-sm cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow flex justify-between items-center ${a===e.id?`shadow-2xl ring-2 ring-blue-500`:``}`,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`font-semibold text-sm text-text-primary`,children:e.name}),(0,p.jsx)(`p`,{className:`text-xs font-medium text-gray-400 mt-0.5`,children:`Sin Categoría`})]}),(0,p.jsxs)(`div`,{className:`font-black text-text-primary`,children:[`$`,e.amount.toFixed(2)]})]},e.id))})]}),(0,p.jsx)(`div`,{className:`grid grid-cols-2 gap-4 relative z-0`,children:n.map((e,t)=>{let n=e.icon;return(0,p.jsxs)(`div`,{className:`flex flex-col items-center justify-center p-6 border-2 border-border-primary rounded-2xl bg-white dark:bg-black transition-all ${a?`border-dashed border-gray-300 dark:border-gray-600 opacity-80 scale-95`:``}`,children:[(0,p.jsx)(`div`,{className:`w-14 h-14 rounded-full flex items-center justify-center text-white shadow-md mb-3 ${e.color}`,children:(0,p.jsx)(n,{size:24})}),(0,p.jsx)(`h4`,{className:`font-bold text-sm text-gray-800 dark:text-gray-200 mb-1`,children:e.name}),(0,p.jsxs)(`p`,{className:`text-xs font-mono font-bold text-gray-500 dark:text-gray-400 bg-background-secondary px-2 py-0.5 rounded-full`,children:[`$`,e.total.toLocaleString(`es-MX`)]})]},e.id)})})]})]})},h=({className:e,size:t})=>(0,p.jsxs)(`svg`,{width:t||24,height:t||24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:e,children:[(0,p.jsx)(`path`,{d:`M22 11.08V12a10 10 0 1 1-5.93-9.14`}),(0,p.jsx)(`polyline`,{points:`22 4 12 14.01 9 11.01`})]}),m.__docgenInfo={description:``,methods:[],displayName:`ExpenseCategorizer`}})),_,v,y,b,x,S,C,w,T,E,D;e((()=>{g(),n(),_=r(),v={title:`Fintech/Dashboard/ExpenseCategorizer`,component:m,parameters:{layout:`padded`},tags:[`autodocs`]},y={args:{}},b={render:()=>(0,_.jsx)(`div`,{className:`max-w-2xl mx-auto`,children:(0,_.jsx)(m,{})})},x={parameters:{viewport:{defaultViewport:`mobile1`}},render:()=>(0,_.jsx)(`div`,{className:`max-w-sm mx-auto`,children:(0,_.jsx)(m,{})})},S={parameters:{themes:{themeOverride:`dark`}},render:()=>(0,_.jsx)(`div`,{className:`dark max-w-2xl mx-auto`,children:(0,_.jsx)(m,{})})},C={render:()=>(0,_.jsxs)(`div`,{className:`max-w-4xl mx-auto space-y-6`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,_.jsx)(`h2`,{className:`text-lg font-bold`,children:`Categorización de Gastos`}),(0,_.jsx)(`span`,{className:`text-xs text-text-secondary`,children:`Arrastra transacciones a las categorías`})]}),(0,_.jsx)(m,{})]})},w={parameters:{docs:{description:{story:`ExpenseCategorizer used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},T={parameters:{docs:{description:{story:`ExpenseCategorizer in a loading state, showing skeleton UI while transaction data is being fetched from the server.`}}}},E={parameters:{docs:{description:{story:`ExpenseCategorizer with no transactions loaded, showing the empty state fallback for new accounts.`}}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-2xl mx-auto">
      <ExpenseCategorizer />
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => <div className="max-w-sm mx-auto">
      <ExpenseCategorizer />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  render: () => <div className="dark max-w-2xl mx-auto">
      <ExpenseCategorizer />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold">Categorización de Gastos</h2>
        <span className="text-xs text-text-secondary">Arrastra transacciones a las categorías</span>
      </div>
      <ExpenseCategorizer />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'ExpenseCategorizer used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'ExpenseCategorizer in a loading state, showing skeleton UI while transaction data is being fetched from the server.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'ExpenseCategorizer with no transactions loaded, showing the empty state fallback for new accounts.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`InContainer`,`MobileView`,`DarkMode`,`InDashboard`,`FintechUseCase`,`LoadingState`,`WithEmptyData`]}))();export{S as DarkMode,y as Default,w as FintechUseCase,b as InContainer,C as InDashboard,T as LoadingState,x as MobileView,E as WithEmptyData,D as __namedExportsOrder,v as default};