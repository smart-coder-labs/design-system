import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as V}from"./iframe-CGazvlvx.js";import{H as ae}from"./heart-syXRZ9Nn.js";import{E as re}from"./eye-BXn_Qrrg.js";import{S as ie}from"./star-CAIW9ukj.js";import{S as ne}from"./shopping-cart-Ccv7a2dY.js";import{Z as se}from"./zap-C3WH53Z6.js";import{T as ce}from"./trending-up-BHwcBAva.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-BMKVoASg.js";const t=({id:j,name:S,description:N,price:F,originalPrice:i,currency:q="$",image:G,images:E=[],rating:A,reviewCount:W,badge:c,inStock:n=!0,stockCount:Q,category:I,onAddToCart:M,onQuickView:D,onFavorite:R,isFavorite:B=!1,variant:s="default",showQuickActions:O=!0,className:K=""})=>{const[L,_]=V.useState(0),[Z,H]=V.useState(!1),[d,U]=V.useState(B),T=[G,...E],P=i&&i>F,z=P?Math.round((i-F)/i*100):0,J=o=>{o.preventDefault(),o.stopPropagation(),U(!d),R?.()},X=o=>{o.preventDefault(),o.stopPropagation(),M?.()},Y=o=>{o.preventDefault(),o.stopPropagation(),D?.()},ee=o=>{switch(o){case"new":return"bg-accent-blue text-white";case"sale":return"bg-status-error text-white";case"trending":return"bg-status-warning text-white";case"limited":return"bg-purple-600 text-white";default:return"bg-text-primary text-text-inverse"}},oe=o=>{switch(o){case"trending":return e.jsx(ce,{className:"w-3 h-3"});case"limited":return e.jsx(se,{className:"w-3 h-3"});default:return null}},te={default:"max-w-sm",compact:"max-w-xs",featured:"max-w-md"};return e.jsxs("div",{className:`product-card group ${te[s]} bg-surface-primary rounded-2xl border border-border-primary overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-border-focus ${K}`,onMouseEnter:()=>H(!0),onMouseLeave:()=>H(!1),children:[e.jsxs("div",{className:"relative aspect-square overflow-hidden bg-background-secondary",children:[e.jsx("img",{src:T[L],alt:S,className:"w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"}),e.jsxs("div",{className:"absolute top-3 left-3 flex flex-col gap-2",children:[c&&e.jsxs("div",{className:`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${ee(c.variant)} shadow-sm`,children:[oe(c.variant),e.jsx("span",{children:c.text})]}),P&&e.jsxs("div",{className:"bg-status-error text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm",children:["-",z,"%"]})]}),e.jsx("button",{onClick:J,className:`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${d?"bg-status-error text-white":"bg-white/90 backdrop-blur-sm text-text-secondary hover:text-status-error"} shadow-sm hover:scale-110`,"aria-label":d?"Remove from favorites":"Add to favorites",children:e.jsx(ae,{className:`w-5 h-5 ${d?"fill-current":""}`})}),O&&e.jsx("div",{className:`absolute bottom-3 left-3 right-3 flex gap-2 transition-all duration-300 ${Z?"opacity-100 translate-y-0":"opacity-0 translate-y-2"}`,children:D&&e.jsxs("button",{onClick:Y,className:"flex-1 bg-white/95 backdrop-blur-sm text-text-primary px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-white transition-all duration-200 flex items-center justify-center gap-2 shadow-sm",children:[e.jsx(re,{className:"w-4 h-4"}),e.jsx("span",{children:"Quick View"})]})}),T.length>1&&e.jsx("div",{className:"absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5",children:T.map((o,a)=>e.jsx("button",{onClick:$=>{$.preventDefault(),$.stopPropagation(),_(a)},className:`w-1.5 h-1.5 rounded-full transition-all duration-200 ${a===L?"bg-white w-4":"bg-white/50 hover:bg-white/75"}`,"aria-label":`View image ${a+1}`},a))}),!n&&e.jsx("div",{className:"absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center",children:e.jsx("span",{className:"bg-white text-text-primary px-6 py-3 rounded-xl font-semibold text-sm",children:"Out of Stock"})})]}),e.jsxs("div",{className:`p-4 ${s==="featured"?"p-5":""}`,children:[I&&e.jsx("p",{className:"text-xs font-medium text-text-tertiary uppercase tracking-wide mb-2",children:I}),e.jsx("h3",{className:`font-semibold text-text-primary mb-2 line-clamp-2 ${s==="featured"?"text-lg":"text-base"}`,children:S}),N&&s==="featured"&&e.jsx("p",{className:"text-sm text-text-secondary mb-3 line-clamp-2",children:N}),A!==void 0&&e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("div",{className:"flex items-center gap-1",children:[...Array(5)].map((o,a)=>e.jsx(ie,{className:`w-4 h-4 ${a<Math.floor(A)?"fill-status-warning text-status-warning":"text-border-primary"}`},a))}),e.jsxs("span",{className:"text-sm text-text-secondary",children:[A.toFixed(1),W&&` (${W})`]})]}),e.jsxs("div",{className:"flex items-baseline gap-2 mb-4",children:[e.jsxs("span",{className:`font-bold text-text-primary ${s==="featured"?"text-2xl":"text-xl"}`,children:[q,F.toFixed(2)]}),P&&e.jsxs("span",{className:"text-sm text-text-tertiary line-through",children:[q,i.toFixed(2)]})]}),n&&Q!==void 0&&Q<10&&e.jsxs("p",{className:"text-xs text-status-warning mb-3",children:["Only ",Q," left in stock"]}),M&&e.jsxs("button",{onClick:X,disabled:!n,className:`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${n?"bg-accent-blue text-white hover:bg-accent-blue-hover active:scale-95":"bg-background-tertiary text-text-quaternary cursor-not-allowed"}`,children:[e.jsx(ne,{className:"w-4 h-4"}),e.jsx("span",{children:n?"Add to Cart":"Out of Stock"})]})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"ProductCard",props:{id:{required:!0,tsType:{name:"string"},description:""},name:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},price:{required:!0,tsType:{name:"number"},description:""},originalPrice:{required:!1,tsType:{name:"number"},description:""},currency:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'$'",computed:!1}},image:{required:!0,tsType:{name:"string"},description:""},images:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},rating:{required:!1,tsType:{name:"number"},description:""},reviewCount:{required:!1,tsType:{name:"number"},description:""},badge:{required:!1,tsType:{name:"signature",type:"object",raw:`{
    text: string;
    variant?: 'new' | 'sale' | 'trending' | 'limited';
}`,signature:{properties:[{key:"text",value:{name:"string",required:!0}},{key:"variant",value:{name:"union",raw:"'new' | 'sale' | 'trending' | 'limited'",elements:[{name:"literal",value:"'new'"},{name:"literal",value:"'sale'"},{name:"literal",value:"'trending'"},{name:"literal",value:"'limited'"}],required:!1}}]}},description:""},inStock:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},stockCount:{required:!1,tsType:{name:"number"},description:""},category:{required:!1,tsType:{name:"string"},description:""},onAddToCart:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onQuickView:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onFavorite:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},isFavorite:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'featured'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'featured'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showQuickActions:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const xe={title:"E-Commerce/ProductCard",component:t,parameters:{layout:"centered",docs:{description:{component:"A premium product card component designed for e-commerce applications. Features image galleries, badges, ratings, favorites, quick actions, and stock management. Includes smooth animations and hover effects for an engaging shopping experience."}}},tags:[]},r=["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop","https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500&h=500&fit=crop","https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop"],l={args:{id:"1",name:"Premium Wireless Headphones",description:"High-quality sound with active noise cancellation",price:299.99,image:r[0],rating:4.5,reviewCount:128,category:"Audio",onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}},g={args:{id:"2",name:"Smart Watch Pro",description:"Track your fitness and stay connected",price:349.99,originalPrice:499.99,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",rating:4.8,reviewCount:256,category:"Wearables",badge:{text:"Sale",variant:"sale"},onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}},m={args:{id:"3",name:"Minimalist Backpack",description:"Perfect for daily commute and travel",price:89.99,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",rating:4.6,reviewCount:45,category:"Accessories",badge:{text:"New",variant:"new"},onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}},u={args:{id:"4",name:"Mechanical Keyboard",description:"RGB backlit with custom switches",price:159.99,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",rating:4.9,reviewCount:512,category:"Peripherals",badge:{text:"Trending",variant:"trending"},onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}},p={args:{id:"5",name:"Designer Sunglasses",description:"Limited edition collection",price:249.99,originalPrice:349.99,image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",rating:4.7,reviewCount:89,category:"Fashion",badge:{text:"Limited",variant:"limited"},stockCount:5,onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}},h={args:{id:"6",name:"Premium Wireless Headphones",description:"Experience superior sound quality",price:299.99,image:r[0],images:r.slice(1),rating:4.5,reviewCount:128,category:"Audio",onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}},v={args:{id:"7",name:"Vintage Camera",description:"Classic design meets modern technology",price:899.99,image:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",rating:4.4,reviewCount:67,category:"Photography",stockCount:3,onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}},w={args:{id:"8",name:"Gaming Console",description:"Next-gen gaming experience",price:499.99,image:"https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&h=500&fit=crop",rating:4.9,reviewCount:1024,category:"Gaming",inStock:!1,onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}},f={args:{id:"9",name:"Wireless Mouse",price:49.99,image:"https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",rating:4.3,reviewCount:234,category:"Peripherals",variant:"compact",onAddToCart:()=>console.log("Added to cart"),onFavorite:()=>console.log("Favorite toggled")}},x={args:{id:"10",name:"Professional DSLR Camera",description:"Capture stunning photos with this professional-grade camera. Features a 45MP full-frame sensor, 4K video recording, and advanced autofocus system.",price:2499.99,originalPrice:2999.99,image:"https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop",images:["https://images.unsplash.com/photo-1606980707986-7b0c0c3d3f1c?w=500&h=500&fit=crop","https://images.unsplash.com/photo-1606980707986-7b0c0c3d3f1c?w=500&h=500&fit=crop"],rating:4.9,reviewCount:456,category:"Photography",badge:{text:"Pro",variant:"new"},variant:"featured",onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}},b={args:{id:"11",name:"Leather Wallet",price:79.99,image:"https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop",rating:4.6,reviewCount:89,category:"Accessories",showQuickActions:!1,onAddToCart:()=>console.log("Added to cart"),onFavorite:()=>console.log("Favorite toggled")}},y={args:{id:"12",name:"Running Shoes",description:"Lightweight and comfortable for long runs",price:129.99,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",rating:4.7,reviewCount:345,category:"Footwear",isFavorite:!0,onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}},k={render:()=>e.jsxs("div",{className:"p-8 bg-background-primary min-h-screen",children:[e.jsx("h2",{className:"text-3xl font-bold text-text-primary mb-8",children:"Featured Products"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:[e.jsx(t,{id:"1",name:"Premium Wireless Headphones",price:299.99,originalPrice:399.99,image:r[0],rating:4.5,reviewCount:128,category:"Audio",badge:{text:"Sale",variant:"sale"},onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}),e.jsx(t,{id:"2",name:"Smart Watch Pro",price:349.99,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",rating:4.8,reviewCount:256,category:"Wearables",badge:{text:"New",variant:"new"},onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}),e.jsx(t,{id:"3",name:"Mechanical Keyboard",price:159.99,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop",rating:4.9,reviewCount:512,category:"Peripherals",badge:{text:"Trending",variant:"trending"},onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}),e.jsx(t,{id:"4",name:"Designer Sunglasses",price:249.99,originalPrice:349.99,image:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop",rating:4.7,reviewCount:89,category:"Fashion",badge:{text:"Limited",variant:"limited"},stockCount:5,onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}),e.jsx(t,{id:"5",name:"Minimalist Backpack",price:89.99,image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",rating:4.6,reviewCount:45,category:"Accessories",onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}),e.jsx(t,{id:"6",name:"Running Shoes",price:129.99,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",rating:4.7,reviewCount:345,category:"Footwear",onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}),e.jsx(t,{id:"7",name:"Vintage Camera",price:899.99,image:"https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop",rating:4.4,reviewCount:67,category:"Photography",stockCount:3,onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")}),e.jsx(t,{id:"8",name:"Gaming Console",price:499.99,image:"https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&h=500&fit=crop",rating:4.9,reviewCount:1024,category:"Gaming",inStock:!1,onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")})]})]})},C={args:{id:"13",name:"Premium Wireless Headphones",description:"High-quality sound with active noise cancellation",price:299.99,originalPrice:399.99,image:r[0],images:r.slice(1),rating:4.5,reviewCount:128,category:"Audio",badge:{text:"Sale",variant:"sale"},onAddToCart:()=>console.log("Added to cart"),onQuickView:()=>console.log("Quick view"),onFavorite:()=>console.log("Favorite toggled")},parameters:{backgrounds:{default:"dark"}},decorators:[j=>e.jsx("div",{className:"dark p-8",children:e.jsx(j,{})})]};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality sound with active noise cancellation',
    price: 299.99,
    image: sampleImages[0],
    rating: 4.5,
    reviewCount: 128,
    category: 'Audio',
    onAddToCart: () => console.log('Added to cart'),
    onQuickView: () => console.log('Quick view'),
    onFavorite: () => console.log('Favorite toggled')
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    id: '2',
    name: 'Smart Watch Pro',
    description: 'Track your fitness and stay connected',
    price: 349.99,
    originalPrice: 499.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    rating: 4.8,
    reviewCount: 256,
    category: 'Wearables',
    badge: {
      text: 'Sale',
      variant: 'sale'
    },
    onAddToCart: () => console.log('Added to cart'),
    onQuickView: () => console.log('Quick view'),
    onFavorite: () => console.log('Favorite toggled')
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    id: '3',
    name: 'Minimalist Backpack',
    description: 'Perfect for daily commute and travel',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
    rating: 4.6,
    reviewCount: 45,
    category: 'Accessories',
    badge: {
      text: 'New',
      variant: 'new'
    },
    onAddToCart: () => console.log('Added to cart'),
    onQuickView: () => console.log('Quick view'),
    onFavorite: () => console.log('Favorite toggled')
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: '4',
    name: 'Mechanical Keyboard',
    description: 'RGB backlit with custom switches',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop',
    rating: 4.9,
    reviewCount: 512,
    category: 'Peripherals',
    badge: {
      text: 'Trending',
      variant: 'trending'
    },
    onAddToCart: () => console.log('Added to cart'),
    onQuickView: () => console.log('Quick view'),
    onFavorite: () => console.log('Favorite toggled')
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    id: '5',
    name: 'Designer Sunglasses',
    description: 'Limited edition collection',
    price: 249.99,
    originalPrice: 349.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop',
    rating: 4.7,
    reviewCount: 89,
    category: 'Fashion',
    badge: {
      text: 'Limited',
      variant: 'limited'
    },
    stockCount: 5,
    onAddToCart: () => console.log('Added to cart'),
    onQuickView: () => console.log('Quick view'),
    onFavorite: () => console.log('Favorite toggled')
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    id: '6',
    name: 'Premium Wireless Headphones',
    description: 'Experience superior sound quality',
    price: 299.99,
    image: sampleImages[0],
    images: sampleImages.slice(1),
    rating: 4.5,
    reviewCount: 128,
    category: 'Audio',
    onAddToCart: () => console.log('Added to cart'),
    onQuickView: () => console.log('Quick view'),
    onFavorite: () => console.log('Favorite toggled')
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    id: '7',
    name: 'Vintage Camera',
    description: 'Classic design meets modern technology',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop',
    rating: 4.4,
    reviewCount: 67,
    category: 'Photography',
    stockCount: 3,
    onAddToCart: () => console.log('Added to cart'),
    onQuickView: () => console.log('Quick view'),
    onFavorite: () => console.log('Favorite toggled')
  }
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    id: '8',
    name: 'Gaming Console',
    description: 'Next-gen gaming experience',
    price: 499.99,
    image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&h=500&fit=crop',
    rating: 4.9,
    reviewCount: 1024,
    category: 'Gaming',
    inStock: false,
    onAddToCart: () => console.log('Added to cart'),
    onQuickView: () => console.log('Quick view'),
    onFavorite: () => console.log('Favorite toggled')
  }
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    id: '9',
    name: 'Wireless Mouse',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    rating: 4.3,
    reviewCount: 234,
    category: 'Peripherals',
    variant: 'compact',
    onAddToCart: () => console.log('Added to cart'),
    onFavorite: () => console.log('Favorite toggled')
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    id: '10',
    name: 'Professional DSLR Camera',
    description: 'Capture stunning photos with this professional-grade camera. Features a 45MP full-frame sensor, 4K video recording, and advanced autofocus system.',
    price: 2499.99,
    originalPrice: 2999.99,
    image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=500&fit=crop',
    images: ['https://images.unsplash.com/photo-1606980707986-7b0c0c3d3f1c?w=500&h=500&fit=crop', 'https://images.unsplash.com/photo-1606980707986-7b0c0c3d3f1c?w=500&h=500&fit=crop'],
    rating: 4.9,
    reviewCount: 456,
    category: 'Photography',
    badge: {
      text: 'Pro',
      variant: 'new'
    },
    variant: 'featured',
    onAddToCart: () => console.log('Added to cart'),
    onQuickView: () => console.log('Quick view'),
    onFavorite: () => console.log('Favorite toggled')
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    id: '11',
    name: 'Leather Wallet',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&h=500&fit=crop',
    rating: 4.6,
    reviewCount: 89,
    category: 'Accessories',
    showQuickActions: false,
    onAddToCart: () => console.log('Added to cart'),
    onFavorite: () => console.log('Favorite toggled')
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    id: '12',
    name: 'Running Shoes',
    description: 'Lightweight and comfortable for long runs',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop',
    rating: 4.7,
    reviewCount: 345,
    category: 'Footwear',
    isFavorite: true,
    onAddToCart: () => console.log('Added to cart'),
    onQuickView: () => console.log('Quick view'),
    onFavorite: () => console.log('Favorite toggled')
  }
}`,...y.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-8 bg-background-primary min-h-screen">
            <h2 className="text-3xl font-bold text-text-primary mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <ProductCard id="1" name="Premium Wireless Headphones" price={299.99} originalPrice={399.99} image={sampleImages[0]} rating={4.5} reviewCount={128} category="Audio" badge={{
        text: 'Sale',
        variant: 'sale'
      }} onAddToCart={() => console.log('Added to cart')} onQuickView={() => console.log('Quick view')} onFavorite={() => console.log('Favorite toggled')} />
                <ProductCard id="2" name="Smart Watch Pro" price={349.99} image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop" rating={4.8} reviewCount={256} category="Wearables" badge={{
        text: 'New',
        variant: 'new'
      }} onAddToCart={() => console.log('Added to cart')} onQuickView={() => console.log('Quick view')} onFavorite={() => console.log('Favorite toggled')} />
                <ProductCard id="3" name="Mechanical Keyboard" price={159.99} image="https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&h=500&fit=crop" rating={4.9} reviewCount={512} category="Peripherals" badge={{
        text: 'Trending',
        variant: 'trending'
      }} onAddToCart={() => console.log('Added to cart')} onQuickView={() => console.log('Quick view')} onFavorite={() => console.log('Favorite toggled')} />
                <ProductCard id="4" name="Designer Sunglasses" price={249.99} originalPrice={349.99} image="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=500&fit=crop" rating={4.7} reviewCount={89} category="Fashion" badge={{
        text: 'Limited',
        variant: 'limited'
      }} stockCount={5} onAddToCart={() => console.log('Added to cart')} onQuickView={() => console.log('Quick view')} onFavorite={() => console.log('Favorite toggled')} />
                <ProductCard id="5" name="Minimalist Backpack" price={89.99} image="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop" rating={4.6} reviewCount={45} category="Accessories" onAddToCart={() => console.log('Added to cart')} onQuickView={() => console.log('Quick view')} onFavorite={() => console.log('Favorite toggled')} />
                <ProductCard id="6" name="Running Shoes" price={129.99} image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop" rating={4.7} reviewCount={345} category="Footwear" onAddToCart={() => console.log('Added to cart')} onQuickView={() => console.log('Quick view')} onFavorite={() => console.log('Favorite toggled')} />
                <ProductCard id="7" name="Vintage Camera" price={899.99} image="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop" rating={4.4} reviewCount={67} category="Photography" stockCount={3} onAddToCart={() => console.log('Added to cart')} onQuickView={() => console.log('Quick view')} onFavorite={() => console.log('Favorite toggled')} />
                <ProductCard id="8" name="Gaming Console" price={499.99} image="https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&h=500&fit=crop" rating={4.9} reviewCount={1024} category="Gaming" inStock={false} onAddToCart={() => console.log('Added to cart')} onQuickView={() => console.log('Quick view')} onFavorite={() => console.log('Favorite toggled')} />
            </div>
        </div>
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    id: '13',
    name: 'Premium Wireless Headphones',
    description: 'High-quality sound with active noise cancellation',
    price: 299.99,
    originalPrice: 399.99,
    image: sampleImages[0],
    images: sampleImages.slice(1),
    rating: 4.5,
    reviewCount: 128,
    category: 'Audio',
    badge: {
      text: 'Sale',
      variant: 'sale'
    },
    onAddToCart: () => console.log('Added to cart'),
    onQuickView: () => console.log('Quick view'),
    onFavorite: () => console.log('Favorite toggled')
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [Story => <div className="dark p-8">
                <Story />
            </div>]
}`,...C.parameters?.docs?.source}}};const be=["Default","WithDiscount","NewProduct","TrendingProduct","LimitedEdition","WithImageGallery","LowStock","OutOfStock","CompactVariant","FeaturedVariant","WithoutQuickActions","Favorited","ProductGrid","DarkMode"];export{f as CompactVariant,C as DarkMode,l as Default,y as Favorited,x as FeaturedVariant,p as LimitedEdition,v as LowStock,m as NewProduct,w as OutOfStock,k as ProductGrid,u as TrendingProduct,g as WithDiscount,h as WithImageGallery,b as WithoutQuickActions,be as __namedExportsOrder,xe as default};
