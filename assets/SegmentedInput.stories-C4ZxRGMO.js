import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-BMG7cCGY.js";import{c as D}from"./utils-CDN07tui.js";import{m as M}from"./proxy-BFHmY9N3.js";import"./preload-helper-PPVm8Dsz.js";const P={sm:"w-8 h-8 text-sm rounded-md",md:"w-10 h-10 text-base rounded-lg",lg:"w-12 h-12 text-lg rounded-xl"},u=({length:s=6,value:o="",onChange:l,onComplete:g,disabled:E=!1,error:T=!1,type:V="text",placeholder:q="",className:C,size:A="md"})=>{const j=p.useRef([]),[i,d]=p.useState(()=>{const e=Array(s).fill("");return o&&o.split("").forEach((t,r)=>{r<s&&(e[r]=t)}),e});p.useEffect(()=>{if(o!==void 0){const e=Array(s).fill("");o.split("").forEach((t,r)=>{r<s&&(e[r]=t)}),d(e)}},[o,s]);const m=e=>{j.current[e]&&j.current[e]?.focus()},_=(e,n)=>{const t=n.target.value;let r=[...i];if(t.length>1){const f=t.split("");let v=e;f.forEach(I=>{v<s&&(r[v]=I,v++)}),d(r);const N=r.join("");l?.(N),N.length===s&&g?.(N);const z=r.findIndex(I=>I==="");m(z===-1?s-1:z);return}r[e]=t,d(r);const c=r.join("");l?.(c),t&&e<s-1&&m(e+1),c.length===s&&g?.(c)},k=(e,n)=>{if(n.key==="Backspace")if(!i[e]&&e>0){const t=[...i];t[e-1]="",d(t),l?.(t.join("")),m(e-1)}else{const t=[...i];t[e]="",d(t),l?.(t.join(""))}else n.key==="ArrowLeft"&&e>0?m(e-1):n.key==="ArrowRight"&&e<s-1&&m(e+1)},L=e=>{e.preventDefault();const t=e.clipboardData.getData("text").split(""),r=[...i];let c=0;t.forEach(v=>{c<s&&(r[c]=v,c++)}),d(r);const f=r.join("");l?.(f),f.length===s&&g?.(f),m(Math.min(c,s-1))};return a.jsx("div",{className:D("flex gap-2",C),children:Array.from({length:s}).map((e,n)=>a.jsx(M.div,{whileFocus:{scale:1.05},transition:{type:"spring",stiffness:300,damping:30},children:a.jsx("input",{ref:t=>{j.current[n]=t},type:V==="number"?"text":V,inputMode:V==="number"?"numeric":"text",maxLength:1,value:i[n],onChange:t=>_(n,t),onKeyDown:t=>k(n,t),onPaste:L,disabled:E,placeholder:q,className:D("bg-surface-primary border border-border-primary text-text-primary text-center font-medium transition-apple focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 disabled:opacity-40 disabled:cursor-not-allowed",P[A],T&&"border-status-error focus:border-status-error focus:ring-status-error/20 text-status-error")})},n))})};u.displayName="SegmentedInput";u.__docgenInfo={description:"",methods:[],displayName:"SegmentedInput",props:{length:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'text' | 'number' | 'password'",elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'number'"},{name:"literal",value:"'password'"}]},description:"",defaultValue:{value:"'text'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const O={title:"Forms/SegmentedInput",component:u,tags:[],argTypes:{length:{control:{type:"number",min:3,max:8}},size:{control:"select",options:["sm","md","lg"]},type:{control:"select",options:["text","number","password"]},disabled:{control:"boolean"},error:{control:"boolean"}}},x={render:s=>{const[o,l]=p.useState("");return a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(u,{...s,value:o,onChange:l,onComplete:g=>console.log("Completed:",g)}),a.jsxs("div",{className:"text-sm text-text-secondary",children:["Current value: ",o]})]})},args:{length:6}},h={render:s=>{const[o,l]=p.useState("");return a.jsx(u,{...s,value:o,onChange:l,type:"number"})},args:{length:4,placeholder:"0"}},y={render:s=>{const[o,l]=p.useState("");return a.jsx(u,{...s,value:o,onChange:l,type:"password"})},args:{length:6}},b={args:{length:6,error:!0,value:"123456"}},S={args:{length:6,disabled:!0,value:"123456"}},w={render:()=>a.jsxs("div",{className:"flex flex-col gap-8",children:[a.jsxs("div",{children:[a.jsx("div",{className:"mb-2 text-sm text-text-secondary",children:"Small"}),a.jsx(u,{length:4,size:"sm"})]}),a.jsxs("div",{children:[a.jsx("div",{className:"mb-2 text-sm text-text-secondary",children:"Medium"}),a.jsx(u,{length:4,size:"md"})]}),a.jsxs("div",{children:[a.jsx("div",{className:"mb-2 text-sm text-text-secondary",children:"Large"}),a.jsx(u,{length:4,size:"lg"})]})]})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const G=["Default","Numeric","Password","WithError","Disabled","Sizes"];export{x as Default,S as Disabled,h as Numeric,y as Password,w as Sizes,b as WithError,G as __namedExportsOrder,O as default};
