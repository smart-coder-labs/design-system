import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C8gh9c0G.js";import{n as r,t as i}from"./utils-CcEteFRA.js";import{t as a}from"./jsx-runtime-WZfjI2gv.js";import{s as o,t as s}from"./es-DlQin2IG.js";var c,l,u,d=e((()=>{c=t(n()),r(),s(),l=a(),u=(0,c.forwardRef)(({items:e,max:t=5,size:n=`md`,showTooltip:r=!0,variant:a=`default`,className:s,...c},u)=>{let d={xs:`w-6 h-6 text-xs`,sm:`w-8 h-8 text-sm`,md:`w-10 h-10 text-base`,lg:`w-12 h-12 text-lg`,xl:`w-14 h-14 text-xl`},f=e.slice(0,t),p=e.length-t,m=e=>{let t=e.split(` `);return t.length>=2?`${t[0][0]}${t[1][0]}`.toUpperCase():e.slice(0,2).toUpperCase()},h=a===`glasphormism`;return(0,l.jsxs)(`div`,{ref:u,className:i(`flex items-center -space-x-2`,s),...c,children:[f.map((e,t)=>(0,l.jsxs)(o.div,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{delay:t*.05},className:`relative group`,children:[(0,l.jsx)(`div`,{className:i(`relative inline-flex items-center justify-center rounded-full overflow-hidden ring-0 hover:ring-2 hover:ring-accent-blue/20 transition-all hover:z-10`,h?`border-2 border-white/20 dark:border-white/10 bg-surface-glass/40 backdrop-blur-sm shadow-sm`:`border-2 border-surface-primary bg-surface-secondary`,d[n]),children:e.src?(0,l.jsx)(`img`,{src:e.src,alt:e.alt,className:`w-full h-full object-cover`}):(0,l.jsx)(`span`,{className:i(`font-medium`,`text-text-primary`),children:e.fallback||m(e.alt)})}),r&&(0,l.jsx)(`div`,{className:i(`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20`,h?`bg-surface-glass/85 backdrop-blur-md border border-white/20 dark:border-white/10 text-text-primary`:`bg-surface-elevated border border-border-primary text-text-primary text-xs`),children:(0,l.jsx)(`span`,{className:`text-xs`,children:e.alt})})]},t)),p>0&&(0,l.jsxs)(o.div,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{delay:f.length*.05},className:i(`relative inline-flex items-center justify-center rounded-full font-medium transition-all cursor-default hover:z-10`,h?`border-2 border-white/20 dark:border-white/10 bg-surface-glass/60 backdrop-blur-sm text-text-primary`:`border-2 border-surface-primary bg-surface-tertiary text-text-secondary hover:bg-surface-secondary hover:ring-2 hover:ring-accent-blue/20`,d[n]),children:[`+`,p]})]})}),u.displayName=`AvatarGroup`,u.__docgenInfo={description:``,methods:[],displayName:`AvatarGroup`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`AvatarGroupItem`}],raw:`AvatarGroupItem[]`},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,elements:[{name:`literal`,value:`'xs'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},showTooltip:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'glasphormism'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'glasphormism'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}}},composes:[`HTMLAttributes`]}})),f,p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{d(),f=a(),p={title:`Data Display/AvatarGroup`,component:u,tags:[`autodocs`]},m=[{src:`https://i.pravatar.cc/150?u=alice`,alt:`Alice Johnson`},{src:`https://i.pravatar.cc/150?u=bob`,alt:`Bob Smith`},{src:`https://i.pravatar.cc/150?u=carol`,alt:`Carol Davis`},{src:`https://i.pravatar.cc/150?u=david`,alt:`David Lee`},{src:`https://i.pravatar.cc/150?u=eve`,alt:`Eve Martinez`},{src:`https://i.pravatar.cc/150?u=frank`,alt:`Frank Wilson`},{src:`https://i.pravatar.cc/150?u=grace`,alt:`Grace Kim`}],h={args:{items:m,max:5,size:`md`}},g={args:{items:m,max:5,size:`sm`}},_={args:{items:m,max:5,size:`lg`}},v={args:{items:m,max:4,size:`xs`}},y={args:{items:m,max:4,size:`xl`}},b={args:{items:m.slice(0,3),max:5,size:`md`}},x={args:{items:m,max:3,size:`md`}},S={args:{items:m.slice(0,4),max:5,size:`md`,showTooltip:!1}},C={args:{items:m,max:4,size:`lg`,variant:`glasphormism`},decorators:[e=>(0,f.jsx)(`div`,{className:`p-8 bg-slate-100 dark:bg-slate-900 rounded-2xl w-full`,children:(0,f.jsx)(e,{})})]},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    max: 5,
    size: 'md'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    max: 5,
    size: 'sm'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    max: 5,
    size: 'lg'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    max: 4,
    size: 'xs'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    max: 4,
    size: 'xl'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 3),
    max: 5,
    size: 'md'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    max: 3,
    size: 'md'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 4),
    max: 5,
    size: 'md',
    showTooltip: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    max: 4,
    size: 'lg',
    variant: 'glasphormism'
  },
  decorators: [Story => <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-2xl w-full">
                <Story />
            </div>]
}`,...C.parameters?.docs?.source}}},w=[`Default`,`SmallSize`,`LargeSize`,`XSmallSize`,`XLargeSize`,`NoOverflow`,`ManyItems`,`WithoutTooltips`,`Glasphormism`]}))();export{h as Default,C as Glasphormism,_ as LargeSize,x as ManyItems,b as NoOverflow,g as SmallSize,S as WithoutTooltips,y as XLargeSize,v as XSmallSize,w as __namedExportsOrder,p as default};