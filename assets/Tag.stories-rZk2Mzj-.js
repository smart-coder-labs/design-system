import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CNj2_6xa.js";import{M as r,i,t as a}from"./lucide-react-BjI3czzr.js";import{n as o,t as s}from"./utils-CcEteFRA.js";import{t as c}from"./jsx-runtime-WZfjI2gv.js";import{s as l,t as u}from"./es-CuJKoixB.js";var d,f,p,m=e((()=>{d=t(n()),o(),u(),a(),f=c(),p=(0,d.forwardRef)(({label:e,variant:t=`default`,size:n=`md`,icon:r,onRemove:a,onClick:o,disabled:c=!1,className:u,...d},p)=>{let m={default:`bg-surface-secondary text-text-primary border-border-primary hover:bg-surface-tertiary`,primary:`bg-accent-blue text-white border-accent-blue hover:bg-accent-blueHover`,success:`bg-status-success text-white border-status-success hover:bg-status-success/90`,warning:`bg-status-warning text-white border-status-warning hover:bg-status-warning/90`,error:`bg-status-error text-white border-status-error hover:bg-status-error/90`,info:`bg-status-info text-white border-status-info hover:bg-status-info/90`,outline:`bg-transparent text-text-primary border-border-primary hover:bg-surface-secondary`},h={sm:{container:`h-5 px-2 gap-1 text-xs`,icon:`w-3 h-3`,removeButton:`w-3 h-3`},md:{container:`h-6 px-2.5 gap-1.5 text-sm`,icon:`w-3.5 h-3.5`,removeButton:`w-3.5 h-3.5`},lg:{container:`h-7 px-3 gap-2 text-base`,icon:`w-4 h-4`,removeButton:`w-4 h-4`}},g=!!o&&!c,_=l.div;return(0,f.jsxs)(_,{ref:p,whileHover:g?{scale:1.02}:void 0,whileTap:g?{scale:.98}:void 0,onClick:g?o:void 0,className:s(`inline-flex items-center justify-center rounded-md border font-medium transition-colors`,m[t],h[n].container,g&&`cursor-pointer`,c&&`opacity-50 cursor-not-allowed`,u),children:[r&&(0,f.jsx)(r,{className:h[n].icon}),(0,f.jsx)(`span`,{className:`leading-none`,children:e}),a&&!c&&(0,f.jsx)(`button`,{onClick:e=>{e.stopPropagation(),a()},className:`rounded hover:bg-black/10 transition-colors focus:outline-none p-0.5 -mr-0.5`,"aria-label":`Remove`,children:(0,f.jsx)(i,{className:h[n].removeButton})})]})}),p.displayName=`Tag`,p.__docgenInfo={description:``,methods:[],displayName:`Tag`,props:{label:{required:!0,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'outline'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'primary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'outline'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:``},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{m(),a(),h=c(),g={title:`Data Display/Tag`,component:p,tags:[`autodocs`]},_={args:{label:`Default Tag`}},v={args:{label:`Primary`,variant:`primary`}},y={args:{label:`Active`,variant:`success`}},b={args:{label:`Pending`,variant:`warning`}},x={args:{label:`Suspended`,variant:`error`}},S={args:{label:`New Feature`,variant:`info`}},C={args:{label:`Draft`,variant:`outline`}},w={args:{label:`Premium`,variant:`primary`,icon:r}},T={args:{label:`investment`,variant:`default`,onRemove:()=>alert(`Removed tag`)}},E={args:{label:`View Details`,variant:`info`,onClick:()=>alert(`Tag clicked!`)}},D={render:()=>(0,h.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,h.jsx)(p,{label:`Small`,size:`sm`}),(0,h.jsx)(p,{label:`Medium`,size:`md`}),(0,h.jsx)(p,{label:`Large`,size:`lg`})]})},O={render:()=>(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,h.jsx)(p,{label:`Default`,variant:`default`}),(0,h.jsx)(p,{label:`Primary`,variant:`primary`}),(0,h.jsx)(p,{label:`Success`,variant:`success`}),(0,h.jsx)(p,{label:`Warning`,variant:`warning`}),(0,h.jsx)(p,{label:`Error`,variant:`error`}),(0,h.jsx)(p,{label:`Info`,variant:`info`}),(0,h.jsx)(p,{label:`Outline`,variant:`outline`})]})},k={render:()=>(0,h.jsxs)(`div`,{className:`flex flex-wrap gap-2`,children:[(0,h.jsx)(p,{label:`AAPL`,variant:`primary`,size:`sm`}),(0,h.jsx)(p,{label:`Active`,variant:`success`,size:`sm`}),(0,h.jsx)(p,{label:`Pending`,variant:`warning`,size:`sm`}),(0,h.jsx)(p,{label:`Failed`,variant:`error`,size:`sm`}),(0,h.jsx)(p,{label:`Verified`,variant:`success`,size:`sm`}),(0,h.jsx)(p,{label:`Premium Account`,variant:`primary`,icon:r,size:`md`}),(0,h.jsx)(p,{label:`savings`,variant:`default`,size:`sm`,onRemove:()=>{}}),(0,h.jsx)(p,{label:`investment`,variant:`default`,size:`sm`,onRemove:()=>{}}),(0,h.jsx)(p,{label:`crypto`,variant:`outline`,size:`sm`})]})},A={args:{label:`Disabled Tag`,disabled:!0}},j={parameters:{themes:{themeOverride:`dark`}},args:{label:`Dark Mode`,variant:`primary`}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Tag'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Active',
    variant: 'success'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Pending',
    variant: 'warning'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Suspended',
    variant: 'error'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'New Feature',
    variant: 'info'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Draft',
    variant: 'outline'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Premium',
    variant: 'primary',
    icon: Star
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'investment',
    variant: 'default',
    onRemove: () => alert('Removed tag')
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'View Details',
    variant: 'info',
    onClick: () => alert('Tag clicked!')
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-3">
            <Tag label="Small" size="sm" />
            <Tag label="Medium" size="md" />
            <Tag label="Large" size="lg" />
        </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
            <Tag label="Default" variant="default" />
            <Tag label="Primary" variant="primary" />
            <Tag label="Success" variant="success" />
            <Tag label="Warning" variant="warning" />
            <Tag label="Error" variant="error" />
            <Tag label="Info" variant="info" />
            <Tag label="Outline" variant="outline" />
        </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-2">
            <Tag label="AAPL" variant="primary" size="sm" />
            <Tag label="Active" variant="success" size="sm" />
            <Tag label="Pending" variant="warning" size="sm" />
            <Tag label="Failed" variant="error" size="sm" />
            <Tag label="Verified" variant="success" size="sm" />
            <Tag label="Premium Account" variant="primary" icon={Star} size="md" />
            <Tag label="savings" variant="default" size="sm" onRemove={() => {}} />
            <Tag label="investment" variant="default" size="sm" onRemove={() => {}} />
            <Tag label="crypto" variant="outline" size="sm" />
        </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Tag',
    disabled: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    label: 'Dark Mode',
    variant: 'primary'
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Primary`,`Success`,`Warning`,`Error`,`Info`,`Outline`,`WithIcon`,`Removable`,`Clickable`,`Sizes`,`AllVariants`,`FintechTags`,`Disabled`,`DarkMode`]}))();export{O as AllVariants,E as Clickable,j as DarkMode,_ as Default,A as Disabled,x as Error,k as FintechTags,S as Info,C as Outline,v as Primary,T as Removable,D as Sizes,y as Success,b as Warning,w as WithIcon,M as __namedExportsOrder,g as default};