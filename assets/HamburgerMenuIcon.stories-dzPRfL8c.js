import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C-nBdNCE.js";import{n as r,t as i}from"./utils-CcEteFRA.js";import{t as a}from"./jsx-runtime-WZfjI2gv.js";import{s as o,t as s}from"./es-CfCMxUIg.js";var c,l,u,d=e((()=>{c=t(n()),s(),r(),l=a(),u=c.forwardRef(({isOpen:e,onClick:t,size:n=`md`,variant:r=`default`,className:a=``,"aria-label":s=`Toggle menu`,...c},u)=>{let d={sm:{button:`w-8 h-8`,width:16,gap:3,strokeWidth:2},md:{button:`w-10 h-10`,width:20,gap:4,strokeWidth:2},lg:{button:`w-12 h-12`,width:24,gap:5,strokeWidth:2.5}},f={default:`text-text-secondary hover:text-text-primary hover:bg-surface-secondary`,primary:`text-white bg-accent-blue hover:bg-accent-blue/90`,ghost:`text-text-secondary hover:text-text-primary hover:bg-transparent`},{button:p,width:m,gap:h,strokeWidth:g}=d[n];return(0,l.jsx)(o.button,{ref:u,onClick:t,className:i(`inline-flex items-center justify-center rounded-md transition-colors`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue`,p,f[r],a),whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":s,"aria-expanded":e,...c,children:(0,l.jsxs)(`svg`,{width:m,height:m,viewBox:`0 0 ${m} ${m}`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,l.jsx)(o.line,{x1:`0`,y1:`0`,x2:m,y2:`0`,stroke:`currentColor`,strokeWidth:g,strokeLinecap:`round`,animate:{rotate:e?45:0,translateY:e?m/2:h},transition:{duration:.3,ease:[.16,1,.3,1]},style:{originX:`50%`,originY:`0px`}}),(0,l.jsx)(o.line,{x1:`0`,y1:m/2,x2:m,y2:m/2,stroke:`currentColor`,strokeWidth:g,strokeLinecap:`round`,animate:{opacity:+!e,scaleX:+!e},transition:{duration:.2,ease:[.16,1,.3,1]},style:{originX:`50%`,originY:`50%`}}),(0,l.jsx)(o.line,{x1:`0`,y1:`0`,x2:m,y2:`0`,stroke:`currentColor`,strokeWidth:g,strokeLinecap:`round`,animate:{rotate:e?-45:0,translateY:e?m/2:m-h},transition:{duration:.3,ease:[.16,1,.3,1]},style:{originX:`50%`,originY:`0px`}})]})})}),u.displayName=`HamburgerMenuIcon`,u.__docgenInfo={description:``,methods:[],displayName:`HamburgerMenuIcon`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:`Whether the menu is open (shows X) or closed (shows hamburger)`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when icon is clicked`},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size variant`,defaultValue:{value:`'md'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'primary' | 'ghost'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'primary'`},{name:`literal`,value:`'ghost'`}]},description:`Color variant`,defaultValue:{value:`'default'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Optional className for custom styling`,defaultValue:{value:`''`,computed:!1}},"aria-label":{required:!1,tsType:{name:`string`},description:`Aria label for accessibility`,defaultValue:{value:`'Toggle menu'`,computed:!1}}},composes:[`Omit`]}})),f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{f=t(n()),d(),p=a(),m={title:`Navigation/HamburgerMenuIcon`,component:u,tags:[`autodocs`]},h={args:{onClick:()=>console.log(`Menu toggled`)}},g={args:{isOpen:!0,onClick:()=>console.log(`Menu toggled`)}},_={args:{size:20,onClick:()=>console.log(`Menu toggled`)}},v={args:{size:32,onClick:()=>console.log(`Menu toggled`)}},y={args:{color:`#3B82F6`,onClick:()=>console.log(`Menu toggled`)}},b={render:()=>{let[e,t]=f.useState(!1);return(0,p.jsxs)(`div`,{className:`w-full max-w-sm p-4 bg-surface-primary border border-border-primary rounded-2xl`,children:[(0,p.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,p.jsx)(`p`,{className:`text-sm font-bold text-text-primary`,children:`FinFlow`}),(0,p.jsx)(u,{isOpen:e,onClick:()=>t(!e)})]}),e&&(0,p.jsxs)(`div`,{className:`mt-4 space-y-2 pt-4 border-t border-border-primary`,children:[(0,p.jsx)(`p`,{className:`text-sm text-text-primary font-medium px-2 py-2 hover:bg-surface-secondary rounded-lg cursor-pointer`,children:`Dashboard`}),(0,p.jsx)(`p`,{className:`text-sm text-text-primary font-medium px-2 py-2 hover:bg-surface-secondary rounded-lg cursor-pointer`,children:`Transactions`}),(0,p.jsx)(`p`,{className:`text-sm text-text-primary font-medium px-2 py-2 hover:bg-surface-secondary rounded-lg cursor-pointer`,children:`Accounts`}),(0,p.jsx)(`p`,{className:`text-sm text-text-primary font-medium px-2 py-2 hover:bg-surface-secondary rounded-lg cursor-pointer`,children:`Settings`})]})]})}},x={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,p.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,p.jsx)(e,{})})]},S={parameters:{docs:{description:{story:`HamburgerMenuIcon used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: () => console.log('Menu toggled')
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    isOpen: true,
    onClick: () => console.log('Menu toggled')
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 20,
    onClick: () => console.log('Menu toggled')
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 32,
    onClick: () => console.log('Menu toggled')
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#3B82F6',
    onClick: () => console.log('Menu toggled')
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = React.useState(false);
    return <div className="w-full max-w-sm p-4 bg-surface-primary border border-border-primary rounded-2xl">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-text-primary">FinFlow</p>
          <HamburgerMenuIcon isOpen={open} onClick={() => setOpen(!open)} />
        </div>
        {open && <div className="mt-4 space-y-2 pt-4 border-t border-border-primary">
            <p className="text-sm text-text-primary font-medium px-2 py-2 hover:bg-surface-secondary rounded-lg cursor-pointer">Dashboard</p>
            <p className="text-sm text-text-primary font-medium px-2 py-2 hover:bg-surface-secondary rounded-lg cursor-pointer">Transactions</p>
            <p className="text-sm text-text-primary font-medium px-2 py-2 hover:bg-surface-secondary rounded-lg cursor-pointer">Accounts</p>
            <p className="text-sm text-text-primary font-medium px-2 py-2 hover:bg-surface-secondary rounded-lg cursor-pointer">Settings</p>
          </div>}
      </div>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'HamburgerMenuIcon used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Open`,`Small`,`Large`,`CustomColor`,`MobileBankingHeader`,`DarkMode`,`FintechUseCase`]}))();export{y as CustomColor,x as DarkMode,h as Default,S as FintechUseCase,v as Large,b as MobileBankingHeader,g as Open,_ as Small,C as __namedExportsOrder,m as default};