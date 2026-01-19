import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as j}from"./iframe-vYzePaRW.js";import{c as N}from"./utils-CDN07tui.js";import{m as n}from"./proxy-DMGrdN83.js";import"./preload-helper-PPVm8Dsz.js";const s=j.forwardRef(({items:i,position:l="bottom",size:u="md",magnification:f=!0,className:v=""},k)=>{const[o,w]=j.useState(null),z={sm:{icon:"w-10 h-10",gap:"gap-2",padding:"p-2",magnifiedSize:56,normalSize:40},md:{icon:"w-14 h-14",gap:"gap-3",padding:"p-3",magnifiedSize:72,normalSize:56},lg:{icon:"w-16 h-16",gap:"gap-4",padding:"p-4",magnifiedSize:88,normalSize:64}},B={bottom:"bottom-4 left-1/2 -translate-x-1/2 flex-row",left:"left-4 top-1/2 -translate-y-1/2 flex-col",right:"right-4 top-1/2 -translate-y-1/2 flex-col"},{icon:M,gap:T,padding:H,magnifiedSize:P,normalSize:L}=z[u],E=r=>{if(!f||o===null)return 1;const t=Math.abs(r-o);return t===0?P/L:t===1?1.2:t===2?1.1:1};return e.jsx("div",{ref:k,className:N("fixed z-sticky",B[l],v),children:e.jsx(n.div,{className:N("flex items-end glass rounded-2xl border border-border-secondary shadow-2xl backdrop-blur-xl",l==="bottom"?"flex-row":"flex-col",T,H),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{type:"spring",stiffness:300,damping:30},children:i.map((r,t)=>e.jsx(R,{item:r,scale:E(t),onHoverStart:()=>w(t),onHoverEnd:()=>w(null),iconSize:M},r.id))})})});s.displayName="DockBar";const R=({item:i,scale:l,onHoverStart:u,onHoverEnd:f,iconSize:v})=>{const[k,o]=j.useState(!1);return e.jsxs("div",{className:"relative flex flex-col items-center",children:[k&&e.jsxs(n.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:10},className:"absolute -top-12 px-3 py-1.5 bg-gray-900/90 text-white text-xs font-medium rounded-lg backdrop-blur-sm whitespace-nowrap",children:[i.label,e.jsx("div",{className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45"})]}),e.jsxs(n.button,{onClick:i.onClick,onHoverStart:()=>{u(),o(!0)},onHoverEnd:()=>{f(),o(!1)},className:N("relative flex items-center justify-center rounded-xl transition-all","bg-surface-primary/50 backdrop-blur-sm","hover:bg-surface-primary/80","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue",i.active&&"ring-2 ring-accent-blue",v),style:{scale:l,transformOrigin:"bottom center"},transition:{type:"spring",stiffness:400,damping:25},children:[e.jsx("div",{className:"text-2xl",children:i.icon}),i.badge&&e.jsx(n.div,{initial:{scale:0},animate:{scale:1},className:"absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 flex items-center justify-center bg-red-500 text-white text-[10px] font-bold rounded-full",children:i.badge}),i.active&&e.jsx(n.div,{layoutId:"dock-active-indicator",className:"absolute -bottom-1 w-1 h-1 bg-accent-blue rounded-full",transition:{type:"spring",stiffness:400,damping:30}})]})]})};s.__docgenInfo={description:"",methods:[],displayName:"DockBar",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"DockBarItem"}],raw:"DockBarItem[]"},description:"Dock items"},position:{required:!1,tsType:{name:"union",raw:"'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Position of the dock",defaultValue:{value:"'bottom'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size of icons",defaultValue:{value:"'md'",computed:!1}},magnification:{required:!1,tsType:{name:"boolean"},description:"Enable magnification effect",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling",defaultValue:{value:"''",computed:!1}}}};const y=()=>e.jsx("span",{children:"🏠"}),S=()=>e.jsx("span",{children:"✉️"}),C=()=>e.jsx("span",{children:"📅"}),A=()=>e.jsx("span",{children:"🖼️"}),O=()=>e.jsx("span",{children:"🎵"}),V=()=>e.jsx("span",{children:"🎬"}),D=()=>e.jsx("span",{children:"📄"}),I=()=>e.jsx("span",{children:"⚙️"}),W=()=>e.jsx("span",{children:"💬"}),q=()=>e.jsx("span",{children:"🌐"}),_=()=>e.jsx("span",{children:"💻"}),F=()=>e.jsx("span",{children:"⌨️"}),X={title:"Navigation/DockBar",component:s,tags:[],argTypes:{position:{control:"select",options:["bottom","left","right"],description:"Position of the dock"},size:{control:"select",options:["sm","md","lg"],description:"Size of icons"},magnification:{control:"boolean",description:"Enable magnification effect"},className:{control:!1}}},a=[{id:"home",label:"Home",icon:e.jsx(y,{}),active:!0,onClick:()=>console.log("Home")},{id:"mail",label:"Mail",icon:e.jsx(S,{}),badge:5,onClick:()=>console.log("Mail")},{id:"calendar",label:"Calendar",icon:e.jsx(C,{}),onClick:()=>console.log("Calendar")},{id:"photos",label:"Photos",icon:e.jsx(A,{}),onClick:()=>console.log("Photos")},{id:"music",label:"Music",icon:e.jsx(O,{}),onClick:()=>console.log("Music")},{id:"videos",label:"Videos",icon:e.jsx(V,{}),onClick:()=>console.log("Videos")},{id:"documents",label:"Documents",icon:e.jsx(D,{}),onClick:()=>console.log("Documents")},{id:"settings",label:"Settings",icon:e.jsx(I,{}),onClick:()=>console.log("Settings")}],c={args:{items:a,position:"bottom",size:"md",magnification:!0},render:i=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto text-white",children:[e.jsx("h1",{className:"text-4xl font-bold mb-4",children:"macOS-Style Dock Bar"}),e.jsx("p",{className:"text-lg mb-8 text-white/90",children:"Hover over the dock icons at the bottom to see the magnification effect. The icons scale up smoothly, just like macOS!"}),e.jsxs("div",{className:"p-6 bg-white/10 backdrop-blur-sm rounded-lg",children:[e.jsx("h3",{className:"text-xl font-semibold mb-3",children:"Features"}),e.jsxs("ul",{className:"space-y-2 text-white/90",children:[e.jsx("li",{children:"• Magnification effect on hover"}),e.jsx("li",{children:"• Smooth scaling animations"}),e.jsx("li",{children:"• Tooltips showing app names"}),e.jsx("li",{children:"• Badge support for notifications"}),e.jsx("li",{children:"• Active indicator"}),e.jsx("li",{children:"• Glassmorphism design"})]})]})]}),e.jsx(s,{...i})]})},m={args:{items:a,position:"bottom",size:"sm",magnification:!0},render:i=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto text-white",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Small Dock"}),e.jsx("p",{className:"text-white/90",children:"Compact version of the dock bar."})]}),e.jsx(s,{...i})]})},d={args:{items:a,position:"bottom",size:"lg",magnification:!0},render:i=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto text-white",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Large Dock"}),e.jsx("p",{className:"text-white/90",children:"Larger icons for better visibility."})]}),e.jsx(s,{...i})]})},p={args:{items:a.slice(0,6),position:"left",size:"md",magnification:!0},render:i=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto ml-32 text-white",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Left Positioned Dock"}),e.jsx("p",{className:"text-white/90 mb-8",children:"The dock can be positioned on the left side of the screen."}),e.jsx("div",{className:"p-6 bg-white/10 backdrop-blur-sm rounded-lg",children:e.jsx("p",{className:"text-white/90",children:"Hover over the dock on the left to see the magnification effect working vertically."})})]}),e.jsx(s,{...i})]})},h={args:{items:a.slice(0,6),position:"right",size:"md",magnification:!0},render:i=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto mr-32 text-white",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Right Positioned Dock"}),e.jsx("p",{className:"text-white/90 mb-8",children:"The dock can also be positioned on the right side."}),e.jsx("div",{className:"p-6 bg-white/10 backdrop-blur-sm rounded-lg",children:e.jsx("p",{className:"text-white/90",children:"Check out the dock on the right side of the screen!"})})]}),e.jsx(s,{...i})]})},g={args:{items:a,position:"bottom",size:"md",magnification:!1},render:i=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto text-white",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Without Magnification"}),e.jsx("p",{className:"text-white/90",children:"The dock can be used without the magnification effect for a simpler look."})]}),e.jsx(s,{...i})]})},x={args:{items:[{id:"browser",label:"Browser",icon:e.jsx(q,{}),active:!0,onClick:()=>{}},{id:"messages",label:"Messages",icon:e.jsx(W,{}),badge:12,onClick:()=>{}},{id:"mail",label:"Mail",icon:e.jsx(S,{}),badge:99,onClick:()=>{}},{id:"code",label:"Code Editor",icon:e.jsx(_,{}),onClick:()=>{}},{id:"terminal",label:"Terminal",icon:e.jsx(F,{}),onClick:()=>{}},{id:"calendar",label:"Calendar",icon:e.jsx(C,{}),badge:3,onClick:()=>{}}],position:"bottom",size:"md",magnification:!0},render:i=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-700 via-gray-800 to-zinc-900 p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto text-white",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"With Notification Badges"}),e.jsx("p",{className:"text-white/90",children:"Apps can show notification badges to indicate unread messages or pending items."})]}),e.jsx(s,{...i})]})},b={args:{items:[{id:"home",label:"Home",icon:e.jsx(y,{}),active:!0,onClick:()=>{}},{id:"documents",label:"Documents",icon:e.jsx(D,{}),onClick:()=>{}},{id:"settings",label:"Settings",icon:e.jsx(I,{}),onClick:()=>{}}],position:"bottom",size:"md",magnification:!0},render:i=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto text-white",children:[e.jsx("h1",{className:"text-3xl font-bold mb-4",children:"Minimal Dock"}),e.jsx("p",{className:"text-white/90",children:"A simple dock with just a few essential apps."})]}),e.jsx(s,{...i})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    position: 'bottom',
    size: 'md',
    magnification: true
  },
  render: args => <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-8">
            <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-4xl font-bold mb-4">macOS-Style Dock Bar</h1>
                <p className="text-lg mb-8 text-white/90">
                    Hover over the dock icons at the bottom to see the magnification effect.
                    The icons scale up smoothly, just like macOS!
                </p>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                    <h3 className="text-xl font-semibold mb-3">Features</h3>
                    <ul className="space-y-2 text-white/90">
                        <li>• Magnification effect on hover</li>
                        <li>• Smooth scaling animations</li>
                        <li>• Tooltips showing app names</li>
                        <li>• Badge support for notifications</li>
                        <li>• Active indicator</li>
                        <li>• Glassmorphism design</li>
                    </ul>
                </div>
            </div>
            <DockBar {...args} />
        </div>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    position: 'bottom',
    size: 'sm',
    magnification: true
  },
  render: args => <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-8">
            <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-3xl font-bold mb-4">Small Dock</h1>
                <p className="text-white/90">Compact version of the dock bar.</p>
            </div>
            <DockBar {...args} />
        </div>
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    position: 'bottom',
    size: 'lg',
    magnification: true
  },
  render: args => <div className="min-h-screen bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-500 p-8">
            <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-3xl font-bold mb-4">Large Dock</h1>
                <p className="text-white/90">Larger icons for better visibility.</p>
            </div>
            <DockBar {...args} />
        </div>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 6),
    position: 'left',
    size: 'md',
    magnification: true
  },
  render: args => <div className="min-h-screen bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 p-8">
            <div className="max-w-4xl mx-auto ml-32 text-white">
                <h1 className="text-3xl font-bold mb-4">Left Positioned Dock</h1>
                <p className="text-white/90 mb-8">
                    The dock can be positioned on the left side of the screen.
                </p>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                    <p className="text-white/90">
                        Hover over the dock on the left to see the magnification effect working vertically.
                    </p>
                </div>
            </div>
            <DockBar {...args} />
        </div>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 6),
    position: 'right',
    size: 'md',
    magnification: true
  },
  render: args => <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 p-8">
            <div className="max-w-4xl mx-auto mr-32 text-white">
                <h1 className="text-3xl font-bold mb-4">Right Positioned Dock</h1>
                <p className="text-white/90 mb-8">
                    The dock can also be positioned on the right side.
                </p>
                <div className="p-6 bg-white/10 backdrop-blur-sm rounded-lg">
                    <p className="text-white/90">
                        Check out the dock on the right side of the screen!
                    </p>
                </div>
            </div>
            <DockBar {...args} />
        </div>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    position: 'bottom',
    size: 'md',
    magnification: false
  },
  render: args => <div className="min-h-screen bg-gradient-to-br from-violet-500 via-purple-500 to-fuchsia-500 p-8">
            <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-3xl font-bold mb-4">Without Magnification</h1>
                <p className="text-white/90">
                    The dock can be used without the magnification effect for a simpler look.
                </p>
            </div>
            <DockBar {...args} />
        </div>
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'browser',
      label: 'Browser',
      icon: <BrowserIcon />,
      active: true,
      onClick: () => {}
    }, {
      id: 'messages',
      label: 'Messages',
      icon: <MessagesIcon />,
      badge: 12,
      onClick: () => {}
    }, {
      id: 'mail',
      label: 'Mail',
      icon: <MailIcon />,
      badge: 99,
      onClick: () => {}
    }, {
      id: 'code',
      label: 'Code Editor',
      icon: <CodeIcon />,
      onClick: () => {}
    }, {
      id: 'terminal',
      label: 'Terminal',
      icon: <TerminalIcon />,
      onClick: () => {}
    }, {
      id: 'calendar',
      label: 'Calendar',
      icon: <CalendarIcon />,
      badge: 3,
      onClick: () => {}
    }],
    position: 'bottom',
    size: 'md',
    magnification: true
  },
  render: args => <div className="min-h-screen bg-gradient-to-br from-slate-700 via-gray-800 to-zinc-900 p-8">
            <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-3xl font-bold mb-4">With Notification Badges</h1>
                <p className="text-white/90">
                    Apps can show notification badges to indicate unread messages or pending items.
                </p>
            </div>
            <DockBar {...args} />
        </div>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Home',
      icon: <HomeIcon />,
      active: true,
      onClick: () => {}
    }, {
      id: 'documents',
      label: 'Documents',
      icon: <DocumentsIcon />,
      onClick: () => {}
    }, {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      onClick: () => {}
    }],
    position: 'bottom',
    size: 'md',
    magnification: true
  },
  render: args => <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8">
            <div className="max-w-4xl mx-auto text-white">
                <h1 className="text-3xl font-bold mb-4">Minimal Dock</h1>
                <p className="text-white/90">
                    A simple dock with just a few essential apps.
                </p>
            </div>
            <DockBar {...args} />
        </div>
}`,...b.parameters?.docs?.source}}};const Y=["Default","Small","Large","LeftPosition","RightPosition","NoMagnification","WithNotifications","MinimalDock"];export{c as Default,d as Large,p as LeftPosition,b as MinimalDock,g as NoMagnification,h as RightPosition,m as Small,x as WithNotifications,Y as __namedExportsOrder,X as default};
