import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as z}from"./iframe-CGazvlvx.js";import{c as y}from"./utils-CDN07tui.js";import{S as j}from"./Spinner-Nh3MRrN9.js";import{a as B,T as P}from"./Tooltip-5Kix1qp9.js";import{m as I}from"./proxy-BNOm_ZMq.js";import{P as r}from"./plus-4oraFD5a.js";import{S as L}from"./settings-DHlkxKOb.js";import{B as E}from"./bell-BXSGJHzV.js";import{T as N}from"./trash-2-cbMUYGm4.js";import{S as q}from"./search-D6Ssf2h5.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-eQ3fKV.js";import"./resolve-elements-juiWZL7b.js";import"./createLucideIcon-BMKVoASg.js";const a=z.forwardRef(({icon:x,variant:d="secondary",size:p="md",isLoading:m=!1,tooltip:u,className:h,disabled:g,...f},v)=>{const S={primary:"bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive shadow-sm",secondary:"bg-surface-secondary text-text-primary hover:bg-surface-tertiary active:bg-surface-tertiary/80 border border-border-primary",tertiary:"bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary",ghost:"bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary/50",danger:"bg-status-error/10 text-status-error hover:bg-status-error/20"},w={xs:"w-6 h-6 p-1",sm:"w-8 h-8 p-1.5",md:"w-10 h-10 p-2",lg:"w-12 h-12 p-2.5",xl:"w-14 h-14 p-3"},T={xs:"w-3.5 h-3.5",sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6",xl:"w-7 h-7"},b=e.jsx(I.button,{ref:v,whileTap:{scale:.92},disabled:g||m,className:y("relative inline-flex items-center justify-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer",S[d],w[p],(g||m)&&"opacity-50 cursor-not-allowed",h),...f,children:m?e.jsx(j,{size:"sm",color:d==="primary"?"white":"blue"}):e.jsx(x,{className:y(T[p])})});return u?e.jsx(B,{children:e.jsx(P,{content:u,children:b})}):b});a.displayName="IconButton";a.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'secondary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},tooltip:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!0,tsType:{name:"string"},description:""}},composes:["Omit"]};const Q={title:"Buttons/IconButton",component:a,tags:[],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary","ghost","danger"]},size:{control:"select",options:["xs","sm","md","lg","xl"]},isLoading:{control:"boolean"},disabled:{control:"boolean"}}},t={args:{icon:r,variant:"primary","aria-label":"Add item"}},s={args:{icon:L,variant:"secondary","aria-label":"Settings"}},o={args:{icon:E,variant:"ghost","aria-label":"Notifications"}},i={args:{icon:N,variant:"danger","aria-label":"Delete"}},n={args:{icon:q,variant:"secondary",tooltip:"Search database","aria-label":"Search"}},l={args:{icon:r,variant:"primary",isLoading:!0,"aria-label":"Loading"}},c={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(a,{icon:r,size:"xs","aria-label":"Extra Small"}),e.jsx(a,{icon:r,size:"sm","aria-label":"Small"}),e.jsx(a,{icon:r,size:"md","aria-label":"Medium"}),e.jsx(a,{icon:r,size:"lg","aria-label":"Large"}),e.jsx(a,{icon:r,size:"xl","aria-label":"Extra Large"})]})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Plus,
    variant: 'primary',
    "aria-label": "Add item"
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Settings,
    variant: 'secondary',
    "aria-label": "Settings"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Bell,
    variant: 'ghost',
    "aria-label": "Notifications"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Trash2,
    variant: 'danger',
    "aria-label": "Delete"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Search,
    variant: 'secondary',
    tooltip: 'Search database',
    "aria-label": "Search"
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Plus,
    variant: 'primary',
    isLoading: true,
    "aria-label": "Loading"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
            <IconButton icon={Plus} size="xs" aria-label="Extra Small" />
            <IconButton icon={Plus} size="sm" aria-label="Small" />
            <IconButton icon={Plus} size="md" aria-label="Medium" />
            <IconButton icon={Plus} size="lg" aria-label="Large" />
            <IconButton icon={Plus} size="xl" aria-label="Extra Large" />
        </div>
}`,...c.parameters?.docs?.source}}};const U=["Primary","Secondary","Ghost","Danger","WithTooltip","Loading","Sizes"];export{i as Danger,o as Ghost,l as Loading,t as Primary,s as Secondary,c as Sizes,n as WithTooltip,U as __namedExportsOrder,Q as default};
