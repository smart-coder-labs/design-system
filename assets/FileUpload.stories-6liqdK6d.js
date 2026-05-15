import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DL3IwwZJ.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{l as o,s,t as c}from"./es-CnNtA5mJ.js";import{Zn as l,i as u,m as d,t as f,yn as p}from"./lucide-react-C3ayLXpj.js";var m,h,g,_,v=e((()=>{m=t(n()),c(),f(),r(),h=a(),g=(e,t=2)=>{if(e===0)return`0 Bytes`;let n=1024,r=t<0?0:t,i=[`Bytes`,`KB`,`MB`,`GB`,`TB`],a=Math.floor(Math.log(e)/Math.log(n));return parseFloat((e/n**+a).toFixed(r))+` `+i[a]},_=({label:e,onChange:t,accept:n,maxSize:r,disabled:a=!1,error:c,helperText:f,className:_})=>{let[v,y]=(0,m.useState)(null),[b,x]=(0,m.useState)(!1),[S,C]=(0,m.useState)(null),w=(0,m.useRef)(null),T=c||S,E=e=>{e.preventDefault(),a||x(!0)},D=e=>{e.preventDefault(),x(!1)},O=e=>{if(C(null),r&&e.size>r)return C(`File size must be less than ${g(r)}`),!1;if(n){let t=n.split(`,`).map(e=>e.trim()),r=e.type,i=e.name;if(!t.some(e=>e.endsWith(`/*`)?r.startsWith(e.replace(`/*`,``)):e.startsWith(`.`)?i.toLowerCase().endsWith(e.toLowerCase()):r===e))return C(`File type not accepted`),!1}return!0};return(0,h.jsxs)(`div`,{className:i(`w-full`,_),children:[e&&(0,h.jsx)(`label`,{className:`block text-sm font-medium text-text-primary mb-2`,children:e}),(0,h.jsxs)(`div`,{onClick:()=>{a||w.current?.click()},onDragOver:E,onDragLeave:D,onDrop:e=>{if(e.preventDefault(),x(!1),a)return;let n=e.dataTransfer.files[0];n&&O(n)&&(y(n),t?.(n))},className:i(`relative group cursor-pointer rounded-xl border-2 border-dashed transition-all duration-200 ease-in-out overflow-hidden`,`min-h-[120px] flex flex-col items-center justify-center p-6 text-center`,b?`border-accent-blue bg-accent-blue/5 scale-[1.01]`:`border-border-secondary bg-surface-primary hover:bg-surface-secondary hover:border-border-primary`,T&&`border-status-error bg-status-error/5`,a&&`opacity-50 cursor-not-allowed hover:bg-surface-primary hover:border-border-secondary`),children:[(0,h.jsx)(`input`,{ref:w,type:`file`,className:`hidden`,accept:n,onChange:e=>{let n=e.target.files?.[0];n&&O(n)&&(y(n),t?.(n)),w.current&&(w.current.value=``)},disabled:a}),(0,h.jsx)(o,{mode:`wait`,children:v?(0,h.jsxs)(s.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},className:`flex items-center gap-4 w-full max-w-md bg-surface-secondary p-3 rounded-lg border border-border-primary`,onClick:e=>e.stopPropagation(),children:[(0,h.jsx)(`div`,{className:`p-2 bg-surface-tertiary rounded-md`,children:(0,h.jsx)(p,{className:`w-6 h-6 text-accent-blue`})}),(0,h.jsxs)(`div`,{className:`flex-1 text-left overflow-hidden`,children:[(0,h.jsx)(`p`,{className:`text-sm font-medium text-text-primary truncate`,children:v.name}),(0,h.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:g(v.size)})]}),(0,h.jsx)(`button`,{onClick:e=>{e.stopPropagation(),y(null),C(null),t?.(null)},className:`p-1.5 rounded-md hover:bg-surface-tertiary text-text-tertiary hover:text-status-error transition-colors`,type:`button`,children:(0,h.jsx)(u,{className:`w-4 h-4`})})]}):(0,h.jsxs)(s.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:`flex flex-col items-center gap-2`,children:[(0,h.jsx)(`div`,{className:i(`p-3 rounded-full bg-surface-secondary transition-colors group-hover:bg-surface-tertiary`,b&&`bg-accent-blue/10 text-accent-blue`),children:(0,h.jsx)(d,{className:i(`w-6 h-6 text-text-secondary transition-colors`,b&&`text-accent-blue`)})}),(0,h.jsxs)(`div`,{className:`space-y-1`,children:[(0,h.jsxs)(`p`,{className:`text-sm font-medium text-text-primary`,children:[(0,h.jsx)(`span`,{className:`text-accent-blue hover:underline`,children:`Click to upload`}),` or drag and drop`]}),(0,h.jsxs)(`p`,{className:`text-xs text-text-tertiary`,children:[n?`Accepted formats: ${n.replace(/,/g,`, `)}`:`All files accepted`,r&&` • Max size: ${g(r)}`]})]})]})})]}),(T||f)&&(0,h.jsxs)(s.div,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},className:`mt-2 flex items-center gap-2`,children:[T&&(0,h.jsx)(l,{className:`w-4 h-4 text-status-error`}),(0,h.jsx)(`p`,{className:i(`text-sm`,T?`text-status-error`:`text-text-secondary`),children:T||f})]})]})},_.displayName=`FileUpload`,_.__docgenInfo={description:``,methods:[],displayName:`FileUpload`,props:{label:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(file: File | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`File | null`,elements:[{name:`File`},{name:`null`}]},name:`file`}],return:{name:`void`}}},description:``},accept:{required:!1,tsType:{name:`string`},description:``},maxSize:{required:!1,tsType:{name:`number`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{n(),v(),y=a(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,x={title:`Forms/FileUpload`,component:_,tags:[`autodocs`]},S={args:{label:`Upload document`,onChange:b(`file-changed`)}},C={args:{label:`Upload profile picture`,accept:`image/*`,onChange:b(`file-changed`)}},w={args:{label:`Upload file (max 5MB)`,accept:`.pdf,.doc,.docx`,maxSize:5*1024*1024,onChange:b(`file-changed`)}},T={args:{label:`Upload (disabled)`,disabled:!0}},E={args:{label:`Upload file`,error:`Invalid file type. Only PDF files are allowed.`}},D={args:{label:`Upload ID document`,helperText:`Accepted formats: PDF, JPG, PNG. Max 10MB.`,accept:`.pdf,.jpg,.png`}},O={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,y.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,y.jsx)(e,{})})]},k={parameters:{viewport:{defaultViewport:`mobile1`}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload document',
    onChange: action('file-changed')
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload profile picture',
    accept: 'image/*',
    onChange: action('file-changed')
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload file (max 5MB)',
    accept: '.pdf,.doc,.docx',
    maxSize: 5 * 1024 * 1024,
    onChange: action('file-changed')
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload (disabled)',
    disabled: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload file',
    error: 'Invalid file type. Only PDF files are allowed.'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Upload ID document',
    helperText: 'Accepted formats: PDF, JPG, PNG. Max 10MB.',
    accept: '.pdf,.jpg,.png'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`ImageOnly`,`WithSizeLimit`,`Disabled`,`WithError`,`WithHelperText`,`DarkMode`,`MobileView`]}))();export{O as DarkMode,S as Default,T as Disabled,C as ImageOnly,k as MobileView,E as WithError,D as WithHelperText,w as WithSizeLimit,A as __namedExportsOrder,x as default};