import{j as m}from"./jsx-runtime-u17CrQMm.js";import{P as t}from"./Progress-BKgW0WoI.js";import{r as s}from"./iframe-vYzePaRW.js";import"./utils-CDN07tui.js";import"./proxy-DMGrdN83.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"Feedback/Progress",component:t,tags:[],argTypes:{value:{control:{type:"range",min:0,max:100}}}},e={args:{value:60}},r={render:()=>{const[o,a]=s.useState(13);return s.useEffect(()=>{const n=setTimeout(()=>a(66),500);return()=>clearTimeout(n)},[]),m.jsx(t,{value:o,className:"w-[60%]"})}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(13);
    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);
    return <Progress value={progress} className="w-[60%]" />;
  }
}`,...r.parameters?.docs?.source}}};const f=["Default","Animated"];export{r as Animated,e as Default,f as __namedExportsOrder,d as default};
