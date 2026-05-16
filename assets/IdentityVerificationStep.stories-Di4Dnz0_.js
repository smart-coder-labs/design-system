import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CeXTICq7.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{l as o,s,t as c}from"./es-ClQM_AK5.js";import{Gn as l,H as u,Nn as d,Xn as f,Yn as p,Zn as m,bn as h,m as g,qn as _,t as v,ur as y,zt as b}from"./lucide-react-4IZDqrWk.js";var x,S,C,w,T,E,D=e((()=>{x=t(n()),c(),r(),v(),S=a(),C={id_front:(0,S.jsx)(d,{className:`w-6 h-6`}),id_back:(0,S.jsx)(d,{className:`w-6 h-6`}),passport:(0,S.jsx)(h,{className:`w-6 h-6`}),selfie:(0,S.jsx)(y,{className:`w-6 h-6`}),proof_of_address:(0,S.jsx)(h,{className:`w-6 h-6`})},w={idle:{label:`Pending`,color:`text-text-tertiary`,bgColor:`bg-surface-secondary`},uploading:{label:`Uploading...`,color:`text-accent-blue`,bgColor:`bg-accent-blue/10`},verifying:{label:`Verifying...`,color:`text-status-warning`,bgColor:`bg-status-warning/10`},success:{label:`Verified`,color:`text-status-success`,bgColor:`bg-status-success/10`},failed:{label:`Failed`,color:`text-status-error`,bgColor:`bg-status-error/10`}},T=({doc:e,onUpload:t,onRetry:n})=>{let[r,a]=(0,x.useState)(!1),c=(0,x.useRef)(null),l=w[e.status],u=e.status===`idle`||e.status===`failed`,d=(0,x.useCallback)(n=>{t?.(e.type,n)},[e.type,t]),f=(0,x.useCallback)(e=>{e.preventDefault(),a(!1);let t=e.dataTransfer.files[0];t&&d(t)},[d]),m=(0,x.useCallback)(e=>{e.preventDefault(),a(!0)},[]);return(0,S.jsxs)(s.div,{className:i(`relative rounded-2xl border-2 border-dashed p-5 transition-all duration-200`,u?`cursor-pointer hover:border-accent-blue hover:bg-accent-blue/[0.03]`:`cursor-default`,r?`border-accent-blue bg-accent-blue/5 scale-[1.01]`:``,e.status===`success`?`border-status-success/30 bg-status-success/[0.03]`:``,e.status===`failed`?`border-status-error/30 bg-status-error/[0.03]`:``,e.status===`idle`||e.status===`uploading`||e.status===`verifying`?`border-border-primary`:``),onClick:()=>u&&c.current?.click(),onDrop:f,onDragOver:m,onDragLeave:()=>a(!1),whileHover:u?{y:-2}:{},initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.3,ease:[.16,1,.3,1]},role:u?`button`:void 0,"aria-label":`Upload ${e.label}`,tabIndex:u?0:-1,children:[(0,S.jsx)(`input`,{ref:c,type:`file`,accept:`image/*,.pdf`,className:`hidden`,onChange:e=>{let t=e.target.files?.[0];t&&d(t)}}),(0,S.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,S.jsx)(`div`,{className:i(`flex items-center justify-center w-12 h-12 rounded-xl transition-apple`,l.bgColor,l.color),children:e.status===`uploading`||e.status===`verifying`?(0,S.jsx)(b,{className:`w-5 h-5 animate-spin`}):e.status===`success`?(0,S.jsx)(p,{className:`w-5 h-5`}):e.status===`failed`?(0,S.jsx)(_,{className:`w-5 h-5`}):C[e.type]}),(0,S.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,S.jsx)(`p`,{className:`text-sm font-semibold text-text-primary`,children:e.label}),(0,S.jsx)(`span`,{className:i(`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full`,l.bgColor,l.color),children:l.label})]}),e.description&&(0,S.jsx)(`p`,{className:`text-xs text-text-secondary mt-0.5`,children:e.description}),e.fileName&&(0,S.jsx)(`p`,{className:`text-xs text-text-tertiary mt-1 truncate`,children:e.fileName}),e.status===`failed`&&e.errorMessage&&(0,S.jsx)(`p`,{className:`text-xs text-status-error mt-1`,children:e.errorMessage})]}),u&&(0,S.jsx)(`div`,{className:`flex items-center text-text-tertiary`,children:(0,S.jsx)(g,{className:`w-4 h-4`})}),e.status===`failed`&&(0,S.jsx)(`button`,{onClick:t=>{t.stopPropagation(),n?.(e.type)},className:`text-xs font-semibold text-accent-blue hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded`,children:`Retry`})]}),(0,S.jsx)(o,{children:e.status===`uploading`&&typeof e.progress==`number`&&(0,S.jsx)(s.div,{className:`mt-3`,initial:{opacity:0,height:0},animate:{opacity:1,height:`auto`},exit:{opacity:0,height:0},children:(0,S.jsx)(`div`,{className:`h-1 bg-surface-secondary rounded-full overflow-hidden`,children:(0,S.jsx)(s.div,{className:`h-full bg-accent-blue rounded-full`,initial:{width:0},animate:{width:`${e.progress*100}%`},transition:{duration:.3}})})})})]})},E=({documents:e,onUpload:t,onRetry:n,title:r=`Identity Verification`,subtitle:a=`Upload the required documents to verify your identity`,className:o=``})=>{let c=e.filter(e=>e.status===`success`).length,l=e.length>0?c/e.length:0;return(0,S.jsxs)(s.div,{className:i(`w-full max-w-lg mx-auto`,o),initial:{opacity:0},animate:{opacity:1},transition:{duration:.4},children:[(0,S.jsxs)(`div`,{className:`text-center mb-6`,children:[(0,S.jsx)(`div`,{className:`flex justify-center mb-3`,children:(0,S.jsx)(`div`,{className:`w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue`,children:(0,S.jsx)(u,{className:`w-6 h-6`})})}),(0,S.jsx)(`h2`,{className:`text-lg font-bold text-text-primary`,children:r}),(0,S.jsx)(`p`,{className:`text-sm text-text-secondary mt-1`,children:a})]}),(0,S.jsxs)(`div`,{className:`mb-5`,children:[(0,S.jsxs)(`div`,{className:`flex items-center justify-between text-xs text-text-tertiary mb-1.5`,children:[(0,S.jsxs)(`span`,{children:[c,` of `,e.length,` completed`]}),(0,S.jsxs)(`span`,{children:[Math.round(l*100),`%`]})]}),(0,S.jsx)(`div`,{className:`h-1.5 bg-surface-secondary rounded-full overflow-hidden`,children:(0,S.jsx)(s.div,{className:`h-full bg-accent-blue rounded-full`,animate:{width:`${l*100}%`},transition:{duration:.5,ease:[.16,1,.3,1]}})})]}),(0,S.jsx)(`div`,{className:`flex flex-col gap-3`,children:e.map((e,r)=>(0,S.jsx)(T,{doc:e,onUpload:t,onRetry:n},e.type))})]})},E.displayName=`IdentityVerificationStep`,E.__docgenInfo={description:``,methods:[],displayName:`IdentityVerificationStep`,props:{documents:{required:!0,tsType:{name:`Array`,elements:[{name:`DocumentSlot`}],raw:`DocumentSlot[]`},description:``},onUpload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(type: DocumentType, file: File) => void`,signature:{arguments:[{type:{name:`union`,raw:`'id_front' | 'id_back' | 'passport' | 'selfie' | 'proof_of_address'`,elements:[{name:`literal`,value:`'id_front'`},{name:`literal`,value:`'id_back'`},{name:`literal`,value:`'passport'`},{name:`literal`,value:`'selfie'`},{name:`literal`,value:`'proof_of_address'`}]},name:`type`},{type:{name:`File`},name:`file`}],return:{name:`void`}}},description:``},onRetry:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(type: DocumentType) => void`,signature:{arguments:[{type:{name:`union`,raw:`'id_front' | 'id_back' | 'passport' | 'selfie' | 'proof_of_address'`,elements:[{name:`literal`,value:`'id_front'`},{name:`literal`,value:`'id_back'`},{name:`literal`,value:`'passport'`},{name:`literal`,value:`'selfie'`},{name:`literal`,value:`'proof_of_address'`}]},name:`type`}],return:{name:`void`}}},description:``},title:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Identity Verification'`,computed:!1}},subtitle:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Upload the required documents to verify your identity'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),O,k,A,j,M,N,P,F,I,L,R,z,B;e((()=>{O=t(n()),D(),v(),k=a(),{action:A}=__STORYBOOK_MODULE_ACTIONS__,j={title:`Fintech/KYC/IdentityVerificationStep`,component:E,tags:[`autodocs`],parameters:{layout:`centered`}},M={args:{title:`Upload your ID`,description:`Please upload a clear photo of your government-issued ID.`,status:`pending`,icon:(0,k.jsx)(g,{className:`w-5 h-5`}),onAction:A(`upload-clicked`),actionLabel:`Upload Document`}},N={args:{title:`ID Verification`,description:`Your ID has been successfully verified.`,status:`completed`,icon:(0,k.jsx)(f,{className:`w-5 h-5`})}},P={args:{title:`Processing Verification`,description:`We are reviewing your documents. This usually takes 2-3 minutes.`,status:`in-progress`,icon:(0,k.jsx)(l,{className:`w-5 h-5`})}},F={args:{title:`Verification Failed`,description:`We couldn't verify your identity. Please try again with a clearer photo.`,status:`failed`,icon:(0,k.jsx)(m,{className:`w-5 h-5`}),onAction:A(`retry`),actionLabel:`Try Again`}},I={args:{title:`Take a Selfie`,description:`Take a clear selfie to match with your ID document.`,status:`pending`,icon:(0,k.jsx)(y,{className:`w-5 h-5`}),onAction:A(`take-photo`),actionLabel:`Take Photo`}},L={args:{title:`Proof of Address`,description:`Upload a recent utility bill or bank statement (last 3 months).`,status:`pending`,icon:(0,k.jsx)(g,{className:`w-5 h-5`}),onAction:A(`upload-address`),actionLabel:`Upload Document`}},R={render:()=>(0,k.jsxs)(`div`,{className:`w-96 space-y-4`,children:[(0,k.jsx)(E,{title:`Upload ID`,description:`Upload your government-issued ID`,status:`completed`,icon:(0,k.jsx)(f,{className:`w-5 h-5`})}),(0,k.jsx)(E,{title:`Take Selfie`,description:`Match your face with your ID`,status:`in-progress`,icon:(0,k.jsx)(l,{className:`w-5 h-5`})}),(0,k.jsx)(E,{title:`Proof of Address`,description:`Upload a utility bill or statement`,status:`pending`,icon:(0,k.jsx)(g,{className:`w-5 h-5`}),onAction:A(`upload`),actionLabel:`Upload`})]})},z={render:()=>{let[e,t]=O.useState(0),n=[{title:`Personal Information`,desc:`Enter your full name and date of birth`},{title:`ID Verification`,desc:`Upload a government-issued ID`},{title:`Selfie Verification`,desc:`Take a selfie for facial matching`},{title:`Address Proof`,desc:`Upload a recent utility bill`}];return(0,k.jsxs)(`div`,{className:`w-96 space-y-6`,children:[(0,k.jsx)(`div`,{className:`flex justify-between`,children:n.map((t,n)=>(0,k.jsx)(`div`,{className:`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold 
              ${n<e?`bg-status-success text-white`:n===e?`bg-accent-blue text-white`:`bg-surface-secondary text-text-tertiary`}`,children:n<e?`✓`:n+1},n))}),(0,k.jsx)(E,{title:n[e].title,description:n[e].desc,status:e===e?`pending`:e<e?`completed`:`pending`,icon:e===0?(0,k.jsx)(g,{className:`w-5 h-5`}):(0,k.jsx)(y,{className:`w-5 h-5`}),onAction:()=>t(e=>Math.min(e+1,3)),actionLabel:e===3?`Finish`:`Continue`})]})}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Upload your ID',
    description: 'Please upload a clear photo of your government-issued ID.',
    status: 'pending',
    icon: <Upload className="w-5 h-5" />,
    onAction: action('upload-clicked'),
    actionLabel: 'Upload Document'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'ID Verification',
    description: 'Your ID has been successfully verified.',
    status: 'completed',
    icon: <CheckCircle className="w-5 h-5" />
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Processing Verification',
    description: 'We are reviewing your documents. This usually takes 2-3 minutes.',
    status: 'in-progress',
    icon: <Clock className="w-5 h-5" />
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Verification Failed',
    description: 'We couldn\\'t verify your identity. Please try again with a clearer photo.',
    status: 'failed',
    icon: <AlertCircle className="w-5 h-5" />,
    onAction: action('retry'),
    actionLabel: 'Try Again'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Take a Selfie',
    description: 'Take a clear selfie to match with your ID document.',
    status: 'pending',
    icon: <Camera className="w-5 h-5" />,
    onAction: action('take-photo'),
    actionLabel: 'Take Photo'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Proof of Address',
    description: 'Upload a recent utility bill or bank statement (last 3 months).',
    status: 'pending',
    icon: <Upload className="w-5 h-5" />,
    onAction: action('upload-address'),
    actionLabel: 'Upload Document'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-96 space-y-4">
      <IdentityVerificationStep title="Upload ID" description="Upload your government-issued ID" status="completed" icon={<CheckCircle className="w-5 h-5" />} />
      <IdentityVerificationStep title="Take Selfie" description="Match your face with your ID" status="in-progress" icon={<Clock className="w-5 h-5" />} />
      <IdentityVerificationStep title="Proof of Address" description="Upload a utility bill or statement" status="pending" icon={<Upload className="w-5 h-5" />} onAction={action('upload')} actionLabel="Upload" />
    </div>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [step, setStep] = React.useState(0);
    const steps = [{
      title: 'Personal Information',
      desc: 'Enter your full name and date of birth'
    }, {
      title: 'ID Verification',
      desc: 'Upload a government-issued ID'
    }, {
      title: 'Selfie Verification',
      desc: 'Take a selfie for facial matching'
    }, {
      title: 'Address Proof',
      desc: 'Upload a recent utility bill'
    }];
    return <div className="w-96 space-y-6">
        <div className="flex justify-between">
          {steps.map((s, i) => <div key={i} className={\`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold 
              \${i < step ? 'bg-status-success text-white' : i === step ? 'bg-accent-blue text-white' : 'bg-surface-secondary text-text-tertiary'}\`}>
              {i < step ? '✓' : i + 1}
            </div>)}
        </div>
        <IdentityVerificationStep title={steps[step].title} description={steps[step].desc} status={step === step ? 'pending' : step < step ? 'completed' : 'pending'} icon={step === 0 ? <Upload className="w-5 h-5" /> : <Camera className="w-5 h-5" />} onAction={() => setStep(s => Math.min(s + 1, 3))} actionLabel={step === 3 ? 'Finish' : 'Continue'} />
      </div>;
  }
}`,...z.parameters?.docs?.source}}},B=[`PendingUpload`,`Completed`,`InProgress`,`Failed`,`SelfieStep`,`AddressVerification`,`VerificationProgress`,`FullOnboardingFlow`]}))();export{L as AddressVerification,N as Completed,F as Failed,z as FullOnboardingFlow,P as InProgress,M as PendingUpload,I as SelfieStep,R as VerificationProgress,B as __namedExportsOrder,j as default};