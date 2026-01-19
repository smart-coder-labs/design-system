import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as O}from"./iframe-vYzePaRW.js";import{c as a}from"./utils-CDN07tui.js";import{B as V}from"./Badge-Cot3l83C.js";import{m as B}from"./proxy-DMGrdN83.js";import{C as k}from"./calendar-S8v8DPTT.js";import{M as I}from"./map-pin-CN1M_UUH.js";import{U as u}from"./users-Csk4Pzas.js";import{c as C}from"./createLucideIcon-Ckxz52bH.js";import{G as U}from"./globe-jchjgPP1.js";import{C as S}from"./clock-Bhc8MjSl.js";import{A as _}from"./activity-CLTsJb0R.js";import"./preload-helper-PPVm8Dsz.js";const F=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]],G=C("bookmark-check",F);const W=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],J=C("shield-check",W),g=O.forwardRef(({eyebrow:s,title:A,subtitle:h,description:f,badges:v,metadata:x,metadataColumns:M=2,media:N,actions:w,footer:R,layout:j="stacked",variant:q="default",align:r="start",className:P,...E},D)=>{const T=B.section,L={default:"bg-surface-primary border border-border-primary shadow-sm",soft:"bg-surface-secondary/60 border border-border-primary/50",panel:"bg-surface-primary/90 border border-border-primary shadow-lg",glass:"bg-white/5 dark:bg-white/2 backdrop-blur-2xl border border-white/10 shadow-[0_20px_80px_rgba(15,23,42,0.15)]"},z={1:"grid-cols-1",2:"grid-cols-1 sm:grid-cols-2",3:"grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"};return e.jsxs(T,{ref:D,className:a("rounded-3xl p-6 sm:p-8 space-y-6",L[q],P),initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,ease:[.16,1,.3,1]},...E,children:[e.jsx("div",{className:a(j==="split"?"grid gap-8 lg:grid-cols-[1.8fr_1fr]":"space-y-10"),children:e.jsxs("div",{className:a("space-y-7",r==="center"&&"text-center items-center flex flex-col"),children:[s&&e.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.35em] text-text-tertiary",children:s}),e.jsxs("div",{className:"space-y-3 w-full",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:a("text-3xl font-semibold tracking-tight text-text-primary",r==="center"&&"text-center"),children:A}),h&&e.jsx("p",{className:a("text-lg text-text-secondary",r==="center"&&"text-center"),children:h})]}),v&&v.length>0&&e.jsx("div",{className:a("flex flex-wrap gap-2",r==="center"&&"justify-center"),children:v.map((t,y)=>e.jsx(V,{size:"sm",className:"bg-surface-secondary/60 border border-border-primary/60 text-text-secondary",children:t},y))})]}),f&&e.jsx("div",{className:a("text-base text-text-secondary leading-relaxed max-w-2xl",r==="center"&&"mx-auto text-center"),children:f}),w&&e.jsx("div",{className:a("flex flex-wrap gap-3",r==="center"&&"justify-center"),children:w}),N&&e.jsx("div",{className:"overflow-hidden rounded-2xl border border-border-primary/60 bg-surface-secondary/40",children:N}),x&&x.length>0&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-xs font-semibold uppercase tracking-[0.3em] text-text-tertiary",children:"Detalles"}),e.jsx("div",{className:a("grid gap-6",z[M]),children:x.map((t,y)=>e.jsxs("div",{className:"rounded-2xl border border-border-primary/40 bg-surface-secondary/30 p-5 space-y-1.5",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-text-tertiary",children:[t.icon&&e.jsx("span",{className:"text-text-tertiary",children:t.icon}),e.jsx("span",{children:t.label})]}),e.jsx("div",{className:"text-text-primary text-lg font-semibold break-words",children:t.value}),t.hint&&e.jsx("p",{className:"text-sm text-text-secondary",children:t.hint})]},y))})]})]})}),j==="stacked"&&R&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),e.jsx("div",{className:"rounded-2xl border border-dashed border-border-primary/60 p-4 text-sm text-text-secondary",children:R})]})]})});g.displayName="DescriptionBlock";g.__docgenInfo={description:"",methods:[],displayName:"DescriptionBlock",props:{eyebrow:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},badges:{required:!1,tsType:{name:"Array",elements:[{name:"ReactReactNode",raw:"React.ReactNode"}],raw:"React.ReactNode[]"},description:""},metadata:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    label: React.ReactNode;
    value: React.ReactNode;
    icon?: React.ReactNode;
    hint?: React.ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"hint",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"DescriptionMetadataItem[]"},description:""},metadataColumns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"}]},description:"",defaultValue:{value:"2",computed:!1}},media:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},layout:{required:!1,tsType:{name:"union",raw:"'stacked' | 'split'",elements:[{name:"literal",value:"'stacked'"},{name:"literal",value:"'split'"}]},description:"",defaultValue:{value:"'stacked'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'soft' | 'panel' | 'glass'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'soft'"},{name:"literal",value:"'panel'"},{name:"literal",value:"'glass'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"}]},description:"",defaultValue:{value:"'start'",computed:!1}}},composes:["Omit"]};const b=[{label:"Fecha de lanzamiento",value:"15 Feb 2026",icon:e.jsx(k,{className:"w-4 h-4"}),hint:"Semana 7 del roadmap anual"},{label:"Ubicación principal",value:"Cupertino · Presencial / Híbrido",icon:e.jsx(I,{className:"w-4 h-4"}),hint:"Campus Apple Park"},{label:"Equipo responsable",value:"VisionOS Experience",icon:e.jsx(u,{className:"w-4 h-4"}),hint:"Design + Engineering + Content"},{label:"Certificación",value:"Security Level 3",icon:e.jsx(J,{className:"w-4 h-4"}),hint:"Auditoría completada el 10 Feb"}],oe={title:"Data Display/DescriptionBlock",component:g,parameters:{layout:"padded",backgrounds:{default:"light"}},tags:[]},i={args:{title:"Descripción básica",subtitle:"Variante minimalista sin metadata ni highlights",description:"Este bloque de descripción utiliza la variante minimalista, enfocándose únicamente en el título, subtítulo y descripción sin elementos adicionales."}},o={args:{eyebrow:"Initiative",title:"Spatial Collaboration Suite",subtitle:"A bordo del plan VisionOS 2.3",description:"Nuevo módulo espacial que sincroniza pizarras 3D, notas persistentes y playback contextual para equipos distribuidos.",badges:["Phase 2","Priority: Alta"],metadata:b,variant:"default"}},n={args:{eyebrow:"Programa",title:"Apple Creative Labs",subtitle:"Cohorte Primavera 2026",description:"Laboratorio enfocado en experiencias multisensoriales y prototipos Vision Pro. Incluye mentoría semanal y sesiones con equipo de human interface.",badges:["Cupos limitados","Mentoría Senior"],metadata:b.slice(0,2),variant:"soft"}},l={args:{eyebrow:"Operational Briefing",title:"Incident Response · Cluster Atlas",subtitle:"Cobertura global · 11 regiones activas",description:"Panel ejecutivo con métricas de fiabilidad, responsables on-call y últimas decisiones tomadas por el comité de continuidad.",metadata:b,layout:"split",variant:"panel",footer:e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"font-semibold text-text-primary",children:"Estado"}),e.jsx("p",{className:"text-text-secondary",children:"War room desactivado · Escalado al runbook estándar."})]})}},c={args:{eyebrow:"Story",title:"VisionOS Immersive Briefing",subtitle:"Módulos narrativos + spatial audio",description:"Experiencia de aprendizaje diseñada para liderazgos que necesitan entender nuevas dinámicas espaciales y herramientas colaborativas.",metadata:b,media:e.jsx("div",{className:"aspect-video bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/30 p-6 flex items-end",children:e.jsxs("div",{className:"text-black/90",children:[e.jsx("p",{className:"text-sm uppercase tracking-[0.4em]",children:"VisionOS"}),e.jsx("p",{className:"text-2xl font-semibold",children:"Immersive Playbook"})]})}),variant:"glass",layout:"stacked"}},d={name:"🌍 Caso de Uso: Plan de Rollout Enterprise",args:{eyebrow:"Deployment",title:"Programa Modular LATAM",subtitle:"Fase 3 · Integraciones con infraestructura local",description:"Estado resumido del despliegue para partners estratégicos en LATAM, incluyendo hitos legales y adopción beta.",badges:["Legal listo","Soporte 24/7","Versión 2.1"],metadata:[{label:"Responsable",value:"Carla Dominguez",icon:e.jsx(u,{className:"w-4 h-4"})},{label:"Próximo hito",value:"28 Feb · Consejo regional",icon:e.jsx(k,{className:"w-4 h-4"})},{label:"Sedes",value:"México, Colombia, Chile",icon:e.jsx(U,{className:"w-4 h-4"})}],layout:"split",variant:"default",footer:"Trackeado en tiempo real via Command Center LATAM."},decorators:[s=>e.jsx("div",{className:"w-full max-w-5xl mx-auto",children:e.jsx(s,{})})]},m={name:"📘 Caso de Uso: Narrative Briefing para Producto",args:{eyebrow:"Narrative",title:"Guided Learning Journey",subtitle:"Bundle para Product Marketing + AI",description:"Documento vivo que alinea storytelling, métricas clave y responsables de cada capítulo de lanzamiento.",badges:["Story-driven","Actualizado diariamente"],metadata:[{label:"Editor principal",value:"Noah Sterling",icon:e.jsx(u,{className:"w-4 h-4"})},{label:"Longitud",value:"18 capítulos · 64 assets",icon:e.jsx(G,{className:"w-4 h-4"})},{label:"Modo",value:"Async · On demand",icon:e.jsx(S,{className:"w-4 h-4"})}],variant:"glass",layout:"stacked",footer:"Distribución mediante Apple Briefings · versión 1.6."}},p={name:"🛠️ Caso de Uso: Snapshot Operativo en Tiempo Real",args:{eyebrow:"Runbook",title:"Critical Maintenance Window",subtitle:"Cluster Aurora · Región us-west-2",description:"Estado resumido para ejecutivos durante ventanas críticas: responsables on-call, salud de servicios y próximos pasos.",badges:["All-hands ready","Estado: Monitoreando"],metadata:[{label:"On-call actual",value:"Victor Li",icon:e.jsx(u,{className:"w-4 h-4"})},{label:"Duración restante",value:"01:42:16",icon:e.jsx(S,{className:"w-4 h-4"})},{label:"Alcance",value:"Servicios Core + Billing",icon:e.jsx(_,{className:"w-4 h-4"})}],layout:"split",variant:"panel",footer:"Siguiente checkpoint automático en 15 minutos."},decorators:[s=>e.jsx("div",{className:"w-full max-w-6xl mx-auto",children:e.jsx(s,{})})]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Descripción básica',
    subtitle: 'Variante minimalista sin metadata ni highlights',
    description: 'Este bloque de descripción utiliza la variante minimalista, enfocándose únicamente en el título, subtítulo y descripción sin elementos adicionales.'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Initiative',
    title: 'Spatial Collaboration Suite',
    subtitle: 'A bordo del plan VisionOS 2.3',
    description: 'Nuevo módulo espacial que sincroniza pizarras 3D, notas persistentes y playback contextual para equipos distribuidos.',
    badges: ['Phase 2', 'Priority: Alta'],
    metadata: baseMetadata,
    variant: 'default'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Programa',
    title: 'Apple Creative Labs',
    subtitle: 'Cohorte Primavera 2026',
    description: 'Laboratorio enfocado en experiencias multisensoriales y prototipos Vision Pro. Incluye mentoría semanal y sesiones con equipo de human interface.',
    badges: ['Cupos limitados', 'Mentoría Senior'],
    metadata: baseMetadata.slice(0, 2),
    variant: 'soft'
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Operational Briefing',
    title: 'Incident Response · Cluster Atlas',
    subtitle: 'Cobertura global · 11 regiones activas',
    description: 'Panel ejecutivo con métricas de fiabilidad, responsables on-call y últimas decisiones tomadas por el comité de continuidad.',
    metadata: baseMetadata,
    layout: 'split',
    variant: 'panel',
    footer: <div className="space-y-1">
                <p className="font-semibold text-text-primary">Estado</p>
                <p className="text-text-secondary">War room desactivado · Escalado al runbook estándar.</p>
            </div>
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    eyebrow: 'Story',
    title: 'VisionOS Immersive Briefing',
    subtitle: 'Módulos narrativos + spatial audio',
    description: 'Experiencia de aprendizaje diseñada para liderazgos que necesitan entender nuevas dinámicas espaciales y herramientas colaborativas.',
    metadata: baseMetadata,
    media: <div className="aspect-video bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-purple/30 p-6 flex items-end">
                <div className="text-black/90">
                    <p className="text-sm uppercase tracking-[0.4em]">VisionOS</p>
                    <p className="text-2xl font-semibold">Immersive Playbook</p>
                </div>
            </div>,
    variant: 'glass',
    layout: 'stacked'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: '🌍 Caso de Uso: Plan de Rollout Enterprise',
  args: {
    eyebrow: 'Deployment',
    title: 'Programa Modular LATAM',
    subtitle: 'Fase 3 · Integraciones con infraestructura local',
    description: 'Estado resumido del despliegue para partners estratégicos en LATAM, incluyendo hitos legales y adopción beta.',
    badges: ['Legal listo', 'Soporte 24/7', 'Versión 2.1'],
    metadata: [{
      label: 'Responsable',
      value: 'Carla Dominguez',
      icon: <Users className="w-4 h-4" />
    }, {
      label: 'Próximo hito',
      value: '28 Feb · Consejo regional',
      icon: <Calendar className="w-4 h-4" />
    }, {
      label: 'Sedes',
      value: 'México, Colombia, Chile',
      icon: <Globe className="w-4 h-4" />
    }],
    layout: 'split',
    variant: 'default',
    footer: 'Trackeado en tiempo real via Command Center LATAM.'
  },
  decorators: [StoryComponent => <div className="w-full max-w-5xl mx-auto">
                <StoryComponent />
            </div>]
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '📘 Caso de Uso: Narrative Briefing para Producto',
  args: {
    eyebrow: 'Narrative',
    title: 'Guided Learning Journey',
    subtitle: 'Bundle para Product Marketing + AI',
    description: 'Documento vivo que alinea storytelling, métricas clave y responsables de cada capítulo de lanzamiento.',
    badges: ['Story-driven', 'Actualizado diariamente'],
    metadata: [{
      label: 'Editor principal',
      value: 'Noah Sterling',
      icon: <Users className="w-4 h-4" />
    }, {
      label: 'Longitud',
      value: '18 capítulos · 64 assets',
      icon: <BookmarkCheck className="w-4 h-4" />
    }, {
      label: 'Modo',
      value: 'Async · On demand',
      icon: <Clock className="w-4 h-4" />
    }],
    variant: 'glass',
    layout: 'stacked',
    footer: 'Distribución mediante Apple Briefings · versión 1.6.'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '🛠️ Caso de Uso: Snapshot Operativo en Tiempo Real',
  args: {
    eyebrow: 'Runbook',
    title: 'Critical Maintenance Window',
    subtitle: 'Cluster Aurora · Región us-west-2',
    description: 'Estado resumido para ejecutivos durante ventanas críticas: responsables on-call, salud de servicios y próximos pasos.',
    badges: ['All-hands ready', 'Estado: Monitoreando'],
    metadata: [{
      label: 'On-call actual',
      value: 'Victor Li',
      icon: <Users className="w-4 h-4" />
    }, {
      label: 'Duración restante',
      value: '01:42:16',
      icon: <Clock className="w-4 h-4" />
    }, {
      label: 'Alcance',
      value: 'Servicios Core + Billing',
      icon: <Activity className="w-4 h-4" />
    }],
    layout: 'split',
    variant: 'panel',
    footer: 'Siguiente checkpoint automático en 15 minutos.'
  },
  decorators: [StoryComponent => <div className="w-full max-w-6xl mx-auto">
                <StoryComponent />
            </div>]
}`,...p.parameters?.docs?.source}}};const ne=["MinimalArgs","DefaultOverview","SoftPanel","SplitLayout","WithMedia","EnterpriseRollout","ProductNarrative","OpsSnapshot"];export{o as DefaultOverview,d as EnterpriseRollout,i as MinimalArgs,p as OpsSnapshot,m as ProductNarrative,n as SoftPanel,l as SplitLayout,c as WithMedia,ne as __namedExportsOrder,oe as default};
