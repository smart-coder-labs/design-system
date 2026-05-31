import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ba3ihGpN.js";import{n as r,t as i}from"./utils-CcEteFRA.js";import{t as a}from"./jsx-runtime-WZfjI2gv.js";import{s as o,t as s}from"./es-CjJtNnI5.js";var c,l,u,d,f,p,m=e((()=>{c=t(n()),s(),r(),l=a(),u=`...`,d=(e,t)=>{let n=t-e+1;return Array.from({length:n},(t,n)=>n+e)},f=({totalPages:e,siblingCount:t=1,currentPage:n})=>c.useMemo(()=>{if(t+5>=e)return d(1,e);let r=Math.max(n-t,1),i=Math.min(n+t,e),a=r>2,o=i<e-2,s=e;return!a&&o?[...d(1,3+2*t),u,e]:a&&!o?[1,u,...d(e-(3+2*t)+1,e)]:a&&o?[1,u,...d(r,i),u,s]:[]},[e,t,n]),p=c.forwardRef(({currentPage:e,totalPages:t,onPageChange:n,siblingCount:r=1,showFirstLast:a=!0,showPrevNext:s=!0,size:c=`md`,className:d=``,...p},m)=>{let h=f({currentPage:e,totalPages:t,siblingCount:r}),g={sm:`h-8 min-w-[2rem] text-xs px-2`,md:`h-10 min-w-[2.5rem] text-sm px-3`,lg:`h-12 min-w-[3rem] text-base px-4`},_=`
            inline-flex items-center justify-center
            rounded-lg font-medium
            transition-all duration-200
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2
            disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100
        `,v=`
            ${_}
            ${g[c]}
        `,y=`
            ${_}
            ${g[c]}
            text-text-secondary
            bg-surface-secondary
            hover:bg-surface-secondary/80 hover:text-text-primary hover:shadow-sm
        `,b=t=>{typeof t==`number`&&t!==e&&n(t)},x=()=>{e>1&&n(e-1)},S=()=>{e<t&&n(e+1)},C=()=>{e!==1&&n(1)},w=()=>{e!==t&&n(t)};return t<=1?null:(0,l.jsxs)(o.nav,{ref:m,className:i(`flex items-center gap-2`,d),initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{type:`spring`,stiffness:300,damping:30},"aria-label":`Pagination`,...p,children:[a&&(0,l.jsx)(o.button,{onClick:C,disabled:e===1,className:y,whileHover:{scale:e===1?1:1.05},whileTap:{scale:e===1?1:.95},"aria-label":`First page`,children:(0,l.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,l.jsx)(`path`,{d:`M11 12L7 8L11 4`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,l.jsx)(`path`,{d:`M7 12L3 8L7 4`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),s&&(0,l.jsx)(o.button,{onClick:x,disabled:e===1,className:y,whileHover:{scale:e===1?1:1.05},whileTap:{scale:e===1?1:.95},"aria-label":`Previous page`,children:(0,l.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,l.jsx)(`path`,{d:`M10 12L6 8L10 4`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,l.jsx)(`div`,{className:`flex items-center gap-1`,children:h.map((t,n)=>{if(t===u)return(0,l.jsx)(`span`,{className:i(`inline-flex items-center justify-center`,g[c],`text-text-tertiary`),children:u},`dots-${n}`);let r=t===e;return(0,l.jsx)(o.button,{onClick:()=>b(t),className:i(v,r?`
            bg-accent-blue text-white shadow-sm
            hover:bg-accent-blue/90
        `:`
            text-text-primary
            bg-surface-secondary
            hover:bg-surface-secondary/80 hover:shadow-sm
        `),whileHover:{scale:r?1:1.05},whileTap:{scale:r?1:.95},"aria-label":`Page ${t}`,"aria-current":r?`page`:void 0,children:t},t)})}),s&&(0,l.jsx)(o.button,{onClick:S,disabled:e===t,className:y,whileHover:{scale:e===t?1:1.05},whileTap:{scale:e===t?1:.95},"aria-label":`Next page`,children:(0,l.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:(0,l.jsx)(`path`,{d:`M6 12L10 8L6 4`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),a&&(0,l.jsx)(o.button,{onClick:w,disabled:e===t,className:y,whileHover:{scale:e===t?1:1.05},whileTap:{scale:e===t?1:.95},"aria-label":`Last page`,children:(0,l.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,l.jsx)(`path`,{d:`M5 12L9 8L5 4`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,l.jsx)(`path`,{d:`M9 12L13 8L9 4`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`})]})})]})}),p.displayName=`Pagination`,p.__docgenInfo={description:``,methods:[],displayName:`Pagination`,props:{currentPage:{required:!0,tsType:{name:`number`},description:`Current active page (1-indexed)`},totalPages:{required:!0,tsType:{name:`number`},description:`Total number of pages`},onPageChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(page: number) => void`,signature:{arguments:[{type:{name:`number`},name:`page`}],return:{name:`void`}}},description:`Callback when page changes`},siblingCount:{required:!1,tsType:{name:`number`},description:`Number of page buttons to show around current page`,defaultValue:{value:`1`,computed:!1}},showFirstLast:{required:!1,tsType:{name:`boolean`},description:`Show first/last page buttons`,defaultValue:{value:`true`,computed:!1}},showPrevNext:{required:!1,tsType:{name:`boolean`},description:`Show previous/next buttons`,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Optional className for custom styling`,defaultValue:{value:`''`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size variant`,defaultValue:{value:`'md'`,computed:!1}}},composes:[`Omit`]}})),h,g,_,v,y,b,x,S,C,w,T;e((()=>{m(),h=a(),g={title:`Navigation/Pagination`,component:p,tags:[`autodocs`]},_={args:{currentPage:1,totalPages:10,onPageChange:e=>console.log(`Page:`,e)}},v={args:{currentPage:5,totalPages:10,onPageChange:e=>console.log(`Page:`,e)}},y={args:{currentPage:10,totalPages:10,onPageChange:e=>console.log(`Page:`,e)}},b={args:{currentPage:15,totalPages:50,onPageChange:e=>console.log(`Page:`,e)}},x={args:{currentPage:2,totalPages:3,onPageChange:e=>console.log(`Page:`,e)}},S={args:{currentPage:1,totalPages:5,disabled:!0,onPageChange:e=>console.log(`Page:`,e)}},C={args:{currentPage:1,totalPages:10,totalItems:243,pageSize:25,onPageChange:e=>console.log(`Page:`,e)}},w={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,h.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,h.jsx)(e,{})})]},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page: number) => console.log('Page:', page)
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 5,
    totalPages: 10,
    onPageChange: (page: number) => console.log('Page:', page)
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 10,
    totalPages: 10,
    onPageChange: (page: number) => console.log('Page:', page)
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 15,
    totalPages: 50,
    onPageChange: (page: number) => console.log('Page:', page)
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 2,
    totalPages: 3,
    onPageChange: (page: number) => console.log('Page:', page)
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 5,
    disabled: true,
    onPageChange: (page: number) => console.log('Page:', page)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 10,
    totalItems: 243,
    pageSize: 25,
    onPageChange: (page: number) => console.log('Page:', page)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    themes: {
      themeOverride: 'dark'
    }
  },
  decorators: [Story => <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>]
}`,...w.parameters?.docs?.source}}},T=[`Default`,`MiddlePage`,`LastPage`,`ManyPages`,`FewPages`,`Disabled`,`WithSizeInfo`,`DarkMode`]}))();export{w as DarkMode,_ as Default,S as Disabled,x as FewPages,y as LastPage,b as ManyPages,v as MiddlePage,C as WithSizeInfo,T as __namedExportsOrder,g as default};