import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CNj2_6xa.js";import{$ as r,Ln as i,t as a}from"./lucide-react-BjI3czzr.js";import{n as o,t as s}from"./utils-CcEteFRA.js";import{t as c}from"./jsx-runtime-WZfjI2gv.js";import{n as l,t as u}from"./Button-C17fCOOV.js";var d,f,p,m,h=e((()=>{d=t(n()),o(),u(),a(),f=c(),p=(e,t)=>{let n=e.split(`
`),r=t.split(`
`),i=n.length,a=r.length,o=Array(i+1).fill(0).map(()=>Array(a+1).fill(0));for(let e=1;e<=i;e++)for(let t=1;t<=a;t++)n[e-1]===r[t-1]?o[e][t]=o[e-1][t-1]+1:o[e][t]=Math.max(o[e-1][t],o[e][t-1]);let s=[],c=i,l=a;for(;c>0||l>0;)c>0&&l>0&&n[c-1]===r[l-1]?(s.unshift({type:`unchanged`,content:n[c-1],oldLineNumber:c,newLineNumber:l}),c--,l--):l>0&&(c===0||o[c][l-1]>=o[c-1][l])?(s.unshift({type:`added`,content:r[l-1],newLineNumber:l}),l--):(s.unshift({type:`removed`,content:n[c-1],oldLineNumber:c}),c--);return s},m=({oldText:e,newText:t,oldTitle:n=`Original`,newTitle:a=`Modified`,initialMode:o=`unified`,className:c,hideHeader:u=!1})=>{let[m,h]=(0,d.useState)(o),g=(0,d.useMemo)(()=>p(e,t),[e,t]);return(0,f.jsxs)(`div`,{className:s(`border border-border-primary/50 rounded-lg overflow-hidden bg-surface-primary`,c),children:[!u&&(0,f.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-2 bg-surface-secondary border-b border-border-primary/50`,children:[(0,f.jsxs)(`div`,{className:`flex items-center gap-4 text-sm`,children:[(0,f.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,f.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-red-500/50`}),(0,f.jsx)(`span`,{className:`font-medium text-text-secondary`,children:n})]}),(0,f.jsx)(`span`,{className:`text-text-tertiary`,children:`→`}),(0,f.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,f.jsx)(`span`,{className:`w-2 h-2 rounded-full bg-green-500/50`}),(0,f.jsx)(`span`,{className:`font-medium text-text-secondary`,children:a})]})]}),(0,f.jsxs)(`div`,{className:`flex bg-surface-primary rounded-md p-0.5 border border-border-primary/50`,children:[(0,f.jsxs)(l,{variant:`ghost`,size:`sm`,onClick:()=>h(`unified`),className:s(`h-6 px-2 text-xs gap-1.5`,m===`unified`?`bg-surface-secondary shadow-sm text-text-primary`:`text-text-tertiary`),children:[(0,f.jsx)(r,{className:`w-3.5 h-3.5`}),`Unified`]}),(0,f.jsxs)(l,{variant:`ghost`,size:`sm`,onClick:()=>h(`split`),className:s(`h-6 px-2 text-xs gap-1.5`,m===`split`?`bg-surface-secondary shadow-sm text-text-primary`:`text-text-tertiary`),children:[(0,f.jsx)(i,{className:`w-3.5 h-3.5`}),`Split`]})]})]}),(0,f.jsx)(`div`,{className:`overflow-x-auto`,children:m===`unified`?(0,f.jsx)(`div`,{className:`font-mono text-xs`,children:g.map((e,t)=>(0,f.jsxs)(`div`,{className:s(`flex`,e.type===`added`&&`bg-green-100/50 dark:bg-green-900/20`,e.type===`removed`&&`bg-red-100/50 dark:bg-red-900/20`,e.type===`unchanged`&&`hover:bg-black/5 dark:hover:bg-white/5`),children:[(0,f.jsx)(`div`,{className:`flex-none w-12 text-right pr-4 py-0.5 select-none text-text-tertiary border-r border-border-primary/30 opacity-50`,children:e.oldLineNumber||``}),(0,f.jsx)(`div`,{className:`flex-none w-12 text-right pr-4 py-0.5 select-none text-text-tertiary border-r border-border-primary/30 opacity-50`,children:e.newLineNumber||``}),(0,f.jsxs)(`div`,{className:s(`flex-none w-8 text-center py-0.5 select-none font-bold`,e.type===`added`&&`text-green-600 dark:text-green-400`,e.type===`removed`&&`text-red-600 dark:text-red-400`,e.type===`unchanged`&&`text-text-secondary`),children:[e.type===`added`&&`+`,e.type===`removed`&&`-`]}),(0,f.jsx)(`div`,{className:s(`flex-1 py-0.5 px-4 whitespace-pre-wrap break-all`,e.type===`added`&&`text-green-900 dark:text-green-100`,e.type===`removed`&&`text-red-900 dark:text-red-100 line-through opacity-70`,e.type===`unchanged`&&`text-text-secondary`),children:e.content})]},t))}):(()=>{let e=[],t=[];return g.forEach(n=>{n.type===`unchanged`?(e.push(n),t.push(n)):n.type===`removed`?(e.push(n),t.push({type:`unchanged`,content:``,newLineNumber:void 0})):n.type===`added`&&(e.push({type:`unchanged`,content:``,oldLineNumber:void 0}),t.push(n))}),(0,f.jsxs)(`div`,{className:`flex font-mono text-xs divide-x divide-border-primary/30`,children:[(0,f.jsx)(`div`,{className:`flex-1 min-w-0`,children:e.map((e,t)=>(0,f.jsxs)(`div`,{className:s(`flex`,e.type===`removed`&&`bg-red-100/50 dark:bg-red-900/20`,!e.oldLineNumber&&e.content===``&&`bg-black/5 dark:bg-white/5`),children:[(0,f.jsx)(`div`,{className:`flex-none w-12 text-right pr-4 py-0.5 select-none text-text-tertiary border-r border-border-primary/30 opacity-50`,children:e.oldLineNumber||``}),(0,f.jsx)(`div`,{className:s(`flex-1 py-0.5 px-4 whitespace-pre-wrap break-all`,e.type===`removed`?`text-red-900 dark:text-red-100`:`text-text-secondary`,!e.oldLineNumber&&`select-none`),children:e.content})]},t))}),(0,f.jsx)(`div`,{className:`flex-1 min-w-0`,children:t.map((e,t)=>(0,f.jsxs)(`div`,{className:s(`flex`,e.type===`added`&&`bg-green-100/50 dark:bg-green-900/20`,!e.newLineNumber&&e.content===``&&`bg-black/5 dark:bg-white/5`),children:[(0,f.jsx)(`div`,{className:`flex-none w-12 text-right pr-4 py-0.5 select-none text-text-tertiary border-r border-border-primary/30 opacity-50`,children:e.newLineNumber||``}),(0,f.jsx)(`div`,{className:s(`flex-1 py-0.5 px-4 whitespace-pre-wrap break-all`,e.type===`added`?`text-green-900 dark:text-green-100`:`text-text-secondary`,!e.newLineNumber&&`select-none`),children:e.content})]},t))})]})})()})]})},m.__docgenInfo={description:``,methods:[],displayName:`DiffViewer`,props:{oldText:{required:!0,tsType:{name:`string`},description:``},newText:{required:!0,tsType:{name:`string`},description:``},oldTitle:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Original'`,computed:!1}},newTitle:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Modified'`,computed:!1}},initialMode:{required:!1,tsType:{name:`union`,raw:`'unified' | 'split'`,elements:[{name:`literal`,value:`'unified'`},{name:`literal`,value:`'split'`}]},description:``,defaultValue:{value:`'unified'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},hideHeader:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),g,_,v,y,b,x,S,C,w,T,E,D,O;e((()=>{n(),h(),g=c(),_=`const calculateTotal = (items: Item[]): number => {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
};`,v=`const calculateTotal = (items: Item[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};`,y={title:`Data Display/DiffViewer`,component:m,tags:[`autodocs`]},b={args:{oldText:_,newText:v}},x={args:{oldText:_,newText:v,initialMode:`split`}},S={args:{oldText:_,newText:v,oldTitle:`Version 1.0`,newTitle:`Version 2.0`}},C={args:{oldText:_,newText:v,hideHeader:!0}},w={args:{oldText:`function greet(name: string) {
  return "Hello, " + name;
}

function farewell(name: string) {
  return "Goodbye, " + name;
}

function formatCurrency(amount: number) {
  return "$" + amount.toFixed(2);
}`,newText:`function greet(name: string) {
  return \`Hello, \${name}\`;
}

function farewell(name: string) {
  return \`See you later, \${name}\`;
}

function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}`,oldTitle:`Legacy`,newTitle:`Refactored`}},T={args:{oldText:``,newText:`console.log("Hello, world!");`}},E={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,g.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,g.jsx)(e,{})})]},D={parameters:{viewport:{defaultViewport:`mobile1`}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    oldText: oldCode,
    newText: newCode
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    oldText: oldCode,
    newText: newCode,
    initialMode: 'split'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    oldText: oldCode,
    newText: newCode,
    oldTitle: 'Version 1.0',
    newTitle: 'Version 2.0'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    oldText: oldCode,
    newText: newCode,
    hideHeader: true
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    oldText: \`function greet(name: string) {\\n  return "Hello, " + name;\\n}\\n\\nfunction farewell(name: string) {\\n  return "Goodbye, " + name;\\n}\\n\\nfunction formatCurrency(amount: number) {\\n  return "$" + amount.toFixed(2);\\n}\`,
    newText: \`function greet(name: string) {\\n  return \\\`Hello, \\\${name}\\\`;\\n}\\n\\nfunction farewell(name: string) {\\n  return \\\`See you later, \\\${name}\\\`;\\n}\\n\\nfunction formatCurrency(amount: number, currency = "USD") {\\n  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);\\n}\`,
    oldTitle: 'Legacy',
    newTitle: 'Refactored'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    oldText: '',
    newText: 'console.log("Hello, world!");'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`SplitView`,`WithTitles`,`HiddenHeader`,`LongDiff`,`EmptyOld`,`DarkMode`,`MobileView`]}))();export{E as DarkMode,b as Default,T as EmptyOld,C as HiddenHeader,w as LongDiff,D as MobileView,x as SplitView,S as WithTitles,O as __namedExportsOrder,y as default};