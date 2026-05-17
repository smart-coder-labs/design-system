import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-B1a0g5t6.js";import{Dt as r,N as i,Y as a,dt as o,t as s,x as c,yt as l}from"./lucide-react-BVeuibpS.js";import{n as u,t as d}from"./utils-ijcE-ZHT.js";import{t as f}from"./jsx-runtime-DaLCRA3n.js";import{s as p,t as m}from"./es-BBowbM95.js";import{n as h,t as g}from"./Button-CWySTvFo.js";import{n as _,t as v}from"./Progress-jaNB9eb5.js";var y=e((()=>{_()})),b,x,S,C=e((()=>{b=t(n()),u(),m(),s(),g(),y(),x=f(),S=b.forwardRef(({onRecordingComplete:e,onSend:t,maxDuration:n=60,autoSend:s=!1,showWaveform:u=!0,className:f,...m},g)=>{let[_,y]=(0,b.useState)(!1),[S,C]=(0,b.useState)(!1),[w,T]=(0,b.useState)(0),[E,D]=(0,b.useState)(null),[O,k]=(0,b.useState)(null),[A,j]=(0,b.useState)(!1),M=(0,b.useRef)(null),N=(0,b.useRef)([]),P=(0,b.useRef)(null),F=(0,b.useRef)(null),I=(0,b.useRef)(null);(0,b.useEffect)(()=>()=>{I.current&&clearInterval(I.current),P.current&&P.current.getTracks().forEach(e=>e.stop()),O&&URL.revokeObjectURL(O)},[O]);let L=async()=>{try{let r=await navigator.mediaDevices.getUserMedia({audio:!0});P.current=r;let i=new MediaRecorder(r);M.current=i,N.current=[],i.ondataavailable=e=>{e.data.size>0&&N.current.push(e.data)},i.onstop=()=>{let n=new Blob(N.current,{type:`audio/webm`});D(n),k(URL.createObjectURL(n)),e?.(n,w),s&&t?.(n),r.getTracks().forEach(e=>e.stop())},i.start(),y(!0),T(0),I.current=setInterval(()=>{T(e=>{let t=e+.1;return t>=n?(R(),n):t})},100)}catch(e){console.error(`Error starting recording:`,e),alert(`Error accessing microphone. Please check permissions.`)}},R=()=>{M.current&&_&&(M.current.stop(),y(!1),C(!1),I.current&&clearInterval(I.current))},z=()=>{M.current&&_&&(M.current.pause(),C(!0),I.current&&clearInterval(I.current))},B=()=>{M.current&&S&&(M.current.resume(),C(!1),I.current=setInterval(()=>{T(e=>{let t=e+.1;return t>=n?(R(),n):t})},100))},V=()=>{O&&F.current&&(F.current.play(),j(!0))},H=()=>{F.current&&(F.current.pause(),j(!1))},U=()=>{D(null),O&&(URL.revokeObjectURL(O),k(null)),T(0)},W=e=>`${Math.floor(e/60)}:${Math.floor(e%60).toString().padStart(2,`0`)}`;return(0,x.jsxs)(`div`,{ref:g,className:d(`w-full`,f),...m,children:[_&&(0,x.jsxs)(`div`,{className:`space-y-3`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,x.jsx)(p.div,{animate:{scale:[1,1.2,1]},transition:{duration:1,repeat:1/0},className:`w-3 h-3 bg-status-error rounded-full`}),(0,x.jsx)(`span`,{className:`text-sm font-medium text-text-primary`,children:W(w)})]}),(0,x.jsxs)(`div`,{className:`flex items-center gap-2`,children:[S?(0,x.jsx)(h,{variant:`ghost`,size:`sm`,onClick:B,children:(0,x.jsx)(o,{className:`w-4 h-4`})}):(0,x.jsx)(h,{variant:`ghost`,size:`sm`,onClick:z,children:(0,x.jsx)(l,{className:`w-4 h-4`})}),(0,x.jsx)(h,{variant:`ghost`,size:`sm`,onClick:R,children:(0,x.jsx)(i,{className:`w-4 h-4`})})]})]}),(0,x.jsx)(v,{value:w/n*100})]}),E&&!_&&(0,x.jsxs)(`div`,{className:`space-y-3`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-3`,children:[A?(0,x.jsx)(h,{variant:`ghost`,size:`sm`,onClick:H,children:(0,x.jsx)(l,{className:`w-4 h-4`})}):(0,x.jsx)(h,{variant:`ghost`,size:`sm`,onClick:V,children:(0,x.jsx)(o,{className:`w-4 h-4`})}),(0,x.jsx)(`span`,{className:`text-sm font-medium text-text-primary`,children:W(w)})]}),(0,x.jsxs)(`div`,{className:`flex items-center gap-2`,children:[t&&(0,x.jsx)(h,{variant:`primary`,size:`sm`,onClick:()=>t(E),children:(0,x.jsx)(a,{className:`w-4 h-4`})}),(0,x.jsx)(h,{variant:`ghost`,size:`sm`,onClick:U,children:(0,x.jsx)(c,{className:`w-4 h-4`})})]})]}),(0,x.jsx)(`audio`,{ref:F,src:O||void 0,onEnded:()=>j(!1),onTimeUpdate:e=>{let t=e.currentTarget;T(t.currentTime)}})]}),!_&&!E&&(0,x.jsx)(h,{variant:`primary`,size:`lg`,onClick:L,className:`w-full`,leftIcon:(0,x.jsx)(r,{className:`w-5 h-5`}),children:`Start Recording`})]})}),S.displayName=`VoiceRecorder`,S.__docgenInfo={description:``,methods:[],displayName:`VoiceRecorder`,props:{onRecordingComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(audioBlob: Blob, duration: number) => void`,signature:{arguments:[{type:{name:`Blob`},name:`audioBlob`},{type:{name:`number`},name:`duration`}],return:{name:`void`}}},description:``},onSend:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(audioBlob: Blob) => void`,signature:{arguments:[{type:{name:`Blob`},name:`audioBlob`}],return:{name:`void`}}},description:``},maxDuration:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`60`,computed:!1}},autoSend:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},showWaveform:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),w,T,E,D,O,k,A,j,M,N;e((()=>{C(),w=t(n()),T=f(),E={title:`Forms/VoiceRecorder`,component:S,tags:[`autodocs`]},D={args:{onRecordingComplete:e=>console.log(`Recording complete:`,e)}},O={render:()=>{let[e,t]=(0,w.useState)([]),[n,r]=(0,w.useState)(!1);return(0,T.jsxs)(`div`,{className:`space-y-4 max-w-sm`,children:[(0,T.jsx)(S,{onRecordingComplete:e=>{let n=URL.createObjectURL(e);t(e=>[...e,n]),r(!1)},onRecordingStateChange:r}),e.length>0&&(0,T.jsxs)(`div`,{className:`p-3 bg-surface-secondary rounded-lg space-y-3`,children:[(0,T.jsxs)(`h4`,{className:`text-xs font-semibold text-text-secondary`,children:[`Recordings (`,e.length,`)`]}),e.map((e,t)=>(0,T.jsxs)(`div`,{className:`space-y-1`,children:[(0,T.jsxs)(`p`,{className:`text-xs text-text-secondary`,children:[`Recording #`,t+1]}),(0,T.jsx)(`audio`,{src:e,controls:!0,className:`w-full h-8`})]},t))]})]})}},k={parameters:{themes:{themeOverride:`dark`}},args:{onRecordingComplete:e=>console.log(`Recording complete:`,e)}},A={parameters:{viewport:{defaultViewport:`mobile1`}}},j={parameters:{docs:{description:{story:`VoiceRecorder in a loading state, showing placeholder UI while audio data is being processed.`}}}},M={parameters:{docs:{description:{story:`VoiceRecorder used in a fintech context for voice memo transactions or support recording.`}}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    onRecordingComplete: blob => console.log('Recording complete:', blob)
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    onRecordingComplete: blob => console.log('Recording complete:', blob)
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'VoiceRecorder in a loading state, showing placeholder UI while audio data is being processed.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'VoiceRecorder used in a fintech context for voice memo transactions or support recording.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`InteractiveRecorder`,`DarkMode`,`MobileView`,`LoadingState`,`FintechUseCase`]}))();export{k as DarkMode,D as Default,M as FintechUseCase,O as InteractiveRecorder,j as LoadingState,A as MobileView,N as __namedExportsOrder,E as default};