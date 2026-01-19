import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as g}from"./iframe-Cb93e_Z8.js";import{c as s}from"./utils-CDN07tui.js";import{C as y}from"./Card-PI0K4t1q.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-b22VB84a.js";const r=g.forwardRef(({className:a,orientation:b="horizontal",label:h,labelPosition:t="center",variant:v="solid",lineClassName:f,...x},u)=>{const i=v==="dashed"?"border-dashed":v==="dotted"?"border-dotted":"border-solid";return b==="vertical"?e.jsx("div",{ref:u,className:s("inline-block self-stretch w-0 border-l border-border-primary mx-2",i,a),role:"separator","aria-orientation":"vertical",...x}):h?e.jsxs("div",{ref:u,className:s("flex items-center w-full my-4",a),role:"separator","aria-orientation":"horizontal",...x,children:[e.jsx("div",{className:s("flex-grow border-t border-border-primary",i,t==="left"?"flex-grow-0 w-4 mr-4":"",t==="right"?"flex-grow":"",f)}),e.jsx("span",{className:s("text-sm text-text-tertiary font-medium px-4",t==="left"?"pl-0":"",t==="right"?"pr-0":""),children:h}),e.jsx("div",{className:s("flex-grow border-t border-border-primary",i,t==="right"?"flex-grow-0 w-4 ml-4":"",t==="left"?"flex-grow":"",f)})]}):e.jsx("div",{ref:u,className:s("w-full border-t border-border-primary my-4",i,a),role:"separator","aria-orientation":"horizontal",...x})});r.displayName="Divider";r.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`The orientation of the divider.
@default "horizontal"`,defaultValue:{value:"'horizontal'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional label to display within the divider (only for horizontal)."},labelPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:`Position of the label.
@default "center"`,defaultValue:{value:"'center'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'dashed' | 'dotted'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'dashed'"},{name:"literal",value:"'dotted'"}]},description:`The visual style of the divider.
@default "solid"`,defaultValue:{value:"'solid'",computed:!1}},lineClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for the line element specifically (if you want to style the line separately from the container)."}}};const R={title:"Layout/Divider",component:r,tags:[],argTypes:{orientation:{control:"radio",options:["horizontal","vertical"]},label:{control:"text"},labelPosition:{control:"radio",options:["left","center","right"]},variant:{control:"select",options:["solid","dashed","dotted"]}}},o={render:a=>e.jsxs("div",{className:"w-full max-w-md space-y-4",children:[e.jsx("p",{children:"Content above"}),e.jsx(r,{...a}),e.jsx("p",{children:"Content below"})]}),args:{orientation:"horizontal"}},n={render:()=>e.jsxs("div",{className:"w-full max-w-md space-y-8",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-2",children:"Solid (Default)"}),e.jsx(r,{variant:"solid"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-2",children:"Dashed"}),e.jsx(r,{variant:"dashed"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-text-secondary mb-2",children:"Dotted"}),e.jsx(r,{variant:"dotted"})]})]})},l={render:a=>e.jsxs("div",{className:"w-full max-w-md space-y-4",children:[e.jsx("p",{children:"Section 1"}),e.jsx(r,{...a}),e.jsx("p",{children:"Section 2"})]}),args:{label:"OR",labelPosition:"center"}},d={args:{label:"Section Title",labelPosition:"left"}},c={args:{label:"Read More",labelPosition:"right"}},m={render:a=>e.jsxs("div",{className:"flex items-center h-10 border border-border-primary rounded-lg p-2 w-fit",children:[e.jsx("span",{children:"Item 1"}),e.jsx(r,{...a}),e.jsx("span",{children:"Item 2"}),e.jsx(r,{...a}),e.jsx("span",{children:"Item 3"})]}),args:{orientation:"vertical"}},p={render:()=>e.jsxs(y,{className:"w-80",children:[e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"font-bold",children:"Card Title"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Card description goes here."})]}),e.jsx(r,{className:"my-0"}),e.jsx("div",{className:"p-4",children:e.jsx("button",{className:"text-sm font-medium text-accent-blue",children:"Action"})})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-md space-y-4">
            <p>Content above</p>
            <Divider {...args} />
            <p>Content below</p>
        </div>,
  args: {
    orientation: 'horizontal'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md space-y-8">
            <div>
                <p className="text-sm text-text-secondary mb-2">Solid (Default)</p>
                <Divider variant="solid" />
            </div>
            <div>
                <p className="text-sm text-text-secondary mb-2">Dashed</p>
                <Divider variant="dashed" />
            </div>
            <div>
                <p className="text-sm text-text-secondary mb-2">Dotted</p>
                <Divider variant="dotted" />
            </div>
        </div>
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="w-full max-w-md space-y-4">
            <p>Section 1</p>
            <Divider {...args} />
            <p>Section 2</p>
        </div>,
  args: {
    label: 'OR',
    labelPosition: 'center'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Section Title',
    labelPosition: 'left'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read More',
    labelPosition: 'right'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex items-center h-10 border border-border-primary rounded-lg p-2 w-fit">
            <span>Item 1</span>
            <Divider {...args} />
            <span>Item 2</span>
            <Divider {...args} />
            <span>Item 3</span>
        </div>,
  args: {
    orientation: 'vertical'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Card className="w-80">
            <div className="p-4">
                <h3 className="font-bold">Card Title</h3>
                <p className="text-sm text-text-secondary">Card description goes here.</p>
            </div>
            <Divider className="my-0" />
            <div className="p-4">
                <button className="text-sm font-medium text-accent-blue">Action</button>
            </div>
        </Card>
}`,...p.parameters?.docs?.source}}};const z=["Horizontal","Variants","WithLabel","LabelLeft","LabelRight","Vertical","InCard"];export{o as Horizontal,p as InCard,d as LabelLeft,c as LabelRight,n as Variants,m as Vertical,l as WithLabel,z as __namedExportsOrder,R as default};
