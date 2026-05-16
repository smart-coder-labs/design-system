import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BUF2whoS.js";import{t as r}from"./jsx-runtime-BK76Wfr-.js";import{s as i,t as a}from"./es-8Z2IY91W.js";var o,s,c,l,u,d,f,p=e((()=>{o=t(n()),a(),s=r(),c=`
  inline-flex items-center justify-center gap-2
  font-medium transition-apple
  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2
  cursor-pointer
  disabled:opacity-40 disabled:cursor-not-allowed disabled:pointer-events-none
  select-none
`,l={primary:`
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
  `},u={sm:`h-8 px-3 text-sm rounded-lg`,md:`h-10 px-4 text-base rounded-xl`,lg:`h-12 px-6 text-lg rounded-xl`},d=o.forwardRef(({variant:e=`primary`,size:t=`md`,loading:n=!1,leftIcon:r,rightIcon:a,fullWidth:o=!1,children:d,className:p=``,disabled:m,...h},g)=>{let _=`
      ${c}
      ${l[e]}
      ${u[t]}
      ${o?`w-full`:``}
      ${p}
    `.trim().replace(/\s+/g,` `);return d&&typeof d==`string`&&d.trim(),(0,s.jsx)(i.button,{ref:g,className:_,disabled:m||n,"aria-busy":n||void 0,whileHover:{scale:m||n?1:1.02},whileTap:{scale:m||n?1:.98},transition:{type:`spring`,stiffness:400,damping:25,mass:.6},...h,children:n?(0,s.jsx)(f,{size:t}):(0,s.jsxs)(s.Fragment,{children:[r&&(0,s.jsx)(`span`,{className:`inline-flex`,children:r}),d,a&&(0,s.jsx)(`span`,{className:`inline-flex`,children:a})]})})}),d.displayName=`Button`,f=({size:e})=>{let t={sm:14,md:16,lg:18}[e];return(0,s.jsxs)(i.svg,{width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:`linear`},children:[(0,s.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`,strokeDasharray:`60`,strokeDashoffset:`15`,opacity:`0.25`}),(0,s.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`,strokeDasharray:`60`,strokeDashoffset:`45`})]})},d.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'ghost' | 'subtle' | 'outline' | 'destructive'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'ghost'`},{name:`literal`,value:`'subtle'`},{name:`literal`,value:`'outline'`},{name:`literal`,value:`'destructive'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},loading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},leftIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},rightIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible label for the button. Required when the button has no visible text
(e.g. icon-only buttons with only a leftIcon or rightIcon).`},className:{defaultValue:{value:`''`,computed:!1},required:!1}},composes:[`Omit`]}}));export{p as n,d as t};