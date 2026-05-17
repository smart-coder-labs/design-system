import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Cg3U4lNX.js";import{Yn as r,i,m as a,t as o,yn as s}from"./lucide-react-C65k9PFF.js";import{n as c,t as l}from"./utils-ijcE-ZHT.js";import{t as u}from"./jsx-runtime-DaLCRA3n.js";import{l as d,s as f,t as p}from"./es-COp4ZgMz.js";var m,h=e((()=>{m=(e,t=2)=>{if(e===0)return`0 Bytes`;let n=1024,r=t<0?0:t,i=[`Bytes`,`KB`,`MB`,`GB`,`TB`],a=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/n**+a).toFixed(r))+` `+i[a]}})),g,_,v,y=e((()=>{g=t(n()),p(),o(),c(),h(),_=u(),v=({label:e,onChange:t,accept:n,maxSize:o,disabled:c=!1,error:u,helperText:p,className:h})=>{let[v,y]=(0,g.useState)(null),[b,x]=(0,g.useState)(!1),[S,C]=(0,g.useState)(null),w=(0,g.useRef)(null),T=u||S,E=e=>{e.preventDefault(),c||x(!0)},D=e=>{e.preventDefault(),x(!1)},O=e=>{if(C(null),o&&e.size>o)return C(`File size must be less than ${m(o)}`),!1;if(n){let t=n.split(`,`).map(e=>e.trim()),r=e.type,i=e.name;if(!t.some(e=>e.endsWith(`/*`)?r.startsWith(e.replace(`/*`,``)):e.startsWith(`.`)?i.toLowerCase().endsWith(e.toLowerCase()):r===e))return C(`File type not accepted`),!1}return!0};return(0,_.jsxs)(`div`,{className:l(`w-full`,h),children:[e&&(0,_.jsx)(`label`,{className:`block text-sm font-medium text-text-primary mb-2`,children:e}),(0,_.jsxs)(`div`,{onClick:()=>{c||w.current?.click()},onDragOver:E,onDragLeave:D,onDrop:e=>{if(e.preventDefault(),x(!1),c)return;let n=e.dataTransfer.files[0];n&&O(n)&&(y(n),t?.(n))},className:l(`relative group cursor-pointer rounded-xl border-2 border-dashed transition-all duration-200 ease-in-out overflow-hidden`,`min-h-[120px] flex flex-col items-center justify-center p-6 text-center`,b?`border-accent-blue bg-accent-blue/5 scale-[1.01]`:`border-border-secondary bg-surface-primary hover:bg-surface-secondary hover:border-border-primary`,T&&`border-status-error bg-status-error/5`,c&&`opacity-50 cursor-not-allowed hover:bg-surface-primary hover:border-border-secondary`),children:[(0,_.jsx)(`input`,{ref:w,type:`file`,className:`hidden`,accept:n,onChange:e=>{let n=e.target.files?.[0];n&&O(n)&&(y(n),t?.(n)),w.current&&(w.current.value=``)},disabled:c}),(0,_.jsx)(d,{mode:`wait`,children:v?(0,_.jsxs)(f.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:`flex items-center gap-4 w-full max-w-md bg-surface-secondary p-3 rounded-lg border border-border-primary`,onClick:e=>e.stopPropagation(),children:[(0,_.jsx)(`div`,{className:`p-2 bg-surface-tertiary rounded-md`,children:(0,_.jsx)(s,{className:`w-6 h-6 text-accent-blue`})}),(0,_.jsxs)(`div`,{className:`flex-1 text-left overflow-hidden`,children:[(0,_.jsx)(`p`,{className:`text-sm font-medium text-text-primary truncate`,children:v.name}),(0,_.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:m(v.size)})]}),(0,_.jsx)(`button`,{onClick:e=>{e.stopPropagation(),y(null),C(null),t?.(null)},className:`p-1.5 rounded-md hover:bg-surface-tertiary text-text-tertiary hover:text-status-error transition-colors`,type:`button`,children:(0,_.jsx)(i,{className:`w-4 h-4`})})]}):(0,_.jsxs)(f.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:`flex flex-col items-center gap-2`,children:[(0,_.jsx)(`div`,{className:l(`p-3 rounded-full bg-surface-secondary transition-colors group-hover:bg-surface-tertiary`,b&&`bg-accent-blue/10 text-accent-blue`),children:(0,_.jsx)(a,{className:l(`w-6 h-6 text-text-secondary transition-colors`,b&&`text-accent-blue`)})}),(0,_.jsxs)(`div`,{className:`space-y-1`,children:[(0,_.jsxs)(`p`,{className:`text-sm font-medium text-text-primary`,children:[(0,_.jsx)(`span`,{className:`text-accent-blue hover:underline`,children:`Click to upload`}),` or drag and drop`]}),(0,_.jsxs)(`p`,{className:`text-xs text-text-tertiary`,children:[n?`Accepted formats: ${n.replace(/,/g,`, `)}`:`All files accepted`,o&&` • Max size: ${m(o)}`]})]})]})})]}),(T||p)&&(0,_.jsxs)(f.div,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},className:`mt-2 flex items-center gap-2`,children:[T&&(0,_.jsx)(r,{className:`w-4 h-4 text-status-error`}),(0,_.jsx)(`p`,{className:l(`text-sm`,T?`text-status-error`:`text-text-secondary`),children:T||p})]})]})},v.displayName=`FileUpload`,v.__docgenInfo={description:``,methods:[],displayName:`FileUpload`,props:{label:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(file: File | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`File | null`,elements:[{name:`File`},{name:`null`}]},name:`file`}],return:{name:`void`}}},description:``},accept:{required:!1,tsType:{name:`string`},description:``},maxSize:{required:!1,tsType:{name:`number`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{n(),y(),b=u(),{action:x}=__STORYBOOK_MODULE_ACTIONS__,S={title:`Forms/FileUpload`,component:v,tags:[`autodocs`]},C={args:{label:`Upload document`,onChange:x(`file-changed`)}},w={args:{label:`Upload profile picture`,accept:`image/*`,onChange:x(`file-changed`)}},T={args:{label:`Upload file (max 5MB)`,accept:`.pdf,.doc,.docx`,maxSize:5*1024*1024,onChange:x(`file-changed`)}},E={args:{label:`Upload (disabled)`,disabled:!0}},D={args:{label:`Upload file`,error:`Invalid file type. Only PDF files are allowed.`}},O={args:{label:`Upload ID document`,helperText:`Accepted formats: PDF, JPG, PNG. Max 10MB.`,accept:`.pdf,.jpg,.png`}},k={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,b.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,b.jsx)(e,{})})]},A={parameters:{viewport:{defaultViewport:`mobile1`}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload document',
    onChange: action('file-changed')
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload profile picture',
    accept: 'image/*',
    onChange: action('file-changed')
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload file (max 5MB)',
    accept: '.pdf,.doc,.docx',
    maxSize: 5 * 1024 * 1024,
    onChange: action('file-changed')
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload (disabled)',
    disabled: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload file',
    error: 'Invalid file type. Only PDF files are allowed.'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload ID document',
    helperText: 'Accepted formats: PDF, JPG, PNG. Max 10MB.',
    accept: '.pdf,.jpg,.png'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    themes: {
      themeOverride: 'dark'
    }
  },
  decorators: [Story => <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>]
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`ImageOnly`,`WithSizeLimit`,`Disabled`,`WithError`,`WithHelperText`,`DarkMode`,`MobileView`]}))();export{k as DarkMode,C as Default,E as Disabled,w as ImageOnly,A as MobileView,D as WithError,O as WithHelperText,T as WithSizeLimit,j as __namedExportsOrder,S as default};