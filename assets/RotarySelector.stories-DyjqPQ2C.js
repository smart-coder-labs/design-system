import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as r}from"./iframe-CGazvlvx.js";import{c as k}from"./utils-CDN07tui.js";import{m as f}from"./proxy-BNOm_ZMq.js";import{A}from"./index-C-eQ3fKV.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-juiWZL7b.js";const i=r.forwardRef(({options:t,value:n,onChange:o,size:l="md",showLabel:z=!0,disabled:m=!1,className:M=""},T)=>{const p=r.useRef(null);r.useImperativeHandle(T,()=>p.current);const[x,O]=r.useState(!1),[c,w]=r.useState(()=>{const a=t.findIndex(s=>s.value===n);return a>=0?a:0});r.useEffect(()=>{if(n!==void 0){const a=t.findIndex(s=>s.value===n);a!==-1&&a!==c&&w(a)}},[n,t,c]);const q={sm:{container:"w-64 h-64",center:"w-24 h-24",option:"w-10 h-10 text-xs",posRadius:90},md:{container:"w-96 h-96",center:"w-32 h-32",option:"w-14 h-14 text-sm",posRadius:135},lg:{container:"w-[32rem] h-[32rem]",center:"w-40 h-40",option:"w-16 h-16 text-base",posRadius:180}},{container:D,center:E,option:L,posRadius:_}=q[l],C=360/t.length,S=a=>{if(!x||!p.current)return;const s=p.current.getBoundingClientRect(),v=s.left+s.width/2,R=s.top+s.height/2,N=a.clientX-v,g=a.clientY-R;let V=Math.atan2(g,N)*180/Math.PI;V=(V+450)%360;const u=Math.round(V/C)%t.length;u!==c&&!t[u]?.disabled&&(w(u),o?.(t[u].value,t[u]))};r.useEffect(()=>(x?(window.addEventListener("pointermove",S),window.addEventListener("pointerup",()=>O(!1),{once:!0})):window.removeEventListener("pointermove",S),()=>{window.removeEventListener("pointermove",S)}),[x]);const d=t[c];return e.jsxs("div",{ref:p,className:k("relative flex items-center justify-center select-none",D,m&&"opacity-50 grayscale",M),children:[t.map((a,s)=>{const v=(s*C-90)*(Math.PI/180),R=Math.cos(v)*_,N=Math.sin(v)*_,g=s===c;return e.jsxs(f.button,{onClick:()=>{!a.disabled&&!m&&(w(s),o?.(a.value,a))},disabled:m||a.disabled,className:k("absolute rounded-full flex items-center justify-center transition-all duration-300",L,g?"bg-accent-blue text-white shadow-[0_0_20px_rgba(0,122,255,0.4)] scale-110 z-10":"bg-surface-elevated/80 backdrop-blur-md text-text-secondary hover:bg-surface-elevated hover:text-text-primary",a.disabled&&"opacity-30 cursor-not-allowed"),style:{left:`calc(50% + ${R}px)`,top:`calc(50% + ${N}px)`,transform:"translate(-50%, -50%)"},children:[a.icon?e.jsx("span",{className:"text-xl",children:a.icon}):e.jsx("span",{className:"font-semibold",children:a.label}),g&&e.jsx(f.div,{layoutId:"active-glow",className:"absolute inset-0 rounded-full ring-2 ring-white/30"})]},a.id)}),e.jsxs(f.div,{className:k("absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center bg-surface-elevated/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-20",E),onPointerDown:()=>!m&&O(!0),animate:{scale:x?.96:1},children:[e.jsx(A,{mode:"wait",children:d?.icon&&e.jsx(f.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},className:"text-3xl text-accent-blue mb-1",children:d.icon},d.id)}),z&&e.jsxs("div",{className:"flex flex-col items-center text-center",children:[e.jsx("span",{className:"text-xs font-semibold text-text-primary",children:d?.label}),e.jsx("span",{className:"text-[10px] text-text-tertiary font-medium",children:d?.value})]})]})]})});i.displayName="RotarySelector";i.__docgenInfo={description:"",methods:[],displayName:"RotarySelector",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"RotarySelectorOption"}],raw:"RotarySelectorOption[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number, option: RotarySelectorOption) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"},{type:{name:"RotarySelectorOption"},name:"option"}],return:{name:"void"}}},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},hapticFeedback:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const F=()=>e.jsx("span",{children:"🔊"}),P=()=>e.jsx("span",{children:"💨"}),Q={title:"Forms/RotarySelector",component:i,tags:[],argTypes:{value:{control:"text"},size:{control:"select",options:["sm","md","lg"]},showLabel:{control:"boolean"},hapticFeedback:{control:"boolean"},disabled:{control:"boolean"},onChange:{action:"changed"}}},I=Array.from({length:12},(t,n)=>({id:`vol-${n}`,label:`${n*10}%`,value:n*10,icon:n===0?e.jsx("span",{children:"🔇"}):e.jsx(F,{})})),$=[{id:"auto",label:"Auto",value:"auto",icon:e.jsx("span",{children:"🤖"})},{id:"cool",label:"Cool",value:"cool",icon:e.jsx("span",{children:"❄️"})},{id:"dry",label:"Dry",value:"dry",icon:e.jsx("span",{children:"💧"})},{id:"fan",label:"Fan",value:"fan",icon:e.jsx(P,{})},{id:"heat",label:"Heat",value:"heat",icon:e.jsx("span",{children:"🔥"})}],h={args:{options:I,value:50},render:t=>{const[n,o]=r.useState(t.value);return e.jsx("div",{className:"min-h-[500px] flex items-center justify-center bg-background-secondary p-8",children:e.jsx(i,{...t,value:n,onChange:l=>o(l)})})}},b={args:{options:$,value:"auto",size:"sm"},render:t=>{const[n,o]=r.useState(t.value);return e.jsx("div",{className:"min-h-[400px] flex items-center justify-center bg-background-secondary p-8",children:e.jsx(i,{...t,value:n,onChange:l=>o(l)})})}},y={args:{options:I,value:50,size:"lg"},render:t=>{const[n,o]=r.useState(t.value);return e.jsx("div",{className:"min-h-[600px] flex items-center justify-center bg-background-secondary p-8",children:e.jsx(i,{...t,value:n,onChange:l=>o(l)})})}},j={args:{options:I,value:50,disabled:!0},render:t=>e.jsx("div",{className:"min-h-[500px] flex items-center justify-center bg-background-secondary p-8",children:e.jsx(i,{...t})})};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    options: volumeOptions,
    value: 50
  },
  render: args => {
    const [value, setValue] = React.useState(args.value);
    return <div className="min-h-[500px] flex items-center justify-center bg-background-secondary p-8">
                <RotarySelector {...args} value={value} onChange={v => setValue(v)} />
            </div>;
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    options: modeOptions,
    value: 'auto',
    size: 'sm'
  },
  render: args => {
    const [value, setValue] = React.useState(args.value);
    return <div className="min-h-[400px] flex items-center justify-center bg-background-secondary p-8">
                <RotarySelector {...args} value={value} onChange={v => setValue(v)} />
            </div>;
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    options: volumeOptions,
    value: 50,
    size: 'lg'
  },
  render: args => {
    const [value, setValue] = React.useState(args.value);
    return <div className="min-h-[600px] flex items-center justify-center bg-background-secondary p-8">
                <RotarySelector {...args} value={value} onChange={v => setValue(v)} />
            </div>;
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    options: volumeOptions,
    value: 50,
    disabled: true
  },
  render: args => <div className="min-h-[500px] flex items-center justify-center bg-background-secondary p-8">
            <RotarySelector {...args} />
        </div>
}`,...j.parameters?.docs?.source}}};const U=["Default","Modes","Large","Disabled"];export{h as Default,j as Disabled,y as Large,b as Modes,U as __namedExportsOrder,Q as default};
