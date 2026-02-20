import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as k,r as R}from"./iframe-BMG7cCGY.js";import{C as v}from"./Checkbox-BJZzfK_a.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./minus-CTrClmF1.js";import"./createLucideIcon-11Koirjv.js";import"./check-CxM0X9Wl.js";const x=({roles:o,permissions:m,rolePermissions:d,onChange:c,className:y=""})=>{const l=m.reduce((s,r)=>{const t=r.category||"General";return s[t]||(s[t]=[]),s[t].push(r),s},{}),b=Object.keys(l),P=(s,r,t)=>{if(!c)return;const a=d[s]||[];let i;t?i=[...a,r]:i=a.filter(n=>n!==r),c(s,i)},C=(s,r,t)=>{if(!c)return;const a=l[r].map(p=>p.id),i=d[s]||[];let n;if(t){const p=a.filter(M=>!i.includes(M));n=[...i,...p]}else n=i.filter(p=>!a.includes(p));c(s,n)};return e.jsx("div",{className:y,style:{overflowX:"auto",border:"1px solid var(--color-border-primary)",borderRadius:"8px",backgroundColor:"var(--color-background-primary)"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:"800px"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{backgroundColor:"var(--color-background-secondary)",borderBottom:"1px solid var(--color-border-primary)"},children:[e.jsx("th",{style:{padding:"16px",textAlign:"left",width:"300px",color:"var(--color-text-primary)"},children:"Permission"}),o.map(s=>e.jsxs("th",{style:{padding:"16px",textAlign:"center",minWidth:"120px"},children:[e.jsx("div",{style:{fontWeight:"700",color:"var(--color-text-primary)"},children:s.name}),s.description&&e.jsx("div",{style:{fontSize:"12px",color:"var(--color-text-tertiary)",fontWeight:"normal",marginTop:"4px"},children:s.description})]},s.id))]})}),e.jsx("tbody",{children:b.map(s=>e.jsxs(k.Fragment,{children:[e.jsxs("tr",{style:{backgroundColor:"var(--color-background-tertiary)",borderBottom:"1px solid var(--color-border-secondary)"},children:[e.jsx("td",{style:{padding:"8px 16px",fontWeight:"700",color:"var(--color-text-secondary)",fontSize:"13px"},children:s}),o.map(r=>{const t=l[s].map(n=>n.id),a=d[r.id]||[],i=t.length>0&&t.every(n=>a.includes(n));return e.jsx("td",{style:{textAlign:"center",padding:"8px"},children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(v,{checked:i,onCheckedChange:n=>C(r.id,s,n)})})},r.id)})]}),l[s].map(r=>e.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border-secondary)"},children:[e.jsxs("td",{style:{padding:"12px",paddingLeft:"32px"},children:[e.jsx("div",{style:{fontWeight:"500",color:"var(--color-text-primary)"},children:r.name}),r.description&&e.jsx("div",{style:{fontSize:"12px",color:"var(--color-text-tertiary)",marginTop:"2px"},children:r.description})]}),o.map(t=>{const a=(d[t.id]||[]).includes(r.id);return e.jsx("td",{style:{textAlign:"center",padding:"12px"},children:e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(v,{checked:a,onCheckedChange:i=>P(t.id,r.id,i)})})},t.id)})]},r.id))]},s))})]})})};x.__docgenInfo={description:"",methods:[],displayName:"PermissionsMatrix",props:{roles:{required:!0,tsType:{name:"Array",elements:[{name:"Role"}],raw:"Role[]"},description:""},permissions:{required:!0,tsType:{name:"Array",elements:[{name:"Permission"}],raw:"Permission[]"},description:""},rolePermissions:{required:!0,tsType:{name:"signature",type:"object",raw:"{ [roleId: string]: string[] }",signature:{properties:[{key:{name:"string"},value:{name:"Array",elements:[{name:"string"}],raw:"string[]",required:!0}}]}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(roleId: string, permissionIds: string[]) => void",signature:{arguments:[{type:{name:"string"},name:"roleId"},{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"permissionIds"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const E={title:"Data Display/PermissionsMatrix",component:x,parameters:{layout:"padded",docs:{description:{component:`
# Permissions Matrix

A matrix component for managing permissions across different roles.

## Features

- 📊 **Matrix View**: Visualizes permissions vs roles.
- 📂 **Categorization**: Groups permissions by category.
- 🖱️ **Interactive**: Toggle individual permissions or entire categories.
- 📱 **Responsive**: Horizontally scrollable for many roles.
`}}},tags:[]},f=[{id:"admin",name:"Admin",description:"Full access to all resources"},{id:"editor",name:"Editor",description:"Can edit content but not settings"},{id:"viewer",name:"Viewer",description:"Read-only access"}],w=[{id:"users.view",name:"View Users",category:"User Management",description:"View user list and details"},{id:"users.create",name:"Create Users",category:"User Management",description:"Add new users"},{id:"users.edit",name:"Edit Users",category:"User Management",description:"Modify user details"},{id:"users.delete",name:"Delete Users",category:"User Management",description:"Remove users"},{id:"posts.view",name:"View Posts",category:"Content",description:"Read blog posts"},{id:"posts.create",name:"Create Posts",category:"Content",description:"Write new posts"},{id:"posts.publish",name:"Publish Posts",category:"Content",description:"Make posts public"},{id:"settings.view",name:"View Settings",category:"Settings",description:"View system configuration"},{id:"settings.edit",name:"Edit Settings",category:"Settings",description:"Modify system configuration"}],h={admin:["users.view","users.create","users.edit","users.delete","posts.view","posts.create","posts.publish","settings.view","settings.edit"],editor:["users.view","posts.view","posts.create","posts.publish"],viewer:["users.view","posts.view"]},j=o=>{const[m,d]=R.useState(o.rolePermissions||h),c=(y,l)=>{d({...m,[y]:l})};return e.jsx(x,{...o,rolePermissions:m,onChange:c})},u={render:o=>e.jsx(j,{...o}),args:{roles:f,permissions:w,rolePermissions:h}},g={render:o=>e.jsx(j,{...o}),args:{roles:[...f,{id:"manager",name:"Manager",description:"Team lead"},{id:"auditor",name:"Auditor",description:"Compliance checks"},{id:"support",name:"Support",description:"Customer support"},{id:"guest",name:"Guest",description:"Limited access"}],permissions:w,rolePermissions:h}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <PermissionsMatrixWithState {...args} />,
  args: {
    roles,
    permissions,
    rolePermissions: initialRolePermissions
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <PermissionsMatrixWithState {...args} />,
  args: {
    roles: [...roles, {
      id: 'manager',
      name: 'Manager',
      description: 'Team lead'
    }, {
      id: 'auditor',
      name: 'Auditor',
      description: 'Compliance checks'
    }, {
      id: 'support',
      name: 'Support',
      description: 'Customer support'
    }, {
      id: 'guest',
      name: 'Guest',
      description: 'Limited access'
    }],
    permissions,
    rolePermissions: initialRolePermissions
  }
}`,...g.parameters?.docs?.source}}};const I=["Default","ManyRoles"];export{u as Default,g as ManyRoles,I as __namedExportsOrder,E as default};
