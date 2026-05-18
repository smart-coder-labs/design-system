import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-XNVef-eS.js";import{t as r}from"./jsx-runtime-DaLCRA3n.js";import{n as i,t as a}from"./Progress-D4pRGV2c.js";var o,s,c,l,u,d;e((()=>{i(),o=t(n()),s=r(),c={title:`Feedback/Progress`,component:a,tags:[],argTypes:{value:{control:{type:`range`,min:0,max:100}}}},l={args:{value:60}},u={render:()=>{let[e,t]=(0,o.useState)(13);return(0,o.useEffect)(()=>{let e=setTimeout(()=>t(66),500);return()=>clearTimeout(e)},[]),(0,s.jsx)(a,{value:e,className:`w-[60%]`})}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(13);
    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500);
      return () => clearTimeout(timer);
    }, []);
    return <Progress value={progress} className="w-[60%]" />;
  }
}`,...u.parameters?.docs?.source}}},d=[`Default`,`Animated`]}))();export{u as Animated,l as Default,d as __namedExportsOrder,c as default};