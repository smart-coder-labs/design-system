import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DL3IwwZJ.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{s as o,t as s}from"./es-CnNtA5mJ.js";var c,l,u,d=e((()=>{c=t(n()),r(),l=a(),s(),u=c.forwardRef(({variant:e=`dots`,size:t=`md`,color:n=`rgb(0, 122, 255)`,message:r=``,className:a,...s},c)=>{let u={sm:{dot:`w-1.5 h-1.5`,gap:`gap-1`,text:`text-xs`},md:{dot:`w-2 h-2`,gap:`gap-1.5`,text:`text-sm`},lg:{dot:`w-2.5 h-2.5`,gap:`gap-2`,text:`text-base`}}[t],d=()=>(0,l.jsx)(`div`,{className:i(`flex items-center`,u.gap),children:[0,1,2].map(e=>(0,l.jsx)(o.div,{className:i(`rounded-full`,u.dot),style:{backgroundColor:n},animate:{scale:[1,1.2,1],opacity:[.5,1,.5]},transition:{duration:1.2,repeat:1/0,delay:e*.2,ease:`easeInOut`}},e))}),f=()=>(0,l.jsx)(o.div,{className:i(`rounded-full`,u.dot),style:{backgroundColor:n},animate:{scale:[1,1.5,1],opacity:[1,.5,1]},transition:{duration:1.5,repeat:1/0,ease:`easeInOut`}}),p=()=>(0,l.jsx)(`div`,{className:i(`flex items-end`,u.gap),style:{height:`16px`},children:[0,1,2,3].map(e=>(0,l.jsx)(o.div,{className:`rounded-full`,style:{width:`3px`,backgroundColor:n},animate:{height:[`8px`,`16px`,`8px`],opacity:[.5,1,.5]},transition:{duration:1,repeat:1/0,delay:e*.15,ease:`easeInOut`}},e))}),m=()=>{switch(e){case`dots`:return(0,l.jsx)(d,{});case`pulse`:return(0,l.jsx)(f,{});case`wave`:return(0,l.jsx)(p,{});default:return(0,l.jsx)(d,{})}};return(0,l.jsxs)(`div`,{ref:c,className:i(`flex items-center gap-3`,a),...s,children:[m(),r&&(0,l.jsx)(`span`,{className:i(`text-text-secondary`,u.text),children:r})]})}),u.displayName=`AIThinkingIndicator`,u.__docgenInfo={description:``,methods:[],displayName:`AIThinkingIndicator`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'dots' | 'pulse' | 'wave'`,elements:[{name:`literal`,value:`'dots'`},{name:`literal`,value:`'pulse'`},{name:`literal`,value:`'wave'`}]},description:``,defaultValue:{value:`'dots'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},color:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'rgb(0, 122, 255)'`,computed:!1}},message:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),f,p,m,h,g,_,v,y,b,x,S;e((()=>{d(),f={title:`Feedback/AIThinkingIndicator`,component:u,tags:[`autodocs`]},p={args:{variant:`dots`,size:`md`,message:``}},m={args:{variant:`dots`,size:`sm`}},h={args:{variant:`dots`,size:`lg`,message:`Thinking...`}},g={args:{variant:`pulse`,size:`md`}},_={args:{variant:`pulse`,size:`lg`,message:`Analyzing your data...`}},v={args:{variant:`wave`,size:`md`}},y={args:{variant:`wave`,size:`sm`}},b={args:{variant:`dots`,size:`md`,color:`#34C759`,message:`Processing...`}},x={args:{variant:`wave`,size:`lg`,message:`Generating your financial report...`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dots',
    size: 'md',
    message: ''
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dots',
    size: 'sm'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dots',
    size: 'lg',
    message: 'Thinking...'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pulse',
    size: 'md'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'pulse',
    size: 'lg',
    message: 'Analyzing your data...'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'wave',
    size: 'md'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'wave',
    size: 'sm'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dots',
    size: 'md',
    color: '#34C759',
    message: 'Processing...'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'wave',
    size: 'lg',
    message: 'Generating your financial report...'
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`DotsSmall`,`DotsLarge`,`PulseVariant`,`PulseLarge`,`WaveVariant`,`WaveSmall`,`WithCustomColor`,`WithMessage`]}))();export{p as Default,h as DotsLarge,m as DotsSmall,_ as PulseLarge,g as PulseVariant,y as WaveSmall,v as WaveVariant,b as WithCustomColor,x as WithMessage,S as __namedExportsOrder,f as default};