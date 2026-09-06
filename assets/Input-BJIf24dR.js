import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C8gh9c0G.js";import{t as r}from"./jsx-runtime-WZfjI2gv.js";import{s as i,t as a}from"./es-DlQin2IG.js";var o,s,c=e((()=>{o=`
  w-full
  bg-surface-primary
  border border-border-primary
  text-text-primary
  placeholder:text-text-tertiary
  transition-apple
  focus:outline-none
  focus:border-accent-blue
  focus:ring-2
  focus:ring-accent-blue/20
  disabled:opacity-40
  disabled:cursor-not-allowed
`,s={sm:`h-8 px-3 text-sm rounded-lg`,md:`h-10 px-4 text-base rounded-xl`,lg:`h-12 px-5 text-lg rounded-xl`}})),l,u,d,f,p,m,h=e((()=>{l=t(n()),a(),c(),u=r(),d=s,f={left:{sm:`pl-9`,md:`pl-10`,lg:`pl-12`},right:{sm:`pr-9`,md:`pr-10`,lg:`pr-12`}},p=(0,l.forwardRef)(({label:e,error:t,helperText:n,leftIcon:r,rightIcon:a,inputSize:s=`md`,className:c=``,disabled:l,...p},m)=>{let h=!!t,g=`
      ${o}
      ${d[s]}
      ${r?f.left[s]:``}
      ${a?f.right[s]:``}
      ${h?`border-status-error focus:border-status-error focus:ring-status-error/20`:``}
      ${c}
    `.trim().replace(/\s+/g,` `),_={sm:`w-4 h-4`,md:`w-5 h-5`,lg:`w-6 h-6`},v={left:{sm:`left-3`,md:`left-3`,lg:`left-4`},right:{sm:`right-3`,md:`right-3`,lg:`right-4`}};return(0,u.jsxs)(`div`,{className:`w-full`,children:[e&&(0,u.jsx)(`label`,{className:`block text-sm font-medium text-text-primary mb-2`,children:e}),(0,u.jsxs)(`div`,{className:`relative`,children:[r&&(0,u.jsx)(`div`,{className:`
                absolute top-1/2 -translate-y-1/2
                ${v.left[s]}
                ${_[s]}
                text-text-tertiary
                pointer-events-none
                flex items-center justify-center
              `,children:r}),(0,u.jsx)(i.input,{ref:m,className:g,disabled:l,role:!p.type||[`text`,`email`,`password`,`search`,`tel`,`url`].includes(p.type)?`textbox`:void 0,whileFocus:{scale:1.005},transition:{type:`spring`,stiffness:300,damping:30},...p}),a&&(0,u.jsx)(`div`,{className:`
                absolute top-1/2 -translate-y-1/2
                ${v.right[s]}
                ${_[s]}
                text-text-tertiary
                pointer-events-none
                flex items-center justify-center
              `,children:a})]}),(t||n)&&(0,u.jsx)(i.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},transition:{duration:.16},className:`
              mt-2 text-sm
              ${h?`text-status-error`:`text-text-secondary`}
            `,children:t||n})]})}),p.displayName=`Input`,m=(0,l.forwardRef)(({label:e,error:t,helperText:n,resize:r=`vertical`,className:a=``,disabled:s,...c},l)=>{let d=!!t,f=`
      ${o}
      px-4 py-3
      rounded-xl
      min-h-[100px]
      resize-${r}
      ${d?`border-status-error focus:border-status-error focus:ring-status-error/20`:``}
      ${a}
    `.trim().replace(/\s+/g,` `);return(0,u.jsxs)(`div`,{className:`w-full`,children:[e&&(0,u.jsx)(`label`,{className:`block text-sm font-medium text-text-primary mb-2`,children:e}),(0,u.jsx)(i.textarea,{ref:l,className:f,disabled:s,role:`textbox`,"aria-multiline":`true`,whileFocus:{scale:1.005},transition:{type:`spring`,stiffness:300,damping:30},...c}),(t||n)&&(0,u.jsx)(i.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},transition:{duration:.16},className:`
              mt-2 text-sm
              ${d?`text-status-error`:`text-text-secondary`}
            `,children:t||n})]})}),m.displayName=`Textarea`,p.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{label:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},leftIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},rightIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},inputSize:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1}},composes:[`Omit`]},m.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{label:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},resize:{required:!1,tsType:{name:`union`,raw:`'none' | 'vertical' | 'horizontal' | 'both'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'both'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}}));export{m as n,h as r,p as t};