import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C-nBdNCE.js";import{Dr as r,H as i,Zt as a,r as o,t as s}from"./lucide-react-DXerBtR-.js";import{n as c,t as l}from"./utils-CcEteFRA.js";import{t as u}from"./jsx-runtime-WZfjI2gv.js";import{s as d,t as f}from"./es-CfCMxUIg.js";var p,m,h,g=e((()=>{p=t(n()),f(),s(),c(),m=u(),h=({assets:e,className:t,onSwap:n})=>{let[s,c]=(0,p.useState)(e[0]||{id:`btc`,symbol:`BTC`,name:`Bitcoin`,iconUrl:`₿`,balance:.5,priceUsd:45e3}),[u,f]=(0,p.useState)(e[1]||{id:`usdc`,symbol:`USDC`,name:`USD Coin`,iconUrl:`💲`,balance:1e3,priceUsd:1}),[h,g]=(0,p.useState)(`0.1`),[_,v]=(0,p.useState)(0),y=parseFloat(h)||0,b=y*s.priceUsd,x=y*(s.priceUsd/u.priceUsd),S=.5,C=2.5,w=Math.max(0,x*(1-S/100)-C/u.priceUsd);return(0,m.jsxs)(`div`,{className:l(`w-full max-w-sm bg-surface-primary rounded-[2rem] p-6 shadow-xl border border-border-primary`,t),children:[(0,m.jsx)(`div`,{className:`flex items-center justify-between mb-6`,children:(0,m.jsxs)(`h3`,{className:`text-xl font-bold text-text-primary flex items-center gap-2`,children:[(0,m.jsx)(o,{className:`w-5 h-5 text-amber-500`}),`Swap Crypto`]})}),(0,m.jsxs)(`div`,{className:`relative flex flex-col gap-2 relative z-10`,children:[(0,m.jsxs)(`div`,{className:`bg-background-secondary rounded-3xl p-4 border border-border-primary focus-within:ring-2 focus-within:ring-blue-500/20 transition-all`,children:[(0,m.jsxs)(`div`,{className:`flex justify-between items-center mb-2`,children:[(0,m.jsx)(`span`,{className:`text-sm font-semibold text-text-tertiary`,children:`You pay`}),(0,m.jsxs)(`span`,{className:`text-xs font-medium text-text-secondary bg-background-secondary px-2 py-1 rounded-lg`,children:[`Bal: `,s.balance,` `,s.symbol]})]}),(0,m.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,m.jsx)(`input`,{type:`number`,value:h,onChange:e=>g(e.target.value),placeholder:`0`,className:`w-1/2 text-4xl font-bold tracking-tighter bg-transparent outline-none text-text-primary [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}),(0,m.jsxs)(`button`,{className:`flex-1 flex items-center justify-between gap-2 p-2 pl-3 ml-auto text-text-primary bg-surface-primary rounded-2xl shadow-sm border border-border-primary hover:bg-background-secondary transition-colors cursor-pointer`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,m.jsx)(`span`,{className:`text-2xl`,children:s.iconUrl}),(0,m.jsx)(`span`,{className:`font-bold`,children:s.symbol})]}),(0,m.jsx)(`span`,{className:`text-text-tertiary rotate-90`,children:`›`})]})]}),(0,m.jsxs)(`p`,{className:`text-sm font-medium text-text-tertiary mt-2`,children:[`≈ $`,b.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2})]})]}),(0,m.jsx)(`div`,{className:`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20`,children:(0,m.jsx)(d.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:()=>{v(e=>e+180),c(u),f(s),g(`0`)},className:`p-2.5 bg-background-secondary border-4 border-surface-primary dark:border-zinc-900 rounded-full text-text-secondary hover:text-blue-500 transition-all shadow-sm`,children:(0,m.jsx)(d.div,{animate:{rotate:_},transition:{duration:.35,ease:`easeInOut`},children:(0,m.jsx)(r,{className:`w-5 h-5`})})})}),(0,m.jsxs)(`div`,{className:`bg-background-secondary rounded-3xl p-4 border border-border-primary`,children:[(0,m.jsx)(`div`,{className:`flex justify-between items-center mb-2`,children:(0,m.jsx)(`span`,{className:`text-sm font-semibold text-text-tertiary`,children:`You receive`})}),(0,m.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,m.jsx)(`div`,{className:`w-1/2 text-4xl font-bold tracking-tighter text-text-primary truncate`,children:w>0?w.toLocaleString(void 0,{maximumFractionDigits:4}):`0`}),(0,m.jsxs)(`button`,{className:`flex-1 flex items-center justify-between gap-2 p-2 pl-3 ml-auto text-text-primary bg-surface-primary rounded-2xl shadow-sm border border-border-primary hover:bg-background-secondary transition-colors cursor-pointer`,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,m.jsx)(`span`,{className:`text-2xl`,children:u.iconUrl}),(0,m.jsx)(`span`,{className:`font-bold`,children:u.symbol})]}),(0,m.jsx)(`span`,{className:`text-text-tertiary rotate-90`,children:`›`})]})]})]})]}),(0,m.jsxs)(`div`,{className:`mt-6 space-y-3 bg-blue-50 dark:bg-blue-900/10 p-4 rounded-2xl border border-blue-200 dark:border-blue-900/40`,children:[(0,m.jsxs)(`div`,{className:`flex justify-between items-center text-sm font-medium`,children:[(0,m.jsxs)(`span`,{className:`text-text-tertiary flex items-center gap-1.5 tooltip-trigger relative group`,children:[`Network Cost `,(0,m.jsx)(a,{className:`w-3.5 h-3.5`}),(0,m.jsx)(`div`,{className:`absolute bottom-full left-0 mb-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-zinc-900 text-white text-xs p-2 rounded-lg z-50 shadow-xl`,children:`Gas fee to process this on the blockchain. We found the cheapest route.`})]}),(0,m.jsxs)(`span`,{className:`text-text-primary`,children:[`$`,C.toFixed(2)]})]}),(0,m.jsxs)(`div`,{className:`flex justify-between items-center text-sm font-medium`,children:[(0,m.jsxs)(`span`,{className:`text-text-tertiary flex items-center gap-1.5 tooltip-trigger relative group`,children:[`Fair Execution `,(0,m.jsx)(a,{className:`w-3.5 h-3.5`}),(0,m.jsxs)(`div`,{className:`absolute bottom-full left-0 mb-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none bg-zinc-900 text-white text-xs p-2 rounded-lg z-50 shadow-xl`,children:[`Includes a `,S,`% protective spread to prevent failed transactions (Slippage).`]})]}),(0,m.jsxs)(`span`,{className:`text-emerald-600 flex items-center gap-1`,children:[(0,m.jsx)(i,{className:`w-4 h-4`}),` Guaranteed`]})]})]}),(0,m.jsx)(d.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>n?.(s.id,u.id,y),disabled:y>s.balance||y<=0,className:l(`w-full py-4 rounded-xl font-bold text-center mt-6 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue`,y>s.balance||y<=0?`bg-background-secondary text-text-tertiary cursor-not-allowed`:`bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30`),children:y>s.balance?`Insufficient Funds`:`Review Swap`})]})},h.displayName=`RetailSwapInterface`,h.__docgenInfo={description:``,methods:[],displayName:`RetailSwapInterface`,props:{assets:{required:!0,tsType:{name:`Array`,elements:[{name:`CryptoAsset`}],raw:`CryptoAsset[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``},onSwap:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(from: string, to: string, amount: number) => void`,signature:{arguments:[{type:{name:`string`},name:`from`},{type:{name:`string`},name:`to`},{type:{name:`number`},name:`amount`}],return:{name:`void`}}},description:``}}}})),_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{g(),_=t(n()),v=u(),y={title:`Fintech/Wealth & Crypto/RetailSwapInterface`,component:h,tags:[`autodocs`]},b={args:{onSwap:(e,t,n)=>console.log(`Swap ${n} ${e} to ${t}`)}},x={args:{fromCurrency:`USD`,toCurrency:`EUR`,fromAmount:`1000`,onSwap:(e,t,n)=>console.log(`Swap ${n} ${e} to ${t}`)}},S={args:{fromCurrency:`BTC`,toCurrency:`ETH`,fromAmount:`0.5`,onSwap:(e,t,n)=>console.log(`Swap ${n} ${e} to ${t}`)}},C={args:{fromCurrency:`USD`,toCurrency:`GBP`,fromAmount:`50000`,onSwap:(e,t,n)=>console.log(`Swap ${n} ${e} to ${t}`)}},w={args:{fromCurrency:`MXN`,toCurrency:`JPY`,fromAmount:`25000`,onSwap:(e,t,n)=>console.log(`Swap ${n} ${e} to ${t}`)}},T={render:()=>{let[e,t]=(0,_.useState)([]);return(0,v.jsxs)(`div`,{className:`space-y-4`,children:[(0,v.jsx)(h,{onSwap:(e,n,r)=>{t(t=>[...t,{from:e,to:n,amount:r}])}}),e.length>0&&(0,v.jsxs)(`div`,{className:`p-4 bg-surface-secondary rounded-xl border border-border-primary`,children:[(0,v.jsx)(`h4`,{className:`text-sm font-semibold mb-2`,children:`Swap History`}),(0,v.jsx)(`div`,{className:`space-y-1 text-sm`,children:e.map((e,t)=>(0,v.jsxs)(`p`,{children:[`Swapped `,e.amount,` `,e.from,` → `,e.to]},t))})]})]})}},E={parameters:{themes:{themeOverride:`dark`}},args:{onSwap:(e,t,n)=>console.log(`Swap ${n} ${e} to ${t}`)}},D={parameters:{viewport:{defaultViewport:`mobile1`}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:"{\n  args: {\n    onSwap: (from, to, amount) => console.log(`Swap ${amount} ${from} to ${to}`)\n  }\n}",...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    fromCurrency: 'USD',
    toCurrency: 'EUR',
    fromAmount: '1000',
    onSwap: (from, to, amount) => console.log(\`Swap \${amount} \${from} to \${to}\`)
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    fromCurrency: 'BTC',
    toCurrency: 'ETH',
    fromAmount: '0.5',
    onSwap: (from, to, amount) => console.log(\`Swap \${amount} \${from} to \${to}\`)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    fromCurrency: 'USD',
    toCurrency: 'GBP',
    fromAmount: '50000',
    onSwap: (from, to, amount) => console.log(\`Swap \${amount} \${from} to \${to}\`)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    fromCurrency: 'MXN',
    toCurrency: 'JPY',
    fromAmount: '25000',
    onSwap: (from, to, amount) => console.log(\`Swap \${amount} \${from} to \${to}\`)
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [history, setHistory] = useState<{
      from: string;
      to: string;
      amount: string;
    }[]>([]);
    return <div className="space-y-4">
                <RetailSwapInterface onSwap={(from, to, amount) => {
        setHistory(prev => [...prev, {
          from,
          to,
          amount
        }]);
      }} />
                {history.length > 0 && <div className="p-4 bg-surface-secondary rounded-xl border border-border-primary">
                        <h4 className="text-sm font-semibold mb-2">Swap History</h4>
                        <div className="space-y-1 text-sm">
                            {history.map((h, i) => <p key={i}>Swapped {h.amount} {h.from} → {h.to}</p>)}
                        </div>
                    </div>}
            </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    onSwap: (from, to, amount) => console.log(\`Swap \${amount} \${from} to \${to}\`)
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`USDToEUR`,`CryptoSwap`,`LargeAmount`,`ExoticPair`,`InteractiveSwap`,`DarkMode`,`MobileView`]}))();export{S as CryptoSwap,E as DarkMode,b as Default,w as ExoticPair,T as InteractiveSwap,C as LargeAmount,D as MobileView,x as USDToEUR,O as __namedExportsOrder,y as default};