import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as s}from"./iframe-D5DOIGW8.js";import{c as P}from"./utils-CDN07tui.js";import{A as K}from"./index-B0ZysGGg.js";import{m as w}from"./proxy-BbTJ7w1C.js";import{B as V}from"./Button-yixddUw3.js";import"./preload-helper-PPVm8Dsz.js";const j=s.forwardRef(({isOpen:t,onClose:l,groups:c,placeholder:u="Type a command or search...",className:i="",emptyMessage:A="No results found."},W)=>{const[d,I]=s.useState(""),[p,h]=s.useState(0),E=s.useRef(null),v=s.useMemo(()=>d.trim()?c.map(n=>({...n,items:n.items.filter(r=>{const o=d.toLowerCase(),M=r.label.toLowerCase().includes(o),N=r.description?.toLowerCase().includes(o),L=r.keywords?.some(Z=>Z.toLowerCase().includes(o));return M||N||L})})).filter(n=>n.items.length>0):c,[c,d]),a=s.useMemo(()=>v.flatMap(n=>n.items),[v]);s.useEffect(()=>{h(0)},[d]),s.useEffect(()=>{t&&(E.current?.focus(),I(""),h(0))},[t]),s.useEffect(()=>{const n=r=>{if(t)switch(r.key){case"Escape":r.preventDefault(),l();break;case"ArrowDown":r.preventDefault(),h(o=>(o+1)%a.length);break;case"ArrowUp":r.preventDefault(),h(o=>(o-1+a.length)%a.length);break;case"Enter":r.preventDefault(),a[p]&&(a[p].onSelect(),l());break}};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[t,p,a,l]),s.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]);const R=n=>{n.target===n.currentTarget&&l()};let H=0;return e.jsx(K,{children:t&&e.jsxs("div",{className:"fixed inset-0 z-modal",onClick:R,children:[e.jsx(w.div,{className:"absolute inset-0 bg-black/60 backdrop-blur-sm",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2}}),e.jsx("div",{className:"relative flex items-start justify-center pt-[20vh] px-4",children:e.jsxs(w.div,{ref:W,className:P("w-full max-w-2xl bg-surface-primary rounded-xl shadow-xl overflow-hidden",i),initial:{opacity:0,scale:.95,y:-20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:-20},transition:{type:"spring",stiffness:300,damping:30},onClick:n=>n.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center gap-3 px-4 py-4 border-b border-border-primary",children:[e.jsx("span",{className:"text-text-tertiary text-xl",children:"🔍"}),e.jsx("input",{ref:E,type:"text",value:d,onChange:n=>I(n.target.value),placeholder:u,className:"flex-1 bg-transparent text-lg text-text-primary placeholder:text-text-tertiary outline-none"}),e.jsx("kbd",{className:"hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-text-tertiary bg-surface-secondary rounded border border-border-primary",children:"ESC"})]}),e.jsx("div",{className:"max-h-[60vh] overflow-y-auto",children:a.length===0?e.jsx("div",{className:"px-4 py-12 text-center",children:e.jsx("p",{className:"text-text-tertiary",children:A})}):e.jsx("div",{className:"py-2",children:v.map((n,r)=>e.jsxs("div",{className:"mb-4 last:mb-0",children:[n.title&&e.jsx("div",{className:"px-4 py-2 text-xs font-semibold text-text-tertiary uppercase tracking-wide",children:n.title}),e.jsx("div",{children:n.items.map(o=>{const N=H++===p;return e.jsxs(w.button,{onClick:()=>{o.onSelect(),l()},className:P("w-full flex items-center gap-3 px-4 py-3 text-left transition-colors",N?"bg-accent-blue/10 text-text-primary":"text-text-secondary hover:bg-surface-secondary"),whileHover:{x:4},transition:{duration:.15},children:[o.icon&&e.jsx("span",{className:"flex-shrink-0 text-lg",children:o.icon}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("div",{className:"font-medium text-text-primary",children:o.label}),o.description&&e.jsx("div",{className:"text-xs text-text-tertiary truncate",children:o.description})]}),o.shortcut&&e.jsx("kbd",{className:"hidden sm:inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-text-tertiary bg-surface-secondary rounded border border-border-primary",children:o.shortcut})]},o.id)})})]},r))})}),e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 border-t border-border-primary bg-surface-secondary/30",children:[e.jsxs("div",{className:"flex items-center gap-6 text-sm text-text-secondary",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("kbd",{className:"min-w-[24px] h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm",children:"↑"}),e.jsx("kbd",{className:"min-w-[24px] h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm",children:"↓"})]}),e.jsx("span",{className:"text-text-tertiary",children:"to navigate"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("kbd",{className:"h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm",children:"↵"}),e.jsx("span",{className:"text-text-tertiary",children:"to select"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("kbd",{className:"h-6 px-2 flex items-center justify-center text-xs font-medium bg-surface-primary rounded border border-border-primary shadow-sm",children:"ESC"}),e.jsx("span",{className:"text-text-tertiary",children:"to close"})]})]}),e.jsxs("div",{className:"text-sm font-medium text-text-tertiary",children:[a.length," ",a.length===1?"result":"results"]})]})]})})]})})});j.displayName="CommandMenu";j.__docgenInfo={description:"",methods:[],displayName:"CommandMenu",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the command menu is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when menu should close"},groups:{required:!0,tsType:{name:"Array",elements:[{name:"CommandMenuGroup"}],raw:"CommandMenuGroup[]"},description:"Command groups"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text for search input",defaultValue:{value:"'Type a command or search...'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling",defaultValue:{value:"''",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No results found.'",computed:!1}}}};const O=()=>e.jsx("span",{children:"🏠"}),D=()=>e.jsx("span",{children:"👤"}),F=()=>e.jsx("span",{children:"⚙️"}),T=()=>e.jsx("span",{children:"📄"}),k=()=>e.jsx("span",{children:"📁"}),z=()=>e.jsx("span",{children:"🔍"}),G=()=>e.jsx("span",{children:"🔔"}),C=()=>e.jsx("span",{children:"➕"}),q=()=>e.jsx("span",{children:"🗑️"}),B=()=>e.jsx("span",{children:"✏️"}),S=()=>e.jsx("span",{children:"💾"}),U=()=>e.jsx("span",{children:"🔗"}),ne={title:"Navigation/CommandMenu",component:j,tags:[],argTypes:{isOpen:{control:"boolean",description:"Whether the command menu is open"},placeholder:{control:"text",description:"Placeholder text for search input"},emptyMessage:{control:"text",description:"Empty state message"},className:{control:!1},onClose:{action:"closed"}}},_=[{title:"Navigation",items:[{id:"home",label:"Go to Home",description:"Navigate to the home page",icon:e.jsx(O,{}),shortcut:"⌘H",onSelect:()=>console.log("Navigate to Home"),keywords:["dashboard","main"]},{id:"profile",label:"View Profile",description:"See your profile information",icon:e.jsx(D,{}),shortcut:"⌘P",onSelect:()=>console.log("Navigate to Profile"),keywords:["user","account"]},{id:"settings",label:"Open Settings",description:"Configure your preferences",icon:e.jsx(F,{}),shortcut:"⌘,",onSelect:()=>console.log("Navigate to Settings"),keywords:["preferences","config"]}]},{title:"Actions",items:[{id:"new-doc",label:"New Document",description:"Create a new document",icon:e.jsx(C,{}),shortcut:"⌘N",onSelect:()=>console.log("Create new document"),keywords:["create","add"]},{id:"search",label:"Search Files",description:"Find files and folders",icon:e.jsx(z,{}),shortcut:"⌘F",onSelect:()=>console.log("Open search"),keywords:["find","locate"]},{id:"save",label:"Save Changes",description:"Save your current work",icon:e.jsx(S,{}),shortcut:"⌘S",onSelect:()=>console.log("Save changes")}]},{title:"Recent",items:[{id:"doc1",label:"Project Proposal.docx",description:"Last edited 2 hours ago",icon:e.jsx(T,{}),onSelect:()=>console.log("Open Project Proposal")},{id:"folder1",label:"Design Assets",description:"Contains 24 files",icon:e.jsx(k,{}),onSelect:()=>console.log("Open Design Assets")}]}],m=t=>{const[l,c]=s.useState(t.isOpen??!1);return s.useEffect(()=>{c(t.isOpen)},[t.isOpen]),s.useEffect(()=>{const u=i=>{(i.metaKey||i.ctrlKey)&&i.key==="k"&&(i.preventDefault(),c(!0))};return document.addEventListener("keydown",u),()=>document.removeEventListener("keydown",u)},[]),e.jsxs("div",{className:"min-h-screen bg-background-secondary p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("div",{className:"mb-8 p-6 bg-surface-primary rounded-lg",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-4",children:"Command Menu Demo"}),e.jsxs("p",{className:"text-text-secondary mb-6",children:["Click the button below or press"," ",e.jsx("kbd",{className:"px-2 py-1 text-xs font-semibold bg-surface-secondary rounded border border-border-primary",children:"⌘K"})," ","to open the command menu."]}),e.jsx(V,{onClick:()=>c(!0),children:"Open Command Menu"})]}),e.jsxs("div",{className:"p-6 bg-surface-primary rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-text-primary mb-4",children:"Features"}),e.jsxs("ul",{className:"space-y-2 text-text-secondary",children:[e.jsx("li",{children:"• Keyboard navigation with arrow keys"}),e.jsx("li",{children:"• Real-time search filtering"}),e.jsx("li",{children:"• Grouped commands"}),e.jsx("li",{children:"• Keyboard shortcuts display"}),e.jsx("li",{children:"• Smooth animations"}),e.jsx("li",{children:"• macOS Spotlight-inspired design"})]})]})]}),e.jsx(j,{...t,isOpen:l,onClose:()=>{c(!1),t.onClose?.()}})]})},x={render:t=>e.jsx(m,{...t}),args:{isOpen:!1,groups:_,placeholder:"Type a command or search...",emptyMessage:"No results found."}},f={render:t=>e.jsx(m,{...t}),args:{isOpen:!1,groups:[{items:[{id:"edit",label:"Edit",icon:e.jsx(B,{}),shortcut:"⌘E",onSelect:()=>console.log("Edit")},{id:"delete",label:"Delete",icon:e.jsx(q,{}),shortcut:"⌘⌫",onSelect:()=>console.log("Delete")},{id:"share",label:"Share",icon:e.jsx(U,{}),shortcut:"⌘⇧S",onSelect:()=>console.log("Share")}]}],placeholder:"What would you like to do?"}},b={render:t=>e.jsx(m,{...t}),args:{isOpen:!1,groups:[{title:"Quick Actions",items:[{id:"new-project",label:"New Project",description:"Create a new project from scratch",icon:e.jsx(C,{}),shortcut:"⌘⇧N",onSelect:()=>console.log("New Project")},{id:"import",label:"Import Files",description:"Import files from your computer",icon:e.jsx(k,{}),shortcut:"⌘I",onSelect:()=>console.log("Import")},{id:"export",label:"Export Project",description:"Export your project as a file",icon:e.jsx(S,{}),shortcut:"⌘E",onSelect:()=>console.log("Export")}]}],placeholder:"Search actions..."}},g={render:t=>e.jsx(m,{...t}),args:{isOpen:!1,groups:[{title:"File",items:[{id:"new",label:"New File",icon:e.jsx(C,{}),shortcut:"⌘N",onSelect:()=>{}},{id:"open",label:"Open File",icon:e.jsx(k,{}),shortcut:"⌘O",onSelect:()=>{}},{id:"save",label:"Save",icon:e.jsx(S,{}),shortcut:"⌘S",onSelect:()=>{}},{id:"save-as",label:"Save As...",icon:e.jsx(S,{}),shortcut:"⌘⇧S",onSelect:()=>{}}]},{title:"Edit",items:[{id:"undo",label:"Undo",shortcut:"⌘Z",onSelect:()=>{}},{id:"redo",label:"Redo",shortcut:"⌘⇧Z",onSelect:()=>{}},{id:"cut",label:"Cut",shortcut:"⌘X",onSelect:()=>{}},{id:"copy",label:"Copy",shortcut:"⌘C",onSelect:()=>{}},{id:"paste",label:"Paste",shortcut:"⌘V",onSelect:()=>{}}]},{title:"View",items:[{id:"zoom-in",label:"Zoom In",shortcut:"⌘+",onSelect:()=>{}},{id:"zoom-out",label:"Zoom Out",shortcut:"⌘-",onSelect:()=>{}},{id:"reset-zoom",label:"Reset Zoom",shortcut:"⌘0",onSelect:()=>{}},{id:"fullscreen",label:"Toggle Fullscreen",shortcut:"⌘⌃F",onSelect:()=>{}}]},{title:"Help",items:[{id:"docs",label:"Documentation",icon:e.jsx(T,{}),onSelect:()=>{}},{id:"shortcuts",label:"Keyboard Shortcuts",onSelect:()=>{}},{id:"about",label:"About",onSelect:()=>{}}]}],placeholder:"Search commands..."}},y={render:t=>e.jsx(m,{...t}),args:{isOpen:!1,groups:[{title:"Pages",items:[{id:"home",label:"Home",icon:e.jsx(O,{}),onSelect:()=>{}},{id:"profile",label:"Profile",icon:e.jsx(D,{}),onSelect:()=>{}},{id:"settings",label:"Settings",icon:e.jsx(F,{}),onSelect:()=>{}},{id:"notifications",label:"Notifications",icon:e.jsx(G,{}),onSelect:()=>{}}]}],placeholder:"Where would you like to go?"}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <CommandMenuWithState {...args} />,
  args: {
    isOpen: false,
    groups: sampleGroups,
    placeholder: 'Type a command or search...',
    emptyMessage: 'No results found.'
  }
}`,...x.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <CommandMenuWithState {...args} />,
  args: {
    isOpen: false,
    groups: [{
      items: [{
        id: 'edit',
        label: 'Edit',
        icon: <EditIcon />,
        shortcut: '⌘E',
        onSelect: () => console.log('Edit')
      }, {
        id: 'delete',
        label: 'Delete',
        icon: <TrashIcon />,
        shortcut: '⌘⌫',
        onSelect: () => console.log('Delete')
      }, {
        id: 'share',
        label: 'Share',
        icon: <ShareIcon />,
        shortcut: '⌘⇧S',
        onSelect: () => console.log('Share')
      }]
    }],
    placeholder: 'What would you like to do?'
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <CommandMenuWithState {...args} />,
  args: {
    isOpen: false,
    groups: [{
      title: 'Quick Actions',
      items: [{
        id: 'new-project',
        label: 'New Project',
        description: 'Create a new project from scratch',
        icon: <PlusIcon />,
        shortcut: '⌘⇧N',
        onSelect: () => console.log('New Project')
      }, {
        id: 'import',
        label: 'Import Files',
        description: 'Import files from your computer',
        icon: <FolderIcon />,
        shortcut: '⌘I',
        onSelect: () => console.log('Import')
      }, {
        id: 'export',
        label: 'Export Project',
        description: 'Export your project as a file',
        icon: <SaveIcon />,
        shortcut: '⌘E',
        onSelect: () => console.log('Export')
      }]
    }],
    placeholder: 'Search actions...'
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <CommandMenuWithState {...args} />,
  args: {
    isOpen: false,
    groups: [{
      title: 'File',
      items: [{
        id: 'new',
        label: 'New File',
        icon: <PlusIcon />,
        shortcut: '⌘N',
        onSelect: () => {}
      }, {
        id: 'open',
        label: 'Open File',
        icon: <FolderIcon />,
        shortcut: '⌘O',
        onSelect: () => {}
      }, {
        id: 'save',
        label: 'Save',
        icon: <SaveIcon />,
        shortcut: '⌘S',
        onSelect: () => {}
      }, {
        id: 'save-as',
        label: 'Save As...',
        icon: <SaveIcon />,
        shortcut: '⌘⇧S',
        onSelect: () => {}
      }]
    }, {
      title: 'Edit',
      items: [{
        id: 'undo',
        label: 'Undo',
        shortcut: '⌘Z',
        onSelect: () => {}
      }, {
        id: 'redo',
        label: 'Redo',
        shortcut: '⌘⇧Z',
        onSelect: () => {}
      }, {
        id: 'cut',
        label: 'Cut',
        shortcut: '⌘X',
        onSelect: () => {}
      }, {
        id: 'copy',
        label: 'Copy',
        shortcut: '⌘C',
        onSelect: () => {}
      }, {
        id: 'paste',
        label: 'Paste',
        shortcut: '⌘V',
        onSelect: () => {}
      }]
    }, {
      title: 'View',
      items: [{
        id: 'zoom-in',
        label: 'Zoom In',
        shortcut: '⌘+',
        onSelect: () => {}
      }, {
        id: 'zoom-out',
        label: 'Zoom Out',
        shortcut: '⌘-',
        onSelect: () => {}
      }, {
        id: 'reset-zoom',
        label: 'Reset Zoom',
        shortcut: '⌘0',
        onSelect: () => {}
      }, {
        id: 'fullscreen',
        label: 'Toggle Fullscreen',
        shortcut: '⌘⌃F',
        onSelect: () => {}
      }]
    }, {
      title: 'Help',
      items: [{
        id: 'docs',
        label: 'Documentation',
        icon: <DocumentIcon />,
        onSelect: () => {}
      }, {
        id: 'shortcuts',
        label: 'Keyboard Shortcuts',
        onSelect: () => {}
      }, {
        id: 'about',
        label: 'About',
        onSelect: () => {}
      }]
    }],
    placeholder: 'Search commands...'
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <CommandMenuWithState {...args} />,
  args: {
    isOpen: false,
    groups: [{
      title: 'Pages',
      items: [{
        id: 'home',
        label: 'Home',
        icon: <HomeIcon />,
        onSelect: () => {}
      }, {
        id: 'profile',
        label: 'Profile',
        icon: <UserIcon />,
        onSelect: () => {}
      }, {
        id: 'settings',
        label: 'Settings',
        icon: <SettingsIcon />,
        onSelect: () => {}
      }, {
        id: 'notifications',
        label: 'Notifications',
        icon: <BellIcon />,
        onSelect: () => {}
      }]
    }],
    placeholder: 'Where would you like to go?'
  }
}`,...y.parameters?.docs?.source}}};const oe=["Default","SimpleCommands","WithDescriptions","ManyCommands","NoShortcuts"];export{x as Default,g as ManyCommands,y as NoShortcuts,f as SimpleCommands,b as WithDescriptions,oe as __namedExportsOrder,ne as default};
