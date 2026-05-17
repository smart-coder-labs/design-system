import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-524CuMck.js";import{Tr as r,Yn as i,er as a,p as o,s,t as c}from"./lucide-react-vxYowq1d.js";import{n as l,t as u}from"./utils-ijcE-ZHT.js";import{t as d}from"./jsx-runtime-DaLCRA3n.js";import{l as f,s as p,t as m}from"./es-SPnJQbAq.js";var h,g,_,v,y=e((()=>{h=t(n()),m(),l(),c(),g=d(),_=[{code:`USD`,symbol:`$`,name:`US Dollar`,flag:`🇺🇸`},{code:`MXN`,symbol:`$`,name:`Mexican Peso`,flag:`🇲🇽`},{code:`EUR`,symbol:`€`,name:`Euro`,flag:`🇪🇺`}],v=({recipients:e=[],currencies:t=_,availableBalance:n=0,defaultCurrency:c=`USD`,onSubmit:l,className:d=``})=>{let[m,v]=(0,h.useState)(``),[y,b]=(0,h.useState)(c),[x,S]=(0,h.useState)(``),[C,w]=(0,h.useState)(``),[T,E]=(0,h.useState)(!1),[D,O]=(0,h.useState)(!1),k=parseFloat(m)||0,A=k>n,j=k>0&&x&&!A,M=t.find(e=>e.code===y)||t[0],N=e.find(e=>e.id===x);return(0,g.jsxs)(p.form,{className:u(`bg-surface-primary rounded-2xl border border-border-primary shadow-sm p-6`,d),onSubmit:e=>{e.preventDefault(),j&&l?.({recipientId:x,amount:k,currency:y,concept:C})},initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.3,ease:[.16,1,.3,1]},children:[(0,g.jsx)(`h3`,{className:`text-base font-bold text-text-primary mb-5`,children:`Send Money`}),(0,g.jsxs)(`div`,{className:`mb-5`,children:[(0,g.jsx)(`label`,{className:`text-xs font-medium text-text-secondary mb-1.5 block`,children:`Amount`}),(0,g.jsxs)(`div`,{className:u(`flex items-center border-2 rounded-xl overflow-hidden transition-colors duration-200 transition-apple`,A?`border-status-error`:`border-border-primary focus-within:border-accent-blue`),children:[(0,g.jsxs)(`div`,{className:`relative`,children:[(0,g.jsxs)(`button`,{type:`button`,onClick:()=>E(e=>!e),className:`flex items-center gap-1.5 px-4 py-3.5 bg-surface-secondary/50 text-sm font-semibold text-text-primary hover:bg-surface-secondary transition-apple border-r border-border-primary`,children:[(0,g.jsx)(`span`,{children:M.flag}),(0,g.jsx)(`span`,{children:M.code}),(0,g.jsx)(a,{className:`w-3 h-3 text-text-tertiary`})]}),(0,g.jsx)(f,{children:T&&(0,g.jsx)(p.div,{className:`absolute top-full left-0 mt-1 bg-surface-primary border border-border-primary rounded-xl shadow-lg z-10 overflow-hidden min-w-[180px]`,initial:{opacity:0,y:-4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},children:t.map(e=>(0,g.jsxs)(`button`,{type:`button`,onClick:()=>{b(e.code),E(!1)},className:u(`w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left hover:bg-surface-secondary transition-apple`,e.code===y&&`bg-accent-blue/5 text-accent-blue`),children:[(0,g.jsx)(`span`,{children:e.flag}),(0,g.jsx)(`span`,{className:`font-semibold`,children:e.code}),(0,g.jsx)(`span`,{className:`text-text-tertiary text-xs`,children:e.name})]},e.code))})})]}),(0,g.jsx)(`input`,{type:`number`,inputMode:`decimal`,placeholder:`0.00`,value:m,onChange:e=>v(e.target.value),className:`flex-1 px-4 py-3.5 text-lg font-bold text-text-primary bg-transparent outline-none tabular-nums [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`,"aria-label":`Transfer amount`})]}),(0,g.jsxs)(`div`,{className:`flex items-center justify-between mt-2`,children:[(0,g.jsxs)(`span`,{className:`text-xs text-text-tertiary flex items-center gap-1`,children:[(0,g.jsx)(s,{className:`w-3 h-3`}),` Available: `,(e=>new Intl.NumberFormat(`en-US`,{style:`currency`,currency:y,minimumFractionDigits:2}).format(e))(n)]}),(0,g.jsx)(f,{children:A&&(0,g.jsxs)(p.span,{initial:{opacity:0,x:10},animate:{opacity:1,x:0},exit:{opacity:0},className:`flex items-center gap-1 text-xs font-semibold text-status-error`,children:[(0,g.jsx)(i,{className:`w-3 h-3`}),` Insufficient funds`]})})]})]}),(0,g.jsxs)(`div`,{className:`mb-5`,children:[(0,g.jsx)(`label`,{className:`text-xs font-medium text-text-secondary mb-1.5 block`,children:`Recipient`}),(0,g.jsxs)(`div`,{className:`relative`,children:[(0,g.jsxs)(`button`,{type:`button`,onClick:()=>O(e=>!e),className:u(`w-full flex items-center gap-2.5 pl-10 pr-4 py-3 text-sm font-medium rounded-xl border-2 bg-surface-primary transition-apple text-left`,D?`border-accent-blue`:`border-border-primary`,x?`text-text-primary`:`text-text-tertiary`),children:[(0,g.jsx)(o,{className:`absolute left-3.5 w-4 h-4 text-text-tertiary shrink-0`}),(0,g.jsx)(`span`,{className:`flex-1 truncate`,children:N?`${N.name}${N.bank?` (${N.bank})`:``}`:`Select a recipient`}),(0,g.jsx)(a,{className:u(`w-4 h-4 text-text-tertiary shrink-0 transition-transform duration-200`,D&&`rotate-180`)})]}),(0,g.jsx)(f,{children:D&&(0,g.jsx)(p.div,{initial:{opacity:0,y:-6,scale:.98},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-6,scale:.98},transition:{duration:.15},className:`absolute z-20 w-full mt-1.5 bg-surface-primary border border-border-primary rounded-xl shadow-lg overflow-hidden`,children:e.map(e=>(0,g.jsxs)(`button`,{type:`button`,onClick:()=>{S(e.id),O(!1)},className:u(`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors`,e.id===x?`bg-accent-blue/10 text-accent-blue font-medium`:`text-text-primary hover:bg-surface-secondary`),children:[(0,g.jsx)(`div`,{className:`w-7 h-7 rounded-full bg-surface-secondary flex items-center justify-center shrink-0 text-xs font-bold text-text-secondary`,children:e.name[0]}),(0,g.jsxs)(`div`,{className:`min-w-0`,children:[(0,g.jsx)(`p`,{className:`font-medium truncate`,children:e.name}),e.bank&&(0,g.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:e.bank})]})]},e.id))})})]})]}),(0,g.jsxs)(`div`,{className:`mb-6`,children:[(0,g.jsx)(`label`,{className:`text-xs font-medium text-text-secondary mb-1.5 block`,children:`Concept (optional)`}),(0,g.jsx)(`input`,{type:`text`,placeholder:`e.g., Rent payment`,value:C,onChange:e=>w(e.target.value),maxLength:100,className:`w-full px-4 py-3 text-sm rounded-xl border-2 border-border-primary bg-surface-primary text-text-primary focus:border-accent-blue outline-none transition-apple focus-visible:ring-2 focus-visible:ring-accent-blue`})]}),(0,g.jsxs)(p.button,{type:`submit`,disabled:!j,className:u(`w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold transition-apple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue`,j?`bg-accent-blue text-white hover:bg-accent-blue-hover active:bg-accent-blue-active`:`bg-surface-secondary text-text-tertiary cursor-not-allowed`),whileTap:j?{scale:.98}:{},children:[`Continue `,(0,g.jsx)(r,{className:`w-4 h-4`})]})]})},v.displayName=`TransferForm`,v.__docgenInfo={description:``,methods:[],displayName:`TransferForm`,props:{recipients:{required:!1,tsType:{name:`Array`,elements:[{name:`TransferRecipient`}],raw:`TransferRecipient[]`},description:``,defaultValue:{value:`[]`,computed:!1}},currencies:{required:!1,tsType:{name:`Array`,elements:[{name:`CurrencyOption`}],raw:`CurrencyOption[]`},description:``,defaultValue:{value:`[
    { code: 'USD', symbol: '$', name: 'US Dollar', flag: '🇺🇸' },
    { code: 'MXN', symbol: '$', name: 'Mexican Peso', flag: '🇲🇽' },
    { code: 'EUR', symbol: '€', name: 'Euro', flag: '🇪🇺' },
]`,computed:!1}},availableBalance:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},defaultCurrency:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'USD'`,computed:!1}},onSubmit:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(data: { recipientId: string; amount: number; currency: string; concept: string }) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ recipientId: string; amount: number; currency: string; concept: string }`,signature:{properties:[{key:`recipientId`,value:{name:`string`,required:!0}},{key:`amount`,value:{name:`number`,required:!0}},{key:`currency`,value:{name:`string`,required:!0}},{key:`concept`,value:{name:`string`,required:!0}}]}},name:`data`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),b,x,S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{y(),b={title:`Fintech/Payments/TransferForm`,component:v,tags:[`autodocs`],parameters:{docs:{description:{component:`A fintech-style money transfer form with amount input, currency selector, recipient dropdown, and optional concept field. Includes real-time balance validation and insufficient fund warnings.`}}}},x=[{id:`1`,name:`Alice Johnson`,accountNumber:`****1234`,bank:`Chase Bank`},{id:`2`,name:`Bob Smith`,accountNumber:`****5678`,bank:`Bank of America`},{id:`3`,name:`Carol White`,accountNumber:`****9012`,bank:`Wells Fargo`}],S=[{code:`USD`,symbol:`$`,name:`US Dollar`,flag:`🇺🇸`},{code:`EUR`,symbol:`€`,name:`Euro`,flag:`🇪🇺`},{code:`GBP`,symbol:`£`,name:`British Pound`,flag:`🇬🇧`},{code:`MXN`,symbol:`MX$`,name:`Mexican Peso`,flag:`🇲🇽`}],C={args:{recipients:x,currencies:S,availableBalance:12500,defaultCurrency:`USD`,onSubmit:e=>alert(`Transfer: ${e.amount} ${e.currency} to ${e.recipientId} — "${e.concept}"`)}},w={args:{recipients:x,currencies:S,availableBalance:350,defaultCurrency:`USD`,onSubmit:e=>alert(`Transfer: ${e.amount} ${e.currency} to ${e.recipientId}`)}},T={args:{recipients:[{id:`1`,name:`María García`,accountNumber:`ES****1234`,bank:`Banco Santander`},{id:`2`,name:`Pierre Dubois`,accountNumber:`FR****5678`,bank:`BNP Paribas`},{id:`3`,name:`Hans Müller`,accountNumber:`DE****9012`,bank:`Deutsche Bank`}],currencies:[{code:`USD`,symbol:`$`,name:`US Dollar`,flag:`🇺🇸`},{code:`EUR`,symbol:`€`,name:`Euro`,flag:`🇪🇺`},{code:`GBP`,symbol:`£`,name:`British Pound`,flag:`🇬🇧`},{code:`MXN`,symbol:`MX$`,name:`Mexican Peso`,flag:`🇲🇽`},{code:`JPY`,symbol:`¥`,name:`Japanese Yen`,flag:`🇯🇵`},{code:`CHF`,symbol:`Fr`,name:`Swiss Franc`,flag:`🇨🇭`}],availableBalance:25e3,defaultCurrency:`EUR`,onSubmit:e=>alert(`International transfer: ${e.amount} ${e.currency}`)}},E={args:{recipients:[],currencies:S,availableBalance:5e3,defaultCurrency:`USD`,onSubmit:e=>alert(`Transfer: ${e.amount} ${e.currency}`)}},D={args:{recipients:x,currencies:S,availableBalance:0,defaultCurrency:`USD`,onSubmit:e=>alert(`Transfer: ${e.amount} ${e.currency}`)}},O={args:{recipients:x,currencies:S,availableBalance:999999.99,defaultCurrency:`USD`,onSubmit:e=>alert(`Transfer: ${e.amount} ${e.currency}`)}},k={args:{recipients:x,currencies:[{code:`USD`,symbol:`$`,name:`US Dollar`,flag:`🇺🇸`}],availableBalance:8200,defaultCurrency:`USD`,onSubmit:e=>alert(`Transfer: ${e.amount} ${e.currency}`)}},A={parameters:{viewport:{defaultViewport:`mobile1`}},args:{recipients:x,currencies:S,availableBalance:5e3,defaultCurrency:`USD`,onSubmit:e=>alert(`Transfer: ${e.amount} ${e.currency}`)}},j={args:{recipients:x,currencies:[{code:`USD`,symbol:`$`,name:`US Dollar`,flag:`🇺🇸`},{code:`USDC`,symbol:`USDC`,name:`USD Coin`}],availableBalance:1e4,defaultCurrency:`USDC`,onSubmit:e=>alert(`Crypto transfer: ${e.amount} ${e.currency}`)}},M={parameters:{themes:{default:`dark`}},args:{recipients:x,currencies:S,availableBalance:2500,defaultCurrency:`USD`,onSubmit:e=>alert(`Transfer: ${e.amount}`)}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    recipients: defaultRecipients,
    currencies: defaultCurrencies,
    availableBalance: 12500.00,
    defaultCurrency: 'USD',
    onSubmit: data => alert(\`Transfer: \${data.amount} \${data.currency} to \${data.recipientId} — "\${data.concept}"\`)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    recipients: defaultRecipients,
    currencies: defaultCurrencies,
    availableBalance: 350.00,
    defaultCurrency: 'USD',
    onSubmit: data => alert(\`Transfer: \${data.amount} \${data.currency} to \${data.recipientId}\`)
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    recipients: [{
      id: '1',
      name: 'María García',
      accountNumber: 'ES****1234',
      bank: 'Banco Santander'
    }, {
      id: '2',
      name: 'Pierre Dubois',
      accountNumber: 'FR****5678',
      bank: 'BNP Paribas'
    }, {
      id: '3',
      name: 'Hans Müller',
      accountNumber: 'DE****9012',
      bank: 'Deutsche Bank'
    }],
    currencies: [{
      code: 'USD',
      symbol: '$',
      name: 'US Dollar',
      flag: '🇺🇸'
    }, {
      code: 'EUR',
      symbol: '€',
      name: 'Euro',
      flag: '🇪🇺'
    }, {
      code: 'GBP',
      symbol: '£',
      name: 'British Pound',
      flag: '🇬🇧'
    }, {
      code: 'MXN',
      symbol: 'MX$',
      name: 'Mexican Peso',
      flag: '🇲🇽'
    }, {
      code: 'JPY',
      symbol: '¥',
      name: 'Japanese Yen',
      flag: '🇯🇵'
    }, {
      code: 'CHF',
      symbol: 'Fr',
      name: 'Swiss Franc',
      flag: '🇨🇭'
    }],
    availableBalance: 25000.00,
    defaultCurrency: 'EUR',
    onSubmit: data => alert(\`International transfer: \${data.amount} \${data.currency}\`)
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    recipients: [],
    currencies: defaultCurrencies,
    availableBalance: 5000.00,
    defaultCurrency: 'USD',
    onSubmit: data => alert(\`Transfer: \${data.amount} \${data.currency}\`)
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    recipients: defaultRecipients,
    currencies: defaultCurrencies,
    availableBalance: 0,
    defaultCurrency: 'USD',
    onSubmit: data => alert(\`Transfer: \${data.amount} \${data.currency}\`)
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    recipients: defaultRecipients,
    currencies: defaultCurrencies,
    availableBalance: 999999.99,
    defaultCurrency: 'USD',
    onSubmit: data => alert(\`Transfer: \${data.amount} \${data.currency}\`)
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    recipients: defaultRecipients,
    currencies: [{
      code: 'USD',
      symbol: '$',
      name: 'US Dollar',
      flag: '🇺🇸'
    }],
    availableBalance: 8200.00,
    defaultCurrency: 'USD',
    onSubmit: data => alert(\`Transfer: \${data.amount} \${data.currency}\`)
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    recipients: defaultRecipients,
    currencies: defaultCurrencies,
    availableBalance: 5000.00,
    defaultCurrency: 'USD',
    onSubmit: data => alert(\`Transfer: \${data.amount} \${data.currency}\`)
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    recipients: defaultRecipients,
    currencies: [{
      code: 'USD',
      symbol: '$',
      name: 'US Dollar',
      flag: '🇺🇸'
    }, {
      code: 'USDC',
      symbol: 'USDC',
      name: 'USD Coin'
    }],
    availableBalance: 10000.00,
    defaultCurrency: 'USDC',
    onSubmit: data => alert(\`Crypto transfer: \${data.amount} \${data.currency}\`)
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      default: 'dark'
    }
  },
  args: {
    recipients: defaultRecipients,
    currencies: defaultCurrencies,
    availableBalance: 2500.00,
    defaultCurrency: 'USD',
    onSubmit: data => alert(\`Transfer: \${data.amount}\`)
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`WithLowBalance`,`International`,`EmptyRecipients`,`ZeroBalance`,`LargeBalance`,`SingleCurrency`,`MobileView`,`NoConcept`,`DarkMode`]}))();export{M as DarkMode,C as Default,E as EmptyRecipients,T as International,O as LargeBalance,A as MobileView,j as NoConcept,k as SingleCurrency,w as WithLowBalance,D as ZeroBalance,N as __namedExportsOrder,b as default};