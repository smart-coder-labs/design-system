import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C3uANx_z.js";import{It as r,M as i,i as a,r as o,t as s}from"./lucide-react-h9NbdGwk.js";import{n as c,t as l}from"./utils-CcEteFRA.js";import{t as u}from"./jsx-runtime-WZfjI2gv.js";import{s as d,t as f}from"./es-Y5rqk_dr.js";var p,m,h,g=e((()=>{p=t(n()),c(),f(),s(),m=u(),h=(0,p.forwardRef)(({label:e,variant:t=`default`,size:n=`md`,icon:r,onDelete:i,onClick:o,disabled:s=!1,className:c,...u},f)=>{let p={default:`bg-surface-secondary text-text-primary border-border-primary hover:bg-surface-tertiary`,primary:`bg-accent-blue/10 text-accent-blue border-accent-blue/20 hover:bg-accent-blue/20`,success:`bg-status-success/10 text-status-success border-status-success/20 hover:bg-status-success/20`,warning:`bg-status-warning/10 text-status-warning border-status-warning/20 hover:bg-status-warning/20`,error:`bg-status-error/10 text-status-error border-status-error/20 hover:bg-status-error/20`,info:`bg-status-info/10 text-status-info border-status-info/20 hover:bg-status-info/20`,glasphormism:`bg-surface-glass/40 backdrop-blur-md border-border-primary/50 text-text-primary hover:bg-surface-glass/60`},h={sm:{container:`h-6 px-2 gap-1 text-xs`,icon:`w-3 h-3`,deleteButton:`w-2 h-2`},md:{container:`h-8 px-3 gap-1.5 text-sm`,icon:`w-4 h-4`,deleteButton:`w-3 h-3`},lg:{container:`h-10 px-4 gap-2 text-base`,icon:`w-5 h-5`,deleteButton:`w-4 h-4`}},g=!!o&&!s,_=d.div;return(0,m.jsxs)(_,{ref:f,whileHover:g?{scale:1.02}:void 0,whileTap:g?{scale:.98}:void 0,onClick:g?o:void 0,className:l(`inline-flex items-center justify-center rounded-full border font-medium transition-colors`,p[t],h[n].container,g&&`cursor-pointer`,s&&`opacity-50 cursor-not-allowed`,c),children:[r&&(0,m.jsx)(r,{className:h[n].icon}),(0,m.jsx)(`span`,{children:e}),i&&!s&&(0,m.jsx)(`button`,{onClick:e=>{e.stopPropagation(),i()},className:`rounded-full hover:bg-black/10 transition-colors focus:outline-none`,"aria-label":`Delete`,children:(0,m.jsx)(a,{className:h[n].deleteButton})})]})}),h.displayName=`Chip`,h.__docgenInfo={description:``,methods:[],displayName:`Chip`,props:{label:{required:!0,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'primary' | 'success' | 'warning' | 'error' | 'info' | 'glasphormism'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'primary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'info'`},{name:`literal`,value:`'glasphormism'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:``},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{g(),s(),_=u(),v={title:`Data Display/Chip`,component:h,tags:[`autodocs`]},y={args:{label:`Default Chip`,variant:`default`,size:`md`}},b={args:{label:`Primary`,variant:`primary`}},x={args:{label:`Approved`,variant:`success`}},S={args:{label:`Pending`,variant:`warning`}},C={args:{label:`Rejected`,variant:`error`}},w={args:{label:`New`,variant:`info`}},T={args:{label:`Small`,size:`sm`}},E={args:{label:`Large Chip`,size:`lg`}},D={args:{label:`Premium`,variant:`primary`,icon:i}},O={args:{label:`Filter: Finance`,variant:`primary`,onDelete:()=>{}}},k={args:{label:`Click me`,variant:`primary`,onClick:()=>{}}},A={args:{label:`Disabled`,disabled:!0}},j={args:{label:`Locked`,variant:`info`,icon:r,disabled:!0,onDelete:()=>{}}},M={render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,_.jsx)(h,{variant:`default`,label:`Default`}),(0,_.jsx)(h,{variant:`primary`,label:`Primary`}),(0,_.jsx)(h,{variant:`success`,label:`Success`}),(0,_.jsx)(h,{variant:`warning`,label:`Warning`}),(0,_.jsx)(h,{variant:`error`,label:`Error`}),(0,_.jsx)(h,{variant:`info`,label:`Info`})]}),args:{label:`Default`,variant:`default`,size:`md`}},N={render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`},children:[(0,_.jsx)(h,{size:`sm`,label:`Small`}),(0,_.jsx)(h,{size:`md`,label:`Medium`}),(0,_.jsx)(h,{size:`lg`,label:`Large`})]}),args:{label:`Default`,variant:`default`,size:`md`}},P={render:()=>(0,_.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,_.jsx)(h,{variant:`primary`,label:`React`,onDelete:()=>{}}),(0,_.jsx)(h,{variant:`success`,label:`TypeScript`,onDelete:()=>{}}),(0,_.jsx)(h,{variant:`info`,label:`Tailwind`,onDelete:()=>{}}),(0,_.jsx)(h,{variant:`warning`,label:`Storybook`,onDelete:()=>{}})]}),args:{label:`Default`,variant:`default`,size:`md`}},F={render:()=>(0,_.jsxs)(`div`,{className:`p-8 bg-slate-100 dark:bg-slate-900 rounded-2xl w-full flex flex-wrap gap-4 items-center`,children:[(0,_.jsx)(h,{variant:`glasphormism`,label:`Default Glass`}),(0,_.jsx)(h,{variant:`glasphormism`,label:`With Icon`,icon:o}),(0,_.jsx)(h,{variant:`glasphormism`,label:`Deletable`,onDelete:()=>{}}),(0,_.jsx)(h,{variant:`glasphormism`,label:`Clickable`,onClick:()=>{}}),(0,_.jsx)(h,{variant:`glasphormism`,label:`Small`,size:`sm`}),(0,_.jsx)(h,{variant:`glasphormism`,label:`Large`,size:`lg`})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Chip',
    variant: 'default',
    size: 'md'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Approved',
    variant: 'success'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Pending',
    variant: 'warning'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Rejected',
    variant: 'error'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'New',
    variant: 'info'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small',
    size: 'sm'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Chip',
    size: 'lg'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Premium',
    variant: 'primary',
    icon: Star
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Filter: Finance',
    variant: 'primary',
    onDelete: () => {}
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Click me',
    variant: 'primary',
    onClick: () => {}
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Locked',
    variant: 'info',
    icon: Lock,
    disabled: true,
    onDelete: () => {}
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
            <Chip variant="default" label="Default" />
            <Chip variant="primary" label="Primary" />
            <Chip variant="success" label="Success" />
            <Chip variant="warning" label="Warning" />
            <Chip variant="error" label="Error" />
            <Chip variant="info" label="Info" />
        </div>,
  args: {
    label: 'Default',
    variant: 'default',
    size: 'md'
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
            <Chip size="sm" label="Small" />
            <Chip size="md" label="Medium" />
            <Chip size="lg" label="Large" />
        </div>,
  args: {
    label: 'Default',
    variant: 'default',
    size: 'md'
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
            <Chip variant="primary" label="React" onDelete={() => {}} />
            <Chip variant="success" label="TypeScript" onDelete={() => {}} />
            <Chip variant="info" label="Tailwind" onDelete={() => {}} />
            <Chip variant="warning" label="Storybook" onDelete={() => {}} />
        </div>,
  args: {
    label: 'Default',
    variant: 'default',
    size: 'md'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-8 bg-slate-100 dark:bg-slate-900 rounded-2xl w-full flex flex-wrap gap-4 items-center">
            <Chip variant="glasphormism" label="Default Glass" />
            <Chip variant="glasphormism" label="With Icon" icon={Zap} />
            <Chip variant="glasphormism" label="Deletable" onDelete={() => {}} />
            <Chip variant="glasphormism" label="Clickable" onClick={() => {}} />
            <Chip variant="glasphormism" label="Small" size="sm" />
            <Chip variant="glasphormism" label="Large" size="lg" />
        </div>
}`,...F.parameters?.docs?.source}}},I=[`Default`,`Primary`,`Success`,`Warning`,`Error`,`Info`,`Small`,`Large`,`WithIcon`,`Deletable`,`Clickable`,`Disabled`,`DisabledDeletable`,`VariantShowcase`,`SizeShowcase`,`InteractiveChips`,`Glasphormism`]}))();export{k as Clickable,y as Default,O as Deletable,A as Disabled,j as DisabledDeletable,C as Error,F as Glasphormism,w as Info,P as InteractiveChips,E as Large,b as Primary,N as SizeShowcase,T as Small,x as Success,M as VariantShowcase,S as Warning,D as WithIcon,I as __namedExportsOrder,v as default};