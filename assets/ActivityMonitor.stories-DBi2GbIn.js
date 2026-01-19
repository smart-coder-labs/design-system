import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as ee,r as h}from"./iframe-BQuKaBw1.js";import{c as O}from"./utils-CDN07tui.js";import{T as re,a as se,b as k,c as ae}from"./Tabs-B1sf9dg-.js";import{S as te}from"./Sparkline-DpKBg7V6.js";import{P as oe}from"./Progress-DUpXurNW.js";import{A as Z}from"./activity-B79uLOy2.js";import{m as G}from"./proxy-DCsQVuEn.js";import{C as J}from"./cpu-Dcrsydb0.js";import{H as P}from"./hard-drive-DZU2wyyg.js";import{Z as Q}from"./zap-nj2Ftv4o.js";import{c as ie}from"./createLucideIcon-7-Glrotp.js";import{A as ce}from"./index-DWG6ZTkU.js";import{A as ne}from"./arrow-up-down-C6QUiLk1.js";import{M as le}from"./minus-B9S9HkDB.js";import{T as me}from"./trending-down-CqsSIsSx.js";import{T as de}from"./trending-up-BrBty35E.js";import"./preload-helper-PPVm8Dsz.js";const ue=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Y=ie("network",ue),j=r=>{if(r===0)return"0 B";const c=1024,n=["B","KB","MB","GB","TB"],s=Math.floor(Math.log(r)/Math.log(c));return`${(r/Math.pow(c,s)).toFixed(1)} ${n[s]}`},pe=r=>`${r.toFixed(1)}%`,ye=r=>`${r.toFixed(1)} W`,xe=r=>{switch(r){case"up":return e.jsx(de,{className:"w-3.5 h-3.5 text-status-error"});case"down":return e.jsx(me,{className:"w-3.5 h-3.5 text-status-success"});default:return e.jsx(le,{className:"w-3.5 h-3.5 text-text-tertiary"})}},he=({label:r,value:c,subtitle:n,history:s,trend:x,color:b="rgb(0, 122, 255)",icon:f,className:v})=>e.jsxs("div",{className:O("bg-surface-primary border border-border-primary rounded-xl p-4 shadow-sm",v),children:[e.jsxs("div",{className:"flex items-start justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[f&&e.jsx("div",{className:"text-text-tertiary",children:f}),e.jsx("span",{className:"text-xs font-medium text-text-secondary uppercase tracking-wide",children:r})]}),x&&xe(x)]}),e.jsxs("div",{className:"mb-3",children:[e.jsx("div",{className:"text-2xl font-semibold text-text-primary mb-1",children:c}),n&&e.jsx("div",{className:"text-xs text-text-tertiary",children:n})]}),s.length>0&&e.jsx("div",{className:"h-12 flex items-end",children:e.jsx(te,{data:s,width:200,height:48,color:b,showArea:!0,strokeWidth:2})})]}),ge=({processes:r,activeTab:c,onProcessSelect:n,onSortChange:s})=>{const[x,b]=h.useState(null),[f,v]=h.useState("desc"),N=t=>{const a=x===t&&f==="asc"?"desc":"asc";b(t),v(a),s?.(t,a)},w=(()=>{const t=[{key:"name",label:"Process Name",render:a=>a.name},{key:"pid",label:"PID",render:a=>a.pid}];switch(c){case"cpu":return[...t,{key:"cpu",label:"% CPU",render:a=>pe(a.cpu||0)},{key:"user",label:"User",render:a=>a.user||"—"}];case"memory":return[...t,{key:"memory",label:"Memory",render:a=>j(a.memory||0)},{key:"user",label:"User",render:a=>a.user||"—"}];case"energy":return[...t,{key:"energy",label:"Energy Impact",render:a=>ye(a.energy||0)},{key:"user",label:"User",render:a=>a.user||"—"}];case"disk":return[...t,{key:"diskRead",label:"Read",render:a=>j(a.diskRead||0)},{key:"diskWrite",label:"Write",render:a=>j(a.diskWrite||0)}];case"network":return[...t,{key:"networkIn",label:"Sent",render:a=>j(a.networkIn||0)},{key:"networkOut",label:"Received",render:a=>j(a.networkOut||0)}];default:return t}})(),S=[...r].sort((t,a)=>{if(!x)return 0;const o=t[x],M=a[x];if(o==null)return 1;if(M==null)return-1;const T=typeof o=="number"&&typeof M=="number"?o-M:String(o).localeCompare(String(M));return f==="asc"?T:-T});return e.jsx("div",{className:"border border-border-primary rounded-xl overflow-hidden bg-surface-primary",children:e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse",children:[e.jsx("thead",{className:"bg-surface-secondary/50 border-b border-border-primary",children:e.jsx("tr",{children:w.map(t=>e.jsx("th",{className:"px-4 py-3 text-left text-xs font-semibold text-text-secondary uppercase tracking-wide cursor-pointer hover:bg-surface-secondary transition-colors",onClick:()=>N(t.key),children:e.jsxs("div",{className:"flex items-center gap-2",children:[t.label,e.jsx(ne,{className:"w-3 h-3 text-text-tertiary"})]})},String(t.key)))})}),e.jsx("tbody",{children:S.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:w.length,className:"px-4 py-8 text-center text-sm text-text-tertiary",children:"No processes found"})}):S.map((t,a)=>e.jsx("tr",{className:O("border-b border-border-secondary hover:bg-surface-secondary/50 transition-colors cursor-pointer",a%2===0&&"bg-surface-primary"),onClick:()=>n?.(t),children:w.map(o=>e.jsx("td",{className:"px-4 py-3 text-sm text-text-primary",children:o.render(t)},String(o.key)))},t.id))})]})})})},F=ee.forwardRef(({processes:r=[],cpuMetrics:c,memoryMetrics:n,energyMetrics:s,diskMetrics:x,networkMetrics:b,defaultTab:f="cpu",autoRefresh:v=!1,refreshInterval:N=1e3,onProcessSelect:_,onSortChange:w,className:S,...t},a)=>{const[o,M]=h.useState(f),[T,X]=h.useState(!1),L=h.useRef(null);h.useEffect(()=>(v&&(L.current=setInterval(()=>{X(!0),setTimeout(()=>X(!1),200)},N)),()=>{L.current&&clearInterval(L.current)}),[v,N]);const d=(()=>{switch(o){case"cpu":return c;case"memory":return n;case"energy":return s;case"disk":return x;case"network":return b;default:return}})(),K=(z=>{switch(z){case"cpu":return{icon:J,color:"rgb(0, 122, 255)",label:"CPU"};case"memory":return{icon:P,color:"rgb(88, 86, 214)",label:"Memory"};case"energy":return{icon:Q,color:"rgb(255, 149, 0)",label:"Energy"};case"disk":return{icon:P,color:"rgb(52, 199, 89)",label:"Disk"};case"network":return{icon:Y,color:"rgb(255, 59, 48)",label:"Network"}}})(o);return e.jsxs("div",{ref:a,className:O("bg-surface-primary rounded-xl border border-border-primary shadow-lg overflow-hidden",S),...t,children:[e.jsx("div",{className:"px-6 py-4 border-b border-border-primary bg-surface-secondary/30",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2 bg-accent-blue/10 rounded-lg",children:e.jsx(Z,{className:"w-5 h-5 text-accent-blue"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-semibold text-text-primary",children:"Activity Monitor"}),e.jsx("p",{className:"text-xs text-text-tertiary",children:"System resource usage and process monitoring"})]})]}),v&&e.jsxs("div",{className:"flex items-center gap-2 text-xs text-text-tertiary",children:[e.jsx(G.div,{animate:{opacity:T?.5:1},transition:{duration:.2},children:e.jsx(Z,{className:"w-4 h-4"})}),e.jsx("span",{children:"Auto-refresh"})]})]})}),e.jsx("div",{className:"px-6 pt-4",children:e.jsxs(re,{value:o,onValueChange:z=>M(z),children:[e.jsxs(se,{variant:"segmented",className:"w-full",children:[e.jsx(k,{value:"cpu",className:"flex-1",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(J,{className:"w-4 h-4"}),e.jsx("span",{children:"CPU"})]})}),e.jsx(k,{value:"memory",className:"flex-1",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(P,{className:"w-4 h-4"}),e.jsx("span",{children:"Memory"})]})}),e.jsx(k,{value:"energy",className:"flex-1",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Q,{className:"w-4 h-4"}),e.jsx("span",{children:"Energy"})]})}),e.jsx(k,{value:"disk",className:"flex-1",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(P,{className:"w-4 h-4"}),e.jsx("span",{children:"Disk"})]})}),e.jsx(k,{value:"network",className:"flex-1",children:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Y,{className:"w-4 h-4"}),e.jsx("span",{children:"Network"})]})})]}),e.jsx(ae,{value:o,className:"mt-6",children:e.jsx(ce,{mode:"wait",children:e.jsxs(G.div,{initial:{opacity:0,y:8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.2},children:[d&&e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6",children:e.jsx(he,{label:d.label,value:`${d.value.toFixed(1)} ${d.unit}`,history:d.history,trend:d.trend,color:d.color||K.color,icon:e.jsx(K.icon,{className:"w-4 h-4"})})}),(o==="cpu"||o==="memory")&&d&&e.jsxs("div",{className:"mb-6",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("span",{className:"text-sm font-medium text-text-secondary",children:d.label}),e.jsxs("span",{className:"text-sm text-text-primary",children:[d.value.toFixed(1),"%"]})]}),e.jsx(oe,{value:d.value,className:"h-2",indicatorClassName:O(o==="cpu"&&"bg-accent-blue",o==="memory"&&"bg-status-info")})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold text-text-secondary mb-3 uppercase tracking-wide",children:"Processes"}),e.jsx(ge,{processes:r,activeTab:o,onProcessSelect:_,onSortChange:w})]})]},o)})})]})})]})});F.displayName="ActivityMonitor";F.__docgenInfo={description:"",methods:[],displayName:"ActivityMonitor",props:{processes:{required:!1,tsType:{name:"Array",elements:[{name:"ProcessData"}],raw:"ProcessData[]"},description:"",defaultValue:{value:"[]",computed:!1}},cpuMetrics:{required:!1,tsType:{name:"MetricData"},description:""},memoryMetrics:{required:!1,tsType:{name:"MetricData"},description:""},energyMetrics:{required:!1,tsType:{name:"MetricData"},description:""},diskMetrics:{required:!1,tsType:{name:"MetricData"},description:""},networkMetrics:{required:!1,tsType:{name:"MetricData"},description:""},defaultTab:{required:!1,tsType:{name:"union",raw:"'cpu' | 'memory' | 'energy' | 'disk' | 'network'",elements:[{name:"literal",value:"'cpu'"},{name:"literal",value:"'memory'"},{name:"literal",value:"'energy'"},{name:"literal",value:"'disk'"},{name:"literal",value:"'network'"}]},description:"",defaultValue:{value:"'cpu'",computed:!1}},autoRefresh:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},refreshInterval:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1000",computed:!1}},onProcessSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(process: ProcessData) => void",signature:{arguments:[{type:{name:"ProcessData"},name:"process"}],return:{name:"void"}}},description:""},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: keyof ProcessData, direction: 'asc' | 'desc') => void",signature:{arguments:[{type:{name:"ProcessData"},name:"key"},{type:{name:"union",raw:"'asc' | 'desc'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"}]},name:"direction"}],return:{name:"void"}}},description:""}}};const qe={title:"Data Display/ActivityMonitor",component:F,parameters:{layout:"padded",docs:{description:{component:"Un monitor de actividad estilo macOS para visualizar el uso de recursos del sistema (CPU, Memory, Energy, Disk, Network) con gráficos en tiempo real y listas de procesos ordenables."}}},tags:[],argTypes:{defaultTab:{control:"select",options:["cpu","memory","energy","disk","network"],description:"Pestaña activa por defecto"},autoRefresh:{control:"boolean",description:"Activar actualización automática"},refreshInterval:{control:{type:"number",min:500,max:5e3,step:100},description:"Intervalo de actualización en milisegundos"}}},i=(r,c=5,n=50)=>Array.from({length:n},()=>{const s=(Math.random()-.5)*c;return Math.max(0,Math.min(100,r+s))}),g=[{id:"1",name:"Chrome",pid:1234,cpu:45.2,memory:2048e6,energy:12.5,user:"john"},{id:"2",name:"Xcode",pid:5678,cpu:32.1,memory:4096e6,energy:18.3,user:"john"},{id:"3",name:"Spotify",pid:9012,cpu:8.5,memory:512e6,energy:4.2,user:"john"},{id:"4",name:"Slack",pid:3456,cpu:12.3,memory:768e6,energy:6.8,user:"john"},{id:"5",name:"Finder",pid:7890,cpu:2.1,memory:256e6,energy:1.5,user:"john"},{id:"6",name:"Safari",pid:2345,cpu:15.7,memory:1024e6,energy:8.9,user:"john"},{id:"7",name:"Terminal",pid:6789,cpu:1.2,memory:128e6,energy:.8,user:"john"},{id:"8",name:"VS Code",pid:1357,cpu:18.4,memory:1536e6,energy:10.2,user:"john"},{id:"9",name:"Mail",pid:2468,cpu:3.6,memory:384e6,energy:2.1,user:"john"},{id:"10",name:"Messages",pid:3691,cpu:2.8,memory:192e6,energy:1.2,user:"john"}],fe=[{id:"1",name:"Time Machine",pid:1234,diskRead:524288e3,diskWrite:1048576e3,user:"john"},{id:"2",name:"Xcode",pid:5678,diskRead:209715200,diskWrite:524288e3,user:"john"},{id:"3",name:"Chrome",pid:9012,diskRead:104857600,diskWrite:52428800,user:"john"},{id:"4",name:"Spotify",pid:3456,diskRead:52428800,diskWrite:26214400,user:"john"},{id:"5",name:"Slack",pid:7890,diskRead:26214400,diskWrite:13107200,user:"john"}],ve=[{id:"1",name:"Chrome",pid:1234,networkIn:157286400,networkOut:52428800,user:"john"},{id:"2",name:"Slack",pid:5678,networkIn:52428800,networkOut:26214400,user:"john"},{id:"3",name:"Spotify",pid:9012,networkIn:104857600,networkOut:13107200,user:"john"},{id:"4",name:"Safari",pid:3456,networkIn:78643200,networkOut:39321600,user:"john"},{id:"5",name:"Mail",pid:7890,networkIn:26214400,networkOut:13107200,user:"john"}],u={label:"CPU Usage",value:45.8,unit:"%",trend:"up",history:i(45,10),color:"rgb(0, 122, 255)"},p={label:"Memory Pressure",value:62.3,unit:"%",trend:"neutral",history:i(62,8),color:"rgb(88, 86, 214)"},y={label:"Energy Impact",value:58.4,unit:"W",trend:"down",history:i(58,12),color:"rgb(255, 149, 0)"},l={label:"Disk Activity",value:28.7,unit:"MB/s",trend:"up",history:i(28,6),color:"rgb(52, 199, 89)"},m={label:"Network Activity",value:12.4,unit:"MB/s",trend:"neutral",history:i(12,4),color:"rgb(255, 59, 48)"},C={args:{processes:g,cpuMetrics:u,memoryMetrics:p,energyMetrics:y,diskMetrics:l,networkMetrics:m,defaultTab:"cpu",autoRefresh:!1},decorators:[r=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(r,{})})]},R={name:"💻 CPU Tab",args:{processes:g,cpuMetrics:u,memoryMetrics:p,energyMetrics:y,diskMetrics:l,networkMetrics:m,defaultTab:"cpu",autoRefresh:!1},decorators:[r=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(r,{})})]},D={name:"🧠 Memory Tab",args:{processes:g,cpuMetrics:u,memoryMetrics:p,energyMetrics:y,diskMetrics:l,networkMetrics:m,defaultTab:"memory",autoRefresh:!1},decorators:[r=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(r,{})})]},I={name:"⚡ Energy Tab",args:{processes:g,cpuMetrics:u,memoryMetrics:p,energyMetrics:y,diskMetrics:l,networkMetrics:m,defaultTab:"energy",autoRefresh:!1},decorators:[r=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(r,{})})]},A={name:"💾 Disk Tab",args:{processes:fe,cpuMetrics:u,memoryMetrics:p,energyMetrics:y,diskMetrics:l,networkMetrics:m,defaultTab:"disk",autoRefresh:!1},decorators:[r=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(r,{})})]},U={name:"🌐 Network Tab",args:{processes:ve,cpuMetrics:u,memoryMetrics:p,energyMetrics:y,diskMetrics:l,networkMetrics:m,defaultTab:"network",autoRefresh:!1},decorators:[r=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(r,{})})]},E={name:"🔄 Con Auto-Refresh",args:{processes:g,cpuMetrics:u,memoryMetrics:p,energyMetrics:y,diskMetrics:l,networkMetrics:m,defaultTab:"cpu",autoRefresh:!0,refreshInterval:2e3},decorators:[r=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(r,{})})]},W={name:"👆 Con Selección de Procesos",args:{processes:g,cpuMetrics:u,memoryMetrics:p,energyMetrics:y,diskMetrics:l,networkMetrics:m,defaultTab:"cpu",autoRefresh:!1,onProcessSelect:r=>{console.log("Selected process:",r),alert(`Selected: ${r.name} (PID: ${r.pid})`)}},decorators:[r=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(r,{})})]},B={name:"🖥️ Caso de Uso: Monitoreo del Sistema",render:()=>{const[r,c]=h.useState({cpu:{...u,value:45.8},memory:{...p,value:62.3},energy:{...y,value:58.4},disk:{...l,value:28.7},network:{...m,value:12.4}});return h.useEffect(()=>{const n=setInterval(()=>{c(s=>({cpu:{...s.cpu,value:Math.max(0,Math.min(100,s.cpu.value+(Math.random()-.5)*5)),history:[...s.cpu.history.slice(1),s.cpu.value]},memory:{...s.memory,value:Math.max(0,Math.min(100,s.memory.value+(Math.random()-.5)*3)),history:[...s.memory.history.slice(1),s.memory.value]},energy:{...s.energy,value:Math.max(0,Math.min(100,s.energy.value+(Math.random()-.5)*4)),history:[...s.energy.history.slice(1),s.energy.value]},disk:{...s.disk,value:Math.max(0,Math.min(100,s.disk.value+(Math.random()-.5)*2)),history:[...s.disk.history.slice(1),s.disk.value]},network:{...s.network,value:Math.max(0,Math.min(100,s.network.value+(Math.random()-.5)*2)),history:[...s.network.history.slice(1),s.network.value]}}))},1e3);return()=>clearInterval(n)},[]),e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(F,{processes:g,cpuMetrics:r.cpu,memoryMetrics:r.memory,energyMetrics:r.energy,diskMetrics:r.disk,networkMetrics:r.network,defaultTab:"cpu",autoRefresh:!0,refreshInterval:1e3})})}},H={name:"🔥 Caso de Uso: Alta Carga del Sistema",args:{processes:[{id:"1",name:"Xcode (Building)",pid:1234,cpu:95.8,memory:8192e6,energy:45.2,user:"dev"},{id:"2",name:"Chrome (20 tabs)",pid:5678,cpu:78.3,memory:4096e6,energy:32.1,user:"dev"},{id:"3",name:"Docker Desktop",pid:9012,cpu:45.6,memory:6144e6,energy:28.5,user:"dev"},{id:"4",name:"VS Code",pid:3456,cpu:32.4,memory:2048e6,energy:15.8,user:"dev"},{id:"5",name:"Slack",pid:7890,cpu:12.1,memory:1024e6,energy:8.3,user:"dev"},{id:"6",name:"Spotify",pid:2345,cpu:8.7,memory:512e6,energy:4.2,user:"dev"}],cpuMetrics:{label:"CPU Usage",value:89.5,unit:"%",trend:"up",history:i(89,5),color:"rgb(255, 59, 48)"},memoryMetrics:{label:"Memory Pressure",value:87.2,unit:"%",trend:"up",history:i(87,4),color:"rgb(255, 59, 48)"},energyMetrics:{label:"Energy Impact",value:92.8,unit:"W",trend:"up",history:i(92,6),color:"rgb(255, 149, 0)"},diskMetrics:l,networkMetrics:m,defaultTab:"cpu",autoRefresh:!1},decorators:[r=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(r,{})})]},V={name:"😴 Caso de Uso: Baja Carga del Sistema",args:{processes:[{id:"1",name:"Finder",pid:1234,cpu:1.2,memory:128e6,energy:.8,user:"user"},{id:"2",name:"Mail",pid:5678,cpu:2.5,memory:256e6,energy:1.5,user:"user"},{id:"3",name:"Messages",pid:9012,cpu:1.8,memory:192e6,energy:1.2,user:"user"},{id:"4",name:"Terminal",pid:3456,cpu:.5,memory:64e6,energy:.3,user:"user"}],cpuMetrics:{label:"CPU Usage",value:8.2,unit:"%",trend:"down",history:i(8,2),color:"rgb(52, 199, 89)"},memoryMetrics:{label:"Memory Pressure",value:15.4,unit:"%",trend:"down",history:i(15,3),color:"rgb(52, 199, 89)"},energyMetrics:{label:"Energy Impact",value:6.5,unit:"W",trend:"down",history:i(6,1),color:"rgb(52, 199, 89)"},diskMetrics:{label:"Disk Activity",value:.8,unit:"MB/s",trend:"neutral",history:i(.8,.3),color:"rgb(52, 199, 89)"},networkMetrics:{label:"Network Activity",value:.2,unit:"MB/s",trend:"neutral",history:i(.2,.1),color:"rgb(52, 199, 89)"},defaultTab:"cpu",autoRefresh:!1},decorators:[r=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(r,{})})]},q={name:"📭 Estado Vacío",args:{processes:[],cpuMetrics:u,memoryMetrics:p,energyMetrics:y,diskMetrics:l,networkMetrics:m,defaultTab:"cpu",autoRefresh:!1},decorators:[r=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(r,{})})]},$={name:"🎨 Playground",args:{processes:g,cpuMetrics:u,memoryMetrics:p,energyMetrics:y,diskMetrics:l,networkMetrics:m,defaultTab:"cpu",autoRefresh:!1,refreshInterval:1e3},decorators:[r=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(r,{})})]};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    processes: sampleProcesses,
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'cpu',
    autoRefresh: false
  },
  decorators: [Story => <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>]
}`,...C.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: '💻 CPU Tab',
  args: {
    processes: sampleProcesses,
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'cpu',
    autoRefresh: false
  },
  decorators: [Story => <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>]
}`,...R.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '🧠 Memory Tab',
  args: {
    processes: sampleProcesses,
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'memory',
    autoRefresh: false
  },
  decorators: [Story => <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>]
}`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '⚡ Energy Tab',
  args: {
    processes: sampleProcesses,
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'energy',
    autoRefresh: false
  },
  decorators: [Story => <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>]
}`,...I.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '💾 Disk Tab',
  args: {
    processes: sampleDiskProcesses,
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'disk',
    autoRefresh: false
  },
  decorators: [Story => <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>]
}`,...A.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: '🌐 Network Tab',
  args: {
    processes: sampleNetworkProcesses,
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'network',
    autoRefresh: false
  },
  decorators: [Story => <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>]
}`,...U.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '🔄 Con Auto-Refresh',
  args: {
    processes: sampleProcesses,
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'cpu',
    autoRefresh: true,
    refreshInterval: 2000
  },
  decorators: [Story => <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>]
}`,...E.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: '👆 Con Selección de Procesos',
  args: {
    processes: sampleProcesses,
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'cpu',
    autoRefresh: false,
    onProcessSelect: process => {
      console.log('Selected process:', process);
      alert(\`Selected: \${process.name} (PID: \${process.pid})\`);
    }
  },
  decorators: [Story => <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>]
}`,...W.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: '🖥️ Caso de Uso: Monitoreo del Sistema',
  render: () => {
    const [metrics, setMetrics] = useState({
      cpu: {
        ...cpuMetrics,
        value: 45.8
      },
      memory: {
        ...memoryMetrics,
        value: 62.3
      },
      energy: {
        ...energyMetrics,
        value: 58.4
      },
      disk: {
        ...diskMetrics,
        value: 28.7
      },
      network: {
        ...networkMetrics,
        value: 12.4
      }
    });
    useEffect(() => {
      const interval = setInterval(() => {
        setMetrics(prev => ({
          cpu: {
            ...prev.cpu,
            value: Math.max(0, Math.min(100, prev.cpu.value + (Math.random() - 0.5) * 5)),
            history: [...prev.cpu.history.slice(1), prev.cpu.value]
          },
          memory: {
            ...prev.memory,
            value: Math.max(0, Math.min(100, prev.memory.value + (Math.random() - 0.5) * 3)),
            history: [...prev.memory.history.slice(1), prev.memory.value]
          },
          energy: {
            ...prev.energy,
            value: Math.max(0, Math.min(100, prev.energy.value + (Math.random() - 0.5) * 4)),
            history: [...prev.energy.history.slice(1), prev.energy.value]
          },
          disk: {
            ...prev.disk,
            value: Math.max(0, Math.min(100, prev.disk.value + (Math.random() - 0.5) * 2)),
            history: [...prev.disk.history.slice(1), prev.disk.value]
          },
          network: {
            ...prev.network,
            value: Math.max(0, Math.min(100, prev.network.value + (Math.random() - 0.5) * 2)),
            history: [...prev.network.history.slice(1), prev.network.value]
          }
        }));
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    return <div className="w-full max-w-6xl mx-auto">
                <ActivityMonitor processes={sampleProcesses} cpuMetrics={metrics.cpu} memoryMetrics={metrics.memory} energyMetrics={metrics.energy} diskMetrics={metrics.disk} networkMetrics={metrics.network} defaultTab="cpu" autoRefresh={true} refreshInterval={1000} />
            </div>;
  }
}`,...B.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: '🔥 Caso de Uso: Alta Carga del Sistema',
  args: {
    processes: [{
      id: '1',
      name: 'Xcode (Building)',
      pid: 1234,
      cpu: 95.8,
      memory: 8192000000,
      energy: 45.2,
      user: 'dev'
    }, {
      id: '2',
      name: 'Chrome (20 tabs)',
      pid: 5678,
      cpu: 78.3,
      memory: 4096000000,
      energy: 32.1,
      user: 'dev'
    }, {
      id: '3',
      name: 'Docker Desktop',
      pid: 9012,
      cpu: 45.6,
      memory: 6144000000,
      energy: 28.5,
      user: 'dev'
    }, {
      id: '4',
      name: 'VS Code',
      pid: 3456,
      cpu: 32.4,
      memory: 2048000000,
      energy: 15.8,
      user: 'dev'
    }, {
      id: '5',
      name: 'Slack',
      pid: 7890,
      cpu: 12.1,
      memory: 1024000000,
      energy: 8.3,
      user: 'dev'
    }, {
      id: '6',
      name: 'Spotify',
      pid: 2345,
      cpu: 8.7,
      memory: 512000000,
      energy: 4.2,
      user: 'dev'
    }],
    cpuMetrics: {
      label: 'CPU Usage',
      value: 89.5,
      unit: '%',
      trend: 'up',
      history: generateHistory(89, 5),
      color: 'rgb(255, 59, 48)'
    },
    memoryMetrics: {
      label: 'Memory Pressure',
      value: 87.2,
      unit: '%',
      trend: 'up',
      history: generateHistory(87, 4),
      color: 'rgb(255, 59, 48)'
    },
    energyMetrics: {
      label: 'Energy Impact',
      value: 92.8,
      unit: 'W',
      trend: 'up',
      history: generateHistory(92, 6),
      color: 'rgb(255, 149, 0)'
    },
    diskMetrics,
    networkMetrics,
    defaultTab: 'cpu',
    autoRefresh: false
  },
  decorators: [Story => <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>]
}`,...H.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: '😴 Caso de Uso: Baja Carga del Sistema',
  args: {
    processes: [{
      id: '1',
      name: 'Finder',
      pid: 1234,
      cpu: 1.2,
      memory: 128000000,
      energy: 0.8,
      user: 'user'
    }, {
      id: '2',
      name: 'Mail',
      pid: 5678,
      cpu: 2.5,
      memory: 256000000,
      energy: 1.5,
      user: 'user'
    }, {
      id: '3',
      name: 'Messages',
      pid: 9012,
      cpu: 1.8,
      memory: 192000000,
      energy: 1.2,
      user: 'user'
    }, {
      id: '4',
      name: 'Terminal',
      pid: 3456,
      cpu: 0.5,
      memory: 64000000,
      energy: 0.3,
      user: 'user'
    }],
    cpuMetrics: {
      label: 'CPU Usage',
      value: 8.2,
      unit: '%',
      trend: 'down',
      history: generateHistory(8, 2),
      color: 'rgb(52, 199, 89)'
    },
    memoryMetrics: {
      label: 'Memory Pressure',
      value: 15.4,
      unit: '%',
      trend: 'down',
      history: generateHistory(15, 3),
      color: 'rgb(52, 199, 89)'
    },
    energyMetrics: {
      label: 'Energy Impact',
      value: 6.5,
      unit: 'W',
      trend: 'down',
      history: generateHistory(6, 1),
      color: 'rgb(52, 199, 89)'
    },
    diskMetrics: {
      label: 'Disk Activity',
      value: 0.8,
      unit: 'MB/s',
      trend: 'neutral',
      history: generateHistory(0.8, 0.3),
      color: 'rgb(52, 199, 89)'
    },
    networkMetrics: {
      label: 'Network Activity',
      value: 0.2,
      unit: 'MB/s',
      trend: 'neutral',
      history: generateHistory(0.2, 0.1),
      color: 'rgb(52, 199, 89)'
    },
    defaultTab: 'cpu',
    autoRefresh: false
  },
  decorators: [Story => <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>]
}`,...V.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: '📭 Estado Vacío',
  args: {
    processes: [],
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'cpu',
    autoRefresh: false
  },
  decorators: [Story => <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>]
}`,...q.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: '🎨 Playground',
  args: {
    processes: sampleProcesses,
    cpuMetrics,
    memoryMetrics,
    energyMetrics,
    diskMetrics,
    networkMetrics,
    defaultTab: 'cpu',
    autoRefresh: false,
    refreshInterval: 1000
  },
  decorators: [Story => <div className="w-full max-w-6xl mx-auto">
                <Story />
            </div>]
}`,...$.parameters?.docs?.source}}};const $e=["Default","CPU","Memory","Energy","Disk","Network","WithAutoRefresh","WithProcessSelection","SystemMonitoring","HighLoadScenario","LowLoadScenario","EmptyState","Playground"];export{R as CPU,C as Default,A as Disk,q as EmptyState,I as Energy,H as HighLoadScenario,V as LowLoadScenario,D as Memory,U as Network,$ as Playground,B as SystemMonitoring,E as WithAutoRefresh,W as WithProcessSelection,$e as __namedExportsOrder,qe as default};
