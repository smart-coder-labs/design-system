import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as g}from"./iframe-BMG7cCGY.js";import{c as b}from"./utils-CDN07tui.js";import{B as m}from"./Button-b5E49-AF.js";import{C as B}from"./Card-BvVOm2rF.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-BFHmY9N3.js";const s=g.forwardRef(({className:r,size:x="md",axis:p="vertical",flex:u=!1,style:f,...h},v)=>{const o=(c=>typeof c=="number"?c:{xs:4,sm:8,md:16,lg:24,xl:32,"2xl":48,"3xl":64}[c]||16)(x),a={...f};return u?(a.flexGrow=1,a.minWidth="auto",a.minHeight="auto"):p==="vertical"?(a.height=o,a.minHeight=o,a.width="1px",a.display="block"):(a.width=o,a.minWidth=o,a.height="1px",a.display="inline-block"),e.jsx("div",{ref:v,className:b("flex-shrink-0",r),style:a,"aria-hidden":"true",...h})});s.displayName="Spacer";s.__docgenInfo={description:"",methods:[],displayName:"Spacer",props:{size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | number",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"number"}]},description:`The size of the space. Can be a preset or a custom number (pixels).
@default "md"`,defaultValue:{value:"'md'",computed:!1}},axis:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:`The axis of the spacer.
@default "vertical"`,defaultValue:{value:"'vertical'",computed:!1}},flex:{required:!1,tsType:{name:"boolean"},description:`Whether the spacer should expand to fill available space (flex-grow).
If true, size is ignored.
@default false`,defaultValue:{value:"false",computed:!1}}}};const V={title:"Layout/Spacer",component:s,tags:[],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl","3xl",100]},axis:{control:"radio",options:["vertical","horizontal"]},flex:{control:"boolean"}}},t=({children:r})=>e.jsx("div",{className:"bg-surface-secondary border border-border-primary p-4 rounded-lg",children:r}),l={render:r=>e.jsxs("div",{className:"flex flex-col border border-dashed border-border-primary p-4 w-64",children:[e.jsx(t,{children:"Item 1"}),e.jsx(s,{...r}),e.jsx(t,{children:"Item 2"}),e.jsx(s,{...r}),e.jsx(t,{children:"Item 3"})]}),args:{size:"md",axis:"vertical"}},i={render:r=>e.jsxs("div",{className:"flex flex-row border border-dashed border-border-primary p-4",children:[e.jsx(m,{children:"Button 1"}),e.jsx(s,{...r}),e.jsx(m,{variant:"secondary",children:"Button 2"}),e.jsx(s,{...r}),e.jsx(m,{variant:"ghost",children:"Button 3"})]}),args:{size:"md",axis:"horizontal"}},d={render:r=>e.jsxs("div",{className:"flex flex-col border border-dashed border-border-primary p-4 w-64",children:[e.jsx(t,{children:"Top"}),e.jsx(s,{...r}),e.jsx(t,{children:"Bottom (100px apart)"})]}),args:{size:100,axis:"vertical"}},n={render:r=>e.jsx(B,{className:"w-full",children:e.jsxs("div",{className:"flex items-center p-4",children:[e.jsx("div",{className:"font-bold",children:"Left Content"}),e.jsx(s,{...r}),e.jsx("div",{className:"text-text-secondary",children:"Right Content (Pushed)"})]})}),args:{flex:!0}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col border border-dashed border-border-primary p-4 w-64">
            <Box>Item 1</Box>
            <Spacer {...args} />
            <Box>Item 2</Box>
            <Spacer {...args} />
            <Box>Item 3</Box>
        </div>,
  args: {
    size: 'md',
    axis: 'vertical'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-row border border-dashed border-border-primary p-4">
            <Button>Button 1</Button>
            <Spacer {...args} />
            <Button variant="secondary">Button 2</Button>
            <Spacer {...args} />
            <Button variant="ghost">Button 3</Button>
        </div>,
  args: {
    size: 'md',
    axis: 'horizontal'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex flex-col border border-dashed border-border-primary p-4 w-64">
            <Box>Top</Box>
            <Spacer {...args} />
            <Box>Bottom (100px apart)</Box>
        </div>,
  args: {
    size: 100,
    axis: 'vertical'
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <Card className="w-full">
            <div className="flex items-center p-4">
                <div className="font-bold">Left Content</div>
                <Spacer {...args} />
                <div className="text-text-secondary">Right Content (Pushed)</div>
            </div>
        </Card>,
  args: {
    flex: true
  }
}`,...n.parameters?.docs?.source}}};const R=["Vertical","Horizontal","CustomSize","FlexSpacer"];export{d as CustomSize,n as FlexSpacer,i as Horizontal,l as Vertical,R as __namedExportsOrder,V as default};
