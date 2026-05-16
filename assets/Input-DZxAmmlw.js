import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-jtk2jlYO.js";import{t as r}from"./jsx-runtime-BK76Wfr-.js";import{s as i,t as a}from"./es-DLZWAS6t.js";var o,s,c,l,u,d,f,p=e((()=>{o=t(n()),a(),s=r(),c=`
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
`,l={sm:`h-8 px-3 text-sm rounded-lg`,md:`h-10 px-4 text-base rounded-xl`,lg:`h-12 px-5 text-lg rounded-xl`},u={left:{sm:`pl-9`,md:`pl-10`,lg:`pl-12`},right:{sm:`pr-9`,md:`pr-10`,lg:`pr-12`}},d=(0,o.forwardRef)(({label:e,error:t,helperText:n,leftIcon:r,rightIcon:a,inputSize:o=`md`,className:d=``,disabled:f,...p},m)=>{let h=!!t,g=`
      ${c}
      ${l[o]}
      ${r?u.left[o]:``}
      ${a?u.right[o]:``}
      ${h?`border-status-error focus:border-status-error focus:ring-status-error/20`:``}
      ${d}
    `.trim().replace(/\s+/g,` `),_={sm:`w-4 h-4`,md:`w-5 h-5`,lg:`w-6 h-6`},v={left:{sm:`left-3`,md:`left-3`,lg:`left-4`},right:{sm:`right-3`,md:`right-3`,lg:`right-4`}};return(0,s.jsxs)(`div`,{className:`w-full`,children:[e&&(0,s.jsx)(`label`,{className:`block text-sm font-medium text-text-primary mb-2`,children:e}),(0,s.jsxs)(`div`,{className:`relative`,children:[r&&(0,s.jsx)(`div`,{className:`
                absolute top-1/2 -translate-y-1/2
                ${v.left[o]}
                ${_[o]}
                text-text-tertiary
                pointer-events-none
                flex items-center justify-center
              `,children:r}),(0,s.jsx)(i.input,{ref:m,className:g,disabled:f,role:!p.type||[`text`,`email`,`password`,`search`,`tel`,`url`].includes(p.type)?`textbox`:void 0,whileFocus:{scale:1.005},transition:{type:`spring`,stiffness:300,damping:30},...p}),a&&(0,s.jsx)(`div`,{className:`
                absolute top-1/2 -translate-y-1/2
                ${v.right[o]}
                ${_[o]}
                text-text-tertiary
                pointer-events-none
                flex items-center justify-center
              `,children:a})]}),(t||n)&&(0,s.jsx)(i.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},transition:{duration:.16},className:`
              mt-2 text-sm
              ${h?`text-status-error`:`text-text-secondary`}
            `,children:t||n})]})}),d.displayName=`Input`,f=(0,o.forwardRef)(({label:e,error:t,helperText:n,resize:r=`vertical`,className:a=``,disabled:o,...l},u)=>{let d=!!t,f=`
      ${c}
      px-4 py-3
      rounded-xl
      min-h-[100px]
      resize-${r}
      ${d?`border-status-error focus:border-status-error focus:ring-status-error/20`:``}
      ${a}
    `.trim().replace(/\s+/g,` `);return(0,s.jsxs)(`div`,{className:`w-full`,children:[e&&(0,s.jsx)(`label`,{className:`block text-sm font-medium text-text-primary mb-2`,children:e}),(0,s.jsx)(i.textarea,{ref:u,className:f,disabled:o,role:`textbox`,"aria-multiline":`true`,whileFocus:{scale:1.005},transition:{type:`spring`,stiffness:300,damping:30},...l}),(t||n)&&(0,s.jsx)(i.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},transition:{duration:.16},className:`
              mt-2 text-sm
              ${d?`text-status-error`:`text-text-secondary`}
            `,children:t||n})]})}),f.displayName=`Textarea`,d.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{label:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},leftIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},rightIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},inputSize:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1}},composes:[`Omit`]},f.__docgenInfo={description:``,methods:[],displayName:`Textarea`,props:{label:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},resize:{required:!1,tsType:{name:`union`,raw:`'none' | 'vertical' | 'horizontal' | 'both'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'vertical'`},{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'both'`}]},description:``,defaultValue:{value:`'vertical'`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1}}}}));export{f as n,p as r,d as t};