import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C8gh9c0G.js";import{n as r,t as i}from"./utils-CcEteFRA.js";import{t as a}from"./jsx-runtime-WZfjI2gv.js";import{l as o,s,t as c}from"./es-DlQin2IG.js";var l,u,d,f,p,m=e((()=>{l=t(n()),c(),r(),u=a(),d=(0,l.forwardRef)(({items:e,variant:t=`default`,size:n=`md`,columns:r=1,hoverable:a=!1,divider:c=!1,className:d,...f},p)=>{let[m,h]=(0,l.useState)(null),g={sm:{key:`text-xs`,value:`text-sm`,gap:`gap-1`,padding:`p-3`},md:{key:`text-sm`,value:`text-base`,gap:`gap-1.5`,padding:`p-4`},lg:{key:`text-base`,value:`text-lg`,gap:`gap-2`,padding:`p-5`}},_={default:`space-y-2`,card:`bg-surface-primary border border-border-primary rounded-xl shadow-sm overflow-hidden`,inline:`flex flex-wrap gap-6`,grid:`grid gap-4`},v={1:`grid-cols-1`,2:`grid-cols-1 md:grid-cols-2`,3:`grid-cols-1 md:grid-cols-2 xl:grid-cols-3`,4:`grid-cols-1 md:grid-cols-2 xl:grid-cols-4`},y=async(e,t)=>{try{await navigator.clipboard.writeText(e),h(t),setTimeout(()=>h(null),2e3)}catch(e){console.error(`Failed to copy:`,e)}},b=s.div;return(0,u.jsx)(b,{ref:p,className:i(_[t],t===`grid`&&v[r],d),initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.22,ease:[.16,1,.3,1]},...f,children:e.map((r,l)=>{let d=s.div;return(0,u.jsxs)(d,{className:i(`group`,t===`inline`?`flex items-center gap-2`:i(`flex flex-col`,g[n].gap,t===`card`&&g[n].padding),t===`card`&&c&&l!==e.length-1&&`border-b border-border-primary`,a&&`transition-colors hover:bg-surface-secondary/30 rounded-lg`,r.copyable&&`cursor-pointer`),onClick:()=>{r.copyable&&typeof r.value==`string`&&y(r.value,l)},initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{duration:.2,delay:l*.03,ease:[.16,1,.3,1]},whileHover:r.copyable?{scale:1.01}:{},children:[(0,u.jsxs)(`div`,{className:i(`flex items-center gap-2`,t===`inline`?``:`mb-0.5`),children:[r.icon&&(0,u.jsx)(`span`,{className:`text-text-tertiary flex-shrink-0`,children:r.icon}),(0,u.jsxs)(`span`,{className:i(`font-medium text-text-secondary`,g[n].key),children:[r.key,t===`inline`&&`:`]})]}),(0,u.jsxs)(`div`,{className:`flex items-center gap-2 min-w-0 relative`,children:[(0,u.jsx)(`span`,{className:i(`font-semibold text-text-primary break-words`,g[n].value,r.copyable&&`group-hover:text-accent-blue transition-colors`),children:r.value}),r.badge&&(0,u.jsx)(`span`,{className:`flex-shrink-0`,children:r.badge}),r.copyable&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(`svg`,{className:`w-4 h-4 text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:(0,u.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z`})}),(0,u.jsx)(o,{children:m===l&&(0,u.jsx)(s.span,{initial:{opacity:0,y:10,scale:.8},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-10,scale:.8},transition:{duration:.2},className:`absolute -top-8 left-1/2 -translate-x-1/2 bg-accent-blue text-white text-xs font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg z-50`,children:`¡Copiado!`})})]})]})]},l)})})}),d.displayName=`KeyValueInfo`,f=(0,l.forwardRef)((e,t)=>(0,u.jsx)(d,{ref:t,...e,size:`sm`})),f.displayName=`CompactKeyValueInfo`,p=(0,l.forwardRef)((e,t)=>(0,u.jsx)(d,{ref:t,...e,variant:`inline`})),p.displayName=`InlineKeyValueInfo`,d.__docgenInfo={description:``,methods:[],displayName:`KeyValueInfo`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
    key: React.ReactNode;
    value: React.ReactNode;
    icon?: React.ReactNode;
    badge?: React.ReactNode;
    copyable?: boolean;
}`,signature:{properties:[{key:`key`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`value`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`icon`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}},{key:`badge`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}},{key:`copyable`,value:{name:`boolean`,required:!1}}]}}],raw:`KeyValueItem[]`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'card' | 'inline' | 'grid'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'card'`},{name:`literal`,value:`'inline'`},{name:`literal`,value:`'grid'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},columns:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3 | 4`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`},{name:`literal`,value:`4`}]},description:``,defaultValue:{value:`1`,computed:!1}},hoverable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},divider:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}},f.__docgenInfo={description:``,methods:[],displayName:`CompactKeyValueInfo`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'card' | 'inline' | 'grid'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'card'`},{name:`literal`,value:`'inline'`},{name:`literal`,value:`'grid'`}]},description:``}},composes:[`Omit`]},p.__docgenInfo={description:``,methods:[],displayName:`InlineKeyValueInfo`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``}},composes:[`Omit`]}})),h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{n(),m(),h=a(),g={title:`Data Display/KeyValueInfo`,component:d,tags:[`autodocs`],parameters:{layout:`centered`}},_={args:{label:`Account Balance`,value:`$12,430.50`}},v={args:{label:`Available Balance`,value:`$12,180.50`},render:e=>(0,h.jsxs)(`div`,{className:`space-y-3`,children:[(0,h.jsx)(d,{label:`Total Balance`,value:`$12,430.50`}),(0,h.jsx)(d,{label:`Pending`,value:`-$250.00`,valueClassName:`text-amber-500`}),(0,h.jsx)(d,{label:`Available`,value:`$12,180.50`})]})},y={args:{label:`Account Status`,value:`Active`,badge:{text:`Verified`,variant:`success`}}},b={args:{label:`Transaction ID`,value:`TRX-2025-04-8912`}},x={render:()=>(0,h.jsxs)(`div`,{className:`w-80 space-y-2 text-sm`,children:[(0,h.jsx)(d,{label:`Account`,value:`Checking •••• 4821`}),(0,h.jsx)(d,{label:`Balance`,value:`$12,430.50`}),(0,h.jsx)(d,{label:`Status`,value:`Active`,badge:{text:`Verified`,variant:`success`}}),(0,h.jsx)(d,{label:`APY`,value:`0.01%`}),(0,h.jsx)(d,{label:`Opened`,value:`June 15, 2024`})]})},S={render:()=>(0,h.jsxs)(`div`,{className:`w-80 space-y-2 text-sm`,children:[(0,h.jsx)(d,{label:`Asset`,value:`Bitcoin (BTC)`}),(0,h.jsx)(d,{label:`Balance`,value:`0.5482 BTC`}),(0,h.jsx)(d,{label:`Value`,value:`$36,842.10`}),(0,h.jsx)(d,{label:`24h Change`,value:`+2.45%`,valueClassName:`text-status-success`}),(0,h.jsx)(d,{label:`Cost Basis`,value:`$42,000.00`})]})},C={render:()=>(0,h.jsxs)(`div`,{className:`w-80 space-y-2 text-sm`,children:[(0,h.jsx)(d,{label:`Reference`,value:`INV-2025-4421`}),(0,h.jsx)(d,{label:`Amount`,value:`$1,200.00`}),(0,h.jsx)(d,{label:`Status`,value:`Completed`,badge:{text:`Paid`,variant:`success`}}),(0,h.jsx)(d,{label:`Date`,value:`Apr 15, 2025`}),(0,h.jsx)(d,{label:`Method`,value:`Wire Transfer`})]})},w={render:()=>(0,h.jsxs)(`div`,{className:`w-80 space-y-2 text-sm`,children:[(0,h.jsx)(d,{label:`Name`,value:`Cesar Ruiz`}),(0,h.jsx)(d,{label:`Email`,value:`cesar@example.com`}),(0,h.jsx)(d,{label:`2FA`,value:`Enabled`,badge:{text:`Active`,variant:`success`}}),(0,h.jsx)(d,{label:`Member Since`,value:`Jan 15, 2024`}),(0,h.jsx)(d,{label:`Last Login`,value:`Today at 9:30 AM`})]})},T={args:{label:`Total Spent This Month`,value:`$2,450.80`,valueClassName:`text-lg font-bold text-accent-blue`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Account Balance',
    value: '$12,430.50'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Available Balance',
    value: '$12,180.50'
  },
  render: args => <div className="space-y-3">
      <KeyValueInfo label="Total Balance" value="$12,430.50" />
      <KeyValueInfo label="Pending" value="-$250.00" valueClassName="text-amber-500" />
      <KeyValueInfo label="Available" value="$12,180.50" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Account Status',
    value: 'Active',
    badge: {
      text: 'Verified',
      variant: 'success'
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Transaction ID',
    value: 'TRX-2025-04-8912'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-2 text-sm">
      <KeyValueInfo label="Account" value="Checking •••• 4821" />
      <KeyValueInfo label="Balance" value="$12,430.50" />
      <KeyValueInfo label="Status" value="Active" badge={{
      text: 'Verified',
      variant: 'success'
    }} />
      <KeyValueInfo label="APY" value="0.01%" />
      <KeyValueInfo label="Opened" value="June 15, 2024" />
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-2 text-sm">
      <KeyValueInfo label="Asset" value="Bitcoin (BTC)" />
      <KeyValueInfo label="Balance" value="0.5482 BTC" />
      <KeyValueInfo label="Value" value="$36,842.10" />
      <KeyValueInfo label="24h Change" value="+2.45%" valueClassName="text-status-success" />
      <KeyValueInfo label="Cost Basis" value="$42,000.00" />
    </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-2 text-sm">
      <KeyValueInfo label="Reference" value="INV-2025-4421" />
      <KeyValueInfo label="Amount" value="$1,200.00" />
      <KeyValueInfo label="Status" value="Completed" badge={{
      text: 'Paid',
      variant: 'success'
    }} />
      <KeyValueInfo label="Date" value="Apr 15, 2025" />
      <KeyValueInfo label="Method" value="Wire Transfer" />
    </div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-2 text-sm">
      <KeyValueInfo label="Name" value="Cesar Ruiz" />
      <KeyValueInfo label="Email" value="cesar@example.com" />
      <KeyValueInfo label="2FA" value="Enabled" badge={{
      text: 'Active',
      variant: 'success'
    }} />
      <KeyValueInfo label="Member Since" value="Jan 15, 2024" />
      <KeyValueInfo label="Last Login" value="Today at 9:30 AM" />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Total Spent This Month',
    value: '$2,450.80',
    valueClassName: 'text-lg font-bold text-accent-blue'
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Currency`,`WithBadge`,`Horizontal`,`CompactLayout`,`CryptoDetails`,`TransactionInfo`,`UserProfile`,`WithCustomValue`]}))();export{x as CompactLayout,S as CryptoDetails,v as Currency,_ as Default,b as Horizontal,C as TransactionInfo,w as UserProfile,y as WithBadge,T as WithCustomValue,E as __namedExportsOrder,g as default};