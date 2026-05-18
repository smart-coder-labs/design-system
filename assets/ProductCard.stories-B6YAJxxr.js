import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-2Bdvr1RY.js";import{M as r,Tn as i,in as a,r as o,t as s,y as c,z as l}from"./lucide-react-ChvDEqVS.js";import{t as u}from"./jsx-runtime-WZfjI2gv.js";var d,f,p,m=e((()=>{d=t(n()),s(),f=u(),p=({id:e,name:t,description:n,price:s,originalPrice:u,currency:p=`$`,image:m,images:h=[],rating:g,reviewCount:_,badge:v,inStock:y=!0,stockCount:b,category:x,onAddToCart:S,onQuickView:C,onFavorite:w,isFavorite:T=!1,variant:E=`default`,showQuickActions:D=!0,className:O=``})=>{let[k,A]=(0,d.useState)(0),[j,M]=(0,d.useState)(!1),[N,P]=(0,d.useState)(T),F=[m,...h],I=u&&u>s,L=I?Math.round((u-s)/u*100):0,R=e=>{e.preventDefault(),e.stopPropagation(),P(!N),w?.()},z=e=>{e.preventDefault(),e.stopPropagation(),S?.()};return(0,f.jsxs)(`div`,{className:`product-card group ${{default:`max-w-sm`,compact:`max-w-xs`,featured:`max-w-md`}[E]} bg-surface-primary rounded-2xl border border-border-primary overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-border-focus ${O}`,onMouseEnter:()=>M(!0),onMouseLeave:()=>M(!1),children:[(0,f.jsxs)(`div`,{className:`relative aspect-square overflow-hidden bg-background-secondary`,children:[(0,f.jsx)(`img`,{src:F[k],alt:t,className:`w-full h-full object-cover transition-transform duration-500 group-hover:scale-105`}),(0,f.jsxs)(`div`,{className:`absolute top-3 left-3 flex flex-col gap-2`,children:[v&&(0,f.jsxs)(`div`,{className:`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${(e=>{switch(e){case`new`:return`bg-accent-blue text-white`;case`sale`:return`bg-status-error text-white`;case`trending`:return`bg-status-warning text-white`;case`limited`:return`bg-purple-600 text-white`;default:return`bg-text-primary text-text-inverse`}})(v.variant)} shadow-sm`,children:[(e=>{switch(e){case`trending`:return(0,f.jsx)(c,{className:`w-3 h-3`});case`limited`:return(0,f.jsx)(o,{className:`w-3 h-3`});default:return null}})(v.variant),(0,f.jsx)(`span`,{children:v.text})]}),I&&(0,f.jsxs)(`div`,{className:`bg-status-error text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm`,children:[`-`,L,`%`]})]}),(0,f.jsx)(`button`,{onClick:R,className:`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${N?`bg-status-error text-white`:`bg-white/90 backdrop-blur-sm text-text-secondary hover:text-status-error`} shadow-sm hover:scale-110`,"aria-label":N?`Remove from favorites`:`Add to favorites`,children:(0,f.jsx)(a,{className:`w-5 h-5 ${N?`fill-current`:``}`})}),D&&(0,f.jsx)(`div`,{className:`absolute bottom-3 left-3 right-3 flex gap-2 transition-all duration-300 ${j?`opacity-100 translate-y-0`:`opacity-0 translate-y-2`}`,children:C&&(0,f.jsxs)(`button`,{onClick:e=>{e.preventDefault(),e.stopPropagation(),C?.()},className:`flex-1 bg-white/95 backdrop-blur-sm text-text-primary px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-white transition-all duration-200 flex items-center justify-center gap-2 shadow-sm`,children:[(0,f.jsx)(i,{className:`w-4 h-4`}),(0,f.jsx)(`span`,{children:`Quick View`})]})}),F.length>1&&(0,f.jsx)(`div`,{className:`absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5`,children:F.map((e,t)=>(0,f.jsx)(`button`,{onClick:e=>{e.preventDefault(),e.stopPropagation(),A(t)},className:`w-1.5 h-1.5 rounded-full transition-all duration-200 ${t===k?`bg-white w-4`:`bg-white/50 hover:bg-white/75`}`,"aria-label":`View image ${t+1}`},t))}),!y&&(0,f.jsx)(`div`,{className:`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center`,children:(0,f.jsx)(`span`,{className:`bg-white text-text-primary px-6 py-3 rounded-xl font-semibold text-sm`,children:`Out of Stock`})})]}),(0,f.jsxs)(`div`,{className:`p-4 ${E===`featured`?`p-5`:``}`,children:[x&&(0,f.jsx)(`p`,{className:`text-xs font-medium text-text-tertiary uppercase tracking-wide mb-2`,children:x}),(0,f.jsx)(`h3`,{className:`font-semibold text-text-primary mb-2 line-clamp-2 ${E===`featured`?`text-lg`:`text-base`}`,children:t}),n&&E===`featured`&&(0,f.jsx)(`p`,{className:`text-sm text-text-secondary mb-3 line-clamp-2`,children:n}),g!==void 0&&(0,f.jsxs)(`div`,{className:`flex items-center gap-2 mb-3`,children:[(0,f.jsx)(`div`,{className:`flex items-center gap-1`,children:[...[,,,,,]].map((e,t)=>(0,f.jsx)(r,{className:`w-4 h-4 ${t<Math.floor(g)?`fill-status-warning text-status-warning`:`text-border-primary`}`},t))}),(0,f.jsxs)(`span`,{className:`text-sm text-text-secondary`,children:[g.toFixed(1),_&&` (${_})`]})]}),(0,f.jsxs)(`div`,{className:`flex items-baseline gap-2 mb-4`,children:[(0,f.jsxs)(`span`,{className:`font-bold text-text-primary ${E===`featured`?`text-2xl`:`text-xl`}`,children:[p,s.toFixed(2)]}),I&&(0,f.jsxs)(`span`,{className:`text-sm text-text-tertiary line-through`,children:[p,u.toFixed(2)]})]}),y&&b!==void 0&&b<10&&(0,f.jsxs)(`p`,{className:`text-xs text-status-warning mb-3`,children:[`Only `,b,` left in stock`]}),S&&(0,f.jsxs)(`button`,{onClick:z,disabled:!y,className:`w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${y?`bg-accent-blue text-white hover:bg-accent-blue-hover active:scale-95`:`bg-background-tertiary text-text-quaternary cursor-not-allowed`}`,children:[(0,f.jsx)(l,{className:`w-4 h-4`}),(0,f.jsx)(`span`,{children:y?`Add to Cart`:`Out of Stock`})]})]})]})},p.__docgenInfo={description:``,methods:[],displayName:`ProductCard`,props:{id:{required:!0,tsType:{name:`string`},description:``},name:{required:!0,tsType:{name:`string`},description:``},description:{required:!1,tsType:{name:`string`},description:``},price:{required:!0,tsType:{name:`number`},description:``},originalPrice:{required:!1,tsType:{name:`number`},description:``},currency:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'$'`,computed:!1}},image:{required:!0,tsType:{name:`string`},description:``},images:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[]`,computed:!1}},rating:{required:!1,tsType:{name:`number`},description:``},reviewCount:{required:!1,tsType:{name:`number`},description:``},badge:{required:!1,tsType:{name:`signature`,type:`object`,raw:`{
    text: string;
    variant?: 'new' | 'sale' | 'trending' | 'limited';
}`,signature:{properties:[{key:`text`,value:{name:`string`,required:!0}},{key:`variant`,value:{name:`union`,raw:`'new' | 'sale' | 'trending' | 'limited'`,elements:[{name:`literal`,value:`'new'`},{name:`literal`,value:`'sale'`},{name:`literal`,value:`'trending'`},{name:`literal`,value:`'limited'`}],required:!1}}]}},description:``},inStock:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},stockCount:{required:!1,tsType:{name:`number`},description:``},category:{required:!1,tsType:{name:`string`},description:``},onAddToCart:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onQuickView:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onFavorite:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},isFavorite:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'compact' | 'featured'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'compact'`},{name:`literal`,value:`'featured'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},showQuickActions:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),h,g,_,v,y,b,x,S,C,w,T;e((()=>{m(),h=u(),g={title:`E-Commerce/ProductCard`,component:p,tags:[`autodocs`]},_={args:{title:`Crypto Hardware Wallet`,description:`Secure your digital assets with this cold storage device supporting 1000+ coins.`,price:`$79.99`,imageUrl:`https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=400&h=300&fit=crop`}},v={args:{title:`Premium Ledger Nano X`,description:`Bluetooth-enabled hardware wallet with advanced security features.`,price:`$149.00`,originalPrice:`$179.00`,rating:4.8,reviewCount:234,imageUrl:`https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=400&h=300&fit=crop`}},y={args:{title:`Trezor Model T`,description:`Touchscreen hardware wallet. Last few units at this price.`,price:`$129.00`,originalPrice:`$199.00`,badge:`Sale`,imageUrl:`https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=400&h=300&fit=crop`}},b={args:{title:`Ledger Stax`,description:`Next-gen hardware wallet with E-Ink display.`,price:`$279.00`,badge:`Sold Out`,disabled:!0,imageUrl:`https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=400&h=300&fit=crop`}},x={args:{title:`CoolWallet Pro`,description:`Credit card-sized crypto wallet.`,price:`$99.00`,compact:!0,imageUrl:`https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=200&h=200&fit=crop`}},S={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,h.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,h.jsx)(e,{})})]},C={parameters:{viewport:{defaultViewport:`mobile1`}}},w={parameters:{docs:{description:{story:`ProductCard used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Crypto Hardware Wallet',
    description: 'Secure your digital assets with this cold storage device supporting 1000+ coins.',
    price: '$79.99',
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=400&h=300&fit=crop'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Premium Ledger Nano X',
    description: 'Bluetooth-enabled hardware wallet with advanced security features.',
    price: '$149.00',
    originalPrice: '$179.00',
    rating: 4.8,
    reviewCount: 234,
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=400&h=300&fit=crop'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Trezor Model T',
    description: 'Touchscreen hardware wallet. Last few units at this price.',
    price: '$129.00',
    originalPrice: '$199.00',
    badge: 'Sale',
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=400&h=300&fit=crop'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Ledger Stax',
    description: 'Next-gen hardware wallet with E-Ink display.',
    price: '$279.00',
    badge: 'Sold Out',
    disabled: true,
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=400&h=300&fit=crop'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'CoolWallet Pro',
    description: 'Credit card-sized crypto wallet.',
    price: '$99.00',
    compact: true,
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f4a1e1f2e5f?w=200&h=200&fit=crop'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    themes: {
      themeOverride: 'dark'
    }
  },
  decorators: [Story => <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>]
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'ProductCard used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`WithRating`,`Sale`,`OutOfStock`,`Compact`,`DarkMode`,`MobileView`,`FintechUseCase`]}))();export{x as Compact,S as DarkMode,_ as Default,w as FintechUseCase,C as MobileView,b as OutOfStock,y as Sale,v as WithRating,T as __namedExportsOrder,g as default};