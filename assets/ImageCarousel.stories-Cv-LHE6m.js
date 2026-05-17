import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-B1a0g5t6.js";import{$n as r,Qn as i,t as a}from"./lucide-react-BVeuibpS.js";import{n as o,t as s}from"./utils-ijcE-ZHT.js";import{t as c}from"./jsx-runtime-DaLCRA3n.js";import{l,s as u,t as d}from"./es-BBowbM95.js";import{n as f,t as p}from"./Button-CWySTvFo.js";var m,h,g,_=e((()=>{m=t(n()),d(),a(),o(),p(),h=c(),g=({images:e,autoPlay:t=!1,interval:n=5e3,showArrows:a=!0,showIndicators:o=!0,effect:c=`slide`,className:d,height:p=`400px`})=>{let[g,_]=(0,m.useState)(0),[v,y]=(0,m.useState)(0),[b,x]=(0,m.useState)(!1),S=(0,m.useCallback)(t=>{y(t),_(n=>{let r=n+t;return r<0&&(r=e.length-1),r>=e.length&&(r=0),r})},[e.length]);(0,m.useEffect)(()=>{if(t&&!b){let e=setInterval(()=>{S(1)},n);return()=>clearInterval(e)}},[t,n,b,S]);let C={enter:e=>({x:c===`slide`?e>0?`100%`:`-100%`:0,opacity:c===`fade`?0:1}),center:{zIndex:1,x:0,opacity:1},exit:e=>({zIndex:0,x:c===`slide`?e<0?`100%`:`-100%`:0,opacity:c===`fade`?0:1})},w=1e4,T=(e,t)=>Math.abs(e)*t;return!e||e.length===0?(0,h.jsx)(`div`,{className:s(`flex items-center justify-center bg-surface-secondary rounded-2xl border border-border-primary`,d),style:{height:p},children:(0,h.jsx)(`span`,{className:`text-text-secondary`,children:`No images to display`})}):(0,h.jsxs)(`div`,{className:s(`relative overflow-hidden rounded-2xl bg-gray-900 group w-full`,d),style:{height:p,minHeight:typeof p==`number`?`${p}px`:p},onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),children:[(0,h.jsx)(l,{initial:!1,custom:v,children:(0,h.jsxs)(u.div,{custom:v,variants:C,initial:`enter`,animate:`center`,exit:`exit`,transition:{x:{type:`spring`,stiffness:300,damping:30},opacity:{duration:.2}},drag:c===`slide`?`x`:!1,dragConstraints:{left:0,right:0},dragElastic:1,onDragEnd:(e,{offset:t,velocity:n})=>{let r=T(t.x,n.x);r<-w?S(1):r>w&&S(-1)},className:`absolute inset-0 w-full h-full flex items-center justify-center bg-black`,children:[(0,h.jsx)(`img`,{src:e[g]?.src,alt:e[g]?.alt,className:`w-full h-full object-cover pointer-events-none`,onError:t=>{console.error(`Image failed to load`,e[g]?.src),t.currentTarget.style.display=`none`}}),e[g]?.caption&&(0,h.jsx)(`div`,{className:`absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent`,children:(0,h.jsx)(`p`,{className:`text-white text-lg font-medium`,children:e[g].caption})})]},g)}),a&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`div`,{className:`absolute left-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10`,children:(0,h.jsx)(f,{variant:`ghost`,size:`sm`,className:`h-10 w-10 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm p-0`,onClick:()=>S(-1),children:(0,h.jsx)(r,{className:`w-6 h-6`})})}),(0,h.jsx)(`div`,{className:`absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10`,children:(0,h.jsx)(f,{variant:`ghost`,size:`sm`,className:`h-10 w-10 rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-sm p-0`,onClick:()=>S(1),children:(0,h.jsx)(i,{className:`w-6 h-6`})})})]}),o&&(0,h.jsx)(`div`,{className:`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10`,children:e.map((e,t)=>(0,h.jsx)(`button`,{onClick:()=>{y(t>g?1:-1),_(t)},className:s(`w-2 h-2 rounded-full transition-all duration-300`,t===g?`bg-white w-6`:`bg-white/50 hover:bg-white/80`),"aria-label":`Go to slide ${t+1}`},t))})]})},g.__docgenInfo={description:``,methods:[],displayName:`ImageCarousel`,props:{images:{required:!0,tsType:{name:`Array`,elements:[{name:`CarouselImage`}],raw:`CarouselImage[]`},description:``},autoPlay:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},interval:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5000`,computed:!1}},showArrows:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},showIndicators:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},effect:{required:!1,tsType:{name:`union`,raw:`'slide' | 'fade'`,elements:[{name:`literal`,value:`'slide'`},{name:`literal`,value:`'fade'`}]},description:``,defaultValue:{value:`'slide'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},height:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``,defaultValue:{value:`'400px'`,computed:!1}}}}})),v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{n(),_(),v=c(),y=[{src:`https://picsum.photos/seed/dashboard1/800/400`,alt:`Dashboard Overview`,caption:`Main Dashboard View`},{src:`https://picsum.photos/seed/chart1/800/400`,alt:`Revenue Chart`,caption:`Monthly Revenue — Q1 2025`},{src:`https://picsum.photos/seed/app1/800/400`,alt:`Mobile App`,caption:`Mobile Banking App Interface`},{src:`https://picsum.photos/seed/analytics1/800/400`,alt:`Analytics`,caption:`Advanced Analytics Dashboard`}],b={title:`Data Display/ImageCarousel`,component:g,tags:[`autodocs`]},x={args:{images:y}},S={args:{images:y,autoPlay:!0,interval:3e3}},C={args:{images:y,showArrows:!1}},w={args:{images:y.slice(0,3),showIndicators:!1}},T={args:{images:y.slice(0,1)}},E={args:{images:y,autoPlay:!0,interval:6e3}},D={args:{images:[{src:`https://picsum.photos/seed/product1/800/400`,alt:`Premium Card`,caption:`Premium Platinum Card`},{src:`https://picsum.photos/seed/product2/800/400`,alt:`Mobile App`,caption:`Mobile Banking App`},{src:`https://picsum.photos/seed/product3/800/400`,alt:`Dashboard`,caption:`Wealth Management Dashboard`}],autoPlay:!0,interval:4e3}},O={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,v.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,v.jsx)(e,{})})]},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    images
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    images,
    autoPlay: true,
    interval: 3000
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    images,
    showArrows: false
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    images: images.slice(0, 3),
    showIndicators: false
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    images: images.slice(0, 1)
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    images,
    autoPlay: true,
    interval: 6000
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    images: [{
      src: 'https://picsum.photos/seed/product1/800/400',
      alt: 'Premium Card',
      caption: 'Premium Platinum Card'
    }, {
      src: 'https://picsum.photos/seed/product2/800/400',
      alt: 'Mobile App',
      caption: 'Mobile Banking App'
    }, {
      src: 'https://picsum.photos/seed/product3/800/400',
      alt: 'Dashboard',
      caption: 'Wealth Management Dashboard'
    }],
    autoPlay: true,
    interval: 4000
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`AutoPlay`,`NoArrows`,`NoIndicators`,`SingleImage`,`SlowAutoPlay`,`ProductShowcase`,`DarkMode`]}))();export{S as AutoPlay,O as DarkMode,x as Default,C as NoArrows,w as NoIndicators,D as ProductShowcase,T as SingleImage,E as SlowAutoPlay,k as __namedExportsOrder,b as default};