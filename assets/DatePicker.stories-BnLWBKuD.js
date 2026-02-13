import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as h,R as j}from"./iframe-D5DOIGW8.js";import{m as g}from"./proxy-BbTJ7w1C.js";import{A as Z}from"./index-B0ZysGGg.js";import"./preload-helper-PPVm8Dsz.js";const V=(a,t="medium")=>{const n={short:{month:"numeric",day:"numeric",year:"numeric"},medium:{month:"short",day:"numeric",year:"numeric"},long:{month:"long",day:"numeric",year:"numeric"}};return new Intl.DateTimeFormat("en-US",n[t]).format(a)},W=(a,t)=>a.getFullYear()===t.getFullYear()&&a.getMonth()===t.getMonth()&&a.getDate()===t.getDate(),ee=(a,t)=>new Date(a,t+1,0).getDate(),te=(a,t)=>new Date(a,t,1).getDay(),$=(a,t,n)=>!(t&&a<t||n&&a>n),ae=`
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
`,se={sm:"h-8 px-3 text-sm rounded-lg",md:"h-10 px-4 text-base rounded-xl",lg:"h-12 px-5 text-lg rounded-xl"},ne=({selectedDate:a,onSelectDate:t,minDate:n,maxDate:N,currentMonth:D,onMonthChange:S})=>{const i=D.getFullYear(),u=D.getMonth(),k=ee(i,u),v=te(i,u),q=new Date,I=Array.from({length:k},(s,l)=>l+1),y=Array.from({length:v},(s,l)=>l),b=["January","February","March","April","May","June","July","August","September","October","November","December"],x=()=>{const s=new Date(i,u-1,1);S(s)},f=()=>{const s=new Date(i,u+1,1);S(s)},R=s=>{const l=new Date(i,u,s);$(l,n,N)&&t(l)};return e.jsx(g.div,{initial:{opacity:0,y:-8,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.96},transition:{type:"spring",stiffness:400,damping:30},className:"absolute top-full left-0 mt-2 z-[1300] w-full min-w-[280px] max-w-[320px]",children:e.jsxs("div",{className:"bg-surface-primary border border-border-primary rounded-2xl shadow-lg p-4 backdrop-blur-xl",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx(g.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:x,className:"p-2 rounded-lg hover:bg-surface-secondary transition-apple",type:"button",children:e.jsx("svg",{className:"w-5 h-5 text-text-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 19l-7-7 7-7"})})}),e.jsxs("h3",{className:"text-base font-semibold text-text-primary",children:[b[u]," ",i]}),e.jsx(g.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:f,className:"p-2 rounded-lg hover:bg-surface-secondary transition-apple",type:"button",children:e.jsx("svg",{className:"w-5 h-5 text-text-primary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 5l7 7-7 7"})})})]}),e.jsx("div",{className:"grid grid-cols-7 gap-1 mb-2",children:["Su","Mo","Tu","We","Th","Fr","Sa"].map(s=>e.jsx("div",{className:"text-center text-xs font-medium text-text-tertiary py-2",children:s},s))}),e.jsxs("div",{className:"grid grid-cols-7 gap-1",children:[y.map((s,l)=>e.jsx("div",{className:"aspect-square"},`empty-${l}`)),I.map(s=>{const l=new Date(i,u,s),d=a&&W(l,a),w=W(l,q),p=!$(l,n,N);return e.jsx(g.button,{whileHover:p?{}:{scale:1.05},whileTap:p?{}:{scale:.95},onClick:()=>R(s),disabled:p,className:`
                                    aspect-square rounded-lg text-sm font-medium
                                    transition-apple
                                    ${d?"bg-accent-blue text-white":w?"bg-accent-blue/10 text-accent-blue":"text-text-primary hover:bg-surface-secondary"}
                                    ${p?"opacity-30 cursor-not-allowed":"cursor-pointer"}
                                `,type:"button",children:s},s)})]}),e.jsx("div",{className:"mt-4 pt-4 border-t border-border-primary",children:e.jsx(g.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>t(new Date),className:"w-full py-2 px-4 rounded-lg bg-surface-secondary hover:bg-surface-tertiary text-text-primary text-sm font-medium transition-apple",type:"button",children:"Today"})})]})})},c=({label:a,value:t,onChange:n,placeholder:N="Select date",error:D,helperText:S,disabled:i=!1,minDate:u,maxDate:k,dateFormat:v="medium",size:q="md",className:I=""})=>{const[y,b]=h.useState(!1),[x,f]=h.useState(t||null),[R,s]=h.useState(t||new Date),[l,d]=h.useState(""),[w,p]=h.useState(!1),z=h.useRef(null),A=!!D,Y=o=>{const r=String(o.getMonth()+1).padStart(2,"0"),E=String(o.getDate()).padStart(2,"0"),m=o.getFullYear();return`${r}/${E}/${m}`};h.useEffect(()=>{t?(f(t),s(t),w||d(V(t,v))):w||d("")},[t,v,w]),h.useEffect(()=>{const o=r=>{z.current&&!z.current.contains(r.target)&&b(!1)};return y&&document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[y]);const B=o=>{f(o),s(o),d(V(o,v)),n?.(o),b(!1),p(!1)},H=()=>{i||(p(!0),b(!0),d(x?Y(x):""))},_=()=>{p(!1),d(x?V(x,v):"")},O=o=>{let r=o.target.value;if(r=r.replace(/[^\d/]/g,""),r.length<l.length||(r.length===2&&l.charAt(2)!=="/"&&(r+="/"),r.length===5&&l.charAt(5)!=="/"&&(r+="/")),r.length>10&&(r=r.slice(0,10)),d(r),r.length===10){const m=new Date(r);if(!isNaN(m.getTime())){const[K,Q,X]=r.split("/").map(Number);m.getMonth()+1===K&&m.getDate()===Q&&m.getFullYear()===X&&$(m,u,k)&&(f(m),s(m),n?.(m))}}else r===""&&(f(null),n?.(null))},J=()=>{!i&&!y&&b(!0)},U=o=>{o.stopPropagation(),f(null),d(""),n?.(null)},G=`
        ${ae}
        ${se[q]}
        ${A?"border-status-error focus:border-status-error focus:ring-status-error/20":""}
        ${I}
    `.trim().replace(/\s+/g," ");return e.jsxs("div",{className:"w-full",ref:z,children:[a&&e.jsx("label",{className:"block text-sm font-medium text-text-primary mb-2",children:a}),e.jsxs("div",{className:"relative",children:[e.jsx(g.div,{whileHover:i?{}:{scale:1.005},transition:{type:"spring",stiffness:300,damping:30},children:e.jsx("input",{type:"text",value:l,onChange:O,onFocus:H,onBlur:_,onClick:J,placeholder:w?"MM/DD/YYYY":N,disabled:i,maxLength:10,className:G})}),e.jsxs("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1",children:[l&&!i&&e.jsx(g.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:U,className:"p-1 rounded-md hover:bg-surface-secondary transition-apple",type:"button",children:e.jsx("svg",{className:"w-4 h-4 text-text-tertiary",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})})}),e.jsx("svg",{className:"w-5 h-5 text-text-tertiary pointer-events-none",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})]}),e.jsx(Z,{children:y&&e.jsx(ne,{selectedDate:x,onSelectDate:B,minDate:u,maxDate:k,currentMonth:R,onMonthChange:s})})]}),(D||S)&&e.jsx(g.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},transition:{duration:.16},className:`
                        mt-2 text-sm
                        ${A?"text-status-error":"text-text-secondary"}
                    `,children:D||S})]})};c.displayName="DatePicker";c.__docgenInfo={description:"",methods:[],displayName:"DatePicker",props:{label:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"Date"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select date'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},minDate:{required:!1,tsType:{name:"Date"},description:""},maxDate:{required:!1,tsType:{name:"Date"},description:""},dateFormat:{required:!1,tsType:{name:"union",raw:"'short' | 'medium' | 'long'",elements:[{name:"literal",value:"'short'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'long'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const de={title:"Forms/DatePicker",component:c,tags:[],argTypes:{value:{control:"date"},minDate:{control:"date"},maxDate:{control:"date"},onChange:{action:"changed"},size:{control:"select",options:["sm","md","lg"]},dateFormat:{control:"select",options:["short","medium","long"]}}},C={args:{label:"Select Date",placeholder:"Choose a date"},render:a=>{const[t,n]=j.useState(null);return e.jsx("div",{className:"min-h-[400px] p-4",children:e.jsx(c,{...a,value:t||void 0,onChange:n})})}},F={args:{label:"Birth Date",value:new Date},render:a=>{const[t,n]=j.useState(a.value||new Date);return e.jsx("div",{className:"min-h-[400px] p-4",children:e.jsx(c,{...a,value:t||void 0,onChange:n})})}},M={args:{label:"Appointment Date",helperText:"Select a date within the next 30 days",minDate:new Date,maxDate:new Date(new Date().setDate(new Date().getDate()+30))},render:a=>{const[t,n]=j.useState(null);return e.jsx("div",{className:"min-h-[400px] p-4",children:e.jsx(c,{...a,value:t||void 0,onChange:n})})}},T={args:{label:"Date",error:"Please select a valid date"},render:a=>{const[t,n]=j.useState(null);return e.jsx("div",{className:"min-h-[400px] p-4",children:e.jsx(c,{...a,value:t||void 0,onChange:n})})}},P={render:()=>{const[a,t]=j.useState(null);return e.jsxs("div",{className:"flex flex-col gap-8 min-h-[500px] p-4",children:[e.jsx(c,{label:"Small",size:"sm",value:a||void 0,onChange:t}),e.jsx(c,{label:"Medium",size:"md",value:a||void 0,onChange:t}),e.jsx(c,{label:"Large",size:"lg",value:a||void 0,onChange:t})]})}},L={render:()=>{const[a,t]=j.useState(new Date);return e.jsxs("div",{className:"flex flex-col gap-8 min-h-[500px] p-4",children:[e.jsx(c,{label:"Short Format",dateFormat:"short",value:a||void 0,onChange:t}),e.jsx(c,{label:"Medium Format",dateFormat:"medium",value:a||void 0,onChange:t}),e.jsx(c,{label:"Long Format",dateFormat:"long",value:a||void 0,onChange:t})]})}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select Date',
    placeholder: 'Choose a date'
  },
  render: args => {
    const [date, setDate] = React.useState<Date | null>(null);
    return <div className="min-h-[400px] p-4">
                <DatePicker {...args} value={date || undefined} onChange={setDate} />
            </div>;
  }
}`,...C.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Birth Date',
    value: new Date()
  },
  render: args => {
    const [date, setDate] = React.useState<Date | null>(args.value || new Date());
    return <div className="min-h-[400px] p-4">
                <DatePicker {...args} value={date || undefined} onChange={setDate} />
            </div>;
  }
}`,...F.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Appointment Date',
    helperText: 'Select a date within the next 30 days',
    minDate: new Date(),
    maxDate: new Date(new Date().setDate(new Date().getDate() + 30))
  },
  render: args => {
    const [date, setDate] = React.useState<Date | null>(null);
    return <div className="min-h-[400px] p-4">
                <DatePicker {...args} value={date || undefined} onChange={setDate} />
            </div>;
  }
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Date',
    error: 'Please select a valid date'
  },
  render: args => {
    const [date, setDate] = React.useState<Date | null>(null);
    return <div className="min-h-[400px] p-4">
                <DatePicker {...args} value={date || undefined} onChange={setDate} />
            </div>;
  }
}`,...T.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | null>(null);
    return <div className="flex flex-col gap-8 min-h-[500px] p-4">
                <DatePicker label="Small" size="sm" value={date || undefined} onChange={setDate} />
                <DatePicker label="Medium" size="md" value={date || undefined} onChange={setDate} />
                <DatePicker label="Large" size="lg" value={date || undefined} onChange={setDate} />
            </div>;
  }
}`,...P.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [date, setDate] = React.useState<Date | null>(new Date());
    return <div className="flex flex-col gap-8 min-h-[500px] p-4">
                <DatePicker label="Short Format" dateFormat="short" value={date || undefined} onChange={setDate} />
                <DatePicker label="Medium Format" dateFormat="medium" value={date || undefined} onChange={setDate} />
                <DatePicker label="Long Format" dateFormat="long" value={date || undefined} onChange={setDate} />
            </div>;
  }
}`,...L.parameters?.docs?.source}}};const ue=["Default","WithInitialValue","DateRange","WithError","Sizes","Formats"];export{M as DateRange,C as Default,L as Formats,P as Sizes,T as WithError,F as WithInitialValue,ue as __namedExportsOrder,de as default};
