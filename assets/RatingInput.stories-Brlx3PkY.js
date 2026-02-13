import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as v}from"./iframe-D5DOIGW8.js";import{c}from"./utils-CDN07tui.js";import{L as I}from"./Label-BwNaakGx.js";import{m as R}from"./proxy-BbTJ7w1C.js";import{S as V}from"./star-D_kuSJLh.js";import"./preload-helper-PPVm8Dsz.js";import"./Text-Dhy74_-M.js";import"./createLucideIcon-DOQ0Nu6C.js";const l=({value:t=0,onChange:a,max:s=5,label:y,error:f,helperText:x,disabled:r=!1,readOnly:n=!1,size:b="md",className:S})=>{const[i,h]=v.useState(null),j={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8"},T=u=>{!r&&!n&&h(u)},q=()=>{!r&&!n&&h(null)},N=u=>{!r&&!n&&a&&a(u)};return e.jsxs("div",{className:c("space-y-2",S),children:[y&&e.jsx(I,{className:"mb-2",children:y}),e.jsx("div",{className:"flex items-center gap-1",onMouseLeave:q,children:Array.from({length:s}).map((u,w)=>{const o=w+1,C=(i!==null?i:t)>=o,E=i!==null&&i>=o;return e.jsx("button",{type:"button",onClick:()=>N(o),onMouseEnter:()=>T(o),disabled:r||n,className:c("focus:outline-none transition-transform active:scale-95",r||n?"cursor-default":"cursor-pointer hover:scale-110",r&&"opacity-50"),children:e.jsx(R.div,{initial:!1,animate:{scale:E?1.1:1},children:e.jsx(V,{className:c(j[b],"transition-colors duration-200",C?"fill-yellow-400 text-yellow-400":"fill-transparent text-text-tertiary")})})},o)})}),(f||x)&&e.jsx(R.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},className:c("text-sm",f?"text-status-error":"text-text-secondary"),children:f||x})]})};l.displayName="RatingInput";l.__docgenInfo={description:"",methods:[],displayName:"RatingInput",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const F={title:"Forms/RatingInput",component:l,tags:[],argTypes:{size:{control:"select",options:["sm","md","lg"]},disabled:{control:"boolean"},readOnly:{control:"boolean"},max:{control:"number"}}},m={render:t=>{const[a,s]=v.useState(3);return e.jsx(l,{...t,value:a,onChange:s})},args:{label:"Rate your experience"}},p={args:{label:"Average Rating",value:4,readOnly:!0}},d={render:t=>{const[a,s]=v.useState(0);return e.jsx(l,{...t,value:a,onChange:s})},args:{label:"Big Stars",size:"lg"}},g={args:{label:"Rating",error:"Please select a rating",value:0}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [rating, setRating] = useState(3);
    return <RatingInput {...args} value={rating} onChange={setRating} />;
  },
  args: {
    label: 'Rate your experience'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Average Rating',
    value: 4,
    readOnly: true
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [rating, setRating] = useState(0);
    return <RatingInput {...args} value={rating} onChange={setRating} />;
  },
  args: {
    label: 'Big Stars',
    size: 'lg'
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Rating',
    error: 'Please select a rating',
    value: 0
  }
}`,...g.parameters?.docs?.source}}};const H=["Default","ReadOnly","Large","WithError"];export{m as Default,d as Large,p as ReadOnly,g as WithError,H as __namedExportsOrder,F as default};
