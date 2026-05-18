import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CmoObUFa.js";import{n as r,t as i}from"./utils-ijcE-ZHT.js";import{t as a}from"./jsx-runtime-DaLCRA3n.js";import{s as o,t as s}from"./es-Bjq_ogfB.js";var c,l,u,d,f=e((()=>{c=t(n()),s(),r(),l=a(),u={sm:`w-8 h-8 text-sm rounded-md`,md:`w-10 h-10 text-base rounded-lg`,lg:`w-12 h-12 text-lg rounded-xl`},d=({length:e=6,value:t=``,onChange:n,onComplete:r,disabled:a=!1,error:s=!1,type:d=`text`,placeholder:f=``,className:p,size:m=`md`})=>{let h=(0,c.useRef)([]),[g,_]=(0,c.useState)(()=>{let n=Array(e).fill(``);return t&&t.split(``).forEach((t,r)=>{r<e&&(n[r]=t)}),n});(0,c.useEffect)(()=>{if(t!==void 0){let n=Array(e).fill(``);t.split(``).forEach((t,r)=>{r<e&&(n[r]=t)}),_(n)}},[t,e]);let v=e=>{h.current[e]&&h.current[e]?.focus()},y=(t,i)=>{let a=i.target.value,o=[...g];if(a.length>1){let i=a.split(``),s=t;i.forEach(t=>{s<e&&(o[s]=t,s++)}),_(o);let c=o.join(``);n?.(c),c.length===e&&r?.(c);let l=o.findIndex(e=>e===``);v(l===-1?e-1:l);return}o[t]=a,_(o);let s=o.join(``);n?.(s),a&&t<e-1&&v(t+1),s.length===e&&r?.(s)},b=(t,r)=>{if(r.key===`Backspace`)if(!g[t]&&t>0){let e=[...g];e[t-1]=``,_(e),n?.(e.join(``)),v(t-1)}else{let e=[...g];e[t]=``,_(e),n?.(e.join(``))}else r.key===`ArrowLeft`&&t>0?v(t-1):r.key===`ArrowRight`&&t<e-1&&v(t+1)},x=t=>{t.preventDefault();let i=t.clipboardData.getData(`text`).split(``),a=[...g],o=0;i.forEach(t=>{o<e&&(a[o]=t,o++)}),_(a);let s=a.join(``);n?.(s),s.length===e&&r?.(s),v(Math.min(o,e-1))};return(0,l.jsx)(`div`,{className:i(`flex gap-2`,p),children:Array.from({length:e}).map((e,t)=>(0,l.jsx)(o.div,{whileFocus:{scale:1.05},transition:{type:`spring`,stiffness:300,damping:30},children:(0,l.jsx)(`input`,{ref:e=>{h.current[t]=e},type:d===`number`?`text`:d,inputMode:d===`number`?`numeric`:`text`,maxLength:1,value:g[t],onChange:e=>y(t,e),onKeyDown:e=>b(t,e),onPaste:x,disabled:a,placeholder:f,className:i(`bg-surface-primary border border-border-primary text-text-primary text-center font-medium transition-apple focus:outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20 disabled:opacity-40 disabled:cursor-not-allowed`,u[m],s&&`border-status-error focus:border-status-error focus:ring-status-error/20 text-status-error`)})},t))})},d.displayName=`SegmentedInput`,d.__docgenInfo={description:``,methods:[],displayName:`SegmentedInput`,props:{length:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`6`,computed:!1}},value:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},onComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},error:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},type:{required:!1,tsType:{name:`union`,raw:`'text' | 'number' | 'password'`,elements:[{name:`literal`,value:`'text'`},{name:`literal`,value:`'number'`},{name:`literal`,value:`'password'`}]},description:``,defaultValue:{value:`'text'`,computed:!1}},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}}}}})),p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{f(),p=t(n()),m=a(),h={title:`Forms/SegmentedInput`,component:d,tags:[`autodocs`]},g={args:{length:6,onChange:e=>console.log(`Value:`,e)}},_={args:{length:4,onChange:e=>console.log(`Value:`,e)}},v={args:{length:6,type:`text`,placeholder:`0`,onChange:e=>console.log(`Verification code:`,e)}},y={args:{length:6,error:!0,value:`12345`,onChange:e=>console.log(`Value:`,e)}},b={args:{length:6,disabled:!0,value:`123456`,onChange:e=>console.log(`Value:`,e)}},x={args:{length:6,value:`849201`,onChange:e=>console.log(`Value:`,e)}},S={render:()=>{let[e,t]=(0,p.useState)(``),[n,r]=(0,p.useState)(!1),[i,a]=(0,p.useState)(!1);return(0,m.jsx)(`div`,{className:`space-y-4 max-w-md`,children:n?(0,m.jsxs)(`div`,{className:`p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center space-y-2`,children:[(0,m.jsx)(`p`,{className:`text-2xl`,children:`✓`}),(0,m.jsx)(`p`,{className:`text-sm font-semibold text-green-600`,children:`Identity Verified`}),(0,m.jsx)(`button`,{onClick:()=>{t(``),r(!1),a(!1)},className:`text-xs text-blue-500 hover:text-blue-600`,children:`Reset`})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d,{length:6,value:e,onChange:e=>{t(e),a(!1),e.length===6&&(e===`000000`?r(!0):a(!0))},error:i}),i&&(0,m.jsx)(`p`,{className:`text-xs text-red-500 text-center`,children:`Invalid code. Try 000000 to verify.`})]})})}},C={parameters:{themes:{themeOverride:`dark`}},args:{length:6,onChange:e=>console.log(`Value:`,e)}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    onChange: value => console.log('Value:', value)
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    onChange: value => console.log('Value:', value)
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    type: 'text',
    placeholder: '0',
    onChange: value => console.log('Verification code:', value)
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    error: true,
    value: '12345',
    onChange: value => console.log('Value:', value)
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    disabled: true,
    value: '123456',
    onChange: value => console.log('Value:', value)
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    value: '849201',
    onChange: value => console.log('Value:', value)
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [isError, setIsError] = useState(false);
    const handleChange = (v: string) => {
      setValue(v);
      setIsError(false);
      if (v.length === 6) {
        if (v === '000000') {
          setIsVerified(true);
        } else {
          setIsError(true);
        }
      }
    };
    return <div className="space-y-4 max-w-md">
                {!isVerified ? <>
                        <SegmentedInput length={6} value={value} onChange={handleChange} error={isError} />
                        {isError && <p className="text-xs text-red-500 text-center">Invalid code. Try 000000 to verify.</p>}
                    </> : <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-center space-y-2">
                        <p className="text-2xl">✓</p>
                        <p className="text-sm font-semibold text-green-600">Identity Verified</p>
                        <button onClick={() => {
          setValue('');
          setIsVerified(false);
          setIsError(false);
        }} className="text-xs text-blue-500 hover:text-blue-600">
                            Reset
                        </button>
                    </div>}
            </div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    length: 6,
    onChange: value => console.log('Value:', value)
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`FourSegments`,`CodeEntry`,`WithError`,`Disabled`,`Complete`,`InteractiveVerification`,`DarkMode`]}))();export{v as CodeEntry,x as Complete,C as DarkMode,g as Default,b as Disabled,_ as FourSegments,S as InteractiveVerification,y as WithError,w as __namedExportsOrder,h as default};