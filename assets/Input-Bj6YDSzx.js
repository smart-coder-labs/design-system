import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-BMG7cCGY.js";import{m as o}from"./proxy-BFHmY9N3.js";const g=`
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
`,N={sm:"h-8 px-3 text-sm rounded-lg",md:"h-10 px-4 text-base rounded-xl",lg:"h-12 px-5 text-lg rounded-xl"},x={left:{sm:"pl-9",md:"pl-10",lg:"pl-12"},right:{sm:"pr-9",md:"pr-10",lg:"pr-12"}},h=y.forwardRef(({label:a,error:s,helperText:r,leftIcon:i,rightIcon:l,inputSize:t="md",className:d="",disabled:c,...n},m)=>{const p=!!s,v=`
      ${g}
      ${N[t]}
      ${i?x.left[t]:""}
      ${l?x.right[t]:""}
      ${p?"border-status-error focus:border-status-error focus:ring-status-error/20":""}
      ${d}
    `.trim().replace(/\s+/g," "),u={sm:"w-4 h-4",md:"w-5 h-5",lg:"w-6 h-6"},f={left:{sm:"left-3",md:"left-3",lg:"left-4"},right:{sm:"right-3",md:"right-3",lg:"right-4"}};return e.jsxs("div",{className:"w-full",children:[a&&e.jsx("label",{className:"block text-sm font-medium text-text-primary mb-2",children:a}),e.jsxs("div",{className:"relative",children:[i&&e.jsx("div",{className:`
                absolute top-1/2 -translate-y-1/2
                ${f.left[t]}
                ${u[t]}
                text-text-tertiary
                pointer-events-none
                flex items-center justify-center
              `,children:i}),e.jsx(o.input,{ref:m,className:v,disabled:c,whileFocus:{scale:1.005},transition:{type:"spring",stiffness:300,damping:30},...n}),l&&e.jsx("div",{className:`
                absolute top-1/2 -translate-y-1/2
                ${f.right[t]}
                ${u[t]}
                text-text-tertiary
                pointer-events-none
                flex items-center justify-center
              `,children:l})]}),(s||r)&&e.jsx(o.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},transition:{duration:.16},className:`
              mt-2 text-sm
              ${p?"text-status-error":"text-text-secondary"}
            `,children:s||r})]})});h.displayName="Input";const b=y.forwardRef(({label:a,error:s,helperText:r,resize:i="vertical",className:l="",disabled:t,...d},c)=>{const n=!!s,m=`
      ${g}
      px-4 py-3
      rounded-xl
      min-h-[100px]
      resize-${i}
      ${n?"border-status-error focus:border-status-error focus:ring-status-error/20":""}
      ${l}
    `.trim().replace(/\s+/g," ");return e.jsxs("div",{className:"w-full",children:[a&&e.jsx("label",{className:"block text-sm font-medium text-text-primary mb-2",children:a}),e.jsx(o.textarea,{ref:c,className:m,disabled:t,whileFocus:{scale:1.005},transition:{type:"spring",stiffness:300,damping:30},...d}),(s||r)&&e.jsx(o.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},transition:{duration:.16},className:`
              mt-2 text-sm
              ${n?"text-status-error":"text-text-secondary"}
            `,children:s||r})]})});b.displayName="Textarea";h.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},inputSize:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["Omit"]};b.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},resize:{required:!1,tsType:{name:"union",raw:"'none' | 'vertical' | 'horizontal' | 'both'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'both'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},className:{defaultValue:{value:"''",computed:!1},required:!1}}};export{h as I,b as T};
