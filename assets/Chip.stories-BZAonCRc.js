import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-BGx_IYCs.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{s as i,t as a}from"./es-Ch39IMKG.js";import{n as o,t as s}from"./utils-COD7dmCP.js";import{A as c,Nt as l,i as u,t as d}from"./lucide-react-B3O-UhxF.js";var f,p,m,h=e((()=>{f=t(n()),o(),a(),d(),p=r(),m=(0,f.forwardRef)(({label:e,variant:t=`default`,size:n=`md`,icon:r,onDelete:a,onClick:o,disabled:c=!1,className:l,...d},f)=>{let m={default:`bg-surface-secondary text-text-primary border-border-primary hover:bg-surface-tertiary`,primary:`bg-accent-blue/10 text-accent-blue border-accent-blue/20 hover:bg-accent-blue/20`,success:`bg-status-success/10 text-status-success border-status-success/20 hover:bg-status-success/20`,warning:`bg-status-warning/10 text-status-warning border-status-warning/20 hover:bg-status-warning/20`,error:`bg-status-error/10 text-status-error border-status-error/20 hover:bg-status-error/20`,info:`bg-status-info/10 text-status-info border-status-info/20 hover:bg-status-info/20`},h={sm:{container:`h-6 px-2 gap-1 text-xs`,icon:`w-3 h-3`,deleteButton:`w-3.5 h-3.5`},md:{container:`h-8 px-3 gap-1.5 text-sm`,icon:`w-4 h-4`,deleteButton:`w-4 h-4`},lg:{container:`h-10 px-4 gap-2 text-base`,icon:`w-5 h-5`,deleteButton:`w-5 h-5`}},g=!!o&&!c,_=i.div;return(0,p.jsxs)(_,{ref:f,whileHover:g?{scale:1.02}:void 0,whileTap:g?{scale:.98}:void 0,onClick:g?o:void 0,className:s(`inline-flex items-center justify-center rounded-full border font-medium transition-colors`,m[t],h[n].container,g&&`cursor-pointer`,c&&`opacity-50 cursor-not-allowed`,l),children:[r&&(0,p.jsx)(r,{className:h[n].icon}),(0,p.jsx)(`span`,{children:e}),a&&!c&&(0,p.jsx)(`button`,{onClick:e=>{e.stopPropagation(),a()},className:`rounded-full hover:bg-black/10 transition-colors focus:outline-none p-0.5`,"aria-label":`Delete`,children:(0,p.jsx)(u,{className:h[n].deleteButton})})]})}),m.displayName=`Chip`,m.__docgenInfo={description:``,methods:[],displayName:`Chip`,props:{label:{required:!0,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'primary'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'info'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},icon:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:``},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}},composes:[`Omit`]}})),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{h(),d(),g=r(),_={title:`Data Display/Chip`,component:m,tags:[`autodocs`]},v={args:{label:`Default Chip`,variant:`default`,size:`md`}},y={args:{label:`Primary`,variant:`primary`}},b={args:{label:`Approved`,variant:`success`}},x={args:{label:`Pending`,variant:`warning`}},S={args:{label:`Rejected`,variant:`error`}},C={args:{label:`New`,variant:`info`}},w={args:{label:`Small`,size:`sm`}},T={args:{label:`Large Chip`,size:`lg`}},E={args:{label:`Premium`,variant:`primary`,icon:c}},D={args:{label:`Filter: Finance`,variant:`primary`,onDelete:()=>{}}},O={args:{label:`Click me`,variant:`primary`,onClick:()=>{}}},k={args:{label:`Disabled`,disabled:!0}},A={args:{label:`Locked`,variant:`info`,icon:l,disabled:!0,onDelete:()=>{}}},j={render:()=>(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,g.jsx)(m,{variant:`default`,label:`Default`}),(0,g.jsx)(m,{variant:`primary`,label:`Primary`}),(0,g.jsx)(m,{variant:`success`,label:`Success`}),(0,g.jsx)(m,{variant:`warning`,label:`Warning`}),(0,g.jsx)(m,{variant:`error`,label:`Error`}),(0,g.jsx)(m,{variant:`info`,label:`Info`})]})},M={render:()=>(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,alignItems:`center`},children:[(0,g.jsx)(m,{size:`sm`,label:`Small`}),(0,g.jsx)(m,{size:`md`,label:`Medium`}),(0,g.jsx)(m,{size:`lg`,label:`Large`})]})},N={render:()=>(0,g.jsxs)(`div`,{style:{display:`flex`,gap:`8px`,flexWrap:`wrap`},children:[(0,g.jsx)(m,{variant:`primary`,label:`React`,onDelete:()=>{}}),(0,g.jsx)(m,{variant:`success`,label:`TypeScript`,onDelete:()=>{}}),(0,g.jsx)(m,{variant:`info`,label:`Tailwind`,onDelete:()=>{}}),(0,g.jsx)(m,{variant:`warning`,label:`Storybook`,onDelete:()=>{}})]})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Default Chip',
    variant: 'default',
    size: 'md'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Approved',
    variant: 'success'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Pending',
    variant: 'warning'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Rejected',
    variant: 'error'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'New',
    variant: 'info'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small',
    size: 'sm'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Chip',
    size: 'lg'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Premium',
    variant: 'primary',
    icon: Star
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Filter: Finance',
    variant: 'primary',
    onDelete: () => {}
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Click me',
    variant: 'primary',
    onClick: () => {}
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled',
    disabled: true
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Locked',
    variant: 'info',
    icon: Lock,
    disabled: true,
    onDelete: () => {}
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
        </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
            <Chip size="sm" label="Small" />
            <Chip size="md" label="Medium" />
            <Chip size="lg" label="Large" />
        </div>
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
            <Chip variant="primary" label="React" onDelete={() => {}} />
            <Chip variant="success" label="TypeScript" onDelete={() => {}} />
            <Chip variant="info" label="Tailwind" onDelete={() => {}} />
            <Chip variant="warning" label="Storybook" onDelete={() => {}} />
        </div>
}`,...N.parameters?.docs?.source}}},P=[`Default`,`Primary`,`Success`,`Warning`,`Error`,`Info`,`Small`,`Large`,`WithIcon`,`Deletable`,`Clickable`,`Disabled`,`DisabledDeletable`,`VariantShowcase`,`SizeShowcase`,`InteractiveChips`]}))();export{O as Clickable,v as Default,D as Deletable,k as Disabled,A as DisabledDeletable,S as Error,C as Info,N as InteractiveChips,T as Large,y as Primary,M as SizeShowcase,w as Small,b as Success,j as VariantShowcase,x as Warning,E as WithIcon,P as __namedExportsOrder,_ as default};