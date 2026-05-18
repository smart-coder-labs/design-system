import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-XNVef-eS.js";import{t as r}from"./jsx-runtime-DaLCRA3n.js";import{n as i,t as a}from"./Button-Do7oE33J.js";var o,s,c,l,u,d=e((()=>{o=t(n()),a(),s=r(),c=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],l=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],u=({resources:e,events:t,date:n,startHour:r=8,endHour:a=18,onEventClick:u,onTimeSlotClick:d,onDateChange:f,className:p=``})=>{let[m,h]=(0,o.useState)(new Date),g=(0,o.useRef)(null);(0,o.useEffect)(()=>{let e=setInterval(()=>h(new Date),6e4);return()=>clearInterval(e)},[]);let _=Array.from({length:a-r+1},(e,t)=>r+t),v=e=>{let[t,n]=e.split(`:`).map(Number);return t<r||t>a?-1:(t-r)*100+n/60*100},y=()=>{let e=new Date(n);e.setDate(n.getDate()-1),f?.(e)},b=()=>{let e=new Date(n);e.setDate(n.getDate()+1),f?.(e)},x=()=>{f?.(new Date)},S=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),C=(e=>S(e,new Date))(n)?(()=>{let e=m,t=e.getHours(),n=e.getMinutes();return t<r||t>a?null:(t-r)*100+n/60*100})():null;return(0,s.jsxs)(`div`,{className:`scheduler-timeline ${p}`,style:{backgroundColor:`var(--color-background-primary)`,borderRadius:`12px`,border:`1px solid var(--color-border-primary)`,boxShadow:`var(--shadow-sm)`,display:`flex`,flexDirection:`column`,height:`100%`,maxHeight:`800px`,overflow:`hidden`},children:[(0,s.jsx)(`div`,{style:{padding:`16px`,borderBottom:`1px solid var(--color-border-primary)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,backgroundColor:`var(--color-background-primary)`},children:(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,s.jsx)(i,{variant:`ghost`,size:`sm`,onClick:y,children:`←`}),(0,s.jsx)(i,{variant:`ghost`,size:`sm`,onClick:x,children:`Today`}),(0,s.jsx)(i,{variant:`ghost`,size:`sm`,onClick:b,children:`→`}),(0,s.jsxs)(`h3`,{style:{margin:0,marginLeft:`8px`,fontSize:`17px`,fontWeight:`600`,color:`var(--color-text-primary)`},children:[l[n.getDay()],`, `,c[n.getMonth()],` `,n.getDate(),`, `,n.getFullYear()]})]})}),(0,s.jsxs)(`div`,{style:{display:`flex`,flex:1,overflow:`hidden`},children:[(0,s.jsxs)(`div`,{style:{width:`200px`,flexShrink:0,borderRight:`1px solid var(--color-border-primary)`,backgroundColor:`var(--color-background-secondary)`,zIndex:20,boxShadow:`2px 0 5px rgba(0,0,0,0.05)`},children:[(0,s.jsx)(`div`,{style:{height:`50px`,borderBottom:`1px solid var(--color-border-primary)`,display:`flex`,alignItems:`center`,padding:`0 16px`,fontWeight:`600`,color:`var(--color-text-secondary)`,fontSize:`13px`,backgroundColor:`var(--color-background-tertiary)`},children:`Resources`}),(0,s.jsxs)(`div`,{style:{overflowY:`hidden`},children:[` `,e.map(e=>(0,s.jsxs)(`div`,{style:{height:`80px`,padding:`0 16px`,display:`flex`,flexDirection:`column`,justifyContent:`center`,borderBottom:`1px solid var(--color-border-secondary)`,backgroundColor:`var(--color-background-primary)`},children:[(0,s.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[e.avatar&&(0,s.jsx)(`div`,{style:{width:`24px`,height:`24px`,borderRadius:`50%`,backgroundColor:e.color||`var(--color-accent-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#fff`,fontSize:`10px`,fontWeight:`bold`},children:e.avatar}),(0,s.jsx)(`div`,{style:{fontWeight:`500`,color:`var(--color-text-primary)`},children:e.name})]}),e.subtitle&&(0,s.jsx)(`div`,{style:{fontSize:`12px`,color:`var(--color-text-tertiary)`,marginTop:`2px`},children:e.subtitle})]},e.id))]})]}),(0,s.jsx)(`div`,{ref:g,style:{flex:1,overflowX:`auto`,overflowY:`auto`,position:`relative`},children:(0,s.jsxs)(`div`,{style:{minWidth:`${_.length*100}px`},children:[(0,s.jsx)(`div`,{style:{height:`50px`,display:`flex`,borderBottom:`1px solid var(--color-border-primary)`,position:`sticky`,top:0,backgroundColor:`var(--color-background-primary)`,zIndex:10},children:_.map(e=>(0,s.jsxs)(`div`,{style:{width:`100px`,flexShrink:0,padding:`8px`,fontSize:`12px`,color:`var(--color-text-tertiary)`,borderRight:`1px solid var(--color-border-secondary)`,display:`flex`,alignItems:`center`},children:[e.toString().padStart(2,`0`),`:00`]},e))}),(0,s.jsxs)(`div`,{style:{position:`relative`},children:[C!==null&&(0,s.jsx)(`div`,{style:{position:`absolute`,top:0,bottom:0,left:`${C}px`,width:`2px`,backgroundColor:`var(--color-accent-red)`,zIndex:5,pointerEvents:`none`},children:(0,s.jsx)(`div`,{style:{position:`absolute`,top:`-6px`,left:`-4px`,width:`10px`,height:`10px`,borderRadius:`50%`,backgroundColor:`var(--color-accent-red)`}})}),e.map(e=>(0,s.jsxs)(`div`,{style:{height:`80px`,borderBottom:`1px solid var(--color-border-secondary)`,position:`relative`,backgroundImage:`linear-gradient(to right, transparent 99px, var(--color-border-secondary) 1px)`,backgroundSize:`100px 100%`},children:[t.filter(t=>t.resourceId===e.id).filter(e=>!e.date||S(e.date,n)).map(t=>{let n=v(t.startTime),r=v(t.endTime);if(n===-1||r===-1)return null;let i=Math.max(r-n,2);return(0,s.jsxs)(`div`,{onClick:e=>{e.stopPropagation(),u?.(t)},style:{position:`absolute`,left:`${n}px`,width:`${i}px`,top:`10px`,bottom:`10px`,backgroundColor:t.color||e.color||`var(--color-accent-blue)`,borderRadius:`8px`,padding:`8px`,color:`#fff`,fontSize:`12px`,overflow:`hidden`,cursor:`pointer`,boxShadow:`var(--shadow-sm)`,transition:`transform 0.2s`,zIndex:1},onMouseEnter:e=>{e.currentTarget.style.transform=`scale(1.02)`,e.currentTarget.style.zIndex=`10`},onMouseLeave:e=>{e.currentTarget.style.transform=`scale(1)`,e.currentTarget.style.zIndex=`1`},children:[(0,s.jsx)(`div`,{style:{fontWeight:`bold`,whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`},children:t.title}),t.description&&(0,s.jsx)(`div`,{style:{whiteSpace:`nowrap`,overflow:`hidden`,textOverflow:`ellipsis`,opacity:.9},children:t.description})]},t.id)}),_.map(t=>(0,s.jsx)(`div`,{onClick:()=>d?.(e.id,`${t.toString().padStart(2,`0`)}:00`),style:{position:`absolute`,left:`${(t-r)*100}px`,width:`100px`,top:0,bottom:0,cursor:`pointer`,zIndex:0},title:`Click to add event at ${t}:00`},t))]},e.id))]})]})})]})]})},u.__docgenInfo={description:``,methods:[],displayName:`SchedulerTimeline`,props:{resources:{required:!0,tsType:{name:`Array`,elements:[{name:`SchedulerResource`}],raw:`SchedulerResource[]`},description:``},events:{required:!0,tsType:{name:`Array`,elements:[{name:`SchedulerEvent`}],raw:`SchedulerEvent[]`},description:``},date:{required:!0,tsType:{name:`Date`},description:``},startHour:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`8`,computed:!1}},endHour:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`18`,computed:!1}},onEventClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: SchedulerEvent) => void`,signature:{arguments:[{type:{name:`SchedulerEvent`},name:`event`}],return:{name:`void`}}},description:``},onTimeSlotClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(resourceId: string, time: string) => void`,signature:{arguments:[{type:{name:`string`},name:`resourceId`},{type:{name:`string`},name:`time`}],return:{name:`void`}}},description:``},onDateChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(date: Date) => void`,signature:{arguments:[{type:{name:`Date`},name:`date`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),f,p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{d(),f=t(n()),p=r(),m={title:`Data Display/SchedulerTimeline`,component:u,tags:[`autodocs`]},h=[{id:`1`,name:`Alice Johnson`,subtitle:`Senior Advisor`,color:`#3B82F6`},{id:`2`,name:`Bob Smith`,subtitle:`Financial Analyst`,color:`#10B981`},{id:`3`,name:`Carol White`,subtitle:`Portfolio Manager`,color:`#F59E0B`}],g=[{id:`e1`,resourceId:`1`,title:`Client Review`,startTime:`09:00`,endTime:`10:30`,color:`#3B82F6`},{id:`e2`,resourceId:`1`,title:`Market Analysis`,startTime:`11:00`,endTime:`12:00`,color:`#8B5CF6`},{id:`e3`,resourceId:`2`,title:`Portfolio Rebalance`,startTime:`10:00`,endTime:`11:30`,color:`#10B981`},{id:`e4`,resourceId:`2`,title:`Lunch Break`,startTime:`12:00`,endTime:`13:00`,color:`#6B7280`},{id:`e5`,resourceId:`3`,title:`Investment Committee`,startTime:`09:30`,endTime:`11:00`,color:`#F59E0B`}],_={args:{resources:h,events:g,date:new Date,onEventClick:e=>console.log(`Event clicked:`,e.title),onTimeSlotClick:(e,t)=>console.log(`Slot:`,e,t)}},v={args:{resources:h,events:[{id:`e1`,resourceId:`1`,title:`Opening Briefing`,startTime:`08:00`,endTime:`09:00`,color:`#3B82F6`},{id:`e2`,resourceId:`1`,title:`Client Onboarding`,startTime:`09:30`,endTime:`11:00`,color:`#8B5CF6`},{id:`e3`,resourceId:`1`,title:`Strategy Session`,startTime:`13:00`,endTime:`15:00`,color:`#EC4899`},{id:`e4`,resourceId:`2`,title:`Risk Assessment`,startTime:`08:30`,endTime:`10:00`,color:`#10B981`},{id:`e5`,resourceId:`2`,title:`Report Review`,startTime:`14:00`,endTime:`16:00`,color:`#14B8A6`},{id:`e6`,resourceId:`3`,title:`Fund Performance`,startTime:`09:00`,endTime:`12:00`,color:`#F59E0B`},{id:`e7`,resourceId:`3`,title:`Compliance Check`,startTime:`13:30`,endTime:`14:30`,color:`#EF4444`},{id:`e8`,resourceId:`3`,title:`End of Day Review`,startTime:`16:00`,endTime:`17:00`,color:`#6366F1`}],date:new Date,startHour:8,endHour:18,onEventClick:e=>console.log(`Event:`,e.title)}},y={args:{resources:[{id:`1`,name:`My Schedule`,subtitle:`Personal Calendar`,color:`#3B82F6`}],events:[{id:`e1`,resourceId:`1`,title:`Morning Review`,startTime:`09:00`,endTime:`10:00`,color:`#3B82F6`},{id:`e2`,resourceId:`1`,title:`Call with Client`,startTime:`10:30`,endTime:`11:30`,color:`#10B981`},{id:`e3`,resourceId:`1`,title:`Lunch`,startTime:`12:00`,endTime:`13:00`,color:`#6B7280`},{id:`e4`,resourceId:`1`,title:`Team Standup`,startTime:`14:00`,endTime:`14:30`,color:`#8B5CF6`}],date:new Date,onEventClick:e=>console.log(`Event:`,e.title)}},b={render:()=>{let[e,t]=(0,f.useState)([]);return(0,p.jsxs)(`div`,{className:`space-y-4`,children:[(0,p.jsx)(u,{resources:h,events:g,date:new Date,onEventClick:e=>t(t=>[...t,`Clicked: ${e.title}`]),onTimeSlotClick:(e,n)=>t(t=>[...t,`Slot ${e} at ${n}`])}),(0,p.jsxs)(`div`,{className:`p-3 bg-surface-secondary rounded-lg border border-border-primary`,children:[(0,p.jsx)(`h4`,{className:`text-xs font-semibold text-text-secondary mb-1`,children:`Interaction Log`}),(0,p.jsxs)(`div`,{className:`text-xs font-mono text-text-secondary space-y-0.5 max-h-24 overflow-y-auto`,children:[e.length===0&&(0,p.jsx)(`p`,{className:`text-text-tertiary`,children:`No interactions yet`}),e.map((e,t)=>(0,p.jsx)(`p`,{children:e},t))]})]})]})}},x={args:{resources:[{id:`1`,name:`Alice Johnson`,subtitle:`Senior Advisor`,color:`#3B82F6`},{id:`2`,name:`Bob Smith`,subtitle:`Analyst`,color:`#10B981`},{id:`3`,name:`Carol White`,subtitle:`Manager`,color:`#F59E0B`},{id:`4`,name:`David Brown`,subtitle:`Intern`,color:`#EC4899`},{id:`5`,name:`Eve Davis`,subtitle:`Consultant`,color:`#8B5CF6`}],events:g,date:new Date,onEventClick:e=>console.log(`Event:`,e.title)}},S={args:{resources:h,events:[],date:new Date,onEventClick:e=>console.log(`Event:`,e.title)}},C={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,p.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,p.jsx)(e,{})})]},w={parameters:{viewport:{defaultViewport:`mobile1`}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    resources: defaultResources,
    events: defaultEvents,
    date: new Date(),
    onEventClick: event => console.log('Event clicked:', event.title),
    onTimeSlotClick: (resourceId, time) => console.log('Slot:', resourceId, time)
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    resources: defaultResources,
    events: [{
      id: 'e1',
      resourceId: '1',
      title: 'Opening Briefing',
      startTime: '08:00',
      endTime: '09:00',
      color: '#3B82F6'
    }, {
      id: 'e2',
      resourceId: '1',
      title: 'Client Onboarding',
      startTime: '09:30',
      endTime: '11:00',
      color: '#8B5CF6'
    }, {
      id: 'e3',
      resourceId: '1',
      title: 'Strategy Session',
      startTime: '13:00',
      endTime: '15:00',
      color: '#EC4899'
    }, {
      id: 'e4',
      resourceId: '2',
      title: 'Risk Assessment',
      startTime: '08:30',
      endTime: '10:00',
      color: '#10B981'
    }, {
      id: 'e5',
      resourceId: '2',
      title: 'Report Review',
      startTime: '14:00',
      endTime: '16:00',
      color: '#14B8A6'
    }, {
      id: 'e6',
      resourceId: '3',
      title: 'Fund Performance',
      startTime: '09:00',
      endTime: '12:00',
      color: '#F59E0B'
    }, {
      id: 'e7',
      resourceId: '3',
      title: 'Compliance Check',
      startTime: '13:30',
      endTime: '14:30',
      color: '#EF4444'
    }, {
      id: 'e8',
      resourceId: '3',
      title: 'End of Day Review',
      startTime: '16:00',
      endTime: '17:00',
      color: '#6366F1'
    }],
    date: new Date(),
    startHour: 8,
    endHour: 18,
    onEventClick: event => console.log('Event:', event.title)
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    resources: [{
      id: '1',
      name: 'My Schedule',
      subtitle: 'Personal Calendar',
      color: '#3B82F6'
    }],
    events: [{
      id: 'e1',
      resourceId: '1',
      title: 'Morning Review',
      startTime: '09:00',
      endTime: '10:00',
      color: '#3B82F6'
    }, {
      id: 'e2',
      resourceId: '1',
      title: 'Call with Client',
      startTime: '10:30',
      endTime: '11:30',
      color: '#10B981'
    }, {
      id: 'e3',
      resourceId: '1',
      title: 'Lunch',
      startTime: '12:00',
      endTime: '13:00',
      color: '#6B7280'
    }, {
      id: 'e4',
      resourceId: '1',
      title: 'Team Standup',
      startTime: '14:00',
      endTime: '14:30',
      color: '#8B5CF6'
    }],
    date: new Date(),
    onEventClick: event => console.log('Event:', event.title)
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [log, setLog] = useState<string[]>([]);
    return <div className="space-y-4">
                <SchedulerTimeline resources={defaultResources} events={defaultEvents} date={new Date()} onEventClick={event => setLog(prev => [...prev, \`Clicked: \${event.title}\`])} onTimeSlotClick={(resourceId, time) => setLog(prev => [...prev, \`Slot \${resourceId} at \${time}\`])} />
                <div className="p-3 bg-surface-secondary rounded-lg border border-border-primary">
                    <h4 className="text-xs font-semibold text-text-secondary mb-1">Interaction Log</h4>
                    <div className="text-xs font-mono text-text-secondary space-y-0.5 max-h-24 overflow-y-auto">
                        {log.length === 0 && <p className="text-text-tertiary">No interactions yet</p>}
                        {log.map((entry, i) => <p key={i}>{entry}</p>)}
                    </div>
                </div>
            </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    resources: [{
      id: '1',
      name: 'Alice Johnson',
      subtitle: 'Senior Advisor',
      color: '#3B82F6'
    }, {
      id: '2',
      name: 'Bob Smith',
      subtitle: 'Analyst',
      color: '#10B981'
    }, {
      id: '3',
      name: 'Carol White',
      subtitle: 'Manager',
      color: '#F59E0B'
    }, {
      id: '4',
      name: 'David Brown',
      subtitle: 'Intern',
      color: '#EC4899'
    }, {
      id: '5',
      name: 'Eve Davis',
      subtitle: 'Consultant',
      color: '#8B5CF6'
    }],
    events: defaultEvents,
    date: new Date(),
    onEventClick: event => console.log('Event:', event.title)
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    resources: defaultResources,
    events: [],
    date: new Date(),
    onEventClick: event => console.log('Event:', event.title)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`FullDayView`,`SingleResource`,`WithTimeSlotInteraction`,`ManyResources`,`EmptyTimeline`,`DarkMode`,`MobileView`]}))();export{C as DarkMode,_ as Default,S as EmptyTimeline,v as FullDayView,x as ManyResources,w as MobileView,y as SingleResource,b as WithTimeSlotInteraction,T as __namedExportsOrder,m as default};