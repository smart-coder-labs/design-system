import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DuoaHqPM.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{s as i,t as a}from"./es-lKEstbry.js";import{n as o,t as s}from"./utils-COD7dmCP.js";var c,l,u,d=e((()=>{c=t(n()),o(),a(),l=r(),u=(0,c.forwardRef)(({items:e,max:t=5,size:n=`md`,showTooltip:r=!0,className:a,...o},c)=>{let u={xs:`w-6 h-6 text-xs`,sm:`w-8 h-8 text-sm`,md:`w-10 h-10 text-base`,lg:`w-12 h-12 text-lg`,xl:`w-14 h-14 text-xl`},d=e.slice(0,t),f=e.length-t,p=e=>{let t=e.split(` `);return t.length>=2?`${t[0][0]}${t[1][0]}`.toUpperCase():e.slice(0,2).toUpperCase()};return(0,l.jsxs)(`div`,{ref:c,className:s(`flex items-center -space-x-2`,a),...o,children:[d.map((e,t)=>(0,l.jsxs)(i.div,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{delay:t*.05},className:`relative group`,children:[(0,l.jsx)(`div`,{className:s(`relative inline-flex items-center justify-center rounded-full border-2 border-surface-primary bg-surface-secondary overflow-hidden ring-0 hover:ring-2 hover:ring-accent-blue/20 transition-all hover:z-10`,u[n]),children:e.src?(0,l.jsx)(`img`,{src:e.src,alt:e.alt,className:`w-full h-full object-cover`}):(0,l.jsx)(`span`,{className:`font-medium text-text-primary`,children:e.fallback||p(e.alt)})}),r&&(0,l.jsx)(`div`,{className:`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-surface-elevated border border-border-primary rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-20`,children:(0,l.jsx)(`span`,{className:`text-xs text-text-primary`,children:e.alt})})]},t)),f>0&&(0,l.jsxs)(i.div,{initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{delay:d.length*.05},className:s(`relative inline-flex items-center justify-center rounded-full border-2 border-surface-primary bg-surface-tertiary font-medium text-text-secondary hover:bg-surface-secondary hover:ring-2 hover:ring-accent-blue/20 transition-all cursor-default hover:z-10`,u[n]),children:[`+`,f]})]})}),u.displayName=`AvatarGroup`,u.__docgenInfo={description:``,methods:[],displayName:`AvatarGroup`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`AvatarGroupItem`}],raw:`AvatarGroupItem[]`},description:``},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'xs' | 'sm' | 'md' | 'lg' | 'xl'`,elements:[{name:`literal`,value:`'xs'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},showTooltip:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}},composes:[`HTMLAttributes`]}})),f,p,m,h,g,_,v,y,b,x,S;e((()=>{d(),f={title:`Data Display/AvatarGroup`,component:u,tags:[`autodocs`]},p=[{src:`https://i.pravatar.cc/150?u=alice`,alt:`Alice Johnson`},{src:`https://i.pravatar.cc/150?u=bob`,alt:`Bob Smith`},{src:`https://i.pravatar.cc/150?u=carol`,alt:`Carol Davis`},{src:`https://i.pravatar.cc/150?u=david`,alt:`David Lee`},{src:`https://i.pravatar.cc/150?u=eve`,alt:`Eve Martinez`},{src:`https://i.pravatar.cc/150?u=frank`,alt:`Frank Wilson`},{src:`https://i.pravatar.cc/150?u=grace`,alt:`Grace Kim`}],m={args:{items:p,max:5,size:`md`}},h={args:{items:p,max:5,size:`sm`}},g={args:{items:p,max:5,size:`lg`}},_={args:{items:p,max:4,size:`xs`}},v={args:{items:p,max:4,size:`xl`}},y={args:{items:p.slice(0,3),max:5,size:`md`}},b={args:{items:p,max:3,size:`md`}},x={args:{items:p.slice(0,4),max:5,size:`md`,showTooltip:!1}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    max: 5,
    size: 'md'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    max: 5,
    size: 'sm'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    max: 5,
    size: 'lg'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    max: 4,
    size: 'xs'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    max: 4,
    size: 'xl'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 3),
    max: 5,
    size: 'md'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems,
    max: 3,
    size: 'md'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleItems.slice(0, 4),
    max: 5,
    size: 'md',
    showTooltip: false
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`SmallSize`,`LargeSize`,`XSmallSize`,`XLargeSize`,`NoOverflow`,`ManyItems`,`WithoutTooltips`]}))();export{m as Default,g as LargeSize,b as ManyItems,y as NoOverflow,h as SmallSize,x as WithoutTooltips,v as XLargeSize,_ as XSmallSize,S as __namedExportsOrder,f as default};