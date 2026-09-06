import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DxpFRQWZ.js";import{t as r}from"./jsx-runtime-WZfjI2gv.js";import{n as i,t as a}from"./SearchInput-DC4LzS6_.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{i(),o=t(n()),s=r(),c={title:`Forms/SearchInput`,component:a,tags:[`autodocs`],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},variant:{control:`select`,options:[`default`,`error`]},debounceTime:{control:`number`}}},l={args:{value:``,placeholder:`Search...`,onChange:()=>{}}},u={args:{value:`React hooks`,placeholder:`Search topics...`,onChange:()=>{}}},d={args:{value:`Searching...`,isLoading:!0,placeholder:`Search...`,onChange:()=>{}}},f={args:{value:``,label:`Search Topics`,placeholder:`Search by topic or keyword...`,onChange:()=>{}}},p={args:{value:``,size:`sm`,placeholder:`Small search...`,onChange:()=>{}}},m={args:{value:``,size:`md`,placeholder:`Medium search (default)...`,onChange:()=>{}}},h={args:{value:``,size:`lg`,placeholder:`Large search...`,onChange:()=>{}}},g={args:{value:``,variant:`error`,placeholder:`Error variant...`,onChange:()=>{}}},_={args:{value:`Invalid search`,variant:`error`,placeholder:`Error with value...`,onChange:()=>{}}},v={args:{value:`Search is disabled`,disabled:!0,placeholder:`Disabled search...`,onChange:()=>{}}},y={args:{value:``,disabled:!0,label:`Disabled Search`,placeholder:`Disabled search...`,onChange:()=>{}}},b={parameters:{themes:{themeOverride:`dark`}},args:{value:``,placeholder:`Search in dark mode...`,onChange:()=>{}}},x={parameters:{themes:{themeOverride:`dark`}},args:{value:`Dark mode search`,placeholder:`Search in dark mode...`,onChange:()=>{}}},S={parameters:{viewport:{defaultViewport:`mobile1`}},args:{value:``,placeholder:`Mobile search...`,onChange:()=>{}}},C={args:{value:``,placeholder:`Search playground...`,size:`md`,variant:`default`,onChange:()=>{}}},w={parameters:{layout:`centered`},render:()=>{let[e,t]=(0,o.useState)(`React`),[n,r]=(0,o.useState)(!0),i=[{id:`1`,label:`React Hooks`,topic_title:`React`,section_title:`Fundamentals`,priority:`P0`,iconType:`paper`},{id:`2`,label:`useState`,topic_title:`React`,section_title:`Hooks`,priority:`P1`,iconType:`paper`},{id:`3`,label:`useEffect`,topic_title:`React`,section_title:`Hooks`,priority:`P1`,iconType:`paper`},{id:`4`,label:`Custom Hooks`,topic_title:`React`,section_title:`Advanced`,priority:`P2`,iconType:`book`},{id:`5`,label:`useReducer`,topic_title:`React`,section_title:`Hooks`,priority:`P2`,iconType:`paper`}],c=[{id:`r1`,label:`React Docs`,type:`website`,topic_title:`React`,section_title:`Official`},{id:`r2`,label:`Hooks API Reference`,type:`paper`,topic_title:`React`,section_title:`Docs`},{id:`r3`,label:`React Patterns Course`,type:`course`,topic_title:`React`,section_title:`Learning`},{id:`r4`,label:`Thinking in React`,type:`book`,topic_title:`React`,section_title:`Books`}],l=e?i.filter(t=>t.label.toLowerCase().includes(e.toLowerCase())):i,u=e?c.filter(t=>t.label.toLowerCase().includes(e.toLowerCase())):c,d=l.length>0||u.length>0,f=e=>e===`P0`?`error`:e===`P1`?`warning`:`default`;return(0,s.jsx)(`div`,{className:`w-full max-w-md`,children:(0,s.jsx)(a,{value:e,onChange:e=>{t(e),r(e.length>0)},onFocus:()=>e&&r(!0),onBlur:()=>setTimeout(()=>r(!1),200),isLoading:!1,placeholder:`Search topics and resources...`,children:(0,s.jsxs)(a.Dropdown,{show:n,hasResults:d,query:e,children:[l.length>0&&(0,s.jsx)(a.Section,{title:`Subtopics`,children:l.slice(0,5).map(e=>(0,s.jsxs)(a.Item,{onClick:()=>console.log(`Selected:`,e.label),children:[(0,s.jsx)(a.ItemIcon,{type:e.iconType}),(0,s.jsx)(a.ItemContent,{label:e.label,subtitle:`${e.topic_title} · ${e.section_title}`}),(0,s.jsx)(a.TrailingBadge,{variant:f(e.priority),children:e.priority})]},e.id))}),u.length>0&&(0,s.jsx)(a.Section,{title:`Resources`,children:u.slice(0,4).map(e=>(0,s.jsxs)(a.Item,{children:[(0,s.jsx)(a.ItemIcon,{type:e.type}),(0,s.jsx)(a.ItemContent,{label:e.label,subtitle:`${e.topic_title} · ${e.section_title}`})]},e.id))})]})})})}},T={parameters:{layout:`centered`},render:()=>{let[e,t]=(0,o.useState)(`xyznonexistent`);return(0,s.jsx)(`div`,{className:`w-full max-w-md`,children:(0,s.jsx)(a,{value:e,onChange:t,placeholder:`Search...`,children:(0,s.jsx)(a.Dropdown,{show:!0,hasResults:!1,query:e,children:(0,s.jsx)(`div`,{})})})})}},E={parameters:{layout:`centered`,themes:{themeOverride:`dark`}},render:()=>{let[e,t]=(0,o.useState)(`React`),n=[{id:`1`,label:`React Hooks`,topic_title:`React`,section_title:`Fundamentals`,priority:`P0`,iconType:`paper`},{id:`2`,label:`useState`,topic_title:`React`,section_title:`Hooks`,priority:`P1`,iconType:`paper`}];return(0,s.jsx)(`div`,{className:`w-full max-w-md`,children:(0,s.jsx)(a,{value:e,onChange:t,placeholder:`Search...`,children:(0,s.jsx)(a.Dropdown,{show:e.length>0,hasResults:n.length>0,query:e,children:(0,s.jsx)(a.Section,{title:`Subtopics`,children:n.map(e=>(0,s.jsxs)(a.Item,{onClick:()=>console.log(`Selected:`,e.label),children:[(0,s.jsx)(a.ItemIcon,{type:e.iconType}),(0,s.jsx)(a.ItemContent,{label:e.label,subtitle:`${e.topic_title} · ${e.section_title}`}),(0,s.jsx)(a.TrailingBadge,{variant:`error`,children:e.priority})]},e.id))})})})})}},D={parameters:{layout:`centered`},render:()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)(``);return(0,s.jsxs)(`div`,{className:`w-full max-w-md space-y-4`,children:[(0,s.jsx)(a,{value:e,onChange:t,debounceTime:500,onSearch:e=>r(e),placeholder:`Type to debounce...`}),(0,s.jsxs)(`p`,{className:`text-sm text-text-secondary`,children:[`Debounced value: `,(0,s.jsx)(`span`,{className:`font-mono`,children:n})]})]})}},O={parameters:{layout:`centered`},render:()=>{let[e,t]=(0,o.useState)(``),[n,r]=(0,o.useState)([]),[i,c]=(0,o.useState)(!1),l=[`Amazon - $89.99`,`Uber Ride - $24.50`,`Netflix - $15.99`,`Salary Deposit - $4,500`,`Electric Bill - $134.50`,`Starbucks - $5.75`,`Apple Store - $999.00`],u=e=>{c(!0),setTimeout(()=>{r(l.filter(t=>t.toLowerCase().includes(e.toLowerCase()))),c(!1)},500)};return(0,s.jsxs)(`div`,{className:`w-full max-w-md space-y-4`,children:[(0,s.jsx)(a,{value:e,onChange:e=>{t(e),e.length>0?u(e):r([])},isLoading:i,placeholder:`Search transactions...`,onClear:()=>r([])}),n.length>0&&(0,s.jsx)(`div`,{className:`space-y-1`,children:n.map((e,t)=>(0,s.jsxs)(`div`,{className:`p-2 bg-surface-secondary rounded-lg text-sm flex justify-between`,children:[(0,s.jsx)(`span`,{children:e.split(` - `)[0]}),(0,s.jsx)(`span`,{className:`font-medium`,children:e.split(` - `)[1]})]},t))}),e&&n.length===0&&!i&&(0,s.jsx)(`p`,{className:`text-sm text-text-secondary text-center`,children:`No results found`})]})}},k={parameters:{layout:`centered`,viewport:{defaultViewport:`mobile1`}},render:()=>{let[e,t]=(0,o.useState)(`React`);return(0,s.jsx)(`div`,{className:`p-4 w-full`,children:(0,s.jsx)(a,{value:e,onChange:t,placeholder:`Search...`,children:(0,s.jsx)(a.Dropdown,{show:e.length>0,hasResults:!0,query:e,children:(0,s.jsxs)(a.Section,{title:`Results`,children:[(0,s.jsxs)(a.Item,{onClick:()=>{},children:[(0,s.jsx)(a.ItemIcon,{type:`paper`}),(0,s.jsx)(a.ItemContent,{label:`React Hooks`,subtitle:`React · Fundamentals`})]}),(0,s.jsxs)(a.Item,{onClick:()=>{},children:[(0,s.jsx)(a.ItemIcon,{type:`book`}),(0,s.jsx)(a.ItemContent,{label:`useState`,subtitle:`React · Hooks`})]})]})})})})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Search...',
    onChange: () => {}
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'React hooks',
    placeholder: 'Search topics...',
    onChange: () => {}
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Searching...',
    isLoading: true,
    placeholder: 'Search...',
    onChange: () => {}
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    label: 'Search Topics',
    placeholder: 'Search by topic or keyword...',
    onChange: () => {}
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    size: 'sm',
    placeholder: 'Small search...',
    onChange: () => {}
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    size: 'md',
    placeholder: 'Medium search (default)...',
    onChange: () => {}
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    size: 'lg',
    placeholder: 'Large search...',
    onChange: () => {}
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    variant: 'error',
    placeholder: 'Error variant...',
    onChange: () => {}
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Invalid search',
    variant: 'error',
    placeholder: 'Error with value...',
    onChange: () => {}
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Search is disabled',
    disabled: true,
    placeholder: 'Disabled search...',
    onChange: () => {}
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    disabled: true,
    label: 'Disabled Search',
    placeholder: 'Disabled search...',
    onChange: () => {}
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    value: '',
    placeholder: 'Search in dark mode...',
    onChange: () => {}
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    value: 'Dark mode search',
    placeholder: 'Search in dark mode...',
    onChange: () => {}
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  args: {
    value: '',
    placeholder: 'Mobile search...',
    onChange: () => {}
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: '',
    placeholder: 'Search playground...',
    size: 'md',
    variant: 'default',
    onChange: () => {}
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: () => {
    const [query, setQuery] = useState('React');
    const [showResults, setShowResults] = useState(true);
    const subtopics = [{
      id: '1',
      label: 'React Hooks',
      topic_title: 'React',
      section_title: 'Fundamentals',
      priority: 'P0' as const,
      iconType: 'paper' as const
    }, {
      id: '2',
      label: 'useState',
      topic_title: 'React',
      section_title: 'Hooks',
      priority: 'P1' as const,
      iconType: 'paper' as const
    }, {
      id: '3',
      label: 'useEffect',
      topic_title: 'React',
      section_title: 'Hooks',
      priority: 'P1' as const,
      iconType: 'paper' as const
    }, {
      id: '4',
      label: 'Custom Hooks',
      topic_title: 'React',
      section_title: 'Advanced',
      priority: 'P2' as const,
      iconType: 'book' as const
    }, {
      id: '5',
      label: 'useReducer',
      topic_title: 'React',
      section_title: 'Hooks',
      priority: 'P2' as const,
      iconType: 'paper' as const
    }];
    const resources = [{
      id: 'r1',
      label: 'React Docs',
      type: 'website' as const,
      topic_title: 'React',
      section_title: 'Official'
    }, {
      id: 'r2',
      label: 'Hooks API Reference',
      type: 'paper' as const,
      topic_title: 'React',
      section_title: 'Docs'
    }, {
      id: 'r3',
      label: 'React Patterns Course',
      type: 'course' as const,
      topic_title: 'React',
      section_title: 'Learning'
    }, {
      id: 'r4',
      label: 'Thinking in React',
      type: 'book' as const,
      topic_title: 'React',
      section_title: 'Books'
    }];
    const filteredSubtopics = query ? subtopics.filter(s => s.label.toLowerCase().includes(query.toLowerCase())) : subtopics;
    const filteredResources = query ? resources.filter(r => r.label.toLowerCase().includes(query.toLowerCase())) : resources;
    const hasResults = filteredSubtopics.length > 0 || filteredResources.length > 0;
    const getBadgeVariant = (priority: string) => {
      if (priority === 'P0') return 'error';
      if (priority === 'P1') return 'warning';
      return 'default';
    };
    return <div className="w-full max-w-md">
                <SearchInput value={query} onChange={v => {
        setQuery(v);
        setShowResults(v.length > 0);
      }} onFocus={() => query && setShowResults(true)} onBlur={() => setTimeout(() => setShowResults(false), 200)} isLoading={false} placeholder="Search topics and resources...">
                    <SearchInput.Dropdown show={showResults} hasResults={hasResults} query={query}>
                        {filteredSubtopics.length > 0 && <SearchInput.Section title="Subtopics">
                                {filteredSubtopics.slice(0, 5).map(s => <SearchInput.Item key={s.id} onClick={() => console.log('Selected:', s.label)}>
                                        <SearchInput.ItemIcon type={s.iconType} />
                                        <SearchInput.ItemContent label={s.label} subtitle={\`\${s.topic_title} · \${s.section_title}\`} />
                                        <SearchInput.TrailingBadge variant={getBadgeVariant(s.priority)}>
                                            {s.priority}
                                        </SearchInput.TrailingBadge>
                                    </SearchInput.Item>)}
                            </SearchInput.Section>}

                        {filteredResources.length > 0 && <SearchInput.Section title="Resources">
                                {filteredResources.slice(0, 4).map(r => <SearchInput.Item key={r.id}>
                                        <SearchInput.ItemIcon type={r.type} />
                                        <SearchInput.ItemContent label={r.label} subtitle={\`\${r.topic_title} · \${r.section_title}\`} />
                                    </SearchInput.Item>)}
                            </SearchInput.Section>}
                    </SearchInput.Dropdown>
                </SearchInput>
            </div>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: () => {
    const [query, setQuery] = useState('xyznonexistent');
    return <div className="w-full max-w-md">
                <SearchInput value={query} onChange={setQuery} placeholder="Search...">
                    <SearchInput.Dropdown show={true} hasResults={false} query={query}>
                        <div />
                    </SearchInput.Dropdown>
                </SearchInput>
            </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    themes: {
      themeOverride: 'dark'
    }
  },
  render: () => {
    const [query, setQuery] = useState('React');
    const subtopics = [{
      id: '1',
      label: 'React Hooks',
      topic_title: 'React',
      section_title: 'Fundamentals',
      priority: 'P0' as const,
      iconType: 'paper' as const
    }, {
      id: '2',
      label: 'useState',
      topic_title: 'React',
      section_title: 'Hooks',
      priority: 'P1' as const,
      iconType: 'paper' as const
    }];
    return <div className="w-full max-w-md">
                <SearchInput value={query} onChange={setQuery} placeholder="Search...">
                    <SearchInput.Dropdown show={query.length > 0} hasResults={subtopics.length > 0} query={query}>
                        <SearchInput.Section title="Subtopics">
                            {subtopics.map(s => <SearchInput.Item key={s.id} onClick={() => console.log('Selected:', s.label)}>
                                    <SearchInput.ItemIcon type={s.iconType} />
                                    <SearchInput.ItemContent label={s.label} subtitle={\`\${s.topic_title} · \${s.section_title}\`} />
                                    <SearchInput.TrailingBadge variant="error">{s.priority}</SearchInput.TrailingBadge>
                                </SearchInput.Item>)}
                        </SearchInput.Section>
                    </SearchInput.Dropdown>
                </SearchInput>
            </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
  render: () => {
    const [query, setQuery] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');
    return <div className="w-full max-w-md space-y-4">
                <SearchInput value={query} onChange={setQuery} debounceTime={500} onSearch={value => setDebouncedValue(value)} placeholder="Type to debounce..." />
                <p className="text-sm text-text-secondary">
                    Debounced value: <span className="font-mono">{debouncedValue}</span>
                </p>
            </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered'
  },
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
    return <div className="w-full max-w-md space-y-4">
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'centered',
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  render: () => {
    const [query, setQuery] = useState('React');
    return <div className="p-4 w-full">
                <SearchInput value={query} onChange={setQuery} placeholder="Search...">
                    <SearchInput.Dropdown show={query.length > 0} hasResults={true} query={query}>
                        <SearchInput.Section title="Results">
                            <SearchInput.Item onClick={() => {}}>
                                <SearchInput.ItemIcon type="paper" />
                                <SearchInput.ItemContent label="React Hooks" subtitle="React · Fundamentals" />
                            </SearchInput.Item>
                            <SearchInput.Item onClick={() => {}}>
                                <SearchInput.ItemIcon type="book" />
                                <SearchInput.ItemContent label="useState" subtitle="React · Hooks" />
                            </SearchInput.Item>
                        </SearchInput.Section>
                    </SearchInput.Dropdown>
                </SearchInput>
            </div>;
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithValue`,`Loading`,`WithLabel`,`SizeSm`,`SizeMd`,`SizeLg`,`VariantError`,`VariantErrorWithValue`,`Disabled`,`DisabledWithLabel`,`DarkMode`,`DarkModeWithValue`,`MobileView`,`Playground`,`WithDropdown`,`NoResults`,`DarkModeWithDropdown`,`WithDebounce`,`InteractiveSearch`,`MobileWithResults`]}))();export{b as DarkMode,E as DarkModeWithDropdown,x as DarkModeWithValue,l as Default,v as Disabled,y as DisabledWithLabel,O as InteractiveSearch,d as Loading,S as MobileView,k as MobileWithResults,T as NoResults,C as Playground,h as SizeLg,m as SizeMd,p as SizeSm,g as VariantError,_ as VariantErrorWithValue,D as WithDebounce,w as WithDropdown,f as WithLabel,u as WithValue,A as __namedExportsOrder,c as default};