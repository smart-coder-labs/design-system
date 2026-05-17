import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-D15PU-2o.js";import{t as r}from"./jsx-runtime-DaLCRA3n.js";import{t as i}from"./Input-C7RUaUPn.js";import{t as a}from"./Input-CFZX86E0.js";import{n as o,t as s}from"./Button-DDMyFWlN.js";import{a as c,i as l,n as u,o as d,r as f}from"./Select-CeSKJQPE.js";import{t as p}from"./Select-CoSKmusd.js";var m,h,g,_,v,y,b=e((()=>{m=t(n()),s(),a(),p(),h=r(),g={equals:`Equals`,not_equals:`Not Equals`,contains:`Contains`,starts_with:`Starts With`,ends_with:`Ends With`,gt:`Greater Than`,lt:`Less Than`,gte:`Greater or Equal`,lte:`Less or Equal`},_={text:[`equals`,`not_equals`,`contains`,`starts_with`,`ends_with`],number:[`equals`,`not_equals`,`gt`,`lt`,`gte`,`lte`],date:[`equals`,`not_equals`,`gt`,`lt`,`gte`,`lte`],select:[`equals`,`not_equals`]},v=()=>Math.random().toString(36).substr(2,9),y=({fields:e,value:t,onChange:n,className:r=``})=>{let[a,s]=(0,m.useState)(t||{id:v(),combinator:`and`,rules:[]});(0,m.useEffect)(()=>{t&&s(t)},[t]);let p=e=>{s(e),n?.(e)},y=(e,t,n)=>{let r=i=>i.id===e?{...i,rules:i.rules.map(e=>`fieldId`in e&&e.id===t?{...e,...n}:e)}:{...i,rules:i.rules.map(e=>`combinator`in e?r(e):e)};p(r(a))},b=t=>{let n=r=>{if(r.id===t){let t=e[0];return{...r,rules:[...r.rules,{id:v(),fieldId:t.id,operator:_[t.type][0],value:``}]}}return{...r,rules:r.rules.map(e=>`combinator`in e?n(e):e)}};p(n(a))},x=e=>{let t=n=>n.id===e?{...n,rules:[...n.rules,{id:v(),combinator:`and`,rules:[]}]}:{...n,rules:n.rules.map(e=>`combinator`in e?t(e):e)};p(t(a))},S=(e,t)=>{let n=r=>r.id===e?{...r,rules:r.rules.filter(e=>!(`fieldId`in e&&e.id===t))}:{...r,rules:r.rules.map(e=>`combinator`in e?n(e):e)};p(n(a))},C=(e,t)=>{let n=r=>r.id===e?{...r,rules:r.rules.filter(e=>!(`combinator`in e&&e.id===t))}:{...r,rules:r.rules.map(e=>`combinator`in e?n(e):e)};p(n(a))},w=(e,t)=>{let n=r=>r.id===e?{...r,combinator:t}:{...r,rules:r.rules.map(e=>`combinator`in e?n(e):e)};p(n(a))},T=(t,n)=>{let r=e.find(e=>e.id===t.fieldId)||e[0],a=_[r.type]||[];return(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`,marginBottom:`8px`},children:[(0,h.jsx)(`div`,{style:{width:`150px`},children:(0,h.jsxs)(u,{value:t.fieldId,onValueChange:r=>{let i=e.find(e=>e.id===r);y(n,t.id,{fieldId:r,operator:_[i?.type||`text`][0],value:``})},children:[(0,h.jsx)(c,{children:(0,h.jsx)(d,{placeholder:`Select Field`})}),(0,h.jsx)(f,{children:e.map(e=>(0,h.jsx)(l,{value:e.id,children:e.label},e.id))})]})}),(0,h.jsx)(`div`,{style:{width:`150px`},children:(0,h.jsxs)(u,{value:t.operator,onValueChange:e=>y(n,t.id,{operator:e}),children:[(0,h.jsx)(c,{children:(0,h.jsx)(d,{placeholder:`Operator`})}),(0,h.jsx)(f,{children:a.map(e=>(0,h.jsx)(l,{value:e,children:g[e]},e))})]})}),(0,h.jsx)(`div`,{style:{flex:1},children:r.type===`select`&&r.options?(0,h.jsxs)(u,{value:t.value,onValueChange:e=>y(n,t.id,{value:e}),children:[(0,h.jsx)(c,{children:(0,h.jsx)(d,{placeholder:`Select Value`})}),(0,h.jsx)(f,{children:r.options.map(e=>(0,h.jsx)(l,{value:e.value,children:e.label},e.value))})]}):(0,h.jsx)(i,{type:r.type===`number`?`number`:r.type===`date`?`date`:`text`,value:t.value,onChange:e=>y(n,t.id,{value:e.target.value}),placeholder:`Value`})}),(0,h.jsx)(o,{variant:`ghost`,size:`sm`,onClick:()=>S(n,t.id),style:{color:`var(--color-accent-red)`},children:`✕`})]},t.id)},E=(e,t)=>(0,h.jsxs)(`div`,{style:{padding:`16px`,backgroundColor:`var(--color-background-secondary)`,borderRadius:`8px`,border:`1px solid var(--color-border-primary)`,display:`flex`,flexDirection:`column`,gap:`8px`,marginBottom:`8px`},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`,marginBottom:`8px`},children:[(0,h.jsxs)(`div`,{style:{display:`flex`,backgroundColor:`var(--color-background-primary)`,borderRadius:`4px`,padding:`2px`,border:`1px solid var(--color-border-secondary)`},children:[(0,h.jsx)(`button`,{onClick:()=>w(e.id,`and`),style:{padding:`4px 12px`,border:`none`,background:e.combinator===`and`?`var(--color-accent-blue)`:`transparent`,color:e.combinator===`and`?`#fff`:`var(--color-text-secondary)`,borderRadius:`4px`,cursor:`pointer`,fontSize:`12px`,fontWeight:`bold`},children:`AND`}),(0,h.jsx)(`button`,{onClick:()=>w(e.id,`or`),style:{padding:`4px 12px`,border:`none`,background:e.combinator===`or`?`var(--color-accent-blue)`:`transparent`,color:e.combinator===`or`?`#fff`:`var(--color-text-secondary)`,borderRadius:`4px`,cursor:`pointer`,fontSize:`12px`,fontWeight:`bold`},children:`OR`})]}),(0,h.jsx)(`div`,{style:{flex:1}}),(0,h.jsx)(o,{variant:`outline`,size:`sm`,onClick:()=>b(e.id),children:`+ Rule`}),(0,h.jsx)(o,{variant:`outline`,size:`sm`,onClick:()=>x(e.id),children:`+ Group`}),t&&(0,h.jsx)(o,{variant:`ghost`,size:`sm`,onClick:()=>C(t,e.id),style:{color:`var(--color-accent-red)`},children:`Remove Group`})]}),e.rules.map(t=>`combinator`in t?E(t,e.id):T(t,e.id))]},e.id);return(0,h.jsx)(`div`,{className:`query-builder ${r}`,children:E(a)})},y.__docgenInfo={description:``,methods:[],displayName:`QueryBuilder`,props:{fields:{required:!0,tsType:{name:`Array`,elements:[{name:`Field`}],raw:`Field[]`},description:``},value:{required:!1,tsType:{name:`RuleGroup`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: RuleGroup) => void`,signature:{arguments:[{type:{name:`RuleGroup`},name:`value`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{b(),x=r(),S={title:`Forms/QueryBuilder`,component:y,tags:[`autodocs`]},C={args:{fields:[{name:`amount`,label:`Amount`,type:`number`},{name:`currency`,label:`Currency`,type:`text`},{name:`date`,label:`Date`,type:`date`}],onChange:e=>console.log(`Query:`,e)}},w={args:{fields:[{name:`status`,label:`Status`,type:`select`,options:[`completed`,`pending`,`failed`]},{name:`amount`,label:`Amount`,type:`number`},{name:`date`,label:`Date`,type:`date`}],initialQuery:{status:`completed`,amount:{gt:100}},onChange:e=>console.log(`Query:`,e)}},T={args:{fields:[{name:`type`,label:`Transaction Type`,type:`select`,options:[`buy`,`sell`,`swap`,`transfer`]},{name:`minAmount`,label:`Min Amount`,type:`number`},{name:`maxAmount`,label:`Max Amount`,type:`number`},{name:`fromDate`,label:`From Date`,type:`date`},{name:`toDate`,label:`To Date`,type:`date`}],onChange:e=>console.log(`Query:`,e)}},E={args:{fields:[],onChange:e=>console.log(`Query:`,e)}},D={args:{fields:[{id:`amount`,label:`Amount`,type:`number`}],onChange:e=>console.log(`Query:`,e)}},O={args:{fields:[{id:`type`,label:`Transaction Type`,type:`select`,options:[{label:`Buy`,value:`buy`},{label:`Sell`,value:`sell`},{label:`Swap`,value:`swap`},{label:`Transfer`,value:`transfer`},{label:`Deposit`,value:`deposit`},{label:`Withdrawal`,value:`withdrawal`}]},{id:`amount`,label:`Amount`,type:`number`},{id:`currency`,label:`Currency`,type:`select`,options:[{label:`USD`,value:`usd`},{label:`EUR`,value:`eur`},{label:`BTC`,value:`btc`},{label:`ETH`,value:`eth`}]},{id:`status`,label:`Status`,type:`select`,options:[{label:`Completed`,value:`completed`},{label:`Pending`,value:`pending`},{label:`Failed`,value:`failed`}]},{id:`fromDate`,label:`From Date`,type:`date`},{id:`toDate`,label:`To Date`,type:`date`},{id:`reference`,label:`Reference`,type:`text`},{id:`counterparty`,label:`Counterparty`,type:`text`}],onChange:e=>console.log(`Query:`,e)}},k={args:{fields:[{id:`amount`,label:`Amount`,type:`number`},{id:`type`,label:`Type`,type:`select`,options:[{label:`Credit`,value:`credit`},{label:`Debit`,value:`debit`}]}],value:{id:`root`,combinator:`or`,rules:[{id:`r1`,fieldId:`amount`,operator:`gte`,value:`1000`},{id:`r2`,fieldId:`type`,operator:`equals`,value:`credit`}]},onChange:e=>console.log(`Query:`,e)}},A={args:{fields:[{id:`amount`,label:`Amount`,type:`number`},{id:`status`,label:`Status`,type:`select`,options:[{label:`Completed`,value:`completed`},{label:`Pending`,value:`pending`},{label:`Failed`,value:`failed`}]},{id:`date`,label:`Date`,type:`date`},{id:`currency`,label:`Currency`,type:`text`}],value:{id:`root`,combinator:`and`,rules:[{id:`g1`,combinator:`or`,rules:[{id:`r1`,fieldId:`amount`,operator:`gte`,value:`5000`},{id:`r2`,fieldId:`status`,operator:`equals`,value:`failed`}]},{id:`r3`,fieldId:`currency`,operator:`equals`,value:`USD`}]},onChange:e=>console.log(`Query:`,e)}},j={args:{fields:[{id:`amount`,label:`Amount`,type:`number`},{id:`type`,label:`Type`,type:`select`,options:[{label:`Buy`,value:`buy`},{label:`Sell`,value:`sell`}]},{id:`date`,label:`Date`,type:`date`}],onChange:e=>console.log(`Query:`,e)},parameters:{backgrounds:{default:`dark`}},decorators:[e=>(0,x.jsx)(`div`,{className:`dark p-6 bg-zinc-900 min-h-[300px] rounded-xl`,children:(0,x.jsx)(e,{})})]},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    fields: [{
      name: 'amount',
      label: 'Amount',
      type: 'number'
    }, {
      name: 'currency',
      label: 'Currency',
      type: 'text'
    }, {
      name: 'date',
      label: 'Date',
      type: 'date'
    }],
    onChange: (query: any) => console.log('Query:', query)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    fields: [{
      name: 'status',
      label: 'Status',
      type: 'select',
      options: ['completed', 'pending', 'failed']
    }, {
      name: 'amount',
      label: 'Amount',
      type: 'number'
    }, {
      name: 'date',
      label: 'Date',
      type: 'date'
    }],
    initialQuery: {
      status: 'completed',
      amount: {
        gt: 100
      }
    },
    onChange: (query: any) => console.log('Query:', query)
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    fields: [{
      name: 'type',
      label: 'Transaction Type',
      type: 'select',
      options: ['buy', 'sell', 'swap', 'transfer']
    }, {
      name: 'minAmount',
      label: 'Min Amount',
      type: 'number'
    }, {
      name: 'maxAmount',
      label: 'Max Amount',
      type: 'number'
    }, {
      name: 'fromDate',
      label: 'From Date',
      type: 'date'
    }, {
      name: 'toDate',
      label: 'To Date',
      type: 'date'
    }],
    onChange: (query: any) => console.log('Query:', query)
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    fields: [],
    onChange: (query: any) => console.log('Query:', query)
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    fields: [{
      id: 'amount',
      label: 'Amount',
      type: 'number'
    }],
    onChange: (query: any) => console.log('Query:', query)
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    fields: [{
      id: 'type',
      label: 'Transaction Type',
      type: 'select',
      options: [{
        label: 'Buy',
        value: 'buy'
      }, {
        label: 'Sell',
        value: 'sell'
      }, {
        label: 'Swap',
        value: 'swap'
      }, {
        label: 'Transfer',
        value: 'transfer'
      }, {
        label: 'Deposit',
        value: 'deposit'
      }, {
        label: 'Withdrawal',
        value: 'withdrawal'
      }]
    }, {
      id: 'amount',
      label: 'Amount',
      type: 'number'
    }, {
      id: 'currency',
      label: 'Currency',
      type: 'select',
      options: [{
        label: 'USD',
        value: 'usd'
      }, {
        label: 'EUR',
        value: 'eur'
      }, {
        label: 'BTC',
        value: 'btc'
      }, {
        label: 'ETH',
        value: 'eth'
      }]
    }, {
      id: 'status',
      label: 'Status',
      type: 'select',
      options: [{
        label: 'Completed',
        value: 'completed'
      }, {
        label: 'Pending',
        value: 'pending'
      }, {
        label: 'Failed',
        value: 'failed'
      }]
    }, {
      id: 'fromDate',
      label: 'From Date',
      type: 'date'
    }, {
      id: 'toDate',
      label: 'To Date',
      type: 'date'
    }, {
      id: 'reference',
      label: 'Reference',
      type: 'text'
    }, {
      id: 'counterparty',
      label: 'Counterparty',
      type: 'text'
    }],
    onChange: (query: any) => console.log('Query:', query)
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    fields: [{
      id: 'amount',
      label: 'Amount',
      type: 'number'
    }, {
      id: 'type',
      label: 'Type',
      type: 'select',
      options: [{
        label: 'Credit',
        value: 'credit'
      }, {
        label: 'Debit',
        value: 'debit'
      }]
    }],
    value: {
      id: 'root',
      combinator: 'or',
      rules: [{
        id: 'r1',
        fieldId: 'amount',
        operator: 'gte',
        value: '1000'
      }, {
        id: 'r2',
        fieldId: 'type',
        operator: 'equals',
        value: 'credit'
      }]
    },
    onChange: (query: any) => console.log('Query:', query)
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    fields: [{
      id: 'amount',
      label: 'Amount',
      type: 'number'
    }, {
      id: 'status',
      label: 'Status',
      type: 'select',
      options: [{
        label: 'Completed',
        value: 'completed'
      }, {
        label: 'Pending',
        value: 'pending'
      }, {
        label: 'Failed',
        value: 'failed'
      }]
    }, {
      id: 'date',
      label: 'Date',
      type: 'date'
    }, {
      id: 'currency',
      label: 'Currency',
      type: 'text'
    }],
    value: {
      id: 'root',
      combinator: 'and',
      rules: [{
        id: 'g1',
        combinator: 'or',
        rules: [{
          id: 'r1',
          fieldId: 'amount',
          operator: 'gte',
          value: '5000'
        }, {
          id: 'r2',
          fieldId: 'status',
          operator: 'equals',
          value: 'failed'
        }]
      }, {
        id: 'r3',
        fieldId: 'currency',
        operator: 'equals',
        value: 'USD'
      }]
    },
    onChange: (query: any) => console.log('Query:', query)
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    fields: [{
      id: 'amount',
      label: 'Amount',
      type: 'number'
    }, {
      id: 'type',
      label: 'Type',
      type: 'select',
      options: [{
        label: 'Buy',
        value: 'buy'
      }, {
        label: 'Sell',
        value: 'sell'
      }]
    }, {
      id: 'date',
      label: 'Date',
      type: 'date'
    }],
    onChange: (query: any) => console.log('Query:', query)
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [(Story: any) => <div className="dark p-6 bg-zinc-900 min-h-[300px] rounded-xl">
        <Story />
      </div>]
}`,...j.parameters?.docs?.source}}},M=[`Default`,`WithInitialQuery`,`TransactionFilter`,`Empty`,`SingleField`,`ManyFilters`,`PrefilledWithOr`,`ComplexNested`,`DarkMode`]}))();export{A as ComplexNested,j as DarkMode,C as Default,E as Empty,O as ManyFilters,k as PrefilledWithOr,D as SingleField,T as TransactionFilter,w as WithInitialQuery,M as __namedExportsOrder,S as default};