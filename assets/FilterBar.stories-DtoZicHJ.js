import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CNj2_6xa.js";import{hn as r,i,t as a}from"./lucide-react-BjI3czzr.js";import{t as o}from"./jsx-runtime-WZfjI2gv.js";import{n as s,t as c}from"./Button-C17fCOOV.js";import{n as l,t as u}from"./SearchInput-CESe7-AK.js";import{t as d}from"./Select-C2G5o_qy.js";import{t as f}from"./Select-DCTCInSu.js";var p=e((()=>{l()})),m,h,g,_=e((()=>{m=t(n()),a(),c(),p(),f(),h=o(),g=({groups:e,activeFilters:t=[],onFilterChange:n,onClearAll:a,searchPlaceholder:o=`Search...`,showSearch:c=!0,showFilterCount:l=!0,className:f=``})=>{let[p,g]=(0,m.useState)(``),_=(r,i)=>{let a=e.find(e=>e.id===r);if(!a||!a.options)return;let o=[...t];if(a.type===`multiselect`)o=o.filter(e=>e.groupId!==r),(Array.isArray(i)?i:[i]).forEach(e=>{let t=a.options?.find(t=>t.value===e);t&&o.push({groupId:r,optionId:t.id,label:t.label,value:t.value})});else{o=o.filter(e=>e.groupId!==r);let e=a.options?.find(e=>e.value===i);e&&o.push({groupId:r,optionId:e.id,label:e.label,value:e.value})}n?.(o)},v=e=>{let r=t.filter(t=>!(t.groupId===e.groupId&&t.optionId===e.optionId));n?.(r)},y=()=>{n?.([]),a?.(),g(``)},b=n=>{let r=e.find(e=>e.id===n),i=t.filter(e=>e.groupId===n);if(!(!r||i.length===0))return r.type===`multiselect`?i.map(e=>e.value):i[0]?.value};return(0,h.jsxs)(`div`,{className:`bg-surface-primary border border-border-primary rounded-xl p-4 ${f}`,children:[(0,h.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[c&&(0,h.jsx)(`div`,{className:`flex-1 min-w-[200px]`,children:(0,h.jsx)(u,{value:p,onChange:g,placeholder:o})}),e.map(e=>{if(e.type===`custom`)return(0,h.jsx)(`div`,{children:e.customContent},e.id);let t=e.options?.map(e=>({id:e.id,label:e.label,value:e.value,count:e.count}))||[];return(0,h.jsx)(d,{label:e.label,options:t,value:b(e.id),onChange:t=>_(e.id,t),icon:e.icon||(0,h.jsx)(r,{className:`w-4 h-4`}),multiselect:e.type===`multiselect`},e.id)}),l&&t.length>0&&(0,h.jsxs)(`div`,{className:`flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-secondary text-text-secondary text-sm`,children:[(0,h.jsx)(r,{className:`w-4 h-4`}),(0,h.jsxs)(`span`,{children:[t.length,` active`]})]}),t.length>0&&(0,h.jsx)(s,{variant:`ghost`,size:`sm`,onClick:y,leftIcon:(0,h.jsx)(i,{className:`w-4 h-4`}),children:`Clear all`})]}),t.length>0&&(0,h.jsx)(`div`,{className:`flex flex-wrap gap-2 mt-4 pt-4 border-t border-border-primary`,children:t.map((e,t)=>(0,h.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm`,children:[(0,h.jsx)(`span`,{className:`font-medium`,children:e.label}),(0,h.jsx)(`button`,{onClick:()=>v(e),className:`hover:bg-accent-blue/20 rounded-full p-0.5 transition-colors`,children:(0,h.jsx)(i,{className:`w-3.5 h-3.5`})})]},`${e.groupId}-${e.optionId}-${t}`))})]})},g.__docgenInfo={description:``,methods:[],displayName:`FilterBar`,props:{groups:{required:!0,tsType:{name:`Array`,elements:[{name:`FilterGroup`}],raw:`FilterGroup[]`},description:``},activeFilters:{required:!1,tsType:{name:`Array`,elements:[{name:`ActiveFilter`}],raw:`ActiveFilter[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onFilterChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(filters: ActiveFilter[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`ActiveFilter`}],raw:`ActiveFilter[]`},name:`filters`}],return:{name:`void`}}},description:``},onClearAll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},searchPlaceholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Search...'`,computed:!1}},showSearch:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},showFilterCount:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{v=t(n()),_(),y=o(),{action:b}=__STORYBOOK_MODULE_ACTIONS__,x=[{id:`status`,label:`Status`,type:`select`,options:[{id:`active`,label:`Active`,value:`active`,count:42},{id:`inactive`,label:`Inactive`,value:`inactive`,count:8},{id:`pending`,label:`Pending`,value:`pending`,count:3}]},{id:`category`,label:`Category`,type:`multiselect`,options:[{id:`transfers`,label:`Transfers`,value:`transfers`,count:120},{id:`payments`,label:`Payments`,value:`payments`,count:85},{id:`deposits`,label:`Deposits`,value:`deposits`,count:63},{id:`withdrawals`,label:`Withdrawals`,value:`withdrawals`,count:34}]},{id:`date`,label:`Date`,type:`date`,placeholder:`Select range`}],S=[{groupId:`status`,optionId:`active`,label:`Status: Active`,value:`active`},{groupId:`category`,optionId:`payments`,label:`Category: Payments`,value:`payments`}],C=[{id:`type`,label:`Transaction Type`,type:`select`,options:[{id:`all`,label:`All Types`,value:`all`,count:342},{id:`incoming`,label:`Incoming`,value:`incoming`,count:156},{id:`outgoing`,label:`Outgoing`,value:`outgoing`,count:186}]},{id:`amount`,label:`Amount Range`,type:`multiselect`,options:[{id:`under50`,label:`Under $50`,value:`under50`,count:89},{id:`50to500`,label:`$50 - $500`,value:`50to500`,count:145},{id:`500to5000`,label:`$500 - $5,000`,value:`500to5000`,count:78},{id:`over5000`,label:`Over $5,000`,value:`over5000`,count:30}]},{id:`date`,label:`Date Range`,type:`date`,placeholder:`Pick dates`},{id:`currency`,label:`Currency`,type:`multiselect`,options:[{id:`usd`,label:`USD`,value:`usd`,count:210},{id:`eur`,label:`EUR`,value:`eur`,count:72},{id:`btc`,label:`BTC`,value:`btc`,count:45},{id:`usdc`,label:`USDC`,value:`usdc`,count:15}]}],w={title:`Navigation/FilterBar`,component:g,tags:[`autodocs`]},T={args:{groups:x,onFilterChange:b(`filter-change`),onClearAll:b(`clear-all`)}},E={args:{groups:x,activeFilters:S,onFilterChange:b(`filter-change`),onClearAll:b(`clear-all`)}},D={args:{groups:[x[0],x[1]],showSearch:!1}},O={args:{groups:x,showFilterCount:!1}},k={args:{groups:C,activeFilters:[{groupId:`type`,optionId:`incoming`,label:`Type: Incoming`,value:`incoming`},{groupId:`currency`,optionId:`usd`,label:`Currency: USD`,value:`usd`}],onFilterChange:b(`filter-change`),onClearAll:b(`clear-all`)}},A={args:{groups:[...C,{id:`status`,label:`Account Status`,type:`multiselect`,options:[{id:`verified`,label:`Verified`,value:`verified`,count:28},{id:`pending_verify`,label:`Pending Verification`,value:`pending_verify`,count:6},{id:`restricted`,label:`Restricted`,value:`restricted`,count:2}]}],activeFilters:S,onFilterChange:b(`filter-change`),onClearAll:b(`clear-all`)}},j={args:{groups:[x[0]],showSearch:!1,onFilterChange:b(`filter-change`)}},M={args:{groups:[],searchPlaceholder:`Search transactions, accounts, or users...`,onSearch:b(`search`)}},N={render:()=>{let[e,t]=v.useState([]);return(0,y.jsxs)(`div`,{className:`w-full space-y-4`,children:[(0,y.jsx)(g,{groups:C,activeFilters:e,onFilterChange:e=>{t(t=>{let n=t.find(t=>t.groupId===e.groupId&&t.optionId===e.optionId);return n?t.filter(e=>e!==n):[...t,e]})},onClearAll:()=>t([]),showFilterCount:!0}),(0,y.jsx)(`div`,{className:`text-xs text-text-tertiary px-1`,children:e.length>0?`Active filters: ${e.map(e=>e.label).join(`, `)}`:`No active filters — showing all 342 transactions`})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    groups,
    onFilterChange: action('filter-change'),
    onClearAll: action('clear-all')
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    groups,
    activeFilters,
    onFilterChange: action('filter-change'),
    onClearAll: action('clear-all')
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    groups: [groups[0], groups[1]],
    showSearch: false
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    groups,
    showFilterCount: false
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    groups: transactionGroups,
    activeFilters: [{
      groupId: 'type',
      optionId: 'incoming',
      label: 'Type: Incoming',
      value: 'incoming'
    }, {
      groupId: 'currency',
      optionId: 'usd',
      label: 'Currency: USD',
      value: 'usd'
    }],
    onFilterChange: action('filter-change'),
    onClearAll: action('clear-all')
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    groups: [...transactionGroups, {
      id: 'status',
      label: 'Account Status',
      type: 'multiselect',
      options: [{
        id: 'verified',
        label: 'Verified',
        value: 'verified',
        count: 28
      }, {
        id: 'pending_verify',
        label: 'Pending Verification',
        value: 'pending_verify',
        count: 6
      }, {
        id: 'restricted',
        label: 'Restricted',
        value: 'restricted',
        count: 2
      }]
    }],
    activeFilters,
    onFilterChange: action('filter-change'),
    onClearAll: action('clear-all')
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    groups: [groups[0]],
    showSearch: false,
    onFilterChange: action('filter-change')
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    groups: [],
    searchPlaceholder: 'Search transactions, accounts, or users...',
    onSearch: action('search')
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = React.useState<ActiveFilter[]>([]);
    return <div className="w-full space-y-4">
        <FilterBar groups={transactionGroups} activeFilters={active} onFilterChange={filter => {
        setActive(prev => {
          const exists = prev.find(f => f.groupId === filter.groupId && f.optionId === filter.optionId);
          if (exists) return prev.filter(f => f !== exists);
          return [...prev, filter];
        });
      }} onClearAll={() => setActive([])} showFilterCount />
        <div className="text-xs text-text-tertiary px-1">
          {active.length > 0 ? \`Active filters: \${active.map(a => a.label).join(', ')}\` : 'No active filters — showing all 342 transactions'}
        </div>
      </div>;
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`WithActiveFilters`,`WithoutSearch`,`WithoutFilterCount`,`TransactionHistoryFilters`,`FullAccountFilters`,`MinimalFilters`,`WithSearchOnly`,`InteractiveFilterDemo`]}))();export{T as Default,A as FullAccountFilters,N as InteractiveFilterDemo,j as MinimalFilters,k as TransactionHistoryFilters,E as WithActiveFilters,M as WithSearchOnly,O as WithoutFilterCount,D as WithoutSearch,P as __namedExportsOrder,w as default};