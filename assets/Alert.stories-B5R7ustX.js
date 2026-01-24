import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-B9hmpDEG.js";import{c as h}from"./index-B_jtOnfb.js";import{c as m}from"./utils-CDN07tui.js";import{I as g}from"./info-BpsatBaQ.js";import{C as v}from"./circle-alert-C9KobFTv.js";import{C as b}from"./circle-check-CzJWmVyh.js";import{C as j}from"./circle-x-CFQzAW44.js";import{c as y}from"./createLucideIcon-Ct5Zk_dD.js";import"./preload-helper-PPVm8Dsz.js";const T=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],w=y("terminal",T),D=h("relative w-full rounded-xl border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",{variants:{variant:{default:"bg-surface-secondary text-text-primary border-border-primary",destructive:"border-status-error/50 text-status-error dark:border-status-error [&>svg]:text-status-error bg-red-600/10",success:"border-status-success/50 text-status-success dark:border-status-success [&>svg]:text-status-success bg-status-success/10",warning:"border-status-warning/50 text-status-warning dark:border-status-warning [&>svg]:text-status-warning bg-status-warning/10",info:"border-status-info/50 text-status-info dark:border-status-info [&>svg]:text-status-info bg-status-info/10"}},defaultVariants:{variant:"default"}}),N={default:g,destructive:j,success:b,warning:v,info:g},r=p.forwardRef(({className:s,variant:n="default",children:o,...f},x)=>{const A=N[n||"default"];return e.jsxs("div",{ref:x,role:"alert",className:m(D({variant:n}),s),...f,children:[e.jsx(A,{className:"h-4 w-4"}),o]})});r.displayName="Alert";const t=p.forwardRef(({className:s,...n},o)=>e.jsx("h5",{ref:o,className:m("mb-1 font-medium leading-none tracking-tight",s),...n}));t.displayName="AlertTitle";const a=p.forwardRef(({className:s,...n},o)=>e.jsx("div",{ref:o,className:m("text-sm [&_p]:leading-relaxed opacity-90",s),...n}));a.displayName="AlertDescription";r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{defaultValue:{value:'"default"',computed:!1},required:!1}}};t.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};a.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};const V={title:"Feedback/Alert",component:r,tags:[],argTypes:{variant:{control:"select",options:["default","destructive","success","warning","info"]}}},i={render:s=>e.jsxs(r,{...s,children:[e.jsx(w,{className:"h-4 w-4"}),e.jsx(t,{children:"Heads up!"}),e.jsx(a,{children:"You can add components to your app using the cli."})]})},c={render:()=>e.jsxs(r,{variant:"destructive",children:[e.jsx(t,{children:"Error"}),e.jsx(a,{children:"Your session has expired. Please log in again."})]})},l={render:()=>e.jsxs(r,{variant:"success",children:[e.jsx(t,{children:"Success"}),e.jsx(a,{children:"Your changes have been saved successfully."})]})},d={render:()=>e.jsxs(r,{variant:"warning",children:[e.jsx(t,{children:"Warning"}),e.jsx(a,{children:"This action cannot be undone."})]})},u={render:()=>e.jsxs(r,{variant:"info",children:[e.jsx(t,{children:"Note"}),e.jsx(a,{children:"Please read the documentation for more details."})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <Alert {...args}>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components to your app using the cli.
            </AlertDescription>
        </Alert>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Your session has expired. Please log in again.
            </AlertDescription>
        </Alert>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
                Your changes have been saved successfully.
            </AlertDescription>
        </Alert>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
                This action cannot be undone.
            </AlertDescription>
        </Alert>
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="info">
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
                Please read the documentation for more details.
            </AlertDescription>
        </Alert>
}`,...u.parameters?.docs?.source}}};const H=["Default","Destructive","Success","Warning","Info"];export{i as Default,c as Destructive,u as Info,l as Success,d as Warning,H as __namedExportsOrder,V as default};
