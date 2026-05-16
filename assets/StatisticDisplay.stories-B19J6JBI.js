import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-B_S8iqXg.js";import{Mn as r,Pn as i,Tt as a,b as o,ht as s,t as c,y as l}from"./lucide-react-D-LjNNxx.js";import{n as u,t as d}from"./utils-ijcE-ZHT.js";import{t as f}from"./jsx-runtime-DaLCRA3n.js";import{s as p,t as m}from"./es-BRhHMXe0.js";import{n as h,t as g}from"./Sparkline-BcrpyOpG.js";var _=e((()=>{h()})),v,y,b,x,S,C,w,T,E,D,O,k,A=e((()=>{v=t(n()),m(),u(),c(),_(),y=f(),b=p.div,x={sm:{label:`text-[11px]`,value:`text-2xl`,meta:`text-xs`,padding:`p-4`,gap:`space-y-3`,icon:`w-8 h-8`,sparkline:{width:100,height:32}},md:{label:`text-xs`,value:`text-4xl`,meta:`text-sm`,padding:`p-5`,gap:`space-y-4`,icon:`w-10 h-10`,sparkline:{width:120,height:38}},lg:{label:`text-sm`,value:`text-5xl`,meta:`text-base`,padding:`p-6`,gap:`space-y-5`,icon:`w-12 h-12`,sparkline:{width:140,height:44}}},S={card:`bg-surface-primary border border-border-primary rounded-2xl shadow-sm`,soft:`bg-surface-secondary/70 border border-border-secondary/60 rounded-2xl`,bordered:`bg-surface-primary border border-border-tertiary rounded-2xl`,minimal:`rounded-xl`,glass:`bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl`},C={blue:{color:`#2563eb`,fillColor:`rgba(37,99,235,0.12)`,text:`text-accent-blue`,chip:`bg-accent-blue/10 text-accent-blue`},green:{color:`#16a34a`,fillColor:`rgba(22,163,74,0.12)`,text:`text-status-success`,chip:`bg-status-success/10 text-status-success`},purple:{color:`#7c3aed`,fillColor:`rgba(124,58,237,0.12)`,text:`text-accent-purple`,chip:`bg-accent-purple/10 text-accent-purple`},orange:{color:`#ea580c`,fillColor:`rgba(234,88,12,0.12)`,text:`text-status-warning`,chip:`bg-status-warning/15 text-status-warning`},pink:{color:`#db2777`,fillColor:`rgba(219,39,119,0.12)`,text:`text-accent-pink`,chip:`bg-accent-pink/15 text-accent-pink`}},w={up:{icon:l,text:`text-status-success`,bg:`bg-status-success/10`,trend:`up`},down:{icon:o,text:`text-status-error`,bg:`bg-status-error/10`,trend:`down`},neutral:{icon:a,text:`text-text-tertiary`,bg:`bg-surface-secondary/80`,trend:`neutral`}},T=({goal:e})=>{if(!e)return null;let t=Math.min(Math.max(e.progress??0,0),1);return(0,y.jsxs)(`div`,{className:`mt-3`,children:[(e.label||e.value)&&(0,y.jsxs)(`div`,{className:`flex items-center justify-between text-[11px] text-text-tertiary mb-1`,children:[(0,y.jsx)(`span`,{children:e.label??`Target`}),(0,y.jsx)(`span`,{children:e.value})]}),(0,y.jsx)(`div`,{className:`h-1.5 w-full rounded-full bg-surface-secondary overflow-hidden`,children:(0,y.jsx)(`div`,{className:`h-full rounded-full bg-accent-blue transition-all`,style:{width:`${t*100}%`}})})]})},E={1:`grid-cols-1`,2:`grid-cols-1 md:grid-cols-2`,3:`grid-cols-1 md:grid-cols-2 xl:grid-cols-3`,4:`grid-cols-1 md:grid-cols-2 xl:grid-cols-4`},D={sm:`gap-3`,md:`gap-4`,lg:`gap-6`},O=(0,v.forwardRef)(({metrics:e,variant:t=`card`,size:n=`md`,columns:r=3,animate:i=!0,gap:a=`md`,className:o,...s},c)=>(0,y.jsx)(`div`,{ref:c,className:d(`grid`,E[r],D[a],o),...s,children:e.map((e,r)=>{let a=e.trend??`neutral`,o=w[a].icon,s=e.sparklineAccent??`blue`,c=x[n];return(0,y.jsxs)(b,{className:d(`relative overflow-hidden group transition-all duration-300`,S[t],c.padding,e.subtle&&`bg-surface-secondary/60`,`flex flex-col`),whileHover:{y:-4,scale:1.01},initial:i?{opacity:0,y:15}:!1,animate:i?{opacity:1,y:0}:void 0,transition:{delay:i?r*.08:0,duration:.4,ease:[.23,1,.32,1]},children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,y.jsx)(`span`,{className:d(`uppercase tracking-widest text-text-tertiary font-bold`,c.label),children:e.label}),e.icon&&(0,y.jsx)(`div`,{className:d(`flex items-center justify-center rounded-xl bg-white/5 border border-white/5 text-text-secondary group-hover:text-text-primary transition-colors`,c.icon),children:e.icon})]}),(0,y.jsxs)(`div`,{className:`flex flex-col gap-1 z-10`,children:[(0,y.jsx)(`h3`,{className:d(`font-bold text-text-primary tracking-tight tabular-nums`,c.value),children:e.value}),(e.change||e.trend)&&(0,y.jsx)(`div`,{className:`flex items-center gap-2 mt-0.5`,children:(0,y.jsxs)(`div`,{className:d(`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-colors duration-300`,w[a].bg,w[a].text),children:[(0,y.jsx)(o,{className:`w-3 h-3 stroke-[3]`}),e.change||(a===`up`?`Increase`:a===`down`?`Decrease`:`Stable`)]})})]}),e.description&&(0,y.jsx)(`p`,{className:d(`text-text-tertiary mt-3 leading-relaxed max-w-[85%] font-medium opacity-70 group-hover:opacity-100 transition-opacity`,c.meta),children:e.description}),e.sparkline&&(0,y.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 h-16 pointer-events-none opacity-40 group-hover:opacity-70 transition-all duration-500 scale-105 group-hover:scale-100 origin-bottom`,children:(0,y.jsx)(g,{data:e.sparkline,width:400,height:64,color:C[s].color,fillColor:C[s].fillColor,showArea:!0,showLastDot:!1,className:`w-full h-full`})}),(0,y.jsx)(`div`,{className:`mt-auto pt-4`,children:(0,y.jsx)(T,{goal:e.goal})}),(0,y.jsx)(`div`,{className:`absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full blur-[80px] opacity-0 group-hover:opacity-[0.07] transition-opacity duration-700 pointer-events-none`,style:{backgroundColor:C[s].color}})]},e.id??r)})})),O.displayName=`StatisticDisplay`,k=(0,v.forwardRef)(({label:e,value:t,change:n,trend:r,description:i,badge:a,sparkline:o,sparklineAccent:s=`blue`,size:c=`md`,progress:l,className:u,...f},p)=>{let m=r??`neutral`,h=w[m].icon;return(0,y.jsxs)(b,{ref:p,className:d(`w-full rounded-3xl bg-surface-primary border border-border-primary shadow-[0_30px_80px_-50px_rgba(15,23,42,0.65)] p-6 md:p-8 relative overflow-hidden`,u),initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},transition:{duration:.3,ease:[.16,1,.3,1]},...f,children:[(0,y.jsx)(`div`,{className:`absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-transparent pointer-events-none`}),(0,y.jsxs)(`div`,{className:`relative flex flex-col gap-4`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between gap-3`,children:[(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`p`,{className:d(`uppercase tracking-[0.18em] text-text-tertiary font-semibold`,x[c].label),children:e}),i&&(0,y.jsx)(`p`,{className:d(`text-text-secondary mt-1`,x[c].meta),children:i})]}),a&&(0,y.jsx)(`div`,{className:`text-xs font-semibold text-text-secondary`,children:a})]}),(0,y.jsxs)(`div`,{className:`flex flex-wrap items-end gap-3`,children:[(0,y.jsx)(`span`,{className:d(`font-semibold text-text-primary tracking-tight leading-none`,x[c].value),children:t}),(n||r)&&h&&(0,y.jsxs)(`span`,{className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-secondary/80 text-[11px] font-semibold`,children:[(0,y.jsx)(h,{className:d(`w-4 h-4`,w[m].text)}),n&&(0,y.jsx)(`span`,{className:w[m].text,children:n})]})]}),o&&(0,y.jsx)(`div`,{className:`mt-2`,children:(0,y.jsx)(g,{data:o,width:160,height:64,color:C[s].color,fillColor:C[s].fillColor,showArea:!0})}),typeof l==`number`&&(0,y.jsxs)(`div`,{className:`mt-2`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between text-[11px] text-text-tertiary mb-1`,children:[(0,y.jsx)(`span`,{children:`Progress`}),(0,y.jsxs)(`span`,{children:[Math.round(l*100),`%`]})]}),(0,y.jsx)(`div`,{className:`h-1.5 bg-surface-secondary rounded-full overflow-hidden`,children:(0,y.jsx)(`div`,{className:`h-full bg-accent-blue rounded-full`,style:{width:`${Math.min(Math.max(l,0),1)*100}%`}})})]})]})]})}),k.displayName=`StatisticHighlight`,O.__docgenInfo={description:``,methods:[],displayName:`StatisticDisplay`,props:{metrics:{required:!0,tsType:{name:`Array`,elements:[{name:`StatisticMetric`}],raw:`StatisticMetric[]`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'card' | 'soft' | 'bordered' | 'minimal' | 'glass'`,elements:[{name:`literal`,value:`'card'`},{name:`literal`,value:`'soft'`},{name:`literal`,value:`'bordered'`},{name:`literal`,value:`'minimal'`},{name:`literal`,value:`'glass'`}]},description:``,defaultValue:{value:`'card'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},columns:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`}]},description:``,defaultValue:{value:`3`,computed:!1}},animate:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},gap:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}}}},k.__docgenInfo={description:``,methods:[],displayName:`StatisticHighlight`,props:{label:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},value:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},change:{required:!1,tsType:{name:`string`},description:``},trend:{required:!1,tsType:{name:`union`,raw:`'up' | 'down' | 'neutral'`,elements:[{name:`literal`,value:`'up'`},{name:`literal`,value:`'down'`},{name:`literal`,value:`'neutral'`}]},description:``},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},badge:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},sparkline:{required:!1,tsType:{name:`Array`,elements:[{name:`number`}],raw:`number[]`},description:``},sparklineAccent:{required:!1,tsType:{name:`union`,raw:`'blue' | 'green' | 'purple' | 'orange' | 'pink'`,elements:[{name:`literal`,value:`'blue'`},{name:`literal`,value:`'green'`},{name:`literal`,value:`'purple'`},{name:`literal`,value:`'orange'`},{name:`literal`,value:`'pink'`}]},description:``,defaultValue:{value:`'blue'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},progress:{required:!1,tsType:{name:`number`},description:``}}}})),j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{A(),c(),j=f(),M={title:`Data Display/StatisticDisplay`,component:O,tags:[`autodocs`]},N={args:{metrics:[{label:`Total Balance`,value:`$124,532.80`,change:`+3.2%`,trend:`up`,icon:(0,j.jsx)(r,{size:20})},{label:`Monthly Spending`,value:`$4,230.50`,change:`+8.1%`,trend:`up`,icon:(0,j.jsx)(i,{size:20})},{label:`Savings Rate`,value:`32.5%`,change:`+5.2%`,trend:`up`,icon:(0,j.jsx)(s,{size:20})},{label:`Investments`,value:`$78,200.00`,change:`+12.4%`,trend:`up`,icon:(0,j.jsx)(l,{size:20})}],columns:4}},P={args:{metrics:[{label:`Portfolio Value`,value:`$245,800.50`,change:`+8.3%`,trend:`up`},{label:`Daily P&L`,value:`+$1,234.00`,change:`+2.1%`,trend:`up`}],columns:2}},F={args:{metrics:[{label:`AAPL`,value:`$178.50`,change:`+1.2%`,trend:`up`,sparkline:[170,172,175,174,176,178,177,178.5],sparklineAccent:`green`},{label:`TSLA`,value:`$245.00`,change:`-0.8%`,trend:`down`,sparkline:[250,248,247,245,246,244,245,245],sparklineAccent:`pink`},{label:`BTC`,value:`$46,820`,change:`+5.4%`,trend:`up`,sparkline:[44e3,44500,45e3,44800,45500,46200,46500,46820],sparklineAccent:`orange`},{label:`S&P 500`,value:`5,234`,change:`+0.6%`,trend:`up`,sparkline:[5200,5210,5220,5215,5225,5230,5232,5234],sparklineAccent:`blue`}],columns:4}},I={args:{metrics:[{label:`Emergency Fund`,value:`$8,500`,target:`$10,000`,goal:{label:`Progress`,value:`85%`,progress:.85}},{label:`Vacation Fund`,value:`$4,250`,target:`$10,000`,goal:{label:`Progress`,value:`42.5%`,progress:.425}},{label:`Retirement`,value:`$125,000`,target:`$500,000`,goal:{label:`Progress`,value:`25%`,progress:.25}}],columns:3,variant:`card`}},L={args:{metrics:[{label:`Balance`,value:`$12,450`},{label:`Income`,value:`$8,230`,change:`+12%`,trend:`up`},{label:`Expenses`,value:`$3,780`,change:`-5%`,trend:`down`}],variant:`soft`,columns:3}},R={args:{metrics:[{label:`Active Cards`,value:`3`,description:`2 debit, 1 credit`},{label:`Pending Transactions`,value:`5`,description:`$245.80 total`},{label:`Monthly Budget`,value:`78%`,description:`$3,900 of $5,000 used`}],variant:`bordered`,columns:3}},z={args:{metrics:[{label:`YoY Growth`,value:`+18.5%`,change:`+5.2pp`,trend:`up`},{label:`Net Worth`,value:`$345,000`,change:`+$22,000`,trend:`up`}],variant:`minimal`,columns:2}},B={args:{metrics:[{label:`Net Worth`,value:`$456,780`,change:`+$12,340`,trend:`up`,description:`Updated 5m ago`,badge:`Premium`}],columns:1}},V={parameters:{themes:{themeOverride:`dark`}},args:{metrics:[{label:`Portfolio`,value:`$245,800`,change:`+8.3%`,trend:`up`},{label:`Cash`,value:`$52,400`,change:`-2.1%`,trend:`down`},{label:`Crypto`,value:`$18,920`,change:`+15.4%`,trend:`up`}],columns:3}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'Total Balance',
      value: '$124,532.80',
      change: '+3.2%',
      trend: 'up',
      icon: <DollarSign size={20} />
    }, {
      label: 'Monthly Spending',
      value: '$4,230.50',
      change: '+8.1%',
      trend: 'up',
      icon: <CreditCard size={20} />
    }, {
      label: 'Savings Rate',
      value: '32.5%',
      change: '+5.2%',
      trend: 'up',
      icon: <PiggyBank size={20} />
    }, {
      label: 'Investments',
      value: '$78,200.00',
      change: '+12.4%',
      trend: 'up',
      icon: <TrendingUp size={20} />
    }],
    columns: 4
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'Portfolio Value',
      value: '$245,800.50',
      change: '+8.3%',
      trend: 'up'
    }, {
      label: 'Daily P&L',
      value: '+$1,234.00',
      change: '+2.1%',
      trend: 'up'
    }],
    columns: 2
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'AAPL',
      value: '$178.50',
      change: '+1.2%',
      trend: 'up',
      sparkline: [170, 172, 175, 174, 176, 178, 177, 178.5],
      sparklineAccent: 'green'
    }, {
      label: 'TSLA',
      value: '$245.00',
      change: '-0.8%',
      trend: 'down',
      sparkline: [250, 248, 247, 245, 246, 244, 245, 245],
      sparklineAccent: 'pink'
    }, {
      label: 'BTC',
      value: '$46,820',
      change: '+5.4%',
      trend: 'up',
      sparkline: [44000, 44500, 45000, 44800, 45500, 46200, 46500, 46820],
      sparklineAccent: 'orange'
    }, {
      label: 'S&P 500',
      value: '5,234',
      change: '+0.6%',
      trend: 'up',
      sparkline: [5200, 5210, 5220, 5215, 5225, 5230, 5232, 5234],
      sparklineAccent: 'blue'
    }],
    columns: 4
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'Emergency Fund',
      value: '$8,500',
      target: '$10,000',
      goal: {
        label: 'Progress',
        value: '85%',
        progress: 0.85
      }
    }, {
      label: 'Vacation Fund',
      value: '$4,250',
      target: '$10,000',
      goal: {
        label: 'Progress',
        value: '42.5%',
        progress: 0.425
      }
    }, {
      label: 'Retirement',
      value: '$125,000',
      target: '$500,000',
      goal: {
        label: 'Progress',
        value: '25%',
        progress: 0.25
      }
    }],
    columns: 3,
    variant: 'card'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'Balance',
      value: '$12,450'
    }, {
      label: 'Income',
      value: '$8,230',
      change: '+12%',
      trend: 'up'
    }, {
      label: 'Expenses',
      value: '$3,780',
      change: '-5%',
      trend: 'down'
    }],
    variant: 'soft',
    columns: 3
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'Active Cards',
      value: '3',
      description: '2 debit, 1 credit'
    }, {
      label: 'Pending Transactions',
      value: '5',
      description: '$245.80 total'
    }, {
      label: 'Monthly Budget',
      value: '78%',
      description: '$3,900 of $5,000 used'
    }],
    variant: 'bordered',
    columns: 3
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'YoY Growth',
      value: '+18.5%',
      change: '+5.2pp',
      trend: 'up'
    }, {
      label: 'Net Worth',
      value: '$345,000',
      change: '+$22,000',
      trend: 'up'
    }],
    variant: 'minimal',
    columns: 2
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: [{
      label: 'Net Worth',
      value: '$456,780',
      change: '+$12,340',
      trend: 'up',
      description: 'Updated 5m ago',
      badge: 'Premium'
    }],
    columns: 1
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    metrics: [{
      label: 'Portfolio',
      value: '$245,800',
      change: '+8.3%',
      trend: 'up'
    }, {
      label: 'Cash',
      value: '$52,400',
      change: '-2.1%',
      trend: 'down'
    }, {
      label: 'Crypto',
      value: '$18,920',
      change: '+15.4%',
      trend: 'up'
    }],
    columns: 3
  }
}`,...V.parameters?.docs?.source}}},H=[`Default`,`TwoColumns`,`WithSparklines`,`WithGoals`,`SoftVariant`,`BorderedVariant`,`MinimalVariant`,`SingleStat`,`DarkMode`]}))();export{R as BorderedVariant,V as DarkMode,N as Default,z as MinimalVariant,B as SingleStat,L as SoftVariant,P as TwoColumns,I as WithGoals,F as WithSparklines,H as __namedExportsOrder,M as default};