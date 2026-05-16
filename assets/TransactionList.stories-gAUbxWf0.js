import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-BscHEzdU.js";import{n,t as r}from"./TransactionList-CpNR82hI.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{n(),i=t(),a={title:`Fintech/Dashboard/TransactionList`,component:r,tags:[`autodocs`]},o={args:{title:`Recent Transactions`,transactions:[{id:`1`,title:`Salary Deposit`,amount:4500,type:`income`,status:`completed`,category:`work`,date:`2025-05-11`,description:`Monthly salary`},{id:`2`,title:`Amazon Purchase`,amount:89.99,type:`expense`,status:`completed`,category:`shopping`,date:`2025-05-10`},{id:`3`,title:`Uber Ride`,amount:24.5,type:`expense`,status:`completed`,category:`transport`,date:`2025-05-10`},{id:`4`,title:`Freelance Payment`,amount:1200,type:`income`,status:`pending`,category:`work`,date:`2025-05-09`},{id:`5`,title:`Restaurant Dinner`,amount:67.8,type:`expense`,status:`completed`,category:`food`,date:`2025-05-09`}],currency:`USD`}},s={args:{title:`Transactions (Masked)`,transactions:[{id:`1`,title:`Wire Transfer`,amount:12500,type:`income`,status:`completed`,category:`transfer`,date:`2025-05-11`},{id:`2`,title:`Rent Payment`,amount:1800,type:`expense`,status:`completed`,category:`housing`,date:`2025-05-10`},{id:`3`,title:`Electric Bill`,amount:134.2,type:`expense`,status:`completed`,category:`utilities`,date:`2025-05-08`}],maskable:!0,currency:`USD`}},c={args:{title:`Transactions`,transactions:[],emptyMessage:`No transactions yet. Start your financial journey!`}},l={args:{title:`All Activity`,transactions:[{id:`1`,title:`Card Payment`,amount:45,type:`expense`,status:`completed`,category:`card`,date:`2025-05-11`},{id:`2`,title:`Transfer to Savings`,amount:500,type:`expense`,status:`failed`,category:`transfer`,date:`2025-05-10`,description:`Insufficient funds`},{id:`3`,title:`Gift Received`,amount:100,type:`income`,status:`completed`,category:`gift`,date:`2025-05-09`},{id:`4`,title:`Online Payment`,amount:299.99,type:`expense`,status:`pending`,category:`shopping`,date:`2025-05-08`}],currency:`USD`}},u={args:{title:`Spending by Category`,transactions:[{id:`1`,title:`Whole Foods`,amount:89.5,type:`expense`,status:`completed`,category:`food`,date:`2025-05-11`},{id:`2`,title:`Walgreens`,amount:24.99,type:`expense`,status:`completed`,category:`health`,date:`2025-05-11`},{id:`3`,title:`Amazon`,amount:199.99,type:`expense`,status:`completed`,category:`shopping`,date:`2025-05-10`},{id:`4`,title:`Rent Transfer`,amount:1800,type:`expense`,status:`completed`,category:`housing`,date:`2025-05-10`},{id:`5`,title:`PG&E Bill`,amount:134.2,type:`expense`,status:`completed`,category:`utilities`,date:`2025-05-09`},{id:`6`,title:`Uber Ride`,amount:28.5,type:`expense`,status:`completed`,category:`transport`,date:`2025-05-09`}],currency:`USD`}},d={args:{title:`Portfolio Activity`,transactions:[{id:`1`,title:`Wire Transfer In`,amount:25e4,type:`income`,status:`completed`,category:`transfer`,date:`2025-05-11`,description:`From corporate account`},{id:`2`,title:`Stock Purchase`,amount:5e4,type:`expense`,status:`pending`,category:`transfer`,date:`2025-05-11`,description:`Buy AAPL 280 shares`},{id:`3`,title:`Crypto Withdrawal`,amount:25e3,type:`expense`,status:`completed`,category:`transfer`,date:`2025-05-10`},{id:`4`,title:`Dividend Payment`,amount:1234.56,type:`income`,status:`completed`,category:`work`,date:`2025-05-09`}],maskable:!0,currency:`USD`}},f={args:{title:`Transaction History (All)`,transactions:Array.from({length:15},(e,t)=>({id:String(t+1),title:[`Salary`,`Amazon`,`Uber`,`Starbucks`,`Netflix`,`Rent`,`Transfer`,`Dinner`,`Gas`,`Gym`,`Apple Store`,`Spotify`,`Target`,`Wyze`,`Shell`][t],amount:[4500,89.99,24.5,5.75,15.99,1800,500,67.8,45,49.99,1299,9.99,156.78,35,52.3][t],type:t===0||t===6?`income`:`expense`,status:t===10?`pending`:t===12?`failed`:`completed`,category:[`work`,`shopping`,`transport`,`food`,`other`,`housing`,`transfer`,`food`,`transport`,`health`,`shopping`,`other`,`shopping`,`utilities`,`transport`][t],date:new Date(Date.now()-t*864e5).toISOString().split(`T`)[0]})),currency:`USD`}},p={args:{title:`DeFi Activity`,transactions:[{id:`1`,title:`Uniswap Swap`,amount:2500,type:`expense`,status:`completed`,category:`transfer`,date:`2025-05-11`,description:`USDC → ETH`},{id:`2`,title:`Aave Deposit`,amount:1e4,type:`expense`,status:`completed`,category:`transfer`,date:`2025-05-10`,description:`Deposited USDC`},{id:`3`,title:`Staking Reward`,amount:12.5,type:`income`,status:`completed`,category:`work`,date:`2025-05-09`},{id:`4`,title:`Gas Fee`,amount:.005,type:`expense`,status:`completed`,category:`utilities`,date:`2025-05-09`,description:`ETH gas for tx`}],currency:`USD`},parameters:{backgrounds:{default:`dark`}},decorators:[e=>(0,i.jsx)(`div`,{className:`dark p-6 bg-zinc-900 rounded-xl`,children:(0,i.jsx)(e,{})})]},m={args:{title:`Recent Activity`,transactions:[{id:`1`,title:`Coffee`,amount:5.5,type:`expense`,status:`completed`,category:`food`,date:`2025-05-11`},{id:`2`,title:`Lunch`,amount:15.75,type:`expense`,status:`completed`,category:`food`,date:`2025-05-11`},{id:`3`,title:`Venmo Received`,amount:50,type:`income`,status:`completed`,category:`transfer`,date:`2025-05-10`}],currency:`USD`},decorators:[e=>(0,i.jsx)(`div`,{className:`max-w-sm mx-auto`,children:(0,i.jsx)(e,{})})]},h={args:{title:`Pending Payments`,transactions:[{id:`1`,title:`Wire Transfer Out`,amount:2500,type:`expense`,status:`pending`,category:`transfer`,date:`2025-05-11`,description:`To Alice Johnson - Checking`},{id:`2`,title:`ACH Deposit`,amount:3200,type:`income`,status:`pending`,category:`work`,date:`2025-05-11`,description:`Client payment - pending clearance`},{id:`3`,title:`Card Authorization`,amount:150,type:`expense`,status:`pending`,category:`shopping`,date:`2025-05-10`,description:`Hotel deposit hold`}],currency:`USD`}},g={args:{title:`International Activity`,transactions:[{id:`1`,title:`SWIFT Transfer`,amount:15e3,type:`expense`,status:`completed`,category:`transfer`,date:`2025-05-11`,description:`To EUR account - Santander ES`},{id:`2`,title:`Currency Exchange`,amount:5e3,type:`expense`,status:`completed`,category:`transfer`,date:`2025-05-10`,description:`USD → EUR at 0.92 rate`},{id:`3`,title:`Foreign ATM Fee`,amount:5,type:`expense`,status:`completed`,category:`other`,date:`2025-05-09`,description:`ATM withdrawal in London`},{id:`4`,title:`Wire Received`,amount:25e3,type:`income`,status:`completed`,category:`transfer`,date:`2025-05-08`,description:`From Deutsche Bank AG`}],currency:`USD`}},_={args:{title:`Subscriptions This Month`,transactions:[{id:`1`,title:`Netflix`,amount:15.99,type:`expense`,status:`completed`,category:`other`,date:`2025-05-11`},{id:`2`,title:`Spotify`,amount:9.99,type:`expense`,status:`completed`,category:`other`,date:`2025-05-10`},{id:`3`,title:`iCloud Storage`,amount:2.99,type:`expense`,status:`completed`,category:`other`,date:`2025-05-09`},{id:`4`,title:`Adobe Creative Cloud`,amount:54.99,type:`expense`,status:`completed`,category:`other`,date:`2025-05-08`},{id:`5`,title:`Amazon Prime`,amount:14.99,type:`expense`,status:`completed`,category:`shopping`,date:`2025-05-07`}],currency:`USD`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Recent Transactions',
    transactions: [{
      id: '1',
      title: 'Salary Deposit',
      amount: 4500,
      type: 'income',
      status: 'completed',
      category: 'work',
      date: '2025-05-11',
      description: 'Monthly salary'
    }, {
      id: '2',
      title: 'Amazon Purchase',
      amount: 89.99,
      type: 'expense',
      status: 'completed',
      category: 'shopping',
      date: '2025-05-10'
    }, {
      id: '3',
      title: 'Uber Ride',
      amount: 24.50,
      type: 'expense',
      status: 'completed',
      category: 'transport',
      date: '2025-05-10'
    }, {
      id: '4',
      title: 'Freelance Payment',
      amount: 1200,
      type: 'income',
      status: 'pending',
      category: 'work',
      date: '2025-05-09'
    }, {
      id: '5',
      title: 'Restaurant Dinner',
      amount: 67.80,
      type: 'expense',
      status: 'completed',
      category: 'food',
      date: '2025-05-09'
    }],
    currency: 'USD'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Transactions (Masked)',
    transactions: [{
      id: '1',
      title: 'Wire Transfer',
      amount: 12500,
      type: 'income',
      status: 'completed',
      category: 'transfer',
      date: '2025-05-11'
    }, {
      id: '2',
      title: 'Rent Payment',
      amount: 1800,
      type: 'expense',
      status: 'completed',
      category: 'housing',
      date: '2025-05-10'
    }, {
      id: '3',
      title: 'Electric Bill',
      amount: 134.20,
      type: 'expense',
      status: 'completed',
      category: 'utilities',
      date: '2025-05-08'
    }],
    maskable: true,
    currency: 'USD'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Transactions',
    transactions: [],
    emptyMessage: 'No transactions yet. Start your financial journey!'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'All Activity',
    transactions: [{
      id: '1',
      title: 'Card Payment',
      amount: 45.00,
      type: 'expense',
      status: 'completed',
      category: 'card',
      date: '2025-05-11'
    }, {
      id: '2',
      title: 'Transfer to Savings',
      amount: 500,
      type: 'expense',
      status: 'failed',
      category: 'transfer',
      date: '2025-05-10',
      description: 'Insufficient funds'
    }, {
      id: '3',
      title: 'Gift Received',
      amount: 100,
      type: 'income',
      status: 'completed',
      category: 'gift',
      date: '2025-05-09'
    }, {
      id: '4',
      title: 'Online Payment',
      amount: 299.99,
      type: 'expense',
      status: 'pending',
      category: 'shopping',
      date: '2025-05-08'
    }],
    currency: 'USD'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Spending by Category',
    transactions: [{
      id: '1',
      title: 'Whole Foods',
      amount: 89.50,
      type: 'expense',
      status: 'completed',
      category: 'food',
      date: '2025-05-11'
    }, {
      id: '2',
      title: 'Walgreens',
      amount: 24.99,
      type: 'expense',
      status: 'completed',
      category: 'health',
      date: '2025-05-11'
    }, {
      id: '3',
      title: 'Amazon',
      amount: 199.99,
      type: 'expense',
      status: 'completed',
      category: 'shopping',
      date: '2025-05-10'
    }, {
      id: '4',
      title: 'Rent Transfer',
      amount: 1800,
      type: 'expense',
      status: 'completed',
      category: 'housing',
      date: '2025-05-10'
    }, {
      id: '5',
      title: 'PG&E Bill',
      amount: 134.20,
      type: 'expense',
      status: 'completed',
      category: 'utilities',
      date: '2025-05-09'
    }, {
      id: '6',
      title: 'Uber Ride',
      amount: 28.50,
      type: 'expense',
      status: 'completed',
      category: 'transport',
      date: '2025-05-09'
    }],
    currency: 'USD'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Portfolio Activity',
    transactions: [{
      id: '1',
      title: 'Wire Transfer In',
      amount: 250000,
      type: 'income',
      status: 'completed',
      category: 'transfer',
      date: '2025-05-11',
      description: 'From corporate account'
    }, {
      id: '2',
      title: 'Stock Purchase',
      amount: 50000,
      type: 'expense',
      status: 'pending',
      category: 'transfer',
      date: '2025-05-11',
      description: 'Buy AAPL 280 shares'
    }, {
      id: '3',
      title: 'Crypto Withdrawal',
      amount: 25000,
      type: 'expense',
      status: 'completed',
      category: 'transfer',
      date: '2025-05-10'
    }, {
      id: '4',
      title: 'Dividend Payment',
      amount: 1234.56,
      type: 'income',
      status: 'completed',
      category: 'work',
      date: '2025-05-09'
    }],
    maskable: true,
    currency: 'USD'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Transaction History (All)',
    transactions: Array.from({
      length: 15
    }, (_, i) => ({
      id: String(i + 1),
      title: ['Salary', 'Amazon', 'Uber', 'Starbucks', 'Netflix', 'Rent', 'Transfer', 'Dinner', 'Gas', 'Gym', 'Apple Store', 'Spotify', 'Target', 'Wyze', 'Shell'][i],
      amount: [4500, 89.99, 24.50, 5.75, 15.99, 1800, 500, 67.80, 45.00, 49.99, 1299, 9.99, 156.78, 35.00, 52.30][i],
      type: i === 0 || i === 6 ? 'income' as const : 'expense' as const,
      status: i === 10 ? 'pending' as const : i === 12 ? 'failed' as const : 'completed' as const,
      category: (['work', 'shopping', 'transport', 'food', 'other', 'housing', 'transfer', 'food', 'transport', 'health', 'shopping', 'other', 'shopping', 'utilities', 'transport'] as const)[i],
      date: new Date(Date.now() - i * 86400000).toISOString().split('T')[0]
    })),
    currency: 'USD'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'DeFi Activity',
    transactions: [{
      id: '1',
      title: 'Uniswap Swap',
      amount: 2500,
      type: 'expense',
      status: 'completed',
      category: 'transfer',
      date: '2025-05-11',
      description: 'USDC → ETH'
    }, {
      id: '2',
      title: 'Aave Deposit',
      amount: 10000,
      type: 'expense',
      status: 'completed',
      category: 'transfer',
      date: '2025-05-10',
      description: 'Deposited USDC'
    }, {
      id: '3',
      title: 'Staking Reward',
      amount: 12.50,
      type: 'income',
      status: 'completed',
      category: 'work',
      date: '2025-05-09'
    }, {
      id: '4',
      title: 'Gas Fee',
      amount: 0.005,
      type: 'expense',
      status: 'completed',
      category: 'utilities',
      date: '2025-05-09',
      description: 'ETH gas for tx'
    }],
    currency: 'USD'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [(Story: any) => <div className="dark p-6 bg-zinc-900 rounded-xl">
                <Story />
            </div>]
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Recent Activity',
    transactions: [{
      id: '1',
      title: 'Coffee',
      amount: 5.50,
      type: 'expense',
      status: 'completed',
      category: 'food',
      date: '2025-05-11'
    }, {
      id: '2',
      title: 'Lunch',
      amount: 15.75,
      type: 'expense',
      status: 'completed',
      category: 'food',
      date: '2025-05-11'
    }, {
      id: '3',
      title: 'Venmo Received',
      amount: 50,
      type: 'income',
      status: 'completed',
      category: 'transfer',
      date: '2025-05-10'
    }],
    currency: 'USD'
  },
  decorators: [(Story: any) => <div className="max-w-sm mx-auto">
                <Story />
            </div>]
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Pending Payments',
    transactions: [{
      id: '1',
      title: 'Wire Transfer Out',
      amount: 2500,
      type: 'expense',
      status: 'pending',
      category: 'transfer',
      date: '2025-05-11',
      description: 'To Alice Johnson - Checking'
    }, {
      id: '2',
      title: 'ACH Deposit',
      amount: 3200,
      type: 'income',
      status: 'pending',
      category: 'work',
      date: '2025-05-11',
      description: 'Client payment - pending clearance'
    }, {
      id: '3',
      title: 'Card Authorization',
      amount: 150,
      type: 'expense',
      status: 'pending',
      category: 'shopping',
      date: '2025-05-10',
      description: 'Hotel deposit hold'
    }],
    currency: 'USD'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'International Activity',
    transactions: [{
      id: '1',
      title: 'SWIFT Transfer',
      amount: 15000,
      type: 'expense',
      status: 'completed',
      category: 'transfer',
      date: '2025-05-11',
      description: 'To EUR account - Santander ES'
    }, {
      id: '2',
      title: 'Currency Exchange',
      amount: 5000,
      type: 'expense',
      status: 'completed',
      category: 'transfer',
      date: '2025-05-10',
      description: 'USD → EUR at 0.92 rate'
    }, {
      id: '3',
      title: 'Foreign ATM Fee',
      amount: 5.00,
      type: 'expense',
      status: 'completed',
      category: 'other',
      date: '2025-05-09',
      description: 'ATM withdrawal in London'
    }, {
      id: '4',
      title: 'Wire Received',
      amount: 25000,
      type: 'income',
      status: 'completed',
      category: 'transfer',
      date: '2025-05-08',
      description: 'From Deutsche Bank AG'
    }],
    currency: 'USD'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Subscriptions This Month',
    transactions: [{
      id: '1',
      title: 'Netflix',
      amount: 15.99,
      type: 'expense',
      status: 'completed',
      category: 'other',
      date: '2025-05-11'
    }, {
      id: '2',
      title: 'Spotify',
      amount: 9.99,
      type: 'expense',
      status: 'completed',
      category: 'other',
      date: '2025-05-10'
    }, {
      id: '3',
      title: 'iCloud Storage',
      amount: 2.99,
      type: 'expense',
      status: 'completed',
      category: 'other',
      date: '2025-05-09'
    }, {
      id: '4',
      title: 'Adobe Creative Cloud',
      amount: 54.99,
      type: 'expense',
      status: 'completed',
      category: 'other',
      date: '2025-05-08'
    }, {
      id: '5',
      title: 'Amazon Prime',
      amount: 14.99,
      type: 'expense',
      status: 'completed',
      category: 'shopping',
      date: '2025-05-07'
    }],
    currency: 'USD'
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Masked`,`Empty`,`WithFailedTransactions`,`AllCategories`,`LargeAmounts`,`ManyTransactions`,`DarkMode`,`MobileView`,`PendingTransaction`,`InternationalTransactions`,`MonthlySubscriptionCharges`]}))();export{u as AllCategories,p as DarkMode,o as Default,c as Empty,g as InternationalTransactions,d as LargeAmounts,f as ManyTransactions,s as Masked,m as MobileView,_ as MonthlySubscriptionCharges,h as PendingTransaction,l as WithFailedTransactions,v as __namedExportsOrder,a as default};