import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BGx_IYCs.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{s as i,t as a}from"./es-Ch39IMKG.js";var o,s,c,l,u,d,f,p=e((()=>{o=t(n()),a(),s=r(),c=`
  inline-flex items-center justify-center gap-1.5
  font-medium
  rounded-full
  transition-apple
`,l={default:`
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
  `},u={sm:`h-5 px-2 text-xs`,md:`h-6 px-2.5 text-sm`,lg:`h-7 px-3 text-base`},d=o.forwardRef(({variant:e=`default`,size:t=`md`,dot:n=!1,children:r,className:a=``,...o},d)=>{let f=`
      ${c}
      ${l[e]}
      ${u[t]}
      ${a}
    `.trim().replace(/\s+/g,` `),p={sm:`w-1.5 h-1.5`,md:`w-2 h-2`,lg:`w-2.5 h-2.5`},m={default:`bg-text-primary`,primary:`bg-white`,success:`bg-status-success`,warning:`bg-status-warning`,error:`bg-status-error`,info:`bg-status-info`};return(0,s.jsxs)(i.span,{ref:d,className:f,role:`status`,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.16,ease:[.16,1,.3,1]},...o,children:[n&&(0,s.jsx)(`span`,{className:`
              ${p[t]}
              ${m[e]}
              rounded-full
            `}),r]})}),d.displayName=`Badge`,f=({count:e=0,max:t=99,showZero:n=!1,dot:r=!1,children:a,className:o=``})=>{let c=e>t?`${t}+`:e,l=e>0||n;return(0,s.jsxs)(`div`,{className:`relative inline-flex ${o}`,children:[a,l&&(0,s.jsx)(i.span,{className:`
            absolute -top-1 -right-1
            ${r?`w-2 h-2`:`min-w-[18px] h-[18px] px-1`}
            flex items-center justify-center
            bg-status-error
            text-white
            text-xs
            font-semibold
            rounded-full
            border-2 border-background-primary
          `,initial:{scale:0},animate:{scale:1},transition:{type:`spring`,stiffness:500,damping:25},children:!r&&c})]})},d.__docgenInfo={description:``,methods:[],displayName:`Badge`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'primary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},dot:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{defaultValue:{value:`''`,computed:!1},required:!1}},composes:[`Omit`]},f.__docgenInfo={description:``,methods:[],displayName:`NotificationBadge`,props:{count:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`99`,computed:!1}},showZero:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},dot:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),m=e((()=>{p()}));export{d as n,m as t};