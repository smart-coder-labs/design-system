import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-C8gh9c0G.js";import{t as n}from"./jsx-runtime-WZfjI2gv.js";import{n as r,t as i}from"./Label-GhVSm5Wq.js";var a,o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{t(),r(),a=n(),o={title:`Typography/Label`,component:i,tags:[`autodocs`],parameters:{layout:`centered`}},s={args:{children:`Email Address`}},c={args:{children:`Email Address`,required:!0}},l={render:()=>(0,a.jsxs)(`div`,{className:`space-y-1`,children:[(0,a.jsx)(i,{htmlFor:`email`,required:!0,children:`Email Address`}),(0,a.jsx)(`input`,{id:`email`,type:`email`,placeholder:`you@example.com`,className:`w-full px-3 py-2 border border-border-primary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue bg-surface-primary`})]})},u={render:()=>(0,a.jsxs)(`div`,{className:`w-80 space-y-4`,children:[(0,a.jsxs)(`div`,{className:`space-y-1`,children:[(0,a.jsx)(i,{htmlFor:`name`,required:!0,children:`Full Name`}),(0,a.jsx)(`input`,{id:`name`,type:`text`,placeholder:`Cesar Ruiz`,className:`w-full px-3 py-2 border border-border-primary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue bg-surface-primary`})]}),(0,a.jsxs)(`div`,{className:`space-y-1`,children:[(0,a.jsx)(i,{htmlFor:`email2`,required:!0,children:`Email`}),(0,a.jsx)(`input`,{id:`email2`,type:`email`,placeholder:`cesar@example.com`,className:`w-full px-3 py-2 border border-border-primary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue bg-surface-primary`})]}),(0,a.jsxs)(`div`,{className:`space-y-1`,children:[(0,a.jsx)(i,{htmlFor:`accountType`,children:`Account Type`}),(0,a.jsxs)(`select`,{id:`accountType`,className:`w-full px-3 py-2 border border-border-primary rounded-xl text-sm bg-surface-primary`,children:[(0,a.jsx)(`option`,{children:`Checking`}),(0,a.jsx)(`option`,{children:`Savings`}),(0,a.jsx)(`option`,{children:`Investment`})]})]})]})},d={args:{children:`Disabled Field`,disabled:!0}},f={render:()=>(0,a.jsxs)(`div`,{className:`space-y-1`,children:[(0,a.jsx)(i,{htmlFor:`password`,required:!0,children:`Password`}),(0,a.jsx)(`input`,{id:`password`,type:`password`,placeholder:`Enter your password`,className:`w-full px-3 py-2 border border-border-primary rounded-xl text-sm bg-surface-primary`}),(0,a.jsx)(`p`,{className:`text-xs text-text-tertiary mt-1`,children:`Must be at least 8 characters with a number and symbol`})]})},p={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,a.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,a.jsx)(e,{})})]},m={parameters:{viewport:{defaultViewport:`mobile1`}}},h={args:{children:`This is an exceptionally long label text that should test how the component handles text wrapping and overflow in various container widths`}},g={args:{children:`Password Confirmation (must match password entered above)`,required:!0,htmlFor:`password-confirm`}},_={args:{children:`Mobile Responsive Label`,required:!0},decorators:[e=>(0,a.jsx)(`div`,{className:`max-w-[200px]`,children:(0,a.jsx)(e,{})})]},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Email Address'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Email Address',
    required: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-1">
      <Label htmlFor="email" required>Email Address</Label>
      <input id="email" type="email" placeholder="you@example.com" className="w-full px-3 py-2 border border-border-primary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue bg-surface-primary" />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-4">
      <div className="space-y-1">
        <Label htmlFor="name" required>Full Name</Label>
        <input id="name" type="text" placeholder="Cesar Ruiz" className="w-full px-3 py-2 border border-border-primary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue bg-surface-primary" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="email2" required>Email</Label>
        <input id="email2" type="email" placeholder="cesar@example.com" className="w-full px-3 py-2 border border-border-primary rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-accent-blue bg-surface-primary" />
      </div>
      <div className="space-y-1">
        <Label htmlFor="accountType">Account Type</Label>
        <select id="accountType" className="w-full px-3 py-2 border border-border-primary rounded-xl text-sm bg-surface-primary">
          <option>Checking</option>
          <option>Savings</option>
          <option>Investment</option>
        </select>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Field',
    disabled: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-1">
      <Label htmlFor="password" required>Password</Label>
      <input id="password" type="password" placeholder="Enter your password" className="w-full px-3 py-2 border border-border-primary rounded-xl text-sm bg-surface-primary" />
      <p className="text-xs text-text-tertiary mt-1">Must be at least 8 characters with a number and symbol</p>
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'This is an exceptionally long label text that should test how the component handles text wrapping and overflow in various container widths'
  }
}`,...h.parameters?.docs?.source},description:{story:`Very long label text — edge case`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Password Confirmation (must match password entered above)',
    required: true,
    htmlFor: 'password-confirm'
  }
}`,...g.parameters?.docs?.source},description:{story:`Required with custom long text`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Mobile Responsive Label',
    required: true
  },
  decorators: [Story => <div className="max-w-[200px]">
        <Story />
      </div>]
}`,..._.parameters?.docs?.source},description:{story:`Mobile narrow container`,..._.parameters?.docs?.description}}},v=[`Default`,`Required`,`WithInput`,`WithForm`,`Disabled`,`WithHint`,`DarkMode`,`MobileView`,`LongText`,`RequiredLongText`,`Mobile`]}))();export{p as DarkMode,s as Default,d as Disabled,h as LongText,_ as Mobile,m as MobileView,c as Required,g as RequiredLongText,u as WithForm,f as WithHint,l as WithInput,v as __namedExportsOrder,o as default};