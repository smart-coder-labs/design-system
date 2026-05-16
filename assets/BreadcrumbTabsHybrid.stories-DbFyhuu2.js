import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-B_S8iqXg.js";import{K as r,Qn as i,bn as a,f as o,ir as s,nn as c,t as l}from"./lucide-react-D-LjNNxx.js";import{t as u}from"./jsx-runtime-DaLCRA3n.js";var d,f,p,m=e((()=>{d=t(n()),l(),f=u(),p=({breadcrumbs:e,tabs:t,activeTab:n,onTabChange:r,onBreadcrumbClick:a,variant:o=`default`,showHomeIcon:s=!0,className:l=``})=>{let[u,p]=(0,d.useState)(t[0]?.id||``),m=n??u,h=(0,d.useRef)({}),[g,_]=(0,d.useState)({left:0,width:0}),v=e=>{n||p(e),r?.(e)},y=(e,t)=>{a?a(e):t&&(window.location.href=t)};return(0,d.useEffect)(()=>{let e=h.current[m];if(e){let{offsetLeft:t,offsetWidth:n}=e;_({left:t,width:n})}},[m,t]),(0,f.jsxs)(`div`,{className:`breadcrumb-tabs-hybrid ${{default:`bg-background-secondary border-b border-border-primary`,compact:`bg-transparent`,elevated:`bg-surface-primary shadow-sm border border-border-primary rounded-xl`}[o]} ${l}`,children:[(0,f.jsx)(`div`,{className:`breadcrumb-section px-6 pt-4 pb-2`,children:(0,f.jsxs)(`nav`,{"aria-label":`Breadcrumb`,className:`flex items-center gap-1.5`,children:[s&&e.length>0&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`button`,{onClick:()=>y(0,e[0].href),className:`breadcrumb-home-button p-1.5 rounded-lg hover:bg-background-tertiary/50 transition-colors duration-200`,"aria-label":`Home`,children:(0,f.jsx)(c,{className:`w-4 h-4 text-text-secondary`})}),e.length>1&&(0,f.jsx)(i,{className:`w-4 h-4 text-text-quaternary flex-shrink-0`})]}),e.slice(+!!s).map((t,n)=>{let r=s?n+1:n,a=r===e.length-1;return(0,f.jsxs)(d.Fragment,{children:[(0,f.jsxs)(`button`,{onClick:()=>y(r,t.href),className:`breadcrumb-item flex items-center gap-2 px-2.5 py-1.5 rounded-lg transition-all duration-200 ${a?`text-text-primary font-medium cursor-default`:`text-text-secondary hover:text-text-primary hover:bg-background-tertiary/50`}`,"aria-current":a?`page`:void 0,disabled:a,children:[t.icon&&(0,f.jsx)(`span`,{className:`flex-shrink-0`,children:t.icon}),(0,f.jsx)(`span`,{className:`text-sm whitespace-nowrap`,children:t.label})]}),!a&&(0,f.jsx)(i,{className:`w-4 h-4 text-text-quaternary flex-shrink-0`})]},r)})]})}),(0,f.jsxs)(`div`,{className:`tabs-section px-6 relative`,children:[(0,f.jsxs)(`div`,{className:`flex items-center gap-1 relative`,children:[t.map(e=>{let t=e.id===m;return(0,f.jsxs)(`button`,{ref:t=>{h.current[e.id]=t},onClick:()=>v(e.id),className:`tab-item relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-200 ${t?`text-accent-blue`:`text-text-secondary hover:text-text-primary`}`,role:`tab`,"aria-selected":t,"aria-controls":`tabpanel-${e.id}`,children:[e.icon&&(0,f.jsx)(`span`,{className:`flex-shrink-0 w-4 h-4`,children:e.icon}),(0,f.jsx)(`span`,{children:e.label}),e.badge!==void 0&&e.badge>0&&(0,f.jsx)(`span`,{className:`badge inline-flex items-center justify-center min-w-[18px] h-[18px] px-1.5 rounded-full text-xs font-semibold transition-colors duration-200 ${t?`bg-accent-blue text-white`:`bg-background-tertiary text-text-secondary`}`,children:e.badge>99?`99+`:e.badge})]},e.id)}),(0,f.jsx)(`div`,{className:`tab-indicator absolute bottom-0 h-0.5 bg-accent-blue transition-all duration-300 ease-out`,style:{left:`${g.left}px`,width:`${g.width}px`}})]}),o!==`elevated`&&(0,f.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 h-px bg-border-primary`})]})]})},p.__docgenInfo={description:``,methods:[],displayName:`BreadcrumbTabsHybrid`,props:{breadcrumbs:{required:!0,tsType:{name:`Array`,elements:[{name:`BreadcrumbItem`}],raw:`BreadcrumbItem[]`},description:``},tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`TabItem`}],raw:`TabItem[]`},description:``},activeTab:{required:!1,tsType:{name:`string`},description:``},onTabChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(tabId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`tabId`}],return:{name:`void`}}},description:``},onBreadcrumbClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}}},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'compact' | 'elevated'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'compact'`},{name:`literal`,value:`'elevated'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},showHomeIcon:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{m(),l(),h=u(),g={title:`Navigation/BreadcrumbTabsHybrid`,component:p,tags:[`autodocs`]},_=[{label:`Dashboard`,href:`/dashboard`},{label:`Accounts`,href:`/accounts`},{label:`Settings`}],v=[{id:`general`,label:`General`,icon:(0,h.jsx)(r,{className:`w-4 h-4`})},{id:`users`,label:`Users`,icon:(0,h.jsx)(o,{className:`w-4 h-4`}),badge:12},{id:`reports`,label:`Reports`,icon:(0,h.jsx)(a,{className:`w-4 h-4`})},{id:`analytics`,label:`Analytics`,icon:(0,h.jsx)(s,{className:`w-4 h-4`}),badge:5}],y={args:{breadcrumbs:_,tabs:v,activeTab:`general`,variant:`default`,showHomeIcon:!0}},b={args:{breadcrumbs:_,tabs:v,activeTab:`users`,variant:`compact`}},x={args:{breadcrumbs:_,tabs:v,activeTab:`reports`,variant:`elevated`}},S={args:{breadcrumbs:_,tabs:v,activeTab:`general`,showHomeIcon:!1}},C={args:{breadcrumbs:[{label:`Dashboard`}],tabs:v,activeTab:`general`,variant:`default`}},w={args:{breadcrumbs:[{label:`Organization`,href:`/org`},{label:`Workspace`,href:`/workspace`},{label:`Projects`,href:`/projects`},{label:`Finances`}],tabs:v,activeTab:`analytics`}},T={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,h.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,h.jsx)(e,{})})]},E={parameters:{viewport:{defaultViewport:`mobile1`}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: defaultBreadcrumbs,
    tabs: defaultTabs,
    activeTab: 'general',
    variant: 'default',
    showHomeIcon: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: defaultBreadcrumbs,
    tabs: defaultTabs,
    activeTab: 'users',
    variant: 'compact'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: defaultBreadcrumbs,
    tabs: defaultTabs,
    activeTab: 'reports',
    variant: 'elevated'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: defaultBreadcrumbs,
    tabs: defaultTabs,
    activeTab: 'general',
    showHomeIcon: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Dashboard'
    }],
    tabs: defaultTabs,
    activeTab: 'general',
    variant: 'default'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    breadcrumbs: [{
      label: 'Organization',
      href: '/org'
    }, {
      label: 'Workspace',
      href: '/workspace'
    }, {
      label: 'Projects',
      href: '/projects'
    }, {
      label: 'Finances'
    }],
    tabs: defaultTabs,
    activeTab: 'analytics'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`CompactVariant`,`ElevatedVariant`,`WithoutHomeIcon`,`SingleBreadcrumb`,`LongBreadcrumbs`,`DarkMode`,`MobileView`]}))();export{b as CompactVariant,T as DarkMode,y as Default,x as ElevatedVariant,w as LongBreadcrumbs,E as MobileView,C as SingleBreadcrumb,S as WithoutHomeIcon,D as __namedExportsOrder,g as default};