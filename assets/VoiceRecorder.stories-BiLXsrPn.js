import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BUF2whoS.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{s as o,t as s}from"./es-8Z2IY91W.js";import{M as c,Ot as l,Y as u,dt as d,t as f,x as p,yt as m}from"./lucide-react-D5svGO2N.js";import{n as h,t as g}from"./Progress-CCk0rlhU.js";import{n as _,t as v}from"./Button-lpX-ETzx.js";var y,b,x,S=e((()=>{y=t(n()),r(),b=a(),s(),f(),_(),h(),x=y.forwardRef(({onRecordingComplete:e,onSend:t,maxDuration:n=60,autoSend:r=!1,showWaveform:a=!0,className:s,...f},h)=>{let[_,x]=(0,y.useState)(!1),[S,C]=(0,y.useState)(!1),[w,T]=(0,y.useState)(0),[E,D]=(0,y.useState)(null),[O,k]=(0,y.useState)(null),[A,j]=(0,y.useState)(!1),M=(0,y.useRef)(null),N=(0,y.useRef)([]),P=(0,y.useRef)(null),F=(0,y.useRef)(null),I=(0,y.useRef)(null);(0,y.useEffect)(()=>()=>{I.current&&clearInterval(I.current),P.current&&P.current.getTracks().forEach(e=>e.stop()),O&&URL.revokeObjectURL(O)},[O]);let L=async()=>{try{let i=await navigator.mediaDevices.getUserMedia({audio:!0});P.current=i;let a=new MediaRecorder(i);M.current=a,N.current=[],a.ondataavailable=e=>{e.data.size>0&&N.current.push(e.data)},a.onstop=()=>{let n=new Blob(N.current,{type:`audio/webm`});D(n),k(URL.createObjectURL(n)),e?.(n,w),r&&t?.(n),i.getTracks().forEach(e=>e.stop())},a.start(),x(!0),T(0),I.current=setInterval(()=>{T(e=>{let t=e+.1;return t>=n?(R(),n):t})},100)}catch(e){console.error(`Error starting recording:`,e),alert(`Error accessing microphone. Please check permissions.`)}},R=()=>{M.current&&_&&(M.current.stop(),x(!1),C(!1),I.current&&clearInterval(I.current))},z=()=>{M.current&&_&&(M.current.pause(),C(!0),I.current&&clearInterval(I.current))},B=()=>{M.current&&S&&(M.current.resume(),C(!1),I.current=setInterval(()=>{T(e=>{let t=e+.1;return t>=n?(R(),n):t})},100))},V=()=>{O&&F.current&&(F.current.play(),j(!0))},H=()=>{F.current&&(F.current.pause(),j(!1))},U=()=>{D(null),O&&(URL.revokeObjectURL(O),k(null)),T(0)},W=e=>`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,`0`)}`;return(0,b.jsxs)(`div`,{ref:h,className:i(`w-full`,s),...f,children:[_&&(0,b.jsxs)(`div`,{className:`space-y-3`,children:[(0,b.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,b.jsx)(o.div,{animate:{scale:[1,1.2,1]},transition:{duration:1,repeat:1/0},className:`w-3 h-3 bg-status-error rounded-full`}),(0,b.jsx)(`span`,{className:`text-sm font-medium text-text-primary`,children:W(w)})]}),(0,b.jsxs)(`div`,{className:`flex items-center gap-2`,children:[S?(0,b.jsx)(v,{variant:`ghost`,size:`sm`,onClick:B,children:(0,b.jsx)(d,{className:`w-4 h-4`})}):(0,b.jsx)(v,{variant:`ghost`,size:`sm`,onClick:z,children:(0,b.jsx)(m,{className:`w-4 h-4`})}),(0,b.jsx)(v,{variant:`ghost`,size:`sm`,onClick:R,children:(0,b.jsx)(c,{className:`w-4 h-4`})})]})]}),(0,b.jsx)(g,{value:w/n*100})]}),E&&!_&&(0,b.jsxs)(`div`,{className:`space-y-3`,children:[(0,b.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,b.jsxs)(`div`,{className:`flex items-center gap-3`,children:[A?(0,b.jsx)(v,{variant:`ghost`,size:`sm`,onClick:H,children:(0,b.jsx)(m,{className:`w-4 h-4`})}):(0,b.jsx)(v,{variant:`ghost`,size:`sm`,onClick:V,children:(0,b.jsx)(d,{className:`w-4 h-4`})}),(0,b.jsx)(`span`,{className:`text-sm font-medium text-text-primary`,children:W(w)})]}),(0,b.jsxs)(`div`,{className:`flex items-center gap-2`,children:[t&&(0,b.jsx)(v,{variant:`primary`,size:`sm`,onClick:()=>t(E),children:(0,b.jsx)(u,{className:`w-4 h-4`})}),(0,b.jsx)(v,{variant:`ghost`,size:`sm`,onClick:U,children:(0,b.jsx)(p,{className:`w-4 h-4`})})]})]}),(0,b.jsx)(`audio`,{ref:F,src:O||void 0,onEnded:()=>j(!1),onTimeUpdate:e=>{let t=e.currentTarget;T(t.currentTime)}})]}),!_&&!E&&(0,b.jsx)(v,{variant:`primary`,size:`lg`,onClick:L,className:`w-full`,leftIcon:(0,b.jsx)(l,{className:`w-5 h-5`}),children:`Start Recording`})]})}),x.displayName=`VoiceRecorder`,x.__docgenInfo={description:``,methods:[],displayName:`VoiceRecorder`,props:{onRecordingComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(audioBlob: Blob, duration: number) => void`,signature:{arguments:[{type:{name:`Blob`},name:`audioBlob`},{type:{name:`number`},name:`duration`}],return:{name:`void`}}},description:``},onSend:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(audioBlob: Blob) => void`,signature:{arguments:[{type:{name:`Blob`},name:`audioBlob`}],return:{name:`void`}}},description:``},maxDuration:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`60`,computed:!1}},autoSend:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},showWaveform:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),C,w,T,E,D,O,k,A,j,M;e((()=>{S(),C=t(n()),w=a(),T={title:`Forms/VoiceRecorder`,component:x,tags:[`autodocs`]},E={args:{onRecordingComplete:e=>console.log(`Recording complete:`,e)}},D={render:()=>{let[e,t]=(0,C.useState)([]),[n,r]=(0,C.useState)(!1);return(0,w.jsxs)(`div`,{className:`space-y-4 max-w-sm`,children:[(0,w.jsx)(x,{onRecordingComplete:e=>{let n=URL.createObjectURL(e);t(e=>[...e,n]),r(!1)},onRecordingStateChange:r}),e.length>0&&(0,w.jsxs)(`div`,{className:`p-3 bg-surface-secondary rounded-lg space-y-3`,children:[(0,w.jsxs)(`h4`,{className:`text-xs font-semibold text-text-secondary`,children:[`Recordings (`,e.length,`)`]}),e.map((e,t)=>(0,w.jsxs)(`div`,{className:`space-y-1`,children:[(0,w.jsxs)(`p`,{className:`text-xs text-text-secondary`,children:[`Recording #`,t+1]}),(0,w.jsx)(`audio`,{src:e,controls:!0,className:`w-full h-8`})]},t))]})]})}},O={parameters:{themes:{themeOverride:`dark`}},args:{onRecordingComplete:e=>console.log(`Recording complete:`,e)}},k={parameters:{viewport:{defaultViewport:`mobile1`}}},A={parameters:{docs:{description:{story:`VoiceRecorder in a loading state, showing placeholder UI while audio data is being processed.`}}}},j={parameters:{docs:{description:{story:`VoiceRecorder used in a fintech context for voice memo transactions or support recording.`}}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    onRecordingComplete: blob => console.log('Recording complete:', blob)
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    onRecordingComplete: blob => console.log('Recording complete:', blob)
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'VoiceRecorder in a loading state, showing placeholder UI while audio data is being processed.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'VoiceRecorder used in a fintech context for voice memo transactions or support recording.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`InteractiveRecorder`,`DarkMode`,`MobileView`,`LoadingState`,`FintechUseCase`]}))();export{O as DarkMode,E as Default,j as FintechUseCase,D as InteractiveRecorder,A as LoadingState,k as MobileView,M as __namedExportsOrder,T as default};