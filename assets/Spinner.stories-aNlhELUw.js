import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as r}from"./Spinner-Nh3MRrN9.js";import"./iframe-CGazvlvx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./proxy-BNOm_ZMq.js";import"./resolve-elements-juiWZL7b.js";const p={title:"Feedback/Spinner",component:r,tags:[],argTypes:{size:{control:"select",options:["sm","md","lg"]},color:{control:"select",options:["default","white","blue"]}}},s={args:{size:"md",color:"default"}},o={render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(r,{size:"sm"}),e.jsx(r,{size:"md"}),e.jsx(r,{size:"lg"})]})},n={render:()=>e.jsxs("div",{className:"flex items-center gap-4 p-4 bg-surface-secondary rounded-lg",children:[e.jsx(r,{color:"default"}),e.jsx(r,{color:"blue"}),e.jsx("div",{className:"bg-black p-2 rounded",children:e.jsx(r,{color:"white"})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'default'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
        </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 p-4 bg-surface-secondary rounded-lg">
            <Spinner color="default" />
            <Spinner color="blue" />
            <div className="bg-black p-2 rounded">
                <Spinner color="white" />
            </div>
        </div>
}`,...n.parameters?.docs?.source}}};const u=["Default","Sizes","Colors"];export{n as Colors,s as Default,o as Sizes,u as __namedExportsOrder,p as default};
