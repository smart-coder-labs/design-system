import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-jtk2jlYO.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{s as o,t as s}from"./es-DLZWAS6t.js";import{Nn as c,Sr as l,Z as u,cr as d,nn as f,p,s as m,t as h}from"./lucide-react-LrcM5b-z.js";var g,_,v,y,b,x,S=e((()=>{g=t(n()),r(),_=a(),s(),v={default:`bg-surface-primary border-t border-border-primary`,glass:`glass border-t border-border-secondary/50`,elevated:`bg-surface-primary border-t border-border-primary shadow-lg`},y={sm:{container:`h-16`,icon:`w-5 h-5`,label:`text-xs`,padding:`px-2 py-1`,gap:`gap-1`},md:{container:`h-20`,icon:`w-6 h-6`,label:`text-xs`,padding:`px-3 py-2`,gap:`gap-1.5`},lg:{container:`h-24`,icon:`w-7 h-7`,label:`text-sm`,padding:`px-4 py-3`,gap:`gap-2`}},b=({item:e,showLabel:t,size:n,onItemClick:r})=>{let{icon:a,label:s,padding:c,gap:l}=y[n],u=e.icon,d=e.active||!1,f=e.disabled||!1,p=()=>{f||(e.onClick&&e.onClick(),r&&r(e))},m=e.href&&!f?`a`:`button`;return(0,_.jsx)(o.div,{className:i(`flex flex-col items-center justify-center relative`,l,c,`flex-1 min-w-0`,f&&`opacity-40 cursor-not-allowed`),whileHover:f?{}:{scale:1.05},whileTap:f?{}:{scale:.95},transition:{type:`spring`,stiffness:400,damping:25},children:(0,_.jsxs)(m,{href:e.href,onClick:p,disabled:f,className:i(`flex flex-col items-center justify-center relative`,l,`w-full min-w-0`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 rounded-lg`,f&&`cursor-not-allowed`),children:[(0,_.jsxs)(`div`,{className:`relative`,children:[(0,_.jsx)(o.div,{className:i(`flex items-center justify-center rounded-lg transition-colors`,a,d?`text-accent-blue`:`text-text-secondary`),animate:{scale:d?1.1:1},transition:{type:`spring`,stiffness:400,damping:25},children:(0,_.jsx)(u,{className:a,strokeWidth:d?2.5:2})}),d&&(0,_.jsx)(o.div,{layoutId:`bottom-nav-indicator`,className:`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-blue rounded-full`,initial:{scale:0},animate:{scale:1},transition:{type:`spring`,stiffness:400,damping:25}}),e.badge&&(0,_.jsx)(o.div,{initial:{scale:0},animate:{scale:1},className:i(`absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1.5 flex items-center justify-center`,`bg-status-error text-white text-[10px] font-bold rounded-full`,typeof e.badge==`number`&&e.badge>99&&`px-1`),children:typeof e.badge==`number`&&e.badge>99?`99+`:e.badge})]}),t&&(0,_.jsx)(o.span,{className:i(s,`font-medium text-center truncate w-full`,d?`text-accent-blue`:`text-text-secondary`),animate:{opacity:d?1:.7},children:e.label})]})})},x=g.forwardRef(({items:e,variant:t=`default`,showLabels:n=!0,size:r=`md`,onItemClick:a,className:s,...c},l)=>{let{container:u}=y[r];return(0,_.jsx)(o.nav,{ref:l,className:i(`fixed bottom-0 left-0 right-0 z-50 pb-safe`,`flex items-center justify-around`,v[t],u,s),initial:{y:`100%`},animate:{y:0},exit:{y:`100%`},transition:{type:`spring`,stiffness:300,damping:30},...c,children:e.map(e=>(0,_.jsx)(b,{item:e,showLabel:n,size:r,onItemClick:a},e.id))})}),x.displayName=`BottomNavigation`,x.__docgenInfo={description:``,methods:[],displayName:`BottomNavigation`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`BottomNavigationItem`}],raw:`BottomNavigationItem[]`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'glass' | 'elevated'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'glass'`},{name:`literal`,value:`'elevated'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},showLabels:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},onItemClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: BottomNavigationItem) => void`,signature:{arguments:[{type:{name:`BottomNavigationItem`},name:`item`}],return:{name:`void`}}},description:``}}}})),C,w,T,E,D,O,k,A,j,M,N;e((()=>{S(),h(),C={title:`Navigation/BottomNavigation`,component:x,tags:[`autodocs`]},w=[{id:`home`,label:`Home`,icon:f,active:!0},{id:`search`,label:`Search`,icon:u},{id:`notifications`,label:`Alerts`,icon:l,badge:3},{id:`profile`,label:`Profile`,icon:p}],T={args:{items:w,variant:`default`,showLabels:!0,size:`md`}},E={args:{items:[{id:`wallet`,label:`Wallet`,icon:m,active:!0},{id:`analytics`,label:`Analytics`,icon:d},{id:`cards`,label:`Cards`,icon:c,badge:`NEW`},{id:`profile`,label:`Profile`,icon:p}],variant:`default`,size:`md`}},D={args:{items:w,variant:`glass`}},O={args:{items:w,variant:`elevated`}},k={args:{items:w,size:`sm`}},A={args:{items:w,size:`lg`}},j={args:{items:w,showLabels:!1,size:`md`}},M={args:{items:[{id:`home`,label:`Home`,icon:f,active:!0},{id:`search`,label:`Search`,icon:u,disabled:!0},{id:`notifications`,label:`Alerts`,icon:l,badge:3},{id:`profile`,label:`Profile`,icon:p}]}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: mainNavItems,
    variant: 'default',
    showLabels: true,
    size: 'md'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'wallet',
      label: 'Wallet',
      icon: Wallet,
      active: true
    }, {
      id: 'analytics',
      label: 'Analytics',
      icon: ChartBar
    }, {
      id: 'cards',
      label: 'Cards',
      icon: CreditCard,
      badge: 'NEW'
    }, {
      id: 'profile',
      label: 'Profile',
      icon: User
    }],
    variant: 'default',
    size: 'md'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    items: mainNavItems,
    variant: 'glass'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    items: mainNavItems,
    variant: 'elevated'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    items: mainNavItems,
    size: 'sm'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    items: mainNavItems,
    size: 'lg'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: mainNavItems,
    showLabels: false,
    size: 'md'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Home',
      icon: Home,
      active: true
    }, {
      id: 'search',
      label: 'Search',
      icon: Search,
      disabled: true
    }, {
      id: 'notifications',
      label: 'Alerts',
      icon: Bell,
      badge: 3
    }, {
      id: 'profile',
      label: 'Profile',
      icon: User
    }]
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`TabBar`,`FinanceNav`,`GlassVariant`,`ElevatedVariant`,`SmallSize`,`LargeSize`,`WithoutLabels`,`WithDisabledItem`]}))();export{T as Default,T as TabBar,O as ElevatedVariant,E as FinanceNav,D as GlassVariant,A as LargeSize,k as SmallSize,M as WithDisabledItem,j as WithoutLabels,N as __namedExportsOrder,C as default};