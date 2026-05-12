import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as j}from"./iframe-CSCYuKHF.js";import{c as i}from"./utils-DCADjnpI.js";import{m as U}from"./proxy-DgdbOAE3.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-BeIloL1I.js";const P=j.forwardRef(({items:r,variant:a="default",orientation:G="horizontal",divider:B=!1,hoverable:T=!1,density:I="comfortable",className:E,...L},V)=>{const w=G==="horizontal",t=I==="compact",q={default:"bg-surface-primary",bordered:"bg-surface-primary border border-border-primary rounded-xl",striped:"bg-surface-primary",compact:"bg-transparent"},H={default:"",bordered:"border-b border-border-primary last:border-b-0",striped:"even:bg-surface-secondary/50",compact:""},M=t?"py-2":"py-3",R=t?"gap-2":"gap-4",O=U.dl;return e.jsx(O,{ref:V,className:i("overflow-hidden",q[a],a==="bordered"&&"shadow-sm",E),initial:{opacity:0,y:8},animate:{opacity:1,y:0},transition:{duration:.22,ease:[.16,1,.3,1]},...L,children:r.map((N,D)=>e.jsxs(U.div,{className:i("group",H[a],w?`flex ${R} ${M} px-4 sm:px-6`:`flex flex-col ${R} ${M} px-4 sm:px-6`,B&&D!==r.length-1&&"border-b border-border-primary",T&&"transition-colors hover:bg-surface-secondary/30 cursor-default"),initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{duration:.2,delay:D*.03,ease:[.16,1,.3,1]},children:[e.jsx("dt",{className:i("font-semibold text-text-primary",w?"min-w-[140px] sm:min-w-[180px] flex-shrink-0":"mb-1",t?"text-sm":"text-base"),children:N.term}),e.jsx("dd",{className:i("text-text-secondary",w?"flex-1":"",t?"text-sm":"text-base"),children:N.description})]},D))})});P.displayName="DefinitionList";const A=j.forwardRef((r,a)=>e.jsx(P,{ref:a,...r,density:"compact"}));A.displayName="CompactDefinitionList";P.__docgenInfo={description:"",methods:[],displayName:"DefinitionList",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    term: React.ReactNode;
    description: React.ReactNode;
}`,signature:{properties:[{key:"term",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"description",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}],raw:"DefinitionItem[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'striped' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'striped'"},{name:"literal",value:"'compact'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},divider:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},density:{required:!1,tsType:{name:"union",raw:"'comfortable' | 'compact'",elements:[{name:"literal",value:"'comfortable'"},{name:"literal",value:"'compact'"}]},description:"",defaultValue:{value:"'comfortable'",computed:!1}}}};A.__docgenInfo={description:"",methods:[],displayName:"CompactDefinitionList",props:{variant:{required:!1,tsType:{name:"Exclude",elements:[{name:"union",raw:"'default' | 'bordered' | 'striped' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'striped'"},{name:"literal",value:"'compact'"}]},{name:"literal",value:"'compact'"}],raw:"Exclude<DefinitionListVariant, 'compact'>"},description:""}},composes:["Omit"]};const X={title:"Data Display/DefinitionList",component:P,parameters:{layout:"centered",docs:{description:{component:"Un componente de lista de definiciones (DL) elegante al estilo Apple, perfecto para mostrar pares de término-descripción como información de perfil, especificaciones de producto, o metadatos."}}},tags:[],argTypes:{variant:{control:"select",options:["default","bordered","striped","compact"],description:"Variante visual del componente"},orientation:{control:"radio",options:["horizontal","vertical"],description:"Orientación de los items"},divider:{control:"boolean",description:"Mostrar divisores entre items"},hoverable:{control:"boolean",description:"Efecto hover en los items"},density:{control:"radio",options:["comfortable","compact"],description:"Densidad del espaciado"}}},o=[{term:"Nombre",description:"Juan Pérez"},{term:"Email",description:"juan.perez@example.com"},{term:"Teléfono",description:"+52 55 1234 5678"},{term:"Ciudad",description:"Ciudad de México"},{term:"Rol",description:"Desarrollador Senior"}],z=[{term:"Modelo",description:'MacBook Pro 16"'},{term:"Procesador",description:"Apple M3 Max con CPU de 16 núcleos"},{term:"Memoria",description:"64 GB de memoria unificada"},{term:"Almacenamiento",description:"1 TB SSD"},{term:"Pantalla",description:"Liquid Retina XDR de 16.2 pulgadas"},{term:"Peso",description:"2.15 kg"}],C=[{term:"Creado",description:"23 de noviembre de 2025"},{term:"Modificado",description:"Hace 2 horas"},{term:"Autor",description:"Ana García"},{term:"Estado",description:"Publicado"}],s={args:{items:o,variant:"default",orientation:"horizontal",divider:!1,hoverable:!1,density:"comfortable"}},n={args:{items:z,variant:"bordered",orientation:"horizontal",divider:!1,hoverable:!1,density:"comfortable"}},d={args:{items:o,variant:"striped",orientation:"horizontal",divider:!1,hoverable:!1,density:"comfortable"}},c={args:{items:z,variant:"default",orientation:"horizontal",divider:!0,hoverable:!1,density:"comfortable"}},l={args:{items:o,variant:"bordered",orientation:"horizontal",divider:!1,hoverable:!0,density:"comfortable"}},m={args:{items:C,variant:"bordered",orientation:"vertical",divider:!1,hoverable:!1,density:"comfortable"}},p={args:{items:C,variant:"bordered",orientation:"horizontal",divider:!1,hoverable:!1,density:"comfortable"}},u={args:{items:o,variant:"bordered",orientation:"horizontal",divider:!1,hoverable:!1,density:"compact"}},f={args:{items:o,variant:"bordered",orientation:"horizontal",divider:!1,hoverable:!1,density:"comfortable"}},v={args:{items:z,variant:"bordered",orientation:"horizontal",divider:!1,hoverable:!0,density:"comfortable"},decorators:[r=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(r,{})})]},b={args:{items:C,variant:"default",orientation:"vertical",divider:!0,hoverable:!0,density:"comfortable"},decorators:[r=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(r,{})})]},h={name:"📱 Caso de Uso: Perfil de Usuario",args:{items:[{term:"Nombre completo",description:"Ana María González"},{term:"Correo electrónico",description:"ana.gonzalez@empresa.com"},{term:"Teléfono",description:"+52 33 9876 5432"},{term:"Departamento",description:"Ingeniería de Software"},{term:"Ubicación",description:"Guadalajara, Jalisco"},{term:"Fecha de ingreso",description:"15 de marzo de 2023"}],variant:"bordered",orientation:"horizontal",divider:!1,hoverable:!0,density:"comfortable"},decorators:[r=>e.jsx("div",{className:"w-full max-w-2xl",children:e.jsx(r,{})})]},y={name:"🖥️ Caso de Uso: Especificaciones de Producto",args:{items:[{term:"Modelo",description:"iPhone 15 Pro Max"},{term:"Pantalla",description:'Super Retina XDR de 6.7"'},{term:"Chip",description:"A17 Pro con GPU de 6 núcleos"},{term:"Cámaras",description:"Sistema de cámaras Pro de 48MP"},{term:"Batería",description:"Hasta 29 horas de reproducción de video"},{term:"Almacenamiento",description:"256GB, 512GB o 1TB"},{term:"Conectividad",description:"5G, Wi-Fi 6E, Bluetooth 5.3"},{term:"Resistencia",description:"Resistencia al agua IP68"}],variant:"striped",orientation:"horizontal",divider:!1,hoverable:!0,density:"comfortable"},decorators:[r=>e.jsx("div",{className:"w-full max-w-3xl",children:e.jsx(r,{})})]},g={name:"📄 Caso de Uso: Metadatos de Documento",args:{items:[{term:"Título",description:"Propuesta de Proyecto Q4 2025"},{term:"Autor",description:"Carlos Ramírez"},{term:"Fecha de creación",description:"1 de noviembre de 2025"},{term:"Última modificación",description:"23 de noviembre de 2025, 14:35"},{term:"Versión",description:"3.2"},{term:"Estado",description:"En revisión"},{term:"Colaboradores",description:"María López, Juan Torres, Ana Martínez"}],variant:"default",orientation:"vertical",divider:!0,hoverable:!1,density:"comfortable"},decorators:[r=>e.jsx("div",{className:"w-full max-w-xl",children:e.jsx(r,{})})]},x={name:"⚙️ Caso de Uso: Info del Sistema (Compacto)",args:{items:[{term:"Sistema operativo",description:"macOS Sonoma 14.1"},{term:"Kernel",description:"Darwin 23.1.0"},{term:"Arquitectura",description:"arm64"},{term:"CPU",description:"Apple M3 Pro (12 cores)"},{term:"RAM",description:"32 GB LPDDR5"},{term:"GPU",description:"Apple M3 Pro GPU (18 cores)"}],variant:"bordered",orientation:"horizontal",divider:!1,hoverable:!0,density:"compact"},decorators:[r=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(r,{})})]},S={name:"🎨 Playground",args:{items:z,variant:"bordered",orientation:"horizontal",divider:!1,hoverable:!0,density:"comfortable"},decorators:[r=>e.jsx("div",{className:"w-full max-w-3xl",children:e.jsx(r,{})})]};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleUserInfo,
    variant: 'default',
    orientation: 'horizontal',
    divider: false,
    hoverable: false,
    density: 'comfortable'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleProductSpecs,
    variant: 'bordered',
    orientation: 'horizontal',
    divider: false,
    hoverable: false,
    density: 'comfortable'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleUserInfo,
    variant: 'striped',
    orientation: 'horizontal',
    divider: false,
    hoverable: false,
    density: 'comfortable'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleProductSpecs,
    variant: 'default',
    orientation: 'horizontal',
    divider: true,
    hoverable: false,
    density: 'comfortable'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleUserInfo,
    variant: 'bordered',
    orientation: 'horizontal',
    divider: false,
    hoverable: true,
    density: 'comfortable'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleMetadata,
    variant: 'bordered',
    orientation: 'vertical',
    divider: false,
    hoverable: false,
    density: 'comfortable'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleMetadata,
    variant: 'bordered',
    orientation: 'horizontal',
    divider: false,
    hoverable: false,
    density: 'comfortable'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleUserInfo,
    variant: 'bordered',
    orientation: 'horizontal',
    divider: false,
    hoverable: false,
    density: 'compact'
  }
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleUserInfo,
    variant: 'bordered',
    orientation: 'horizontal',
    divider: false,
    hoverable: false,
    density: 'comfortable'
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleProductSpecs,
    variant: 'bordered',
    orientation: 'horizontal',
    divider: false,
    hoverable: true,
    density: 'comfortable'
  },
  decorators: [Story => <div className="w-full max-w-2xl">
                <Story />
            </div>]
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleMetadata,
    variant: 'default',
    orientation: 'vertical',
    divider: true,
    hoverable: true,
    density: 'comfortable'
  },
  decorators: [Story => <div className="w-full max-w-lg">
                <Story />
            </div>]
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: '📱 Caso de Uso: Perfil de Usuario',
  args: {
    items: [{
      term: 'Nombre completo',
      description: 'Ana María González'
    }, {
      term: 'Correo electrónico',
      description: 'ana.gonzalez@empresa.com'
    }, {
      term: 'Teléfono',
      description: '+52 33 9876 5432'
    }, {
      term: 'Departamento',
      description: 'Ingeniería de Software'
    }, {
      term: 'Ubicación',
      description: 'Guadalajara, Jalisco'
    }, {
      term: 'Fecha de ingreso',
      description: '15 de marzo de 2023'
    }],
    variant: 'bordered',
    orientation: 'horizontal',
    divider: false,
    hoverable: true,
    density: 'comfortable'
  },
  decorators: [Story => <div className="w-full max-w-2xl">
                <Story />
            </div>]
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '🖥️ Caso de Uso: Especificaciones de Producto',
  args: {
    items: [{
      term: 'Modelo',
      description: 'iPhone 15 Pro Max'
    }, {
      term: 'Pantalla',
      description: 'Super Retina XDR de 6.7"'
    }, {
      term: 'Chip',
      description: 'A17 Pro con GPU de 6 núcleos'
    }, {
      term: 'Cámaras',
      description: 'Sistema de cámaras Pro de 48MP'
    }, {
      term: 'Batería',
      description: 'Hasta 29 horas de reproducción de video'
    }, {
      term: 'Almacenamiento',
      description: '256GB, 512GB o 1TB'
    }, {
      term: 'Conectividad',
      description: '5G, Wi-Fi 6E, Bluetooth 5.3'
    }, {
      term: 'Resistencia',
      description: 'Resistencia al agua IP68'
    }],
    variant: 'striped',
    orientation: 'horizontal',
    divider: false,
    hoverable: true,
    density: 'comfortable'
  },
  decorators: [Story => <div className="w-full max-w-3xl">
                <Story />
            </div>]
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '📄 Caso de Uso: Metadatos de Documento',
  args: {
    items: [{
      term: 'Título',
      description: 'Propuesta de Proyecto Q4 2025'
    }, {
      term: 'Autor',
      description: 'Carlos Ramírez'
    }, {
      term: 'Fecha de creación',
      description: '1 de noviembre de 2025'
    }, {
      term: 'Última modificación',
      description: '23 de noviembre de 2025, 14:35'
    }, {
      term: 'Versión',
      description: '3.2'
    }, {
      term: 'Estado',
      description: 'En revisión'
    }, {
      term: 'Colaboradores',
      description: 'María López, Juan Torres, Ana Martínez'
    }],
    variant: 'default',
    orientation: 'vertical',
    divider: true,
    hoverable: false,
    density: 'comfortable'
  },
  decorators: [Story => <div className="w-full max-w-xl">
                <Story />
            </div>]
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: '⚙️ Caso de Uso: Info del Sistema (Compacto)',
  args: {
    items: [{
      term: 'Sistema operativo',
      description: 'macOS Sonoma 14.1'
    }, {
      term: 'Kernel',
      description: 'Darwin 23.1.0'
    }, {
      term: 'Arquitectura',
      description: 'arm64'
    }, {
      term: 'CPU',
      description: 'Apple M3 Pro (12 cores)'
    }, {
      term: 'RAM',
      description: '32 GB LPDDR5'
    }, {
      term: 'GPU',
      description: 'Apple M3 Pro GPU (18 cores)'
    }],
    variant: 'bordered',
    orientation: 'horizontal',
    divider: false,
    hoverable: true,
    density: 'compact'
  },
  decorators: [Story => <div className="w-full max-w-lg">
                <Story />
            </div>]
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '🎨 Playground',
  args: {
    items: sampleProductSpecs,
    variant: 'bordered',
    orientation: 'horizontal',
    divider: false,
    hoverable: true,
    density: 'comfortable'
  },
  decorators: [Story => <div className="w-full max-w-3xl">
                <Story />
            </div>]
}`,...S.parameters?.docs?.source}}};const K=["Default","Bordered","Striped","WithDividers","Hoverable","VerticalOrientation","HorizontalOrientation","CompactDensity","ComfortableDensity","BorderedStripedHoverable","VerticalWithDividers","UserProfile","ProductSpecifications","DocumentMetadata","CompactSystemInfo","Playground"];export{n as Bordered,v as BorderedStripedHoverable,f as ComfortableDensity,u as CompactDensity,x as CompactSystemInfo,s as Default,g as DocumentMetadata,p as HorizontalOrientation,l as Hoverable,S as Playground,y as ProductSpecifications,d as Striped,h as UserProfile,m as VerticalOrientation,b as VerticalWithDividers,c as WithDividers,K as __namedExportsOrder,X as default};
