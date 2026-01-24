import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as q}from"./iframe-FxOJXbvx.js";import{B as V}from"./Button-C6s9DX-s.js";import{C as w}from"./circle-check-CQGkJiDx.js";import{C as O}from"./circle-alert-C9xwu2Nj.js";import{C as A}from"./circle-x-CIFFAcni.js";import{Z as U}from"./zap-BuYdW_2v.js";import{B as G}from"./bell-DzTFaFd5.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-PznluMrK.js";import"./createLucideIcon-DJ7P2U_s.js";const B=()=>typeof window>"u"?!1:"vibrate"in navigator||typeof window.DeviceMotionEvent<"u",T=a=>{switch(a){case"light":case"selection":return 10;case"medium":case"impact":return 20;case"heavy":return 30;case"success":return[10,50,10];case"warning":return[20,50,20];case"error":return[30,50,30,50,30];case"notification":return[20,100,20];default:return 20}},S=a=>{if(typeof window>"u"||a===!1)return;const s=a===!0?"medium":a;if("vibrate"in navigator){const c=T(s);navigator.vibrate(c);return}typeof window.DeviceMotionEvent<"u"&&typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate(T(s))},t=q.forwardRef(({hapticFeedback:a="medium",hapticOnHover:s=!1,hapticOnTap:c=!0,onMouseEnter:C,onMouseLeave:_,onMouseDown:I,onMouseUp:X,onClick:M,children:E,...D},P)=>{const W=r=>{s&&a&&S(a),C?.(r)},z=r=>{c&&a&&S(a),I?.(r)},L=r=>{c&&a&&S(a)},R=r=>{M?.(r)};return e.jsx(V,{ref:P,onMouseEnter:W,onMouseDown:z,onTouchStart:L,onClick:R,...D,children:E})});t.displayName="HapticButton";t.__docgenInfo={description:"",methods:[],displayName:"HapticButton",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'ghost' | 'subtle' | 'outline' | 'destructive'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'subtle'"},{name:"literal",value:"'outline'"},{name:"literal",value:"'destructive'"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:""},loading:{required:!1,tsType:{name:"boolean"},description:""},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},rightIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},hapticFeedback:{required:!1,tsType:{name:"union",raw:"HapticFeedbackType | boolean",elements:[{name:"union",raw:`| 'light'
| 'medium'
| 'heavy'
| 'success'
| 'warning'
| 'error'
| 'selection'
| 'impact'
| 'notification'`,elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'heavy'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'selection'"},{name:"literal",value:"'impact'"},{name:"literal",value:"'notification'"}]},{name:"boolean"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},hapticOnHover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hapticOnTap:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}},composes:["Omit"]};const ce={title:"Buttons/HapticButton",component:t,parameters:{layout:"centered",docs:{description:{component:"Botón con soporte para feedback háptico. Proporciona vibración táctil cuando se interactúa con el botón, mejorando la experiencia de usuario en dispositivos móviles. Usa la API Vibration del navegador cuando está disponible."}}},tags:[],argTypes:{hapticFeedback:{control:"select",options:[!0,!1,"light","medium","heavy","success","warning","error","selection","impact","notification"],description:"Tipo de feedback háptico a usar"},hapticOnHover:{control:"boolean",description:"Activar feedback háptico al pasar el mouse"},hapticOnTap:{control:"boolean",description:"Activar feedback háptico al hacer tap/clic"},variant:{control:"select",options:["primary","secondary","ghost","subtle","outline","destructive"]},size:{control:"select",options:["sm","md","lg"]}}},i={args:{children:"Haptic Button",hapticFeedback:"medium",hapticOnTap:!0,hapticOnHover:!1,variant:"primary"},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"mb-4 p-4 bg-surface-secondary rounded-xl",children:[e.jsxs("p",{className:"text-sm text-text-secondary mb-2",children:["Haptic Support: ",e.jsx("span",{className:"font-semibold text-text-primary",children:B()?"✅ Available":"❌ Not Available"})]}),e.jsx("p",{className:"text-xs text-text-tertiary",children:B()?"Este dispositivo soporta feedback háptico. Prueba hacer clic o tocar el botón.":"Este dispositivo no soporta feedback háptico. Prueba en un dispositivo móvil o con soporte de vibración."})]}),e.jsx(a,{})]})]},o={name:"Feedback Ligero",args:{children:"Light Haptic",hapticFeedback:"light",hapticOnTap:!0,variant:"primary"},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Feedback ligero - vibración suave"}),e.jsx(a,{})]})]},n={name:"Feedback Medio",args:{children:"Medium Haptic",hapticFeedback:"medium",hapticOnTap:!0,variant:"primary"},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Feedback medio - vibración estándar"}),e.jsx(a,{})]})]},d={name:"Feedback Fuerte",args:{children:"Heavy Haptic",hapticFeedback:"heavy",hapticOnTap:!0,variant:"primary"},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Feedback fuerte - vibración intensa"}),e.jsx(a,{})]})]},p={name:"Feedback de Éxito",args:{children:"Success Action",hapticFeedback:"success",hapticOnTap:!0,variant:"primary",leftIcon:e.jsx(w,{className:"w-4 h-4"})},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Feedback de éxito - patrón de vibración triple"}),e.jsx(a,{})]})]},l={name:"Feedback de Advertencia",args:{children:"Warning Action",hapticFeedback:"warning",hapticOnTap:!0,variant:"secondary",leftIcon:e.jsx(O,{className:"w-4 h-4"})},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Feedback de advertencia - patrón de vibración doble"}),e.jsx(a,{})]})]},m={name:"Feedback de Error",args:{children:"Error Action",hapticFeedback:"error",hapticOnTap:!0,variant:"destructive",leftIcon:e.jsx(A,{className:"w-4 h-4"})},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Feedback de error - patrón de vibración triple intenso"}),e.jsx(a,{})]})]},u={name:"Feedback de Selección",args:{children:"Select Item",hapticFeedback:"selection",hapticOnTap:!0,variant:"ghost"},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Feedback de selección - vibración ligera para selecciones"}),e.jsx(a,{})]})]},h={name:"Feedback de Impacto",args:{children:"Impact Action",hapticFeedback:"impact",hapticOnTap:!0,variant:"primary",leftIcon:e.jsx(U,{className:"w-4 h-4"})},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Feedback de impacto - vibración media para acciones importantes"}),e.jsx(a,{})]})]},x={name:"Feedback de Notificación",args:{children:"Show Notification",hapticFeedback:"notification",hapticOnTap:!0,variant:"secondary",leftIcon:e.jsx(G,{className:"w-4 h-4"})},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Feedback de notificación - patrón de vibración para notificaciones"}),e.jsx(a,{})]})]},v={name:"Feedback en Hover",args:{children:"Hover Me",hapticFeedback:"light",hapticOnHover:!0,hapticOnTap:!1,variant:"primary"},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Pasa el mouse sobre el botón para sentir el feedback háptico"}),e.jsx(a,{})]})]},b={name:"Hover y Tap",args:{children:"Hover & Tap",hapticFeedback:"medium",hapticOnHover:!0,hapticOnTap:!0,variant:"primary"},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Feedback háptico tanto en hover como en tap"}),e.jsx(a,{})]})]},y={name:"Deshabilitado",args:{children:"Disabled Button",hapticFeedback:"medium",hapticOnTap:!0,variant:"primary",disabled:!0},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Los botones deshabilitados no activan feedback háptico"}),e.jsx(a,{})]})]},f={name:"Sin Feedback Háptico",args:{children:"No Haptic",hapticFeedback:!1,variant:"primary"},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Botón sin feedback háptico (comportamiento normal)"}),e.jsx(a,{})]})]},N={name:"Todas las Variantes",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold text-text-primary",children:"Primary"}),e.jsx(t,{hapticFeedback:"medium",variant:"primary",children:"Primary Button"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold text-text-primary",children:"Secondary"}),e.jsx(t,{hapticFeedback:"medium",variant:"secondary",children:"Secondary Button"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold text-text-primary",children:"Ghost"}),e.jsx(t,{hapticFeedback:"light",variant:"ghost",children:"Ghost Button"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold text-text-primary",children:"Subtle"}),e.jsx(t,{hapticFeedback:"light",variant:"subtle",children:"Subtle Button"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold text-text-primary",children:"Outline"}),e.jsx(t,{hapticFeedback:"medium",variant:"outline",children:"Outline Button"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold text-text-primary",children:"Destructive"}),e.jsx(t,{hapticFeedback:"error",variant:"destructive",children:"Destructive Button"})]})]})},g={name:"Todos los Tamaños",render:()=>e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{hapticFeedback:"light",size:"sm",children:"Small"}),e.jsx(t,{hapticFeedback:"medium",size:"md",children:"Medium"}),e.jsx(t,{hapticFeedback:"heavy",size:"lg",children:"Large"})]})},k={name:"🎯 Caso de Uso: Botones de Acción",render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{className:"text-sm font-semibold text-text-primary",children:"Actions"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{hapticFeedback:"success",variant:"primary",leftIcon:e.jsx(w,{className:"w-4 h-4"}),children:"Save"}),e.jsx(t,{hapticFeedback:"warning",variant:"secondary",leftIcon:e.jsx(O,{className:"w-4 h-4"}),children:"Cancel"}),e.jsx(t,{hapticFeedback:"error",variant:"destructive",leftIcon:e.jsx(A,{className:"w-4 h-4"}),children:"Delete"})]})]})})},F={name:"📝 Caso de Uso: Formularios",render:()=>e.jsx("div",{className:"space-y-4 max-w-md",children:e.jsxs("div",{className:"p-4 bg-surface-secondary rounded-xl space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"text-sm font-medium text-text-primary",children:"Email"}),e.jsx("input",{type:"email",className:"w-full mt-1 px-3 py-2 bg-surface-primary border border-border-primary rounded-lg",placeholder:"email@example.com"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(t,{hapticFeedback:"success",variant:"primary",fullWidth:!0,children:"Submit"}),e.jsx(t,{hapticFeedback:"selection",variant:"ghost",children:"Cancel"})]})]})})},j={name:"📱 Caso de Uso: Acciones Móviles",render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Botones optimizados para dispositivos móviles con feedback háptico"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2 max-w-xs",children:[e.jsx(t,{hapticFeedback:"light",variant:"primary",fullWidth:!0,children:"Like"}),e.jsx(t,{hapticFeedback:"light",variant:"secondary",fullWidth:!0,children:"Share"}),e.jsx(t,{hapticFeedback:"medium",variant:"ghost",fullWidth:!0,children:"Comment"}),e.jsx(t,{hapticFeedback:"notification",variant:"secondary",fullWidth:!0,children:"Notify"})]})]})},H={name:"🎨 Playground",args:{children:"Haptic Button",hapticFeedback:"medium",hapticOnTap:!0,hapticOnHover:!1,variant:"primary",size:"md"},decorators:[a=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-surface-secondary rounded-xl",children:[e.jsx("p",{className:"text-sm text-text-secondary mb-2",children:"Experimenta con diferentes configuraciones usando los controles"}),e.jsxs("p",{className:"text-xs text-text-tertiary",children:["Haptic Support: ",B()?"✅ Available":"❌ Not Available"]})]}),e.jsx(a,{})]})]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Haptic Button',
    hapticFeedback: 'medium',
    hapticOnTap: true,
    hapticOnHover: false,
    variant: 'primary'
  },
  decorators: [Story => <div className="space-y-4">
                <div className="mb-4 p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary mb-2">
                        Haptic Support: <span className="font-semibold text-text-primary">{isHapticSupported() ? '✅ Available' : '❌ Not Available'}</span>
                    </p>
                    <p className="text-xs text-text-tertiary">
                        {isHapticSupported() ? 'Este dispositivo soporta feedback háptico. Prueba hacer clic o tocar el botón.' : 'Este dispositivo no soporta feedback háptico. Prueba en un dispositivo móvil o con soporte de vibración.'}
                    </p>
                </div>
                <Story />
            </div>]
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Feedback Ligero',
  args: {
    children: 'Light Haptic',
    hapticFeedback: 'light',
    hapticOnTap: true,
    variant: 'primary'
  },
  decorators: [Story => <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback ligero - vibración suave
                </p>
                <Story />
            </div>]
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Feedback Medio',
  args: {
    children: 'Medium Haptic',
    hapticFeedback: 'medium',
    hapticOnTap: true,
    variant: 'primary'
  },
  decorators: [Story => <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback medio - vibración estándar
                </p>
                <Story />
            </div>]
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Feedback Fuerte',
  args: {
    children: 'Heavy Haptic',
    hapticFeedback: 'heavy',
    hapticOnTap: true,
    variant: 'primary'
  },
  decorators: [Story => <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback fuerte - vibración intensa
                </p>
                <Story />
            </div>]
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Feedback de Éxito',
  args: {
    children: 'Success Action',
    hapticFeedback: 'success',
    hapticOnTap: true,
    variant: 'primary',
    leftIcon: <CheckCircle2 className="w-4 h-4" />
  },
  decorators: [Story => <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback de éxito - patrón de vibración triple
                </p>
                <Story />
            </div>]
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Feedback de Advertencia',
  args: {
    children: 'Warning Action',
    hapticFeedback: 'warning',
    hapticOnTap: true,
    variant: 'secondary',
    leftIcon: <AlertCircle className="w-4 h-4" />
  },
  decorators: [Story => <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback de advertencia - patrón de vibración doble
                </p>
                <Story />
            </div>]
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Feedback de Error',
  args: {
    children: 'Error Action',
    hapticFeedback: 'error',
    hapticOnTap: true,
    variant: 'destructive',
    leftIcon: <XCircle className="w-4 h-4" />
  },
  decorators: [Story => <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback de error - patrón de vibración triple intenso
                </p>
                <Story />
            </div>]
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Feedback de Selección',
  args: {
    children: 'Select Item',
    hapticFeedback: 'selection',
    hapticOnTap: true,
    variant: 'ghost'
  },
  decorators: [Story => <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback de selección - vibración ligera para selecciones
                </p>
                <Story />
            </div>]
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Feedback de Impacto',
  args: {
    children: 'Impact Action',
    hapticFeedback: 'impact',
    hapticOnTap: true,
    variant: 'primary',
    leftIcon: <Zap className="w-4 h-4" />
  },
  decorators: [Story => <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback de impacto - vibración media para acciones importantes
                </p>
                <Story />
            </div>]
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Feedback de Notificación',
  args: {
    children: 'Show Notification',
    hapticFeedback: 'notification',
    hapticOnTap: true,
    variant: 'secondary',
    leftIcon: <Bell className="w-4 h-4" />
  },
  decorators: [Story => <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback de notificación - patrón de vibración para notificaciones
                </p>
                <Story />
            </div>]
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Feedback en Hover',
  args: {
    children: 'Hover Me',
    hapticFeedback: 'light',
    hapticOnHover: true,
    hapticOnTap: false,
    variant: 'primary'
  },
  decorators: [Story => <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Pasa el mouse sobre el botón para sentir el feedback háptico
                </p>
                <Story />
            </div>]
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Hover y Tap',
  args: {
    children: 'Hover & Tap',
    hapticFeedback: 'medium',
    hapticOnHover: true,
    hapticOnTap: true,
    variant: 'primary'
  },
  decorators: [Story => <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Feedback háptico tanto en hover como en tap
                </p>
                <Story />
            </div>]
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Deshabilitado',
  args: {
    children: 'Disabled Button',
    hapticFeedback: 'medium',
    hapticOnTap: true,
    variant: 'primary',
    disabled: true
  },
  decorators: [Story => <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Los botones deshabilitados no activan feedback háptico
                </p>
                <Story />
            </div>]
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Sin Feedback Háptico',
  args: {
    children: 'No Haptic',
    hapticFeedback: false,
    variant: 'primary'
  },
  decorators: [Story => <div className="space-y-4">
                <p className="text-sm text-text-secondary text-center">
                    Botón sin feedback háptico (comportamiento normal)
                </p>
                <Story />
            </div>]
}`,...f.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Todas las Variantes',
  render: () => <div className="space-y-4">
            <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Primary</p>
                <HapticButton hapticFeedback="medium" variant="primary">
                    Primary Button
                </HapticButton>
            </div>
            <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Secondary</p>
                <HapticButton hapticFeedback="medium" variant="secondary">
                    Secondary Button
                </HapticButton>
            </div>
            <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Ghost</p>
                <HapticButton hapticFeedback="light" variant="ghost">
                    Ghost Button
                </HapticButton>
            </div>
            <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Subtle</p>
                <HapticButton hapticFeedback="light" variant="subtle">
                    Subtle Button
                </HapticButton>
            </div>
            <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Outline</p>
                <HapticButton hapticFeedback="medium" variant="outline">
                    Outline Button
                </HapticButton>
            </div>
            <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Destructive</p>
                <HapticButton hapticFeedback="error" variant="destructive">
                    Destructive Button
                </HapticButton>
            </div>
        </div>
}`,...N.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Todos los Tamaños',
  render: () => <div className="flex items-center gap-4">
            <HapticButton hapticFeedback="light" size="sm">
                Small
            </HapticButton>
            <HapticButton hapticFeedback="medium" size="md">
                Medium
            </HapticButton>
            <HapticButton hapticFeedback="heavy" size="lg">
                Large
            </HapticButton>
        </div>
}`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: '🎯 Caso de Uso: Botones de Acción',
  render: () => <div className="space-y-4">
            <div className="space-y-2">
                <p className="text-sm font-semibold text-text-primary">Actions</p>
                <div className="flex gap-2">
                    <HapticButton hapticFeedback="success" variant="primary" leftIcon={<CheckCircle2 className="w-4 h-4" />}>
                        Save
                    </HapticButton>
                    <HapticButton hapticFeedback="warning" variant="secondary" leftIcon={<AlertCircle className="w-4 h-4" />}>
                        Cancel
                    </HapticButton>
                    <HapticButton hapticFeedback="error" variant="destructive" leftIcon={<XCircle className="w-4 h-4" />}>
                        Delete
                    </HapticButton>
                </div>
            </div>
        </div>
}`,...k.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: '📝 Caso de Uso: Formularios',
  render: () => <div className="space-y-4 max-w-md">
            <div className="p-4 bg-surface-secondary rounded-xl space-y-4">
                <div>
                    <label className="text-sm font-medium text-text-primary">Email</label>
                    <input type="email" className="w-full mt-1 px-3 py-2 bg-surface-primary border border-border-primary rounded-lg" placeholder="email@example.com" />
                </div>
                <div className="flex gap-2">
                    <HapticButton hapticFeedback="success" variant="primary" fullWidth>
                        Submit
                    </HapticButton>
                    <HapticButton hapticFeedback="selection" variant="ghost">
                        Cancel
                    </HapticButton>
                </div>
            </div>
        </div>
}`,...F.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '📱 Caso de Uso: Acciones Móviles',
  render: () => <div className="space-y-4">
            <p className="text-sm text-text-secondary text-center">
                Botones optimizados para dispositivos móviles con feedback háptico
            </p>
            <div className="grid grid-cols-2 gap-2 max-w-xs">
                <HapticButton hapticFeedback="light" variant="primary" fullWidth>
                    Like
                </HapticButton>
                <HapticButton hapticFeedback="light" variant="secondary" fullWidth>
                    Share
                </HapticButton>
                <HapticButton hapticFeedback="medium" variant="ghost" fullWidth>
                    Comment
                </HapticButton>
                <HapticButton hapticFeedback="notification" variant="secondary" fullWidth>
                    Notify
                </HapticButton>
            </div>
        </div>
}`,...j.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: '🎨 Playground',
  args: {
    children: 'Haptic Button',
    hapticFeedback: 'medium',
    hapticOnTap: true,
    hapticOnHover: false,
    variant: 'primary',
    size: 'md'
  },
  decorators: [Story => <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary mb-2">
                        Experimenta con diferentes configuraciones usando los controles
                    </p>
                    <p className="text-xs text-text-tertiary">
                        Haptic Support: {isHapticSupported() ? '✅ Available' : '❌ Not Available'}
                    </p>
                </div>
                <Story />
            </div>]
}`,...H.parameters?.docs?.source}}};const ie=["Default","LightFeedback","MediumFeedback","HeavyFeedback","SuccessFeedback","WarningFeedback","ErrorFeedback","SelectionFeedback","ImpactFeedback","NotificationFeedback","HoverFeedback","BothHoverAndTap","Disabled","NoHaptic","AllVariants","AllSizes","ActionButtons","FormButtons","MobileActions","Playground"];export{k as ActionButtons,g as AllSizes,N as AllVariants,b as BothHoverAndTap,i as Default,y as Disabled,m as ErrorFeedback,F as FormButtons,d as HeavyFeedback,v as HoverFeedback,h as ImpactFeedback,o as LightFeedback,n as MediumFeedback,j as MobileActions,f as NoHaptic,x as NotificationFeedback,H as Playground,u as SelectionFeedback,p as SuccessFeedback,l as WarningFeedback,ie as __namedExportsOrder,ce as default};
