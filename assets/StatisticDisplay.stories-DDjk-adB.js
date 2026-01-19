import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as O}from"./iframe-vYzePaRW.js";import{c as r}from"./utils-CDN07tui.js";import{S as H}from"./Sparkline-DpKBg7V6.js";import{M as W}from"./minus-RtFOX2Ge.js";import{T as Q}from"./trending-down-CnPrvRGZ.js";import{T as I}from"./trending-up-wuFQ80ia.js";import{m as F}from"./proxy-DMGrdN83.js";import{D as Y,T as V}from"./target-2-0dm2VK.js";import{S as J}from"./shopping-cart-86AmvOZ-.js";import{U as z}from"./users-Csk4Pzas.js";import{A as G}from"./activity-CLTsJb0R.js";import{C as _}from"./cpu-D6BOE38I.js";import{S as L}from"./server-Dn5fyLSA.js";import{G as P}from"./globe-jchjgPP1.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Ckxz52bH.js";const B=F.div,n={sm:{label:"text-[11px]",value:"text-2xl",meta:"text-xs",padding:"p-4",gap:"space-y-3",icon:"w-8 h-8",sparkline:{width:100,height:32}},md:{label:"text-xs",value:"text-4xl",meta:"text-sm",padding:"p-5",gap:"space-y-4",icon:"w-10 h-10",sparkline:{width:120,height:38}},lg:{label:"text-sm",value:"text-5xl",meta:"text-base",padding:"p-6",gap:"space-y-5",icon:"w-12 h-12",sparkline:{width:140,height:44}}},X={card:"bg-surface-primary border border-border-primary rounded-2xl shadow-sm",soft:"bg-surface-secondary/70 border border-border-secondary/60 rounded-2xl",bordered:"bg-surface-primary border border-border-tertiary rounded-2xl",minimal:"rounded-xl",glass:"bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl"},q={blue:{color:"#2563eb",fillColor:"rgba(37,99,235,0.12)",text:"text-accent-blue",chip:"bg-accent-blue/10 text-accent-blue"},green:{color:"#16a34a",fillColor:"rgba(22,163,74,0.12)",text:"text-status-success",chip:"bg-status-success/10 text-status-success"},purple:{color:"#7c3aed",fillColor:"rgba(124,58,237,0.12)",text:"text-accent-purple",chip:"bg-accent-purple/10 text-accent-purple"},orange:{color:"#ea580c",fillColor:"rgba(234,88,12,0.12)",text:"text-status-warning",chip:"bg-status-warning/15 text-status-warning"},pink:{color:"#db2777",fillColor:"rgba(219,39,119,0.12)",text:"text-accent-pink",chip:"bg-accent-pink/15 text-accent-pink"}},i={up:{icon:I,text:"text-status-success",bg:"bg-status-success/10",trend:"up"},down:{icon:Q,text:"text-status-error",bg:"bg-status-error/10",trend:"down"},neutral:{icon:W,text:"text-text-tertiary",bg:"bg-surface-secondary/80",trend:"neutral"}},Z=({goal:s})=>{if(!s)return null;const u=Math.min(Math.max(s.progress??0,0),1);return e.jsxs("div",{className:"mt-3",children:[(s.label||s.value)&&e.jsxs("div",{className:"flex items-center justify-between text-[11px] text-text-tertiary mb-1",children:[e.jsx("span",{children:s.label??"Target"}),e.jsx("span",{children:s.value})]}),e.jsx("div",{className:"h-1.5 w-full rounded-full bg-surface-secondary overflow-hidden",children:e.jsx("div",{className:"h-full rounded-full bg-accent-blue transition-all",style:{width:`${u*100}%`}})})]})},ee={1:"grid-cols-1",2:"grid-cols-1 md:grid-cols-2",3:"grid-cols-1 md:grid-cols-2 xl:grid-cols-3",4:"grid-cols-1 md:grid-cols-2 xl:grid-cols-4"},ae={sm:"gap-3",md:"gap-4",lg:"gap-6"},l=O.forwardRef(({metrics:s,variant:u="card",size:t="md",columns:g=3,animate:m=!0,gap:v="md",className:h,...f},x)=>e.jsx("div",{ref:x,className:r("grid",ee[g],ae[v],h),...f,children:s.map((a,b)=>{const o=a.trend??"neutral",U=i[o].icon,p=a.sparklineAccent??"blue";return e.jsxs(B,{className:r("relative overflow-hidden group",X[u],n[t].padding,n[t].gap,a.subtle&&"bg-surface-secondary/60"),initial:m?{opacity:0,y:12}:!1,animate:m?{opacity:1,y:0}:void 0,transition:{delay:m?b*.05:0,duration:.22,ease:[.16,1,.3,1]},children:[a.badge&&e.jsx("div",{className:"absolute top-4 right-4 text-xs font-semibold text-text-secondary",children:a.badge}),e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{className:"min-w-0",children:[e.jsx("p",{className:r("uppercase tracking-[0.18em] text-text-tertiary font-semibold mb-1",n[t].label),children:a.label}),a.description&&e.jsx("p",{className:r("text-text-secondary leading-relaxed",n[t].meta),children:a.description})]}),a.icon&&e.jsx("div",{className:r("flex items-center justify-center rounded-xl bg-surface-secondary/70 text-text-secondary",n[t].icon),children:a.icon})]}),e.jsxs("div",{className:"flex items-baseline gap-2 mt-2",children:[e.jsx("span",{className:r("font-semibold text-text-primary tracking-tight",n[t].value),children:a.value}),a.target&&e.jsx("span",{className:"text-text-tertiary text-xs font-medium",children:a.target})]}),(a.change||a.trend)&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:r("inline-flex items-center gap-1 px-2 py-1 rounded-full text-[11px] font-semibold",i[o].bg),children:[e.jsx(U,{className:r("w-3.5 h-3.5",i[o].text)}),a.change&&e.jsx("span",{className:r(i[o].text),children:a.change})]}),a.goal?.value&&e.jsxs("span",{className:"text-text-tertiary text-[11px]",children:["vs ",a.goal.value]})]}),a.sparkline&&e.jsx("div",{className:"mt-3",children:e.jsx(H,{data:a.sparkline,width:n[t].sparkline.width,height:n[t].sparkline.height,color:q[p].color,fillColor:q[p].fillColor,showArea:!0,trend:i[o]?.trend})}),e.jsx(Z,{goal:a.goal})]},a.id??b)})}));l.displayName="StatisticDisplay";const d=O.forwardRef(({label:s,value:u,change:t,trend:g,description:m,badge:v,sparkline:h,sparklineAccent:f="blue",size:x="md",progress:a,className:b,...o},U)=>{const p=g??"neutral",E=i[p].icon;return e.jsxs(B,{ref:U,className:r("w-full rounded-3xl bg-surface-primary border border-border-primary shadow-[0_30px_80px_-50px_rgba(15,23,42,0.65)] p-6 md:p-8 relative overflow-hidden",b),initial:{opacity:0,scale:.98},animate:{opacity:1,scale:1},transition:{duration:.3,ease:[.16,1,.3,1]},...o,children:[e.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-transparent pointer-events-none"}),e.jsxs("div",{className:"relative flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:r("uppercase tracking-[0.18em] text-text-tertiary font-semibold",n[x].label),children:s}),m&&e.jsx("p",{className:r("text-text-secondary mt-1",n[x].meta),children:m})]}),v&&e.jsx("div",{className:"text-xs font-semibold text-text-secondary",children:v})]}),e.jsxs("div",{className:"flex flex-wrap items-end gap-3",children:[e.jsx("span",{className:r("font-semibold text-text-primary tracking-tight leading-none",n[x].value),children:u}),(t||g)&&E&&e.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-secondary/80 text-[11px] font-semibold",children:[e.jsx(E,{className:r("w-4 h-4",i[p].text)}),t&&e.jsx("span",{className:i[p].text,children:t})]})]}),h&&e.jsx("div",{className:"mt-2",children:e.jsx(H,{data:h,width:160,height:64,color:q[f].color,fillColor:q[f].fillColor,showArea:!0})}),typeof a=="number"&&e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"flex items-center justify-between text-[11px] text-text-tertiary mb-1",children:[e.jsx("span",{children:"Progress"}),e.jsxs("span",{children:[Math.round(a*100),"%"]})]}),e.jsx("div",{className:"h-1.5 bg-surface-secondary rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-accent-blue rounded-full",style:{width:`${Math.min(Math.max(a,0),1)*100}%`}})})]})]})]})});d.displayName="StatisticHighlight";l.__docgenInfo={description:"",methods:[],displayName:"StatisticDisplay",props:{metrics:{required:!0,tsType:{name:"Array",elements:[{name:"StatisticMetric"}],raw:"StatisticMetric[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'card' | 'soft' | 'bordered' | 'minimal' | 'glass'",elements:[{name:"literal",value:"'card'"},{name:"literal",value:"'soft'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'minimal'"},{name:"literal",value:"'glass'"}]},description:"",defaultValue:{value:"'card'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"}]},description:"",defaultValue:{value:"3",computed:!1}},animate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};d.__docgenInfo={description:"",methods:[],displayName:"StatisticHighlight",props:{label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},value:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},change:{required:!1,tsType:{name:"string"},description:""},trend:{required:!1,tsType:{name:"union",raw:"'up' | 'down' | 'neutral'",elements:[{name:"literal",value:"'up'"},{name:"literal",value:"'down'"},{name:"literal",value:"'neutral'"}]},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},badge:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},sparkline:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},sparklineAccent:{required:!1,tsType:{name:"union",raw:"'blue' | 'green' | 'purple' | 'orange' | 'pink'",elements:[{name:"literal",value:"'blue'"},{name:"literal",value:"'green'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'pink'"}]},description:"",defaultValue:{value:"'blue'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},progress:{required:!1,tsType:{name:"number"},description:""}}};const c=[{id:"revenue",label:"Revenue",value:"$248K",description:"Últimos 30 días",change:"+12.4%",trend:"up",icon:e.jsx(Y,{className:"w-5 h-5"}),target:"Goal: $260K",sparkline:[180,190,205,198,214,220,248],sparklineAccent:"blue",goal:{label:"Q1 Goal",value:"$260K",progress:.82}},{id:"orders",label:"Orders",value:"1,982",description:"Pedidos completados",change:"+6.1%",trend:"up",icon:e.jsx(J,{className:"w-5 h-5"}),sparkline:[1200,1250,1300,1400,1500,1700,1982],sparklineAccent:"green",goal:{label:"Goal",value:"2,100",progress:.76}},{id:"users",label:"Active Users",value:"28,430",description:"Usuarios activos mensuales",change:"+3.4%",trend:"up",icon:e.jsx(z,{className:"w-5 h-5"}),sparkline:[22e3,23e3,24e3,25e3,26e3,27500,28430],sparklineAccent:"purple",goal:{label:"Target",value:"30K",progress:.71}}],D=[{id:"conversion",label:"Conversion Rate",value:"3.42%",description:"Tasa promedio del sitio",change:"+0.2%",trend:"up",icon:e.jsx(V,{className:"w-5 h-5"}),sparkline:[2.9,3,3.2,3.1,3.25,3.35,3.42],sparklineAccent:"pink"},{id:"bounce",label:"Bounce Rate",value:"38.1%",description:"Visitantes que abandonan",change:"-4.5%",trend:"down",icon:e.jsx(G,{className:"w-5 h-5"}),sparkline:[45,44,43,41,40,39,38],sparklineAccent:"orange"},{id:"cpu",label:"Avg. CPU",value:"42%",description:"Cargas del cluster M3",change:"-1.2%",trend:"down",icon:e.jsx(_,{className:"w-5 h-5"}),sparkline:[60,55,50,48,46,44,42],sparklineAccent:"green"},{id:"latency",label:"P95 Latency",value:"212 ms",description:"Región us-west",change:"+8 ms",trend:"neutral",icon:e.jsx(L,{className:"w-5 h-5"}),sparkline:[180,190,185,200,205,207,212],sparklineAccent:"blue"}],K=[{id:"visits",label:"Sessions",value:"182K",description:"Visitantes únicos",change:"+5.3%",trend:"up",icon:e.jsx(G,{className:"w-5 h-5"}),sparkline:[150,155,160,168,174,182],sparklineAccent:"blue"},{id:"signup",label:"Signups",value:"42,981",description:"Nuevos registros",change:"+11.8%",trend:"up",icon:e.jsx(z,{className:"w-5 h-5"}),sparkline:[30,33,35,38,41,43],sparklineAccent:"green"},{id:"trial",label:"Trials to Paid",value:"68%",description:"Conversión a pago",change:"+2.1%",trend:"up",icon:e.jsx(V,{className:"w-5 h-5"}),sparkline:[55,58,60,63,66,68],sparklineAccent:"purple"}],$=[{id:"uptime",label:"Global Uptime",value:"99.982%",description:"Últimas 24h",change:"+0.004%",trend:"up",icon:e.jsx(L,{className:"w-5 h-5"}),sparkline:[99.93,99.95,99.96,99.97,99.98,99.982],sparklineAccent:"green"},{id:"traffic",label:"Global Traffic",value:"14.2M req/min",description:"Pico actual",change:"+1.8%",trend:"up",icon:e.jsx(P,{className:"w-5 h-5"}),sparkline:[11,12,12.5,13,13.5,14.2],sparklineAccent:"blue"},{id:"alerts",label:"Active Alerts",value:"4",description:"Incidentes monitoreados",change:"-2",trend:"down",icon:e.jsx(G,{className:"w-5 h-5"}),sparkline:[9,8,7,6,5,4],sparklineAccent:"orange"},{id:"latency-global",label:"Global Latency",value:"182 ms",description:"P95 en todas las regiones",change:"-12 ms",trend:"down",icon:e.jsx(_,{className:"w-5 h-5"}),sparkline:[210,205,198,194,188,182],sparklineAccent:"purple"}],be={title:"Data Display/StatisticDisplay",component:l,subcomponents:{StatisticHighlight:d},parameters:{layout:"padded"},tags:[]},y={args:{metrics:c,columns:3,variant:"card",size:"md"}},w={args:{metrics:c,columns:3,variant:"soft",size:"md"}},N={args:{metrics:c,columns:1,variant:"minimal",size:"lg"}},j={args:{metrics:D,columns:2,variant:"bordered",size:"sm",gap:"sm"}},k={args:{metrics:D,columns:4,variant:"glass",size:"md"}},S={name:"✨ Caso de Uso: Resumen Ejecutivo con Highlight",args:{metrics:c},render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsx(d,{label:"Net Revenue",value:"$428,500",description:"Vs. last quarter",change:"+18.2%",trend:"up",badge:e.jsx("span",{className:"px-2 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold",children:"Live"}),sparkline:[320,340,360,370,390,410,428],progress:.86}),e.jsx(l,{metrics:c,columns:3,variant:"card"})]}),decorators:[s=>e.jsx("div",{className:"w-full max-w-5xl mx-auto",children:e.jsx(s,{})})]},A={name:"📡 Caso de Uso: Board de Analítica en Tiempo Real",args:{metrics:D},render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-text-primary",children:"Realtime Overview"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Supervisión continua del sistema en múltiples regiones y servicios clave."})]}),e.jsx(l,{metrics:D,columns:4,variant:"soft",size:"sm"})]}),decorators:[s=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(s,{})})]},C={name:"🌍 Caso de Uso: Despliegue Internacional",args:{metrics:c},render:()=>e.jsx(l,{metrics:[{id:"emea",label:"EMEA",value:"$124K",description:"Ingresos región EMEA",change:"+9.1%",trend:"up",icon:e.jsx(P,{className:"w-5 h-5"}),sparkline:[80,82,90,94,102,110,124],sparklineAccent:"purple"},{id:"latam",label:"LATAM",value:"$64K",description:"Lanzamiento Beta",change:"+21.4%",trend:"up",icon:e.jsx(I,{className:"w-5 h-5"}),sparkline:[28,30,35,40,47,54,64],sparklineAccent:"green"},{id:"apac",label:"APAC",value:"$102K",description:"Mercados consolidados",change:"+4.2%",trend:"up",icon:e.jsx(P,{className:"w-5 h-5"}),sparkline:[70,72,75,80,88,95,102],sparklineAccent:"blue"}],columns:3,variant:"card",size:"md"}),decorators:[s=>e.jsx("div",{className:"w-full max-w-4xl mx-auto",children:e.jsx(s,{})})]},M={name:"🌀 Caso de Uso: Funnel de Producto SaaS",args:{metrics:K},render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(d,{label:"ARR",value:"$3.8M",description:"Pipeline proyectado Q3",change:"+24.6%",trend:"up",sparkline:[2.2,2.4,2.6,2.9,3.2,3.8],progress:.64}),e.jsx(l,{metrics:K,columns:3,variant:"soft"})]}),decorators:[s=>e.jsx("div",{className:"w-full max-w-5xl mx-auto",children:e.jsx(s,{})})]},R={name:"🛠️ Caso de Uso: Operations War Room",args:{metrics:$},render:()=>e.jsxs("div",{className:"space-y-5",children:[e.jsx("h3",{className:"text-base font-semibold text-text-secondary uppercase tracking-[0.2em]",children:"Infra Health"}),e.jsx(l,{metrics:$,columns:4,variant:"glass",size:"sm"})]}),decorators:[s=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(s,{})})]},T={name:"📊 Caso de Uso: Panel de OKRs Trimestrales",args:{metrics:c},render:()=>e.jsxs("div",{className:"grid gap-6 lg:grid-cols-[1.3fr_0.7fr]",children:[e.jsx(l,{metrics:c,columns:3,variant:"card",animate:!1}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(d,{label:"Gross Margin",value:"72.5%",description:"YOY +3.4 pts",change:"+1.2%",trend:"up",sparkline:[66,67,68,69.5,71,72.5],progress:.78}),e.jsx(d,{label:"Net Retention",value:"131%",description:"Enterprise cohort",change:"+4%",trend:"up",sparkline:[118,120,123,125,129,131],progress:.81})]})]}),decorators:[s=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(s,{})})]};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: overviewMetrics,
    columns: 3,
    variant: 'card',
    size: 'md'
  }
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: overviewMetrics,
    columns: 3,
    variant: 'soft',
    size: 'md'
  }
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: overviewMetrics,
    columns: 1,
    variant: 'minimal',
    size: 'lg'
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: performanceMetrics,
    columns: 2,
    variant: 'bordered',
    size: 'sm',
    gap: 'sm'
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    metrics: performanceMetrics,
    columns: 4,
    variant: 'glass',
    size: 'md'
  }
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '✨ Caso de Uso: Resumen Ejecutivo con Highlight',
  args: {
    metrics: overviewMetrics
  },
  render: () => <div className="space-y-8">
            <StatisticHighlight label="Net Revenue" value="$428,500" description="Vs. last quarter" change="+18.2%" trend="up" badge={<span className="px-2 py-1 rounded-full bg-accent-blue/10 text-accent-blue text-xs font-semibold">Live</span>} sparkline={[320, 340, 360, 370, 390, 410, 428]} progress={0.86} />
            <StatisticDisplay metrics={overviewMetrics} columns={3} variant="card" />
        </div>,
  decorators: [StoryComponent => <div className="w-full max-w-5xl mx-auto">
                <StoryComponent />
            </div>]
}`,...S.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '📡 Caso de Uso: Board de Analítica en Tiempo Real',
  args: {
    metrics: performanceMetrics
  },
  render: () => <div className="space-y-6">
            <div className="flex flex-col gap-4">
                <h3 className="text-lg font-semibold text-text-primary">Realtime Overview</h3>
                <p className="text-sm text-text-secondary">
                    Supervisión continua del sistema en múltiples regiones y servicios clave.
                </p>
            </div>
            <StatisticDisplay metrics={performanceMetrics} columns={4} variant="soft" size="sm" />
        </div>,
  decorators: [StoryComponent => <div className="w-full max-w-6xl mx-auto">
                <StoryComponent />
            </div>]
}`,...A.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '🌍 Caso de Uso: Despliegue Internacional',
  args: {
    metrics: overviewMetrics
  },
  render: () => <StatisticDisplay metrics={[{
    id: 'emea',
    label: 'EMEA',
    value: '$124K',
    description: 'Ingresos región EMEA',
    change: '+9.1%',
    trend: 'up',
    icon: <Globe className="w-5 h-5" />,
    sparkline: [80, 82, 90, 94, 102, 110, 124],
    sparklineAccent: 'purple'
  }, {
    id: 'latam',
    label: 'LATAM',
    value: '$64K',
    description: 'Lanzamiento Beta',
    change: '+21.4%',
    trend: 'up',
    icon: <TrendingUp className="w-5 h-5" />,
    sparkline: [28, 30, 35, 40, 47, 54, 64],
    sparklineAccent: 'green'
  }, {
    id: 'apac',
    label: 'APAC',
    value: '$102K',
    description: 'Mercados consolidados',
    change: '+4.2%',
    trend: 'up',
    icon: <Globe className="w-5 h-5" />,
    sparkline: [70, 72, 75, 80, 88, 95, 102],
    sparklineAccent: 'blue'
  }]} columns={3} variant="card" size="md" />,
  decorators: [StoryComponent => <div className="w-full max-w-4xl mx-auto">
                <StoryComponent />
            </div>]
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '🌀 Caso de Uso: Funnel de Producto SaaS',
  args: {
    metrics: funnelMetrics
  },
  render: () => <div className="space-y-6">
            <StatisticHighlight label="ARR" value="$3.8M" description="Pipeline proyectado Q3" change="+24.6%" trend="up" sparkline={[2.2, 2.4, 2.6, 2.9, 3.2, 3.8]} progress={0.64} />
            <StatisticDisplay metrics={funnelMetrics} columns={3} variant="soft" />
        </div>,
  decorators: [StoryComponent => <div className="w-full max-w-5xl mx-auto">
                <StoryComponent />
            </div>]
}`,...M.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '🛠️ Caso de Uso: Operations War Room',
  args: {
    metrics: infraMetrics
  },
  render: () => <div className="space-y-5">
            <h3 className="text-base font-semibold text-text-secondary uppercase tracking-[0.2em]">Infra Health</h3>
            <StatisticDisplay metrics={infraMetrics} columns={4} variant="glass" size="sm" />
        </div>,
  decorators: [StoryComponent => <div className="w-full max-w-6xl mx-auto">
                <StoryComponent />
            </div>]
}`,...R.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: '📊 Caso de Uso: Panel de OKRs Trimestrales',
  args: {
    metrics: overviewMetrics
  },
  render: () => <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <StatisticDisplay metrics={overviewMetrics} columns={3} variant="card" animate={false} />
            <div className="space-y-4">
                <StatisticHighlight label="Gross Margin" value="72.5%" description="YOY +3.4 pts" change="+1.2%" trend="up" sparkline={[66, 67, 68, 69.5, 71, 72.5]} progress={0.78} />
                <StatisticHighlight label="Net Retention" value="131%" description="Enterprise cohort" change="+4%" trend="up" sparkline={[118, 120, 123, 125, 129, 131]} progress={0.81} />
            </div>
        </div>,
  decorators: [StoryComponent => <div className="w-full max-w-6xl mx-auto">
                <StoryComponent />
            </div>]
}`,...T.parameters?.docs?.source}}};const ye=["DefaultGrid","SoftVariant","MinimalList","CompactStats","GlassPanels","WithHighlight","AnalyticsBoard","InternationalRollout","ProductFunnel","OperationsWarRoom","QuarterlyOKRs"];export{A as AnalyticsBoard,j as CompactStats,y as DefaultGrid,k as GlassPanels,C as InternationalRollout,N as MinimalList,R as OperationsWarRoom,M as ProductFunnel,T as QuarterlyOKRs,w as SoftVariant,S as WithHighlight,ye as __namedExportsOrder,be as default};
