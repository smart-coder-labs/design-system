import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as G,r as R}from"./iframe-CSCYuKHF.js";import{c as l}from"./utils-DCADjnpI.js";import{m as d}from"./proxy-DgdbOAE3.js";import{H as t}from"./house-DAbYiuhU.js";import{S as m}from"./search-DS5O4r7c.js";import{B as p}from"./bell-CWzh_Lqn.js";import{U as i}from"./user-CySujbQ4.js";import{S as D}from"./shopping-bag-vdvXS1Pz.js";import{H}from"./heart-BKPcttTt.js";import{M as W}from"./music-BPjgWF4N.js";import{B as _}from"./book-open-BXzvHoZ2.js";import{M as F}from"./map-pin-DrrSIhYx.js";import{M as T}from"./message-square-DsLikSSf.js";import{S as O}from"./settings-DzZx7_5b.js";import{C as J}from"./camera-BbI6FpNZ.js";import{M as K}from"./mail-DjVeeErp.js";import{C as Q}from"./calendar-CeXA2yRl.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-BeIloL1I.js";import"./createLucideIcon-BvoP2Q-9.js";const X={default:"bg-surface-primary border-t border-border-primary",glass:"glass border-t border-border-secondary/50",elevated:"bg-surface-primary border-t border-border-primary shadow-lg"},V={sm:{container:"h-16",icon:"w-5 h-5",label:"text-xs",padding:"px-2 py-1",gap:"gap-1"},md:{container:"h-20",icon:"w-6 h-6",label:"text-xs",padding:"px-3 py-2",gap:"gap-1.5"},lg:{container:"h-24",icon:"w-7 h-7",label:"text-sm",padding:"px-4 py-3",gap:"gap-2"}},Y=({item:a,showLabel:x,size:u,onItemClick:o})=>{const{icon:c,label:q,padding:P,gap:b}=V[u],k=a.icon,s=a.active||!1,n=a.disabled||!1,A=()=>{n||(a.onClick&&a.onClick(),o&&o(a))},U=a.href&&!n?"a":"button";return e.jsx(d.div,{className:l("flex flex-col items-center justify-center relative",b,P,"flex-1 min-w-0",n&&"opacity-40 cursor-not-allowed"),whileHover:n?{}:{scale:1.05},whileTap:n?{}:{scale:.95},transition:{type:"spring",stiffness:400,damping:25},children:e.jsxs(U,{href:a.href,onClick:A,disabled:n,className:l("flex flex-col items-center justify-center relative",b,"w-full min-w-0","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 rounded-lg",n&&"cursor-not-allowed"),children:[e.jsxs("div",{className:"relative",children:[e.jsx(d.div,{className:l("flex items-center justify-center rounded-lg transition-colors",c,s?"text-accent-blue":"text-text-secondary"),animate:{scale:s?1.1:1},transition:{type:"spring",stiffness:400,damping:25},children:e.jsx(k,{className:c,strokeWidth:s?2.5:2})}),s&&e.jsx(d.div,{layoutId:"bottom-nav-indicator",className:"absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-blue rounded-full",initial:{scale:0},animate:{scale:1},transition:{type:"spring",stiffness:400,damping:25}}),a.badge&&e.jsx(d.div,{initial:{scale:0},animate:{scale:1},className:l("absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1.5 flex items-center justify-center","bg-status-error text-white text-[10px] font-bold rounded-full",typeof a.badge=="number"&&a.badge>99&&"px-1"),children:typeof a.badge=="number"&&a.badge>99?"99+":a.badge})]}),x&&e.jsx(d.span,{className:l(q,"font-medium text-center truncate w-full",s?"text-accent-blue":"text-text-secondary"),animate:{opacity:s?1:.7},children:a.label})]})})},B=G.forwardRef(({items:a,variant:x="default",showLabels:u=!0,size:o="md",onItemClick:c,className:q,...P},b)=>{const{container:k}=V[o];return e.jsx(d.nav,{ref:b,className:l("fixed bottom-0 left-0 right-0 z-50 pb-safe","flex items-center justify-around",X[x],k,q),initial:{y:"100%"},animate:{y:0},exit:{y:"100%"},transition:{type:"spring",stiffness:300,damping:30},...P,children:a.map(s=>e.jsx(Y,{item:s,showLabel:u,size:o,onItemClick:c},s.id))})});B.displayName="BottomNavigation";B.__docgenInfo={description:"",methods:[],displayName:"BottomNavigation",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BottomNavigationItem"}],raw:"BottomNavigationItem[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'glass' | 'elevated'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'glass'"},{name:"literal",value:"'elevated'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: BottomNavigationItem) => void",signature:{arguments:[{type:{name:"BottomNavigationItem"},name:"item"}],return:{name:"void"}}},description:""}}};const we={title:"Navigation/BottomNavigation",component:B,parameters:{layout:"fullscreen",docs:{description:{component:"Navegación inferior estilo móvil con iconos y etiquetas. Perfecto para aplicaciones móviles y web responsive. Incluye soporte para badges, estados activos y animaciones suaves."}}},tags:[],argTypes:{variant:{control:"select",options:["default","glass","elevated"],description:"Variante visual del componente"},showLabels:{control:"boolean",description:"Mostrar etiquetas de texto debajo de los iconos"},size:{control:"select",options:["sm","md","lg"],description:"Tamaño del componente"}}},r=[{id:"home",label:"Home",icon:t,active:!0},{id:"search",label:"Search",icon:m},{id:"notifications",label:"Notifications",icon:p,badge:5},{id:"profile",label:"Profile",icon:i}],Z=[{id:"home",label:"Home",icon:t,active:!0},{id:"search",label:"Explore",icon:m},{id:"create",label:"Create",icon:J},{id:"activity",label:"Activity",icon:H,badge:12},{id:"profile",label:"Profile",icon:i}],$=[{id:"home",label:"Home",icon:t,active:!0},{id:"search",label:"Search",icon:m},{id:"cart",label:"Cart",icon:D,badge:3},{id:"favorites",label:"Favorites",icon:H},{id:"profile",label:"Profile",icon:i}],ee=[{id:"chats",label:"Chats",icon:T,active:!0,badge:8},{id:"calls",label:"Calls",icon:p},{id:"contacts",label:"Contacts",icon:i},{id:"settings",label:"Settings",icon:O}],ae=[{id:"home",label:"Home",icon:t,active:!0},{id:"music",label:"Music",icon:W},{id:"books",label:"Books",icon:_},{id:"location",label:"Location",icon:F},{id:"profile",label:"Profile",icon:i}],h={args:{items:r,variant:"default",showLabels:!0,size:"md"},decorators:[a=>e.jsxs("div",{className:"min-h-screen bg-surface-secondary pb-24",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Bottom Navigation"}),e.jsx("p",{className:"text-text-secondary mb-8",children:"Navegación inferior con iconos y etiquetas. Perfecto para aplicaciones móviles."}),e.jsxs("div",{className:"bg-surface-primary rounded-xl p-6 shadow-sm",children:[e.jsx("h2",{className:"text-lg font-semibold text-text-primary mb-2",children:"Características"}),e.jsxs("ul",{className:"space-y-2 text-sm text-text-secondary",children:[e.jsx("li",{children:"• Iconos con etiquetas"}),e.jsx("li",{children:"• Estados activos"}),e.jsx("li",{children:"• Soporte para badges"}),e.jsx("li",{children:"• Animaciones suaves"}),e.jsx("li",{children:"• Responsive"})]})]})]}),e.jsx(a,{})]})]},v={name:"Sin Etiquetas",args:{items:r,variant:"default",showLabels:!1,size:"md"},decorators:[a=>e.jsxs("div",{className:"min-h-screen bg-surface-secondary pb-20",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Sin Etiquetas"}),e.jsx("p",{className:"text-text-secondary",children:"Versión compacta sin etiquetas de texto, solo iconos."})]}),e.jsx(a,{})]})]},f={name:"Variante Glass",args:{items:r,variant:"glass",showLabels:!0,size:"md"},decorators:[a=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 pb-24",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6 text-white",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Glass Effect"}),e.jsx("p",{className:"text-white/90",children:"Variante con efecto glassmorphism y backdrop blur."})]}),e.jsx(a,{})]})]},g={name:"Variante Elevated",args:{items:r,variant:"elevated",showLabels:!0,size:"md"},decorators:[a=>e.jsxs("div",{className:"min-h-screen bg-surface-secondary pb-24",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Elevated"}),e.jsx("p",{className:"text-text-secondary",children:"Variante con sombra elevada para mayor prominencia."})]}),e.jsx(a,{})]})]},y={name:"Tamaño Pequeño",args:{items:r,variant:"default",showLabels:!0,size:"sm"},decorators:[a=>e.jsxs("div",{className:"min-h-screen bg-surface-secondary pb-20",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Tamaño Pequeño"}),e.jsx("p",{className:"text-text-secondary",children:"Versión compacta para espacios reducidos."})]}),e.jsx(a,{})]})]},N={name:"Tamaño Mediano",args:{items:r,variant:"default",showLabels:!0,size:"md"},decorators:[a=>e.jsxs("div",{className:"min-h-screen bg-surface-secondary pb-24",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Tamaño Mediano"}),e.jsx("p",{className:"text-text-secondary",children:"Tamaño estándar recomendado."})]}),e.jsx(a,{})]})]},j={name:"Tamaño Grande",args:{items:r,variant:"default",showLabels:!0,size:"lg"},decorators:[a=>e.jsxs("div",{className:"min-h-screen bg-surface-secondary pb-28",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Tamaño Grande"}),e.jsx("p",{className:"text-text-secondary",children:"Versión más grande para mejor accesibilidad."})]}),e.jsx(a,{})]})]},w={name:"📱 Caso de Uso: Red Social",args:{items:Z,variant:"default",showLabels:!0,size:"md"},decorators:[a=>e.jsxs("div",{className:"min-h-screen bg-surface-secondary pb-24",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Red Social"}),e.jsx("p",{className:"text-text-secondary mb-8",children:"Navegación típica de una aplicación de redes sociales con secciones principales."}),e.jsx("div",{className:"bg-surface-primary rounded-xl p-6 shadow-sm",children:e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"h-48 bg-surface-secondary rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-text-tertiary",children:"Feed de contenido"})})})})]}),e.jsx(a,{})]})]},S={name:"🛒 Caso de Uso: E-commerce",args:{items:$,variant:"default",showLabels:!0,size:"md"},decorators:[a=>e.jsxs("div",{className:"min-h-screen bg-surface-secondary pb-24",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"E-commerce"}),e.jsx("p",{className:"text-text-secondary mb-8",children:"Navegación para una aplicación de compras con carrito y favoritos."}),e.jsx("div",{className:"bg-surface-primary rounded-xl p-6 shadow-sm",children:e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"h-48 bg-surface-secondary rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-text-tertiary",children:"Catálogo de productos"})})})})]}),e.jsx(a,{})]})]},I={name:"💬 Caso de Uso: Mensajería",args:{items:ee,variant:"default",showLabels:!0,size:"md"},decorators:[a=>e.jsxs("div",{className:"min-h-screen bg-surface-secondary pb-24",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Mensajería"}),e.jsx("p",{className:"text-text-secondary mb-8",children:"Navegación para una aplicación de mensajería con chats, llamadas y contactos."}),e.jsx("div",{className:"bg-surface-primary rounded-xl p-6 shadow-sm",children:e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"h-48 bg-surface-secondary rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-text-tertiary",children:"Lista de conversaciones"})})})})]}),e.jsx(a,{})]})]},C={name:"🎵 Caso de Uso: App de Medios",args:{items:ae,variant:"glass",showLabels:!0,size:"md"},decorators:[a=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 pb-24",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6 text-white",children:[e.jsx("h1",{className:"text-2xl font-bold mb-4",children:"App de Medios"}),e.jsx("p",{className:"text-white/90 mb-8",children:"Navegación para una aplicación de medios con música, libros y ubicación."}),e.jsx("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-6",children:e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"h-48 bg-white/20 rounded-lg flex items-center justify-center",children:e.jsx("span",{className:"text-white/80",children:"Contenido multimedia"})})})})]}),e.jsx(a,{})]})]},M={args:{items:[{id:"home",label:"Home",icon:t,active:!0},{id:"search",label:"Search",icon:m,active:!1},{id:"notifications",label:"Notifications",icon:p,badge:5,active:!1},{id:"profile",label:"Profile",icon:i,active:!1}]},name:"🔄 Interactivo",render:()=>{const[a,x]=R.useState("home"),u=[{id:"home",label:"Home",icon:t,active:a==="home"},{id:"search",label:"Search",icon:m,active:a==="search"},{id:"notifications",label:"Notifications",icon:p,badge:5,active:a==="notifications"},{id:"profile",label:"Profile",icon:i,active:a==="profile"}],o=c=>{x(c.id),console.log("Clicked:",c.label)};return e.jsxs("div",{className:"min-h-screen bg-surface-secondary pb-24",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Interactivo"}),e.jsx("p",{className:"text-text-secondary mb-8",children:"Haz clic en los elementos de navegación para cambiar el estado activo."}),e.jsxs("div",{className:"bg-surface-primary rounded-xl p-6 shadow-sm",children:[e.jsxs("p",{className:"text-sm text-text-secondary mb-4",children:["Estado activo: ",e.jsx("span",{className:"font-semibold text-text-primary",children:a})]}),e.jsx("div",{className:"h-48 bg-surface-secondary rounded-lg flex items-center justify-center",children:e.jsxs("span",{className:"text-text-tertiary",children:["Contenido de ",a]})})]})]}),e.jsx(B,{items:u,onItemClick:o})]})}},L={name:"🔔 Con Múltiples Badges",args:{items:[{id:"home",label:"Home",icon:t,active:!0},{id:"mail",label:"Mail",icon:K,badge:12},{id:"messages",label:"Messages",icon:T,badge:99},{id:"calendar",label:"Calendar",icon:Q,badge:3},{id:"notifications",label:"Notifications",icon:p,badge:150}],variant:"default",showLabels:!0,size:"md"},decorators:[a=>e.jsxs("div",{className:"min-h-screen bg-surface-secondary pb-24",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Con Múltiples Badges"}),e.jsx("p",{className:"text-text-secondary",children:'Ejemplo con diferentes tipos de badges, incluyendo números grandes que se muestran como "99+".'})]}),e.jsx(a,{})]})]},z={name:"🚫 Con Elementos Deshabilitados",args:{items:[{id:"home",label:"Home",icon:t,active:!0},{id:"search",label:"Search",icon:m,disabled:!0},{id:"notifications",label:"Notifications",icon:p,badge:5},{id:"profile",label:"Profile",icon:i,disabled:!0}],variant:"default",showLabels:!0,size:"md"},decorators:[a=>e.jsxs("div",{className:"min-h-screen bg-surface-secondary pb-24",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Elementos Deshabilitados"}),e.jsx("p",{className:"text-text-secondary",children:"Algunos elementos pueden estar deshabilitados y no responden a interacciones."})]}),e.jsx(a,{})]})]},E={name:"🎨 Playground",args:{items:r,variant:"default",showLabels:!0,size:"md"},decorators:[a=>e.jsxs("div",{className:"min-h-screen bg-surface-secondary pb-24",children:[e.jsxs("div",{className:"max-w-md mx-auto p-6",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Playground"}),e.jsx("p",{className:"text-text-secondary",children:"Experimenta con diferentes configuraciones usando los controles."})]}),e.jsx(a,{})]})]};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: basicItems,
    variant: 'default',
    showLabels: true,
    size: 'md'
  },
  decorators: [Story => <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Bottom Navigation</h1>
                    <p className="text-text-secondary mb-8">
                        Navegación inferior con iconos y etiquetas. Perfecto para aplicaciones móviles.
                    </p>
                    <div className="bg-surface-primary rounded-xl p-6 shadow-sm">
                        <h2 className="text-lg font-semibold text-text-primary mb-2">Características</h2>
                        <ul className="space-y-2 text-sm text-text-secondary">
                            <li>• Iconos con etiquetas</li>
                            <li>• Estados activos</li>
                            <li>• Soporte para badges</li>
                            <li>• Animaciones suaves</li>
                            <li>• Responsive</li>
                        </ul>
                    </div>
                </div>
                <Story />
            </div>]
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Sin Etiquetas',
  args: {
    items: basicItems,
    variant: 'default',
    showLabels: false,
    size: 'md'
  },
  decorators: [Story => <div className="min-h-screen bg-surface-secondary pb-20">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Sin Etiquetas</h1>
                    <p className="text-text-secondary">
                        Versión compacta sin etiquetas de texto, solo iconos.
                    </p>
                </div>
                <Story />
            </div>]
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Variante Glass',
  args: {
    items: basicItems,
    variant: 'glass',
    showLabels: true,
    size: 'md'
  },
  decorators: [Story => <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 pb-24">
                <div className="max-w-md mx-auto p-6 text-white">
                    <h1 className="text-2xl font-bold mb-4">Glass Effect</h1>
                    <p className="text-white/90">
                        Variante con efecto glassmorphism y backdrop blur.
                    </p>
                </div>
                <Story />
            </div>]
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Variante Elevated',
  args: {
    items: basicItems,
    variant: 'elevated',
    showLabels: true,
    size: 'md'
  },
  decorators: [Story => <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Elevated</h1>
                    <p className="text-text-secondary">
                        Variante con sombra elevada para mayor prominencia.
                    </p>
                </div>
                <Story />
            </div>]
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Tamaño Pequeño',
  args: {
    items: basicItems,
    variant: 'default',
    showLabels: true,
    size: 'sm'
  },
  decorators: [Story => <div className="min-h-screen bg-surface-secondary pb-20">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Tamaño Pequeño</h1>
                    <p className="text-text-secondary">Versión compacta para espacios reducidos.</p>
                </div>
                <Story />
            </div>]
}`,...y.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Tamaño Mediano',
  args: {
    items: basicItems,
    variant: 'default',
    showLabels: true,
    size: 'md'
  },
  decorators: [Story => <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Tamaño Mediano</h1>
                    <p className="text-text-secondary">Tamaño estándar recomendado.</p>
                </div>
                <Story />
            </div>]
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Tamaño Grande',
  args: {
    items: basicItems,
    variant: 'default',
    showLabels: true,
    size: 'lg'
  },
  decorators: [Story => <div className="min-h-screen bg-surface-secondary pb-28">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Tamaño Grande</h1>
                    <p className="text-text-secondary">Versión más grande para mejor accesibilidad.</p>
                </div>
                <Story />
            </div>]
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '📱 Caso de Uso: Red Social',
  args: {
    items: socialMediaItems,
    variant: 'default',
    showLabels: true,
    size: 'md'
  },
  decorators: [Story => <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Red Social</h1>
                    <p className="text-text-secondary mb-8">
                        Navegación típica de una aplicación de redes sociales con secciones principales.
                    </p>
                    <div className="bg-surface-primary rounded-xl p-6 shadow-sm">
                        <div className="space-y-4">
                            <div className="h-48 bg-surface-secondary rounded-lg flex items-center justify-center">
                                <span className="text-text-tertiary">Feed de contenido</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Story />
            </div>]
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '🛒 Caso de Uso: E-commerce',
  args: {
    items: ecommerceItems,
    variant: 'default',
    showLabels: true,
    size: 'md'
  },
  decorators: [Story => <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">E-commerce</h1>
                    <p className="text-text-secondary mb-8">
                        Navegación para una aplicación de compras con carrito y favoritos.
                    </p>
                    <div className="bg-surface-primary rounded-xl p-6 shadow-sm">
                        <div className="space-y-4">
                            <div className="h-48 bg-surface-secondary rounded-lg flex items-center justify-center">
                                <span className="text-text-tertiary">Catálogo de productos</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Story />
            </div>]
}`,...S.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '💬 Caso de Uso: Mensajería',
  args: {
    items: messagingItems,
    variant: 'default',
    showLabels: true,
    size: 'md'
  },
  decorators: [Story => <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Mensajería</h1>
                    <p className="text-text-secondary mb-8">
                        Navegación para una aplicación de mensajería con chats, llamadas y contactos.
                    </p>
                    <div className="bg-surface-primary rounded-xl p-6 shadow-sm">
                        <div className="space-y-4">
                            <div className="h-48 bg-surface-secondary rounded-lg flex items-center justify-center">
                                <span className="text-text-tertiary">Lista de conversaciones</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Story />
            </div>]
}`,...I.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '🎵 Caso de Uso: App de Medios',
  args: {
    items: mediaItems,
    variant: 'glass',
    showLabels: true,
    size: 'md'
  },
  decorators: [Story => <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 pb-24">
                <div className="max-w-md mx-auto p-6 text-white">
                    <h1 className="text-2xl font-bold mb-4">App de Medios</h1>
                    <p className="text-white/90 mb-8">
                        Navegación para una aplicación de medios con música, libros y ubicación.
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                        <div className="space-y-4">
                            <div className="h-48 bg-white/20 rounded-lg flex items-center justify-center">
                                <span className="text-white/80">Contenido multimedia</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Story />
            </div>]
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'home',
      label: 'Home',
      icon: Home,
      active: true
    }, {
      id: 'search',
      label: 'Search',
      icon: Search,
      active: false
    }, {
      id: 'notifications',
      label: 'Notifications',
      icon: Bell,
      badge: 5,
      active: false
    }, {
      id: 'profile',
      label: 'Profile',
      icon: User,
      active: false
    }]
  },
  name: '🔄 Interactivo',
  render: () => {
    const [activeId, setActiveId] = useState('home');
    const items: BottomNavigationItem[] = [{
      id: 'home',
      label: 'Home',
      icon: Home,
      active: activeId === 'home'
    }, {
      id: 'search',
      label: 'Search',
      icon: Search,
      active: activeId === 'search'
    }, {
      id: 'notifications',
      label: 'Notifications',
      icon: Bell,
      badge: 5,
      active: activeId === 'notifications'
    }, {
      id: 'profile',
      label: 'Profile',
      icon: User,
      active: activeId === 'profile'
    }];
    const handleItemClick = (item: BottomNavigationItem) => {
      setActiveId(item.id);
      console.log('Clicked:', item.label);
    };
    return <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Interactivo</h1>
                    <p className="text-text-secondary mb-8">
                        Haz clic en los elementos de navegación para cambiar el estado activo.
                    </p>
                    <div className="bg-surface-primary rounded-xl p-6 shadow-sm">
                        <p className="text-sm text-text-secondary mb-4">
                            Estado activo: <span className="font-semibold text-text-primary">{activeId}</span>
                        </p>
                        <div className="h-48 bg-surface-secondary rounded-lg flex items-center justify-center">
                            <span className="text-text-tertiary">Contenido de {activeId}</span>
                        </div>
                    </div>
                </div>
                <BottomNavigation items={items} onItemClick={handleItemClick} />
            </div>;
  }
}`,...M.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: '🔔 Con Múltiples Badges',
  args: {
    items: [{
      id: 'home',
      label: 'Home',
      icon: Home,
      active: true
    }, {
      id: 'mail',
      label: 'Mail',
      icon: Mail,
      badge: 12
    }, {
      id: 'messages',
      label: 'Messages',
      icon: MessageSquare,
      badge: 99
    }, {
      id: 'calendar',
      label: 'Calendar',
      icon: Calendar,
      badge: 3
    }, {
      id: 'notifications',
      label: 'Notifications',
      icon: Bell,
      badge: 150
    }],
    variant: 'default',
    showLabels: true,
    size: 'md'
  },
  decorators: [Story => <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Con Múltiples Badges</h1>
                    <p className="text-text-secondary">
                        Ejemplo con diferentes tipos de badges, incluyendo números grandes que se muestran como "99+".
                    </p>
                </div>
                <Story />
            </div>]
}`,...L.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '🚫 Con Elementos Deshabilitados',
  args: {
    items: [{
      id: 'home',
      label: 'Home',
      icon: Home,
      active: true
    }, {
      id: 'search',
      label: 'Search',
      icon: Search,
      disabled: true
    }, {
      id: 'notifications',
      label: 'Notifications',
      icon: Bell,
      badge: 5
    }, {
      id: 'profile',
      label: 'Profile',
      icon: User,
      disabled: true
    }],
    variant: 'default',
    showLabels: true,
    size: 'md'
  },
  decorators: [Story => <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Elementos Deshabilitados</h1>
                    <p className="text-text-secondary">
                        Algunos elementos pueden estar deshabilitados y no responden a interacciones.
                    </p>
                </div>
                <Story />
            </div>]
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '🎨 Playground',
  args: {
    items: basicItems,
    variant: 'default',
    showLabels: true,
    size: 'md'
  },
  decorators: [Story => <div className="min-h-screen bg-surface-secondary pb-24">
                <div className="max-w-md mx-auto p-6">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Playground</h1>
                    <p className="text-text-secondary">
                        Experimenta con diferentes configuraciones usando los controles.
                    </p>
                </div>
                <Story />
            </div>]
}`,...E.parameters?.docs?.source}}};const Se=["Default","WithoutLabels","Glass","Elevated","Small","Medium","Large","SocialMedia","Ecommerce","Messaging","MediaApp","Interactive","WithManyBadges","DisabledItems","Playground"];export{h as Default,z as DisabledItems,S as Ecommerce,g as Elevated,f as Glass,M as Interactive,j as Large,C as MediaApp,N as Medium,I as Messaging,E as Playground,y as Small,w as SocialMedia,L as WithManyBadges,v as WithoutLabels,Se as __namedExportsOrder,we as default};
