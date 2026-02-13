import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d,R as O}from"./iframe-D5DOIGW8.js";import{c as y}from"./utils-CDN07tui.js";import{T as _}from"./trash-2-DE-IzMrf.js";import{U as V}from"./upload-BpsUP52k.js";import{m as D}from"./proxy-BbTJ7w1C.js";import{C as J}from"./circle-alert-FvsK5JgO.js";import{A as K}from"./index-B0ZysGGg.js";import{F as X}from"./file-CkSILvZw.js";import{X as H}from"./x-LsZhZSlf.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DOQ0Nu6C.js";const U=(a,s=2)=>{if(a===0)return"0 Bytes";const l=1024,m=s<0?0:s,p=["Bytes","KB","MB","GB","TB"],o=Math.floor(Math.log(a)/Math.log(l));return parseFloat((a/Math.pow(l,o)).toFixed(m))+" "+p[o]},f=({label:a,value:s=[],onChange:l,accept:m,maxSize:p,maxFiles:o,disabled:u=!1,error:I,helperText:A,className:q})=>{const[c,v]=d.useState(s),[M,C]=d.useState(!1),[B,g]=d.useState(null),b=d.useRef(null),h=I||B;O.useEffect(()=>{s!==c&&v(s)},[s]);const $=t=>{t.preventDefault(),u||C(!0)},G=t=>{t.preventDefault(),C(!1)},k=t=>{if(p&&t.size>p)return`File "${t.name}" exceeds size limit of ${U(p)}`;if(m){const r=m.split(",").map(n=>n.trim()),x=t.type,i=t.name;if(!r.some(n=>n.endsWith("/*")?x.startsWith(n.replace("/*","")):n.startsWith(".")?i.toLowerCase().endsWith(n.toLowerCase()):x===n))return`File "${t.name}" format not accepted`}return null},z=t=>{if(g(null),o&&c.length+t.length>o){g(`Maximum ${o} files allowed`);return}const r=[];let x=null;if(t.forEach(i=>{const S=k(i);S?x=S:c.some(n=>n.name===i.name&&n.size===i.size)||r.push(i)}),x&&g(x),r.length>0){const i=[...c,...r];v(i),l?.(i)}},E=t=>{if(t.preventDefault(),C(!1),u)return;const r=Array.from(t.dataTransfer.files);r.length>0&&z(r)},L=t=>{const r=t.target.files?Array.from(t.target.files):[];r.length>0&&z(r),b.current&&(b.current.value="")},W=t=>{const r=c.filter((x,i)=>i!==t);v(r),l?.(r),g(null)},P=()=>{v([]),l?.([]),g(null)},R=()=>{u||b.current?.click()};return e.jsxs("div",{className:y("w-full",q),children:[e.jsxs("div",{className:"flex justify-between items-end mb-2",children:[a&&e.jsx("label",{className:"block text-sm font-medium text-text-primary",children:a}),c.length>0&&!u&&e.jsxs("button",{onClick:P,className:"text-xs text-text-tertiary hover:text-status-error transition-colors flex items-center gap-1",type:"button",children:[e.jsx(_,{className:"w-3 h-3"}),"Clear all"]})]}),e.jsxs("div",{onClick:R,onDragOver:$,onDragLeave:G,onDrop:E,className:y("relative group cursor-pointer rounded-xl border-2 border-dashed transition-all duration-200 ease-in-out overflow-hidden","min-h-[120px] flex flex-col items-center justify-center p-6 text-center",M?"border-accent-blue bg-accent-blue/5 scale-[1.01]":"border-border-secondary bg-surface-primary hover:bg-surface-secondary hover:border-border-primary",h&&"border-status-error bg-status-error/5",u&&"opacity-50 cursor-not-allowed hover:bg-surface-primary hover:border-border-secondary"),children:[e.jsx("input",{ref:b,type:"file",className:"hidden",multiple:!0,accept:m,onChange:L,disabled:u}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:y("p-3 rounded-full bg-surface-secondary transition-colors group-hover:bg-surface-tertiary",M&&"bg-accent-blue/10 text-accent-blue"),children:e.jsx(V,{className:y("w-6 h-6 text-text-secondary transition-colors",M&&"text-accent-blue")})}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"text-sm font-medium text-text-primary",children:[e.jsx("span",{className:"text-accent-blue hover:underline",children:"Click to upload"})," or drag and drop"]}),e.jsxs("p",{className:"text-xs text-text-tertiary",children:[m?`Accepted formats: ${m.replace(/,/g,", ")}`:"All files accepted",p&&` • Max size: ${U(p)}`,o&&` • Max files: ${o}`]})]})]})]}),(h||A)&&e.jsxs(D.div,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},className:"mt-2 flex items-center gap-2",children:[h&&e.jsx(J,{className:"w-4 h-4 text-status-error"}),e.jsx("p",{className:y("text-sm",h?"text-status-error":"text-text-secondary"),children:h||A})]}),e.jsx(K,{children:c.length>0&&e.jsx(D.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},className:"mt-4 space-y-2",children:c.map((t,r)=>e.jsxs(D.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},className:"flex items-center gap-3 p-3 rounded-lg bg-surface-secondary border border-border-primary group/item",children:[e.jsx("div",{className:"p-2 bg-surface-tertiary rounded-md",children:e.jsx(X,{className:"w-5 h-5 text-accent-blue"})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-text-primary truncate",children:t.name}),e.jsx("p",{className:"text-xs text-text-tertiary",children:U(t.size)})]}),!u&&e.jsx("button",{onClick:()=>W(r),className:"p-1.5 rounded-md hover:bg-surface-tertiary text-text-tertiary hover:text-status-error transition-colors opacity-0 group-hover/item:opacity-100 focus:opacity-100",type:"button","aria-label":"Remove file",children:e.jsx(H,{className:"w-4 h-4"})})]},`${t.name}-${r}`))})})]})};f.displayName="MultiFileUpload";f.__docgenInfo={description:"",methods:[],displayName:"MultiFileUpload",props:{label:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"File"}],raw:"File[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""},accept:{required:!1,tsType:{name:"string"},description:""},maxSize:{required:!1,tsType:{name:"number"},description:""},maxFiles:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ce={title:"Forms/MultiFileUpload",component:f,tags:[],argTypes:{accept:{control:"text"},maxSize:{control:"number"},maxFiles:{control:"number"},disabled:{control:"boolean"},error:{control:"text"},helperText:{control:"text"}}},F={render:a=>{const[s,l]=d.useState([]);return e.jsx("div",{className:"max-w-xl",children:e.jsx(f,{...a,value:s,onChange:l})})},args:{label:"Upload Documents"}},N={render:a=>{const[s,l]=d.useState([]);return e.jsx("div",{className:"max-w-xl",children:e.jsx(f,{...a,value:s,onChange:l,maxFiles:3,helperText:"Upload up to 3 files"})})},args:{label:"Portfolio Items"}},j={render:a=>{const[s,l]=d.useState([]);return e.jsx("div",{className:"max-w-xl",children:e.jsx(f,{...a,value:s,onChange:l,accept:"image/*",helperText:"Supports: JPG, PNG, GIF"})})},args:{label:"Gallery Images"}},w={render:a=>{const[s,l]=d.useState([]);return e.jsx("div",{className:"max-w-xl",children:e.jsx(f,{...a,value:s,onChange:l,maxSize:1024*1024,helperText:"Max size per file: 1MB"})})},args:{label:"Attachments"}},T={args:{label:"Upload Disabled",disabled:!0,value:[new File([""],"document.pdf",{type:"application/pdf"}),new File([""],"image.png",{type:"image/png"})]}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [files, setFiles] = useState<File[]>([]);
    return <div className="max-w-xl">
                <MultiFileUpload {...args} value={files} onChange={setFiles} />
            </div>;
  },
  args: {
    label: 'Upload Documents'
  }
}`,...F.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [files, setFiles] = useState<File[]>([]);
    return <div className="max-w-xl">
                <MultiFileUpload {...args} value={files} onChange={setFiles} maxFiles={3} helperText="Upload up to 3 files" />
            </div>;
  },
  args: {
    label: 'Portfolio Items'
  }
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [files, setFiles] = useState<File[]>([]);
    return <div className="max-w-xl">
                <MultiFileUpload {...args} value={files} onChange={setFiles} accept="image/*" helperText="Supports: JPG, PNG, GIF" />
            </div>;
  },
  args: {
    label: 'Gallery Images'
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [files, setFiles] = useState<File[]>([]);
    return <div className="max-w-xl">
                <MultiFileUpload {...args} value={files} onChange={setFiles} maxSize={1024 * 1024} // 1MB
      helperText="Max size per file: 1MB" />
            </div>;
  },
  args: {
    label: 'Attachments'
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload Disabled',
    disabled: true,
    value: [new File([''], 'document.pdf', {
      type: 'application/pdf'
    }), new File([''], 'image.png', {
      type: 'image/png'
    })]
  }
}`,...T.parameters?.docs?.source}}};const de=["Default","WithFileLimit","ImagesOnly","WithSizeLimit","Disabled"];export{F as Default,T as Disabled,j as ImagesOnly,N as WithFileLimit,w as WithSizeLimit,de as __namedExportsOrder,ce as default};
