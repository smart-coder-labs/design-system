import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-Ba3ihGpN.js";import{n,t as r}from"./utils-CcEteFRA.js";import{t as i}from"./jsx-runtime-WZfjI2gv.js";import{s as a,t as o}from"./es-CjJtNnI5.js";function s({items:e,speed:t=20,direction:n=`left`,gap:i=`gap-8`,className:o,...s}){let l=[...e,...e],u=n===`left`;return(0,c.jsx)(`div`,{className:r(`relative w-full overflow-hidden flex`,o),...s,children:(0,c.jsx)(a.div,{className:r(`flex whitespace-nowrap items-center shrink-0 w-max`,i),animate:{x:u?[`0%`,`-50%`]:[`-50%`,`0%`]},transition:{duration:t,ease:`linear`,repeat:1/0},style:{willChange:`transform`},children:l.map((e,t)=>(0,c.jsx)(`div`,{className:`flex-shrink-0`,children:e},`${t}-${typeof e==`string`?e:`item`}`))})})}var c,l=e((()=>{t(),o(),n(),c=i(),s.__docgenInfo={description:``,methods:[],displayName:`InfiniteHorizontalLoop`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`ReactReactNode`,raw:`React.ReactNode`}],raw:`React.ReactNode[]`},description:``},speed:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`20`,computed:!1}},direction:{required:!1,tsType:{name:`union`,raw:`"left" | "right"`,elements:[{name:`literal`,value:`"left"`},{name:`literal`,value:`"right"`}]},description:``,defaultValue:{value:`"left"`,computed:!1}},gap:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"gap-8"`,computed:!1}}}}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{t(),l(),u=i(),d={title:`Data Display/InfiniteHorizontalLoop`,component:s,tags:[`autodocs`]},f=[(0,u.jsx)(`div`,{className:`px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg`,children:`Bitcoin`},`1`),(0,u.jsx)(`div`,{className:`px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg`,children:`Ethereum`},`2`),(0,u.jsx)(`div`,{className:`px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg`,children:`Solana`},`3`),(0,u.jsx)(`div`,{className:`px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg`,children:`Cardano`},`4`),(0,u.jsx)(`div`,{className:`px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg`,children:`Polkadot`},`5`),(0,u.jsx)(`div`,{className:`px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg`,children:`Avalanche`},`6`)],p=[(0,u.jsx)(`div`,{className:`px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg`,children:`Stripe`},`1`),(0,u.jsx)(`div`,{className:`px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg`,children:`PayPal`},`2`),(0,u.jsx)(`div`,{className:`px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg`,children:`Square`},`3`),(0,u.jsx)(`div`,{className:`px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg`,children:`Plaid`},`4`),(0,u.jsx)(`div`,{className:`px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg`,children:`Revolut`},`5`),(0,u.jsx)(`div`,{className:`px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg`,children:`Nubank`},`6`)],m={args:{items:p,speed:20}},h={args:{items:p,speed:10}},g={args:{items:p,speed:40}},_={args:{items:p,direction:`right`,speed:25}},v={args:{items:f,speed:22,direction:`left`}},y={args:{items:Array.from({length:20},(e,t)=>(0,u.jsxs)(`div`,{className:`px-6 py-3 bg-surface-secondary rounded-xl border border-border-primary font-bold text-text-primary text-sm`,children:[`Item `,t+1]},t)),speed:30}},b={args:{items:[p[0]],speed:15,gap:`gap-4`}},x={args:{items:p,speed:8,direction:`right`,gap:`gap-12`}},S={args:{items:p,speed:25},decorators:[e=>(0,u.jsx)(`div`,{className:`dark p-8 bg-gray-950 rounded-xl`,children:(0,u.jsx)(e,{})})]},C={args:{items:p,speed:20},decorators:[e=>(0,u.jsx)(`div`,{className:`max-w-sm mx-auto`,children:(0,u.jsx)(e,{})})]},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: logos,
    speed: 20
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: logos,
    speed: 10
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: logos,
    speed: 40
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: logos,
    direction: 'right',
    speed: 25
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: cryptoLogos,
    speed: 22,
    direction: 'left'
  }
}`,...v.parameters?.docs?.source},description:{story:`Crypto-themed brand scroll`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: Array.from({
      length: 20
    }, (_, i) => <div key={i} className="px-6 py-3 bg-surface-secondary rounded-xl border border-border-primary font-bold text-text-primary text-sm">
        Item {i + 1}
      </div>),
    speed: 30
  }
}`,...y.parameters?.docs?.source},description:{story:`Many items — edge case for performance`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: [logos[0]],
    speed: 15,
    gap: 'gap-4'
  }
}`,...b.parameters?.docs?.source},description:{story:`Single item — minimal edge case`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: logos,
    speed: 8,
    direction: 'right',
    gap: 'gap-12'
  }
}`,...x.parameters?.docs?.source},description:{story:`Fast right-scroll with custom gap`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: logos,
    speed: 25
  },
  decorators: [Story => <div className="dark p-8 bg-gray-950 rounded-xl">
        <Story />
      </div>]
}`,...S.parameters?.docs?.source},description:{story:`Dark mode version`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: logos,
    speed: 20
  },
  decorators: [Story => <div className="max-w-sm mx-auto">
        <Story />
      </div>]
}`,...C.parameters?.docs?.source},description:{story:`Mobile responsive`,...C.parameters?.docs?.description}}},w=[`Default`,`Fast`,`Slow`,`RightDirection`,`CryptoScroll`,`ManyItems`,`SingleItem`,`FastRightCustomGap`,`DarkMode`,`Mobile`]}))();export{v as CryptoScroll,S as DarkMode,m as Default,h as Fast,x as FastRightCustomGap,y as ManyItems,C as Mobile,_ as RightDirection,b as SingleItem,g as Slow,w as __namedExportsOrder,d as default};