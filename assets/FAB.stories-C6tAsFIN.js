import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-vYzePaRW.js";import{r as A}from"./index-BJIm5mAp.js";import{c as u}from"./utils-CDN07tui.js";import{A as P}from"./index-4cmsJ5fh.js";import{m as q}from"./proxy-DMGrdN83.js";import{P as f}from"./plus-D-jPqI7z.js";import{P as z}from"./pen-line-2Xc4rrwj.js";import{S as B}from"./share-2-D6ZMFRDd.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DweI-fs8.js";import"./createLucideIcon-Ckxz52bH.js";const n=i.forwardRef(({icon:t=f,label:l,variant:y="primary",size:c="md",position:m="bottom-right",show:h=!0,className:g,disabled:d,...x},v)=>{const[b,w]=i.useState(!1);i.useEffect(()=>{w(!0)},[]);const j={primary:"bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive shadow-lg hover:shadow-xl",secondary:"bg-surface-elevated text-text-primary hover:bg-surface-secondary active:bg-surface-tertiary border border-border-primary shadow-lg hover:shadow-xl",tertiary:"bg-surface-tertiary text-text-primary hover:bg-surface-secondary shadow-md hover:shadow-lg"},S={sm:"h-10 min-w-[2.5rem] px-0",md:"h-12 min-w-[3rem] px-0",lg:"h-14 min-w-[3.5rem] px-0"},E={sm:"w-5 h-5",md:"w-6 h-6",lg:"w-7 h-7"},N={none:"","bottom-right":"fixed bottom-6 right-6 z-sticky","bottom-left":"fixed bottom-6 left-6 z-sticky","top-right":"fixed top-6 right-6 z-sticky","top-left":"fixed top-6 left-6 z-sticky"},s=!!l,T=m!=="none",p=e.jsx(P,{children:h&&e.jsxs(q.button,{ref:v,initial:{scale:0,opacity:0,rotate:-45},animate:{scale:1,opacity:1,rotate:0},exit:{scale:0,opacity:0,rotate:45},whileHover:{scale:1.05},whileTap:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},disabled:d,className:u("flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20",j[y],S[c],N[m],s?"px-5 rounded-full aspect-auto":"aspect-square",d&&"opacity-50 cursor-not-allowed shadow-none",g),...x,children:[e.jsx(t,{className:u(E[c],s&&"mr-2")}),s&&e.jsx("span",{className:"font-medium whitespace-nowrap",children:l})]})});return T&&b?A.createPortal(p,document.body):p});n.displayName="FAB";n.__docgenInfo={description:"",methods:[],displayName:"FAB",props:{icon:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"Plus",computed:!0}},label:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'bottom-right' | 'bottom-left' | 'top-right' | 'top-left' | 'none'",elements:[{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'bottom-right'",computed:!1}},show:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["Omit"]};const G={title:"Buttons/FAB",component:n,tags:[],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"select",options:["sm","md","lg"]},position:{control:"select",options:["none","bottom-right","bottom-left","top-right","top-left"]},show:{control:"boolean"}},parameters:{layout:"fullscreen"}},o={args:{icon:f,position:"none","aria-label":"Add"},decorators:[t=>e.jsx("div",{className:"p-12 flex justify-center",children:e.jsx(t,{})})]},r={args:{icon:z,label:"Compose",position:"none"},decorators:[t=>e.jsx("div",{className:"p-12 flex justify-center",children:e.jsx(t,{})})]},a={args:{icon:B,variant:"secondary",position:"none"},decorators:[t=>e.jsx("div",{className:"p-12 flex justify-center",children:e.jsx(t,{})})]};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Plus,
    position: 'none',
    "aria-label": "Add"
  },
  decorators: [Story => <div className="p-12 flex justify-center">
                <Story />
            </div>]
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Edit3,
    label: 'Compose',
    position: 'none'
  },
  decorators: [Story => <div className="p-12 flex justify-center">
                <Story />
            </div>]
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Share2,
    variant: 'secondary',
    position: 'none'
  },
  decorators: [Story => <div className="p-12 flex justify-center">
                <Story />
            </div>]
}`,...a.parameters?.docs?.source}}};const J=["Default","Extended","Secondary"];export{o as Default,r as Extended,a as Secondary,J as __namedExportsOrder,G as default};
