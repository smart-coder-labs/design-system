import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C3uANx_z.js";import{Dr as r,Gt as i,K as a,V as o,Y as s,ar as c,nr as l,s as u,t as d,y as f,yr as p}from"./lucide-react-h9NbdGwk.js";import{n as m,t as h}from"./utils-CcEteFRA.js";import{t as g}from"./jsx-runtime-WZfjI2gv.js";import{s as _,t as v}from"./es-Y5rqk_dr.js";var y,b,x,S=e((()=>{y=t(n()),v(),m(),b=g(),x=y.forwardRef(({items:e,className:t=``,...n},r)=>(0,b.jsx)(_.nav,{ref:r,className:h(`
      flex flex-col space-y-1 p-4 bg-surface-secondary rounded-lg shadow-sm`,t),initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{type:`spring`,stiffness:300,damping:30},...n,children:e.map((e,t)=>{let n=e.href?`a`:`button`,r=!!e.active;return(0,b.jsxs)(n,{href:e.href,onClick:e.onClick,className:h(`
      flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium
      transition-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
    `,r?`text-text-primary bg-surface-primary`:`text-text-secondary hover:bg-surface-primary/20`),children:[e.icon&&(0,b.jsx)(`span`,{className:`inline-flex`,children:e.icon}),e.label]},t)})})),x.displayName=`Sidebar`,x.__docgenInfo={description:``,methods:[],displayName:`Sidebar`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`SidebarItem`}],raw:`SidebarItem[]`},description:`List of navigation items`},className:{required:!1,tsType:{name:`string`},description:`Optional className for custom styling`,defaultValue:{value:`''`,computed:!1}}},composes:[`Omit`]}})),C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{S(),d(),C=g(),{fn:w}=__STORYBOOK_MODULE_TEST__,T={title:`Navigation/Sidebar`,component:x,tags:[`autodocs`]},E=[{label:`Dashboard`,icon:(0,C.jsx)(i,{size:18}),active:!0,onClick:w()},{label:`Portfolio`,icon:(0,C.jsx)(l,{size:18}),onClick:w()},{label:`Transactions`,icon:(0,C.jsx)(r,{size:18}),onClick:w()},{label:`Markets`,icon:(0,C.jsx)(f,{size:18}),onClick:w()},{label:`Settings`,icon:(0,C.jsx)(a,{size:18}),onClick:w()}],D={args:{items:E}},O={args:{items:E},parameters:{layout:`padded`},decorators:[e=>(0,C.jsx)(`div`,{style:{width:60},children:(0,C.jsx)(e,{})})]},k={args:{items:[{label:`Overview`,icon:(0,C.jsx)(i,{size:18}),active:!0,onClick:w()},{label:`Analytics`,icon:(0,C.jsx)(c,{size:18}),onClick:w()},{label:`Wallet`,icon:(0,C.jsx)(u,{size:18}),onClick:w()},{label:`Transfers`,icon:(0,C.jsx)(s,{size:18}),onClick:w()},{label:`Notifications`,icon:(0,C.jsx)(p,{size:18}),onClick:w()},{label:`Security`,icon:(0,C.jsx)(o,{size:18}),onClick:w()}]}},A={args:{items:[{label:`Dashboard`,icon:(0,C.jsx)(i,{size:18}),href:`/dashboard`,active:!0},{label:`Portfolio`,icon:(0,C.jsx)(l,{size:18}),href:`/portfolio`},{label:`Transactions`,icon:(0,C.jsx)(r,{size:18}),href:`/transactions`}]}},j={args:{items:Array.from({length:15},(e,t)=>({label:`Menu Item ${t+1}`,icon:t%2==0?(0,C.jsx)(i,{size:18}):(0,C.jsx)(a,{size:18}),active:t===0,onClick:w()}))}},M={args:{items:[{label:`Dashboard`,icon:(0,C.jsx)(i,{size:18}),active:!0,onClick:w()}]}},N={args:{items:[{label:`Dashboard`,icon:(0,C.jsx)(i,{size:18}),onClick:w()},{label:`Portfolio`,icon:(0,C.jsx)(l,{size:18}),active:!0,onClick:w()},{label:`Transactions`,icon:(0,C.jsx)(r,{size:18}),onClick:w()}]}},P={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,C.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,C.jsx)(e,{})})]},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  },
  parameters: {
    layout: 'padded'
  },
  decorators: [Story => <div style={{
    width: 60
  }}>
        <Story />
      </div>]
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Overview',
      icon: <LayoutDashboard size={18} />,
      active: true,
      onClick: fn()
    }, {
      label: 'Analytics',
      icon: <BarChart3 size={18} />,
      onClick: fn()
    }, {
      label: 'Wallet',
      icon: <Wallet size={18} />,
      onClick: fn()
    }, {
      label: 'Transfers',
      icon: <Send size={18} />,
      onClick: fn()
    }, {
      label: 'Notifications',
      icon: <Bell size={18} />,
      onClick: fn()
    }, {
      label: 'Security',
      icon: <Shield size={18} />,
      onClick: fn()
    }]
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      icon: <LayoutDashboard size={18} />,
      href: '/dashboard',
      active: true
    }, {
      label: 'Portfolio',
      icon: <PieChart size={18} />,
      href: '/portfolio'
    }, {
      label: 'Transactions',
      icon: <ArrowLeftRight size={18} />,
      href: '/transactions'
    }]
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: Array.from({
      length: 15
    }, (_, i) => ({
      label: \`Menu Item \${i + 1}\`,
      icon: i % 2 === 0 ? <LayoutDashboard size={18} /> : <Settings size={18} />,
      active: i === 0,
      onClick: fn()
    }))
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      icon: <LayoutDashboard size={18} />,
      active: true,
      onClick: fn()
    }]
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Dashboard',
      icon: <LayoutDashboard size={18} />,
      onClick: fn()
    }, {
      label: 'Portfolio',
      icon: <PieChart size={18} />,
      active: true,
      onClick: fn()
    }, {
      label: 'Transactions',
      icon: <ArrowLeftRight size={18} />,
      onClick: fn()
    }]
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F=[`Default`,`Collapsed`,`WithSections`,`WithHrefLinks`,`ManyItems`,`SingleItem`,`DarkActive`,`DarkMode`]}))();export{O as Collapsed,N as DarkActive,P as DarkMode,D as Default,j as ManyItems,M as SingleItem,A as WithHrefLinks,k as WithSections,F as __namedExportsOrder,T as default};