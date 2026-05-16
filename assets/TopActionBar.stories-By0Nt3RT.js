import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ns4lj-Vt.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{s as o,t as s}from"./es-Bab7Eu6H.js";import{An as c,Ar as l,Ft as u,H as d,Sr as f,Z as p,at as m,ht as h,jt as g,nn as _,p as v,q as y,s as b,sr as x,t as S,ut as C,y as w}from"./lucide-react-DM_OnbjU.js";var T,E,D,O,k,A=e((()=>{T=t(n()),s(),r(),E=a(),D=T.forwardRef(({leftContent:e,centerContent:t,rightContent:n,glass:r=!1,sticky:a=!0,showBorder:s=!0,size:c=`md`,className:l=``,...u},d)=>{let f=`
            ${{sm:`h-12 px-3`,md:`h-14 px-4`,lg:`h-16 px-6`}[c]}
            w-full
            flex items-center justify-between
            ${a?`sticky top-0 z-30`:``}
            ${r?`bg-surface-glass backdrop-blur-xl`:`bg-surface-primary`}
            ${s?`border-b border-border-primary`:``}
            transition-apple
        `;return(0,E.jsxs)(o.header,{ref:d,className:i(f,l),initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:`spring`,stiffness:300,damping:30},...u,children:[(0,E.jsx)(`div`,{className:`flex items-center gap-2 flex-1 min-w-0`,children:e}),t&&(0,E.jsx)(`div`,{className:`flex items-center justify-center gap-2 flex-shrink-0 px-4`,children:t}),(0,E.jsx)(`div`,{className:`flex items-center justify-end gap-2 flex-1 min-w-0`,children:n})]})}),D.displayName=`TopActionBar`,O=T.forwardRef(({children:e,icon:t,active:n=!1,variant:r=`default`,className:a=``,...s},c)=>{let l={default:`
                text-text-secondary hover:text-text-primary
                hover:bg-surface-secondary
            `,ghost:`
                text-text-secondary hover:text-text-primary
                hover:bg-surface-secondary/50
            `,primary:`
                bg-accent-blue text-white
                hover:bg-accent-blue/90
            `},u=`
            inline-flex items-center gap-2
            px-3 py-1.5
            rounded-md
            text-sm font-medium
            transition-apple
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
            active:scale-95
            ${n?`bg-surface-secondary text-text-primary`:``}
        `;return(0,E.jsxs)(o.button,{ref:c,className:i(u,l[r],a),whileHover:{scale:1.02},whileTap:{scale:.98},...s,children:[t&&(0,E.jsx)(`span`,{className:`inline-flex`,children:t}),e]})}),O.displayName=`TopActionBarButton`,k=T.forwardRef(({icon:e,active:t=!1,badge:n,className:r=``,...a},s)=>{let c=`
            relative
            inline-flex items-center justify-center
            w-9 h-9
            rounded-md
            text-text-secondary hover:text-text-primary
            hover:bg-surface-secondary
            transition-apple
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
            active:scale-95
            ${t?`bg-surface-secondary text-text-primary`:``}
        `;return(0,E.jsxs)(o.button,{ref:s,className:i(c,r),whileHover:{scale:1.05},whileTap:{scale:.95},...a,children:[e,n&&(0,E.jsx)(`span`,{className:`absolute -top-1 -right-1 inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1 text-xs font-semibold rounded-full bg-accent-blue text-white`,children:n})]})}),k.displayName=`TopActionBarIconButton`,D.__docgenInfo={description:``,methods:[],displayName:`TopActionBar`,props:{leftContent:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Content for the left section`},centerContent:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Content for the center section`},rightContent:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Content for the right section`},glass:{required:!1,tsType:{name:`boolean`},description:`Whether to use glassmorphism effect`,defaultValue:{value:`false`,computed:!1}},sticky:{required:!1,tsType:{name:`boolean`},description:`Whether the bar should be sticky`,defaultValue:{value:`true`,computed:!1}},showBorder:{required:!1,tsType:{name:`boolean`},description:`Whether to show bottom border`,defaultValue:{value:`true`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size variant`,defaultValue:{value:`'md'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Optional className for custom styling`,defaultValue:{value:`''`,computed:!1}}},composes:[`Omit`]},O.__docgenInfo={description:``,methods:[],displayName:`TopActionBarButton`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Button content`},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Icon to display`},active:{required:!1,tsType:{name:`boolean`},description:`Whether button is active`,defaultValue:{value:`false`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'ghost' | 'primary'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'ghost'`},{name:`literal`,value:`'primary'`}]},description:`Button variant`,defaultValue:{value:`'default'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Optional className`,defaultValue:{value:`''`,computed:!1}}},composes:[`Omit`]},k.__docgenInfo={description:``,methods:[],displayName:`TopActionBarIconButton`,props:{icon:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Icon to display`},"aria-label":{required:!0,tsType:{name:`string`},description:`Accessible label`},active:{required:!1,tsType:{name:`boolean`},description:`Whether button is active`,defaultValue:{value:`false`,computed:!1}},badge:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Optional badge content`},className:{required:!1,tsType:{name:`string`},description:`Optional className`,defaultValue:{value:`''`,computed:!1}}},composes:[`Omit`]}})),j,M,N,P,F,I,L,R,z,B,V,H,U,W;e((()=>{A(),S(),j=a(),M={title:`Navigation/TopActionBar`,component:D,tags:[`autodocs`],parameters:{docs:{description:{component:`A macOS/iOS-style top navigation bar with left, center, and right sections. Supports glassmorphism, sticky positioning, multiple sizes, and built-in button components.`}}}},N={args:{leftContent:(0,j.jsx)(`span`,{className:`font-bold text-lg text-text-primary`,children:`FinTech`}),centerContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,j.jsx)(O,{variant:`ghost`,children:`Home`}),(0,j.jsx)(O,{variant:`ghost`,children:`Invest`}),(0,j.jsx)(O,{variant:`ghost`,children:`Cards`})]}),rightContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,j.jsx)(O,{variant:`ghost`,icon:(0,j.jsx)(p,{size:18}),children:`Search`}),(0,j.jsx)(O,{variant:`ghost`,icon:(0,j.jsx)(f,{size:18}),children:`Notifications`}),(0,j.jsx)(O,{variant:`ghost`,icon:(0,j.jsx)(v,{size:18}),children:`Profile`})]}),sticky:!1,showBorder:!0}},P={args:{leftContent:(0,j.jsx)(`span`,{className:`font-bold text-lg text-text-primary`,children:`Wealth`}),centerContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,j.jsx)(O,{variant:`ghost`,icon:(0,j.jsx)(_,{size:18}),children:`Dashboard`}),(0,j.jsx)(O,{variant:`ghost`,icon:(0,j.jsx)(w,{size:18}),children:`Markets`}),(0,j.jsx)(O,{variant:`ghost`,icon:(0,j.jsx)(b,{size:18}),children:`Portfolio`})]}),rightContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,j.jsx)(k,{icon:(0,j.jsx)(f,{size:18}),"aria-label":`Notifications`,badge:3}),(0,j.jsx)(k,{icon:(0,j.jsx)(y,{size:18}),"aria-label":`Settings`})]}),glass:!0,sticky:!0,showBorder:!1}},F={args:{leftContent:(0,j.jsx)(`span`,{className:`font-bold text-lg text-text-primary`,children:`App`}),centerContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,j.jsx)(O,{variant:`ghost`,children:`Discover`}),(0,j.jsx)(O,{variant:`ghost`,active:!0,children:`Social`}),(0,j.jsx)(O,{variant:`ghost`,children:`Feed`})]}),rightContent:(0,j.jsx)(`div`,{className:`flex items-center gap-1`,children:(0,j.jsxs)(O,{variant:`primary`,children:[(0,j.jsx)(C,{size:16}),`New Post`]})}),size:`sm`,glass:!0,showBorder:!0}},I={args:{leftContent:(0,j.jsx)(`span`,{className:`font-semibold text-sm text-text-primary`,children:`Mini`}),centerContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,j.jsx)(O,{variant:`ghost`,children:`Files`}),(0,j.jsx)(O,{variant:`ghost`,active:!0,children:`Edit`}),(0,j.jsx)(O,{variant:`ghost`,children:`View`})]}),rightContent:(0,j.jsx)(O,{variant:`ghost`,icon:(0,j.jsx)(p,{size:16}),children:`Search`}),size:`sm`,showBorder:!0}},L={args:{leftContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,j.jsx)(l,{size:20,className:`text-text-secondary cursor-pointer`}),(0,j.jsx)(`span`,{className:`font-bold text-xl text-text-primary`,children:`Portfolio`})]}),centerContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,j.jsx)(O,{variant:`ghost`,icon:(0,j.jsx)(x,{size:18}),children:`Overview`}),(0,j.jsx)(O,{variant:`ghost`,icon:(0,j.jsx)(w,{size:18}),children:`Performance`}),(0,j.jsx)(O,{variant:`ghost`,icon:(0,j.jsx)(h,{size:18}),children:`Dividends`})]}),rightContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,j.jsx)(O,{variant:`primary`,icon:(0,j.jsx)(C,{size:18}),children:`Add Funds`}),(0,j.jsx)(k,{icon:(0,j.jsx)(f,{size:20}),"aria-label":`Notifications`,badge:7})]}),size:`lg`,glass:!0,sticky:!1,showBorder:!0}},R={args:{leftContent:(0,j.jsx)(`span`,{className:`font-bold text-lg text-text-primary`,children:`Nexus`}),centerContent:null,rightContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,j.jsx)(k,{icon:(0,j.jsx)(p,{size:18}),"aria-label":`Search`}),(0,j.jsx)(k,{icon:(0,j.jsx)(f,{size:18}),"aria-label":`Notifications`,badge:12}),(0,j.jsx)(k,{icon:(0,j.jsx)(y,{size:18}),"aria-label":`Settings`}),(0,j.jsx)(k,{icon:(0,j.jsx)(v,{size:18}),"aria-label":`Profile`})]}),glass:!0,sticky:!0,showBorder:!1}},z={parameters:{viewport:{defaultViewport:`mobile1`}},args:{leftContent:(0,j.jsx)(k,{icon:(0,j.jsx)(g,{size:20}),"aria-label":`Menu`}),centerContent:(0,j.jsx)(`span`,{className:`font-bold text-sm text-text-primary`,children:`Home`}),rightContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,j.jsx)(k,{icon:(0,j.jsx)(p,{size:18}),"aria-label":`Search`}),(0,j.jsx)(k,{icon:(0,j.jsx)(f,{size:18}),"aria-label":`Notifications`,badge:5})]}),size:`sm`,showBorder:!0}},B={args:{leftContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,j.jsx)(d,{size:20,className:`text-accent-blue`}),(0,j.jsx)(`span`,{className:`font-bold text-lg text-text-primary`,children:`SecureBank`})]}),centerContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,j.jsx)(O,{variant:`ghost`,active:!0,children:`Accounts`}),(0,j.jsx)(O,{variant:`ghost`,children:`Transfers`}),(0,j.jsx)(O,{variant:`ghost`,children:`Cards`}),(0,j.jsx)(O,{variant:`ghost`,children:`Loans`})]}),rightContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,j.jsx)(O,{variant:`ghost`,icon:(0,j.jsx)(c,{size:16}),children:`Export`}),(0,j.jsx)(O,{variant:`ghost`,icon:(0,j.jsx)(m,{size:16}),children:`Sync`}),(0,j.jsx)(k,{icon:(0,j.jsx)(f,{size:18}),"aria-label":`Notifications`,badge:2})]}),glass:!0,sticky:!0,showBorder:!0,size:`md`}},V={args:{leftContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,j.jsx)(`span`,{className:`font-bold text-lg text-text-primary`,children:`CryptoWatch`}),(0,j.jsx)(`span`,{className:`text-xs text-status-success bg-status-success/10 px-2 py-0.5 rounded-full font-semibold`,children:`Live`})]}),centerContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-3 text-sm`,children:[(0,j.jsxs)(`span`,{className:`text-text-primary`,children:[`BTC `,(0,j.jsx)(`span`,{className:`text-status-success`,children:`+2.4%`})]}),(0,j.jsxs)(`span`,{className:`text-text-primary`,children:[`ETH `,(0,j.jsx)(`span`,{className:`text-status-success`,children:`+1.8%`})]}),(0,j.jsxs)(`span`,{className:`text-text-primary`,children:[`SOL `,(0,j.jsx)(`span`,{className:`text-status-error`,children:`-0.5%`})]})]}),rightContent:(0,j.jsx)(`div`,{className:`flex items-center gap-2`,children:(0,j.jsxs)(O,{variant:`primary`,size:`sm`,children:[(0,j.jsx)(b,{size:16}),`Connect`]})}),size:`md`,showBorder:!0,glass:!1}},H={args:{leftContent:(0,j.jsx)(`span`,{className:`font-bold text-lg text-text-primary`,children:`Clean`}),centerContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,j.jsx)(O,{variant:`ghost`,children:`One`}),(0,j.jsx)(O,{variant:`ghost`,children:`Two`}),(0,j.jsx)(O,{variant:`ghost`,children:`Three`})]}),rightContent:(0,j.jsx)(k,{icon:(0,j.jsx)(y,{size:18}),"aria-label":`Settings`}),showBorder:!1,sticky:!1}},U={args:{leftContent:(0,j.jsx)(`span`,{className:`font-bold text-lg text-text-primary`,children:`Notifications`}),centerContent:null,rightContent:(0,j.jsxs)(`div`,{className:`flex items-center gap-1`,children:[(0,j.jsx)(k,{icon:(0,j.jsx)(f,{size:18}),"aria-label":`Notifications`,badge:99}),(0,j.jsx)(k,{icon:(0,j.jsx)(u,{size:18}),"aria-label":`Messages`,badge:24})]}),showBorder:!0,glass:!0}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <span className="font-bold text-lg text-text-primary">FinTech</span>,
    centerContent: <div className="flex items-center gap-2">
                <TopActionBarButton variant="ghost">Home</TopActionBarButton>
                <TopActionBarButton variant="ghost">Invest</TopActionBarButton>
                <TopActionBarButton variant="ghost">Cards</TopActionBarButton>
            </div>,
    rightContent: <div className="flex items-center gap-1">
                <TopActionBarButton variant="ghost" icon={<Search size={18} />}>Search</TopActionBarButton>
                <TopActionBarButton variant="ghost" icon={<Bell size={18} />}>Notifications</TopActionBarButton>
                <TopActionBarButton variant="ghost" icon={<User size={18} />}>Profile</TopActionBarButton>
            </div>,
    sticky: false,
    showBorder: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <span className="font-bold text-lg text-text-primary">Wealth</span>,
    centerContent: <div className="flex items-center gap-1">
                <TopActionBarButton variant="ghost" icon={<Home size={18} />}>Dashboard</TopActionBarButton>
                <TopActionBarButton variant="ghost" icon={<TrendingUp size={18} />}>Markets</TopActionBarButton>
                <TopActionBarButton variant="ghost" icon={<Wallet size={18} />}>Portfolio</TopActionBarButton>
            </div>,
    rightContent: <div className="flex items-center gap-1">
                <TopActionBarIconButton icon={<Bell size={18} />} aria-label="Notifications" badge={3} />
                <TopActionBarIconButton icon={<Settings size={18} />} aria-label="Settings" />
            </div>,
    glass: true,
    sticky: true,
    showBorder: false
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <span className="font-bold text-lg text-text-primary">App</span>,
    centerContent: <div className="flex items-center gap-2">
                <TopActionBarButton variant="ghost">Discover</TopActionBarButton>
                <TopActionBarButton variant="ghost" active>Social</TopActionBarButton>
                <TopActionBarButton variant="ghost">Feed</TopActionBarButton>
            </div>,
    rightContent: <div className="flex items-center gap-1">
                <TopActionBarButton variant="primary">
                    <Plus size={16} />
                    New Post
                </TopActionBarButton>
            </div>,
    size: 'sm',
    glass: true,
    showBorder: true
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <span className="font-semibold text-sm text-text-primary">Mini</span>,
    centerContent: <div className="flex items-center gap-1">
                <TopActionBarButton variant="ghost">Files</TopActionBarButton>
                <TopActionBarButton variant="ghost" active>Edit</TopActionBarButton>
                <TopActionBarButton variant="ghost">View</TopActionBarButton>
            </div>,
    rightContent: <TopActionBarButton variant="ghost" icon={<Search size={16} />}>Search</TopActionBarButton>,
    size: 'sm',
    showBorder: true
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <div className="flex items-center gap-3">
                <ArrowLeft size={20} className="text-text-secondary cursor-pointer" />
                <span className="font-bold text-xl text-text-primary">Portfolio</span>
            </div>,
    centerContent: <div className="flex items-center gap-2">
                <TopActionBarButton variant="ghost" icon={<BarChart3 size={18} />}>Overview</TopActionBarButton>
                <TopActionBarButton variant="ghost" icon={<TrendingUp size={18} />}>Performance</TopActionBarButton>
                <TopActionBarButton variant="ghost" icon={<PiggyBank size={18} />}>Dividends</TopActionBarButton>
            </div>,
    rightContent: <div className="flex items-center gap-2">
                <TopActionBarButton variant="primary" icon={<Plus size={18} />}>Add Funds</TopActionBarButton>
                <TopActionBarIconButton icon={<Bell size={20} />} aria-label="Notifications" badge={7} />
            </div>,
    size: 'lg',
    glass: true,
    sticky: false,
    showBorder: true
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <span className="font-bold text-lg text-text-primary">Nexus</span>,
    centerContent: null,
    rightContent: <div className="flex items-center gap-1">
                <TopActionBarIconButton icon={<Search size={18} />} aria-label="Search" />
                <TopActionBarIconButton icon={<Bell size={18} />} aria-label="Notifications" badge={12} />
                <TopActionBarIconButton icon={<Settings size={18} />} aria-label="Settings" />
                <TopActionBarIconButton icon={<User size={18} />} aria-label="Profile" />
            </div>,
    glass: true,
    sticky: true,
    showBorder: false
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    leftContent: <TopActionBarIconButton icon={<Menu size={20} />} aria-label="Menu" />,
    centerContent: <span className="font-bold text-sm text-text-primary">Home</span>,
    rightContent: <div className="flex items-center gap-1">
                <TopActionBarIconButton icon={<Search size={18} />} aria-label="Search" />
                <TopActionBarIconButton icon={<Bell size={18} />} aria-label="Notifications" badge={5} />
            </div>,
    size: 'sm',
    showBorder: true
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <div className="flex items-center gap-3">
                <Shield size={20} className="text-accent-blue" />
                <span className="font-bold text-lg text-text-primary">SecureBank</span>
            </div>,
    centerContent: <div className="flex items-center gap-2">
                <TopActionBarButton variant="ghost" active>Accounts</TopActionBarButton>
                <TopActionBarButton variant="ghost">Transfers</TopActionBarButton>
                <TopActionBarButton variant="ghost">Cards</TopActionBarButton>
                <TopActionBarButton variant="ghost">Loans</TopActionBarButton>
            </div>,
    rightContent: <div className="flex items-center gap-2">
                <TopActionBarButton variant="ghost" icon={<Download size={16} />}>Export</TopActionBarButton>
                <TopActionBarButton variant="ghost" icon={<RefreshCw size={16} />}>Sync</TopActionBarButton>
                <TopActionBarIconButton icon={<Bell size={18} />} aria-label="Notifications" badge={2} />
            </div>,
    glass: true,
    sticky: true,
    showBorder: true,
    size: 'md'
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-text-primary">CryptoWatch</span>
                <span className="text-xs text-status-success bg-status-success/10 px-2 py-0.5 rounded-full font-semibold">Live</span>
            </div>,
    centerContent: <div className="flex items-center gap-3 text-sm">
                <span className="text-text-primary">BTC <span className="text-status-success">+2.4%</span></span>
                <span className="text-text-primary">ETH <span className="text-status-success">+1.8%</span></span>
                <span className="text-text-primary">SOL <span className="text-status-error">-0.5%</span></span>
            </div>,
    rightContent: <div className="flex items-center gap-2">
                <TopActionBarButton variant="primary" size="sm">
                    <Wallet size={16} />
                    Connect
                </TopActionBarButton>
            </div>,
    size: 'md',
    showBorder: true,
    glass: false
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <span className="font-bold text-lg text-text-primary">Clean</span>,
    centerContent: <div className="flex items-center gap-2">
                <TopActionBarButton variant="ghost">One</TopActionBarButton>
                <TopActionBarButton variant="ghost">Two</TopActionBarButton>
                <TopActionBarButton variant="ghost">Three</TopActionBarButton>
            </div>,
    rightContent: <TopActionBarIconButton icon={<Settings size={18} />} aria-label="Settings" />,
    showBorder: false,
    sticky: false
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <span className="font-bold text-lg text-text-primary">Notifications</span>,
    centerContent: null,
    rightContent: <div className="flex items-center gap-1">
                <TopActionBarIconButton icon={<Bell size={18} />} aria-label="Notifications" badge={99} />
                <TopActionBarIconButton icon={<Mail size={18} />} aria-label="Messages" badge={24} />
            </div>,
    showBorder: true,
    glass: true
  }
}`,...U.parameters?.docs?.source}}},W=[`Default`,`Glassmorphism`,`WithActiveStates`,`SizeSmall`,`SizeLarge`,`IconButtonsOnly`,`MobileView`,`BankingDashboard`,`CryptoMarketBar`,`NoBorder`,`HighBadgeCount`]}))();export{B as BankingDashboard,V as CryptoMarketBar,N as Default,P as Glassmorphism,U as HighBadgeCount,R as IconButtonsOnly,z as MobileView,H as NoBorder,L as SizeLarge,I as SizeSmall,F as WithActiveStates,W as __namedExportsOrder,M as default};