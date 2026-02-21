import{j as a}from"./jsx-runtime-u17CrQMm.js";import{m as n}from"./proxy-BNOm_ZMq.js";const o={default:`
    bg-surface-primary
    border-b border-border-primary
    shadow-sm
  `,glass:`
    glass
    border-b border-border-secondary
    shadow-sm
  `,transparent:`
    bg-transparent
  `},d=({children:s,variant:e="default",sticky:t=!0,className:r=""})=>a.jsx(n.nav,{className:`
        ${t?"sticky top-0":""}
        ${o[e]}
        z-50
        transition-apple
        ${r}
      `,initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:300,damping:30,mass:.8},children:a.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:a.jsx("div",{className:"flex items-center justify-between h-16",children:s})})}),c=({children:s,href:e="/",className:t=""})=>{const r=e?"a":"div";return a.jsx(r,{href:e,className:`
        flex items-center gap-2
        text-lg font-semibold
        text-text-primary
        transition-apple
        hover:opacity-80
        ${t}
      `,children:s})},p=({children:s,align:e="left",className:t=""})=>{const r={left:"justify-start",center:"justify-center",right:"justify-end"};return a.jsx("div",{className:`flex items-center gap-1 ${r[e]} ${t}`,children:s})},u=({children:s,active:e=!1,href:t,onClick:r,className:i=""})=>{const l=t?"a":"button";return a.jsx(n.div,{whileHover:{scale:1.02},whileTap:{scale:.98},children:a.jsxs(l,{href:t,onClick:r,className:`
          relative
          px-4 py-2
          text-sm font-medium
          rounded-lg
          transition-apple
          outline-none
          focus-visible:ring-2
          focus-visible:ring-accent-blue
          ${e?"text-text-primary bg-surface-secondary":"text-text-secondary hover:text-text-primary hover:bg-surface-secondary/50"}
          ${i}
        `,children:[s,e&&a.jsx(n.div,{layoutId:"navbar-indicator",className:"absolute bottom-0 left-2 right-2 h-0.5 bg-accent-blue rounded-full",initial:!1,transition:{type:"spring",stiffness:400,damping:30,mass:.6}})]})})},m=()=>a.jsx("div",{className:"h-6 w-px bg-border-primary mx-2"});d.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'glass' | 'transparent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'glass'"},{name:"literal",value:"'transparent'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},sticky:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"NavBarBrand",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'/'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};p.__docgenInfo={description:"",methods:[],displayName:"NavBarContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"NavBarItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};m.__docgenInfo={description:"",methods:[],displayName:"NavBarSeparator"};export{d as N,c as a,p as b,u as c,m as d};
