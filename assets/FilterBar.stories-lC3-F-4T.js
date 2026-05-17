import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-B1a0g5t6.js";import{hn as r,i,t as a}from"./lucide-react-BVeuibpS.js";import{t as o}from"./jsx-runtime-DaLCRA3n.js";import{n as s,t as c}from"./Button-CWySTvFo.js";import{a as l,c as u,i as d,l as f,n as p,o as m,r as h,s as g,t as _,u as v}from"./SearchInput-C3-Am1B7.js";import{t as y}from"./Select-DgojA542.js";import{t as b}from"./Select-Ckkaitlu.js";var x=e((()=>{p(),v(),f(),u(),g(),m(),l(),d(),h()})),S,C,w,T=e((()=>{S=t(n()),a(),c(),x(),b(),C=o(),w=({groups:e,activeFilters:t=[],onFilterChange:n,onClearAll:a,searchPlaceholder:o=`Search...`,showSearch:c=!0,showFilterCount:l=!0,className:u=``})=>{let[d,f]=(0,S.useState)(``),p=(r,i)=>{let a=e.find(e=>e.id===r);if(!a||!a.options)return;let o=[...t];if(a.type===`multiselect`)o=o.filter(e=>e.groupId!==r),(Array.isArray(i)?i:[i]).forEach(e=>{let t=a.options?.find(t=>t.value===e);t&&o.push({groupId:r,optionId:t.id,label:t.label,value:t.value})});else{o=o.filter(e=>e.groupId!==r);let e=a.options?.find(e=>e.value===i);e&&o.push({groupId:r,optionId:e.id,label:e.label,value:e.value})}n?.(o)},m=e=>{let r=t.filter(t=>!(t.groupId===e.groupId&&t.optionId===e.optionId));n?.(r)},h=()=>{n?.([]),a?.(),f(``)},g=n=>{let r=e.find(e=>e.id===n),i=t.filter(e=>e.groupId===n);if(!(!r||i.length===0))return r.type===`multiselect`?i.map(e=>e.value):i[0]?.value};return(0,C.jsxs)(`div`,{className:`bg-surface-primary border border-border-primary rounded-xl p-4 ${u}`,children:[(0,C.jsxs)(`div`,{className:`flex flex-wrap items-center gap-3`,children:[c&&(0,C.jsx)(`div`,{className:`flex-1 min-w-[200px]`,children:(0,C.jsx)(_,{value:d,onChange:f,placeholder:o})}),e.map(e=>{if(e.type===`custom`)return(0,C.jsx)(`div`,{children:e.customContent},e.id);let t=e.options?.map(e=>({id:e.id,label:e.label,value:e.value,count:e.count}))||[];return(0,C.jsx)(y,{label:e.label,options:t,value:g(e.id),onChange:t=>p(e.id,t),icon:e.icon||(0,C.jsx)(r,{className:`w-4 h-4`}),multiselect:e.type===`multiselect`},e.id)}),l&&t.length>0&&(0,C.jsxs)(`div`,{className:`flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-secondary text-text-secondary text-sm`,children:[(0,C.jsx)(r,{className:`w-4 h-4`}),(0,C.jsxs)(`span`,{children:[t.length,` active`]})]}),t.length>0&&(0,C.jsx)(s,{variant:`ghost`,size:`sm`,onClick:h,leftIcon:(0,C.jsx)(i,{className:`w-4 h-4`}),children:`Clear all`})]}),t.length>0&&(0,C.jsx)(`div`,{className:`flex flex-wrap gap-2 mt-4 pt-4 border-t border-border-primary`,children:t.map((e,t)=>(0,C.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm`,children:[(0,C.jsx)(`span`,{className:`font-medium`,children:e.label}),(0,C.jsx)(`button`,{onClick:()=>m(e),className:`hover:bg-accent-blue/20 rounded-full p-0.5 transition-colors`,children:(0,C.jsx)(i,{className:`w-3.5 h-3.5`})})]},`${e.groupId}-${e.optionId}-${t}`))})]})},w.__docgenInfo={description:``,methods:[],displayName:`FilterBar`,props:{groups:{required:!0,tsType:{name:`Array`,elements:[{name:`FilterGroup`}],raw:`FilterGroup[]`},description:``},activeFilters:{required:!1,tsType:{name:`Array`,elements:[{name:`ActiveFilter`}],raw:`ActiveFilter[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onFilterChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(filters: ActiveFilter[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`ActiveFilter`}],raw:`ActiveFilter[]`},name:`filters`}],return:{name:`void`}}},description:``},onClearAll:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},searchPlaceholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Search...'`,computed:!1}},showSearch:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},showFilterCount:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{E=t(n()),T(),D=o(),{action:O}=__STORYBOOK_MODULE_ACTIONS__,k=[{id:`status`,label:`Status`,type:`select`,options:[{id:`active`,label:`Active`,value:`active`,count:42},{id:`inactive`,label:`Inactive`,value:`inactive`,count:8},{id:`pending`,label:`Pending`,value:`pending`,count:3}]},{id:`category`,label:`Category`,type:`multiselect`,options:[{id:`transfers`,label:`Transfers`,value:`transfers`,count:120},{id:`payments`,label:`Payments`,value:`payments`,count:85},{id:`deposits`,label:`Deposits`,value:`deposits`,count:63},{id:`withdrawals`,label:`Withdrawals`,value:`withdrawals`,count:34}]},{id:`date`,label:`Date`,type:`date`,placeholder:`Select range`}],A=[{groupId:`status`,optionId:`active`,label:`Status: Active`,value:`active`},{groupId:`category`,optionId:`payments`,label:`Category: Payments`,value:`payments`}],j=[{id:`type`,label:`Transaction Type`,type:`select`,options:[{id:`all`,label:`All Types`,value:`all`,count:342},{id:`incoming`,label:`Incoming`,value:`incoming`,count:156},{id:`outgoing`,label:`Outgoing`,value:`outgoing`,count:186}]},{id:`amount`,label:`Amount Range`,type:`multiselect`,options:[{id:`under50`,label:`Under $50`,value:`under50`,count:89},{id:`50to500`,label:`$50 - $500`,value:`50to500`,count:145},{id:`500to5000`,label:`$500 - $5,000`,value:`500to5000`,count:78},{id:`over5000`,label:`Over $5,000`,value:`over5000`,count:30}]},{id:`date`,label:`Date Range`,type:`date`,placeholder:`Pick dates`},{id:`currency`,label:`Currency`,type:`multiselect`,options:[{id:`usd`,label:`USD`,value:`usd`,count:210},{id:`eur`,label:`EUR`,value:`eur`,count:72},{id:`btc`,label:`BTC`,value:`btc`,count:45},{id:`usdc`,label:`USDC`,value:`usdc`,count:15}]}],M={title:`Navigation/FilterBar`,component:w,tags:[`autodocs`]},N={args:{groups:k,onFilterChange:O(`filter-change`),onClearAll:O(`clear-all`)}},P={args:{groups:k,activeFilters:A,onFilterChange:O(`filter-change`),onClearAll:O(`clear-all`)}},F={args:{groups:[k[0],k[1]],showSearch:!1}},I={args:{groups:k,showFilterCount:!1}},L={args:{groups:j,activeFilters:[{groupId:`type`,optionId:`incoming`,label:`Type: Incoming`,value:`incoming`},{groupId:`currency`,optionId:`usd`,label:`Currency: USD`,value:`usd`}],onFilterChange:O(`filter-change`),onClearAll:O(`clear-all`)}},R={args:{groups:[...j,{id:`status`,label:`Account Status`,type:`multiselect`,options:[{id:`verified`,label:`Verified`,value:`verified`,count:28},{id:`pending_verify`,label:`Pending Verification`,value:`pending_verify`,count:6},{id:`restricted`,label:`Restricted`,value:`restricted`,count:2}]}],activeFilters:A,onFilterChange:O(`filter-change`),onClearAll:O(`clear-all`)}},z={args:{groups:[k[0]],showSearch:!1,onFilterChange:O(`filter-change`)}},B={args:{groups:[],searchPlaceholder:`Search transactions, accounts, or users...`,onSearch:O(`search`)}},V={render:()=>{let[e,t]=E.useState([]);return(0,D.jsxs)(`div`,{className:`w-full space-y-4`,children:[(0,D.jsx)(w,{groups:j,activeFilters:e,onFilterChange:e=>{t(t=>{let n=t.find(t=>t.groupId===e.groupId&&t.optionId===e.optionId);return n?t.filter(e=>e!==n):[...t,e]})},onClearAll:()=>t([]),showFilterCount:!0}),(0,D.jsx)(`div`,{className:`text-xs text-text-tertiary px-1`,children:e.length>0?`Active filters: ${e.map(e=>e.label).join(`, `)}`:`No active filters — showing all 342 transactions`})]})}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    groups,
    onFilterChange: action('filter-change'),
    onClearAll: action('clear-all')
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    groups,
    activeFilters,
    onFilterChange: action('filter-change'),
    onClearAll: action('clear-all')
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    groups: [groups[0], groups[1]],
    showSearch: false
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    groups,
    showFilterCount: false
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    groups: [groups[0]],
    showSearch: false,
    onFilterChange: action('filter-change')
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    groups: [],
    searchPlaceholder: 'Search transactions, accounts, or users...',
    onSearch: action('search')
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H=[`Default`,`WithActiveFilters`,`WithoutSearch`,`WithoutFilterCount`,`TransactionHistoryFilters`,`FullAccountFilters`,`MinimalFilters`,`WithSearchOnly`,`InteractiveFilterDemo`]}))();export{N as Default,R as FullAccountFilters,V as InteractiveFilterDemo,z as MinimalFilters,L as TransactionHistoryFilters,P as WithActiveFilters,B as WithSearchOnly,I as WithoutFilterCount,F as WithoutSearch,H as __namedExportsOrder,M as default};