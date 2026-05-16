import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BUF2whoS.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{sr as o,t as s}from"./lucide-react-D5svGO2N.js";var c,l,u,d,f,p=e((()=>{c=t(n()),r(),s(),l=a(),u=(e=20)=>Array.from({length:e},(t,n)=>({timestamp:Date.now()-(e-1-n)*6e4,cpu:30+Math.sin(n*.5)*20+Math.random()*10,memory:40+Math.cos(n*.3)*15+Math.random()*5,tokens:5+Math.sin(n*.8)*4+Math.random()*2})),d=({data:e,height:t=200,className:n})=>{if(!e.length)return null;let r=t=>t/(e.length-1)*100,a=e=>100-Math.min(e,100)/100*100;Math.max(...e.map(e=>e.tokens))*1.2;let o=t=>{let n=e.map((e,n)=>({x:r(n),y:a(t(e))})),i=`M ${n[0].x},${n[0].y}`;for(let e=0;e<n.length-1;e++){let t=n[e],r=n[e+1],a=t.x+(r.x-t.x)*.5,o=t.y,s=t.x+(r.x-t.x)*.5,c=r.y;i+=` C ${a},${o} ${s},${c} ${r.x},${r.y}`}return i},s=o(e=>e.cpu),c=o(e=>e.memory),u=`${s} L 100,100 L 0,100 Z`;return(0,l.jsxs)(`div`,{className:i(`relative w-full overflow-hidden`,n),style:{height:t},children:[(0,l.jsxs)(`div`,{className:`absolute inset-0 grid grid-cols-12 grid-rows-4 pointer-events-none`,children:[Array.from({length:4}).map((e,t)=>(0,l.jsx)(`div`,{className:`row-span-1 border-t border-white/5 w-full h-full`},t)),Array.from({length:12}).map((e,t)=>(0,l.jsx)(`div`,{className:`col-span-1 border-r border-white/5 h-full`},t))]}),(0,l.jsxs)(`svg`,{viewBox:`0 0 100 100`,className:`w-full h-full overflow-visible`,preserveAspectRatio:`none`,children:[(0,l.jsx)(`defs`,{children:(0,l.jsxs)(`linearGradient`,{id:`cpuGradient`,x1:`0`,y1:`0`,x2:`0`,y2:`1`,children:[(0,l.jsx)(`stop`,{offset:`0%`,stopColor:`#3b82f6`,stopOpacity:`0.2`}),(0,l.jsx)(`stop`,{offset:`100%`,stopColor:`#3b82f6`,stopOpacity:`0`})]})}),(0,l.jsx)(`path`,{d:u,fill:`url(#cpuGradient)`}),(0,l.jsx)(`path`,{d:c,fill:`none`,stroke:`rgb(165, 85, 65)`,strokeWidth:`0.5`,strokeDasharray:`1, 1`,strokeOpacity:`0.8`}),(0,l.jsx)(`path`,{d:s,fill:`none`,stroke:`#3b82f6`,strokeWidth:`0.8`})]}),(0,l.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 h-[1px] bg-blue-500/50 shadow-[0_0_10px_rgba(59,130,246,0.5)]`})]})},f=c.forwardRef(({data:e,currentCpu:t=42,currentMemory:n=2.4,currentTokens:r=8.4,autoRefresh:a=!0,refreshInterval:s=2e3,className:f,...p},m)=>{let[h,g]=(0,c.useState)(`realtime`),[_,v]=(0,c.useState)(e||u(20));return(0,c.useEffect)(()=>{if(!a)return;let e=setInterval(()=>{v(e=>{let t=[...e.slice(1)];return t.push({timestamp:Date.now(),cpu:30+Math.sin(Date.now()/1e3)*20+Math.random()*15,memory:40+Math.cos(Date.now()/2e3)*10+Math.random()*5,tokens:5+Math.sin(Date.now()/1500)*2+Math.random()*2}),t})},s);return()=>clearInterval(e)},[a,s]),(0,l.jsxs)(`div`,{ref:m,className:i(`bg-[#090C14] rounded-xl border border-white/10 shadow-xl overflow-hidden text-white font-sans`,f),...p,children:[(0,l.jsxs)(`div`,{className:`px-6 py-5 flex items-center justify-between`,children:[(0,l.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,l.jsx)(o,{className:`w-5 h-5 text-blue-500`}),(0,l.jsx)(`h2`,{className:`text-base font-semibold tracking-wide text-gray-200`,children:`Resource Monitor`})]}),(0,l.jsx)(`div`,{className:`flex bg-black/20 rounded-lg p-1 border border-white/5`,children:[`realtime`,`24h`,`7d`].map(e=>(0,l.jsx)(`button`,{onClick:()=>g(e),className:i(`px-3 py-1 text-xs font-medium rounded-md transition-all duration-200`,h===e?`bg-blue-600 text-white shadow-sm`:`text-gray-500 hover:text-gray-300`),children:e===`realtime`?`Real-time`:e},e))})]}),(0,l.jsxs)(`div`,{className:`px-6 flex items-center gap-8 mb-4`,children:[(0,l.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,l.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]`}),(0,l.jsx)(`span`,{className:`text-xs font-medium text-gray-400`,children:`CPU Usage:`}),(0,l.jsxs)(`span`,{className:`text-sm font-semibold text-gray-200`,children:[_[_.length-1]?.cpu.toFixed(0),`%`]})]}),(0,l.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,l.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full bg-[#A55541]`}),(0,l.jsx)(`span`,{className:`text-xs font-medium text-gray-400`,children:`Memory:`}),(0,l.jsxs)(`span`,{className:`text-sm font-semibold text-gray-200`,children:[n,` GB`]})]}),(0,l.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,l.jsx)(`div`,{className:`w-2.5 h-2.5 rounded-full bg-emerald-500`}),(0,l.jsx)(`span`,{className:`text-xs font-medium text-gray-400`,children:`Tokens/min:`}),(0,l.jsxs)(`span`,{className:`text-sm font-semibold text-gray-200`,children:[r,`k`]})]})]}),(0,l.jsx)(`div`,{className:`w-full h-48 bg-gradient-to-b from-transparent to-blue-500/5 relative`,children:(0,l.jsx)(d,{data:_,height:192})})]})}),f.displayName=`ResourceMonitor`,f.__docgenInfo={description:``,methods:[],displayName:`ResourceMonitor`,props:{data:{required:!1,tsType:{name:`Array`,elements:[{name:`ResourceDataPoint`}],raw:`ResourceDataPoint[]`},description:``},currentCpu:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`42`,computed:!1}},currentMemory:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2.4`,computed:!1}},currentTokens:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`8.4`,computed:!1}},autoRefresh:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},refreshInterval:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`2000`,computed:!1}}}}})),m,h,g,_,v,y,b,x,S,C;e((()=>{p(),m={title:`Data Display/ResourceMonitor`,component:f,tags:[`autodocs`]},h={args:{cpuUsage:45,memoryUsage:62,diskUsage:78,networkIn:1.2,networkOut:.8}},g={args:{cpuUsage:92,memoryUsage:88,diskUsage:95,networkIn:15.5,networkOut:12.3,label:`Production Server`}},_={args:{cpuUsage:12,memoryUsage:34,diskUsage:45,networkIn:.3,networkOut:.2,label:`API Server`}},v={args:{cpuUsage:35,memoryUsage:94,diskUsage:55,networkIn:2.1,networkOut:1.8,label:`Database Server`}},y={args:{cpuUsage:23,memoryUsage:45,diskUsage:67,networkIn:.5,networkOut:.4,uptime:`14d 6h 32m`,label:`Redis Cache`}},b={args:{cpuUsage:55,memoryUsage:72,diskUsage:60,networkIn:3.2,networkOut:2.9,uptime:`7d 12h`,label:`Web Server`,topProcesses:[{name:`node`,cpu:22,memory:18},{name:`nginx`,cpu:8,memory:5},{name:`postgres`,cpu:6,memory:24},{name:`redis`,cpu:3,memory:2}]}},x={args:{cpuUsage:67,memoryUsage:81,diskUsage:73,networkIn:8.5,networkOut:6.2,uptime:`32d 4h 15m`,label:`Main Application Server`,topProcesses:[{name:`node`,cpu:34,memory:28},{name:`postgres`,cpu:12,memory:15},{name:`nginx`,cpu:5,memory:3},{name:`sidekiq`,cpu:8,memory:6},{name:`prometheus`,cpu:4,memory:7}]}},S={parameters:{themes:{themeOverride:`dark`}},args:{cpuUsage:45,memoryUsage:62,diskUsage:78,networkIn:1.2,networkOut:.8,label:`Dark Mode Server`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    cpuUsage: 45,
    memoryUsage: 62,
    diskUsage: 78,
    networkIn: 1.2,
    networkOut: 0.8
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    cpuUsage: 92,
    memoryUsage: 88,
    diskUsage: 95,
    networkIn: 15.5,
    networkOut: 12.3,
    label: 'Production Server'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    cpuUsage: 12,
    memoryUsage: 34,
    diskUsage: 45,
    networkIn: 0.3,
    networkOut: 0.2,
    label: 'API Server'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    cpuUsage: 35,
    memoryUsage: 94,
    diskUsage: 55,
    networkIn: 2.1,
    networkOut: 1.8,
    label: 'Database Server'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    cpuUsage: 23,
    memoryUsage: 45,
    diskUsage: 67,
    networkIn: 0.5,
    networkOut: 0.4,
    uptime: '14d 6h 32m',
    label: 'Redis Cache'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    cpuUsage: 55,
    memoryUsage: 72,
    diskUsage: 60,
    networkIn: 3.2,
    networkOut: 2.9,
    uptime: '7d 12h',
    label: 'Web Server',
    topProcesses: [{
      name: 'node',
      cpu: 22,
      memory: 18
    }, {
      name: 'nginx',
      cpu: 8,
      memory: 5
    }, {
      name: 'postgres',
      cpu: 6,
      memory: 24
    }, {
      name: 'redis',
      cpu: 3,
      memory: 2
    }]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    cpuUsage: 67,
    memoryUsage: 81,
    diskUsage: 73,
    networkIn: 8.5,
    networkOut: 6.2,
    uptime: '32d 4h 15m',
    label: 'Main Application Server',
    topProcesses: [{
      name: 'node',
      cpu: 34,
      memory: 28
    }, {
      name: 'postgres',
      cpu: 12,
      memory: 15
    }, {
      name: 'nginx',
      cpu: 5,
      memory: 3
    }, {
      name: 'sidekiq',
      cpu: 8,
      memory: 6
    }, {
      name: 'prometheus',
      cpu: 4,
      memory: 7
    }]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    cpuUsage: 45,
    memoryUsage: 62,
    diskUsage: 78,
    networkIn: 1.2,
    networkOut: 0.8,
    label: 'Dark Mode Server'
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`HighLoad`,`IdealConditions`,`MemoryConstrained`,`WithUptime`,`WithProcesses`,`WithAllData`,`DarkMode`]}))();export{S as DarkMode,h as Default,g as HighLoad,_ as IdealConditions,v as MemoryConstrained,x as WithAllData,b as WithProcesses,y as WithUptime,C as __namedExportsOrder,m as default};