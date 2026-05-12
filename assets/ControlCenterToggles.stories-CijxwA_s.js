import{j as a}from"./jsx-runtime-u17CrQMm.js";import{R as w,r as N}from"./iframe-CSCYuKHF.js";import{c as r}from"./utils-DCADjnpI.js";import{m as h}from"./proxy-DgdbOAE3.js";import{W as y}from"./wifi-DPOU-I7A.js";import{c as b}from"./createLucideIcon-BvoP2Q-9.js";import{M as f}from"./moon-CHumgqgR.js";import{V as C}from"./volume-2-CYoUemNO.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-BeIloL1I.js";const v=[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]],j=b("airplay",v);const k=[["path",{d:"M 22 14 L 22 10",key:"nqc4tb"}],["rect",{x:"2",y:"6",width:"16",height:"12",rx:"2",key:"13zb55"}]],M=b("battery",k);const B=[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]],x=b("bluetooth",B),g=w.forwardRef(({controls:e,layout:m="grid",className:p,...l},t)=>{const s=m==="grid";return a.jsx("div",{ref:t,className:r(s?"grid grid-cols-3 gap-3":"flex flex-col gap-2",p),...l,children:e.map((o,T)=>a.jsxs(h.button,{onClick:()=>!o.disabled&&o.onToggle(!o.enabled),disabled:o.disabled,className:r("relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl","bg-surface-primary border border-border-primary","hover:bg-surface-secondary transition-colors","focus:outline-none focus:ring-2 focus:ring-accent-blue",o.disabled&&"opacity-40 cursor-not-allowed",s&&"aspect-square"),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:T*.05},whileHover:o.disabled?{}:{scale:1.02},whileTap:o.disabled?{}:{scale:.98},children:[a.jsx("div",{className:r("flex items-center justify-center",o.enabled?"text-accent-blue":"text-text-tertiary"),children:o.icon}),a.jsx("span",{className:r("text-xs font-medium text-center",o.enabled?"text-text-primary":"text-text-secondary"),children:o.label}),o.showValue&&o.value!==void 0&&a.jsx("span",{className:"text-xs text-text-tertiary",children:o.value}),s&&o.enabled&&a.jsx(h.div,{className:"absolute top-2 right-2 w-2 h-2 bg-accent-blue rounded-full",initial:{scale:0},animate:{scale:1}})]},o.id))})});g.displayName="ControlCenterToggles";g.__docgenInfo={description:"",methods:[],displayName:"ControlCenterToggles",props:{controls:{required:!0,tsType:{name:"Array",elements:[{name:"ToggleControl"}],raw:"ToggleControl[]"},description:""},layout:{required:!1,tsType:{name:"union",raw:"'grid' | 'list'",elements:[{name:"literal",value:"'grid'"},{name:"literal",value:"'list'"}]},description:"",defaultValue:{value:"'grid'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"Components/ControlCenterToggles",component:g,parameters:{layout:"centered"},tags:["autodocs"]},u=[{id:"wifi",label:"Wi-Fi",icon:a.jsx(y,{className:"w-5 h-5"}),enabled:!0,onToggle:e=>console.log("Wi-Fi:",e),value:"Home Network",showValue:!0},{id:"bluetooth",label:"Bluetooth",icon:a.jsx(x,{className:"w-5 h-5"}),enabled:!0,onToggle:e=>console.log("Bluetooth:",e)},{id:"dark-mode",label:"Dark Mode",icon:a.jsx(f,{className:"w-5 h-5"}),enabled:!1,onToggle:e=>console.log("Dark Mode:",e)},{id:"volume",label:"Volume",icon:a.jsx(C,{className:"w-5 h-5"}),enabled:!0,onToggle:e=>console.log("Volume:",e),value:"75%",showValue:!0},{id:"airplay",label:"AirPlay",icon:a.jsx(j,{className:"w-5 h-5"}),enabled:!1,onToggle:e=>console.log("AirPlay:",e)},{id:"battery",label:"Battery",icon:a.jsx(M,{className:"w-5 h-5"}),enabled:!0,onToggle:e=>console.log("Battery:",e),value:"85%",showValue:!0,disabled:!0}],n={args:{controls:u,layout:"grid"}},i={args:{controls:u,layout:"list"}},d={args:{controls:u},render:()=>{const[e,m]=N.useState(u),p=(l,t)=>{m(s=>s.map(o=>o.id===l?{...o,enabled:t}:o))};return a.jsx(g,{controls:e.map(l=>({...l,onToggle:t=>p(l.id,t)})),layout:"grid"})}},c={args:{controls:[{id:"wifi",label:"Wi-Fi",icon:a.jsx(y,{className:"w-5 h-5"}),enabled:!0,onToggle:e=>console.log("Wi-Fi:",e)},{id:"bluetooth",label:"Bluetooth",icon:a.jsx(x,{className:"w-5 h-5"}),enabled:!1,onToggle:e=>console.log("Bluetooth:",e)},{id:"dark-mode",label:"Dark Mode",icon:a.jsx(f,{className:"w-5 h-5"}),enabled:!0,onToggle:e=>console.log("Dark Mode:",e)}],layout:"grid"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const R=["GridLayout","ListLayout","Interactive","MinimalControls"];export{n as GridLayout,d as Interactive,i as ListLayout,c as MinimalControls,R as __namedExportsOrder,I as default};
