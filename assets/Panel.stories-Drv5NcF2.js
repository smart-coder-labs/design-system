import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-CGazvlvx.js";import{c as s}from"./utils-CDN07tui.js";import{m as j}from"./proxy-BNOm_ZMq.js";import{C as R}from"./chevron-down-CG3v-0Pn.js";import{A as q}from"./index-C-eQ3fKV.js";import{B as x}from"./Button-DiLt8not.js";import{S as A}from"./settings-DHlkxKOb.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-juiWZL7b.js";import"./createLucideIcon-BMKVoASg.js";const f=y.forwardRef(({variant:p="default",title:m,subtitle:u,headerActions:v,footer:g,collapsible:b=!1,defaultCollapsed:N=!1,padding:a="md",className:w,children:T,...C},P)=>{const[t,S]=y.useState(N),k={default:"bg-surface-primary border border-border-primary",elevated:"bg-surface-elevated shadow-md",outlined:"bg-transparent border-2 border-border-primary",glass:"bg-surface-glass backdrop-blur-md border border-border-primary/50"},h={none:"",sm:"p-3",md:"p-4",lg:"p-6"},E=m||u||v||b;return e.jsxs("div",{ref:P,className:s("rounded-xl overflow-hidden transition-all",k[p],w),...C,children:[E&&e.jsxs("div",{className:s("flex items-center justify-between border-b border-border-primary",a==="none"?"p-4":h[a]),children:[e.jsxs("div",{className:"flex-1",children:[m&&e.jsx("h3",{className:"text-lg font-semibold text-text-primary",children:m}),u&&e.jsx("p",{className:"text-sm text-text-secondary mt-0.5",children:u})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[v,b&&e.jsx("button",{onClick:()=>S(!t),className:"p-1 rounded-lg hover:bg-surface-secondary transition-colors focus:outline-none","aria-label":t?"Expand":"Collapse",children:e.jsx(j.div,{animate:{rotate:t?-90:0},transition:{duration:.2},children:e.jsx(R,{className:"w-5 h-5 text-text-tertiary"})})})]})]}),e.jsx(q,{initial:!1,children:!t&&e.jsx(j.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.2},children:e.jsx("div",{className:s(h[a]),children:T})})}),g&&!t&&e.jsx("div",{className:s("border-t border-border-primary",a==="none"?"p-4":h[a]),children:g})]})});f.displayName="Panel";f.__docgenInfo={description:"",methods:[],displayName:"Panel",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'elevated' | 'outlined' | 'glass'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'elevated'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'glass'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},headerActions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const U={title:"Surfaces/Panel",component:f,tags:[],argTypes:{variant:{control:"select",options:["default","elevated","outlined","glass"]},padding:{control:"select",options:["none","sm","md","lg"]},collapsible:{control:"boolean"}}},r={args:{title:"Panel Title",children:e.jsx("div",{children:e.jsx("p",{className:"text-text-secondary",children:"This is a basic panel with some content inside. Panels are versatile containers that can hold any type of content."})})}},i={args:{title:"User Settings",subtitle:"Manage your account preferences",children:e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-text-primary",children:"Email notifications"}),e.jsx("input",{type:"checkbox"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-text-primary",children:"Push notifications"}),e.jsx("input",{type:"checkbox"})]})]})}},l={args:{title:"Dashboard",headerActions:e.jsx(x,{variant:"ghost",size:"sm",children:e.jsx(A,{className:"w-4 h-4"})}),children:e.jsx("div",{children:e.jsx("p",{className:"text-text-secondary",children:"Panel with action buttons in the header."})})}},o={args:{title:"Collapsible Panel",subtitle:"Click the arrow to expand/collapse",collapsible:!0,children:e.jsxs("div",{children:[e.jsx("p",{className:"text-text-secondary mb-2",children:"This panel can be collapsed to save space."}),e.jsx("p",{className:"text-text-secondary",children:"The content will smoothly animate when toggling."})]})}},n={args:{title:"Confirmation",children:e.jsx("div",{children:e.jsx("p",{className:"text-text-secondary",children:"Are you sure you want to proceed with this action?"})}),footer:e.jsxs("div",{className:"flex justify-end gap-2",children:[e.jsx(x,{variant:"ghost",size:"sm",children:"Cancel"}),e.jsx(x,{variant:"primary",size:"sm",children:"Confirm"})]})}},c={args:{variant:"elevated",title:"Elevated Panel",children:e.jsx("div",{children:e.jsx("p",{className:"text-text-secondary",children:"This panel has a shadow to appear elevated from the background."})})}},d={args:{variant:"glass",title:"Glass Panel",children:e.jsx("div",{children:e.jsx("p",{className:"text-text-secondary",children:"This panel has a glassmorphism effect with backdrop blur."})})},decorators:[p=>e.jsx("div",{className:"p-8 bg-gradient-to-br from-blue-500 to-purple-600",children:e.jsx(p,{})})]};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Panel Title',
    children: <div>
                <p className="text-text-secondary">
                    This is a basic panel with some content inside. Panels are versatile containers
                    that can hold any type of content.
                </p>
            </div>
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'User Settings',
    subtitle: 'Manage your account preferences',
    children: <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-text-primary">Email notifications</span>
                    <input type="checkbox" />
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-text-primary">Push notifications</span>
                    <input type="checkbox" />
                </div>
            </div>
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Dashboard',
    headerActions: <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
            </Button>,
    children: <div>
                <p className="text-text-secondary">Panel with action buttons in the header.</p>
            </div>
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Collapsible Panel',
    subtitle: 'Click the arrow to expand/collapse',
    collapsible: true,
    children: <div>
                <p className="text-text-secondary mb-2">
                    This panel can be collapsed to save space.
                </p>
                <p className="text-text-secondary">
                    The content will smoothly animate when toggling.
                </p>
            </div>
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Confirmation',
    children: <div>
                <p className="text-text-secondary">
                    Are you sure you want to proceed with this action?
                </p>
            </div>,
    footer: <div className="flex justify-end gap-2">
                <Button variant="ghost" size="sm">Cancel</Button>
                <Button variant="primary" size="sm">Confirm</Button>
            </div>
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'elevated',
    title: 'Elevated Panel',
    children: <div>
                <p className="text-text-secondary">
                    This panel has a shadow to appear elevated from the background.
                </p>
            </div>
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'glass',
    title: 'Glass Panel',
    children: <div>
                <p className="text-text-secondary">
                    This panel has a glassmorphism effect with backdrop blur.
                </p>
            </div>
  },
  decorators: [Story => <div className="p-8 bg-gradient-to-br from-blue-500 to-purple-600">
                <Story />
            </div>]
}`,...d.parameters?.docs?.source}}};const O=["Default","WithSubtitle","WithHeaderActions","Collapsible","WithFooter","Elevated","Glass"];export{o as Collapsible,r as Default,c as Elevated,d as Glass,n as WithFooter,l as WithHeaderActions,i as WithSubtitle,O as __namedExportsOrder,U as default};
