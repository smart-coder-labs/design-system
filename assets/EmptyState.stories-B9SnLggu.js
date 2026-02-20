import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as d}from"./iframe-BMG7cCGY.js";import{m as h}from"./proxy-BFHmY9N3.js";import{B as n}from"./Button-b5E49-AF.js";import{F as f}from"./folder-open-CBWqrguf.js";import{P as g}from"./plus-BZ3k_EWb.js";import{c as p}from"./createLucideIcon-11Koirjv.js";import{S as x}from"./search-Bhuei--_.js";import"./preload-helper-PPVm8Dsz.js";const v=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]],N=p("file-question-mark",v);const j=[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]],S=p("inbox",j),c=({title:u,description:l,icon:t,action:m,className:y=""})=>e.jsxs(h.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.4,ease:[.16,1,.3,1]},className:`
        flex flex-col items-center justify-center text-center p-8
        bg-surface-primary/50 rounded-2xl
        ${y}
      `.trim().replace(/\s+/g," "),children:[t&&e.jsx("div",{className:"mb-6 text-text-tertiary",children:d.isValidElement(t)?d.cloneElement(t,{size:48,strokeWidth:1.5,className:"w-12 h-12"}):t}),e.jsx("h3",{className:"text-xl font-semibold text-text-primary mb-2",children:u}),l&&e.jsx("p",{className:"text-text-secondary max-w-sm mb-8 leading-relaxed",children:l}),m&&e.jsx("div",{className:"mt-2",children:m})]});c.displayName="EmptyState";c.__docgenInfo={description:"",methods:[],displayName:"EmptyState",props:{title:{required:!0,tsType:{name:"string"},description:"The main title of the empty state"},description:{required:!1,tsType:{name:"string"},description:"A descriptive text explaining the empty state"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"An icon or illustration to display"},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional action element (e.g., a Button)"},className:{required:!1,tsType:{name:"string"},description:"Custom class name for the container",defaultValue:{value:"''",computed:!1}}}};const A={title:"Surfaces/EmptyState",component:c,tags:[],argTypes:{title:{control:"text"},description:{control:"text"}},parameters:{layout:"centered"}},a={args:{icon:e.jsx(f,{}),title:"No items found",description:"There are no items to display at this time. Create a new item to get started."}},o={args:{icon:e.jsx(S,{}),title:"Your inbox is empty",description:"All caught up! You have no new messages.",action:e.jsx(n,{variant:"primary",leftIcon:e.jsx(g,{size:16}),children:"Compose Message"})}},s={args:{icon:e.jsx(x,{}),title:"No results found",description:"We couldn't find anything matching your search. Try adjusting your filters.",action:e.jsx(n,{variant:"secondary",children:"Clear Filters"})}},r={args:{title:"No Data",description:"Data is not available yet."}},i={args:{icon:e.jsx(N,{}),title:"File not found",description:"The file you are looking for has been moved or deleted.",action:e.jsxs("div",{className:"flex gap-2",children:[e.jsx(n,{variant:"secondary",children:"Go Back"}),e.jsx(n,{variant:"primary",children:"Home"})]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FolderOpen />,
    title: 'No items found',
    description: 'There are no items to display at this time. Create a new item to get started.'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Inbox />,
    title: 'Your inbox is empty',
    description: 'All caught up! You have no new messages.',
    action: <Button variant="primary" leftIcon={<Plus size={16} />}>
                Compose Message
            </Button>
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <Search />,
    title: 'No results found',
    description: 'We couldn\\'t find anything matching your search. Try adjusting your filters.',
    action: <Button variant="secondary">
                Clear Filters
            </Button>
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'No Data',
    description: 'Data is not available yet.'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <FileQuestion />,
    title: 'File not found',
    description: 'The file you are looking for has been moved or deleted.',
    action: <div className="flex gap-2">
                <Button variant="secondary">Go Back</Button>
                <Button variant="primary">Home</Button>
            </div>
  }
}`,...i.parameters?.docs?.source}}};const E=["Default","WithAction","SearchResults","Minimal","CustomIcon"];export{i as CustomIcon,a as Default,r as Minimal,s as SearchResults,o as WithAction,E as __namedExportsOrder,A as default};
