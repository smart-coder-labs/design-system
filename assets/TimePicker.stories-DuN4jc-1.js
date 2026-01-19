import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-BQuKaBw1.js";import{c as m}from"./utils-CDN07tui.js";import{m as k}from"./proxy-DCsQVuEn.js";import{C as B}from"./clock-9eX7vOtI.js";import{A as G}from"./index-DWG6ZTkU.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-7-Glrotp.js";const J=a=>{if(!a)return null;const[s,n]=a.split(":").map(Number);return isNaN(s)||isNaN(n)||s<0||s>23||n<0||n>59?null:{hours:s,minutes:n}},E=(a,s,n)=>{const u=s.toString().padStart(2,"0");if(n==="24h")return`${a.toString().padStart(2,"0")}:${u}`;{const c=a>=12?"PM":"AM";return`${a%12||12}:${u} ${c}`}},K=`
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
`,d=({label:a,value:s,onChange:n,placeholder:u="Select time",error:c,helperText:v,disabled:S=!1,format:o="12h",step:p=15,className:H=""})=>{const[x,C]=i.useState(!1),[I,T]=i.useState(""),N=i.useRef(null),[l,M]=i.useState(new Date().getHours()),[j,A]=i.useState(Math.floor(new Date().getMinutes()/p)*p),[P,q]=i.useState(new Date().getHours()>=12?"PM":"AM"),D=!!c;i.useEffect(()=>{if(s){const e=J(s);e&&(T(E(e.hours,e.minutes,o)),M(e.hours),A(e.minutes),q(e.hours>=12?"PM":"AM"))}else T("")},[s,o]),i.useEffect(()=>{const e=r=>{N.current&&!N.current.contains(r.target)&&C(!1)};return x&&document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[x]);const V=()=>{S||C(!x)},w=(e,r)=>{M(e),A(r);const L=e.toString().padStart(2,"0"),W=r.toString().padStart(2,"0"),z=`${L}:${W}`;n?.(z),T(E(e,r,o))},_=e=>{let r=e;o==="12h"&&(P==="PM"&&e!==12&&(r=e+12),P==="AM"&&e===12&&(r=0)),w(r,j)},$=e=>{w(l,e)},O=e=>{q(e);let r=l;e==="AM"&&l>=12?r=l-12:e==="PM"&&l<12&&(r=l+12),w(r,j)},F=o==="12h"?Array.from({length:12},(e,r)=>r+1):Array.from({length:24},(e,r)=>r),R=Array.from({length:60/p},(e,r)=>r*p);return t.jsxs("div",{className:m("w-full",H),ref:N,children:[a&&t.jsx("label",{className:"block text-sm font-medium text-text-primary mb-2",children:a}),t.jsxs("div",{className:"relative",children:[t.jsx(k.div,{whileHover:S?{}:{scale:1.005},transition:{type:"spring",stiffness:300,damping:30},children:t.jsx("input",{type:"text",readOnly:!0,value:I,onClick:V,placeholder:u,disabled:S,className:m(K,D&&"border-status-error focus:border-status-error focus:ring-status-error/20")})}),t.jsx("div",{className:"absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none",children:t.jsx(B,{className:"w-5 h-5 text-text-tertiary"})}),t.jsx(G,{children:x&&t.jsx(k.div,{initial:{opacity:0,y:-8,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.96},transition:{type:"spring",stiffness:400,damping:30},className:"absolute top-full left-0 mt-2 z-[1300] w-full min-w-[280px] p-4 bg-surface-primary border border-border-primary rounded-2xl shadow-lg backdrop-blur-xl",children:t.jsxs("div",{className:"flex gap-2 h-48",children:[t.jsxs("div",{className:"flex-1 flex flex-col",children:[t.jsx("div",{className:"text-xs font-medium text-text-tertiary mb-2 text-center",children:"Hour"}),t.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-hide space-y-1",children:F.map(e=>{const r=o==="12h"?(l%12||12)===e:l===e;return t.jsx("button",{onClick:()=>_(e),className:m("w-full py-1.5 px-2 rounded-lg text-sm transition-colors",r?"bg-accent-blue text-white font-medium":"text-text-primary hover:bg-surface-secondary"),children:e.toString().padStart(2,"0")},e)})})]}),t.jsx("div",{className:"flex items-center justify-center text-text-tertiary",children:":"}),t.jsxs("div",{className:"flex-1 flex flex-col",children:[t.jsx("div",{className:"text-xs font-medium text-text-tertiary mb-2 text-center",children:"Minute"}),t.jsx("div",{className:"flex-1 overflow-y-auto scrollbar-hide space-y-1",children:R.map(e=>t.jsx("button",{onClick:()=>$(e),className:m("w-full py-1.5 px-2 rounded-lg text-sm transition-colors",j===e?"bg-accent-blue text-white font-medium":"text-text-primary hover:bg-surface-secondary"),children:e.toString().padStart(2,"0")},e))})]}),o==="12h"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"w-px bg-border-primary mx-1"}),t.jsxs("div",{className:"flex-1 flex flex-col",children:[t.jsx("div",{className:"text-xs font-medium text-text-tertiary mb-2 text-center",children:"Period"}),t.jsx("div",{className:"flex-1 space-y-1",children:["AM","PM"].map(e=>t.jsx("button",{onClick:()=>O(e),className:m("w-full py-1.5 px-2 rounded-lg text-sm transition-colors",P===e?"bg-accent-blue text-white font-medium":"text-text-primary hover:bg-surface-secondary"),children:e},e))})]})]})]})})})]}),(c||v)&&t.jsx(k.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},transition:{duration:.16},className:m("mt-2 text-sm",D?"text-status-error":"text-text-secondary"),children:c||v})]})};d.displayName="TimePicker";d.__docgenInfo={description:"",methods:[],displayName:"TimePicker",props:{label:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(time: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"time"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select time'",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},format:{required:!1,tsType:{name:"union",raw:"'12h' | '24h'",elements:[{name:"literal",value:"'12h'"},{name:"literal",value:"'24h'"}]},description:"",defaultValue:{value:"'12h'",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"15",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const se={title:"Forms/TimePicker",component:d,tags:[],argTypes:{format:{control:"radio",options:["12h","24h"]},step:{control:"select",options:[1,5,15,30,60]},disabled:{control:"boolean"},error:{control:"text"},helperText:{control:"text"}}},f={render:a=>{const[s,n]=i.useState(null);return t.jsx("div",{className:"h-[300px]",children:t.jsx(d,{...a,value:s||void 0,onChange:n})})},args:{label:"Select Time",placeholder:"Pick a time"}},h={render:a=>{const[s,n]=i.useState("14:30");return t.jsx("div",{className:"h-[300px]",children:t.jsx(d,{...a,value:s||void 0,onChange:n,format:"24h"})})},args:{label:"Meeting Time (24h)"}},g={render:a=>{const[s,n]=i.useState(null);return t.jsx("div",{className:"h-[300px]",children:t.jsx(d,{...a,value:s||void 0,onChange:n,step:5,helperText:"Select time in 5-minute increments"})})},args:{label:"Precise Time"}},y={args:{label:"Invalid Time",error:"Please select a valid time",value:"99:99"}},b={args:{label:"Disabled Picker",disabled:!0,value:"10:00"}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [time, setTime] = useState<string | null>(null);
    return <div className="h-[300px]">
                <TimePicker {...args} value={time || undefined} onChange={setTime} />
            </div>;
  },
  args: {
    label: 'Select Time',
    placeholder: 'Pick a time'
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [time, setTime] = useState<string | null>('14:30');
    return <div className="h-[300px]">
                <TimePicker {...args} value={time || undefined} onChange={setTime} format="24h" />
            </div>;
  },
  args: {
    label: 'Meeting Time (24h)'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [time, setTime] = useState<string | null>(null);
    return <div className="h-[300px]">
                <TimePicker {...args} value={time || undefined} onChange={setTime} step={5} helperText="Select time in 5-minute increments" />
            </div>;
  },
  args: {
    label: 'Precise Time'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Invalid Time',
    error: 'Please select a valid time',
    value: '99:99'
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Picker',
    disabled: true,
    value: '10:00'
  }
}`,...b.parameters?.docs?.source}}};const ae=["Default","Format24h","CustomStep","WithError","Disabled"];export{g as CustomStep,f as Default,b as Disabled,h as Format24h,y as WithError,ae as __namedExportsOrder,se as default};
