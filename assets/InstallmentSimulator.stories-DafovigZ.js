import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-jtk2jlYO.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{s as o,t as s}from"./es-DLZWAS6t.js";import{V as c,fr as l,t as u}from"./lucide-react-LrcM5b-z.js";var d,f,p,m=e((()=>{d=t(n()),s(),u(),r(),f=a(),p=({purchaseAmount:e=1200,currency:t=`USD`,maxMonths:n=12,interestRate:r=18,className:a,onConfirm:s})=>{let[u,p]=(0,d.useState)(3),m=r/100/12,h=u===1?e:e*m/(1-(1+m)**+-u),g=h*u,_=g-e,v=e=>new Intl.NumberFormat(`en-US`,{style:`currency`,currency:t,minimumFractionDigits:2,maximumFractionDigits:2}).format(e),y=[1,3,6,9,12].filter(e=>e<=n);return(0,f.jsxs)(`div`,{className:i(`w-full max-w-md bg-surface-primary rounded-[2rem] p-6 shadow-xl border border-border-primary`,a),children:[(0,f.jsxs)(`div`,{className:`flex items-center gap-3 mb-6`,children:[(0,f.jsx)(`div`,{className:`p-2.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl shadow-sm`,children:(0,f.jsx)(c,{className:`w-5 h-5`})}),(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`h3`,{className:`text-lg font-bold text-text-primary`,children:`Pay Over Time`}),(0,f.jsx)(`p`,{className:`text-sm text-text-tertiary`,children:`Choose how you want to split this purchase`})]})]}),(0,f.jsxs)(`div`,{className:`bg-background-secondary dark:bg-gray-900/40 rounded-3xl p-6 border border-border-primary/50 mb-6`,children:[(0,f.jsx)(`div`,{className:`flex justify-between items-end mb-4`,children:(0,f.jsxs)(`div`,{children:[(0,f.jsx)(`p`,{className:`text-xs uppercase tracking-wider text-text-tertiary font-bold mb-1`,children:`Buy Now Price`}),(0,f.jsx)(`h2`,{className:`text-2xl font-bold tracking-tight text-text-primary`,children:v(e)})]})}),(0,f.jsxs)(`div`,{className:`space-y-3`,children:[(0,f.jsx)(`p`,{className:`text-sm font-medium text-text-secondary`,children:`Choose Duration`}),(0,f.jsx)(`div`,{className:`flex gap-2 pb-2`,children:y.map(e=>(0,f.jsxs)(`button`,{onClick:()=>p(e),className:i(`flex-1 py-3 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer shadow-sm`,u===e?`border-accent-blue bg-accent-blue-tint text-accent-blue ring-1 ring-accent-blue`:`border-border-primary bg-surface-primary text-text-secondary hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-md`),children:[(0,f.jsx)(`span`,{className:i(`text-lg font-bold`,u===e?`text-blue-600 dark:text-blue-400`:``),children:e}),(0,f.jsx)(`span`,{className:`text-[10px] uppercase font-semibold`,children:`Mo`})]},e))})]})]}),(0,f.jsxs)(`div`,{className:`bg-surface-primary border border-border-primary rounded-2xl p-5 mb-6 shadow-sm`,children:[(0,f.jsxs)(`div`,{className:`flex items-center gap-2 mb-4`,children:[(0,f.jsx)(l,{className:`w-5 h-5 text-text-tertiary`}),(0,f.jsx)(`p`,{className:`text-sm font-semibold`,children:`Payment Summary`})]}),(0,f.jsxs)(`div`,{className:`space-y-3 text-sm`,children:[(0,f.jsxs)(`div`,{className:`flex justify-between items-center text-text-secondary`,children:[(0,f.jsx)(`span`,{children:`Monthly Payment`}),(0,f.jsx)(o.span,{initial:{opacity:0,y:-5},animate:{opacity:1,y:0},className:`font-bold text-text-primary`,children:v(h)},`monthly-${u}`)]}),(0,f.jsxs)(`div`,{className:`flex justify-between items-center text-text-secondary`,children:[(0,f.jsxs)(`span`,{children:[`Total Interest (`,r,`% APR)`]}),(0,f.jsx)(o.span,{initial:{opacity:0,y:-5},animate:{opacity:1,y:0},className:`font-medium`,children:u===1?`0.00`:v(_)},`interest-${u}`)]}),(0,f.jsx)(`div`,{className:`h-px bg-zinc-200 dark:bg-gray-900 my-2`}),(0,f.jsxs)(`div`,{className:`flex justify-between items-center font-bold text-text-primary`,children:[(0,f.jsx)(`span`,{children:`Total Paid Over Time`}),(0,f.jsx)(o.span,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},className:`text-lg`,children:v(g)},`total-${u}`)]})]}),(0,f.jsxs)(`div`,{className:`mt-5 relative h-3 bg-background-secondary rounded-full overflow-hidden flex shadow-inner`,children:[(0,f.jsx)(o.div,{className:`h-full bg-blue-500`,initial:{width:0},animate:{width:`${e/g*100}%`},transition:{duration:.5}}),(0,f.jsx)(o.div,{className:`h-full bg-amber-400`,initial:{width:0},animate:{width:`${_/g*100}%`},transition:{duration:.5}})]}),(0,f.jsxs)(`div`,{className:`flex justify-between items-center text-[10px] uppercase font-bold text-text-tertiary mt-2`,children:[(0,f.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,f.jsx)(`div`,{className:`w-2 h-2 rounded-full bg-blue-500`}),` Principal`]}),(0,f.jsxs)(`span`,{className:`flex items-center gap-1`,children:[(0,f.jsx)(`div`,{className:`w-2 h-2 rounded-full bg-amber-400`}),` Interest`]})]})]}),(0,f.jsx)(o.button,{whileTap:{scale:.96},onClick:()=>s?.(u,h),className:`w-full py-4 bg-zinc-900 dark:bg-surface-primary text-white dark:text-zinc-900 rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all`,children:`Confirm Plan`})]})},p.displayName=`InstallmentSimulator`,p.__docgenInfo={description:``,methods:[],displayName:`InstallmentSimulator`,props:{purchaseAmount:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1200`,computed:!1}},currency:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'USD'`,computed:!1}},maxMonths:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`12`,computed:!1}},interestRate:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`18`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},onConfirm:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(months: number, monthlyPayment: number) => void`,signature:{arguments:[{type:{name:`number`},name:`months`},{type:{name:`number`},name:`monthlyPayment`}],return:{name:`void`}}},description:``}}}})),h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{n(),m(),h=a(),{action:g}=__STORYBOOK_MODULE_ACTIONS__,_={title:`Fintech/Credit & BNPL/InstallmentSimulator`,component:p,tags:[`autodocs`]},v={args:{purchaseAmount:1200,maxMonths:12,interestRate:18,onConfirm:g(`confirmed`)}},y={args:{purchaseAmount:25e3,maxMonths:24,interestRate:12,onConfirm:g(`confirmed`)}},b={args:{purchaseAmount:200,maxMonths:6,interestRate:24,onConfirm:g(`confirmed`)}},x={args:{purchaseAmount:25e3,currency:`MXN`,maxMonths:12,interestRate:36,onConfirm:g(`confirmed`)}},S={args:{purchaseAmount:1500,maxMonths:12,interestRate:0,onConfirm:g(`confirmed`)}},C={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,h.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,h.jsx)(e,{})})]},w={parameters:{viewport:{defaultViewport:`mobile1`}}},T={parameters:{docs:{description:{story:`InstallmentSimulator used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    purchaseAmount: 1200,
    maxMonths: 12,
    interestRate: 18,
    onConfirm: action('confirmed')
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    purchaseAmount: 25000,
    maxMonths: 24,
    interestRate: 12,
    onConfirm: action('confirmed')
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    purchaseAmount: 200,
    maxMonths: 6,
    interestRate: 24,
    onConfirm: action('confirmed')
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    purchaseAmount: 25000,
    currency: 'MXN',
    maxMonths: 12,
    interestRate: 36,
    onConfirm: action('confirmed')
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    purchaseAmount: 1500,
    maxMonths: 12,
    interestRate: 0,
    onConfirm: action('confirmed')
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'InstallmentSimulator used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`LargePurchase`,`SmallPurchase`,`MexicanPesos`,`ZeroInterest`,`DarkMode`,`MobileView`,`FintechUseCase`]}))();export{C as DarkMode,v as Default,T as FintechUseCase,y as LargePurchase,x as MexicanPesos,w as MobileView,b as SmallPurchase,S as ZeroInterest,E as __namedExportsOrder,_ as default};