import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-Dan5ncgG.js";import{r as b}from"./index-BYtYiog6.js";import{c as k}from"./utils-CDN07tui.js";import{A as v}from"./index-Q4GMJ2Et.js";import{m as j}from"./proxy-DCTGQFKY.js";import{X as C}from"./x-CtAXLAxX.js";import{B as c}from"./Button-DwkrxhSZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLahyr3v.js";import"./resolve-elements-juiWZL7b.js";import"./createLucideIcon-jCLSnv7o.js";const o=({message:r,variant:t="default",action:e,duration:h=5e3,onClose:n,show:p=!0})=>{const[f,S]=a.useState(!1);a.useEffect(()=>{S(!0)},[]),a.useEffect(()=>{if(p&&h>0){const x=setTimeout(()=>{n?.()},h);return()=>clearTimeout(x)}},[p,h,n]);const g={default:"bg-surface-elevated text-text-primary border border-border-primary",success:"bg-status-success/10 text-status-success border border-status-success/20",error:"bg-status-error/10 text-status-error border border-status-error/20",warning:"bg-status-warning/10 text-status-warning border border-status-warning/20",info:"bg-status-info/10 text-status-info border border-status-info/20"},w=s.jsx(v,{children:p&&s.jsx(j.div,{initial:{y:100,opacity:0},animate:{y:0,opacity:1},exit:{y:100,opacity:0},transition:{type:"spring",stiffness:400,damping:30},className:"fixed bottom-6 left-1/2 -translate-x-1/2 z-sticky max-w-md w-full mx-4",children:s.jsxs("div",{className:k("flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg",g[t]),children:[s.jsx("p",{className:"flex-1 text-sm font-medium",children:r}),s.jsxs("div",{className:"flex items-center gap-2",children:[e&&s.jsx("button",{onClick:()=>{e.onClick(),n?.()},className:"text-sm font-semibold hover:opacity-80 transition-opacity focus:outline-none",children:e.label}),n&&s.jsx("button",{onClick:n,className:"p-1 rounded-lg hover:bg-black/10 transition-colors focus:outline-none","aria-label":"Close",children:s.jsx(C,{className:"w-4 h-4"})})]})]})})});return f?b.createPortal(w,document.body):null};o.displayName="Snackbar";const _={title:"Surfaces/Snackbar",component:o,tags:[],argTypes:{variant:{control:"select",options:["default","success","error","warning","info"]},duration:{control:"number"}}},i={render:r=>{const[t,e]=a.useState(!1);return s.jsxs("div",{className:"p-8",children:[s.jsx(c,{onClick:()=>e(!0),children:"Show Snackbar"}),s.jsx(o,{...r,show:t,onClose:()=>e(!1)})]})},args:{message:"This is a default snackbar message",duration:5e3}},l={render:r=>{const[t,e]=a.useState(!1);return s.jsxs("div",{className:"p-8",children:[s.jsx(c,{onClick:()=>e(!0),children:"Show Snackbar with Action"}),s.jsx(o,{...r,show:t,onClose:()=>e(!1)})]})},args:{message:"File deleted successfully",action:{label:"UNDO",onClick:()=>alert("Undo action triggered")},duration:5e3}},u={render:r=>{const[t,e]=a.useState(!1);return s.jsxs("div",{className:"p-8",children:[s.jsx(c,{onClick:()=>e(!0),children:"Show Success"}),s.jsx(o,{...r,show:t,onClose:()=>e(!1)})]})},args:{message:"Changes saved successfully",variant:"success",duration:3e3}},d={render:r=>{const[t,e]=a.useState(!1);return s.jsxs("div",{className:"p-8",children:[s.jsx(c,{onClick:()=>e(!0),children:"Show Error"}),s.jsx(o,{...r,show:t,onClose:()=>e(!1)})]})},args:{message:"Failed to save changes",variant:"error",duration:5e3}},m={render:r=>{const[t,e]=a.useState(!1);return s.jsxs("div",{className:"p-8",children:[s.jsx(c,{onClick:()=>e(!0),children:"Show Persistent Snackbar"}),s.jsx(o,{...r,show:t,onClose:()=>e(!1)})]})},args:{message:"This snackbar will not auto-dismiss",duration:0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [show, setShow] = useState(false);
    return <div className="p-8">
                <Button onClick={() => setShow(true)}>Show Snackbar</Button>
                <Snackbar {...args} show={show} onClose={() => setShow(false)} />
            </div>;
  },
  args: {
    message: 'This is a default snackbar message',
    duration: 5000
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [show, setShow] = useState(false);
    return <div className="p-8">
                <Button onClick={() => setShow(true)}>Show Snackbar with Action</Button>
                <Snackbar {...args} show={show} onClose={() => setShow(false)} />
            </div>;
  },
  args: {
    message: 'File deleted successfully',
    action: {
      label: 'UNDO',
      onClick: () => alert('Undo action triggered')
    },
    duration: 5000
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [show, setShow] = useState(false);
    return <div className="p-8">
                <Button onClick={() => setShow(true)}>Show Success</Button>
                <Snackbar {...args} show={show} onClose={() => setShow(false)} />
            </div>;
  },
  args: {
    message: 'Changes saved successfully',
    variant: 'success',
    duration: 3000
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [show, setShow] = useState(false);
    return <div className="p-8">
                <Button onClick={() => setShow(true)}>Show Error</Button>
                <Snackbar {...args} show={show} onClose={() => setShow(false)} />
            </div>;
  },
  args: {
    message: 'Failed to save changes',
    variant: 'error',
    duration: 5000
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [show, setShow] = useState(false);
    return <div className="p-8">
                <Button onClick={() => setShow(true)}>Show Persistent Snackbar</Button>
                <Snackbar {...args} show={show} onClose={() => setShow(false)} />
            </div>;
  },
  args: {
    message: 'This snackbar will not auto-dismiss',
    duration: 0
  }
}`,...m.parameters?.docs?.source}}};const z=["Default","WithAction","Success","Error","NoDismiss"];export{i as Default,d as Error,m as NoDismiss,u as Success,l as WithAction,z as __namedExportsOrder,_ as default};
