import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-vYzePaRW.js";import{B as f}from"./Button-Bvw_y_KB.js";import{M as xe,d as ve,a as we,b as ye,f as Te,c as fe}from"./Modal-Bq1BLBQh.js";import{I as $,T as Fe}from"./Input-CMy390L3.js";import{S as Ce,a as Se,b as je,c as be,f as Ae}from"./Select-DT2WwEkS.js";import{A as Ee}from"./AgendaView-COzcoJET.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-DMGrdN83.js";import"./index-BJIm5mAp.js";import"./index-DweI-fs8.js";import"./index-4cmsJ5fh.js";import"./utils-CDN07tui.js";import"./chevron-down-BBlmTaJ5.js";import"./createLucideIcon-Ckxz52bH.js";import"./check-Bwk7sq60.js";const X=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ke=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],j=["January","February","March","April","May","June","July","August","September","October","November","December"],Me=[{value:"#007AFF",label:"Blue"},{value:"#34C759",label:"Green"},{value:"#FF9500",label:"Orange"},{value:"#FF3B30",label:"Red"},{value:"#5AC8FA",label:"Cyan"},{value:"#AF52DE",label:"Purple"}],H=({value:o,onChange:d,events:F=[],onAddEvent:g,onUpdateEvent:h,onDeleteEvent:A,minDate:_,maxDate:L,highlightToday:K=!0,defaultView:ee="month",className:te=""})=>{const[r,v]=x.useState(o||new Date),[O,U]=x.useState(o||null),[i,ne]=x.useState(ee),[ae,C]=x.useState(!1),[w,M]=x.useState(null),[Z,Re]=x.useState(30),[s,D]=x.useState({title:"",description:"",date:new Date,startTime:"09:00",endTime:"10:00",color:"#007AFF",location:""}),Y=new Date;Y.setHours(0,0,0,0);const G=e=>new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),re=e=>new Date(e.getFullYear(),e.getMonth(),1).getDay(),R=(e,l)=>e.getDate()===l.getDate()&&e.getMonth()===l.getMonth()&&e.getFullYear()===l.getFullYear(),J=e=>!!(_&&e<_||L&&e>L),N=e=>F.filter(l=>R(l.date,e)),ie=()=>{if(i==="month")v(new Date(r.getFullYear(),r.getMonth()-1));else if(i==="week"){const e=new Date(r);e.setDate(e.getDate()-7),v(e)}else if(i==="day"){const e=new Date(r);e.setDate(e.getDate()-1),v(e)}},oe=()=>{if(i==="month")v(new Date(r.getFullYear(),r.getMonth()+1));else if(i==="week"){const e=new Date(r);e.setDate(e.getDate()+7),v(e)}else if(i==="day"){const e=new Date(r);e.setDate(e.getDate()+1),v(e)}},se=()=>{v(new Date),U(new Date),d?.(new Date)},le=e=>{J(e)||(U(e),D({...s,date:e}),d?.(e))},de=()=>{M(null),D({title:"",description:"",date:O||new Date,startTime:"09:00",endTime:"10:00",color:"#007AFF",location:""}),C(!0)},V=e=>{M(e),D({title:e.title,description:e.description||"",date:e.date,startTime:e.startTime||"09:00",endTime:e.endTime||"10:00",color:e.color||"#007AFF",location:e.location||""}),C(!0)},ce=()=>{s.title.trim()&&(w?h?.(w.id,{...s}):g?.({...s}),C(!1),M(null))},pe=()=>{w&&(A?.(w.id),C(!1),M(null))},Q=()=>{const e=new Date(r),l=e.getDay();e.setDate(e.getDate()-l);const n=[];for(let c=0;c<7;c++){const m=new Date(e);m.setDate(m.getDate()+c),n.push(m)}return n},me=()=>{const e=G(r),l=re(r),n=[],c=G(new Date(r.getFullYear(),r.getMonth()-1));for(let a=l-1;a>=0;a--){const p=c-a;n.push(t.jsx("div",{className:"calendar-day-other",style:{padding:"8px",minHeight:"80px",color:"var(--color-text-quaternary)",fontSize:"13px"},children:p},`prev-${p}`))}for(let a=1;a<=e;a++){const p=new Date(r.getFullYear(),r.getMonth(),a),y=K&&R(p,Y),k=O&&R(p,O),T=J(p),S=N(p);n.push(t.jsxs("div",{onClick:()=>!T&&le(p),style:{padding:"8px",minHeight:"80px",backgroundColor:k?"var(--color-accent-blue-tint)":"transparent",border:y?"2px solid var(--color-accent-blue)":"1px solid var(--color-border-secondary)",borderRadius:"8px",cursor:T?"not-allowed":"pointer",opacity:T?.4:1,transition:"all 0.2s var(--ease-apple)"},onMouseEnter:u=>{T||(u.currentTarget.style.backgroundColor=k?"var(--color-accent-blue-tint)":"var(--color-background-secondary)")},onMouseLeave:u=>{T||(u.currentTarget.style.backgroundColor=k?"var(--color-accent-blue-tint)":"transparent")},children:[t.jsx("div",{style:{fontWeight:y?"600":"400",color:y?"var(--color-accent-blue)":"var(--color-text-primary)",marginBottom:"4px"},children:a}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[S.slice(0,3).map(u=>t.jsxs("div",{onClick:De=>{De.stopPropagation(),V(u)},style:{fontSize:"12px",padding:"2px 4px",backgroundColor:u.color||"var(--color-accent-blue)",color:"#FFFFFF",borderRadius:"4px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",cursor:"pointer"},children:[u.startTime&&`${u.startTime} `,u.title]},u.id)),S.length>3&&t.jsxs("div",{style:{fontSize:"12px",color:"var(--color-text-tertiary)",paddingLeft:"4px"},children:["+",S.length-3," more"]})]})]},`current-${a}`))}const m=n.length,E=m%7===0?0:7-m%7;for(let a=1;a<=E;a++)n.push(t.jsx("div",{className:"calendar-day-other",style:{padding:"8px",minHeight:"80px",color:"var(--color-text-quaternary)",fontSize:"13px"},children:a},`next-${a}`));return n},ue=()=>{const e=Q(),l=Array.from({length:24},(n,c)=>c);return t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("div",{style:{width:"60px",flexShrink:0},children:[t.jsx("div",{style:{height:"60px"}}),l.map(n=>t.jsxs("div",{style:{height:"60px",fontSize:"12px",color:"var(--color-text-tertiary)",paddingTop:"4px"},children:[n.toString().padStart(2,"0"),":00"]},n))]}),e.map((n,c)=>{const m=R(n,Y),E=N(n);return t.jsxs("div",{style:{flex:1,minWidth:"100px"},children:[t.jsxs("div",{style:{height:"60px",textAlign:"center",padding:"8px",backgroundColor:m?"var(--color-accent-blue-tint)":"transparent",borderRadius:"8px"},children:[t.jsx("div",{style:{fontSize:"12px",color:"var(--color-text-tertiary)"},children:X[n.getDay()]}),t.jsx("div",{style:{fontSize:"17px",fontWeight:m?"700":"500",color:m?"var(--color-accent-blue)":"var(--color-text-primary)"},children:n.getDate()})]}),t.jsxs("div",{style:{position:"relative"},children:[l.map(a=>t.jsx("div",{style:{height:"60px",borderTop:"1px solid var(--color-border-secondary)"}},a)),E.map(a=>{const p=a.startTime?parseInt(a.startTime.split(":")[0]):9,y=a.startTime?parseInt(a.startTime.split(":")[1]):0,k=a.endTime?parseInt(a.endTime.split(":")[0]):10,T=a.endTime?parseInt(a.endTime.split(":")[1]):0,S=p*60+y,u=k*60+T-S;return t.jsxs("div",{onClick:()=>V(a),style:{position:"absolute",top:`${S}px`,height:`${Math.max(u-2,20)}px`,left:"4px",right:"4px",backgroundColor:a.color||"var(--color-accent-blue)",color:"#FFFFFF",borderRadius:"4px",padding:"4px",fontSize:"12px",overflow:"hidden",cursor:"pointer",zIndex:10},children:[t.jsx("div",{style:{fontWeight:"600"},children:a.title}),a.startTime&&t.jsxs("div",{children:[a.startTime," - ",a.endTime]})]},a.id)})]})]},c)})]})},ge=()=>{const e=Array.from({length:24},(n,c)=>c),l=N(r);return t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx("div",{style:{width:"80px",flexShrink:0},children:e.map(n=>t.jsxs("div",{style:{height:"80px",fontSize:"13px",color:"var(--color-text-tertiary)",paddingTop:"8px"},children:[n.toString().padStart(2,"0"),":00"]},n))}),t.jsxs("div",{style:{flex:1,position:"relative"},children:[e.map(n=>t.jsx("div",{style:{height:"80px",borderTop:"1px solid var(--color-border-secondary)"}},n)),l.map(n=>{const c=n.startTime?parseInt(n.startTime.split(":")[0]):9,m=n.startTime?parseInt(n.startTime.split(":")[1]):0,E=n.endTime?parseInt(n.endTime.split(":")[0]):10,a=n.endTime?parseInt(n.endTime.split(":")[1]):0,p=c*80+m*80/60,y=E*80+a*80/60-p;return t.jsxs("div",{onClick:()=>V(n),style:{position:"absolute",top:`${p}px`,height:`${Math.max(y-2,30)}px`,left:"8px",right:"8px",backgroundColor:n.color||"var(--color-accent-blue)",color:"#FFFFFF",borderRadius:"8px",padding:"8px",fontSize:"13px",overflow:"hidden",cursor:"pointer",boxShadow:"var(--shadow-sm)",zIndex:10},children:[t.jsx("div",{style:{fontWeight:"700",marginBottom:"4px"},children:n.title}),t.jsxs("div",{style:{fontSize:"12px"},children:[n.startTime," - ",n.endTime]}),n.location&&t.jsxs("div",{style:{fontSize:"12px",marginTop:"4px"},children:["📍 ",n.location]})]},n.id)})]})]})},he=()=>{if(i==="month")return`${j[r.getMonth()]} ${r.getFullYear()}`;if(i==="week"){const e=Q(),l=e[0],n=e[6];return`${j[l.getMonth()]} ${l.getDate()} - ${j[n.getMonth()]} ${n.getDate()}, ${n.getFullYear()}`}else{if(i==="day")return`${ke[r.getDay()]}, ${j[r.getMonth()]} ${r.getDate()}, ${r.getFullYear()}`;if(i==="agenda"){const e=new Date(r);return e.setDate(e.getDate()+Z-1),`${j[r.getMonth()]} ${r.getDate()} - ${j[e.getMonth()]} ${e.getDate()}, ${e.getFullYear()}`}else return"Agenda"}};return t.jsxs("div",{className:`calendar ${te}`,style:{backgroundColor:"var(--color-background-primary)",borderRadius:"12px",padding:"16px",border:"1px solid var(--color-border-primary)",boxShadow:"var(--shadow-sm)",width:"100%",maxWidth:i==="month"?"800px":"100%"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"16px",flexWrap:"wrap",gap:"8px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[i!=="agenda"&&t.jsxs(t.Fragment,{children:[t.jsx(f,{variant:"ghost",size:"sm",onClick:ie,children:"←"}),t.jsx(f,{variant:"ghost",size:"sm",onClick:se,children:"Today"}),t.jsx(f,{variant:"ghost",size:"sm",onClick:oe,children:"→"})]}),t.jsx("h3",{style:{margin:0,fontSize:"17px",fontWeight:"600",color:"var(--color-text-primary)"},children:he()})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("div",{style:{display:"flex",gap:"4px",backgroundColor:"var(--color-background-secondary)",borderRadius:"8px",padding:"2px"},children:["month","week","day","agenda"].map(e=>t.jsx("button",{onClick:()=>ne(e),style:{padding:"4px 12px",fontSize:"13px",fontWeight:"500",color:i===e?"#FFFFFF":"var(--color-text-secondary)",backgroundColor:i===e?"var(--color-accent-blue)":"transparent",border:"none",borderRadius:"4px",cursor:"pointer",transition:"all 0.2s var(--ease-apple)",textTransform:"capitalize"},children:e},e))}),t.jsx(f,{variant:"primary",size:"sm",onClick:de,children:"+ Add Event"})]})]}),i==="month"&&t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:"4px",marginBottom:"8px"},children:X.map(e=>t.jsx("div",{style:{padding:"8px",textAlign:"center",fontSize:"12px",fontWeight:"600",color:"var(--color-text-tertiary)",textTransform:"uppercase"},children:e},e))}),t.jsxs("div",{style:{overflowX:"auto"},children:[i==="month"&&t.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(7, 1fr)",gap:"4px"},children:me()}),i==="week"&&ue(),i==="day"&&ge(),i==="agenda"&&t.jsx(Ee,{events:F,currentDate:r,days:Z,onEventClick:V})]}),t.jsxs(xe,{open:ae,onOpenChange:C,size:"md",children:[t.jsx(ve,{}),t.jsx(we,{children:t.jsx(ye,{children:w?"Edit Event":"Add Event"})}),t.jsx(Te,{children:t.jsxs("div",{className:"space-y-4",children:[t.jsx($,{label:"Title",placeholder:"Event title",value:s.title,onChange:e=>D({...s,title:e.target.value}),required:!0}),t.jsx(Fe,{label:"Description",placeholder:"Event description (optional)",value:s.description,onChange:e=>D({...s,description:e.target.value}),rows:3}),t.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[t.jsx($,{label:"Start Time",type:"time",value:s.startTime,onChange:e=>D({...s,startTime:e.target.value})}),t.jsx($,{label:"End Time",type:"time",value:s.endTime,onChange:e=>D({...s,endTime:e.target.value})})]}),t.jsx($,{label:"Location",placeholder:"Event location (optional)",value:s.location,onChange:e=>D({...s,location:e.target.value})}),t.jsxs("div",{children:[t.jsx("label",{className:"block text-sm font-medium text-text-primary mb-2",children:"Color"}),t.jsxs(Ce,{value:s.color,onValueChange:e=>D({...s,color:e}),children:[t.jsx(Se,{className:"w-full",children:t.jsx(je,{})}),t.jsx(be,{children:Me.map(e=>t.jsx(Ae,{value:e.value,children:t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.jsx("div",{style:{width:"16px",height:"16px",borderRadius:"50%",backgroundColor:e.value}}),e.label]})},e.value))})]})]})]})}),t.jsxs(fe,{children:[w&&t.jsx(f,{variant:"ghost",onClick:pe,style:{marginRight:"auto",color:"var(--color-status-error)"},children:"Delete"}),t.jsx(f,{variant:"ghost",onClick:()=>C(!1),children:"Cancel"}),t.jsx(f,{variant:"primary",onClick:ce,disabled:!s.title.trim(),children:w?"Update":"Add"})]})]})]})};H.__docgenInfo={description:"",methods:[],displayName:"Calendar",props:{value:{required:!1,tsType:{name:"Date"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => void",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"void"}}},description:""},events:{required:!1,tsType:{name:"Array",elements:[{name:"CalendarEvent"}],raw:"CalendarEvent[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAddEvent:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Omit<CalendarEvent, 'id'>) => void",signature:{arguments:[{type:{name:"Omit",elements:[{name:"CalendarEvent"},{name:"literal",value:"'id'"}],raw:"Omit<CalendarEvent, 'id'>"},name:"event"}],return:{name:"void"}}},description:""},onUpdateEvent:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, event: Partial<CalendarEvent>) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"Partial",elements:[{name:"CalendarEvent"}],raw:"Partial<CalendarEvent>"},name:"event"}],return:{name:"void"}}},description:""},onDeleteEvent:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:""},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},showWeekNumbers:{required:!1,tsType:{name:"boolean"},description:""},highlightToday:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},defaultView:{required:!1,tsType:{name:"union",raw:"'month' | 'week' | 'day' | 'agenda'",elements:[{name:"literal",value:"'month'"},{name:"literal",value:"'week'"},{name:"literal",value:"'day'"},{name:"literal",value:"'agenda'"}]},description:"",defaultValue:{value:"'month'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Ge={title:"Data Display/Calendar",component:H,parameters:{layout:"fullscreen",docs:{description:{component:`
# Calendar Full

