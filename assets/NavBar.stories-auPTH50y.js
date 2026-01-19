import{j as e}from"./jsx-runtime-u17CrQMm.js";import{m as d}from"./proxy-DMGrdN83.js";import{B as p}from"./Button-Bvw_y_KB.js";import"./iframe-vYzePaRW.js";import"./preload-helper-PPVm8Dsz.js";const g={default:`
    bg-surface-primary
    border-b border-border-primary
    shadow-sm
  `,glass:`
    glass
    border-b border-border-secondary
    shadow-sm
  `,transparent:`
    bg-transparent
  `},m=({children:r,variant:a="default",sticky:t=!0,className:n=""})=>e.jsx(d.nav,{className:`
        ${t?"sticky top-0":""}
        ${g[a]}
        z-sticky
        transition-apple
        ${n}
      `,initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{type:"spring",stiffness:300,damping:30,mass:.8},children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"flex items-center justify-between h-16",children:r})})}),c=({children:r,href:a="/",className:t=""})=>{const n=a?"a":"div";return e.jsx(n,{href:a,className:`
        flex items-center gap-2
        text-lg font-semibold
        text-text-primary
        transition-apple
        hover:opacity-80
        ${t}
      `,children:r})},l=({children:r,align:a="left",className:t=""})=>{const n={left:"justify-start",center:"justify-center",right:"justify-end"};return e.jsx("div",{className:`flex items-center gap-1 ${n[a]} ${t}`,children:r})},s=({children:r,active:a=!1,href:t,onClick:n,className:f=""})=>{const v=t?"a":"button";return e.jsx(d.div,{whileHover:{scale:1.02},whileTap:{scale:.98},children:e.jsxs(v,{href:t,onClick:n,className:`
          relative
          px-4 py-2
          text-sm font-medium
          rounded-lg
          transition-apple
          outline-none
          focus-visible:ring-2
          focus-visible:ring-accent-blue
          ${a?"text-text-primary bg-surface-secondary":"text-text-secondary hover:text-text-primary hover:bg-surface-secondary/50"}
          ${f}
        `,children:[r,a&&e.jsx(d.div,{layoutId:"navbar-indicator",className:"absolute bottom-0 left-2 right-2 h-0.5 bg-accent-blue rounded-full",initial:!1,transition:{type:"spring",stiffness:400,damping:30,mass:.6}})]})})},u=()=>e.jsx("div",{className:"h-6 w-px bg-border-primary mx-2"});m.__docgenInfo={description:"",methods:[],displayName:"NavBar",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'glass' | 'transparent'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'glass'"},{name:"literal",value:"'transparent'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},sticky:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};c.__docgenInfo={description:"",methods:[],displayName:"NavBarBrand",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},href:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'/'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};l.__docgenInfo={description:"",methods:[],displayName:"NavBarContent",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};s.__docgenInfo={description:"",methods:[],displayName:"NavBarItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"NavBarSeparator"};const j={title:"Navigation/NavBar",component:m,tags:[],argTypes:{variant:{control:"select",options:["default","glass","transparent"]},sticky:{control:"boolean"}}},i={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(c,{href:"/",children:e.jsx("span",{children:"Brand"})}),e.jsxs(l,{align:"center",children:[e.jsx(s,{active:!0,href:"#",children:"Home"}),e.jsx(s,{href:"#",children:"Products"}),e.jsx(s,{href:"#",children:"About"}),e.jsx(s,{href:"#",children:"Contact"})]}),e.jsxs(l,{align:"right",children:[e.jsx(u,{}),e.jsx(p,{variant:"ghost",children:"Sign In"}),e.jsx(p,{variant:"primary",children:"Sign Up"})]})]})}},o={args:{variant:"glass",children:e.jsxs(e.Fragment,{children:[e.jsx(c,{href:"/",children:e.jsx("span",{children:"Glass Brand"})}),e.jsxs(l,{align:"right",children:[e.jsx(s,{active:!0,href:"#",children:"Home"}),e.jsx(s,{href:"#",children:"About"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>
                <NavBarBrand href="/">
                    <span>Brand</span>
                </NavBarBrand>
                <NavBarContent align="center">
                    <NavBarItem active href="#">Home</NavBarItem>
                    <NavBarItem href="#">Products</NavBarItem>
                    <NavBarItem href="#">About</NavBarItem>
                    <NavBarItem href="#">Contact</NavBarItem>
                </NavBarContent>
                <NavBarContent align="right">
                    <NavBarSeparator />
                    <Button variant="ghost">Sign In</Button>
                    <Button variant="primary">Sign Up</Button>
                </NavBarContent>
            </>
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'glass',
    children: <>
                <NavBarBrand href="/">
                    <span>Glass Brand</span>
                </NavBarBrand>
                <NavBarContent align="right">
                    <NavBarItem active href="#">Home</NavBarItem>
                    <NavBarItem href="#">About</NavBarItem>
                </NavBarContent>
            </>
  }
}`,...o.parameters?.docs?.source}}};const b=["Default","Glass"];export{i as Default,o as Glass,b as __namedExportsOrder,j as default};
