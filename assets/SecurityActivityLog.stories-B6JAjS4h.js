import{j as s}from"./jsx-runtime-u17CrQMm.js";import{R as k}from"./iframe-BQuKaBw1.js";import{c as C}from"./utils-CDN07tui.js";import{A as l,a as _}from"./ActivityFeed-C8vXlqZx.js";import{M as P}from"./map-pin-DiCgaDLw.js";import{G as D}from"./globe-CQrY1C4D.js";import{C as x}from"./circle-x-D9Q9LxdF.js";import{C as F}from"./circle-check-BQCKzAug.js";import{T as M}from"./triangle-alert-DUVMDOjL.js";import{S as m}from"./shield-KAibg6l2.js";import{c as g}from"./createLucideIcon-7-Glrotp.js";import{L as J}from"./lock-BhD70ZAV.js";import"./preload-helper-PPVm8Dsz.js";import"./Avatar-DAqbCRjS.js";import"./index-B_jtOnfb.js";import"./file-text-DWPBz06E.js";import"./circle-alert-DrRKpj6T.js";import"./git-commit-horizontal-_2sRN22l.js";import"./message-square-CpCjBwg1.js";const E=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],L=g("key",E);const N=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]],b=g("lock-open",N),j=n=>{switch(n){case"login":return b;case"logout":return J;case"password_change":case"password_reset":return L;case"2fa_enabled":case"2fa_disabled":return m;case"device_added":case"device_removed":return m;case"suspicious_activity":return M;case"permission_granted":return F;case"permission_revoked":return x;default:return l}},T=(n,p)=>p==="error"||n==="suspicious_activity"?"alert":p==="success"?"success":"default",u=k.forwardRef(({events:n,onEventClick:p,className:y,...h},A)=>s.jsx("div",{ref:A,className:C("w-full",y),...h,children:s.jsx(l,{children:n.map((e,f)=>{const S=j(e.type),w=T(e.type,e.status);return s.jsx(_,{actor:{name:e.user||"System",initials:e.user?.charAt(0).toUpperCase()||"S"},action:e.description,date:e.timestamp,type:w,icon:S,isLast:f===n.length-1,children:s.jsxs("div",{className:"space-y-2 text-xs",children:[e.location&&s.jsxs("div",{className:"flex items-center gap-2 text-text-secondary",children:[s.jsx(P,{className:"w-3 h-3"}),s.jsx("span",{children:e.location})]}),e.ipAddress&&s.jsxs("div",{className:"flex items-center gap-2 text-text-secondary",children:[s.jsx(D,{className:"w-3 h-3"}),s.jsx("span",{children:e.ipAddress})]}),e.device&&s.jsxs("div",{className:"text-text-tertiary",children:["Device: ",e.device]})]})},e.id)})})}));u.displayName="SecurityActivityLog";u.__docgenInfo={description:"",methods:[],displayName:"SecurityActivityLog",props:{events:{required:!0,tsType:{name:"Array",elements:[{name:"SecurityEvent"}],raw:"SecurityEvent[]"},description:""},onEventClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: SecurityEvent) => void",signature:{arguments:[{type:{name:"SecurityEvent"},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ne={title:"Components/SecurityActivityLog",component:u,parameters:{layout:"centered"},tags:["autodocs"]},v=[{id:"1",type:"login",description:"Signed in from new device",timestamp:"2 minutes ago",location:"San Francisco, CA",ipAddress:"192.168.1.100",device:"MacBook Pro",status:"success",user:"John Doe"},{id:"2",type:"password_change",description:"Password updated successfully",timestamp:"1 hour ago",location:"San Francisco, CA",ipAddress:"192.168.1.100",device:"iPhone 15 Pro",status:"success",user:"John Doe"},{id:"3",type:"2fa_enabled",description:"Two-factor authentication enabled",timestamp:"3 hours ago",location:"San Francisco, CA",ipAddress:"192.168.1.100",device:"MacBook Pro",status:"success",user:"John Doe"},{id:"4",type:"suspicious_activity",description:"Failed login attempt detected",timestamp:"1 day ago",location:"Unknown Location",ipAddress:"203.0.113.45",device:"Unknown Device",status:"error"},{id:"5",type:"device_added",description:"New device authorized",timestamp:"2 days ago",location:"New York, NY",ipAddress:"192.168.1.101",device:"iPad Air",status:"success",user:"John Doe"}],o={args:{events:v}},t={args:{events:v,onEventClick:n=>console.log("Event clicked:",n)}},i={args:{events:[{id:"1",type:"login",description:"Signed in successfully",timestamp:"5 minutes ago",location:"San Francisco, CA",ipAddress:"192.168.1.100",device:"MacBook Pro",status:"success",user:"John Doe"},{id:"2",type:"login",description:"Signed in from mobile",timestamp:"2 hours ago",location:"San Francisco, CA",ipAddress:"192.168.1.101",device:"iPhone 15 Pro",status:"success",user:"John Doe"},{id:"3",type:"logout",description:"Signed out",timestamp:"5 hours ago",location:"San Francisco, CA",ipAddress:"192.168.1.100",device:"MacBook Pro",status:"success",user:"John Doe"}]}},a={args:{events:[{id:"1",type:"suspicious_activity",description:"Multiple failed login attempts",timestamp:"10 minutes ago",location:"Unknown Location",ipAddress:"203.0.113.45",device:"Unknown Device",status:"error"},{id:"2",type:"suspicious_activity",description:"Login from unusual location",timestamp:"1 hour ago",location:"Moscow, Russia",ipAddress:"198.51.100.23",device:"Windows PC",status:"warning"},{id:"3",type:"password_reset",description:"Password reset requested",timestamp:"2 hours ago",location:"San Francisco, CA",ipAddress:"192.168.1.100",device:"MacBook Pro",status:"warning",user:"John Doe"}]}},r={args:{events:[{id:"1",type:"device_added",description:"New device authorized",timestamp:"1 hour ago",location:"San Francisco, CA",ipAddress:"192.168.1.102",device:"iPad Pro",status:"success",user:"John Doe"},{id:"2",type:"device_removed",description:"Device removed from account",timestamp:"3 hours ago",location:"San Francisco, CA",ipAddress:"192.168.1.100",device:"Old iPhone",status:"success",user:"John Doe"}]}},c={args:{events:[{id:"1",type:"2fa_enabled",description:"Two-factor authentication enabled",timestamp:"1 hour ago",location:"San Francisco, CA",ipAddress:"192.168.1.100",device:"MacBook Pro",status:"success",user:"John Doe"},{id:"2",type:"2fa_disabled",description:"Two-factor authentication disabled",timestamp:"1 day ago",location:"San Francisco, CA",ipAddress:"192.168.1.100",device:"MacBook Pro",status:"warning",user:"John Doe"}]}},d={args:{events:[{id:"1",type:"permission_granted",description:"Admin access granted",timestamp:"30 minutes ago",location:"San Francisco, CA",status:"success",user:"Admin User"},{id:"2",type:"permission_revoked",description:"Write access revoked",timestamp:"2 hours ago",location:"San Francisco, CA",status:"success",user:"Admin User"}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    events: sampleEvents,
    onEventClick: event => console.log('Event clicked:', event)
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    events: [{
      id: '1',
      type: 'login' as const,
      description: 'Signed in successfully',
      timestamp: '5 minutes ago',
      location: 'San Francisco, CA',
      ipAddress: '192.168.1.100',
      device: 'MacBook Pro',
      status: 'success' as const,
      user: 'John Doe'
    }, {
      id: '2',
      type: 'login' as const,
      description: 'Signed in from mobile',
      timestamp: '2 hours ago',
      location: 'San Francisco, CA',
      ipAddress: '192.168.1.101',
      device: 'iPhone 15 Pro',
      status: 'success' as const,
      user: 'John Doe'
    }, {
      id: '3',
      type: 'logout' as const,
      description: 'Signed out',
      timestamp: '5 hours ago',
      location: 'San Francisco, CA',
      ipAddress: '192.168.1.100',
      device: 'MacBook Pro',
      status: 'success' as const,
      user: 'John Doe'
    }]
  }
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    events: [{
      id: '1',
      type: 'suspicious_activity' as const,
      description: 'Multiple failed login attempts',
      timestamp: '10 minutes ago',
      location: 'Unknown Location',
      ipAddress: '203.0.113.45',
      device: 'Unknown Device',
      status: 'error' as const
    }, {
      id: '2',
      type: 'suspicious_activity' as const,
      description: 'Login from unusual location',
      timestamp: '1 hour ago',
      location: 'Moscow, Russia',
      ipAddress: '198.51.100.23',
      device: 'Windows PC',
      status: 'warning' as const
    }, {
      id: '3',
      type: 'password_reset' as const,
      description: 'Password reset requested',
      timestamp: '2 hours ago',
      location: 'San Francisco, CA',
      ipAddress: '192.168.1.100',
      device: 'MacBook Pro',
      status: 'warning' as const,
      user: 'John Doe'
    }]
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    events: [{
      id: '1',
      type: 'device_added' as const,
      description: 'New device authorized',
      timestamp: '1 hour ago',
      location: 'San Francisco, CA',
      ipAddress: '192.168.1.102',
      device: 'iPad Pro',
      status: 'success' as const,
      user: 'John Doe'
    }, {
      id: '2',
      type: 'device_removed' as const,
      description: 'Device removed from account',
      timestamp: '3 hours ago',
      location: 'San Francisco, CA',
      ipAddress: '192.168.1.100',
      device: 'Old iPhone',
      status: 'success' as const,
      user: 'John Doe'
    }]
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    events: [{
      id: '1',
      type: '2fa_enabled' as const,
      description: 'Two-factor authentication enabled',
      timestamp: '1 hour ago',
      location: 'San Francisco, CA',
      ipAddress: '192.168.1.100',
      device: 'MacBook Pro',
      status: 'success' as const,
      user: 'John Doe'
    }, {
      id: '2',
      type: '2fa_disabled' as const,
      description: 'Two-factor authentication disabled',
      timestamp: '1 day ago',
      location: 'San Francisco, CA',
      ipAddress: '192.168.1.100',
      device: 'MacBook Pro',
      status: 'warning' as const,
      user: 'John Doe'
    }]
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    events: [{
      id: '1',
      type: 'permission_granted' as const,
      description: 'Admin access granted',
      timestamp: '30 minutes ago',
      location: 'San Francisco, CA',
      status: 'success' as const,
      user: 'Admin User'
    }, {
      id: '2',
      type: 'permission_revoked' as const,
      description: 'Write access revoked',
      timestamp: '2 hours ago',
      location: 'San Francisco, CA',
      status: 'success' as const,
      user: 'Admin User'
    }]
  }
}`,...d.parameters?.docs?.source}}};const oe=["Default","WithClickHandler","LoginEvents","SecurityAlerts","DeviceManagement","TwoFactorAuth","PermissionChanges"];export{o as Default,r as DeviceManagement,i as LoginEvents,d as PermissionChanges,a as SecurityAlerts,c as TwoFactorAuth,t as WithClickHandler,oe as __namedExportsOrder,ne as default};
