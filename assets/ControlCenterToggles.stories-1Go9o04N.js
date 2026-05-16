import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-jtk2jlYO.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{s as o,t as s}from"./es-DLZWAS6t.js";import{Cr as c,Lr as l,a as u,l as d,t as f,wt as p,xr as m}from"./lucide-react-LrcM5b-z.js";var h,g,_,v=e((()=>{h=t(n()),r(),g=a(),s(),_=h.forwardRef(({controls:e,layout:t=`grid`,className:n,...r},a)=>{let s=t===`grid`;return(0,g.jsx)(`div`,{ref:a,className:i(s?`grid grid-cols-3 gap-3`:`flex flex-col gap-2`,n),...r,children:e.map((e,t)=>(0,g.jsxs)(o.button,{onClick:()=>!e.disabled&&e.onToggle(!e.enabled),disabled:e.disabled,className:i(`relative flex flex-col items-center justify-center gap-2 p-4 rounded-xl`,`bg-surface-primary border border-border-primary`,`hover:bg-surface-secondary transition-colors`,`focus:outline-none focus:ring-2 focus:ring-accent-blue`,e.disabled&&`opacity-40 cursor-not-allowed`,s&&`aspect-square`),initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{delay:t*.05},whileHover:e.disabled?{}:{scale:1.02},whileTap:e.disabled?{}:{scale:.98},children:[(0,g.jsx)(`div`,{className:i(`flex items-center justify-center`,e.enabled?`text-accent-blue`:`text-text-tertiary`),children:e.icon}),(0,g.jsx)(`span`,{className:i(`text-xs font-medium text-center`,e.enabled?`text-text-primary`:`text-text-secondary`),children:e.label}),e.showValue&&e.value!==void 0&&(0,g.jsx)(`span`,{className:`text-xs text-text-tertiary`,children:e.value}),s&&e.enabled&&(0,g.jsx)(o.div,{className:`absolute top-2 right-2 w-2 h-2 bg-accent-blue rounded-full`,initial:{scale:0},animate:{scale:1}})]},e.id))})}),_.displayName=`ControlCenterToggles`,_.__docgenInfo={description:``,methods:[],displayName:`ControlCenterToggles`,props:{controls:{required:!0,tsType:{name:`Array`,elements:[{name:`ToggleControl`}],raw:`ToggleControl[]`},description:``},layout:{required:!1,tsType:{name:`union`,raw:`'grid' | 'list'`,elements:[{name:`literal`,value:`'grid'`},{name:`literal`,value:`'list'`}]},description:``,defaultValue:{value:`'grid'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{v(),f(),y=t(n()),b=a(),x={title:`Surfaces/ControlCenterToggles`,component:_,parameters:{layout:`centered`},tags:[`autodocs`]},S=[{id:`wifi`,label:`Wi-Fi`,icon:(0,b.jsx)(u,{className:`w-5 h-5`}),enabled:!0,onToggle:e=>console.log(`Wi-Fi:`,e),value:`Home Network`,showValue:!0},{id:`bluetooth`,label:`Bluetooth`,icon:(0,b.jsx)(m,{className:`w-5 h-5`}),enabled:!0,onToggle:e=>console.log(`Bluetooth:`,e)},{id:`dark-mode`,label:`Dark Mode`,icon:(0,b.jsx)(p,{className:`w-5 h-5`}),enabled:!1,onToggle:e=>console.log(`Dark Mode:`,e)},{id:`volume`,label:`Volume`,icon:(0,b.jsx)(d,{className:`w-5 h-5`}),enabled:!0,onToggle:e=>console.log(`Volume:`,e),value:`75%`,showValue:!0},{id:`airplay`,label:`AirPlay`,icon:(0,b.jsx)(l,{className:`w-5 h-5`}),enabled:!1,onToggle:e=>console.log(`AirPlay:`,e)},{id:`battery`,label:`Battery`,icon:(0,b.jsx)(c,{className:`w-5 h-5`}),enabled:!0,onToggle:e=>console.log(`Battery:`,e),value:`85%`,showValue:!0,disabled:!0}],C={args:{controls:S,layout:`grid`}},w={args:{controls:S,layout:`list`}},T={args:{controls:S},render:()=>{let[e,t]=(0,y.useState)(S),n=(e,n)=>{t(t=>t.map(t=>t.id===e?{...t,enabled:n}:t))};return(0,b.jsx)(_,{controls:e.map(e=>({...e,onToggle:t=>n(e.id,t)})),layout:`grid`})}},E={args:{controls:[{id:`wifi`,label:`Wi-Fi`,icon:(0,b.jsx)(u,{className:`w-5 h-5`}),enabled:!0,onToggle:e=>console.log(`Wi-Fi:`,e)},{id:`bluetooth`,label:`Bluetooth`,icon:(0,b.jsx)(m,{className:`w-5 h-5`}),enabled:!1,onToggle:e=>console.log(`Bluetooth:`,e)},{id:`dark-mode`,label:`Dark Mode`,icon:(0,b.jsx)(p,{className:`w-5 h-5`}),enabled:!0,onToggle:e=>console.log(`Dark Mode:`,e)}],layout:`grid`}},D={args:{controls:S.map(e=>({...e,disabled:!0,enabled:!1})),layout:`grid`}},O={args:{controls:S.map(e=>({...e,enabled:!0})),layout:`grid`}},k={args:{controls:S,layout:`grid`},decorators:[e=>(0,b.jsx)(`div`,{className:`max-w-sm mx-auto`,children:(0,b.jsx)(e,{})})]},A={args:{controls:S,layout:`list`},decorators:[e=>(0,b.jsx)(`div`,{className:`max-w-sm mx-auto`,children:(0,b.jsx)(e,{})})]},j={args:{controls:[...S,{id:`hotspot`,label:`Hotspot`,icon:(0,b.jsx)(u,{className:`w-5 h-5`}),enabled:!1,onToggle:()=>{}},{id:`vpn`,label:`VPN`,icon:(0,b.jsx)(p,{className:`w-5 h-5`}),enabled:!0,onToggle:()=>{}},{id:`nfc`,label:`NFC`,icon:(0,b.jsx)(c,{className:`w-5 h-5`}),enabled:!0,onToggle:()=>{}},{id:`location`,label:`Location`,icon:(0,b.jsx)(l,{className:`w-5 h-5`}),enabled:!1,onToggle:()=>{}},{id:`rotation`,label:`Rotation`,icon:(0,b.jsx)(d,{className:`w-5 h-5`}),enabled:!0,onToggle:()=>{}},{id:`flashlight`,label:`Flashlight`,icon:(0,b.jsx)(c,{className:`w-5 h-5`}),enabled:!1,onToggle:()=>{}}],layout:`grid`}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    controls: defaultControls,
    layout: 'grid'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    controls: defaultControls,
    layout: 'list'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    controls: defaultControls.map(c => ({
      ...c,
      disabled: true,
      enabled: false
    })),
    layout: 'grid'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    controls: defaultControls.map(c => ({
      ...c,
      enabled: true
    })),
    layout: 'grid'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    controls: defaultControls,
    layout: 'grid'
  },
  decorators: [Story => <div className="max-w-sm mx-auto">
                <Story />
            </div>]
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    controls: defaultControls,
    layout: 'list'
  },
  decorators: [Story => <div className="max-w-sm mx-auto">
                <Story />
            </div>]
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    controls: [...defaultControls, {
      id: 'hotspot',
      label: 'Hotspot',
      icon: <Wifi className="w-5 h-5" />,
      enabled: false,
      onToggle: () => {}
    }, {
      id: 'vpn',
      label: 'VPN',
      icon: <Moon className="w-5 h-5" />,
      enabled: true,
      onToggle: () => {}
    }, {
      id: 'nfc',
      label: 'NFC',
      icon: <Battery className="w-5 h-5" />,
      enabled: true,
      onToggle: () => {}
    }, {
      id: 'location',
      label: 'Location',
      icon: <Airplay className="w-5 h-5" />,
      enabled: false,
      onToggle: () => {}
    }, {
      id: 'rotation',
      label: 'Rotation',
      icon: <Volume2 className="w-5 h-5" />,
      enabled: true,
      onToggle: () => {}
    }, {
      id: 'flashlight',
      label: 'Flashlight',
      icon: <Battery className="w-5 h-5" />,
      enabled: false,
      onToggle: () => {}
    }],
    layout: 'grid'
  }
}`,...j.parameters?.docs?.source}}},M=[`GridLayout`,`ListLayout`,`Interactive`,`MinimalControls`,`AllDisabled`,`AllEnabled`,`MobileGrid`,`MobileList`,`ManyControls`]}))();export{D as AllDisabled,O as AllEnabled,C as GridLayout,T as Interactive,w as ListLayout,j as ManyControls,E as MinimalControls,k as MobileGrid,A as MobileList,M as __namedExportsOrder,x as default};