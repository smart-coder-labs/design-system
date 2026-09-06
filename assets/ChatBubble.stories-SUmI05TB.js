import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DxpFRQWZ.js";import{n as r,t as i}from"./utils-CcEteFRA.js";import{t as a}from"./jsx-runtime-WZfjI2gv.js";import{s as o,t as s}from"./es-DtWveEX0.js";import{n as c,r as l,t as u}from"./Avatar-uzOfsZqo.js";import{t as d}from"./Avatar-BkXmZrw8.js";var f,p,m,h=e((()=>{f=t(n()),r(),s(),d(),p=a(),m=f.forwardRef(({message:e,sender:t,avatar:n,timestamp:r,isOwn:a=!1,variant:s=`default`,status:d,showAvatar:f=!0,showTimestamp:m=!0,className:h,children:g,..._},v)=>{let y={sending:`⏳`,sent:`✓`,delivered:`✓✓`,read:`✓✓`},b={default:a?`bg-accent-blue text-white`:`bg-surface-secondary text-text-primary`,system:`bg-surface-tertiary text-text-secondary text-center`,error:`bg-status-error/10 text-status-error border border-status-error/20`,glasphormism:a?`bg-accent-blue/35 backdrop-blur-md border border-white/25 text-white dark:text-text-primary shadow-sm`:`bg-surface-glass/40 backdrop-blur-md border border-border-primary/50 text-text-primary shadow-sm`};return(0,p.jsxs)(o.div,{ref:v,className:i(`flex gap-2 mb-4`,a&&`flex-row-reverse`,h),initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.2},..._,children:[f&&!a&&(s===`default`||s===`glasphormism`)&&(0,p.jsx)(`div`,{className:`flex-shrink-0`,children:(0,p.jsxs)(u,{className:`w-8 h-8`,variant:s===`glasphormism`?`glasphormism`:void 0,children:[n&&(0,p.jsx)(l,{src:n,alt:t}),(0,p.jsx)(c,{children:t?.charAt(0).toUpperCase()||`U`})]})}),(0,p.jsxs)(`div`,{className:i(`flex flex-col`,a?`items-end`:`items-start`,s===`system`&&`items-center w-full`),children:[t&&!a&&(s===`default`||s===`glasphormism`)&&(0,p.jsx)(`span`,{className:`text-xs text-text-tertiary mb-1 px-1`,children:t}),(0,p.jsx)(`div`,{className:i(`relative px-4 py-2.5 rounded-2xl max-w-[80%]`,b[s],a&&(s===`default`||s===`glasphormism`)&&`rounded-br-sm`,!a&&(s===`default`||s===`glasphormism`)&&`rounded-bl-sm`,s===`system`&&`max-w-full`),children:(0,p.jsx)(`p`,{className:i(`text-sm leading-relaxed whitespace-pre-wrap break-words`,s===`system`&&`text-center`),children:e})}),(0,p.jsxs)(`div`,{className:i(`flex flex-col gap-1 w-full`),children:[g&&(0,p.jsx)(`div`,{className:`w-full`,children:g}),(m||d)&&(0,p.jsxs)(`div`,{className:i(`flex items-center gap-1.5 mt-1 px-1`,a?`flex-row-reverse`:`flex-row`),children:[r&&m&&(0,p.jsx)(`span`,{className:`text-xs text-text-tertiary`,children:r}),d&&a&&(0,p.jsx)(`span`,{className:`text-xs text-text-tertiary`,children:y[d]})]})]})]})]})}),m.displayName=`ChatBubble`,m.__docgenInfo={description:``,methods:[],displayName:`ChatBubble`,props:{message:{required:!0,tsType:{name:`string`},description:``},sender:{required:!1,tsType:{name:`string`},description:``},avatar:{required:!1,tsType:{name:`string`},description:``},timestamp:{required:!1,tsType:{name:`string`},description:``},isOwn:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'system' | 'error' | 'glasphormism'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'system'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'glasphormism'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},status:{required:!1,tsType:{name:`union`,raw:`'sending' | 'sent' | 'delivered' | 'read'`,elements:[{name:`literal`,value:`'sending'`},{name:`literal`,value:`'sent'`},{name:`literal`,value:`'delivered'`},{name:`literal`,value:`'read'`}]},description:``},showAvatar:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},showTimestamp:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{h(),g=a(),_={title:`Data Display/ChatBubble`,component:m,tags:[`autodocs`]},v={args:{message:`Hey, can you review the latest design mockups?`,sender:`Alice`,timestamp:`10:42 AM`,isOwn:!1}},y={args:{message:`Sure, I'll take a look right now.`,sender:`You`,timestamp:`10:43 AM`,isOwn:!0}},b={args:{message:`The new dashboard looks great!`,sender:`Bob Smith`,avatar:`https://i.pravatar.cc/150?u=bob-chat`,timestamp:`11:15 AM`,isOwn:!1,showAvatar:!0}},x={args:{message:`Alice has joined the conversation`,variant:`system`,showTimestamp:!0}},S={args:{message:`Failed to send message. Tap to retry.`,variant:`error`,isOwn:!0,timestamp:`11:20 AM`}},C={args:{message:`The payment has been processed.`,sender:`You`,timestamp:`11:30 AM`,isOwn:!0,status:`read`,showTimestamp:!0}},w={args:{message:`Transferring funds...`,sender:`You`,timestamp:`11:31 AM`,isOwn:!0,status:`sending`}},T={args:{message:`Here is the detailed breakdown of the Q4 investment portfolio performance. We saw a 12.5% increase in equities, 3.2% in bonds, and crypto remained volatile. Overall portfolio return was 8.7%.`,sender:`Analyst Bot`,timestamp:`2:00 PM`,isOwn:!1}},E={render:()=>(0,g.jsxs)(`div`,{className:`p-8 bg-slate-100 dark:bg-slate-900 rounded-2xl w-full flex flex-col gap-4`,children:[(0,g.jsx)(m,{message:`Hey, did you see the new glassmorphic UI updates?`,sender:`Alice`,avatar:`https://i.pravatar.cc/150?u=alice`,timestamp:`10:42 AM`,isOwn:!1,variant:`glasphormism`}),(0,g.jsx)(m,{message:`Wow, yes! The blue blur on my sent messages looks incredibly premium.`,sender:`You`,timestamp:`10:43 AM`,isOwn:!0,variant:`glasphormism`,status:`read`})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Hey, can you review the latest design mockups?',
    sender: 'Alice',
    timestamp: '10:42 AM',
    isOwn: false
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Sure, I\\'ll take a look right now.',
    sender: 'You',
    timestamp: '10:43 AM',
    isOwn: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'The new dashboard looks great!',
    sender: 'Bob Smith',
    avatar: 'https://i.pravatar.cc/150?u=bob-chat',
    timestamp: '11:15 AM',
    isOwn: false,
    showAvatar: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Alice has joined the conversation',
    variant: 'system',
    showTimestamp: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Failed to send message. Tap to retry.',
    variant: 'error',
    isOwn: true,
    timestamp: '11:20 AM'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'The payment has been processed.',
    sender: 'You',
    timestamp: '11:30 AM',
    isOwn: true,
    status: 'read',
    showTimestamp: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Transferring funds...',
    sender: 'You',
    timestamp: '11:31 AM',
    isOwn: true,
    status: 'sending'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Here is the detailed breakdown of the Q4 investment portfolio performance. We saw a 12.5% increase in equities, 3.2% in bonds, and crypto remained volatile. Overall portfolio return was 8.7%.',
    sender: 'Analyst Bot',
    timestamp: '2:00 PM',
    isOwn: false
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-2xl w-full flex flex-col gap-4">
            <ChatBubble message="Hey, did you see the new glassmorphic UI updates?" sender="Alice" avatar="https://i.pravatar.cc/150?u=alice" timestamp="10:42 AM" isOwn={false} variant="glasphormism" />
            <ChatBubble message="Wow, yes! The blue blur on my sent messages looks incredibly premium." sender="You" timestamp="10:43 AM" isOwn={true} variant="glasphormism" status="read" />
        </div>
}`,...E.parameters?.docs?.source}}},D=[`ReceivedMessage`,`SentMessage`,`WithAvatar`,`SystemMessage`,`ErrorMessage`,`WithStatus`,`SendingStatus`,`LongMessage`,`Glasphormism`]}))();export{S as ErrorMessage,E as Glasphormism,T as LongMessage,v as ReceivedMessage,w as SendingStatus,y as SentMessage,x as SystemMessage,b as WithAvatar,C as WithStatus,D as __namedExportsOrder,_ as default};