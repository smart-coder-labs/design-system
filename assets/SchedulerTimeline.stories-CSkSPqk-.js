import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-FxOJXbvx.js";import{B as T}from"./Button-C6s9DX-s.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-PznluMrK.js";const W=["January","February","March","April","May","June","July","August","September","October","November","December"],q=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],D=({resources:a,events:y,date:o,startHour:i=8,endHour:c=18,onEventClick:f,onTimeSlotClick:b,onDateChange:s,className:p=""})=>{const[u,S]=m.useState(new Date),w=m.useRef(null);m.useEffect(()=>{const e=setInterval(()=>S(new Date),6e4);return()=>clearInterval(e)},[]);const h=Array.from({length:c-i+1},(e,t)=>i+t),n=100,x=50,E=200,C=e=>{const[t,l]=e.split(":").map(Number);return t<i||t>c?-1:(t-i)*n+l/60*n},A=()=>{const e=new Date(o);e.setDate(o.getDate()-1),s?.(e)},z=()=>{const e=new Date(o);e.setDate(o.getDate()+1),s?.(e)},$=()=>{s?.(new Date)},F=(e,t)=>e.getDate()===t.getDate()&&e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear(),M=e=>F(e,new Date),R=()=>{const e=u,t=e.getHours(),l=e.getMinutes();return t<i||t>c?null:(t-i)*n+l/60*n},j=M(o)?R():null;return r.jsxs("div",{className:`scheduler-timeline ${p}`,style:{backgroundColor:"var(--color-background-primary)",borderRadius:"12px",border:"1px solid var(--color-border-primary)",boxShadow:"var(--shadow-sm)",display:"flex",flexDirection:"column",height:"100%",maxHeight:"800px",overflow:"hidden"},children:[r.jsx("div",{style:{padding:"16px",borderBottom:"1px solid var(--color-border-primary)",display:"flex",alignItems:"center",justifyContent:"space-between",backgroundColor:"var(--color-background-primary)"},children:r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[r.jsx(T,{variant:"ghost",size:"sm",onClick:A,children:"←"}),r.jsx(T,{variant:"ghost",size:"sm",onClick:$,children:"Today"}),r.jsx(T,{variant:"ghost",size:"sm",onClick:z,children:"→"}),r.jsxs("h3",{style:{margin:0,marginLeft:"8px",fontSize:"17px",fontWeight:"600",color:"var(--color-text-primary)"},children:[q[o.getDay()],", ",W[o.getMonth()]," ",o.getDate(),", ",o.getFullYear()]})]})}),r.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[r.jsxs("div",{style:{width:`${E}px`,flexShrink:0,borderRight:"1px solid var(--color-border-primary)",backgroundColor:"var(--color-background-secondary)",zIndex:20,boxShadow:"2px 0 5px rgba(0,0,0,0.05)"},children:[r.jsx("div",{style:{height:`${x}px`,borderBottom:"1px solid var(--color-border-primary)",display:"flex",alignItems:"center",padding:"0 16px",fontWeight:"600",color:"var(--color-text-secondary)",fontSize:"13px",backgroundColor:"var(--color-background-tertiary)"},children:"Resources"}),r.jsxs("div",{style:{overflowY:"hidden"},children:[" ",a.map(e=>r.jsxs("div",{style:{height:"80px",padding:"0 16px",display:"flex",flexDirection:"column",justifyContent:"center",borderBottom:"1px solid var(--color-border-secondary)",backgroundColor:"var(--color-background-primary)"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.avatar&&r.jsx("div",{style:{width:"24px",height:"24px",borderRadius:"50%",backgroundColor:e.color||"var(--color-accent-blue)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:"10px",fontWeight:"bold"},children:e.avatar}),r.jsx("div",{style:{fontWeight:"500",color:"var(--color-text-primary)"},children:e.name})]}),e.subtitle&&r.jsx("div",{style:{fontSize:"12px",color:"var(--color-text-tertiary)",marginTop:"2px"},children:e.subtitle})]},e.id))]})]}),r.jsx("div",{ref:w,style:{flex:1,overflowX:"auto",overflowY:"auto",position:"relative"},children:r.jsxs("div",{style:{minWidth:`${h.length*n}px`},children:[r.jsx("div",{style:{height:`${x}px`,display:"flex",borderBottom:"1px solid var(--color-border-primary)",position:"sticky",top:0,backgroundColor:"var(--color-background-primary)",zIndex:10},children:h.map(e=>r.jsxs("div",{style:{width:`${n}px`,flexShrink:0,padding:"8px",fontSize:"12px",color:"var(--color-text-tertiary)",borderRight:"1px solid var(--color-border-secondary)",display:"flex",alignItems:"center"},children:[e.toString().padStart(2,"0"),":00"]},e))}),r.jsxs("div",{style:{position:"relative"},children:[j!==null&&r.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:`${j}px`,width:"2px",backgroundColor:"var(--color-accent-red)",zIndex:5,pointerEvents:"none"},children:r.jsx("div",{style:{position:"absolute",top:"-6px",left:"-4px",width:"10px",height:"10px",borderRadius:"50%",backgroundColor:"var(--color-accent-red)"}})}),a.map(e=>r.jsxs("div",{style:{height:"80px",borderBottom:"1px solid var(--color-border-secondary)",position:"relative",backgroundImage:"linear-gradient(to right, transparent 99px, var(--color-border-secondary) 1px)",backgroundSize:`${n}px 100%`},children:[y.filter(t=>t.resourceId===e.id).filter(t=>!t.date||F(t.date,o)).map(t=>{const l=C(t.startTime),k=C(t.endTime);if(l===-1||k===-1)return null;const P=Math.max(k-l,2);return r.jsxs("div",{onClick:d=>{d.stopPropagation(),f?.(t)},style:{position:"absolute",left:`${l}px`,width:`${P}px`,top:"10px",bottom:"10px",backgroundColor:t.color||e.color||"var(--color-accent-blue)",borderRadius:"8px",padding:"8px",color:"#fff",fontSize:"12px",overflow:"hidden",cursor:"pointer",boxShadow:"var(--shadow-sm)",transition:"transform 0.2s",zIndex:1},onMouseEnter:d=>{d.currentTarget.style.transform="scale(1.02)",d.currentTarget.style.zIndex="10"},onMouseLeave:d=>{d.currentTarget.style.transform="scale(1)",d.currentTarget.style.zIndex="1"},children:[r.jsx("div",{style:{fontWeight:"bold",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:t.title}),t.description&&r.jsx("div",{style:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",opacity:.9},children:t.description})]},t.id)}),h.map(t=>r.jsx("div",{onClick:()=>b?.(e.id,`${t.toString().padStart(2,"0")}:00`),style:{position:"absolute",left:`${(t-i)*n}px`,width:`${n}px`,top:0,bottom:0,cursor:"pointer",zIndex:0},title:`Click to add event at ${t}:00`},t))]},e.id))]})]})})]})]})};D.__docgenInfo={description:"",methods:[],displayName:"SchedulerTimeline",props:{resources:{required:!0,tsType:{name:"Array",elements:[{name:"SchedulerResource"}],raw:"SchedulerResource[]"},description:""},events:{required:!0,tsType:{name:"Array",elements:[{name:"SchedulerEvent"}],raw:"SchedulerEvent[]"},description:""},date:{required:!0,tsType:{name:"Date"},description:""},startHour:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"8",computed:!1}},endHour:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"18",computed:!1}},onEventClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: SchedulerEvent) => void",signature:{arguments:[{type:{name:"SchedulerEvent"},name:"event"}],return:{name:"void"}}},description:""},onTimeSlotClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(resourceId: string, time: string) => void",signature:{arguments:[{type:{name:"string"},name:"resourceId"},{type:{name:"string"},name:"time"}],return:{name:"void"}}},description:""},onDateChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const _={title:"Data Display/SchedulerTimeline",component:D,parameters:{layout:"padded",docs:{description:{component:`
# Scheduler Timeline

A resource-based horizontal timeline component for scheduling and visualizing events across multiple resources (e.g., rooms, employees, equipment).

## Features

- 📊 **Resource View**: Lists resources on the left axis.
- 🕒 **Horizontal Timeline**: Visualizes time slots horizontally.
- 📅 **Date Navigation**: Navigate between days.
- 🖱️ **Interactive**: Click events and time slots.
- 🔴 **Current Time**: Visual indicator for the current time.
`}}},tags:[]},N=[{id:"r1",name:"Conference Room A",subtitle:"Capacity: 10",color:"#007AFF",avatar:"A"},{id:"r2",name:"Conference Room B",subtitle:"Capacity: 6",color:"#34C759",avatar:"B"},{id:"r3",name:"Executive Boardroom",subtitle:"Capacity: 20",color:"#AF52DE",avatar:"E"},{id:"r4",name:"Phone Booth 1",subtitle:"Capacity: 1",color:"#FF9500",avatar:"P1"},{id:"r5",name:"Phone Booth 2",subtitle:"Capacity: 1",color:"#FF9500",avatar:"P2"}],I=[{id:"e1",resourceId:"r1",title:"Team Standup",startTime:"09:00",endTime:"10:00",color:"#007AFF",date:new Date},{id:"e2",resourceId:"r1",title:"Product Review",startTime:"11:00",endTime:"12:30",color:"#5AC8FA",date:new Date},{id:"e3",resourceId:"r2",title:"Client Call",startTime:"10:00",endTime:"11:00",color:"#34C759",date:new Date},{id:"e4",resourceId:"r3",title:"Board Meeting",startTime:"14:00",endTime:"16:00",color:"#AF52DE",date:new Date},{id:"e5",resourceId:"r4",title:"Interview",startTime:"13:00",endTime:"14:00",color:"#FF9500",date:new Date}],B=a=>{const[y,o]=m.useState(new Date),[i,c]=m.useState(I),f=s=>{alert(`Clicked event: ${s.title}`)},b=(s,p)=>{const u=prompt(`Add event for resource ${s} at ${p}?`);if(u){const[S,w]=p.split(":").map(Number),n=`${(S+1).toString().padStart(2,"0")}:${w.toString().padStart(2,"0")}`,x={id:Date.now().toString(),resourceId:s,title:u,startTime:p,endTime:n,color:"#8E8E93"};c([...i,x])}};return r.jsx("div",{style:{height:"600px"},children:r.jsx(D,{...a,date:y,events:i,onDateChange:o,onEventClick:f,onTimeSlotClick:b})})},g={render:a=>r.jsx(B,{...a}),args:{resources:N,events:I,startHour:8,endHour:18}},v={render:a=>r.jsx(B,{...a}),args:{startHour:6,endHour:22,resources:[{id:"emp1",name:"Alice Smith",subtitle:"Manager",color:"#FF3B30",avatar:"AS"},{id:"emp2",name:"Bob Jones",subtitle:"Developer",color:"#007AFF",avatar:"BJ"},{id:"emp3",name:"Charlie Brown",subtitle:"Designer",color:"#FF9500",avatar:"CB"}],events:[{id:"s1",resourceId:"emp1",title:"Morning Shift",startTime:"08:00",endTime:"16:00",color:"#FF3B30",date:new Date},{id:"s2",resourceId:"emp2",title:"Day Shift",startTime:"10:00",endTime:"18:00",color:"#007AFF",date:new Date},{id:"s3",resourceId:"emp3",title:"Late Shift",startTime:"12:00",endTime:"20:00",color:"#FF9500",date:new Date}]}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <SchedulerWithState {...args} />,
  args: {
    resources: resources,
    events: initialEvents,
    startHour: 8,
    endHour: 18
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <SchedulerWithState {...args} />,
  args: {
    startHour: 6,
    endHour: 22,
    resources: [{
      id: 'emp1',
      name: 'Alice Smith',
      subtitle: 'Manager',
      color: '#FF3B30',
      avatar: 'AS'
    }, {
      id: 'emp2',
      name: 'Bob Jones',
      subtitle: 'Developer',
      color: '#007AFF',
      avatar: 'BJ'
    }, {
      id: 'emp3',
      name: 'Charlie Brown',
      subtitle: 'Designer',
      color: '#FF9500',
      avatar: 'CB'
    }],
    events: [{
      id: 's1',
      resourceId: 'emp1',
      title: 'Morning Shift',
      startTime: '08:00',
      endTime: '16:00',
      color: '#FF3B30',
      date: new Date()
    }, {
      id: 's2',
      resourceId: 'emp2',
      title: 'Day Shift',
      startTime: '10:00',
      endTime: '18:00',
      color: '#007AFF',
      date: new Date()
    }, {
      id: 's3',
      resourceId: 'emp3',
      title: 'Late Shift',
      startTime: '12:00',
      endTime: '20:00',
      color: '#FF9500',
      date: new Date()
    }]
  }
}`,...v.parameters?.docs?.source}}};const O=["Default","EmployeeShifts"];export{g as Default,v as EmployeeShifts,O as __namedExportsOrder,_ as default};
