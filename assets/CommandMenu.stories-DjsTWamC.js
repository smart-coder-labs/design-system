import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-2Bdvr1RY.js";import{n as r,t as i}from"./utils-CcEteFRA.js";import{t as a}from"./jsx-runtime-WZfjI2gv.js";import{l as o,s,t as c}from"./es-C1BYSDiB.js";var l,u,d,f=e((()=>{l=t(n()),c(),r(),u=a(),d=l.forwardRef(({isOpen:e,onClose:t,groups:n,placeholder:r=`Type a command or search...`,className:a=``,emptyMessage:c=`No results found.`},d)=>{let[f,p]=l.useState(``),[m,h]=l.useState(0),g=l.useRef(null),_=l.useMemo(()=>f.trim()?n.map(e=>({...e,items:e.items.filter(e=>{let t=f.toLowerCase(),n=e.label.toLowerCase().includes(t),r=e.description?.toLowerCase().includes(t),i=e.keywords?.some(e=>e.toLowerCase().includes(t));return n||r||i})})).filter(e=>e.items.length>0):n,[n,f]),v=l.useMemo(()=>_.flatMap(e=>e.items),[_]);l.useEffect(()=>{h(0)},[f]),l.useEffect(()=>{e&&(g.current?.focus(),p(``),h(0))},[e]),l.useEffect(()=>{let n=n=>{if(e)switch(n.key){case`Escape`:n.preventDefault(),t();break;case`ArrowDown`:n.preventDefault(),h(e=>(e+1)%v.length);break;case`ArrowUp`:n.preventDefault(),h(e=>(e-1+v.length)%v.length);break;case`Enter`:n.preventDefault(),v[m]&&(v[m].onSelect(),t());break}};return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[e,m,v,t]),l.useEffect(()=>(e?document.body.style.overflow=`hidden`:document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[e]);let y=e=>{e.target===e.currentTarget&&t()},b=0;return(0,u.jsx)(o,{children:e&&(0,u.jsxs)(`div`,{className:`fixed inset-0 z-modal`,onClick:y,children:[(0,u.jsx)(s.div,{className:`absolute inset-0 bg-black/60 backdrop-blur-sm`,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}}),(0,u.jsx)(`div`,{className:`relative flex items-start justify-center pt-[20vh] px-4`,children:(0,u.jsxs)(s.div,{ref:d,className:i(`w-full max-w-2xl bg-surface-primary rounded-xl shadow-xl overflow-hidden`,a),initial:{opacity:0,scale:.95,y:-20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-20},transition:{type:`spring`,stiffness:300,damping:30},onClick:e=>e.stopPropagation(),children:[(0,u.jsxs)(`div`,{className:`flex items-center gap-3 px-4 py-4 border-b border-border-primary`,children:[(0,u.jsx)(`span`,{className:`text-text-tertiary text-xl`,children:`🔍`}),(0,u.jsx)(`input`,{ref:g,type:`text`,value:f,onChange:e=>p(e.target.value),placeholder:r,className:`flex-1 bg-transparent text-lg text-text-primary placeholder:text-text-tertiary outline-none`}),(0,u.jsx)(`kbd`,{className:`hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-text-tertiary bg-surface-secondary rounded border border-border-primary`,children:`ESC`})]}),(0,u.jsx)(`div`,{className:`max-h-[60vh] overflow-y-auto`,children:v.length===0?(0,u.jsx)(`div`,{className:`px-4 py-12 text-center`,children:(0,u.jsx)(`p`,{className:`text-text-tertiary`,children:c})}):(0,u.jsx)(`div`,{className:`py-2`,children:_.map((e,n)=>(0,u.jsxs)(`div`,{className:`mb-4 last:mb-0`,children:[e.title&&(0,u.jsx)(`div`,{className:`px-4 py-2 text-xs font-semibold text-text-tertiary uppercase tracking-wide`,children:e.title}),(0,u.jsx)(`div`,{children:e.items.map(e=>{let n=b++===m;return(0,u.jsxs)(s.button,{onClick:()=>{e.onSelect(),t()},className:i(`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors`,n?`bg-accent-blue/10 text-text-primary`:`text-text-secondary hover:bg-surface-secondary`),whileHover:{x:4},transition:{duration:.15},children:[e.icon&&(0,u.jsx)(`span`,{className:`flex-shrink-0 text-lg`,children:e.icon}),(0,u.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,u.jsx)(`div`,{className:`font-medium text-text-primary`,children:e.label}),e.description&&(0,u.jsx)(`div`,{className:`text-xs text-text-tertiary truncate`,children:e.description})]}),e.shortcut&&(0,u.jsx)(`kbd`,{className:`hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-text-tertiary bg-surface-secondary rounded border border-border-primary`,children:e.shortcut})]},e.id)})})]},n))})}),(0,u.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-3 border-t border-border-primary bg-surface-secondary/30`,children:[(0,u.jsxs)(`div`,{className:`flex items-center gap-6 text-sm text-text-secondary`,children:[(0,u.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,u.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,u.jsx)(`kbd`,{className:`min-w-[24px] h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm`,children:`↑`}),(0,u.jsx)(`kbd`,{className:`min-w-[24px] h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm`,children:`↓`})]}),(0,u.jsx)(`span`,{className:`text-text-tertiary`,children:`to navigate`})]}),(0,u.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,u.jsx)(`kbd`,{className:`h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm`,children:`↵`}),(0,u.jsx)(`span`,{className:`text-text-tertiary`,children:`to select`})]}),(0,u.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,u.jsx)(`kbd`,{className:`h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm`,children:`ESC`}),(0,u.jsx)(`span`,{className:`text-text-tertiary`,children:`to close`})]})]}),(0,u.jsxs)(`div`,{className:`text-sm font-medium text-text-tertiary`,children:[v.length,` `,v.length===1?`result`:`results`]})]})]})})]})})}),d.displayName=`CommandMenu`,d.__docgenInfo={description:``,methods:[],displayName:`CommandMenu`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},groups:{required:!0,tsType:{name:`Array`,elements:[{name:`CommandMenuGroup`}],raw:`CommandMenuGroup[]`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Type a command or search...'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},emptyMessage:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'No results found.'`,computed:!1}}}}})),p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{f(),p=a(),m={title:`Navigation/CommandMenu`,component:d,tags:[`autodocs`]},h=[{title:`Navigation`,items:[{id:`dashboard`,label:`Go to Dashboard`,description:`View your financial overview`,icon:`📊`,onSelect:()=>{},keywords:[`home`,`overview`]},{id:`transactions`,label:`View Transactions`,description:`Browse recent transactions`,icon:`💳`,onSelect:()=>{},keywords:[`payments`,`history`]},{id:`accounts`,label:`Manage Accounts`,description:`View and manage your accounts`,icon:`🏦`,onSelect:()=>{},keywords:[`bank`,`cards`]}]},{title:`Actions`,items:[{id:`transfer`,label:`Transfer Money`,description:`Send money between accounts`,icon:`💸`,onSelect:()=>{},keywords:[`send`,`payment`]},{id:`invest`,label:`Invest`,description:`Buy or sell investments`,icon:`📈`,onSelect:()=>{},keywords:[`trade`,`stocks`]},{id:`report`,label:`Generate Report`,description:`Create a financial report`,icon:`📄`,onSelect:()=>{},keywords:[`export`,`pdf`]}]}],g={args:{isOpen:!0,onClose:()=>{},groups:h}},_={args:{isOpen:!1,onClose:()=>{},groups:h}},v={args:{isOpen:!0,onClose:()=>{},groups:[h[0]]}},y={args:{isOpen:!0,onClose:()=>{},groups:[{title:`Quick Actions`,items:[{id:`search`,label:`Search Transactions`,description:`Search across all transactions`,icon:`🔍`,shortcut:`⌘K`,onSelect:()=>{},keywords:[`find`]},{id:`new-transfer`,label:`New Transfer`,description:`Create a new money transfer`,icon:`💸`,shortcut:`⌘T`,onSelect:()=>{},keywords:[`send`]},{id:`new-budget`,label:`New Budget`,description:`Create a new budget plan`,icon:`📋`,shortcut:`⌘B`,onSelect:()=>{},keywords:[`plan`]}]}]}},b={args:{isOpen:!0,onClose:()=>{},groups:[],emptyMessage:`No commands available.`}},x={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,p.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,p.jsx)(e,{})})]},S={parameters:{viewport:{defaultViewport:`mobile1`}}},C={parameters:{docs:{description:{story:`CommandMenu used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    groups: sampleGroups
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: false,
    onClose: () => {},
    groups: sampleGroups
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    groups: [sampleGroups[0]]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    groups: [{
      title: 'Quick Actions',
      items: [{
        id: 'search',
        label: 'Search Transactions',
        description: 'Search across all transactions',
        icon: '🔍',
        shortcut: '⌘K',
        onSelect: () => {},
        keywords: ['find']
      }, {
        id: 'new-transfer',
        label: 'New Transfer',
        description: 'Create a new money transfer',
        icon: '💸',
        shortcut: '⌘T',
        onSelect: () => {},
        keywords: ['send']
      }, {
        id: 'new-budget',
        label: 'New Budget',
        description: 'Create a new budget plan',
        icon: '📋',
        shortcut: '⌘B',
        onSelect: () => {},
        keywords: ['plan']
      }]
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClose: () => {},
    groups: [],
    emptyMessage: 'No commands available.'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'CommandMenu used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w=[`Open`,`Closed`,`SingleGroup`,`WithShortcuts`,`EmptyState`,`DarkMode`,`MobileView`,`FintechUseCase`]}))();export{_ as Closed,x as DarkMode,b as EmptyState,C as FintechUseCase,S as MobileView,g as Open,v as SingleGroup,y as WithShortcuts,w as __namedExportsOrder,m as default};