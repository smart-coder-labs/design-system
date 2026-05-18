import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-2Bdvr1RY.js";import{t as r}from"./jsx-runtime-WZfjI2gv.js";import{l as i,s as a,t as o}from"./es-C1BYSDiB.js";var s,c,l,u,d,f,p,m,h,g,_,v=e((()=>{s=t(n()),o(),c=r(),l=(e,t=`medium`)=>new Intl.DateTimeFormat(`en-US`,{short:{month:`numeric`,day:`numeric`,year:`numeric`},medium:{month:`short`,day:`numeric`,year:`numeric`},long:{month:`long`,day:`numeric`,year:`numeric`}}[t]).format(e),u=(e,t)=>e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate(),d=(e,t)=>new Date(e,t+1,0).getDate(),f=(e,t)=>new Date(e,t,1).getDay(),p=(e,t,n)=>!(t&&e<t||n&&e>n),m=`
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
`,h={sm:`h-8 px-3 text-sm rounded-lg`,md:`h-10 px-4 text-base rounded-xl`,lg:`h-12 px-5 text-lg rounded-xl`},g=({selectedDate:e,onSelectDate:t,minDate:n,maxDate:r,currentMonth:i,onMonthChange:o})=>{let s=i.getFullYear(),l=i.getMonth(),m=d(s,l),h=f(s,l),g=new Date,_=Array.from({length:m},(e,t)=>t+1),v=Array.from({length:h},(e,t)=>t),y=[`January`,`February`,`March`,`April`,`May`,`June`,`July`,`August`,`September`,`October`,`November`,`December`],b=()=>{o(new Date(s,l-1,1))},x=()=>{o(new Date(s,l+1,1))},S=e=>{let i=new Date(s,l,e);p(i,n,r)&&t(i)};return(0,c.jsx)(a.div,{initial:{opacity:0,y:-8,scale:.96},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-8,scale:.96},transition:{type:`spring`,stiffness:400,damping:30},className:`absolute top-full left-0 mt-2 z-[1300] w-full min-w-[280px] max-w-[320px]`,children:(0,c.jsxs)(`div`,{className:`bg-surface-primary border border-border-primary rounded-2xl shadow-lg p-4 backdrop-blur-xl`,children:[(0,c.jsxs)(`div`,{className:`flex items-center justify-between mb-4`,children:[(0,c.jsx)(a.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:b,className:`p-2 rounded-lg hover:bg-surface-secondary transition-apple`,type:`button`,children:(0,c.jsx)(`svg`,{className:`w-5 h-5 text-text-primary`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M15 19l-7-7 7-7`})})}),(0,c.jsxs)(`h3`,{className:`text-base font-semibold text-text-primary`,children:[y[l],` `,s]}),(0,c.jsx)(a.button,{whileHover:{scale:1.05},whileTap:{scale:.95},onClick:x,className:`p-2 rounded-lg hover:bg-surface-secondary transition-apple`,type:`button`,children:(0,c.jsx)(`svg`,{className:`w-5 h-5 text-text-primary`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})})})]}),(0,c.jsx)(`div`,{className:`grid grid-cols-7 gap-1 mb-2`,children:[`Su`,`Mo`,`Tu`,`We`,`Th`,`Fr`,`Sa`].map(e=>(0,c.jsx)(`div`,{className:`text-center text-xs font-medium text-text-tertiary py-2`,children:e},e))}),(0,c.jsxs)(`div`,{className:`grid grid-cols-7 gap-1`,children:[v.map((e,t)=>(0,c.jsx)(`div`,{className:`aspect-square`},`empty-${t}`)),_.map(t=>{let i=new Date(s,l,t),o=e&&u(i,e),d=u(i,g),f=!p(i,n,r);return(0,c.jsx)(a.button,{whileHover:f?{}:{scale:1.05},whileTap:f?{}:{scale:.95},onClick:()=>S(t),disabled:f,className:`
                                    aspect-square rounded-lg text-sm font-medium
                                    transition-apple
                                    ${o?`bg-accent-blue text-white`:d?`bg-accent-blue/10 text-accent-blue`:`text-text-primary hover:bg-surface-secondary`}
                                    ${f?`opacity-30 cursor-not-allowed`:`cursor-pointer`}
                                `,type:`button`,children:t},t)})]}),(0,c.jsx)(`div`,{className:`mt-4 pt-4 border-t border-border-primary`,children:(0,c.jsx)(a.button,{whileHover:{scale:1.02},whileTap:{scale:.98},onClick:()=>t(new Date),className:`w-full py-2 px-4 rounded-lg bg-surface-secondary hover:bg-surface-tertiary text-text-primary text-sm font-medium transition-apple`,type:`button`,children:`Today`})})]})})},_=({label:e,value:t,onChange:n,placeholder:r=`Select date`,error:o,helperText:u,disabled:d=!1,minDate:f,maxDate:_,dateFormat:v=`medium`,size:y=`md`,className:b=``})=>{let[x,S]=(0,s.useState)(!1),[C,w]=(0,s.useState)(t||null),[T,E]=(0,s.useState)(t||new Date),[D,O]=(0,s.useState)(``),[k,A]=(0,s.useState)(!1),j=(0,s.useRef)(null),M=!!o,N=e=>`${String(e.getMonth()+1).padStart(2,`0`)}/${String(e.getDate()).padStart(2,`0`)}/${e.getFullYear()}`;(0,s.useEffect)(()=>{t?(w(t),E(t),k||O(l(t,v))):k||O(``)},[t,v,k]),(0,s.useEffect)(()=>{let e=e=>{j.current&&!j.current.contains(e.target)&&S(!1)};return x&&document.addEventListener(`mousedown`,e),()=>{document.removeEventListener(`mousedown`,e)}},[x]);let P=e=>{w(e),E(e),O(l(e,v)),n?.(e),S(!1),A(!1)},F=()=>{d||(A(!0),S(!0),O(C?N(C):``))},I=()=>{A(!1),O(C?l(C,v):``)},L=e=>{let t=e.target.value;if(t=t.replace(/[^\d/]/g,``),t.length<D.length||(t.length===2&&D.charAt(2)!==`/`&&(t+=`/`),t.length===5&&D.charAt(5)!==`/`&&(t+=`/`)),t.length>10&&(t=t.slice(0,10)),O(t),t.length===10){let e=new Date(t);if(!isNaN(e.getTime())){let[r,i,a]=t.split(`/`).map(Number);e.getMonth()+1===r&&e.getDate()===i&&e.getFullYear()===a&&p(e,f,_)&&(w(e),E(e),n?.(e))}}else t===``&&(w(null),n?.(null))},R=()=>{!d&&!x&&S(!0)},z=e=>{e.stopPropagation(),w(null),O(``),n?.(null)},B=`
        ${m}
        ${h[y]}
        ${M?`border-status-error focus:border-status-error focus:ring-status-error/20`:``}
        ${b}
    `.trim().replace(/\s+/g,` `);return(0,c.jsxs)(`div`,{className:`w-full`,ref:j,children:[e&&(0,c.jsx)(`label`,{className:`block text-sm font-medium text-text-primary mb-2`,children:e}),(0,c.jsxs)(`div`,{className:`relative`,children:[(0,c.jsx)(a.div,{whileHover:d?{}:{scale:1.005},transition:{type:`spring`,stiffness:300,damping:30},children:(0,c.jsx)(`input`,{type:`text`,value:D,onChange:L,onFocus:F,onBlur:I,onClick:R,placeholder:k?`MM/DD/YYYY`:r,disabled:d,maxLength:10,className:B})}),(0,c.jsxs)(`div`,{className:`absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1`,children:[D&&!d&&(0,c.jsx)(a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},onClick:z,className:`p-1 rounded-md hover:bg-surface-secondary transition-apple`,type:`button`,children:(0,c.jsx)(`svg`,{className:`w-4 h-4 text-text-tertiary`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M6 18L18 6M6 6l12 12`})})}),(0,c.jsx)(`svg`,{className:`w-5 h-5 text-text-tertiary pointer-events-none`,fill:`none`,viewBox:`0 0 24 24`,stroke:`currentColor`,children:(0,c.jsx)(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z`})})]}),(0,c.jsx)(i,{children:x&&(0,c.jsx)(g,{selectedDate:C,onSelectDate:P,minDate:f,maxDate:_,currentMonth:T,onMonthChange:E})})]}),(o||u)&&(0,c.jsx)(a.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},transition:{duration:.16},className:`
                        mt-2 text-sm
                        ${M?`text-status-error`:`text-text-secondary`}
                    `,children:o||u})]})},_.displayName=`DatePicker`,_.__docgenInfo={description:``,methods:[],displayName:`DatePicker`,props:{label:{required:!1,tsType:{name:`string`},description:``},value:{required:!1,tsType:{name:`Date`},description:``},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(date: Date | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`Date | null`,elements:[{name:`Date`},{name:`null`}]},name:`date`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Select date'`,computed:!1}},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},minDate:{required:!1,tsType:{name:`Date`},description:``},maxDate:{required:!1,tsType:{name:`Date`},description:``},dateFormat:{required:!1,tsType:{name:`union`,raw:`'short' | 'medium' | 'long'`,elements:[{name:`literal`,value:`'short'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'long'`}]},description:``,defaultValue:{value:`'medium'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),y,b,x,S,C,w,T,E,D,O;e((()=>{v(),y={title:`Forms/DatePicker`,component:_,tags:[`autodocs`]},b={args:{label:`Select date`,placeholder:`Pick a date`}},x={args:{label:`Start date`,value:new Date(2026,4,15)}},S={args:{label:`Expiration date`,error:`Date cannot be in the past`,value:new Date(2024,0,1)}},C={args:{label:`Locked date`,disabled:!0,value:new Date(2026,5,1)}},w={args:{label:`Birth date`,size:`sm`,placeholder:`DD/MM/YYYY`}},T={args:{label:`Appointment date`,size:`lg`,placeholder:`Pick an appointment date`}},E={args:{label:`Event date`,dateFormat:`long`,value:new Date(2026,11,25)}},D={args:{label:`Booking date`,minDate:new Date(2026,4,1),maxDate:new Date(2026,6,31),placeholder:`Select within range`}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select date',
    placeholder: 'Pick a date'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start date',
    value: new Date(2026, 4, 15)
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Expiration date',
    error: 'Date cannot be in the past',
    value: new Date(2024, 0, 1)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Locked date',
    disabled: true,
    value: new Date(2026, 5, 1)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Birth date',
    size: 'sm',
    placeholder: 'DD/MM/YYYY'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Appointment date',
    size: 'lg',
    placeholder: 'Pick an appointment date'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Event date',
    dateFormat: 'long',
    value: new Date(2026, 11, 25)
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Booking date',
    minDate: new Date(2026, 4, 1),
    maxDate: new Date(2026, 6, 31),
    placeholder: 'Select within range'
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`WithValue`,`WithError`,`Disabled`,`Small`,`Large`,`LongFormat`,`WithMinMax`]}))();export{b as Default,C as Disabled,T as Large,E as LongFormat,w as Small,S as WithError,D as WithMinMax,x as WithValue,O as __namedExportsOrder,y as default};