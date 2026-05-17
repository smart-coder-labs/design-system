import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Cg3U4lNX.js";import{Mn as r,f as i,t as a,y as o}from"./lucide-react-C65k9PFF.js";import{n as s,t as c}from"./utils-ijcE-ZHT.js";import{t as l}from"./jsx-runtime-DaLCRA3n.js";import{s as u,t as d}from"./es-COp4ZgMz.js";import{n as f,t as p}from"./Badge-Csnaa4eg.js";var m,h,g,_=e((()=>{m=t(n()),d(),s(),p(),h=l(),g=(0,m.forwardRef)(({eyebrow:e,title:t,subtitle:n,description:r,badges:i,metadata:a,metadataColumns:o=2,media:s,actions:l,footer:d,layout:p=`stacked`,variant:m=`default`,align:g=`start`,className:_,...v},y)=>{let b=u.section,x={default:`bg-surface-primary border border-border-primary shadow-sm`,soft:`bg-surface-secondary/60 border border-border-primary/50`,panel:`bg-surface-primary/90 border border-border-primary shadow-lg`,glass:`bg-white/5 dark:bg-white/2 backdrop-blur-2xl border border-white/10 shadow-[0_20px_80px_rgba(15,23,42,0.15)]`},S={1:`grid-cols-1`,2:`grid-cols-1 sm:grid-cols-2`,3:`grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`};return(0,h.jsxs)(b,{ref:y,className:c(`rounded-3xl p-6 sm:p-8 space-y-6`,x[m],_),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,ease:[.16,1,.3,1]},...v,children:[(0,h.jsx)(`div`,{className:c(p===`split`?`grid gap-8 lg:grid-cols-[1.8fr_1fr]`:`space-y-10`),children:(0,h.jsxs)(`div`,{className:c(`space-y-7`,g===`center`&&`text-center items-center flex flex-col`),children:[e&&(0,h.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-[0.35em] text-text-tertiary`,children:e}),(0,h.jsxs)(`div`,{className:`space-y-3 w-full`,children:[(0,h.jsxs)(`div`,{className:`space-y-2`,children:[(0,h.jsx)(`div`,{className:c(`text-3xl font-semibold tracking-tight text-text-primary`,g===`center`&&`text-center`),children:t}),n&&(0,h.jsx)(`p`,{className:c(`text-lg text-text-secondary`,g===`center`&&`text-center`),children:n})]}),i&&i.length>0&&(0,h.jsx)(`div`,{className:c(`flex flex-wrap gap-2`,g===`center`&&`justify-center`),children:i.map((e,t)=>(0,h.jsx)(f,{size:`sm`,className:`bg-surface-secondary/60 border border-border-primary/60 text-text-secondary`,children:e},t))})]}),r&&(0,h.jsx)(`div`,{className:c(`text-base text-text-secondary leading-relaxed max-w-2xl`,g===`center`&&`mx-auto text-center`),children:r}),l&&(0,h.jsx)(`div`,{className:c(`flex flex-wrap gap-3`,g===`center`&&`justify-center`),children:l}),s&&(0,h.jsx)(`div`,{className:`overflow-hidden rounded-2xl border border-border-primary/60 bg-surface-secondary/40`,children:s}),a&&a.length>0&&(0,h.jsxs)(`div`,{className:`space-y-4`,children:[(0,h.jsx)(`p`,{className:`text-xs font-semibold uppercase tracking-[0.3em] text-text-tertiary`,children:`Detalles`}),(0,h.jsx)(`div`,{className:c(`grid gap-6`,S[o]),children:a.map((e,t)=>(0,h.jsxs)(`div`,{className:`rounded-2xl border border-border-primary/40 bg-surface-secondary/30 p-5 space-y-1.5`,children:[(0,h.jsxs)(`div`,{className:`flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-tertiary`,children:[e.icon&&(0,h.jsx)(`span`,{className:`text-text-tertiary`,children:e.icon}),(0,h.jsx)(`span`,{children:e.label})]}),(0,h.jsx)(`div`,{className:`text-text-primary text-lg font-semibold break-words`,children:e.value}),e.hint&&(0,h.jsx)(`p`,{className:`text-sm text-text-secondary`,children:e.hint})]},t))})]})]})}),p===`stacked`&&d&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(`br`,{}),(0,h.jsx)(`div`,{className:`rounded-2xl border border-dashed border-border-primary/60 p-4 text-sm text-text-secondary`,children:d})]})]})}),g.displayName=`DescriptionBlock`,g.__docgenInfo={description:``,methods:[],displayName:`DescriptionBlock`,props:{eyebrow:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},title:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},subtitle:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},badges:{required:!1,tsType:{name:`Array`,elements:[{name:`ReactReactNode`,raw:`React.ReactNode`}],raw:`React.ReactNode[]`},description:``},metadata:{required:!1,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
    label: React.ReactNode;
    value: React.ReactNode;
    icon?: React.ReactNode;
    hint?: React.ReactNode;
}`,signature:{properties:[{key:`label`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`value`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`icon`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}},{key:`hint`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!1}}]}}],raw:`DescriptionMetadataItem[]`},description:``},metadataColumns:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 3`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`3`}]},description:``,defaultValue:{value:`2`,computed:!1}},media:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},actions:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},footer:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},layout:{required:!1,tsType:{name:`union`,raw:`'stacked' | 'split'`,elements:[{name:`literal`,value:`'stacked'`},{name:`literal`,value:`'split'`}]},description:``,defaultValue:{value:`'stacked'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'soft' | 'panel' | 'glass'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'soft'`},{name:`literal`,value:`'panel'`},{name:`literal`,value:`'glass'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},align:{required:!1,tsType:{name:`union`,raw:`'start' | 'center'`,elements:[{name:`literal`,value:`'start'`},{name:`literal`,value:`'center'`}]},description:``,defaultValue:{value:`'start'`,computed:!1}}},composes:[`Omit`]}})),v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{n(),_(),p(),a(),v=l(),y=[{label:`Total Revenue`,value:`$124,500`,icon:(0,v.jsx)(r,{className:`w-4 h-4`})},{label:`Active Users`,value:`2,847`,icon:(0,v.jsx)(i,{className:`w-4 h-4`})},{label:`Growth Rate`,value:`+12.5%`,icon:(0,v.jsx)(o,{className:`w-4 h-4`}),hint:`vs last month`}],b={title:`Data Display/DescriptionBlock`,component:g,tags:[`autodocs`]},x={args:{title:`Fintech Dashboard Pro`,subtitle:`Enterprise-grade financial dashboard`,description:`A comprehensive analytics platform designed for fintech companies. Track revenue, monitor user growth, and manage financial operations in real-time.`,badges:[(0,v.jsx)(f,{variant:`primary`,children:`Active`}),(0,v.jsx)(f,{variant:`default`,children:`v2.4`})],metadata:y}},S={args:{title:`Investment Portfolio`,eyebrow:`Q2 2026`,description:`Diversified portfolio with exposure to technology, healthcare, and renewable energy sectors.`,layout:`stacked`,metadata:[{label:`Total Value`,value:`$285,000`},{label:`ROI`,value:`+8.3%`}]}},C={args:{title:`Company Profile`,subtitle:`Acme Financial Services`,description:`Leading provider of digital banking solutions in Latin America.`,layout:`split`,metadata:[{label:`Founded`,value:`2018`},{label:`Employees`,value:`340`},{label:`Funding`,value:`$12M Series B`}]}},w={args:{title:`Premium Account`,variant:`glass`,metadata:[{label:`Credit Limit`,value:`$25,000`},{label:`Available`,value:`$18,400`}]}},T={args:{title:`Quick Overview`,variant:`soft`,metadata:[{label:`Today`,value:`+$340`}],align:`center`}},E={args:{title:`Pending Approvals`,description:`Review and approve pending transactions.`,metadata:y,footer:(0,v.jsx)(`p`,{className:`text-sm text-text-tertiary`,children:`3 items pending review`})}},D={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,v.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,v.jsx)(e,{})})]},O={parameters:{viewport:{defaultViewport:`mobile1`}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Fintech Dashboard Pro',
    subtitle: 'Enterprise-grade financial dashboard',
    description: 'A comprehensive analytics platform designed for fintech companies. Track revenue, monitor user growth, and manage financial operations in real-time.',
    badges: [<Badge variant="primary">Active</Badge>, <Badge variant="default">v2.4</Badge>],
    metadata
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Investment Portfolio',
    eyebrow: 'Q2 2026',
    description: 'Diversified portfolio with exposure to technology, healthcare, and renewable energy sectors.',
    layout: 'stacked',
    metadata: [{
      label: 'Total Value',
      value: '$285,000'
    }, {
      label: 'ROI',
      value: '+8.3%'
    }]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Company Profile',
    subtitle: 'Acme Financial Services',
    description: 'Leading provider of digital banking solutions in Latin America.',
    layout: 'split',
    metadata: [{
      label: 'Founded',
      value: '2018'
    }, {
      label: 'Employees',
      value: '340'
    }, {
      label: 'Funding',
      value: '$12M Series B'
    }]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Premium Account',
    variant: 'glass',
    metadata: [{
      label: 'Credit Limit',
      value: '$25,000'
    }, {
      label: 'Available',
      value: '$18,400'
    }]
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Quick Overview',
    variant: 'soft',
    metadata: [{
      label: 'Today',
      value: '+$340'
    }],
    align: 'center'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Pending Approvals',
    description: 'Review and approve pending transactions.',
    metadata,
    footer: <p className="text-sm text-text-tertiary">3 items pending review</p>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Stacked`,`SplitLayout`,`GlassVariant`,`SoftVariant`,`WithActions`,`DarkMode`,`MobileView`]}))();export{D as DarkMode,x as Default,w as GlassVariant,O as MobileView,T as SoftVariant,C as SplitLayout,S as Stacked,E as WithActions,k as __namedExportsOrder,b as default};