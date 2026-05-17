import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-D0o8cdjS.js";import{n as r,t as i}from"./utils-ijcE-ZHT.js";import{t as a}from"./jsx-runtime-DaLCRA3n.js";import{s as o,t as s}from"./es-biEEKJuQ.js";import{n as c,t as l}from"./Badge-B3XSTIe-.js";var u,d,f,p,m=e((()=>{u=t(n()),s(),r(),d=a(),f=(0,u.forwardRef)(({items:e,variant:t=`default`,orientation:n=`horizontal`,divider:r=!1,hoverable:a=!1,density:s=`comfortable`,className:c,...l},u)=>{let f=n===`horizontal`,p=s===`compact`,m={default:`bg-surface-primary`,bordered:`bg-surface-primary border border-border-primary rounded-xl`,striped:`bg-surface-primary`,compact:`bg-transparent`},h={default:``,bordered:`border-b border-border-primary last:border-b-0`,striped:`even:bg-surface-secondary/50`,compact:``},g=p?`py-2`:`py-3`,_=p?`gap-2`:`gap-4`,v=o.dl;return(0,d.jsx)(v,{ref:u,className:i(`overflow-hidden`,m[t],t===`bordered`&&`shadow-sm`,c),initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.22,ease:[.16,1,.3,1]},...l,children:e.map((n,s)=>(0,d.jsxs)(o.div,{className:i(`group`,h[t],f?`flex ${_} ${g} px-4 sm:px-6`:`flex flex-col ${_} ${g} px-4 sm:px-6`,r&&s!==e.length-1&&`border-b border-border-primary`,a&&`transition-colors hover:bg-surface-secondary/30 cursor-default`),initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{duration:.2,delay:s*.03,ease:[.16,1,.3,1]},children:[(0,d.jsx)(`dt`,{className:i(`font-semibold text-text-primary`,f?`min-w-[140px] sm:min-w-[180px] flex-shrink-0`:`mb-1`,p?`text-sm`:`text-base`),children:n.term}),(0,d.jsx)(`dd`,{className:i(`text-text-secondary`,f?`flex-1`:``,p?`text-sm`:`text-base`),children:n.description})]},s))})}),f.displayName=`DefinitionList`,p=(0,u.forwardRef)((e,t)=>(0,d.jsx)(f,{ref:t,...e,density:`compact`})),p.displayName=`CompactDefinitionList`,f.__docgenInfo={description:``,methods:[],displayName:`DefinitionList`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
    term: React.ReactNode;
    description: React.ReactNode;
}`,signature:{properties:[{key:`term`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`description`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}}]}}],raw:`DefinitionItem[]`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'bordered' | 'striped' | 'compact'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'bordered'`},{name:`literal`,value:`'striped'`},{name:`literal`,value:`'compact'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},orientation:{required:!1,tsType:{name:`union`,raw:`'horizontal' | 'vertical'`,elements:[{name:`literal`,value:`'horizontal'`},{name:`literal`,value:`'vertical'`}]},description:``,defaultValue:{value:`'horizontal'`,computed:!1}},divider:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},hoverable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},density:{required:!1,tsType:{name:`union`,raw:`'comfortable' | 'compact'`,elements:[{name:`literal`,value:`'comfortable'`},{name:`literal`,value:`'compact'`}]},description:``,defaultValue:{value:`'comfortable'`,computed:!1}}}},p.__docgenInfo={description:``,methods:[],displayName:`CompactDefinitionList`,props:{variant:{required:!1,tsType:{name:`Exclude`,elements:[{name:`union`,raw:`'default' | 'bordered' | 'striped' | 'compact'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'bordered'`},{name:`literal`,value:`'striped'`},{name:`literal`,value:`'compact'`}]},{name:`literal`,value:`'compact'`}],raw:`Exclude<DefinitionListVariant, 'compact'>`},description:``}},composes:[`Omit`]}})),h,g,_,v,y,b,x,S,C,w,T,E;e((()=>{n(),m(),l(),h=a(),g=[{term:`Account Holder`,description:`Cesar Ruiz`},{term:`Account Type`,description:`Premium Checking`},{term:`Account Number`,description:`•••• 4832`},{term:`Routing Number`,description:`021000021`},{term:`Balance`,description:`$12,450.80`},{term:`Status`,description:`Active`},{term:`Opened`,description:`January 15, 2024`}],_={title:`Data Display/DefinitionList`,component:f,tags:[`autodocs`]},v={args:{items:g}},y={args:{items:g,variant:`bordered`}},b={args:{items:g,variant:`striped`}},x={args:{items:g,density:`compact`}},S={args:{items:g,orientation:`vertical`}},C={args:{items:g,divider:!0}},w={args:{items:g,hoverable:!0}},T={args:{items:[{term:`Account`,description:`Checking`},{term:`Verification`,description:(0,h.jsx)(c,{variant:`success`,size:`sm`,children:`Verified`})},{term:`Risk Level`,description:(0,h.jsx)(c,{variant:`warning`,size:`sm`,children:`Low`})}]}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    variant: 'bordered'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    variant: 'striped'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    density: 'compact'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    orientation: 'vertical'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    divider: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    items,
    hoverable: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      term: 'Account',
      description: 'Checking'
    }, {
      term: 'Verification',
      description: <Badge variant="success" size="sm">Verified</Badge>
    }, {
      term: 'Risk Level',
      description: <Badge variant="warning" size="sm">Low</Badge>
    }]
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`Bordered`,`Striped`,`Compact`,`Vertical`,`WithDividers`,`Hoverable`,`WithBadges`]}))();export{y as Bordered,x as Compact,v as Default,w as Hoverable,b as Striped,S as Vertical,T as WithBadges,C as WithDividers,E as __namedExportsOrder,_ as default};