import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BUF2whoS.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{Ot as o,Y as s,bt as c,i as l,t as u,yn as d}from"./lucide-react-D5svGO2N.js";import{n as f,t as p}from"./Button-lpX-ETzx.js";import{n as m,t as h}from"./Textarea-gmjJIBgE.js";var g,_,v,y=e((()=>{g=t(n()),r(),_=a(),m(),f(),u(),v=g.forwardRef(({value:e=``,onChange:t,onSend:n,placeholder:r=`Type a message...`,attachments:a=[],onAttachmentsChange:u,maxAttachments:f=5,showAttachmentButton:m=!0,showVoiceButton:v=!1,disabled:y=!1,className:b,...x},S)=>{let[C,w]=(0,g.useState)(e),[T,E]=(0,g.useState)(a),D=(0,g.useRef)(null),O=(0,g.useRef)(null);(0,g.useEffect)(()=>{a&&E(a)},[a]);let k=e=>{let n=e.target.value;w(n),t?.(n)},A=()=>{(C.trim()||T.length>0)&&!y&&(n?.(C,T),w(``),E([]),u?.([]),O.current&&(O.current.style.height=`auto`))},j=e=>{e.key===`Enter`&&!e.shiftKey&&(e.preventDefault(),A())},M=e=>{let t=Array.from(e.target.files||[]);if(t.length===0)return;let n=f-T.length;if(n<=0){alert(`Maximum ${f} attachments allowed`),D.current&&(D.current.value=``);return}let r=t.slice(0,n),i=[];r.forEach(e=>{let t=e.type.startsWith(`image/`)?`image`:e.type.startsWith(`video/`)?`video`:e.type.startsWith(`audio/`)?`audio`:`file`,n={id:`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,file:e,type:t};if(t===`image`){let t=new FileReader;t.onload=e=>{n.preview=e.target?.result,E(e=>{let t=[...e,n];return u?.(t),t})},t.onerror=()=>{console.error(`Error reading image file`)},t.readAsDataURL(e)}else i.push(n)}),i.length>0&&E(e=>{let t=[...e,...i];return u?.(t),t}),D.current&&(D.current.value=``)},N=e=>{let t=T.filter(t=>t.id!==e);E(t),u?.(t)},P=()=>{D.current?.click()};return(0,_.jsxs)(`div`,{ref:S,className:i(`w-full`,b),...x,children:[T.length>0&&(0,_.jsx)(`div`,{className:`flex gap-2 mb-2 overflow-x-auto pb-2`,children:T.map(e=>(0,_.jsxs)(`div`,{className:`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-surface-secondary border border-border-primary`,children:[e.preview?(0,_.jsx)(`img`,{src:e.preview,alt:e.file.name,className:`w-full h-full object-cover`}):(0,_.jsx)(`div`,{className:`w-full h-full flex items-center justify-center`,children:(0,_.jsx)(d,{className:`w-6 h-6 text-text-tertiary`})}),(0,_.jsx)(`button`,{onClick:()=>N(e.id),className:`absolute top-1 right-1 w-5 h-5 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors`,children:(0,_.jsx)(l,{className:`w-3 h-3`})})]},e.id))}),(0,_.jsxs)(`div`,{className:`flex items-center gap-2 p-3 bg-surface-secondary rounded-2xl border border-border-primary`,children:[m&&T.length<f&&(0,_.jsx)(p,{variant:`ghost`,size:`sm`,onClick:P,disabled:y,className:`flex-shrink-0`,type:`button`,children:(0,_.jsx)(c,{className:`w-4 h-4`})}),(0,_.jsx)(h,{ref:O,value:C,onChange:k,onKeyDown:j,placeholder:r,disabled:y,rows:1,className:`flex-1 min-h-[40px] max-h-[120px] resize-none border-0 bg-transparent focus-visible:ring-0 py-2`,style:{height:`auto`},onInput:e=>{let t=e.target;t.style.height=`auto`,t.style.height=`${t.scrollHeight}px`}}),v&&(0,_.jsx)(p,{variant:`ghost`,size:`sm`,disabled:y,className:`flex-shrink-0`,type:`button`,children:(0,_.jsx)(o,{className:`w-4 h-4`})}),(0,_.jsx)(p,{variant:`primary`,size:`sm`,onClick:A,disabled:y||!C.trim()&&T.length===0,className:`flex-shrink-0`,type:`button`,children:(0,_.jsx)(s,{className:`w-4 h-4`})}),(0,_.jsx)(`input`,{ref:D,type:`file`,multiple:!0,accept:`image/*,video/*,audio/*,.pdf,.doc,.docx,.txt,.csv,.xlsx,.pptx`,onChange:M,className:`hidden`})]})]})}),v.displayName=`ChatInput`,v.__docgenInfo={description:``,methods:[],displayName:`ChatInput`,props:{value:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onSend:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(message: string, attachments?: ChatAttachment[]) => void`,signature:{arguments:[{type:{name:`string`},name:`message`},{type:{name:`Array`,elements:[{name:`ChatAttachment`}],raw:`ChatAttachment[]`},name:`attachments`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Type a message...'`,computed:!1}},attachments:{required:!1,tsType:{name:`Array`,elements:[{name:`ChatAttachment`}],raw:`ChatAttachment[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onAttachmentsChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(attachments: ChatAttachment[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`ChatAttachment`}],raw:`ChatAttachment[]`},name:`attachments`}],return:{name:`void`}}},description:``},maxAttachments:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}},showAttachmentButton:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},showVoiceButton:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}},composes:[`Omit`]}})),b,x,S,C,w,T,E,D,O,k,A;e((()=>{y(),b=a(),x={title:`Forms/ChatInput`,component:v,tags:[`autodocs`]},S={args:{placeholder:`Type a message...`}},C={args:{value:`I'd like to check my account balance`,placeholder:`Type a message...`}},w={args:{placeholder:`Type a message...`,attachments:[{id:`1`,file:new File([``],`photo.jpg`,{type:`image/jpeg`}),type:`image`,preview:`https://picsum.photos/seed/attach1/60/60`},{id:`2`,file:new File([``],`doc.pdf`,{type:`application/pdf`}),type:`file`}]}},T={args:{placeholder:`Chat is disabled...`,disabled:!0}},E={args:{placeholder:`Type a message...`,showVoiceButton:!0}},D={args:{placeholder:`Type a message...`,showAttachmentButton:!1}},O={args:{placeholder:`Ask about your finances...`}},k={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,b.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,b.jsx)(e,{})})]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type a message...'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'I\\'d like to check my account balance',
    placeholder: 'Type a message...'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Chat is disabled...',
    disabled: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type a message...',
    showVoiceButton: true
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type a message...',
    showAttachmentButton: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Ask about your finances...'
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
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithValue`,`WithAttachments`,`Disabled`,`WithVoiceButton`,`WithoutAttachmentButton`,`CustomPlaceholder`,`DarkMode`]}))();export{O as CustomPlaceholder,k as DarkMode,S as Default,T as Disabled,w as WithAttachments,C as WithValue,E as WithVoiceButton,D as WithoutAttachmentButton,A as __namedExportsOrder,x as default};