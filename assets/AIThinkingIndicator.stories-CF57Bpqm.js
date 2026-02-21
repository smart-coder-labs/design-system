import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as N}from"./iframe-Dan5ncgG.js";import{c as a}from"./utils-CDN07tui.js";import{m as u}from"./proxy-DCTGQFKY.js";import{C as v}from"./ChatBubble-Dw9U7KZj.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-juiWZL7b.js";import"./Avatar-DKSF1zin.js";import"./index-B_jtOnfb.js";const s=N.forwardRef(({variant:h="dots",size:f="md",color:p="rgb(0, 122, 255)",message:g="",className:y,...b},j)=>{const t={sm:{dot:"w-1.5 h-1.5",gap:"gap-1",text:"text-xs"},md:{dot:"w-2 h-2",gap:"gap-1.5",text:"text-sm"},lg:{dot:"w-2.5 h-2.5",gap:"gap-2",text:"text-base"}}[f],x=()=>e.jsx("div",{className:a("flex items-center",t.gap),children:[0,1,2].map(r=>e.jsx(u.div,{className:a("rounded-full",t.dot),style:{backgroundColor:p},animate:{scale:[1,1.2,1],opacity:[.5,1,.5]},transition:{duration:1.2,repeat:1/0,delay:r*.2,ease:"easeInOut"}},r))}),I=()=>e.jsx(u.div,{className:a("rounded-full",t.dot),style:{backgroundColor:p},animate:{scale:[1,1.5,1],opacity:[1,.5,1]},transition:{duration:1.5,repeat:1/0,ease:"easeInOut"}}),T=()=>e.jsx("div",{className:a("flex items-end",t.gap),style:{height:"16px"},children:[0,1,2,3].map(r=>e.jsx(u.div,{className:"rounded-full",style:{width:"3px",backgroundColor:p},animate:{height:["8px","16px","8px"],opacity:[.5,1,.5]},transition:{duration:1,repeat:1/0,delay:r*.15,ease:"easeInOut"}},r))}),k=()=>{switch(h){case"dots":return e.jsx(x,{});case"pulse":return e.jsx(I,{});case"wave":return e.jsx(T,{});default:return e.jsx(x,{})}};return e.jsxs("div",{ref:j,className:a("flex items-center gap-3",y),...b,children:[k(),g&&e.jsx("span",{className:a("text-text-secondary",t.text),children:g})]})});s.displayName="AIThinkingIndicator";s.__docgenInfo={description:"",methods:[],displayName:"AIThinkingIndicator",props:{variant:{required:!1,tsType:{name:"union",raw:"'dots' | 'pulse' | 'wave'",elements:[{name:"literal",value:"'dots'"},{name:"literal",value:"'pulse'"},{name:"literal",value:"'wave'"}]},description:"",defaultValue:{value:"'dots'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'rgb(0, 122, 255)'",computed:!1}},message:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const D={title:"Feedback/AIThinkingIndicator",component:s,parameters:{layout:"centered",docs:{description:{component:'Indicador de "pensando" para IA. Muestra diferentes animaciones para indicar que la IA está procesando una respuesta.'}}},tags:[],argTypes:{variant:{control:"select",options:["dots","pulse","wave"]},size:{control:"select",options:["sm","md","lg"]}}},n={args:{variant:"dots",message:"Thinking..."}},i={args:{variant:"pulse",message:"Processing..."}},o={args:{variant:"wave",message:"Analyzing..."}},d={name:"Sin Mensaje",args:{variant:"dots"}},m={name:"Diferentes Tamaños",render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-2",children:"Small"}),e.jsx(s,{variant:"dots",size:"sm",message:"Thinking..."})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-2",children:"Medium"}),e.jsx(s,{variant:"dots",size:"md",message:"Thinking..."})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-2",children:"Large"}),e.jsx(s,{variant:"dots",size:"lg",message:"Thinking..."})]})]})},c={name:"En Chat Bubble",render:()=>e.jsxs("div",{className:"max-w-md mx-auto space-y-4",children:[e.jsx(v,{message:"What is the capital of France?",isOwn:!0,timestamp:"10:30 AM"}),e.jsx(v,{message:"",sender:"AI Assistant",isOwn:!1,variant:"system",children:e.jsx("div",{className:"p-4",children:e.jsx(s,{variant:"dots",message:"Thinking..."})})})]})},l={name:"Color Personalizado",args:{variant:"dots",color:"rgb(52, 199, 89)",message:"Processing..."}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dots',
    message: 'Thinking...'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pulse',
    message: 'Processing...'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'wave',
    message: 'Analyzing...'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Sin Mensaje',
  args: {
    variant: 'dots'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Diferentes Tamaños',
  render: () => <div className="space-y-6">
            <div>
                <p className="text-sm text-text-secondary mb-2">Small</p>
                <AIThinkingIndicator variant="dots" size="sm" message="Thinking..." />
            </div>
            <div>
                <p className="text-sm text-text-secondary mb-2">Medium</p>
                <AIThinkingIndicator variant="dots" size="md" message="Thinking..." />
            </div>
            <div>
                <p className="text-sm text-text-secondary mb-2">Large</p>
                <AIThinkingIndicator variant="dots" size="lg" message="Thinking..." />
            </div>
        </div>
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'En Chat Bubble',
  render: () => <div className="max-w-md mx-auto space-y-4">
            <ChatBubble message="What is the capital of France?" isOwn={true} timestamp="10:30 AM" />
            <ChatBubble message="" sender="AI Assistant" isOwn={false} variant="system">
                <div className="p-4">
                    <AIThinkingIndicator variant="dots" message="Thinking..." />
                </div>
            </ChatBubble>
        </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Color Personalizado',
  args: {
    variant: 'dots',
    color: 'rgb(52, 199, 89)',
    message: 'Processing...'
  }
}`,...l.parameters?.docs?.source}}};const W=["Dots","Pulse","Wave","WithoutMessage","DifferentSizes","InChatBubble","CustomColor"];export{l as CustomColor,m as DifferentSizes,n as Dots,c as InChatBubble,i as Pulse,o as Wave,d as WithoutMessage,W as __namedExportsOrder,D as default};
