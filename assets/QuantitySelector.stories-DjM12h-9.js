import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Cg3U4lNX.js";import{n as r,t as i}from"./utils-ijcE-ZHT.js";import{t as a}from"./jsx-runtime-DaLCRA3n.js";var o,s,c,l=e((()=>{o=t(n()),r(),s=a(),c=({value:e,defaultValue:t=1,onChange:n,min:r=0,max:a=1/0,step:c=1,disabled:l=!1,compact:u=!1,className:d=``,"aria-label":f=`Quantity`})=>{let p=typeof e==`number`,[m,h]=(0,o.useState)(t),g=p?e:m,_=(0,o.useRef)(null);(0,o.useEffect)(()=>{p&&h(e)},[e,p]);let v=e=>Math.min(a,Math.max(r,e)),y=e=>{let t=v(Math.round(e/c)*c);p||h(t),n?.(t)},b=()=>{l||y((g??0)+c)},x=()=>{l||y((g??0)-c)};return(0,s.jsxs)(`div`,{role:`spinbutton`,"aria-label":f,"aria-valuenow":Number.isFinite(g)?g:void 0,"aria-valuemin":r,"aria-valuemax":Number.isFinite(a)?a:void 0,tabIndex:0,onKeyDown:e=>{l||(e.key===`ArrowUp`?(e.preventDefault(),b()):e.key===`ArrowDown`?(e.preventDefault(),x()):e.key===`Home`?(e.preventDefault(),y(r)):e.key===`End`&&(e.preventDefault(),y(a===1/0?g:a)))},className:i(`inline-flex items-center gap-2`,d),children:[(0,s.jsx)(`button`,{type:`button`,"aria-label":`Decrease`,onClick:x,disabled:l||g<=r,className:i(`w-8 h-8 flex items-center justify-center rounded-lg border border-border-primary bg-surface-secondary text-text-primary`,`hover:bg-surface-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue`,u?`w-7 h-7`:``),children:(0,s.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":!0,children:(0,s.jsx)(`path`,{d:`M5 12h14`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})})}),(0,s.jsx)(`input`,{ref:_,type:`number`,value:Number.isFinite(g)?String(g):``,onChange:e=>y(Number(e.target.value||0)),disabled:l,className:i(`w-16 text-center bg-transparent outline-none text-text-primary`,u?`text-sm`:`text-base`),"aria-label":f,min:r,max:Number.isFinite(a)?a:void 0,step:c}),(0,s.jsx)(`button`,{type:`button`,"aria-label":`Increase`,onClick:b,disabled:l||g>=a,className:i(`w-8 h-8 flex items-center justify-center rounded-lg border border-border-primary bg-surface-secondary text-text-primary`,`hover:bg-surface-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue`,u?`w-7 h-7`:``),children:(0,s.jsx)(`svg`,{width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":!0,children:(0,s.jsx)(`path`,{d:`M12 5v14M5 12h14`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`})})})]})},c.__docgenInfo={description:``,methods:[],displayName:`QuantitySelector`,props:{value:{required:!1,tsType:{name:`number`},description:``},defaultValue:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(v: number) => void`,signature:{arguments:[{type:{name:`number`},name:`v`}],return:{name:`void`}}},description:``},min:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`Infinity`,computed:!0}},step:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},compact:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Quantity'`,computed:!1}}}}})),u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{l(),u={title:`Forms/QuantitySelector`,component:c,tags:[`autodocs`]},d={args:{value:1,min:0,max:10,onChange:e=>console.log(`Quantity:`,e)}},f={args:{value:.5,min:.001,max:10,step:.001,format:`0.000`,onChange:e=>console.log(`Amount:`,e)}},p={args:{value:5,min:1,max:100,label:`Units`,onChange:e=>console.log(`Quantity:`,e)}},m={args:{value:3,min:1,max:10,disabled:!0,onChange:e=>console.log(`Quantity:`,e)}},h={args:{value:10,min:1,max:10,onChange:e=>console.log(`Quantity:`,e)}},g={args:{defaultValue:3,min:1,max:10,onChange:e=>console.log(`Quantity:`,e)}},_={args:{defaultValue:5,min:1,max:5,onChange:e=>console.log(`Quantity:`,e)}},v={args:{defaultValue:2,min:1,max:10,disabled:!0,onChange:e=>console.log(`Quantity:`,e)}},y={args:{defaultValue:1,min:0,max:99,compact:!0,onChange:e=>console.log(`Quantity:`,e)}},b={args:{defaultValue:50,min:1,max:100,step:5,onChange:e=>console.log(`Quantity:`,e)}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1,
    min: 0,
    max: 10,
    onChange: (val: number) => console.log('Quantity:', val)
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0.5,
    min: 0.001,
    max: 10,
    step: 0.001,
    format: '0.000',
    onChange: (val: number) => console.log('Amount:', val)
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 5,
    min: 1,
    max: 100,
    label: 'Units',
    onChange: (val: number) => console.log('Quantity:', val)
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 3,
    min: 1,
    max: 10,
    disabled: true,
    onChange: (val: number) => console.log('Quantity:', val)
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: 10,
    min: 1,
    max: 10,
    onChange: (val: number) => console.log('Quantity:', val)
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 3,
    min: 1,
    max: 10,
    onChange: v => console.log('Quantity:', v)
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 5,
    min: 1,
    max: 5,
    onChange: v => console.log('Quantity:', v)
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 2,
    min: 1,
    max: 10,
    disabled: true,
    onChange: v => console.log('Quantity:', v)
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 1,
    min: 0,
    max: 99,
    compact: true,
    onChange: v => console.log('Quantity:', v)
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 50,
    min: 1,
    max: 100,
    step: 5,
    onChange: v => console.log('Quantity:', v)
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`CryptoAmount`,`WithLabel`,`Disabled`,`MaxReached`,`WithDefaultValue`,`WithLimits`,`DisabledWithDefault`,`Compact`,`LargeRange`]}))();export{y as Compact,f as CryptoAmount,d as Default,m as Disabled,v as DisabledWithDefault,b as LargeRange,h as MaxReached,g as WithDefaultValue,p as WithLabel,_ as WithLimits,x as __namedExportsOrder,u as default};