import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BGx_IYCs.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{l as i,s as a,t as o}from"./es-Ch39IMKG.js";import{n as s,t as c}from"./utils-COD7dmCP.js";import{Bn as l,Mt as u,On as d,W as f,f as p,mn as m,t as h,v as g,z as _}from"./lucide-react-B3O-UhxF.js";var v,y,b,x=e((()=>{v=t(n()),o(),s(),y=r(),b=v.forwardRef(({menus:e,leftContent:t,rightContent:n,className:r=``},o)=>{let[s,l]=v.useState(null),[u,d]=v.useState(null),f=v.useRef({});v.useEffect(()=>{let e=e=>{s&&(l(null),d(null))};if(s)return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[s]),v.useEffect(()=>{let e=e=>{e.key===`Escape`&&s&&(l(null),d(null))};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[s]);let p=e=>{s===e?(l(null),d(null)):(l(e),d(e))},m=e=>{s&&l(e),d(e)},h=e=>{!e.disabled&&e.onSelect&&(e.onSelect(),l(null),d(null))};return(0,y.jsxs)(`div`,{ref:o,className:c(`flex items-center h-14 px-6 bg-surface-primary border-b border-border-primary`,r),children:[t&&(0,y.jsx)(`div`,{className:`flex items-center mr-6`,children:t}),(0,y.jsx)(`div`,{className:`flex items-center gap-2 flex-1`,children:e.map(e=>(0,y.jsxs)(`div`,{className:`relative`,children:[(0,y.jsx)(`button`,{ref:t=>{f.current[e.id]=t},onClick:()=>p(e.id),onMouseEnter:()=>m(e.id),className:c(`px-4 py-2 text-sm font-medium rounded-md transition-colors`,s===e.id||u===e.id?`bg-accent-blue/10 text-text-primary`:`text-text-secondary hover:bg-surface-secondary hover:text-text-primary`),children:e.label}),(0,y.jsx)(i,{children:s===e.id&&(0,y.jsx)(a.div,{initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.15},className:`absolute left-0 top-full mt-1 min-w-[240px] bg-surface-primary rounded-lg shadow-xl border border-border-primary overflow-hidden z-dropdown`,onClick:e=>e.stopPropagation(),children:(0,y.jsx)(`div`,{className:`py-2`,children:e.items.map((e,t)=>(0,y.jsx)(v.Fragment,{children:e.divider?(0,y.jsx)(`div`,{className:`my-2 h-px bg-border-primary`}):(0,y.jsxs)(`button`,{onClick:()=>h(e),disabled:e.disabled,className:c(`w-full flex items-center justify-between gap-6 px-4 py-3 text-sm transition-colors`,e.disabled?`text-text-tertiary cursor-not-allowed`:`text-text-secondary hover:bg-accent-blue/10 hover:text-text-primary cursor-pointer`),children:[(0,y.jsxs)(`div`,{className:`flex items-center gap-3`,children:[e.icon&&(0,y.jsx)(`span`,{className:`flex-shrink-0 text-lg`,children:e.icon}),(0,y.jsx)(`span`,{children:e.label})]}),e.shortcut&&(0,y.jsx)(`kbd`,{className:`text-xs text-text-tertiary font-medium`,children:e.shortcut})]})},e.id))})})})]},e.id))}),n&&(0,y.jsx)(`div`,{className:`flex items-center ml-6`,children:n})]})}),b.displayName=`MenuBar`,b.__docgenInfo={description:``,methods:[],displayName:`MenuBar`,props:{menus:{required:!0,tsType:{name:`Array`,elements:[{name:`MenuBarMenu`}],raw:`MenuBarMenu[]`},description:`Menu items`},leftContent:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional left content (e.g., app logo)`},rightContent:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional right content (e.g., user menu)`},className:{required:!1,tsType:{name:`string`},description:`Optional className for custom styling`,defaultValue:{value:`''`,computed:!1}}}}})),S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{n(),x(),h(),S=r(),{action:C}=__STORYBOOK_MODULE_ACTIONS__,w={title:`Navigation/MenuBar`,component:b,tags:[`autodocs`]},T={args:{items:[{id:`file`,label:`File`,icon:(0,S.jsx)(m,{className:`w-4 h-4`}),onClick:C(`file`)},{id:`settings`,label:`Settings`,icon:(0,S.jsx)(f,{className:`w-4 h-4`}),onClick:C(`settings`)},{id:`help`,label:`Help`,icon:(0,S.jsx)(l,{className:`w-4 h-4`}),onClick:C(`help`)}]}},E={args:{items:[{id:`accounts`,label:`Accounts`,icon:(0,S.jsx)(d,{className:`w-4 h-4`}),onClick:C(`accounts`),active:!0},{id:`investments`,label:`Investments`,icon:(0,S.jsx)(g,{className:`w-4 h-4`}),onClick:C(`investments`)},{id:`beneficiaries`,label:`Beneficiaries`,icon:(0,S.jsx)(p,{className:`w-4 h-4`}),onClick:C(`beneficiaries`)},{id:`security`,label:`Security`,icon:(0,S.jsx)(_,{className:`w-4 h-4`}),onClick:C(`security`)}]}},D={args:{items:[{id:`dashboard`,label:`Dashboard`,onClick:C(`Dashboard`)},{id:`transactions`,label:`Transactions`,onClick:C(`Transactions`)},{id:`analytics`,label:`Analytics`,onClick:C(`Analytics`)},{id:`settings`,label:`Settings`,onClick:C(`Settings`)}],collapsible:!0}},O={args:{items:[{id:`dash`,label:`Dashboard`,icon:(0,S.jsx)(d,{className:`w-4 h-4`}),onClick:C(`Dashboard`)},{id:`tx`,label:`Transactions`,icon:(0,S.jsx)(m,{className:`w-4 h-4`}),onClick:C(`Transactions`)},{id:`inv`,label:`Investments`,icon:(0,S.jsx)(g,{className:`w-4 h-4`}),onClick:C(`Investments`)},{id:`log`,label:`Logout`,icon:(0,S.jsx)(u,{className:`w-4 h-4`}),onClick:C(`Logout`)}],collapsed:!0}},k={args:{items:[{id:`dashboard`,label:`Dashboard`,onClick:C(`Dashboard`)},{id:`transactions`,label:`Transactions`,onClick:C(`Transactions`),active:!0},{id:`reports`,label:`Reports`,onClick:C(`Reports`)}]}},A={args:{items:Array.from({length:8},(e,t)=>({id:`item-${t}`,label:`Menu Item ${t+1}`,onClick:C(`item-${t}`)}))}},j={args:{items:[{id:`file`,label:`File`,onClick:C(`File`)},{id:`export`,label:`Export Data`,onClick:C(`Export`)},{id:`preferences`,label:`Preferences`,onClick:C(`Preferences`)}]}},M={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,S.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,S.jsx)(e,{})})]},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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