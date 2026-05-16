import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DuoaHqPM.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{a as i,i as a,r as o,s,t as c}from"./es-lKEstbry.js";import{n as l,t as u}from"./utils-COD7dmCP.js";import{On as d,ft as f,s as p,t as m,v as h}from"./lucide-react-Js4yG5Ra.js";var g,_,v,y,b,x,S,C,w,T,E,D=e((()=>{g=t(n()),c(),_=r(),v=`
  rounded-2xl
  transition-apple
`,y={elevated:`
    bg-surface-primary
    shadow-md
    hover:shadow-lg
  `,glass:`
    glass
    border border-border-secondary
    shadow-sm
  `,outlined:`
    bg-surface-primary
    border border-border-primary
    hover:border-border-primary
  `,flat:`
    bg-surface-secondary
  `},b={none:``,sm:`p-4`,md:`p-6`,lg:`p-8`},x=g.forwardRef(({variant:e=`elevated`,hoverable:t=!1,padding:n=`md`,children:r,className:i=``,...a},o)=>{let c=`
      ${v}
      ${y[e]}
      ${b[n]}
      ${i}
    `.trim().replace(/\s+/g,` `),l=t?{whileHover:{y:-4,scale:1.01},transition:{type:`spring`,stiffness:300,damping:30,mass:.8}}:{},u=a[`aria-label`]||(typeof r==`string`?r:void 0),d=t&&u?{role:`region`,"aria-label":u}:{};return(0,_.jsx)(s.div,{ref:o,className:c,role:d.role,"aria-label":d[`aria-label`],initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.22,ease:[.16,1,.3,1]},...l,...a,children:r})}),x.displayName=`Card`,S=({children:e,className:t=``})=>(0,_.jsx)(`div`,{className:`mb-4 ${t}`,children:e}),C=({children:e,className:t=``})=>(0,_.jsx)(`h3`,{className:`text-xl font-semibold text-text-primary mb-1 ${t}`,children:e}),w=({children:e,className:t=``})=>(0,_.jsx)(`p`,{className:`text-sm text-text-secondary ${t}`,children:e}),T=({children:e,className:t=``})=>(0,_.jsx)(`div`,{className:t,children:e}),E=({children:e,className:t=``})=>(0,_.jsx)(`div`,{className:`mt-6 flex items-center gap-3 ${t}`,children:e}),x.__docgenInfo={description:``,methods:[],displayName:`Card`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'elevated' | 'glass' | 'outlined' | 'flat'`,elements:[{name:`literal`,value:`'elevated'`},{name:`literal`,value:`'glass'`},{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'flat'`}]},description:``,defaultValue:{value:`'elevated'`,computed:!1}},hoverable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},padding:{required:!1,tsType:{name:`union`,raw:`'none' | 'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1}},composes:[`HTMLMotionProps`]},S.__docgenInfo={description:``,methods:[],displayName:`CardHeader`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},C.__docgenInfo={description:``,methods:[],displayName:`CardTitle`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},w.__docgenInfo={description:``,methods:[],displayName:`CardDescription`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},T.__docgenInfo={description:``,methods:[],displayName:`CardContent`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},E.__docgenInfo={description:``,methods:[],displayName:`CardFooter`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),O=e((()=>{D()})),k,A,j,M=e((()=>{k=t(n()),l(),c(),O(),A=r(),j=k.forwardRef(({children:e,intensity:t=15,perspective:n=1e3,glowEffect:r=!0,glowColor:c=`rgba(0, 122, 255, 0.3)`,variant:l=`elevated`,padding:d=`md`,className:f,...p},m)=>{let h=(0,k.useRef)(null),[g,_]=(0,k.useState)(!1),v=i(0),y=i(0),b=o(a(y,[-1,1],[t,-t]),{stiffness:300,damping:30}),S=o(a(v,[-1,1],[-t,t]),{stiffness:300,damping:30}),C=e=>{if(!h.current)return;let t=h.current.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,i=e.clientX-n,a=e.clientY-r,o=Math.max(-1,Math.min(1,i/(t.width/2))),s=Math.max(-1,Math.min(1,a/(t.height/2)));v.set(o),y.set(s)},w=()=>{v.set(0),y.set(0),_(!1)},T=()=>{_(!0)};return(0,A.jsx)(`div`,{ref:m,className:u(`relative`,f),style:{perspective:`${n}px`},...p,children:(0,A.jsx)(s.div,{ref:h,onMouseMove:C,onMouseLeave:w,onMouseEnter:T,style:{rotateX:b,rotateY:S,transformStyle:`preserve-3d`},className:`relative`,children:(0,A.jsxs)(x,{variant:l,padding:d,hoverable:!1,className:u(`relative`,g&&`shadow-xl`),children:[r&&g&&(0,A.jsx)(s.div,{className:`absolute inset-0 rounded-2xl opacity-0 blur-xl pointer-events-none`,style:{background:`radial-gradient(circle at center, ${c}, transparent 70%)`},animate:{opacity:[0,.5,0]},transition:{duration:2,repeat:1/0}}),(0,A.jsx)(`div`,{className:`relative z-10`,style:{transform:`translateZ(20px)`},children:e})]})})})}),j.displayName=`GestureCard`,j.__docgenInfo={description:``,methods:[],displayName:`GestureCard`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},intensity:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`15`,computed:!1}},perspective:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1000`,computed:!1}},glowEffect:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},glowColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'rgba(0, 122, 255, 0.3)'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},variant:{defaultValue:{value:`'elevated'`,computed:!1},required:!1},padding:{defaultValue:{value:`'md'`,computed:!1},required:!1}},composes:[`Omit`]}})),N,P,F,I,L,R,z,B,V,H,U;e((()=>{n(),M(),m(),N=r(),P={title:`Surfaces/GestureCard`,component:j,tags:[`autodocs`]},F={args:{children:(0,N.jsxs)(`div`,{className:`p-6`,children:[(0,N.jsx)(`h3`,{className:`text-lg font-bold text-text-primary mb-2`,children:`Premium Account`}),(0,N.jsx)(`p`,{className:`text-3xl font-bold text-accent-blue mb-1`,children:`$24,580.00`}),(0,N.jsx)(`p`,{className:`text-sm text-text-secondary mb-4`,children:`Available balance`}),(0,N.jsxs)(`div`,{className:`flex gap-2`,children:[(0,N.jsx)(`span`,{className:`px-3 py-1 bg-accent-blue/10 text-accent-blue text-xs font-semibold rounded-full`,children:`Active`}),(0,N.jsx)(`span`,{className:`px-3 py-1 bg-surface-tertiary text-text-secondary text-xs font-semibold rounded-full`,children:`Visa Platinum`})]})]})}},I={args:{intensity:5,children:(0,N.jsxs)(`div`,{className:`p-6`,children:[(0,N.jsx)(`h3`,{className:`text-lg font-bold text-text-primary mb-2`,children:`Investment Portfolio`}),(0,N.jsx)(`p`,{className:`text-2xl font-bold text-emerald-500`,children:`$185,000`}),(0,N.jsx)(`p`,{className:`text-sm text-text-secondary`,children:`+12.4% this quarter`})]})}},L={args:{intensity:30,children:(0,N.jsxs)(`div`,{className:`p-6`,children:[(0,N.jsx)(`h3`,{className:`text-lg font-bold text-text-primary mb-2`,children:`Interactive Card`}),(0,N.jsx)(`p`,{className:`text-sm text-text-secondary`,children:`Move your mouse to rotate`})]})}},R={args:{glowEffect:!1,children:(0,N.jsxs)(`div`,{className:`p-6`,children:[(0,N.jsx)(`h3`,{className:`text-lg font-bold text-text-primary`,children:`No Glow Effect`}),(0,N.jsx)(`p`,{className:`text-sm text-text-secondary`,children:`Clean, flat interaction`})]})}},z={args:{intensity:15,children:(0,N.jsxs)(`div`,{className:`p-6 bg-gradient-to-br from-accent-blue to-purple-600 rounded-xl text-white`,children:[(0,N.jsxs)(`div`,{className:`flex items-center justify-between mb-8`,children:[(0,N.jsx)(d,{className:`w-8 h-8 opacity-80`}),(0,N.jsx)(`span`,{className:`text-xs font-semibold tracking-wider opacity-80`,children:`VISA`})]}),(0,N.jsx)(`p`,{className:`text-lg tracking-widest mb-4`,children:`•••• •••• •••• 4821`}),(0,N.jsxs)(`div`,{className:`flex justify-between`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`text-xs opacity-70`,children:`Card Holder`}),(0,N.jsx)(`p`,{className:`text-sm font-semibold`,children:`CESAR RUIZ`})]}),(0,N.jsxs)(`div`,{className:`text-right`,children:[(0,N.jsx)(`p`,{className:`text-xs opacity-70`,children:`Expires`}),(0,N.jsx)(`p`,{className:`text-sm font-semibold`,children:`12/27`})]})]})]})}},B={args:{intensity:10,children:(0,N.jsxs)(`div`,{className:`p-6`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-2 mb-4`,children:[(0,N.jsx)(f,{className:`w-5 h-5 text-amber-500`}),(0,N.jsx)(`h3`,{className:`text-sm font-semibold text-text-primary`,children:`Emergency Fund`})]}),(0,N.jsx)(`p`,{className:`text-3xl font-bold text-text-primary mb-1`,children:`$32,000`}),(0,N.jsx)(`div`,{className:`w-full h-2 bg-surface-tertiary rounded-full mb-2 overflow-hidden`,children:(0,N.jsx)(`div`,{className:`h-full bg-amber-500 rounded-full`,style:{width:`64%`}})}),(0,N.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:`$18,000 remaining to reach $50,000 goal`})]})}},V={args:{intensity:20,glowEffect:!0,children:(0,N.jsxs)(`div`,{className:`p-6`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-2 mb-3`,children:[(0,N.jsx)(h,{className:`w-5 h-5 text-emerald-500`}),(0,N.jsx)(`h3`,{className:`text-sm font-semibold text-text-primary`,children:`Portfolio Overview`})]}),(0,N.jsx)(`p`,{className:`text-2xl font-bold text-text-primary mb-1`,children:`$128,430.52`}),(0,N.jsxs)(`div`,{className:`flex items-center gap-1 text-sm`,children:[(0,N.jsx)(`span`,{className:`text-status-success font-semibold`,children:`+5.2%`}),(0,N.jsx)(`span`,{className:`text-text-tertiary`,children:`all time`})]}),(0,N.jsxs)(`div`,{className:`flex gap-3 mt-3 text-xs text-text-tertiary`,children:[(0,N.jsx)(`span`,{children:`BTC $52,340`}),(0,N.jsx)(`span`,{children:`ETH $31,200`}),(0,N.jsx)(`span`,{children:`SOL $18,750`})]})]})}},H={args:{intensity:12,children:(0,N.jsxs)(`div`,{className:`p-6`,children:[(0,N.jsxs)(`div`,{className:`flex items-center gap-2 mb-3`,children:[(0,N.jsx)(p,{className:`w-5 h-5 text-accent-blue`}),(0,N.jsx)(`span`,{className:`text-xs text-text-tertiary font-medium`,children:`Total Balance`})]}),(0,N.jsx)(`p`,{className:`text-2xl font-bold text-text-primary`,children:`$45,892.18`}),(0,N.jsxs)(`div`,{className:`flex justify-between mt-4 pt-3 border-t border-border-primary`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:`Checking`}),(0,N.jsx)(`p`,{className:`text-sm font-semibold text-text-primary`,children:`$12,430.50`})]}),(0,N.jsxs)(`div`,{className:`text-right`,children:[(0,N.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:`Savings`}),(0,N.jsx)(`p`,{className:`text-sm font-semibold text-text-primary`,children:`$33,461.68`})]})]})]})}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    intensity: 5,
    children: <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary mb-2">Investment Portfolio</h3>
        <p className="text-2xl font-bold text-emerald-500">$185,000</p>
        <p className="text-sm text-text-secondary">+12.4% this quarter</p>
      </div>
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    intensity: 30,
    children: <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary mb-2">Interactive Card</h3>
        <p className="text-sm text-text-secondary">Move your mouse to rotate</p>
      </div>
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    glowEffect: false,
    children: <div className="p-6">
        <h3 className="text-lg font-bold text-text-primary">No Glow Effect</h3>
        <p className="text-sm text-text-secondary">Clean, flat interaction</p>
      </div>
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U=[`Default`,`LowIntensity`,`HighIntensity`,`WithoutGlow`,`CreditCardPreview`,`SavingsGoalCard`,`PortfolioCard`,`WalletBalance`]}))();export{z as CreditCardPreview,F as Default,L as HighIntensity,I as LowIntensity,V as PortfolioCard,B as SavingsGoalCard,H as WalletBalance,R as WithoutGlow,U as __namedExportsOrder,P as default};