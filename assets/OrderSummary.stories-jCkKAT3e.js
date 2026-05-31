import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-CNj2_6xa.js";import{B as n,t as r}from"./lucide-react-BjI3czzr.js";import{t as i}from"./jsx-runtime-WZfjI2gv.js";var a,o,s=e((()=>{t(),r(),a=i(),o=({items:e,currency:t=`$`,discountAmount:r=0,shippingCost:i=0,taxAmount:o=0,className:s=``})=>{let c=e.reduce((e,t)=>e+t.price*t.quantity,0),l=c-r+i+o;return(0,a.jsxs)(`div`,{className:`bg-surface-primary border border-border-primary rounded-2xl overflow-hidden shadow-sm ${s}`,children:[(0,a.jsx)(`div`,{className:`p-6 border-b border-border-primary bg-background-secondary/30`,children:(0,a.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,a.jsx)(`div`,{className:`w-10 h-10 rounded-xl bg-accent-blue/10 flex items-center justify-center`,children:(0,a.jsx)(n,{className:`w-5 h-5 text-accent-blue`})}),(0,a.jsxs)(`div`,{children:[(0,a.jsx)(`h2`,{className:`text-lg font-bold text-text-primary`,children:`Order Summary`}),(0,a.jsxs)(`p`,{className:`text-sm text-text-secondary`,children:[e.length,` `,e.length===1?`item`:`items`]})]})]})}),(0,a.jsxs)(`div`,{className:`p-6`,children:[(0,a.jsx)(`div`,{className:`space-y-6 mb-8`,children:e.map(e=>(0,a.jsxs)(`div`,{className:`flex gap-4 group`,children:[(0,a.jsxs)(`div`,{className:`relative overflow-hidden rounded-xl border border-border-primary bg-background-tertiary`,children:[(0,a.jsx)(`img`,{src:e.image,alt:e.name,className:`w-20 h-20 object-cover transform group-hover:scale-105 transition-transform duration-500`}),(0,a.jsxs)(`div`,{className:`absolute bottom-0 right-0 bg-surface-primary/90 backdrop-blur-sm px-2 py-0.5 rounded-tl-lg border-t border-l border-border-primary text-xs font-medium text-text-secondary`,children:[`x`,e.quantity]})]}),(0,a.jsxs)(`div`,{className:`flex-1 min-w-0 py-1`,children:[(0,a.jsxs)(`div`,{className:`flex justify-between items-start gap-4`,children:[(0,a.jsxs)(`div`,{className:`space-y-1`,children:[(0,a.jsx)(`h3`,{className:`font-semibold text-text-primary text-sm leading-tight`,children:e.name}),e.variant&&(0,a.jsx)(`p`,{className:`text-xs text-text-tertiary inline-flex items-center px-2 py-0.5 rounded-md bg-background-secondary border border-border-primary`,children:e.variant})]}),(0,a.jsxs)(`p`,{className:`font-semibold text-text-primary text-sm whitespace-nowrap`,children:[t,(e.price*e.quantity).toFixed(2)]})]}),e.quantity>1&&(0,a.jsxs)(`p`,{className:`text-xs text-text-tertiary mt-2`,children:[t,e.price.toFixed(2),` each`]})]})]},e.id))}),(0,a.jsxs)(`div`,{className:`space-y-3 pt-6 border-t border-border-dashed`,children:[(0,a.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,a.jsx)(`span`,{className:`text-text-secondary`,children:`Subtotal`}),(0,a.jsxs)(`span`,{className:`font-medium text-text-primary`,children:[t,c.toFixed(2)]})]}),r>0&&(0,a.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,a.jsx)(`span`,{className:`text-text-secondary`,children:`Discount`}),(0,a.jsxs)(`span`,{className:`font-medium text-status-success bg-status-success/10 px-2 py-0.5 rounded-md`,children:[`-`,t,r.toFixed(2)]})]}),(0,a.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,a.jsx)(`span`,{className:`text-text-secondary`,children:`Shipping`}),(0,a.jsx)(`span`,{className:`font-medium ${i===0?`text-status-success`:`text-text-primary`}`,children:i===0?`Free`:`${t}${i.toFixed(2)}`})]}),o>0&&(0,a.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,a.jsx)(`span`,{className:`text-text-secondary`,children:`Tax`}),(0,a.jsxs)(`span`,{className:`font-medium text-text-primary`,children:[t,o.toFixed(2)]})]}),(0,a.jsxs)(`div`,{className:`flex justify-between items-baseline pt-4 mt-4 border-t border-border-primary`,children:[(0,a.jsx)(`span`,{className:`text-base font-semibold text-text-primary`,children:`Total`}),(0,a.jsxs)(`span`,{className:`text-2xl font-bold text-text-primary tracking-tight`,children:[t,l.toFixed(2)]})]})]})]})]})},o.__docgenInfo={description:``,methods:[],displayName:`OrderSummary`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`OrderItem`}],raw:`OrderItem[]`},description:``},currency:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'$'`,computed:!1}},discountAmount:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},shippingCost:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},taxAmount:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),c,l,u,d,f,p,m,h,g,_;e((()=>{s(),c={title:`E-Commerce/OrderSummary`,component:o,tags:[`autodocs`]},l={args:{items:[{label:`Bitcoin`,value:`0.0025 BTC`,amount:`$145.20`},{label:`Ethereum`,value:`0.015 ETH`,amount:`$42.30`}],total:`$187.50`,currency:`USD`}},u={args:{items:[{label:`Amount`,value:`500.00 USDC`,amount:`$500.00`},{label:`Network Fee`,value:`~$2.50`,amount:`$2.50`},{label:`Processing Fee`,value:`1.5%`,amount:`$7.50`}],total:`$510.00`,currency:`USD`,fees:`$10.00`}},d={args:{items:[{label:`USDT Purchase`,value:`1,000 USDT`,amount:`$1,005.00`}],total:`$1,005.00`,currency:`USD`}},f={args:{items:[{label:`Swap: ETH → BTC`,value:`0.1 ETH → 0.004 BTC`,amount:`$320.00`}],total:`$320.00`,status:`completed`,currency:`USD`}},p={args:{items:[],total:`---`,loading:!0,currency:`USD`}},m={args:{items:[{id:`1`,name:`Apple MacBook Pro 16"`,price:2499,quantity:1,image:``,variant:`Space Black`},{id:`2`,name:`USB-C Hub`,price:49.99,quantity:1,image:``,variant:`7-in-1`}],currency:`USD`,discountAmount:150,shippingCost:0,taxAmount:254.89}},h={args:{items:[{id:`1`,name:`Wireless Mouse`,price:79.99,quantity:2,image:``},{id:`2`,name:`Mechanical Keyboard`,price:199.99,quantity:1,image:``,variant:`Blue Switch`},{id:`3`,name:`Monitor Stand`,price:49.99,quantity:1,image:``},{id:`4`,name:`Webcam 4K`,price:129.99,quantity:1,image:``},{id:`5`,name:`Desk Lamp`,price:39.99,quantity:1,image:``}],currency:`USD`,shippingCost:12.99,taxAmount:38.4}},g={args:{items:[{id:`1`,name:`Annual Premium Subscription`,price:299.99,quantity:1,image:``}],currency:`USD`,taxAmount:30}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Bitcoin',
      value: '0.0025 BTC',
      amount: '$145.20'
    }, {
      label: 'Ethereum',
      value: '0.015 ETH',
      amount: '$42.30'
    }],
    total: '$187.50',
    currency: 'USD'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Amount',
      value: '500.00 USDC',
      amount: '$500.00'
    }, {
      label: 'Network Fee',
      value: '~$2.50',
      amount: '$2.50'
    }, {
      label: 'Processing Fee',
      value: '1.5%',
      amount: '$7.50'
    }],
    total: '$510.00',
    currency: 'USD',
    fees: '$10.00'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'USDT Purchase',
      value: '1,000 USDT',
      amount: '$1,005.00'
    }],
    total: '$1,005.00',
    currency: 'USD'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Swap: ETH → BTC',
      value: '0.1 ETH → 0.004 BTC',
      amount: '$320.00'
    }],
    total: '$320.00',
    status: 'completed',
    currency: 'USD'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    total: '---',
    loading: true,
    currency: 'USD'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      name: 'Apple MacBook Pro 16"',
      price: 2499.00,
      quantity: 1,
      image: '',
      variant: 'Space Black'
    }, {
      id: '2',
      name: 'USB-C Hub',
      price: 49.99,
      quantity: 1,
      image: '',
      variant: '7-in-1'
    }],
    currency: 'USD',
    discountAmount: 150.00,
    shippingCost: 0,
    taxAmount: 254.89
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      name: 'Wireless Mouse',
      price: 79.99,
      quantity: 2,
      image: ''
    }, {
      id: '2',
      name: 'Mechanical Keyboard',
      price: 199.99,
      quantity: 1,
      image: '',
      variant: 'Blue Switch'
    }, {
      id: '3',
      name: 'Monitor Stand',
      price: 49.99,
      quantity: 1,
      image: ''
    }, {
      id: '4',
      name: 'Webcam 4K',
      price: 129.99,
      quantity: 1,
      image: ''
    }, {
      id: '5',
      name: 'Desk Lamp',
      price: 39.99,
      quantity: 1,
      image: ''
    }],
    currency: 'USD',
    shippingCost: 12.99,
    taxAmount: 38.40
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: '1',
      name: 'Annual Premium Subscription',
      price: 299.99,
      quantity: 1,
      image: ''
    }],
    currency: 'USD',
    taxAmount: 30.00
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithFees`,`SingleItem`,`WithStatus`,`Loading`,`WithDiscount`,`MultipleItems`,`SingleSubscription`]}))();export{l as Default,p as Loading,h as MultipleItems,d as SingleItem,g as SingleSubscription,m as WithDiscount,u as WithFees,f as WithStatus,_ as __namedExportsOrder,c as default};