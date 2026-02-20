import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as L}from"./iframe-B-5hg53G.js";import{c as r}from"./utils-CDN07tui.js";import{M as Y}from"./minus-BbZk6P6f.js";import{T as Z}from"./trending-down-CvP3YFhQ.js";import{T as W}from"./trending-up-CD0k4ONU.js";import{m as ee}from"./proxy-BFtQK4Qy.js";import{U as d}from"./users-D5dnnqGx.js";import{E}from"./eye-CoPkThGO.js";import{S as u}from"./shopping-cart-CBeXDOa8.js";import{D as l,T as $}from"./target-CWnSxBBl.js";import{A as V}from"./activity-COAwuEYd.js";import{S as ae}from"./server-Cmd1mKDx.js";import{S as se}from"./shield-GptgAu7U.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-CJTSccXv.js";const a=L.forwardRef(({label:c,value:A,change:o,trend:n,icon:m,variant:O="default",size:s="md",description:v,loading:_=!1,className:F,...Q},H)=>{const i={sm:{label:"text-xs",value:"text-2xl",change:"text-xs",description:"text-xs",padding:"p-4",iconSize:"w-8 h-8"},md:{label:"text-sm",value:"text-4xl",change:"text-sm",description:"text-sm",padding:"p-6",iconSize:"w-10 h-10"},lg:{label:"text-base",value:"text-5xl",change:"text-base",description:"text-base",padding:"p-8",iconSize:"w-12 h-12"}},J={default:"bg-surface-primary",bordered:"bg-surface-primary border border-border-primary shadow-sm",elevated:"bg-surface-primary shadow-md hover:shadow-lg transition-shadow",minimal:"bg-transparent"},p={up:{icon:W,color:"text-status-success",bg:"bg-status-success/10"},down:{icon:Z,color:"text-status-error",bg:"bg-status-error/10"},neutral:{icon:Y,color:"text-text-tertiary",bg:"bg-surface-secondary"}},q=n?p[n].icon:null,X=ee.div;return e.jsx(X,{ref:H,className:r("rounded-xl overflow-hidden",J[O],i[s].padding,F),initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.22,ease:[.16,1,.3,1]},...Q,children:e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:r("font-medium text-text-secondary mb-2",i[s].label),children:c}),_?e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:r("h-10 bg-surface-secondary rounded-lg animate-pulse",s==="sm"&&"h-8",s==="lg"&&"h-12")}),o&&e.jsx("div",{className:"h-5 w-20 bg-surface-secondary rounded animate-pulse"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:r("font-bold text-text-primary mb-2 tracking-tight",i[s].value),children:A}),(o||n)&&e.jsxs("div",{className:"flex items-center gap-2",children:[n&&q&&e.jsxs("div",{className:r("flex items-center gap-1 px-2 py-1 rounded-md",p[n].bg),children:[e.jsx(q,{className:r("w-3.5 h-3.5",p[n].color)}),o&&e.jsx("span",{className:r("font-semibold",p[n].color,i[s].change),children:o})]}),o&&!n&&e.jsx("span",{className:r("font-medium text-text-secondary",i[s].change),children:o})]}),v&&e.jsx("div",{className:r("text-text-tertiary mt-2",i[s].description),children:v})]})]}),m&&e.jsx("div",{className:r("flex-shrink-0 flex items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue",i[s].iconSize),children:m})]})})});a.displayName="KPIBlock";const t=L.forwardRef(({children:c,columns:A=3,gap:o="md",className:n,...m},O)=>{const s={sm:"gap-3",md:"gap-4",lg:"gap-6"},v={1:"grid-cols-1",2:"grid-cols-1 md:grid-cols-2",3:"grid-cols-1 md:grid-cols-2 xl:grid-cols-3",4:"grid-cols-1 md:grid-cols-2 xl:grid-cols-4"};return e.jsx("div",{ref:O,className:r("grid",v[A],s[o],n),...m,children:c})});t.displayName="KPIGroup";a.__docgenInfo={description:"",methods:[],displayName:"KPIBlock",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},value:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},change:{required:!1,tsType:{name:"string"},description:""},trend:{required:!1,tsType:{name:"union",raw:"'up' | 'down' | 'neutral'",elements:[{name:"literal",value:"'up'"},{name:"literal",value:"'down'"},{name:"literal",value:"'neutral'"}]},description:""},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'elevated' | 'minimal'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'elevated'"},{name:"literal",value:"'minimal'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};t.__docgenInfo={description:"",methods:[],displayName:"KPIGroup",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:"",defaultValue:{value:"3",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const Ne={title:"Data Display/KPIBlock",component:a,parameters:{layout:"padded"},tags:[]},g={args:{label:"Total Revenue",value:"$124,500"}},h={args:{label:"Monthly Sales",value:"$45,280",trend:"up",change:"+12.5%"}},x={args:{label:"Bounce Rate",value:"32.4%",trend:"down",change:"-8.2%"}},b={args:{label:"Conversion Rate",value:"3.45%",trend:"neutral",change:"0.0%"}},N={args:{label:"Active Users",value:"2,543",icon:e.jsx(d,{className:"w-5 h-5"}),trend:"up",change:"+5.2%"}},w={args:{label:"Page Views",value:"15,234",size:"sm",icon:e.jsx(E,{className:"w-4 h-4"}),trend:"up",change:"+23.1%"}},j={args:{label:"Total Orders",value:"1,249",size:"md",icon:e.jsx(u,{className:"w-5 h-5"}),trend:"up",change:"+18.3%"}},y={args:{label:"Revenue",value:"$324,500",size:"lg",icon:e.jsx(l,{className:"w-6 h-6"}),trend:"up",change:"+15.7%"}},f={args:{label:"Conversion Rate",value:"3.8%",variant:"default",icon:e.jsx($,{className:"w-5 h-5"}),trend:"up",change:"+0.3%"}},S={args:{label:"Daily Active Users",value:"8,234",variant:"elevated",icon:e.jsx(V,{className:"w-5 h-5"}),trend:"up",change:"+12.5%"}},P={args:{label:"Total Sales",value:"$67,890",variant:"bordered",icon:e.jsx(l,{className:"w-5 h-5"}),trend:"down",change:"-2.4%"}},R={args:{label:"Loading Data",value:"$0",loading:!0,icon:e.jsx(l,{className:"w-5 h-5"})}},I={args:{label:"Metric",value:"-"},render:()=>e.jsxs(t,{columns:2,children:[e.jsx(a,{label:"Total Revenue",value:"$324,500",icon:e.jsx(l,{className:"w-5 h-5"}),trend:"up",change:"+15.7%",variant:"elevated"}),e.jsx(a,{label:"Active Users",value:"8,234",icon:e.jsx(d,{className:"w-5 h-5"}),trend:"up",change:"+12.5%",variant:"elevated"})]})},K={args:{label:"Metric",value:"-"},render:()=>e.jsxs(t,{columns:3,children:[e.jsx(a,{label:"Revenue",value:"$124,500",icon:e.jsx(l,{className:"w-5 h-5"}),trend:"up",change:"+15.7%",variant:"elevated"}),e.jsx(a,{label:"Orders",value:"1,249",icon:e.jsx(u,{className:"w-5 h-5"}),trend:"up",change:"+18.3%",variant:"elevated"}),e.jsx(a,{label:"Users",value:"2,543",icon:e.jsx(d,{className:"w-5 h-5"}),trend:"up",change:"+5.2%",variant:"elevated"})]})},T={args:{label:"Metric",value:"-"},render:()=>e.jsxs(t,{columns:4,children:[e.jsx(a,{label:"Revenue",value:"$324,500",icon:e.jsx(l,{className:"w-5 h-5"}),trend:"up",change:"+15.7%",variant:"elevated"}),e.jsx(a,{label:"Orders",value:"1,249",icon:e.jsx(u,{className:"w-5 h-5"}),trend:"up",change:"+18.3%",variant:"elevated"}),e.jsx(a,{label:"Users",value:"8,234",icon:e.jsx(d,{className:"w-5 h-5"}),trend:"up",change:"+12.5%",variant:"elevated"}),e.jsx(a,{label:"Views",value:"15,234",icon:e.jsx(E,{className:"w-5 h-5"}),trend:"up",change:"+23.1%",variant:"elevated"})]})},k={args:{label:"Metric",value:"-"},render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx("h3",{className:"text-lg font-semibold text-text-primary",children:"Dashboard Overview"}),e.jsxs(t,{columns:4,children:[e.jsx(a,{label:"Total Revenue",value:"$324,500",icon:e.jsx(l,{className:"w-5 h-5"}),trend:"up",change:"+15.7%",variant:"elevated",size:"md"}),e.jsx(a,{label:"Total Orders",value:"1,249",icon:e.jsx(u,{className:"w-5 h-5"}),trend:"up",change:"+18.3%",variant:"elevated",size:"md"}),e.jsx(a,{label:"Active Users",value:"8,234",icon:e.jsx(d,{className:"w-5 h-5"}),trend:"up",change:"+12.5%",variant:"elevated",size:"md"}),e.jsx(a,{label:"Conversion Rate",value:"3.8%",icon:e.jsx($,{className:"w-5 h-5"}),trend:"up",change:"+0.3%",variant:"elevated",size:"md"})]})]})},B={args:{label:"Metric",value:"-"},render:()=>e.jsxs(t,{columns:3,children:[e.jsx(a,{label:"Revenue",value:"$124,500",icon:e.jsx(l,{className:"w-5 h-5"}),trend:"up",change:"+15.7%",variant:"elevated"}),e.jsx(a,{label:"Bounce Rate",value:"32.4%",icon:e.jsx(V,{className:"w-5 h-5"}),trend:"down",change:"-8.2%",variant:"elevated"}),e.jsx(a,{label:"Conversion",value:"3.45%",icon:e.jsx($,{className:"w-5 h-5"}),trend:"neutral",change:"0.0%",variant:"elevated"})]})},C={args:{label:"Metric",value:"-"},render:()=>e.jsxs("div",{className:"max-w-md space-y-3",children:[e.jsx(a,{label:"Revenue",value:"$124,500",trend:"up",change:"+15.7%",variant:"bordered",size:"sm"}),e.jsx(a,{label:"Orders",value:"1,249",trend:"up",change:"+18.3%",variant:"bordered",size:"sm"}),e.jsx(a,{label:"Users",value:"2,543",trend:"up",change:"+5.2%",variant:"bordered",size:"sm"})]})},M={args:{label:"Metric",value:"-"},render:()=>e.jsxs(t,{columns:3,children:[e.jsx(a,{label:"Revenue",value:"$0",icon:e.jsx(l,{className:"w-5 h-5"}),loading:!0,variant:"elevated"}),e.jsx(a,{label:"Orders",value:"0",icon:e.jsx(u,{className:"w-5 h-5"}),loading:!0,variant:"elevated"}),e.jsx(a,{label:"Users",value:"0",icon:e.jsx(d,{className:"w-5 h-5"}),loading:!0,variant:"elevated"})]})},z={args:{label:"Metric",value:"-"},render:()=>e.jsxs("div",{className:"max-w-xs space-y-4",children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary uppercase tracking-wide",children:"Quick Stats"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{label:"Today's Revenue",value:"$12,450",trend:"up",change:"+8.2%",size:"sm"}),e.jsx(a,{label:"New Orders",value:"34",trend:"up",change:"+12.0%",size:"sm"}),e.jsx(a,{label:"Active Now",value:"156",trend:"neutral",change:"0.0%",size:"sm"})]})]})},U={name:"💼 Caso de Uso: Panel Ejecutivo de Revenue",args:{label:"Metric",value:"-"},render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-sm uppercase tracking-[0.25em] text-text-tertiary",children:"Weekly Review"}),e.jsx("h3",{className:"text-2xl font-semibold text-text-primary",children:"Revenue Pulse"})]}),e.jsxs(t,{columns:3,children:[e.jsx(a,{label:"Monthly Recurring Revenue",value:"$1.4M",change:"+6.3%",trend:"up",icon:e.jsx(l,{className:"w-5 h-5"}),variant:"elevated",size:"lg"}),e.jsx(a,{label:"Enterprise Pipeline",value:"$4.9M",change:"+18.0%",trend:"up",icon:e.jsx(W,{className:"w-5 h-5"}),variant:"elevated"}),e.jsx(a,{label:"Net Revenue Retention",value:"134%",change:"+2.4 pts",trend:"up",icon:e.jsx(d,{className:"w-5 h-5"}),variant:"bordered"})]})]}),decorators:[c=>e.jsx("div",{className:"w-full max-w-5xl mx-auto",children:e.jsx(c,{})})]},D={name:"📈 Caso de Uso: Tablero de Growth y Marketing",args:{label:"Metric",value:"-"},render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("h3",{className:"text-lg font-semibold text-text-primary",children:"Acquisition Overview"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Blend de campañas orgánicas, paid y referidos durante la última semana."})]}),e.jsxs(t,{columns:4,children:[e.jsx(a,{label:"New Leads",value:"8,932",change:"+21.6%",trend:"up",icon:e.jsx(V,{className:"w-5 h-5"}),size:"md",variant:"default"}),e.jsx(a,{label:"Paid CAC",value:"$184",change:"-7.2%",trend:"down",icon:e.jsx(l,{className:"w-5 h-5"}),size:"md",variant:"bordered"}),e.jsx(a,{label:"Signup to Trial",value:"42%",change:"+3.1%",trend:"up",icon:e.jsx($,{className:"w-5 h-5"}),size:"md",variant:"elevated"}),e.jsx(a,{label:"Active Campaigns",value:"18",change:"+2",trend:"neutral",icon:e.jsx(u,{className:"w-5 h-5"}),size:"md",variant:"bordered"})]})]}),decorators:[c=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(c,{})})]},G={name:"🛡️ Caso de Uso: Operations Bridge",args:{label:"Metric",value:"-"},render:()=>e.jsxs("div",{className:"space-y-6 bg-surface-elevated/40 p-6 rounded-2xl",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-sm font-medium text-text-secondary",children:"Live SRE Feed"}),e.jsx("h3",{className:"text-xl font-semibold text-text-primary",children:"Infra Critical Signals"})]}),e.jsxs(t,{columns:3,children:[e.jsx(a,{label:"Global Uptime",value:"99.985%",change:"+0.003%",trend:"up",icon:e.jsx(ae,{className:"w-5 h-5"}),variant:"elevated"}),e.jsx(a,{label:"Active Incidents",value:"2",change:"-1",trend:"down",icon:e.jsx(se,{className:"w-5 h-5"}),variant:"bordered"}),e.jsx(a,{label:"Avg. Response Time",value:"142 ms",change:"-12 ms",trend:"up",icon:e.jsx(E,{className:"w-5 h-5"}),variant:"elevated"})]})]}),decorators:[c=>e.jsx("div",{className:"w-full max-w-4xl mx-auto",children:e.jsx(c,{})})]};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Total Revenue',
    value: '$124,500'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Monthly Sales',
    value: '$45,280',
    trend: 'up',
    change: '+12.5%'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Bounce Rate',
    value: '32.4%',
    trend: 'down',
    change: '-8.2%'
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Conversion Rate',
    value: '3.45%',
    trend: 'neutral',
    change: '0.0%'
  }
}`,...b.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Active Users',
    value: '2,543',
    icon: <Users className="w-5 h-5" />,
    trend: 'up',
    change: '+5.2%'
  }
}`,...N.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Page Views',
    value: '15,234',
    size: 'sm',
    icon: <Eye className="w-4 h-4" />,
    trend: 'up',
    change: '+23.1%'
  }
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Total Orders',
    value: '1,249',
    size: 'md',
    icon: <ShoppingCart className="w-5 h-5" />,
    trend: 'up',
    change: '+18.3%'
  }
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Revenue',
    value: '$324,500',
    size: 'lg',
    icon: <DollarSign className="w-6 h-6" />,
    trend: 'up',
    change: '+15.7%'
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Conversion Rate',
    value: '3.8%',
    variant: 'default',
    icon: <Target className="w-5 h-5" />,
    trend: 'up',
    change: '+0.3%'
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Daily Active Users',
    value: '8,234',
    variant: 'elevated',
    icon: <Activity className="w-5 h-5" />,
    trend: 'up',
    change: '+12.5%'
  }
}`,...S.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Total Sales',
    value: '$67,890',
    variant: 'bordered',
    icon: <DollarSign className="w-5 h-5" />,
    trend: 'down',
    change: '-2.4%'
  }
}`,...P.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading Data',
    value: '$0',
    loading: true,
    icon: <DollarSign className="w-5 h-5" />
  }
}`,...R.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <KPIGroup columns={2}>
            <KPIBlock label="Total Revenue" value="$324,500" icon={<DollarSign className="w-5 h-5" />} trend="up" change="+15.7%" variant="elevated" />
            <KPIBlock label="Active Users" value="8,234" icon={<Users className="w-5 h-5" />} trend="up" change="+12.5%" variant="elevated" />
        </KPIGroup>
}`,...I.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <KPIGroup columns={3}>
            <KPIBlock label="Revenue" value="$124,500" icon={<DollarSign className="w-5 h-5" />} trend="up" change="+15.7%" variant="elevated" />
            <KPIBlock label="Orders" value="1,249" icon={<ShoppingCart className="w-5 h-5" />} trend="up" change="+18.3%" variant="elevated" />
            <KPIBlock label="Users" value="2,543" icon={<Users className="w-5 h-5" />} trend="up" change="+5.2%" variant="elevated" />
        </KPIGroup>
}`,...K.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <KPIGroup columns={4}>
            <KPIBlock label="Revenue" value="$324,500" icon={<DollarSign className="w-5 h-5" />} trend="up" change="+15.7%" variant="elevated" />
            <KPIBlock label="Orders" value="1,249" icon={<ShoppingCart className="w-5 h-5" />} trend="up" change="+18.3%" variant="elevated" />
            <KPIBlock label="Users" value="8,234" icon={<Users className="w-5 h-5" />} trend="up" change="+12.5%" variant="elevated" />
            <KPIBlock label="Views" value="15,234" icon={<Eye className="w-5 h-5" />} trend="up" change="+23.1%" variant="elevated" />
        </KPIGroup>
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <div className="space-y-6">
            <h3 className="text-lg font-semibold text-text-primary">Dashboard Overview</h3>
            <KPIGroup columns={4}>
                <KPIBlock label="Total Revenue" value="$324,500" icon={<DollarSign className="w-5 h-5" />} trend="up" change="+15.7%" variant="elevated" size="md" />
                <KPIBlock label="Total Orders" value="1,249" icon={<ShoppingCart className="w-5 h-5" />} trend="up" change="+18.3%" variant="elevated" size="md" />
                <KPIBlock label="Active Users" value="8,234" icon={<Users className="w-5 h-5" />} trend="up" change="+12.5%" variant="elevated" size="md" />
                <KPIBlock label="Conversion Rate" value="3.8%" icon={<Target className="w-5 h-5" />} trend="up" change="+0.3%" variant="elevated" size="md" />
            </KPIGroup>
        </div>
}`,...k.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <KPIGroup columns={3}>
            <KPIBlock label="Revenue" value="$124,500" icon={<DollarSign className="w-5 h-5" />} trend="up" change="+15.7%" variant="elevated" />
            <KPIBlock label="Bounce Rate" value="32.4%" icon={<Activity className="w-5 h-5" />} trend="down" change="-8.2%" variant="elevated" />
            <KPIBlock label="Conversion" value="3.45%" icon={<Target className="w-5 h-5" />} trend="neutral" change="0.0%" variant="elevated" />
        </KPIGroup>
}`,...B.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <div className="max-w-md space-y-3">
            <KPIBlock label="Revenue" value="$124,500" trend="up" change="+15.7%" variant="bordered" size="sm" />
            <KPIBlock label="Orders" value="1,249" trend="up" change="+18.3%" variant="bordered" size="sm" />
            <KPIBlock label="Users" value="2,543" trend="up" change="+5.2%" variant="bordered" size="sm" />
        </div>
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <KPIGroup columns={3}>
            <KPIBlock label="Revenue" value="$0" icon={<DollarSign className="w-5 h-5" />} loading variant="elevated" />
            <KPIBlock label="Orders" value="0" icon={<ShoppingCart className="w-5 h-5" />} loading variant="elevated" />
            <KPIBlock label="Users" value="0" icon={<Users className="w-5 h-5" />} loading variant="elevated" />
        </KPIGroup>
}`,...M.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <div className="max-w-xs space-y-4">
            <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wide">Quick Stats</h3>
            <div className="space-y-3">
                <KPIBlock label="Today's Revenue" value="$12,450" trend="up" change="+8.2%" size="sm" />
                <KPIBlock label="New Orders" value="34" trend="up" change="+12.0%" size="sm" />
                <KPIBlock label="Active Now" value="156" trend="neutral" change="0.0%" size="sm" />
            </div>
        </div>
}`,...z.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: '💼 Caso de Uso: Panel Ejecutivo de Revenue',
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <div className="space-y-6">
            <div className="space-y-1">
                <p className="text-sm uppercase tracking-[0.25em] text-text-tertiary">Weekly Review</p>
                <h3 className="text-2xl font-semibold text-text-primary">Revenue Pulse</h3>
            </div>
            <KPIGroup columns={3}>
                <KPIBlock label="Monthly Recurring Revenue" value="$1.4M" change="+6.3%" trend="up" icon={<DollarSign className="w-5 h-5" />} variant="elevated" size="lg" />
                <KPIBlock label="Enterprise Pipeline" value="$4.9M" change="+18.0%" trend="up" icon={<TrendingUp className="w-5 h-5" />} variant="elevated" />
                <KPIBlock label="Net Revenue Retention" value="134%" change="+2.4 pts" trend="up" icon={<Users className="w-5 h-5" />} variant="bordered" />
            </KPIGroup>
        </div>,
  decorators: [StoryComponent => <div className="w-full max-w-5xl mx-auto">
                <StoryComponent />
            </div>]
}`,...U.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '📈 Caso de Uso: Tablero de Growth y Marketing',
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <div className="space-y-4">
            <div className="space-y-1">
                <h3 className="text-lg font-semibold text-text-primary">Acquisition Overview</h3>
                <p className="text-sm text-text-secondary">Blend de campañas orgánicas, paid y referidos durante la última semana.</p>
            </div>
            <KPIGroup columns={4}>
                <KPIBlock label="New Leads" value="8,932" change="+21.6%" trend="up" icon={<Activity className="w-5 h-5" />} size="md" variant="default" />
                <KPIBlock label="Paid CAC" value="$184" change="-7.2%" trend="down" icon={<DollarSign className="w-5 h-5" />} size="md" variant="bordered" />
                <KPIBlock label="Signup to Trial" value="42%" change="+3.1%" trend="up" icon={<Target className="w-5 h-5" />} size="md" variant="elevated" />
                <KPIBlock label="Active Campaigns" value="18" change="+2" trend="neutral" icon={<ShoppingCart className="w-5 h-5" />} size="md" variant="bordered" />
            </KPIGroup>
        </div>,
  decorators: [StoryComponent => <div className="w-full max-w-6xl mx-auto">
                <StoryComponent />
            </div>]
}`,...D.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: '🛡️ Caso de Uso: Operations Bridge',
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <div className="space-y-6 bg-surface-elevated/40 p-6 rounded-2xl">
            <div className="space-y-1">
                <p className="text-sm font-medium text-text-secondary">Live SRE Feed</p>
                <h3 className="text-xl font-semibold text-text-primary">Infra Critical Signals</h3>
            </div>
            <KPIGroup columns={3}>
                <KPIBlock label="Global Uptime" value="99.985%" change="+0.003%" trend="up" icon={<Server className="w-5 h-5" />} variant="elevated" />
                <KPIBlock label="Active Incidents" value="2" change="-1" trend="down" icon={<Shield className="w-5 h-5" />} variant="bordered" />
                <KPIBlock label="Avg. Response Time" value="142 ms" change="-12 ms" trend="up" icon={<Eye className="w-5 h-5" />} variant="elevated" />
            </KPIGroup>
        </div>,
  decorators: [StoryComponent => <div className="w-full max-w-4xl mx-auto">
                <StoryComponent />
            </div>]
}`,...G.parameters?.docs?.source}}};const we=["Default","WithTrendUp","WithTrendDown","WithTrendNeutral","WithIcon","SmallSize","MediumSize","LargeSize","DefaultVariant","ElevatedVariant","BorderedVariant","Loading","TwoColumnGrid","ThreeColumnGrid","FourColumnGrid","DashboardMetrics","MixedTrends","CompactDisplay","LoadingStates","SidebarMetrics","ExecutiveRevenuePanel","GrowthMarketingPulse","OperationsBridge"];export{P as BorderedVariant,C as CompactDisplay,k as DashboardMetrics,g as Default,f as DefaultVariant,S as ElevatedVariant,U as ExecutiveRevenuePanel,T as FourColumnGrid,D as GrowthMarketingPulse,y as LargeSize,R as Loading,M as LoadingStates,j as MediumSize,B as MixedTrends,G as OperationsBridge,z as SidebarMetrics,w as SmallSize,K as ThreeColumnGrid,I as TwoColumnGrid,N as WithIcon,x as WithTrendDown,b as WithTrendNeutral,h as WithTrendUp,we as __namedExportsOrder,Ne as default};
