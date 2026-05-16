import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-jtk2jlYO.js";import{n,t as r}from"./utils-4pdYZGDS.js";import{t as i}from"./jsx-runtime-BK76Wfr-.js";var a,o,s=e((()=>{t(),n(),a=i(),o=({children:e,columns:t=3,gap:n=16,className:i,style:o})=>{let s=Array.from({length:t},()=>[]);return e.forEach((e,n)=>{s[n%t].push(e)}),(0,a.jsx)(`div`,{className:r(`w-full flex`,i),style:{gap:n,...o},role:`list`,children:s.map((e,t)=>(0,a.jsx)(`div`,{className:`flex-1 flex flex-col`,style:{gap:n},role:`listitem`,children:e},t))})},o.__docgenInfo={description:`MasonryLayout: Apple-minimal masonry grid
- Responsive, fluid columns
- Animaciones suaves al reordenar
- Accesible y configurable`,methods:[],displayName:`MasonryLayout`,props:{children:{required:!0,tsType:{name:`Array`,elements:[{name:`ReactReactNode`,raw:`React.ReactNode`}],raw:`React.ReactNode[]`},description:`Array of React nodes to render as items`},columns:{required:!1,tsType:{name:`number`},description:`Number of columns (default: 3)`,defaultValue:{value:`3`,computed:!1}},gap:{required:!1,tsType:{name:`number`},description:`Gap between items (default: 16px)`,defaultValue:{value:`16`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Optional className for root`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Optional style for root`}}}})),c,l,u,d,f,p,m,h,g,_,v,y;e((()=>{t(),s(),c=i(),l={title:`Layout/MasonryLayout`,component:o,tags:[`autodocs`]},u=[{id:`1`,height:200,label:`Portfolio Summary`,bg:`bg-accent-blue/10`},{id:`2`,height:300,label:`Revenue Chart`,bg:`bg-emerald-500/10`},{id:`3`,height:150,label:`Quick Stats`,bg:`bg-amber-500/10`},{id:`4`,height:250,label:`Transaction List`,bg:`bg-purple-500/10`},{id:`5`,height:180,label:`Savings Goal`,bg:`bg-rose-500/10`},{id:`6`,height:220,label:`Market News`,bg:`bg-cyan-500/10`}],d={args:{columns:3,gap:`md`,children:u.map(e=>(0,c.jsx)(`div`,{className:`${e.bg} rounded-xl p-4`,style:{height:e.height},children:(0,c.jsx)(`p`,{className:`text-sm font-semibold text-text-primary`,children:e.label})},e.id))}},f={args:{columns:2,gap:`lg`,children:u.map(e=>(0,c.jsx)(`div`,{className:`${e.bg} rounded-xl p-4`,style:{height:e.height*1.2},children:(0,c.jsx)(`p`,{className:`text-sm font-semibold text-text-primary`,children:e.label})},e.id))}},p={args:{columns:4,gap:`sm`,children:u.slice(0,4).map(e=>(0,c.jsx)(`div`,{className:`${e.bg} rounded-xl p-3`,style:{height:e.height*.8},children:(0,c.jsx)(`p`,{className:`text-xs font-semibold text-text-primary`,children:e.label})},e.id))}},m={args:{columns:3,gap:`md`,children:[(0,c.jsxs)(`div`,{className:`bg-gradient-to-br from-accent-blue/10 to-purple-500/10 rounded-xl p-5 h-48`,children:[(0,c.jsx)(`p`,{className:`text-xs text-text-tertiary uppercase font-semibold tracking-wide`,children:`Total Balance`}),(0,c.jsx)(`p`,{className:`text-2xl font-bold text-text-primary mt-2`,children:`$128,430`}),(0,c.jsx)(`p`,{className:`text-sm text-status-success font-semibold mt-1`,children:`+5.2% this month`})]},`1`),(0,c.jsxs)(`div`,{className:`bg-surface-secondary rounded-xl p-4 h-64`,children:[(0,c.jsx)(`p`,{className:`text-xs text-text-tertiary uppercase font-semibold tracking-wide mb-3`,children:`Recent Transactions`}),[`-$250.00`,`+$5,400.00`,`-$15.99`,`-$89.50`].map((e,t)=>(0,c.jsxs)(`div`,{className:`flex justify-between py-2 border-b border-border-primary last:border-0`,children:[(0,c.jsxs)(`span`,{className:`text-xs text-text-primary`,children:[`Transaction `,t+1]}),(0,c.jsx)(`span`,{className:`text-xs font-semibold ${e.startsWith(`+`)?`text-status-success`:`text-text-primary`}`,children:e})]},t))]},`2`),(0,c.jsxs)(`div`,{className:`bg-emerald-500/10 rounded-xl p-4 h-36`,children:[(0,c.jsx)(`p`,{className:`text-xs text-emerald-600 uppercase font-semibold tracking-wide`,children:`Income`}),(0,c.jsx)(`p`,{className:`text-2xl font-bold text-emerald-600 mt-1`,children:`$12,430`}),(0,c.jsx)(`p`,{className:`text-xs text-text-tertiary mt-1`,children:`+8.1% vs last month`})]},`3`),(0,c.jsxs)(`div`,{className:`bg-amber-500/10 rounded-xl p-4 h-36`,children:[(0,c.jsx)(`p`,{className:`text-xs text-amber-600 uppercase font-semibold tracking-wide`,children:`Expenses`}),(0,c.jsx)(`p`,{className:`text-2xl font-bold text-amber-600 mt-1`,children:`$8,210`}),(0,c.jsx)(`p`,{className:`text-xs text-text-tertiary mt-1`,children:`-3.4% vs last month`})]},`4`),(0,c.jsxs)(`div`,{className:`bg-purple-500/10 rounded-xl p-4 h-52`,children:[(0,c.jsx)(`p`,{className:`text-xs text-purple-600 uppercase font-semibold tracking-wide mb-2`,children:`Portfolio`}),(0,c.jsx)(`div`,{className:`space-y-2`,children:[{name:`BTC`,val:`$52,340`,chg:`+2.1%`},{name:`ETH`,val:`$31,200`,chg:`-0.8%`},{name:`SOL`,val:`$18,750`,chg:`+8.4%`}].map((e,t)=>(0,c.jsxs)(`div`,{className:`flex justify-between text-xs`,children:[(0,c.jsx)(`span`,{className:`font-medium text-text-primary`,children:e.name}),(0,c.jsx)(`span`,{className:`text-text-primary`,children:e.val}),(0,c.jsx)(`span`,{className:e.chg.startsWith(`+`)?`text-status-success`:`text-status-error`,children:e.chg})]},t))})]},`5`),(0,c.jsxs)(`div`,{className:`bg-rose-500/10 rounded-xl p-4 h-40`,children:[(0,c.jsx)(`p`,{className:`text-xs text-rose-600 uppercase font-semibold tracking-wide mb-2`,children:`Savings Goal`}),(0,c.jsx)(`p`,{className:`text-xl font-bold text-text-primary`,children:`$32,000`}),(0,c.jsx)(`div`,{className:`w-full h-2 bg-surface-tertiary rounded-full mt-2 overflow-hidden`,children:(0,c.jsx)(`div`,{className:`h-full bg-rose-500 rounded-full`,style:{width:`64%`}})}),(0,c.jsx)(`p`,{className:`text-xs text-text-tertiary mt-1`,children:`64% of $50,000 goal`})]},`6`)]}},h={args:{columns:3,gap:12,children:[(0,c.jsxs)(`div`,{style:{background:`linear-gradient(135deg, #007AFF, #5856D6)`,color:`white`,padding:`24px`,borderRadius:`16px`,fontWeight:600,fontSize:18},children:[(0,c.jsx)(`div`,{style:{fontSize:12,opacity:.8,marginBottom:4},children:`BALANCE`}),`$45,230.80`]},`1`),(0,c.jsx)(`div`,{style:{background:`#34C759`,color:`white`,padding:`48px 16px`,borderRadius:`12px`,fontWeight:600},children:`Portfolio +12.5%`},`2`),(0,c.jsxs)(`div`,{style:{background:`#FF9500`,color:`white`,padding:`32px 16px`,borderRadius:`12px`,fontWeight:600},children:[`Savings Goal`,(0,c.jsx)(`br`,{}),(0,c.jsx)(`span`,{style:{fontSize:12},children:`75% complete`})]},`3`),(0,c.jsx)(`div`,{style:{background:`#FF3B30`,color:`white`,padding:`64px 16px`,borderRadius:`12px`,fontWeight:600},children:`Spending -8%`},`4`),(0,c.jsx)(`div`,{style:{background:`#5856D6`,color:`white`,padding:`40px 16px`,borderRadius:`12px`,fontWeight:600},children:`Credit Score 780`},`5`),(0,c.jsx)(`div`,{style:{background:`#FF2D55`,color:`white`,padding:`28px 16px`,borderRadius:`12px`,fontWeight:600},children:`Recent Transactions`},`6`)]}},g={args:{columns:4,gap:8,children:Array.from({length:8},(e,t)=>(0,c.jsxs)(`div`,{style:{height:80+Math.random()*100,background:[`#FF6B6B`,`#4ECDC4`,`#45B7D1`,`#96CEB4`,`#FFEAA7`,`#DDA0DD`,`#98D8C8`,`#F7DC6F`][t],borderRadius:8,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`white`,fontWeight:600},children:[`Item `,t+1]},t))}},_={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,c.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,c.jsx)(e,{})})]},v={parameters:{viewport:{defaultViewport:`mobile1`}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 'md',
    children: items.map(item => <div key={item.id} className={\`\${item.bg} rounded-xl p-4\`} style={{
      height: item.height
    }}>
        <p className="text-sm font-semibold text-text-primary">{item.label}</p>
      </div>)
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 2,
    gap: 'lg',
    children: items.map(item => <div key={item.id} className={\`\${item.bg} rounded-xl p-4\`} style={{
      height: item.height * 1.2
    }}>
        <p className="text-sm font-semibold text-text-primary">{item.label}</p>
      </div>)
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 4,
    gap: 'sm',
    children: items.slice(0, 4).map(item => <div key={item.id} className={\`\${item.bg} rounded-xl p-3\`} style={{
      height: item.height * 0.8
    }}>
        <p className="text-xs font-semibold text-text-primary">{item.label}</p>
      </div>)
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 'md',
    children: [<div key="1" className="bg-gradient-to-br from-accent-blue/10 to-purple-500/10 rounded-xl p-5 h-48">
        <p className="text-xs text-text-tertiary uppercase font-semibold tracking-wide">Total Balance</p>
        <p className="text-2xl font-bold text-text-primary mt-2">$128,430</p>
        <p className="text-sm text-status-success font-semibold mt-1">+5.2% this month</p>
      </div>, <div key="2" className="bg-surface-secondary rounded-xl p-4 h-64">
        <p className="text-xs text-text-tertiary uppercase font-semibold tracking-wide mb-3">Recent Transactions</p>
        {['-$250.00', '+$5,400.00', '-$15.99', '-$89.50'].map((amt, i) => <div key={i} className="flex justify-between py-2 border-b border-border-primary last:border-0">
            <span className="text-xs text-text-primary">Transaction {i + 1}</span>
            <span className={\`text-xs font-semibold \${amt.startsWith('+') ? 'text-status-success' : 'text-text-primary'}\`}>{amt}</span>
          </div>)}
      </div>, <div key="3" className="bg-emerald-500/10 rounded-xl p-4 h-36">
        <p className="text-xs text-emerald-600 uppercase font-semibold tracking-wide">Income</p>
        <p className="text-2xl font-bold text-emerald-600 mt-1">$12,430</p>
        <p className="text-xs text-text-tertiary mt-1">+8.1% vs last month</p>
      </div>, <div key="4" className="bg-amber-500/10 rounded-xl p-4 h-36">
        <p className="text-xs text-amber-600 uppercase font-semibold tracking-wide">Expenses</p>
        <p className="text-2xl font-bold text-amber-600 mt-1">$8,210</p>
        <p className="text-xs text-text-tertiary mt-1">-3.4% vs last month</p>
      </div>, <div key="5" className="bg-purple-500/10 rounded-xl p-4 h-52">
        <p className="text-xs text-purple-600 uppercase font-semibold tracking-wide mb-2">Portfolio</p>
        <div className="space-y-2">
          {[{
          name: 'BTC',
          val: '$52,340',
          chg: '+2.1%'
        }, {
          name: 'ETH',
          val: '$31,200',
          chg: '-0.8%'
        }, {
          name: 'SOL',
          val: '$18,750',
          chg: '+8.4%'
        }].map((a, i) => <div key={i} className="flex justify-between text-xs">
              <span className="font-medium text-text-primary">{a.name}</span>
              <span className="text-text-primary">{a.val}</span>
              <span className={a.chg.startsWith('+') ? 'text-status-success' : 'text-status-error'}>{a.chg}</span>
            </div>)}
        </div>
      </div>, <div key="6" className="bg-rose-500/10 rounded-xl p-4 h-40">
        <p className="text-xs text-rose-600 uppercase font-semibold tracking-wide mb-2">Savings Goal</p>
        <p className="text-xl font-bold text-text-primary">$32,000</p>
        <div className="w-full h-2 bg-surface-tertiary rounded-full mt-2 overflow-hidden">
          <div className="h-full bg-rose-500 rounded-full" style={{
          width: '64%'
        }} />
        </div>
        <p className="text-xs text-text-tertiary mt-1">64% of $50,000 goal</p>
      </div>]
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 12,
    children: [<div key="1" style={{
      background: 'linear-gradient(135deg, #007AFF, #5856D6)',
      color: 'white',
      padding: '24px',
      borderRadius: '16px',
      fontWeight: 600,
      fontSize: 18
    }}>
                <div style={{
        fontSize: 12,
        opacity: 0.8,
        marginBottom: 4
      }}>BALANCE</div>
                $45,230.80
            </div>, <div key="2" style={{
      background: '#34C759',
      color: 'white',
      padding: '48px 16px',
      borderRadius: '12px',
      fontWeight: 600
    }}>
                Portfolio +12.5%
            </div>, <div key="3" style={{
      background: '#FF9500',
      color: 'white',
      padding: '32px 16px',
      borderRadius: '12px',
      fontWeight: 600
    }}>
                Savings Goal<br /><span style={{
        fontSize: 12
      }}>75% complete</span>
            </div>, <div key="4" style={{
      background: '#FF3B30',
      color: 'white',
      padding: '64px 16px',
      borderRadius: '12px',
      fontWeight: 600
    }}>
                Spending -8%
            </div>, <div key="5" style={{
      background: '#5856D6',
      color: 'white',
      padding: '40px 16px',
      borderRadius: '12px',
      fontWeight: 600
    }}>
                Credit Score 780
            </div>, <div key="6" style={{
      background: '#FF2D55',
      color: 'white',
      padding: '28px 16px',
      borderRadius: '12px',
      fontWeight: 600
    }}>
                Recent Transactions
            </div>]
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 4,
    gap: 8,
    children: Array.from({
      length: 8
    }, (_, i) => <div key={i} style={{
      height: 80 + Math.random() * 100,
      background: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'][i],
      borderRadius: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 600
    }}>
                Item {i + 1}
            </div>)
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`TwoColumns`,`FourColumns`,`DashboardWidgets`,`FinancialWidgets`,`PhotoGallery`,`DarkMode`,`MobileView`]}))();export{_ as DarkMode,m as DashboardWidgets,d as Default,h as FinancialWidgets,p as FourColumns,v as MobileView,g as PhotoGallery,f as TwoColumns,y as __namedExportsOrder,l as default};