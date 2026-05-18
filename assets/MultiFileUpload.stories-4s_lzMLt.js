import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CmoObUFa.js";import{Yn as r,i,m as a,t as o,x as s,yn as c}from"./lucide-react-Dg7gJGVx.js";import{n as l,t as u}from"./utils-ijcE-ZHT.js";import{t as d}from"./jsx-runtime-DaLCRA3n.js";import{l as f,s as p,t as m}from"./es-Bjq_ogfB.js";var h,g,_,v,y=e((()=>{h=t(n()),m(),o(),l(),g=d(),_=(e,t=2)=>{if(e===0)return`0 Bytes`;let n=1024,r=t<0?0:t,i=[`Bytes`,`KB`,`MB`,`GB`,`TB`],a=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/n**+a).toFixed(r))+` `+i[a]},v=({label:e,value:t=[],onChange:n,accept:o,maxSize:l,maxFiles:d,disabled:m=!1,error:v,helperText:y,className:b})=>{let[x,S]=(0,h.useState)(t),[C,w]=(0,h.useState)(!1),[T,E]=(0,h.useState)(null),D=(0,h.useRef)(null),O=v||T;h.useEffect(()=>{t!==x&&S(t)},[t]);let k=e=>{e.preventDefault(),m||w(!0)},A=e=>{e.preventDefault(),w(!1)},j=e=>{if(l&&e.size>l)return`File "${e.name}" exceeds size limit of ${_(l)}`;if(o){let t=o.split(`,`).map(e=>e.trim()),n=e.type,r=e.name;if(!t.some(e=>e.endsWith(`/*`)?n.startsWith(e.replace(`/*`,``)):e.startsWith(`.`)?r.toLowerCase().endsWith(e.toLowerCase()):n===e))return`File "${e.name}" format not accepted`}return null},M=e=>{if(E(null),d&&x.length+e.length>d){E(`Maximum ${d} files allowed`);return}let t=[],r=null;if(e.forEach(e=>{let n=j(e);n?r=n:x.some(t=>t.name===e.name&&t.size===e.size)||t.push(e)}),r&&E(r),t.length>0){let e=[...x,...t];S(e),n?.(e)}},N=e=>{if(e.preventDefault(),w(!1),m)return;let t=Array.from(e.dataTransfer.files);t.length>0&&M(t)},P=e=>{let t=e.target.files?Array.from(e.target.files):[];t.length>0&&M(t),D.current&&(D.current.value=``)},F=e=>{let t=x.filter((t,n)=>n!==e);S(t),n?.(t),E(null)};return(0,g.jsxs)(`div`,{className:u(`w-full`,b),children:[(0,g.jsxs)(`div`,{className:`flex justify-between items-end mb-2`,children:[e&&(0,g.jsx)(`label`,{className:`block text-sm font-medium text-text-primary`,children:e}),x.length>0&&!m&&(0,g.jsxs)(`button`,{onClick:()=>{S([]),n?.([]),E(null)},className:`text-xs text-text-tertiary hover:text-status-error transition-colors flex items-center gap-1`,type:`button`,children:[(0,g.jsx)(s,{className:`w-3 h-3`}),`Clear all`]})]}),(0,g.jsxs)(`div`,{onClick:()=>{m||D.current?.click()},onDragOver:k,onDragLeave:A,onDrop:N,className:u(`relative group cursor-pointer rounded-xl border-2 border-dashed transition-all duration-200 ease-in-out overflow-hidden`,`min-h-[120px] flex flex-col items-center justify-center p-6 text-center`,C?`border-accent-blue bg-accent-blue/5 scale-[1.01]`:`border-border-secondary bg-surface-primary hover:bg-surface-secondary hover:border-border-primary`,O&&`border-status-error bg-status-error/5`,m&&`opacity-50 cursor-not-allowed hover:bg-surface-primary hover:border-border-secondary`),children:[(0,g.jsx)(`input`,{ref:D,type:`file`,className:`hidden`,multiple:!0,accept:o,onChange:P,disabled:m}),(0,g.jsxs)(`div`,{className:`flex flex-col items-center gap-2`,children:[(0,g.jsx)(`div`,{className:u(`p-3 rounded-full bg-surface-secondary transition-colors group-hover:bg-surface-tertiary`,C&&`bg-accent-blue/10 text-accent-blue`),children:(0,g.jsx)(a,{className:u(`w-6 h-6 text-text-secondary transition-colors`,C&&`text-accent-blue`)})}),(0,g.jsxs)(`div`,{className:`space-y-1`,children:[(0,g.jsxs)(`p`,{className:`text-sm font-medium text-text-primary`,children:[(0,g.jsx)(`span`,{className:`text-accent-blue hover:underline`,children:`Click to upload`}),` or drag and drop`]}),(0,g.jsxs)(`p`,{className:`text-xs text-text-tertiary`,children:[o?`Accepted formats: ${o.replace(/,/g,`, `)}`:`All files accepted`,l&&` • Max size: ${_(l)}`,d&&` • Max files: ${d}`]})]})]})]}),(O||y)&&(0,g.jsxs)(p.div,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},className:`mt-2 flex items-center gap-2`,children:[O&&(0,g.jsx)(r,{className:`w-4 h-4 text-status-error`}),(0,g.jsx)(`p`,{className:u(`text-sm`,O?`text-status-error`:`text-text-secondary`),children:O||y})]}),(0,g.jsx)(f,{children:x.length>0&&(0,g.jsx)(p.div,{initial:{opacity:0,height:0},animate:{opacity:1,height:`auto`},exit:{opacity:0,height:0},className:`mt-4 space-y-2`,children:x.map((e,t)=>(0,g.jsxs)(p.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},className:`flex items-center gap-3 p-3 rounded-lg bg-surface-secondary border border-border-primary group/item`,children:[(0,g.jsx)(`div`,{className:`p-2 bg-surface-tertiary rounded-md`,children:(0,g.jsx)(c,{className:`w-5 h-5 text-accent-blue`})}),(0,g.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,g.jsx)(`p`,{className:`text-sm font-medium text-text-primary truncate`,children:e.name}),(0,g.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:_(e.size)})]}),!m&&(0,g.jsx)(`button`,{onClick:()=>F(t),className:`p-1.5 rounded-md hover:bg-surface-tertiary text-text-tertiary hover:text-status-error transition-colors opacity-0 group-hover/item:opacity-100 focus:opacity-100`,type:`button`,"aria-label":`Remove file`,children:(0,g.jsx)(i,{className:`w-4 h-4`})})]},`${e.name}-${t}`))})})]})},v.displayName=`MultiFileUpload`,v.__docgenInfo={description:``,methods:[],displayName:`MultiFileUpload`,props:{label:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(files: File[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},name:`files`}],return:{name:`void`}}},description:``},accept:{required:!1,tsType:{name:`string`},description:``},maxSize:{required:!1,tsType:{name:`number`},description:``},maxFiles:{required:!1,tsType:{name:`number`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{n(),y(),b=d(),{action:x}=__STORYBOOK_MODULE_ACTIONS__,S={title:`Forms/MultiFileUpload`,component:v,tags:[`autodocs`],parameters:{layout:`centered`}},C={args:{onUpload:x(`upload`),onRemove:x(`remove`)}},w={args:{files:[{id:`1`,name:`passport.pdf`,size:245e4,status:`uploaded`},{id:`2`,name:`selfie.jpg`,size:18e5,status:`uploaded`}],onUpload:x(`upload`),onRemove:x(`remove`)}},T={args:{files:[{id:`1`,name:`statement.pdf`,size:31e5,status:`uploading`,progress:65},{id:`2`,name:`id_card.png`,size:12e5,status:`uploaded`}],onUpload:x(`upload`),onRemove:x(`remove`)}},E={args:{files:[{id:`1`,name:`invalid_file.exe`,size:5e5,status:`error`,error:`File type not supported`},{id:`2`,name:`receipt.pdf`,size:42e4,status:`uploaded`}],onUpload:x(`upload`),onRemove:x(`remove`)}},D={render:()=>(0,b.jsxs)(`div`,{className:`w-full max-w-md space-y-4`,children:[(0,b.jsxs)(`div`,{children:[(0,b.jsx)(`h3`,{className:`text-sm font-bold text-text-primary`,children:`Identity Verification`}),(0,b.jsx)(`p`,{className:`text-xs text-text-tertiary mt-1`,children:`Upload your documents for verification`})]}),(0,b.jsx)(v,{files:[{id:`1`,name:`passport_us.pdf`,size:28e5,status:`uploaded`},{id:`2`,name:`selfie_photo.jpg`,size:15e5,status:`uploading`,progress:72}],accept:`image/*,application/pdf`,maxFiles:3,maxSize:5242880,onUpload:x(`upload`),onRemove:x(`remove`)})]})},O={args:{files:[{id:`1`,name:`receipt_amazon_apr15.png`,size:89e4,status:`uploaded`},{id:`2`,name:`receipt_starbucks.png`,size:45e4,status:`uploaded`},{id:`3`,name:`receipt_uber_apr14.png`,size:32e4,status:`uploaded`}],maxFiles:10,onUpload:x(`upload`),onRemove:x(`remove`)}},k={args:{files:[{id:`1`,name:`large_video.mp4`,size:15e7,status:`error`,error:`File exceeds 10MB limit`}],maxSize:10485760,onUpload:x(`upload`),onRemove:x(`remove`)}},A={args:{onUpload:x(`upload`),onRemove:x(`remove`),accept:`.pdf,.jpg,.png`,maxSize:10485760}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    onUpload: action('upload'),
    onRemove: action('remove')
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: '1',
      name: 'passport.pdf',
      size: 2450000,
      status: 'uploaded'
    }, {
      id: '2',
      name: 'selfie.jpg',
      size: 1800000,
      status: 'uploaded'
    }],
    onUpload: action('upload'),
    onRemove: action('remove')
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: '1',
      name: 'statement.pdf',
      size: 3100000,
      status: 'uploading',
      progress: 65
    }, {
      id: '2',
      name: 'id_card.png',
      size: 1200000,
      status: 'uploaded'
    }],
    onUpload: action('upload'),
    onRemove: action('remove')
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: '1',
      name: 'invalid_file.exe',
      size: 500000,
      status: 'error',
      error: 'File type not supported'
    }, {
      id: '2',
      name: 'receipt.pdf',
      size: 420000,
      status: 'uploaded'
    }],
    onUpload: action('upload'),
    onRemove: action('remove')
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md space-y-4">
      <div>
        <h3 className="text-sm font-bold text-text-primary">Identity Verification</h3>
        <p className="text-xs text-text-tertiary mt-1">Upload your documents for verification</p>
      </div>
      <MultiFileUpload files={[{
      id: '1',
      name: 'passport_us.pdf',
      size: 2800000,
      status: 'uploaded'
    }, {
      id: '2',
      name: 'selfie_photo.jpg',
      size: 1500000,
      status: 'uploading',
      progress: 72
    }]} accept="image/*,application/pdf" maxFiles={3} maxSize={5242880} onUpload={action('upload')} onRemove={action('remove')} />
    </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: '1',
      name: 'receipt_amazon_apr15.png',
      size: 890000,
      status: 'uploaded'
    }, {
      id: '2',
      name: 'receipt_starbucks.png',
      size: 450000,
      status: 'uploaded'
    }, {
      id: '3',
      name: 'receipt_uber_apr14.png',
      size: 320000,
      status: 'uploaded'
    }],
    maxFiles: 10,
    onUpload: action('upload'),
    onRemove: action('remove')
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    files: [{
      id: '1',
      name: 'large_video.mp4',
      size: 150000000,
      status: 'error',
      error: 'File exceeds 10MB limit'
    }],
    maxSize: 10485760,
    onUpload: action('upload'),
    onRemove: action('remove')
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    onUpload: action('upload'),
    onRemove: action('remove'),
    accept: '.pdf,.jpg,.png',
    maxSize: 10485760
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`WithExistingFiles`,`WithUploading`,`WithError`,`KYCUpload`,`ReceiptUpload`,`LargeFileError`,`EmptyUploadZone`]}))();export{C as Default,A as EmptyUploadZone,D as KYCUpload,k as LargeFileError,O as ReceiptUpload,E as WithError,w as WithExistingFiles,T as WithUploading,j as __namedExportsOrder,S as default};