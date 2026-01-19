import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as b}from"./iframe-BQuKaBw1.js";import{c as v}from"./utils-CDN07tui.js";import{B as x}from"./Button-Ct7qoTA-.js";import{B as o}from"./Badge-Dp90bqK3.js";import{m as j}from"./proxy-DCsQVuEn.js";import{c as m}from"./createLucideIcon-7-Glrotp.js";import{T as D}from"./trash-2-8cIABgAO.js";import{M as N}from"./monitor-Bhs9_ZP-.js";import"./preload-helper-PPVm8Dsz.js";const k=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],C=m("ellipsis-vertical",k);const M=[["path",{d:"M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z",key:"1pdavp"}],["path",{d:"M20.054 15.987H3.946",key:"14rxg9"}]],P=m("laptop",M);const L=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],g=m("smartphone",L);const _=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]],O=m("tablet",_),W=t=>{switch(t){case"phone":return e.jsx(g,{className:"w-5 h-5"});case"tablet":return e.jsx(O,{className:"w-5 h-5"});case"laptop":return e.jsx(P,{className:"w-5 h-5"});case"desktop":return e.jsx(N,{className:"w-5 h-5"});default:return e.jsx(g,{className:"w-5 h-5"})}},F=(t,a)=>{if(a)return e.jsx(o,{variant:"success",size:"sm",children:"Current Device"});switch(t){case"active":return e.jsx(o,{variant:"success",size:"sm",children:"Active"});case"inactive":return e.jsx(o,{variant:"default",size:"sm",children:"Inactive"});case"suspended":return e.jsx(o,{variant:"error",size:"sm",children:"Suspended"})}},u=b.forwardRef(({devices:t,onRemove:a,onMoreActions:h,showActions:y=!0,className:w,...A},f)=>e.jsx("div",{ref:f,className:v("w-full space-y-2",w),...A,children:t.map((s,S)=>e.jsxs(j.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:S*.05},className:v("flex items-center gap-4 p-4 rounded-xl border","bg-surface-primary border-border-primary","hover:bg-surface-secondary transition-colors"),children:[e.jsx("div",{className:"flex-shrink-0 p-2 bg-surface-secondary rounded-lg text-text-tertiary",children:W(s.type)}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("h3",{className:"text-sm font-semibold text-text-primary truncate",children:s.name}),F(s.status,s.isCurrentDevice)]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-3 text-xs text-text-secondary",children:[s.os&&e.jsx("span",{children:s.os}),s.browser&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-text-tertiary",children:"•"}),e.jsx("span",{children:s.browser})]}),s.lastActive&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"text-text-tertiary",children:"•"}),e.jsxs("span",{children:["Last active: ",s.lastActive]})]})]}),s.location&&e.jsx("p",{className:"text-xs text-text-tertiary mt-1",children:s.location})]}),y&&e.jsxs("div",{className:"flex-shrink-0 flex items-center gap-2",children:[h&&e.jsx(x,{variant:"ghost",size:"sm",onClick:()=>h(s),children:e.jsx(C,{className:"w-4 h-4"})}),a&&!s.isCurrentDevice&&e.jsx(x,{variant:"ghost",size:"sm",onClick:()=>a(s),children:e.jsx(D,{className:"w-4 h-4 text-status-error"})})]})]},s.id))}));u.displayName="DeviceList";u.__docgenInfo={description:"",methods:[],displayName:"DeviceList",props:{devices:{required:!0,tsType:{name:"Array",elements:[{name:"Device"}],raw:"Device[]"},description:""},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(device: Device) => void",signature:{arguments:[{type:{name:"Device"},name:"device"}],return:{name:"void"}}},description:""},onMoreActions:{required:!1,tsType:{name:"signature",type:"function",raw:"(device: Device) => void",signature:{arguments:[{type:{name:"Device"},name:"device"}],return:{name:"void"}}},description:""},showActions:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const $={title:"Components/DeviceList",component:u,parameters:{layout:"centered"},tags:["autodocs"]},p=[{id:"1",name:"MacBook Pro",type:"laptop",os:"macOS Sonoma",browser:"Safari 17.2",lastActive:"2 minutes ago",location:"San Francisco, CA",ipAddress:"192.168.1.100",status:"active",isCurrentDevice:!0},{id:"2",name:"iPhone 15 Pro",type:"phone",os:"iOS 17.2",browser:"Safari Mobile",lastActive:"1 hour ago",location:"San Francisco, CA",ipAddress:"192.168.1.101",status:"active"},{id:"3",name:"iPad Air",type:"tablet",os:"iPadOS 17.2",browser:"Safari",lastActive:"3 days ago",location:"New York, NY",ipAddress:"192.168.1.102",status:"inactive"},{id:"4",name:"Work Desktop",type:"desktop",os:"Windows 11",browser:"Chrome 120",lastActive:"1 week ago",location:"Los Angeles, CA",ipAddress:"192.168.1.103",status:"suspended"}],n={args:{devices:p,showActions:!0}},r={args:{devices:p,showActions:!0,onRemove:t=>console.log("Remove device:",t),onMoreActions:t=>console.log("More actions:",t)}},i={args:{devices:p,showActions:!1}},c={args:{devices:[p[0]],showActions:!0}},l={args:{devices:[{id:"1",name:"iPhone 15 Pro Max",type:"phone",os:"iOS 17.2",browser:"Safari Mobile",lastActive:"Just now",location:"San Francisco, CA",status:"active",isCurrentDevice:!0},{id:"2",name:"Samsung Galaxy S23",type:"phone",os:"Android 14",browser:"Chrome Mobile",lastActive:"5 minutes ago",location:"San Francisco, CA",status:"active"},{id:"3",name:"Google Pixel 8",type:"phone",os:"Android 14",browser:"Chrome Mobile",lastActive:"2 hours ago",location:"Seattle, WA",status:"inactive"}],showActions:!0}},d={args:{devices:[{id:"1",name:"Old Laptop",type:"laptop",os:"Windows 10",browser:"Chrome 100",lastActive:"3 months ago",location:"Unknown",status:"suspended"},{id:"2",name:"Lost Phone",type:"phone",os:"iOS 16",browser:"Safari",lastActive:"1 month ago",location:"Unknown",status:"suspended"}],showActions:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    devices: sampleDevices,
    showActions: true
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    devices: sampleDevices,
    showActions: true,
    onRemove: device => console.log('Remove device:', device),
    onMoreActions: device => console.log('More actions:', device)
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    devices: sampleDevices,
    showActions: false
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    devices: [sampleDevices[0]],
    showActions: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const H=["Default","WithActions","WithoutActions","SingleDevice","MobileDevices","SuspendedDevices"];export{n as Default,l as MobileDevices,c as SingleDevice,d as SuspendedDevices,r as WithActions,i as WithoutActions,H as __namedExportsOrder,$ as default};
