import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CeXTICq7.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{l as o,s,t as c}from"./es-ClQM_AK5.js";import{Et as l,Or as u,Pn as d,Rr as f,St as p,b as m,on as h,r as g,t as _,y as v}from"./lucide-react-4IZDqrWk.js";import{a as y,i as b,n as x,r as S,t as C}from"./Tabs-BZo1-F2M.js";import{n as w,t as T}from"./Sparkline-CieOBT6w.js";import{n as E,t as ee}from"./Progress-D0LaEYV3.js";var D,O,k,A,j,M,N,P,F,I=e((()=>{D=t(n()),r(),O=a(),c(),y(),w(),E(),_(),k=e=>{if(e===0)return`0 B`;let t=1024,n=[`B`,`KB`,`MB`,`GB`,`TB`],r=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**+r).toFixed(1)} ${n[r]}`},A=e=>`${e.toFixed(1)}%`,j=e=>`${e.toFixed(1)} W`,M=e=>{switch(e){case`up`:return(0,O.jsx)(v,{className:`w-3.5 h-3.5 text-status-error`});case`down`:return(0,O.jsx)(m,{className:`w-3.5 h-3.5 text-status-success`});default:return(0,O.jsx)(l,{className:`w-3.5 h-3.5 text-text-tertiary`})}},N=({label:e,value:t,subtitle:n,history:r,trend:a,color:o=`rgb(0, 122, 255)`,icon:s,className:c})=>(0,O.jsxs)(`div`,{className:i(`bg-surface-primary border border-border-primary rounded-xl p-4 shadow-sm`,c),children:[(0,O.jsxs)(`div`,{className:`flex items-start justify-between mb-3`,children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-2`,children:[s&&(0,O.jsx)(`div`,{className:`text-text-tertiary`,children:s}),(0,O.jsx)(`span`,{className:`text-xs font-medium text-text-secondary uppercase tracking-wide`,children:e})]}),a&&M(a)]}),(0,O.jsxs)(`div`,{className:`mb-3`,children:[(0,O.jsx)(`div`,{className:`text-2xl font-semibold text-text-primary mb-1`,children:t}),n&&(0,O.jsx)(`div`,{className:`text-xs text-text-tertiary`,children:n})]}),r.length>0&&(0,O.jsx)(`div`,{className:`h-12 flex items-end`,children:(0,O.jsx)(T,{data:r,width:200,height:48,color:o,showArea:!0,strokeWidth:2})})]}),P=({processes:e,activeTab:t,onProcessSelect:n,onSortChange:r})=>{let[a,o]=(0,D.useState)(null),[s,c]=(0,D.useState)(`desc`),l=e=>{let t=a===e&&s===`asc`?`desc`:`asc`;o(e),c(t),r?.(e,t)},d=(()=>{let e=[{key:`name`,label:`Process Name`,render:e=>e.name},{key:`pid`,label:`PID`,render:e=>e.pid}];switch(t){case`cpu`:return[...e,{key:`cpu`,label:`% CPU`,render:e=>A(e.cpu||0)},{key:`user`,label:`User`,render:e=>e.user||`—`}];case`memory`:return[...e,{key:`memory`,label:`Memory`,render:e=>k(e.memory||0)},{key:`user`,label:`User`,render:e=>e.user||`—`}];case`energy`:return[...e,{key:`energy`,label:`Energy Impact`,render:e=>j(e.energy||0)},{key:`user`,label:`User`,render:e=>e.user||`—`}];case`disk`:return[...e,{key:`diskRead`,label:`Read`,render:e=>k(e.diskRead||0)},{key:`diskWrite`,label:`Write`,render:e=>k(e.diskWrite||0)}];case`network`:return[...e,{key:`networkIn`,label:`Sent`,render:e=>k(e.networkIn||0)},{key:`networkOut`,label:`Received`,render:e=>k(e.networkOut||0)}];default:return e}})(),f=[...e].sort((e,t)=>{if(!a)return 0;let n=e[a],r=t[a];if(n==null)return 1;if(r==null)return-1;let i=typeof n==`number`&&typeof r==`number`?n-r:String(n).localeCompare(String(r));return s===`asc`?i:-i});return(0,O.jsx)(`div`,{className:`border border-border-primary rounded-xl overflow-hidden bg-surface-primary`,children:(0,O.jsx)(`div`,{className:`overflow-x-auto`,children:(0,O.jsxs)(`table`,{className:`w-full border-collapse`,children:[(0,O.jsx)(`thead`,{className:`bg-surface-secondary/50 border-b border-border-primary`,children:(0,O.jsx)(`tr`,{children:d.map(e=>(0,O.jsx)(`th`,{className:`px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wide cursor-pointer hover:bg-surface-secondary transition-colors`,onClick:()=>l(e.key),children:(0,O.jsxs)(`div`,{className:`flex items-center gap-2`,children:[e.label,(0,O.jsx)(u,{className:`w-3 h-3 text-text-tertiary`})]})},String(e.key)))})}),(0,O.jsx)(`tbody`,{children:f.length===0?(0,O.jsx)(`tr`,{children:(0,O.jsx)(`td`,{colSpan:d.length,className:`px-4 py-8 text-center text-sm text-text-tertiary`,children:`No processes found`})}):f.map((e,t)=>(0,O.jsx)(`tr`,{className:i(`border-b border-border-secondary hover:bg-surface-secondary/50 transition-colors cursor-pointer`,t%2==0&&`bg-surface-primary`),onClick:()=>n?.(e),children:d.map(t=>(0,O.jsx)(`td`,{className:`px-4 py-3 text-sm text-text-primary`,children:t.render(e)},String(t.key)))},e.id))})]})})})},F=D.forwardRef(({processes:e=[],cpuMetrics:t,memoryMetrics:n,energyMetrics:r,diskMetrics:a,networkMetrics:c,defaultTab:l=`cpu`,autoRefresh:u=!1,refreshInterval:m=1e3,onProcessSelect:_,onSortChange:v,className:y,...w},T)=>{let[E,k]=(0,D.useState)(l),[A,j]=(0,D.useState)(!1),M=(0,D.useRef)(null);(0,D.useEffect)(()=>(u&&(M.current=setInterval(()=>{j(!0),setTimeout(()=>j(!1),200)},m)),()=>{M.current&&clearInterval(M.current)}),[u,m]);let F=(()=>{switch(E){case`cpu`:return t;case`memory`:return n;case`energy`:return r;case`disk`:return a;case`network`:return c;default:return}})(),I=(e=>{switch(e){case`cpu`:return{icon:d,color:`rgb(0, 122, 255)`,label:`CPU`};case`memory`:return{icon:h,color:`rgb(88, 86, 214)`,label:`Memory`};case`energy`:return{icon:g,color:`rgb(255, 149, 0)`,label:`Energy`};case`disk`:return{icon:h,color:`rgb(52, 199, 89)`,label:`Disk`};case`network`:return{icon:p,color:`rgb(255, 59, 48)`,label:`Network`}}})(E);return(0,O.jsxs)(`div`,{ref:T,className:i(`bg-surface-primary rounded-xl border border-border-primary shadow-lg overflow-hidden`,y),...w,children:[(0,O.jsx)(`div`,{className:`px-6 py-4 border-b border-border-primary bg-surface-secondary/30`,children:(0,O.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,O.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,O.jsx)(`div`,{className:`p-2 bg-accent-blue/10 rounded-lg`,children:(0,O.jsx)(f,{className:`w-5 h-5 text-accent-blue`})}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h2`,{className:`text-lg font-semibold text-text-primary`,children:`Activity Monitor`}),(0,O.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:`System resource usage and process monitoring`})]})]}),u&&(0,O.jsxs)(`div`,{className:`flex items-center gap-2 text-xs text-text-tertiary`,children:[(0,O.jsx)(s.div,{animate:{opacity:A?.5:1},transition:{duration:.2},children:(0,O.jsx)(f,{className:`w-4 h-4`})}),(0,O.jsx)(`span`,{children:`Auto-refresh`})]})]})}),(0,O.jsx)(`div`,{className:`px-6 pt-4`,children:(0,O.jsxs)(C,{value:E,onValueChange:e=>k(e),children:[(0,O.jsxs)(S,{variant:`segmented`,className:`w-full`,children:[(0,O.jsx)(b,{value:`cpu`,className:`flex-1`,children:(0,O.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,O.jsx)(d,{className:`w-4 h-4`}),(0,O.jsx)(`span`,{children:`CPU`})]})}),(0,O.jsx)(b,{value:`memory`,className:`flex-1`,children:(0,O.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,O.jsx)(h,{className:`w-4 h-4`}),(0,O.jsx)(`span`,{children:`Memory`})]})}),(0,O.jsx)(b,{value:`energy`,className:`flex-1`,children:(0,O.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,O.jsx)(g,{className:`w-4 h-4`}),(0,O.jsx)(`span`,{children:`Energy`})]})}),(0,O.jsx)(b,{value:`disk`,className:`flex-1`,children:(0,O.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,O.jsx)(h,{className:`w-4 h-4`}),(0,O.jsx)(`span`,{children:`Disk`})]})}),(0,O.jsx)(b,{value:`network`,className:`flex-1`,children:(0,O.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,O.jsx)(p,{className:`w-4 h-4`}),(0,O.jsx)(`span`,{children:`Network`})]})})]}),(0,O.jsx)(x,{value:E,className:`mt-6`,children:(0,O.jsx)(o,{mode:`wait`,children:(0,O.jsxs)(s.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.2},children:[F&&(0,O.jsx)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6`,children:(0,O.jsx)(N,{label:F.label,value:`${F.value.toFixed(1)} ${F.unit}`,history:F.history,trend:F.trend,color:F.color||I.color,icon:(0,O.jsx)(I.icon,{className:`w-4 h-4`})})}),(E===`cpu`||E===`memory`)&&F&&(0,O.jsxs)(`div`,{className:`mb-6`,children:[(0,O.jsxs)(`div`,{className:`flex items-center justify-between mb-2`,children:[(0,O.jsx)(`span`,{className:`text-sm font-medium text-text-secondary`,children:F.label}),(0,O.jsxs)(`span`,{className:`text-sm text-text-primary`,children:[F.value.toFixed(1),`%`]})]}),(0,O.jsx)(ee,{value:F.value,className:`h-2`,indicatorClassName:i(E===`cpu`&&`bg-accent-blue`,E===`memory`&&`bg-status-info`)})]}),(0,O.jsxs)(`div`,{children:[(0,O.jsx)(`h3`,{className:`text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide`,children:`Processes`}),(0,O.jsx)(P,{processes:e,activeTab:E,onProcessSelect:_,onSortChange:v})]})]},E)})})]})})]})}),F.displayName=`ActivityMonitor`,F.__docgenInfo={description:``,methods:[],displayName:`ActivityMonitor`,props:{processes:{required:!1,tsType:{name:`Array`,elements:[{name:`ProcessData`}],raw:`ProcessData[]`},description:``,defaultValue:{value:`[]`,computed:!1}},cpuMetrics:{required:!1,tsType:{name:`MetricData`},description:``},memoryMetrics:{required:!1,tsType:{name:`MetricData`},description:``},energyMetrics:{required:!1,tsType:{name:`MetricData`},description:``},diskMetrics:{required:!1,tsType:{name:`MetricData`},description:``},networkMetrics:{required:!1,tsType:{name:`MetricData`},description:``},defaultTab:{required:!1,tsType:{name:`union`,raw:`'cpu' | 'memory' | 'energy' | 'disk' | 'network'`,elements:[{name:`literal`,value:`'cpu'`},{name:`literal`,value:`'memory'`},{name:`literal`,value:`'energy'`},{name:`literal`,value:`'disk'`},{name:`literal`,value:`'network'`}]},description:``,defaultValue:{value:`'cpu'`,computed:!1}},autoRefresh:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},refreshInterval:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1000`,computed:!1}},onProcessSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(process: ProcessData) => void`,signature:{arguments:[{type:{name:`ProcessData`},name:`process`}],return:{name:`void`}}},description:``},onSortChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(key: keyof ProcessData, direction: 'asc' | 'desc') => void`,signature:{arguments:[{type:{name:`ProcessData`},name:`key`},{type:{name:`union`,raw:`'asc' | 'desc'`,elements:[{name:`literal`,value:`'asc'`},{name:`literal`,value:`'desc'`}]},name:`direction`}],return:{name:`void`}}},description:``}}}})),L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{I(),L={title:`Data Display/ActivityMonitor`,component:F,tags:[`autodocs`]},R=[{id:`1`,name:`Portfolio Sync`,pid:4521,cpu:23.5,memory:156,user:`system`},{id:`2`,name:`Fraud Detection`,pid:3891,cpu:45.2,memory:420,user:`system`},{id:`3`,name:`Market Watcher`,pid:2104,cpu:8.1,memory:88,user:`system`},{id:`4`,name:`Transaction Indexer`,pid:5562,cpu:12.7,memory:204,user:`system`},{id:`5`,name:`Report Generator`,pid:6723,cpu:3.2,memory:64,user:`cesar`}],z=(e,t,n=20)=>Array.from({length:n},(n,r)=>e+Math.sin(r*.5)*t+(Math.random()-.5)*t*.5),B={label:`CPU Usage`,value:45.2,unit:`%`,trend:`up`,history:z(40,15),color:`#007AFF`},V={label:`Memory`,value:4.8,unit:`GB`,trend:`neutral`,history:z(4,1),color:`#34C759`},H={label:`Energy`,value:12.3,unit:`W`,trend:`down`,history:z(14,3),color:`#FF9500`},U={label:`Disk`,value:156,unit:`MB/s`,trend:`neutral`,history:z(120,60),color:`#AF52DE`},W={label:`Network`,value:42,unit:`MB/s`,trend:`up`,history:z(30,20),color:`#5AC8FA`},G={args:{processes:R,cpuMetrics:B,memoryMetrics:V,energyMetrics:H,diskMetrics:U,networkMetrics:W,defaultTab:`cpu`}},K={args:{processes:R,cpuMetrics:B,memoryMetrics:V,energyMetrics:H,diskMetrics:U,networkMetrics:W,defaultTab:`memory`}},q={args:{processes:R,cpuMetrics:B,memoryMetrics:V,energyMetrics:H,diskMetrics:U,networkMetrics:W,defaultTab:`disk`}},J={args:{processes:R.slice(0,3),cpuMetrics:B,memoryMetrics:V,energyMetrics:H,diskMetrics:U,networkMetrics:W,autoRefresh:!0,refreshInterval:5e3}},Y={args:{processes:R.slice(0,2),cpuMetrics:B,memoryMetrics:V,energyMetrics:H,diskMetrics:U,networkMetrics:W}},X={args:{processes:[{id:`1`,name:`Fraud Detection Engine`,pid:3891,cpu:45.2,memory:420,user:`system`},{id:`2`,name:`Transaction Indexer-Service`,pid:5562,cpu:12.7,memory:204,user:`system`},{id:`3`,name:`Market Data Stream`,pid:2104,cpu:8.1,memory:88,user:`system`},{id:`4`,name:`Portfolio Sync Worker`,pid:4521,cpu:23.5,memory:156,user:`system`},{id:`5`,name:`Report Generator`,pid:6723,cpu:3.2,memory:64,user:`cesar`},{id:`6`,name:`API Gateway`,pid:1234,cpu:15.8,memory:312,user:`system`},{id:`7`,name:`Cache Warmup`,pid:7890,cpu:.5,memory:12,user:`system`},{id:`8`,name:`Audit Logger`,pid:3456,cpu:1.2,memory:48,user:`system`}],cpuMetrics:B,memoryMetrics:V,energyMetrics:H,diskMetrics:U,networkMetrics:W,defaultTab:`cpu`},parameters:{docs:{description:{story:`ActivityMonitor with 8 processes showcasing a full fintech backend services view with fraud detection, market data, and API gateway monitoring.`}}}},Z={args:{processes:R,cpuMetrics:B,memoryMetrics:V,energyMetrics:H,diskMetrics:U,networkMetrics:W,defaultTab:`network`},parameters:{docs:{description:{story:`ActivityMonitor focused on the Network tab, showing network throughput metrics with process-level traffic data.`}}}},Q={args:{processes:R,cpuMetrics:B,memoryMetrics:V,energyMetrics:H,diskMetrics:U,networkMetrics:W,defaultTab:`energy`},parameters:{docs:{description:{story:`ActivityMonitor focused on the Energy tab, showing power consumption metrics for the fintech backend processes.`}}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    processes: sampleProcesses,
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'cpu'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    processes: sampleProcesses,
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'memory'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    processes: sampleProcesses,
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'disk'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    processes: sampleProcesses.slice(0, 3),
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    autoRefresh: true,
    refreshInterval: 5000
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    processes: sampleProcesses.slice(0, 2),
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    processes: [{
      id: '1',
      name: 'Fraud Detection Engine',
      pid: 3891,
      cpu: 45.2,
      memory: 420,
      user: 'system'
    }, {
      id: '2',
      name: 'Transaction Indexer-Service',
      pid: 5562,
      cpu: 12.7,
      memory: 204,
      user: 'system'
    }, {
      id: '3',
      name: 'Market Data Stream',
      pid: 2104,
      cpu: 8.1,
      memory: 88,
      user: 'system'
    }, {
      id: '4',
      name: 'Portfolio Sync Worker',
      pid: 4521,
      cpu: 23.5,
      memory: 156,
      user: 'system'
    }, {
      id: '5',
      name: 'Report Generator',
      pid: 6723,
      cpu: 3.2,
      memory: 64,
      user: 'cesar'
    }, {
      id: '6',
      name: 'API Gateway',
      pid: 1234,
      cpu: 15.8,
      memory: 312,
      user: 'system'
    }, {
      id: '7',
      name: 'Cache Warmup',
      pid: 7890,
      cpu: 0.5,
      memory: 12,
      user: 'system'
    }, {
      id: '8',
      name: 'Audit Logger',
      pid: 3456,
      cpu: 1.2,
      memory: 48,
      user: 'system'
    }],
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'cpu'
  },
  parameters: {
    docs: {
      description: {
        story: 'ActivityMonitor with 8 processes showcasing a full fintech backend services view with fraud detection, market data, and API gateway monitoring.'
      }
    }
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    processes: sampleProcesses,
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'network'
  },
  parameters: {
    docs: {
      description: {
        story: 'ActivityMonitor focused on the Network tab, showing network throughput metrics with process-level traffic data.'
      }
    }
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    processes: sampleProcesses,
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'energy'
  },
  parameters: {
    docs: {
      description: {
        story: 'ActivityMonitor focused on the Energy tab, showing power consumption metrics for the fintech backend processes.'
      }
    }
  }
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`MemoryTab`,`DiskTab`,`WithAutoRefresh`,`MinimalData`,`ManyProcesses`,`NetworkTab`,`EnergyTab`]}))();export{G as Default,q as DiskTab,Q as EnergyTab,X as ManyProcesses,K as MemoryTab,Y as MinimalData,Z as NetworkTab,J as WithAutoRefresh,$ as __namedExportsOrder,L as default};