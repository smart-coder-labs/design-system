import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-jtk2jlYO.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{l as o,s,t as c}from"./es-DLZWAS6t.js";import{H as l,It as u,Nn as d,Sr as f,Y as p,ht as m,nn as h,q as g,s as _,sr as v,t as y,y as b}from"./lucide-react-LrcM5b-z.js";var x,S,C,w=e((()=>{x=t(n()),c(),r(),S=a(),C=x.forwardRef(({isOpen:e,onClose:t,position:n=`left`,sections:r=[],header:a,footer:c,width:l=`md`,showBackdrop:u=!0,closeOnBackdropClick:d=!0,belowNavBar:f=!1,navBarHeight:p=56,className:m=``,...h},g)=>{let _={sm:`w-64`,md:`w-80`,lg:`w-96`},v={left:{hidden:{x:`-100%`},visible:{x:0},exit:{x:`-100%`}},right:{hidden:{x:`100%`},visible:{x:0},exit:{x:`100%`}}},y={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},b=`
            fixed ${n===`left`?`left-0`:`right-0`}
            ${_[l]}
            bg-surface-primary
            shadow-xl
            flex flex-col
            ${f?`z-dropdown`:`z-modal`}
        `,C=i(`fixed bg-black/40 backdrop-blur-sm`,f?`z-dropdown`:`z-modal`,!f&&`inset-0`),w=f?{top:`${p}px`,height:`calc(100vh - ${p}px)`}:{top:0,height:`100vh`},T=f?{top:`${p}px`,left:0,right:0,bottom:0}:{};return x.useEffect(()=>(e?document.body.style.overflow=`hidden`:document.body.style.overflow=``,()=>{document.body.style.overflow=``}),[e]),x.useEffect(()=>{let n=n=>{n.key===`Escape`&&e&&t()};return document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[e,t]),(0,S.jsx)(o,{children:e&&(0,S.jsxs)(S.Fragment,{children:[u&&(0,S.jsx)(s.div,{className:C,style:T,variants:y,initial:`hidden`,animate:`visible`,exit:`exit`,transition:{duration:.2},onClick:()=>{d&&t()},"aria-hidden":`true`}),(0,S.jsxs)(s.div,{ref:g,className:i(b,m),style:w,variants:v[n],initial:`hidden`,animate:`visible`,exit:`exit`,transition:{type:`spring`,stiffness:300,damping:30},role:`dialog`,"aria-modal":`true`,...h,children:[a&&(0,S.jsx)(`div`,{className:`flex-shrink-0 px-4 py-4 border-b border-border-primary`,children:a}),(0,S.jsx)(`div`,{className:`flex-1 overflow-y-auto px-2 py-4`,children:r.map((e,t)=>(0,S.jsxs)(`div`,{className:`mb-6 last:mb-0`,children:[e.title&&(0,S.jsx)(`h3`,{className:`px-4 mb-2 text-xs font-semibold text-text-tertiary uppercase tracking-wide`,children:e.title}),(0,S.jsx)(`nav`,{className:`space-y-1`,children:e.items.map((e,t)=>{let n=e.href?`a`:`button`,r=!!e.active;return(0,S.jsxs)(n,{href:e.href,onClick:e.onClick,className:i(`
            flex items-center justify-between gap-3 px-4 py-3 rounded-md text-sm font-medium
            transition-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
            cursor-pointer
        `,r?`text-text-primary bg-accent-blue/10 border-l-2 border-accent-blue`:`text-text-secondary hover:bg-surface-secondary hover:text-text-primary`),children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-3`,children:[e.icon&&(0,S.jsx)(`span`,{className:`inline-flex flex-shrink-0`,children:e.icon}),(0,S.jsx)(`span`,{children:e.label})]}),e.badge&&(0,S.jsx)(`span`,{className:`inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full bg-accent-blue text-white`,children:e.badge})]},t)})})]},t))}),c&&(0,S.jsx)(`div`,{className:`flex-shrink-0 px-4 py-4 border-t border-border-primary`,children:c})]})]})})}),C.displayName=`NavigationDrawer`,C.__docgenInfo={description:``,methods:[],displayName:`NavigationDrawer`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:`Whether the drawer is open`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when drawer should close`},position:{required:!1,tsType:{name:`union`,raw:`'left' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'right'`}]},description:`Drawer position`,defaultValue:{value:`'left'`,computed:!1}},sections:{required:!1,tsType:{name:`Array`,elements:[{name:`NavigationDrawerSection`}],raw:`NavigationDrawerSection[]`},description:`Navigation sections`,defaultValue:{value:`[]`,computed:!1}},header:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional header content`},footer:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional footer content`},width:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Drawer width`,defaultValue:{value:`'md'`,computed:!1}},showBackdrop:{required:!1,tsType:{name:`boolean`},description:`Whether to show backdrop`,defaultValue:{value:`true`,computed:!1}},closeOnBackdropClick:{required:!1,tsType:{name:`boolean`},description:`Whether clicking backdrop closes drawer`,defaultValue:{value:`true`,computed:!1}},belowNavBar:{required:!1,tsType:{name:`boolean`},description:`Whether drawer should be positioned below navbar (default: false for full screen)`,defaultValue:{value:`false`,computed:!1}},navBarHeight:{required:!1,tsType:{name:`number`},description:`NavBar height in pixels (default: 56)`,defaultValue:{value:`56`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Optional className for custom styling`,defaultValue:{value:`''`,computed:!1}}},composes:[`Omit`]}})),T,E,D,O,k,A,j,M,N,P,F,I,L;e((()=>{w(),y(),T=t(n()),E=a(),D={title:`Navigation/NavigationDrawer`,component:C,tags:[`autodocs`]},O=[{id:`dashboard`,label:`Dashboard`,icon:(0,E.jsx)(h,{className:`w-5 h-5`})},{id:`investments`,label:`Investments`,icon:(0,E.jsx)(b,{className:`w-5 h-5`})},{id:`wallet`,label:`Wallet`,icon:(0,E.jsx)(_,{className:`w-5 h-5`})},{id:`cards`,label:`Cards`,icon:(0,E.jsx)(d,{className:`w-5 h-5`})},{id:`analytics`,label:`Analytics`,icon:(0,E.jsx)(v,{className:`w-5 h-5`})},{id:`settings`,label:`Settings`,icon:(0,E.jsx)(g,{className:`w-5 h-5`})}],k={args:{items:O,activeItemId:`dashboard`,onItemClick:e=>console.log(`Clicked:`,e),onClose:()=>console.log(`Close drawer`),open:!0}},A={args:{items:O,activeItemId:`investments`,onItemClick:e=>console.log(`Clicked:`,e),onClose:()=>console.log(`Close`),variant:`glass`,open:!0}},j={args:{items:[{id:`accounts`,label:`Accounts`,icon:(0,E.jsx)(_,{className:`w-5 h-5`})},{id:`transfer`,label:`Transfer`,icon:(0,E.jsx)(p,{className:`w-5 h-5`})},{id:`payments`,label:`Payments`,icon:(0,E.jsx)(d,{className:`w-5 h-5`})},{id:`investments`,label:`Investments`,icon:(0,E.jsx)(b,{className:`w-5 h-5`})},{id:`savings`,label:`Savings`,icon:(0,E.jsx)(m,{className:`w-5 h-5`})},{id:`security`,label:`Security`,icon:(0,E.jsx)(l,{className:`w-5 h-5`})}],activeItemId:`accounts`,onItemClick:e=>console.log(`Clicked:`,e),onClose:()=>console.log(`Close`),variant:`glass`,open:!0,headerTitle:`FinBank`,headerSubtitle:`Personal Banking`}},M={args:{items:O,activeItemId:`dashboard`,onItemClick:e=>console.log(`Clicked:`,e),onClose:()=>console.log(`Close`),open:!0,headerTitle:`FinFlow`,headerSubtitle:`cesar@email.com`}},N={args:{items:O,activeItemId:`wallet`,onItemClick:e=>console.log(`Clicked:`,e),onClose:()=>console.log(`Close`),open:!0}},P={args:{items:[{id:`dashboard`,label:`Dashboard`,icon:(0,E.jsx)(h,{className:`w-5 h-5`}),badge:3},{id:`notifications`,label:`Notifications`,icon:(0,E.jsx)(f,{className:`w-5 h-5`}),badge:7},{id:`settings`,label:`Settings`,icon:(0,E.jsx)(g,{className:`w-5 h-5`})}],activeItemId:`dashboard`,onItemClick:e=>console.log(`Clicked:`,e),onClose:()=>console.log(`Close`),open:!0}},F={args:{items:O,activeItemId:`settings`,onItemClick:e=>console.log(`Clicked:`,e),onClose:()=>console.log(`Close`),open:!0,headerTitle:`Cesar Ruiz`,headerSubtitle:`Premium Member`,footer:(0,E.jsx)(`div`,{className:`p-4 border-t border-border-primary`,children:(0,E.jsxs)(`button`,{onClick:()=>console.log(`Logout`),className:`flex items-center gap-3 text-text-secondary hover:text-text-primary transition w-full`,children:[(0,E.jsx)(u,{className:`w-5 h-5`}),(0,E.jsx)(`span`,{className:`text-sm font-medium`,children:`Sign Out`})]})})}},I={render:()=>{let[e,t]=T.useState(!0),[n,r]=T.useState(`dashboard`);return(0,E.jsxs)(`div`,{className:`h-[500px] relative`,children:[(0,E.jsxs)(`button`,{onClick:()=>t(!e),className:`absolute top-4 left-4 z-50 px-4 py-2 bg-accent-blue text-white rounded-xl text-sm font-semibold`,children:[e?`Close`:`Open`,` Drawer`]}),(0,E.jsx)(C,{items:O,activeItemId:n,onItemClick:e=>r(e),onClose:()=>t(!1),open:e,headerTitle:`FinFlow`})]})}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    items: navItems,
    activeItemId: 'dashboard',
    onItemClick: id => console.log('Clicked:', id),
    onClose: () => console.log('Close drawer'),
    open: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    items: navItems,
    activeItemId: 'investments',
    onItemClick: id => console.log('Clicked:', id),
    onClose: () => console.log('Close'),
    variant: 'glass',
    open: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'accounts',
      label: 'Accounts',
      icon: <Wallet className="w-5 h-5" />
    }, {
      id: 'transfer',
      label: 'Transfer',
      icon: <Send className="w-5 h-5" />
    }, {
      id: 'payments',
      label: 'Payments',
      icon: <CreditCard className="w-5 h-5" />
    }, {
      id: 'investments',
      label: 'Investments',
      icon: <TrendingUp className="w-5 h-5" />
    }, {
      id: 'savings',
      label: 'Savings',
      icon: <PiggyBank className="w-5 h-5" />
    }, {
      id: 'security',
      label: 'Security',
      icon: <Shield className="w-5 h-5" />
    }],
    activeItemId: 'accounts',
    onItemClick: id => console.log('Clicked:', id),
    onClose: () => console.log('Close'),
    variant: 'glass',
    open: true,
    headerTitle: 'FinBank',
    headerSubtitle: 'Personal Banking'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    items: navItems,
    activeItemId: 'dashboard',
    onItemClick: id => console.log('Clicked:', id),
    onClose: () => console.log('Close'),
    open: true,
    headerTitle: 'FinFlow',
    headerSubtitle: 'cesar@email.com'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    items: navItems,
    activeItemId: 'wallet',
    onItemClick: id => console.log('Clicked:', id),
    onClose: () => console.log('Close'),
    open: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'dashboard',
      label: 'Dashboard',
      icon: <Home className="w-5 h-5" />,
      badge: 3
    }, {
      id: 'notifications',
      label: 'Notifications',
      icon: <Bell className="w-5 h-5" />,
      badge: 7
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-5 h-5" />
    }],
    activeItemId: 'dashboard',
    onItemClick: id => console.log('Clicked:', id),
    onClose: () => console.log('Close'),
    open: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    items: navItems,
    activeItemId: 'settings',
    onItemClick: id => console.log('Clicked:', id),
    onClose: () => console.log('Close'),
    open: true,
    headerTitle: 'Cesar Ruiz',
    headerSubtitle: 'Premium Member',
    footer: <div className="p-4 border-t border-border-primary">
        <button onClick={() => console.log('Logout')} className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition w-full">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Sign Out</span>
        </button>
      </div>
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = React.useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [active, setActive] = React.useState('dashboard');
    return <div className="h-[500px] relative">
        <button onClick={() => setOpen(!open)} className="absolute top-4 left-4 z-50 px-4 py-2 bg-accent-blue text-white rounded-xl text-sm font-semibold">
          {open ? 'Close' : 'Open'} Drawer
        </button>
        <NavigationDrawer items={navItems} activeItemId={active} onItemClick={id => setActive(id)} onClose={() => setOpen(false)} open={open} headerTitle="FinFlow" />
      </div>;
  }
}`,...I.parameters?.docs?.source}}},L=[`Default`,`GlassVariant`,`BankingNavigation`,`WithHeader`,`OpenState`,`NotificationsBadge`,`WithFooter`,`InteractiveDrawer`]}))();export{j as BankingNavigation,k as Default,A as GlassVariant,I as InteractiveDrawer,P as NotificationsBadge,N as OpenState,F as WithFooter,M as WithHeader,L as __namedExportsOrder,D as default};