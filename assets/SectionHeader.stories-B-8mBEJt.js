import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DL3IwwZJ.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";var o,s,c,l=e((()=>{o=t(n()),r(),s=a(),c=o.forwardRef(({className:e,title:t,description:n,actions:r,size:a=`md`,divider:o=!1,...c},l)=>{let u={sm:`text-lg`,md:`text-2xl`,lg:`text-3xl`},d={sm:`text-sm`,md:`text-base`,lg:`text-lg`};return(0,s.jsx)(`div`,{ref:l,className:i(`flex flex-col gap-4 w-full`,o&&`border-b border-border-primary pb-4 mb-4`,e),...c,children:(0,s.jsxs)(`div`,{className:`flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4`,children:[(0,s.jsxs)(`div`,{className:`space-y-1 flex-1`,children:[(0,s.jsx)(`h2`,{className:i(`font-bold text-text-primary tracking-tight`,u[a]),children:t}),n&&(0,s.jsx)(`p`,{className:i(`text-text-secondary leading-relaxed`,d[a]),children:n})]}),r&&(0,s.jsx)(`div`,{className:`flex items-center gap-2 flex-shrink-0 mt-1 sm:mt-0`,children:r})]})})}),c.displayName=`SectionHeader`,c.__docgenInfo={description:``,methods:[],displayName:`SectionHeader`,props:{title:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`The main title of the section.`},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional description or subtitle.`},actions:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional actions to display on the right side (e.g., Buttons).`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size of the header, affecting typography.
@default "md"`,defaultValue:{value:`'md'`,computed:!1}},divider:{required:!1,tsType:{name:`boolean`},description:`Whether to show a divider line at the bottom.
@default false`,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),u,d,f,p,m,h,g,_,v,y;e((()=>{l(),u={title:`Layout/SectionHeader`,component:c,tags:[`autodocs`]},d={args:{title:`Recent Transactions`,description:`View and manage your latest financial activities`}},f={args:{title:`Your Portfolio`,description:`Track your investments and assets`,action:{label:`View All`,onClick:()=>alert(`View All clicked`)}}},p={args:{title:`Budgets`,description:`Monthly spending by category`,action:{label:`Create Budget`,onClick:()=>alert(`Create Budget clicked`)},secondaryAction:{label:`Manage Categories`,onClick:()=>alert(`Manage Categories clicked`)}}},m={args:{title:`Quick Stats`,compact:!0}},h={args:{title:`Dashboard Overview`,description:`Your financial summary for Q2 2025`,action:{label:`Export Report`,onClick:()=>alert(`Exporting...`)},secondaryAction:{label:`Customize`,onClick:()=>alert(`Customize`)}}},g={args:{title:`Account Settings`,description:`Manage your personal information and preferences`,action:{label:`Save Changes`,onClick:()=>alert(`Saved`)}}},_={args:{title:`Security`,description:`Two-factor authentication, passwords, and recovery options`}},v={parameters:{themes:{themeOverride:`dark`}},args:{title:`Notifications`,description:`Manage your alert preferences`,action:{label:`Mark All Read`,onClick:()=>alert(`All marked read`)}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Recent Transactions',
    description: 'View and manage your latest financial activities'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Your Portfolio',
    description: 'Track your investments and assets',
    action: {
      label: 'View All',
      onClick: () => alert('View All clicked')
    }
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Budgets',
    description: 'Monthly spending by category',
    action: {
      label: 'Create Budget',
      onClick: () => alert('Create Budget clicked')
    },
    secondaryAction: {
      label: 'Manage Categories',
      onClick: () => alert('Manage Categories clicked')
    }
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Quick Stats',
    compact: true
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Dashboard Overview',
    description: 'Your financial summary for Q2 2025',
    action: {
      label: 'Export Report',
      onClick: () => alert('Exporting...')
    },
    secondaryAction: {
      label: 'Customize',
      onClick: () => alert('Customize')
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Account Settings',
    description: 'Manage your personal information and preferences',
    action: {
      label: 'Save Changes',
      onClick: () => alert('Saved')
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Security',
    description: 'Two-factor authentication, passwords, and recovery options'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    title: 'Notifications',
    description: 'Manage your alert preferences',
    action: {
      label: 'Mark All Read',
      onClick: () => alert('All marked read')
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithAction`,`WithSecondaryAction`,`Compact`,`DashboardOverview`,`AccountSettings`,`SecuritySection`,`DarkMode`]}))();export{g as AccountSettings,m as Compact,v as DarkMode,h as DashboardOverview,d as Default,_ as SecuritySection,f as WithAction,p as WithSecondaryAction,y as __namedExportsOrder,u as default};