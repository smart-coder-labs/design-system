import{j as s}from"./jsx-runtime-u17CrQMm.js";import{R as m}from"./iframe-FxOJXbvx.js";import{m as p}from"./proxy-PznluMrK.js";const u=`
  rounded-2xl
  transition-apple
`,f={elevated:`
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
  `},y={none:"",sm:"p-4",md:"p-6",lg:"p-8"},t=m.forwardRef(({variant:e="elevated",hoverable:a=!1,padding:r="md",children:d,className:o="",...l},i)=>{const n=`
      ${u}
      ${f[e]}
      ${y[r]}
      ${o}
    `.trim().replace(/\s+/g," "),c=a?{whileHover:{y:-4,scale:1.01},transition:{type:"spring",stiffness:300,damping:30,mass:.8}}:{};return s.jsx(p.div,{ref:i,className:n,initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.22,ease:[.16,1,.3,1]},...c,...l,children:d})});t.displayName="Card";const v=({children:e,className:a=""})=>s.jsx("div",{className:`mb-4 ${a}`,children:e}),N=({children:e,className:a=""})=>s.jsx("h3",{className:`text-xl font-semibold text-text-primary mb-1 ${a}`,children:e}),g=({children:e,className:a=""})=>s.jsx("p",{className:`text-sm text-text-secondary ${a}`,children:e}),R=({children:e,className:a=""})=>s.jsx("div",{className:a,children:e}),h=({children:e,className:a=""})=>s.jsx("div",{className:`mt-6 flex items-center gap-3 ${a}`,children:e});t.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'elevated' | 'glass' | 'outlined' | 'flat'",elements:[{name:"literal",value:"'elevated'"},{name:"literal",value:"'glass'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'flat'"}]},description:"",defaultValue:{value:"'elevated'",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLMotionProps"]};v.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};N.__docgenInfo={description:"",methods:[],displayName:"CardTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};g.__docgenInfo={description:"",methods:[],displayName:"CardDescription",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};R.__docgenInfo={description:"",methods:[],displayName:"CardContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};h.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{t as C,v as a,N as b,g as c,R as d,h as e};
