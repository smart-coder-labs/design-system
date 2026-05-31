import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ba3ihGpN.js";import{J as r,Mn as i,O as a,Pr as o,Tn as s,Tt as c,V as l,b as u,f as d,t as f,y as p,z as m}from"./lucide-react-B3llQuma.js";import{n as h,t as g}from"./utils-CcEteFRA.js";import{t as _}from"./jsx-runtime-WZfjI2gv.js";import{s as v,t as y}from"./es-CjJtNnI5.js";var b,x,S,C,w=e((()=>{b=t(n()),y(),h(),f(),x=_(),S=(0,b.forwardRef)(({label:e,value:t,change:n,trend:r,icon:i,variant:a=`default`,size:o=`md`,description:s,loading:l=!1,className:d,...f},m)=>{let h={sm:{label:`text-xs`,value:`text-2xl`,change:`text-xs`,description:`text-xs`,padding:`p-4`,iconSize:`w-8 h-8`},md:{label:`text-sm`,value:`text-4xl`,change:`text-sm`,description:`text-sm`,padding:`p-6`,iconSize:`w-10 h-10`},lg:{label:`text-base`,value:`text-5xl`,change:`text-base`,description:`text-base`,padding:`p-8`,iconSize:`w-12 h-12`}},_={default:`bg-surface-primary`,bordered:`bg-surface-primary border border-border-primary shadow-sm`,elevated:`bg-surface-primary shadow-md hover:shadow-lg transition-shadow`,minimal:`bg-transparent`},y={up:{icon:p,color:`text-status-success`,bg:`bg-status-success/10`},down:{icon:u,color:`text-status-error`,bg:`bg-status-error/10`},neutral:{icon:c,color:`text-text-tertiary`,bg:`bg-surface-secondary`}},b=r?y[r].icon:null,S=v.div;return(0,x.jsx)(S,{ref:m,className:g(`rounded-xl overflow-hidden`,_[a],h[o].padding,d),initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.22,ease:[.16,1,.3,1]},...f,children:(0,x.jsxs)(`div`,{className:`flex items-start justify-between gap-4`,children:[(0,x.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,x.jsx)(`div`,{className:g(`font-medium text-text-secondary mb-2`,h[o].label),children:e}),l?(0,x.jsxs)(`div`,{className:`space-y-3`,children:[(0,x.jsx)(`div`,{className:g(`h-10 bg-surface-secondary rounded-lg animate-pulse`,o===`sm`&&`h-8`,o===`lg`&&`h-12`)}),n&&(0,x.jsx)(`div`,{className:`h-5 w-20 bg-surface-secondary rounded animate-pulse`})]}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(`div`,{className:g(`font-bold text-text-primary mb-2 tracking-tight`,h[o].value),children:t}),(n||r)&&(0,x.jsxs)(`div`,{className:`flex items-center gap-2`,children:[r&&b&&(0,x.jsxs)(`div`,{className:g(`flex items-center gap-1 px-2 py-1 rounded-md`,y[r].bg),children:[(0,x.jsx)(b,{className:g(`w-3.5 h-3.5`,y[r].color)}),n&&(0,x.jsx)(`span`,{className:g(`font-semibold`,y[r].color,h[o].change),children:n})]}),n&&!r&&(0,x.jsx)(`span`,{className:g(`font-medium text-text-secondary`,h[o].change),children:n})]}),s&&(0,x.jsx)(`div`,{className:g(`text-text-tertiary mt-2`,h[o].description),children:s})]})]}),i&&(0,x.jsx)(`div`,{className:g(`flex-shrink-0 flex items-center justify-center rounded-xl bg-accent-blue/10 text-accent-blue`,h[o].iconSize),children:i})]})})}),S.displayName=`KPIBlock`,C=(0,b.forwardRef)(({children:e,columns:t=3,gap:n=`md`,className:r,...i},a)=>(0,x.jsx)(`div`,{ref:a,className:g(`grid`,{1:`grid-cols-1`,2:`grid-cols-1 md:grid-cols-2`,3:`grid-cols-1 md:grid-cols-2 xl:grid-cols-3`,4:`grid-cols-1 md:grid-cols-2 xl:grid-cols-4`}[t],{sm:`gap-3`,md:`gap-4`,lg:`gap-6`}[n],r),...i,children:e})),C.displayName=`KPIGroup`,S.__docgenInfo={description:``,methods:[],displayName:`KPIBlock`,props:{label:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},value:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},change:{required:!1,tsType:{name:`string`},description:``},trend:{required:!1,tsType:{name:`union`,raw:`'up' | 'down' | 'neutral'`,elements:[{name:`literal`,value:`'up'`},{name:`literal`,value:`'down'`},{name:`literal`,value:`'neutral'`}]},description:``},icon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'bordered' | 'elevated' | 'minimal'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'bordered'`},{name:`literal`,value:`'elevated'`},{name:`literal`,value:`'minimal'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},C.__docgenInfo={description:``,methods:[],displayName:`KPIGroup`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},columns:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`}]},description:``,defaultValue:{value:`3`,computed:!1}},gap:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}}}}})),T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;e((()=>{w(),f(),T=_(),E={title:`Data Display/KPIBlock`,component:S,parameters:{layout:`padded`},tags:[]},D={args:{label:`Total Revenue`,value:`$124,500`}},O={args:{label:`Monthly Sales`,value:`$45,280`,trend:`up`,change:`+12.5%`}},k={args:{label:`Bounce Rate`,value:`32.4%`,trend:`down`,change:`-8.2%`}},A={args:{label:`Conversion Rate`,value:`3.45%`,trend:`neutral`,change:`0.0%`}},j={args:{label:`Active Users`,value:`2,543`,icon:(0,T.jsx)(d,{className:`w-5 h-5`}),trend:`up`,change:`+5.2%`}},M={args:{label:`Page Views`,value:`15,234`,size:`sm`,icon:(0,T.jsx)(s,{className:`w-4 h-4`}),trend:`up`,change:`+23.1%`}},N={args:{label:`Total Orders`,value:`1,249`,size:`md`,icon:(0,T.jsx)(m,{className:`w-5 h-5`}),trend:`up`,change:`+18.3%`}},P={args:{label:`Revenue`,value:`$324,500`,size:`lg`,icon:(0,T.jsx)(i,{className:`w-6 h-6`}),trend:`up`,change:`+15.7%`}},F={args:{label:`Conversion Rate`,value:`3.8%`,variant:`default`,icon:(0,T.jsx)(a,{className:`w-5 h-5`}),trend:`up`,change:`+0.3%`}},I={args:{label:`Daily Active Users`,value:`8,234`,variant:`elevated`,icon:(0,T.jsx)(o,{className:`w-5 h-5`}),trend:`up`,change:`+12.5%`}},L={args:{label:`Total Sales`,value:`$67,890`,variant:`bordered`,icon:(0,T.jsx)(i,{className:`w-5 h-5`}),trend:`down`,change:`-2.4%`}},R={args:{label:`Loading Data`,value:`$0`,loading:!0,icon:(0,T.jsx)(i,{className:`w-5 h-5`})}},z={args:{label:`Metric`,value:`-`},render:()=>(0,T.jsxs)(C,{columns:2,children:[(0,T.jsx)(S,{label:`Total Revenue`,value:`$324,500`,icon:(0,T.jsx)(i,{className:`w-5 h-5`}),trend:`up`,change:`+15.7%`,variant:`elevated`}),(0,T.jsx)(S,{label:`Active Users`,value:`8,234`,icon:(0,T.jsx)(d,{className:`w-5 h-5`}),trend:`up`,change:`+12.5%`,variant:`elevated`})]})},B={args:{label:`Metric`,value:`-`},render:()=>(0,T.jsxs)(C,{columns:3,children:[(0,T.jsx)(S,{label:`Revenue`,value:`$124,500`,icon:(0,T.jsx)(i,{className:`w-5 h-5`}),trend:`up`,change:`+15.7%`,variant:`elevated`}),(0,T.jsx)(S,{label:`Orders`,value:`1,249`,icon:(0,T.jsx)(m,{className:`w-5 h-5`}),trend:`up`,change:`+18.3%`,variant:`elevated`}),(0,T.jsx)(S,{label:`Users`,value:`2,543`,icon:(0,T.jsx)(d,{className:`w-5 h-5`}),trend:`up`,change:`+5.2%`,variant:`elevated`})]})},V={args:{label:`Metric`,value:`-`},render:()=>(0,T.jsxs)(C,{columns:4,children:[(0,T.jsx)(S,{label:`Revenue`,value:`$324,500`,icon:(0,T.jsx)(i,{className:`w-5 h-5`}),trend:`up`,change:`+15.7%`,variant:`elevated`}),(0,T.jsx)(S,{label:`Orders`,value:`1,249`,icon:(0,T.jsx)(m,{className:`w-5 h-5`}),trend:`up`,change:`+18.3%`,variant:`elevated`}),(0,T.jsx)(S,{label:`Users`,value:`8,234`,icon:(0,T.jsx)(d,{className:`w-5 h-5`}),trend:`up`,change:`+12.5%`,variant:`elevated`}),(0,T.jsx)(S,{label:`Views`,value:`15,234`,icon:(0,T.jsx)(s,{className:`w-5 h-5`}),trend:`up`,change:`+23.1%`,variant:`elevated`})]})},H={args:{label:`Metric`,value:`-`},render:()=>(0,T.jsxs)(`div`,{className:`space-y-6`,children:[(0,T.jsx)(`h3`,{className:`text-lg font-semibold text-text-primary`,children:`Dashboard Overview`}),(0,T.jsxs)(C,{columns:4,children:[(0,T.jsx)(S,{label:`Total Revenue`,value:`$324,500`,icon:(0,T.jsx)(i,{className:`w-5 h-5`}),trend:`up`,change:`+15.7%`,variant:`elevated`,size:`md`}),(0,T.jsx)(S,{label:`Total Orders`,value:`1,249`,icon:(0,T.jsx)(m,{className:`w-5 h-5`}),trend:`up`,change:`+18.3%`,variant:`elevated`,size:`md`}),(0,T.jsx)(S,{label:`Active Users`,value:`8,234`,icon:(0,T.jsx)(d,{className:`w-5 h-5`}),trend:`up`,change:`+12.5%`,variant:`elevated`,size:`md`}),(0,T.jsx)(S,{label:`Conversion Rate`,value:`3.8%`,icon:(0,T.jsx)(a,{className:`w-5 h-5`}),trend:`up`,change:`+0.3%`,variant:`elevated`,size:`md`})]})]})},U={args:{label:`Metric`,value:`-`},render:()=>(0,T.jsxs)(C,{columns:3,children:[(0,T.jsx)(S,{label:`Revenue`,value:`$124,500`,icon:(0,T.jsx)(i,{className:`w-5 h-5`}),trend:`up`,change:`+15.7%`,variant:`elevated`}),(0,T.jsx)(S,{label:`Bounce Rate`,value:`32.4%`,icon:(0,T.jsx)(o,{className:`w-5 h-5`}),trend:`down`,change:`-8.2%`,variant:`elevated`}),(0,T.jsx)(S,{label:`Conversion`,value:`3.45%`,icon:(0,T.jsx)(a,{className:`w-5 h-5`}),trend:`neutral`,change:`0.0%`,variant:`elevated`})]})},W={args:{label:`Metric`,value:`-`},render:()=>(0,T.jsxs)(`div`,{className:`max-w-md space-y-3`,children:[(0,T.jsx)(S,{label:`Revenue`,value:`$124,500`,trend:`up`,change:`+15.7%`,variant:`bordered`,size:`sm`}),(0,T.jsx)(S,{label:`Orders`,value:`1,249`,trend:`up`,change:`+18.3%`,variant:`bordered`,size:`sm`}),(0,T.jsx)(S,{label:`Users`,value:`2,543`,trend:`up`,change:`+5.2%`,variant:`bordered`,size:`sm`})]})},G={args:{label:`Metric`,value:`-`},render:()=>(0,T.jsxs)(C,{columns:3,children:[(0,T.jsx)(S,{label:`Revenue`,value:`$0`,icon:(0,T.jsx)(i,{className:`w-5 h-5`}),loading:!0,variant:`elevated`}),(0,T.jsx)(S,{label:`Orders`,value:`0`,icon:(0,T.jsx)(m,{className:`w-5 h-5`}),loading:!0,variant:`elevated`}),(0,T.jsx)(S,{label:`Users`,value:`0`,icon:(0,T.jsx)(d,{className:`w-5 h-5`}),loading:!0,variant:`elevated`})]})},K={args:{label:`Metric`,value:`-`},render:()=>(0,T.jsxs)(`div`,{className:`max-w-xs space-y-4`,children:[(0,T.jsx)(`h3`,{className:`text-sm font-semibold text-text-secondary uppercase tracking-wide`,children:`Quick Stats`}),(0,T.jsxs)(`div`,{className:`space-y-3`,children:[(0,T.jsx)(S,{label:`Today's Revenue`,value:`$12,450`,trend:`up`,change:`+8.2%`,size:`sm`}),(0,T.jsx)(S,{label:`New Orders`,value:`34`,trend:`up`,change:`+12.0%`,size:`sm`}),(0,T.jsx)(S,{label:`Active Now`,value:`156`,trend:`neutral`,change:`0.0%`,size:`sm`})]})]})},q={name:`💼 Caso de Uso: Panel Ejecutivo de Revenue`,args:{label:`Metric`,value:`-`},render:()=>(0,T.jsxs)(`div`,{className:`space-y-6`,children:[(0,T.jsxs)(`div`,{className:`space-y-1`,children:[(0,T.jsx)(`p`,{className:`text-sm uppercase tracking-[0.25em] text-text-tertiary`,children:`Weekly Review`}),(0,T.jsx)(`h3`,{className:`text-2xl font-semibold text-text-primary`,children:`Revenue Pulse`})]}),(0,T.jsxs)(C,{columns:3,children:[(0,T.jsx)(S,{label:`Monthly Recurring Revenue`,value:`$1.4M`,change:`+6.3%`,trend:`up`,icon:(0,T.jsx)(i,{className:`w-5 h-5`}),variant:`elevated`,size:`lg`}),(0,T.jsx)(S,{label:`Enterprise Pipeline`,value:`$4.9M`,change:`+18.0%`,trend:`up`,icon:(0,T.jsx)(p,{className:`w-5 h-5`}),variant:`elevated`}),(0,T.jsx)(S,{label:`Net Revenue Retention`,value:`134%`,change:`+2.4 pts`,trend:`up`,icon:(0,T.jsx)(d,{className:`w-5 h-5`}),variant:`bordered`})]})]}),decorators:[e=>(0,T.jsx)(`div`,{className:`w-full max-w-5xl mx-auto`,children:(0,T.jsx)(e,{})})]},J={name:`📈 Caso de Uso: Tablero de Growth y Marketing`,args:{label:`Metric`,value:`-`},render:()=>(0,T.jsxs)(`div`,{className:`space-y-4`,children:[(0,T.jsxs)(`div`,{className:`space-y-1`,children:[(0,T.jsx)(`h3`,{className:`text-lg font-semibold text-text-primary`,children:`Acquisition Overview`}),(0,T.jsx)(`p`,{className:`text-sm text-text-secondary`,children:`Blend de campañas orgánicas, paid y referidos durante la última semana.`})]}),(0,T.jsxs)(C,{columns:4,children:[(0,T.jsx)(S,{label:`New Leads`,value:`8,932`,change:`+21.6%`,trend:`up`,icon:(0,T.jsx)(o,{className:`w-5 h-5`}),size:`md`,variant:`default`}),(0,T.jsx)(S,{label:`Paid CAC`,value:`$184`,change:`-7.2%`,trend:`down`,icon:(0,T.jsx)(i,{className:`w-5 h-5`}),size:`md`,variant:`bordered`}),(0,T.jsx)(S,{label:`Signup to Trial`,value:`42%`,change:`+3.1%`,trend:`up`,icon:(0,T.jsx)(a,{className:`w-5 h-5`}),size:`md`,variant:`elevated`}),(0,T.jsx)(S,{label:`Active Campaigns`,value:`18`,change:`+2`,trend:`neutral`,icon:(0,T.jsx)(m,{className:`w-5 h-5`}),size:`md`,variant:`bordered`})]})]}),decorators:[e=>(0,T.jsx)(`div`,{className:`w-full max-w-6xl mx-auto`,children:(0,T.jsx)(e,{})})]},Y={name:`🛡️ Caso de Uso: Operations Bridge`,args:{label:`Metric`,value:`-`},render:()=>(0,T.jsxs)(`div`,{className:`space-y-6 bg-surface-elevated/40 p-6 rounded-2xl`,children:[(0,T.jsxs)(`div`,{className:`space-y-1`,children:[(0,T.jsx)(`p`,{className:`text-sm font-medium text-text-secondary`,children:`Live SRE Feed`}),(0,T.jsx)(`h3`,{className:`text-xl font-semibold text-text-primary`,children:`Infra Critical Signals`})]}),(0,T.jsxs)(C,{columns:3,children:[(0,T.jsx)(S,{label:`Global Uptime`,value:`99.985%`,change:`+0.003%`,trend:`up`,icon:(0,T.jsx)(r,{className:`w-5 h-5`}),variant:`elevated`}),(0,T.jsx)(S,{label:`Active Incidents`,value:`2`,change:`-1`,trend:`down`,icon:(0,T.jsx)(l,{className:`w-5 h-5`}),variant:`bordered`}),(0,T.jsx)(S,{label:`Avg. Response Time`,value:`142 ms`,change:`-12 ms`,trend:`up`,icon:(0,T.jsx)(s,{className:`w-5 h-5`}),variant:`elevated`})]})]}),decorators:[e=>(0,T.jsx)(`div`,{className:`w-full max-w-4xl mx-auto`,children:(0,T.jsx)(e,{})})]},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Total Revenue',
    value: '$124,500'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Monthly Sales',
    value: '$45,280',
    trend: 'up',
    change: '+12.5%'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Bounce Rate',
    value: '32.4%',
    trend: 'down',
    change: '-8.2%'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Conversion Rate',
    value: '3.45%',
    trend: 'neutral',
    change: '0.0%'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Active Users',
    value: '2,543',
    icon: <Users className="w-5 h-5" />,
    trend: 'up',
    change: '+5.2%'
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Page Views',
    value: '15,234',
    size: 'sm',
    icon: <Eye className="w-4 h-4" />,
    trend: 'up',
    change: '+23.1%'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Total Orders',
    value: '1,249',
    size: 'md',
    icon: <ShoppingCart className="w-5 h-5" />,
    trend: 'up',
    change: '+18.3%'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Revenue',
    value: '$324,500',
    size: 'lg',
    icon: <DollarSign className="w-6 h-6" />,
    trend: 'up',
    change: '+15.7%'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Conversion Rate',
    value: '3.8%',
    variant: 'default',
    icon: <Target className="w-5 h-5" />,
    trend: 'up',
    change: '+0.3%'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Daily Active Users',
    value: '8,234',
    variant: 'elevated',
    icon: <Activity className="w-5 h-5" />,
    trend: 'up',
    change: '+12.5%'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Total Sales',
    value: '$67,890',
    variant: 'bordered',
    icon: <DollarSign className="w-5 h-5" />,
    trend: 'down',
    change: '-2.4%'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading Data',
    value: '$0',
    loading: true,
    icon: <DollarSign className="w-5 h-5" />
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <KPIGroup columns={2}>
            <KPIBlock label="Total Revenue" value="$324,500" icon={<DollarSign className="w-5 h-5" />} trend="up" change="+15.7%" variant="elevated" />
            <KPIBlock label="Active Users" value="8,234" icon={<Users className="w-5 h-5" />} trend="up" change="+12.5%" variant="elevated" />
        </KPIGroup>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <KPIGroup columns={3}>
            <KPIBlock label="Revenue" value="$124,500" icon={<DollarSign className="w-5 h-5" />} trend="up" change="+15.7%" variant="elevated" />
            <KPIBlock label="Orders" value="1,249" icon={<ShoppingCart className="w-5 h-5" />} trend="up" change="+18.3%" variant="elevated" />
            <KPIBlock label="Users" value="2,543" icon={<Users className="w-5 h-5" />} trend="up" change="+5.2%" variant="elevated" />
        </KPIGroup>
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <KPIGroup columns={3}>
            <KPIBlock label="Revenue" value="$124,500" icon={<DollarSign className="w-5 h-5" />} trend="up" change="+15.7%" variant="elevated" />
            <KPIBlock label="Bounce Rate" value="32.4%" icon={<Activity className="w-5 h-5" />} trend="down" change="-8.2%" variant="elevated" />
            <KPIBlock label="Conversion" value="3.45%" icon={<Target className="w-5 h-5" />} trend="neutral" change="0.0%" variant="elevated" />
        </KPIGroup>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <div className="max-w-md space-y-3">
            <KPIBlock label="Revenue" value="$124,500" trend="up" change="+15.7%" variant="bordered" size="sm" />
            <KPIBlock label="Orders" value="1,249" trend="up" change="+18.3%" variant="bordered" size="sm" />
            <KPIBlock label="Users" value="2,543" trend="up" change="+5.2%" variant="bordered" size="sm" />
        </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Metric',
    value: '-'
  },
  render: () => <KPIGroup columns={3}>
            <KPIBlock label="Revenue" value="$0" icon={<DollarSign className="w-5 h-5" />} loading variant="elevated" />
            <KPIBlock label="Orders" value="0" icon={<ShoppingCart className="w-5 h-5" />} loading variant="elevated" />
            <KPIBlock label="Users" value="0" icon={<Users className="w-5 h-5" />} loading variant="elevated" />
        </KPIGroup>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`WithTrendUp`,`WithTrendDown`,`WithTrendNeutral`,`WithIcon`,`SmallSize`,`MediumSize`,`LargeSize`,`DefaultVariant`,`ElevatedVariant`,`BorderedVariant`,`Loading`,`TwoColumnGrid`,`ThreeColumnGrid`,`FourColumnGrid`,`DashboardMetrics`,`MixedTrends`,`CompactDisplay`,`LoadingStates`,`SidebarMetrics`,`ExecutiveRevenuePanel`,`GrowthMarketingPulse`,`OperationsBridge`]}))();export{L as BorderedVariant,W as CompactDisplay,H as DashboardMetrics,D as Default,F as DefaultVariant,I as ElevatedVariant,q as ExecutiveRevenuePanel,V as FourColumnGrid,J as GrowthMarketingPulse,P as LargeSize,R as Loading,G as LoadingStates,N as MediumSize,U as MixedTrends,Y as OperationsBridge,K as SidebarMetrics,M as SmallSize,B as ThreeColumnGrid,z as TwoColumnGrid,j as WithIcon,k as WithTrendDown,A as WithTrendNeutral,O as WithTrendUp,X as __namedExportsOrder,E as default};