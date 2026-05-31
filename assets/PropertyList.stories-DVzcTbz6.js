import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C-nBdNCE.js";import{Qn as r,t as i}from"./lucide-react-DXerBtR-.js";import{n as a,t as o}from"./utils-CcEteFRA.js";import{t as s}from"./jsx-runtime-WZfjI2gv.js";import{l as c,s as l,t as u}from"./es-CfCMxUIg.js";var d,f,p,m,h=e((()=>{d=t(n()),u(),a(),i(),f=s(),p=(0,d.forwardRef)(({sections:e,variant:t=`default`,size:n=`md`,collapsible:i=!0,dividers:a=!0,className:s,...u},p)=>{let[m,h]=(0,d.useState)(new Set(e.filter(e=>e.defaultExpanded!==!1).map(e=>e.id))),[g,_]=(0,d.useState)(null),[v,y]=(0,d.useState)(``),b=e=>{i&&h(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},x=(e,t,n)=>{_(`${e}-${t}`),y(String(n.value))},S=e=>{e.onChange&&e.onChange(v),_(null)},C=()=>{_(null)},w={sm:{label:`text-xs`,value:`text-sm`,padding:`px-3 py-2`,headerPadding:`px-3 py-2`},md:{label:`text-xs`,value:`text-sm`,padding:`px-4 py-3`,headerPadding:`px-4 py-3`},lg:{label:`text-sm`,value:`text-base`,padding:`px-5 py-4`,headerPadding:`px-5 py-4`}};return(0,f.jsx)(`div`,{ref:p,className:o(`overflow-hidden`,{default:`bg-surface-primary`,bordered:`bg-surface-primary border border-border-primary rounded-xl shadow-sm overflow-hidden`,inset:`bg-surface-secondary rounded-lg`}[t],s),...u,children:e.map((e,s)=>{let u=m.has(e.id),d=e.title&&(i||e.title);return(0,f.jsxs)(`div`,{className:o(s!==0&&t!==`bordered`&&`border-t border-border-primary`),children:[d&&(0,f.jsxs)(`button`,{onClick:()=>b(e.id),disabled:!i,className:o(`w-full flex items-center justify-between text-left bg-surface-secondary/50 border-b border-border-primary`,w[n].headerPadding,i&&`hover:bg-surface-secondary transition-colors cursor-pointer`,!i&&`cursor-default`),children:[(0,f.jsx)(`span`,{className:`text-[11px] font-bold text-text-secondary uppercase tracking-wider`,children:e.title}),i&&(0,f.jsx)(l.div,{animate:{rotate:u?90:0},transition:{duration:.15},children:(0,f.jsx)(r,{className:`w-3.5 h-3.5 text-text-tertiary`})})]}),(0,f.jsx)(c,{initial:!1,children:(u||!i)&&(0,f.jsx)(l.div,{initial:i?{height:0,opacity:0}:!1,animate:{height:`auto`,opacity:1},exit:i?{height:0,opacity:0}:{},transition:{duration:.2,ease:[.16,1,.3,1]},className:`overflow-hidden`,children:e.items.map((t,r)=>{let i=`${e.id}-${r}`,s=g===i;return(0,f.jsxs)(`div`,{className:o(`flex items-center justify-between group`,w[n].padding,a&&r!==e.items.length-1&&`border-b border-border-secondary`,t.editable&&!s&&`hover:bg-surface-secondary/30 cursor-pointer`,`transition-colors`),onClick:()=>{t.editable&&!s&&x(e.id,r,t)},children:[(0,f.jsxs)(`div`,{className:`flex items-center gap-2 flex-shrink-0 min-w-[120px] max-w-[160px]`,children:[t.icon&&(0,f.jsx)(`span`,{className:`text-text-tertiary flex-shrink-0`,children:t.icon}),(0,f.jsx)(`span`,{className:o(`font-medium text-text-secondary truncate`,w[n].label),children:t.label})]}),(0,f.jsx)(`div`,{className:`flex-1 text-right min-w-0 pl-4`,children:s?(0,f.jsxs)(`div`,{className:`flex items-center gap-2 justify-end`,onClick:e=>e.stopPropagation(),children:[(0,f.jsx)(`input`,{type:`text`,value:v,onChange:e=>y(e.target.value),onKeyDown:e=>{e.key===`Enter`&&S(t),e.key===`Escape`&&C()},className:o(`flex-1 bg-surface-primary border border-accent-blue rounded-md px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-accent-blue/30`,w[n].value),autoFocus:!0}),(0,f.jsx)(`button`,{onClick:()=>S(t),className:`text-accent-blue hover:text-accent-blue-hover text-xs font-semibold`,children:`OK`}),(0,f.jsx)(`button`,{onClick:C,className:`text-text-tertiary hover:text-text-secondary text-xs`,children:`Cancel`})]}):(0,f.jsx)(`span`,{className:o(`text-text-primary break-words leading-relaxed`,w[n].value,t.editable&&`group-hover:text-accent-blue transition-colors`),children:t.value})})]},i)})})})]},e.id)})})}),p.displayName=`PropertyList`,m=(0,d.forwardRef)((e,t)=>(0,f.jsx)(p,{ref:t,...e,size:`sm`})),m.displayName=`CompactPropertyList`,p.__docgenInfo={description:``,methods:[],displayName:`PropertyList`,props:{sections:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
    id: string;
    title?: string;
    items: PropertyItem[];
    defaultExpanded?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`title`,value:{name:`string`,required:!1}},{key:`items`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
    label: React.ReactNode;
    value: React.ReactNode;
    icon?: React.ReactNode;
    editable?: boolean;
    onChange?: (value: string) => void;
}`,signature:{properties:[{key:`label`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`value`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`icon`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}},{key:`editable`,value:{name:`boolean`,required:!1}},{key:`onChange`,value:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}},required:!1}}]}}],raw:`PropertyItem[]`,required:!0}},{key:`defaultExpanded`,value:{name:`boolean`,required:!1}}]}}],raw:`PropertySection[]`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'bordered' | 'inset'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'bordered'`},{name:`literal`,value:`'inset'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},collapsible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},dividers:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}}},m.__docgenInfo={description:``,methods:[],displayName:`CompactPropertyList`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'bordered' | 'inset'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'bordered'`},{name:`literal`,value:`'inset'`}]},description:``}},composes:[`Omit`]}})),g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{h(),g=s(),_={title:`Data Display/PropertyList`,component:p,tags:[`autodocs`]},v={args:{items:[{label:`Market Cap`,value:`$8.2B`},{label:`24h Volume`,value:`$1.4B`},{label:`Circulating Supply`,value:`19.3M BTC`},{label:`All-Time High`,value:`$68,789`}]}},y={args:{items:[{label:`Network`,value:`Ethereum`,icon:`ethereum`},{label:`Token Standard`,value:`ERC-20`},{label:`Decimals`,value:`18`},{label:`Contract`,value:`0x1234...5678`,icon:`code`}]}},b={args:{items:[{label:`APY`,value:`12.5%`},{label:`TVL`,value:`$45.2M`},{label:`Duration`,value:`30 days`}],layout:`horizontal`}},x={args:{sections:[]}},S={args:{sections:[{id:`token`,title:`Token Details`,items:[{label:`Market Cap`,value:`$8.2B`,icon:`💰`},{label:`24h Volume`,value:`$1.4B`,icon:`📊`},{label:`Circulating Supply`,value:`19.3M BTC`,icon:`🔄`},{label:`All-Time High`,value:`$68,789`,icon:`🚀`},{label:`Total Supply`,value:`21M BTC`,icon:`🏦`}]}],variant:`bordered`}},C={args:{sections:[{id:`account`,title:`Account Info`,items:[{label:`Balance`,value:`$124,532.00`,editable:!0},{label:`Account Type`,value:`Premium`},{label:`Annual Percentage Yield`,value:`4.25% APY`},{label:`Interest Rate`,value:`0.01% APR`}]}],variant:`inset`,size:`sm`}},w={args:{sections:[{id:`personal`,title:`Personal Information`,items:[{label:`Full Name`,value:`Cesar Ruiz`},{label:`Email`,value:`cesar@example.com`},{label:`Phone`,value:`+1 (555) 123-4567`}]},{id:`billing`,title:`Billing Address`,items:[{label:`Street`,value:`123 FinTech Ave`},{label:`City`,value:`San Francisco`},{label:`State`,value:`CA`},{label:`ZIP`,value:`94105`}]},{id:`preferences`,title:`Preferences`,defaultExpanded:!1,items:[{label:`Language`,value:`English`},{label:`Currency`,value:`USD ($)`},{label:`Notifications`,value:`Enabled`}]}]}},T={args:{sections:[{id:`summary`,items:[{label:`Daily Change`,value:`+$1,230 (2.3%)`},{label:`Weekly Change`,value:`+$4,567 (8.1%)`},{label:`Monthly Change`,value:`+$12,345 (12.5%)`},{label:`Yearly Change`,value:`+$89,012 (45.2%)`}]}],dividers:!1}},E={args:{sections:[{id:`portfolio`,title:`Portfolio Summary`,items:[{label:`Total Value`,value:`$1,234,567.89`},{label:`Realized P&L`,value:`+$234,567`},{label:`Unrealized P&L`,value:`+$98,765`},{label:`Positions Open`,value:`12`},{label:`Win Rate`,value:`67.8%`}]}],size:`lg`,collapsible:!1}},D={args:{sections:[{id:`crypto`,title:`Crypto Holdings`,items:[{label:`Bitcoin (BTC)`,value:`0.42 BTC — $28,456`,icon:`₿`},{label:`Ethereum (ETH)`,value:`5.2 ETH — $16,328`,icon:`⟠`},{label:`USDC`,value:`10,000 USDC`,icon:`💲`},{label:`Solana (SOL)`,value:`50 SOL — $8,750`,icon:`◎`}]}],variant:`bordered`},parameters:{backgrounds:{default:`dark`}},decorators:[e=>(0,g.jsx)(`div`,{className:`dark p-6 bg-zinc-900 rounded-xl`,children:(0,g.jsx)(e,{})})]},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Market Cap',
      value: '$8.2B'
    }, {
      label: '24h Volume',
      value: '$1.4B'
    }, {
      label: 'Circulating Supply',
      value: '19.3M BTC'
    }, {
      label: 'All-Time High',
      value: '$68,789'
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'Network',
      value: 'Ethereum',
      icon: 'ethereum'
    }, {
      label: 'Token Standard',
      value: 'ERC-20'
    }, {
      label: 'Decimals',
      value: '18'
    }, {
      label: 'Contract',
      value: '0x1234...5678',
      icon: 'code'
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: 'APY',
      value: '12.5%'
    }, {
      label: 'TVL',
      value: '$45.2M'
    }, {
      label: 'Duration',
      value: '30 days'
    }],
    layout: 'horizontal'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    sections: []
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      id: 'token',
      title: 'Token Details',
      items: [{
        label: 'Market Cap',
        value: '$8.2B',
        icon: '💰'
      }, {
        label: '24h Volume',
        value: '$1.4B',
        icon: '📊'
      }, {
        label: 'Circulating Supply',
        value: '19.3M BTC',
        icon: '🔄'
      }, {
        label: 'All-Time High',
        value: '$68,789',
        icon: '🚀'
      }, {
        label: 'Total Supply',
        value: '21M BTC',
        icon: '🏦'
      }]
    }],
    variant: 'bordered'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      id: 'account',
      title: 'Account Info',
      items: [{
        label: 'Balance',
        value: '$124,532.00',
        editable: true
      }, {
        label: 'Account Type',
        value: 'Premium'
      }, {
        label: 'Annual Percentage Yield',
        value: '4.25% APY'
      }, {
        label: 'Interest Rate',
        value: '0.01% APR'
      }]
    }],
    variant: 'inset',
    size: 'sm'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      id: 'personal',
      title: 'Personal Information',
      items: [{
        label: 'Full Name',
        value: 'Cesar Ruiz'
      }, {
        label: 'Email',
        value: 'cesar@example.com'
      }, {
        label: 'Phone',
        value: '+1 (555) 123-4567'
      }]
    }, {
      id: 'billing',
      title: 'Billing Address',
      items: [{
        label: 'Street',
        value: '123 FinTech Ave'
      }, {
        label: 'City',
        value: 'San Francisco'
      }, {
        label: 'State',
        value: 'CA'
      }, {
        label: 'ZIP',
        value: '94105'
      }]
    }, {
      id: 'preferences',
      title: 'Preferences',
      defaultExpanded: false,
      items: [{
        label: 'Language',
        value: 'English'
      }, {
        label: 'Currency',
        value: 'USD ($)'
      }, {
        label: 'Notifications',
        value: 'Enabled'
      }]
    }]
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      id: 'summary',
      items: [{
        label: 'Daily Change',
        value: '+$1,230 (2.3%)'
      }, {
        label: 'Weekly Change',
        value: '+$4,567 (8.1%)'
      }, {
        label: 'Monthly Change',
        value: '+$12,345 (12.5%)'
      }, {
        label: 'Yearly Change',
        value: '+$89,012 (45.2%)'
      }]
    }],
    dividers: false
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      id: 'portfolio',
      title: 'Portfolio Summary',
      items: [{
        label: 'Total Value',
        value: '$1,234,567.89'
      }, {
        label: 'Realized P&L',
        value: '+$234,567'
      }, {
        label: 'Unrealized P&L',
        value: '+$98,765'
      }, {
        label: 'Positions Open',
        value: '12'
      }, {
        label: 'Win Rate',
        value: '67.8%'
      }]
    }],
    size: 'lg',
    collapsible: false
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      id: 'crypto',
      title: 'Crypto Holdings',
      items: [{
        label: 'Bitcoin (BTC)',
        value: '0.42 BTC — $28,456',
        icon: '₿'
      }, {
        label: 'Ethereum (ETH)',
        value: '5.2 ETH — $16,328',
        icon: '⟠'
      }, {
        label: 'USDC',
        value: '10,000 USDC',
        icon: '💲'
      }, {
        label: 'Solana (SOL)',
        value: '50 SOL — $8,750',
        icon: '◎'
      }]
    }],
    variant: 'bordered'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [(Story: any) => <div className="dark p-6 bg-zinc-900 rounded-xl">
        <Story />
      </div>]
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithIcons`,`Horizontal`,`Empty`,`BorderedVariant`,`InsetVariant`,`MultipleSections`,`NoDividers`,`LargeSize`,`DarkMode`]}))();export{S as BorderedVariant,D as DarkMode,v as Default,x as Empty,b as Horizontal,C as InsetVariant,E as LargeSize,w as MultipleSections,T as NoDividers,y as WithIcons,O as __namedExportsOrder,_ as default};