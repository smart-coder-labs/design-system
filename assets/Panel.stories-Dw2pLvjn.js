import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CmoObUFa.js";import{er as r,t as i}from"./lucide-react-Dg7gJGVx.js";import{n as a,t as o}from"./utils-ijcE-ZHT.js";import{t as s}from"./jsx-runtime-DaLCRA3n.js";import{l as c,s as l,t as u}from"./es-Bjq_ogfB.js";var d,f,p,m=e((()=>{d=t(n()),a(),u(),i(),f=s(),p=(0,d.forwardRef)(({variant:e=`default`,title:t,subtitle:n,headerActions:i,footer:a,collapsible:s=!1,defaultCollapsed:u=!1,padding:p=`md`,className:m,children:h,...g},_)=>{let[v,y]=(0,d.useState)(u),b={default:`bg-surface-primary border border-border-primary`,elevated:`bg-surface-elevated shadow-md`,outlined:`bg-transparent border-2 border-border-primary`,glass:`bg-surface-glass backdrop-blur-md border border-border-primary/50`},x={none:``,sm:`p-3`,md:`p-4`,lg:`p-6`},S=t||n||i||s;return(0,f.jsxs)(`div`,{ref:_,className:o(`rounded-xl overflow-hidden transition-all`,b[e],m),...g,children:[S&&(0,f.jsxs)(`div`,{className:o(`flex items-center justify-between border-b border-border-primary`,p===`none`?`p-4`:x[p]),children:[(0,f.jsxs)(`div`,{className:`flex-1`,children:[t&&(0,f.jsx)(`h3`,{className:`text-lg font-semibold text-text-primary`,children:t}),n&&(0,f.jsx)(`p`,{className:`text-sm text-text-secondary mt-0.5`,children:n})]}),(0,f.jsxs)(`div`,{className:`flex items-center gap-2`,children:[i,s&&(0,f.jsx)(`button`,{onClick:()=>y(!v),className:`p-1 rounded-lg hover:bg-surface-secondary transition-colors focus:outline-none`,"aria-label":v?`Expand`:`Collapse`,children:(0,f.jsx)(l.div,{animate:{rotate:v?-90:0},transition:{duration:.2},children:(0,f.jsx)(r,{className:`w-5 h-5 text-text-tertiary`})})})]})]}),(0,f.jsx)(c,{initial:!1,children:!v&&(0,f.jsx)(l.div,{initial:{height:0,opacity:0},animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},transition:{duration:.2},children:(0,f.jsx)(`div`,{className:o(x[p]),children:h})})}),a&&!v&&(0,f.jsx)(`div`,{className:o(`border-t border-border-primary`,p===`none`?`p-4`:x[p]),children:a})]})}),p.displayName=`Panel`,p.__docgenInfo={description:``,methods:[],displayName:`Panel`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'elevated' | 'outlined' | 'glass'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'elevated'`},{name:`literal`,value:`'outlined'`},{name:`literal`,value:`'glass'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},title:{required:!1,tsType:{name:`string`},description:``},subtitle:{required:!1,tsType:{name:`string`},description:``},headerActions:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},footer:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},collapsible:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},defaultCollapsed:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},padding:{required:!1,tsType:{name:`union`,raw:`'none' | 'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'none'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}}}}})),h,g,_,v,y,b,x,S,C,w,T;e((()=>{m(),h=s(),g={title:`Surfaces/Panel`,component:p,tags:[`autodocs`]},_={args:{title:`Account Overview`,children:(0,h.jsx)(`p`,{className:`text-text-secondary`,children:`Your account balance and recent activity will appear here.`})}},v={args:{title:`Portfolio Performance`,variant:`elevated`,children:(0,h.jsx)(`p`,{className:`text-text-secondary`,children:`+12.4% this quarter across all assets.`})}},y={args:{title:`Security Settings`,variant:`bordered`,children:(0,h.jsx)(`p`,{className:`text-text-secondary`,children:`Manage your password, 2FA, and session settings.`})}},b={args:{title:`Recent Transactions`,actions:(0,h.jsx)(`button`,{className:`text-sm text-accent-blue hover:underline`,children:`View All`}),children:(0,h.jsx)(`p`,{className:`text-text-secondary`,children:`Latest 5 transactions displayed below.`})}},x={args:{children:(0,h.jsx)(`div`,{className:`p-4`,children:(0,h.jsx)(`p`,{className:`text-text-primary`,children:`Content panel without a title header.`})})}},S={args:{title:`Quick Stats`,compact:!0,children:(0,h.jsx)(`p`,{className:`text-text-secondary text-sm`,children:`Compact panel for dashboard widgets.`})}},C={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,h.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,h.jsx)(e,{})})]},w={parameters:{viewport:{defaultViewport:`mobile1`}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Account Overview',
    children: <p className="text-text-secondary">Your account balance and recent activity will appear here.</p>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Portfolio Performance',
    variant: 'elevated',
    children: <p className="text-text-secondary">+12.4% this quarter across all assets.</p>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Security Settings',
    variant: 'bordered',
    children: <p className="text-text-secondary">Manage your password, 2FA, and session settings.</p>
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Recent Transactions',
    actions: <button className="text-sm text-accent-blue hover:underline">View All</button>,
    children: <p className="text-text-secondary">Latest 5 transactions displayed below.</p>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="p-4">
        <p className="text-text-primary">Content panel without a title header.</p>
      </div>
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Quick Stats',
    compact: true,
    children: <p className="text-text-secondary text-sm">Compact panel for dashboard widgets.</p>
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
}`,...w.parameters?.docs?.source}}},T=[`Default`,`Elevated`,`Bordered`,`WithActions`,`NoTitle`,`Compact`,`DarkMode`,`MobileView`]}))();export{y as Bordered,S as Compact,C as DarkMode,_ as Default,v as Elevated,w as MobileView,x as NoTitle,b as WithActions,T as __namedExportsOrder,g as default};