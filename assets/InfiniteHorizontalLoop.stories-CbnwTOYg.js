import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as s}from"./utils-CDN07tui.js";import{m as x}from"./proxy-BNOm_ZMq.js";import"./iframe-CGazvlvx.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-juiWZL7b.js";function i({items:e,speed:n=20,direction:l="left",gap:p="gap-8",className:c,...m}){const u=[...e,...e],f=l==="left";return t.jsx("div",{className:s("relative w-full overflow-hidden flex",c),...m,children:t.jsx(x.div,{className:s("flex whitespace-nowrap items-center shrink-0 w-max",p),animate:{x:f?["0%","-50%"]:["-50%","0%"]},transition:{duration:n,ease:"linear",repeat:1/0},style:{willChange:"transform"},children:u.map((o,g)=>t.jsx("div",{className:"flex-shrink-0",children:o},`${g}-${typeof o=="string"?o:"item"}`))})})}i.__docgenInfo={description:"",methods:[],displayName:"InfiniteHorizontalLoop",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""},speed:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:"",defaultValue:{value:'"left"',computed:!1}},gap:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"gap-8"',computed:!1}}}};const I={title:"UI/InfiniteHorizontalLoop",component:i,parameters:{layout:"padded"},tags:["autodocs"]},d=["React","TypeScript","Tailwind","Framer Motion","Next.js","Vite","Storybook","Radix UI","Zod","Jest"],h=d.map(e=>t.jsx("div",{className:"px-6 py-3 bg-neutral-900 text-zinc-900 dark:text-zinc-50 rounded-full font-medium text-lg shadow-sm border border-neutral-800",children:e},e)),r={decorators:[e=>t.jsx("div",{className:"bg-neutral-950 p-20 rounded-xl overflow-hidden",children:t.jsx(e,{})})],args:{items:h,speed:30,gap:"gap-6"}},a={decorators:[e=>t.jsx("div",{className:"bg-white p-20 rounded-xl overflow-hidden border",children:t.jsx(e,{})})],args:{items:d.map(e=>t.jsx("div",{className:"px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-semibold border",children:e},e)),speed:25,direction:"right",gap:"gap-4"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="bg-neutral-950 p-20 rounded-xl overflow-hidden">
        <Story />
      </div>],
  args: {
    items: TextItems,
    speed: 30,
    gap: 'gap-6'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="bg-white p-20 rounded-xl overflow-hidden border">
        <Story />
      </div>],
  args: {
    items: techStack.map(item => <div key={item} className="px-6 py-3 bg-neutral-100 text-neutral-900 rounded-lg font-semibold border">
        {item}
      </div>),
    speed: 25,
    direction: 'right',
    gap: 'gap-4'
  }
}`,...a.parameters?.docs?.source}}};const S=["Default","OppositeDirection"];export{r as Default,a as OppositeDirection,S as __namedExportsOrder,I as default};
