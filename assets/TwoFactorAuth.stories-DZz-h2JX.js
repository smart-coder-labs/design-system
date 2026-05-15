import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DL3IwwZJ.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{H as o,Yn as s,Zn as c,t as l}from"./lucide-react-C3ayLXpj.js";import{n as u,t as d}from"./Button-l9_4D6Ta.js";import{n as f,t as p}from"./OTPInput-D468yEtL.js";var m,h,g,_=e((()=>{m=t(n()),r(),h=a(),f(),u(),l(),g=m.forwardRef(({onVerify:e,onResend:t,method:n=`email`,recipient:r,isLoading:a=!1,error:l,className:u,...f},g)=>{let[_,v]=(0,m.useState)(``),[y,b]=(0,m.useState)(!1),[x,S]=(0,m.useState)(``),C=async t=>{S(``);try{await e?.(t),b(!0)}catch(e){S(e instanceof Error?e.message:`Invalid code`),v(``)}},w=()=>{v(``),S(``),t?.()},T=l||x,E={sms:`SMS`,email:`Email`,app:`Authenticator App`},D=r?r.replace(/(.{2})(.*)(.{2})/,(e,t,n,r)=>`${t}${`*`.repeat(Math.min(n.length,6))}${r}`):``;return y?(0,h.jsxs)(`div`,{ref:g,className:i(`w-full max-w-md space-y-6 text-center`,u),...f,children:[(0,h.jsx)(`div`,{className:`flex justify-center`,children:(0,h.jsx)(`div`,{className:`w-16 h-16 rounded-full bg-status-success/10 flex items-center justify-center`,children:(0,h.jsx)(s,{className:`w-8 h-8 text-status-success`})})}),(0,h.jsxs)(`div`,{children:[(0,h.jsx)(`h3`,{className:`text-xl font-semibold text-text-primary mb-2`,children:`Verification Successful`}),(0,h.jsx)(`p`,{className:`text-sm text-text-secondary`,children:`Your account has been verified successfully.`})]})]}):(0,h.jsxs)(`div`,{ref:g,className:i(`w-full max-w-md space-y-6`,u),...f,children:[(0,h.jsxs)(`div`,{className:`text-center space-y-2`,children:[(0,h.jsx)(`div`,{className:`flex justify-center mb-4`,children:(0,h.jsx)(`div`,{className:`w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center`,children:(0,h.jsx)(o,{className:`w-8 h-8 text-accent-blue`})})}),(0,h.jsx)(`h2`,{className:`text-2xl font-bold text-text-primary`,children:`Two-Factor Authentication`}),(0,h.jsxs)(`p`,{className:`text-sm text-text-secondary`,children:[`Enter the verification code sent to your `,E[n]]}),r&&(0,h.jsx)(`p`,{className:`text-xs text-text-tertiary font-medium`,children:D})]}),T&&(0,h.jsxs)(`div`,{className:`flex items-center gap-2 p-3 bg-status-error/10 border border-status-error/20 rounded-xl text-status-error text-sm`,children:[(0,h.jsx)(c,{className:`w-4 h-4 flex-shrink-0`}),(0,h.jsx)(`span`,{children:T})]}),(0,h.jsx)(`div`,{className:`flex justify-center`,children:(0,h.jsx)(p,{length:6,value:_,onChange:v,onComplete:C,disabled:a,error:!!T,autoFocus:!0})}),t&&(0,h.jsxs)(`div`,{className:`text-center`,children:[(0,h.jsx)(`p`,{className:`text-sm text-text-secondary mb-2`,children:`Didn't receive the code?`}),(0,h.jsx)(d,{variant:`ghost`,size:`sm`,onClick:w,disabled:a,children:`Resend Code`})]})]})}),g.displayName=`TwoFactorAuth`,g.__docgenInfo={description:``,methods:[],displayName:`TwoFactorAuth`,props:{onVerify:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(code: string) => void | Promise<void>`,signature:{arguments:[{type:{name:`string`},name:`code`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:``},onResend:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},method:{required:!1,tsType:{name:`union`,raw:`'sms' | 'email' | 'app'`,elements:[{name:`literal`,value:`'sms'`},{name:`literal`,value:`'email'`},{name:`literal`,value:`'app'`}]},description:``,defaultValue:{value:`'email'`,computed:!1}},recipient:{required:!1,tsType:{name:`string`},description:``},isLoading:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},error:{required:!1,tsType:{name:`string`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),v,y,b,x,S,C,w,T,E,D,O;e((()=>{_(),v=t(n()),y=a(),b={title:`Fintech/KYC/TwoFactorAuth`,component:g,tags:[`autodocs`]},x={args:{onVerify:e=>(console.log(`Verifying:`,e),e===`123456`)}},S={args:{backupCodes:[`ABCD-EFGH`,`IJKL-MNOP`,`QRST-UVWX`,`YZ12-3456`],onVerify:e=>(console.log(`Verifying:`,e),e===`123456`)}},C={args:{errorMessage:`Invalid or expired code. Please try again.`,onVerify:e=>(console.log(`Verifying:`,e),!1)}},w={render:()=>{let[e,t]=(0,v.useState)(0),[n,r]=(0,v.useState)(!1),[i,a]=(0,v.useState)(!1);return i?(0,y.jsxs)(`div`,{className:`p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-center space-y-3`,children:[(0,y.jsx)(`p`,{className:`text-3xl`,children:`✓`}),(0,y.jsx)(`h3`,{className:`text-lg font-bold text-green-700 dark:text-green-300`,children:`2FA Verified`}),(0,y.jsx)(`p`,{className:`text-sm text-green-600`,children:`You have been authenticated successfully.`}),(0,y.jsx)(`button`,{onClick:()=>{a(!1),t(0),r(!1)},className:`text-xs text-blue-500`,children:`Reset`})]}):(0,y.jsxs)(`div`,{className:`space-y-4`,children:[(0,y.jsx)(g,{onVerify:n=>{if(n===`000000`)return a(!0),!0;let i=e+1;return t(i),i>=3&&r(!0),!1},errorMessage:n?`Account locked. Please use a backup code or contact support.`:e>0?`Invalid code (${e}/3 attempts)`:void 0,backupCodes:n?[`ABCD-EFGH`,`IJKL-MNOP`]:void 0}),n&&(0,y.jsx)(`p`,{className:`text-xs text-text-secondary text-center`,children:`Hint: Use backup code ABCD-EFGH`}),!n&&(0,y.jsx)(`p`,{className:`text-xs text-text-tertiary text-center`,children:`Hint: Use code 000000 for success`})]})}},T={parameters:{themes:{themeOverride:`dark`}},args:{onVerify:e=>(console.log(`Verifying:`,e),!0)}},E={parameters:{viewport:{defaultViewport:`mobile1`}}},D={parameters:{docs:{description:{story:`TwoFactorAuth in a loading state, showing skeleton or placeholder UI while data is being fetched.`}}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    onVerify: code => {
      console.log('Verifying:', code);
      return code === '123456';
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    backupCodes: ['ABCD-EFGH', 'IJKL-MNOP', 'QRST-UVWX', 'YZ12-3456'],
    onVerify: code => {
      console.log('Verifying:', code);
      return code === '123456';
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    errorMessage: 'Invalid or expired code. Please try again.',
    onVerify: code => {
      console.log('Verifying:', code);
      return false;
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [attempts, setAttempts] = useState(0);
    const [locked, setLocked] = useState(false);
    const [success, setSuccess] = useState(false);
    const handleVerify = (code: string) => {
      if (code === '000000') {
        setSuccess(true);
        return true;
      }
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 3) {
        setLocked(true);
      }
      return false;
    };
    if (success) {
      return <div className="p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-center space-y-3">
                    <p className="text-3xl">✓</p>
                    <h3 className="text-lg font-bold text-green-700 dark:text-green-300">2FA Verified</h3>
                    <p className="text-sm text-green-600">You have been authenticated successfully.</p>
                    <button onClick={() => {
          setSuccess(false);
          setAttempts(0);
          setLocked(false);
        }} className="text-xs text-blue-500">Reset</button>
                </div>;
    }
    return <div className="space-y-4">
                <TwoFactorAuth onVerify={handleVerify} errorMessage={locked ? 'Account locked. Please use a backup code or contact support.' : attempts > 0 ? \`Invalid code (\${attempts}/3 attempts)\` : undefined} backupCodes={locked ? ['ABCD-EFGH', 'IJKL-MNOP'] : undefined} />
                {locked && <p className="text-xs text-text-secondary text-center">
                        Hint: Use backup code ABCD-EFGH
                    </p>}
                {!locked && <p className="text-xs text-text-tertiary text-center">Hint: Use code 000000 for success</p>}
            </div>;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    onVerify: code => {
      console.log('Verifying:', code);
      return true;
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'TwoFactorAuth in a loading state, showing skeleton or placeholder UI while data is being fetched.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithBackupCodes`,`WithError`,`Interactive2FA`,`DarkMode`,`MobileView`,`LoadingState`]}))();export{T as DarkMode,x as Default,w as Interactive2FA,D as LoadingState,E as MobileView,S as WithBackupCodes,C as WithError,O as __namedExportsOrder,b as default};