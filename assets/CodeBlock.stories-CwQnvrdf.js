import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-XNVef-eS.js";import{Fn as r,t as i,tr as a}from"./lucide-react-DbXpDP9_.js";import{t as o}from"./jsx-runtime-DaLCRA3n.js";var s,c,l,u=e((()=>{s=t(n()),i(),c=o(),l=({code:e,language:t=`typescript`,showLineNumbers:n=!1,className:i=``})=>{let[o,l]=s.useState(!1);return(0,c.jsxs)(`div`,{className:`relative group rounded-xl overflow-hidden bg-background-secondary border border-border-primary ${i}`,children:[(0,c.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-background-tertiary/50 border-b border-border-primary`,children:[(0,c.jsx)(`span`,{className:`text-xs font-medium text-text-tertiary uppercase tracking-wider`,children:t}),(0,c.jsx)(`button`,{onClick:()=>{navigator.clipboard.writeText(e),l(!0),setTimeout(()=>l(!1),2e3)},className:`p-1.5 rounded-lg hover:bg-background-tertiary text-text-tertiary hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20`,"aria-label":`Copy code`,children:o?(0,c.jsx)(a,{className:`w-4 h-4 text-status-success`}):(0,c.jsx)(r,{className:`w-4 h-4`})})]}),(0,c.jsx)(`div`,{className:`p-4 overflow-x-auto`,children:(0,c.jsx)(`pre`,{className:`font-mono text-sm text-text-primary leading-relaxed`,children:(0,c.jsx)(`code`,{children:n?e.split(`
`).map((e,t)=>(0,c.jsxs)(`div`,{className:`table-row`,children:[(0,c.jsx)(`span`,{className:`table-cell text-right pr-4 text-text-quaternary select-none w-8`,children:t+1}),(0,c.jsx)(`span`,{className:`table-cell whitespace-pre`,children:e||` `})]},t)):e})})})]})},l.displayName=`CodeBlock`,l.__docgenInfo={description:``,methods:[],displayName:`CodeBlock`,props:{code:{required:!0,tsType:{name:`string`},description:``},language:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'typescript'`,computed:!1}},showLineNumbers:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{u(),d=o(),f={title:`Typography/CodeBlock`,component:l,tags:[`autodocs`]},p=`const calculateInterest = (
  principal: number,
  rate: number,
  time: number
): number => {
  return principal * rate * time / 100;
};

const result = calculateInterest(10000, 5, 2);
console.log(\`Interest: \${result}\`);`,m={args:{code:p,language:`typescript`}},h={args:{code:p,language:`typescript`,showLineNumbers:!0}},g={args:{code:`def calculate_interest(principal, rate, time):
    return principal * rate * time / 100

result = calculate_interest(10000, 5, 2)
print(f"Interest: {result}")`,language:`python`,showLineNumbers:!0}},_={args:{code:_.stringify({name:`Portfolio`,assets:[{symbol:`AAPL`,shares:50,price:198.45},{symbol:`GOOGL`,shares:30,price:175.2}],total:15180},null,2),language:`json`}},v={args:{code:`#!/bin/bash
# Deploy script
git pull origin main
npm install
npm run build
pm2 restart app`,language:`bash`,showLineNumbers:!0}},y={args:{code:`console.log("Hello, World!");`,language:`javascript`}},b={args:{code:`SELECT 
  u.name,
  SUM(t.amount) as total_transactions
FROM users u
JOIN transactions t ON u.id = t.user_id
GROUP BY u.id
HAVING total_transactions > 1000
ORDER BY total_transactions DESC;`,language:`sql`,showLineNumbers:!0}},x={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,d.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,d.jsx)(e,{})})]},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    code: sampleCode,
    language: 'typescript'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    code: sampleCode,
    language: 'typescript',
    showLineNumbers: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    code: \`def calculate_interest(principal, rate, time):
    return principal * rate * time / 100

result = calculate_interest(10000, 5, 2)
print(f"Interest: {result}")\`,
    language: 'python',
    showLineNumbers: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    code: JSON.stringify({
      name: "Portfolio",
      assets: [{
        symbol: "AAPL",
        shares: 50,
        price: 198.45
      }, {
        symbol: "GOOGL",
        shares: 30,
        price: 175.20
      }],
      total: 15180.00
    }, null, 2),
    language: 'json'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    code: \`#!/bin/bash
# Deploy script
git pull origin main
npm install
npm run build
pm2 restart app\`,
    language: 'bash',
    showLineNumbers: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    code: \`console.log("Hello, World!");\`,
    language: 'javascript'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    code: \`SELECT 
  u.name,
  SUM(t.amount) as total_transactions
FROM users u
JOIN transactions t ON u.id = t.user_id
GROUP BY u.id
HAVING total_transactions > 1000
ORDER BY total_transactions DESC;\`,
    language: 'sql',
    showLineNumbers: true
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`WithLineNumbers`,`Python`,`JSON`,`Bash`,`ShortCode`,`SQL`,`DarkMode`]}))();export{v as Bash,x as DarkMode,m as Default,_ as JSON,g as Python,b as SQL,y as ShortCode,h as WithLineNumbers,S as __namedExportsOrder,f as default};