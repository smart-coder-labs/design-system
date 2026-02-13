import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as S}from"./iframe-D5DOIGW8.js";import{c as m}from"./utils-CDN07tui.js";import{m as v}from"./proxy-BbTJ7w1C.js";import"./preload-helper-PPVm8Dsz.js";const p=S.forwardRef(({items:u,max:d=5,size:h="md",showTooltip:y=!0,className:b,...w},j)=>{const g={xs:"w-6 h-6 text-xs",sm:"w-8 h-8 text-sm",md:"w-10 h-10 text-base",lg:"w-12 h-12 text-lg",xl:"w-14 h-14 text-xl"},x=u.slice(0,d),f=u.length-d,A=e=>{const r=e.split(" ");return r.length>=2?`${r[0][0]}${r[1][0]}`.toUpperCase():e.slice(0,2).toUpperCase()};return a.jsxs("div",{ref:j,className:m("flex items-center -space-x-2",b),...w,children:[x.map((e,r)=>a.jsxs(v.div,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{delay:r*.05},className:"relative group",children:[a.jsx("div",{className:m("relative inline-flex items-center justify-center rounded-full border-2 border-surface-primary bg-surface-secondary overflow-hidden ring-0 hover:ring-2 hover:ring-accent-blue/20 transition-all hover:z-10",g[h]),children:e.src?a.jsx("img",{src:e.src,alt:e.alt,className:"w-full h-full object-cover"}):a.jsx("span",{className:"font-medium text-text-primary",children:e.fallback||A(e.alt)})}),y&&a.jsx("div",{className:"absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-surface-elevated border border-border-primary rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20",children:a.jsx("span",{className:"text-xs text-text-primary",children:e.alt})})]},r)),f>0&&a.jsxs(v.div,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{delay:x.length*.05},className:m("relative inline-flex items-center justify-center rounded-full border-2 border-surface-primary bg-surface-tertiary font-medium text-text-secondary hover:bg-surface-secondary hover:ring-2 hover:ring-accent-blue/20 transition-all cursor-default hover:z-10",g[h]),children:["+",f]})]})});p.displayName="AvatarGroup";p.__docgenInfo={description:"",methods:[],displayName:"AvatarGroup",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AvatarGroupItem"}],raw:"AvatarGroupItem[]"},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},showTooltip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const D={title:"Data Display/AvatarGroup",component:p,tags:[],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},max:{control:"number"},showTooltip:{control:"boolean"}}},s=[{alt:"John Doe",src:"https://i.pravatar.cc/150?img=1"},{alt:"Jane Smith",src:"https://i.pravatar.cc/150?img=2"},{alt:"Bob Johnson",src:"https://i.pravatar.cc/150?img=3"},{alt:"Alice Williams",src:"https://i.pravatar.cc/150?img=4"},{alt:"Charlie Brown",src:"https://i.pravatar.cc/150?img=5"},{alt:"Diana Prince",src:"https://i.pravatar.cc/150?img=6"},{alt:"Eve Anderson",src:"https://i.pravatar.cc/150?img=7"},{alt:"Frank Miller",src:"https://i.pravatar.cc/150?img=8"}],t={args:{items:s}},o={args:{items:s,max:3}},l={args:{items:[{alt:"John Doe"},{alt:"Jane Smith"},{alt:"Bob Johnson"},{alt:"Alice Williams"},{alt:"Charlie Brown"}]}},i={args:{items:s.slice(0,5),size:"sm"}},n={args:{items:s.slice(0,5),size:"lg"}},c={args:{items:s.slice(0,5),showTooltip:!1}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleUsers
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleUsers,
    max: 3
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      alt: 'John Doe'
    }, {
      alt: 'Jane Smith'
    }, {
      alt: 'Bob Johnson'
    }, {
      alt: 'Alice Williams'
    }, {
      alt: 'Charlie Brown'
    }]
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleUsers.slice(0, 5),
    size: 'sm'
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleUsers.slice(0, 5),
    size: 'lg'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleUsers.slice(0, 5),
    showTooltip: false
  }
}`,...c.parameters?.docs?.source}}};const U=["Default","WithMax","WithFallbacks","Small","Large","WithoutTooltips"];export{t as Default,n as Large,i as Small,l as WithFallbacks,o as WithMax,c as WithoutTooltips,U as __namedExportsOrder,D as default};
