import{j as r}from"./jsx-runtime-u17CrQMm.js";import{P as e}from"./PriceDisplay-pHzyNlbM.js";import"./iframe-Dan5ncgG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";const u={title:"Data Display/Price Display",component:e,tags:[]},a={render:()=>r.jsx("div",{className:"p-6",children:r.jsx(e,{amount:116,currency:"USD"})})},s={render:()=>r.jsx("div",{className:"p-6",children:r.jsx(e,{amount:19.95,currency:"USD"})})},c={render:()=>r.jsx("div",{className:"p-6",children:r.jsx(e,{amount:20,currency:"USD",showCents:!1})})},n={render:()=>r.jsx("div",{className:"p-6",children:r.jsx(e,{amount:14.99,original:19.99,currency:"USD"})})},t={render:()=>r.jsx("div",{className:"p-6",children:r.jsx(e,{amount:199,currency:"USD",compact:!0,variant:"accent"})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6">
      <PriceDisplay amount={116} currency="USD" />
    </div>
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6">
      <PriceDisplay amount={19.95} currency="USD" />
    </div>
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6">
      <PriceDisplay amount={20} currency="USD" showCents={false} />
    </div>
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6">
      <PriceDisplay amount={14.99} original={19.99} currency="USD" />
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6">
      <PriceDisplay amount={199} currency="USD" compact variant="accent" />
    </div>
}`,...t.parameters?.docs?.source}}};const l=["Default","WithCents","NoCents","WithOriginal","CompactAccent"];export{t as CompactAccent,a as Default,c as NoCents,s as WithCents,n as WithOriginal,l as __namedExportsOrder,u as default};
