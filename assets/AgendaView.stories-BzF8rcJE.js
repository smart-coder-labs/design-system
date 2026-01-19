import{A as m}from"./AgendaView-COzcoJET.js";import"./jsx-runtime-u17CrQMm.js";const g={title:"Data Display/AgendaView",component:m,parameters:{layout:"padded",docs:{description:{component:`
# Agenda View

A component that displays a list of events grouped by date, useful for showing a schedule or itinerary.

## Features

- 📅 **Grouped by Date**: Events are organized under date headers.
- 🎨 **Visual Indicators**: Events show their assigned color.
- 📍 **Details**: Displays time, title, description, and location.
- 🖱️ **Interactive**: Supports click events for handling user interactions.
`}}},tags:[],argTypes:{onEventClick:{action:"event clicked"}}},e=new Date,i=new Date(e);i.setDate(e.getDate()+1);const d=new Date(e);d.setDate(e.getDate()+7);const c=[{id:"1",date:e,startTime:"09:00",endTime:"10:00",title:"Team Standup",description:"Daily sync meeting with the team",color:"#007AFF",location:"Conference Room A"},{id:"2",date:e,startTime:"14:00",endTime:"15:00",title:"Client Meeting",description:"Discuss project requirements",color:"#FF9500",location:"Zoom"},{id:"3",date:i,startTime:"10:00",endTime:"11:30",title:"Design Workshop",description:"Brainstorming session for new features",color:"#AF52DE",location:"Design Studio"},{id:"4",date:d,startTime:"09:00",endTime:"17:00",title:"Company Offsite",description:"Team building and planning",color:"#34C759",location:"Mountain View Resort"}],n={args:{events:c,currentDate:e,days:30}},a={args:{events:c,currentDate:e,days:7}},r={args:{events:[],currentDate:e,days:30}},o={args:{currentDate:e,days:30,events:Array.from({length:15},(l,t)=>{const s=new Date(e);return s.setDate(e.getDate()+Math.floor(t/3)),{id:`event-${t}`,date:s,startTime:`${9+t%8}:00`,endTime:`${10+t%8}:00`,title:`Event ${t+1}`,description:`Description for event ${t+1}`,color:["#007AFF","#34C759","#FF9500","#FF3B30","#5AC8FA","#AF52DE"][t%6],location:t%2===0?"Meeting Room":void 0}})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    currentDate: today,
    days: 30
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    currentDate: today,
    days: 7
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    events: [],
    currentDate: today,
    days: 30
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    currentDate: today,
    days: 30,
    events: Array.from({
      length: 15
    }, (_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + Math.floor(i / 3));
      return {
        id: \`event-\${i}\`,
        date: date,
        startTime: \`\${9 + i % 8}:00\`,
        endTime: \`\${10 + i % 8}:00\`,
        title: \`Event \${i + 1}\`,
        description: \`Description for event \${i + 1}\`,
        color: ['#007AFF', '#34C759', '#FF9500', '#FF3B30', '#5AC8FA', '#AF52DE'][i % 6],
        location: i % 2 === 0 ? 'Meeting Room' : undefined
      };
    })
  }
}`,...o.parameters?.docs?.source}}};const D=["Default","ShortPeriod","Empty","ManyEvents"];export{n as Default,r as Empty,o as ManyEvents,a as ShortPeriod,D as __namedExportsOrder,g as default};
