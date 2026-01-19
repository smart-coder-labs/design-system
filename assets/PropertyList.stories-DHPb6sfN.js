import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-B3ue83QT.js";import{c as i}from"./utils-CDN07tui.js";import{m as W}from"./proxy-f4HTbMBa.js";import{C as oe}from"./chevron-right-VrDVB84v.js";import{A as de}from"./index-Cd7JNL-O.js";import{F as R}from"./file-BW9f-8M-.js";import{H as D}from"./hard-drive-BRmoLwIh.js";import{C as d}from"./calendar-B2arQJ-F.js";import{U as O}from"./user-CzplhPzK.js";import{M as Y}from"./monitor-BOhDzAEF.js";import{C as K}from"./cpu-D-inw_0l.js";import{S as _}from"./server-cYqMEvuj.js";import{H as X}from"./hash-DwlCW-yr.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-DEqxIg5F.js";const B=p.forwardRef(({sections:a,variant:b="default",size:c="md",collapsible:s=!0,dividers:J=!0,className:Q,...Z},ee)=>{const[ae,re]=p.useState(new Set(a.filter(r=>r.defaultExpanded!==!1).map(r=>r.id))),[le,T]=p.useState(null),[U,q]=p.useState(""),se=r=>{s&&re(m=>{const t=new Set(m);return t.has(r)?t.delete(r):t.add(r),t})},te=(r,m,t)=>{const F=`${r}-${m}`;T(F),q(String(t.value))},G=r=>{r.onChange&&r.onChange(U),T(null)},H=()=>{T(null)},u={sm:{label:"text-xs",value:"text-sm",padding:"px-3 py-2",headerPadding:"px-3 py-2"},md:{label:"text-xs",value:"text-sm",padding:"px-4 py-3",headerPadding:"px-4 py-3"},lg:{label:"text-sm",value:"text-base",padding:"px-5 py-4",headerPadding:"px-5 py-4"}},ie={default:"bg-surface-primary",bordered:"bg-surface-primary border border-border-primary rounded-xl shadow-sm overflow-hidden",inset:"bg-surface-secondary rounded-lg"};return e.jsx("div",{ref:ee,className:i("overflow-hidden",ie[b],Q),...Z,children:a.map((r,m)=>{const t=ae.has(r.id),F=r.title&&(s||r.title);return e.jsxs("div",{className:i(m!==0&&b!=="bordered"&&"border-t border-border-primary"),children:[F&&e.jsxs("button",{onClick:()=>se(r.id),disabled:!s,className:i("w-full flex items-center justify-between text-left bg-surface-secondary/50 border-b border-border-primary",u[c].headerPadding,s&&"hover:bg-surface-secondary transition-colors cursor-pointer",!s&&"cursor-default"),children:[e.jsx("span",{className:"text-[11px] font-bold text-text-secondary uppercase tracking-wider",children:r.title}),s&&e.jsx(W.div,{animate:{rotate:t?90:0},transition:{duration:.15},children:e.jsx(oe,{className:"w-3.5 h-3.5 text-text-tertiary"})})]}),e.jsx(de,{initial:!1,children:(t||!s)&&e.jsx(W.div,{initial:s?{height:0,opacity:0}:!1,animate:{height:"auto",opacity:1},exit:s?{height:0,opacity:0}:{},transition:{duration:.2,ease:[.16,1,.3,1]},className:"overflow-hidden",children:r.items.map((l,k)=>{const V=`${r.id}-${k}`,L=le===V;return e.jsxs("div",{className:i("flex items-center justify-between group",u[c].padding,J&&k!==r.items.length-1&&"border-b border-border-secondary",l.editable&&!L&&"hover:bg-surface-secondary/30 cursor-pointer","transition-colors"),onClick:()=>{l.editable&&!L&&te(r.id,k,l)},children:[e.jsxs("div",{className:"flex items-center gap-2 flex-shrink-0 min-w-[120px] max-w-[160px]",children:[l.icon&&e.jsx("span",{className:"text-text-tertiary flex-shrink-0",children:l.icon}),e.jsx("span",{className:i("font-medium text-text-secondary truncate",u[c].label),children:l.label})]}),e.jsx("div",{className:"flex-1 text-right min-w-0 pl-4",children:L?e.jsxs("div",{className:"flex items-center gap-2 justify-end",onClick:o=>o.stopPropagation(),children:[e.jsx("input",{type:"text",value:U,onChange:o=>q(o.target.value),onKeyDown:o=>{o.key==="Enter"&&G(l),o.key==="Escape"&&H()},className:i("flex-1 bg-surface-primary border border-accent-blue rounded-md px-2 py-1 text-right focus:outline-none focus:ring-2 focus:ring-accent-blue/30",u[c].value),autoFocus:!0}),e.jsx("button",{onClick:()=>G(l),className:"text-accent-blue hover:text-accent-blue-hover text-xs font-semibold",children:"OK"}),e.jsx("button",{onClick:H,className:"text-text-tertiary hover:text-text-secondary text-xs",children:"Cancel"})]}):e.jsx("span",{className:i("text-text-primary break-words leading-relaxed",u[c].value,l.editable&&"group-hover:text-accent-blue transition-colors"),children:l.value})})]},V)})})})]},r.id)})})});B.displayName="PropertyList";const $=p.forwardRef((a,b)=>e.jsx(B,{ref:b,...a,size:"sm"}));$.displayName="CompactPropertyList";B.__docgenInfo={description:"",methods:[],displayName:"PropertyList",props:{sections:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    id: string;
    title?: string;
    items: PropertyItem[];
    defaultExpanded?: boolean;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"title",value:{name:"string",required:!1}},{key:"items",value:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
    label: React.ReactNode;
    value: React.ReactNode;
    icon?: React.ReactNode;
    editable?: boolean;
    onChange?: (value: string) => void;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"editable",value:{name:"boolean",required:!1}},{key:"onChange",value:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}},required:!1}}]}}],raw:"PropertyItem[]",required:!0}},{key:"defaultExpanded",value:{name:"boolean",required:!1}}]}}],raw:"PropertySection[]"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'inset'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'inset'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},collapsible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},dividers:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};$.__docgenInfo={description:"",methods:[],displayName:"CompactPropertyList",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'bordered' | 'inset'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'inset'"}]},description:""}},composes:["Omit"]};const Pe={title:"Data Display/PropertyList",component:B,parameters:{layout:"centered",docs:{description:{component:"Un componente al estilo macOS Property List para mostrar información estructurada en secciones colapsables. Perfecto para inspectores, paneles de configuración y detalles de archivos."}}},tags:[],argTypes:{variant:{control:"select",options:["default","bordered","inset"],description:"Variante visual del componente"},size:{control:"radio",options:["sm","md","lg"],description:"Tamaño del texto y espaciado"},collapsible:{control:"boolean",description:"Permitir colapsar secciones"},dividers:{control:"boolean",description:"Mostrar divisores entre items"}}},v=[{id:"general",title:"General",items:[{label:"Kind",value:"Folder",icon:e.jsx(R,{className:"w-3.5 h-3.5"})},{label:"Size",value:"1.2 GB",icon:e.jsx(D,{className:"w-3.5 h-3.5"})},{label:"Where",value:"/Users/user/Documents",icon:e.jsx(R,{className:"w-3.5 h-3.5"})},{label:"Created",value:"Nov 15, 2025, 10:30 AM",icon:e.jsx(d,{className:"w-3.5 h-3.5"})},{label:"Modified",value:"Nov 23, 2025, 2:45 PM",icon:e.jsx(d,{className:"w-3.5 h-3.5"})}],defaultExpanded:!0},{id:"sharing",title:"Sharing & Permissions",items:[{label:"Owner",value:"John Doe",icon:e.jsx(O,{className:"w-3.5 h-3.5"})},{label:"Permissions",value:"Read & Write"},{label:"Shared",value:"No"}],defaultExpanded:!1}],n=[{id:"hardware",title:"Hardware",items:[{label:"Model",value:'MacBook Pro 16"',icon:e.jsx(Y,{className:"w-3.5 h-3.5"})},{label:"Chip",value:"Apple M3 Max",icon:e.jsx(K,{className:"w-3.5 h-3.5"})},{label:"Memory",value:"64 GB",icon:e.jsx(_,{className:"w-3.5 h-3.5"})},{label:"Storage",value:"1 TB SSD",icon:e.jsx(D,{className:"w-3.5 h-3.5"})}],defaultExpanded:!0},{id:"software",title:"Software",items:[{label:"System",value:"macOS Sonoma 14.1"},{label:"Kernel",value:"Darwin 23.1.0"},{label:"Build",value:"23B74"}],defaultExpanded:!0}],ne=[{id:"display",title:"Display",items:[{label:"Theme",value:"Auto",editable:!0},{label:"Font Size",value:"14px",editable:!0},{label:"Line Height",value:"1.5",editable:!0}],defaultExpanded:!0},{id:"editor",title:"Editor",items:[{label:"Tab Size",value:"2",editable:!0},{label:"Auto Save",value:"On"},{label:"Format on Save",value:"Yes"}],defaultExpanded:!1}],x={args:{sections:v,variant:"default",size:"md",collapsible:!0,dividers:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(a,{})})]},f={args:{sections:n,variant:"bordered",size:"md",collapsible:!0,dividers:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(a,{})})]},y={args:{sections:v,variant:"inset",size:"md",collapsible:!0,dividers:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(a,{})})]},h={args:{sections:n,variant:"bordered",size:"md",collapsible:!1,dividers:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(a,{})})]},g={args:{sections:v,variant:"bordered",size:"md",collapsible:!0,dividers:!1},decorators:[a=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(a,{})})]},w={args:{sections:n,variant:"bordered",size:"sm",collapsible:!0,dividers:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-sm",children:e.jsx(a,{})})]},S={args:{sections:n,variant:"bordered",size:"md",collapsible:!0,dividers:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(a,{})})]},N={args:{sections:n,variant:"bordered",size:"lg",collapsible:!0,dividers:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(a,{})})]},j={name:"🎨 Con Iconos",args:{sections:v,variant:"bordered",size:"md",collapsible:!0,dividers:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(a,{})})]},C={name:"✏️ Editable",args:{sections:ne,variant:"bordered",size:"md",collapsible:!1,dividers:!0},decorators:[a=>e.jsxs("div",{className:"w-full max-w-md",children:[e.jsx(a,{}),e.jsx("p",{className:"text-xs text-text-tertiary mt-4 text-center",children:"Haz click en los valores para editarlos"})]})]},P={name:"📁 Caso de Uso: Inspector de Archivo (macOS)",args:{sections:[{id:"general",title:"General",items:[{label:"Kind",value:"JPEG Image",icon:e.jsx(R,{className:"w-3.5 h-3.5"})},{label:"Size",value:"2.4 MB (2,456,789 bytes)",icon:e.jsx(D,{className:"w-3.5 h-3.5"})},{label:"Where",value:"/Users/ana/Pictures/Vacation",icon:e.jsx(R,{className:"w-3.5 h-3.5"})},{label:"Created",value:"November 15, 2025 at 10:30 AM",icon:e.jsx(d,{className:"w-3.5 h-3.5"})},{label:"Modified",value:"November 23, 2025 at 2:45 PM",icon:e.jsx(d,{className:"w-3.5 h-3.5"})},{label:"Last opened",value:"Today at 11:20 AM",icon:e.jsx(d,{className:"w-3.5 h-3.5"})}],defaultExpanded:!0},{id:"more",title:"More Info",items:[{label:"Dimensions",value:"4032 × 3024"},{label:"Color space",value:"Display P3"},{label:"Color profile",value:"Display P3"},{label:"Alpha channel",value:"No"}],defaultExpanded:!1},{id:"permissions",title:"Sharing & Permissions",items:[{label:"Owner",value:"Ana García",icon:e.jsx(O,{className:"w-3.5 h-3.5"})},{label:"Access",value:"Read & Write"},{label:"Group",value:"staff"},{label:"Others",value:"Read only"}],defaultExpanded:!1}],variant:"bordered",size:"md",collapsible:!0,dividers:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(a,{})})]},z={name:"💻 Caso de Uso: Información del Sistema",args:{sections:[{id:"hardware",title:"Hardware Overview",items:[{label:"Model Name",value:"MacBook Pro",icon:e.jsx(Y,{className:"w-3.5 h-3.5"})},{label:"Model Identifier",value:"Mac15,6"},{label:"Chip",value:"Apple M3 Max",icon:e.jsx(K,{className:"w-3.5 h-3.5"})},{label:"Total Number of Cores",value:"16 (12 performance and 4 efficiency)"},{label:"Memory",value:"64 GB",icon:e.jsx(_,{className:"w-3.5 h-3.5"})},{label:"Serial Number",value:"C02YX1ABMD6M",icon:e.jsx(X,{className:"w-3.5 h-3.5"})}],defaultExpanded:!0},{id:"display",title:"Display",items:[{label:"Type",value:"Liquid Retina XDR"},{label:"Resolution",value:"3456 × 2234 (254 PPI)"},{label:"Native Resolution",value:"3024 × 1964"},{label:"Color",value:"P3, 1,000,000,000 colors"}],defaultExpanded:!0},{id:"storage",title:"Storage",items:[{label:"Capacity",value:"1 TB",icon:e.jsx(D,{className:"w-3.5 h-3.5"})},{label:"Available",value:"412.8 GB"},{label:"Used",value:"587.2 GB"},{label:"File System",value:"APFS"}],defaultExpanded:!1}],variant:"bordered",size:"md",collapsible:!0,dividers:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-lg",children:e.jsx(a,{})})]},E={name:"⚙️ Caso de Uso: Configuración de App",args:{sections:[{id:"appearance",title:"Appearance",items:[{label:"Theme",value:"Auto",editable:!0},{label:"Color Scheme",value:"Blue"},{label:"Font Size",value:"14px",editable:!0},{label:"Line Height",value:"1.6",editable:!0},{label:"Sidebar Width",value:"280px",editable:!0}],defaultExpanded:!0},{id:"editor",title:"Editor",items:[{label:"Tab Size",value:"2",editable:!0},{label:"Word Wrap",value:"On"},{label:"Auto Save",value:"After Delay"},{label:"Format On Save",value:"Yes"},{label:"Trim Trailing Whitespace",value:"Yes"}],defaultExpanded:!0},{id:"terminal",title:"Terminal",items:[{label:"Shell",value:"zsh"},{label:"Font Family",value:"Menlo",editable:!0},{label:"Font Size",value:"12px",editable:!0},{label:"Cursor Style",value:"Block"}],defaultExpanded:!1}],variant:"bordered",size:"md",collapsible:!0,dividers:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(a,{})})]},M={name:"📦 Caso de Uso: Metadatos de Proyecto",args:{sections:[{id:"project",title:"Project Info",items:[{label:"Name",value:"Design System"},{label:"Version",value:"3.2.1"},{label:"Author",value:"Smart Coder Labs",icon:e.jsx(O,{className:"w-3.5 h-3.5"})},{label:"License",value:"MIT"},{label:"Repository",value:"github.com/smart-coder-labs/ds"}],defaultExpanded:!0},{id:"build",title:"Build Info",items:[{label:"Build Number",value:"1234",icon:e.jsx(X,{className:"w-3.5 h-3.5"})},{label:"Build Date",value:"Nov 23, 2025",icon:e.jsx(d,{className:"w-3.5 h-3.5"})},{label:"Environment",value:"Production"},{label:"Node Version",value:"20.10.0"}],defaultExpanded:!1}],variant:"bordered",size:"md",collapsible:!0,dividers:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(a,{})})]},A={name:"📏 Versión Compacta",args:{sections:n,variant:"bordered",size:"sm",collapsible:!0,dividers:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-sm",children:e.jsx(a,{})})]},I={name:"🎨 Playground",args:{sections:v,variant:"bordered",size:"md",collapsible:!0,dividers:!0},decorators:[a=>e.jsx("div",{className:"w-full max-w-md",children:e.jsx(a,{})})]};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    sections: sampleFileInfo,
    variant: 'default',
    size: 'md',
    collapsible: true,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-md">
                <Story />
            </div>]
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    sections: sampleSystemInfo,
    variant: 'bordered',
    size: 'md',
    collapsible: true,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-md">
                <Story />
            </div>]
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    sections: sampleFileInfo,
    variant: 'inset',
    size: 'md',
    collapsible: true,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-md">
                <Story />
            </div>]
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    sections: sampleSystemInfo,
    variant: 'bordered',
    size: 'md',
    collapsible: false,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-md">
                <Story />
            </div>]
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    sections: sampleFileInfo,
    variant: 'bordered',
    size: 'md',
    collapsible: true,
    dividers: false
  },
  decorators: [Story => <div className="w-full max-w-md">
                <Story />
            </div>]
}`,...g.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    sections: sampleSystemInfo,
    variant: 'bordered',
    size: 'sm',
    collapsible: true,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-sm">
                <Story />
            </div>]
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    sections: sampleSystemInfo,
    variant: 'bordered',
    size: 'md',
    collapsible: true,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-md">
                <Story />
            </div>]
}`,...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    sections: sampleSystemInfo,
    variant: 'bordered',
    size: 'lg',
    collapsible: true,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-lg">
                <Story />
            </div>]
}`,...N.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '🎨 Con Iconos',
  args: {
    sections: sampleFileInfo,
    variant: 'bordered',
    size: 'md',
    collapsible: true,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-md">
                <Story />
            </div>]
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '✏️ Editable',
  args: {
    sections: sampleAppSettings,
    variant: 'bordered',
    size: 'md',
    collapsible: false,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-md">
                <Story />
                <p className="text-xs text-text-tertiary mt-4 text-center">
                    Haz click en los valores para editarlos
                </p>
            </div>]
}`,...C.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: '📁 Caso de Uso: Inspector de Archivo (macOS)',
  args: {
    sections: [{
      id: 'general',
      title: 'General',
      items: [{
        label: 'Kind',
        value: 'JPEG Image',
        icon: <File className="w-3.5 h-3.5" />
      }, {
        label: 'Size',
        value: '2.4 MB (2,456,789 bytes)',
        icon: <HardDrive className="w-3.5 h-3.5" />
      }, {
        label: 'Where',
        value: '/Users/ana/Pictures/Vacation',
        icon: <File className="w-3.5 h-3.5" />
      }, {
        label: 'Created',
        value: 'November 15, 2025 at 10:30 AM',
        icon: <Calendar className="w-3.5 h-3.5" />
      }, {
        label: 'Modified',
        value: 'November 23, 2025 at 2:45 PM',
        icon: <Calendar className="w-3.5 h-3.5" />
      }, {
        label: 'Last opened',
        value: 'Today at 11:20 AM',
        icon: <Calendar className="w-3.5 h-3.5" />
      }],
      defaultExpanded: true
    }, {
      id: 'more',
      title: 'More Info',
      items: [{
        label: 'Dimensions',
        value: '4032 × 3024'
      }, {
        label: 'Color space',
        value: 'Display P3'
      }, {
        label: 'Color profile',
        value: 'Display P3'
      }, {
        label: 'Alpha channel',
        value: 'No'
      }],
      defaultExpanded: false
    }, {
      id: 'permissions',
      title: 'Sharing & Permissions',
      items: [{
        label: 'Owner',
        value: 'Ana García',
        icon: <User className="w-3.5 h-3.5" />
      }, {
        label: 'Access',
        value: 'Read & Write'
      }, {
        label: 'Group',
        value: 'staff'
      }, {
        label: 'Others',
        value: 'Read only'
      }],
      defaultExpanded: false
    }],
    variant: 'bordered',
    size: 'md',
    collapsible: true,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-md">
                <Story />
            </div>]
}`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: '💻 Caso de Uso: Información del Sistema',
  args: {
    sections: [{
      id: 'hardware',
      title: 'Hardware Overview',
      items: [{
        label: 'Model Name',
        value: 'MacBook Pro',
        icon: <Monitor className="w-3.5 h-3.5" />
      }, {
        label: 'Model Identifier',
        value: 'Mac15,6'
      }, {
        label: 'Chip',
        value: 'Apple M3 Max',
        icon: <Cpu className="w-3.5 h-3.5" />
      }, {
        label: 'Total Number of Cores',
        value: '16 (12 performance and 4 efficiency)'
      }, {
        label: 'Memory',
        value: '64 GB',
        icon: <Server className="w-3.5 h-3.5" />
      }, {
        label: 'Serial Number',
        value: 'C02YX1ABMD6M',
        icon: <Hash className="w-3.5 h-3.5" />
      }],
      defaultExpanded: true
    }, {
      id: 'display',
      title: 'Display',
      items: [{
        label: 'Type',
        value: 'Liquid Retina XDR'
      }, {
        label: 'Resolution',
        value: '3456 × 2234 (254 PPI)'
      }, {
        label: 'Native Resolution',
        value: '3024 × 1964'
      }, {
        label: 'Color',
        value: 'P3, 1,000,000,000 colors'
      }],
      defaultExpanded: true
    }, {
      id: 'storage',
      title: 'Storage',
      items: [{
        label: 'Capacity',
        value: '1 TB',
        icon: <HardDrive className="w-3.5 h-3.5" />
      }, {
        label: 'Available',
        value: '412.8 GB'
      }, {
        label: 'Used',
        value: '587.2 GB'
      }, {
        label: 'File System',
        value: 'APFS'
      }],
      defaultExpanded: false
    }],
    variant: 'bordered',
    size: 'md',
    collapsible: true,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-lg">
                <Story />
            </div>]
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: '⚙️ Caso de Uso: Configuración de App',
  args: {
    sections: [{
      id: 'appearance',
      title: 'Appearance',
      items: [{
        label: 'Theme',
        value: 'Auto',
        editable: true
      }, {
        label: 'Color Scheme',
        value: 'Blue'
      }, {
        label: 'Font Size',
        value: '14px',
        editable: true
      }, {
        label: 'Line Height',
        value: '1.6',
        editable: true
      }, {
        label: 'Sidebar Width',
        value: '280px',
        editable: true
      }],
      defaultExpanded: true
    }, {
      id: 'editor',
      title: 'Editor',
      items: [{
        label: 'Tab Size',
        value: '2',
        editable: true
      }, {
        label: 'Word Wrap',
        value: 'On'
      }, {
        label: 'Auto Save',
        value: 'After Delay'
      }, {
        label: 'Format On Save',
        value: 'Yes'
      }, {
        label: 'Trim Trailing Whitespace',
        value: 'Yes'
      }],
      defaultExpanded: true
    }, {
      id: 'terminal',
      title: 'Terminal',
      items: [{
        label: 'Shell',
        value: 'zsh'
      }, {
        label: 'Font Family',
        value: 'Menlo',
        editable: true
      }, {
        label: 'Font Size',
        value: '12px',
        editable: true
      }, {
        label: 'Cursor Style',
        value: 'Block'
      }],
      defaultExpanded: false
    }],
    variant: 'bordered',
    size: 'md',
    collapsible: true,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-md">
                <Story />
            </div>]
}`,...E.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: '📦 Caso de Uso: Metadatos de Proyecto',
  args: {
    sections: [{
      id: 'project',
      title: 'Project Info',
      items: [{
        label: 'Name',
        value: 'Design System'
      }, {
        label: 'Version',
        value: '3.2.1'
      }, {
        label: 'Author',
        value: 'Smart Coder Labs',
        icon: <User className="w-3.5 h-3.5" />
      }, {
        label: 'License',
        value: 'MIT'
      }, {
        label: 'Repository',
        value: 'github.com/smart-coder-labs/ds'
      }],
      defaultExpanded: true
    }, {
      id: 'build',
      title: 'Build Info',
      items: [{
        label: 'Build Number',
        value: '1234',
        icon: <Hash className="w-3.5 h-3.5" />
      }, {
        label: 'Build Date',
        value: 'Nov 23, 2025',
        icon: <Calendar className="w-3.5 h-3.5" />
      }, {
        label: 'Environment',
        value: 'Production'
      }, {
        label: 'Node Version',
        value: '20.10.0'
      }],
      defaultExpanded: false
    }],
    variant: 'bordered',
    size: 'md',
    collapsible: true,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-md">
                <Story />
            </div>]
}`,...M.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: '📏 Versión Compacta',
  args: {
    sections: sampleSystemInfo,
    variant: 'bordered',
    size: 'sm',
    collapsible: true,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-sm">
                <Story />
            </div>]
}`,...A.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: '🎨 Playground',
  args: {
    sections: sampleFileInfo,
    variant: 'bordered',
    size: 'md',
    collapsible: true,
    dividers: true
  },
  decorators: [Story => <div className="w-full max-w-md">
                <Story />
            </div>]
}`,...I.parameters?.docs?.source}}};const ze=["Default","Bordered","Inset","NonCollapsible","NoDividers","SmallSize","MediumSize","LargeSize","WithIcons","Editable","FileInspector","SystemInformation","AppSettings","ProjectMetadata","CompactVersion","Playground"];export{E as AppSettings,f as Bordered,A as CompactVersion,x as Default,C as Editable,P as FileInspector,y as Inset,N as LargeSize,S as MediumSize,g as NoDividers,h as NonCollapsible,I as Playground,M as ProjectMetadata,w as SmallSize,z as SystemInformation,j as WithIcons,ze as __namedExportsOrder,Pe as default};
