import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BGx_IYCs.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{s as i,t as a}from"./es-Ch39IMKG.js";import{n as o,t as s}from"./utils-COD7dmCP.js";import{A as c,t as l}from"./lucide-react-B3O-UhxF.js";import{t as u}from"./Label-YvQsTjRV.js";import{t as d}from"./Label-ZPpWaIKq.js";var f,p,m,h=e((()=>{f=t(n()),l(),o(),a(),d(),p=r(),m=({value:e=0,onChange:t,max:n=5,label:r,error:a,helperText:o,disabled:l=!1,readOnly:d=!1,size:m=`md`,className:h})=>{let[g,_]=(0,f.useState)(null),v={sm:`w-4 h-4`,md:`w-6 h-6`,lg:`w-8 h-8`},y=e=>{!l&&!d&&_(e)},b=()=>{!l&&!d&&_(null)},x=e=>{!l&&!d&&t&&t(e)};return(0,p.jsxs)(`div`,{className:s(`space-y-2`,h),children:[r&&(0,p.jsx)(u,{className:`mb-2`,children:r}),(0,p.jsx)(`div`,{className:`flex items-center gap-1`,onMouseLeave:b,children:Array.from({length:n}).map((t,n)=>{let r=n+1,a=(g===null?e:g)>=r,o=g!==null&&g>=r;return(0,p.jsx)(`button`,{type:`button`,onClick:()=>x(r),onMouseEnter:()=>y(r),disabled:l||d,className:s(`focus:outline-none transition-transform active:scale-95`,l||d?`cursor-default`:`cursor-pointer hover:scale-110`,l&&`opacity-50`),children:(0,p.jsx)(i.div,{initial:!1,animate:{scale:o?1.1:1},children:(0,p.jsx)(c,{className:s(v[m],`transition-colors duration-200`,a?`fill-yellow-400 text-yellow-400`:`fill-transparent text-text-tertiary`)})})},r)})}),(a||o)&&(0,p.jsx)(i.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},className:s(`text-sm`,a?`text-status-error`:`text-text-secondary`),children:a||o})]})},m.displayName=`RatingInput`,m.__docgenInfo={description:``,methods:[],displayName:`RatingInput`,props:{value:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: number) => void`,signature:{arguments:[{type:{name:`number`},name:`value`}],return:{name:`void`}}},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},readOnly:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),g,_,v,y,b,x,S,C,w,T;e((()=>{h(),g={title:`Forms/RatingInput`,component:m,tags:[`autodocs`]},_={args:{value:0,onChange:e=>console.log(`Rating:`,e)}},v={args:{value:3,onChange:e=>console.log(`Rating:`,e)}},y={args:{value:5,onChange:e=>console.log(`Rating:`,e)}},b={args:{value:4,label:`Rate your experience`,onChange:e=>console.log(`Rating:`,e)}},x={args:{value:4,readOnly:!0}},S={args:{value:7,max:10,onChange:e=>console.log(`Rating:`,e)}},C={args:{value:3,disabled:!0,onChange:e=>console.log(`Rating:`,e)}},w={args:{value:0,label:`Rating`,error:`Please select a rating`,onChange:e=>console.log(`Rating:`,e)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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