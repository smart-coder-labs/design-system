import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CeXTICq7.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{l as o,s,t as c}from"./es-ClQM_AK5.js";import{Yn as l,f as u,gt as d,nr as f,st as p,t as m}from"./lucide-react-4IZDqrWk.js";import{i as h,n as g,r as _,t as v}from"./Avatar-D28jddg8.js";var y,b,x,S=e((()=>{y=t(n()),c(),m(),r(),h(),b=a(),x=({billAmount:e=150.75,currency:t=`USD`,friends:n,className:r,onSplitComplete:a})=>{let c=n.filter(e=>e.isUser),[m,h]=(0,y.useState)(c.length?c:[n[0]]),[x,S]=(0,y.useState)(15),[C,w]=(0,y.useState)(!1),T=e+x/100*e,E=m.length>0?T/m.length:0,D=e=>{m.find(t=>t.id===e.id)?m.length>1&&h(t=>t.filter(t=>t.id!==e.id)):h(t=>[...t,e])},O=e=>new Intl.NumberFormat(`en-US`,{style:`currency`,currency:t}).format(e);return(0,b.jsxs)(`div`,{className:i(`w-full max-w-md bg-white dark:bg-zinc-900 rounded-[2rem] p-6 shadow-xl border border-zinc-200 dark:border-zinc-800 flex flex-col gap-6`,r),children:[(0,b.jsx)(`div`,{className:`flex items-center justify-between`,children:(0,b.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsx)(`div`,{className:`p-3 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-2xl`,children:(0,b.jsx)(p,{className:`w-5 h-5`})}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{className:`text-lg font-bold text-zinc-900 dark:text-zinc-100`,children:`Bill Splitter`}),(0,b.jsx)(`p`,{className:`text-sm text-zinc-500 dark:text-zinc-400`,children:`Dinner at Gusteau's`})]})]})}),(0,b.jsxs)(`div`,{className:`bg-zinc-50 dark:bg-zinc-800/40 rounded-3xl p-5 border border-zinc-200 dark:border-zinc-700/50`,children:[(0,b.jsxs)(`div`,{className:`flex justify-between items-center mb-4`,children:[(0,b.jsx)(`span`,{className:`text-sm font-semibold text-zinc-500 uppercase tracking-wider`,children:`Subtotal`}),(0,b.jsx)(`span`,{className:`text-xl font-bold text-zinc-900 dark:text-zinc-100`,children:O(e)})]}),(0,b.jsxs)(`div`,{className:`flex flex-wrap justify-between items-center gap-4 bg-white dark:bg-zinc-900 rounded-2xl p-3 shadow-sm border border-zinc-100 dark:border-zinc-800`,children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400`,children:[(0,b.jsx)(d,{className:`w-4 h-4`}),` Tip`]}),(0,b.jsx)(`div`,{className:`flex gap-2`,children:[10,15,20].map(e=>(0,b.jsxs)(`button`,{onClick:()=>S(e),className:i(`px-3 py-1.5 rounded-lg text-sm font-bold transition-apple cursor-pointer`,x===e?`bg-indigo-600 text-white shadow-md shadow-indigo-500/20`:`bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700`),children:[e,`%`]},e))})]}),(0,b.jsx)(`div`,{className:`h-px bg-zinc-200 dark:bg-zinc-700/50 my-4`}),(0,b.jsxs)(`div`,{className:`flex justify-between items-center`,children:[(0,b.jsx)(`span`,{className:`text-sm font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider`,children:`Total`}),(0,b.jsx)(`span`,{className:`text-xl font-bold text-indigo-600 dark:text-indigo-400 tracking-tight`,children:O(T)})]})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{className:`flex justify-between items-center mb-3`,children:[(0,b.jsxs)(`span`,{className:`text-sm font-semibold text-zinc-700 dark:text-zinc-300`,children:[`Split with (`,m.length,`)`]}),(0,b.jsxs)(`button`,{onClick:()=>w(!C),className:`text-indigo-600 dark:text-indigo-400 text-sm font-bold flex items-center gap-1 hover:underline`,children:[C?`Done`:`Edit`,` `,(0,b.jsx)(f,{className:i(`w-4 h-4 transition-transform`,C?`rotate-180`:``)})]})]}),(0,b.jsx)(o,{children:C&&(0,b.jsx)(s.div,{initial:{height:0,opacity:0},animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},className:`bg-zinc-50 dark:bg-zinc-800/40 rounded-2xl p-3 mb-4 overflow-hidden border border-zinc-200 dark:border-zinc-700/50`,children:(0,b.jsx)(`div`,{className:`flex items-center gap-3 overflow-x-auto pb-2 custom-scrollbar`,children:n.map(e=>{let t=m.some(t=>t.id===e.id);return(0,b.jsxs)(`button`,{onClick:()=>D(e),className:i(`relative flex-shrink-0 flex items-center justify-center p-1 rounded-full transition-all border-2`,t?`border-indigo-500`:`border-transparent opacity-60 hover:opacity-100`),children:[(0,b.jsxs)(v,{className:`w-12 h-12`,children:[(0,b.jsx)(_,{src:e.avatarUrl,alt:e.name}),(0,b.jsx)(g,{children:e.name.substring(0,2)})]}),t&&(0,b.jsx)(`div`,{className:`absolute -bottom-1 -right-1 bg-white dark:bg-zinc-900 rounded-full`,children:(0,b.jsx)(l,{className:`w-5 h-5 text-indigo-500`})})]},e.id)})})})}),(0,b.jsx)(`div`,{className:`flex flex-col gap-3`,children:(0,b.jsx)(o,{mode:`popLayout`,children:m.map(e=>(0,b.jsxs)(s.div,{layout:!0,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:`flex items-center justify-between bg-white dark:bg-zinc-800 p-3 rounded-2xl border border-zinc-100 dark:border-zinc-700 shadow-sm`,children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsxs)(v,{className:`w-10 h-10 ring-2 ring-indigo-50 dark:ring-indigo-900/30`,children:[(0,b.jsx)(_,{src:e.avatarUrl,alt:e.name}),(0,b.jsx)(g,{children:e.name.substring(0,2)})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`p`,{className:`text-sm font-semibold text-zinc-900 dark:text-zinc-100`,children:e.isUser?`You`:e.name}),(0,b.jsx)(`p`,{className:`text-[10px] text-zinc-500 dark:text-zinc-400 uppercase font-bold tracking-wider`,children:`Equal Split`})]})]}),(0,b.jsx)(`span`,{className:`font-bold text-zinc-900 dark:text-zinc-100`,children:O(E)})]},e.id))})})]}),(0,b.jsxs)(s.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>a?.(m.map(e=>({contactId:e.id,amount:E}))),className:`w-full py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-bold rounded-xl flex items-center justify-center gap-2 hover:shadow-xl transition-all shadow-md group mt-2`,children:[(0,b.jsx)(u,{className:`w-5 h-5 group-hover:scale-110 transition-transform`}),`Request Splits`]})]})},x.displayName=`InteractiveBillSplitter`,x.__docgenInfo={description:``,methods:[],displayName:`InteractiveBillSplitter`,props:{billAmount:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`150.75`,computed:!1}},currency:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'USD'`,computed:!1}},friends:{required:!0,tsType:{name:`Array`,elements:[{name:`SplitContact`}],raw:`SplitContact[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``},onSplitComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(finalSplits: { contactId: string; amount: number }[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ contactId: string; amount: number }`,signature:{properties:[{key:`contactId`,value:{name:`string`,required:!0}},{key:`amount`,value:{name:`number`,required:!0}}]}}],raw:`{ contactId: string; amount: number }[]`},name:`finalSplits`}],return:{name:`void`}}},description:``}}}})),C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{S(),{action:C}=__STORYBOOK_MODULE_ACTIONS__,w=[{id:`me`,name:`You`,isUser:!0},{id:`ana`,name:`Ana García`},{id:`carlos`,name:`Carlos Medina`},{id:`laura`,name:`Laura Pérez`},{id:`miguel`,name:`Miguel Torres`},{id:`sofia`,name:`Sofia Ruiz`}],T=[{id:`me`,name:`You`,isUser:!0},{id:`ana`,name:`Ana García`},{id:`carlos`,name:`Carlos Medina`},{id:`laura`,name:`Laura Pérez`},{id:`miguel`,name:`Miguel Torres`},{id:`sofia`,name:`Sofia Ruiz`},{id:`diego`,name:`Diego López`},{id:`valeria`,name:`Valeria Martínez`},{id:`jorge`,name:`Jorge Hernández`},{id:`paula`,name:`Paula Fernández`},{id:`luis`,name:`Luis Ramírez`},{id:`mariana`,name:`Mariana Castro`}],E={title:`Fintech/Social & P2P/InteractiveBillSplitter`,component:x,tags:[`autodocs`]},D={args:{billAmount:150.75,friends:w,onSplitComplete:C(`split-complete`)}},O={args:{billAmount:480,friends:w,onSplitComplete:C(`split-complete`)}},k={args:{billAmount:89.5,currency:`EUR`,friends:w.slice(0,3),onSplitComplete:C(`split-complete`)}},A={args:{billAmount:1250,currency:`MXN`,friends:T,onSplitComplete:C(`split-complete-large`)}},j={args:{billAmount:12.5,friends:w.slice(0,2),onSplitComplete:C(`split-complete-small`)}},M={args:{billAmount:100,friends:[{id:`me`,name:`You`,isUser:!0},{id:`ana`,name:`Ana García`},{id:`carlos`,name:`Carlos Medina`}],onSplitComplete:C(`split-complete-round`)}},N={args:{billAmount:15420.5,currency:`ARS`,friends:w.slice(0,4),onSplitComplete:C(`split-complete-ars`)}},P={args:{billAmount:67.3,friends:[{id:`me`,name:`You`,isUser:!0},{id:`ana`,name:`Ana García`}],onSplitComplete:C(`split-complete-two`)}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    billAmount: 150.75,
    friends,
    onSplitComplete: action('split-complete')
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    billAmount: 480.00,
    friends,
    onSplitComplete: action('split-complete')
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    billAmount: 89.50,
    currency: 'EUR',
    friends: friends.slice(0, 3),
    onSplitComplete: action('split-complete')
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    billAmount: 1250.00,
    currency: 'MXN',
    friends: largeGroup,
    onSplitComplete: action('split-complete-large')
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    billAmount: 12.50,
    friends: friends.slice(0, 2),
    onSplitComplete: action('split-complete-small')
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    billAmount: 100,
    friends: [{
      id: 'me',
      name: 'You',
      isUser: true
    }, {
      id: 'ana',
      name: 'Ana García'
    }, {
      id: 'carlos',
      name: 'Carlos Medina'
    }],
    onSplitComplete: action('split-complete-round')
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    billAmount: 15420.50,
    currency: 'ARS',
    friends: friends.slice(0, 4),
    onSplitComplete: action('split-complete-ars')
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    billAmount: 67.30,
    friends: [{
      id: 'me',
      name: 'You',
      isUser: true
    }, {
      id: 'ana',
      name: 'Ana García'
    }],
    onSplitComplete: action('split-complete-two')
  }
}`,...P.parameters?.docs?.source}}},F=[`Default`,`LargeBill`,`EuroCurrency`,`LargeGroupDinner`,`SmallBillNoTip`,`RoundBillAmount`,`PesosArgentinos`,`JustTwoPeople`]}))();export{D as Default,k as EuroCurrency,P as JustTwoPeople,O as LargeBill,A as LargeGroupDinner,N as PesosArgentinos,M as RoundBillAmount,j as SmallBillNoTip,F as __namedExportsOrder,E as default};