import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BGx_IYCs.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{s as i,t as a}from"./es-Ch39IMKG.js";import{n as o,t as s}from"./utils-COD7dmCP.js";import{K as c,b as l,ct as u,gt as d,j as f,t as p,wt as m}from"./lucide-react-B3O-UhxF.js";import{n as h,t as g}from"./Button-Bp6L7kQL.js";var _,v,y,b=e((()=>{_=t(n()),a(),o(),v=r(),y=_.forwardRef(({className:e,value:t=0,max:n=100,indicatorClassName:r,...a},o)=>{let c=n<=0?100:n,l=Math.max(0,Math.min(100,t/c*100));return(0,v.jsx)(`div`,{ref:o,role:`progressbar`,"aria-valuenow":t,"aria-valuemin":0,"aria-valuemax":c,className:s(`relative h-2 w-full overflow-hidden rounded-full bg-surface-secondary`,e),...a,children:(0,v.jsx)(i.div,{className:s(`h-full bg-accent-blue`,r),initial:{width:0},animate:{width:`${l}%`},transition:{type:`spring`,stiffness:120,damping:18}})})}),y.displayName=`Progress`,y.__docgenInfo={description:``,methods:[],displayName:`Progress`,props:{value:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`100`,computed:!1}},indicatorClassName:{required:!1,tsType:{name:`string`},description:``}}}})),x=e((()=>{b()})),S,C,w,T=e((()=>{S=t(n()),o(),a(),p(),g(),x(),C=r(),w=S.forwardRef(({onRecordingComplete:e,onSend:t,maxDuration:n=60,autoSend:r=!1,showWaveform:a=!0,className:o,...p},g)=>{let[_,v]=(0,S.useState)(!1),[b,x]=(0,S.useState)(!1),[w,T]=(0,S.useState)(0),[E,D]=(0,S.useState)(null),[O,k]=(0,S.useState)(null),[A,j]=(0,S.useState)(!1),M=(0,S.useRef)(null),N=(0,S.useRef)([]),P=(0,S.useRef)(null),F=(0,S.useRef)(null),I=(0,S.useRef)(null);(0,S.useEffect)(()=>()=>{I.current&&clearInterval(I.current),P.current&&P.current.getTracks().forEach(e=>e.stop()),O&&URL.revokeObjectURL(O)},[O]);let L=async()=>{try{let i=await navigator.mediaDevices.getUserMedia({audio:!0});P.current=i;let a=new MediaRecorder(i);M.current=a,N.current=[],a.ondataavailable=e=>{e.data.size>0&&N.current.push(e.data)},a.onstop=()=>{let n=new Blob(N.current,{type:`audio/webm`});D(n),k(URL.createObjectURL(n)),e?.(n,w),r&&t?.(n),i.getTracks().forEach(e=>e.stop())},a.start(),v(!0),T(0),I.current=setInterval(()=>{T(e=>{let t=e+.1;return t>=n?(R(),n):t})},100)}catch(e){console.error(`Error starting recording:`,e),alert(`Error accessing microphone. Please check permissions.`)}},R=()=>{M.current&&_&&(M.current.stop(),v(!1),x(!1),I.current&&clearInterval(I.current))},z=()=>{M.current&&_&&(M.current.pause(),x(!0),I.current&&clearInterval(I.current))},B=()=>{M.current&&b&&(M.current.resume(),x(!1),I.current=setInterval(()=>{T(e=>{let t=e+.1;return t>=n?(R(),n):t})},100))},V=()=>{O&&F.current&&(F.current.play(),j(!0))},H=()=>{F.current&&(F.current.pause(),j(!1))},U=()=>{D(null),O&&(URL.revokeObjectURL(O),k(null)),T(0)},W=e=>`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,`0`)}`;return(0,C.jsxs)(`div`,{ref:g,className:s(`w-full`,o),...p,children:[_&&(0,C.jsxs)(`div`,{className:`space-y-3`,children:[(0,C.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,C.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,C.jsx)(i.div,{animate:{scale:[1,1.2,1]},transition:{duration:1,repeat:1/0},className:`w-3 h-3 bg-status-error rounded-full`}),(0,C.jsx)(`span`,{className:`text-sm font-medium text-text-primary`,children:W(w)})]}),(0,C.jsxs)(`div`,{className:`flex items-center gap-2`,children:[b?(0,C.jsx)(h,{variant:`ghost`,size:`sm`,onClick:B,children:(0,C.jsx)(u,{className:`w-4 h-4`})}):(0,C.jsx)(h,{variant:`ghost`,size:`sm`,onClick:z,children:(0,C.jsx)(d,{className:`w-4 h-4`})}),(0,C.jsx)(h,{variant:`ghost`,size:`sm`,onClick:R,children:(0,C.jsx)(f,{className:`w-4 h-4`})})]})]}),(0,C.jsx)(y,{value:w/n*100})]}),E&&!_&&(0,C.jsxs)(`div`,{className:`space-y-3`,children:[(0,C.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,C.jsxs)(`div`,{className:`flex items-center gap-3`,children:[A?(0,C.jsx)(h,{variant:`ghost`,size:`sm`,onClick:H,children:(0,C.jsx)(d,{className:`w-4 h-4`})}):(0,C.jsx)(h,{variant:`ghost`,size:`sm`,onClick:V,children:(0,C.jsx)(u,{className:`w-4 h-4`})}),(0,C.jsx)(`span`,{className:`text-sm font-medium text-text-primary`,children:W(w)})]}),(0,C.jsxs)(`div`,{className:`flex items-center gap-2`,children:[t&&(0,C.jsx)(h,{variant:`primary`,size:`sm`,onClick:()=>t(E),children:(0,C.jsx)(c,{className:`w-4 h-4`})}),(0,C.jsx)(h,{variant:`ghost`,size:`sm`,onClick:U,children:(0,C.jsx)(l,{className:`w-4 h-4`})})]})]}),(0,C.jsx)(`audio`,{ref:F,src:O||void 0,onEnded:()=>j(!1),onTimeUpdate:e=>{let t=e.currentTarget;T(t.currentTime)}})]}),!_&&!E&&(0,C.jsx)(h,{variant:`primary`,size:`lg`,onClick:L,className:`w-full`,leftIcon:(0,C.jsx)(m,{className:`w-5 h-5`}),children:`Start Recording`})]})}),w.displayName=`VoiceRecorder`,w.__docgenInfo={description:``,methods:[],displayName:`VoiceRecorder`,props:{onRecordingComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(audioBlob: Blob, duration: number) => void`,signature:{arguments:[{type:{name:`Blob`},name:`audioBlob`},{type:{name:`number`},name:`duration`}],return:{name:`void`}}},description:``},onSend:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(audioBlob: Blob) => void`,signature:{arguments:[{type:{name:`Blob`},name:`audioBlob`}],return:{name:`void`}}},description:``},maxDuration:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`60`,computed:!1}},autoSend:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},showWaveform:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),E,D,O,k,A,j,M,N,P,F;e((()=>{T(),E=t(n()),D=r(),O={title:`Forms/VoiceRecorder`,component:w,tags:[`autodocs`]},k={args:{onRecordingComplete:e=>console.log(`Recording complete:`,e)}},A={render:()=>{let[e,t]=(0,E.useState)([]),[n,r]=(0,E.useState)(!1);return(0,D.jsxs)(`div`,{className:`space-y-4 max-w-sm`,children:[(0,D.jsx)(w,{onRecordingComplete:e=>{let n=URL.createObjectURL(e);t(e=>[...e,n]),r(!1)},onRecordingStateChange:r}),e.length>0&&(0,D.jsxs)(`div`,{className:`p-3 bg-surface-secondary rounded-lg space-y-3`,children:[(0,D.jsxs)(`h4`,{className:`text-xs font-semibold text-text-secondary`,children:[`Recordings (`,e.length,`)`]}),e.map((e,t)=>(0,D.jsxs)(`div`,{className:`space-y-1`,children:[(0,D.jsxs)(`p`,{className:`text-xs text-text-secondary`,children:[`Recording #`,t+1]}),(0,D.jsx)(`audio`,{src:e,controls:!0,className:`w-full h-8`})]},t))]})]})}},j={parameters:{themes:{themeOverride:`dark`}},args:{onRecordingComplete:e=>console.log(`Recording complete:`,e)}},M={parameters:{viewport:{defaultViewport:`mobile1`}}},N={parameters:{docs:{description:{story:`VoiceRecorder in a loading state, showing placeholder UI while audio data is being processed.`}}}},P={parameters:{docs:{description:{story:`VoiceRecorder used in a fintech context for voice memo transactions or support recording.`}}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    onRecordingComplete: blob => console.log('Recording complete:', blob)
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [recordings, setRecordings] = useState<string[]>([]);
    const [isRecording, setIsRecording] = useState(false);
    const handleRecordingComplete = (blob: Blob) => {
      const url = URL.createObjectURL(blob);
      setRecordings(prev => [...prev, url]);
      setIsRecording(false);
    };
    return <div className="space-y-4 max-w-sm">
                <VoiceRecorder onRecordingComplete={handleRecordingComplete} onRecordingStateChange={setIsRecording} />
                {recordings.length > 0 && <div className="p-3 bg-surface-secondary rounded-lg space-y-3">
                        <h4 className="text-xs font-semibold text-text-secondary">
                            Recordings ({recordings.length})
                        </h4>
                        {recordings.map((url, i) => <div key={i} className="space-y-1">
                                <p className="text-xs text-text-secondary">Recording #{i + 1}</p>
                                <audio src={url} controls className="w-full h-8" />
                            </div>)}
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
    onRecordingComplete: blob => console.log('Recording complete:', blob)
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
        story: 'VoiceRecorder in a loading state, showing placeholder UI while audio data is being processed.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'VoiceRecorder used in a fintech context for voice memo transactions or support recording.'
      }
    }
  }
}`,...P.parameters?.docs?.source}}},F=[`Default`,`InteractiveRecorder`,`DarkMode`,`MobileView`,`LoadingState`,`FintechUseCase`]}))();export{j as DarkMode,k as Default,P as FintechUseCase,A as InteractiveRecorder,N as LoadingState,M as MobileView,F as __namedExportsOrder,O as default};