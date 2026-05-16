import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BGx_IYCs.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{l as i,s as a,t as o}from"./es-Ch39IMKG.js";import{n as s,t as c}from"./utils-COD7dmCP.js";import{J as l,gr as u,i as d,t as f,yr as p,z as m}from"./lucide-react-B3O-UhxF.js";import{i as h,n as g,r as _,t as v}from"./Avatar-DXVolUlS.js";var y,b,x,S=e((()=>{y=t(n()),o(),f(),s(),v(),b=r(),x=({contacts:e,placeholder:t=`Search $Name`,className:n,onSelect:r})=>{let[o,s]=(0,y.useState)(``),[f,v]=(0,y.useState)(!1),[x,S]=(0,y.useState)(0),C=(0,y.useRef)(null),w=e.filter(e=>e.tag.toLowerCase().includes(o.toLowerCase())||e.name.toLowerCase().includes(o.toLowerCase())).slice(0,5);(0,y.useEffect)(()=>{S(0)},[o]);let T=e=>{if(!(!f||w.length===0))switch(e.key){case`ArrowDown`:e.preventDefault(),S(e=>(e+1)%w.length);break;case`ArrowUp`:e.preventDefault(),S(e=>e===0?w.length-1:e-1);break;case`Enter`:e.preventDefault(),E(w[x]);break;case`Escape`:C.current?.blur();break}},E=e=>{s(e.tag),v(!1),r?.(e),C.current?.blur()};return(0,b.jsxs)(`div`,{className:c(`relative w-full max-w-sm`,n),children:[(0,b.jsxs)(`div`,{className:c(`relative flex items-center bg-surface-primary rounded-2xl border-2 transition-all duration-200 overflow-hidden shadow-sm`,f?`border-emerald-500 ring-4 ring-emerald-500/20`:`border-border-primary hover:border-zinc-300 dark:hover:border-zinc-700`),children:[(0,b.jsx)(`div`,{className:`pl-4 pr-2 text-text-tertiary`,children:(0,b.jsx)(l,{className:`w-5 h-5`})}),(0,b.jsx)(`input`,{ref:C,type:`text`,value:o,onChange:e=>s(e.target.value),onFocus:()=>v(!0),onBlur:()=>setTimeout(()=>v(!1),200),onKeyDown:T,placeholder:t,className:`flex-1 bg-transparent border-none outline-none py-3 font-semibold text-text-primary placeholder:text-text-tertiary dark:placeholder:text-text-tertiary placeholder:font-normal`}),(0,b.jsx)(i,{children:o&&(0,b.jsx)(a.button,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},exit:{scale:0,opacity:0},onClick:()=>{s(``),C.current?.focus()},className:`p-2 mr-2 bg-background-secondary rounded-xl hover:bg-background-secondary transition`,children:(0,b.jsx)(d,{className:`w-4 h-4 text-text-tertiary`})})})]}),(0,b.jsx)(i,{children:f&&o&&(0,b.jsx)(a.div,{initial:{opacity:0,y:5,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:5,scale:.98},transition:{duration:.15},className:`absolute top-full left-0 w-full mt-2 bg-surface-primary border border-border-primary rounded-3xl shadow-xl z-50 overflow-hidden`,children:w.length>0?(0,b.jsxs)(`div`,{className:`p-2 space-y-1`,children:[(0,b.jsxs)(`div`,{className:`px-3 py-2 text-xs font-bold uppercase tracking-wider text-text-tertiary flex items-center gap-1`,children:[(0,b.jsx)(m,{className:`w-3.5 h-3.5`}),` Secure Search`]}),w.map((e,t)=>(0,b.jsxs)(`button`,{onClick:()=>E(e),onMouseEnter:()=>S(t),className:c(`w-full flex items-center justify-between p-3 rounded-2xl transition-apple cursor-pointer text-left group`,x===t?`bg-background-secondary`:`hover:bg-background-secondary`),children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsxs)(g,{className:`w-10 h-10`,children:[(0,b.jsx)(h,{src:e.avatarUrl,alt:e.name}),(0,b.jsx)(_,{children:e.name[0]})]}),(0,b.jsxs)(`div`,{children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-1.5`,children:[(0,b.jsx)(`span`,{className:`font-bold text-text-primary`,children:e.name}),e.isVerified&&(0,b.jsx)(u,{className:`w-4 h-4 text-emerald-500 fill-emerald-100 dark:fill-emerald-900/30`})]}),(0,b.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,b.jsx)(`span`,{className:`text-sm font-semibold text-text-tertiary`,children:e.tag}),e.recentActivity&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`span`,{className:`w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-700`}),(0,b.jsx)(`span`,{className:`text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-1.5 rounded-md`,children:e.recentActivity})]})]})]})]}),(0,b.jsx)(`div`,{className:c(`p-2 rounded-xl transition-all`,x===t?`bg-emerald-500 text-white shadow-md shadow-emerald-500/20 translate-x-0`:`bg-transparent text-transparent -translate-x-2`),children:(0,b.jsx)(p,{className:`w-4 h-4`})})]},e.id))]}):(0,b.jsxs)(`div`,{className:`p-6 text-center text-text-tertiary font-medium`,children:[`No contacts found for "`,o,`"`]})})})]})},x.displayName=`PeerTagInput`,x.__docgenInfo={description:``,methods:[],displayName:`PeerTagInput`,props:{contacts:{required:!0,tsType:{name:`Array`,elements:[{name:`PeerTagContact`}],raw:`PeerTagContact[]`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Search $Name"`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(contact: PeerTagContact) => void`,signature:{arguments:[{type:{name:`PeerTagContact`},name:`contact`}],return:{name:`void`}}},description:``}}}})),C,w,T,E,D,O,k,A,j,M,N;e((()=>{S(),C=r(),w={title:`Fintech/Social & P2P/PeerTagInput`,component:x,tags:[`autodocs`]},T={args:{placeholder:`Search peers...`,onSelect:e=>console.log(`Selected peer:`,e)}},E={args:{placeholder:`Search or select a peer...`,recentPeers:[{id:`1`,name:`Alice Johnson`,handle:`@alice`,avatar:``},{id:`2`,name:`Bob Smith`,handle:`@bob`,avatar:``},{id:`3`,name:`Carol White`,handle:`@carol`,avatar:``}],onSelect:e=>console.log(`Selected peer:`,e)}},D={args:{label:`Send to`,placeholder:`Enter name or handle...`,onSelect:e=>console.log(`Selected peer:`,e)}},O={args:{label:`Recipient`,placeholder:`Enter name or handle...`,error:`Recipient not found`,onSelect:e=>console.log(`Selected peer:`,e)}},k={args:{placeholder:`Peer selection unavailable`,disabled:!0,onSelect:e=>console.log(`Selected peer:`,e)}},A={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,C.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,C.jsx)(e,{})})]},j={parameters:{viewport:{defaultViewport:`mobile1`}}},M={parameters:{docs:{description:{story:`PeerTagInput used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search peers...',
    onSelect: (peer: any) => console.log('Selected peer:', peer)
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Search or select a peer...',
    recentPeers: [{
      id: '1',
      name: 'Alice Johnson',
      handle: '@alice',
      avatar: ''
    }, {
      id: '2',
      name: 'Bob Smith',
      handle: '@bob',
      avatar: ''
    }, {
      id: '3',
      name: 'Carol White',
      handle: '@carol',
      avatar: ''
    }],
    onSelect: (peer: any) => console.log('Selected peer:', peer)
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Send to',
    placeholder: 'Enter name or handle...',
    onSelect: (peer: any) => console.log('Selected peer:', peer)
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Recipient',
    placeholder: 'Enter name or handle...',
    error: 'Recipient not found',
    onSelect: (peer: any) => console.log('Selected peer:', peer)
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Peer selection unavailable',
    disabled: true,
    onSelect: (peer: any) => console.log('Selected peer:', peer)
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'PeerTagInput used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`WithRecentPeers`,`WithLabel`,`WithError`,`Disabled`,`DarkMode`,`MobileView`,`FintechUseCase`]}))();export{A as DarkMode,T as Default,k as Disabled,M as FintechUseCase,j as MobileView,O as WithError,D as WithLabel,E as WithRecentPeers,N as __namedExportsOrder,w as default};