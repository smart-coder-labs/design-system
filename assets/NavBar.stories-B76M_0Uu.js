import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-DuoaHqPM.js";import{t as n}from"./jsx-runtime-BscHEzdU.js";import{s as r,t as i}from"./es-lKEstbry.js";var a,o,s,c,l,u,d,f=e((()=>{t(),i(),a=n(),o={default:`
    bg-surface-primary
    border-b border-border-primary
    shadow-sm
  `,glass:`
    glass
    border-b border-border-secondary
    shadow-sm
  `,transparent:`
    bg-transparent
  `},s=({children:e,variant:t=`default`,sticky:n=!0,className:i=``})=>(0,a.jsx)(r.nav,{className:`
        ${n?`sticky top-0`:``}
        ${o[t]}
        z-50
        transition-apple
        ${i}
      `,initial:{y:-100,opacity:0},animate:{y:0,opacity:1},transition:{type:`spring`,stiffness:300,damping:30,mass:.8},children:(0,a.jsx)(`div`,{className:`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,children:(0,a.jsx)(`div`,{className:`flex items-center justify-between h-16`,children:e})})}),c=({children:e,href:t=`/`,className:n=``})=>(0,a.jsx)(t?`a`:`div`,{href:t,className:`
        flex items-center gap-2
        text-lg font-semibold
        text-text-primary
        transition-apple
        hover:opacity-80
        ${n}
      `,children:e}),l=({children:e,align:t=`left`,className:n=``})=>(0,a.jsx)(`div`,{className:`flex items-center gap-1 ${{left:`justify-start`,center:`justify-center`,right:`justify-end`}[t]} ${n}`,children:e}),u=({children:e,active:t=!1,href:n,onClick:i,className:o=``})=>{let s=n?`a`:`button`;return(0,a.jsx)(r.div,{whileHover:{scale:1.02},whileTap:{scale:.98},children:(0,a.jsxs)(s,{href:n,onClick:i,className:`
          relative
          px-4 py-2
          text-sm font-medium
          rounded-lg
          transition-apple
          outline-none
          focus-visible:ring-2
          focus-visible:ring-accent-blue
          ${t?`text-text-primary bg-surface-secondary`:`text-text-secondary hover:text-text-primary hover:bg-surface-secondary/50`}
          ${o}
        `,children:[e,t&&(0,a.jsx)(r.div,{layoutId:`navbar-indicator`,className:`absolute bottom-0 left-2 right-2 h-0.5 bg-accent-blue rounded-full`,initial:!1,transition:{type:`spring`,stiffness:400,damping:30,mass:.6}})]})})},d=()=>(0,a.jsx)(`div`,{className:`h-6 w-px bg-border-primary mx-2`}),s.__docgenInfo={description:``,methods:[],displayName:`NavBar`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'glass' | 'transparent'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'glass'`},{name:`literal`,value:`'transparent'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},sticky:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},c.__docgenInfo={description:``,methods:[],displayName:`NavBarBrand`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},href:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'/'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},l.__docgenInfo={description:``,methods:[],displayName:`NavBarContent`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},align:{required:!1,tsType:{name:`union`,raw:`'left' | 'center' | 'right'`,elements:[{name:`literal`,value:`'left'`},{name:`literal`,value:`'center'`},{name:`literal`,value:`'right'`}]},description:``,defaultValue:{value:`'left'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},u.__docgenInfo={description:``,methods:[],displayName:`NavBarItem`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},active:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},href:{required:!1,tsType:{name:`string`},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}},d.__docgenInfo={description:``,methods:[],displayName:`NavBarSeparator`}})),p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{f(),t(),p=n(),m={title:`Navigation/NavBar`,component:s,tags:[`autodocs`]},h={render:()=>(0,p.jsxs)(s,{children:[(0,p.jsx)(c,{children:`FinFlow`}),(0,p.jsxs)(l,{align:`center`,children:[(0,p.jsx)(u,{active:!0,children:`Dashboard`}),(0,p.jsx)(u,{children:`Transactions`}),(0,p.jsx)(u,{children:`Investments`}),(0,p.jsx)(u,{children:`Settings`})]}),(0,p.jsxs)(l,{align:`right`,children:[(0,p.jsx)(d,{}),(0,p.jsx)(u,{children:`Sign Out`})]})]})},g={render:()=>(0,p.jsxs)(s,{variant:`glass`,children:[(0,p.jsx)(c,{children:`FinFlow`}),(0,p.jsxs)(l,{align:`center`,children:[(0,p.jsx)(u,{active:!0,children:`Dashboard`}),(0,p.jsx)(u,{children:`Transactions`}),(0,p.jsx)(u,{children:`Analytics`})]})]})},_={render:()=>(0,p.jsx)(`div`,{style:{background:`linear-gradient(135deg, #667eea 0%, #764ba2 100%)`,padding:20,borderRadius:12},children:(0,p.jsxs)(s,{variant:`transparent`,sticky:!1,children:[(0,p.jsx)(c,{children:(0,p.jsx)(`span`,{style:{color:`white`},children:`FinFlow`})}),(0,p.jsxs)(l,{align:`center`,children:[(0,p.jsx)(u,{active:!0,children:(0,p.jsx)(`span`,{style:{color:`white`},children:`Home`})}),(0,p.jsx)(u,{children:(0,p.jsx)(`span`,{style:{color:`rgba(255,255,255,0.7)`},children:`About`})})]})]})})},v={render:()=>(0,p.jsxs)(s,{sticky:!1,children:[(0,p.jsx)(c,{children:`FinFlow`}),(0,p.jsxs)(l,{align:`right`,children:[(0,p.jsx)(u,{active:!0,children:`Home`}),(0,p.jsx)(u,{children:`Pricing`}),(0,p.jsx)(u,{children:`Contact`})]})]})},y={render:()=>(0,p.jsxs)(s,{children:[(0,p.jsx)(c,{children:`FinFlow`}),(0,p.jsxs)(l,{align:`center`,children:[(0,p.jsx)(u,{active:!0,children:`Dashboard`}),(0,p.jsx)(u,{children:`Transactions`}),(0,p.jsx)(u,{children:`Investments`}),(0,p.jsx)(u,{children:`Analytics`}),(0,p.jsx)(u,{children:`Wallets`}),(0,p.jsx)(u,{children:`Reports`}),(0,p.jsx)(u,{children:`Settings`}),(0,p.jsx)(u,{children:`Help`})]})]})},b={render:()=>(0,p.jsxs)(s,{children:[(0,p.jsx)(c,{href:`https://finflow.app`,children:`FinFlow`}),(0,p.jsxs)(l,{align:`center`,children:[(0,p.jsx)(u,{active:!0,children:`Dashboard`}),(0,p.jsx)(u,{children:`Transactions`})]}),(0,p.jsxs)(l,{align:`right`,children:[(0,p.jsx)(d,{}),(0,p.jsx)(u,{children:`Profile`})]})]})},x={render:()=>(0,p.jsxs)(s,{variant:`glass`,children:[(0,p.jsx)(c,{children:`FinFlow`}),(0,p.jsxs)(l,{align:`center`,children:[(0,p.jsx)(u,{active:!0,children:`Dashboard`}),(0,p.jsx)(u,{children:`Transactions`}),(0,p.jsx)(u,{children:`Analytics`}),(0,p.jsx)(u,{children:`Wallets`})]}),(0,p.jsxs)(l,{align:`right`,children:[(0,p.jsx)(d,{}),(0,p.jsx)(u,{children:`Sign Out`})]})]})},S={render:()=>(0,p.jsx)(`div`,{className:`dark`,children:(0,p.jsxs)(s,{children:[(0,p.jsx)(c,{children:`FinFlow`}),(0,p.jsxs)(l,{align:`center`,children:[(0,p.jsx)(u,{active:!0,children:`Dashboard`}),(0,p.jsx)(u,{children:`Transactions`}),(0,p.jsx)(u,{children:`Investments`})]})]})})},C={render:()=>(0,p.jsx)(`div`,{className:`max-w-sm mx-auto border border-border-primary rounded-lg overflow-hidden`,children:(0,p.jsxs)(s,{children:[(0,p.jsx)(c,{children:`FinFlow`}),(0,p.jsx)(l,{align:`center`,children:(0,p.jsx)(u,{active:!0,children:`Home`})})]})})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <NavBar>
            <NavBarBrand>FinFlow</NavBarBrand>
            <NavBarContent align="center">
                <NavBarItem active>Dashboard</NavBarItem>
                <NavBarItem>Transactions</NavBarItem>
                <NavBarItem>Investments</NavBarItem>
                <NavBarItem>Settings</NavBarItem>
            </NavBarContent>
            <NavBarContent align="right">
                <NavBarSeparator />
                <NavBarItem>Sign Out</NavBarItem>
            </NavBarContent>
        </NavBar>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <NavBar variant="glass">
            <NavBarBrand>FinFlow</NavBarBrand>
            <NavBarContent align="center">
                <NavBarItem active>Dashboard</NavBarItem>
                <NavBarItem>Transactions</NavBarItem>
                <NavBarItem>Analytics</NavBarItem>
            </NavBarContent>
        </NavBar>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: 20,
    borderRadius: 12
  }}>
            <NavBar variant="transparent" sticky={false}>
                <NavBarBrand><span style={{
          color: 'white'
        }}>FinFlow</span></NavBarBrand>
                <NavBarContent align="center">
                    <NavBarItem active><span style={{
            color: 'white'
          }}>Home</span></NavBarItem>
                    <NavBarItem><span style={{
            color: 'rgba(255,255,255,0.7)'
          }}>About</span></NavBarItem>
                </NavBarContent>
            </NavBar>
        </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <NavBar sticky={false}>
            <NavBarBrand>FinFlow</NavBarBrand>
            <NavBarContent align="right">
                <NavBarItem active>Home</NavBarItem>
                <NavBarItem>Pricing</NavBarItem>
                <NavBarItem>Contact</NavBarItem>
            </NavBarContent>
        </NavBar>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <NavBar>
            <NavBarBrand>FinFlow</NavBarBrand>
            <NavBarContent align="center">
                <NavBarItem active>Dashboard</NavBarItem>
                <NavBarItem>Transactions</NavBarItem>
                <NavBarItem>Investments</NavBarItem>
                <NavBarItem>Analytics</NavBarItem>
                <NavBarItem>Wallets</NavBarItem>
                <NavBarItem>Reports</NavBarItem>
                <NavBarItem>Settings</NavBarItem>
                <NavBarItem>Help</NavBarItem>
            </NavBarContent>
        </NavBar>
}`,...y.parameters?.docs?.source},description:{story:`Many navigation items — edge case for overflow`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <NavBar>
            <NavBarBrand href="https://finflow.app">FinFlow</NavBarBrand>
            <NavBarContent align="center">
                <NavBarItem active>Dashboard</NavBarItem>
                <NavBarItem>Transactions</NavBarItem>
            </NavBarContent>
            <NavBarContent align="right">
                <NavBarSeparator />
                <NavBarItem>Profile</NavBarItem>
            </NavBarContent>
        </NavBar>
}`,...b.parameters?.docs?.source},description:{story:`Brand with link (href)`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <NavBar variant="glass">
            <NavBarBrand>FinFlow</NavBarBrand>
            <NavBarContent align="center">
                <NavBarItem active>Dashboard</NavBarItem>
                <NavBarItem>Transactions</NavBarItem>
                <NavBarItem>Analytics</NavBarItem>
                <NavBarItem>Wallets</NavBarItem>
            </NavBarContent>
            <NavBarContent align="right">
                <NavBarSeparator />
                <NavBarItem>Sign Out</NavBarItem>
            </NavBarContent>
        </NavBar>
}`,...x.parameters?.docs?.source},description:{story:`Glass variant with multiple sections`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="dark">
            <NavBar>
                <NavBarBrand>FinFlow</NavBarBrand>
                <NavBarContent align="center">
                    <NavBarItem active>Dashboard</NavBarItem>
                    <NavBarItem>Transactions</NavBarItem>
                    <NavBarItem>Investments</NavBarItem>
                </NavBarContent>
            </NavBar>
        </div>
}`,...S.parameters?.docs?.source},description:{story:`Dark mode navbar`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-sm mx-auto border border-border-primary rounded-lg overflow-hidden">
            <NavBar>
                <NavBarBrand>FinFlow</NavBarBrand>
                <NavBarContent align="center">
                    <NavBarItem active>Home</NavBarItem>
                </NavBarContent>
            </NavBar>
        </div>
}`,...C.parameters?.docs?.source},description:{story:`Mobile responsive`,...C.parameters?.docs?.description}}},w=[`Default`,`Glass`,`Transparent`,`NonSticky`,`ManyItems`,`WithBrandLink`,`GlassFull`,`DarkMode`,`Mobile`]}))();export{S as DarkMode,h as Default,g as Glass,x as GlassFull,y as ManyItems,C as Mobile,v as NonSticky,_ as Transparent,b as WithBrandLink,w as __namedExportsOrder,m as default};