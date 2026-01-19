import{j as e}from"./jsx-runtime-u17CrQMm.js";import{C as s}from"./ChatBubble-DCZ-B8e8.js";import{M as l}from"./MessageReactions-BSXkaeCq.js";import"./iframe-vYzePaRW.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./Avatar-D0IoF4KF.js";import"./index-B_jtOnfb.js";import"./proxy-DMGrdN83.js";import"./createLucideIcon-Ckxz52bH.js";import"./thumbs-up-DRMgVCdC.js";import"./heart-a4Pgj84Y.js";const A={title:"Data Display/ChatBubble",component:s,parameters:{layout:"padded",docs:{description:{component:"Burbujas de chat estilo moderno con soporte para mensajes propios, del sistema, y estados de entrega. Perfecto para aplicaciones de mensajería."}}},tags:[],argTypes:{isOwn:{control:"boolean",description:"Si el mensaje es del usuario actual"},variant:{control:"select",options:["default","system","error"]},status:{control:"select",options:["sending","sent","delivered","read"]}}},t={name:"Mensaje Propio",args:{message:"Hey, how are you doing today?",isOwn:!0,timestamp:"10:30 AM",status:"read"},decorators:[a=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(a,{})})]},r={name:"Mensaje de Otro",args:{message:"I'm doing great! Thanks for asking. How about you?",sender:"Alice",avatar:"",isOwn:!1,timestamp:"10:31 AM",showAvatar:!0},decorators:[a=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(a,{})})]},o={name:"Mensaje del Sistema",args:{message:"Alice joined the conversation",variant:"system",showAvatar:!1},decorators:[a=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(a,{})})]},m={name:"Mensaje de Error",args:{message:"Failed to send message. Please try again.",variant:"error",isOwn:!0},decorators:[a=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(a,{})})]},i={name:"Con Imagen",render:()=>e.jsx("div",{className:"space-y-4 max-w-md",children:e.jsx(s,{message:"Check out this design!",timestamp:"10:30 AM",isOwn:!1,status:"read",children:e.jsx("div",{className:"mt-2 rounded-lg overflow-hidden",children:e.jsx("img",{src:"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80",alt:"Design preview",className:"w-full h-48 object-cover"})})})}),args:{message:"Check out this design!",timestamp:"10:30 AM",isOwn:!1,status:"read"}},n={args:{message:"Check out this new feature!",timestamp:"10:30 AM",isOwn:!0,status:"read"},name:"Con Reacciones",render:()=>e.jsxs("div",{className:"max-w-md mx-auto space-y-4",children:[e.jsx(s,{message:"Check out this new feature!",isOwn:!0,timestamp:"10:30 AM",status:"read",children:e.jsx(l,{reactions:[{type:"like",count:5,userReacted:!0},{type:"love",count:2}]})}),e.jsx(s,{message:"That looks amazing! 🎉",sender:"Alice",isOwn:!1,timestamp:"10:31 AM",children:e.jsx(l,{reactions:[{type:"like",count:1},{type:"laugh",count:3}]})})]})},d={name:"Mensaje Largo",args:{message:"This is a very long message that demonstrates how the chat bubble handles longer text content. It should wrap properly and maintain good readability while keeping the design clean and modern.",isOwn:!0,timestamp:"10:30 AM",status:"delivered"},decorators:[a=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(a,{})})]},c={args:{message:"Check out this new feature!",timestamp:"10:30 AM",isOwn:!0,status:"read"},name:"Conversación Completa",render:()=>e.jsxs("div",{className:"max-w-md mx-auto space-y-1",children:[e.jsx(s,{message:"Hey everyone!",sender:"Bob",isOwn:!1,timestamp:"10:00 AM"}),e.jsx(s,{message:"Hi Bob! 👋",isOwn:!0,timestamp:"10:01 AM",status:"read"}),e.jsx(s,{message:"Welcome to the group!",sender:"Alice",isOwn:!1,timestamp:"10:02 AM"}),e.jsx(s,{message:"Thanks! Excited to be here.",isOwn:!0,timestamp:"10:03 AM",status:"read"}),e.jsx(s,{message:"Bob joined the conversation",variant:"system"})]})},u={args:{message:"Message with different statuses",timestamp:"10:30 AM",isOwn:!0,status:"read"},name:"Estados de Mensaje",render:()=>e.jsxs("div",{className:"max-w-md mx-auto space-y-4",children:[e.jsx(s,{message:"Sending...",isOwn:!0,status:"sending"}),e.jsx(s,{message:"Sent",isOwn:!0,status:"sent"}),e.jsx(s,{message:"Delivered",isOwn:!0,status:"delivered"}),e.jsx(s,{message:"Read",isOwn:!0,status:"read"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Mensaje Propio',
  args: {
    message: 'Hey, how are you doing today?',
    isOwn: true,
    timestamp: '10:30 AM',
    status: 'read'
  },
  decorators: [Story => <div className="max-w-md mx-auto">
                <Story />
            </div>]
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Mensaje de Otro',
  args: {
    message: 'I\\'m doing great! Thanks for asking. How about you?',
    sender: 'Alice',
    avatar: '',
    isOwn: false,
    timestamp: '10:31 AM',
    showAvatar: true
  },
  decorators: [Story => <div className="max-w-md mx-auto">
                <Story />
            </div>]
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Mensaje del Sistema',
  args: {
    message: 'Alice joined the conversation',
    variant: 'system',
    showAvatar: false
  },
  decorators: [Story => <div className="max-w-md mx-auto">
                <Story />
            </div>]
}`,...o.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Mensaje de Error',
  args: {
    message: 'Failed to send message. Please try again.',
    variant: 'error',
    isOwn: true
  },
  decorators: [Story => <div className="max-w-md mx-auto">
                <Story />
            </div>]
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Con Imagen',
  render: () => <div className="space-y-4 max-w-md">
            <ChatBubble message="Check out this design!" timestamp="10:30 AM" isOwn={false} status="read">
                <div className="mt-2 rounded-lg overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=400&q=80" alt="Design preview" className="w-full h-48 object-cover" />
                </div>
            </ChatBubble>
        </div>,
  args: {
    message: 'Check out this design!',
    timestamp: '10:30 AM',
    isOwn: false,
    status: 'read'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Check out this new feature!',
    timestamp: '10:30 AM',
    isOwn: true,
    status: 'read'
  },
  name: 'Con Reacciones',
  render: () => <div className="max-w-md mx-auto space-y-4">
            <ChatBubble message="Check out this new feature!" isOwn={true} timestamp="10:30 AM" status="read">
                <MessageReactions reactions={[{
        type: 'like',
        count: 5,
        userReacted: true
      }, {
        type: 'love',
        count: 2
      }]} />
            </ChatBubble>
            <ChatBubble message="That looks amazing! 🎉" sender="Alice" isOwn={false} timestamp="10:31 AM">
                <MessageReactions reactions={[{
        type: 'like',
        count: 1
      }, {
        type: 'laugh',
        count: 3
      }]} />
            </ChatBubble>
        </div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Mensaje Largo',
  args: {
    message: 'This is a very long message that demonstrates how the chat bubble handles longer text content. It should wrap properly and maintain good readability while keeping the design clean and modern.',
    isOwn: true,
    timestamp: '10:30 AM',
    status: 'delivered'
  },
  decorators: [Story => <div className="max-w-md mx-auto">
                <Story />
            </div>]
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Check out this new feature!',
    timestamp: '10:30 AM',
    isOwn: true,
    status: 'read'
  },
  name: 'Conversación Completa',
  render: () => <div className="max-w-md mx-auto space-y-1">
            <ChatBubble message="Hey everyone!" sender="Bob" isOwn={false} timestamp="10:00 AM" />
            <ChatBubble message="Hi Bob! 👋" isOwn={true} timestamp="10:01 AM" status="read" />
            <ChatBubble message="Welcome to the group!" sender="Alice" isOwn={false} timestamp="10:02 AM" />
            <ChatBubble message="Thanks! Excited to be here." isOwn={true} timestamp="10:03 AM" status="read" />
            <ChatBubble message="Bob joined the conversation" variant="system" />
        </div>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Message with different statuses',
    timestamp: '10:30 AM',
    isOwn: true,
    status: 'read'
  },
  name: 'Estados de Mensaje',
  render: () => <div className="max-w-md mx-auto space-y-4">
            <ChatBubble message="Sending..." isOwn={true} status="sending" />
            <ChatBubble message="Sent" isOwn={true} status="sent" />
            <ChatBubble message="Delivered" isOwn={true} status="delivered" />
            <ChatBubble message="Read" isOwn={true} status="read" />
        </div>
}`,...u.parameters?.docs?.source}}};const C=["OwnMessage","OtherMessage","SystemMessage","ErrorMessage","WithImage","WithReactions","LongMessage","Conversation","StatusStates"];export{c as Conversation,m as ErrorMessage,d as LongMessage,r as OtherMessage,t as OwnMessage,u as StatusStates,o as SystemMessage,i as WithImage,n as WithReactions,C as __namedExportsOrder,A as default};
