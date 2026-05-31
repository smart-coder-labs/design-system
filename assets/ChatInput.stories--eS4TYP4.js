import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C-nBdNCE.js";import{Y as r,bt as i,i as a,t as o,yn as s}from"./lucide-react-DXerBtR-.js";import{n as c,t as l}from"./utils-CcEteFRA.js";import{t as u}from"./jsx-runtime-WZfjI2gv.js";import{n as d,t as f}from"./Button-kKG7d3zw.js";import{n as p,t as m}from"./Textarea-DAStbC3h.js";var h,g,_,v=e((()=>{h=t(n()),c(),m(),f(),o(),g=u(),_=h.forwardRef(({value:e=``,onChange:t,onSend:n,placeholder:o=`Type a message...`,attachments:c=[],onAttachmentsChange:u,maxAttachments:f=5,showAttachmentButton:m=!0,showVoiceButton:_=!1,disabled:v=!1,className:y,...b},x)=>{let[S,C]=(0,h.useState)(e),[w,T]=(0,h.useState)(c),E=(0,h.useRef)(null),D=(0,h.useRef)(null);(0,h.useEffect)(()=>{c&&T(c)},[c]);let O=e=>{let n=e.target.value;C(n),t?.(n)},k=()=>{(S.trim()||w.length>0)&&!v&&(n?.(S,w),C(``),T([]),u?.([]),D.current&&(D.current.style.height=`auto`))},A=e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),k())},j=e=>{let t=Array.from(e.target.files||[]);if(t.length===0)return;let n=f-w.length;if(n<=0){alert(`Maximum ${f} attachments allowed`),E.current&&(E.current.value=``);return}let r=t.slice(0,n),i=[];r.forEach(e=>{let t=e.type.startsWith(`image/`)?`image`:e.type.startsWith(`video/`)?`video`:e.type.startsWith(`audio/`)?`audio`:`file`,n={id:`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,file:e,type:t};if(t===`image`){let t=new FileReader;t.onload=e=>{n.preview=e.target?.result,T(e=>{let t=[...e,n];return u?.(t),t})},t.onerror=()=>{console.error(`Error reading image file`)},t.readAsDataURL(e)}else i.push(n)}),i.length>0&&T(e=>{let t=[...e,...i];return u?.(t),t}),E.current&&(E.current.value=``)},M=e=>{let t=w.filter(t=>t.id!==e);T(t),u?.(t)},N=()=>{E.current?.click()};return(0,g.jsxs)(`div`,{ref:x,className:l(`w-full`,y),...b,children:[w.length>0&&(0,g.jsx)(`div`,{className:`flex gap-2 mb-2 overflow-x-auto pb-2`,children:w.map(e=>(0,g.jsxs)(`div`,{className:`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-surface-secondary border border-border-primary`,children:[e.preview?(0,g.jsx)(`img`,{src:e.preview,alt:e.file.name,className:`w-full h-full object-cover`}):(0,g.jsx)(`div`,{className:`w-full h-full flex items-center justify-center`,children:(0,g.jsx)(s,{className:`w-6 h-6 text-text-tertiary`})}),(0,g.jsx)(`button`,{onClick:()=>M(e.id),className:`absolute top-1 right-1 w-5 h-5 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors`,children:(0,g.jsx)(a,{className:`w-3 h-3`})})]},e.id))}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2 p-3 bg-surface-secondary rounded-2xl border border-border-primary`,children:[m&&w.length<f&&(0,g.jsx)(d,{variant:`ghost`,size:`sm`,onClick:N,disabled:v,className:`flex-shrink-0`,type:`button`,children:(0,g.jsx)(i,{className:`w-4 h-4`})}),(0,g.jsx)(p,{ref:D,value:S,onChange:O,onKeyDown:A,placeholder:o,disabled:v,rows:1,className:`flex-1 min-h-[40px] max-h-[120px] resize-none border-0 bg-transparent focus-visible:ring-0 py-2`,style:{height:`auto`},onInput:e=>{let t=e.target;t.style.height=`auto`,t.style.height=`${t.scrollHeight}px`}}),_&&(0,g.jsx)(d,{variant:`ghost`,size:`sm`,disabled:v,className:`flex-shrink-0`,type:`button`}),(0,g.jsx)(d,{variant:`primary`,size:`sm`,onClick:k,disabled:v||!S.trim()&&w.length===0,className:`flex-shrink-0`,type:`button`,children:(0,g.jsx)(r,{className:`w-4 h-4`})}),(0,g.jsx)(`input`,{ref:E,type:`file`,multiple:!0,accept:`image/*,video/*,audio/*,.pdf,.doc,.docx,.txt,.csv,.xlsx,.pptx`,onChange:j,className:`hidden`})]})]})}),_.displayName=`ChatInput`,_.__docgenInfo={description:``,methods:[],displayName:`ChatInput`,props:{value:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onSend:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(message: string, attachments?: ChatAttachment[]) => void`,signature:{arguments:[{type:{name:`string`},name:`message`},{type:{name:`Array`,elements:[{name:`ChatAttachment`}],raw:`ChatAttachment[]`},name:`attachments`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Type a message...'`,computed:!1}},attachments:{required:!1,tsType:{name:`Array`,elements:[{name:`ChatAttachment`}],raw:`ChatAttachment[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onAttachmentsChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(attachments: ChatAttachment[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`ChatAttachment`}],raw:`ChatAttachment[]`},name:`attachments`}],return:{name:`void`}}},description:``},maxAttachments:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}},showAttachmentButton:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},showVoiceButton:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}},composes:[`Omit`]}})),y,b,x,S,C,w,T,E,D,O,k;e((()=>{v(),y=u(),b={title:`Forms/ChatInput`,component:_,tags:[`autodocs`]},x={args:{placeholder:`Type a message...`}},S={args:{value:`I'd like to check my account balance`,placeholder:`Type a message...`}},C={args:{placeholder:`Type a message...`,attachments:[{id:`1`,file:new File([``],`photo.jpg`,{type:`image/jpeg`}),type:`image`,preview:`https://picsum.photos/seed/attach1/60/60`},{id:`2`,file:new File([``],`doc.pdf`,{type:`application/pdf`}),type:`file`}]}},w={args:{placeholder:`Chat is disabled...`,disabled:!0}},T={args:{placeholder:`Type a message...`,showVoiceButton:!0}},E={args:{placeholder:`Type a message...`,showAttachmentButton:!1}},D={args:{placeholder:`Ask about your finances...`}},O={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,y.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,y.jsx)(e,{})})]},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type a message...'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'I\\'d like to check my account balance',
    placeholder: 'Type a message...'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type a message...',
    attachments: [{
      id: '1',
      file: new File([''], 'photo.jpg', {
        type: 'image/jpeg'
      }),
      type: 'image' as const,
      preview: 'https://picsum.photos/seed/attach1/60/60'
    }, {
      id: '2',
      file: new File([''], 'doc.pdf', {
        type: 'application/pdf'
      }),
      type: 'file' as const
    }]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Chat is disabled...',
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type a message...',
    showVoiceButton: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type a message...',
    showAttachmentButton: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Ask about your finances...'
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`WithValue`,`WithAttachments`,`Disabled`,`WithVoiceButton`,`WithoutAttachmentButton`,`CustomPlaceholder`,`DarkMode`]}))();export{D as CustomPlaceholder,O as DarkMode,x as Default,w as Disabled,C as WithAttachments,S as WithValue,T as WithVoiceButton,E as WithoutAttachmentButton,k as __namedExportsOrder,b as default};