import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as W}from"./iframe-B9hmpDEG.js";import{c as R}from"./utils-CDN07tui.js";import{m as c}from"./proxy-Dckdfu8t.js";import"./preload-helper-PPVm8Dsz.js";const u="...",b=(e,s)=>{const r=s-e+1;return Array.from({length:r},(i,d)=>d+e)},E=({totalPages:e,siblingCount:s=1,currentPage:r})=>W.useMemo(()=>{if(s+5>=e)return b(1,e);const g=Math.max(r-s,1),l=Math.min(r+s,e),m=g>2,h=l<e-2,x=1,T=e;if(!m&&h){const o=3+2*s;return[...b(1,o),u,e]}if(m&&!h){const o=3+2*s,p=b(e-o+1,e);return[x,u,...p]}if(m&&h){const o=b(g,l);return[x,u,...o,u,T]}return[]},[e,s,r]),M=W.forwardRef(({currentPage:e,totalPages:s,onPageChange:r,siblingCount:i=1,showFirstLast:d=!0,showPrevNext:g=!0,size:l="md",className:m="",...h},x)=>{const T=E({currentPage:e,totalPages:s,siblingCount:i}),o={sm:"h-8 min-w-[2rem] text-xs px-2",md:"h-10 min-w-[2.5rem] text-sm px-3",lg:"h-12 min-w-[3rem] text-base px-4"},p=`
            inline-flex items-center justify-center
            rounded-lg font-medium
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2
            disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100
        `,q=`
            ${p}
            ${o[l]}
        `,B=`
            bg-accent-blue text-white shadow-sm
            hover:bg-accent-blue/90
        `,I=`
            text-text-primary
            bg-surface-secondary
            hover:bg-surface-secondary/80 hover:shadow-sm
        `,w=`
            ${p}
            ${o[l]}
            text-text-secondary
            bg-surface-secondary
            hover:bg-surface-secondary/80 hover:text-text-primary hover:shadow-sm
        `,$=a=>{typeof a=="number"&&a!==e&&r(a)},D=()=>{e>1&&r(e-1)},H=()=>{e<s&&r(e+1)},V=()=>{e!==1&&r(1)},_=()=>{e!==s&&r(s)};return s<=1?null:t.jsxs(c.nav,{ref:x,className:R("flex items-center gap-2",m),initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:300,damping:30},"aria-label":"Pagination",...h,children:[d&&t.jsx(c.button,{onClick:V,disabled:e===1,className:w,whileHover:{scale:e===1?1:1.05},whileTap:{scale:e===1?1:.95},"aria-label":"First page",children:t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M11 12L7 8L11 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M7 12L3 8L7 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})}),g&&t.jsx(c.button,{onClick:D,disabled:e===1,className:w,whileHover:{scale:e===1?1:1.05},whileTap:{scale:e===1?1:.95},"aria-label":"Previous page",children:t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M10 12L6 8L10 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),t.jsx("div",{className:"flex items-center gap-1",children:T.map((a,O)=>{if(a===u)return t.jsx("span",{className:R("inline-flex items-center justify-center",o[l],"text-text-tertiary"),children:u},`dots-${O}`);const f=a===e;return t.jsx(c.button,{onClick:()=>$(a),className:R(q,f?B:I),whileHover:{scale:f?1:1.05},whileTap:{scale:f?1:.95},"aria-label":`Page ${a}`,"aria-current":f?"page":void 0,children:a},a)})}),g&&t.jsx(c.button,{onClick:H,disabled:e===s,className:w,whileHover:{scale:e===s?1:1.05},whileTap:{scale:e===s?1:.95},"aria-label":"Next page",children:t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6 12L10 8L6 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),d&&t.jsx(c.button,{onClick:_,disabled:e===s,className:w,whileHover:{scale:e===s?1:1.05},whileTap:{scale:e===s?1:.95},"aria-label":"Last page",children:t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M5 12L9 8L5 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),t.jsx("path",{d:"M9 12L13 8L9 4",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})})]})});M.displayName="Pagination";M.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{currentPage:{required:!0,tsType:{name:"number"},description:"Current active page (1-indexed)"},totalPages:{required:!0,tsType:{name:"number"},description:"Total number of pages"},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:"Callback when page changes"},siblingCount:{required:!1,tsType:{name:"number"},description:"Number of page buttons to show around current page",defaultValue:{value:"1",computed:!1}},showFirstLast:{required:!1,tsType:{name:"boolean"},description:"Show first/last page buttons",defaultValue:{value:"true",computed:!1}},showPrevNext:{required:!1,tsType:{name:"boolean"},description:"Show previous/next buttons",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling",defaultValue:{value:"''",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}}},composes:["Omit"]};const U={title:"Navigation/Pagination",component:M,tags:[],argTypes:{currentPage:{control:{type:"number",min:1},description:"Current active page (1-indexed)"},totalPages:{control:{type:"number",min:1},description:"Total number of pages"},siblingCount:{control:{type:"number",min:0,max:3},description:"Number of page buttons to show around current page"},showFirstLast:{control:"boolean",description:"Show first/last page buttons"},showPrevNext:{control:"boolean",description:"Show previous/next buttons"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},className:{control:!1},onPageChange:{action:"page changed"}}},n=e=>{const[s,r]=W.useState(e.currentPage||1);return W.useEffect(()=>{r(e.currentPage)},[e.currentPage]),t.jsxs("div",{className:"p-8 bg-background-secondary rounded-lg",children:[t.jsx(M,{...e,currentPage:s,onPageChange:i=>{r(i),e.onPageChange?.(i)}}),t.jsxs("div",{className:"mt-6 text-center text-sm text-text-secondary",children:["Current Page: ",t.jsx("span",{className:"font-semibold text-text-primary",children:s})," of"," ",t.jsx("span",{className:"font-semibold text-text-primary",children:e.totalPages})]})]})},v={render:e=>t.jsx(n,{...e}),args:{currentPage:1,totalPages:10,siblingCount:1,showFirstLast:!0,showPrevNext:!0,size:"md"}},P={render:e=>t.jsx(n,{...e}),args:{currentPage:1,totalPages:10,size:"sm",siblingCount:1,showFirstLast:!0,showPrevNext:!0}},L={render:e=>t.jsx(n,{...e}),args:{currentPage:1,totalPages:10,size:"lg",siblingCount:1,showFirstLast:!0,showPrevNext:!0}},y={render:e=>t.jsx(n,{...e}),args:{currentPage:25,totalPages:50,siblingCount:1,showFirstLast:!0,showPrevNext:!0,size:"md"}},S={render:e=>t.jsx(n,{...e}),args:{currentPage:5,totalPages:10,siblingCount:1,showFirstLast:!0,showPrevNext:!0,size:"md"}},j={render:e=>t.jsx(n,{...e}),args:{currentPage:10,totalPages:10,siblingCount:1,showFirstLast:!0,showPrevNext:!0,size:"md"}},N={render:e=>t.jsx(n,{...e}),args:{currentPage:10,totalPages:20,siblingCount:2,showFirstLast:!0,showPrevNext:!0,size:"md"}},C={render:e=>t.jsx(n,{...e}),args:{currentPage:5,totalPages:10,siblingCount:1,showFirstLast:!1,showPrevNext:!0,size:"md"}},k={render:e=>t.jsx(n,{...e}),args:{currentPage:5,totalPages:10,siblingCount:1,showFirstLast:!0,showPrevNext:!1,size:"md"}},F={render:e=>t.jsx(n,{...e}),args:{currentPage:5,totalPages:10,siblingCount:1,showFirstLast:!1,showPrevNext:!1,size:"md"}},z={render:e=>t.jsx(n,{...e}),args:{currentPage:2,totalPages:5,siblingCount:1,showFirstLast:!0,showPrevNext:!0,size:"md"}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    siblingCount: 1,
    showFirstLast: true,
    showPrevNext: true,
    size: 'md'
  }
}`,...v.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    size: 'sm',
    siblingCount: 1,
    showFirstLast: true,
    showPrevNext: true
  }
}`,...P.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 1,
    totalPages: 10,
    size: 'lg',
    siblingCount: 1,
    showFirstLast: true,
    showPrevNext: true
  }
}`,...L.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 25,
    totalPages: 50,
    siblingCount: 1,
    showFirstLast: true,
    showPrevNext: true,
    size: 'md'
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    siblingCount: 1,
    showFirstLast: true,
    showPrevNext: true,
    size: 'md'
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 10,
    totalPages: 10,
    siblingCount: 1,
    showFirstLast: true,
    showPrevNext: true,
    size: 'md'
  }
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 10,
    totalPages: 20,
    siblingCount: 2,
    showFirstLast: true,
    showPrevNext: true,
    size: 'md'
  }
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    siblingCount: 1,
    showFirstLast: false,
    showPrevNext: true,
    size: 'md'
  }
}`,...C.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    siblingCount: 1,
    showFirstLast: true,
    showPrevNext: false,
    size: 'md'
  }
}`,...k.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 5,
    totalPages: 10,
    siblingCount: 1,
    showFirstLast: false,
    showPrevNext: false,
    size: 'md'
  }
}`,...F.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => <PaginationWithState {...args} />,
  args: {
    currentPage: 2,
    totalPages: 5,
    siblingCount: 1,
    showFirstLast: true,
    showPrevNext: true,
    size: 'md'
  }
}`,...z.parameters?.docs?.source}}};const X=["Default","Small","Large","ManyPages","MiddlePage","LastPage","WithMoreSiblings","WithoutFirstLast","WithoutPrevNext","MinimalControls","FewPages"];export{v as Default,z as FewPages,L as Large,j as LastPage,y as ManyPages,S as MiddlePage,F as MinimalControls,P as Small,N as WithMoreSiblings,C as WithoutFirstLast,k as WithoutPrevNext,X as __namedExportsOrder,U as default};
