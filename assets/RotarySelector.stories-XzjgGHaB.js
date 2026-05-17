import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Bjuc5Sdq.js";import{n as r,t as i}from"./utils-ijcE-ZHT.js";import{t as a}from"./jsx-runtime-DaLCRA3n.js";import{l as o,s,t as c}from"./es-DMOnxf6X.js";var l,u,d,f=e((()=>{l=t(n()),c(),r(),u=a(),d=l.forwardRef(({options:e,value:t,onChange:n,size:r=`md`,showLabel:a=!0,disabled:c=!1,className:d=``},f)=>{let p=l.useRef(null);l.useImperativeHandle(f,()=>p.current);let[m,h]=l.useState(!1),[g,_]=l.useState(()=>{let n=e.findIndex(e=>e.value===t);return n>=0?n:0});l.useEffect(()=>{if(t!==void 0){let n=e.findIndex(e=>e.value===t);n!==-1&&n!==g&&_(n)}},[t,e,g]);let{container:v,center:y,option:b,posRadius:x}={sm:{container:`w-64 h-64`,center:`w-24 h-24`,option:`w-10 h-10 text-xs`,posRadius:90},md:{container:`w-96 h-96`,center:`w-32 h-32`,option:`w-14 h-14 text-sm`,posRadius:135},lg:{container:`w-[32rem] h-[32rem]`,center:`w-40 h-40`,option:`w-16 h-16 text-base`,posRadius:180}}[r],S=360/e.length,C=t=>{if(!m||!p.current)return;let r=p.current.getBoundingClientRect(),i=r.left+r.width/2,a=r.top+r.height/2,o=t.clientX-i,s=t.clientY-a,c=Math.atan2(s,o)*180/Math.PI;c=(c+450)%360;let l=Math.round(c/S)%e.length;l!==g&&!e[l]?.disabled&&(_(l),n?.(e[l].value,e[l]))};l.useEffect(()=>(m?(window.addEventListener(`pointermove`,C),window.addEventListener(`pointerup`,()=>h(!1),{once:!0})):window.removeEventListener(`pointermove`,C),()=>{window.removeEventListener(`pointermove`,C)}),[m]);let w=e[g];return(0,u.jsxs)(`div`,{ref:p,className:i(`relative flex items-center justify-center select-none`,v,c&&`opacity-50 grayscale`,d),children:[e.map((e,t)=>{let r=(t*S-90)*(Math.PI/180),a=Math.cos(r)*x,o=Math.sin(r)*x,l=t===g;return(0,u.jsxs)(s.button,{onClick:()=>{!e.disabled&&!c&&(_(t),n?.(e.value,e))},disabled:c||e.disabled,className:i(`absolute rounded-full flex items-center justify-center transition-all duration-300`,b,l?`bg-accent-blue text-white shadow-[0_0_20px_rgba(0,122,255,0.4)] scale-110 z-10`:`bg-surface-elevated/80 backdrop-blur-md text-text-secondary hover:bg-surface-elevated hover:text-text-primary`,e.disabled&&`opacity-30 cursor-not-allowed`),style:{left:`calc(50% + ${a}px)`,top:`calc(50% + ${o}px)`,transform:`translate(-50%, -50%)`},children:[e.icon?(0,u.jsx)(`span`,{className:`text-xl`,children:e.icon}):(0,u.jsx)(`span`,{className:`font-semibold`,children:e.label}),l&&(0,u.jsx)(s.div,{layoutId:`active-glow`,className:`absolute inset-0 rounded-full ring-2 ring-white/30`})]},e.id)}),(0,u.jsxs)(s.div,{className:i(`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex flex-col items-center justify-center bg-surface-elevated/90 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.12)] z-20`,y),onPointerDown:()=>!c&&h(!0),animate:{scale:m?.96:1},children:[(0,u.jsx)(o,{mode:`wait`,children:w?.icon&&(0,u.jsx)(s.div,{initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},className:`text-3xl text-accent-blue mb-1`,children:w.icon},w.id)}),a&&(0,u.jsxs)(`div`,{className:`flex flex-col items-center text-center`,children:[(0,u.jsx)(`span`,{className:`text-xs font-semibold text-text-primary`,children:w?.label}),(0,u.jsx)(`span`,{className:`text-[10px] text-text-tertiary font-medium`,children:w?.value})]})]})]})}),d.displayName=`RotarySelector`,d.__docgenInfo={description:``,methods:[],displayName:`RotarySelector`,props:{options:{required:!0,tsType:{name:`Array`,elements:[{name:`RotarySelectorOption`}],raw:`RotarySelectorOption[]`},description:``},value:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string | number, option: RotarySelectorOption) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},name:`value`},{type:{name:`RotarySelectorOption`},name:`option`}],return:{name:`void`}}},description:``},size:{required:!1,tsType:{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]},description:``,defaultValue:{value:`"md"`,computed:!1}},showLabel:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},hapticFeedback:{required:!1,tsType:{name:`boolean`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`""`,computed:!1}}}}})),p,m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{f(),p=t(n()),m=a(),h={title:`Forms/RotarySelector`,component:d,tags:[`autodocs`]},g=[{id:`conservative`,label:`Conservative`,value:`conservative`,icon:`🛡️`},{id:`balanced`,label:`Balanced`,value:`balanced`,icon:`⚖️`},{id:`aggressive`,label:`Aggressive`,value:`aggressive`,icon:`🚀`}],_={args:{options:[{id:`1`,label:`Option 1`,value:`1`},{id:`2`,label:`Option 2`,value:`2`},{id:`3`,label:`Option 3`,value:`3`}],size:`md`,showLabel:!0,onChange:(e,t)=>console.log(`Selected:`,t.label)}},v={args:{options:g,value:`balanced`,size:`md`,showLabel:!0,onChange:(e,t)=>console.log(`Risk profile:`,t.label)}},y={args:{options:[{id:`usd`,label:`USD`,value:`USD`,icon:`$`},{id:`eur`,label:`EUR`,value:`EUR`,icon:`€`},{id:`gbp`,label:`GBP`,value:`GBP`,icon:`£`},{id:`jpy`,label:`JPY`,value:`JPY`,icon:`¥`},{id:`btc`,label:`BTC`,value:`BTC`,icon:`₿`}],value:`USD`,size:`md`,showLabel:!0,onChange:(e,t)=>console.log(`Currency:`,t.label)}},b={args:{options:[{id:`1d`,label:`1 Day`,value:`1d`},{id:`1w`,label:`1 Week`,value:`1w`},{id:`1m`,label:`1 Month`,value:`1m`},{id:`3m`,label:`3 Months`,value:`3m`},{id:`1y`,label:`1 Year`,value:`1y`},{id:`all`,label:`All Time`,value:`all`}],value:`1m`,size:`sm`,showLabel:!0,onChange:(e,t)=>console.log(`Timeframe:`,t.label)}},x={args:{options:g,value:`balanced`,disabled:!0,onChange:(e,t)=>console.log(`Selected:`,t.label)}},S={render:()=>{let[e,t]=(0,p.useState)(`balanced`),n={conservative:{description:`Low risk, stable returns. 80% bonds, 20% stocks.`,allocation:`2-4% annually`},balanced:{description:`Moderate risk, balanced growth. 50% stocks, 40% bonds, 10% cash.`,allocation:`5-8% annually`},aggressive:{description:`High risk, high reward. 80% stocks, 15% crypto, 5% bonds.`,allocation:`10-15% annually`}},r=n[e]||n.balanced;return(0,m.jsxs)(`div`,{className:`space-y-4`,children:[(0,m.jsx)(d,{options:g,value:e,onChange:(e,n)=>t(n.value),size:`md`,showLabel:!0}),(0,m.jsxs)(`div`,{className:`p-4 bg-surface-secondary rounded-xl border border-border-primary text-sm space-y-1`,children:[(0,m.jsxs)(`p`,{className:`font-semibold capitalize`,children:[e,` Profile`]}),(0,m.jsx)(`p`,{className:`text-text-secondary`,children:r.description}),(0,m.jsxs)(`p`,{className:`text-green-600 font-medium`,children:[`Expected return: `,r.allocation]})]})]})}},C={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,m.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,m.jsx)(e,{})})]},w={parameters:{viewport:{defaultViewport:`mobile1`}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      id: '1',
      label: 'Option 1',
      value: '1'
    }, {
      id: '2',
      label: 'Option 2',
      value: '2'
    }, {
      id: '3',
      label: 'Option 3',
      value: '3'
    }],
    size: 'md',
    showLabel: true,
    onChange: (value, option) => console.log('Selected:', option.label)
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    options: investmentOptions,
    value: 'balanced',
    size: 'md',
    showLabel: true,
    onChange: (value, option) => console.log('Risk profile:', option.label)
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      id: 'usd',
      label: 'USD',
      value: 'USD',
      icon: '$'
    }, {
      id: 'eur',
      label: 'EUR',
      value: 'EUR',
      icon: '€'
    }, {
      id: 'gbp',
      label: 'GBP',
      value: 'GBP',
      icon: '£'
    }, {
      id: 'jpy',
      label: 'JPY',
      value: 'JPY',
      icon: '¥'
    }, {
      id: 'btc',
      label: 'BTC',
      value: 'BTC',
      icon: '₿'
    }],
    value: 'USD',
    size: 'md',
    showLabel: true,
    onChange: (value, option) => console.log('Currency:', option.label)
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      id: '1d',
      label: '1 Day',
      value: '1d'
    }, {
      id: '1w',
      label: '1 Week',
      value: '1w'
    }, {
      id: '1m',
      label: '1 Month',
      value: '1m'
    }, {
      id: '3m',
      label: '3 Months',
      value: '3m'
    }, {
      id: '1y',
      label: '1 Year',
      value: '1y'
    }, {
      id: 'all',
      label: 'All Time',
      value: 'all'
    }],
    value: '1m',
    size: 'sm',
    showLabel: true,
    onChange: (value, option) => console.log('Timeframe:', option.label)
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    options: investmentOptions,
    value: 'balanced',
    disabled: true,
    onChange: (value, option) => console.log('Selected:', option.label)
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('balanced');
    const profiles: Record<string, {
      description: string;
      allocation: string;
    }> = {
      conservative: {
        description: 'Low risk, stable returns. 80% bonds, 20% stocks.',
        allocation: '2-4% annually'
      },
      balanced: {
        description: 'Moderate risk, balanced growth. 50% stocks, 40% bonds, 10% cash.',
        allocation: '5-8% annually'
      },
      aggressive: {
        description: 'High risk, high reward. 80% stocks, 15% crypto, 5% bonds.',
        allocation: '10-15% annually'
      }
    };
    const current = profiles[selected] || profiles.balanced;
    return <div className="space-y-4">
                <RotarySelector options={investmentOptions} value={selected} onChange={(_, option) => setSelected(option.value as string)} size="md" showLabel={true} />
                <div className="p-4 bg-surface-secondary rounded-xl border border-border-primary text-sm space-y-1">
                    <p className="font-semibold capitalize">{selected} Profile</p>
                    <p className="text-text-secondary">{current.description}</p>
                    <p className="text-green-600 font-medium">Expected return: {current.allocation}</p>
                </div>
            </div>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    themes: {
      themeOverride: 'dark'
    }
  },
  decorators: [Story => <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>]
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...w.parameters?.docs?.source}}},T=[`Default`,`InvestmentProfile`,`CurrencySelection`,`TimeframeSelection`,`Disabled`,`InteractiveSelector`,`DarkMode`,`MobileView`]}))();export{y as CurrencySelection,C as DarkMode,_ as Default,x as Disabled,S as InteractiveSelector,v as InvestmentProfile,w as MobileView,b as TimeframeSelection,T as __namedExportsOrder,h as default};