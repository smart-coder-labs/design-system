import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-524CuMck.js";import{t as r}from"./jsx-runtime-DaLCRA3n.js";import{a as i,t as a}from"./Tabs-Dum_pClL.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{i(),o=t(n()),s=r(),c={title:`Navigation/Tabs`,component:a,tags:[`autodocs`]},l={render:()=>(0,s.jsxs)(a,{defaultValue:`overview`,children:[(0,s.jsxs)(a.List,{children:[(0,s.jsx)(a.Trigger,{value:`overview`,children:`Overview`}),(0,s.jsx)(a.Trigger,{value:`transactions`,children:`Transactions`}),(0,s.jsx)(a.Trigger,{value:`analytics`,children:`Analytics`})]}),(0,s.jsx)(a.Content,{value:`overview`,className:`p-4 text-sm text-text-secondary`,children:`Account overview with balance and recent activity`}),(0,s.jsx)(a.Content,{value:`transactions`,className:`p-4 text-sm text-text-secondary`,children:`List of all recent transactions`}),(0,s.jsx)(a.Content,{value:`analytics`,className:`p-4 text-sm text-text-secondary`,children:`Spending analytics and charts`})]})},u={render:()=>(0,s.jsxs)(a,{defaultValue:`buy`,children:[(0,s.jsxs)(a.List,{variant:`segmented`,children:[(0,s.jsx)(a.Trigger,{value:`buy`,children:`Buy`}),(0,s.jsx)(a.Trigger,{value:`sell`,children:`Sell`}),(0,s.jsx)(a.Trigger,{value:`swap`,children:`Swap`})]}),(0,s.jsx)(a.Content,{value:`buy`,className:`p-4 text-sm text-text-secondary`,children:`Buy stocks, crypto, and ETFs`}),(0,s.jsx)(a.Content,{value:`sell`,className:`p-4 text-sm text-text-secondary`,children:`Sell your holdings`}),(0,s.jsx)(a.Content,{value:`swap`,className:`p-4 text-sm text-text-secondary`,children:`Swap between currencies and assets`})]})},d={render:()=>(0,s.jsxs)(a,{defaultValue:`checking`,children:[(0,s.jsxs)(a.List,{children:[(0,s.jsx)(a.Trigger,{value:`checking`,children:`Checking`}),(0,s.jsx)(a.Trigger,{value:`savings`,children:`Savings`}),(0,s.jsx)(a.Trigger,{value:`credit`,children:`Credit Card`})]}),(0,s.jsxs)(a.Content,{value:`checking`,className:`p-4 space-y-3`,children:[(0,s.jsxs)(`div`,{className:`flex justify-between`,children:[(0,s.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Balance`}),(0,s.jsx)(`span`,{className:`text-sm font-bold`,children:`$12,450.80`})]}),(0,s.jsxs)(`div`,{className:`flex justify-between`,children:[(0,s.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Account Number`}),(0,s.jsx)(`span`,{className:`text-sm font-mono`,children:`••••4582`})]})]}),(0,s.jsxs)(a.Content,{value:`savings`,className:`p-4 space-y-3`,children:[(0,s.jsxs)(`div`,{className:`flex justify-between`,children:[(0,s.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Balance`}),(0,s.jsx)(`span`,{className:`text-sm font-bold text-green-600`,children:`$45,200.00`})]}),(0,s.jsxs)(`div`,{className:`flex justify-between`,children:[(0,s.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`APY`}),(0,s.jsx)(`span`,{className:`text-sm font-bold`,children:`4.5%`})]})]}),(0,s.jsxs)(a.Content,{value:`credit`,className:`p-4 space-y-3`,children:[(0,s.jsxs)(`div`,{className:`flex justify-between`,children:[(0,s.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Available Credit`}),(0,s.jsx)(`span`,{className:`text-sm font-bold`,children:`$8,500`})]}),(0,s.jsxs)(`div`,{className:`flex justify-between`,children:[(0,s.jsx)(`span`,{className:`text-sm text-text-secondary`,children:`Current Balance`}),(0,s.jsx)(`span`,{className:`text-sm font-bold`,children:`$2,340.50`})]})]})]})},f={render:()=>(0,s.jsxs)(a,{defaultValue:`portfolio`,children:[(0,s.jsxs)(a.List,{children:[(0,s.jsx)(a.Trigger,{value:`portfolio`,children:`Portfolio`}),(0,s.jsx)(a.Trigger,{value:`history`,children:`History`}),(0,s.jsx)(a.Trigger,{value:`settings`,disabled:!0,children:`Settings (Coming Soon)`})]}),(0,s.jsx)(a.Content,{value:`portfolio`,className:`p-4 text-sm text-text-secondary`,children:`Your investment portfolio overview`}),(0,s.jsx)(a.Content,{value:`history`,className:`p-4 text-sm text-text-secondary`,children:`Transaction history and statements`})]})},p={render:()=>{let[e,t]=(0,o.useState)(`balance`),n={balance:{label:`Total Balance`,value:`$124,532.80`,change:`+3.2%`},invested:{label:`Invested`,value:`$78,200.00`,change:`+12.4%`},available:{label:`Available Cash`,value:`$46,332.80`,change:`+1.1%`}}[e];return(0,s.jsxs)(a,{value:e,onValueChange:t,children:[(0,s.jsxs)(a.List,{children:[(0,s.jsx)(a.Trigger,{value:`balance`,children:`Balance`}),(0,s.jsx)(a.Trigger,{value:`invested`,children:`Invested`}),(0,s.jsx)(a.Trigger,{value:`available`,children:`Available`})]}),(0,s.jsxs)(a.Content,{value:e,className:`p-6 text-center space-y-2`,children:[(0,s.jsx)(`p`,{className:`text-xs text-text-secondary`,children:n.label}),(0,s.jsx)(`p`,{className:`text-4xl font-bold`,children:n.value}),(0,s.jsxs)(`p`,{className:`text-sm text-green-600`,children:[n.change,` this month`]})]})]})}},m={parameters:{themes:{themeOverride:`dark`}},render:()=>(0,s.jsxs)(a,{defaultValue:`dashboard`,children:[(0,s.jsxs)(a.List,{children:[(0,s.jsx)(a.Trigger,{value:`dashboard`,children:`Dashboard`}),(0,s.jsx)(a.Trigger,{value:`reports`,children:`Reports`})]}),(0,s.jsx)(a.Content,{value:`dashboard`,className:`p-4 text-sm text-text-secondary`,children:`Dashboard content in dark mode`}),(0,s.jsx)(a.Content,{value:`reports`,className:`p-4 text-sm text-text-secondary`,children:`Reports and statements`})]})},h={parameters:{viewport:{defaultViewport:`mobile1`}}},g={parameters:{docs:{description:{story:`Tabs used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="overview">
            <Tabs.List>
                <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
                <Tabs.Trigger value="transactions">Transactions</Tabs.Trigger>
                <Tabs.Trigger value="analytics">Analytics</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="overview" className="p-4 text-sm text-text-secondary">Account overview with balance and recent activity</Tabs.Content>
            <Tabs.Content value="transactions" className="p-4 text-sm text-text-secondary">List of all recent transactions</Tabs.Content>
            <Tabs.Content value="analytics" className="p-4 text-sm text-text-secondary">Spending analytics and charts</Tabs.Content>
        </Tabs>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="buy">
            <Tabs.List variant="segmented">
                <Tabs.Trigger value="buy">Buy</Tabs.Trigger>
                <Tabs.Trigger value="sell">Sell</Tabs.Trigger>
                <Tabs.Trigger value="swap">Swap</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="buy" className="p-4 text-sm text-text-secondary">Buy stocks, crypto, and ETFs</Tabs.Content>
            <Tabs.Content value="sell" className="p-4 text-sm text-text-secondary">Sell your holdings</Tabs.Content>
            <Tabs.Content value="swap" className="p-4 text-sm text-text-secondary">Swap between currencies and assets</Tabs.Content>
        </Tabs>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="checking">
            <Tabs.List>
                <Tabs.Trigger value="checking">Checking</Tabs.Trigger>
                <Tabs.Trigger value="savings">Savings</Tabs.Trigger>
                <Tabs.Trigger value="credit">Credit Card</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="checking" className="p-4 space-y-3">
                <div className="flex justify-between"><span className="text-sm text-text-secondary">Balance</span><span className="text-sm font-bold">$12,450.80</span></div>
                <div className="flex justify-between"><span className="text-sm text-text-secondary">Account Number</span><span className="text-sm font-mono">••••4582</span></div>
            </Tabs.Content>
            <Tabs.Content value="savings" className="p-4 space-y-3">
                <div className="flex justify-between"><span className="text-sm text-text-secondary">Balance</span><span className="text-sm font-bold text-green-600">$45,200.00</span></div>
                <div className="flex justify-between"><span className="text-sm text-text-secondary">APY</span><span className="text-sm font-bold">4.5%</span></div>
            </Tabs.Content>
            <Tabs.Content value="credit" className="p-4 space-y-3">
                <div className="flex justify-between"><span className="text-sm text-text-secondary">Available Credit</span><span className="text-sm font-bold">$8,500</span></div>
                <div className="flex justify-between"><span className="text-sm text-text-secondary">Current Balance</span><span className="text-sm font-bold">$2,340.50</span></div>
            </Tabs.Content>
        </Tabs>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <Tabs defaultValue="portfolio">
            <Tabs.List>
                <Tabs.Trigger value="portfolio">Portfolio</Tabs.Trigger>
                <Tabs.Trigger value="history">History</Tabs.Trigger>
                <Tabs.Trigger value="settings" disabled>Settings (Coming Soon)</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="portfolio" className="p-4 text-sm text-text-secondary">Your investment portfolio overview</Tabs.Content>
            <Tabs.Content value="history" className="p-4 text-sm text-text-secondary">Transaction history and statements</Tabs.Content>
        </Tabs>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('balance');
    const balances: Record<string, {
      label: string;
      value: string;
      change: string;
    }> = {
      balance: {
        label: 'Total Balance',
        value: '$124,532.80',
        change: '+3.2%'
      },
      invested: {
        label: 'Invested',
        value: '$78,200.00',
        change: '+12.4%'
      },
      available: {
        label: 'Available Cash',
        value: '$46,332.80',
        change: '+1.1%'
      }
    };
    const current = balances[activeTab];
    return <Tabs value={activeTab} onValueChange={setActiveTab}>
                <Tabs.List>
                    <Tabs.Trigger value="balance">Balance</Tabs.Trigger>
                    <Tabs.Trigger value="invested">Invested</Tabs.Trigger>
                    <Tabs.Trigger value="available">Available</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value={activeTab} className="p-6 text-center space-y-2">
                    <p className="text-xs text-text-secondary">{current.label}</p>
                    <p className="text-4xl font-bold">{current.value}</p>
                    <p className="text-sm text-green-600">{current.change} this month</p>
                </Tabs.Content>
            </Tabs>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  render: () => <Tabs defaultValue="dashboard">
            <Tabs.List>
                <Tabs.Trigger value="dashboard">Dashboard</Tabs.Trigger>
                <Tabs.Trigger value="reports">Reports</Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content value="dashboard" className="p-4 text-sm text-text-secondary">Dashboard content in dark mode</Tabs.Content>
            <Tabs.Content value="reports" className="p-4 text-sm text-text-secondary">Reports and statements</Tabs.Content>
        </Tabs>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Tabs used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`SegmentedVariant`,`WithContent`,`DisabledTab`,`InteractiveTab`,`DarkMode`,`MobileView`,`FintechUseCase`]}))();export{m as DarkMode,l as Default,f as DisabledTab,g as FintechUseCase,p as InteractiveTab,h as MobileView,u as SegmentedVariant,d as WithContent,_ as __namedExportsOrder,c as default};