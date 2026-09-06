import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C8gh9c0G.js";import{n as r,t as i}from"./utils-CcEteFRA.js";import{t as a}from"./jsx-runtime-WZfjI2gv.js";var o,s,c,l=e((()=>{o=t(n()),r(),s=a(),c=({methods:e,value:t,defaultValue:n,onChange:r,onAdd:a,className:c=``,showAdd:l=!0})=>{let u=typeof t==`string`,[d,f]=o.useState(n),p=u?t:d,m=t=>{let n=e.find(e=>e.id===t);!n||n.disabled||(u||f(t),r?.(t))};return(0,s.jsxs)(`div`,{className:i(`space-y-3`,c),children:[(0,s.jsx)(`div`,{role:`radiogroup`,"aria-label":`Payment methods`,className:`grid gap-3`,children:e.map(e=>{let t=p===e.id;return(0,s.jsxs)(`button`,{type:`button`,role:`radio`,"aria-checked":t,"aria-disabled":e.disabled,onClick:()=>m(e.id),disabled:e.disabled,className:i(`w-full flex items-center justify-between gap-4 p-4 rounded-xl border transition-colors shadow-sm`,t?`border-accent-blue bg-accent-blue/5 text-accent-blue shadow-[0_1px_2px_rgba(10,132,255,0.08)]`:`border-border-primary bg-surface-secondary text-text-primary`,e.disabled?`opacity-40 cursor-not-allowed`:`hover:border-accent-blue`),children:[(0,s.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,s.jsxs)(`div`,{className:`flex-shrink-0`,children:[e.type===`card`&&(0,s.jsx)(`div`,{className:`w-10 h-6 flex items-center justify-center bg-white rounded-md text-sm font-medium`,children:`●●●●`}),e.type===`applepay`&&(0,s.jsx)(`div`,{className:`text-sm font-medium`,children:``}),e.type===`paypal`&&(0,s.jsx)(`div`,{className:`text-sm font-medium`,children:`PP`}),e.type===`bank`&&(0,s.jsx)(`div`,{className:`text-sm font-medium`,children:`🏦`})]}),(0,s.jsxs)(`div`,{className:`text-left`,children:[(0,s.jsx)(`div`,{className:i(`text-sm font-medium`,t?`text-accent-blue`:`text-text-primary`),children:e.label??e.type}),e.details&&(0,s.jsx)(`div`,{className:i(`text-xs mt-1`,t?`text-accent-blue/80`:`text-text-tertiary`),children:e.details})]})]}),(0,s.jsx)(`div`,{className:`flex items-center`,children:t?(0,s.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,"aria-hidden":!0,className:`text-accent-blue`,children:(0,s.jsx)(`path`,{d:`M5 13l4 4L19 7`,stroke:`currentColor`,strokeWidth:2.5,strokeLinecap:`round`,strokeLinejoin:`round`})}):(0,s.jsx)(`div`,{className:`w-4 h-4 rounded-full border border-border-primary`})})]},e.id)})}),l&&(0,s.jsx)(`div`,{children:(0,s.jsx)(`button`,{type:`button`,onClick:()=>a?.(),className:`inline-flex items-center gap-2 px-3 py-2 rounded-md bg-transparent text-accent-blue hover:underline`,children:`+ Add payment method`})})]})},c.__docgenInfo={description:``,methods:[],displayName:`PaymentMethodSelector`,props:{methods:{required:!0,tsType:{name:`Array`,elements:[{name:`PaymentMethod`}],raw:`PaymentMethod[]`},description:``},value:{required:!1,tsType:{name:`string`},description:``},defaultValue:{required:!1,tsType:{name:`string`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},onAdd:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},showAdd:{required:!1,tsType:{name:`boolean`},description:`show an Add payment method button`,defaultValue:{value:`true`,computed:!1}}}}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{l(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Fintech/Payments/PaymentMethodSelector`,component:c,tags:[`autodocs`]},f=[{id:`visa`,type:`card`,label:`Visa •••• 4242`,details:`Expires 12/27`},{id:`mastercard`,type:`card`,label:`Mastercard •••• 8888`,details:`Expires 09/26`},{id:`amex`,type:`card`,label:`Amex •••• 3000`,details:`Expires 03/28`},{id:`bank`,type:`bank`,label:`Chase Checking •••• 5678`,details:`Free transfers`}],p={args:{methods:f,onChange:u()}},m={args:{methods:f,value:`visa`,onChange:u()}},h={args:{methods:[{id:`crypto`,type:`card`,label:`USDC (Polygon)`,details:`0x8f3...7e91`}],value:`crypto`,onChange:u()}},g={args:{methods:[{id:`apple`,type:`applepay`,label:`Apple Pay`},{id:`card`,type:`card`,label:`Visa •••• 4242`,details:`Expires 12/27`}],value:`apple`,onChange:u()}},_={args:{methods:[{id:`paypal`,type:`paypal`,label:`PayPal`,details:`cesar@example.com`}],value:`paypal`,onChange:u()}},v={args:{methods:f,value:`bank`,onChange:u(),onAdd:u(),showAdd:!0}},y={args:{methods:f,value:`visa`,onChange:u(),showAdd:!1}},b={args:{methods:[{id:`visa`,type:`card`,label:`Visa •••• 4242`,details:`Expires 12/27`},{id:`amex`,type:`card`,label:`Amex •••• 3000`,details:`Expired 03/24`,disabled:!0}],value:`visa`,onChange:u()}},x={args:{methods:[{id:`visa`,type:`card`,label:`Visa •••• 4242`,details:`Default`},{id:`mastercard`,type:`card`,label:`Mastercard •••• 8888`},{id:`amex`,type:`card`,label:`Amex •••• 3000`},{id:`discover`,type:`card`,label:`Discover •••• 1111`},{id:`apple`,type:`applepay`,label:`Apple Pay`},{id:`paypal`,type:`paypal`,label:`PayPal`,details:`cesar@example.com`},{id:`bank`,type:`bank`,label:`Wells Fargo Checking`,details:`•••• 4321`}],value:`visa`,onChange:u()}},S={args:{methods:f,defaultValue:`mastercard`,onChange:u()}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    methods: defaultMethods,
    onChange: fn()
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    methods: defaultMethods,
    value: 'visa',
    onChange: fn()
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    methods: [{
      id: 'crypto',
      type: 'card',
      label: 'USDC (Polygon)',
      details: '0x8f3...7e91'
    }],
    value: 'crypto',
    onChange: fn()
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    methods: [{
      id: 'apple',
      type: 'applepay',
      label: 'Apple Pay'
    }, {
      id: 'card',
      type: 'card',
      label: 'Visa •••• 4242',
      details: 'Expires 12/27'
    }],
    value: 'apple',
    onChange: fn()
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    methods: [{
      id: 'paypal',
      type: 'paypal',
      label: 'PayPal',
      details: 'cesar@example.com'
    }],
    value: 'paypal',
    onChange: fn()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    methods: defaultMethods,
    value: 'bank',
    onChange: fn(),
    onAdd: fn(),
    showAdd: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    methods: defaultMethods,
    value: 'visa',
    onChange: fn(),
    showAdd: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    methods: [{
      id: 'visa',
      type: 'card',
      label: 'Visa •••• 4242',
      details: 'Expires 12/27'
    }, {
      id: 'amex',
      type: 'card',
      label: 'Amex •••• 3000',
      details: 'Expired 03/24',
      disabled: true
    }],
    value: 'visa',
    onChange: fn()
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    methods: [{
      id: 'visa',
      type: 'card',
      label: 'Visa •••• 4242',
      details: 'Default'
    }, {
      id: 'mastercard',
      type: 'card',
      label: 'Mastercard •••• 8888'
    }, {
      id: 'amex',
      type: 'card',
      label: 'Amex •••• 3000'
    }, {
      id: 'discover',
      type: 'card',
      label: 'Discover •••• 1111'
    }, {
      id: 'apple',
      type: 'applepay',
      label: 'Apple Pay'
    }, {
      id: 'paypal',
      type: 'paypal',
      label: 'PayPal',
      details: 'cesar@example.com'
    }, {
      id: 'bank',
      type: 'bank',
      label: 'Wells Fargo Checking',
      details: '•••• 4321'
    }],
    value: 'visa',
    onChange: fn()
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    methods: defaultMethods,
    defaultValue: 'mastercard',
    onChange: fn()
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`WithSelected`,`SingleMethod`,`ApplePayOnly`,`PayPalOnly`,`WithAddButton`,`HiddenAddButton`,`DisabledMethod`,`ManyMethods`,`Uncontrolled`]}))();export{g as ApplePayOnly,p as Default,b as DisabledMethod,y as HiddenAddButton,x as ManyMethods,_ as PayPalOnly,h as SingleMethod,S as Uncontrolled,v as WithAddButton,m as WithSelected,C as __namedExportsOrder,d as default};