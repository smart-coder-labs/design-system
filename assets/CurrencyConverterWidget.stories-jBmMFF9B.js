import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-B1a0g5t6.js";import{Or as r,Un as i,Zt as a,qn as o,t as s}from"./lucide-react-BVeuibpS.js";import{n as c,t as l}from"./utils-ijcE-ZHT.js";import{t as u}from"./jsx-runtime-DaLCRA3n.js";import{s as d,t as f}from"./es-BBowbM95.js";var p,m,h,g=e((()=>{p=t(n()),f(),s(),c(),m=u(),h=({currencies:e,exchangeRate:t=.92,feePercentage:n=.5,estimatedDelivery:s=`In seconds`,className:c,onConvert:u})=>{let[f,h]=(0,p.useState)(`1000`),[g,_]=(0,p.useState)(e[0]||{code:`USD`,flag:`🇺🇸`,name:`US Dollar`}),[v,y]=(0,p.useState)(e[1]||{code:`EUR`,flag:`🇪🇺`,name:`Euro`}),[b,x]=(0,p.useState)(!1),S=parseFloat(f)||0,C=S*n/100,w=S-C,T=w*t;return(0,m.jsxs)(`div`,{className:l(`w-full max-w-md bg-surface-primary rounded-3xl p-6 shadow-xl border border-border-primary`,c),children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between mb-6`,children:[(0,m.jsx)(`h3`,{className:`text-lg font-semibold text-text-primary`,children:`Send Money`}),(0,m.jsx)(`button`,{className:`text-sm text-accent-blue font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded`,children:`Rates`})]}),(0,m.jsxs)(`div`,{className:`space-y-4`,children:[(0,m.jsxs)(`div`,{className:`bg-background-secondary rounded-2xl p-4 border border-border-primary focus-within:border-accent-blue transition-colors`,children:[(0,m.jsx)(`p`,{className:`text-xs font-medium text-text-tertiary mb-2`,children:`You send`}),(0,m.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,m.jsx)(`input`,{type:`number`,value:f,onChange:e=>h(e.target.value),className:`bg-transparent text-3xl font-semibold text-text-primary outline-none w-1/2 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`,placeholder:`0.00`}),(0,m.jsxs)(`button`,{className:`flex items-center gap-2 bg-surface-primary border border-border-primary rounded-full px-3 py-1.5 hover:bg-background-secondary transition-colors shadow-sm`,children:[(0,m.jsx)(`span`,{className:`text-lg`,children:g.flag}),(0,m.jsx)(`span`,{className:`font-semibold text-text-primary`,children:g.code})]})]})]}),(0,m.jsxs)(`div`,{className:`flex flex-col items-center gap-1`,children:[(0,m.jsx)(d.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>{x(!0),setTimeout(()=>{_(v),y(g),x(!1)},300)},className:`self-center z-10 bg-surface-primary border border-border-primary rounded-full p-2 shadow-sm text-text-secondary hover:text-accent-blue transition-colors`,children:(0,m.jsx)(d.div,{animate:{rotate:b?180:0},transition:{duration:.3},children:(0,m.jsx)(r,{className:`w-4 h-4`})})}),(0,m.jsxs)(`div`,{className:`w-full py-2 space-y-3`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-2 text-text-tertiary`,children:[(0,m.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-border-primary`}),(0,m.jsxs)(`span`,{children:[`Fee (`,n,`%)`]})]}),(0,m.jsxs)(`span`,{className:`font-medium text-text-secondary`,children:[`- `,C.toFixed(2),` `,g.code]})]}),(0,m.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-2 text-text-tertiary`,children:[(0,m.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-border-primary`}),(0,m.jsx)(`span`,{children:`Amount we'll convert`})]}),(0,m.jsxs)(`span`,{className:`font-medium text-text-secondary`,children:[w.toFixed(2),` `,g.code]})]}),(0,m.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-2 text-status-success`,children:[(0,m.jsx)(`span`,{className:`w-1.5 h-1.5 rounded-full bg-status-success`}),(0,m.jsxs)(`span`,{className:`flex items-center gap-1 font-medium`,children:[`Guaranteed rate `,(0,m.jsx)(a,{className:`w-3.5 h-3.5`})]})]}),(0,m.jsx)(`span`,{className:`font-medium text-text-primary`,children:t.toFixed(4)})]})]})]}),(0,m.jsxs)(`div`,{className:`bg-background-secondary rounded-2xl p-4 border border-border-primary`,children:[(0,m.jsx)(`p`,{className:`text-xs font-medium text-text-tertiary mb-2`,children:`Recipient gets`}),(0,m.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,m.jsx)(`span`,{className:`text-3xl font-semibold text-text-primary truncate w-1/2`,children:T.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})}),(0,m.jsxs)(`button`,{className:`flex items-center gap-2 bg-surface-primary border border-border-primary rounded-full px-3 py-1.5 hover:bg-background-secondary transition-colors shadow-sm`,children:[(0,m.jsx)(`span`,{className:`text-lg`,children:v.flag}),(0,m.jsx)(`span`,{className:`font-semibold text-text-primary`,children:v.code})]})]})]})]}),(0,m.jsxs)(`div`,{className:`mt-6 flex flex-col gap-4`,children:[(0,m.jsxs)(`div`,{className:`flex items-center justify-between bg-status-success/10 rounded-xl p-3 border border-status-success/20`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-2 text-sm text-status-success font-medium`,children:[(0,m.jsx)(i,{className:`w-4 h-4`}),(0,m.jsxs)(`span`,{children:[`Arrives `,s]})]}),(0,m.jsx)(o,{className:`w-4 h-4 text-status-success`})]}),(0,m.jsx)(d.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>u?.(g.code,v.code,S),className:`w-full py-4 bg-accent-blue hover:bg-accent-blue-hover text-white rounded-2xl font-semibold shadow-lg shadow-accent-blue/30 transition-all`,children:`Continue`})]})]})},h.displayName=`CurrencyConverterWidget`,h.__docgenInfo={description:``,methods:[],displayName:`CurrencyConverterWidget`,props:{currencies:{required:!0,tsType:{name:`Array`,elements:[{name:`CurrencyOption`}],raw:`CurrencyOption[]`},description:``},exchangeRate:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0.92`,computed:!1}},feePercentage:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0.5`,computed:!1}},estimatedDelivery:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'In seconds'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},onConvert:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(from: string, to: string, amount: number) => void`,signature:{arguments:[{type:{name:`string`},name:`from`},{type:{name:`string`},name:`to`},{type:{name:`number`},name:`amount`}],return:{name:`void`}}},description:``}}}})),_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{g(),_=u(),v={title:`Fintech/FX & International Payments/CurrencyConverterWidget`,component:h,tags:[`autodocs`]},y=[{code:`USD`,flag:`🇺🇸`,name:`US Dollar`},{code:`EUR`,flag:`🇪🇺`,name:`Euro`},{code:`GBP`,flag:`🇬🇧`,name:`British Pound`},{code:`JPY`,flag:`🇯🇵`,name:`Japanese Yen`},{code:`MXN`,flag:`🇲🇽`,name:`Mexican Peso`},{code:`BRL`,flag:`🇧🇷`,name:`Brazilian Real`},{code:`CAD`,flag:`🇨🇦`,name:`Canadian Dollar`},{code:`CHF`,flag:`🇨🇭`,name:`Swiss Franc`}],b={args:{currencies:y,exchangeRate:.92,feePercentage:.5,estimatedDelivery:`In seconds`}},x={args:{currencies:y,exchangeRate:.86,feePercentage:.3,estimatedDelivery:`1-2 business days`}},S={args:{currencies:y,exchangeRate:17.25,feePercentage:1,estimatedDelivery:`In seconds`}},C={args:{currencies:y,exchangeRate:1.35,feePercentage:3.5,estimatedDelivery:`2-3 business days`}},w={args:{currencies:y,exchangeRate:1.12,feePercentage:0,estimatedDelivery:`In seconds`}},T={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,_.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,_.jsx)(e,{})})]},E={parameters:{viewport:{defaultViewport:`mobile1`}}},D={parameters:{docs:{description:{story:`CurrencyConverterWidget used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    currencies: defaultCurrencies,
    exchangeRate: 0.92,
    feePercentage: 0.5,
    estimatedDelivery: 'In seconds'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    currencies: defaultCurrencies,
    exchangeRate: 0.86,
    feePercentage: 0.3,
    estimatedDelivery: '1-2 business days'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    currencies: defaultCurrencies,
    exchangeRate: 17.25,
    feePercentage: 1.0,
    estimatedDelivery: 'In seconds'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    currencies: defaultCurrencies,
    exchangeRate: 1.35,
    feePercentage: 3.5,
    estimatedDelivery: '2-3 business days'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    currencies: defaultCurrencies,
    exchangeRate: 1.12,
    feePercentage: 0,
    estimatedDelivery: 'In seconds'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'CurrencyConverterWidget used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`EURtoGBP`,`USDtoMXN`,`HighFee`,`ZeroFee`,`DarkMode`,`MobileView`,`FintechUseCase`]}))();export{T as DarkMode,b as Default,x as EURtoGBP,D as FintechUseCase,C as HighFee,E as MobileView,S as USDtoMXN,w as ZeroFee,O as __namedExportsOrder,v as default};