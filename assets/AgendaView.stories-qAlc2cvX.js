import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-BK76Wfr-.js";import{n,t as r}from"./AgendaView-BI68kFTC.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{n(),i=t(),a={title:`Data Display/AgendaView`,component:r,tags:[`autodocs`]},o=new Date,s=new Date(o),s.setDate(s.getDate()+1),c=new Date(o),c.setDate(c.getDate()+7),l=[{id:`1`,date:o,startTime:`09:00`,endTime:`10:00`,title:`Team Standup`,description:`Daily sync with the engineering team`,color:`#007AFF`,location:`Zoom Room A`},{id:`2`,date:o,startTime:`14:00`,endTime:`15:30`,title:`Sprint Review`,description:`Review completed stories for the current sprint`,color:`#34C759`},{id:`3`,date:s,startTime:`11:00`,endTime:`12:00`,title:`Design Review`,description:`Review new component designs`,color:`#AF52DE`,location:`Design Lab`},{id:`4`,date:c,startTime:`10:00`,endTime:`11:00`,title:`Budget Planning`,description:`Quarterly budget review and planning`,color:`#FF9500`,location:`Conference Room B`},{id:`5`,date:c,startTime:`15:00`,endTime:`16:00`,title:`Client Meeting`,description:`Demo of new fintech features`,color:`#FF3B30`}],u={args:{events:l,currentDate:o,days:30}},d={args:{events:l,currentDate:o,days:7}},f={args:{events:[],currentDate:o,days:30}},p={args:{events:l.filter(e=>e.id===`1`||e.id===`2`),currentDate:o,days:1}},m={args:{events:Array.from({length:25},(e,t)=>({id:`many-${t}`,date:new Date(o.getTime()+t*36e5*4),startTime:`${String(t%12+8).padStart(2,`0`)}:00`,endTime:`${String(t%12+9).padStart(2,`0`)}:00`,title:`Event #${t+1}`,description:`Auto-generated event number ${t+1} for stress testing`,color:[`#007AFF`,`#34C759`,`#FF9500`,`#FF3B30`,`#AF52DE`][t%5],location:t%3==0?`Room `+(t%10+1):void 0})),currentDate:o,days:5}},h={args:{events:l,currentDate:o,days:30,onEventClick:e=>console.log(`Event clicked:`,e.title,e.id)}},g={args:{events:[{id:`long-1`,date:o,startTime:`08:00`,endTime:`09:30`,title:`International Product Strategy & Quarterly Planning Review Session`,description:`A very long description that should demonstrate how text truncation handles edge cases with exceptionally verbose content that goes on and on`,color:`#007AFF`,location:`Main Conference Room - Floor 42 - Building A - Innovation Hub`},{id:`long-2`,date:o,startTime:`10:00`,endTime:`11:00`,title:`Sprint`,description:`Short`,color:`#34C759`}],currentDate:o,days:1}},_={args:{events:l.slice(0,3),currentDate:o,days:7},decorators:[e=>(0,i.jsx)(`div`,{className:`dark p-4 bg-gray-900 rounded-lg`,children:(0,i.jsx)(e,{})})]},v={args:{events:l,currentDate:o,days:7},decorators:[e=>(0,i.jsx)(`div`,{className:`max-w-sm mx-auto`,children:(0,i.jsx)(e,{})})]},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    currentDate: today,
    days: 30
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    currentDate: today,
    days: 7
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    events: [],
    currentDate: today,
    days: 30
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents.filter(e => e.id === '1' || e.id === '2'),
    currentDate: today,
    days: 1
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    events: Array.from({
      length: 25
    }, (_, i) => ({
      id: \`many-\${i}\`,
      date: new Date(today.getTime() + i * 3600000 * 4),
      startTime: \`\${String(i % 12 + 8).padStart(2, '0')}:00\`,
      endTime: \`\${String(i % 12 + 9).padStart(2, '0')}:00\`,
      title: \`Event #\${i + 1}\`,
      description: \`Auto-generated event number \${i + 1} for stress testing\`,
      color: ['#007AFF', '#34C759', '#FF9500', '#FF3B30', '#AF52DE'][i % 5],
      location: i % 3 === 0 ? 'Room ' + (i % 10 + 1) : undefined
    })),
    currentDate: today,
    days: 5
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    currentDate: today,
    days: 30,
    onEventClick: event => console.log('Event clicked:', event.title, event.id)
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    events: [{
      id: 'long-1',
      date: today,
      startTime: '08:00',
      endTime: '09:30',
      title: 'International Product Strategy & Quarterly Planning Review Session',
      description: 'A very long description that should demonstrate how text truncation handles edge cases with exceptionally verbose content that goes on and on',
      color: '#007AFF',
      location: 'Main Conference Room - Floor 42 - Building A - Innovation Hub'
    }, {
      id: 'long-2',
      date: today,
      startTime: '10:00',
      endTime: '11:00',
      title: 'Sprint',
      description: 'Short',
      color: '#34C759'
    }],
    currentDate: today,
    days: 1
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents.slice(0, 3),
    currentDate: today,
    days: 7
  },
  decorators: [Story => <div className="dark p-4 bg-gray-900 rounded-lg">
                <Story />
            </div>]
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    currentDate: today,
    days: 7
  },
  decorators: [Story => <div className="max-w-sm mx-auto">
                <Story />
            </div>]
}`,...v.parameters?.docs?.source}}},y=[`Default`,`With7Days`,`EmptyState`,`SingleDay`,`ManyEvents`,`WithOnEventClick`,`LongTitles`,`DarkMode`,`MobileResponsive`]}))();export{_ as DarkMode,u as Default,f as EmptyState,g as LongTitles,m as ManyEvents,v as MobileResponsive,p as SingleDay,d as With7Days,h as WithOnEventClick,y as __namedExportsOrder,a as default};