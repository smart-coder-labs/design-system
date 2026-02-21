import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-CGazvlvx.js";import{c as I}from"./utils-CDN07tui.js";import{m as p}from"./proxy-BNOm_ZMq.js";import{C as b}from"./chevron-right-C_gMmINW.js";import{A as y}from"./index-C-eQ3fKV.js";import{I as r}from"./Input-CPkCia-y.js";import{S as g}from"./Select-DxvBZ--8.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-juiWZL7b.js";import"./createLucideIcon-BMKVoASg.js";import"./index-D6mcrAZ6.js";import"./index-CfB_ZJHU.js";import"./chevron-down-CG3v-0Pn.js";import"./check-D3Ma7fjX.js";const o=c.forwardRef(({sections:l,width:d="280px",className:x,...m},u)=>{const[h,f]=c.useState(new Set(l.filter(a=>a.defaultExpanded).map(a=>a.id))),j=a=>{f(n=>{const s=new Set(n);return s.has(a)?s.delete(a):s.add(a),s})};return e.jsx("div",{ref:u,className:I("bg-surface-secondary border-l border-border-primary overflow-y-auto",x),style:{width:d},...m,children:l.map(a=>{const n=h.has(a.id);return e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>j(a.id),className:"w-full flex items-center justify-between px-4 py-4 text-left hover:bg-surface-tertiary transition-colors focus:outline-none group rounded-lg",children:[e.jsx("span",{className:"text-sm font-bold text-text-primary uppercase tracking-wide",children:a.title}),e.jsx(p.div,{animate:{rotate:n?90:0},transition:{duration:.2},children:e.jsx(b,{className:"w-4 h-4 text-text-tertiary"})})]}),e.jsx(y,{initial:!1,children:n&&e.jsx(p.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},transition:{duration:.2},className:"overflow-hidden",children:e.jsx("div",{className:"px-4 pb-4 space-y-4",children:a.content})})})]},a.id)})})});o.displayName="InspectorPanel";const t=({label:l,children:d})=>e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-xs font-medium text-text-secondary",children:l}),e.jsx("div",{children:d})]});t.displayName="InspectorField";o.__docgenInfo={description:"",methods:[],displayName:"InspectorPanel",props:{sections:{required:!0,tsType:{name:"Array",elements:[{name:"InspectorSection"}],raw:"InspectorSection[]"},description:""},width:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'280px'",computed:!1}}}};t.__docgenInfo={description:"",methods:[],displayName:"InspectorField",props:{label:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const k={title:"Surfaces/InspectorPanel",component:o,tags:[],parameters:{layout:"fullscreen"}},i={render:l=>e.jsxs("div",{className:"flex h-screen",children:[e.jsxs("div",{className:"flex-1 bg-surface-primary p-8",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Main Content Area"}),e.jsx("p",{className:"text-text-secondary",children:"The inspector panel is on the right side, similar to Xcode's inspector."})]}),e.jsx(o,{...l})]}),args:{sections:[{id:"properties",title:"Properties",defaultExpanded:!0,content:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Name",children:e.jsx(r,{placeholder:"Component name"})}),e.jsx(t,{label:"Type",children:e.jsxs(g,{children:[e.jsx("option",{children:"Button"}),e.jsx("option",{children:"Input"}),e.jsx("option",{children:"Card"})]})}),e.jsx(t,{label:"ID",children:e.jsx(r,{placeholder:"unique-id"})})]})},{id:"layout",title:"Layout",defaultExpanded:!0,content:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Width",children:e.jsx(r,{placeholder:"auto"})}),e.jsx(t,{label:"Height",children:e.jsx(r,{placeholder:"auto"})}),e.jsx(t,{label:"Padding",children:e.jsx(r,{placeholder:"16px"})}),e.jsx(t,{label:"Margin",children:e.jsx(r,{placeholder:"0px"})})]})},{id:"appearance",title:"Appearance",defaultExpanded:!1,content:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Background",children:e.jsx(r,{type:"color"})}),e.jsx(t,{label:"Border Radius",children:e.jsx(r,{placeholder:"8px"})}),e.jsx(t,{label:"Opacity",children:e.jsx(r,{type:"range",min:"0",max:"100"})})]})},{id:"advanced",title:"Advanced",defaultExpanded:!1,content:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Class Name",children:e.jsx(r,{placeholder:"custom-class"})}),e.jsx(t,{label:"Data Attribute",children:e.jsx(r,{placeholder:"data-value"})})]})}]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <div className="flex h-screen">
            <div className="flex-1 bg-surface-primary p-8">
                <h1 className="text-2xl font-bold text-text-primary mb-4">Main Content Area</h1>
                <p className="text-text-secondary">
                    The inspector panel is on the right side, similar to Xcode's inspector.
                </p>
            </div>
            <InspectorPanel {...args} />
        </div>,
  args: {
    sections: [{
      id: 'properties',
      title: 'Properties',
      defaultExpanded: true,
      content: <>
                        <InspectorField label="Name">
                            <Input placeholder="Component name" />
                        </InspectorField>
                        <InspectorField label="Type">
                            <Select>
                                <option>Button</option>
                                <option>Input</option>
                                <option>Card</option>
                            </Select>
                        </InspectorField>
                        <InspectorField label="ID">
                            <Input placeholder="unique-id" />
                        </InspectorField>
                    </>
    }, {
      id: 'layout',
      title: 'Layout',
      defaultExpanded: true,
      content: <>
                        <InspectorField label="Width">
                            <Input placeholder="auto" />
                        </InspectorField>
                        <InspectorField label="Height">
                            <Input placeholder="auto" />
                        </InspectorField>
                        <InspectorField label="Padding">
                            <Input placeholder="16px" />
                        </InspectorField>
                        <InspectorField label="Margin">
                            <Input placeholder="0px" />
                        </InspectorField>
                    </>
    }, {
      id: 'appearance',
      title: 'Appearance',
      defaultExpanded: false,
      content: <>
                        <InspectorField label="Background">
                            <Input type="color" />
                        </InspectorField>
                        <InspectorField label="Border Radius">
                            <Input placeholder="8px" />
                        </InspectorField>
                        <InspectorField label="Opacity">
                            <Input type="range" min="0" max="100" />
                        </InspectorField>
                    </>
    }, {
      id: 'advanced',
      title: 'Advanced',
      defaultExpanded: false,
      content: <>
                        <InspectorField label="Class Name">
                            <Input placeholder="custom-class" />
                        </InspectorField>
                        <InspectorField label="Data Attribute">
                            <Input placeholder="data-value" />
                        </InspectorField>
                    </>
    }]
  }
}`,...i.parameters?.docs?.source}}};const M=["Default"];export{i as Default,M as __namedExportsOrder,k as default};
