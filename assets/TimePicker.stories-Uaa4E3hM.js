import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-D15PU-2o.js";import{Un as r,t as i}from"./lucide-react-BwGO_ZZQ.js";import{n as a,t as o}from"./utils-ijcE-ZHT.js";import{t as s}from"./jsx-runtime-DaLCRA3n.js";import{l as c,s as l,t as u}from"./es-CNBxpAzP.js";var d,f,p,m,h,g,_=e((()=>{d=t(n()),u(),i(),a(),f=s(),p=e=>{if(!e)return null;let[t,n]=e.split(`:`).map(Number);return isNaN(t)||isNaN(n)||t<0||t>23||n<0||n>59?null:{hours:t,minutes:n}},m=(e,t,n)=>{let r=t.toString().padStart(2,`0`);if(n===`24h`)return`${e.toString().padStart(2,`0`)}:${r}`;{let t=e>=12?`PM`:`AM`;return`${e%12||12}:${r} ${t}`}},h=`
  w-full
  bg-surface-primary
  border border-border-primary
  text-text-primary
  placeholder:text-text-tertiary
  transition-apple
  focus:outline-none
  focus:border-accent-blue
  focus:ring-2
  focus:ring-accent-blue/20
  disabled:opacity-40
  disabled:cursor-not-allowed
  cursor-pointer
  h-10 px-4 text-base rounded-xl
