import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-Bjuc5Sdq.js";import{t as n}from"./jsx-runtime-DaLCRA3n.js";import{s as r,t as i}from"./es-DMOnxf6X.js";var a,o,s,c,l,u,d,f=e((()=>{t(),i(),a=n(),o={default:`
    bg-surface-primary
    border-b border-border-primary
    shadow-sm
  `,glass:`
    glass
    border-b border-border-secondary
    shadow-sm
  `,transparent:`
    bg-transparent
  `},s=({children:e,variant:t=`default`,sticky:n=!0,className:i=``})=>(0,a.jsx)(r.nav,{className:`
        ${n?`sticky top-0`:``}
        ${o[t]}
        z-50
        transition-apple
        ${i}
      `,initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{type:`spring`,stiffness:300,damping:30,mass:.8},children:(0,a.jsx)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:(0,a.jsx)(`div`,{className:`flex items-center justify-between h-16`,children:e})})}),c=({children:e,href:t=`/`,className:n=``})=>(0,a.jsx)(t?`a`:`div`,{href:t,className:`
        flex items-center gap-2
        text-lg font-semibold
        text-text-primary
        transition-apple
        hover:opacity-80
        ${n}
      `,children:e}),l=({children:e,align:t=`left`,className:n=``})=>(0,a.jsx)(`div`,{className:`flex items-center gap-1 ${{left:`justify-start`,center:`justify-center`,right:`justify-end`}[t]} ${n}`,children:e}),u=({children:e,active:t=!1,href:n,onClick:i,className:o=``})=>{let s=n?`a`:`button`;return(0,a.jsx)(r.div,{whileHover:{scale:1.02},whileTap:{scale:.98},children:(0,a.jsxs)(s,{href:n,onClick:i,className:`
          relative
          px-4 py-2
          text-sm font-medium
          rounded-lg
          transition-apple
          outline-none
          focus-visible:ring-2
          focus-visible:ring-accent-blue
          ${t?`text-text-primary bg-surface-secondary`:`text-text-secondary hover:text-text-primary hover:bg-surface-secondary/50`}
          ${o}
        `,children:[e,t&&(0,a.jsx)(r.div,{layoutId:`navbar-indicator`,className:`absolute bottom-0 left-2 right-2 h-0.5 bg-accent-blue rounded-full`,initial:!1,transition:{type:`spring`,stiffness:400,damping:30,mass:.6}})]})})},d=()=>(0,a.jsx)(`div`,{className:`h-6 w-px bg-border-primary mx-2`}),s.__docgenInfo={description:``,methods:[],displayName:`NavBar`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'glass' | 'transparent'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'glass'`},{name:`literal`,value:`'transparent'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},sticky:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},c.__docgenInfo={description:``,methods:[],displayName:`NavBarBrand`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},href:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'/'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},l.__docgenInfo={description:``,methods:[],displayName:`NavBarContent`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'center' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'left'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},u.__docgenInfo={description:``,methods:[],displayName:`NavBarItem`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},active:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},href:{required:!1,tsType:{name:`string`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},d.__docgenInfo={description:``,methods:[],displayName:`NavBarSeparator`}}));export{d as a,u as i,c as n,f as o,l as r,s as t};