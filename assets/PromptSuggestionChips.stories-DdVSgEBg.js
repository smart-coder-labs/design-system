import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as j}from"./iframe-D5DOIGW8.js";import{c as p}from"./utils-CDN07tui.js";import{m as M}from"./proxy-BbTJ7w1C.js";import{c as x}from"./createLucideIcon-DOQ0Nu6C.js";import{C as h}from"./code-C5U4xjM8.js";import{I as y}from"./image-gi5NRQ1W.js";import{F as z}from"./file-text-DeIEJTcc.js";import{L as P}from"./lightbulb-DrOhyl8k.js";import"./preload-helper-PPVm8Dsz.js";const T=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],W=x("calculator",T);const q=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],C=x("sparkles",q),u=j.forwardRef(({suggestions:e,onSuggestionClick:f,maxVisible:k=4,variant:m="default",className:S,...b},w)=>{const v=e.slice(0,k);return e.length===0?null:t.jsx("div",{ref:w,className:p("flex flex-wrap gap-2",m==="compact"&&"gap-1.5",S),...b,children:v.map((s,N)=>t.jsxs(M.button,{onClick:()=>f?.(s),className:p("inline-flex items-center gap-2 px-3 py-1.5 rounded-full","bg-surface-secondary border border-border-primary","text-sm font-medium text-text-primary","hover:bg-surface-tertiary hover:border-border-secondary","transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue",m==="compact"&&"px-2.5 py-1 text-xs"),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:N*.05},whileHover:{scale:1.05},whileTap:{scale:.95},children:[s.icon||t.jsx(C,{className:"w-3.5 h-3.5 text-accent-blue"}),t.jsx("span",{children:s.text})]},s.id))})});u.displayName="PromptSuggestionChips";u.__docgenInfo={description:"",methods:[],displayName:"PromptSuggestionChips",props:{suggestions:{required:!0,tsType:{name:"Array",elements:[{name:"PromptSuggestion"}],raw:"PromptSuggestion[]"},description:""},onSuggestionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(suggestion: PromptSuggestion) => void",signature:{arguments:[{type:{name:"PromptSuggestion"},name:"suggestion"}],return:{name:"void"}}},description:""},maxVisible:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Components/PromptSuggestionChips",component:u,parameters:{layout:"centered"},tags:["autodocs"]},d=[{id:"1",text:"Explain quantum computing",icon:t.jsx(C,{className:"w-3.5 h-3.5"})},{id:"2",text:"Write a Python function",icon:t.jsx(h,{className:"w-3.5 h-3.5"})},{id:"3",text:"Generate an image",icon:t.jsx(y,{className:"w-3.5 h-3.5"})},{id:"4",text:"Summarize this document",icon:t.jsx(z,{className:"w-3.5 h-3.5"})}],n={args:{suggestions:d,onSuggestionClick:e=>console.log("Clicked:",e)}},o={args:{suggestions:d,variant:"compact",onSuggestionClick:e=>console.log("Clicked:",e)}},a={args:{suggestions:[{id:"1",text:"Get creative ideas",icon:t.jsx(P,{className:"w-3.5 h-3.5 text-yellow-500"})},{id:"2",text:"Write code",icon:t.jsx(h,{className:"w-3.5 h-3.5 text-green-500"})},{id:"3",text:"Create image",icon:t.jsx(y,{className:"w-3.5 h-3.5 text-purple-500"})},{id:"4",text:"Calculate",icon:t.jsx(W,{className:"w-3.5 h-3.5 text-blue-500"})}],onSuggestionClick:e=>console.log("Clicked:",e)}},i={args:{suggestions:[...d,{id:"5",text:"Translate text"},{id:"6",text:"Analyze data"}],maxVisible:3,onSuggestionClick:e=>console.log("Clicked:",e)}},r={args:{suggestions:[{id:"1",text:"Explain quantum computing"},{id:"2",text:"Write a Python function"},{id:"3",text:"Generate an image"},{id:"4",text:"Summarize this document"},{id:"5",text:"Translate to Spanish"},{id:"6",text:"Analyze this data"},{id:"7",text:"Create a presentation"},{id:"8",text:"Debug my code"}],onSuggestionClick:e=>console.log("Clicked:",e)}},c={args:{suggestions:[{id:"1",text:"Help"},{id:"2",text:"Code"},{id:"3",text:"Write"},{id:"4",text:"Analyze"}],variant:"compact",onSuggestionClick:e=>console.log("Clicked:",e)}},l={args:{suggestions:[{id:"1",text:"Help me understand the fundamental principles of machine learning"},{id:"2",text:"Write a comprehensive guide to React hooks and their use cases"},{id:"3",text:"Generate a detailed business plan for a tech startup"}],onSuggestionClick:e=>console.log("Clicked:",e)}},g={args:{suggestions:[],onSuggestionClick:e=>console.log("Clicked:",e)}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions: defaultSuggestions,
    onSuggestionClick: suggestion => console.log('Clicked:', suggestion)
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions: defaultSuggestions,
    variant: 'compact',
    onSuggestionClick: suggestion => console.log('Clicked:', suggestion)
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions: [{
      id: '1',
      text: 'Get creative ideas',
      icon: <Lightbulb className="w-3.5 h-3.5 text-yellow-500" />
    }, {
      id: '2',
      text: 'Write code',
      icon: <Code className="w-3.5 h-3.5 text-green-500" />
    }, {
      id: '3',
      text: 'Create image',
      icon: <Image className="w-3.5 h-3.5 text-purple-500" />
    }, {
      id: '4',
      text: 'Calculate',
      icon: <Calculator className="w-3.5 h-3.5 text-blue-500" />
    }],
    onSuggestionClick: suggestion => console.log('Clicked:', suggestion)
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions: [...defaultSuggestions, {
      id: '5',
      text: 'Translate text'
    }, {
      id: '6',
      text: 'Analyze data'
    }],
    maxVisible: 3,
    onSuggestionClick: suggestion => console.log('Clicked:', suggestion)
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions: [{
      id: '1',
      text: 'Explain quantum computing'
    }, {
      id: '2',
      text: 'Write a Python function'
    }, {
      id: '3',
      text: 'Generate an image'
    }, {
      id: '4',
      text: 'Summarize this document'
    }, {
      id: '5',
      text: 'Translate to Spanish'
    }, {
      id: '6',
      text: 'Analyze this data'
    }, {
      id: '7',
      text: 'Create a presentation'
    }, {
      id: '8',
      text: 'Debug my code'
    }],
    onSuggestionClick: suggestion => console.log('Clicked:', suggestion)
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions: [{
      id: '1',
      text: 'Help'
    }, {
      id: '2',
      text: 'Code'
    }, {
      id: '3',
      text: 'Write'
    }, {
      id: '4',
      text: 'Analyze'
    }],
    variant: 'compact',
    onSuggestionClick: suggestion => console.log('Clicked:', suggestion)
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions: [{
      id: '1',
      text: 'Help me understand the fundamental principles of machine learning'
    }, {
      id: '2',
      text: 'Write a comprehensive guide to React hooks and their use cases'
    }, {
      id: '3',
      text: 'Generate a detailed business plan for a tech startup'
    }],
    onSuggestionClick: suggestion => console.log('Clicked:', suggestion)
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions: [],
    onSuggestionClick: suggestion => console.log('Clicked:', suggestion)
  }
}`,...g.parameters?.docs?.source}}};const O=["Default","Compact","WithCustomIcons","LimitedVisible","ManySuggestions","ShortSuggestions","LongSuggestions","Empty"];export{o as Compact,n as Default,g as Empty,i as LimitedVisible,l as LongSuggestions,r as ManySuggestions,c as ShortSuggestions,a as WithCustomIcons,O as __namedExportsOrder,F as default};
