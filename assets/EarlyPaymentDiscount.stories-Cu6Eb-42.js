import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ba3ihGpN.js";import{I as r,O as i,Tr as a,b as o,r as s,t as c}from"./lucide-react-B3llQuma.js";import{n as l,t as u}from"./utils-CcEteFRA.js";import{t as d}from"./jsx-runtime-WZfjI2gv.js";import{l as f,s as p,t as m}from"./es-CjJtNnI5.js";var h,g,_,v=e((()=>{h=t(n()),m(),c(),l(),g=d(),_=({totalInterestRemaining:e=120.5,remainingMonths:t=6,monthlyPayment:n=200,currency:c=`USD`,className:l,onPayEarly:d})=>{let[m,_]=(0,h.useState)(1),v=e=>new Intl.NumberFormat(`en-US`,{style:`currency`,currency:c}).format(e),y=e/t*m,b=m*n;return(0,g.jsxs)(`div`,{className:u(`w-full max-w-sm bg-gradient-to-br from-emerald-500 to-teal-700 rounded-[2rem] p-6 text-white shadow-xl relative overflow-hidden`,l),children:[(0,g.jsx)(`div`,{className:`absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none`}),(0,g.jsx)(`div`,{className:`absolute bottom-0 left-0 w-32 h-32 bg-emerald-900/40 rounded-full blur-2xl -ml-12 -mb-12 pointer-events-none`}),(0,g.jsxs)(`div`,{className:`relative z-10 flex items-center justify-between mb-8`,children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,g.jsx)(`div`,{className:`p-2 bg-white/20 rounded-xl backdrop-blur-sm shadow-inner`,children:(0,g.jsx)(o,{className:`w-5 h-5 text-emerald-100`})}),(0,g.jsx)(`span`,{className:`font-semibold tracking-wide text-emerald-50`,children:`Early Payoff Magic`})]}),(0,g.jsx)(r,{className:`w-5 h-5 text-emerald-200`})]}),(0,g.jsxs)(`div`,{className:`relative z-10 mb-8`,children:[(0,g.jsx)(`p`,{className:`text-sm text-emerald-100 font-medium mb-1 drop-shadow-sm`,children:`You can save up to`}),(0,g.jsxs)(`div`,{className:`flex items-baseline gap-2`,children:[(0,g.jsx)(f,{mode:`popLayout`,children:(0,g.jsx)(p.span,{initial:{y:-10,opacity:0},animate:{y:0,opacity:1},exit:{y:10,opacity:0},className:`text-5xl font-extrabold tracking-tighter drop-shadow-md`,children:v(y)},y)}),(0,g.jsx)(`span`,{className:`text-sm font-semibold text-emerald-200 uppercase tracking-widest`,children:`in interest`})]})]}),(0,g.jsxs)(`div`,{className:`relative z-10 bg-black/20 backdrop-blur-md rounded-3xl p-5 border border-white/10 shadow-inner mb-6 space-y-5`,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`div`,{className:`flex justify-between items-center mb-2`,children:[(0,g.jsxs)(`span`,{className:`text-xs font-semibold text-emerald-100 uppercase tracking-wider flex items-center gap-1`,children:[(0,g.jsx)(i,{className:`w-3.5 h-3.5`}),` Pay Ahead`]}),(0,g.jsxs)(`span`,{className:`text-sm font-bold text-white bg-white/20 px-2 py-0.5 rounded-md shadow-sm`,children:[m,` `,m===1?`Month`:`Months`]})]}),(0,g.jsx)(`div`,{className:`relative py-2`,children:(0,g.jsx)(`input`,{type:`range`,min:1,max:t,step:1,value:m,onChange:e=>_(Number(e.target.value)),className:`w-full accent-white bg-white/30 h-1.5 rounded-full cursor-pointer appearance-none outline-none overflow-hidden`,style:{backgroundImage:`linear-gradient(white, white)`,backgroundSize:`${(m-1)/(t-1)*100}% 100%`,backgroundRepeat:`no-repeat`}})}),(0,g.jsxs)(`div`,{className:`flex justify-between items-center text-[10px] font-bold text-emerald-200 uppercase mt-1`,children:[(0,g.jsx)(`span`,{children:`Min (1m)`}),(0,g.jsxs)(`span`,{children:[`Max (`,t,`m)`]})]})]}),(0,g.jsx)(`div`,{className:`h-px w-full bg-white/10`}),(0,g.jsxs)(`div`,{className:`flex items-center justify-between text-sm`,children:[(0,g.jsx)(`span`,{className:`text-emerald-100 font-medium`,children:`Extra Payment Today`}),(0,g.jsx)(`span`,{className:`font-bold text-white tracking-wide`,children:v(b)})]})]}),(0,g.jsxs)(p.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>d?.(b,y),className:`relative z-10 w-full bg-white text-emerald-800 hover:text-emerald-900 py-4 rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-emerald-900/20 transition-all cursor-pointer group`,children:[(0,g.jsx)(s,{className:`w-5 h-5 text-emerald-500 group-hover:text-emerald-600 transition-apple`}),`Capture Savings`,(0,g.jsx)(a,{className:`w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform`})]})]})},_.displayName=`EarlyPaymentDiscount`,_.__docgenInfo={description:``,methods:[],displayName:`EarlyPaymentDiscount`,props:{totalInterestRemaining:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`120.50`,computed:!1}},remainingMonths:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`6`,computed:!1}},monthlyPayment:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`200`,computed:!1}},currency:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'USD'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},onPayEarly:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(amountToPay: number, interestSaved: number) => void`,signature:{arguments:[{type:{name:`number`},name:`amountToPay`},{type:{name:`number`},name:`interestSaved`}],return:{name:`void`}}},description:``}}}})),y,b,x,S,C,w,T,E,D,O,k;e((()=>{n(),v(),y=d(),b={title:`Fintech/Credit & BNPL/EarlyPaymentDiscount`,component:_,tags:[`autodocs`]},x={args:{totalInterestRemaining:120.5,remainingMonths:6,monthlyPayment:200}},S={args:{totalInterestRemaining:840,remainingMonths:24,monthlyPayment:350,currency:`USD`}},C={args:{totalInterestRemaining:15,remainingMonths:2,monthlyPayment:500,currency:`USD`}},w={args:{totalInterestRemaining:2400,remainingMonths:36,monthlyPayment:180,currency:`USD`}},T={args:{totalInterestRemaining:350,remainingMonths:12,monthlyPayment:150,currency:`EUR`}},E={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,y.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,y.jsx)(e,{})})]},D={parameters:{viewport:{defaultViewport:`mobile1`}}},O={parameters:{docs:{description:{story:`EarlyPaymentDiscount used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    totalInterestRemaining: 120.50,
    remainingMonths: 6,
    monthlyPayment: 200
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    totalInterestRemaining: 840.00,
    remainingMonths: 24,
    monthlyPayment: 350,
    currency: 'USD'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    totalInterestRemaining: 15.00,
    remainingMonths: 2,
    monthlyPayment: 500,
    currency: 'USD'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    totalInterestRemaining: 2400,
    remainingMonths: 36,
    monthlyPayment: 180,
    currency: 'USD'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    totalInterestRemaining: 350,
    remainingMonths: 12,
    monthlyPayment: 150,
    currency: 'EUR'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'EarlyPaymentDiscount used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`HighInterest`,`ShortTerm`,`LongTerm`,`EURCurrency`,`DarkMode`,`MobileView`,`FintechUseCase`]}))();export{E as DarkMode,x as Default,T as EURCurrency,O as FintechUseCase,S as HighInterest,w as LongTerm,D as MobileView,C as ShortTerm,k as __namedExportsOrder,b as default};