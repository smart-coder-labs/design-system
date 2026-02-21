import{j as s}from"./jsx-runtime-u17CrQMm.js";import{R as p}from"./iframe-Dan5ncgG.js";import{m as u}from"./proxy-DCTGQFKY.js";const f=`
  inline-flex items-center justify-center gap-1.5
  font-medium
  rounded-full
  transition-apple
`,g={default:`
    bg-surface-secondary
    text-text-primary
    border border-border-primary
  `,primary:`
    bg-accent-blue
    text-white
  `,success:`
    bg-status-success/10
    text-status-success
    border border-status-success/20
  `,warning:`
    bg-status-warning/10
    text-status-warning
    border border-status-warning/20
  `,error:`
    bg-status-error/10
    text-status-error
    border border-status-error/20
  `,info:`
    bg-status-info/10
    text-status-info
    border border-status-info/20
  `},b={sm:"h-5 px-2 text-xs",md:"h-6 px-2.5 text-sm",lg:"h-7 px-3 text-base"},d=p.forwardRef(({variant:e="default",size:a="md",dot:r=!1,children:t,className:l="",...i},n)=>{const o=`
      ${f}
      ${g[e]}
      ${b[a]}
      ${l}
    `.trim().replace(/\s+/g," "),c={sm:"w-1.5 h-1.5",md:"w-2 h-2",lg:"w-2.5 h-2.5"},m={default:"bg-text-primary",primary:"bg-white",success:"bg-status-success",warning:"bg-status-warning",error:"bg-status-error",info:"bg-status-info"};return s.jsxs(u.span,{ref:n,className:o,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.16,ease:[.16,1,.3,1]},...i,children:[r&&s.jsx("span",{className:`
              ${c[a]}
              ${m[e]}
              rounded-full
            `}),t]})});d.displayName="Badge";const x=({count:e=0,max:a=99,showZero:r=!1,dot:t=!1,children:l,className:i=""})=>{const n=e>a?`${a}+`:e,o=e>0||r;return s.jsxs("div",{className:`relative inline-flex ${i}`,children:[l,o&&s.jsx(u.span,{className:`
            absolute -top-1 -right-1
            ${t?"w-2 h-2":"min-w-[18px] h-[18px] px-1"}
            flex items-center justify-center
            bg-status-error
            text-white
            text-xs
            font-semibold
            rounded-full
            border-2 border-background-primary
          `,initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:500,damping:25},children:!t&&n})]})};d.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},dot:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};x.__docgenInfo={description:"",methods:[],displayName:"NotificationBadge",props:{count:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"99",computed:!1}},showZero:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},dot:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{d as B,x as N};
