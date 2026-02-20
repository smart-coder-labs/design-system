import{j as a}from"./jsx-runtime-u17CrQMm.js";import{R as T,r as N}from"./iframe-BMG7cCGY.js";import{c as r}from"./utils-CDN07tui.js";import{m as h}from"./proxy-BFHmY9N3.js";import{c as g}from"./createLucideIcon-11Koirjv.js";import{M as y}from"./moon-DI18RwlA.js";import{V as C}from"./volume-2-B2qs6gw3.js";import"./preload-helper-PPVm8Dsz.js";const m=T.forwardRef(({controls:e,layout:p="grid",className:b,...l},t)=>{const s=p==="grid";return a.jsx("div",{ref:t,className:r(s?"grid grid-cols-3 gap-3":"flex flex-col gap-2",b),...l,children:e.map((o,w)=>a.jsxs(h.button,{onClick:()=>!o.disabled&&o.onToggle(!o.enabled),disabled:o.disabled,className:r("relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl","bg-surface-primary border border-border-primary","hover:bg-surface-secondary transition-colors","focus:outline-none focus:ring-2 focus:ring-accent-blue",o.disabled&&"opacity-40 cursor-not-allowed",s&&"aspect-square"),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:w*.05},whileHover:o.disabled?{}:{scale:1.02},whileTap:o.disabled?{}:{scale:.98},children:[a.jsx("div",{className:r("flex items-center justify-center",o.enabled?"text-accent-blue":"text-text-tertiary"),children:o.icon}),a.jsx("span",{className:r("text-xs font-medium text-center",o.enabled?"text-text-primary":"text-text-secondary"),children:o.label}),o.showValue&&o.value!==void 0&&a.jsx("span",{className:"text-xs text-text-tertiary",children:o.value}),s&&o.enabled&&a.jsx(h.div,{className:"absolute top-2 right-2 w-2 h-2 bg-accent-blue rounded-full",initial:{scale:0},animate:{scale:1}})]},o.id))})});m.displayName="ControlCenterToggles";m.__docgenInfo={description:"",methods:[],displayName:"ControlCenterToggles",props:{controls:{required:!0,tsType:{name:"Array",elements:[{name:"ToggleControl"}],raw:"ToggleControl[]"},description:""},layout:{required:!1,tsType:{name:"union",raw:"'grid' | 'list'",elements:[{name:"literal",value:"'grid'"},{name:"literal",value:"'list'"}]},description:"",defaultValue:{value:"'grid'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const k=[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]],v=g("airplay",k);const j=[["path",{d:"M 22 14 L 22 10",key:"nqc4tb"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2",key:"13zb55"}]],M=g("battery",j);const _=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]],f=g("bluetooth",_);const B=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],x=g("wifi",B),H={title:"Components/ControlCenterToggles",component:m,parameters:{layout:"centered"},tags:["autodocs"]},u=[{id:"wifi",label:"Wi-Fi",icon:a.jsx(x,{className:"w-5 h-5"}),enabled:!0,onToggle:e=>console.log("Wi-Fi:",e),value:"Home Network",showValue:!0},{id:"bluetooth",label:"Bluetooth",icon:a.jsx(f,{className:"w-5 h-5"}),enabled:!0,onToggle:e=>console.log("Bluetooth:",e)},{id:"dark-mode",label:"Dark Mode",icon:a.jsx(y,{className:"w-5 h-5"}),enabled:!1,onToggle:e=>console.log("Dark Mode:",e)},{id:"volume",label:"Volume",icon:a.jsx(C,{className:"w-5 h-5"}),enabled:!0,onToggle:e=>console.log("Volume:",e),value:"75%",showValue:!0},{id:"airplay",label:"AirPlay",icon:a.jsx(v,{className:"w-5 h-5"}),enabled:!1,onToggle:e=>console.log("AirPlay:",e)},{id:"battery",label:"Battery",icon:a.jsx(M,{className:"w-5 h-5"}),enabled:!0,onToggle:e=>console.log("Battery:",e),value:"85%",showValue:!0,disabled:!0}],n={args:{controls:u,layout:"grid"}},i={args:{controls:u,layout:"list"}},d={args:{controls:u},render:()=>{const[e,p]=N.useState(u),b=(l,t)=>{p(s=>s.map(o=>o.id===l?{...o,enabled:t}:o))};return a.jsx(m,{controls:e.map(l=>({...l,onToggle:t=>b(l.id,t)})),layout:"grid"})}},c={args:{controls:[{id:"wifi",label:"Wi-Fi",icon:a.jsx(x,{className:"w-5 h-5"}),enabled:!0,onToggle:e=>console.log("Wi-Fi:",e)},{id:"bluetooth",label:"Bluetooth",icon:a.jsx(f,{className:"w-5 h-5"}),enabled:!1,onToggle:e=>console.log("Bluetooth:",e)},{id:"dark-mode",label:"Dark Mode",icon:a.jsx(y,{className:"w-5 h-5"}),enabled:!0,onToggle:e=>console.log("Dark Mode:",e)}],layout:"grid"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    controls: defaultControls,
    layout: 'grid'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    controls: defaultControls,
    layout: 'list'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    controls: defaultControls
  },
  render: () => {
    const [controls, setControls] = useState(defaultControls);
    const handleToggle = (id: string, enabled: boolean) => {
      setControls(prev => prev.map(control => control.id === id ? {
        ...control,
        enabled
      } : control));
    };
    return <ControlCenterToggles controls={controls.map(control => ({
      ...control,
      onToggle: enabled => handleToggle(control.id, enabled)
    }))} layout="grid" />;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    controls: [{
      id: 'wifi',
      label: 'Wi-Fi',
      icon: <Wifi className="w-5 h-5" />,
      enabled: true,
      onToggle: (enabled: boolean) => console.log('Wi-Fi:', enabled)
    }, {
      id: 'bluetooth',
      label: 'Bluetooth',
      icon: <Bluetooth className="w-5 h-5" />,
      enabled: false,
      onToggle: (enabled: boolean) => console.log('Bluetooth:', enabled)
    }, {
      id: 'dark-mode',
      label: 'Dark Mode',
      icon: <Moon className="w-5 h-5" />,
      enabled: true,
      onToggle: (enabled: boolean) => console.log('Dark Mode:', enabled)
    }],
    layout: 'grid'
  }
}`,...c.parameters?.docs?.source}}};const I=["GridLayout","ListLayout","Interactive","MinimalControls"];export{n as GridLayout,d as Interactive,i as ListLayout,c as MinimalControls,I as __namedExportsOrder,H as default};
