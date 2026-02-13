import{j as e}from"./jsx-runtime-u17CrQMm.js";import{B as l}from"./Button-yixddUw3.js";import{m as c}from"./proxy-BbTJ7w1C.js";import{c as g}from"./createLucideIcon-DOQ0Nu6C.js";import{C as y}from"./clock-BCjUkU7Q.js";import{A as b}from"./arrow-right-4v-l9quM.js";import{R as v}from"./refresh-cw-DzJ5Co6h.js";import"./iframe-D5DOIGW8.js";import"./preload-helper-PPVm8Dsz.js";const k=[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]],w=g("construction",k),n=({title:d="We'll be back soon",description:u="We're currently performing some scheduled maintenance. We should be back shortly.",estimatedReturnTime:o,showContactSupport:m=!0,customAction:i,fullPage:p=!0,className:f="",onContactSupport:h})=>{const x=`
    flex flex-col items-center justify-center text-center p-8
    ${p?"min-h-screen w-full bg-background-secondary":"w-full h-full bg-surface-primary rounded-2xl"}
    ${f}
  `.trim().replace(/\s+/g," ");return e.jsx("div",{className:x,children:e.jsxs(c.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,ease:[.16,1,.3,1]},className:"max-w-md mx-auto",children:[e.jsxs("div",{className:"relative mb-8 inline-flex items-center justify-center",children:[e.jsx(c.div,{className:"absolute inset-0 bg-accent-blue/10 rounded-full blur-xl",animate:{scale:[1,1.2,1],opacity:[.5,.8,.5]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}}),e.jsx("div",{className:"relative bg-surface-primary p-6 rounded-full shadow-lg border border-border-primary",children:e.jsx(w,{className:"w-12 h-12 text-accent-blue",strokeWidth:1.5})})]}),e.jsx("h1",{className:"text-3xl font-bold text-text-primary mb-4 tracking-tight",children:d}),e.jsx("p",{className:"text-text-secondary text-lg mb-8 leading-relaxed",children:u}),o&&e.jsxs("div",{className:"flex items-center justify-center gap-2 text-text-tertiary mb-8 bg-surface-tertiary/50 py-2 px-4 rounded-full inline-flex",children:[e.jsx(y,{size:16}),e.jsxs("span",{className:"text-sm font-medium",children:["Expected return: ",o]})]}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center gap-4",children:[i,m&&!i&&e.jsx(l,{variant:"outline",onClick:h,rightIcon:e.jsx(b,{size:16}),children:"Contact Support"})]}),e.jsx("div",{className:"mt-12 text-sm text-text-quaternary",children:e.jsxs("p",{children:["System Status: ",e.jsx("span",{className:"text-status-warning font-medium",children:"Maintenance"})]})})]})})};n.displayName="MaintenanceMode";n.__docgenInfo={description:"",methods:[],displayName:"MaintenanceMode",props:{title:{required:!1,tsType:{name:"string"},description:`Title of the maintenance page
@default "We'll be back soon"`,defaultValue:{value:`"We'll be back soon"`,computed:!1}},description:{required:!1,tsType:{name:"string"},description:`Description text explaining the maintenance
@default "We're currently performing some scheduled maintenance. We should be back shortly."`,defaultValue:{value:`"We're currently performing some scheduled maintenance. We should be back shortly."`,computed:!1}},estimatedReturnTime:{required:!1,tsType:{name:"string"},description:"Estimated time when the service will be back"},showContactSupport:{required:!1,tsType:{name:"boolean"},description:`Whether to show a contact support button
@default true`,defaultValue:{value:"true",computed:!1}},customAction:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom action button or link"},fullPage:{required:!1,tsType:{name:"boolean"},description:`Full page mode centers the content in the viewport
@default true`,defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom class name",defaultValue:{value:"''",computed:!1}},onContactSupport:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback for contact support button"}}};const E={title:"Surfaces/MaintenanceMode",component:n,tags:[],argTypes:{title:{control:"text"},description:{control:"text"},estimatedReturnTime:{control:"text"},fullPage:{control:"boolean"}},parameters:{layout:"fullscreen"}},t={args:{fullPage:!0}},a={args:{estimatedReturnTime:"2:00 PM EST",description:"We are updating our servers to provide you with a better experience."}},r={parameters:{layout:"centered"},args:{fullPage:!1,className:"w-[600px] h-[400px] shadow-xl border border-border-primary",title:"Module Unavailable",description:"This specific module is currently undergoing maintenance.",showContactSupport:!1}},s={args:{title:"Scheduled Update",description:"Please check back later or refresh the page to see if the service is back online.",customAction:e.jsx(l,{variant:"primary",leftIcon:e.jsx(v,{size:16}),children:"Check Status"})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    fullPage: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    estimatedReturnTime: '2:00 PM EST',
    description: 'We are updating our servers to provide you with a better experience.'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  args: {
    fullPage: false,
    className: 'w-[600px] h-[400px] shadow-xl border border-border-primary',
    title: 'Module Unavailable',
    description: 'This specific module is currently undergoing maintenance.',
    showContactSupport: false
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Scheduled Update',
    description: 'Please check back later or refresh the page to see if the service is back online.',
    customAction: <Button variant="primary" leftIcon={<RefreshCw size={16} />}>
                Check Status
            </Button>
  }
}`,...s.parameters?.docs?.source}}};const P=["Default","WithTimeEstimate","Embedded","CustomAction"];export{s as CustomAction,t as Default,r as Embedded,a as WithTimeEstimate,P as __namedExportsOrder,E as default};
