import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C3uANx_z.js";import{F as r,Fn as i,G as a,er as o,jn as s,t as c,x as l}from"./lucide-react-h9NbdGwk.js";import{n as u,t as d}from"./utils-CcEteFRA.js";import{t as f}from"./jsx-runtime-WZfjI2gv.js";import{l as p,s as m,t as h}from"./es-Y5rqk_dr.js";import{t as g}from"./react-dom-BuVB8EdK.js";var _,v,y,b,x=e((()=>{_=t(n()),v=t(g()),u(),h(),c(),y=f(),b=(0,_.forwardRef)(({label:e,actions:t,variant:n=`primary`,size:r=`md`,disabled:i=!1,className:a},s)=>{let[c,l]=(0,_.useState)(!1),[u,f]=(0,_.useState)(!1),[h,g]=(0,_.useState)({top:0,left:0}),b=(0,_.useRef)(null),x=(0,_.useRef)(null);(0,_.useEffect)(()=>{f(!0)},[]);let S=(0,_.useCallback)(()=>{let e=b.current;if(!e)return;let t=e.getBoundingClientRect(),n=x.current,r=n?.offsetWidth??0,i=n?.offsetHeight??0,a=t.left,o=t.bottom+8;r&&a+r>window.innerWidth-8&&(a=window.innerWidth-r-8),a<8&&(a=8),i&&o+i>window.innerHeight-8&&(o=t.top-i-8),i?o=Math.max(8,Math.min(o,window.innerHeight-i-8)):o<8&&(o=8),g(e=>e.top===o&&e.left===a?e:{top:o,left:a})},[]);(0,_.useLayoutEffect)(()=>{c&&(S(),x.current?.querySelector(`button:not([disabled])`)?.focus())},[c,S]),(0,_.useEffect)(()=>{if(!c)return;let e=()=>S();return window.addEventListener(`scroll`,e,!0),window.addEventListener(`resize`,e),()=>{window.removeEventListener(`scroll`,e,!0),window.removeEventListener(`resize`,e)}},[c,S]),(0,_.useEffect)(()=>{if(!c)return;let e=e=>{let t=e.target;b.current?.contains(t)||x.current?.contains(t)||l(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[c]),(0,_.useEffect)(()=>{if(!c)return;let e=e=>{if(e.key===`Escape`){l(!1),(b.current?.querySelector(`button`))?.focus();return}if(e.key!==`ArrowDown`&&e.key!==`ArrowUp`)return;let t=Array.from(x.current?.querySelectorAll(`button:not([disabled])`)??[]);if(t.length===0)return;e.preventDefault();let n=t.indexOf(document.activeElement);t[e.key===`ArrowDown`?(n+1)%t.length:(n<=0?t.length:n)-1]?.focus()};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},[c]),(0,_.useEffect)(()=>{c||setActiveIndex(-1)},[c]),(0,_.useEffect)(()=>{itemRefs.current.length=t.length,setActiveIndex(e=>e<t.length?e:-1)},[t.length]),(0,_.useEffect)(()=>{!c||activeIndex<0||itemRefs.current[activeIndex]?.focus()},[c,activeIndex]);let C={primary:`bg-accent-blue text-white hover:bg-accent-blueHover active:bg-accent-blueActive shadow-sm`,secondary:`bg-surface-secondary text-text-primary hover:bg-surface-tertiary active:bg-surface-tertiary/80 border border-border-primary`,tertiary:`bg-transparent text-text-secondary hover:text-text-primary hover:bg-surface-secondary`},w={sm:{button:`h-8 px-3 text-sm gap-1.5`,icon:`w-3.5 h-3.5`},md:{button:`h-10 px-4 text-base gap-2`,icon:`w-4 h-4`},lg:{button:`h-12 px-5 text-lg gap-2.5`,icon:`w-5 h-5`}},T=()=>{triggerRef.current?.focus()},E=e=>{l(!1),e&&T()},D=e=>{e.disabled||(e.onClick(),E(!0))},O=(0,y.jsx)(p,{children:c&&(0,y.jsx)(m.div,{ref:x,role:`menu`,initial:{opacity:0,scale:.95,y:-5},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-5},transition:{duration:.1},style:{position:`fixed`,top:h.top,left:h.left},className:d(`z-50 text-left`,`min-w-[160px] bg-surface-elevated border border-border-primary rounded-xl shadow-lg p-1`),children:t.map((e,t)=>(0,y.jsxs)(`button`,{role:`menuitem`,onClick:()=>D(e),disabled:e.disabled,className:d(`flex w-full items-center gap-2 px-3 py-2 text-sm rounded-lg cursor-pointer outline-none transition-colors`,`text-text-primary hover:bg-surface-secondary text-left`,`focus:bg-surface-secondary`,e.disabled&&`opacity-50 cursor-not-allowed`),children:[e.icon&&(0,y.jsx)(e.icon,{className:`w-4 h-4`}),e.label]},t))})});return(0,y.jsxs)(`div`,{className:`relative inline-block text-left`,ref:b,children:[(0,y.jsxs)(m.button,{ref:setTriggerRef,type:`button`,id:triggerId,"aria-haspopup":`menu`,"aria-expanded":c,"aria-controls":c?menuId:void 0,whileTap:{scale:.98},disabled:i,"aria-haspopup":`menu`,"aria-expanded":c,onClick:()=>!i&&l(!c),className:d(`inline-flex items-center justify-center font-medium rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-accent-blue/20 cursor-pointer`,C[n],w[r].button,i&&`opacity-50 cursor-not-allowed`,a),children:[e,(0,y.jsx)(o,{"aria-hidden":`true`,className:d(w[r].icon,`transition-transform duration-200`,c&&`rotate-180`)})]}),u?(0,v.createPortal)(O,document.body):null]})}),b.displayName=`ButtonWithDropdown`,b.__docgenInfo={description:``,methods:[],displayName:`ButtonWithDropdown`,props:{label:{required:!0,tsType:{name:`string`},description:``},actions:{required:!0,tsType:{name:`Array`,elements:[{name:`ButtonWithDropdownAction`}],raw:`ButtonWithDropdownAction[]`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'tertiary'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'tertiary'`}]},description:``,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),S,C,w,T,E,D,O,k,A,j,M;e((()=>{x(),c(),S={title:`Buttons/ButtonWithDropdown`,component:b,tags:[`autodocs`]},C=[{label:`Download`,onClick:()=>{},icon:s},{label:`Share`,onClick:()=>{},icon:a},{label:`Edit`,onClick:()=>{},icon:r}],w={args:{label:`Actions`,actions:C,variant:`primary`,size:`md`}},T={args:{label:`Actions`,actions:C,variant:`secondary`}},E={args:{label:`More`,actions:C,variant:`tertiary`}},D={args:{label:`Actions`,actions:C,size:`sm`}},O={args:{label:`Actions`,actions:C,size:`lg`}},k={args:{label:`Actions`,actions:C,disabled:!0}},A={args:{label:`Actions`,actions:[{label:`Copy`,onClick:()=>{},icon:i},{label:`Edit`,onClick:()=>{},icon:r},{label:`Delete`,onClick:()=>{},icon:l,disabled:!0}]}},j={args:{label:`More Actions`,actions:[{label:`Download`,onClick:()=>{},icon:s},{label:`Share`,onClick:()=>{},icon:a},{label:`Edit`,onClick:()=>{},icon:r},{label:`Duplicate`,onClick:()=>{},icon:i},{label:`Delete`,onClick:()=>{},icon:l}]}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    actions: defaultActions,
    variant: 'primary',
    size: 'md'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    actions: defaultActions,
    variant: 'secondary'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'More',
    actions: defaultActions,
    variant: 'tertiary'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    actions: defaultActions,
    size: 'sm'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    actions: defaultActions,
    size: 'lg'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    actions: defaultActions,
    disabled: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Actions',
    actions: [{
      label: 'Copy',
      onClick: () => {},
      icon: Copy
    }, {
      label: 'Edit',
      onClick: () => {},
      icon: Edit
    }, {
      label: 'Delete',
      onClick: () => {},
      icon: Trash2,
      disabled: true
    }]
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'More Actions',
    actions: [{
      label: 'Download',
      onClick: () => {},
      icon: Download
    }, {
      label: 'Share',
      onClick: () => {},
      icon: Share2
    }, {
      label: 'Edit',
      onClick: () => {},
      icon: Edit
    }, {
      label: 'Duplicate',
      onClick: () => {},
      icon: Copy
    }, {
      label: 'Delete',
      onClick: () => {},
      icon: Trash2
    }]
  }
}`,...j.parameters?.docs?.source}}},M=[`Primary`,`Secondary`,`Tertiary`,`Small`,`Large`,`Disabled`,`WithDisabledAction`,`ManyActions`]}))();export{k as Disabled,O as Large,j as ManyActions,w as Primary,T as Secondary,D as Small,E as Tertiary,A as WithDisabledAction,M as __namedExportsOrder,S as default};