`,g=({label:e,value:t,onChange:n,placeholder:i=`Select time`,error:a,helperText:s,disabled:u=!1,format:g=`12h`,step:_=15,className:v=``})=>{let[y,b]=(0,d.useState)(!1),[x,S]=(0,d.useState)(``),C=(0,d.useRef)(null),[w,T]=(0,d.useState)(new Date().getHours()),[E,D]=(0,d.useState)(Math.floor(new Date().getMinutes()/_)*_),[O,k]=(0,d.useState)(new Date().getHours()>=12?`PM`:`AM`),A=!!a;(0,d.useEffect)(()=>{if(t){let e=p(t);e&&(S(m(e.hours,e.minutes,g)),T(e.hours),D(e.minutes),k(e.hours>=12?`PM`:`AM`))}else S(``)},[t,g]),(0,d.useEffect)(()=>{let e=e=>{C.current&&!C.current.contains(e.target)&&b(!1)};return y&&document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[y]);let j=()=>{u||b(!y)},M=(e,t)=>{T(e),D(t);let r=`${e.toString().padStart(2,`0`)}:${t.toString().padStart(2,`0`)}`;n?.(r),S(m(e,t,g))},N=e=>{let t=e;g===`12h`&&(O===`PM`&&e!==12&&(t=e+12),O===`AM`&&e===12&&(t=0)),M(t,E)},P=e=>{M(w,e)},F=e=>{k(e);let t=w;e===`AM`&&w>=12?t=w-12:e===`PM`&&w<12&&(t=w+12),M(t,E)},I=g===`12h`?Array.from({length:12},(e,t)=>t+1):Array.from({length:24},(e,t)=>t),L=Array.from({length:60/_},(e,t)=>t*_);return(0,f.jsxs)(`div`,{className:o(`w-full`,v),ref:C,children:[e&&(0,f.jsx)(`label`,{className:`block text-sm font-medium text-text-primary mb-2`,children:e}),(0,f.jsxs)(`div`,{className:`relative`,children:[(0,f.jsx)(l.div,{whileHover:u?{}:{scale:1.005},transition:{type:`spring`,stiffness:300,damping:30},children:(0,f.jsx)(`input`,{type:`text`,readOnly:!0,value:x,onClick:j,placeholder:i,disabled:u,className:o(h,A&&`border-status-error focus:border-status-error focus:ring-status-error/20`)})}),(0,f.jsx)(`div`,{className:`absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none`,children:(0,f.jsx)(r,{className:`w-5 h-5 text-text-tertiary`})}),(0,f.jsx)(c,{children:y&&(0,f.jsx)(l.div,{initial:{opacity:0,y:-8,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.96},transition:{type:`spring`,stiffness:400,damping:30},className:`absolute top-full left-0 mt-2 z-[1300] w-full min-w-[280px] p-4 bg-surface-primary border border-border-primary rounded-2xl shadow-lg backdrop-blur-xl`,children:(0,f.jsxs)(`div`,{className:`flex gap-2 h-48`,children:[(0,f.jsxs)(`div`,{className:`flex-1 flex flex-col`,children:[(0,f.jsx)(`div`,{className:`text-xs font-medium text-text-tertiary mb-2 text-center`,children:`Hour`}),(0,f.jsx)(`div`,{className:`flex-1 overflow-y-auto scrollbar-hide space-y-1`,children:I.map(e=>(0,f.jsx)(`button`,{onClick:()=>N(e),className:o(`w-full py-1.5 px-2 rounded-lg text-sm transition-colors`,(g===`12h`?(w%12||12)===e:w===e)?`bg-accent-blue text-white font-medium`:`text-text-primary hover:bg-surface-secondary`),children:e.toString().padStart(2,`0`)},e))})]}),(0,f.jsx)(`div`,{className:`flex items-center justify-center text-text-tertiary`,children:`:`}),(0,f.jsxs)(`div`,{className:`flex-1 flex flex-col`,children:[(0,f.jsx)(`div`,{className:`text-xs font-medium text-text-tertiary mb-2 text-center`,children:`Minute`}),(0,f.jsx)(`div`,{className:`flex-1 overflow-y-auto scrollbar-hide space-y-1`,children:L.map(e=>(0,f.jsx)(`button`,{onClick:()=>P(e),className:o(`w-full py-1.5 px-2 rounded-lg text-sm transition-colors`,E===e?`bg-accent-blue text-white font-medium`:`text-text-primary hover:bg-surface-secondary`),children:e.toString().padStart(2,`0`)},e))})]}),g===`12h`&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(`div`,{className:`w-px bg-border-primary mx-1`}),(0,f.jsxs)(`div`,{className:`flex-1 flex flex-col`,children:[(0,f.jsx)(`div`,{className:`text-xs font-medium text-text-tertiary mb-2 text-center`,children:`Period`}),(0,f.jsx)(`div`,{className:`flex-1 space-y-1`,children:[`AM`,`PM`].map(e=>(0,f.jsx)(`button`,{onClick:()=>F(e),className:o(`w-full py-1.5 px-2 rounded-lg text-sm transition-colors`,O===e?`bg-accent-blue text-white font-medium`:`text-text-primary hover:bg-surface-secondary`),children:e},e))})]})]})]})})})]}),(a||s)&&(0,f.jsx)(l.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},transition:{duration:.16},className:o(`mt-2 text-sm`,A?`text-status-error`:`text-text-secondary`),children:a||s})]})},g.displayName=`TimePicker`,g.__docgenInfo={description:``,methods:[],displayName:`TimePicker`,props:{label:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(time: string | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},name:`time`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Select time'`,computed:!1}},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},format:{required:!1,tsType:{name:`union`,raw:`'12h' | '24h'`,elements:[{name:`literal`,value:`'12h'`},{name:`literal`,value:`'24h'`}]},description:``,defaultValue:{value:`'12h'`,computed:!1}},step:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`15`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),v,y,b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{_(),v=t(n()),y=s(),b={title:`Forms/TimePicker`,component:g,tags:[`autodocs`]},x={args:{onChange:e=>console.log(`Time:`,e)}},S={args:{label:`Meeting Time`,placeholder:`Select time...`,onChange:e=>console.log(`Time:`,e)}},C={args:{label:`Scheduled Transfer`,value:`14:30`,onChange:e=>console.log(`Time:`,e)}},w={args:{label:`Appointment Time`,value:`15:00`,format:`12h`,onChange:e=>console.log(`Time:`,e)}},T={args:{label:`Time Slot`,value:`09:00`,step:15,onChange:e=>console.log(`Time:`,e)}},E={args:{label:`Departure Time`,value:`25:00`,error:`Invalid time format`,onChange:e=>console.log(`Time:`,e)}},D={args:{label:`Delivery Time`,helperText:`Business hours: Mon-Fri, 9AM-6PM`,onChange:e=>console.log(`Time:`,e)}},O={args:{label:`Locked Time`,value:`12:00`,disabled:!0,onChange:e=>console.log(`Time:`,e)}},k={render:()=>{let[e,t]=(0,v.useState)(null),[n,r]=(0,v.useState)(!1);return(0,y.jsx)(`div`,{className:`space-y-4 max-w-sm`,children:n?(0,y.jsxs)(`div`,{className:`p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center space-y-2`,children:[(0,y.jsx)(`p`,{className:`text-2xl`,children:`✓`}),(0,y.jsx)(`p`,{className:`text-sm font-semibold text-green-600`,children:`Transfer Scheduled`}),(0,y.jsxs)(`p`,{className:`text-xs text-text-secondary`,children:[`Your transfer is scheduled for `,e]}),(0,y.jsx)(`button`,{onClick:()=>{r(!1),t(null)},className:`text-xs text-blue-500 hover:underline`,children:`Reschedule`})]}):(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(g,{label:`Schedule Transfer`,value:e||void 0,onChange:t,step:15,format:`12h`,helperText:`Transfers are processed within 2 hours`}),(0,y.jsx)(`button`,{disabled:!e,onClick:()=>r(!0),className:`w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50`,children:`Schedule Transfer`})]})})}},A={parameters:{themes:{themeOverride:`dark`}},args:{label:`Dark Mode Time Picker`,value:`22:00`,format:`24h`,onChange:e=>console.log(`Time:`,e)}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    onChange: time => console.log('Time:', time)
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Meeting Time',
    placeholder: 'Select time...',
    onChange: time => console.log('Time:', time)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Scheduled Transfer',
    value: '14:30',
    onChange: time => console.log('Time:', time)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Appointment Time',
    value: '15:00',
    format: '12h',
    onChange: time => console.log('Time:', time)
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Time Slot',
    value: '09:00',
    step: 15,
    onChange: time => console.log('Time:', time)
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Departure Time',
    value: '25:00',
    error: 'Invalid time format',
    onChange: time => console.log('Time:', time)
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Delivery Time',
    helperText: 'Business hours: Mon-Fri, 9AM-6PM',
    onChange: time => console.log('Time:', time)
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Locked Time',
    value: '12:00',
    disabled: true,
    onChange: time => console.log('Time:', time)
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [time, setTime] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);
    return <div className="space-y-4 max-w-sm">
                {!submitted ? <>
                        <TimePicker label="Schedule Transfer" value={time || undefined} onChange={setTime} step={15} format="12h" helperText="Transfers are processed within 2 hours" />
                        <button disabled={!time} onClick={() => setSubmitted(true)} className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50">
                            Schedule Transfer
                        </button>
                    </> : <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center space-y-2">
                        <p className="text-2xl">✓</p>
                        <p className="text-sm font-semibold text-green-600">Transfer Scheduled</p>
                        <p className="text-xs text-text-secondary">Your transfer is scheduled for {time}</p>
                        <button onClick={() => {
          setSubmitted(false);
          setTime(null);
        }} className="text-xs text-blue-500 hover:underline">Reschedule</button>
                    </div>}
            </div>;
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    label: 'Dark Mode Time Picker',
    value: '22:00',
    format: '24h',
    onChange: time => console.log('Time:', time)
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithLabel`,`WithValue`,`TwelveHourFormat`,`FifteenMinuteSteps`,`WithError`,`WithHelperText`,`Disabled`,`InteractiveTimeSelection`,`DarkMode`]}))();export{A as DarkMode,x as Default,O as Disabled,T as FifteenMinuteSteps,k as InteractiveTimeSelection,w as TwelveHourFormat,E as WithError,D as WithHelperText,S as WithLabel,C as WithValue,j as __namedExportsOrder,b as default};