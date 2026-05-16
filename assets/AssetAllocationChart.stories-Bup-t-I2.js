import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BGx_IYCs.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{l as i,s as a,t as o}from"./es-Ch39IMKG.js";import{n as s,t as c}from"./utils-COD7dmCP.js";import{Xn as l,_ as u,t as d}from"./lucide-react-B3O-UhxF.js";var f,p,m,h=e((()=>{f=t(n()),o(),d(),s(),p=r(),m=({assets:e,currency:t=`USD`,className:n})=>{let[r,o]=(0,f.useState)(null),s=e.reduce((e,t)=>e+t.value,0),d=e=>new Intl.NumberFormat(`en-US`,{style:`currency`,currency:t,maximumFractionDigits:0}).format(e),m=[...e].map(e=>({...e,percentage:e.value/s*100})).sort((e,t)=>t.percentage-e.percentage);return(0,p.jsxs)(`div`,{className:c(`w-full max-w-lg bg-surface-primary rounded-[2rem] p-6 shadow-xl border border-border-primary`,n),children:[(0,p.jsxs)(`div`,{className:`flex items-center justify-between mb-6`,children:[(0,p.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,p.jsx)(`div`,{className:`p-2 bg-accent-blue-tint text-accent-blue rounded-xl shadow-sm`,children:(0,p.jsx)(l,{className:`w-5 h-5`})}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`h3`,{className:`text-lg font-bold text-text-primary`,children:`Asset Allocation`}),(0,p.jsx)(`p`,{className:`text-sm text-text-tertiary`,children:`Total Portfolio Value`})]})]}),(0,p.jsx)(`div`,{className:`text-right`,children:(0,p.jsx)(`p`,{className:`text-2xl font-black text-text-primary tracking-tight`,children:d(s)})})]}),(0,p.jsx)(`div`,{className:`relative w-full h-64 rounded-2xl overflow-hidden flex flex-wrap gap-1 p-1 bg-background-secondary border border-border-primary shadow-inner`,children:m.map(e=>{let t=r===e.id,n=r!==null&&r!==e.id,s=Math.max(e.percentage,10);return(0,p.jsxs)(a.div,{onMouseEnter:()=>o(e.id),onMouseLeave:()=>o(null),className:c(`relative rounded-xl flex flex-col justify-end p-3 overflow-hidden cursor-pointer transition-all duration-300 shadow-sm hover:shadow-md`,e.color.startsWith(`bg-`)?e.color:`bg-accent-blue`),style:{flexBasis:`${s}%`,flexGrow:e.percentage,backgroundColor:e.color.startsWith(`bg-`)?void 0:e.color,opacity:n?.4:1,filter:n?`grayscale(50%)`:`none`,transform:r===e.id?`scale(1.02)`:`scale(1)`,zIndex:r===e.id?10:1,transition:`transform 200ms ease, opacity 200ms ease, filter 200ms ease`},children:[(0,p.jsx)(`div`,{className:`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none`}),(0,p.jsx)(i,{children:(t||e.percentage>15)&&(0,p.jsxs)(a.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},exit:{opacity:0},className:`relative z-10`,children:[(0,p.jsxs)(`div`,{className:`font-bold text-lg leading-none drop-shadow-md text-white`,children:[e.percentage.toFixed(1),`%`]}),(0,p.jsx)(`div`,{className:`text-xs font-medium opacity-90 truncate leading-tight mt-1 text-white`,children:e.name})]})})]},e.id)})}),(0,p.jsx)(`div`,{className:`mt-6 space-y-3 max-h-48 overflow-y-auto custom-scrollbar pr-2`,children:m.map(e=>(0,p.jsxs)(`div`,{onMouseEnter:()=>o(e.id),onMouseLeave:()=>o(null),className:c(`flex items-center justify-between p-3 rounded-xl border border-transparent transition-all cursor-default`,r===e.id?`bg-background-secondary border-border-primary shadow-sm`:`hover:bg-background-secondary/50`),children:[(0,p.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,p.jsx)(`div`,{className:c(`w-3 h-3 rounded-full shadow-inner`,e.color),style:{backgroundColor:e.color.startsWith(`bg-`)?void 0:e.color}}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{className:`text-sm font-bold text-text-primary leading-tight`,children:e.name}),(0,p.jsxs)(`div`,{className:`flex items-center gap-1.5 mt-0.5`,children:[(0,p.jsx)(`p`,{className:`text-[10px] font-bold uppercase tracking-wider text-text-tertiary`,children:e.ticker}),(0,p.jsx)(`span`,{className:`w-1 h-1 rounded-full bg-border-primary`}),(0,p.jsxs)(`p`,{className:c(`text-[10px] uppercase font-bold tracking-wider`,e.riskLevel===`high`?`text-status-error`:e.riskLevel===`medium`?`text-status-warning`:`text-status-success`),children:[e.riskLevel,` Risk`]})]})]})]}),(0,p.jsxs)(`div`,{className:`text-right`,children:[(0,p.jsx)(`p`,{className:`text-sm font-bold text-text-primary leading-tight`,children:d(e.value)}),(0,p.jsxs)(`p`,{className:`text-[10px] font-bold text-text-tertiary tracking-wider`,children:[e.percentage.toFixed(2),`%`]})]})]},e.id))}),m.filter(e=>e.riskLevel===`high`).reduce((e,t)=>e+t.percentage,0)>40&&(0,p.jsxs)(`div`,{className:`mt-5 p-3 rounded-xl bg-status-warning/10 border border-status-warning/20 flex gap-3 items-start`,children:[(0,p.jsx)(u,{className:`w-5 h-5 text-status-warning shrink-0 mt-0.5`}),(0,p.jsxs)(`p`,{className:`text-xs text-status-warning font-medium`,children:[(0,p.jsx)(`b`,{children:`High Risk Concentration:`}),` Over 40% of your portfolio is in high-risk assets. Consider diversifying to reduce volatility.`]})]})]})},m.displayName=`AssetAllocationChart`,m.__docgenInfo={description:``,methods:[],displayName:`AssetAllocationChart`,props:{assets:{required:!0,tsType:{name:`Array`,elements:[{name:`AllocationAsset`}],raw:`AllocationAsset[]`},description:``},currency:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'USD'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{h(),g=r(),_={title:`Fintech/Wealth & Crypto/AssetAllocationChart`,component:m,tags:[`autodocs`]},v=[{id:`1`,name:`US Tech Stocks`,ticker:`VGT`,value:45e3,color:`#007AFF`,riskLevel:`high`},{id:`2`,name:`Government Bonds`,ticker:`BND`,value:25e3,color:`#34C759`,riskLevel:`low`},{id:`3`,name:`Real Estate ETF`,ticker:`VNQ`,value:18e3,color:`#FF9500`,riskLevel:`medium`},{id:`4`,name:`Crypto Index`,ticker:`CRYP`,value:12e3,color:`#AF52DE`,riskLevel:`high`},{id:`5`,name:`International Equities`,ticker:`VXUS`,value:1e4,color:`#5AC8FA`,riskLevel:`medium`}],y={args:{assets:v,currency:`USD`}},b={args:{assets:v,currency:`EUR`}},x={args:{assets:v.slice(0,2),currency:`USD`}},S={args:{assets:[v[0]],currency:`USD`}},C={args:{assets:[{id:`1`,name:`Government Bonds`,ticker:`BND`,value:6e4,color:`#34C759`,riskLevel:`low`},{id:`2`,name:`T-Bills`,ticker:`TBIL`,value:25e3,color:`#5AC8FA`,riskLevel:`low`},{id:`3`,name:`Dividend Stocks`,ticker:`VYM`,value:15e3,color:`#007AFF`,riskLevel:`medium`}],currency:`USD`}},w={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,g.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,g.jsx)(e,{})})]},T={parameters:{viewport:{defaultViewport:`mobile1`}}},E={parameters:{docs:{description:{story:`AssetAllocationChart used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    assets: sampleAssets,
    currency: 'USD'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    assets: sampleAssets,
    currency: 'EUR'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    assets: sampleAssets.slice(0, 2),
    currency: 'USD'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    assets: [sampleAssets[0]],
    currency: 'USD'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    assets: [{
      id: '1',
      name: 'Government Bonds',
      ticker: 'BND',
      value: 60000,
      color: '#34C759',
      riskLevel: 'low' as const
    }, {
      id: '2',
      name: 'T-Bills',
      ticker: 'TBIL',
      value: 25000,
      color: '#5AC8FA',
      riskLevel: 'low' as const
    }, {
      id: '3',
      name: 'Dividend Stocks',
      ticker: 'VYM',
      value: 15000,
      color: '#007AFF',
      riskLevel: 'medium' as const
    }],
    currency: 'USD'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'AssetAllocationChart used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`EuroCurrency`,`TwoAssets`,`SingleAsset`,`ConservativePortfolio`,`DarkMode`,`MobileView`,`FintechUseCase`]}))();export{C as ConservativePortfolio,w as DarkMode,y as Default,b as EuroCurrency,E as FintechUseCase,T as MobileView,S as SingleAsset,x as TwoAssets,D as __namedExportsOrder,_ as default};