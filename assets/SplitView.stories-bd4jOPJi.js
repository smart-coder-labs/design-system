import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-B_S8iqXg.js";import{n,t as r}from"./utils-ijcE-ZHT.js";import{t as i}from"./jsx-runtime-DaLCRA3n.js";import{n as a,t as o}from"./ResizablePanel-GKfjqTJC.js";var s=e((()=>{a()})),c,l,u=e((()=>{t(),n(),s(),c=i(),l=({left:e,right:t,initialLeftSize:n=`320px`,minLeftSize:i=200,maxLeftSize:a=600,className:s,style:l})=>(0,c.jsxs)(`div`,{className:r(`relative flex h-full w-full bg-background`,`rounded-xl shadow-lg border border-border-primary overflow-hidden`,`md:flex-row flex-col`,s),style:l,children:[(0,c.jsx)(o,{initialSize:n,minSize:i,maxSize:a,direction:`horizontal`,className:r(`bg-surface-secondary/80 backdrop-blur-xl border-r border-border-primary`,`transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)]`,`flex-shrink-0`),style:{minHeight:0},children:(0,c.jsx)(`div`,{className:`h-full w-full p-6 flex flex-col gap-4`,children:e})}),(0,c.jsx)(`div`,{className:`flex-1 h-full w-full bg-background p-6 flex flex-col gap-4`,children:t})]}),l.__docgenInfo={description:`SplitView (macOS Finder style):
- Left panel resizable
- Right panel fills remaining space
- Glass effect, subtle border, shadow
- Responsive, mobile stacks panels`,methods:[],displayName:`SplitView`,props:{left:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Left panel content (Finder sidebar, etc)`},right:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Main panel content (Finder files, etc)`},initialLeftSize:{required:!1,tsType:{name:`string`},description:`Initial width of left panel (px or %)`,defaultValue:{value:`'320px'`,computed:!1}},minLeftSize:{required:!1,tsType:{name:`number`},description:`Minimum width of left panel (px)`,defaultValue:{value:`200`,computed:!1}},maxLeftSize:{required:!1,tsType:{name:`number`},description:`Maximum width of left panel (px)`,defaultValue:{value:`600`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Optional className for root`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Optional style for root`}}}})),d,f,p,m,h,g,_,v,y,b,x;e((()=>{u(),d=i(),f={title:`Layout/SplitView`,component:l,tags:[`autodocs`]},p={args:{left:(0,d.jsxs)(`div`,{className:`space-y-2`,children:[(0,d.jsx)(`h3`,{className:`text-sm font-semibold`,children:`Folders`}),[`Documents`,`Images`,`Transactions`,`Reports`].map(e=>(0,d.jsx)(`div`,{className:`p-2 rounded-lg bg-surface-secondary cursor-pointer hover:bg-surface-tertiary text-sm`,children:e},e))]}),right:(0,d.jsxs)(`div`,{className:`h-full`,children:[(0,d.jsx)(`h2`,{className:`text-lg font-bold mb-4`,children:`Transactions`}),(0,d.jsx)(`div`,{className:`space-y-2`,children:[{name:`Invoice_2025.pdf`,date:`May 10`,size:`245 KB`},{name:`Bank_Statement_Q2.csv`,date:`May 8`,size:`1.2 MB`},{name:`Tax_Receipts_2025.pdf`,date:`May 5`,size:`890 KB`},{name:`Portfolio_Summary.xlsx`,date:`Apr 30`,size:`2.4 MB`}].map(e=>(0,d.jsxs)(`div`,{className:`flex justify-between p-2 rounded-lg hover:bg-surface-secondary text-sm cursor-pointer`,children:[(0,d.jsx)(`span`,{children:e.name}),(0,d.jsx)(`span`,{className:`text-text-secondary`,children:e.size})]},e.name))})]}),initialLeftSize:`280px`,minLeftSize:200,maxLeftSize:400}},m={args:{left:(0,d.jsxs)(`div`,{className:`space-y-3`,children:[(0,d.jsx)(`h3`,{className:`text-sm font-semibold`,children:`Navigation`}),(0,d.jsx)(`div`,{className:`space-y-1`,children:[{label:`Overview`,icon:`📊`,active:!0},{label:`Accounts`,icon:`🏦`},{label:`Cards`,icon:`💳`},{label:`Investments`,icon:`📈`},{label:`Loans`,icon:`💰`},{label:`Settings`,icon:`⚙️`}].map(e=>(0,d.jsxs)(`div`,{className:`flex items-center gap-2 p-2 rounded-lg text-sm cursor-pointer ${e.active?`bg-blue-50 dark:bg-blue-900/30 text-blue-600`:`hover:bg-surface-secondary`}`,children:[(0,d.jsx)(`span`,{children:e.icon}),(0,d.jsx)(`span`,{children:e.label})]},e.label))})]}),right:(0,d.jsxs)(`div`,{className:`space-y-6`,children:[(0,d.jsx)(`h2`,{className:`text-xl font-bold`,children:`Portfolio Overview`}),(0,d.jsxs)(`div`,{className:`grid grid-cols-3 gap-4`,children:[(0,d.jsxs)(`div`,{className:`p-4 bg-surface-secondary rounded-xl`,children:[(0,d.jsx)(`p`,{className:`text-xs text-text-secondary`,children:`Total Balance`}),(0,d.jsx)(`p`,{className:`text-2xl font-bold`,children:`$124,532`})]}),(0,d.jsxs)(`div`,{className:`p-4 bg-surface-secondary rounded-xl`,children:[(0,d.jsx)(`p`,{className:`text-xs text-text-secondary`,children:`Today's P&L`}),(0,d.jsx)(`p`,{className:`text-2xl font-bold text-green-600`,children:`+$2,340`})]}),(0,d.jsxs)(`div`,{className:`p-4 bg-surface-secondary rounded-xl`,children:[(0,d.jsx)(`p`,{className:`text-xs text-text-secondary`,children:`Investments`}),(0,d.jsx)(`p`,{className:`text-2xl font-bold`,children:`18`})]})]}),(0,d.jsxs)(`div`,{className:`p-4 bg-surface-secondary rounded-xl`,children:[(0,d.jsx)(`p`,{className:`text-sm font-medium mb-2`,children:`Recent Activity`}),(0,d.jsx)(`div`,{className:`space-y-2 text-sm`,children:[`Bought 10 AAPL @ $178.50`,`Sold 5 TSLA @ $245.00`,`Dividend received $45.00`].map((e,t)=>(0,d.jsx)(`p`,{className:`text-text-secondary`,children:e},t))})]})]}),initialLeftSize:`200px`,minLeftSize:160,maxLeftSize:320}},h={args:{left:(0,d.jsxs)(`div`,{className:`space-y-2`,children:[(0,d.jsx)(`h3`,{className:`text-sm font-semibold mb-3`,children:`Settings`}),[{label:`Profile`,active:!0},{label:`Security`},{label:`Notifications`},{label:`Privacy`},{label:`Preferences`}].map(e=>(0,d.jsx)(`div`,{className:`p-2 rounded-lg text-sm cursor-pointer ${e.active?`bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-medium`:`hover:bg-surface-secondary`}`,children:e.label},e.label))]}),right:(0,d.jsxs)(`div`,{className:`space-y-4`,children:[(0,d.jsx)(`h2`,{className:`text-lg font-bold`,children:`Profile Settings`}),(0,d.jsxs)(`div`,{className:`grid grid-cols-2 gap-4`,children:[(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`text-xs text-text-secondary mb-1`,children:`First Name`}),(0,d.jsx)(`div`,{className:`p-2 bg-surface-secondary rounded-lg text-sm`,children:`John`})]}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`p`,{className:`text-xs text-text-secondary mb-1`,children:`Last Name`}),(0,d.jsx)(`div`,{className:`p-2 bg-surface-secondary rounded-lg text-sm`,children:`Doe`})]}),(0,d.jsxs)(`div`,{className:`col-span-2`,children:[(0,d.jsx)(`p`,{className:`text-xs text-text-secondary mb-1`,children:`Email`}),(0,d.jsx)(`div`,{className:`p-2 bg-surface-secondary rounded-lg text-sm`,children:`john.doe@example.com`})]})]})]}),initialLeftSize:`220px`,minLeftSize:160,maxLeftSize:300}},g={args:{left:(0,d.jsx)(`div`,{className:`flex flex-col items-center gap-3 pt-4`,children:[`🏠`,`💳`,`📊`].map((e,t)=>(0,d.jsx)(`div`,{className:`w-10 h-10 flex items-center justify-center rounded-xl text-lg cursor-pointer ${t===0?`bg-blue-100 dark:bg-blue-900/30`:`hover:bg-surface-secondary`}`,children:e},t))}),right:(0,d.jsxs)(`div`,{className:`h-full`,children:[(0,d.jsx)(`h2`,{className:`text-lg font-bold`,children:`Home`}),(0,d.jsx)(`p`,{className:`text-sm text-text-secondary mt-2`,children:`Welcome to your dashboard`})]}),initialLeftSize:`64px`,minLeftSize:48,maxLeftSize:80}},_={parameters:{themes:{themeOverride:`dark`}},args:{left:(0,d.jsxs)(`div`,{className:`text-sm p-2`,children:[(0,d.jsx)(`h3`,{className:`font-semibold mb-3`,children:`Menu`}),(0,d.jsx)(`div`,{className:`space-y-2`,children:[`Dashboard`,`Accounts`,`Reports`].map(e=>(0,d.jsx)(`div`,{className:`p-2 rounded-lg hover:bg-surface-secondary cursor-pointer`,children:e},e))})]}),right:(0,d.jsxs)(`div`,{className:`h-full`,children:[(0,d.jsx)(`h2`,{className:`text-lg font-bold`,children:`Dashboard`}),(0,d.jsx)(`p`,{className:`text-sm text-text-secondary mt-2`,children:`Content area`})]}),initialLeftSize:`200px`}},v={parameters:{viewport:{defaultViewport:`mobile1`}}},y={parameters:{docs:{description:{story:`SplitView used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},b={parameters:{docs:{description:{story:`SplitView in a loading state, showing skeleton placeholder UI while data is being fetched from the server.`}}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    left: <div className="space-y-2">
                <h3 className="text-sm font-semibold">Folders</h3>
                {['Documents', 'Images', 'Transactions', 'Reports'].map(folder => <div key={folder} className="p-2 rounded-lg bg-surface-secondary cursor-pointer hover:bg-surface-tertiary text-sm">{folder}</div>)}
            </div>,
    right: <div className="h-full">
                <h2 className="text-lg font-bold mb-4">Transactions</h2>
                <div className="space-y-2">
                    {[{
          name: 'Invoice_2025.pdf',
          date: 'May 10',
          size: '245 KB'
        }, {
          name: 'Bank_Statement_Q2.csv',
          date: 'May 8',
          size: '1.2 MB'
        }, {
          name: 'Tax_Receipts_2025.pdf',
          date: 'May 5',
          size: '890 KB'
        }, {
          name: 'Portfolio_Summary.xlsx',
          date: 'Apr 30',
          size: '2.4 MB'
        }].map(file => <div key={file.name} className="flex justify-between p-2 rounded-lg hover:bg-surface-secondary text-sm cursor-pointer">
                            <span>{file.name}</span>
                            <span className="text-text-secondary">{file.size}</span>
                        </div>)}
                </div>
            </div>,
    initialLeftSize: '280px',
    minLeftSize: 200,
    maxLeftSize: 400
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    left: <div className="space-y-3">
                <h3 className="text-sm font-semibold">Navigation</h3>
                <div className="space-y-1">
                    {[{
          label: 'Overview',
          icon: '📊',
          active: true
        }, {
          label: 'Accounts',
          icon: '🏦'
        }, {
          label: 'Cards',
          icon: '💳'
        }, {
          label: 'Investments',
          icon: '📈'
        }, {
          label: 'Loans',
          icon: '💰'
        }, {
          label: 'Settings',
          icon: '⚙️'
        }].map(item => <div key={item.label} className={\`flex items-center gap-2 p-2 rounded-lg text-sm cursor-pointer \${item.active ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600' : 'hover:bg-surface-secondary'}\`}>
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                        </div>)}
                </div>
            </div>,
    right: <div className="space-y-6">
                <h2 className="text-xl font-bold">Portfolio Overview</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-surface-secondary rounded-xl"><p className="text-xs text-text-secondary">Total Balance</p><p className="text-2xl font-bold">$124,532</p></div>
                    <div className="p-4 bg-surface-secondary rounded-xl"><p className="text-xs text-text-secondary">Today's P&L</p><p className="text-2xl font-bold text-green-600">+$2,340</p></div>
                    <div className="p-4 bg-surface-secondary rounded-xl"><p className="text-xs text-text-secondary">Investments</p><p className="text-2xl font-bold">18</p></div>
                </div>
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm font-medium mb-2">Recent Activity</p>
                    <div className="space-y-2 text-sm">
                        {['Bought 10 AAPL @ $178.50', 'Sold 5 TSLA @ $245.00', 'Dividend received $45.00'].map((a, i) => <p key={i} className="text-text-secondary">{a}</p>)}
                    </div>
                </div>
            </div>,
    initialLeftSize: '200px',
    minLeftSize: 160,
    maxLeftSize: 320
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    left: <div className="space-y-2">
                <h3 className="text-sm font-semibold mb-3">Settings</h3>
                {[{
        label: 'Profile',
        active: true
      }, {
        label: 'Security'
      }, {
        label: 'Notifications'
      }, {
        label: 'Privacy'
      }, {
        label: 'Preferences'
      }].map(item => <div key={item.label} className={\`p-2 rounded-lg text-sm cursor-pointer \${item.active ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 font-medium' : 'hover:bg-surface-secondary'}\`}>{item.label}</div>)}
            </div>,
    right: <div className="space-y-4">
                <h2 className="text-lg font-bold">Profile Settings</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div><p className="text-xs text-text-secondary mb-1">First Name</p><div className="p-2 bg-surface-secondary rounded-lg text-sm">John</div></div>
                    <div><p className="text-xs text-text-secondary mb-1">Last Name</p><div className="p-2 bg-surface-secondary rounded-lg text-sm">Doe</div></div>
                    <div className="col-span-2"><p className="text-xs text-text-secondary mb-1">Email</p><div className="p-2 bg-surface-secondary rounded-lg text-sm">john.doe@example.com</div></div>
                </div>
            </div>,
    initialLeftSize: '220px',
    minLeftSize: 160,
    maxLeftSize: 300
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    left: <div className="flex flex-col items-center gap-3 pt-4">
                {['🏠', '💳', '📊'].map((icon, i) => <div key={i} className={\`w-10 h-10 flex items-center justify-center rounded-xl text-lg cursor-pointer \${i === 0 ? 'bg-blue-100 dark:bg-blue-900/30' : 'hover:bg-surface-secondary'}\`}>{icon}</div>)}
            </div>,
    right: <div className="h-full">
                <h2 className="text-lg font-bold">Home</h2>
                <p className="text-sm text-text-secondary mt-2">Welcome to your dashboard</p>
            </div>,
    initialLeftSize: '64px',
    minLeftSize: 48,
    maxLeftSize: 80
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    left: <div className="text-sm p-2"><h3 className="font-semibold mb-3">Menu</h3><div className="space-y-2">{['Dashboard', 'Accounts', 'Reports'].map(m => <div key={m} className="p-2 rounded-lg hover:bg-surface-secondary cursor-pointer">{m}</div>)}</div></div>,
    right: <div className="h-full"><h2 className="text-lg font-bold">Dashboard</h2><p className="text-sm text-text-secondary mt-2">Content area</p></div>,
    initialLeftSize: '200px'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'SplitView used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'SplitView in a loading state, showing skeleton placeholder UI while data is being fetched from the server.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`FintechDashboard`,`SettingsView`,`MinimalLeft`,`DarkMode`,`MobileView`,`FintechUseCase`,`LoadingState`]}))();export{_ as DarkMode,p as Default,m as FintechDashboard,y as FintechUseCase,b as LoadingState,g as MinimalLeft,v as MobileView,h as SettingsView,x as __namedExportsOrder,f as default};