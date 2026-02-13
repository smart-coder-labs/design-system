import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as s}from"./iframe-D5DOIGW8.js";import{c as y}from"./utils-CDN07tui.js";import{B as C}from"./Button-yixddUw3.js";import{I as D}from"./Input-DwdL6bPe.js";import{R as Q}from"./refresh-cw-DzJ5Co6h.js";import{C as q}from"./check-cKab_vAK.js";import{C as L}from"./copy-CjH-Ztks.js";import{D as T}from"./download-3Gaqn17z.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-BbTJ7w1C.js";import"./createLucideIcon-DOQ0Nu6C.js";const k=({defaultValue:v="https://example.com",size:r=200,color:p="#000000",backgroundColor:f="#FFFFFF",showInput:j=!1,className:R})=>{const[t,I]=s.useState(v),[l,N]=s.useState(""),[g,h]=s.useState(!0),[w,x]=s.useState(!1),b=a=>a.replace("#","");s.useEffect(()=>{h(!0);const a=encodeURIComponent(t),m=b(p),n=b(f),o=`https://api.qrserver.com/v1/create-qr-code/?size=${r}x${r}&data=${a}&color=${m}&bgcolor=${n}&margin=10`,F=new Image;F.src=o,F.onload=()=>{N(o),h(!1)}},[t,r,p,f]);const V=async()=>{try{const m=await(await fetch(l)).blob(),n=window.URL.createObjectURL(m),o=document.createElement("a");o.href=n,o.download=`qrcode-${Date.now()}.png`,document.body.appendChild(o),o.click(),document.body.removeChild(o),window.URL.revokeObjectURL(n)}catch(a){console.error("Error downloading QR code:",a),window.open(l,"_blank")}},S=()=>{navigator.clipboard.writeText(t),x(!0),setTimeout(()=>x(!1),2e3)};return e.jsxs("div",{className:y("flex flex-col items-center gap-6 p-6 rounded-2xl bg-surface-primary border border-border-primary shadow-sm w-full max-w-sm",R),children:[j&&e.jsxs("div",{className:"w-full space-y-2",children:[e.jsx("label",{className:"text-sm font-medium text-text-secondary",children:"Content"}),e.jsx(D,{value:t,onChange:a=>I(a.target.value),placeholder:"Enter URL or text...",className:"w-full"})]}),e.jsxs("div",{className:"relative rounded-xl overflow-hidden bg-white shadow-inner border border-border-secondary",style:{width:r,height:r},children:[g&&e.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-surface-secondary animate-pulse",children:e.jsx(Q,{className:"w-8 h-8 text-text-tertiary animate-spin"})}),l&&e.jsx("img",{src:l,alt:"QR Code",className:y("w-full h-full object-contain transition-opacity duration-300",g?"opacity-0":"opacity-100")})]}),e.jsxs("div",{className:"flex items-center gap-2 w-full",children:[e.jsxs(C,{variant:"outline",className:"flex-1",onClick:S,title:"Copy content to clipboard",children:[w?e.jsx(q,{className:"w-4 h-4 mr-2"}):e.jsx(L,{className:"w-4 h-4 mr-2"}),w?"Copied":"Copy"]}),e.jsxs(C,{variant:"primary",className:"flex-1",onClick:V,children:[e.jsx(T,{className:"w-4 h-4 mr-2"}),"Download"]})]})]})};k.__docgenInfo={description:"",methods:[],displayName:"QRCodeGenerator",props:{defaultValue:{required:!1,tsType:{name:"string"},description:"Initial value for the QR code",defaultValue:{value:'"https://example.com"',computed:!1}},size:{required:!1,tsType:{name:"number"},description:"Size of the QR code in pixels (default: 200)",defaultValue:{value:"200",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"Color of the QR code modules (hex, default: 000000)",defaultValue:{value:'"#000000"',computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color (hex, default: FFFFFF)",defaultValue:{value:'"#FFFFFF"',computed:!1}},showInput:{required:!1,tsType:{name:"boolean"},description:"Show an internal input to change the value",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Class name for the container"}}};const J={title:"Data Display/QRCodeGenerator",component:k,parameters:{layout:"centered"},tags:[],argTypes:{color:{control:"color"},backgroundColor:{control:"color"},size:{control:{type:"range",min:100,max:400,step:10}}}},c={args:{defaultValue:"https://apple.com",showInput:!0}},d={args:{defaultValue:"https://design-system.com",color:"#007AFF",backgroundColor:"#F5F5F7",showInput:!0}},u={args:{defaultValue:"https://maps.google.com",size:300,showInput:!1}},i={args:{defaultValue:"Dark Mode QR",color:"#FFFFFF",backgroundColor:"#000000",className:"bg-surface-primary dark:bg-surface-primary",showInput:!0},parameters:{backgrounds:{default:"dark"}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "https://apple.com",
    showInput: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "https://design-system.com",
    color: "#007AFF",
    // Apple Blue
    backgroundColor: "#F5F5F7",
    // Surface Secondary
    showInput: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "https://maps.google.com",
    size: 300,
    showInput: false
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: "Dark Mode QR",
    color: "#FFFFFF",
    backgroundColor: "#000000",
    className: "bg-surface-primary dark:bg-surface-primary",
    showInput: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
}`,...i.parameters?.docs?.source}}};const K=["Default","CustomColors","Large","DarkModeCompatible"];export{d as CustomColors,i as DarkModeCompatible,c as Default,u as Large,K as __namedExportsOrder,J as default};
