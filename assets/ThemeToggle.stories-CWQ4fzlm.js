import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DxpFRQWZ.js";import{t as r}from"./jsx-runtime-WZfjI2gv.js";import{n as i,t as a}from"./ThemeToggle-D3KPi5X8.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{i(),o=t(n()),s=r(),c={title:`Navigation/ThemeToggle`,component:a,tags:[`autodocs`]},l={args:{defaultMode:`system`,onModeChange:(e,t)=>console.log(`Mode:`,e,`Theme:`,t)}},u={args:{defaultMode:`light`,onModeChange:(e,t)=>console.log(`Mode:`,e)}},d={args:{defaultMode:`dark`,onModeChange:(e,t)=>console.log(`Mode:`,e)}},f={args:{label:`Appearance Settings`,description:`Choose between light, dark, or system theme`,defaultMode:`system`,onModeChange:(e,t)=>console.log(`Mode:`,e)}},p={args:{defaultMode:`light`,allowSystem:!1,onModeChange:(e,t)=>console.log(`Mode:`,e)}},m={render:()=>{let[e,t]=(0,o.useState)(`system`),[n,r]=(0,o.useState)(`light`);return(0,s.jsxs)(`div`,{className:`space-y-4`,children:[(0,s.jsx)(a,{defaultMode:e,onModeChange:(e,n)=>{t(e),r(n)},allowSystem:!0}),(0,s.jsxs)(`div`,{className:`p-3 bg-surface-secondary rounded-lg text-xs space-y-1`,children:[(0,s.jsxs)(`p`,{children:[`Current mode: `,(0,s.jsx)(`strong`,{children:e})]}),(0,s.jsxs)(`p`,{children:[`Resolved theme: `,(0,s.jsx)(`strong`,{children:n})]})]})]})}},h={parameters:{themes:{themeOverride:`dark`}},args:{defaultMode:`dark`,label:`Dark Theme Toggle`,onModeChange:(e,t)=>console.log(`Mode:`,e)}},g={parameters:{viewport:{defaultViewport:`mobile1`}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMode: 'system',
    onModeChange: (mode, theme) => console.log('Mode:', mode, 'Theme:', theme)
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMode: 'light',
    onModeChange: (mode, theme) => console.log('Mode:', mode)
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMode: 'dark',
    onModeChange: (mode, theme) => console.log('Mode:', mode)
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Appearance Settings',
    description: 'Choose between light, dark, or system theme',
    defaultMode: 'system',
    onModeChange: (mode, theme) => console.log('Mode:', mode)
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMode: 'light',
    allowSystem: false,
    onModeChange: (mode, theme) => console.log('Mode:', mode)
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [mode, setMode] = useState<'light' | 'dark' | 'system'>('system');
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    return <div className="space-y-4">
                <ThemeToggle defaultMode={mode} onModeChange={(m, t) => {
        setMode(m);
        setTheme(t);
      }} allowSystem />
                <div className="p-3 bg-surface-secondary rounded-lg text-xs space-y-1">
                    <p>Current mode: <strong>{mode}</strong></p>
                    <p>Resolved theme: <strong>{theme}</strong></p>
                </div>
            </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    defaultMode: 'dark',
    label: 'Dark Theme Toggle',
    onModeChange: (mode, theme) => console.log('Mode:', mode)
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Light`,`Dark`,`CustomLabel`,`WithoutSystem`,`InteractiveTheme`,`DarkModeDefault`,`MobileView`]}))();export{f as CustomLabel,d as Dark,h as DarkModeDefault,l as Default,m as InteractiveTheme,u as Light,g as MobileView,p as WithoutSystem,_ as __namedExportsOrder,c as default};