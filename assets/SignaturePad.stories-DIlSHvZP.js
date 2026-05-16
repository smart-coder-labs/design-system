import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-jtk2jlYO.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{An as o,En as s,t as c}from"./lucide-react-LrcM5b-z.js";import{n as l,t as u}from"./Button-BH1FZuik.js";var d,f,p,m=e((()=>{d=t(n()),r(),f=a(),l(),c(),p=({width:e,height:t=200,penColor:n=`#000000`,backgroundColor:r=`#FFFFFF`,strokeWidth:a=2,onEnd:c,className:l})=>{let p=(0,d.useRef)(null),[m,h]=(0,d.useState)(!1),[g,_]=(0,d.useState)(!1),v=(0,d.useRef)(null);(0,d.useEffect)(()=>{let e=p.current;if(!e)return;let t=e.getContext(`2d`);t&&(t.lineCap=`round`,t.lineJoin=`round`,t.strokeStyle=n,t.lineWidth=a,t.fillStyle=r,t.fillRect(0,0,e.width,e.height))},[n,r,a]),(0,d.useEffect)(()=>{let i=()=>{if(v.current&&p.current&&!e){let e=v.current.offsetWidth,i=p.current,o=document.createElement(`canvas`),s=o.getContext(`2d`);o.width=i.width,o.height=i.height,s?.drawImage(i,0,0),i.width=e,i.height=t;let c=i.getContext(`2d`);c&&(c.lineCap=`round`,c.lineJoin=`round`,c.strokeStyle=n,c.lineWidth=a,c.fillStyle=r,c.fillRect(0,0,i.width,i.height))}};return i(),window.addEventListener(`resize`,i),()=>window.removeEventListener(`resize`,i)},[e,t,n,a,r]);let y=e=>{let t=p.current;if(!t)return{x:0,y:0};let n=t.getBoundingClientRect(),r,i;return`touches`in e?(r=e.touches[0].clientX,i=e.touches[0].clientY):(r=e.clientX,i=e.clientY),{x:r-n.left,y:i-n.top}},b=e=>{e.preventDefault(),h(!0);let{x:t,y:n}=y(e),r=p.current?.getContext(`2d`);r&&(r.beginPath(),r.moveTo(t,n))},x=e=>{if(e.preventDefault(),!m)return;let{x:t,y:n}=y(e),r=p.current?.getContext(`2d`);r&&(r.lineTo(t,n),r.stroke(),g||_(!0))},S=()=>{if(m){h(!1);let e=p.current;e&&c&&c(e.toDataURL())}};return(0,f.jsxs)(`div`,{className:i(`flex flex-col gap-4 w-full max-w-md`,l),ref:v,children:[(0,f.jsxs)(`div`,{className:`relative rounded-xl overflow-hidden border border-border-primary shadow-sm bg-white touch-none`,children:[(0,f.jsx)(`canvas`,{ref:p,width:e||400,height:t,className:`cursor-crosshair block`,onMouseDown:b,onMouseMove:x,onMouseUp:S,onMouseLeave:S,onTouchStart:b,onTouchMove:x,onTouchEnd:S}),!g&&(0,f.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center pointer-events-none text-text-tertiary/30 text-2xl font-handwriting select-none`,children:`Sign here`})]}),(0,f.jsxs)(`div`,{className:`flex items-center justify-between gap-2`,children:[(0,f.jsxs)(u,{variant:`ghost`,size:`sm`,onClick:()=>{let e=p.current,t=e?.getContext(`2d`);e&&t&&(t.fillStyle=r,t.fillRect(0,0,e.width,e.height),_(!1))},disabled:!g,className:`text-status-error hover:bg-status-error/10 hover:text-status-error`,children:[(0,f.jsx)(s,{className:`w-4 h-4 mr-2`}),`Clear`]}),(0,f.jsxs)(u,{variant:`outline`,size:`sm`,onClick:()=>{let e=p.current;if(e){let t=e.toDataURL(`image/png`),n=document.createElement(`a`);n.download=`signature-${Date.now()}.png`,n.href=t,n.click()}},disabled:!g,children:[(0,f.jsx)(o,{className:`w-4 h-4 mr-2`}),`Save`]})]})]})},p.__docgenInfo={description:``,methods:[],displayName:`SignaturePad`,props:{width:{required:!1,tsType:{name:`number`},description:`Width of the canvas in pixels (default: 100% of container)`},height:{required:!1,tsType:{name:`number`},description:`Height of the canvas in pixels (default: 200)`,defaultValue:{value:`200`,computed:!1}},penColor:{required:!1,tsType:{name:`string`},description:`Color of the pen stroke (default: #000000)`,defaultValue:{value:`'#000000'`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`string`},description:`Background color of the canvas (default: #FFFFFF)`,defaultValue:{value:`'#FFFFFF'`,computed:!1}},strokeWidth:{required:!1,tsType:{name:`number`},description:`Stroke width (default: 2)`,defaultValue:{value:`2`,computed:!1}},onEnd:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(dataUrl: string) => void`,signature:{arguments:[{type:{name:`string`},name:`dataUrl`}],return:{name:`void`}}},description:`Callback when drawing ends`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS classes`}}}})),h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{m(),h=a(),g={title:`Data Display/SignaturePad`,component:p,tags:[`autodocs`]},_={args:{onSave:e=>console.log(`Signature saved`)}},v={args:{label:`Sign below`,onSave:e=>console.log(`Signature saved`)}},y={args:{label:`Authorized Signature`,onSave:e=>console.log(`Signature saved`),onClear:()=>console.log(`Cleared`)}},b={args:{label:`Signed`,disabled:!0,onSave:e=>console.log(`Signature saved`)}},x={args:{label:`Sign with style`,penColor:`#2563eb`,backgroundColor:`#f0f9ff`,strokeWidth:3,onSave:e=>console.log(`Signature saved`)}},S={args:{label:`Please sign here`,height:300,width:500,penColor:`#7c3aed`,strokeWidth:2,onSave:e=>console.log(`Signature saved`)}},C={args:{label:`Firma aquí`,width:320,height:160,strokeWidth:4,onSave:e=>console.log(`Signature saved`)},decorators:[e=>(0,h.jsx)(`div`,{className:`max-w-sm mx-auto`,children:(0,h.jsx)(e,{})})]},w={args:{label:`Authorized Signature`,penColor:`#e2e8f0`,backgroundColor:`#1e293b`,strokeWidth:2,onSave:e=>console.log(`Signature saved`)},parameters:{backgrounds:{default:`dark`}},decorators:[e=>(0,h.jsx)(`div`,{className:`dark p-6 bg-zinc-900 rounded-xl`,children:(0,h.jsx)(e,{})})]},T={args:{label:`Sign with thick pen`,strokeWidth:6,penColor:`#dc2626`,onSave:e=>console.log(`Signature saved`)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    onSave: (dataUrl: string) => console.log('Signature saved')
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Sign below',
    onSave: (dataUrl: string) => console.log('Signature saved')
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Authorized Signature',
    onSave: (dataUrl: string) => console.log('Signature saved'),
    onClear: () => console.log('Cleared')
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Signed',
    disabled: true,
    onSave: (dataUrl: string) => console.log('Signature saved')
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Sign with style',
    penColor: '#2563eb',
    backgroundColor: '#f0f9ff',
    strokeWidth: 3,
    onSave: (dataUrl: string) => console.log('Signature saved')
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Please sign here',
    height: 300,
    width: 500,
    penColor: '#7c3aed',
    strokeWidth: 2,
    onSave: (dataUrl: string) => console.log('Signature saved')
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Firma aquí',
    width: 320,
    height: 160,
    strokeWidth: 4,
    onSave: (dataUrl: string) => console.log('Signature saved')
  },
  decorators: [(Story: any) => <div className="max-w-sm mx-auto">
        <Story />
      </div>]
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Authorized Signature',
    penColor: '#e2e8f0',
    backgroundColor: '#1e293b',
    strokeWidth: 2,
    onSave: (dataUrl: string) => console.log('Signature saved')
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [(Story: any) => <div className="dark p-6 bg-zinc-900 rounded-xl">
        <Story />
      </div>]
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Sign with thick pen',
    strokeWidth: 6,
    penColor: '#dc2626',
    onSave: (dataUrl: string) => console.log('Signature saved')
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithLabel`,`WithClear`,`Disabled`,`CustomColors`,`TallCanvas`,`MobileResponsive`,`DarkMode`,`ThickStroke`]}))();export{x as CustomColors,w as DarkMode,_ as Default,b as Disabled,C as MobileResponsive,S as TallCanvas,T as ThickStroke,y as WithClear,v as WithLabel,E as __namedExportsOrder,g as default};