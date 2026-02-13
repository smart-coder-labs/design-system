import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-D5DOIGW8.js";import{m as h}from"./proxy-BbTJ7w1C.js";import{A as _}from"./index-B0ZysGGg.js";import"./preload-helper-PPVm8Dsz.js";const F=(t,a="medium")=>{const s={short:{month:"numeric",day:"numeric",year:"numeric"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"}};return new Intl.DateTimeFormat("en-US",s[a]).format(t)},H=(t,a)=>t.getFullYear()===a.getFullYear()&&t.getMonth()===a.getMonth()&&t.getDate()===a.getDate(),A=(t,a)=>new Date(t,a+1,0).getDate(),B=(t,a)=>new Date(t,a,1).getDay(),O=(t,a,s)=>!!(a&&t<a||s&&t>s),J=`
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
`,Y={sm:"h-8 px-3 text-sm rounded-lg",md:"h-10 px-4 text-base rounded-xl",lg:"h-12 px-5 text-lg rounded-xl"},U=({range:t,onSelectDate:a,minDate:s,maxDate:p,currentMonth:l,onMonthChange:v})=>{const[g,S]=u.useState(null),m=l.getFullYear(),d=l.getMonth(),I=A(m,d),E=B(m,d),x=new Date,y=Array.from({length:I},(r,n)=>n+1),o=Array.from({length:E},(r,n)=>n),D=["January","February","March","April","May","June","July","August","September","October","November","December"],z=()=>{const r=new Date(m,d-1,1);v(r)},N=()=>{const r=new Date(m,d+1,1);v(r)},b=r=>{const n=new Date(m,d,r);O(n,s,p)||a(n)},C=r=>t.from&&t.to?r>=t.from&&r<=t.to:t.from&&g?r>=t.from&&r<=g||r<=t.from&&r>=g:!1;return e.jsx(h.div,{initial:{opacity:0,y:-8,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.96},transition:{type:"spring",stiffness:400,damping:30},className:"absolute top-full left-0 mt-2 z-[1300] w-full min-w-[300px] max-w-[340px]",children:e.jsxs("div",{className:"bg-surface-primary border border-border-primary rounded-2xl shadow-lg p-4 backdrop-blur-xl",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx(h.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:z,className:"p-2 rounded-lg hover:bg-surface-secondary transition-apple",type:"button",children:e.jsx("svg",{className:"w-5 h-5 text-text-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsxs("h3",{className:"text-base font-semibold text-text-primary",children:[D[d]," ",m]}),e.jsx(h.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:N,className:"p-2 rounded-lg hover:bg-surface-secondary transition-apple",type:"button",children:e.jsx("svg",{className:"w-5 h-5 text-text-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:["Su","Mo","Tu","We","Th","Fr","Sa"].map(r=>e.jsx("div",{className:"text-center text-xs font-medium text-text-tertiary py-2",children:r},r))}),e.jsxs("div",{className:"grid grid-cols-7 gap-1",onMouseLeave:()=>S(null),children:[o.map((r,n)=>e.jsx("div",{className:"aspect-square"},`empty-${n}`)),y.map(r=>{const n=new Date(m,d,r),w=t.from&&H(n,t.from),k=t.to&&H(n,t.to),$=w||k,i=C(n),c=H(n,x),T=O(n,s,p);let j="rounded-lg";return i&&(w&&k?j="rounded-lg":w?j="rounded-l-lg rounded-r-none":k?j="rounded-r-lg rounded-l-none":j="rounded-none"),e.jsx(h.button,{whileHover:T?{}:{scale:1.05,zIndex:10},whileTap:T?{}:{scale:.95},onClick:()=>b(r),onMouseEnter:()=>S(n),disabled:T,className:`
                                    aspect-square text-sm font-medium relative
                                    transition-colors duration-200
                                    ${j}
                                    ${$?"bg-accent-blue text-white z-10":i?"bg-accent-blue/10 text-text-primary":c?"bg-accent-blue/5 text-accent-blue border border-accent-blue/20":"text-text-primary hover:bg-surface-secondary"}
                                    ${T?"opacity-30 cursor-not-allowed":"cursor-pointer"}
                                `,type:"button",children:r},r)})]})]})})},f=({label:t,value:a,onChange:s,placeholder:p="Select date range",error:l,helperText:v,disabled:g=!1,minDate:S,maxDate:m,dateFormat:d="medium",size:I="md",className:E=""})=>{const[x,y]=u.useState(!1),[o,D]=u.useState(a||{from:null,to:null}),[z,N]=u.useState(a?.from||new Date),b=u.useRef(null),C=!!l;u.useEffect(()=>{a&&(D(a),a.from&&N(a.from))},[a]),u.useEffect(()=>{const i=c=>{b.current&&!b.current.contains(c.target)&&y(!1)};return x&&document.addEventListener("mousedown",i),()=>{document.removeEventListener("mousedown",i)}},[x]);const r=i=>{let c={...o};!o.from||o.from&&o.to?c={from:i,to:null}:(i<o.from?c={from:i,to:o.from}:c={from:o.from,to:i},y(!1)),D(c),s?.(c)},n=()=>{!g&&!x&&y(!0)},w=i=>{i.stopPropagation();const c={from:null,to:null};D(c),s?.(c)},k=()=>o.from?o.to?`${F(o.from,d)} - ${F(o.to,d)}`:F(o.from,d):"",$=`
        ${J}
        ${Y[I]}
        ${C?"border-status-error focus:border-status-error focus:ring-status-error/20":""}
        ${E}
    `.trim().replace(/\s+/g," ");return e.jsxs("div",{className:"w-full",ref:b,children:[t&&e.jsx("label",{className:"block text-sm font-medium text-text-primary mb-2",children:t}),e.jsxs("div",{className:"relative",children:[e.jsx(h.div,{whileHover:g?{}:{scale:1.005},transition:{type:"spring",stiffness:300,damping:30},children:e.jsx("input",{type:"text",readOnly:!0,value:k(),onClick:n,placeholder:p,disabled:g,className:$})}),e.jsxs("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1",children:[o.from&&!g&&e.jsx(h.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:w,className:"p-1 rounded-md hover:bg-surface-secondary transition-apple",type:"button",children:e.jsx("svg",{className:"w-4 h-4 text-text-tertiary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("svg",{className:"w-5 h-5 text-text-tertiary pointer-events-none",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})]}),e.jsx(_,{children:x&&e.jsx(U,{range:o,onSelectDate:r,minDate:S,maxDate:m,currentMonth:z,onMonthChange:N})})]}),(l||v)&&e.jsx(h.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},transition:{duration:.16},className:`
                        mt-2 text-sm
                        ${C?"text-status-error":"text-text-secondary"}
                    `,children:l||v})]})};f.displayName="DateRangePicker";f.__docgenInfo={description:"",methods:[],displayName:"DateRangePicker",props:{label:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"DateRange"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(range: DateRange) => void",signature:{arguments:[{type:{name:"DateRange"},name:"range"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select date range'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},dateFormat:{required:!1,tsType:{name:"union",raw:"'short' | 'medium' | 'long'",elements:[{name:"literal",value:"'short'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'long'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const ee={title:"Forms/DateRangePicker",component:f,tags:[],argTypes:{dateFormat:{control:"select",options:["short","medium","long"]},size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},error:{control:"text"},helperText:{control:"text"}}},M={render:t=>{const[a,s]=u.useState({from:null,to:null});return e.jsx("div",{className:"h-[400px]",children:e.jsx(f,{...t,value:a,onChange:s})})},args:{label:"Select Date Range",placeholder:"Pick a range"}},V={render:t=>{const a=new Date,s=new Date(a);s.setDate(a.getDate()+7);const[p,l]=u.useState({from:a,to:s});return e.jsx("div",{className:"h-[400px]",children:e.jsx(f,{...t,value:p,onChange:l})})},args:{label:"Trip Dates"}},P={render:t=>{const[a,s]=u.useState({from:null,to:null}),p=new Date,l=new Date;return l.setMonth(l.getMonth()+2),e.jsx("div",{className:"h-[400px]",children:e.jsx(f,{...t,value:a,onChange:s,minDate:p,maxDate:l,helperText:"Select a range within the next 2 months"})})},args:{label:"Booking Period"}},R={args:{label:"Invalid Range",error:"Please select a valid date range",value:{from:null,to:null}}},L={render:t=>{const[a,s]=u.useState({from:null,to:null});return e.jsx("div",{className:"h-[400px]",children:e.jsx(f,{...t,value:a,onChange:s,size:"sm"})})},args:{label:"Small Picker"}},W={render:t=>{const[a,s]=u.useState({from:null,to:null});return e.jsx("div",{className:"h-[400px]",children:e.jsx(f,{...t,value:a,onChange:s,size:"lg"})})},args:{label:"Large Picker"}},q={args:{label:"Disabled Picker",disabled:!0,value:{from:new Date,to:new Date}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<{
      from: Date | null;
      to: Date | null;
    }>({
      from: null,
      to: null
    });
    return <div className="h-[400px]">
                <DateRangePicker {...args} value={value} onChange={setValue} />
            </div>;
  },
  args: {
    label: 'Select Date Range',
    placeholder: 'Pick a range'
  }
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const today = new Date();
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7);
    const [value, setValue] = useState<{
      from: Date | null;
      to: Date | null;
    }>({
      from: today,
      to: nextWeek
    });
    return <div className="h-[400px]">
                <DateRangePicker {...args} value={value} onChange={setValue} />
            </div>;
  },
  args: {
    label: 'Trip Dates'
  }
}`,...V.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<{
      from: Date | null;
      to: Date | null;
    }>({
      from: null,
      to: null
    });
    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 2);
    return <div className="h-[400px]">
                <DateRangePicker {...args} value={value} onChange={setValue} minDate={minDate} maxDate={maxDate} helperText="Select a range within the next 2 months" />
            </div>;
  },
  args: {
    label: 'Booking Period'
  }
}`,...P.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Invalid Range',
    error: 'Please select a valid date range',
    value: {
      from: null,
      to: null
    }
  }
}`,...R.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<{
      from: Date | null;
      to: Date | null;
    }>({
      from: null,
      to: null
    });
    return <div className="h-[400px]">
                <DateRangePicker {...args} value={value} onChange={setValue} size="sm" />
            </div>;
  },
  args: {
    label: 'Small Picker'
  }
}`,...L.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<{
      from: Date | null;
      to: Date | null;
    }>({
      from: null,
      to: null
    });
    return <div className="h-[400px]">
                <DateRangePicker {...args} value={value} onChange={setValue} size="lg" />
            </div>;
  },
  args: {
    label: 'Large Picker'
  }
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Picker',
    disabled: true,
    value: {
      from: new Date(),
      to: new Date()
    }
  }
}`,...q.parameters?.docs?.source}}};const te=["Default","WithInitialValue","WithConstraints","WithError","Small","Large","Disabled"];export{M as Default,q as Disabled,W as Large,L as Small,P as WithConstraints,R as WithError,V as WithInitialValue,te as __namedExportsOrder,ee as default};
