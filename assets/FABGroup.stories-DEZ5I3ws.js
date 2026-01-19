import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-BQuKaBw1.js";import{r as k}from"./index-D7kbmFgU.js";import{c}from"./utils-CDN07tui.js";import{A as w}from"./index-DWG6ZTkU.js";import{m as a}from"./proxy-DCsQVuEn.js";import{X as S}from"./x-DbhLKPdn.js";import{P as N}from"./plus-D-DGC6zp.js";import{M as A}from"./mail-g9ZfmrlS.js";import{P as f}from"./phone-D-0EOVL5.js";import{c as V}from"./createLucideIcon-7-Glrotp.js";import{V as M}from"./video-BGI4YgaW.js";import{C as P}from"./calendar-Dl5UBw6M.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DQ9vVnbO.js";const E=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],B=V("message-circle",E),m=i.forwardRef(({actions:t,position:d="bottom-right",className:y},h)=>{const[o,p]=i.useState(!1),[x,g]=i.useState(!1);i.useEffect(()=>{g(!0)},[]);const b={none:"","bottom-right":"fixed bottom-6 right-6 z-sticky","bottom-left":"fixed bottom-6 left-6 z-sticky","top-right":"fixed top-6 right-6 z-sticky","top-left":"fixed top-6 left-6 z-sticky"},v=d!=="none",u=e.jsxs("div",{ref:h,className:c("flex flex-col-reverse items-end gap-3",b[d],y),children:[e.jsx(w,{children:o&&t.map((r,l)=>{const C=r.icon,j={primary:"bg-accent-blue text-white hover:bg-accent-blueHover",secondary:"bg-surface-elevated text-text-primary hover:bg-surface-secondary border border-border-primary",tertiary:"bg-surface-tertiary text-text-primary hover:bg-surface-secondary"};return e.jsxs(a.div,{initial:{scale:0,opacity:0,y:20},animate:{scale:1,opacity:1,y:0},exit:{scale:0,opacity:0,y:20},transition:{type:"spring",stiffness:400,damping:25,delay:l*.05},className:"flex items-center gap-3",children:[e.jsx(a.span,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0,x:10},transition:{delay:l*.05+.1},className:"px-3 py-1.5 bg-surface-elevated border border-border-primary rounded-lg shadow-md text-sm font-medium text-text-primary whitespace-nowrap",children:r.label}),e.jsx(a.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>{r.onClick(),p(!1)},className:c("w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20",j[r.variant||"secondary"]),children:e.jsx(C,{className:"w-5 h-5"})})]},l)})}),e.jsx(a.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:()=>p(!o),className:c("w-14 h-14 rounded-full bg-accent-blue text-white flex items-center justify-center shadow-xl transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20","hover:bg-accent-blueHover"),children:e.jsx(a.div,{animate:{rotate:o?45:0},transition:{type:"spring",stiffness:400,damping:25},children:o?e.jsx(S,{className:"w-6 h-6"}):e.jsx(N,{className:"w-6 h-6"})})})]});return v&&x?k.createPortal(u,document.body):u});m.displayName="FABGroup";m.__docgenInfo={description:"",methods:[],displayName:"FABGroup",props:{actions:{required:!0,tsType:{name:"Array",elements:[{name:"FABGroupAction"}],raw:"FABGroupAction[]"},description:""},position:{required:!1,tsType:{name:"union",raw:"'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'none'",elements:[{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'bottom-right'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const K={title:"Buttons/FABGroup",component:m,tags:[],argTypes:{position:{control:"select",options:["none","bottom-right","bottom-left","top-right","top-left"]}}},s={args:{position:"none",actions:[{icon:A,label:"Send Email",onClick:()=>alert("Send Email"),variant:"secondary"},{icon:f,label:"Call",onClick:()=>alert("Call"),variant:"secondary"},{icon:B,label:"Message",onClick:()=>alert("Message"),variant:"secondary"}]},decorators:[t=>e.jsx("div",{className:"p-12 flex justify-center items-center min-h-[400px]",children:e.jsx(t,{})})]},n={args:{position:"none",actions:[{icon:M,label:"Video Call",onClick:()=>alert("Video Call"),variant:"primary"},{icon:f,label:"Voice Call",onClick:()=>alert("Voice Call"),variant:"primary"},{icon:P,label:"Schedule",onClick:()=>alert("Schedule"),variant:"secondary"}]},decorators:[t=>e.jsx("div",{className:"p-12 flex justify-center items-center min-h-[400px]",children:e.jsx(t,{})})]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'none',
    actions: [{
      icon: Mail,
      label: 'Send Email',
      onClick: () => alert('Send Email'),
      variant: 'secondary'
    }, {
      icon: Phone,
      label: 'Call',
      onClick: () => alert('Call'),
      variant: 'secondary'
    }, {
      icon: MessageCircle,
      label: 'Message',
      onClick: () => alert('Message'),
      variant: 'secondary'
    }]
  },
  decorators: [Story => <div className="p-12 flex justify-center items-center min-h-[400px]">
                <Story />
            </div>]
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    position: 'none',
    actions: [{
      icon: Video,
      label: 'Video Call',
      onClick: () => alert('Video Call'),
      variant: 'primary'
    }, {
      icon: Phone,
      label: 'Voice Call',
      onClick: () => alert('Voice Call'),
      variant: 'primary'
    }, {
      icon: Calendar,
      label: 'Schedule',
      onClick: () => alert('Schedule'),
      variant: 'secondary'
    }]
  },
  decorators: [Story => <div className="p-12 flex justify-center items-center min-h-[400px]">
                <Story />
            </div>]
}`,...n.parameters?.docs?.source}}};const Q=["Default","WithPrimaryActions"];export{s as Default,n as WithPrimaryActions,Q as __namedExportsOrder,K as default};
