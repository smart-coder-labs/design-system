import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ns4lj-Vt.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{l as o,s,t as c}from"./es-Bab7Eu6H.js";import{i as l,t as u}from"./lucide-react-DM_OnbjU.js";import{n as d,t as f}from"./Label-DKb9IYwD.js";var p,m,h,g=e((()=>{p=t(n()),u(),r(),m=a(),c(),d(),h=({value:e=[],onChange:t,placeholder:n=`Add tags...`,label:r,error:a,helperText:c,disabled:u=!1,maxTags:d,className:h,onBlur:g})=>{let[_,v]=(0,p.useState)(``),[y,b]=(0,p.useState)(!1),x=(0,p.useRef)(null),S=t=>{t.key===`Enter`||t.key===`,`?(t.preventDefault(),C()):t.key===`Backspace`&&_===``&&e.length>0&&w(e.length-1)},C=()=>{let n=_.trim();if(n&&!e.includes(n)){if(d&&e.length>=d)return;t?.([...e,n]),v(``)}},w=n=>{if(u)return;let r=[...e];r.splice(n,1),t?.(r)};return(0,m.jsxs)(`div`,{className:i(`w-full space-y-2`,h),children:[r&&(0,m.jsx)(f,{className:`mb-2`,children:r}),(0,m.jsxs)(`div`,{onClick:()=>{u||x.current?.focus()},className:i(`flex flex-wrap items-center gap-2 w-full min-h-[40px] px-3 py-2 rounded-xl border bg-surface-primary text-text-primary transition-all cursor-text`,y?`ring-2 ring-accent-blue/20 border-accent-blue`:`border-border-primary`,a?`border-status-error focus-within:border-status-error focus-within:ring-status-error/20`:``,u?`opacity-50 cursor-not-allowed bg-surface-secondary`:``),children:[(0,m.jsx)(o,{mode:`popLayout`,children:e.map((e,t)=>(0,m.jsxs)(s.span,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},layout:!0,className:i(`inline-flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium bg-surface-tertiary text-text-primary`,u&&`bg-surface-secondary text-text-secondary`),children:[e,!u&&(0,m.jsx)(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),w(t)},className:`p-0.5 rounded-full hover:bg-surface-secondary text-text-tertiary hover:text-text-primary transition-colors focus:outline-none`,children:(0,m.jsx)(l,{className:`w-3 h-3`})})]},`${e}-${t}`))}),(0,m.jsx)(`input`,{ref:x,type:`text`,value:_,onChange:e=>v(e.target.value),onKeyDown:S,onFocus:()=>b(!0),onBlur:()=>{b(!1),C(),g?.()},disabled:u,placeholder:e.length===0?n:``,className:`flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm placeholder:text-text-tertiary disabled:cursor-not-allowed`})]}),(a||c)&&(0,m.jsx)(s.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},className:i(`text-sm`,a?`text-status-error`:`text-text-secondary`),children:a||c})]})},h.displayName=`TagsInput`,h.__docgenInfo={description:``,methods:[],displayName:`TagsInput`,props:{value:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``,defaultValue:{value:`[]`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(tags: string[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},name:`tags`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Add tags...'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},maxTags:{required:!1,tsType:{name:`number`},description:``},className:{required:!1,tsType:{name:`string`},description:``},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{g(),_=t(n()),v=a(),y={title:`Forms/TagsInput`,component:h,tags:[`autodocs`]},b={args:{placeholder:`Add a tag...`,onChange:e=>console.log(`Tags:`,e)}},x={args:{value:[`investment`,`savings`,`budget`],placeholder:`Add more...`,onChange:e=>console.log(`Tags:`,e)}},S={args:{value:[`crypto`,`stocks`,`etf`],label:`Investment Categories`,placeholder:`Add category...`,onChange:e=>console.log(`Tags:`,e)}},C={args:{value:[`invalid-tag`],label:`Categories`,error:`Invalid category name`,onChange:e=>console.log(`Tags:`,e)}},w={args:{value:[`stocks`,`bonds`],label:`Portfolio Tags`,placeholder:`Add tag...`,helperText:`Press Enter or comma to add a tag. Max 10 tags.`,onChange:e=>console.log(`Tags:`,e)}},T={args:{value:[`stocks`,`etf`,`crypto`],disabled:!0,onChange:e=>console.log(`Tags:`,e)}},E={args:{value:[`tag1`,`tag2`,`tag3`,`tag4`,`tag5`],label:`Limited Tags (Max 5)`,placeholder:`Max tags reached`,maxTags:5,onChange:e=>console.log(`Tags:`,e)}},D={render:()=>{let[e,t]=(0,_.useState)([`savings`,`investment`]),[n,r]=(0,_.useState)(``);return(0,v.jsxs)(`div`,{className:`space-y-4 max-w-md`,children:[(0,v.jsx)(h,{value:e,onChange:e=>{t(e),r(``)},label:`Filter Transactions`,placeholder:`Add category filter...`,helperText:`Filter by category (e.g., shopping, dining, bills)`}),(0,v.jsx)(`button`,{onClick:()=>{if(e.length===0){r(`Please add at least one tag`);return}r(`Filters applied: ${e.join(`, `)}`),alert(`Searching transactions with tags: ${e.join(`, `)}`)},className:`px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 w-full`,children:`Apply Filters`}),n&&(0,v.jsx)(`p`,{className:`text-sm text-green-600 text-center`,children:n})]})}},O={args:{value:[],label:`No Tags Yet`,placeholder:`Start typing to add tags...`,onChange:e=>console.log(`Tags:`,e)}},k={parameters:{themes:{themeOverride:`dark`}},args:{value:[`dark`,`mode`,`theme`],label:`Theme Tags`,onChange:e=>console.log(`Tags:`,e)}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Add a tag...',
    onChange: tags => console.log('Tags:', tags)
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: ['investment', 'savings', 'budget'],
    placeholder: 'Add more...',
    onChange: tags => console.log('Tags:', tags)
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    value: ['crypto', 'stocks', 'etf'],
    label: 'Investment Categories',
    placeholder: 'Add category...',
    onChange: tags => console.log('Tags:', tags)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: ['invalid-tag'],
    label: 'Categories',
    error: 'Invalid category name',
    onChange: tags => console.log('Tags:', tags)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: ['stocks', 'bonds'],
    label: 'Portfolio Tags',
    placeholder: 'Add tag...',
    helperText: 'Press Enter or comma to add a tag. Max 10 tags.',
    onChange: tags => console.log('Tags:', tags)
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    value: ['stocks', 'etf', 'crypto'],
    disabled: true,
    onChange: tags => console.log('Tags:', tags)
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    value: ['tag1', 'tag2', 'tag3', 'tag4', 'tag5'],
    label: 'Limited Tags (Max 5)',
    placeholder: 'Max tags reached',
    maxTags: 5,
    onChange: tags => console.log('Tags:', tags)
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [tags, setTags] = useState<string[]>(['savings', 'investment']);
    const [message, setMessage] = useState('');
    const handleSubmit = () => {
      if (tags.length === 0) {
        setMessage('Please add at least one tag');
        return;
      }
      setMessage(\`Filters applied: \${tags.join(', ')}\`);
      alert(\`Searching transactions with tags: \${tags.join(', ')}\`);
    };
    return <div className="space-y-4 max-w-md">
                <TagsInput value={tags} onChange={t => {
        setTags(t);
        setMessage('');
      }} label="Filter Transactions" placeholder="Add category filter..." helperText="Filter by category (e.g., shopping, dining, bills)" />
                <button onClick={handleSubmit} className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 w-full">
                    Apply Filters
                </button>
                {message && <p className="text-sm text-green-600 text-center">{message}</p>}
            </div>;
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    value: [],
    label: 'No Tags Yet',
    placeholder: 'Start typing to add tags...',
    onChange: tags => console.log('Tags:', tags)
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    value: ['dark', 'mode', 'theme'],
    label: 'Theme Tags',
    onChange: tags => console.log('Tags:', tags)
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithTags`,`WithLabel`,`WithError`,`WithHelperText`,`Disabled`,`MaxTags`,`InteractiveTags`,`Empty`,`DarkMode`]}))();export{k as DarkMode,b as Default,T as Disabled,O as Empty,D as InteractiveTags,E as MaxTags,C as WithError,w as WithHelperText,S as WithLabel,x as WithTags,A as __namedExportsOrder,y as default};