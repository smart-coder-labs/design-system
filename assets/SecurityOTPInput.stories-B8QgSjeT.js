import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C3uANx_z.js";import{H as r,Rt as i,U as a,t as o}from"./lucide-react-h9NbdGwk.js";import{n as s,t as c}from"./utils-CcEteFRA.js";import{t as l}from"./jsx-runtime-WZfjI2gv.js";import{l as u,s as d,t as f}from"./es-Y5rqk_dr.js";var p,m,h,g=e((()=>{p=t(n()),f(),s(),o(),m=l(),h=({length:e=6,onComplete:t,onChange:n,status:o=`idle`,errorMessage:s=`Invalid code. Please try again.`,successMessage:l=`Verified successfully!`,autoFocus:f=!0,disabled:h=!1,className:g=``,label:_=`Verification Code`,description:v=`Enter the 6-digit code sent to your device`})=>{let[y,b]=(0,p.useState)(Array(e).fill(``)),x=(0,p.useRef)([]);(0,p.useEffect)(()=>{f&&x.current[0]&&x.current[0].focus()},[f]),(0,p.useEffect)(()=>{o===`error`&&(b(Array(e).fill(``)),setTimeout(()=>x.current[0]?.focus(),400))},[o,e]);let S=(0,p.useCallback)((r,i)=>{if(h||o===`loading`)return;let a=i.replace(/\D/g,``).slice(-1),s=[...y];s[r]=a,b(s);let c=s.join(``);n?.(c),a&&r<e-1&&x.current[r+1]?.focus(),c.length===e&&!c.includes(``)&&t?.(c)},[y,e,h,o,n,t]),C=(0,p.useCallback)((t,r)=>{if(r.key===`Backspace`){r.preventDefault();let e=[...y];y[t]?(e[t]=``,b(e),n?.(e.join(``))):t>0&&(e[t-1]=``,b(e),n?.(e.join(``)),x.current[t-1]?.focus())}else r.key===`ArrowLeft`&&t>0?x.current[t-1]?.focus():r.key===`ArrowRight`&&t<e-1&&x.current[t+1]?.focus()},[y,e,n]),w=(0,p.useCallback)(r=>{if(r.preventDefault(),h||o===`loading`)return;let i=r.clipboardData.getData(`text`).replace(/\D/g,``).slice(0,e);if(!i)return;let a=Array(e).fill(``);i.split(``).forEach((e,t)=>{a[t]=e}),b(a),n?.(a.join(``));let s=Math.min(i.length,e-1);x.current[s]?.focus(),i.length===e&&t?.(i)},[e,h,o,n,t]),T=o===`error`?`border-status-error`:o===`success`?`border-status-success`:`border-border-primary focus-within:border-accent-blue`;return(0,m.jsxs)(d.div,{className:c(`flex flex-col items-center gap-4`,g),initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{duration:.3,ease:[.16,1,.3,1]},children:[(0,m.jsxs)(`div`,{className:`text-center space-y-1`,children:[(0,m.jsx)(`p`,{className:`text-sm font-semibold text-text-primary`,children:_}),(0,m.jsx)(`p`,{className:`text-xs text-text-secondary`,children:v})]}),(0,m.jsx)(`div`,{className:`flex items-center gap-2.5`,children:Array.from({length:e}).map((t,n)=>(0,m.jsxs)(p.Fragment,{children:[(0,m.jsx)(d.input,{ref:e=>{x.current[n]=e},type:`text`,inputMode:`numeric`,maxLength:1,value:y[n],disabled:h||o===`loading`||o===`success`,onChange:e=>S(n,e.target.value),onKeyDown:e=>C(n,e),onPaste:w,"aria-label":`Digit ${n+1} of ${e}`,className:c(`w-12 h-14 text-center text-xl font-bold rounded-xl border-2 bg-surface-primary text-text-primary`,`outline-none transition-all duration-200`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus:border-accent-blue`,`disabled:opacity-50 disabled:cursor-not-allowed`,`placeholder:text-text-quaternary`,T),animate:o===`error`?{x:[0,-6,6,-4,4,0]}:o===`success`?{scale:[1,1.08,1]}:{},transition:{duration:.4}}),n===Math.floor(e/2)-1&&(0,m.jsx)(`span`,{className:`text-text-quaternary text-xl font-light mx-1`,children:`–`})]},n))}),(0,m.jsxs)(u,{mode:`wait`,children:[o===`loading`&&(0,m.jsxs)(d.div,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},exit:{opacity:0,y:-4},className:`flex items-center gap-2 text-text-secondary`,children:[(0,m.jsx)(i,{className:`w-4 h-4 animate-spin`}),(0,m.jsx)(`span`,{className:`text-xs font-medium`,children:`Verifying...`})]},`loading`),o===`success`&&(0,m.jsxs)(d.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0},className:`flex items-center gap-2 text-status-success`,children:[(0,m.jsx)(r,{className:`w-4 h-4`}),(0,m.jsx)(`span`,{className:`text-xs font-semibold`,children:l})]},`success`),o===`error`&&(0,m.jsxs)(d.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0},className:`flex items-center gap-2 text-status-error`,children:[(0,m.jsx)(a,{className:`w-4 h-4`}),(0,m.jsx)(`span`,{className:`text-xs font-semibold`,children:s})]},`error`)]})]})},h.displayName=`SecurityOTPInput`,h.__docgenInfo={description:``,methods:[],displayName:`SecurityOTPInput`,props:{length:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`6`,computed:!1}},onComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(code: string) => void`,signature:{arguments:[{type:{name:`string`},name:`code`}],return:{name:`void`}}},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(code: string) => void`,signature:{arguments:[{type:{name:`string`},name:`code`}],return:{name:`void`}}},description:``},status:{required:!1,tsType:{name:`union`,raw:`'idle' | 'loading' | 'success' | 'error'`,elements:[{name:`literal`,value:`'idle'`},{name:`literal`,value:`'loading'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'error'`}]},description:``,defaultValue:{value:`'idle'`,computed:!1}},errorMessage:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Invalid code. Please try again.'`,computed:!1}},successMessage:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Verified successfully!'`,computed:!1}},autoFocus:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Verification Code'`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Enter the 6-digit code sent to your device'`,computed:!1}}}}})),_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{g(),_=t(n()),v=l(),y={title:`Fintech/KYC/SecurityOTPInput`,component:h,tags:[`autodocs`]},b={args:{length:6,onChange:e=>console.log(`OTP:`,e)}},x={args:{length:4,onChange:e=>console.log(`OTP:`,e)}},S={args:{length:6,error:!0,onChange:e=>console.log(`OTP:`,e)}},C={args:{length:6,label:`Enter the code sent to your phone`,onChange:e=>console.log(`OTP:`,e)}},w={args:{length:6,disabled:!0,value:`123456`,onChange:e=>console.log(`OTP:`,e)}},T={args:{length:6,value:`849201`,onChange:e=>console.log(`OTP:`,e)}},E={render:()=>{let[e,t]=(0,_.useState)(``),[n,r]=(0,_.useState)(`idle`),[i,a]=(0,_.useState)(0);return(0,v.jsxs)(`div`,{className:`space-y-4 max-w-md`,children:[(0,v.jsx)(h,{length:6,value:e,onChange:e=>{t(e),e.length===6?(r(`verifying`),setTimeout(()=>{e===`123456`?r(`success`):(r(`error`),a(e=>e+1))},1e3)):r(`idle`)},label:n===`error`?`Invalid code. Try again.`:`Enter 2FA code`,error:n===`error`,disabled:n===`verifying`||n===`success`}),n===`error`&&(0,v.jsxs)(`p`,{className:`text-xs text-red-500 text-center`,children:[`Incorrect code. `,3-i,` attempts remaining.`]}),n===`success`&&(0,v.jsx)(`div`,{className:`p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center`,children:(0,v.jsx)(`p`,{className:`text-sm text-green-600 font-semibold`,children:`✓ Verified successfully`})}),e.length<6&&e.length>0&&(0,v.jsxs)(`p`,{className:`text-xs text-text-secondary text-center`,children:[e.length,`/`,6,` digits entered`]}),(0,v.jsx)(`p`,{className:`text-xs text-text-tertiary text-center`,children:`Hint: Use 123456 for success`})]})}},D={parameters:{themes:{themeOverride:`dark`}},args:{length:6,label:`Two-Factor Authentication Code`,onChange:e=>console.log(`OTP:`,e)}},O={args:{length:8,size:`lg`,label:`Backup Recovery Code (8 digits)`,onChange:e=>console.log(`OTP:`,e)}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    onChange: value => console.log('OTP:', value)
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    length: 4,
    onChange: value => console.log('OTP:', value)
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    error: true,
    onChange: value => console.log('OTP:', value)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    label: 'Enter the code sent to your phone',
    onChange: value => console.log('OTP:', value)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    disabled: true,
    value: '123456',
    onChange: value => console.log('OTP:', value)
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    length: 6,
    value: '849201',
    onChange: value => console.log('OTP:', value)
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [otp, setOtp] = useState('');
    const [status, setStatus] = useState<'idle' | 'verifying' | 'success' | 'error'>('idle');
    const [attempts, setAttempts] = useState(0);
    const handleChange = (value: string) => {
      setOtp(value);
      if (value.length === 6) {
        setStatus('verifying');
        setTimeout(() => {
          if (value === '123456') {
            setStatus('success');
          } else {
            setStatus('error');
            setAttempts(prev => prev + 1);
          }
        }, 1000);
      } else {
        setStatus('idle');
      }
    };
    return <div className="space-y-4 max-w-md">
                <SecurityOTPInput length={6} value={status !== 'idle' && status !== 'error' ? otp : otp} onChange={handleChange} label={status === 'error' ? 'Invalid code. Try again.' : 'Enter 2FA code'} error={status === 'error'} disabled={status === 'verifying' || status === 'success'} />
                {status === 'error' && <p className="text-xs text-red-500 text-center">
                        Incorrect code. {3 - attempts} attempts remaining.
                    </p>}
                {status === 'success' && <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-center">
                        <p className="text-sm text-green-600 font-semibold">✓ Verified successfully</p>
                    </div>}
                {otp.length < 6 && otp.length > 0 && <p className="text-xs text-text-secondary text-center">
                        {otp.length}/{6} digits entered
                    </p>}
                <p className="text-xs text-text-tertiary text-center">Hint: Use 123456 for success</p>
            </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    length: 6,
    label: 'Two-Factor Authentication Code',
    onChange: value => console.log('OTP:', value)
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    length: 8,
    size: 'lg',
    label: 'Backup Recovery Code (8 digits)',
    onChange: value => console.log('OTP:', value)
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`FourDigits`,`WithError`,`WithLabel`,`Disabled`,`CompleteState`,`InteractiveOTP`,`DarkMode`,`LargeSize`]}))();export{T as CompleteState,D as DarkMode,b as Default,w as Disabled,x as FourDigits,E as InteractiveOTP,O as LargeSize,S as WithError,C as WithLabel,k as __namedExportsOrder,y as default};