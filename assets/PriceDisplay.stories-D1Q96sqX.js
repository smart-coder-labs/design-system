import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BUF2whoS.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";var o,s,c,l=e((()=>{o=t(n()),r(),s=a(),c=({amount:e,currency:t=`USD`,locale:n=`en-US`,showCents:r=!0,compact:a=!1,className:c=``,original:l=null,variant:u=`default`,currencyDisplay:d=`symbol`})=>{let f=o.useMemo(()=>new Intl.NumberFormat(n,{style:`currency`,currency:t,minimumFractionDigits:r?2:0,maximumFractionDigits:r?2:0,currencyDisplay:d}),[n,t,r,d]),p=f.formatToParts(e),m=(e,t,n=``)=>(0,s.jsx)(`span`,{className:n,children:t},e),h={default:`text-text-primary`,muted:`text-text-tertiary`,accent:`text-accent-blue`},g=`font-semibold ${h[u]} ${a?`text-base`:`text-2xl`}`,_=`${a?`text-base`:`text-2xl`} font-semibold ${h[u]} mr-2`;return(0,s.jsxs)(`div`,{className:i(`inline-flex items-baseline gap-3`,c),"aria-label":`Price ${t} ${e}`,children:[(0,s.jsx)(`div`,{className:i(`inline-flex items-baseline`,a?`text-base`:`text-lg`),children:p.map((e,t)=>{let n=`text-xs opacity-90`,r=e.type===`fraction`?`align-baseline ${n} ${h[u]}`:e.type===`decimal`?`${n} ${h[u]}`:e.type===`currency`?_:``,i=e.type===`integer`?g:r;return m(String(t)+e.type,e.value,i)})}),l!=null&&(0,s.jsx)(`div`,{className:`text-sm text-text-tertiary line-through`,children:f.format(l)})]})},c.__docgenInfo={description:``,methods:[],displayName:`PriceDisplay`,props:{amount:{required:!0,tsType:{name:`number`},description:`Value in smallest currency unit (decimal number). Example: 19.99`},currency:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'USD'`,computed:!1}},locale:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'en-US'`,computed:!1}},showCents:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},compact:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},original:{required:!1,tsType:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},description:`If provided, shows this as the original price (struck-through)`,defaultValue:{value:`null`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'muted' | 'accent'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'muted'`},{name:`literal`,value:`'accent'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},currencyDisplay:{required:!1,tsType:{name:`union`,raw:`'symbol' | 'code' | 'narrowSymbol'`,elements:[{name:`literal`,value:`'symbol'`},{name:`literal`,value:`'code'`},{name:`literal`,value:`'narrowSymbol'`}]},description:``,defaultValue:{value:`'symbol'`,computed:!1}}}}})),u,d,f,p,m,h,g,_,v,y,b;e((()=>{l(),u=a(),d={title:`Data Display/PriceDisplay`,component:c,tags:[`autodocs`]},f={args:{value:1234.56,currency:`USD`}},p={args:{value:45678.9,currency:`USD`,change:2.45}},m={args:{value:32e3,currency:`BTC`,change:-1.23}},h={args:{value:125e4,currency:`USD`,compact:!0}},g={args:{value:.025,currency:`BTC`,change:5.67,compact:!0}},_={args:{value:250,currency:`USDC`,label:`Available Balance`}},v={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,u.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,u.jsx)(e,{})})]},y={parameters:{viewport:{defaultViewport:`mobile1`}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1234.56,
    currency: 'USD'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 45678.90,
    currency: 'USD',
    change: 2.45
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 32000.00,
    currency: 'BTC',
    change: -1.23
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: 1250000.00,
    currency: 'USD',
    compact: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0.025,
    currency: 'BTC',
    change: 5.67,
    compact: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 250.00,
    currency: 'USDC',
    label: 'Available Balance'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`PositiveChange`,`NegativeChange`,`LargeValue`,`CompactWithChange`,`WithLabel`,`DarkMode`,`MobileView`]}))();export{g as CompactWithChange,v as DarkMode,f as Default,h as LargeValue,y as MobileView,m as NegativeChange,p as PositiveChange,_ as WithLabel,b as __namedExportsOrder,d as default};