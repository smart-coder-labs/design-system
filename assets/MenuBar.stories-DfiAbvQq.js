import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-D0o8cdjS.js";import{Ft as r,K as i,Kn as a,Pn as o,V as s,f as c,t as l,y as u,yn as d}from"./lucide-react-yAgQzC9Q.js";import{n as f,t as p}from"./utils-ijcE-ZHT.js";import{t as m}from"./jsx-runtime-DaLCRA3n.js";import{l as h,s as g,t as _}from"./es-biEEKJuQ.js";var v,y,b,x=e((()=>{v=t(n()),_(),f(),y=m(),b=v.forwardRef(({menus:e,leftContent:t,rightContent:n,className:r=``},i)=>{let[a,o]=v.useState(null),[s,c]=v.useState(null),l=v.useRef({});v.useEffect(()=>{let e=e=>{a&&(o(null),c(null))};if(a)return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[a]),v.useEffect(()=>{let e=e=>{e.key===`Escape`&&a&&(o(null),c(null))};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[a]);let u=e=>{a===e?(o(null),c(null)):(o(e),c(e))},d=e=>{a&&o(e),c(e)},f=e=>{!e.disabled&&e.onSelect&&(e.onSelect(),o(null),c(null))};return(0,y.jsxs)(`div`,{ref:i,className:p(`flex items-center h-14 px-6 bg-surface-primary border-b border-border-primary`,r),children:[t&&(0,y.jsx)(`div`,{className:`flex items-center mr-6`,children:t}),(0,y.jsx)(`div`,{className:`flex items-center gap-2 flex-1`,children:e.map(e=>(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsx)(`button`,{ref:t=>{l.current[e.id]=t},onClick:()=>u(e.id),onMouseEnter:()=>d(e.id),className:p(`px-4 py-2 text-sm font-medium rounded-md transition-colors`,a===e.id||s===e.id?`bg-accent-blue/10 text-text-primary`:`text-text-secondary hover:bg-surface-secondary hover:text-text-primary`),children:e.label}),(0,y.jsx)(h,{children:a===e.id&&(0,y.jsx)(g.div,{initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.15},className:`absolute left-0 top-full mt-1 min-w-[240px] bg-surface-primary rounded-lg shadow-xl border border-border-primary overflow-hidden z-dropdown`,onClick:e=>e.stopPropagation(),children:(0,y.jsx)(`div`,{className:`py-2`,children:e.items.map((e,t)=>(0,y.jsx)(v.Fragment,{children:e.divider?(0,y.jsx)(`div`,{className:`my-2 h-px bg-border-primary`}):(0,y.jsxs)(`button`,{onClick:()=>f(e),disabled:e.disabled,className:p(`w-full flex items-center justify-between gap-6 px-4 py-3 text-sm transition-colors`,e.disabled?`text-text-tertiary cursor-not-allowed`:`text-text-secondary hover:bg-accent-blue/10 hover:text-text-primary cursor-pointer`),children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[e.icon&&(0,y.jsx)(`span`,{className:`flex-shrink-0 text-lg`,children:e.icon}),(0,y.jsx)(`span`,{children:e.label})]}),e.shortcut&&(0,y.jsx)(`kbd`,{className:`text-xs text-text-tertiary font-medium`,children:e.shortcut})]})},e.id))})})})]},e.id))}),n&&(0,y.jsx)(`div`,{className:`flex items-center ml-6`,children:n})]})}),b.displayName=`MenuBar`,b.__docgenInfo={description:``,methods:[],displayName:`MenuBar`,props:{menus:{required:!0,tsType:{name:`Array`,elements:[{name:`MenuBarMenu`}],raw:`MenuBarMenu[]`},description:`Menu items`},leftContent:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional left content (e.g., app logo)`},rightContent:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional right content (e.g., user menu)`},className:{required:!1,tsType:{name:`string`},description:`Optional className for custom styling`,defaultValue:{value:`''`,computed:!1}}}}})),S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{n(),x(),l(),S=m(),{action:C}=__STORYBOOK_MODULE_ACTIONS__,w={title:`Navigation/MenuBar`,component:b,tags:[`autodocs`]},T={args:{items:[{id:`file`,label:`File`,icon:(0,S.jsx)(d,{className:`w-4 h-4`}),onClick:C(`file`)},{id:`settings`,label:`Settings`,icon:(0,S.jsx)(i,{className:`w-4 h-4`}),onClick:C(`settings`)},{id:`help`,label:`Help`,icon:(0,S.jsx)(a,{className:`w-4 h-4`}),onClick:C(`help`)}]}},E={args:{items:[{id:`accounts`,label:`Accounts`,icon:(0,S.jsx)(o,{className:`w-4 h-4`}),onClick:C(`accounts`),active:!0},{id:`investments`,label:`Investments`,icon:(0,S.jsx)(u,{className:`w-4 h-4`}),onClick:C(`investments`)},{id:`beneficiaries`,label:`Beneficiaries`,icon:(0,S.jsx)(c,{className:`w-4 h-4`}),onClick:C(`beneficiaries`)},{id:`security`,label:`Security`,icon:(0,S.jsx)(s,{className:`w-4 h-4`}),onClick:C(`security`)}]}},D={args:{items:[{id:`dashboard`,label:`Dashboard`,onClick:C(`Dashboard`)},{id:`transactions`,label:`Transactions`,onClick:C(`Transactions`)},{id:`analytics`,label:`Analytics`,onClick:C(`Analytics`)},{id:`settings`,label:`Settings`,onClick:C(`Settings`)}],collapsible:!0}},O={args:{items:[{id:`dash`,label:`Dashboard`,icon:(0,S.jsx)(o,{className:`w-4 h-4`}),onClick:C(`Dashboard`)},{id:`tx`,label:`Transactions`,icon:(0,S.jsx)(d,{className:`w-4 h-4`}),onClick:C(`Transactions`)},{id:`inv`,label:`Investments`,icon:(0,S.jsx)(u,{className:`w-4 h-4`}),onClick:C(`Investments`)},{id:`log`,label:`Logout`,icon:(0,S.jsx)(r,{className:`w-4 h-4`}),onClick:C(`Logout`)}],collapsed:!0}},k={args:{items:[{id:`dashboard`,label:`Dashboard`,onClick:C(`Dashboard`)},{id:`transactions`,label:`Transactions`,onClick:C(`Transactions`),active:!0},{id:`reports`,label:`Reports`,onClick:C(`Reports`)}]}},A={args:{items:Array.from({length:8},(e,t)=>({id:`item-${t}`,label:`Menu Item ${t+1}`,onClick:C(`item-${t}`)}))}},j={args:{items:[{id:`file`,label:`File`,onClick:C(`File`)},{id:`export`,label:`Export Data`,onClick:C(`Export`)},{id:`preferences`,label:`Preferences`,onClick:C(`Preferences`)}]}},M={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,S.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,S.jsx)(e,{})})]},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'file',
      label: 'File',
      icon: <File className="w-4 h-4" />,
      onClick: action('file')
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-4 h-4" />,
      onClick: action('settings')
    }, {
      id: 'help',
      label: 'Help',
      icon: <HelpCircle className="w-4 h-4" />,
      onClick: action('help')
    }]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'accounts',
      label: 'Accounts',
      icon: <CreditCard className="w-4 h-4" />,
      onClick: action('accounts'),
      active: true
    }, {
      id: 'investments',
      label: 'Investments',
      icon: <TrendingUp className="w-4 h-4" />,
      onClick: action('investments')
    }, {
      id: 'beneficiaries',
      label: 'Beneficiaries',
      icon: <Users className="w-4 h-4" />,
      onClick: action('beneficiaries')
    }, {
      id: 'security',
      label: 'Security',
      icon: <Shield className="w-4 h-4" />,
      onClick: action('security')
    }]
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'dashboard',
      label: 'Dashboard',
      onClick: action('Dashboard')
    }, {
      id: 'transactions',
      label: 'Transactions',
      onClick: action('Transactions')
    }, {
      id: 'analytics',
      label: 'Analytics',
      onClick: action('Analytics')
    }, {
      id: 'settings',
      label: 'Settings',
      onClick: action('Settings')
    }],
    collapsible: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'dash',
      label: 'Dashboard',
      icon: <CreditCard className="w-4 h-4" />,
      onClick: action('Dashboard')
    }, {
      id: 'tx',
      label: 'Transactions',
      icon: <File className="w-4 h-4" />,
      onClick: action('Transactions')
    }, {
      id: 'inv',
      label: 'Investments',
      icon: <TrendingUp className="w-4 h-4" />,
      onClick: action('Investments')
    }, {
      id: 'log',
      label: 'Logout',
      icon: <LogOut className="w-4 h-4" />,
      onClick: action('Logout')
    }],
    collapsed: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'dashboard',
      label: 'Dashboard',
      onClick: action('Dashboard')
    }, {
      id: 'transactions',
      label: 'Transactions',
      onClick: action('Transactions'),
      active: true
    }, {
      id: 'reports',
      label: 'Reports',
      onClick: action('Reports')
    }]
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    items: Array.from({
      length: 8
    }, (_, i) => ({
      id: \`item-\${i}\`,
      label: \`Menu Item \${i + 1}\`,
      onClick: action(\`item-\${i}\`)
    }))
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'file',
      label: 'File',
      onClick: action('File')
    }, {
      id: 'export',
      label: 'Export Data',
      onClick: action('Export')
    }, {
      id: 'preferences',
      label: 'Preferences',
      onClick: action('Preferences')
    }]
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N=[`Default`,`BankingMenu`,`CollapsibleMenu`,`Collapsed`,`WithActiveItem`,`ManyItems`,`WithSubItems`,`DarkMode`]}))();export{E as BankingMenu,O as Collapsed,D as CollapsibleMenu,M as DarkMode,T as Default,A as ManyItems,k as WithActiveItem,j as WithSubItems,N as __namedExportsOrder,w as default};