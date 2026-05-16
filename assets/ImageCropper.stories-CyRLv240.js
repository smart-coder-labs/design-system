import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ns4lj-Vt.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{Mn as o,i as s,n as c,rr as l,t as u,tt as d}from"./lucide-react-DM_OnbjU.js";import{n as f,t as p}from"./Slider-DUdHXSoM.js";import{n as m,t as h}from"./Button-D5QeBcms.js";var g,_,v,y=e((()=>{g=t(n()),f(),m(),u(),r(),_=a(),v=({src:e,aspectRatio:t=1,onCrop:n,onCancel:r,className:a})=>{let[u,f]=(0,g.useState)(null),[m,v]=(0,g.useState)(1),[y,b]=(0,g.useState)(1),[x,S]=(0,g.useState)(0),[C,w]=(0,g.useState)({x:0,y:0}),[T,E]=(0,g.useState)(!1),[D,O]=(0,g.useState)({x:0,y:0}),k=(0,g.useRef)(null);(0,g.useRef)(null),(0,g.useEffect)(()=>{let n=new Image;n.src=e,n.crossOrigin=`anonymous`,n.onload=()=>{f(n);let e=300/t,r=300/n.naturalWidth,i=e/n.naturalHeight,a=Math.max(r,i);b(a),v(a)}},[e,t]);let A=e=>{E(!0),O({x:e.clientX-C.x,y:e.clientY-C.y})},j=e=>{T&&(e.preventDefault(),w({x:e.clientX-D.x,y:e.clientY-D.y}))},M=()=>{E(!1)},N=e=>{E(!0);let t=e.touches[0];O({x:t.clientX-C.x,y:t.clientY-C.y})},P=e=>{if(!T)return;let t=e.touches[0];w({x:t.clientX-D.x,y:t.clientY-D.y})},F=(0,g.useCallback)(()=>{if(!u||!k.current)return;let e=document.createElement(`canvas`),r=e.getContext(`2d`);if(!r)return;let i=300/t;e.width=300,e.height=i,r.translate(e.width/2,e.height/2),r.rotate(x*Math.PI/180),r.scale(m,m),r.translate(C.x,C.y),r.drawImage(u,-u.naturalWidth/2,-u.naturalHeight/2),n(e.toDataURL(`image/jpeg`,.9))},[u,m,x,C,t,n]);return(0,g.useEffect)(()=>{let e=setTimeout(()=>{u&&F()},100);return()=>clearTimeout(e)},[u,m,x,C,F]),(0,_.jsxs)(`div`,{className:i(`flex flex-col gap-4 w-full max-w-2xl mx-auto p-4 bg-surface-primary rounded-2xl shadow-sm border border-border-primary`,a),children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,_.jsxs)(`h3`,{className:`text-lg font-semibold text-text-primary flex items-center gap-2`,children:[(0,_.jsx)(o,{className:`w-5 h-5`}),`Edit Image`]}),(0,_.jsx)(`div`,{className:`flex gap-2`,children:(0,_.jsx)(h,{variant:`ghost`,size:`sm`,onClick:()=>{v(y),S(0),w({x:0,y:0})},children:`Reset`})})]}),(0,_.jsxs)(`div`,{className:`relative w-full h-[400px] bg-[#1c1c1e] rounded-xl overflow-hidden cursor-move touch-none select-none flex items-center justify-center`,ref:k,onMouseDown:A,onMouseMove:j,onMouseUp:M,onMouseLeave:M,onTouchStart:N,onTouchMove:P,onTouchEnd:M,children:[u&&(0,_.jsx)(`div`,{style:{transform:`translate(${C.x}px, ${C.y}px) rotate(${x}deg) scale(${m})`,transformOrigin:`center`,width:u.naturalWidth,height:u.naturalHeight,position:`absolute`,left:`50%`,top:`50%`,marginLeft:-u.naturalWidth/2,marginTop:-u.naturalHeight/2},children:(0,_.jsx)(`img`,{src:e,alt:`Edit`,className:`max-w-none pointer-events-none select-none`,draggable:!1})}),(0,_.jsxs)(`div`,{className:`absolute pointer-events-none border-2 border-white shadow-[0_0_0_9999px_rgba(0,0,0,0.7)]`,style:{width:300,height:300/t},children:[(0,_.jsxs)(`div`,{className:`absolute inset-0 flex flex-col`,children:[(0,_.jsx)(`div`,{className:`flex-1 border-b border-white/30`}),(0,_.jsx)(`div`,{className:`flex-1 border-b border-white/30`}),(0,_.jsx)(`div`,{className:`flex-1`})]}),(0,_.jsxs)(`div`,{className:`absolute inset-0 flex`,children:[(0,_.jsx)(`div`,{className:`flex-1 border-r border-white/30`}),(0,_.jsx)(`div`,{className:`flex-1 border-r border-white/30`}),(0,_.jsx)(`div`,{className:`flex-1`})]})]})]}),(0,_.jsxs)(`div`,{className:`flex flex-col gap-4 px-2`,children:[(0,_.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,_.jsx)(c,{className:`w-4 h-4 text-text-secondary`}),(0,_.jsx)(p,{value:m,min:.1,max:3,step:.01,onValueChange:e=>v(e),className:`flex-1`}),(0,_.jsxs)(`span`,{className:`text-xs font-mono w-12 text-right text-text-secondary`,children:[Math.round(m*100),`%`]})]}),(0,_.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,_.jsx)(d,{className:`w-4 h-4 text-text-secondary`}),(0,_.jsx)(p,{value:x,min:-180,max:180,step:1,onValueChange:e=>S(e),className:`flex-1`}),(0,_.jsxs)(`span`,{className:`text-xs font-mono w-12 text-right text-text-secondary`,children:[x,`°`]})]})]}),(0,_.jsxs)(`div`,{className:`flex items-center justify-end gap-3 pt-6`,children:[(0,_.jsxs)(h,{variant:`ghost`,onClick:r,children:[(0,_.jsx)(s,{className:`w-4 h-4 mr-2`}),`Cancel`]}),(0,_.jsxs)(h,{variant:`primary`,onClick:F,children:[(0,_.jsx)(l,{className:`w-4 h-4 mr-2`}),`Crop Image`]})]})]})},v.__docgenInfo={description:``,methods:[],displayName:`ImageCropper`,props:{src:{required:!0,tsType:{name:`string`},description:``},aspectRatio:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},onCrop:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(croppedImage: string) => void`,signature:{arguments:[{type:{name:`string`},name:`croppedImage`}],return:{name:`void`}}},description:``},onCancel:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),b,x,S,C,w,T,E,D,O,k,A;e((()=>{n(),y(),b=a(),x={title:`Data Display/ImageCropper`,component:v,tags:[`autodocs`],parameters:{layout:`centered`}},S={args:{src:`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop`,onCrop:e=>console.log(`Cropped:`,e)}},C={args:{src:`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop`,aspectRatio:1,shape:`circle`,onCrop:e=>console.log(`Cropped:`,e)}},w={args:{src:`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop`,aspectRatio:1,shape:`circle`,maxWidth:200,maxHeight:200,onCrop:e=>console.log(`Cropped:`,e)},render:e=>(0,b.jsxs)(`div`,{className:`w-80 space-y-4`,children:[(0,b.jsx)(`p`,{className:`text-sm font-semibold text-text-primary`,children:`Upload Profile Picture`}),(0,b.jsx)(v,{...e})]})},T={args:{src:`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop`,aspectRatio:1.586,onCrop:e=>console.log(`Cropped:`,e)}},E={args:{src:`https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop`,aspectRatio:2,onCrop:e=>console.log(`Cropped:`,e)}},D={args:{src:`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop`,aspectRatio:1,onCrop:e=>console.log(`Cropped:`,e)}},O={args:{src:`https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop`,maxWidth:300,maxHeight:200,onCrop:e=>console.log(`Cropped:`,e)}},k={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,b.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,b.jsx)(e,{})})]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    onCrop: data => console.log('Cropped:', data)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    aspectRatio: 1,
    shape: 'circle',
    onCrop: data => console.log('Cropped:', data)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
    aspectRatio: 1,
    shape: 'circle',
    maxWidth: 200,
    maxHeight: 200,
    onCrop: data => console.log('Cropped:', data)
  },
  render: args => <div className="w-80 space-y-4">
      <p className="text-sm font-semibold text-text-primary">Upload Profile Picture</p>
      <ImageCropper {...args} />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    aspectRatio: 1.586,
    onCrop: data => console.log('Cropped:', data)
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop',
    aspectRatio: 2,
    onCrop: data => console.log('Cropped:', data)
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop',
    aspectRatio: 1,
    onCrop: data => console.log('Cropped:', data)
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    maxWidth: 300,
    maxHeight: 200,
    onCrop: data => console.log('Cropped:', data)
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Default`,`CircleAspect`,`ProfilePicture`,`IDDocument`,`WideBanner`,`Square`,`RestrictedSize`,`DarkMode`]}))();export{C as CircleAspect,k as DarkMode,S as Default,T as IDDocument,w as ProfilePicture,O as RestrictedSize,D as Square,E as WideBanner,A as __namedExportsOrder,x as default};