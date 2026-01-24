import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./iframe-FxOJXbvx.js";import{c as N}from"./utils-CDN07tui.js";import{A as Z}from"./index-BNHizxPa.js";import{m as C}from"./proxy-PznluMrK.js";import{B as W}from"./Button-C6s9DX-s.js";import"./preload-helper-PPVm8Dsz.js";const v=l.forwardRef(({isOpen:s,onClose:i,position:o="left",sections:k=[],header:B,footer:O,width:T="md",showBackdrop:q=!0,closeOnBackdropClick:A=!0,belowNavBar:c=!1,navBarHeight:y=56,className:P="",...V},E)=>{const H={sm:"w-64",md:"w-80",lg:"w-96"},L={left:{hidden:{x:"-100%"},visible:{x:0},exit:{x:"-100%"}},right:{hidden:{x:"100%"},visible:{x:0},exit:{x:"100%"}}},F={hidden:{opacity:0},visible:{opacity:1},exit:{opacity:0}},z=`
            fixed ${o==="left"?"left-0":"right-0"}
            ${H[T]}
            bg-surface-primary
            shadow-xl
            flex flex-col
            ${c?"z-dropdown":"z-modal"}
        `,$=N("fixed bg-black/40 backdrop-blur-sm",c?"z-dropdown":"z-modal",!c&&"inset-0"),_=c?{top:`${y}px`,height:`calc(100vh - ${y}px)`}:{top:0,height:"100vh"},M=c?{top:`${y}px`,left:0,right:0,bottom:0}:{},U=`
            flex items-center justify-between gap-3 px-4 py-3 rounded-md text-sm font-medium
            transition-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
            cursor-pointer
        `,G="text-text-primary bg-accent-blue/10 border-l-2 border-accent-blue",J="text-text-secondary hover:bg-surface-secondary hover:text-text-primary",K=()=>{A&&i()};return l.useEffect(()=>(s?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[s]),l.useEffect(()=>{const n=j=>{j.key==="Escape"&&s&&i()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[s,i]),e.jsx(Z,{children:s&&e.jsxs(e.Fragment,{children:[q&&e.jsx(C.div,{className:$,style:M,variants:F,initial:"hidden",animate:"visible",exit:"exit",transition:{duration:.2},onClick:K,"aria-hidden":"true"}),e.jsxs(C.div,{ref:E,className:N(z,P),style:_,variants:L[o],initial:"hidden",animate:"visible",exit:"exit",transition:{type:"spring",stiffness:300,damping:30},role:"dialog","aria-modal":"true",...V,children:[B&&e.jsx("div",{className:"flex-shrink-0 px-4 py-4 border-b border-border-primary",children:B}),e.jsx("div",{className:"flex-1 overflow-y-auto px-2 py-4",children:k.map((n,j)=>e.jsxs("div",{className:"mb-6 last:mb-0",children:[n.title&&e.jsx("h3",{className:"px-4 mb-2 text-xs font-semibold text-text-tertiary uppercase tracking-wide",children:n.title}),e.jsx("nav",{className:"space-y-1",children:n.items.map((r,Q)=>{const X=r.href?"a":"button",Y=!!r.active;return e.jsxs(X,{href:r.href,onClick:r.onClick,className:N(U,Y?G:J),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[r.icon&&e.jsx("span",{className:"inline-flex flex-shrink-0",children:r.icon}),e.jsx("span",{children:r.label})]}),r.badge&&e.jsx("span",{className:"inline-flex items-center justify-center px-2 py-0.5 text-xs font-semibold rounded-full bg-accent-blue text-white",children:r.badge})]},Q)})})]},j))}),O&&e.jsx("div",{className:"flex-shrink-0 px-4 py-4 border-t border-border-primary",children:O})]})]})})});v.displayName="NavigationDrawer";v.__docgenInfo={description:"",methods:[],displayName:"NavigationDrawer",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the drawer is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when drawer should close"},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Drawer position",defaultValue:{value:"'left'",computed:!1}},sections:{required:!1,tsType:{name:"Array",elements:[{name:"NavigationDrawerSection"}],raw:"NavigationDrawerSection[]"},description:"Navigation sections",defaultValue:{value:"[]",computed:!1}},header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional header content"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional footer content"},width:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Drawer width",defaultValue:{value:"'md'",computed:!1}},showBackdrop:{required:!1,tsType:{name:"boolean"},description:"Whether to show backdrop",defaultValue:{value:"true",computed:!1}},closeOnBackdropClick:{required:!1,tsType:{name:"boolean"},description:"Whether clicking backdrop closes drawer",defaultValue:{value:"true",computed:!1}},belowNavBar:{required:!1,tsType:{name:"boolean"},description:"Whether drawer should be positioned below navbar (default: false for full screen)",defaultValue:{value:"false",computed:!1}},navBarHeight:{required:!1,tsType:{name:"number"},description:"NavBar height in pixels (default: 56)",defaultValue:{value:"56",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling",defaultValue:{value:"''",computed:!1}}},composes:["Omit"]};const D=()=>e.jsx("span",{children:"🏠"}),S=()=>e.jsx("span",{children:"👤"}),I=()=>e.jsx("span",{children:"⚙️"}),ee=()=>e.jsx("span",{children:"📄"}),se=()=>e.jsx("span",{children:"📁"}),te=()=>e.jsx("span",{children:"⭐"}),re=()=>e.jsx("span",{children:"🔔"}),R=()=>e.jsx("span",{children:"🚪"}),pe={title:"Navigation/NavigationDrawer",component:v,tags:[],argTypes:{isOpen:{control:"boolean",description:"Whether the drawer is open"},position:{control:"select",options:["left","right"],description:"Drawer position"},width:{control:"select",options:["sm","md","lg"],description:"Drawer width"},showBackdrop:{control:"boolean",description:"Whether to show backdrop"},closeOnBackdropClick:{control:"boolean",description:"Whether clicking backdrop closes drawer"},belowNavBar:{control:"boolean",description:"Whether drawer should be positioned below navbar"},navBarHeight:{control:"number",description:"NavBar height in pixels"},className:{control:!1},onClose:{action:"closed"}}},a=[{title:"Main",items:[{label:"Home",icon:e.jsx(D,{}),active:!0},{label:"Profile",icon:e.jsx(S,{})},{label:"Documents",icon:e.jsx(ee,{}),badge:"3"}]},{title:"Workspace",items:[{label:"Projects",icon:e.jsx(se,{})},{label:"Favorites",icon:e.jsx(te,{}),badge:"12"},{label:"Notifications",icon:e.jsx(re,{}),badge:"5"}]},{title:"Account",items:[{label:"Settings",icon:e.jsx(I,{})},{label:"Logout",icon:e.jsx(R,{})}]}],t=s=>{const[i,o]=l.useState(s.isOpen??!1);return l.useEffect(()=>{o(s.isOpen)},[s.isOpen]),e.jsxs("div",{className:"min-h-screen bg-background-secondary p-8",children:[e.jsx(W,{onClick:()=>o(!0),children:"Open Navigation Drawer"}),e.jsx(v,{...s,isOpen:i,onClose:()=>{o(!1),s.onClose?.()}}),e.jsxs("div",{className:"mt-8 p-6 bg-surface-primary rounded-lg",children:[e.jsx("h2",{className:"text-xl font-semibold text-text-primary mb-4",children:"Page Content"}),e.jsxs("p",{className:"text-text-secondary mb-4",children:["Click the button above to open the navigation drawer. The drawer will slide in from the ",s.position||"left","."]}),e.jsx("div",{className:"grid gap-4 mt-6",children:[1,2,3].map(k=>e.jsx("div",{className:"h-24 rounded-xl bg-gradient-to-r from-indigo-500 to-teal-500 opacity-80"},k))})]})]})},d={render:s=>e.jsx(t,{...s}),args:{isOpen:!1,position:"left",width:"md",sections:a,showBackdrop:!0,closeOnBackdropClick:!0}},p={render:s=>e.jsx(t,{...s}),args:{isOpen:!1,position:"right",width:"md",sections:a,showBackdrop:!0,closeOnBackdropClick:!0}},m={render:s=>e.jsx(t,{...s}),args:{isOpen:!1,position:"left",width:"sm",sections:a,showBackdrop:!0,closeOnBackdropClick:!0}},u={render:s=>e.jsx(t,{...s}),args:{isOpen:!1,position:"left",width:"lg",sections:a,showBackdrop:!0,closeOnBackdropClick:!0}},h={render:s=>e.jsx(t,{...s}),args:{isOpen:!1,position:"left",width:"md",sections:a,showBackdrop:!0,closeOnBackdropClick:!0,header:e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-semibold text-text-primary",children:"Navigation"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Choose your destination"})]})}},f={render:s=>e.jsx(t,{...s}),args:{isOpen:!1,position:"left",width:"md",sections:a,showBackdrop:!0,closeOnBackdropClick:!0,footer:e.jsx("div",{className:"text-xs text-text-tertiary text-center",children:"© 2025 Apple Design System"})}},x={render:s=>e.jsx(t,{...s}),args:{isOpen:!1,position:"left",width:"md",sections:a,showBackdrop:!0,closeOnBackdropClick:!0,header:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-semibold text-text-primary",children:"Menu"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Smart Coder Labs"})]}),e.jsx("div",{className:"w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center",children:e.jsx(S,{})})]}),footer:e.jsxs(W,{variant:"ghost",size:"sm",className:"w-full",children:[e.jsx(R,{})," ",e.jsx("span",{className:"ml-2",children:"Sign Out"})]})}},g={render:s=>e.jsx(t,{...s}),args:{isOpen:!1,position:"left",width:"md",sections:a,showBackdrop:!1,closeOnBackdropClick:!1}},w={render:s=>e.jsx(t,{...s}),args:{isOpen:!1,position:"left",width:"md",sections:a,showBackdrop:!0,closeOnBackdropClick:!1}},b={render:s=>e.jsx(t,{...s}),args:{isOpen:!1,position:"left",width:"md",sections:[{items:[{label:"Home",icon:e.jsx(D,{}),active:!0},{label:"Profile",icon:e.jsx(S,{})},{label:"Settings",icon:e.jsx(I,{})}]}],showBackdrop:!0,closeOnBackdropClick:!0}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <NavigationDrawerWithState {...args} />,
  args: {
    isOpen: false,
    position: 'left',
    width: 'md',
    sections: sampleSections,
    showBackdrop: true,
    closeOnBackdropClick: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <NavigationDrawerWithState {...args} />,
  args: {
    isOpen: false,
    position: 'right',
    width: 'md',
    sections: sampleSections,
    showBackdrop: true,
    closeOnBackdropClick: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <NavigationDrawerWithState {...args} />,
  args: {
    isOpen: false,
    position: 'left',
    width: 'sm',
    sections: sampleSections,
    showBackdrop: true,
    closeOnBackdropClick: true
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <NavigationDrawerWithState {...args} />,
  args: {
    isOpen: false,
    position: 'left',
    width: 'lg',
    sections: sampleSections,
    showBackdrop: true,
    closeOnBackdropClick: true
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <NavigationDrawerWithState {...args} />,
  args: {
    isOpen: false,
    position: 'left',
    width: 'md',
    sections: sampleSections,
    showBackdrop: true,
    closeOnBackdropClick: true,
    header: <div>
                <h2 className="text-lg font-semibold text-text-primary">Navigation</h2>
                <p className="text-sm text-text-secondary">Choose your destination</p>
            </div>
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <NavigationDrawerWithState {...args} />,
  args: {
    isOpen: false,
    position: 'left',
    width: 'md',
    sections: sampleSections,
    showBackdrop: true,
    closeOnBackdropClick: true,
    footer: <div className="text-xs text-text-tertiary text-center">
                © 2025 Apple Design System
            </div>
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <NavigationDrawerWithState {...args} />,
  args: {
    isOpen: false,
    position: 'left',
    width: 'md',
    sections: sampleSections,
    showBackdrop: true,
    closeOnBackdropClick: true,
    header: <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-text-primary">Menu</h2>
                    <p className="text-sm text-text-secondary">Smart Coder Labs</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center">
                    <UserIcon />
                </div>
            </div>,
    footer: <Button variant="ghost" size="sm" className="w-full">
                <LogoutIcon /> <span className="ml-2">Sign Out</span>
            </Button>
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <NavigationDrawerWithState {...args} />,
  args: {
    isOpen: false,
    position: 'left',
    width: 'md',
    sections: sampleSections,
    showBackdrop: false,
    closeOnBackdropClick: false
  }
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <NavigationDrawerWithState {...args} />,
  args: {
    isOpen: false,
    position: 'left',
    width: 'md',
    sections: sampleSections,
    showBackdrop: true,
    closeOnBackdropClick: false
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <NavigationDrawerWithState {...args} />,
  args: {
    isOpen: false,
    position: 'left',
    width: 'md',
    sections: [{
      items: [{
        label: 'Home',
        icon: <HomeIcon />,
        active: true
      }, {
        label: 'Profile',
        icon: <UserIcon />
      }, {
        label: 'Settings',
        icon: <SettingsIcon />
      }]
    }],
    showBackdrop: true,
    closeOnBackdropClick: true
  }
}`,...b.parameters?.docs?.source}}};const me=["Default","RightPosition","SmallWidth","LargeWidth","WithHeader","WithFooter","WithHeaderAndFooter","NoBackdrop","PersistentBackdrop","SingleSection"];export{d as Default,u as LargeWidth,g as NoBackdrop,w as PersistentBackdrop,p as RightPosition,b as SingleSection,m as SmallWidth,f as WithFooter,h as WithHeader,x as WithHeaderAndFooter,me as __namedExportsOrder,pe as default};
