import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-D0o8cdjS.js";import{Cn as r,Qn as i,Sn as a,_n as o,bn as s,er as c,gn as l,t as u,xn as d,yn as f}from"./lucide-react-yAgQzC9Q.js";import{n as p,t as m}from"./utils-ijcE-ZHT.js";import{t as h}from"./jsx-runtime-DaLCRA3n.js";var g,_,v,y,b,x=e((()=>{g=t(n()),u(),p(),_=h(),v=e=>{switch(e.split(`.`).pop()?.toLowerCase()){case`ts`:case`tsx`:case`js`:case`jsx`:return(0,_.jsx)(a,{className:`w-4 h-4 text-blue-400`});case`css`:case`scss`:case`less`:return(0,_.jsx)(a,{className:`w-4 h-4 text-sky-300`});case`json`:case`yml`:case`yaml`:return(0,_.jsx)(r,{className:`w-4 h-4 text-yellow-400`});case`png`:case`jpg`:case`jpeg`:case`svg`:case`gif`:return(0,_.jsx)(d,{className:`w-4 h-4 text-purple-400`});case`md`:case`txt`:return(0,_.jsx)(s,{className:`w-4 h-4 text-gray-400`});default:return(0,_.jsx)(f,{className:`w-4 h-4 text-gray-400`})}},y=({node:e,depth:t,selectedId:n,expandedIds:r,onSelect:a,onToggle:s})=>{let u=r.has(e.id),d=n===e.id,f=e.children&&e.children.length>0;return(0,_.jsxs)(`div`,{children:[(0,_.jsxs)(`div`,{onClick:t=>{t.stopPropagation(),!e.disabled&&(e.type===`folder`&&s(e.id),a&&a(e))},className:m(`group flex items-center h-8 px-2 cursor-pointer select-none transition-colors rounded-md mx-1`,d?`bg-primary/10 text-primary`:`text-text-secondary hover:bg-surface-hover hover:text-text-primary`,e.disabled&&`opacity-50 cursor-not-allowed`),style:{paddingLeft:`${t*16+8}px`},children:[(0,_.jsx)(`div`,{className:`w-5 h-5 flex items-center justify-center flex-none mr-0.5`,children:e.type===`folder`&&(0,_.jsx)(`div`,{onClick:t=>{t.stopPropagation(),s(e.id)},className:`p-0.5 rounded-sm hover:bg-black/5 dark:hover:bg-white/10 transition-colors`,children:u?(0,_.jsx)(c,{className:`w-3.5 h-3.5 opacity-70`}):(0,_.jsx)(i,{className:`w-3.5 h-3.5 opacity-70`})})}),(0,_.jsx)(`div`,{className:`mr-2 flex-none`,children:e.icon?e.icon:e.type===`folder`?u?(0,_.jsx)(o,{className:`w-4 h-4 text-blue-500 fill-blue-500/20`}):(0,_.jsx)(l,{className:`w-4 h-4 text-blue-500 fill-blue-500/20`}):v(e.name)}),(0,_.jsx)(`span`,{className:`truncate text-sm font-medium flex-1`,children:e.name}),e.meta&&(0,_.jsx)(`span`,{className:`text-xs text-text-tertiary ml-2 hidden group-hover:block`,children:e.meta})]}),f&&u&&(0,_.jsx)(`div`,{children:e.children.map(e=>(0,_.jsx)(y,{node:e,depth:t+1,selectedId:n,expandedIds:r,onSelect:a,onToggle:s},e.id))})]})},b=({data:e,selectedId:t,onSelect:n,onToggle:r,defaultExpandedIds:i=[],className:a})=>{let[o,s]=(0,g.useState)(new Set(i)),c=t=>{let n=new Set(o),i=n.has(t);if(i?n.delete(t):n.add(t),s(n),r){let n=e=>{for(let r of e){if(r.id===t)return r;if(r.children){let e=n(r.children);if(e)return e}}},a=n(e);a&&r(a,!i)}};return(0,_.jsx)(`div`,{className:m(`py-2 select-none`,a),children:e.map(e=>(0,_.jsx)(y,{node:e,depth:0,selectedId:t,expandedIds:o,onSelect:n,onToggle:c},e.id))})},b.__docgenInfo={description:``,methods:[],displayName:`TreeView`,props:{data:{required:!0,tsType:{name:`Array`,elements:[{name:`TreeNode`}],raw:`TreeNode[]`},description:`The hierarchical data to display`},selectedId:{required:!1,tsType:{name:`string`},description:`Currently selected node ID`},onSelect:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(node: TreeNode) => void`,signature:{arguments:[{type:{name:`TreeNode`},name:`node`}],return:{name:`void`}}},description:`Callback when a node is selected`},onToggle:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(node: TreeNode, isExpanded: boolean) => void`,signature:{arguments:[{type:{name:`TreeNode`},name:`node`},{type:{name:`boolean`},name:`isExpanded`}],return:{name:`void`}}},description:`Callback when a folder is toggled`},defaultExpandedIds:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`IDs of nodes that should be expanded by default`,defaultValue:{value:`[]`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Optional class name for the container`}}}})),S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{x(),S=t(n()),C=h(),w={title:`Data Display/TreeView`,component:b,tags:[`autodocs`]},T={args:{data:[{id:`1`,label:`Accounts`,children:[{id:`1.1`,label:`Checking ••••4582`},{id:`1.2`,label:`Savings ••••3391`},{id:`1.3`,label:`Credit Card ••••7821`}]},{id:`2`,label:`Investments`,children:[{id:`2.1`,label:`Stocks`},{id:`2.2`,label:`ETFs`},{id:`2.3`,label:`Crypto`}]},{id:`3`,label:`Documents`,children:[{id:`3.1`,label:`Statements`},{id:`3.2`,label:`Tax Forms`},{id:`3.3`,label:`Agreements`}]}]}},E={args:{data:[{id:`1`,label:`Income ($8,230)`,children:[{id:`1.1`,label:`Salary ($4,500)`},{id:`1.2`,label:`Freelance ($2,800)`},{id:`1.3`,label:`Investments ($930)`}]},{id:`2`,label:`Expenses ($3,780)`,children:[{id:`2.1`,label:`Housing ($1,800)`},{id:`2.2`,label:`Food ($650)`},{id:`2.3`,label:`Transport ($320)`},{id:`2.4`,label:`Entertainment ($180)`},{id:`2.5`,label:`Utilities ($230)`},{id:`2.6`,label:`Other ($600)`}]},{id:`3`,label:`Savings ($4,500)`,children:[{id:`3.1`,label:`Emergency Fund ($2,500)`},{id:`3.2`,label:`Vacation ($1,200)`},{id:`3.3`,label:`Retirement ($800)`}]}]}},D={render:()=>(0,C.jsx)(`div`,{className:`max-w-md`,children:(0,C.jsx)(b,{data:[{id:`1`,label:`📈 Growth Portfolio`,children:[{id:`1.1`,label:`AAPL - Apple Inc.`},{id:`1.2`,label:`NVDA - NVIDIA Corp.`},{id:`1.3`,label:`MSFT - Microsoft Corp.`}]},{id:`2`,label:`🛡️ Conservative Portfolio`,children:[{id:`2.1`,label:`BND - Vanguard Total Bond`},{id:`2.2`,label:`VOO - S&P 500 ETF`},{id:`2.3`,label:`VNQ - Real Estate ETF`}]}]})})},O={args:{data:[{id:`1`,label:`September 2025`,children:[{id:`1.1`,label:`Statement_Sept2025.pdf`},{id:`1.2`,label:`Tax_Summary_Q3.pdf`}]}]}},k={args:{data:[{id:`1`,label:`📊 Portfolio`,children:[{id:`1.1`,label:`Stocks`,children:[{id:`1.1.1`,label:`Tech Sector`,children:[{id:`1.1.1.1`,label:`AAPL - $8,925`},{id:`1.1.1.2`,label:`MSFT - $12,756`}]},{id:`1.1.2`,label:`Finance`,children:[{id:`1.1.2.1`,label:`JPM - $4,500`},{id:`1.1.2.2`,label:`V - $6,200`}]}]},{id:`1.2`,label:`ETFs`,children:[{id:`1.2.1`,label:`VOO - $15,200`},{id:`1.2.2`,label:`QQQ - $8,900`}]}]}]}},A={render:()=>{let[e,t]=(0,S.useState)(null),n={"1.1.1":`Total: $21,681 • 12 shares • +3.2%`,"1.1.2":`Total: $10,700 • 8 shares • +1.8%`,"1.2.1":`Total: $15,200 • 45 shares • +4.1%`,"1.2.2":`Total: $8,900 • 20 shares • +5.3%`};return(0,C.jsxs)(`div`,{className:`space-y-4`,children:[(0,C.jsx)(b,{data:[{id:`1`,label:`Investment Portfolio`,children:[{id:`1.1`,label:`Stocks`,children:[{id:`1.1.1`,label:`Tech Sector`},{id:`1.1.2`,label:`Finance Sector`}]},{id:`1.2`,label:`ETFs`,children:[{id:`1.2.1`,label:`VOO (S&P 500)`},{id:`1.2.2`,label:`QQQ (Nasdaq)`}]}]}],selectedId:e||void 0,onSelect:e=>t(e)}),e&&n[e]&&(0,C.jsxs)(`div`,{className:`p-3 bg-surface-secondary rounded-lg text-sm`,children:[(0,C.jsx)(`p`,{className:`text-xs text-text-secondary`,children:`Details for selected item:`}),(0,C.jsx)(`p`,{className:`font-medium`,children:n[e]})]})]})}},j={parameters:{themes:{themeOverride:`dark`}},args:{data:[{id:`1`,label:`Crypto Holdings`,children:[{id:`1.1`,label:`Bitcoin (BTC) - $28,400`},{id:`1.2`,label:`Ethereum (ETH) - $12,500`},{id:`1.3`,label:`Solana (SOL) - $3,200`}]},{id:`2`,label:`Stablecoins`,children:[{id:`2.1`,label:`USDC - $15,000`},{id:`2.2`,label:`USDT - $5,000`}]}]}},M={parameters:{viewport:{defaultViewport:`mobile1`}}},N={parameters:{docs:{description:{story:`TreeView in a loading state, showing skeleton or placeholder UI while data is being fetched.`}}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      id: '1',
      label: 'Accounts',
      children: [{
        id: '1.1',
        label: 'Checking ••••4582'
      }, {
        id: '1.2',
        label: 'Savings ••••3391'
      }, {
        id: '1.3',
        label: 'Credit Card ••••7821'
      }]
    }, {
      id: '2',
      label: 'Investments',
      children: [{
        id: '2.1',
        label: 'Stocks'
      }, {
        id: '2.2',
        label: 'ETFs'
      }, {
        id: '2.3',
        label: 'Crypto'
      }]
    }, {
      id: '3',
      label: 'Documents',
      children: [{
        id: '3.1',
        label: 'Statements'
      }, {
        id: '3.2',
        label: 'Tax Forms'
      }, {
        id: '3.3',
        label: 'Agreements'
      }]
    }]
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      id: '1',
      label: 'Income ($8,230)',
      children: [{
        id: '1.1',
        label: 'Salary ($4,500)'
      }, {
        id: '1.2',
        label: 'Freelance ($2,800)'
      }, {
        id: '1.3',
        label: 'Investments ($930)'
      }]
    }, {
      id: '2',
      label: 'Expenses ($3,780)',
      children: [{
        id: '2.1',
        label: 'Housing ($1,800)'
      }, {
        id: '2.2',
        label: 'Food ($650)'
      }, {
        id: '2.3',
        label: 'Transport ($320)'
      }, {
        id: '2.4',
        label: 'Entertainment ($180)'
      }, {
        id: '2.5',
        label: 'Utilities ($230)'
      }, {
        id: '2.6',
        label: 'Other ($600)'
      }]
    }, {
      id: '3',
      label: 'Savings ($4,500)',
      children: [{
        id: '3.1',
        label: 'Emergency Fund ($2,500)'
      }, {
        id: '3.2',
        label: 'Vacation ($1,200)'
      }, {
        id: '3.3',
        label: 'Retirement ($800)'
      }]
    }]
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md">
            <TreeView data={[{
      id: '1',
      label: '📈 Growth Portfolio',
      children: [{
        id: '1.1',
        label: 'AAPL - Apple Inc.'
      }, {
        id: '1.2',
        label: 'NVDA - NVIDIA Corp.'
      }, {
        id: '1.3',
        label: 'MSFT - Microsoft Corp.'
      }]
    }, {
      id: '2',
      label: '🛡️ Conservative Portfolio',
      children: [{
        id: '2.1',
        label: 'BND - Vanguard Total Bond'
      }, {
        id: '2.2',
        label: 'VOO - S&P 500 ETF'
      }, {
        id: '2.3',
        label: 'VNQ - Real Estate ETF'
      }]
    }]} />
        </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      id: '1',
      label: 'September 2025',
      children: [{
        id: '1.1',
        label: 'Statement_Sept2025.pdf'
      }, {
        id: '1.2',
        label: 'Tax_Summary_Q3.pdf'
      }]
    }]
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    data: [{
      id: '1',
      label: '📊 Portfolio',
      children: [{
        id: '1.1',
        label: 'Stocks',
        children: [{
          id: '1.1.1',
          label: 'Tech Sector',
          children: [{
            id: '1.1.1.1',
            label: 'AAPL - $8,925'
          }, {
            id: '1.1.1.2',
            label: 'MSFT - $12,756'
          }]
        }, {
          id: '1.1.2',
          label: 'Finance',
          children: [{
            id: '1.1.2.1',
            label: 'JPM - $4,500'
          }, {
            id: '1.1.2.2',
            label: 'V - $6,200'
          }]
        }]
      }, {
        id: '1.2',
        label: 'ETFs',
        children: [{
          id: '1.2.1',
          label: 'VOO - $15,200'
        }, {
          id: '1.2.2',
          label: 'QQQ - $8,900'
        }]
      }]
    }]
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const details: Record<string, string> = {
      '1.1.1': 'Total: $21,681 • 12 shares • +3.2%',
      '1.1.2': 'Total: $10,700 • 8 shares • +1.8%',
      '1.2.1': 'Total: $15,200 • 45 shares • +4.1%',
      '1.2.2': 'Total: $8,900 • 20 shares • +5.3%'
    };
    return <div className="space-y-4">
                <TreeView data={[{
        id: '1',
        label: 'Investment Portfolio',
        children: [{
          id: '1.1',
          label: 'Stocks',
          children: [{
            id: '1.1.1',
            label: 'Tech Sector'
          }, {
            id: '1.1.2',
            label: 'Finance Sector'
          }]
        }, {
          id: '1.2',
          label: 'ETFs',
          children: [{
            id: '1.2.1',
            label: 'VOO (S&P 500)'
          }, {
            id: '1.2.2',
            label: 'QQQ (Nasdaq)'
          }]
        }]
      }]} selectedId={selectedId || undefined} onSelect={id => setSelectedId(id)} />
                {selectedId && details[selectedId] && <div className="p-3 bg-surface-secondary rounded-lg text-sm">
                        <p className="text-xs text-text-secondary">Details for selected item:</p>
                        <p className="font-medium">{details[selectedId]}</p>
                    </div>}
            </div>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    data: [{
      id: '1',
      label: 'Crypto Holdings',
      children: [{
        id: '1.1',
        label: 'Bitcoin (BTC) - $28,400'
      }, {
        id: '1.2',
        label: 'Ethereum (ETH) - $12,500'
      }, {
        id: '1.3',
        label: 'Solana (SOL) - $3,200'
      }]
    }, {
      id: '2',
      label: 'Stablecoins',
      children: [{
        id: '2.1',
        label: 'USDC - $15,000'
      }, {
        id: '2.2',
        label: 'USDT - $5,000'
      }]
    }]
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'TreeView in a loading state, showing skeleton or placeholder UI while data is being fetched.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`CategoryTree`,`WithCustomRender`,`SingleCategory`,`DeepNested`,`InteractiveTree`,`DarkMode`,`MobileView`,`LoadingState`]}))();export{E as CategoryTree,j as DarkMode,k as DeepNested,T as Default,A as InteractiveTree,N as LoadingState,M as MobileView,O as SingleCategory,D as WithCustomRender,P as __namedExportsOrder,w as default};