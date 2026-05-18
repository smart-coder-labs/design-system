import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-2Bdvr1RY.js";import{A as r,R as i,kn as a,qt as o,t as s,wt as c,x as l}from"./lucide-react-ChvDEqVS.js";import{n as u,t as d}from"./utils-CcEteFRA.js";import{t as f}from"./jsx-runtime-WZfjI2gv.js";import{s as p,t as m}from"./es-C1BYSDiB.js";import{n as h,t as g}from"./Button-Tx-VQjvP.js";import{n as _,t as v}from"./Badge-C7O4dfsy.js";var y,b,x,S,C,w=e((()=>{y=t(n()),u(),m(),s(),g(),v(),b=f(),x=e=>{switch(e){case`phone`:return(0,b.jsx)(i,{className:`w-5 h-5`});case`tablet`:return(0,b.jsx)(r,{className:`w-5 h-5`});case`laptop`:return(0,b.jsx)(o,{className:`w-5 h-5`});case`desktop`:return(0,b.jsx)(c,{className:`w-5 h-5`});default:return(0,b.jsx)(i,{className:`w-5 h-5`})}},S=(e,t)=>{if(t)return(0,b.jsx)(_,{variant:`success`,size:`sm`,children:`Current Device`});switch(e){case`active`:return(0,b.jsx)(_,{variant:`success`,size:`sm`,children:`Active`});case`inactive`:return(0,b.jsx)(_,{variant:`default`,size:`sm`,children:`Inactive`});case`suspended`:return(0,b.jsx)(_,{variant:`error`,size:`sm`,children:`Suspended`})}},C=y.forwardRef(({devices:e,onRemove:t,onMoreActions:n,showActions:r=!0,className:i,...o},s)=>(0,b.jsx)(`div`,{ref:s,className:d(`w-full space-y-2`,i),...o,children:e.map((e,i)=>(0,b.jsxs)(p.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:i*.05},className:d(`flex items-center gap-4 p-4 rounded-xl border`,`bg-surface-primary border-border-primary`,`hover:bg-surface-secondary transition-colors`),children:[(0,b.jsx)(`div`,{className:`flex-shrink-0 p-2 bg-surface-secondary rounded-lg text-text-tertiary`,children:x(e.type)}),(0,b.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-2 mb-1`,children:[(0,b.jsx)(`h3`,{className:`text-sm font-semibold text-text-primary truncate`,children:e.name}),S(e.status,e.isCurrentDevice)]}),(0,b.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3 text-xs text-text-secondary`,children:[e.os&&(0,b.jsx)(`span`,{children:e.os}),e.browser&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`span`,{className:`text-text-tertiary`,children:`•`}),(0,b.jsx)(`span`,{children:e.browser})]}),e.lastActive&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(`span`,{className:`text-text-tertiary`,children:`•`}),(0,b.jsxs)(`span`,{children:[`Last active: `,e.lastActive]})]})]}),e.location&&(0,b.jsx)(`p`,{className:`text-xs text-text-tertiary mt-1`,children:e.location})]}),r&&(0,b.jsxs)(`div`,{className:`flex-shrink-0 flex items-center gap-2`,children:[n&&(0,b.jsx)(h,{variant:`ghost`,size:`sm`,onClick:()=>n(e),children:(0,b.jsx)(a,{className:`w-4 h-4`})}),t&&!e.isCurrentDevice&&(0,b.jsx)(h,{variant:`ghost`,size:`sm`,onClick:()=>t(e),children:(0,b.jsx)(l,{className:`w-4 h-4 text-status-error`})})]})]},e.id))})),C.displayName=`DeviceList`,C.__docgenInfo={description:``,methods:[],displayName:`DeviceList`,props:{devices:{required:!0,tsType:{name:`Array`,elements:[{name:`Device`}],raw:`Device[]`},description:``},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(device: Device) => void`,signature:{arguments:[{type:{name:`Device`},name:`device`}],return:{name:`void`}}},description:``},onMoreActions:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(device: Device) => void`,signature:{arguments:[{type:{name:`Device`},name:`device`}],return:{name:`void`}}},description:``},showActions:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{w(),T=f(),E={title:`Data Display/DeviceList`,component:C,parameters:{layout:`centered`},tags:[`autodocs`]},D=[{id:`1`,name:`MacBook Pro`,type:`laptop`,os:`macOS Sonoma`,browser:`Safari 17.2`,lastActive:`2 minutes ago`,location:`San Francisco, CA`,ipAddress:`192.168.1.100`,status:`active`,isCurrentDevice:!0},{id:`2`,name:`iPhone 15 Pro`,type:`phone`,os:`iOS 17.2`,browser:`Safari Mobile`,lastActive:`1 hour ago`,location:`San Francisco, CA`,ipAddress:`192.168.1.101`,status:`active`},{id:`3`,name:`iPad Air`,type:`tablet`,os:`iPadOS 17.2`,browser:`Safari`,lastActive:`3 days ago`,location:`New York, NY`,ipAddress:`192.168.1.102`,status:`inactive`},{id:`4`,name:`Work Desktop`,type:`desktop`,os:`Windows 11`,browser:`Chrome 120`,lastActive:`1 week ago`,location:`Los Angeles, CA`,ipAddress:`192.168.1.103`,status:`suspended`}],O={args:{devices:D,showActions:!0}},k={args:{devices:D,showActions:!0,onRemove:e=>console.log(`Remove device:`,e),onMoreActions:e=>console.log(`More actions:`,e)}},A={args:{devices:D,showActions:!1}},j={args:{devices:[D[0]],showActions:!0}},M={args:{devices:[{id:`1`,name:`iPhone 15 Pro Max`,type:`phone`,os:`iOS 17.2`,browser:`Safari Mobile`,lastActive:`Just now`,location:`San Francisco, CA`,status:`active`,isCurrentDevice:!0},{id:`2`,name:`Samsung Galaxy S23`,type:`phone`,os:`Android 14`,browser:`Chrome Mobile`,lastActive:`5 minutes ago`,location:`San Francisco, CA`,status:`active`},{id:`3`,name:`Google Pixel 8`,type:`phone`,os:`Android 14`,browser:`Chrome Mobile`,lastActive:`2 hours ago`,location:`Seattle, WA`,status:`inactive`}],showActions:!0}},N={args:{devices:[{id:`1`,name:`Old Laptop`,type:`laptop`,os:`Windows 10`,browser:`Chrome 100`,lastActive:`3 months ago`,location:`Unknown`,status:`suspended`},{id:`2`,name:`Lost Phone`,type:`phone`,os:`iOS 16`,browser:`Safari`,lastActive:`1 month ago`,location:`Unknown`,status:`suspended`}],showActions:!0}},P={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,T.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,T.jsx)(e,{})})]},F={parameters:{docs:{description:{story:`DeviceList used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    devices: sampleDevices,
    showActions: true
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    devices: sampleDevices,
    showActions: true,
    onRemove: device => console.log('Remove device:', device),
    onMoreActions: device => console.log('More actions:', device)
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    devices: sampleDevices,
    showActions: false
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    devices: [sampleDevices[0]],
    showActions: true
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    devices: [{
      id: '1',
      name: 'iPhone 15 Pro Max',
      type: 'phone' as const,
      os: 'iOS 17.2',
      browser: 'Safari Mobile',
      lastActive: 'Just now',
      location: 'San Francisco, CA',
      status: 'active' as const,
      isCurrentDevice: true
    }, {
      id: '2',
      name: 'Samsung Galaxy S23',
      type: 'phone' as const,
      os: 'Android 14',
      browser: 'Chrome Mobile',
      lastActive: '5 minutes ago',
      location: 'San Francisco, CA',
      status: 'active' as const
    }, {
      id: '3',
      name: 'Google Pixel 8',
      type: 'phone' as const,
      os: 'Android 14',
      browser: 'Chrome Mobile',
      lastActive: '2 hours ago',
      location: 'Seattle, WA',
      status: 'inactive' as const
    }],
    showActions: true
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    devices: [{
      id: '1',
      name: 'Old Laptop',
      type: 'laptop' as const,
      os: 'Windows 10',
      browser: 'Chrome 100',
      lastActive: '3 months ago',
      location: 'Unknown',
      status: 'suspended' as const
    }, {
      id: '2',
      name: 'Lost Phone',
      type: 'phone' as const,
      os: 'iOS 16',
      browser: 'Safari',
      lastActive: '1 month ago',
      location: 'Unknown',
      status: 'suspended' as const
    }],
    showActions: true
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'DeviceList used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...F.parameters?.docs?.source}}},I=[`Default`,`WithActions`,`WithoutActions`,`SingleDevice`,`MobileDevices`,`SuspendedDevices`,`DarkMode`,`FintechUseCase`]}))();export{P as DarkMode,O as Default,F as FintechUseCase,M as MobileDevices,j as SingleDevice,N as SuspendedDevices,k as WithActions,A as WithoutActions,I as __namedExportsOrder,E as default};