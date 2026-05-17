import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-524CuMck.js";import{D as r,Gn as i,Yn as a,Zt as o,qn as s,t as c}from"./lucide-react-vxYowq1d.js";import{n as l,t as u}from"./utils-ijcE-ZHT.js";import{n as d,t as f}from"./dist-DFQLbTcc.js";import{t as p}from"./jsx-runtime-DaLCRA3n.js";var m,h,g,_,v,y,b,x=e((()=>{m=t(n()),d(),c(),l(),h=p(),g=f(`relative w-full rounded-xl border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground`,{variants:{variant:{default:`bg-surface-secondary text-text-primary border-border-primary`,destructive:`border-status-error/50 text-status-error dark:border-status-error [&>svg]:text-status-error bg-red-600/10`,success:`border-status-success/50 text-status-success dark:border-status-success [&>svg]:text-status-success bg-status-success/10`,warning:`border-status-warning/50 text-status-warning dark:border-status-warning [&>svg]:text-status-warning bg-status-warning/10`,info:`border-status-info/50 text-status-info dark:border-status-info [&>svg]:text-status-info bg-status-info/10`}},defaultVariants:{variant:`default`}}),_={default:o,destructive:i,success:s,warning:a,info:o},v=m.forwardRef(({className:e,variant:t=`default`,children:n,...r},i)=>{let a=_[t||`default`];return(0,h.jsxs)(`div`,{ref:i,role:`alert`,className:u(g({variant:t}),e),...r,children:[(0,h.jsx)(a,{className:`h-4 w-4`}),n]})}),v.displayName=`Alert`,y=m.forwardRef(({className:e,...t},n)=>(0,h.jsx)(`h5`,{ref:n,className:u(`mb-1 font-medium leading-none tracking-tight`,e),...t})),y.displayName=`AlertTitle`,b=m.forwardRef(({className:e,...t},n)=>(0,h.jsx)(`div`,{ref:n,className:u(`text-sm [&_p]:leading-relaxed opacity-90`,e),...t})),b.displayName=`AlertDescription`,v.__docgenInfo={description:``,methods:[],displayName:`Alert`,props:{variant:{defaultValue:{value:`"default"`,computed:!1},required:!1}}},y.__docgenInfo={description:``,methods:[],displayName:`AlertTitle`},b.__docgenInfo={description:``,methods:[],displayName:`AlertDescription`}})),S,C,w,T,E,D,O,k;e((()=>{x(),c(),S=p(),C={title:`Feedback/Alert`,component:v,tags:[],argTypes:{variant:{control:`select`,options:[`default`,`destructive`,`success`,`warning`,`info`]}}},w={render:e=>(0,S.jsxs)(v,{...e,children:[(0,S.jsx)(r,{className:`h-4 w-4`}),(0,S.jsx)(y,{children:`Heads up!`}),(0,S.jsx)(b,{children:`You can add components to your app using the cli.`})]})},T={render:()=>(0,S.jsxs)(v,{variant:`destructive`,children:[(0,S.jsx)(y,{children:`Error`}),(0,S.jsx)(b,{children:`Your session has expired. Please log in again.`})]})},E={render:()=>(0,S.jsxs)(v,{variant:`success`,children:[(0,S.jsx)(y,{children:`Success`}),(0,S.jsx)(b,{children:`Your changes have been saved successfully.`})]})},D={render:()=>(0,S.jsxs)(v,{variant:`warning`,children:[(0,S.jsx)(y,{children:`Warning`}),(0,S.jsx)(b,{children:`This action cannot be undone.`})]})},O={render:()=>(0,S.jsxs)(v,{variant:`info`,children:[(0,S.jsx)(y,{children:`Note`}),(0,S.jsx)(b,{children:`Please read the documentation for more details.`})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <Alert {...args}>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components to your app using the cli.
            </AlertDescription>
        </Alert>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Your session has expired. Please log in again.
            </AlertDescription>
        </Alert>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="success">
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
                Your changes have been saved successfully.
            </AlertDescription>
        </Alert>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
                This action cannot be undone.
            </AlertDescription>
        </Alert>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <Alert variant="info">
            <AlertTitle>Note</AlertTitle>
            <AlertDescription>
                Please read the documentation for more details.
            </AlertDescription>
        </Alert>
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Destructive`,`Success`,`Warning`,`Info`]}))();export{w as Default,T as Destructive,O as Info,E as Success,D as Warning,k as __namedExportsOrder,C as default};