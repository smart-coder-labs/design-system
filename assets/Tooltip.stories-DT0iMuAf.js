import{j as t}from"./jsx-runtime-u17CrQMm.js";import{T as c,a as l}from"./Tooltip-DcWWQAJ7.js";import{B as e}from"./Button-b5E49-AF.js";import"./iframe-BMG7cCGY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-pZkA2wgP.js";import"./proxy-BFHmY9N3.js";const f={title:"Overlays/Tooltip",component:c,tags:[],decorators:[a=>t.jsx(l,{children:t.jsx("div",{className:"p-10 flex justify-center",children:t.jsx(a,{})})})],argTypes:{side:{control:"select",options:["top","right","bottom","left"]},align:{control:"select",options:["start","center","end"]},delayDuration:{control:"number"}}},o={args:{content:"This is a tooltip",children:t.jsx(e,{children:"Hover me"})}},r={args:{content:"Bottom tooltip",side:"bottom",children:t.jsx(e,{children:"Hover me"})}},n={args:{content:"Right tooltip",side:"right",children:t.jsx(e,{children:"Hover me"})}},s={args:{content:"Left tooltip",side:"left",children:t.jsx(e,{children:"Hover me"})}},i={args:{content:t.jsxs("div",{children:[t.jsx("p",{className:"font-semibold",children:"Rich Tooltip"}),t.jsx("p",{className:"text-text-secondary",children:"With multiple lines"})]}),children:t.jsx(e,{children:"Hover me"})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is a tooltip',
    children: <Button>Hover me</Button>
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Bottom tooltip',
    side: 'bottom',
    children: <Button>Hover me</Button>
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Right tooltip',
    side: 'right',
    children: <Button>Hover me</Button>
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Left tooltip',
    side: 'left',
    children: <Button>Hover me</Button>
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    content: <div>
                <p className="font-semibold">Rich Tooltip</p>
                <p className="text-text-secondary">With multiple lines</p>
            </div>,
    children: <Button>Hover me</Button>
  }
}`,...i.parameters?.docs?.source}}};const v=["Default","Bottom","Right","Left","RichContent"];export{r as Bottom,o as Default,s as Left,i as RichContent,n as Right,v as __namedExportsOrder,f as default};
