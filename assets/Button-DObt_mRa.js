import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as b}from"./iframe-B3ue83QT.js";import{m as o}from"./proxy-f4HTbMBa.js";const v=`
  inline-flex items-center justify-center gap-2
  font-medium transition-apple
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2
  disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none
  select-none
`,y={primary:`
    bg-accent-blue text-white
    hover:bg-accent-blue-hover
    active:bg-accent-blue-active
    shadow-sm
  `,secondary:`
    bg-surface-secondary text-text-primary
    border border-border-primary
    hover:bg-surface-primary hover:border-border-primary
    active:bg-surface-secondary
    shadow-xs
  `,ghost:`
    bg-transparent text-accent-blue
    hover:bg-accent-blue-tint
    active:bg-accent-blue-tint
  `,subtle:`
    bg-surface-secondary text-text-primary
    hover:bg-surface-primary
    active:bg-surface-secondary
  `,outline:`
    bg-transparent text-text-primary
    border border-border-primary
    hover:bg-surface-secondary hover:border-border-secondary
    active:bg-surface-tertiary
  `,destructive:`
    bg-status-error text-white
    hover:bg-red-600
    active:bg-red-700
    shadow-sm
  `},h={sm:"h-8 px-3 text-sm rounded-lg",md:"h-10 px-4 text-base rounded-xl",lg:"h-12 px-6 text-lg rounded-xl"},l=b.forwardRef(({variant:r="primary",size:t="md",loading:a=!1,leftIcon:i,rightIcon:n,fullWidth:c=!1,children:d,className:u="",disabled:s,...m},p)=>{const f=`
      ${v}
      ${y[r]}
      ${h[t]}
      ${c?"w-full":""}
      ${u}
    `.trim().replace(/\s+/g," ");return e.jsx(o.button,{ref:p,className:f,disabled:s||a,whileHover:{scale:s||a?1:1.02},whileTap:{scale:s||a?1:.98},transition:{type:"spring",stiffness:400,damping:25,mass:.6},...m,children:a?e.jsx(g,{size:t}):e.jsxs(e.Fragment,{children:[i&&e.jsx("span",{className:"inline-flex",children:i}),d,n&&e.jsx("span",{className:"inline-flex",children:n})]})})});l.displayName="Button";const g=({size:r})=>{const a={sm:14,md:16,lg:18}[r];return e.jsxs(o.svg,{width:a,height:a,viewBox:"0 0 24 24",fill:"none",animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},children:[e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeDasharray:"60",strokeDashoffset:"15",opacity:"0.25"}),e.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeDasharray:"60",strokeDashoffset:"45"})]})};l.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost' | 'subtle' | 'outline' | 'destructive'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'destructive'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};export{l as B};
