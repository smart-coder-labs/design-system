import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C-nBdNCE.js";import{$t as r,Bn as i,I as a,Wt as o,bn as s,dr as c,t as l}from"./lucide-react-DXerBtR-.js";import{n as u,t as d}from"./utils-CcEteFRA.js";import{t as f}from"./jsx-runtime-WZfjI2gv.js";import{s as p,t as m}from"./es-CfCMxUIg.js";var h,g,_,v=e((()=>{h=t(n()),u(),m(),l(),g=f(),_=h.forwardRef(({suggestions:e,onSuggestionClick:t,maxVisible:n=4,variant:r=`default`,className:i,...o},s)=>{let c=e.slice(0,n);return e.length===0?null:(0,g.jsx)(`div`,{ref:s,className:d(`flex flex-wrap gap-2`,r===`compact`&&`gap-1.5`,i),...o,children:c.map((e,n)=>(0,g.jsxs)(p.button,{onClick:()=>t?.(e),className:d(`inline-flex items-center gap-2 px-3 py-1.5 rounded-full`,`bg-surface-secondary border border-border-primary`,`text-sm font-medium text-text-primary`,`hover:bg-surface-tertiary hover:border-border-secondary`,`transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue`,r===`compact`&&`px-2.5 py-1 text-xs`),initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:n*.05},whileHover:{scale:1.05},whileTap:{scale:.95},children:[e.icon||(0,g.jsx)(a,{className:`w-3.5 h-3.5 text-accent-blue`}),(0,g.jsx)(`span`,{children:e.text})]},e.id))})}),_.displayName=`PromptSuggestionChips`,_.__docgenInfo={description:``,methods:[],displayName:`PromptSuggestionChips`,props:{suggestions:{required:!0,tsType:{name:`Array`,elements:[{name:`PromptSuggestion`}],raw:`PromptSuggestion[]`},description:``},onSuggestionClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(suggestion: PromptSuggestion) => void`,signature:{arguments:[{type:{name:`PromptSuggestion`},name:`suggestion`}],return:{name:`void`}}},description:``},maxVisible:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`4`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'compact'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'compact'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{v(),l(),y=f(),b={title:`Forms/PromptSuggestionChips`,component:_,parameters:{layout:`centered`},tags:[`autodocs`]},x=[{id:`1`,text:`Explain quantum computing`,icon:(0,y.jsx)(a,{className:`w-3.5 h-3.5`})},{id:`2`,text:`Write a Python function`,icon:(0,y.jsx)(i,{className:`w-3.5 h-3.5`})},{id:`3`,text:`Generate an image`,icon:(0,y.jsx)(r,{className:`w-3.5 h-3.5`})},{id:`4`,text:`Summarize this document`,icon:(0,y.jsx)(s,{className:`w-3.5 h-3.5`})}],S={args:{suggestions:x,onSuggestionClick:e=>console.log(`Clicked:`,e)}},C={args:{suggestions:x,variant:`compact`,onSuggestionClick:e=>console.log(`Clicked:`,e)}},w={args:{suggestions:[{id:`1`,text:`Get creative ideas`,icon:(0,y.jsx)(o,{className:`w-3.5 h-3.5 text-yellow-500`})},{id:`2`,text:`Write code`,icon:(0,y.jsx)(i,{className:`w-3.5 h-3.5 text-green-500`})},{id:`3`,text:`Create image`,icon:(0,y.jsx)(r,{className:`w-3.5 h-3.5 text-purple-500`})},{id:`4`,text:`Calculate`,icon:(0,y.jsx)(c,{className:`w-3.5 h-3.5 text-blue-500`})}],onSuggestionClick:e=>console.log(`Clicked:`,e)}},T={args:{suggestions:[...x,{id:`5`,text:`Translate text`},{id:`6`,text:`Analyze data`}],maxVisible:3,onSuggestionClick:e=>console.log(`Clicked:`,e)}},E={args:{suggestions:[{id:`1`,text:`Explain quantum computing`},{id:`2`,text:`Write a Python function`},{id:`3`,text:`Generate an image`},{id:`4`,text:`Summarize this document`},{id:`5`,text:`Translate to Spanish`},{id:`6`,text:`Analyze this data`},{id:`7`,text:`Create a presentation`},{id:`8`,text:`Debug my code`}],onSuggestionClick:e=>console.log(`Clicked:`,e)}},D={args:{suggestions:[{id:`1`,text:`Help`},{id:`2`,text:`Code`},{id:`3`,text:`Write`},{id:`4`,text:`Analyze`}],variant:`compact`,onSuggestionClick:e=>console.log(`Clicked:`,e)}},O={args:{suggestions:[{id:`1`,text:`Help me understand the fundamental principles of machine learning`},{id:`2`,text:`Write a comprehensive guide to React hooks and their use cases`},{id:`3`,text:`Generate a detailed business plan for a tech startup`}],onSuggestionClick:e=>console.log(`Clicked:`,e)}},k={args:{suggestions:[],onSuggestionClick:e=>console.log(`Clicked:`,e)}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions: defaultSuggestions,
    onSuggestionClick: suggestion => console.log('Clicked:', suggestion)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions: defaultSuggestions,
    variant: 'compact',
    onSuggestionClick: suggestion => console.log('Clicked:', suggestion)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    suggestions: [],
    onSuggestionClick: suggestion => console.log('Clicked:', suggestion)
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`Compact`,`WithCustomIcons`,`LimitedVisible`,`ManySuggestions`,`ShortSuggestions`,`LongSuggestions`,`Empty`]}))();export{C as Compact,S as Default,k as Empty,T as LimitedVisible,O as LongSuggestions,E as ManySuggestions,D as ShortSuggestions,w as WithCustomIcons,A as __namedExportsOrder,b as default};