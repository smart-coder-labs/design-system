import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Cg3U4lNX.js";import{M as r,t as i}from"./lucide-react-C65k9PFF.js";import{n as a,t as o}from"./utils-ijcE-ZHT.js";import{t as s}from"./jsx-runtime-DaLCRA3n.js";import{s as c,t as l}from"./es-COp4ZgMz.js";import{t as u}from"./Label-CeTZljQe.js";import{t as d}from"./Label-BRwlYhtc.js";var f,p,m,h=e((()=>{f=t(n()),i(),a(),l(),d(),p=s(),m=({value:e=0,onChange:t,max:n=5,label:i,error:a,helperText:s,disabled:l=!1,readOnly:d=!1,size:m=`md`,className:h})=>{let[g,_]=(0,f.useState)(null),v={sm:`w-4 h-4`,md:`w-6 h-6`,lg:`w-8 h-8`},y=e=>{!l&&!d&&_(e)},b=()=>{!l&&!d&&_(null)},x=e=>{!l&&!d&&t&&t(e)};return(0,p.jsxs)(`div`,{className:o(`space-y-2`,h),children:[i&&(0,p.jsx)(u,{className:`mb-2`,children:i}),(0,p.jsx)(`div`,{className:`flex items-center gap-1`,onMouseLeave:b,children:Array.from({length:n}).map((t,n)=>{let i=n+1,a=(g===null?e:g)>=i,s=g!==null&&g>=i;return(0,p.jsx)(`button`,{type:`button`,onClick:()=>x(i),onMouseEnter:()=>y(i),disabled:l||d,className:o(`focus:outline-none transition-transform active:scale-95`,l||d?`cursor-default`:`cursor-pointer hover:scale-110`,l&&`opacity-50`),children:(0,p.jsx)(c.div,{initial:!1,animate:{scale:s?1.1:1},children:(0,p.jsx)(r,{className:o(v[m],`transition-colors duration-200`,a?`fill-yellow-400 text-yellow-400`:`fill-transparent text-text-tertiary`)})})},i)})}),(a||s)&&(0,p.jsx)(c.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},className:o(`text-sm`,a?`text-status-error`:`text-text-secondary`),children:a||s})]})},m.displayName=`RatingInput`,m.__docgenInfo={description:``,methods:[],displayName:`RatingInput`,props:{value:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => void`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`void`}}},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},readOnly:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),g,_,v,y,b,x,S,C,w,T;e((()=>{h(),g={title:`Forms/RatingInput`,component:m,tags:[`autodocs`]},_={args:{value:0,onChange:e=>console.log(`Rating:`,e)}},v={args:{value:3,onChange:e=>console.log(`Rating:`,e)}},y={args:{value:5,onChange:e=>console.log(`Rating:`,e)}},b={args:{value:4,label:`Rate your experience`,onChange:e=>console.log(`Rating:`,e)}},x={args:{value:4,readOnly:!0}},S={args:{value:7,max:10,onChange:e=>console.log(`Rating:`,e)}},C={args:{value:3,disabled:!0,onChange:e=>console.log(`Rating:`,e)}},w={args:{value:0,label:`Rating`,error:`Please select a rating`,onChange:e=>console.log(`Rating:`,e)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    onChange: (val: number) => console.log('Rating:', val)
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    onChange: (val: number) => console.log('Rating:', val)
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 5,
    onChange: (val: number) => console.log('Rating:', val)
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4,
    label: 'Rate your experience',
    onChange: (val: number) => console.log('Rating:', val)
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 4,
    readOnly: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    value: 7,
    max: 10,
    onChange: (val: number) => console.log('Rating:', val)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    disabled: true,
    onChange: (val: number) => console.log('Rating:', val)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    label: 'Rating',
    error: 'Please select a rating',
    onChange: (val: number) => console.log('Rating:', val)
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`ThreeStars`,`MaximumRating`,`WithLabel`,`ReadOnly`,`CustomMax`,`Disabled`,`WithError`]}))();export{S as CustomMax,_ as Default,C as Disabled,y as MaximumRating,x as ReadOnly,v as ThreeStars,w as WithError,b as WithLabel,T as __namedExportsOrder,g as default};