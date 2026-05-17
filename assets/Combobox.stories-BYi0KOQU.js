import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-DaLCRA3n.js";import{n,t as r}from"./Combobox-B1KMsgyG.js";var i,a,o,s,c,l,u,d,f,p,m,h;e((()=>{n(),i=t(),a={title:`Forms/Combobox`,component:r,tags:[`autodocs`]},o=[{value:`usd`,label:`US Dollar (USD)`},{value:`eur`,label:`Euro (EUR)`},{value:`gbp`,label:`British Pound (GBP)`},{value:`jpy`,label:`Japanese Yen (JPY)`},{value:`mxn`,label:`Mexican Peso (MXN)`},{value:`brl`,label:`Brazilian Real (BRL)`},{value:`cad`,label:`Canadian Dollar (CAD)`},{value:`aud`,label:`Australian Dollar (AUD)`},{value:`chf`,label:`Swiss Franc (CHF)`},{value:`cny`,label:`Chinese Yuan (CNY)`}],s={args:{items:o,placeholder:`Select a currency...`}},c={args:{items:o,value:`eur`,placeholder:`Select a currency...`}},l={args:{items:o.slice(0,3),placeholder:`Select a currency...`,disabled:!0}},u={args:{items:o.slice(0,5),placeholder:`Choose your currency...`}},d={args:{items:o,placeholder:`Select a currency...`,searchPlaceholder:`Search currencies...`}},f={args:{items:[{value:`active`,label:`Active`},{value:`inactive`,label:`Inactive`},{value:`pending`,label:`Pending`}],placeholder:`Select status...`}},p={args:{items:[],placeholder:`Select an item...`,emptyMessage:`No matching options found.`}},m={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,i.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,i.jsx)(e,{})})]},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: currencies,
    placeholder: 'Select a currency...'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: currencies,
    value: 'eur',
    placeholder: 'Select a currency...'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: currencies.slice(0, 3),
    placeholder: 'Select a currency...',
    disabled: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: currencies.slice(0, 5),
    placeholder: 'Choose your currency...'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: currencies,
    placeholder: 'Select a currency...',
    searchPlaceholder: 'Search currencies...'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      value: 'active',
      label: 'Active'
    }, {
      value: 'inactive',
      label: 'Inactive'
    }, {
      value: 'pending',
      label: 'Pending'
    }],
    placeholder: 'Select status...'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: [],
    placeholder: 'Select an item...',
    emptyMessage: 'No matching options found.'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`,`WithValue`,`Disabled`,`CustomPlaceholder`,`CustomSearchPlaceholder`,`FewOptions`,`CustomEmptyMessage`,`DarkMode`]}))();export{p as CustomEmptyMessage,u as CustomPlaceholder,d as CustomSearchPlaceholder,m as DarkMode,s as Default,l as Disabled,f as FewOptions,c as WithValue,h as __namedExportsOrder,a as default};