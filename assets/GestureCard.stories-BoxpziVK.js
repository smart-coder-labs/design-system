import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-2Bdvr1RY.js";import{Pn as r,ht as i,s as a,t as o,y as s}from"./lucide-react-ChvDEqVS.js";import{n as c,t as l}from"./utils-CcEteFRA.js";import{t as u}from"./jsx-runtime-WZfjI2gv.js";import{a as d,i as f,r as p,s as m,t as h}from"./es-C1BYSDiB.js";import{n as g,t as _}from"./Card-fL_3OLQc.js";var v,y,b,x=e((()=>{v=t(n()),c(),h(),_(),y=u(),b=v.forwardRef(({children:e,intensity:t=15,perspective:n=1e3,glowEffect:r=!0,glowColor:i=`rgba(0, 122, 255, 0.3)`,variant:a=`elevated`,padding:o=`md`,className:s,...c},u)=>{let h=(0,v.useRef)(null),[_,b]=(0,v.useState)(!1),x=d(0),S=d(0),C=p(f(S,[-1,1],[t,-t]),{stiffness:300,damping:30}),w=p(f(x,[-1,1],[-t,t]),{stiffness:300,damping:30}),T=e=>{if(!h.current)return;let t=h.current.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,i=e.clientX-n,a=e.clientY-r,o=Math.max(-1,Math.min(1,i/(t.width/2))),s=Math.max(-1,Math.min(1,a/(t.height/2)));x.set(o),S.set(s)},E=()=>{x.set(0),S.set(0),b(!1)},D=()=>{b(!0)};return(0,y.jsx)(`div`,{ref:u,className:l(`relative`,s),style:{perspective:`${n}px`},...c,children:(0,y.jsx)(m.div,{ref:h,onMouseMove:T,onMouseLeave:E,onMouseEnter:D,style:{rotateX:C,rotateY:w,transformStyle:`preserve-3d`},className:`relative`,children:(0,y.jsxs)(g,{variant:a,padding:o,hoverable:!1,className:l(`relative`,_&&`shadow-xl`),children:[r&&_&&(0,y.jsx)(m.div,{className:`absolute inset-0 rounded-2xl opacity-0 blur-xl pointer-events-none`,style:{background:`radial-gradient(circle at center, ${i}, transparent 70%)`},animate:{opacity:[0,.5,0]},transition:{duration:2,repeat:1/0}}),(0,y.jsx)(`div`,{className:`relative z-10`,style:{transform:`translateZ(20px)`},children:e})]})})})}),b.displayName=`GestureCard`,b.__docgenInfo={description:``,methods:[],displayName:`GestureCard`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},intensity:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`15`,computed:!1}},perspective:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1000`,computed:!1}},glowEffect:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},glowColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'rgba(0, 122, 255, 0.3)'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},variant:{defaultValue:{value:`'elevated'`,computed:!1},required:!1},padding:{defaultValue:{value:`'md'`,computed:!1},required:!1}},composes:[`Omit`]}})),S,C,w,T,E,D,O,k,A,j,M;e((()=>{n(),x(),o(),S=u(),C={title:`Surfaces/GestureCard`,component:b,tags:[`autodocs`]},w={args:{children:(0,S.jsxs)(`div`,{className:`p-6`,children:[(0,S.jsx)(`h3`,{className:`text-lg font-bold text-text-primary mb-2`,children:`Premium Account`}),(0,S.jsx)(`p`,{className:`text-3xl font-bold text-accent-blue mb-1`,children:`$24,580.00`}),(0,S.jsx)(`p`,{className:`text-sm text-text-secondary mb-4`,children:`Available balance`}),(0,S.jsxs)(`div`,{className:`flex gap-2`,children:[(0,S.jsx)(`span`,{className:`px-3 py-1 bg-accent-blue/10 text-accent-blue text-xs font-semibold rounded-full`,children:`Active`}),(0,S.jsx)(`span`,{className:`px-3 py-1 bg-surface-tertiary text-text-secondary text-xs font-semibold rounded-full`,children:`Visa Platinum`})]})]})}},T={args:{intensity:5,children:(0,S.jsxs)(`div`,{className:`p-6`,children:[(0,S.jsx)(`h3`,{className:`text-lg font-bold text-text-primary mb-2`,children:`Investment Portfolio`}),(0,S.jsx)(`p`,{className:`text-2xl font-bold text-emerald-500`,children:`$185,000`}),(0,S.jsx)(`p`,{className:`text-sm text-text-secondary`,children:`+12.4% this quarter`})]})}},E={args:{intensity:30,children:(0,S.jsxs)(`div`,{className:`p-6`,children:[(0,S.jsx)(`h3`,{className:`text-lg font-bold text-text-primary mb-2`,children:`Interactive Card`}),(0,S.jsx)(`p`,{className:`text-sm text-text-secondary`,children:`Move your mouse to rotate`})]})}},D={args:{glowEffect:!1,children:(0,S.jsxs)(`div`,{className:`p-6`,children:[(0,S.jsx)(`h3`,{className:`text-lg font-bold text-text-primary`,children:`No Glow Effect`}),(0,S.jsx)(`p`,{className:`text-sm text-text-secondary`,children:`Clean, flat interaction`})]})}},O={args:{intensity:15,children:(0,S.jsxs)(`div`,{className:`p-6 bg-gradient-to-br from-accent-blue to-purple-600 rounded-xl text-white`,children:[(0,S.jsxs)(`div`,{className:`flex items-center justify-between mb-8`,children:[(0,S.jsx)(r,{className:`w-8 h-8 opacity-80`}),(0,S.jsx)(`span`,{className:`text-xs font-semibold tracking-wider opacity-80`,children:`VISA`})]}),(0,S.jsx)(`p`,{className:`text-lg tracking-widest mb-4`,children:`•••• •••• •••• 4821`}),(0,S.jsxs)(`div`,{className:`flex justify-between`,children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`p`,{className:`text-xs opacity-70`,children:`Card Holder`}),(0,S.jsx)(`p`,{className:`text-sm font-semibold`,children:`CESAR RUIZ`})]}),(0,S.jsxs)(`div`,{className:`text-right`,children:[(0,S.jsx)(`p`,{className:`text-xs opacity-70`,children:`Expires`}),(0,S.jsx)(`p`,{className:`text-sm font-semibold`,children:`12/27`})]})]})]})}},k={args:{intensity:10,children:(0,S.jsxs)(`div`,{className:`p-6`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-2 mb-4`,children:[(0,S.jsx)(i,{className:`w-5 h-5 text-amber-500`}),(0,S.jsx)(`h3`,{className:`text-sm font-semibold text-text-primary`,children:`Emergency Fund`})]}),(0,S.jsx)(`p`,{className:`text-3xl font-bold text-text-primary mb-1`,children:`$32,000`}),(0,S.jsx)(`div`,{className:`w-full h-2 bg-surface-tertiary rounded-full mb-2 overflow-hidden`,children:(0,S.jsx)(`div`,{className:`h-full bg-amber-500 rounded-full`,style:{width:`64%`}})}),(0,S.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:`$18,000 remaining to reach $50,000 goal`})]})}},A={args:{intensity:20,glowEffect:!0,children:(0,S.jsxs)(`div`,{className:`p-6`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-2 mb-3`,children:[(0,S.jsx)(s,{className:`w-5 h-5 text-emerald-500`}),(0,S.jsx)(`h3`,{className:`text-sm font-semibold text-text-primary`,children:`Portfolio Overview`})]}),(0,S.jsx)(`p`,{className:`text-2xl font-bold text-text-primary mb-1`,children:`$128,430.52`}),(0,S.jsxs)(`div`,{className:`flex items-center gap-1 text-sm`,children:[(0,S.jsx)(`span`,{className:`text-status-success font-semibold`,children:`+5.2%`}),(0,S.jsx)(`span`,{className:`text-text-tertiary`,children:`all time`})]}),(0,S.jsxs)(`div`,{className:`flex gap-3 mt-3 text-xs text-text-tertiary`,children:[(0,S.jsx)(`span`,{children:`BTC $52,340`}),(0,S.jsx)(`span`,{children:`ETH $31,200`}),(0,S.jsx)(`span`,{children:`SOL $18,750`})]})]})}},j={args:{intensity:12,children:(0,S.jsxs)(`div`,{className:`p-6`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-2 mb-3`,children:[(0,S.jsx)(a,{className:`w-5 h-5 text-accent-blue`}),(0,S.jsx)(`span`,{className:`text-xs text-text-tertiary font-medium`,children:`Total Balance`})]}),(0,S.jsx)(`p`,{className:`text-2xl font-bold text-text-primary`,children:`$45,892.18`}),(0,S.jsxs)(`div`,{className:`flex justify-between mt-4 pt-3 border-t border-border-primary`,children:[(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:`Checking`}),(0,S.jsx)(`p`,{className:`text-sm font-semibold text-text-primary`,children:`$12,430.50`})]}),(0,S.jsxs)(`div`,{className:`text-right`,children:[(0,S.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:`Savings`}),(0,S.jsx)(`p`,{className:`text-sm font-semibold text-text-primary`,children:`$33,461.68`})]})]})]})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary mb-2">Premium Account</h3>
        <p className="text-3xl font-bold text-accent-blue mb-1">$24,580.00</p>
        <p className="text-sm text-text-secondary mb-4">Available balance</p>
        <div className="flex gap-2">
          <span className="px-3 py-1 bg-accent-blue/10 text-accent-blue text-xs font-semibold rounded-full">Active</span>
          <span className="px-3 py-1 bg-surface-tertiary text-text-secondary text-xs font-semibold rounded-full">Visa Platinum</span>
        </div>
      </div>
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    intensity: 5,
    children: <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary mb-2">Investment Portfolio</h3>
        <p className="text-2xl font-bold text-emerald-500">$185,000</p>
        <p className="text-sm text-text-secondary">+12.4% this quarter</p>
      </div>
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    intensity: 30,
    children: <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary mb-2">Interactive Card</h3>
        <p className="text-sm text-text-secondary">Move your mouse to rotate</p>
      </div>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    glowEffect: false,
    children: <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary">No Glow Effect</h3>
        <p className="text-sm text-text-secondary">Clean, flat interaction</p>
      </div>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    intensity: 15,
    children: <div className="p-6 bg-gradient-to-br from-accent-blue to-purple-600 rounded-xl text-white">
        <div className="flex items-center justify-between mb-8">
          <CreditCard className="w-8 h-8 opacity-80" />
          <span className="text-xs font-semibold tracking-wider opacity-80">VISA</span>
        </div>
        <p className="text-lg tracking-widest mb-4">•••• •••• •••• 4821</p>
        <div className="flex justify-between">
          <div>
            <p className="text-xs opacity-70">Card Holder</p>
            <p className="text-sm font-semibold">CESAR RUIZ</p>
          </div>
          <div className="text-right">
            <p className="text-xs opacity-70">Expires</p>
            <p className="text-sm font-semibold">12/27</p>
          </div>
        </div>
      </div>
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    intensity: 10,
    children: <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <PiggyBank className="w-5 h-5 text-amber-500" />
          <h3 className="text-sm font-semibold text-text-primary">Emergency Fund</h3>
        </div>
        <p className="text-3xl font-bold text-text-primary mb-1">$32,000</p>
        <div className="w-full h-2 bg-surface-tertiary rounded-full mb-2 overflow-hidden">
          <div className="h-full bg-amber-500 rounded-full" style={{
          width: '64%'
        }} />
        </div>
        <p className="text-xs text-text-tertiary">$18,000 remaining to reach $50,000 goal</p>
      </div>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    intensity: 20,
    glowEffect: true,
    children: <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-5 h-5 text-emerald-500" />
          <h3 className="text-sm font-semibold text-text-primary">Portfolio Overview</h3>
        </div>
        <p className="text-2xl font-bold text-text-primary mb-1">$128,430.52</p>
        <div className="flex items-center gap-1 text-sm">
          <span className="text-status-success font-semibold">+5.2%</span>
          <span className="text-text-tertiary">all time</span>
        </div>
        <div className="flex gap-3 mt-3 text-xs text-text-tertiary">
          <span>BTC $52,340</span>
          <span>ETH $31,200</span>
          <span>SOL $18,750</span>
        </div>
      </div>
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    intensity: 12,
    children: <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Wallet className="w-5 h-5 text-accent-blue" />
          <span className="text-xs text-text-tertiary font-medium">Total Balance</span>
        </div>
        <p className="text-2xl font-bold text-text-primary">$45,892.18</p>
        <div className="flex justify-between mt-4 pt-3 border-t border-border-primary">
          <div>
            <p className="text-xs text-text-tertiary">Checking</p>
            <p className="text-sm font-semibold text-text-primary">$12,430.50</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-text-tertiary">Savings</p>
            <p className="text-sm font-semibold text-text-primary">$33,461.68</p>
          </div>
        </div>
      </div>
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`LowIntensity`,`HighIntensity`,`WithoutGlow`,`CreditCardPreview`,`SavingsGoalCard`,`PortfolioCard`,`WalletBalance`]}))();export{O as CreditCardPreview,w as Default,E as HighIntensity,T as LowIntensity,A as PortfolioCard,k as SavingsGoalCard,j as WalletBalance,D as WithoutGlow,M as __namedExportsOrder,C as default};