A comprehensive calendar component with multiple views and full event management capabilities.

## Features

- 📅 **4 Views**: Month, Week, Day, and Agenda views
- ✏️ **CRUD Operations**: Add, edit, and delete events
- 🕐 **Time-based Events**: Schedule events with start and end times
- 🎨 **Customizable Colors**: Choose from predefined event colors
- 📍 **Location Support**: Add location to events
- 🔍 **Event Details**: View full event information
- ✨ **Premium UI**: Smooth animations and elegant design

## Usage

\`\`\`tsx
import { Calendar } from '@/components/Calendar';

const [events, setEvents] = useState<CalendarEvent[]>([]);

<Calendar
  defaultView="month"
  events={events}
  onAddEvent={(event) => {
    setEvents([...events, { ...event, id: Date.now().toString() }]);
  }}
  onUpdateEvent={(id, updated) => {
    setEvents(events.map(e => e.id === id ? { ...e, ...updated } : e));
  }}
  onDeleteEvent={(id) => {
    setEvents(events.filter(e => e.id !== id));
  }}
/>
\`\`\`
        `}}},tags:[]},b=o=>{const[d,F]=x.useState(o.events||[]);return t.jsx("div",{style:{padding:"2rem",maxWidth:"1400px",margin:"0 auto"},children:t.jsx(H,{...o,events:d,onAddEvent:g=>{const h={...g,id:Date.now().toString()};F([...d,h]),console.log("Event added:",h)},onUpdateEvent:(g,h)=>{F(d.map(A=>A.id===g?{...A,...h}:A)),console.log("Event updated:",g,h)},onDeleteEvent:g=>{F(d.filter(h=>h.id!==g)),console.log("Event deleted:",g)}})})},W={render:o=>t.jsx(b,{...o}),args:{defaultView:"month",highlightToday:!0,events:[{id:"1",date:new Date,startTime:"09:00",endTime:"10:00",title:"Team Standup",description:"Daily team sync meeting",color:"#007AFF",location:"Conference Room A"},{id:"2",date:new Date(new Date().setDate(new Date().getDate()+1)),startTime:"14:00",endTime:"15:30",title:"Client Presentation",description:"Q4 results presentation",color:"#FF9500",location:"Zoom"},{id:"3",date:new Date(new Date().setDate(new Date().getDate()+3)),startTime:"10:00",endTime:"11:00",title:"Code Review",description:"Review PR #234",color:"#34C759"}]}},z={render:o=>t.jsx(b,{...o}),args:{defaultView:"week",highlightToday:!0,events:[{id:"1",date:new Date,startTime:"09:00",endTime:"10:00",title:"Morning Standup",color:"#007AFF"},{id:"2",date:new Date,startTime:"11:00",endTime:"12:00",title:"Sprint Planning",color:"#5AC8FA"},{id:"3",date:new Date,startTime:"14:00",endTime:"16:00",title:"Deep Work Session",color:"#AF52DE"},{id:"4",date:new Date(new Date().setDate(new Date().getDate()+1)),startTime:"10:00",endTime:"11:30",title:"Design Review",color:"#FF9500"},{id:"5",date:new Date(new Date().setDate(new Date().getDate()+2)),startTime:"15:00",endTime:"16:00",title:"Team Retrospective",color:"#34C759"}]}},I={render:o=>t.jsx(b,{...o}),args:{defaultView:"day",highlightToday:!0,events:[{id:"1",date:new Date,startTime:"08:00",endTime:"09:00",title:"Morning Exercise",description:"Gym workout",color:"#34C759",location:"Fitness Center"},{id:"2",date:new Date,startTime:"09:30",endTime:"10:00",title:"Daily Standup",description:"Team sync",color:"#007AFF",location:"Conference Room"},{id:"3",date:new Date,startTime:"10:00",endTime:"12:00",title:"Feature Development",description:"Work on user dashboard",color:"#AF52DE"},{id:"4",date:new Date,startTime:"12:00",endTime:"13:00",title:"Lunch Break",color:"#FF9500"},{id:"5",date:new Date,startTime:"14:00",endTime:"15:30",title:"Client Call",description:"Project status update",color:"#FF3B30",location:"Zoom"},{id:"6",date:new Date,startTime:"16:00",endTime:"17:00",title:"Code Review",description:"Review team PRs",color:"#5AC8FA"}]}},P={render:o=>t.jsx(b,{...o}),args:{defaultView:"agenda",highlightToday:!0,events:[{id:"1",date:new Date,startTime:"09:00",endTime:"10:00",title:"Team Standup",description:"Daily sync meeting with the team",color:"#007AFF",location:"Conference Room A"},{id:"2",date:new Date,startTime:"14:00",endTime:"15:00",title:"Client Meeting",description:"Discuss project requirements",color:"#FF9500",location:"Zoom"},{id:"3",date:new Date(new Date().setDate(new Date().getDate()+1)),startTime:"10:00",endTime:"11:30",title:"Design Workshop",description:"Brainstorming session for new features",color:"#AF52DE",location:"Design Studio"},{id:"4",date:new Date(new Date().setDate(new Date().getDate()+2)),startTime:"09:00",endTime:"17:00",title:"Company Offsite",description:"Team building and planning",color:"#34C759",location:"Mountain View Resort"},{id:"5",date:new Date(new Date().setDate(new Date().getDate()+5)),startTime:"15:00",endTime:"16:00",title:"Sprint Review",description:"Demo completed features",color:"#5AC8FA",location:"Main Hall"}]}},B={render:o=>t.jsx(b,{...o}),args:{defaultView:"month",highlightToday:!0,events:[]}},q={render:o=>t.jsx(b,{...o}),args:{defaultView:"week",highlightToday:!0,events:Array.from({length:20},(o,d)=>({id:`event-${d}`,date:new Date(new Date().setDate(new Date().getDate()+Math.floor(d/3))),startTime:`${9+d%8}:00`,endTime:`${10+d%8}:00`,title:`Event ${d+1}`,description:`Description for event ${d+1}`,color:["#007AFF","#34C759","#FF9500","#FF3B30","#5AC8FA","#AF52DE"][d%6]}))}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => <CalendarWithState {...args} />,
  args: {
    defaultView: 'month',
    highlightToday: true,
    events: [{
      id: '1',
      date: new Date(),
      startTime: '09:00',
      endTime: '10:00',
      title: 'Team Standup',
      description: 'Daily team sync meeting',
      color: '#007AFF',
      location: 'Conference Room A'
    }, {
      id: '2',
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
      startTime: '14:00',
      endTime: '15:30',
      title: 'Client Presentation',
      description: 'Q4 results presentation',
      color: '#FF9500',
      location: 'Zoom'
    }, {
      id: '3',
      date: new Date(new Date().setDate(new Date().getDate() + 3)),
      startTime: '10:00',
      endTime: '11:00',
      title: 'Code Review',
      description: 'Review PR #234',
      color: '#34C759'
    }]
  }
}`,...W.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <CalendarWithState {...args} />,
  args: {
    defaultView: 'week',
    highlightToday: true,
    events: [{
      id: '1',
      date: new Date(),
      startTime: '09:00',
      endTime: '10:00',
      title: 'Morning Standup',
      color: '#007AFF'
    }, {
      id: '2',
      date: new Date(),
      startTime: '11:00',
      endTime: '12:00',
      title: 'Sprint Planning',
      color: '#5AC8FA'
    }, {
      id: '3',
      date: new Date(),
      startTime: '14:00',
      endTime: '16:00',
      title: 'Deep Work Session',
      color: '#AF52DE'
    }, {
      id: '4',
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
      startTime: '10:00',
      endTime: '11:30',
      title: 'Design Review',
      color: '#FF9500'
    }, {
      id: '5',
      date: new Date(new Date().setDate(new Date().getDate() + 2)),
      startTime: '15:00',
      endTime: '16:00',
      title: 'Team Retrospective',
      color: '#34C759'
    }]
  }
}`,...z.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <CalendarWithState {...args} />,
  args: {
    defaultView: 'day',
    highlightToday: true,
    events: [{
      id: '1',
      date: new Date(),
      startTime: '08:00',
      endTime: '09:00',
      title: 'Morning Exercise',
      description: 'Gym workout',
      color: '#34C759',
      location: 'Fitness Center'
    }, {
      id: '2',
      date: new Date(),
      startTime: '09:30',
      endTime: '10:00',
      title: 'Daily Standup',
      description: 'Team sync',
      color: '#007AFF',
      location: 'Conference Room'
    }, {
      id: '3',
      date: new Date(),
      startTime: '10:00',
      endTime: '12:00',
      title: 'Feature Development',
      description: 'Work on user dashboard',
      color: '#AF52DE'
    }, {
      id: '4',
      date: new Date(),
      startTime: '12:00',
      endTime: '13:00',
      title: 'Lunch Break',
      color: '#FF9500'
    }, {
      id: '5',
      date: new Date(),
      startTime: '14:00',
      endTime: '15:30',
      title: 'Client Call',
      description: 'Project status update',
      color: '#FF3B30',
      location: 'Zoom'
    }, {
      id: '6',
      date: new Date(),
      startTime: '16:00',
      endTime: '17:00',
      title: 'Code Review',
      description: 'Review team PRs',
      color: '#5AC8FA'
    }]
  }
}`,...I.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <CalendarWithState {...args} />,
  args: {
    defaultView: 'agenda',
    highlightToday: true,
    events: [{
      id: '1',
      date: new Date(),
      startTime: '09:00',
      endTime: '10:00',
      title: 'Team Standup',
      description: 'Daily sync meeting with the team',
      color: '#007AFF',
      location: 'Conference Room A'
    }, {
      id: '2',
      date: new Date(),
      startTime: '14:00',
      endTime: '15:00',
      title: 'Client Meeting',
      description: 'Discuss project requirements',
      color: '#FF9500',
      location: 'Zoom'
    }, {
      id: '3',
      date: new Date(new Date().setDate(new Date().getDate() + 1)),
      startTime: '10:00',
      endTime: '11:30',
      title: 'Design Workshop',
      description: 'Brainstorming session for new features',
      color: '#AF52DE',
      location: 'Design Studio'
    }, {
      id: '4',
      date: new Date(new Date().setDate(new Date().getDate() + 2)),
      startTime: '09:00',
      endTime: '17:00',
      title: 'Company Offsite',
      description: 'Team building and planning',
      color: '#34C759',
      location: 'Mountain View Resort'
    }, {
      id: '5',
      date: new Date(new Date().setDate(new Date().getDate() + 5)),
      startTime: '15:00',
      endTime: '16:00',
      title: 'Sprint Review',
      description: 'Demo completed features',
      color: '#5AC8FA',
      location: 'Main Hall'
    }]
  }
}`,...P.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => <CalendarWithState {...args} />,
  args: {
    defaultView: 'month',
    highlightToday: true,
    events: []
  }
}`,...B.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => <CalendarWithState {...args} />,
  args: {
    defaultView: 'week',
    highlightToday: true,
    events: Array.from({
      length: 20
    }, (_, i) => ({
      id: \`event-\${i}\`,
      date: new Date(new Date().setDate(new Date().getDate() + Math.floor(i / 3))),
      startTime: \`\${9 + i % 8}:00\`,
      endTime: \`\${10 + i % 8}:00\`,
      title: \`Event \${i + 1}\`,
      description: \`Description for event \${i + 1}\`,
      color: ['#007AFF', '#34C759', '#FF9500', '#FF3B30', '#5AC8FA', '#AF52DE'][i % 6]
    }))
  }
}`,...q.parameters?.docs?.source}}};const Je=["MonthView","WeekView","DayView","AgendaView","EmptyCalendar","BusySchedule"];export{P as AgendaView,q as BusySchedule,I as DayView,B as EmptyCalendar,W as MonthView,z as WeekView,Je as __namedExportsOrder,Ge as default};
