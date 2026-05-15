import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DL3IwwZJ.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{s as o,t as s}from"./es-CnNtA5mJ.js";import{Nt as c,t as l,tn as u}from"./lucide-react-C3ayLXpj.js";import{n as d,t as f}from"./Lightbox-DjaRhYmH.js";var p,m,h,g,_=e((()=>{p=t(n()),s(),r(),m=a(),d(),l(),h=({image:e,index:t,aspectRatio:n,getAspectRatioClass:r,onClick:a})=>{let[s,l]=(0,p.useState)(!1);return(0,m.jsxs)(o.div,{layoutId:`gallery-image-${t}`,className:i(`group relative overflow-hidden rounded-xl bg-surface-secondary cursor-zoom-in`,r()),onClick:a,whileHover:{scale:1.02},transition:{type:`spring`,stiffness:400,damping:30},children:[s?(0,m.jsxs)(`div`,{className:`w-full h-full flex flex-col items-center justify-center bg-surface-tertiary text-text-secondary p-4 text-center select-none`,children:[(0,m.jsx)(u,{className:`w-8 h-8 mb-2 opacity-50`}),(0,m.jsx)(`span`,{className:`text-xs font-medium opacity-70 truncate max-w-full px-2`,children:e.alt||`Image not found`})]}):(0,m.jsx)(`img`,{src:e.src,alt:e.alt||`Gallery image ${t+1}`,className:i(`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110`,n===`auto`?`h-auto`:``),loading:`lazy`,onError:()=>l(!0)}),!s&&(0,m.jsx)(`div`,{className:`absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100`,children:(0,m.jsx)(`div`,{className:`bg-black/50 backdrop-blur-sm p-2 rounded-full text-white`,children:(0,m.jsx)(c,{className:`w-5 h-5`})})}),e.caption&&!s&&(0,m.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0`,children:(0,m.jsx)(`p`,{className:`text-white text-xs font-medium truncate`,children:e.caption})})]})},g=({images:e,columns:t=3,gap:n=16,aspectRatio:r=`square`,className:a})=>{let[o,s]=(0,p.useState)(!1),[c,l]=(0,p.useState)(0),u=e=>{l(e),s(!0)},d=()=>{switch(r){case`square`:return`aspect-square`;case`video`:return`aspect-video`;case`portrait`:return`aspect-[3/4]`;case`auto`:return``;default:return`aspect-square`}};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`div`,{className:i(`grid`,a),style:{gridTemplateColumns:`repeat(auto-fill, minmax(min(100%, ${100/t}% - ${n}px), 1fr))`,gap:`${n}px`},children:e.map((e,t)=>(0,m.jsx)(h,{image:e,index:t,aspectRatio:r,getAspectRatioClass:d,onClick:()=>u(t)},t))}),(0,m.jsx)(f,{isOpen:o,images:e,currentIndex:c,onClose:()=>s(!1),onIndexChange:l})]})},g.__docgenInfo={description:``,methods:[],displayName:`Gallery`,props:{images:{required:!0,tsType:{name:`Array`,elements:[{name:`LightboxImage`}],raw:`LightboxImage[]`},description:``},columns:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`3`,computed:!1}},gap:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`16`,computed:!1}},aspectRatio:{required:!1,tsType:{name:`union`,raw:`'square' | 'video' | 'portrait' | 'auto'`,elements:[{name:`literal`,value:`'square'`},{name:`literal`,value:`'video'`},{name:`literal`,value:`'portrait'`},{name:`literal`,value:`'auto'`}]},description:``,defaultValue:{value:`'square'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{_(),v=[{src:`https://picsum.photos/seed/fintech1/600/600`,alt:`Dashboard preview`,caption:`Main Dashboard`},{src:`https://picsum.photos/seed/fintech2/600/600`,alt:`Analytics chart`,caption:`Revenue Analytics`},{src:`https://picsum.photos/seed/fintech3/600/600`,alt:`Payment flow`,caption:`Payment Flow Design`},{src:`https://picsum.photos/seed/fintech4/600/600`,alt:`Profile page`,caption:`User Profile`},{src:`https://picsum.photos/seed/fintech5/600/600`,alt:`Settings panel`,caption:`Settings Panel`},{src:`https://picsum.photos/seed/fintech6/600/600`,alt:`Reports section`,caption:`Reports & Exports`}],y=[{src:`https://picsum.photos/seed/receipt1/500/700`,alt:`Payment receipt`,caption:`Transaction Receipt — TRX-2025-04-8912`},{src:`https://picsum.photos/seed/receipt2/500/700`,alt:`Investment statement`,caption:`Q1 2025 Investment Statement`},{src:`https://picsum.photos/seed/receipt3/500/700`,alt:`Tax document`,caption:`Tax Withholding Certificate`}],b={title:`Data Display/Gallery`,component:g,tags:[`autodocs`]},x={args:{images:v,columns:3}},S={args:{images:v,columns:2}},C={args:{images:v.slice(0,4),columns:4}},w={args:{images:v,aspectRatio:`portrait`}},T={args:{images:v.slice(0,3),aspectRatio:`video`}},E={args:{images:v.slice(0,3),aspectRatio:`auto`}},D={args:{images:v.slice(0,1),columns:1}},O={args:{images:y,columns:3,aspectRatio:`portrait`}},k={args:{images:[{src:`https://picsum.photos/seed/portfolio1/600/400`,alt:`Portfolio performance chart`,caption:`Portfolio Performance — YTD +12.4%`},{src:`https://picsum.photos/seed/portfolio2/600/400`,alt:`Asset allocation pie chart`,caption:`Asset Allocation`},{src:`https://picsum.photos/seed/portfolio3/600/400`,alt:`Dividend history`,caption:`Dividend History — Last 12 Months`},{src:`https://picsum.photos/seed/portfolio4/600/400`,alt:`Risk assessment`,caption:`Portfolio Risk Assessment`}],columns:2}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    images,
    columns: 3
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    images,
    columns: 2
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    images: images.slice(0, 4),
    columns: 4
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    images,
    aspectRatio: 'portrait'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    images: images.slice(0, 3),
    aspectRatio: 'video'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    images: images.slice(0, 3),
    aspectRatio: 'auto'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    images: images.slice(0, 1),
    columns: 1
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    images: receiptImages,
    columns: 3,
    aspectRatio: 'portrait'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    images: [{
      src: 'https://picsum.photos/seed/portfolio1/600/400',
      alt: 'Portfolio performance chart',
      caption: 'Portfolio Performance — YTD +12.4%'
    }, {
      src: 'https://picsum.photos/seed/portfolio2/600/400',
      alt: 'Asset allocation pie chart',
      caption: 'Asset Allocation'
    }, {
      src: 'https://picsum.photos/seed/portfolio3/600/400',
      alt: 'Dividend history',
      caption: 'Dividend History — Last 12 Months'
    }, {
      src: 'https://picsum.photos/seed/portfolio4/600/400',
      alt: 'Risk assessment',
      caption: 'Portfolio Risk Assessment'
    }],
    columns: 2
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`TwoColumns`,`FourColumns`,`PortraitAspectRatio`,`VideoAspectRatio`,`AutoAspectRatio`,`SingleImage`,`ReceiptGallery`,`InvestmentPortfolio`]}))();export{E as AutoAspectRatio,x as Default,C as FourColumns,k as InvestmentPortfolio,w as PortraitAspectRatio,O as ReceiptGallery,D as SingleImage,S as TwoColumns,T as VideoAspectRatio,A as __namedExportsOrder,b as default};