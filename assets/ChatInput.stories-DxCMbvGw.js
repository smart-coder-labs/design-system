import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as H,r as c}from"./iframe-Cb93e_Z8.js";import{c as U}from"./utils-CDN07tui.js";import{T as X}from"./Textarea-BfoxHWHr.js";import{B as I}from"./Button-DGE0rp2O.js";import{F as G}from"./file-BWLipVcG.js";import{X as J}from"./x-cLebVC1h.js";import{c as Q}from"./createLucideIcon-DjNmKTqa.js";import{M as Y}from"./mic-Bceg9f7E.js";import{S as Z}from"./send-C8lU8lgH.js";import{C as ee}from"./ChatBubble-DKfsNUm4.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-b22VB84a.js";import"./Avatar-C7qmm8gX.js";import"./index-B_jtOnfb.js";const te=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",key:"1miecu"}]],ae=Q("paperclip",te),g=H.forwardRef(({value:a="",onChange:i,onSend:u,placeholder:l="Type a message...",attachments:r=[],onAttachmentsChange:n,maxAttachments:A=5,showAttachmentButton:D=!0,showVoiceButton:R=!1,disabled:p=!1,className:z,...E},M)=>{const[x,B]=c.useState(a),[o,h]=c.useState(r),d=c.useRef(null),C=c.useRef(null);c.useEffect(()=>{r&&h(r)},[r]);const W=t=>{const s=t.target.value;B(s),i?.(s)},k=()=>{(x.trim()||o.length>0)&&!p&&(u?.(x,o),B(""),h([]),n?.([]),C.current&&(C.current.style.height="auto"))},_=t=>{t.key==="Enter"&&!t.shiftKey&&(t.preventDefault(),k())},F=t=>{const s=Array.from(t.target.files||[]);if(s.length===0)return;const y=A-o.length;if(y<=0){alert(`Maximum ${A} attachments allowed`),d.current&&(d.current.value="");return}const K=s.slice(0,y),S=[];K.forEach(m=>{const f=m.type.startsWith("image/")?"image":m.type.startsWith("video/")?"video":m.type.startsWith("audio/")?"audio":"file",V={id:`${Date.now()}-${Math.random().toString(36).substr(2,9)}`,file:m,type:f};if(f==="image"){const T=new FileReader;T.onload=L=>{V.preview=L.target?.result,h(P=>{const q=[...P,V];return n?.(q),q})},T.onerror=()=>{console.error("Error reading image file")},T.readAsDataURL(m)}else S.push(V)}),S.length>0&&h(m=>{const f=[...m,...S];return n?.(f),f}),d.current&&(d.current.value="")},O=t=>{const s=o.filter(y=>y.id!==t);h(s),n?.(s)},$=()=>{d.current?.click()};return e.jsxs("div",{ref:M,className:U("w-full",z),...E,children:[o.length>0&&e.jsx("div",{className:"flex gap-2 mb-2 overflow-x-auto pb-2",children:o.map(t=>e.jsxs("div",{className:"relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-surface-secondary border border-border-primary",children:[t.preview?e.jsx("img",{src:t.preview,alt:t.file.name,className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full flex items-center justify-center",children:e.jsx(G,{className:"w-6 h-6 text-text-tertiary"})}),e.jsx("button",{onClick:()=>O(t.id),className:"absolute top-1 right-1 w-5 h-5 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/70 transition-colors",children:e.jsx(J,{className:"w-3 h-3"})})]},t.id))}),e.jsxs("div",{className:"flex items-center gap-2 p-3 bg-surface-secondary rounded-2xl border border-border-primary",children:[D&&o.length<A&&e.jsx(I,{variant:"ghost",size:"sm",onClick:$,disabled:p,className:"flex-shrink-0",type:"button",children:e.jsx(ae,{className:"w-4 h-4"})}),e.jsx(X,{ref:C,value:x,onChange:W,onKeyDown:_,placeholder:l,disabled:p,rows:1,className:"flex-1 min-h-[40px] max-h-[120px] resize-none border-0 bg-transparent focus-visible:ring-0 py-2",style:{height:"auto"},onInput:t=>{const s=t.target;s.style.height="auto",s.style.height=`${s.scrollHeight}px`}}),R&&e.jsx(I,{variant:"ghost",size:"sm",disabled:p,className:"flex-shrink-0",type:"button",children:e.jsx(Y,{className:"w-4 h-4"})}),e.jsx(I,{variant:"primary",size:"sm",onClick:k,disabled:p||!x.trim()&&o.length===0,className:"flex-shrink-0",type:"button",children:e.jsx(Z,{className:"w-4 h-4"})}),e.jsx("input",{ref:d,type:"file",multiple:!0,accept:"image/*,video/*,audio/*,.pdf,.doc,.docx,.txt,.csv,.xlsx,.pptx",onChange:F,className:"hidden"})]})]})});g.displayName="ChatInput";g.__docgenInfo={description:"",methods:[],displayName:"ChatInput",props:{value:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSend:{required:!1,tsType:{name:"signature",type:"function",raw:"(message: string, attachments?: ChatAttachment[]) => void",signature:{arguments:[{type:{name:"string"},name:"message"},{type:{name:"Array",elements:[{name:"ChatAttachment"}],raw:"ChatAttachment[]"},name:"attachments"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Type a message...'",computed:!1}},attachments:{required:!1,tsType:{name:"Array",elements:[{name:"ChatAttachment"}],raw:"ChatAttachment[]"},description:"",defaultValue:{value:"[]",computed:!1}},onAttachmentsChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(attachments: ChatAttachment[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ChatAttachment"}],raw:"ChatAttachment[]"},name:"attachments"}],return:{name:"void"}}},description:""},maxAttachments:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},showAttachmentButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showVoiceButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const ye={title:"Forms/ChatInput",component:g,parameters:{layout:"padded",docs:{description:{component:"Input de chat con soporte para adjuntos, voz y envío de mensajes. Perfecto para aplicaciones de mensajería."}}},tags:[],argTypes:{showAttachmentButton:{control:"boolean"},showVoiceButton:{control:"boolean"},maxAttachments:{control:{type:"number",min:1,max:10}}}},v={args:{placeholder:"Type a message...",showAttachmentButton:!0,showVoiceButton:!1},decorators:[a=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(a,{})})]},w={name:"Con Botón de Voz",args:{placeholder:"Type a message or record...",showAttachmentButton:!0,showVoiceButton:!0},decorators:[a=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(a,{})})]},b={name:"Interactivo",render:()=>{const[a,i]=c.useState([]),[u,l]=c.useState("");return e.jsxs("div",{className:"max-w-md mx-auto space-y-4",children:[e.jsx("div",{className:"h-96 overflow-y-auto p-4 bg-surface-secondary rounded-xl space-y-2",children:a.length===0?e.jsx("p",{className:"text-sm text-text-tertiary text-center",children:"No messages yet"}):a.map((r,n)=>e.jsx(ee,{message:r.text,isOwn:!0,timestamp:"Now"},n))}),e.jsx(g,{value:u,onChange:l,onSend:(r,n)=>{i([...a,{text:r,attachments:n}]),l("")}})]})}},j={name:"Con Adjuntos",render:()=>{const[a,i]=c.useState([]);return e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(g,{attachments:a,onAttachmentsChange:i,onSend:(u,l)=>{console.log("Send:",u,l),i([])}})})}},N={name:"Deshabilitado",args:{disabled:!0,placeholder:"Input disabled..."},decorators:[a=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(a,{})})]};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type a message...',
    showAttachmentButton: true,
    showVoiceButton: false
  },
  decorators: [Story => <div className="max-w-md mx-auto">
                <Story />
            </div>]
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Con Botón de Voz',
  args: {
    placeholder: 'Type a message or record...',
    showAttachmentButton: true,
    showVoiceButton: true
  },
  decorators: [Story => <div className="max-w-md mx-auto">
                <Story />
            </div>]
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Interactivo',
  render: () => {
    const [messages, setMessages] = useState<Array<{
      text: string;
      attachments?: ChatAttachment[];
    }>>([]);
    const [value, setValue] = useState('');
    return <div className="max-w-md mx-auto space-y-4">
                <div className="h-96 overflow-y-auto p-4 bg-surface-secondary rounded-xl space-y-2">
                    {messages.length === 0 ? <p className="text-sm text-text-tertiary text-center">No messages yet</p> : messages.map((msg, i) => <ChatBubble key={i} message={msg.text} isOwn={true} timestamp="Now" />)}
                </div>
                <ChatInput value={value} onChange={setValue} onSend={(text, attachments) => {
        setMessages([...messages, {
          text,
          attachments
        }]);
        setValue('');
      }} />
            </div>;
  }
}`,...b.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Con Adjuntos',
  render: () => {
    const [attachments, setAttachments] = useState<ChatAttachment[]>([]);
    return <div className="max-w-md mx-auto">
                <ChatInput attachments={attachments} onAttachmentsChange={setAttachments} onSend={(text, atts) => {
        console.log('Send:', text, atts);
        setAttachments([]);
      }} />
            </div>;
  }
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Deshabilitado',
  args: {
    disabled: true,
    placeholder: 'Input disabled...'
  },
  decorators: [Story => <div className="max-w-md mx-auto">
                <Story />
            </div>]
}`,...N.parameters?.docs?.source}}};const ve=["Default","WithVoice","Interactive","WithAttachments","Disabled"];export{v as Default,N as Disabled,b as Interactive,j as WithAttachments,w as WithVoice,ve as __namedExportsOrder,ye as default};
