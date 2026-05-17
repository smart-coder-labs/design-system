import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-B1a0g5t6.js";import{t as n}from"./jsx-runtime-DaLCRA3n.js";var r,i,a,o,s=e((()=>{t(),r=n(),i=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],a=[`Sunday`,`Monday`,`Tuesday`,`Wednesday`,`Thursday`,`Friday`,`Saturday`],o=({events:e,currentDate:t,days:n=30,onEventClick:o})=>{let s=new Date(t);s.setHours(0,0,0,0);let c=new Date(t);c.setDate(c.getDate()+n),c.setHours(23,59,59,999);let l=[...e.filter(e=>{let t=new Date(e.date);return t>=s&&t<=c})].sort((e,t)=>e.date.getTime()-t.date.getTime()),u={};return l.forEach(e=>{let t=e.date.toDateString();u[t]||(u[t]=[]),u[t].push(e)}),(0,r.jsx)(`div`,{style:{maxHeight:`600px`,overflowY:`auto`},children:Object.keys(u).length===0?(0,r.jsx)(`div`,{style:{textAlign:`center`,padding:`32px`,color:`var(--color-text-tertiary)`},children:`No events scheduled`}):Object.keys(u).map(e=>{let t=new Date(e),n=u[e];return(0,r.jsxs)(`div`,{style:{marginBottom:`16px`},children:[(0,r.jsxs)(`div`,{style:{fontSize:`17px`,fontWeight:`600`,color:`var(--color-text-primary)`,marginBottom:`8px`,paddingBottom:`8px`,borderBottom:`1px solid var(--color-border-primary)`},children:[a[t.getDay()],`, `,i[t.getMonth()],` `,t.getDate(),`, `,t.getFullYear()]}),(0,r.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`16px`},children:n.map(e=>(0,r.jsx)(`div`,{onClick:()=>o?.(e),style:{padding:`16px`,backgroundColor:`var(--color-background-secondary)`,borderLeft:`4px solid ${e.color||`var(--color-accent-blue)`}`,borderRadius:`8px`,cursor:`pointer`,transition:`all 0.2s var(--ease-apple)`},onMouseEnter:e=>{e.currentTarget.style.backgroundColor=`var(--color-background-tertiary)`},onMouseLeave:e=>{e.currentTarget.style.backgroundColor=`var(--color-background-secondary)`},children:(0,r.jsx)(`div`,{style:{display:`flex`,justifyContent:`space-between`,alignItems:`start`},children:(0,r.jsxs)(`div`,{style:{flex:1},children:[(0,r.jsx)(`div`,{style:{fontSize:`15px`,fontWeight:`600`,color:`var(--color-text-primary)`,marginBottom:`8px`},children:e.title}),e.description&&(0,r.jsx)(`div`,{style:{fontSize:`13px`,color:`var(--color-text-secondary)`,marginBottom:`8px`},children:e.description}),(0,r.jsxs)(`div`,{style:{fontSize:`13px`,color:`var(--color-text-tertiary)`},children:[e.startTime&&`${e.startTime} - ${e.endTime}`,e.location&&` • 📍 ${e.location}`]})]})})},e.id))})]},e)})})},o.__docgenInfo={description:``,methods:[],displayName:`AgendaView`,props:{events:{required:!0,tsType:{name:`Array`,elements:[{name:`CalendarEvent`}],raw:`CalendarEvent[]`},description:``},currentDate:{required:!0,tsType:{name:`Date`},description:``},days:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`30`,computed:!1}},onEventClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(event: CalendarEvent) => void`,signature:{arguments:[{type:{name:`CalendarEvent`},name:`event`}],return:{name:`void`}}},description:``}}}})),c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{s(),c=n(),l={title:`Data Display/AgendaView`,component:o,tags:[`autodocs`]},u=new Date,d=new Date(u),d.setDate(d.getDate()+1),f=new Date(u),f.setDate(f.getDate()+7),p=[{id:`1`,date:u,startTime:`09:00`,endTime:`10:00`,title:`Team Standup`,description:`Daily sync with the engineering team`,color:`#007AFF`,location:`Zoom Room A`},{id:`2`,date:u,startTime:`14:00`,endTime:`15:30`,title:`Sprint Review`,description:`Review completed stories for the current sprint`,color:`#34C759`},{id:`3`,date:d,startTime:`11:00`,endTime:`12:00`,title:`Design Review`,description:`Review new component designs`,color:`#AF52DE`,location:`Design Lab`},{id:`4`,date:f,startTime:`10:00`,endTime:`11:00`,title:`Budget Planning`,description:`Quarterly budget review and planning`,color:`#FF9500`,location:`Conference Room B`},{id:`5`,date:f,startTime:`15:00`,endTime:`16:00`,title:`Client Meeting`,description:`Demo of new fintech features`,color:`#FF3B30`}],m={args:{events:p,currentDate:u,days:30}},h={args:{events:p,currentDate:u,days:7}},g={args:{events:[],currentDate:u,days:30}},_={args:{events:p.filter(e=>e.id===`1`||e.id===`2`),currentDate:u,days:1}},v={args:{events:Array.from({length:25},(e,t)=>({id:`many-${t}`,date:new Date(u.getTime()+t*36e5*4),startTime:`${String(t%12+8).padStart(2,`0`)}:00`,endTime:`${String(t%12+9).padStart(2,`0`)}:00`,title:`Event #${t+1}`,description:`Auto-generated event number ${t+1} for stress testing`,color:[`#007AFF`,`#34C759`,`#FF9500`,`#FF3B30`,`#AF52DE`][t%5],location:t%3==0?`Room `+(t%10+1):void 0})),currentDate:u,days:5}},y={args:{events:p,currentDate:u,days:30,onEventClick:e=>console.log(`Event clicked:`,e.title,e.id)}},b={args:{events:[{id:`long-1`,date:u,startTime:`08:00`,endTime:`09:30`,title:`International Product Strategy & Quarterly Planning Review Session`,description:`A very long description that should demonstrate how text truncation handles edge cases with exceptionally verbose content that goes on and on`,color:`#007AFF`,location:`Main Conference Room - Floor 42 - Building A - Innovation Hub`},{id:`long-2`,date:u,startTime:`10:00`,endTime:`11:00`,title:`Sprint`,description:`Short`,color:`#34C759`}],currentDate:u,days:1}},x={args:{events:p.slice(0,3),currentDate:u,days:7},decorators:[e=>(0,c.jsx)(`div`,{className:`dark p-4 bg-gray-900 rounded-lg`,children:(0,c.jsx)(e,{})})]},S={args:{events:p,currentDate:u,days:7},decorators:[e=>(0,c.jsx)(`div`,{className:`max-w-sm mx-auto`,children:(0,c.jsx)(e,{})})]},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    currentDate: today,
    days: 30
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    currentDate: today,
    days: 7
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    events: [],
    currentDate: today,
    days: 30
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents.filter(e => e.id === '1' || e.id === '2'),
    currentDate: today,
    days: 1
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    currentDate: today,
    days: 30,
    onEventClick: event => console.log('Event clicked:', event.title, event.id)
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents.slice(0, 3),
    currentDate: today,
    days: 7
  },
  decorators: [Story => <div className="dark p-4 bg-gray-900 rounded-lg">
                <Story />
            </div>]
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    currentDate: today,
    days: 7
  },
  decorators: [Story => <div className="max-w-sm mx-auto">
                <Story />
            </div>]
}`,...S.parameters?.docs?.source}}},C=[`Default`,`With7Days`,`EmptyState`,`SingleDay`,`ManyEvents`,`WithOnEventClick`,`LongTitles`,`DarkMode`,`MobileResponsive`]}))();export{x as DarkMode,m as Default,g as EmptyState,b as LongTitles,v as ManyEvents,S as MobileResponsive,_ as SingleDay,h as With7Days,y as WithOnEventClick,C as __namedExportsOrder,l as default};