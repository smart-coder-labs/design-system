import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as X,r as a}from"./iframe-B-5hg53G.js";import{c as Y}from"./utils-CDN07tui.js";import{B as l}from"./Button-Dumis5Wa.js";import{P as Z}from"./Progress-v_Sepi_0.js";import{m as ee}from"./proxy-BFtQK4Qy.js";import{P as E}from"./play-ByjEZANU.js";import{P as V}from"./pause-BlrOK2Pz.js";import{S as oe}from"./square-g1gmyFqk.js";import{S as ne}from"./send-BhSI7luI.js";import{T as re}from"./trash-2-DUrD0Ve1.js";import{M as se}from"./mic-M6Xa0eUS.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-CJTSccXv.js";const f=X.forwardRef(({onRecordingComplete:n,onSend:o,maxDuration:r=60,autoSend:R=!1,showWaveform:ae=!0,className:q,...M},$)=>{const[m,I]=a.useState(!1),[P,N]=a.useState(!1),[h,p]=a.useState(0),[k,U]=a.useState(null),[d,A]=a.useState(null),[F,z]=a.useState(!1),u=a.useRef(null),D=a.useRef([]),W=a.useRef(null),g=a.useRef(null),c=a.useRef(null);a.useEffect(()=>()=>{c.current&&clearInterval(c.current),W.current&&W.current.getTracks().forEach(s=>s.stop()),d&&URL.revokeObjectURL(d)},[d]);const O=async()=>{try{const s=await navigator.mediaDevices.getUserMedia({audio:!0});W.current=s;const t=new MediaRecorder(s);u.current=t,D.current=[],t.ondataavailable=i=>{i.data.size>0&&D.current.push(i.data)},t.onstop=()=>{const i=new Blob(D.current,{type:"audio/webm"});U(i);const b=URL.createObjectURL(i);A(b),n?.(i,h),R&&o?.(i),s.getTracks().forEach(J=>J.stop())},t.start(),I(!0),p(0),c.current=setInterval(()=>{p(i=>{const b=i+.1;return b>=r?(T(),r):b})},100)}catch(s){console.error("Error starting recording:",s),alert("Error accessing microphone. Please check permissions.")}},T=()=>{u.current&&m&&(u.current.stop(),I(!1),N(!1),c.current&&clearInterval(c.current))},Q=()=>{u.current&&m&&(u.current.pause(),N(!0),c.current&&clearInterval(c.current))},_=()=>{u.current&&P&&(u.current.resume(),N(!1),c.current=setInterval(()=>{p(s=>{const t=s+.1;return t>=r?(T(),r):t})},100))},K=()=>{d&&g.current&&(g.current.play(),z(!0))},G=()=>{g.current&&(g.current.pause(),z(!1))},H=()=>{U(null),d&&(URL.revokeObjectURL(d),A(null)),p(0)},L=s=>{const t=Math.floor(s/60),i=Math.floor(s%60);return`${t}:${i.toString().padStart(2,"0")}`};return e.jsxs("div",{ref:$,className:Y("w-full",q),...M,children:[m&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(ee.div,{animate:{scale:[1,1.2,1]},transition:{duration:1,repeat:1/0},className:"w-3 h-3 bg-status-error rounded-full"}),e.jsx("span",{className:"text-sm font-medium text-text-primary",children:L(h)})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[P?e.jsx(l,{variant:"ghost",size:"sm",onClick:_,children:e.jsx(E,{className:"w-4 h-4"})}):e.jsx(l,{variant:"ghost",size:"sm",onClick:Q,children:e.jsx(V,{className:"w-4 h-4"})}),e.jsx(l,{variant:"ghost",size:"sm",onClick:T,children:e.jsx(oe,{className:"w-4 h-4"})})]})]}),e.jsx(Z,{value:h/r*100})]}),k&&!m&&e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[F?e.jsx(l,{variant:"ghost",size:"sm",onClick:G,children:e.jsx(V,{className:"w-4 h-4"})}):e.jsx(l,{variant:"ghost",size:"sm",onClick:K,children:e.jsx(E,{className:"w-4 h-4"})}),e.jsx("span",{className:"text-sm font-medium text-text-primary",children:L(h)})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[o&&e.jsx(l,{variant:"primary",size:"sm",onClick:()=>o(k),children:e.jsx(ne,{className:"w-4 h-4"})}),e.jsx(l,{variant:"ghost",size:"sm",onClick:H,children:e.jsx(re,{className:"w-4 h-4"})})]})]}),e.jsx("audio",{ref:g,src:d||void 0,onEnded:()=>z(!1),onTimeUpdate:s=>{const t=s.currentTarget;p(t.currentTime)}})]}),!m&&!k&&e.jsx(l,{variant:"primary",size:"lg",onClick:O,className:"w-full",leftIcon:e.jsx(se,{className:"w-5 h-5"}),children:"Start Recording"})]})});f.displayName="VoiceRecorder";f.__docgenInfo={description:"",methods:[],displayName:"VoiceRecorder",props:{onRecordingComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"(audioBlob: Blob, duration: number) => void",signature:{arguments:[{type:{name:"Blob"},name:"audioBlob"},{type:{name:"number"},name:"duration"}],return:{name:"void"}}},description:""},onSend:{required:!1,tsType:{name:"signature",type:"function",raw:"(audioBlob: Blob) => void",signature:{arguments:[{type:{name:"Blob"},name:"audioBlob"}],return:{name:"void"}}},description:""},maxDuration:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"60",computed:!1}},autoSend:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showWaveform:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const Se={title:"Components/VoiceRecorder",component:f,parameters:{layout:"centered"},tags:["autodocs"]},x={args:{onRecordingComplete:(n,o)=>{console.log("Recording complete:",{audioBlob:n,duration:o})}}},S={args:{autoSend:!0,onSend:n=>{console.log("Sending audio:",n),alert("Audio sent!")},onRecordingComplete:(n,o)=>{console.log("Recording complete:",{audioBlob:n,duration:o})}}},v={args:{maxDuration:30,onRecordingComplete:(n,o)=>{console.log("Recording complete:",{audioBlob:n,duration:o}),alert(`Recording stopped at ${o} seconds`)}}},y={args:{showWaveform:!1,onRecordingComplete:(n,o)=>{console.log("Recording complete:",{audioBlob:n,duration:o})}}},B={render:()=>{const n=(r,R)=>{console.log("Recording completed:",{size:r.size,type:r.type,duration:R}),alert(`Recording completed! Duration: ${R}s, Size: ${(r.size/1024).toFixed(2)}KB`)},o=r=>{console.log("Sending audio:",r),alert("Audio message sent successfully!")};return e.jsx(f,{onRecordingComplete:n,onSend:o,maxDuration:60,showWaveform:!0})}},j={args:{maxDuration:10,autoSend:!0,onSend:n=>{console.log("Quick message sent:",n)},onRecordingComplete:(n,o)=>{console.log("Quick recording:",{audioBlob:n,duration:o})}}},w={args:{maxDuration:300,showWaveform:!0,onRecordingComplete:(n,o)=>{console.log("Long recording complete:",{audioBlob:n,duration:o})}}},C={render:()=>{const n=o=>{new FormData().append("audio",o,"recording.webm"),console.log("Uploading audio...",{size:o.size,type:o.type}),alert("Audio uploaded successfully!")};return e.jsx(f,{onSend:n,onRecordingComplete:(o,r)=>{console.log("Recording ready:",{duration:r})}})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    onRecordingComplete: (audioBlob, duration) => {
      console.log('Recording complete:', {
        audioBlob,
        duration
      });
    }
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    autoSend: true,
    onSend: audioBlob => {
      console.log('Sending audio:', audioBlob);
      alert('Audio sent!');
    },
    onRecordingComplete: (audioBlob, duration) => {
      console.log('Recording complete:', {
        audioBlob,
        duration
      });
    }
  }
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    maxDuration: 30,
    // 30 seconds
    onRecordingComplete: (audioBlob, duration) => {
      console.log('Recording complete:', {
        audioBlob,
        duration
      });
      alert(\`Recording stopped at \${duration} seconds\`);
    }
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    showWaveform: false,
    onRecordingComplete: (audioBlob, duration) => {
      console.log('Recording complete:', {
        audioBlob,
        duration
      });
    }
  }
}`,...y.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleRecordingComplete = (audioBlob: Blob, duration: number) => {
      console.log('Recording completed:', {
        size: audioBlob.size,
        type: audioBlob.type,
        duration
      });
      alert(\`Recording completed! Duration: \${duration}s, Size: \${(audioBlob.size / 1024).toFixed(2)}KB\`);
    };
    const handleSend = (audioBlob: Blob) => {
      console.log('Sending audio:', audioBlob);
      alert('Audio message sent successfully!');
    };
    return <VoiceRecorder onRecordingComplete={handleRecordingComplete} onSend={handleSend} maxDuration={60} showWaveform={true} />;
  }
}`,...B.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    maxDuration: 10,
    // 10 seconds for quick messages
    autoSend: true,
    onSend: audioBlob => {
      console.log('Quick message sent:', audioBlob);
    },
    onRecordingComplete: (audioBlob, duration) => {
      console.log('Quick recording:', {
        audioBlob,
        duration
      });
    }
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    maxDuration: 300,
    // 5 minutes
    showWaveform: true,
    onRecordingComplete: (audioBlob, duration) => {
      console.log('Long recording complete:', {
        audioBlob,
        duration
      });
    }
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleSend = (audioBlob: Blob) => {
      // Simulate upload
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recording.webm');
      console.log('Uploading audio...', {
        size: audioBlob.size,
        type: audioBlob.type
      });
      alert('Audio uploaded successfully!');
    };
    return <VoiceRecorder onSend={handleSend} onRecordingComplete={(blob, duration) => {
      console.log('Recording ready:', {
        duration
      });
    }} />;
  }
}`,...C.parameters?.docs?.source}}};const ve=["Default","WithAutoSend","WithMaxDuration","WithoutWaveform","Interactive","ShortRecording","LongRecording","WithSendCallback"];export{x as Default,B as Interactive,w as LongRecording,j as ShortRecording,S as WithAutoSend,v as WithMaxDuration,C as WithSendCallback,y as WithoutWaveform,ve as __namedExportsOrder,Se as default};
