import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-CGazvlvx.js";import{c as D}from"./utils-CDN07tui.js";import{m as M}from"./proxy-BNOm_ZMq.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-juiWZL7b.js";const P={sm:"w-8 h-8 text-sm rounded-md",md:"w-10 h-10 text-base rounded-lg",lg:"w-12 h-12 text-lg rounded-xl"},u=({length:s=6,value:o="",onChange:l,onComplete:g,disabled:E=!1,error:T=!1,type:V="text",placeholder:q="",className:C,size:A="md"})=>{const j=p.useRef([]),[c,d]=p.useState(()=>{const e=Array(s).fill("");return o&&o.split("").forEach((t,a)=>{a<s&&(e[a]=t)}),e});p.useEffect(()=>{if(o!==void 0){const e=Array(s).fill("");o.split("").forEach((t,a)=>{a<s&&(e[a]=t)}),d(e)}},[o,s]);const m=e=>{j.current[e]&&j.current[e]?.focus()},_=(e,n)=>{const t=n.target.value;let a=[...c];if(t.length>1){const f=t.split("");let v=e;f.forEach(I=>{v<s&&(a[v]=I,v++)}),d(a);const N=a.join("");l?.(N),N.length===s&&g?.(N);const z=a.findIndex(I=>I==="");m(z===-1?s-1:z);return}a[e]=t,d(a);const i=a.join("");l?.(i),t&&e<s-1&&m(e+1),i.length===s&&g?.(i)},k=(e,n)=>{if(n.key==="Backspace")if(!c[e]&&e>0){const t=[...c];t[e-1]="",d(t),l?.(t.join("")),m(e-1)}else{const t=[...c];t[e]="",d(t),l?.(t.join(""))}else n.key==="ArrowLeft"&&e>0?m(e-1):n.key==="ArrowRight"&&e<s-1&&m(e+1)},L=e=>{e.preventDefault();const t=e.clipboardData.getData("text").split(""),a=[...c];let i=0;t.forEach(v=>{i<s&&(a[i]=v,i++)}),d(a);const f=a.join("");l?.(f),f.length===s&&g?.(f),m(Math.min(i,s-1))};return r.jsx("div",{className:D("flex gap-2",C),children:Array.from({length:s}).map((e,n)=>r.jsx(M.div,{whileFocus:{scale:1.05},transition:{type:"spring",stiffness:300,damping:30},children:r.jsx("input",{ref:t=>{j.current[n]=t},type:V==="number"?"text":V,inputMode:V==="number"?"numeric":"text",maxLength:1,value:c[n],onChange:t=>_(n,t),onKeyDown:t=>k(n,t),onPaste:L,disabled:E,placeholder:q,className:D("bg-surface-primary border border-border-primary text-text-primary text-center font-medium transition-apple focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 disabled:opacity-40 disabled:cursor-not-allowed",P[A],T&&"border-status-error focus:border-status-error focus:ring-status-error/20 text-status-error")})},n))})};u.displayName="SegmentedInput";u.__docgenInfo={description:"",methods:[],displayName:"SegmentedInput",props:{length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'number' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'number'"},{name:"literal",value:"'password'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const G={title:"Forms/SegmentedInput",component:u,tags:[],argTypes:{length:{control:{type:"number",min:3,max:8}},size:{control:"select",options:["sm","md","lg"]},type:{control:"select",options:["text","number","password"]},disabled:{control:"boolean"},error:{control:"boolean"}}},x={render:s=>{const[o,l]=p.useState("");return r.jsxs("div",{className:"flex flex-col gap-4",children:[r.jsx(u,{...s,value:o,onChange:l,onComplete:g=>console.log("Completed:",g)}),r.jsxs("div",{className:"text-sm text-text-secondary",children:["Current value: ",o]})]})},args:{length:6}},h={render:s=>{const[o,l]=p.useState("");return r.jsx(u,{...s,value:o,onChange:l,type:"number"})},args:{length:4,placeholder:"0"}},y={render:s=>{const[o,l]=p.useState("");return r.jsx(u,{...s,value:o,onChange:l,type:"password"})},args:{length:6}},b={args:{length:6,error:!0,value:"123456"}},S={args:{length:6,disabled:!0,value:"123456"}},w={render:()=>r.jsxs("div",{className:"flex flex-col gap-8",children:[r.jsxs("div",{children:[r.jsx("div",{className:"mb-2 text-sm text-text-secondary",children:"Small"}),r.jsx(u,{length:4,size:"sm"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"mb-2 text-sm text-text-secondary",children:"Medium"}),r.jsx(u,{length:4,size:"md"})]}),r.jsxs("div",{children:[r.jsx("div",{className:"mb-2 text-sm text-text-secondary",children:"Large"}),r.jsx(u,{length:4,size:"lg"})]})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div className="flex flex-col gap-4">
                <SegmentedInput {...args} value={value} onChange={setValue} onComplete={val => console.log('Completed:', val)} />
                <div className="text-sm text-text-secondary">
                    Current value: {value}
                </div>
            </div>;
  },
  args: {
    length: 6
  }
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <SegmentedInput {...args} value={value} onChange={setValue} type="number" />;
  },
  args: {
    length: 4,
    placeholder: '0'
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <SegmentedInput {...args} value={value} onChange={setValue} type="password" />;
  },
  args: {
    length: 6
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    error: true,
    value: '123456'
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    disabled: true,
    value: '123456'
  }
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
            <div>
                <div className="mb-2 text-sm text-text-secondary">Small</div>
                <SegmentedInput length={4} size="sm" />
            </div>
            <div>
                <div className="mb-2 text-sm text-text-secondary">Medium</div>
                <SegmentedInput length={4} size="md" />
            </div>
            <div>
                <div className="mb-2 text-sm text-text-secondary">Large</div>
                <SegmentedInput length={4} size="lg" />
            </div>
        </div>
}`,...w.parameters?.docs?.source}}};const H=["Default","Numeric","Password","WithError","Disabled","Sizes"];export{x as Default,S as Disabled,h as Numeric,y as Password,w as Sizes,b as WithError,H as __namedExportsOrder,G as default};
