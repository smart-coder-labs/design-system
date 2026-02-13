import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as h}from"./Button-yixddUw3.js";import{m as c}from"./proxy-BbTJ7w1C.js";import{c as d}from"./createLucideIcon-DOQ0Nu6C.js";import{R as x}from"./refresh-cw-DzJ5Co6h.js";import"./iframe-D5DOIGW8.js";import"./preload-helper-PPVm8Dsz.js";const b=[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]],k=d("cloud-off",b);const R=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],v=d("wifi-off",R),s=({title:u="No Internet Connection",description:m="Please check your network settings and try again.",onRetry:i,isRetrying:l=!1,fullPage:p=!1,className:f="",icon:y})=>{const g=`
    flex flex-col items-center justify-center text-center p-8
    ${p?"fixed inset-0 z-50 bg-background-primary/95 backdrop-blur-sm":"w-full h-full bg-surface-primary rounded-2xl"}
    ${f}
  `.trim().replace(/\s+/g," ");return e.jsx("div",{className:g,children:e.jsxs(c.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.4,ease:[.16,1,.3,1]},className:"max-w-md mx-auto flex flex-col items-center",children:[e.jsxs("div",{className:"mb-6 relative",children:[e.jsx(c.div,{className:"absolute inset-0 bg-status-error/10 rounded-full blur-xl",animate:{opacity:[.3,.6,.3],scale:[1,1.1,1]},transition:{duration:3,repeat:1/0,ease:"easeInOut"}}),e.jsx("div",{className:"relative bg-surface-secondary p-5 rounded-full",children:y||e.jsx(v,{className:"w-10 h-10 text-text-secondary",strokeWidth:1.5})})]}),e.jsx("h3",{className:"text-xl font-semibold text-text-primary mb-2",children:u}),e.jsx("p",{className:"text-text-secondary mb-8 leading-relaxed",children:m}),i&&e.jsx(h,{variant:"primary",onClick:i,loading:l,leftIcon:l?void 0:e.jsx(x,{size:16}),children:"Try Again"})]})})};s.displayName="OfflineState";s.__docgenInfo={description:"",methods:[],displayName:"OfflineState",props:{title:{required:!1,tsType:{name:"string"},description:`Title of the offline state
@default "No Internet Connection"`,defaultValue:{value:'"No Internet Connection"',computed:!1}},description:{required:!1,tsType:{name:"string"},description:`Description text
@default "Please check your network settings and try again."`,defaultValue:{value:'"Please check your network settings and try again."',computed:!1}},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function when the retry button is clicked"},isRetrying:{required:!1,tsType:{name:"boolean"},description:"Whether the retry action is currently in progress",defaultValue:{value:"false",computed:!1}},fullPage:{required:!1,tsType:{name:"boolean"},description:`Whether to display as a full page overlay
@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom class name",defaultValue:{value:"''",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon to display"}}};const O={title:"Surfaces/OfflineState",component:s,tags:[],argTypes:{title:{control:"text"},description:{control:"text"},isRetrying:{control:"boolean"},fullPage:{control:"boolean"}},parameters:{layout:"centered"}},t={args:{onRetry:()=>console.log("Retrying...")}},a={args:{isRetrying:!0,onRetry:()=>{}}},r={parameters:{layout:"fullscreen"},args:{fullPage:!0,onRetry:()=>console.log("Retrying...")}},o={args:{icon:e.jsx(k,{className:"w-10 h-10 text-text-secondary"}),title:"Server Unreachable",description:"We can't connect to our servers right now. The issue might be on our end.",onRetry:()=>console.log("Retrying...")}},n={args:{title:"You are offline",description:"Content will be available once you are back online."}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    onRetry: () => console.log('Retrying...')
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isRetrying: true,
    onRetry: () => {}
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  args: {
    fullPage: true,
    onRetry: () => console.log('Retrying...')
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    icon: <CloudOff className="w-10 h-10 text-text-secondary" />,
    title: "Server Unreachable",
    description: "We can't connect to our servers right now. The issue might be on our end.",
    onRetry: () => console.log('Retrying...')
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "You are offline",
    description: "Content will be available once you are back online."
  }
}`,...n.parameters?.docs?.source}}};const P=["Default","Retrying","FullPage","CustomIcon","NoAction"];export{o as CustomIcon,t as Default,r as FullPage,n as NoAction,a as Retrying,P as __namedExportsOrder,O as default};
