import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BUF2whoS.js";import{t as r}from"./jsx-runtime-BK76Wfr-.js";import{n as i,t as a}from"./Checkbox-UT86oqIZ.js";var o,s,c,l=e((()=>{o=t(n()),i(),s=r(),c=({roles:e,permissions:t,rolePermissions:n,onChange:r,className:i=``})=>{let c=t.reduce((e,t)=>{let n=t.category||`General`;return e[n]||(e[n]=[]),e[n].push(t),e},{}),l=Object.keys(c),u=(e,t,i)=>{if(!r)return;let a=n[e]||[],o;o=i?[...a,t]:a.filter(e=>e!==t),r(e,o)},d=(e,t,i)=>{if(!r)return;let a=c[t].map(e=>e.id),o=n[e]||[],s;if(i){let e=a.filter(e=>!o.includes(e));s=[...o,...e]}else s=o.filter(e=>!a.includes(e));r(e,s)};return(0,s.jsx)(`div`,{className:i,style:{overflowX:`auto`,border:`1px solid var(--color-border-primary)`,borderRadius:`8px`,backgroundColor:`var(--color-background-primary)`},children:(0,s.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,minWidth:`800px`},children:[(0,s.jsx)(`thead`,{children:(0,s.jsxs)(`tr`,{style:{backgroundColor:`var(--color-background-secondary)`,borderBottom:`1px solid var(--color-border-primary)`},children:[(0,s.jsx)(`th`,{style:{padding:`16px`,textAlign:`left`,width:`300px`,color:`var(--color-text-primary)`},children:`Permission`}),e.map(e=>(0,s.jsxs)(`th`,{style:{padding:`16px`,textAlign:`center`,minWidth:`120px`},children:[(0,s.jsx)(`div`,{style:{fontWeight:`700`,color:`var(--color-text-primary)`},children:e.name}),e.description&&(0,s.jsx)(`div`,{style:{fontSize:`12px`,color:`var(--color-text-tertiary)`,fontWeight:`normal`,marginTop:`4px`},children:e.description})]},e.id))]})}),(0,s.jsx)(`tbody`,{children:l.map(t=>(0,s.jsxs)(o.Fragment,{children:[(0,s.jsxs)(`tr`,{style:{backgroundColor:`var(--color-background-tertiary)`,borderBottom:`1px solid var(--color-border-secondary)`},children:[(0,s.jsx)(`td`,{style:{padding:`8px 16px`,fontWeight:`700`,color:`var(--color-text-secondary)`,fontSize:`13px`},children:t}),e.map(e=>{let r=c[t].map(e=>e.id),i=n[e.id]||[];return(0,s.jsx)(`td`,{style:{textAlign:`center`,padding:`8px`},children:(0,s.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,s.jsx)(a,{checked:r.length>0&&r.every(e=>i.includes(e)),onCheckedChange:n=>d(e.id,t,n)})})},e.id)})]}),c[t].map(t=>(0,s.jsxs)(`tr`,{style:{borderBottom:`1px solid var(--color-border-secondary)`},children:[(0,s.jsxs)(`td`,{style:{padding:`12px`,paddingLeft:`32px`},children:[(0,s.jsx)(`div`,{style:{fontWeight:`500`,color:`var(--color-text-primary)`},children:t.name}),t.description&&(0,s.jsx)(`div`,{style:{fontSize:`12px`,color:`var(--color-text-tertiary)`,marginTop:`2px`},children:t.description})]}),e.map(e=>(0,s.jsx)(`td`,{style:{textAlign:`center`,padding:`12px`},children:(0,s.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`},children:(0,s.jsx)(a,{checked:(n[e.id]||[]).includes(t.id),onCheckedChange:n=>u(e.id,t.id,n)})})},e.id))]},t.id))]},t))})]})})},c.__docgenInfo={description:``,methods:[],displayName:`PermissionsMatrix`,props:{roles:{required:!0,tsType:{name:`Array`,elements:[{name:`Role`}],raw:`Role[]`},description:``},permissions:{required:!0,tsType:{name:`Array`,elements:[{name:`Permission`}],raw:`Permission[]`},description:``},rolePermissions:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{ [roleId: string]: string[] }`,signature:{properties:[{key:{name:`string`},value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!0}}]}},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(roleId: string, permissionIds: string[]) => void`,signature:{arguments:[{type:{name:`string`},name:`roleId`},{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`permissionIds`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),u,d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{l(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Data Display/PermissionsMatrix`,component:c,tags:[`autodocs`]},f=[{id:`admin`,name:`Admin`,description:`Full system access`},{id:`editor`,name:`Editor`,description:`Can create and edit content`},{id:`viewer`,name:`Viewer`,description:`Read-only access`}],p=[{id:`read`,name:`Read`,description:`View documents`,category:`Content`},{id:`write`,name:`Write`,description:`Create and edit documents`,category:`Content`},{id:`delete`,name:`Delete`,description:`Remove documents`,category:`Content`},{id:`share`,name:`Share`,description:`Share with external users`,category:`Collaboration`},{id:`export`,name:`Export`,description:`Export to CSV/PDF`,category:`Collaboration`}],m={args:{roles:f,permissions:p,rolePermissions:{admin:[`read`,`write`,`delete`,`share`,`export`],editor:[`read`,`write`,`share`,`export`],viewer:[`read`]},onChange:u()}},h={args:{roles:[{id:`owner`,name:`Owner`,description:`Full wallet control`},{id:`trader`,name:`Trader`,description:`Can trade assets`},{id:`auditor`,name:`Auditor`,description:`View-only for compliance`}],permissions:[{id:`view-balance`,name:`View Balance`,category:`Read`},{id:`view-history`,name:`View History`,category:`Read`},{id:`trade`,name:`Trade`,description:`Buy and sell assets`,category:`Write`},{id:`withdraw`,name:`Withdraw`,description:`Withdraw to external wallet`,category:`Write`},{id:`api-access`,name:`API Access`,description:`Programmatic account access`,category:`Advanced`},{id:`whitelist`,name:`Whitelist Addresses`,category:`Advanced`}],rolePermissions:{owner:[`view-balance`,`view-history`,`trade`,`withdraw`,`api-access`,`whitelist`],trader:[`view-balance`,`view-history`,`trade`],auditor:[`view-balance`,`view-history`]},onChange:u()}},g={args:{roles:f,permissions:p,rolePermissions:{admin:[`read`,`write`,`delete`,`share`,`export`],editor:[`read`,`write`,`share`],viewer:[`read`]},onChange:u()}},_={args:{roles:[{id:`superadmin`,name:`Super Admin`,description:`All permissions`}],permissions:p,rolePermissions:{superadmin:[`read`,`write`,`delete`,`share`,`export`]},onChange:u()}},v={args:{roles:[{id:`superadmin`,name:`Super Admin`},{id:`admin`,name:`Admin`},{id:`manager`,name:`Manager`},{id:`editor`,name:`Editor`},{id:`contributor`,name:`Contributor`},{id:`viewer`,name:`Viewer`}],permissions:[{id:`read`,name:`Read`,category:`Content`},{id:`write`,name:`Write`,category:`Content`},{id:`delete`,name:`Delete`,category:`Content`},{id:`publish`,name:`Publish`,category:`Content`},{id:`manage-users`,name:`Manage Users`,category:`Admin`},{id:`manage-roles`,name:`Manage Roles`,category:`Admin`}],rolePermissions:{superadmin:[`read`,`write`,`delete`,`publish`,`manage-users`,`manage-roles`],admin:[`read`,`write`,`delete`,`publish`,`manage-users`],manager:[`read`,`write`,`delete`,`publish`],editor:[`read`,`write`,`publish`],contributor:[`read`,`write`],viewer:[`read`]},onChange:u()}},y={args:{roles:f,permissions:[{id:`view-accounts`,name:`View Accounts`,category:`Accounts`},{id:`create-accounts`,name:`Create Accounts`,category:`Accounts`},{id:`delete-accounts`,name:`Delete Accounts`,category:`Accounts`},{id:`view-transactions`,name:`View Transactions`,category:`Transactions`},{id:`create-transactions`,name:`Create Transactions`,category:`Transactions`},{id:`approve-transactions`,name:`Approve Transactions`,category:`Transactions`},{id:`view-reports`,name:`View Reports`,category:`Reports`},{id:`export-reports`,name:`Export Reports`,category:`Reports`},{id:`manage-settings`,name:`Manage Settings`,category:`Admin`},{id:`audit-logs`,name:`View Audit Logs`,category:`Admin`}],rolePermissions:{admin:[`view-accounts`,`create-accounts`,`delete-accounts`,`view-transactions`,`create-transactions`,`approve-transactions`,`view-reports`,`export-reports`,`manage-settings`,`audit-logs`],editor:[`view-accounts`,`view-transactions`,`create-transactions`,`view-reports`,`export-reports`],viewer:[`view-accounts`,`view-transactions`,`view-reports`]},onChange:u()}},b={args:{roles:f,permissions:p,rolePermissions:{admin:[`read`,`write`,`delete`,`share`,`export`],editor:[`read`,`write`,`delete`,`share`,`export`],viewer:[`read`,`write`,`delete`,`share`,`export`]},onChange:u()}},x={args:{roles:f,permissions:p,rolePermissions:{admin:[],editor:[],viewer:[]},onChange:u()}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    roles: defaultRoles,
    permissions: defaultPermissions,
    rolePermissions: {
      admin: ['read', 'write', 'delete', 'share', 'export'],
      editor: ['read', 'write', 'share', 'export'],
      viewer: ['read']
    },
    onChange: fn()
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    roles: [{
      id: 'owner',
      name: 'Owner',
      description: 'Full wallet control'
    }, {
      id: 'trader',
      name: 'Trader',
      description: 'Can trade assets'
    }, {
      id: 'auditor',
      name: 'Auditor',
      description: 'View-only for compliance'
    }],
    permissions: [{
      id: 'view-balance',
      name: 'View Balance',
      category: 'Read'
    }, {
      id: 'view-history',
      name: 'View History',
      category: 'Read'
    }, {
      id: 'trade',
      name: 'Trade',
      description: 'Buy and sell assets',
      category: 'Write'
    }, {
      id: 'withdraw',
      name: 'Withdraw',
      description: 'Withdraw to external wallet',
      category: 'Write'
    }, {
      id: 'api-access',
      name: 'API Access',
      description: 'Programmatic account access',
      category: 'Advanced'
    }, {
      id: 'whitelist',
      name: 'Whitelist Addresses',
      category: 'Advanced'
    }],
    rolePermissions: {
      owner: ['view-balance', 'view-history', 'trade', 'withdraw', 'api-access', 'whitelist'],
      trader: ['view-balance', 'view-history', 'trade'],
      auditor: ['view-balance', 'view-history']
    },
    onChange: fn()
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    roles: defaultRoles,
    permissions: defaultPermissions,
    rolePermissions: {
      admin: ['read', 'write', 'delete', 'share', 'export'],
      editor: ['read', 'write', 'share'],
      viewer: ['read']
    },
    onChange: fn()
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    roles: [{
      id: 'superadmin',
      name: 'Super Admin',
      description: 'All permissions'
    }],
    permissions: defaultPermissions,
    rolePermissions: {
      superadmin: ['read', 'write', 'delete', 'share', 'export']
    },
    onChange: fn()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    roles: [{
      id: 'superadmin',
      name: 'Super Admin'
    }, {
      id: 'admin',
      name: 'Admin'
    }, {
      id: 'manager',
      name: 'Manager'
    }, {
      id: 'editor',
      name: 'Editor'
    }, {
      id: 'contributor',
      name: 'Contributor'
    }, {
      id: 'viewer',
      name: 'Viewer'
    }],
    permissions: [{
      id: 'read',
      name: 'Read',
      category: 'Content'
    }, {
      id: 'write',
      name: 'Write',
      category: 'Content'
    }, {
      id: 'delete',
      name: 'Delete',
      category: 'Content'
    }, {
      id: 'publish',
      name: 'Publish',
      category: 'Content'
    }, {
      id: 'manage-users',
      name: 'Manage Users',
      category: 'Admin'
    }, {
      id: 'manage-roles',
      name: 'Manage Roles',
      category: 'Admin'
    }],
    rolePermissions: {
      superadmin: ['read', 'write', 'delete', 'publish', 'manage-users', 'manage-roles'],
      admin: ['read', 'write', 'delete', 'publish', 'manage-users'],
      manager: ['read', 'write', 'delete', 'publish'],
      editor: ['read', 'write', 'publish'],
      contributor: ['read', 'write'],
      viewer: ['read']
    },
    onChange: fn()
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    roles: defaultRoles,
    permissions: [{
      id: 'view-accounts',
      name: 'View Accounts',
      category: 'Accounts'
    }, {
      id: 'create-accounts',
      name: 'Create Accounts',
      category: 'Accounts'
    }, {
      id: 'delete-accounts',
      name: 'Delete Accounts',
      category: 'Accounts'
    }, {
      id: 'view-transactions',
      name: 'View Transactions',
      category: 'Transactions'
    }, {
      id: 'create-transactions',
      name: 'Create Transactions',
      category: 'Transactions'
    }, {
      id: 'approve-transactions',
      name: 'Approve Transactions',
      category: 'Transactions'
    }, {
      id: 'view-reports',
      name: 'View Reports',
      category: 'Reports'
    }, {
      id: 'export-reports',
      name: 'Export Reports',
      category: 'Reports'
    }, {
      id: 'manage-settings',
      name: 'Manage Settings',
      category: 'Admin'
    }, {
      id: 'audit-logs',
      name: 'View Audit Logs',
      category: 'Admin'
    }],
    rolePermissions: {
      admin: ['view-accounts', 'create-accounts', 'delete-accounts', 'view-transactions', 'create-transactions', 'approve-transactions', 'view-reports', 'export-reports', 'manage-settings', 'audit-logs'],
      editor: ['view-accounts', 'view-transactions', 'create-transactions', 'view-reports', 'export-reports'],
      viewer: ['view-accounts', 'view-transactions', 'view-reports']
    },
    onChange: fn()
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    roles: defaultRoles,
    permissions: defaultPermissions,
    rolePermissions: {
      admin: ['read', 'write', 'delete', 'share', 'export'],
      editor: ['read', 'write', 'delete', 'share', 'export'],
      viewer: ['read', 'write', 'delete', 'share', 'export']
    },
    onChange: fn()
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    roles: defaultRoles,
    permissions: defaultPermissions,
    rolePermissions: {
      admin: [],
      editor: [],
      viewer: []
    },
    onChange: fn()
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`CryptoPermissions`,`Editable`,`SingleRole`,`ManyRoles`,`ManyPermissions`,`AllGranted`,`NoneGranted`]}))();export{b as AllGranted,h as CryptoPermissions,m as Default,g as Editable,y as ManyPermissions,v as ManyRoles,x as NoneGranted,_ as SingleRole,S as __namedExportsOrder,d as default};