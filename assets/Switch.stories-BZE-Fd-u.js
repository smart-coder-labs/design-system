import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DuoaHqPM.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{n as i,t as a}from"./Switch-DFVIud90.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{i(),o=t(n()),s=r(),c={title:`Forms/Switch`,component:a,tags:[`autodocs`]},l={args:{checked:!1,onCheckedChange:e=>console.log(`Switch:`,e)}},u={args:{checked:!0,onCheckedChange:e=>console.log(`Switch:`,e)}},d={args:{checked:!1,label:`Enable notifications`,onCheckedChange:e=>console.log(`Switch:`,e)}},f={args:{checked:!0,label:`Two-Factor Authentication`,description:`Add an extra layer of security to your account`,onCheckedChange:e=>console.log(`2FA:`,e)}},p={args:{checked:!1,disabled:!0,label:`Unavailable option`,description:`This feature requires a premium plan`,onCheckedChange:e=>console.log(`Switch:`,e)}},m={args:{checked:!0,disabled:!0,label:`Auto-invest (active)`,description:`This setting is locked while investing is active`,onCheckedChange:e=>console.log(`Switch:`,e)}},h={render:()=>{let[e,t]=(0,o.useState)({notifications:!0,darkMode:!1,twoFactor:!0,autoInvest:!1,roundUp:!0});return(0,s.jsxs)(`div`,{className:`max-w-md space-y-2 border border-border-primary rounded-xl p-4`,children:[(0,s.jsx)(`h3`,{className:`text-sm font-semibold mb-3`,children:`Account Settings`}),(0,s.jsx)(a,{checked:e.notifications,label:`Push Notifications`,description:`Get alerts for transactions and updates`,onCheckedChange:e=>t(t=>({...t,notifications:e}))}),(0,s.jsx)(a,{checked:e.darkMode,label:`Dark Mode`,description:`Use dark theme across the app`,onCheckedChange:e=>t(t=>({...t,darkMode:e}))}),(0,s.jsx)(a,{checked:e.twoFactor,label:`Two-Factor Auth`,description:`Extra security for your account`,onCheckedChange:e=>t(t=>({...t,twoFactor:e}))}),(0,s.jsx)(a,{checked:e.autoInvest,label:`Auto-Invest`,description:`Automatically invest spare cash`,onCheckedChange:e=>t(t=>({...t,autoInvest:e}))}),(0,s.jsx)(a,{checked:e.roundUp,label:`Round-Up Savings`,description:`Save spare change from purchases`,onCheckedChange:e=>t(t=>({...t,roundUp:e}))})]})}},g={render:()=>(0,s.jsxs)(`div`,{className:`space-y-4`,children:[(0,s.jsx)(a,{size:`sm`,checked:!0,label:`Small`,onCheckedChange:()=>{}}),(0,s.jsx)(a,{size:`md`,checked:!0,label:`Medium`,onCheckedChange:()=>{}}),(0,s.jsx)(a,{size:`lg`,checked:!0,label:`Large`,onCheckedChange:()=>{}})]})},_={parameters:{themes:{themeOverride:`dark`}},args:{checked:!0,label:`Dark Mode Toggle`,description:`Switch themes effortlessly`,onCheckedChange:e=>console.log(`Switch:`,e)}},v={render:()=>(0,s.jsxs)(`div`,{className:`space-y-4 max-w-sm`,children:[(0,s.jsx)(a,{checked:!0,label:`Freeze Card`,description:`Temporarily block all card transactions`,size:`md`}),(0,s.jsx)(a,{checked:!1,label:`International Payments`,description:`Allow transactions from foreign merchants`,size:`md`}),(0,s.jsx)(a,{checked:!0,label:`Online Purchases`,description:`Enable card for online transactions`,size:`md`}),(0,s.jsx)(a,{checked:!0,label:`Transaction Alerts`,description:`Get notified of all transactions over $50`,size:`md`}),(0,s.jsx)(a,{checked:!1,disabled:!0,label:`Biometric Login`,description:`Not available on this device`,size:`md`})]})},y={render:()=>(0,s.jsxs)(`div`,{className:`space-y-4 max-w-sm p-4 border border-gray-200 rounded-xl`,children:[(0,s.jsx)(`h3`,{className:`font-semibold text-gray-900 mb-2`,children:`Notification Preferences`}),(0,s.jsx)(a,{checked:!0,label:`Push Notifications`}),(0,s.jsx)(a,{checked:!1,label:`SMS Alerts`}),(0,s.jsx)(a,{checked:!0,label:`Email Summary`}),(0,s.jsx)(a,{checked:!0,label:`Fraud Alerts`}),(0,s.jsx)(a,{checked:!1,label:`Marketing Emails`})]})},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    onCheckedChange: checked => console.log('Switch:', checked)
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    onCheckedChange: checked => console.log('Switch:', checked)
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    label: 'Enable notifications',
    onCheckedChange: checked => console.log('Switch:', checked)
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Two-Factor Authentication',
    description: 'Add an extra layer of security to your account',
    onCheckedChange: checked => console.log('2FA:', checked)
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: true,
    label: 'Unavailable option',
    description: 'This feature requires a premium plan',
    onCheckedChange: checked => console.log('Switch:', checked)
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    checked: true,
    disabled: true,
    label: 'Auto-invest (active)',
    description: 'This setting is locked while investing is active',
    onCheckedChange: checked => console.log('Switch:', checked)
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      twoFactor: true,
      autoInvest: false,
      roundUp: true
    });
    return <div className="max-w-md space-y-2 border border-border-primary rounded-xl p-4">
                <h3 className="text-sm font-semibold mb-3">Account Settings</h3>
                <Switch checked={settings.notifications} label="Push Notifications" description="Get alerts for transactions and updates" onCheckedChange={v => setSettings(s => ({
        ...s,
        notifications: v
      }))} />
                <Switch checked={settings.darkMode} label="Dark Mode" description="Use dark theme across the app" onCheckedChange={v => setSettings(s => ({
        ...s,
        darkMode: v
      }))} />
                <Switch checked={settings.twoFactor} label="Two-Factor Auth" description="Extra security for your account" onCheckedChange={v => setSettings(s => ({
        ...s,
        twoFactor: v
      }))} />
                <Switch checked={settings.autoInvest} label="Auto-Invest" description="Automatically invest spare cash" onCheckedChange={v => setSettings(s => ({
        ...s,
        autoInvest: v
      }))} />
                <Switch checked={settings.roundUp} label="Round-Up Savings" description="Save spare change from purchases" onCheckedChange={v => setSettings(s => ({
        ...s,
        roundUp: v
      }))} />
            </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
            <Switch size="sm" checked={true} label="Small" onCheckedChange={() => {}} />
            <Switch size="md" checked={true} label="Medium" onCheckedChange={() => {}} />
            <Switch size="lg" checked={true} label="Large" onCheckedChange={() => {}} />
        </div>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    checked: true,
    label: 'Dark Mode Toggle',
    description: 'Switch themes effortlessly',
    onCheckedChange: checked => console.log('Switch:', checked)
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-sm">
            <Switch checked={true} label="Freeze Card" description="Temporarily block all card transactions" size="md" />
            <Switch checked={false} label="International Payments" description="Allow transactions from foreign merchants" size="md" />
            <Switch checked={true} label="Online Purchases" description="Enable card for online transactions" size="md" />
            <Switch checked={true} label="Transaction Alerts" description="Get notified of all transactions over $50" size="md" />
            <Switch checked={false} disabled={true} label="Biometric Login" description="Not available on this device" size="md" />
        </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-sm p-4 border border-gray-200 rounded-xl">
            <h3 className="font-semibold text-gray-900 mb-2">Notification Preferences</h3>
            <Switch checked={true} label="Push Notifications" />
            <Switch checked={false} label="SMS Alerts" />
            <Switch checked={true} label="Email Summary" />
            <Switch checked={true} label="Fraud Alerts" />
            <Switch checked={false} label="Marketing Emails" />
        </div>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Checked`,`WithLabel`,`WithDescription`,`Disabled`,`DisabledChecked`,`InteractiveSettings`,`Sizes`,`DarkMode`,`BankingToggles`,`NotificationPreferences`]}))();export{v as BankingToggles,u as Checked,_ as DarkMode,l as Default,p as Disabled,m as DisabledChecked,h as InteractiveSettings,y as NotificationPreferences,g as Sizes,f as WithDescription,d as WithLabel,b as __namedExportsOrder,c as default};