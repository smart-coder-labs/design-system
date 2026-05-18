import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-2Bdvr1RY.js";import{t as r}from"./jsx-runtime-WZfjI2gv.js";import{l as i,s as a,t as o}from"./es-C1BYSDiB.js";var s,c,l,u,d,f,p,m,h,g,_,v=e((()=>{s=t(n()),o(),c=r(),l=(e,t=`medium`)=>new Intl.DateTimeFormat(`en-US`,{short:{month:`numeric`,day:`numeric`,year:`numeric`},medium:{month:`short`,day:`numeric`,year:`numeric`},long:{month:`long`,day:`numeric`,year:`numeric`}}[t]).format(e),u=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),d=(e,t)=>new Date(e,t+1,0).getDate(),f=(e,t)=>new Date(e,t,1).getDay(),p=(e,t,n)=>!!(t&&e<t||n&&e>n),m=`
  w-full
  bg-surface-primary
  border border-border-primary
  text-text-primary
  placeholder:text-text-tertiary
  transition-apple
  focus:outline-none
  focus:border-accent-blue
  focus:ring-2
  focus:ring-accent-blue/20
  disabled:opacity-40
  disabled:cursor-not-allowed
  cursor-pointer
`,h={sm:`h-8 px-3 text-sm rounded-lg`,md:`h-10 px-4 text-base rounded-xl`,lg:`h-12 px-5 text-lg rounded-xl`},g=({range:e,onSelectDate:t,minDate:n,maxDate:r,currentMonth:i,onMonthChange:o})=>{let[l,m]=(0,s.useState)(null),h=i.getFullYear(),g=i.getMonth(),_=d(h,g),v=f(h,g),y=new Date,b=Array.from({length:_},(e,t)=>t+1),x=Array.from({length:v},(e,t)=>t),S=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],C=()=>{o(new Date(h,g-1,1))},w=()=>{o(new Date(h,g+1,1))},T=e=>{let i=new Date(h,g,e);p(i,n,r)||t(i)},E=t=>e.from&&e.to?t>=e.from&&t<=e.to:e.from&&l?t>=e.from&&t<=l||t<=e.from&&t>=l:!1;return(0,c.jsx)(a.div,{initial:{opacity:0,y:-8,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.96},transition:{type:`spring`,stiffness:400,damping:30},className:`absolute top-full left-0 mt-2 z-[1300] w-full min-w-[300px] max-w-[340px]`,children:(0,c.jsxs)(`div`,{className:`bg-surface-primary border border-border-primary rounded-2xl shadow-lg p-4 backdrop-blur-xl`,children:[(0,c.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,c.jsx)(a.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:C,className:`p-2 rounded-lg hover:bg-surface-secondary transition-apple`,type:`button`,children:(0,c.jsx)(`svg`,{className:`w-5 h-5 text-text-primary`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M15 19l-7-7 7-7`})})}),(0,c.jsxs)(`h3`,{className:`text-base font-semibold text-text-primary`,children:[S[g],` `,h]}),(0,c.jsx)(a.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:w,className:`p-2 rounded-lg hover:bg-surface-secondary transition-apple`,type:`button`,children:(0,c.jsx)(`svg`,{className:`w-5 h-5 text-text-primary`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})})]}),(0,c.jsx)(`div`,{className:`grid grid-cols-7 gap-1 mb-2`,children:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`].map(e=>(0,c.jsx)(`div`,{className:`text-center text-xs font-medium text-text-tertiary py-2`,children:e},e))}),(0,c.jsxs)(`div`,{className:`grid grid-cols-7 gap-1`,onMouseLeave:()=>m(null),children:[x.map((e,t)=>(0,c.jsx)(`div`,{className:`aspect-square`},`empty-${t}`)),b.map(t=>{let i=new Date(h,g,t),o=e.from&&u(i,e.from),s=e.to&&u(i,e.to),l=o||s,d=E(i),f=u(i,y),_=p(i,n,r),v=`rounded-lg`;return d&&(v=o&&s?`rounded-lg`:o?`rounded-l-lg rounded-r-none`:s?`rounded-r-lg rounded-l-none`:`rounded-none`),(0,c.jsx)(a.button,{whileHover:_?{}:{scale:1.05,zIndex:10},whileTap:_?{}:{scale:.95},onClick:()=>T(t),onMouseEnter:()=>m(i),disabled:_,className:`
                                    aspect-square text-sm font-medium relative
                                    transition-colors duration-200
                                    ${v}
                                    ${l?`bg-accent-blue text-white z-10`:d?`bg-accent-blue/10 text-text-primary`:f?`bg-accent-blue/5 text-accent-blue border border-accent-blue/20`:`text-text-primary hover:bg-surface-secondary`}
                                    ${_?`opacity-30 cursor-not-allowed`:`cursor-pointer`}
                                `,type:`button`,children:t},t)})]})]})})},_=({label:e,value:t,onChange:n,placeholder:r=`Select date range`,error:o,helperText:u,disabled:d=!1,minDate:f,maxDate:p,dateFormat:_=`medium`,size:v=`md`,className:y=``})=>{let[b,x]=(0,s.useState)(!1),[S,C]=(0,s.useState)(t||{from:null,to:null}),[w,T]=(0,s.useState)(t?.from||new Date),E=(0,s.useRef)(null),D=!!o;(0,s.useEffect)(()=>{t&&(C(t),t.from&&T(t.from))},[t]),(0,s.useEffect)(()=>{let e=e=>{E.current&&!E.current.contains(e.target)&&x(!1)};return b&&document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[b]);let O=e=>{let t={...S};!S.from||S.from&&S.to?t={from:e,to:null}:(t=e<S.from?{from:e,to:S.from}:{from:S.from,to:e},x(!1)),C(t),n?.(t)},k=()=>{!d&&!b&&x(!0)},A=e=>{e.stopPropagation();let t={from:null,to:null};C(t),n?.(t)},j=()=>S.from?S.to?`${l(S.from,_)} - ${l(S.to,_)}`:l(S.from,_):``,M=`
        ${m}
        ${h[v]}
        ${D?`border-status-error focus:border-status-error focus:ring-status-error/20`:``}
        ${y}
    `.trim().replace(/\s+/g,` `);return(0,c.jsxs)(`div`,{className:`w-full`,ref:E,children:[e&&(0,c.jsx)(`label`,{className:`block text-sm font-medium text-text-primary mb-2`,children:e}),(0,c.jsxs)(`div`,{className:`relative`,children:[(0,c.jsx)(a.div,{whileHover:d?{}:{scale:1.005},transition:{type:`spring`,stiffness:300,damping:30},children:(0,c.jsx)(`input`,{type:`text`,readOnly:!0,value:j(),onClick:k,placeholder:r,disabled:d,className:M})}),(0,c.jsxs)(`div`,{className:`absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1`,children:[S.from&&!d&&(0,c.jsx)(a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:A,className:`p-1 rounded-md hover:bg-surface-secondary transition-apple`,type:`button`,children:(0,c.jsx)(`svg`,{className:`w-4 h-4 text-text-tertiary`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`})})}),(0,c.jsx)(`svg`,{className:`w-5 h-5 text-text-tertiary pointer-events-none`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z`})})]}),(0,c.jsx)(i,{children:b&&(0,c.jsx)(g,{range:S,onSelectDate:O,minDate:f,maxDate:p,currentMonth:w,onMonthChange:T})})]}),(o||u)&&(0,c.jsx)(a.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},transition:{duration:.16},className:`
                        mt-2 text-sm
                        ${D?`text-status-error`:`text-text-secondary`}
                    `,children:o||u})]})},_.displayName=`DateRangePicker`,_.__docgenInfo={description:``,methods:[],displayName:`DateRangePicker`,props:{label:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`DateRange`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(range: DateRange) => void`,signature:{arguments:[{type:{name:`DateRange`},name:`range`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Select date range'`,computed:!1}},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},minDate:{required:!1,tsType:{name:`Date`},description:``},maxDate:{required:!1,tsType:{name:`Date`},description:``},dateFormat:{required:!1,tsType:{name:`union`,raw:`'short' | 'medium' | 'long'`,elements:[{name:`literal`,value:`'short'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'long'`}]},description:``,defaultValue:{value:`'medium'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),y,b,x,S,C,w,T,E,D,O,k;e((()=>{n(),v(),y=r(),b={title:`Forms/DateRangePicker`,component:_,tags:[`autodocs`]},x={args:{label:`Select date range`,placeholder:`Start — End`}},S={args:{label:`Trip dates`,value:{from:new Date(2026,5,10),to:new Date(2026,5,20)}}},C={args:{label:`Booking period`,error:`End date must be after start date`,value:{from:new Date(2026,5,20),to:new Date(2026,5,15)}}},w={args:{label:`Range (disabled)`,disabled:!0}},T={args:{label:`Quarter range`,minDate:new Date(2026,0,1),maxDate:new Date(2026,11,31),placeholder:`Select within 2026`}},E={args:{label:`Compact`,size:`sm`,placeholder:`From — To`}},D={args:{label:`Short format`,dateFormat:`short`,value:{from:new Date(2026,3,1),to:new Date(2026,3,15)}}},O={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,y.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,y.jsx)(e,{})})]},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select date range',
    placeholder: 'Start — End'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Trip dates',
    value: {
      from: new Date(2026, 5, 10),
      to: new Date(2026, 5, 20)
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Booking period',
    error: 'End date must be after start date',
    value: {
      from: new Date(2026, 5, 20),
      to: new Date(2026, 5, 15)
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Range (disabled)',
    disabled: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Quarter range',
    minDate: new Date(2026, 0, 1),
    maxDate: new Date(2026, 11, 31),
    placeholder: 'Select within 2026'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Compact',
    size: 'sm',
    placeholder: 'From — To'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Short format',
    dateFormat: 'short',
    value: {
      from: new Date(2026, 3, 1),
      to: new Date(2026, 3, 15)
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`WithValue`,`WithError`,`Disabled`,`WithMinMax`,`SmallSize`,`ShortFormat`,`DarkMode`]}))();export{O as DarkMode,x as Default,w as Disabled,D as ShortFormat,E as SmallSize,C as WithError,T as WithMinMax,S as WithValue,k as __namedExportsOrder,b as default};