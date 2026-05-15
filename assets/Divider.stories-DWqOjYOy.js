import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DL3IwwZJ.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";var o,s,c,l=e((()=>{o=t(n()),r(),s=a(),c=o.forwardRef(({className:e,orientation:t=`horizontal`,label:n,labelPosition:r=`center`,variant:a=`solid`,lineClassName:o,...c},l)=>{let u=a===`dashed`?`border-dashed`:a===`dotted`?`border-dotted`:`border-solid`;return t===`vertical`?(0,s.jsx)(`div`,{ref:l,className:i(`inline-block self-stretch w-0 border-l border-border-primary mx-2`,u,e),role:`separator`,"aria-orientation":`vertical`,...c}):n?(0,s.jsxs)(`div`,{ref:l,className:i(`flex items-center w-full my-4`,e),role:`separator`,"aria-orientation":`horizontal`,...c,children:[(0,s.jsx)(`div`,{className:i(`flex-grow border-t border-border-primary`,u,r===`left`?`flex-grow-0 w-4 mr-4`:``,r===`right`?`flex-grow`:``,o)}),(0,s.jsx)(`span`,{className:i(`text-sm text-text-tertiary font-medium px-4`,r===`left`?`pl-0`:``,r===`right`?`pr-0`:``),children:n}),(0,s.jsx)(`div`,{className:i(`flex-grow border-t border-border-primary`,u,r===`right`?`flex-grow-0 w-4 ml-4`:``,r===`left`?`flex-grow`:``,o)})]}):(0,s.jsx)(`div`,{ref:l,className:i(`w-full border-t border-border-primary my-4`,u,e),role:`separator`,"aria-orientation":`horizontal`,...c})}),c.displayName=`Divider`,c.__docgenInfo={description:``,methods:[],displayName:`Divider`,props:{orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:`The orientation of the divider.
@default "horizontal"`,defaultValue:{value:`'horizontal'`,computed:!1}},label:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional label to display within the divider (only for horizontal).`},labelPosition:{required:!1,tsType:{name:`union`,raw:`'left' | 'center' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'right'`}]},description:`Position of the label.
@default "center"`,defaultValue:{value:`'center'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'solid' | 'dashed' | 'dotted'`,elements:[{name:`literal`,value:`'solid'`},{name:`literal`,value:`'dashed'`},{name:`literal`,value:`'dotted'`}]},description:`The visual style of the divider.
@default "solid"`,defaultValue:{value:`'solid'`,computed:!1}},lineClassName:{required:!1,tsType:{name:`string`},description:`Custom class name for the line element specifically (if you want to style the line separately from the container).`}}}})),u,d,f,p,m,h,g,_,v,y,b;e((()=>{n(),l(),u=a(),d={title:`Layout/Divider`,component:c,tags:[`autodocs`]},f={args:{}},p={args:{label:`or continue with`}},m={args:{label:`Section Break`,labelPosition:`left`}},h={args:{label:`End`,labelPosition:`right`}},g={args:{variant:`dashed`}},_={args:{variant:`dotted`}},v={decorators:[e=>(0,u.jsxs)(`div`,{className:`flex items-center h-20 gap-4`,children:[(0,u.jsx)(`span`,{children:`Left`}),(0,u.jsx)(e,{}),(0,u.jsx)(`span`,{children:`Right`})]})],args:{orientation:`vertical`}},y={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,u.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,u.jsx)(e,{})})]},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'or continue with'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Section Break',
    labelPosition: 'left'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'End',
    labelPosition: 'right'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dashed'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dotted'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="flex items-center h-20 gap-4">
        <span>Left</span>
        <Story />
        <span>Right</span>
      </div>],
  args: {
    orientation: 'vertical'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    themes: {
      themeOverride: 'dark'
    }
  },
  decorators: [Story => <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>]
}`,...y.parameters?.docs?.source}}},b=[`Horizontal`,`WithLabel`,`LabelLeft`,`LabelRight`,`Dashed`,`Dotted`,`Vertical`,`DarkMode`]}))();export{y as DarkMode,g as Dashed,_ as Dotted,f as Horizontal,m as LabelLeft,h as LabelRight,v as Vertical,p as WithLabel,b as __namedExportsOrder,d as default};