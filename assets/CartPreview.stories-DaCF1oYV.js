import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C3uANx_z.js";import{B as r,Tr as i,Tt as a,i as o,k as s,t as c,ut as l,x as u}from"./lucide-react-h9NbdGwk.js";import{t as d}from"./jsx-runtime-WZfjI2gv.js";import{t as f}from"./Input-B6Rto-_q.js";import{t as p}from"./Input-Drz1-9I2.js";import{n as m,t as h}from"./Button-DZsJlLci.js";var g,_,v,y=e((()=>{g=t(n()),c(),p(),h(),_=d(),v=({items:e,currency:t=`$`,onUpdateQuantity:n,onRemoveItem:c,onCheckout:d,onClose:p,discountCode:h,discountAmount:v=0,shippingCost:y=0,freeShippingThreshold:b,isOpen:x=!0,variant:S=`sidebar`,className:C=``})=>{let[w,T]=(0,g.useState)(h||``),[E,D]=(0,g.useState)(!1),O=e.reduce((e,t)=>e+t.price*t.quantity,0),k=v,A=b&&O>=b?0:y,j=O-k+A,M=(e,t)=>{t<1||n?.(e,t)},N=e=>{c?.(e)},P=()=>{D(!0),setTimeout(()=>{D(!1),console.log(`Promo code applied:`,w)},500)},F=b?Math.min(O/b*100,100):0,I=b?Math.max(b-O,0):0;return x?(0,_.jsxs)(_.Fragment,{children:[S===`modal`&&(0,_.jsx)(`div`,{className:`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in`,onClick:p}),(0,_.jsxs)(`div`,{className:`cart-preview ${{sidebar:`fixed right-0 top-0 h-full w-full max-w-md shadow-2xl`,dropdown:`absolute right-0 top-full mt-2 w-96 shadow-xl rounded-2xl`,modal:`fixed inset-0 flex items-center justify-center p-4`}[S]} bg-surface-primary border-l border-border-primary z-50 animate-slide-in-right ${C}`,children:[(0,_.jsxs)(`div`,{className:`flex flex-col ${{sidebar:`h-full`,dropdown:`max-h-[600px]`,modal:`w-full max-w-lg max-h-[90vh]`}[S]}`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between p-6 border-b border-border-primary`,children:[(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,_.jsx)(r,{className:`w-6 h-6 text-text-primary`}),(0,_.jsxs)(`div`,{children:[(0,_.jsx)(`h2`,{className:`text-xl font-bold text-text-primary`,children:`Shopping Cart`}),(0,_.jsxs)(`p`,{className:`text-sm text-text-secondary`,children:[e.length,` `,e.length===1?`item`:`items`]})]})]}),p&&(0,_.jsx)(`button`,{onClick:p,className:`w-10 h-10 rounded-xl flex items-center justify-center hover:bg-background-tertiary/50 transition-colors`,"aria-label":`Close cart`,children:(0,_.jsx)(o,{className:`w-5 h-5 text-text-secondary`})})]}),b&&O<b&&(0,_.jsxs)(`div`,{className:`p-4 bg-accent-blue/5 border-b border-border-primary`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between mb-2`,children:[(0,_.jsxs)(`p`,{className:`text-sm text-text-secondary`,children:[`Add`,` `,(0,_.jsxs)(`span`,{className:`font-semibold text-accent-blue`,children:[t,I.toFixed(2)]}),` `,`for free shipping`]}),(0,_.jsxs)(`span`,{className:`text-xs text-text-tertiary`,children:[F.toFixed(0),`%`]})]}),(0,_.jsx)(`div`,{className:`h-2 bg-background-tertiary rounded-full overflow-hidden`,children:(0,_.jsx)(`div`,{className:`h-full bg-accent-blue transition-all duration-500`,style:{width:`${F}%`}})})]}),(0,_.jsx)(`div`,{className:`flex-1 overflow-y-auto p-4 space-y-4`,children:e.length===0?(0,_.jsxs)(`div`,{className:`flex flex-col items-center justify-center py-12`,children:[(0,_.jsx)(r,{className:`w-16 h-16 text-text-quaternary mb-4`}),(0,_.jsx)(`p`,{className:`text-text-secondary text-center`,children:`Your cart is empty`})]}):e.map(e=>(0,_.jsxs)(`div`,{className:`flex gap-4 p-3 rounded-xl hover:bg-background-secondary transition-colors`,children:[(0,_.jsx)(`img`,{src:e.image,alt:e.name,className:`w-20 h-20 object-cover rounded-lg bg-background-tertiary flex-shrink-0`}),(0,_.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,_.jsx)(`h3`,{className:`font-semibold text-text-primary text-sm mb-1 truncate`,children:e.name}),e.variant&&(0,_.jsx)(`p`,{className:`text-xs text-text-tertiary mb-2`,children:e.variant}),(0,_.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,_.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,_.jsx)(`button`,{onClick:()=>M(e.id,e.quantity-1),disabled:e.quantity<=1,className:`w-9 h-9 rounded-lg flex items-center justify-center bg-background-tertiary hover:bg-background-tertiary/70 disabled:opacity-40 disabled:cursor-not-allowed transition-colors`,"aria-label":`Decrease quantity`,children:(0,_.jsx)(a,{className:`w-4 h-4 text-text-primary`})}),(0,_.jsx)(`span`,{className:`text-base font-medium text-text-primary min-w-[2rem] text-center`,children:e.quantity}),(0,_.jsx)(`button`,{onClick:()=>M(e.id,e.quantity+1),disabled:e.maxQuantity?e.quantity>=e.maxQuantity:!1,className:`w-9 h-9 rounded-lg flex items-center justify-center bg-background-tertiary hover:bg-background-tertiary/70 disabled:opacity-40 disabled:cursor-not-allowed transition-colors`,"aria-label":`Increase quantity`,children:(0,_.jsx)(l,{className:`w-4 h-4 text-text-primary`})})]}),(0,_.jsxs)(`div`,{className:`text-right`,children:[(0,_.jsxs)(`p`,{className:`font-semibold text-text-primary`,children:[t,(e.price*e.quantity).toFixed(2)]}),e.quantity>1&&(0,_.jsxs)(`p`,{className:`text-xs text-text-tertiary`,children:[t,e.price.toFixed(2),` each`]})]})]})]}),(0,_.jsx)(`button`,{onClick:()=>N(e.id),className:`w-9 h-9 rounded-lg flex items-center justify-center hover:bg-status-error/10 text-text-tertiary hover:text-status-error transition-colors flex-shrink-0`,"aria-label":`Remove item`,children:(0,_.jsx)(u,{className:`w-5 h-5`})})]},e.id))}),e.length>0&&(0,_.jsx)(`div`,{className:`p-4 border-t border-border-primary`,children:(0,_.jsxs)(`div`,{className:`flex gap-2 items-end`,children:[(0,_.jsx)(`div`,{className:`flex-1`,children:(0,_.jsx)(f,{type:`text`,value:w,onChange:e=>T(e.target.value),placeholder:`Promo code`,leftIcon:(0,_.jsx)(s,{className:`w-4 h-4`})})}),(0,_.jsx)(m,{onClick:P,disabled:!w||E,variant:`subtle`,children:E?`Applying...`:`Apply`})]})}),e.length>0&&(0,_.jsxs)(`div`,{className:`p-6 border-t border-border-primary bg-background-secondary/50`,children:[(0,_.jsxs)(`div`,{className:`space-y-3 mb-4`,children:[(0,_.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,_.jsx)(`span`,{className:`text-text-secondary`,children:`Subtotal`}),(0,_.jsxs)(`span`,{className:`font-medium text-text-primary`,children:[t,O.toFixed(2)]})]}),k>0&&(0,_.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,_.jsx)(`span`,{className:`text-text-secondary`,children:`Discount`}),(0,_.jsxs)(`span`,{className:`font-medium text-status-success`,children:[`-`,t,k.toFixed(2)]})]}),A>0&&(0,_.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,_.jsx)(`span`,{className:`text-text-secondary`,children:`Shipping`}),(0,_.jsxs)(`span`,{className:`font-medium text-text-primary`,children:[t,A.toFixed(2)]})]}),A===0&&b&&O>=b&&(0,_.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,_.jsx)(`span`,{className:`text-text-secondary`,children:`Shipping`}),(0,_.jsx)(`span`,{className:`font-medium text-status-success`,children:`Free`})]})]}),(0,_.jsxs)(`div`,{className:`flex justify-between items-baseline pt-3 border-t border-border-primary mb-4`,children:[(0,_.jsx)(`span`,{className:`text-lg font-semibold text-text-primary`,children:`Total`}),(0,_.jsxs)(`span`,{className:`text-2xl font-bold text-text-primary`,children:[t,j.toFixed(2)]})]}),(0,_.jsx)(m,{onClick:d,variant:`primary`,size:`lg`,fullWidth:!0,rightIcon:(0,_.jsx)(i,{className:`w-5 h-5`}),children:`Proceed to Checkout`})]})]}),(0,_.jsx)(`style`,{dangerouslySetInnerHTML:{__html:`
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .animate-slide-in-right {
            animation: slideInRight 300ms cubic-bezier(0.16, 1, 0.3, 1);
          }

          .animate-fade-in {
            animation: fadeIn 200ms cubic-bezier(0.16, 1, 0.3, 1);
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}})]})]}):null},v.__docgenInfo={description:``,methods:[],displayName:`CartPreview`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`CartItem`}],raw:`CartItem[]`},description:``},currency:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'$'`,computed:!1}},onUpdateQuantity:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(itemId: string, quantity: number) => void`,signature:{arguments:[{type:{name:`string`},name:`itemId`},{type:{name:`number`},name:`quantity`}],return:{name:`void`}}},description:``},onRemoveItem:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(itemId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`itemId`}],return:{name:`void`}}},description:``},onCheckout:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},discountCode:{required:!1,tsType:{name:`string`},description:``},discountAmount:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},shippingCost:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},freeShippingThreshold:{required:!1,tsType:{name:`number`},description:``},isOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'sidebar' | 'dropdown' | 'modal'`,elements:[{name:`literal`,value:`'sidebar'`},{name:`literal`,value:`'dropdown'`},{name:`literal`,value:`'modal'`}]},description:``,defaultValue:{value:`'sidebar'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),b,x,S,C,w,T,E,D,O,k,A;e((()=>{y(),b={title:`E-Commerce/CartPreview`,component:v,tags:[`autodocs`]},x=[{id:`1`,name:`Wireless Headphones`,price:299.99,quantity:1,image:`https://picsum.photos/seed/headphones/80/80`,variant:`Black`},{id:`2`,name:`USB-C Hub`,price:79.99,quantity:2,image:`https://picsum.photos/seed/usbhub/80/80`},{id:`3`,name:`Phone Case`,price:39.99,quantity:1,image:`https://picsum.photos/seed/case/80/80`,variant:`Midnight Blue`}],S={args:{items:x,currency:`$`,isOpen:!0,variant:`sidebar`}},C={args:{items:x.slice(0,2),currency:`$`,isOpen:!0,variant:`dropdown`}},w={args:{items:x,currency:`$`,isOpen:!0,variant:`modal`}},T={args:{items:x.slice(0,2),currency:`$`,isOpen:!0,variant:`sidebar`,discountCode:`SAVE20`,discountAmount:75.99,shippingCost:0}},E={args:{items:x,currency:`$`,isOpen:!0,variant:`sidebar`,shippingCost:9.99,freeShippingThreshold:100}},D={args:{items:x,currency:`$`,isOpen:!1}},O={args:{items:[],currency:`$`,isOpen:!0,variant:`dropdown`}},k={args:{items:[x[0]],currency:`$`,isOpen:!0,variant:`sidebar`}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    currency: '$',
    isOpen: true,
    variant: 'sidebar'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 2),
    currency: '$',
    isOpen: true,
    variant: 'dropdown'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    currency: '$',
    isOpen: true,
    variant: 'modal'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 2),
    currency: '$',
    isOpen: true,
    variant: 'sidebar',
    discountCode: 'SAVE20',
    discountAmount: 75.99,
    shippingCost: 0
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    currency: '$',
    isOpen: true,
    variant: 'sidebar',
    shippingCost: 9.99,
    freeShippingThreshold: 100
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    currency: '$',
    isOpen: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    currency: '$',
    isOpen: true,
    variant: 'dropdown'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    items: [sampleItems[0]],
    currency: '$',
    isOpen: true,
    variant: 'sidebar'
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`DropdownVariant`,`ModalVariant`,`WithDiscount`,`WithFreeShipping`,`Closed`,`EmptyCart`,`SingleItem`]}))();export{D as Closed,S as Default,C as DropdownVariant,O as EmptyCart,w as ModalVariant,k as SingleItem,T as WithDiscount,E as WithFreeShipping,A as __namedExportsOrder,b as default};