import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C-nBdNCE.js";import{t as r}from"./jsx-runtime-WZfjI2gv.js";import{s as i,t as a}from"./es-CfCMxUIg.js";var o,s,c,l,u,d,f,p,m,h,g,_=e((()=>{o=t(n()),a(),s=r(),c=`
  rounded-2xl
  transition-apple
`,l={elevated:`
    bg-surface-primary
    shadow-md
    hover:shadow-lg
  `,glass:`
    glass
    border border-border-secondary
    shadow-sm
  `,outlined:`
    bg-surface-primary
    border border-border-primary
    hover:border-border-primary
  `,flat:`
    bg-surface-secondary
  `},u={none:``,sm:`p-4`,md:`p-6`,lg:`p-8`},d=o.forwardRef(({variant:e=`elevated`,hoverable:t=!1,padding:n=`md`,children:r,className:a=``,...o},d)=>{let f=`
      ${c}
      ${l[e]}
      ${u[n]}
      ${a}
    `.trim().replace(/\s+/g,` `),p=t?{whileHover:{y:-4,scale:1.01},transition:{type:`spring`,stiffness:300,damping:30,mass:.8}}:{},m=o[`aria-label`]||(typeof r==`string`?r:void 0),h=t&&m?{role:`region`,"aria-label":m}:{};return(0,s.jsx)(i.div,{ref:d,className:f,role:h.role,"aria-label":h[`aria-label`],initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.22,ease:[.16,1,.3,1]},...p,...o,children:r})}),d.displayName=`Card`,f=({children:e,className:t=``})=>(0,s.jsx)(`div`,{className:`mb-4 ${t}`,children:e}),p=({children:e,className:t=``})=>(0,s.jsx)(`h3`,{className:`text-xl font-semibold text-text-primary mb-1 ${t}`,children:e}),m=({children:e,className:t=``})=>(0,s.jsx)(`p`,{className:`text-sm text-text-secondary ${t}`,children:e}),h=({children:e,className:t=``})=>(0,s.jsx)(`div`,{className:t,children:e}),g=({children:e,className:t=``})=>(0,s.jsx)(`div`,{className:`mt-6 flex items-center gap-3 ${t}`,children:e}),d.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'elevated' | 'glass' | 'outlined' | 'flat'`,elements:[{name:`literal`,value:`'elevated'`},{name:`literal`,value:`'glass'`},{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'flat'`}]},description:``,defaultValue:{value:`'elevated'`,computed:!1}},hoverable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},padding:{required:!1,tsType:{name:`union`,raw:`'none' | 'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1}},composes:[`HTMLMotionProps`]},f.__docgenInfo={description:``,methods:[],displayName:`CardHeader`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},p.__docgenInfo={description:``,methods:[],displayName:`CardTitle`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},m.__docgenInfo={description:``,methods:[],displayName:`CardDescription`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},h.__docgenInfo={description:``,methods:[],displayName:`CardContent`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},g.__docgenInfo={description:``,methods:[],displayName:`CardFooter`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),v=e((()=>{_()}));export{f as a,m as i,d as n,p as o,h as r,v as t};