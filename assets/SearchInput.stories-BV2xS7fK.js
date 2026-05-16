import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-jtk2jlYO.js";import{t as r}from"./jsx-runtime-BK76Wfr-.js";import{n as i,t as a}from"./SearchInput-DYyIBJbd.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{i(),o=t(n()),s=r(),c={title:`Forms/SearchInput`,component:a,tags:[`autodocs`]},l={args:{value:``,placeholder:`Search transactions...`,onChange:e=>console.log(`Search:`,e)}},u={args:{value:`Amazon purchase`,placeholder:`Search...`,onChange:e=>console.log(`Search:`,e)}},d={args:{value:`Bitcoin`,isLoading:!0,placeholder:`Search...`,onChange:e=>console.log(`Search:`,e)}},f={args:{value:``,label:`Search Transactions`,placeholder:`Search by merchant, category, or amount...`,onChange:e=>console.log(`Search:`,e)}},p={render:()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)([]),[i,c]=(0,o.useState)(!1),l=[`Amazon - $89.99`,`Uber Ride - $24.50`,`Netflix - $15.99`,`Salary Deposit - $4,500`,`Electric Bill - $134.50`,`Starbucks - $5.75`,`Apple Store - $999.00`],u=e=>{c(!0),setTimeout(()=>{r(l.filter(t=>t.toLowerCase().includes(e.toLowerCase()))),c(!1)},500)};return(0,s.jsxs)(`div`,{className:`space-y-4 max-w-md`,children:[(0,s.jsx)(a,{value:e,onChange:e=>{t(e),e.length>0?u(e):r([])},isLoading:i,placeholder:`Search transactions...`,onClear:()=>r([])}),n.length>0&&(0,s.jsx)(`div`,{className:`space-y-1`,children:n.map((e,t)=>(0,s.jsxs)(`div`,{className:`p-2 bg-surface-secondary rounded-lg text-sm flex justify-between`,children:[(0,s.jsx)(`span`,{children:e.split(` - `)[0]}),(0,s.jsx)(`span`,{className:`font-medium`,children:e.split(` - `)[1]})]},t))}),e&&n.length===0&&!i&&(0,s.jsx)(`p`,{className:`text-sm text-text-secondary text-center`,children:`No results found`})]})}},m={parameters:{themes:{themeOverride:`dark`}},args:{value:``,placeholder:`Search in dark mode...`,onChange:e=>console.log(`Search:`,e)}},h={args:{value:`Search is disabled`,disabled:!0,onChange:e=>console.log(`Search:`,e)}},g={parameters:{viewport:{defaultViewport:`mobile1`}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Search transactions...',
    onChange: value => console.log('Search:', value)
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Amazon purchase',
    placeholder: 'Search...',
    onChange: value => console.log('Search:', value)
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Bitcoin',
    isLoading: true,
    placeholder: 'Search...',
    onChange: value => console.log('Search:', value)
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    label: 'Search Transactions',
    placeholder: 'Search by merchant, category, or amount...',
    onChange: value => console.log('Search:', value)
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const transactions = ['Amazon - $89.99', 'Uber Ride - $24.50', 'Netflix - $15.99', 'Salary Deposit - $4,500', 'Electric Bill - $134.50', 'Starbucks - $5.75', 'Apple Store - $999.00'];
    const handleSearch = (value: string) => {
      setIsLoading(true);
      setTimeout(() => {
        setResults(transactions.filter(t => t.toLowerCase().includes(value.toLowerCase())));
        setIsLoading(false);
      }, 500);
    };
    return <div className="space-y-4 max-w-md">
                <SearchInput value={query} onChange={v => {
        setQuery(v);
        if (v.length > 0) handleSearch(v);else setResults([]);
      }} isLoading={isLoading} placeholder="Search transactions..." onClear={() => setResults([])} />
                {results.length > 0 && <div className="space-y-1">
                        {results.map((r, i) => <div key={i} className="p-2 bg-surface-secondary rounded-lg text-sm flex justify-between">
                                <span>{r.split(' - ')[0]}</span>
                                <span className="font-medium">{r.split(' - ')[1]}</span>
                            </div>)}
                    </div>}
                {query && results.length === 0 && !isLoading && <p className="text-sm text-text-secondary text-center">No results found</p>}
            </div>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    value: '',
    placeholder: 'Search in dark mode...',
    onChange: value => console.log('Search:', value)
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Search is disabled',
    disabled: true,
    onChange: value => console.log('Search:', value)
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`WithValue`,`Loading`,`WithLabel`,`InteractiveSearch`,`DarkMode`,`Disabled`,`MobileView`]}))();export{m as DarkMode,l as Default,h as Disabled,p as InteractiveSearch,d as Loading,g as MobileView,f as WithLabel,u as WithValue,_ as __namedExportsOrder,c as default};