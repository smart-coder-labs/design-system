import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-524CuMck.js";import{Zt as r,gr as i,t as a}from"./lucide-react-vxYowq1d.js";import{t as o}from"./jsx-runtime-DaLCRA3n.js";import{l as s,s as c,t as l}from"./es-SPnJQbAq.js";var u,d,f,p=e((()=>{u=t(n()),l(),a(),d=o(),f=({term:e,definition:t,example:n,children:a})=>{let[o,l]=(0,u.useState)(!1),f=(0,u.useRef)(null),p=(0,u.useRef)(null);return(0,u.useEffect)(()=>{let e=e=>{p.current&&!p.current.contains(e.target)&&f.current&&!f.current.contains(e.target)&&l(!1)},t=e=>{e.key===`Escape`&&l(!1)};return o&&(document.addEventListener(`mousedown`,e),document.addEventListener(`keydown`,t)),()=>{document.removeEventListener(`mousedown`,e),document.removeEventListener(`keydown`,t)}},[o]),(0,d.jsxs)(`span`,{className:`relative inline-block`,children:[(0,d.jsx)(`span`,{ref:f,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),onClick:()=>l(!o),onFocus:()=>l(!0),onBlur:()=>l(!1),className:`cursor-help focus:outline-none`,tabIndex:0,role:`button`,"aria-expanded":o,children:a||(0,d.jsxs)(`span`,{className:`border-b border-dashed border-blue-400 text-blue-600 dark:text-blue-400 font-medium inline-flex items-center gap-1`,children:[e,(0,d.jsx)(r,{size:12,className:`text-blue-500/70`})]})}),(0,d.jsx)(s,{children:o&&(0,d.jsx)(c.div,{ref:p,initial:{opacity:0,y:5,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:5,scale:.95},transition:{duration:.15,ease:`easeOut`},className:`absolute z-50 w-64 bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none`,style:{filter:`drop-shadow(0 10px 15px rgba(0,0,0,0.1))`},children:(0,d.jsxs)(`div`,{className:`bg-surface-primary rounded-xl border border-border-primary p-4 text-left pointer-events-auto shadow-xl`,children:[(0,d.jsxs)(`div`,{className:`flex items-center gap-2 mb-2 text-text-primary`,children:[(0,d.jsx)(i,{size:16,className:`text-blue-500`}),(0,d.jsx)(`h5`,{className:`font-semibold text-sm capitalize`,children:e})]}),(0,d.jsx)(`p`,{className:`text-sm text-text-secondary leading-relaxed mb-3`,children:t}),n&&(0,d.jsxs)(`div`,{className:`bg-background-secondary rounded-lg p-3 border border-border-primary`,children:[(0,d.jsx)(`p`,{className:`text-xs text-text-tertiary font-medium mb-1 uppercase tracking-wider`,children:`Ejemplo`}),(0,d.jsxs)(`p`,{className:`text-sm text-text-primary`,children:[`"`,n,`"`]})]}),(0,d.jsx)(`div`,{className:`absolute w-3 h-3 bg-surface-primary border-b border-r border-border-primary left-1/2 -translate-x-1/2 -bottom-1.5 rotate-45`})]})})})]})},f.__docgenInfo={description:``,methods:[],displayName:`JargonTooltip`,props:{term:{required:!0,tsType:{name:`string`},description:`The complex term to explain`},definition:{required:!0,tsType:{name:`string`},description:`The simple explanation`},example:{required:!1,tsType:{name:`string`},description:`An example to clarify the definition`},children:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Element that triggers the tooltip. If omitted, it will render the term with a dashed underline.`}}}})),m,h,g,_,v,y,b,x,S,C,w;e((()=>{n(),p(),m=o(),h={title:`Fintech/Education/JargonTooltip`,component:f,tags:[`autodocs`],parameters:{layout:`centered`}},g={args:{term:`APY`,definition:`Annual Percentage Yield — the real rate of return on your savings, including compound interest.`,children:(0,m.jsx)(`span`,{className:`text-accent-blue underline decoration-dotted cursor-help`,children:`4.5% APY`})}},_={render:()=>(0,m.jsxs)(`div`,{className:`w-96 space-y-3 text-sm`,children:[(0,m.jsxs)(`p`,{className:`text-text-primary`,children:[`Your `,(0,m.jsx)(f,{term:`APR`,definition:`Annual Percentage Rate — the yearly cost of borrowing, including interest and fees.`,children:(0,m.jsx)(`span`,{className:`text-accent-blue underline decoration-dotted cursor-help`,children:`APR`})}),` for this loan is 8.5%.`]}),(0,m.jsxs)(`p`,{className:`text-text-primary`,children:[`This `,(0,m.jsx)(f,{term:`ACH`,definition:`Automated Clearing House — an electronic network for financial transactions in the US.`,children:(0,m.jsx)(`span`,{className:`text-accent-blue underline decoration-dotted cursor-help`,children:`ACH`})}),` transfer will arrive in 2-3 business days.`]}),(0,m.jsxs)(`p`,{className:`text-text-primary`,children:[`Your portfolio includes `,(0,m.jsx)(f,{term:`ETF`,definition:`Exchange-Traded Fund — a basket of securities that trades on an exchange like a stock.`,children:(0,m.jsx)(`span`,{className:`text-accent-blue underline decoration-dotted cursor-help`,children:`ETFs`})}),` and individual stocks.`]})]})},v={render:()=>(0,m.jsxs)(`div`,{className:`w-96 space-y-3 text-sm`,children:[(0,m.jsxs)(`p`,{className:`text-text-primary`,children:[`Transaction requires 12 `,(0,m.jsx)(f,{term:`Confirmations`,definition:`The number of blocks added to the blockchain after a transaction is included. More confirmations = more secure.`,children:(0,m.jsx)(`span`,{className:`text-accent-blue underline decoration-dotted cursor-help`,children:`confirmations`})}),` before funds are available.`]}),(0,m.jsxs)(`p`,{className:`text-text-primary`,children:[`Your `,(0,m.jsx)(f,{term:`Gas Fee`,definition:`The fee paid to miners/validators for processing a transaction on a blockchain network.`,children:(0,m.jsx)(`span`,{className:`text-accent-blue underline decoration-dotted cursor-help`,children:`gas fee`})}),` is currently 0.002 ETH.`]}),(0,m.jsxs)(`p`,{className:`text-text-primary`,children:[`You can `,(0,m.jsx)(f,{term:`Staking`,definition:`Locking up cryptocurrency to support network operations in exchange for rewards.`,children:(0,m.jsx)(`span`,{className:`text-accent-blue underline decoration-dotted cursor-help`,children:`stake`})}),` your ETH to earn up to 5% APY.`]})]})},y={render:()=>(0,m.jsxs)(`div`,{className:`w-96 space-y-3 text-sm`,children:[(0,m.jsxs)(`p`,{children:[(0,m.jsx)(f,{term:`Diversification`,definition:`Spreading investments across different assets to reduce risk.`,children:(0,m.jsx)(`span`,{className:`text-accent-blue underline decoration-dotted cursor-help`,children:`Diversification`})}),` is key to a healthy portfolio.`]}),(0,m.jsxs)(`p`,{children:[`This fund has a 0.75% `,(0,m.jsx)(f,{term:`Expense Ratio`,definition:`The annual fee charged by a fund to cover operating expenses, expressed as a percentage of assets.`,children:(0,m.jsx)(`span`,{className:`text-accent-blue underline decoration-dotted cursor-help`,children:`expense ratio`})}),`.`]}),(0,m.jsxs)(`p`,{children:[`Your `,(0,m.jsx)(f,{term:`Cost Basis`,definition:`The original value of an asset for tax purposes, used to calculate capital gains or losses.`,children:(0,m.jsx)(`span`,{className:`text-accent-blue underline decoration-dotted cursor-help`,children:`cost basis`})}),` for BTC is $42,000.`]})]})},b={render:()=>(0,m.jsxs)(`p`,{className:`text-sm text-text-primary`,children:[`Opening a `,(0,m.jsx)(f,{term:`CD`,definition:`Certificate of Deposit — a time deposit with a fixed maturity date and interest rate offered by banks.`,children:(0,m.jsx)(`span`,{className:`text-accent-blue underline decoration-dotted cursor-help font-semibold`,children:`CD`})}),` can earn higher interest than a regular savings account.`]})},x={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,m.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,m.jsx)(e,{})})]},S={parameters:{viewport:{defaultViewport:`mobile1`}}},C={parameters:{docs:{description:{story:`JargonTooltip used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    term: 'APY',
    definition: 'Annual Percentage Yield — the real rate of return on your savings, including compound interest.',
    children: <span className="text-accent-blue underline decoration-dotted cursor-help">4.5% APY</span>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-96 space-y-3 text-sm">
      <p className="text-text-primary">
        Your <JargonTooltip term="APR" definition="Annual Percentage Rate — the yearly cost of borrowing, including interest and fees.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">APR</span>
        </JargonTooltip> for this loan is 8.5%.
      </p>
      <p className="text-text-primary">
        This <JargonTooltip term="ACH" definition="Automated Clearing House — an electronic network for financial transactions in the US.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">ACH</span>
        </JargonTooltip> transfer will arrive in 2-3 business days.
      </p>
      <p className="text-text-primary">
        Your portfolio includes <JargonTooltip term="ETF" definition="Exchange-Traded Fund — a basket of securities that trades on an exchange like a stock.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">ETFs</span>
        </JargonTooltip> and individual stocks.
      </p>
    </div>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-96 space-y-3 text-sm">
      <p className="text-text-primary">
        Transaction requires 12 <JargonTooltip term="Confirmations" definition="The number of blocks added to the blockchain after a transaction is included. More confirmations = more secure.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">confirmations</span>
        </JargonTooltip> before funds are available.
      </p>
      <p className="text-text-primary">
        Your <JargonTooltip term="Gas Fee" definition="The fee paid to miners/validators for processing a transaction on a blockchain network.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">gas fee</span>
        </JargonTooltip> is currently 0.002 ETH.
      </p>
      <p className="text-text-primary">
        You can <JargonTooltip term="Staking" definition="Locking up cryptocurrency to support network operations in exchange for rewards.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">stake</span>
        </JargonTooltip> your ETH to earn up to 5% APY.
      </p>
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-96 space-y-3 text-sm">
      <p>
        <JargonTooltip term="Diversification" definition="Spreading investments across different assets to reduce risk.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">Diversification</span>
        </JargonTooltip> is key to a healthy portfolio.
      </p>
      <p>
        This fund has a 0.75% <JargonTooltip term="Expense Ratio" definition="The annual fee charged by a fund to cover operating expenses, expressed as a percentage of assets.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">expense ratio</span>
        </JargonTooltip>.
      </p>
      <p>
        Your <JargonTooltip term="Cost Basis" definition="The original value of an asset for tax purposes, used to calculate capital gains or losses.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">cost basis</span>
        </JargonTooltip> for BTC is $42,000.
      </p>
    </div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <p className="text-sm text-text-primary">
      Opening a <JargonTooltip term="CD" definition="Certificate of Deposit — a time deposit with a fixed maturity date and interest rate offered by banks.">
        <span className="text-accent-blue underline decoration-dotted cursor-help font-semibold">CD</span>
      </JargonTooltip> can earn higher interest than a regular savings account.
    </p>
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
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'JargonTooltip used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`FintechTerms`,`CryptoTerms`,`InvestmentTerms`,`InlineTerm`,`DarkMode`,`MobileView`,`FintechUseCase`]}))();export{v as CryptoTerms,x as DarkMode,g as Default,_ as FintechTerms,C as FintechUseCase,b as InlineTerm,y as InvestmentTerms,S as MobileView,w as __namedExportsOrder,h as default};