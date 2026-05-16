import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DuoaHqPM.js";import{t as r}from"./jsx-runtime-BscHEzdU.js";import{K as i,On as a,Yn as o,s,t as c,yr as l}from"./lucide-react-Js4yG5Ra.js";import{n as u,t as d}from"./Button-Cafbi4DX.js";var f,p,m,h,g,_=e((()=>{f=t(n()),d(),p=r(),m=e=>{switch(e){case`light`:case`selection`:return 10;case`medium`:case`impact`:return 20;case`heavy`:return 30;case`success`:return[10,50,10];case`warning`:return[20,50,20];case`error`:return[30,50,30,50,30];case`notification`:return[20,100,20];default:return 20}},h=e=>{if(typeof window>`u`||e===!1)return;let t=e===!0?`medium`:e;if(`vibrate`in navigator){let e=m(t);navigator.vibrate(e);return}window.DeviceMotionEvent!==void 0&&typeof navigator<`u`&&navigator.vibrate&&navigator.vibrate(m(t))},g=f.forwardRef(({hapticFeedback:e=`medium`,hapticOnHover:t=!1,hapticOnTap:n=!0,onMouseEnter:r,onMouseLeave:i,onMouseDown:a,onMouseUp:o,onClick:s,children:c,...l},d)=>(0,p.jsx)(u,{ref:d,onMouseEnter:n=>{t&&e&&h(e),r?.(n)},onMouseDown:t=>{n&&e&&h(e),a?.(t)},onTouchStart:t=>{n&&e&&h(e)},onClick:e=>{s?.(e)},...l,children:c})),g.displayName=`HapticButton`,g.__docgenInfo={description:``,methods:[],displayName:`HapticButton`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'ghost' | 'subtle' | 'outline' | 'destructive'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'ghost'`},{name:`literal`,value:`'subtle'`},{name:`literal`,value:`'outline'`},{name:`literal`,value:`'destructive'`}]},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``},leftIcon:{required:!1,tsType:{name:`ReactNode`},description:``},rightIcon:{required:!1,tsType:{name:`ReactNode`},description:``},fullWidth:{required:!1,tsType:{name:`boolean`},description:``},"aria-label":{required:!1,tsType:{name:`string`},description:``},children:{required:!1,tsType:{name:`ReactNode`},description:``},hapticFeedback:{required:!1,tsType:{name:`union`,raw:`HapticFeedbackType | boolean`,elements:[{name:`union`,raw:`| 'light'
| 'medium'
| 'heavy'
| 'success'
| 'warning'
| 'error'
| 'selection'
| 'impact'
| 'notification'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'heavy'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'warning'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'selection'`},{name:`literal`,value:`'impact'`},{name:`literal`,value:`'notification'`}]},{name:`boolean`}]},description:``,defaultValue:{value:`'medium'`,computed:!1}},hapticOnHover:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},hapticOnTap:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}}},composes:[`Omit`]}})),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;e((()=>{n(),_(),c(),v=r(),{action:y}=__STORYBOOK_MODULE_ACTIONS__,b={title:`Buttons/HapticButton`,component:g,tags:[`autodocs`],parameters:{layout:`centered`}},x={args:{children:`Send Payment`,onClick:y(`clicked`),variant:`primary`}},S={args:{children:`Cancel`,onClick:y(`clicked`),variant:`secondary`}},C={args:{children:`Learn More`,onClick:y(`clicked`),variant:`ghost`}},w={args:{children:`Delete Account`,onClick:y(`clicked`),variant:`danger`}},T={args:{children:`Confirm Payment`,onClick:y(`clicked`),size:`lg`,icon:(0,v.jsx)(o,{className:`w-5 h-5`})}},E={args:{children:`Send`,onClick:y(`clicked`),size:`sm`}},D={args:{children:`Send`,onClick:y(`clicked`),disabled:!0}},O={args:{children:`Send Money`,onClick:y(`clicked`),icon:(0,v.jsx)(i,{className:`w-4 h-4`}),variant:`primary`}},k={args:{children:`Processing`,onClick:y(`clicked`),loading:!0,variant:`primary`}},A={args:{children:`Confirm $250.00 Payment`,onClick:y(`clicked`),variant:`primary`,fullWidth:!0,icon:(0,v.jsx)(o,{className:`w-4 h-4`})},decorators:[e=>(0,v.jsx)(`div`,{className:`w-80`,children:(0,v.jsx)(e,{})})]},j={render:()=>(0,v.jsxs)(`div`,{className:`w-80 space-y-3`,children:[(0,v.jsx)(`p`,{className:`text-sm font-semibold text-text-primary`,children:`Complete Payment`}),(0,v.jsx)(g,{variant:`primary`,fullWidth:!0,icon:(0,v.jsx)(a,{className:`w-4 h-4`}),onClick:y(`pay`),children:`Pay $250.00`}),(0,v.jsx)(g,{variant:`secondary`,fullWidth:!0,icon:(0,v.jsx)(s,{className:`w-4 h-4`}),onClick:y(`wallet`),children:`Pay with Wallet`}),(0,v.jsx)(g,{variant:`ghost`,fullWidth:!0,onClick:y(`cancel`),children:`Cancel`})]})},M={decorators:[e=>(0,v.jsx)(`div`,{className:`p-8 bg-gray-900 rounded-2xl`,children:(0,v.jsx)(e,{})})],args:{children:`Continue`,onClick:y(`clicked`),variant:`primary`,icon:(0,v.jsx)(l,{className:`w-4 h-4`})}},N={args:{children:`Approve recurring transfer of $150.00 every month`,onClick:y(`clicked`),variant:`primary`}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Send Payment',
    onClick: action('clicked'),
    variant: 'primary'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Cancel',
    onClick: action('clicked'),
    variant: 'secondary'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Learn More',
    onClick: action('clicked'),
    variant: 'ghost'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete Account',
    onClick: action('clicked'),
    variant: 'danger'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Confirm Payment',
    onClick: action('clicked'),
    size: 'lg',
    icon: <Check className="w-5 h-5" />
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Send',
    onClick: action('clicked'),
    size: 'sm'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Send',
    onClick: action('clicked'),
    disabled: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Send Money',
    onClick: action('clicked'),
    icon: <Send className="w-4 h-4" />,
    variant: 'primary'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Processing',
    onClick: action('clicked'),
    loading: true,
    variant: 'primary'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Confirm $250.00 Payment',
    onClick: action('clicked'),
    variant: 'primary',
    fullWidth: true,
    icon: <Check className="w-4 h-4" />
  },
  decorators: [Story => <div className="w-80"><Story /></div>]
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-80 space-y-3">
      <p className="text-sm font-semibold text-text-primary">Complete Payment</p>
      <HapticButton variant="primary" fullWidth icon={<CreditCard className="w-4 h-4" />} onClick={action('pay')}>
        Pay $250.00
      </HapticButton>
      <HapticButton variant="secondary" fullWidth icon={<Wallet className="w-4 h-4" />} onClick={action('wallet')}>
        Pay with Wallet
      </HapticButton>
      <HapticButton variant="ghost" fullWidth onClick={action('cancel')}>
        Cancel
      </HapticButton>
    </div>
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="p-8 bg-gray-900 rounded-2xl">
        <Story />
      </div>],
  args: {
    children: 'Continue',
    onClick: action('clicked'),
    variant: 'primary',
    icon: <ArrowRight className="w-4 h-4" />
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Approve recurring transfer of $150.00 every month',
    onClick: action('clicked'),
    variant: 'primary'
  }
}`,...N.parameters?.docs?.source}}},P=[`Default`,`Secondary`,`Ghost`,`Danger`,`Large`,`Small`,`Disabled`,`WithIcon`,`Loading`,`FullWidth`,`PaymentActions`,`DarkBackground`,`LongText`]}))();export{w as Danger,M as DarkBackground,x as Default,D as Disabled,A as FullWidth,C as Ghost,T as Large,k as Loading,N as LongText,j as PaymentActions,S as Secondary,E as Small,O as WithIcon,P as __namedExportsOrder,b as default};