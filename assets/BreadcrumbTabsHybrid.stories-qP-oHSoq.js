import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as g,R as l}from"./iframe-vYzePaRW.js";import{H as $}from"./house-Cpi0C-_R.js";import{C as P}from"./chevron-right-C1IyBY8C.js";import{c as I}from"./createLucideIcon-Ckxz52bH.js";import{P as D}from"./package-RizFmL2K.js";import{S as _}from"./settings-BtGQ_KKa.js";import{F as E}from"./file-text-DcGtxsmV.js";import{U as R}from"./users-Csk4Pzas.js";import{S as L}from"./shopping-cart-86AmvOZ-.js";import{T as G}from"./truck-Dj9qU80N.js";import{C as K}from"./credit-card-D5V0Dulb.js";import{F as z,D as J}from"./folder-COnaSYhA.js";import{C as Q}from"./code-B9GrgeRh.js";import"./preload-helper-PPVm8Dsz.js";const X=[["path",{d:"M5 21v-6",key:"1hz6c0"}],["path",{d:"M12 21V9",key:"uvy0l4"}],["path",{d:"M19 21V3",key:"11j9sm"}]],V=I("chart-no-axes-column-increasing",X);const Y=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],U=I("panels-top-left",Y),n=({breadcrumbs:a,tabs:s,activeTab:t,onTabChange:b,onBreadcrumbClick:m,variant:u="default",showHomeIcon:d=!0,className:c=""})=>{const[M,O]=g.useState(s[0]?.id||""),S=t??M,k=g.useRef({}),[H,q]=g.useState({left:0,width:0}),F=r=>{t||O(r),b?.(r)},B=(r,i)=>{m?m(r):i&&(window.location.href=i)};g.useEffect(()=>{const r=k.current[S];if(r){const{offsetLeft:i,offsetWidth:o}=r;q({left:i,width:o})}},[S,s]);const W={default:"bg-background-secondary border-b border-border-primary",compact:"bg-transparent",elevated:"bg-surface-primary shadow-sm border border-border-primary rounded-xl"};return e.jsxs("div",{className:`breadcrumb-tabs-hybrid ${W[u]} ${c}`,children:[e.jsx("div",{className:"breadcrumb-section px-6 pt-4 pb-2",children:e.jsxs("nav",{"aria-label":"Breadcrumb",className:"flex items-center gap-1.5",children:[d&&a.length>0&&e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>B(0,a[0].href),className:"breadcrumb-home-button p-1.5 rounded-lg hover:bg-background-tertiary/50 transition-colors duration-200","aria-label":"Home",children:e.jsx($,{className:"w-4 h-4 text-text-secondary"})}),a.length>1&&e.jsx(P,{className:"w-4 h-4 text-text-quaternary flex-shrink-0"})]}),a.slice(d?1:0).map((r,i)=>{const o=d?i+1:i,p=o===a.length-1;return e.jsxs(l.Fragment,{children:[e.jsxs("button",{onClick:()=>B(o,r.href),className:`breadcrumb-item flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-all duration-200 ${p?"text-text-primary font-medium cursor-default":"text-text-secondary hover:text-text-primary hover:bg-background-tertiary/50"}`,"aria-current":p?"page":void 0,disabled:p,children:[r.icon&&e.jsx("span",{className:"flex-shrink-0",children:r.icon}),e.jsx("span",{className:"text-sm whitespace-nowrap",children:r.label})]}),!p&&e.jsx(P,{className:"w-4 h-4 text-text-quaternary flex-shrink-0"})]},o)})]})}),e.jsxs("div",{className:"tabs-section px-6 relative",children:[e.jsxs("div",{className:"flex items-center gap-1 relative",children:[s.map(r=>{const i=r.id===S;return e.jsxs("button",{ref:o=>{k.current[r.id]=o},onClick:()=>F(r.id),className:`tab-item relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 ${i?"text-accent-blue":"text-text-secondary hover:text-text-primary"}`,role:"tab","aria-selected":i,"aria-controls":`tabpanel-${r.id}`,children:[r.icon&&e.jsx("span",{className:"flex-shrink-0 w-4 h-4",children:r.icon}),e.jsx("span",{children:r.label}),r.badge!==void 0&&r.badge>0&&e.jsx("span",{className:`badge inline-flex items-center justify-center min-w-[18px] h-[18px] px-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${i?"bg-accent-blue text-white":"bg-background-tertiary text-text-secondary"}`,children:r.badge>99?"99+":r.badge})]},r.id)}),e.jsx("div",{className:"tab-indicator absolute bottom-0 h-0.5 bg-accent-blue transition-all duration-300 ease-out",style:{left:`${H.left}px`,width:`${H.width}px`}})]}),u!=="elevated"&&e.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-px bg-border-primary"})]})]})};n.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbTabsHybrid",props:{breadcrumbs:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},activeTab:{required:!1,tsType:{name:"string"},description:""},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:""},onBreadcrumbClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'elevated'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'elevated'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showHomeIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const pe={title:"Navigation/BreadcrumbTabsHybrid",component:n,parameters:{layout:"fullscreen",docs:{description:{component:"A hybrid navigation component that combines breadcrumbs with tabs, providing hierarchical context while allowing quick switching between related views. Perfect for complex applications with multi-level navigation."}}},tags:[]},h={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Projects",href:"/projects"},{label:"Design System",href:"/projects/design-system"}],tabs:[{id:"overview",label:"Overview",icon:e.jsx(U,{className:"w-4 h-4"})},{id:"components",label:"Components",icon:e.jsx(D,{className:"w-4 h-4"})},{id:"settings",label:"Settings",icon:e.jsx(_,{className:"w-4 h-4"})}]},render:a=>{const[s,t]=l.useState("overview");return e.jsx(n,{...a,activeTab:s,onTabChange:t})}},v={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Dashboard",href:"/dashboard"}],tabs:[{id:"notifications",label:"Notifications",icon:e.jsx(E,{className:"w-4 h-4"}),badge:12},{id:"messages",label:"Messages",icon:e.jsx(R,{className:"w-4 h-4"}),badge:5},{id:"analytics",label:"Analytics",icon:e.jsx(V,{className:"w-4 h-4"})}]},render:a=>{const[s,t]=l.useState("notifications");return e.jsx(n,{...a,activeTab:s,onTabChange:t})}},f={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Store",href:"/store"},{label:"Orders",href:"/store/orders"},{label:"Order #12345"}],tabs:[{id:"details",label:"Details",icon:e.jsx(L,{className:"w-4 h-4"})},{id:"items",label:"Items",icon:e.jsx(D,{className:"w-4 h-4"}),badge:3},{id:"shipping",label:"Shipping",icon:e.jsx(G,{className:"w-4 h-4"})},{id:"payment",label:"Payment",icon:e.jsx(K,{className:"w-4 h-4"})}]},render:a=>{const[s,t]=l.useState("details");return e.jsx(n,{...a,activeTab:s,onTabChange:t})}},x={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Documentation",href:"/docs"},{label:"Components"}],tabs:[{id:"usage",label:"Usage"},{id:"api",label:"API"},{id:"examples",label:"Examples"},{id:"changelog",label:"Changelog"}],variant:"compact"},render:a=>{const[s,t]=l.useState("usage");return e.jsx(n,{...a,activeTab:s,onTabChange:t})}},T={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Admin",href:"/admin"},{label:"Users"}],tabs:[{id:"all",label:"All Users",badge:156},{id:"active",label:"Active",badge:142},{id:"pending",label:"Pending",badge:8},{id:"blocked",label:"Blocked",badge:6}],variant:"elevated",className:"m-6"},render:a=>{const[s,t]=l.useState("all");return e.jsx(n,{...a,activeTab:s,onTabChange:t})}},y={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Projects",href:"/projects",icon:e.jsx(z,{className:"w-4 h-4"})},{label:"Web App",href:"/projects/web-app",icon:e.jsx(Q,{className:"w-4 h-4"})},{label:"Backend",href:"/projects/web-app/backend",icon:e.jsx(J,{className:"w-4 h-4"})},{label:"API Documentation"}],tabs:[{id:"endpoints",label:"Endpoints"},{id:"authentication",label:"Authentication"},{id:"models",label:"Models"},{id:"errors",label:"Error Codes"}]},render:a=>{const[s,t]=l.useState("endpoints");return e.jsx(n,{...a,activeTab:s,onTabChange:t})}},w={args:{breadcrumbs:[{label:"Dashboard",href:"/dashboard"},{label:"Reports",href:"/reports"},{label:"Monthly Sales"}],tabs:[{id:"summary",label:"Summary"},{id:"details",label:"Details"},{id:"charts",label:"Charts"}],showHomeIcon:!1},render:a=>{const[s,t]=l.useState("summary");return e.jsx(n,{...a,activeTab:s,onTabChange:t})}},j={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Settings",href:"/settings"}],tabs:[{id:"general",label:"General"},{id:"profile",label:"Profile"},{id:"security",label:"Security"},{id:"notifications",label:"Notifications",badge:3},{id:"privacy",label:"Privacy"},{id:"billing",label:"Billing"},{id:"team",label:"Team",badge:12},{id:"integrations",label:"Integrations"},{id:"api",label:"API Keys"},{id:"advanced",label:"Advanced"}]},render:a=>{const[s,t]=l.useState("general");return e.jsx(n,{...a,activeTab:s,onTabChange:t})}},N={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Electronics"}],tabs:[{id:"all",label:"All Products",badge:234},{id:"featured",label:"Featured",badge:12},{id:"sale",label:"On Sale",badge:45},{id:"new",label:"New Arrivals",badge:8}],activeTab:"all"},render:a=>{const[s,t]=l.useState(a.activeTab||"all"),[b,m]=l.useState(a.breadcrumbs),u=c=>{t(c),console.log("Tab changed to:",c)},d=c=>{console.log("Breadcrumb clicked:",b[c].label),m(b.slice(0,c+1))};return e.jsxs("div",{className:"min-h-screen bg-background-primary",children:[e.jsx(n,{...a,breadcrumbs:b,activeTab:s,onTabChange:u,onBreadcrumbClick:d}),e.jsx("div",{className:"p-6",children:e.jsxs("div",{className:"bg-surface-secondary rounded-xl p-6 border border-border-primary",children:[e.jsxs("h3",{className:"text-lg font-semibold text-text-primary mb-2",children:["Active Tab: ",s]}),e.jsx("p",{className:"text-text-secondary text-sm",children:"Click on tabs to switch between views. Click on breadcrumbs to navigate up the hierarchy."})]})})]})}},A={args:{breadcrumbs:[{label:"Home",href:"/"},{label:"Workspace",href:"/workspace"},{label:"Project Alpha"}],tabs:[{id:"overview",label:"Overview",icon:e.jsx(U,{className:"w-4 h-4"})},{id:"tasks",label:"Tasks",icon:e.jsx(E,{className:"w-4 h-4"}),badge:24},{id:"team",label:"Team",icon:e.jsx(R,{className:"w-4 h-4"}),badge:8},{id:"analytics",label:"Analytics",icon:e.jsx(V,{className:"w-4 h-4"})}]},parameters:{backgrounds:{default:"dark"}},decorators:[a=>e.jsx("div",{className:"dark",children:e.jsx(a,{})})],render:a=>{const[s,t]=l.useState("overview");return e.jsx(n,{...a,activeTab:s,onTabChange:t})}},C={render:()=>e.jsxs("div",{className:"space-y-8 p-6 bg-background-primary min-h-screen",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-text-primary mb-4",children:"Default Variant"}),e.jsx(n,{breadcrumbs:[{label:"Home",href:"/"},{label:"Projects",href:"/projects"},{label:"Design System"}],tabs:[{id:"overview",label:"Overview"},{id:"components",label:"Components",badge:86},{id:"settings",label:"Settings"}],activeTab:"overview"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-text-primary mb-4",children:"Compact Variant"}),e.jsx(n,{breadcrumbs:[{label:"Home",href:"/"},{label:"Documentation",href:"/docs"},{label:"Components"}],tabs:[{id:"usage",label:"Usage"},{id:"api",label:"API"},{id:"examples",label:"Examples"}],activeTab:"usage",variant:"compact"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-text-primary mb-4",children:"Elevated Variant"}),e.jsx(n,{breadcrumbs:[{label:"Home",href:"/"},{label:"Admin",href:"/admin"},{label:"Users"}],tabs:[{id:"all",label:"All Users",badge:156},{id:"active",label:"Active",badge:142},{id:"pending",label:"Pending",badge:8}],activeTab:"all",variant:"elevated"})]})]})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Projects',
      href: '/projects'
    }, {
      label: 'Design System',
      href: '/projects/design-system'
    }],
    tabs: [{
      id: 'overview',
      label: 'Overview',
      icon: <Layout className="w-4 h-4" />
    }, {
      id: 'components',
      label: 'Components',
      icon: <Package className="w-4 h-4" />
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-4 h-4" />
    }]
  },
  render: args => {
    const [activeTab, setActiveTab] = React.useState('overview');
    return <BreadcrumbTabsHybrid {...args} activeTab={activeTab} onTabChange={setActiveTab} />;
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Dashboard',
      href: '/dashboard'
    }],
    tabs: [{
      id: 'notifications',
      label: 'Notifications',
      icon: <FileText className="w-4 h-4" />,
      badge: 12
    }, {
      id: 'messages',
      label: 'Messages',
      icon: <Users className="w-4 h-4" />,
      badge: 5
    }, {
      id: 'analytics',
      label: 'Analytics',
      icon: <BarChart className="w-4 h-4" />
    }]
  },
  render: args => {
    const [activeTab, setActiveTab] = React.useState('notifications');
    return <BreadcrumbTabsHybrid {...args} activeTab={activeTab} onTabChange={setActiveTab} />;
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Store',
      href: '/store'
    }, {
      label: 'Orders',
      href: '/store/orders'
    }, {
      label: 'Order #12345'
    }],
    tabs: [{
      id: 'details',
      label: 'Details',
      icon: <ShoppingCart className="w-4 h-4" />
    }, {
      id: 'items',
      label: 'Items',
      icon: <Package className="w-4 h-4" />,
      badge: 3
    }, {
      id: 'shipping',
      label: 'Shipping',
      icon: <Truck className="w-4 h-4" />
    }, {
      id: 'payment',
      label: 'Payment',
      icon: <CreditCard className="w-4 h-4" />
    }]
  },
  render: args => {
    const [activeTab, setActiveTab] = React.useState('details');
    return <BreadcrumbTabsHybrid {...args} activeTab={activeTab} onTabChange={setActiveTab} />;
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Documentation',
      href: '/docs'
    }, {
      label: 'Components'
    }],
    tabs: [{
      id: 'usage',
      label: 'Usage'
    }, {
      id: 'api',
      label: 'API'
    }, {
      id: 'examples',
      label: 'Examples'
    }, {
      id: 'changelog',
      label: 'Changelog'
    }],
    variant: 'compact'
  },
  render: args => {
    const [activeTab, setActiveTab] = React.useState('usage');
    return <BreadcrumbTabsHybrid {...args} activeTab={activeTab} onTabChange={setActiveTab} />;
  }
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Admin',
      href: '/admin'
    }, {
      label: 'Users'
    }],
    tabs: [{
      id: 'all',
      label: 'All Users',
      badge: 156
    }, {
      id: 'active',
      label: 'Active',
      badge: 142
    }, {
      id: 'pending',
      label: 'Pending',
      badge: 8
    }, {
      id: 'blocked',
      label: 'Blocked',
      badge: 6
    }],
    variant: 'elevated',
    className: 'm-6'
  },
  render: args => {
    const [activeTab, setActiveTab] = React.useState('all');
    return <BreadcrumbTabsHybrid {...args} activeTab={activeTab} onTabChange={setActiveTab} />;
  }
}`,...T.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Projects',
      href: '/projects',
      icon: <Folder className="w-4 h-4" />
    }, {
      label: 'Web App',
      href: '/projects/web-app',
      icon: <Code className="w-4 h-4" />
    }, {
      label: 'Backend',
      href: '/projects/web-app/backend',
      icon: <Database className="w-4 h-4" />
    }, {
      label: 'API Documentation'
    }],
    tabs: [{
      id: 'endpoints',
      label: 'Endpoints'
    }, {
      id: 'authentication',
      label: 'Authentication'
    }, {
      id: 'models',
      label: 'Models'
    }, {
      id: 'errors',
      label: 'Error Codes'
    }]
  },
  render: args => {
    const [activeTab, setActiveTab] = React.useState('endpoints');
    return <BreadcrumbTabsHybrid {...args} activeTab={activeTab} onTabChange={setActiveTab} />;
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Dashboard',
      href: '/dashboard'
    }, {
      label: 'Reports',
      href: '/reports'
    }, {
      label: 'Monthly Sales'
    }],
    tabs: [{
      id: 'summary',
      label: 'Summary'
    }, {
      id: 'details',
      label: 'Details'
    }, {
      id: 'charts',
      label: 'Charts'
    }],
    showHomeIcon: false
  },
  render: args => {
    const [activeTab, setActiveTab] = React.useState('summary');
    return <BreadcrumbTabsHybrid {...args} activeTab={activeTab} onTabChange={setActiveTab} />;
  }
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Settings',
      href: '/settings'
    }],
    tabs: [{
      id: 'general',
      label: 'General'
    }, {
      id: 'profile',
      label: 'Profile'
    }, {
      id: 'security',
      label: 'Security'
    }, {
      id: 'notifications',
      label: 'Notifications',
      badge: 3
    }, {
      id: 'privacy',
      label: 'Privacy'
    }, {
      id: 'billing',
      label: 'Billing'
    }, {
      id: 'team',
      label: 'Team',
      badge: 12
    }, {
      id: 'integrations',
      label: 'Integrations'
    }, {
      id: 'api',
      label: 'API Keys'
    }, {
      id: 'advanced',
      label: 'Advanced'
    }]
  },
  render: args => {
    const [activeTab, setActiveTab] = React.useState('general');
    return <BreadcrumbTabsHybrid {...args} activeTab={activeTab} onTabChange={setActiveTab} />;
  }
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Electronics'
    }],
    tabs: [{
      id: 'all',
      label: 'All Products',
      badge: 234
    }, {
      id: 'featured',
      label: 'Featured',
      badge: 12
    }, {
      id: 'sale',
      label: 'On Sale',
      badge: 45
    }, {
      id: 'new',
      label: 'New Arrivals',
      badge: 8
    }],
    activeTab: 'all'
  },
  render: args => {
    const [activeTab, setActiveTab] = React.useState(args.activeTab || 'all');
    const [breadcrumbs, setBreadcrumbs] = React.useState(args.breadcrumbs);
    const handleTabChange = (tabId: string) => {
      setActiveTab(tabId);
      console.log('Tab changed to:', tabId);
    };
    const handleBreadcrumbClick = (index: number) => {
      console.log('Breadcrumb clicked:', breadcrumbs[index].label);
      // Simulate navigation by truncating breadcrumbs
      setBreadcrumbs(breadcrumbs.slice(0, index + 1));
    };
    return <div className="min-h-screen bg-background-primary">
                <BreadcrumbTabsHybrid {...args} breadcrumbs={breadcrumbs} activeTab={activeTab} onTabChange={handleTabChange} onBreadcrumbClick={handleBreadcrumbClick} />
                <div className="p-6">
                    <div className="bg-surface-secondary rounded-xl p-6 border border-border-primary">
                        <h3 className="text-lg font-semibold text-text-primary mb-2">
                            Active Tab: {activeTab}
                        </h3>
                        <p className="text-text-secondary text-sm">
                            Click on tabs to switch between views. Click on breadcrumbs to navigate up
                            the hierarchy.
                        </p>
                    </div>
                </div>
            </div>;
  }
}`,...N.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Workspace',
      href: '/workspace'
    }, {
      label: 'Project Alpha'
    }],
    tabs: [{
      id: 'overview',
      label: 'Overview',
      icon: <Layout className="w-4 h-4" />
    }, {
      id: 'tasks',
      label: 'Tasks',
      icon: <FileText className="w-4 h-4" />,
      badge: 24
    }, {
      id: 'team',
      label: 'Team',
      icon: <Users className="w-4 h-4" />,
      badge: 8
    }, {
      id: 'analytics',
      label: 'Analytics',
      icon: <BarChart className="w-4 h-4" />
    }]
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [Story => <div className="dark">
                <Story />
            </div>],
  render: args => {
    const [activeTab, setActiveTab] = React.useState('overview');
    return <BreadcrumbTabsHybrid {...args} activeTab={activeTab} onTabChange={setActiveTab} />;
  }
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 p-6 bg-background-primary min-h-screen">
            <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Default Variant
                </h3>
                <BreadcrumbTabsHybrid breadcrumbs={[{
        label: 'Home',
        href: '/'
      }, {
        label: 'Projects',
        href: '/projects'
      }, {
        label: 'Design System'
      }]} tabs={[{
        id: 'overview',
        label: 'Overview'
      }, {
        id: 'components',
        label: 'Components',
        badge: 86
      }, {
        id: 'settings',
        label: 'Settings'
      }]} activeTab="overview" />
            </div>

            <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Compact Variant
                </h3>
                <BreadcrumbTabsHybrid breadcrumbs={[{
        label: 'Home',
        href: '/'
      }, {
        label: 'Documentation',
        href: '/docs'
      }, {
        label: 'Components'
      }]} tabs={[{
        id: 'usage',
        label: 'Usage'
      }, {
        id: 'api',
        label: 'API'
      }, {
        id: 'examples',
        label: 'Examples'
      }]} activeTab="usage" variant="compact" />
            </div>

            <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                    Elevated Variant
                </h3>
                <BreadcrumbTabsHybrid breadcrumbs={[{
        label: 'Home',
        href: '/'
      }, {
        label: 'Admin',
        href: '/admin'
      }, {
        label: 'Users'
      }]} tabs={[{
        id: 'all',
        label: 'All Users',
        badge: 156
      }, {
        id: 'active',
        label: 'Active',
        badge: 142
      }, {
        id: 'pending',
        label: 'Pending',
        badge: 8
      }]} activeTab="all" variant="elevated" />
            </div>
        </div>
}`,...C.parameters?.docs?.source}}};const ge=["Default","WithBadges","ECommerce","CompactVariant","ElevatedVariant","DeepNavigation","WithoutHomeIcon","ManyTabs","Interactive","DarkMode","AllVariants"];export{C as AllVariants,x as CompactVariant,A as DarkMode,y as DeepNavigation,h as Default,f as ECommerce,T as ElevatedVariant,N as Interactive,j as ManyTabs,v as WithBadges,w as WithoutHomeIcon,ge as __namedExportsOrder,pe as default};
