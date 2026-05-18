import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-WZfjI2gv.js";import{n,t as r}from"./CardSecurityControls-C_Vuvdf-.js";var i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i=t(),a={title:`Fintech/Cards/CardSecurityControls`,component:r,tags:[`autodocs`]},o=[{id:`freeze`,label:`Freeze Card`,description:`Temporarily block all card transactions`,icon:`❄️`,checked:!1,variant:`danger`},{id:`limits`,label:`Spending Limits`,description:`Set daily spending and ATM withdrawal limits`,icon:`📊`,checked:!0},{id:`international`,label:`International Purchases`,description:`Allow transactions from foreign merchants`,icon:`🌐`,checked:!1},{id:`online`,label:`Online Payments`,description:`Enable card for online transactions`,icon:`🛒`,checked:!0}],s={args:{controls:o,title:`Card Controls`}},c={args:{controls:o.map(e=>({...e,checked:!1})),title:`All Controls Disabled`}},l={args:{controls:o.map(e=>({...e,checked:!0,variant:e.id===`freeze`?`danger`:`default`})),title:`All Controls Enabled`}},u={args:{controls:o.slice(0,2),title:`Security Preferences`}},d={args:{controls:[],title:`Card Controls`}},f={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,i.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,i.jsx)(e,{})})]},p={parameters:{viewport:{defaultViewport:`mobile1`}}},m={parameters:{docs:{description:{story:`CardSecurityControls used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    controls: defaultControls,
    title: 'Card Controls'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    controls: defaultControls.map(c => ({
      ...c,
      checked: false
    })),
    title: 'All Controls Disabled'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    controls: defaultControls.map(c => ({
      ...c,
      checked: true,
      variant: c.id === 'freeze' ? 'danger' : 'default'
    })),
    title: 'All Controls Enabled'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    controls: defaultControls.slice(0, 2),
    title: 'Security Preferences'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    controls: [],
    title: 'Card Controls'
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'CardSecurityControls used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}},h=[`Default`,`AllDisabled`,`AllEnabled`,`CustomTitle`,`Empty`,`DarkMode`,`MobileView`,`FintechUseCase`]}))();export{c as AllDisabled,l as AllEnabled,u as CustomTitle,f as DarkMode,s as Default,d as Empty,m as FintechUseCase,p as MobileView,h as __namedExportsOrder,a as default};