import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-524CuMck.js";import{$n as r,Ar as i,Cr as a,Qn as o,ln as s,t as c}from"./lucide-react-vxYowq1d.js";import{n as l,t as u}from"./utils-ijcE-ZHT.js";import{t as d}from"./jsx-runtime-DaLCRA3n.js";import{l as f,s as p,t as m}from"./es-SPnJQbAq.js";var h,g,_,v=e((()=>{h=t(n()),m(),c(),l(),g=d(),_=({wallets:e,className:t,onAddFunds:n,onSend:c})=>{let[l,d]=(0,h.useState)(0),m=()=>{d(t=>(t+1)%e.length)},_=()=>{d(t=>t===0?e.length-1:t-1)};if(!e||e.length===0)return null;let v=e[l];return(0,g.jsxs)(`div`,{className:u(`relative w-full max-w-sm rounded-[2rem] p-6 bg-surface-primary border border-border-primary shadow-xl`,t),children:[(0,g.jsxs)(`div`,{className:`flex items-center justify-between mb-8`,children:[(0,g.jsxs)(`h3`,{className:`text-lg font-semibold flex items-center gap-2 text-text-primary`,children:[(0,g.jsx)(s,{className:`w-5 h-5 text-blue-500`}),`Global Wallets`]}),(0,g.jsxs)(`div`,{className:`flex gap-2`,children:[(0,g.jsx)(`button`,{onClick:_,className:`p-1.5 rounded-full bg-background-secondary hover:bg-background-secondary transition`,children:(0,g.jsx)(r,{className:`w-4 h-4 text-text-secondary`})}),(0,g.jsx)(`button`,{onClick:m,className:`p-1.5 rounded-full bg-background-secondary hover:bg-background-secondary transition`,children:(0,g.jsx)(o,{className:`w-4 h-4 text-text-secondary`})})]})]}),(0,g.jsx)(`div`,{className:`relative h-48 mb-6`,children:(0,g.jsx)(f,{mode:`popLayout`,children:(0,g.jsxs)(p.div,{initial:{opacity:0,x:50,scale:.95},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:-50,scale:.95},transition:{type:`spring`,stiffness:300,damping:30},className:u(`absolute inset-0 rounded-2xl p-6 flex flex-col justify-between overflow-hidden shadow-lg`,v.isLocal?`bg-gradient-to-br from-zinc-800 to-zinc-950 text-white`:v.color?`bg-gradient-to-br ${v.color} text-white`:`bg-gradient-to-br from-indigo-500 to-purple-600 text-white`),children:[!v.isLocal&&(0,g.jsx)(`div`,{className:`absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-2xl`}),(0,g.jsxs)(`div`,{className:`flex justify-between items-start relative z-10`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,g.jsx)(`span`,{className:`text-3xl`,children:v.flag}),(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`p`,{className:`text-sm opacity-80 font-medium`,children:v.isLocal?`Local Account`:`Foreign Wallet`}),(0,g.jsx)(`p`,{className:`font-bold tracking-wide`,children:v.currencyName})]})]}),(0,g.jsx)(`span`,{className:`font-mono text-sm opacity-60 mix-blend-overlay`,children:`VISA`})]}),(0,g.jsxs)(`div`,{className:`relative z-10`,children:[(0,g.jsx)(`p`,{className:`text-xs uppercase tracking-wider mb-1 opacity-70`,children:`Available Balance`}),(0,g.jsx)(`h2`,{className:`text-4xl font-bold tracking-tight`,children:new Intl.NumberFormat(`en-US`,{style:`currency`,currency:v.currencyCode}).format(v.balance)})]})]},v.id)})}),(0,g.jsxs)(`div`,{className:`flex gap-4`,children:[(0,g.jsxs)(p.button,{whileTap:{scale:.95},onClick:()=>n?.(v.id),className:`flex-1 py-3 px-2 sm:px-4 rounded-xl bg-accent-blue hover:bg-accent-blue-hover text-white font-semibold flex items-center justify-center gap-2 shadow-md shadow-accent-blue/20 transition-colors cursor-pointer whitespace-nowrap`,children:[(0,g.jsx)(i,{className:`w-4 h-4 sm:w-5 sm:h-5 shrink-0`}),(0,g.jsx)(`span`,{className:`text-sm sm:text-base`,children:`Add Funds`})]}),(0,g.jsxs)(p.button,{whileTap:{scale:.95},onClick:()=>c?.(v.id),className:`flex-1 py-3 px-2 sm:px-4 rounded-xl bg-background-secondary hover:bg-border-primary/30 text-text-primary font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer whitespace-nowrap`,children:[(0,g.jsx)(a,{className:`w-4 h-4 sm:w-5 sm:h-5 shrink-0`}),(0,g.jsx)(`span`,{className:`text-sm sm:text-base`,children:`Send`})]})]}),(0,g.jsx)(`div`,{className:`mt-6 flex justify-center gap-1.5`,children:e.map((e,t)=>(0,g.jsx)(`div`,{className:u(`h-1.5 rounded-full transition-all duration-300`,t===l?`w-6 bg-accent-blue`:`w-1.5 bg-zinc-300 dark:bg-zinc-700`)},e.id))})]})},_.displayName=`MultiCurrencyWallet`,_.__docgenInfo={description:``,methods:[],displayName:`MultiCurrencyWallet`,props:{wallets:{required:!0,tsType:{name:`Array`,elements:[{name:`WalletBalance`}],raw:`WalletBalance[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``},onAddFunds:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},onSend:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``}}}})),y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{n(),v(),y=d(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,x={title:`Fintech/FX & International Payments/MultiCurrencyWallet`,component:_,tags:[`autodocs`],parameters:{layout:`centered`}},S={args:{balances:[{currency:`USD`,amount:12430.5,symbol:`$`,name:`US Dollar`},{currency:`EUR`,amount:3200,symbol:`€`,name:`Euro`},{currency:`BTC`,amount:.5482,symbol:`₿`,name:`Bitcoin`},{currency:`ETH`,amount:3.42,symbol:`Ξ`,name:`Ethereum`}],onSelectCurrency:b(`select`)}},C={args:{balances:[{currency:`USD`,amount:5e4,symbol:`$`,name:`US Dollar`}],onSelectCurrency:b(`select`)}},w={args:{balances:[{currency:`USD`,amount:45e3,symbol:`$`,name:`US Dollar`},{currency:`EUR`,amount:12500,symbol:`€`,name:`Euro`},{currency:`GBP`,amount:8900,symbol:`£`,name:`British Pound`},{currency:`BTC`,amount:.85,symbol:`₿`,name:`Bitcoin`},{currency:`ETH`,amount:12.5,symbol:`Ξ`,name:`Ethereum`},{currency:`SOL`,amount:150,symbol:`◎`,name:`Solana`},{currency:`MXN`,amount:85e3,symbol:`MX$`,name:`Mexican Peso`},{currency:`USDC`,amount:25e3,symbol:`$`,name:`USD Coin`}],onSelectCurrency:b(`select`)}},T={args:{balances:[{currency:`USD`,amount:45e3,symbol:`$`,name:`US Dollar`},{currency:`EUR`,amount:3200,symbol:`€`,name:`Euro`}],onSelectCurrency:b(`select`),onConvert:(e,t)=>console.log(`Convert:`,e,`to`,t)}},E={render:()=>(0,y.jsxs)(`div`,{className:`w-full max-w-md space-y-4`,children:[(0,y.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,y.jsx)(`h3`,{className:`text-sm font-bold text-text-primary`,children:`Travel Wallet`}),(0,y.jsx)(`span`,{className:`text-xs text-text-tertiary`,children:`Updated 2 min ago`})]}),(0,y.jsx)(_,{balances:[{currency:`USD`,amount:2500,symbol:`$`,name:`US Dollar`},{currency:`EUR`,amount:4200,symbol:`€`,name:`Euro`},{currency:`JPY`,amount:5e4,symbol:`¥`,name:`Japanese Yen`},{currency:`MXN`,amount:15e3,symbol:`MX$`,name:`Mexican Peso`}],onSelectCurrency:b(`select`),onConvert:b(`convert`)})]})},D={args:{balances:[],onSelectCurrency:b(`select`)}},O={args:{balances:[{currency:`BTC`,amount:.5482,symbol:`₿`,name:`Bitcoin`},{currency:`ETH`,amount:3.42,symbol:`Ξ`,name:`Ethereum`},{currency:`SOL`,amount:45.8,symbol:`◎`,name:`Solana`},{currency:`USDC`,amount:5e3,symbol:`$`,name:`USD Coin`,color:`#2775CA`}],onSelectCurrency:b(`select`)}},k={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,y.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,y.jsx)(e,{})})]},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    balances: [{
      currency: 'USD',
      amount: 12430.50,
      symbol: '$',
      name: 'US Dollar'
    }, {
      currency: 'EUR',
      amount: 3200.00,
      symbol: '€',
      name: 'Euro'
    }, {
      currency: 'BTC',
      amount: 0.5482,
      symbol: '₿',
      name: 'Bitcoin'
    }, {
      currency: 'ETH',
      amount: 3.42,
      symbol: 'Ξ',
      name: 'Ethereum'
    }],
    onSelectCurrency: action('select')
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    balances: [{
      currency: 'USD',
      amount: 50000,
      symbol: '$',
      name: 'US Dollar'
    }],
    onSelectCurrency: action('select')
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    balances: [{
      currency: 'USD',
      amount: 45000,
      symbol: '$',
      name: 'US Dollar'
    }, {
      currency: 'EUR',
      amount: 12500,
      symbol: '€',
      name: 'Euro'
    }, {
      currency: 'GBP',
      amount: 8900,
      symbol: '£',
      name: 'British Pound'
    }, {
      currency: 'BTC',
      amount: 0.85,
      symbol: '₿',
      name: 'Bitcoin'
    }, {
      currency: 'ETH',
      amount: 12.5,
      symbol: 'Ξ',
      name: 'Ethereum'
    }, {
      currency: 'SOL',
      amount: 150,
      symbol: '◎',
      name: 'Solana'
    }, {
      currency: 'MXN',
      amount: 85000,
      symbol: 'MX$',
      name: 'Mexican Peso'
    }, {
      currency: 'USDC',
      amount: 25000,
      symbol: '$',
      name: 'USD Coin'
    }],
    onSelectCurrency: action('select')
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    balances: [{
      currency: 'USD',
      amount: 45000,
      symbol: '$',
      name: 'US Dollar'
    }, {
      currency: 'EUR',
      amount: 3200,
      symbol: '€',
      name: 'Euro'
    }],
    onSelectCurrency: action('select'),
    onConvert: (from, to) => console.log('Convert:', from, 'to', to)
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-bold text-text-primary">Travel Wallet</h3>
        <span className="text-xs text-text-tertiary">Updated 2 min ago</span>
      </div>
      <MultiCurrencyWallet balances={[{
      currency: 'USD',
      amount: 2500,
      symbol: '$',
      name: 'US Dollar'
    }, {
      currency: 'EUR',
      amount: 4200,
      symbol: '€',
      name: 'Euro'
    }, {
      currency: 'JPY',
      amount: 50000,
      symbol: '¥',
      name: 'Japanese Yen'
    }, {
      currency: 'MXN',
      amount: 15000,
      symbol: 'MX$',
      name: 'Mexican Peso'
    }]} onSelectCurrency={action('select')} onConvert={action('convert')} />
    </div>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    balances: [],
    onSelectCurrency: action('select')
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    balances: [{
      currency: 'BTC',
      amount: 0.5482,
      symbol: '₿',
      name: 'Bitcoin'
    }, {
      currency: 'ETH',
      amount: 3.42,
      symbol: 'Ξ',
      name: 'Ethereum'
    }, {
      currency: 'SOL',
      amount: 45.8,
      symbol: '◎',
      name: 'Solana'
    }, {
      currency: 'USDC',
      amount: 5000,
      symbol: '$',
      name: 'USD Coin',
      color: '#2775CA'
    }],
    onSelectCurrency: action('select')
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A=[`Default`,`SingleCurrency`,`ManyCurrencies`,`WithConversion`,`TravelWallet`,`EmptyWallet`,`CryptoOnly`,`DarkMode`]}))();export{O as CryptoOnly,k as DarkMode,S as Default,D as EmptyWallet,w as ManyCurrencies,C as SingleCurrency,E as TravelWallet,T as WithConversion,A as __namedExportsOrder,x as default};