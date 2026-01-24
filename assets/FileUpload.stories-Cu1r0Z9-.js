import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-FxOJXbvx.js";import{c as m}from"./utils-CDN07tui.js";import{A as I}from"./index-BNHizxPa.js";import{m as D}from"./proxy-PznluMrK.js";import{F as L}from"./file-BuFnRh9A.js";import{X as R}from"./x-dbi_dvs5.js";import{U as A}from"./upload-CY5y7hEO.js";import{C as O}from"./circle-alert-C9xwu2Nj.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DJ7P2U_s.js";const T=(a,o=2)=>{if(a===0)return"0 Bytes";const s=1024,l=o<0?0:o,i=["Bytes","KB","MB","GB","TB"],u=Math.floor(Math.log(a)/Math.log(s));return parseFloat((a/Math.pow(s,u)).toFixed(l))+" "+i[u]},c=({label:a,onChange:o,accept:s,maxSize:l,disabled:i=!1,error:u,helperText:U,className:C})=>{const[F,N]=p.useState(null),[j,w]=p.useState(!1),[M,x]=p.useState(null),f=p.useRef(null),d=u||M,B=r=>{r.preventDefault(),i||w(!0)},z=r=>{r.preventDefault(),w(!1)},S=r=>{if(x(null),l&&r.size>l)return x(`File size must be less than ${T(l)}`),!1;if(s){const t=s.split(",").map(n=>n.trim()),P=r.type,G=r.name;if(!t.some(n=>n.endsWith("/*")?P.startsWith(n.replace("/*","")):n.startsWith(".")?G.toLowerCase().endsWith(n.toLowerCase()):P===n))return x("File type not accepted"),!1}return!0},k=r=>{if(r.preventDefault(),w(!1),i)return;const t=r.dataTransfer.files[0];t&&S(t)&&(N(t),o?.(t))},q=r=>{const t=r.target.files?.[0];t&&S(t)&&(N(t),o?.(t)),f.current&&(f.current.value="")},W=r=>{r.stopPropagation(),N(null),x(null),o?.(null)},E=()=>{i||f.current?.click()};return e.jsxs("div",{className:m("w-full",C),children:[a&&e.jsx("label",{className:"block text-sm font-medium text-text-primary mb-2",children:a}),e.jsxs("div",{onClick:E,onDragOver:B,onDragLeave:z,onDrop:k,className:m("relative group cursor-pointer rounded-xl border-2 border-dashed transition-all duration-200 ease-in-out overflow-hidden","min-h-[120px] flex flex-col items-center justify-center p-6 text-center",j?"border-accent-blue bg-accent-blue/5 scale-[1.01]":"border-border-secondary bg-surface-primary hover:bg-surface-secondary hover:border-border-primary",d&&"border-status-error bg-status-error/5",i&&"opacity-50 cursor-not-allowed hover:bg-surface-primary hover:border-border-secondary"),children:[e.jsx("input",{ref:f,type:"file",className:"hidden",accept:s,onChange:q,disabled:i}),e.jsx(I,{mode:"wait",children:F?e.jsxs(D.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:"flex items-center gap-4 w-full max-w-md bg-surface-secondary p-3 rounded-lg border border-border-primary",onClick:r=>r.stopPropagation(),children:[e.jsx("div",{className:"p-2 bg-surface-tertiary rounded-md",children:e.jsx(L,{className:"w-6 h-6 text-accent-blue"})}),e.jsxs("div",{className:"flex-1 text-left overflow-hidden",children:[e.jsx("p",{className:"text-sm font-medium text-text-primary truncate",children:F.name}),e.jsx("p",{className:"text-xs text-text-tertiary",children:T(F.size)})]}),e.jsx("button",{onClick:W,className:"p-1.5 rounded-md hover:bg-surface-tertiary text-text-tertiary hover:text-status-error transition-colors",type:"button",children:e.jsx(R,{className:"w-4 h-4"})})]}):e.jsxs(D.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:m("p-3 rounded-full bg-surface-secondary transition-colors group-hover:bg-surface-tertiary",j&&"bg-accent-blue/10 text-accent-blue"),children:e.jsx(A,{className:m("w-6 h-6 text-text-secondary transition-colors",j&&"text-accent-blue")})}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("p",{className:"text-sm font-medium text-text-primary",children:[e.jsx("span",{className:"text-accent-blue hover:underline",children:"Click to upload"})," or drag and drop"]}),e.jsxs("p",{className:"text-xs text-text-tertiary",children:[s?`Accepted formats: ${s.replace(/,/g,", ")}`:"All files accepted",l&&` • Max size: ${T(l)}`]})]})]})})]}),(d||U)&&e.jsxs(D.div,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},className:"mt-2 flex items-center gap-2",children:[d&&e.jsx(O,{className:"w-4 h-4 text-status-error"}),e.jsx("p",{className:m("text-sm",d?"text-status-error":"text-text-secondary"),children:d||U})]})]})};c.displayName="FileUpload";c.__docgenInfo={description:"",methods:[],displayName:"FileUpload",props:{label:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(file: File | null) => void",signature:{arguments:[{type:{name:"union",raw:"File | null",elements:[{name:"File"},{name:"null"}]},name:"file"}],return:{name:"void"}}},description:""},accept:{required:!1,tsType:{name:"string"},description:""},maxSize:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ae={title:"Forms/FileUpload",component:c,tags:[],argTypes:{accept:{control:"text"},maxSize:{control:"number"},disabled:{control:"boolean"},error:{control:"text"},helperText:{control:"text"}}},g={render:a=>{const[o,s]=p.useState(null);return e.jsx("div",{className:"max-w-xl",children:e.jsx(c,{...a,onChange:l=>{s(l),console.log("File selected:",l)}})})},args:{label:"Upload Document"}},h={render:a=>e.jsx("div",{className:"max-w-xl",children:e.jsx(c,{...a,accept:"image/*",helperText:"Supports: JPG, PNG, GIF"})}),args:{label:"Profile Picture"}},b={render:a=>e.jsx("div",{className:"max-w-xl",children:e.jsx(c,{...a,maxSize:1024*1024*2,accept:".pdf,.doc,.docx"})}),args:{label:"Resume",helperText:"Max file size: 2MB"}},y={args:{label:"Upload Failed",error:"File upload failed. Please try again."}},v={args:{label:"Upload Disabled",disabled:!0}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [file, setFile] = useState<File | null>(null);
    return <div className="max-w-xl">
                <FileUpload {...args} onChange={f => {
        setFile(f);
        console.log('File selected:', f);
      }} />
            </div>;
  },
  args: {
    label: 'Upload Document'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <div className="max-w-xl">
            <FileUpload {...args} accept="image/*" helperText="Supports: JPG, PNG, GIF" />
        </div>,
  args: {
    label: 'Profile Picture'
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <div className="max-w-xl">
            <FileUpload {...args} maxSize={1024 * 1024 * 2} // 2MB
    accept=".pdf,.doc,.docx" />
        </div>,
  args: {
    label: 'Resume',
    helperText: 'Max file size: 2MB'
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload Failed',
    error: 'File upload failed. Please try again.'
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload Disabled',
    disabled: true
  }
}`,...v.parameters?.docs?.source}}};const te=["Default","ImagesOnly","WithSizeLimit","WithError","Disabled"];export{g as Default,v as Disabled,h as ImagesOnly,y as WithError,b as WithSizeLimit,te as __namedExportsOrder,ae as default};
