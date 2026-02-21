import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as F,R as u}from"./iframe-Dan5ncgG.js";import{I as L}from"./Input-DWo3NzoY.js";import{B as O}from"./Button-DwkrxhSZ.js";import{S as V}from"./shopping-bag-IewQGcHW.js";import{X}from"./x-CtAXLAxX.js";import{M as H}from"./minus-nBfVd-Dv.js";import{P as K}from"./plus-D39KAmmM.js";import{T as Y}from"./trash-2-CkHA_SCo.js";import{T as G}from"./tag-jdEvR1eU.js";import{A as J}from"./arrow-right-UohqZo-7.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-DCTGQFKY.js";import"./resolve-elements-juiWZL7b.js";import"./createLucideIcon-jCLSnv7o.js";const p=({items:i,currency:d="$",onUpdateQuantity:o,onRemoveItem:c,onCheckout:m,onClose:t,discountCode:a,discountAmount:r=0,shippingCost:s=0,freeShippingThreshold:l,isOpen:v=!0,variant:g="sidebar",className:D=""})=>{const[q,M]=F.useState(a||""),[P,U]=F.useState(!1),x=i.reduce((n,y)=>n+y.price*y.quantity,0),Q=r,b=l&&x>=l?0:s,E=x-Q+b,T=(n,y)=>{y<1||o?.(n,y)},B=n=>{c?.(n)},z=()=>{U(!0),setTimeout(()=>{U(!1),console.log("Promo code applied:",q)},500)},A=l?Math.min(x/l*100,100):0,W=l?Math.max(l-x,0):0;if(!v)return null;const _={sidebar:"fixed right-0 top-0 h-full w-full max-w-md shadow-2xl",dropdown:"absolute right-0 top-full mt-2 w-96 shadow-xl rounded-2xl",modal:"fixed inset-0 flex items-center justify-center p-4"},$={sidebar:"h-full",dropdown:"max-h-[600px]",modal:"w-full max-w-lg max-h-[90vh]"};return e.jsxs(e.Fragment,{children:[g==="modal"&&e.jsx("div",{className:"fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fade-in",onClick:t}),e.jsxs("div",{className:`cart-preview ${_[g]} bg-surface-primary border-l border-border-primary z-50 animate-slide-in-right ${D}`,children:[e.jsxs("div",{className:`flex flex-col ${$[g]}`,children:[e.jsxs("div",{className:"flex items-center justify-between p-6 border-b border-border-primary",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(V,{className:"w-6 h-6 text-text-primary"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-text-primary",children:"Shopping Cart"}),e.jsxs("p",{className:"text-sm text-text-secondary",children:[i.length," ",i.length===1?"item":"items"]})]})]}),t&&e.jsx("button",{onClick:t,className:"w-10 h-10 rounded-xl flex items-center justify-center hover:bg-background-tertiary/50 transition-colors","aria-label":"Close cart",children:e.jsx(X,{className:"w-5 h-5 text-text-secondary"})})]}),l&&x<l&&e.jsxs("div",{className:"p-4 bg-accent-blue/5 border-b border-border-primary",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsxs("p",{className:"text-sm text-text-secondary",children:["Add"," ",e.jsxs("span",{className:"font-semibold text-accent-blue",children:[d,W.toFixed(2)]})," ","for free shipping"]}),e.jsxs("span",{className:"text-xs text-text-tertiary",children:[A.toFixed(0),"%"]})]}),e.jsx("div",{className:"h-2 bg-background-tertiary rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-accent-blue transition-all duration-500",style:{width:`${A}%`}})})]}),e.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-4",children:i.length===0?e.jsxs("div",{className:"flex flex-col items-center justify-center py-12",children:[e.jsx(V,{className:"w-16 h-16 text-text-quaternary mb-4"}),e.jsx("p",{className:"text-text-secondary text-center",children:"Your cart is empty"})]}):i.map(n=>e.jsxs("div",{className:"flex gap-4 p-3 rounded-xl hover:bg-background-secondary transition-colors",children:[e.jsx("img",{src:n.image,alt:n.name,className:"w-20 h-20 object-cover rounded-lg bg-background-tertiary flex-shrink-0"}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:"font-semibold text-text-primary text-sm mb-1 truncate",children:n.name}),n.variant&&e.jsx("p",{className:"text-xs text-text-tertiary mb-2",children:n.variant}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>T(n.id,n.quantity-1),disabled:n.quantity<=1,className:"w-9 h-9 rounded-lg flex items-center justify-center bg-background-tertiary hover:bg-background-tertiary/70 disabled:opacity-40 disabled:cursor-not-allowed transition-colors","aria-label":"Decrease quantity",children:e.jsx(H,{className:"w-4 h-4 text-text-primary"})}),e.jsx("span",{className:"text-base font-medium text-text-primary min-w-[2rem] text-center",children:n.quantity}),e.jsx("button",{onClick:()=>T(n.id,n.quantity+1),disabled:n.maxQuantity?n.quantity>=n.maxQuantity:!1,className:"w-9 h-9 rounded-lg flex items-center justify-center bg-background-tertiary hover:bg-background-tertiary/70 disabled:opacity-40 disabled:cursor-not-allowed transition-colors","aria-label":"Increase quantity",children:e.jsx(K,{className:"w-4 h-4 text-text-primary"})})]}),e.jsxs("div",{className:"text-right",children:[e.jsxs("p",{className:"font-semibold text-text-primary",children:[d,(n.price*n.quantity).toFixed(2)]}),n.quantity>1&&e.jsxs("p",{className:"text-xs text-text-tertiary",children:[d,n.price.toFixed(2)," each"]})]})]})]}),e.jsx("button",{onClick:()=>B(n.id),className:"w-9 h-9 rounded-lg flex items-center justify-center hover:bg-status-error/10 text-text-tertiary hover:text-status-error transition-colors flex-shrink-0","aria-label":"Remove item",children:e.jsx(Y,{className:"w-5 h-5"})})]},n.id))}),i.length>0&&e.jsx("div",{className:"p-4 border-t border-border-primary",children:e.jsxs("div",{className:"flex gap-2 items-end",children:[e.jsx("div",{className:"flex-1",children:e.jsx(L,{type:"text",value:q,onChange:n=>M(n.target.value),placeholder:"Promo code",leftIcon:e.jsx(G,{className:"w-4 h-4"})})}),e.jsx(O,{onClick:z,disabled:!q||P,variant:"subtle",children:P?"Applying...":"Apply"})]})}),i.length>0&&e.jsxs("div",{className:"p-6 border-t border-border-primary bg-background-secondary/50",children:[e.jsxs("div",{className:"space-y-3 mb-4",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-text-secondary",children:"Subtotal"}),e.jsxs("span",{className:"font-medium text-text-primary",children:[d,x.toFixed(2)]})]}),Q>0&&e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-text-secondary",children:"Discount"}),e.jsxs("span",{className:"font-medium text-status-success",children:["-",d,Q.toFixed(2)]})]}),b>0&&e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-text-secondary",children:"Shipping"}),e.jsxs("span",{className:"font-medium text-text-primary",children:[d,b.toFixed(2)]})]}),b===0&&l&&x>=l&&e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-text-secondary",children:"Shipping"}),e.jsx("span",{className:"font-medium text-status-success",children:"Free"})]})]}),e.jsxs("div",{className:"flex justify-between items-baseline pt-3 border-t border-border-primary mb-4",children:[e.jsx("span",{className:"text-lg font-semibold text-text-primary",children:"Total"}),e.jsxs("span",{className:"text-2xl font-bold text-text-primary",children:[d,E.toFixed(2)]})]}),e.jsx(O,{onClick:m,variant:"primary",size:"lg",fullWidth:!0,rightIcon:e.jsx(J,{className:"w-5 h-5"}),children:"Proceed to Checkout"})]})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        `}})]})]})};p.__docgenInfo={description:"",methods:[],displayName:"CartPreview",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"CartItem"}],raw:"CartItem[]"},description:""},currency:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'$'",computed:!1}},onUpdateQuantity:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemId: string, quantity: number) => void",signature:{arguments:[{type:{name:"string"},name:"itemId"},{type:{name:"number"},name:"quantity"}],return:{name:"void"}}},description:""},onRemoveItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemId: string) => void",signature:{arguments:[{type:{name:"string"},name:"itemId"}],return:{name:"void"}}},description:""},onCheckout:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},discountCode:{required:!1,tsType:{name:"string"},description:""},discountAmount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},shippingCost:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},freeShippingThreshold:{required:!1,tsType:{name:"number"},description:""},isOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'sidebar' | 'dropdown' | 'modal'",elements:[{name:"literal",value:"'sidebar'"},{name:"literal",value:"'dropdown'"},{name:"literal",value:"'modal'"}]},description:"",defaultValue:{value:"'sidebar'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const he={title:"E-Commerce/CartPreview",component:p,parameters:{layout:"fullscreen",docs:{description:{component:"A premium shopping cart preview component for e-commerce applications. Features item management, quantity controls, promo codes, free shipping progress, and multiple display variants (sidebar, dropdown, modal)."}}},tags:[]},h=[{id:"1",name:"Premium Wireless Headphones",price:299.99,quantity:1,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",variant:"Black"},{id:"2",name:"Smart Watch Pro",price:349.99,quantity:2,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",variant:"Silver",maxQuantity:5},{id:"3",name:"Mechanical Keyboard",price:159.99,quantity:1,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=200&h=200&fit=crop"}],f={args:{variant:"sidebar",shippingCost:10,freeShippingThreshold:1e3},render:i=>{const[d,o]=u.useState(h),c=(t,a)=>{o(r=>r.map(s=>s.id===t?{...s,quantity:a}:s))},m=t=>{o(a=>a.filter(r=>r.id!==t))};return e.jsx("div",{className:"min-h-screen bg-background-primary",children:e.jsx(p,{...i,items:d,onUpdateQuantity:c,onRemoveItem:m,onCheckout:()=>alert("Proceeding to checkout!"),onClose:()=>console.log("Close cart")})})}},C={args:{variant:"sidebar",discountCode:"SAVE20",discountAmount:100,shippingCost:10,freeShippingThreshold:1e3},render:i=>{const[d,o]=u.useState(h),c=(t,a)=>{o(r=>r.map(s=>s.id===t?{...s,quantity:a}:s))},m=t=>{o(a=>a.filter(r=>r.id!==t))};return e.jsx("div",{className:"min-h-screen bg-background-primary",children:e.jsx(p,{...i,items:d,onUpdateQuantity:c,onRemoveItem:m,onCheckout:()=>alert("Proceeding to checkout!"),onClose:()=>console.log("Close cart")})})}},j={args:{variant:"sidebar",shippingCost:10,freeShippingThreshold:1e3},render:i=>{const[d,o]=u.useState([...h,{id:"4",name:"Designer Sunglasses",price:249.99,quantity:1,image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop"}]),c=(t,a)=>{o(r=>r.map(s=>s.id===t?{...s,quantity:a}:s))},m=t=>{o(a=>a.filter(r=>r.id!==t))};return e.jsx("div",{className:"min-h-screen bg-background-primary",children:e.jsx(p,{...i,items:d,onUpdateQuantity:c,onRemoveItem:m,onCheckout:()=>alert("Proceeding to checkout!"),onClose:()=>console.log("Close cart")})})}},I={args:{items:[],variant:"sidebar",onClose:()=>console.log("Close cart")},render:i=>e.jsx("div",{className:"min-h-screen bg-background-primary",children:e.jsx(p,{...i})})},N={args:{variant:"dropdown",shippingCost:10},render:i=>{const[d,o]=u.useState(h.slice(0,2)),c=(t,a)=>{o(r=>r.map(s=>s.id===t?{...s,quantity:a}:s))},m=t=>{o(a=>a.filter(r=>r.id!==t))};return e.jsx("div",{className:"min-h-screen bg-background-primary p-8",children:e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsx("div",{className:"flex justify-end",children:e.jsx("div",{className:"relative",children:e.jsx(p,{...i,items:d,onUpdateQuantity:c,onRemoveItem:m,onCheckout:()=>alert("Proceeding to checkout!"),onClose:()=>console.log("Close cart")})})})})})}},k={args:{variant:"modal",shippingCost:10,freeShippingThreshold:1e3},render:i=>{const[d,o]=u.useState(h),c=(t,a)=>{o(r=>r.map(s=>s.id===t?{...s,quantity:a}:s))},m=t=>{o(a=>a.filter(r=>r.id!==t))};return e.jsx("div",{className:"min-h-screen bg-background-primary",children:e.jsx(p,{...i,items:d,onUpdateQuantity:c,onRemoveItem:m,onCheckout:()=>alert("Proceeding to checkout!"),onClose:()=>console.log("Close cart")})})}},w={args:{items:h,variant:"sidebar",shippingCost:10,freeShippingThreshold:1e3},render:i=>{const[d,o]=u.useState(i.items),[c,m]=u.useState(!0),t=(s,l)=>{o(v=>v.map(g=>g.id===s?{...g,quantity:l}:g))},a=s=>{o(l=>l.filter(v=>v.id!==s))},r=()=>{console.log("Proceeding to checkout with items:",d),alert("Proceeding to checkout!")};return e.jsxs("div",{className:"min-h-screen bg-background-primary p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-4",children:"Interactive Cart Demo"}),e.jsx("p",{className:"text-text-secondary mb-4",children:"Try adding/removing items and updating quantities. The cart updates in real-time."}),e.jsx("button",{onClick:()=>m(!c),className:"px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue-hover transition-colors",children:c?"Close Cart":"Open Cart"})]}),e.jsx(p,{...i,items:d,isOpen:c,onUpdateQuantity:t,onRemoveItem:a,onCheckout:r,onClose:()=>m(!1)})]})}},S={args:{variant:"sidebar",shippingCost:10,freeShippingThreshold:1e3,discountCode:"SAVE50",discountAmount:50},render:i=>{const[d,o]=u.useState([...h,{id:"4",name:"Running Shoes",price:129.99,quantity:1,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop",variant:"Size 10"},{id:"5",name:"Backpack",price:89.99,quantity:1,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop",variant:"Navy Blue"},{id:"6",name:"Sunglasses",price:199.99,quantity:1,image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop"},{id:"7",name:"Wireless Mouse",price:49.99,quantity:2,image:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop"}]),c=(t,a)=>{o(r=>r.map(s=>s.id===t?{...s,quantity:a}:s))},m=t=>{o(a=>a.filter(r=>r.id!==t))};return e.jsx("div",{className:"min-h-screen bg-background-primary",children:e.jsx(p,{...i,items:d,onUpdateQuantity:c,onRemoveItem:m,onCheckout:()=>alert("Proceeding to checkout!"),onClose:()=>console.log("Close cart")})})}},R={args:{variant:"sidebar",shippingCost:10,freeShippingThreshold:1e3},parameters:{backgrounds:{default:"dark"}},decorators:[i=>e.jsx("div",{className:"dark",children:e.jsx(i,{})})],render:i=>{const[d,o]=u.useState(h),c=(t,a)=>{o(r=>r.map(s=>s.id===t?{...s,quantity:a}:s))},m=t=>{o(a=>a.filter(r=>r.id!==t))};return e.jsx("div",{className:"min-h-screen bg-background-primary",children:e.jsx(p,{...i,items:d,onUpdateQuantity:c,onRemoveItem:m,onCheckout:()=>alert("Proceeding to checkout!"),onClose:()=>console.log("Close cart")})})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar',
    shippingCost: 10,
    freeShippingThreshold: 1000
  },
  render: args => {
    const [items, setItems] = React.useState(sampleItems);
    const handleUpdateQuantity = (id: string, quantity: number) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        quantity
      } : item));
    };
    const handleRemoveItem = (id: string) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    return <div className="min-h-screen bg-background-primary">
                <CartPreview {...args} items={items} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} onCheckout={() => alert('Proceeding to checkout!')} onClose={() => console.log('Close cart')} />
            </div>;
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar',
    discountCode: 'SAVE20',
    discountAmount: 100,
    shippingCost: 10,
    freeShippingThreshold: 1000
  },
  render: args => {
    const [items, setItems] = React.useState(sampleItems);
    const handleUpdateQuantity = (id: string, quantity: number) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        quantity
      } : item));
    };
    const handleRemoveItem = (id: string) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    return <div className="min-h-screen bg-background-primary">
                <CartPreview {...args} items={items} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} onCheckout={() => alert('Proceeding to checkout!')} onClose={() => console.log('Close cart')} />
            </div>;
  }
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar',
    shippingCost: 10,
    freeShippingThreshold: 1000
  },
  render: args => {
    const [items, setItems] = React.useState([...sampleItems, {
      id: '4',
      name: 'Designer Sunglasses',
      price: 249.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop'
    }]);
    const handleUpdateQuantity = (id: string, quantity: number) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        quantity
      } : item));
    };
    const handleRemoveItem = (id: string) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    return <div className="min-h-screen bg-background-primary">
                <CartPreview {...args} items={items} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} onCheckout={() => alert('Proceeding to checkout!')} onClose={() => console.log('Close cart')} />
            </div>;
  }
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    variant: 'sidebar',
    onClose: () => console.log('Close cart')
  },
  render: args => <div className="min-h-screen bg-background-primary">
            <CartPreview {...args} />
        </div>
}`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'dropdown',
    shippingCost: 10
  },
  render: args => {
    const [items, setItems] = React.useState(sampleItems.slice(0, 2));
    const handleUpdateQuantity = (id: string, quantity: number) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        quantity
      } : item));
    };
    const handleRemoveItem = (id: string) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    return <div className="min-h-screen bg-background-primary p-8">
                <div className="max-w-4xl mx-auto">
                    <div className="flex justify-end">
                        <div className="relative">
                            <CartPreview {...args} items={items} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} onCheckout={() => alert('Proceeding to checkout!')} onClose={() => console.log('Close cart')} />
                        </div>
                    </div>
                </div>
            </div>;
  }
}`,...N.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'modal',
    shippingCost: 10,
    freeShippingThreshold: 1000
  },
  render: args => {
    const [items, setItems] = React.useState(sampleItems);
    const handleUpdateQuantity = (id: string, quantity: number) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        quantity
      } : item));
    };
    const handleRemoveItem = (id: string) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    return <div className="min-h-screen bg-background-primary">
                <CartPreview {...args} items={items} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} onCheckout={() => alert('Proceeding to checkout!')} onClose={() => console.log('Close cart')} />
            </div>;
  }
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    variant: 'sidebar',
    shippingCost: 10,
    freeShippingThreshold: 1000
  },
  render: args => {
    const [items, setItems] = React.useState(args.items);
    const [isOpen, setIsOpen] = React.useState(true);
    const handleUpdateQuantity = (id: string, quantity: number) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        quantity
      } : item));
    };
    const handleRemoveItem = (id: string) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    const handleCheckout = () => {
      console.log('Proceeding to checkout with items:', items);
      alert('Proceeding to checkout!');
    };
    return <div className="min-h-screen bg-background-primary p-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-text-primary mb-4">
                        Interactive Cart Demo
                    </h2>
                    <p className="text-text-secondary mb-4">
                        Try adding/removing items and updating quantities. The cart updates in real-time.
                    </p>
                    <button onClick={() => setIsOpen(!isOpen)} className="px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue-hover transition-colors">
                        {isOpen ? 'Close Cart' : 'Open Cart'}
                    </button>
                </div>
                <CartPreview {...args} items={items} isOpen={isOpen} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} onCheckout={handleCheckout} onClose={() => setIsOpen(false)} />
            </div>;
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar',
    shippingCost: 10,
    freeShippingThreshold: 1000,
    discountCode: 'SAVE50',
    discountAmount: 50
  },
  render: args => {
    const [items, setItems] = React.useState([...sampleItems, {
      id: '4',
      name: 'Running Shoes',
      price: 129.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop',
      variant: 'Size 10'
    }, {
      id: '5',
      name: 'Backpack',
      price: 89.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop',
      variant: 'Navy Blue'
    }, {
      id: '6',
      name: 'Sunglasses',
      price: 199.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=200&h=200&fit=crop'
    }, {
      id: '7',
      name: 'Wireless Mouse',
      price: 49.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop'
    }]);
    const handleUpdateQuantity = (id: string, quantity: number) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        quantity
      } : item));
    };
    const handleRemoveItem = (id: string) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    return <div className="min-h-screen bg-background-primary">
                <CartPreview {...args} items={items} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} onCheckout={() => alert('Proceeding to checkout!')} onClose={() => console.log('Close cart')} />
            </div>;
  }
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar',
    shippingCost: 10,
    freeShippingThreshold: 1000
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [Story => <div className="dark">
                <Story />
            </div>],
  render: args => {
    const [items, setItems] = React.useState(sampleItems);
    const handleUpdateQuantity = (id: string, quantity: number) => {
      setItems(prev => prev.map(item => item.id === id ? {
        ...item,
        quantity
      } : item));
    };
    const handleRemoveItem = (id: string) => {
      setItems(prev => prev.filter(item => item.id !== id));
    };
    return <div className="min-h-screen bg-background-primary">
                <CartPreview {...args} items={items} onUpdateQuantity={handleUpdateQuantity} onRemoveItem={handleRemoveItem} onCheckout={() => alert('Proceeding to checkout!')} onClose={() => console.log('Close cart')} />
            </div>;
  }
}`,...R.parameters?.docs?.source}}};const ge=["Sidebar","WithDiscount","FreeShipping","EmptyCart","DropdownVariant","ModalVariant","Interactive","LargeCart","DarkMode"];export{R as DarkMode,N as DropdownVariant,I as EmptyCart,j as FreeShipping,w as Interactive,S as LargeCart,k as ModalVariant,f as Sidebar,C as WithDiscount,ge as __namedExportsOrder,he as default};
