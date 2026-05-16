import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-jtk2jlYO.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{a as o,r as s,s as c,t as l}from"./es-DLZWAS6t.js";function u({className:e}){let t=o(-100),n=s(t,{damping:25,stiffness:700}),r=o(-100),a=s(r,{damping:25,stiffness:700}),[l,u]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{let e=e=>{t.set(e.clientX-16),r.set(e.clientY-16)},n=e=>{e.target.closest(`.interactive`)?u(!0):u(!1)};return window.addEventListener(`mousemove`,e),window.addEventListener(`mouseover`,n),()=>{window.removeEventListener(`mousemove`,e),window.removeEventListener(`mouseover`,n)}},[t,r]),(0,f.jsx)(c.div,{className:i(`fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-normal bg-white`,e),style:{x:n,y:a,scale:l?2:1,backgroundColor:l?`rgba(0,0,0,0.05)`:`#fff`},transition:{scale:{type:`spring`,stiffness:300,damping:20}}})}var d,f,p=e((()=>{d=t(n()),l(),r(),f=a(),u.__docgenInfo={description:``,methods:[],displayName:`InteractiveCursor`}})),m,h,g,_,v,y,b,x,S,C,w;e((()=>{n(),p(),m=a(),h={title:`Cyberpunk/InteractiveCursor`,component:u,tags:[`autodocs`]},g={args:{children:(0,m.jsx)(`div`,{className:`h-64 w-96 bg-gradient-to-br from-accent-blue/10 to-purple-500/10 rounded-2xl flex items-center justify-center text-text-primary`,children:`Move your cursor over this area`})}},_={args:{color:`#3B82F6`,size:200,children:(0,m.jsx)(`div`,{className:`h-64 w-96 bg-surface-primary rounded-2xl border border-border-primary p-6 flex items-center justify-center`,children:(0,m.jsxs)(`div`,{className:`text-center`,children:[(0,m.jsx)(`p`,{className:`text-lg font-bold text-text-primary`,children:`Interactive Card`}),(0,m.jsx)(`p`,{className:`text-sm text-text-secondary mt-2`,children:`Hover to see the glow effect`})]})})}},v={args:{size:100,children:(0,m.jsx)(`div`,{className:`h-48 w-80 bg-surface-secondary rounded-2xl flex items-center justify-center text-sm text-text-secondary`,children:`Small glow radius`})}},y={args:{size:400,children:(0,m.jsx)(`div`,{className:`h-64 w-96 bg-surface-tertiary rounded-2xl flex items-center justify-center text-text-primary`,children:`Large diffused glow`})}},b={args:{color:`#10B981`,size:250,children:(0,m.jsx)(`div`,{className:`h-48 w-80 bg-gray-900 rounded-2xl flex items-center justify-center`,children:(0,m.jsx)(`p`,{className:`text-emerald-400 font-semibold`,children:`Portfolio +12.4%`})})}},x={args:{color:`#8B5CF6`,size:300,children:(0,m.jsx)(`div`,{className:`h-64 w-96 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl flex items-center justify-center`,children:(0,m.jsx)(`p`,{className:`text-purple-300 text-lg font-bold`,children:`Premium Account`})})}},S={args:{size:180,children:(0,m.jsxs)(`div`,{className:`grid grid-cols-2 gap-4 w-96`,children:[(0,m.jsx)(`div`,{className:`h-24 bg-accent-blue/10 rounded-xl flex items-center justify-center text-sm font-semibold text-accent-blue`,children:`Balance`}),(0,m.jsx)(`div`,{className:`h-24 bg-emerald-500/10 rounded-xl flex items-center justify-center text-sm font-semibold text-emerald-600`,children:`Income`}),(0,m.jsx)(`div`,{className:`h-24 bg-amber-500/10 rounded-xl flex items-center justify-center text-sm font-semibold text-amber-600`,children:`Spending`}),(0,m.jsx)(`div`,{className:`h-24 bg-purple-500/10 rounded-xl flex items-center justify-center text-sm font-semibold text-purple-600`,children:`Investments`})]})}},C={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,m.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,m.jsx)(e,{})})]},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="h-64 w-96 bg-gradient-to-br from-accent-blue/10 to-purple-500/10 rounded-2xl flex items-center justify-center text-text-primary">Move your cursor over this area</div>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#3B82F6',
    size: 200,
    children: <div className="h-64 w-96 bg-surface-primary rounded-2xl border border-border-primary p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg font-bold text-text-primary">Interactive Card</p>
          <p className="text-sm text-text-secondary mt-2">Hover to see the glow effect</p>
        </div>
      </div>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 100,
    children: <div className="h-48 w-80 bg-surface-secondary rounded-2xl flex items-center justify-center text-sm text-text-secondary">Small glow radius</div>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 400,
    children: <div className="h-64 w-96 bg-surface-tertiary rounded-2xl flex items-center justify-center text-text-primary">Large diffused glow</div>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#10B981',
    size: 250,
    children: <div className="h-48 w-80 bg-gray-900 rounded-2xl flex items-center justify-center">
        <p className="text-emerald-400 font-semibold">Portfolio +12.4%</p>
      </div>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#8B5CF6',
    size: 300,
    children: <div className="h-64 w-96 bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl flex items-center justify-center">
        <p className="text-purple-300 text-lg font-bold">Premium Account</p>
      </div>
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 180,
    children: <div className="grid grid-cols-2 gap-4 w-96">
        <div className="h-24 bg-accent-blue/10 rounded-xl flex items-center justify-center text-sm font-semibold text-accent-blue">Balance</div>
        <div className="h-24 bg-emerald-500/10 rounded-xl flex items-center justify-center text-sm font-semibold text-emerald-600">Income</div>
        <div className="h-24 bg-amber-500/10 rounded-xl flex items-center justify-center text-sm font-semibold text-amber-600">Spending</div>
        <div className="h-24 bg-purple-500/10 rounded-xl flex items-center justify-center text-sm font-semibold text-purple-600">Investments</div>
      </div>
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`CardHover`,`SmallCursor`,`LargeCursor`,`GreenGlow`,`PurpleGlow`,`DashboardWidgetGlow`,`DarkMode`]}))();export{_ as CardHover,C as DarkMode,S as DashboardWidgetGlow,g as Default,b as GreenGlow,y as LargeCursor,x as PurpleGlow,v as SmallCursor,w as __namedExportsOrder,h as default};