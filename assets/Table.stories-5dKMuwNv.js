import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-D0o8cdjS.js";import{t as r}from"./jsx-runtime-DaLCRA3n.js";import{n as i,t as a}from"./Table-BlWmkeR9.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;e((()=>{i(),o=t(n()),s=r(),c={title:`Data Display/Table`,component:a,tags:[`autodocs`]},l={args:{columns:[{key:`name`,header:`Name`,sortable:!0},{key:`ticker`,header:`Ticker`},{key:`price`,header:`Price`,sortable:!0},{key:`change`,header:`Change`,sortable:!0}],data:[{name:`Apple Inc.`,ticker:`AAPL`,price:`$178.50`,change:`+2.3%`},{name:`Microsoft Corp.`,ticker:`MSFT`,price:`$425.20`,change:`+1.5%`},{name:`NVIDIA Corp.`,ticker:`NVDA`,price:`$880.10`,change:`+4.2%`},{name:`Amazon.com`,ticker:`AMZN`,price:`$185.30`,change:`-0.8%`},{name:`Tesla Inc.`,ticker:`TSLA`,price:`$245.00`,change:`-1.2%`}]}},u={args:{columns:[{key:`date`,header:`Date`,sortable:!0},{key:`description`,header:`Description`},{key:`category`,header:`Category`},{key:`amount`,header:`Amount`,sortable:!0}],data:[{date:`May 10`,description:`Amazon Purchase`,category:`Shopping`,amount:`-$89.99`},{date:`May 9`,description:`Uber Ride`,category:`Transport`,amount:`-$24.50`},{date:`May 8`,description:`Salary Deposit`,category:`Income`,amount:`+$4,500.00`},{date:`May 7`,description:`Netflix`,category:`Entertainment`,amount:`-$15.99`},{date:`May 6`,description:`Starbucks Coffee`,category:`Dining`,amount:`-$5.75`},{date:`May 5`,description:`Electric Bill`,category:`Utilities`,amount:`-$134.50`},{date:`May 4`,description:`Dividend Payment`,category:`Investment Income`,amount:`+$45.00`},{date:`May 3`,description:`Apple Store`,category:`Shopping`,amount:`-$999.00`}],striped:!0,hoverable:!0}},d={render:()=>{let[e,t]=(0,o.useState)(`name`),[n,r]=(0,o.useState)(`asc`);return(0,s.jsx)(a,{columns:[{key:`name`,header:`Name`,sortable:!0},{key:`role`,header:`Role`,sortable:!0},{key:`status`,header:`Status`,sortable:!0},{key:`lastLogin`,header:`Last Login`,sortable:!0}],data:[{name:`Alice Johnson`,role:`Admin`,status:`Active`,lastLogin:`2m ago`},{name:`Bob Smith`,role:`User`,status:`Active`,lastLogin:`1h ago`},{name:`Carol White`,role:`Manager`,status:`Inactive`,lastLogin:`3d ago`},{name:`David Brown`,role:`User`,status:`Active`,lastLogin:`5m ago`},{name:`Eve Davis`,role:`Admin`,status:`Suspended`,lastLogin:`2w ago`}].sort((t,r)=>{let i=t[e],a=r[e];return n===`asc`?i.localeCompare(a):a.localeCompare(i)}),onSortChange:(e,n)=>{t(String(e)),r(n)}})}},f={args:{columns:[{key:`name`,header:`Name`},{key:`ticker`,header:`Ticker`},{key:`shares`,header:`Shares`},{key:`value`,header:`Value`}],data:[{name:`Apple Inc.`,ticker:`AAPL`,shares:50,value:`$8,925`},{name:`Microsoft Corp.`,ticker:`MSFT`,shares:30,value:`$12,756`},{name:`NVIDIA Corp.`,ticker:`NVDA`,shares:15,value:`$13,202`},{name:`Amazon.com`,ticker:`AMZN`,shares:25,value:`$4,633`},{name:`Tesla Inc.`,ticker:`TSLA`,shares:20,value:`$4,900`}],selectable:!0}},p={args:{columns:[{key:`ticker`,header:`Ticker`},{key:`price`,header:`Price`},{key:`change`,header:`Change`}],data:[{ticker:`AAPL`,price:`$178.50`,change:`+2.3%`},{ticker:`MSFT`,price:`$425.20`,change:`+1.5%`},{ticker:`NVDA`,price:`$880.10`,change:`+4.2%`},{ticker:`GOOGL`,price:`$175.80`,change:`+0.9%`},{ticker:`TSLA`,price:`$245.00`,change:`-1.2%`},{ticker:`META`,price:`$515.40`,change:`+3.1%`},{ticker:`JPM`,price:`$198.20`,change:`-0.3%`},{ticker:`V`,price:`$275.60`,change:`+0.7%`},{ticker:`BTC`,price:`$46,820`,change:`+5.4%`},{ticker:`ETH`,price:`$3,120`,change:`+3.8%`}],density:`compact`,page:1,pageSize:10}},m={render:()=>{let[e,t]=(0,o.useState)(1);return(0,s.jsx)(a,{columns:[{key:`id`,header:`ID`},{key:`date`,header:`Date`,sortable:!0},{key:`description`,header:`Description`},{key:`amount`,header:`Amount`,sortable:!0}],data:Array.from({length:23},(e,t)=>({id:`TXN-${1e3+t}`,date:new Date(2025,4,10-t).toLocaleDateString(),description:`Transaction ${t+1}`,amount:t%3==0?`+$${(t*100+50).toFixed(2)}`:`-$${(t*25+10).toFixed(2)}`})).slice((e-1)*5,e*5),page:e,pageSize:5,onPageChange:t})}},h={args:{columns:[{key:`name`,header:`Name`},{key:`value`,header:`Value`}],data:[]}},g={args:{columns:[{key:`name`,header:`Name`},{key:`status`,header:`Status`,render:e=>(0,s.jsx)(`span`,{className:`px-2 py-0.5 rounded-full text-xs ${e===`Active`?`bg-green-100 text-green-700`:e===`Inactive`?`bg-gray-100 text-gray-500`:`bg-red-100 text-red-700`}`,children:e})},{key:`button`,header:``,render:(e,t)=>(0,s.jsx)(`button`,{onClick:()=>alert(`Row: ${t.name}`),className:`px-2 py-1 text-xs bg-blue-600 text-white rounded-lg`,children:`View`})}],data:[{name:`Checking Account`,status:`Active`},{name:`Savings Account`,status:`Active`},{name:`Credit Card`,status:`Frozen`},{name:`Investment`,status:`Inactive`}]}},_={parameters:{themes:{themeOverride:`dark`}},args:{columns:[{key:`name`,header:`Asset`,sortable:!0},{key:`balance`,header:`Balance`},{key:`apy`,header:`APY`}],data:[{name:`High-Yield Savings`,balance:`$45,000`,apy:`4.5%`},{name:`Checking`,balance:`$8,200`,apy:`0.1%`},{name:`CD 6-Month`,balance:`$25,000`,apy:`5.2%`}]}},v={args:{columns:[`Name`,`Email`,`Role`,`Status`],rows:[[`Cesar Ruiz`,`cesar@finflow.com`,`Admin`,`Active`],[`Ana Lopez`,`ana@finflow.com`,`Editor`,`Active`],[`Carlos Mendez`,`carlos@finflow.com`,`Viewer`,`Inactive`],[`Sofia Torres`,`sofia@finflow.com`,`Editor`,`Active`],[`Miguel Santos`,`miguel@finflow.com`,`Viewer`,`Pending`]]}},y={args:{columns:[`Date`,`Description`,`Amount`,`Category`],rows:[[`May 11, 2026`,`Amazon.com`,`$129.99`,`Shopping`],[`May 10, 2026`,`Starbucks Coffee`,`$5.75`,`Food & Drink`],[`May 10, 2026`,`Uber Ride`,`$24.50`,`Transport`],[`May 09, 2026`,`Netflix Subscription`,`$15.99`,`Entertainment`],[`May 08, 2026`,`Payroll Deposit`,`$4,500.00`,`Income`]]}},b={args:{columns:[`Name`,`Email`,`Role`,`Status`],rows:[],emptyMessage:`No users found matching your search criteria.`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'name',
      header: 'Name',
      sortable: true
    }, {
      key: 'ticker',
      header: 'Ticker'
    }, {
      key: 'price',
      header: 'Price',
      sortable: true
    }, {
      key: 'change',
      header: 'Change',
      sortable: true
    }],
    data: [{
      name: 'Apple Inc.',
      ticker: 'AAPL',
      price: '$178.50',
      change: '+2.3%'
    }, {
      name: 'Microsoft Corp.',
      ticker: 'MSFT',
      price: '$425.20',
      change: '+1.5%'
    }, {
      name: 'NVIDIA Corp.',
      ticker: 'NVDA',
      price: '$880.10',
      change: '+4.2%'
    }, {
      name: 'Amazon.com',
      ticker: 'AMZN',
      price: '$185.30',
      change: '-0.8%'
    }, {
      name: 'Tesla Inc.',
      ticker: 'TSLA',
      price: '$245.00',
      change: '-1.2%'
    }]
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'date',
      header: 'Date',
      sortable: true
    }, {
      key: 'description',
      header: 'Description'
    }, {
      key: 'category',
      header: 'Category'
    }, {
      key: 'amount',
      header: 'Amount',
      sortable: true
    }],
    data: [{
      date: 'May 10',
      description: 'Amazon Purchase',
      category: 'Shopping',
      amount: '-$89.99'
    }, {
      date: 'May 9',
      description: 'Uber Ride',
      category: 'Transport',
      amount: '-$24.50'
    }, {
      date: 'May 8',
      description: 'Salary Deposit',
      category: 'Income',
      amount: '+$4,500.00'
    }, {
      date: 'May 7',
      description: 'Netflix',
      category: 'Entertainment',
      amount: '-$15.99'
    }, {
      date: 'May 6',
      description: 'Starbucks Coffee',
      category: 'Dining',
      amount: '-$5.75'
    }, {
      date: 'May 5',
      description: 'Electric Bill',
      category: 'Utilities',
      amount: '-$134.50'
    }, {
      date: 'May 4',
      description: 'Dividend Payment',
      category: 'Investment Income',
      amount: '+$45.00'
    }, {
      date: 'May 3',
      description: 'Apple Store',
      category: 'Shopping',
      amount: '-$999.00'
    }],
    striped: true,
    hoverable: true
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sortKey, setSortKey] = useState<string>('name');
    const [sortDir, setSortDir] = useState<'asc' | 'desc'>('asc');
    const data = [{
      name: 'Alice Johnson',
      role: 'Admin',
      status: 'Active',
      lastLogin: '2m ago'
    }, {
      name: 'Bob Smith',
      role: 'User',
      status: 'Active',
      lastLogin: '1h ago'
    }, {
      name: 'Carol White',
      role: 'Manager',
      status: 'Inactive',
      lastLogin: '3d ago'
    }, {
      name: 'David Brown',
      role: 'User',
      status: 'Active',
      lastLogin: '5m ago'
    }, {
      name: 'Eve Davis',
      role: 'Admin',
      status: 'Suspended',
      lastLogin: '2w ago'
    }];
    const sorted = [...data].sort((a, b) => {
      const aVal = a[sortKey as keyof typeof a];
      const bVal = b[sortKey as keyof typeof b];
      return sortDir === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    });
    return <Table columns={[{
      key: 'name',
      header: 'Name',
      sortable: true
    }, {
      key: 'role',
      header: 'Role',
      sortable: true
    }, {
      key: 'status',
      header: 'Status',
      sortable: true
    }, {
      key: 'lastLogin',
      header: 'Last Login',
      sortable: true
    }]} data={sorted} onSortChange={(key, dir) => {
      setSortKey(String(key));
      setSortDir(dir);
    }} />;
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'name',
      header: 'Name'
    }, {
      key: 'ticker',
      header: 'Ticker'
    }, {
      key: 'shares',
      header: 'Shares'
    }, {
      key: 'value',
      header: 'Value'
    }],
    data: [{
      name: 'Apple Inc.',
      ticker: 'AAPL',
      shares: 50,
      value: '$8,925'
    }, {
      name: 'Microsoft Corp.',
      ticker: 'MSFT',
      shares: 30,
      value: '$12,756'
    }, {
      name: 'NVIDIA Corp.',
      ticker: 'NVDA',
      shares: 15,
      value: '$13,202'
    }, {
      name: 'Amazon.com',
      ticker: 'AMZN',
      shares: 25,
      value: '$4,633'
    }, {
      name: 'Tesla Inc.',
      ticker: 'TSLA',
      shares: 20,
      value: '$4,900'
    }],
    selectable: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'ticker',
      header: 'Ticker'
    }, {
      key: 'price',
      header: 'Price'
    }, {
      key: 'change',
      header: 'Change'
    }],
    data: [{
      ticker: 'AAPL',
      price: '$178.50',
      change: '+2.3%'
    }, {
      ticker: 'MSFT',
      price: '$425.20',
      change: '+1.5%'
    }, {
      ticker: 'NVDA',
      price: '$880.10',
      change: '+4.2%'
    }, {
      ticker: 'GOOGL',
      price: '$175.80',
      change: '+0.9%'
    }, {
      ticker: 'TSLA',
      price: '$245.00',
      change: '-1.2%'
    }, {
      ticker: 'META',
      price: '$515.40',
      change: '+3.1%'
    }, {
      ticker: 'JPM',
      price: '$198.20',
      change: '-0.3%'
    }, {
      ticker: 'V',
      price: '$275.60',
      change: '+0.7%'
    }, {
      ticker: 'BTC',
      price: '$46,820',
      change: '+5.4%'
    }, {
      ticker: 'ETH',
      price: '$3,120',
      change: '+3.8%'
    }],
    density: 'compact',
    page: 1,
    pageSize: 10
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 5;
    const allData = Array.from({
      length: 23
    }, (_, i) => ({
      id: \`TXN-\${1000 + i}\`,
      date: new Date(2025, 4, 10 - i).toLocaleDateString(),
      description: \`Transaction \${i + 1}\`,
      amount: i % 3 === 0 ? \`+$\${(i * 100 + 50).toFixed(2)}\` : \`-$\${(i * 25 + 10).toFixed(2)}\`
    }));
    const pageData = allData.slice((page - 1) * pageSize, page * pageSize);
    return <Table columns={[{
      key: 'id',
      header: 'ID'
    }, {
      key: 'date',
      header: 'Date',
      sortable: true
    }, {
      key: 'description',
      header: 'Description'
    }, {
      key: 'amount',
      header: 'Amount',
      sortable: true
    }]} data={pageData} page={page} pageSize={pageSize} onPageChange={setPage} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'name',
      header: 'Name'
    }, {
      key: 'value',
      header: 'Value'
    }],
    data: []
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'name',
      header: 'Name'
    }, {
      key: 'status',
      header: 'Status',
      render: v => <span className={\`px-2 py-0.5 rounded-full text-xs \${v === 'Active' ? 'bg-green-100 text-green-700' : v === 'Inactive' ? 'bg-gray-100 text-gray-500' : 'bg-red-100 text-red-700'}\`}>{v}</span>
    }, {
      key: 'button',
      header: '',
      render: (_, row) => <button onClick={() => alert(\`Row: \${(row as any).name}\`)} className="px-2 py-1 text-xs bg-blue-600 text-white rounded-lg">View</button>
    }],
    data: [{
      name: 'Checking Account',
      status: 'Active'
    }, {
      name: 'Savings Account',
      status: 'Active'
    }, {
      name: 'Credit Card',
      status: 'Frozen'
    }, {
      name: 'Investment',
      status: 'Inactive'
    }]
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    columns: [{
      key: 'name',
      header: 'Asset',
      sortable: true
    }, {
      key: 'balance',
      header: 'Balance'
    }, {
      key: 'apy',
      header: 'APY'
    }],
    data: [{
      name: 'High-Yield Savings',
      balance: '$45,000',
      apy: '4.5%'
    }, {
      name: 'Checking',
      balance: '$8,200',
      apy: '0.1%'
    }, {
      name: 'CD 6-Month',
      balance: '$25,000',
      apy: '5.2%'
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    columns: ['Name', 'Email', 'Role', 'Status'],
    rows: [['Cesar Ruiz', 'cesar@finflow.com', 'Admin', 'Active'], ['Ana Lopez', 'ana@finflow.com', 'Editor', 'Active'], ['Carlos Mendez', 'carlos@finflow.com', 'Viewer', 'Inactive'], ['Sofia Torres', 'sofia@finflow.com', 'Editor', 'Active'], ['Miguel Santos', 'miguel@finflow.com', 'Viewer', 'Pending']]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    columns: ['Date', 'Description', 'Amount', 'Category'],
    rows: [['May 11, 2026', 'Amazon.com', '$129.99', 'Shopping'], ['May 10, 2026', 'Starbucks Coffee', '$5.75', 'Food & Drink'], ['May 10, 2026', 'Uber Ride', '$24.50', 'Transport'], ['May 09, 2026', 'Netflix Subscription', '$15.99', 'Entertainment'], ['May 08, 2026', 'Payroll Deposit', '$4,500.00', 'Income']]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    columns: ['Name', 'Email', 'Role', 'Status'],
    rows: [],
    emptyMessage: 'No users found matching your search criteria.'
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Transactions`,`Sortable`,`Selectable`,`Compact`,`Paginated`,`Empty`,`CustomRender`,`DarkMode`,`WithData`,`FinancialData`,`EmptyTable`]}))();export{p as Compact,g as CustomRender,_ as DarkMode,l as Default,h as Empty,b as EmptyTable,y as FinancialData,m as Paginated,f as Selectable,d as Sortable,u as Transactions,v as WithData,x as __namedExportsOrder,c as default};