import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-WZfjI2gv.js";import{n,t as r}from"./ConfirmDialog-CT39W73o.js";var i,a,o,s,c,l,u,d,f,p,m;e((()=>{n(),i=t(),a={title:`Feedback/ConfirmDialog`,component:r,tags:[`autodocs`]},o={args:{open:!0,onOpenChange:()=>{},title:`Confirm Action`,description:`Are you sure you want to proceed with this action?`,onConfirm:()=>{},variant:`default`}},s={args:{open:!0,onOpenChange:()=>{},title:`Delete Account`,description:`This action cannot be undone. All your data will be permanently deleted.`,confirmLabel:`Delete`,onConfirm:()=>{},variant:`destructive`}},c={args:{open:!0,onOpenChange:()=>{},title:`High-Value Transfer`,description:`You are about to transfer $50,000 to an external account. This is a large transaction and may require additional verification.`,confirmLabel:`Continue Transfer`,cancelLabel:`Cancel`,onConfirm:()=>{},variant:`warning`}},l={args:{open:!0,onOpenChange:()=>{},title:`Update Available`,description:`A new version of the app is available. Would you like to update now?`,confirmLabel:`Update`,cancelLabel:`Later`,onConfirm:()=>{},variant:`info`}},u={args:{open:!0,onOpenChange:()=>{},title:`Processing`,description:`Please wait while we process your request.`,confirmLabel:`Processing...`,onConfirm:()=>{},variant:`default`,isLoading:!0}},d={args:{open:!1,onOpenChange:()=>{},title:`Confirm Action`,description:`This dialog is closed.`,onConfirm:()=>{}}},f={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,i.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,i.jsx)(e,{})})]},p={parameters:{viewport:{defaultViewport:`mobile1`}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: () => {},
    title: 'Confirm Action',
    description: 'Are you sure you want to proceed with this action?',
    onConfirm: () => {},
    variant: 'default'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: () => {},
    title: 'Delete Account',
    description: 'This action cannot be undone. All your data will be permanently deleted.',
    confirmLabel: 'Delete',
    onConfirm: () => {},
    variant: 'destructive'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: () => {},
    title: 'High-Value Transfer',
    description: 'You are about to transfer $50,000 to an external account. This is a large transaction and may require additional verification.',
    confirmLabel: 'Continue Transfer',
    cancelLabel: 'Cancel',
    onConfirm: () => {},
    variant: 'warning'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: () => {},
    title: 'Update Available',
    description: 'A new version of the app is available. Would you like to update now?',
    confirmLabel: 'Update',
    cancelLabel: 'Later',
    onConfirm: () => {},
    variant: 'info'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    onOpenChange: () => {},
    title: 'Processing',
    description: 'Please wait while we process your request.',
    confirmLabel: 'Processing...',
    onConfirm: () => {},
    variant: 'default',
    isLoading: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    open: false,
    onOpenChange: () => {},
    title: 'Confirm Action',
    description: 'This dialog is closed.',
    onConfirm: () => {}
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Destructive`,`Warning`,`Info`,`Loading`,`Closed`,`DarkMode`,`MobileView`]}))();export{d as Closed,f as DarkMode,o as Default,s as Destructive,l as Info,u as Loading,p as MobileView,c as Warning,m as __namedExportsOrder,a as default};