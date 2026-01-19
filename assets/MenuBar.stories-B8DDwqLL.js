import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as a}from"./iframe-B3ue83QT.js";import{c as x}from"./utils-CDN07tui.js";import{A as I}from"./index-Cd7JNL-O.js";import{m as k}from"./proxy-f4HTbMBa.js";import"./preload-helper-PPVm8Dsz.js";const i=a.forwardRef(({menus:l,leftContent:h,rightContent:b,className:y=""},f)=>{const[n,r]=a.useState(null),[j,o]=a.useState(null),w=a.useRef({});a.useEffect(()=>{const t=s=>{n&&(r(null),o(null))};if(n)return document.addEventListener("mousedown",t),()=>document.removeEventListener("mousedown",t)},[n]),a.useEffect(()=>{const t=s=>{s.key==="Escape"&&n&&(r(null),o(null))};return document.addEventListener("keydown",t),()=>document.removeEventListener("keydown",t)},[n]);const C=t=>{n===t?(r(null),o(null)):(r(t),o(t))},M=t=>{n&&r(t),o(t)},F=t=>{!t.disabled&&t.onSelect&&(t.onSelect(),r(null),o(null))};return e.jsxs("div",{ref:f,className:x("flex items-center h-14 px-6 bg-surface-primary border-b border-border-primary",y),children:[h&&e.jsx("div",{className:"flex items-center mr-6",children:h}),e.jsx("div",{className:"flex items-center gap-2 flex-1",children:l.map(t=>e.jsxs("div",{className:"relative",children:[e.jsx("button",{ref:s=>{w.current[t.id]=s},onClick:()=>C(t.id),onMouseEnter:()=>M(t.id),className:x("px-4 py-2 text-sm font-medium rounded-md transition-colors",n===t.id||j===t.id?"bg-accent-blue/10 text-text-primary":"text-text-secondary hover:bg-surface-secondary hover:text-text-primary"),children:t.label}),e.jsx(I,{children:n===t.id&&e.jsx(k.div,{initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.15},className:"absolute left-0 top-full mt-1 min-w-[240px] bg-surface-primary rounded-lg shadow-xl border border-border-primary overflow-hidden z-dropdown",onClick:s=>s.stopPropagation(),children:e.jsx("div",{className:"py-2",children:t.items.map((s,U)=>e.jsx(a.Fragment,{children:s.divider?e.jsx("div",{className:"my-2 h-px bg-border-primary"}):e.jsxs("button",{onClick:()=>F(s),disabled:s.disabled,className:x("w-full flex items-center justify-between gap-6 px-4 py-3 text-sm transition-colors",s.disabled?"text-text-tertiary cursor-not-allowed":"text-text-secondary hover:bg-accent-blue/10 hover:text-text-primary cursor-pointer"),children:[e.jsxs("div",{className:"flex items-center gap-3",children:[s.icon&&e.jsx("span",{className:"flex-shrink-0 text-lg",children:s.icon}),e.jsx("span",{children:s.label})]}),s.shortcut&&e.jsx("kbd",{className:"text-xs text-text-tertiary font-medium",children:s.shortcut})]})},s.id))})})})]},t.id))}),b&&e.jsx("div",{className:"flex items-center ml-6",children:b})]})});i.displayName="MenuBar";i.__docgenInfo={description:"",methods:[],displayName:"MenuBar",props:{menus:{required:!0,tsType:{name:"Array",elements:[{name:"MenuBarMenu"}],raw:"MenuBarMenu[]"},description:"Menu items"},leftContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional left content (e.g., app logo)"},rightContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional right content (e.g., user menu)"},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling",defaultValue:{value:"''",computed:!1}}}};const v=()=>e.jsx("span",{className:"text-xl",children:"🎨"}),S=()=>e.jsx("span",{children:"📄"}),g=()=>e.jsx("span",{children:"📁"}),p=()=>e.jsx("span",{children:"💾"}),N=()=>e.jsx("span",{children:"🖨️"}),O=()=>e.jsx("span",{children:"📋"}),R=()=>e.jsx("span",{children:"✂️"}),A=()=>e.jsx("span",{children:"📌"}),E=()=>e.jsx("span",{children:"🔍"}),B=()=>e.jsx("span",{children:"⚙️"}),P=()=>e.jsx("span",{children:"❓"}),Z=()=>e.jsx("span",{children:"👤"}),L={title:"Navigation/MenuBar",component:i,tags:[],argTypes:{className:{control:!1}}},D=[{id:"file",label:"File",items:[{id:"new",label:"New File",icon:e.jsx(S,{}),shortcut:"⌘N",onSelect:()=>console.log("New File")},{id:"open",label:"Open...",icon:e.jsx(g,{}),shortcut:"⌘O",onSelect:()=>console.log("Open")},{id:"divider-1",label:"",divider:!0},{id:"save",label:"Save",icon:e.jsx(p,{}),shortcut:"⌘S",onSelect:()=>console.log("Save")},{id:"save-as",label:"Save As...",icon:e.jsx(p,{}),shortcut:"⌘⇧S",onSelect:()=>console.log("Save As")},{id:"divider-2",label:"",divider:!0},{id:"print",label:"Print",icon:e.jsx(N,{}),shortcut:"⌘P",onSelect:()=>console.log("Print")},{id:"divider-3",label:"",divider:!0},{id:"close",label:"Close Window",shortcut:"⌘W",onSelect:()=>console.log("Close")}]},{id:"edit",label:"Edit",items:[{id:"undo",label:"Undo",shortcut:"⌘Z",onSelect:()=>console.log("Undo")},{id:"redo",label:"Redo",shortcut:"⌘⇧Z",onSelect:()=>console.log("Redo")},{id:"divider-1",label:"",divider:!0},{id:"cut",label:"Cut",icon:e.jsx(R,{}),shortcut:"⌘X",onSelect:()=>console.log("Cut")},{id:"copy",label:"Copy",icon:e.jsx(O,{}),shortcut:"⌘C",onSelect:()=>console.log("Copy")},{id:"paste",label:"Paste",icon:e.jsx(A,{}),shortcut:"⌘V",onSelect:()=>console.log("Paste")},{id:"divider-2",label:"",divider:!0},{id:"find",label:"Find",icon:e.jsx(E,{}),shortcut:"⌘F",onSelect:()=>console.log("Find")},{id:"replace",label:"Find and Replace",shortcut:"⌘⌥F",onSelect:()=>console.log("Replace")}]},{id:"view",label:"View",items:[{id:"zoom-in",label:"Zoom In",shortcut:"⌘+",onSelect:()=>console.log("Zoom In")},{id:"zoom-out",label:"Zoom Out",shortcut:"⌘-",onSelect:()=>console.log("Zoom Out")},{id:"reset-zoom",label:"Reset Zoom",shortcut:"⌘0",onSelect:()=>console.log("Reset Zoom")},{id:"divider-1",label:"",divider:!0},{id:"fullscreen",label:"Enter Fullscreen",shortcut:"⌘⌃F",onSelect:()=>console.log("Fullscreen")}]},{id:"help",label:"Help",items:[{id:"docs",label:"Documentation",icon:e.jsx(P,{}),onSelect:()=>console.log("Documentation")},{id:"shortcuts",label:"Keyboard Shortcuts",shortcut:"⌘/",onSelect:()=>console.log("Shortcuts")},{id:"divider-1",label:"",divider:!0},{id:"about",label:"About",onSelect:()=>console.log("About")}]}],c={args:{menus:D,leftContent:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(v,{}),e.jsx("span",{className:"text-sm font-semibold text-text-primary",children:"Smart Coder"})]}),rightContent:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"p-1.5 rounded-md hover:bg-surface-secondary transition-colors",children:e.jsx(B,{})}),e.jsx("button",{className:"p-1.5 rounded-md hover:bg-surface-secondary transition-colors",children:e.jsx(Z,{})})]})},render:l=>e.jsxs("div",{className:"min-h-screen bg-background-secondary",children:[e.jsx(i,{...l}),e.jsx("div",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-text-primary mb-4",children:"macOS-Style Menu Bar"}),e.jsx("p",{className:"text-text-secondary mb-6",children:"Click on any menu item in the menu bar above to see the dropdown. When a menu is open, you can hover over other menus to switch between them."}),e.jsxs("div",{className:"p-6 bg-surface-primary rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold text-text-primary mb-3",children:"Features"}),e.jsxs("ul",{className:"space-y-2 text-text-secondary",children:[e.jsx("li",{children:"• Click to open/close menus"}),e.jsx("li",{children:"• Hover to switch between open menus"}),e.jsx("li",{children:"• Press ESC to close active menu"}),e.jsx("li",{children:"• Support for icons and keyboard shortcuts"}),e.jsx("li",{children:"• Dividers for menu organization"}),e.jsx("li",{children:"• Disabled items support"}),e.jsx("li",{children:"• Smooth animations"})]})]})]})})]})},d={args:{menus:[{id:"file",label:"File",items:[{id:"new",label:"New",shortcut:"⌘N",onSelect:()=>{}},{id:"open",label:"Open",shortcut:"⌘O",onSelect:()=>{}},{id:"save",label:"Save",shortcut:"⌘S",onSelect:()=>{}}]},{id:"edit",label:"Edit",items:[{id:"undo",label:"Undo",shortcut:"⌘Z",onSelect:()=>{}},{id:"redo",label:"Redo",shortcut:"⌘⇧Z",onSelect:()=>{}}]}]},render:l=>e.jsxs("div",{className:"min-h-screen bg-background-secondary",children:[e.jsx(i,{...l}),e.jsx("div",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Simple Menu Bar"}),e.jsx("p",{className:"text-text-secondary",children:"A minimal menu bar with just File and Edit menus."})]})})]})},m={args:{menus:[{id:"file",label:"File",items:[{id:"new",label:"New File",icon:e.jsx(S,{}),shortcut:"⌘N",onSelect:()=>{}},{id:"open",label:"Open...",icon:e.jsx(g,{}),shortcut:"⌘O",onSelect:()=>{}},{id:"divider-1",label:"",divider:!0},{id:"save",label:"Save",icon:e.jsx(p,{}),shortcut:"⌘S",disabled:!0,onSelect:()=>{}},{id:"save-as",label:"Save As...",shortcut:"⌘⇧S",disabled:!0,onSelect:()=>{}},{id:"divider-2",label:"",divider:!0},{id:"print",label:"Print",icon:e.jsx(N,{}),shortcut:"⌘P",onSelect:()=>{}}]}],leftContent:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(v,{}),e.jsx("span",{className:"text-sm font-semibold text-text-primary",children:"My App"})]})},render:l=>e.jsxs("div",{className:"min-h-screen bg-background-secondary",children:[e.jsx(i,{...l}),e.jsx("div",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Menu Bar with Disabled Items"}),e.jsx("p",{className:"text-text-secondary",children:"Some menu items are disabled (Save and Save As...)."})]})})]})},u={args:{menus:[{id:"file",label:"File",items:[{id:"new",label:"New",shortcut:"⌘N",onSelect:()=>{}},{id:"open",label:"Open",shortcut:"⌘O",onSelect:()=>{}},{id:"divider-1",label:"",divider:!0},{id:"save",label:"Save",shortcut:"⌘S",onSelect:()=>{}},{id:"close",label:"Close",shortcut:"⌘W",onSelect:()=>{}}]},{id:"edit",label:"Edit",items:[{id:"undo",label:"Undo",shortcut:"⌘Z",onSelect:()=>{}},{id:"redo",label:"Redo",shortcut:"⌘⇧Z",onSelect:()=>{}},{id:"divider-1",label:"",divider:!0},{id:"cut",label:"Cut",shortcut:"⌘X",onSelect:()=>{}},{id:"copy",label:"Copy",shortcut:"⌘C",onSelect:()=>{}},{id:"paste",label:"Paste",shortcut:"⌘V",onSelect:()=>{}}]}]},render:l=>e.jsxs("div",{className:"min-h-screen bg-background-secondary",children:[e.jsx(i,{...l}),e.jsx("div",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Menu Bar without Icons"}),e.jsx("p",{className:"text-text-secondary",children:"A clean menu bar with only text and shortcuts."})]})})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    menus: sampleMenus,
    leftContent: <div className="flex items-center gap-2">
                <AppIcon />
                <span className="text-sm font-semibold text-text-primary">Smart Coder</span>
            </div>,
    rightContent: <div className="flex items-center gap-2">
                <button className="p-1.5 rounded-md hover:bg-surface-secondary transition-colors">
                    <SettingsIcon />
                </button>
                <button className="p-1.5 rounded-md hover:bg-surface-secondary transition-colors">
                    <UserIcon />
                </button>
            </div>
  },
  render: args => <div className="min-h-screen bg-background-secondary">
            <MenuBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-text-primary mb-4">
                        macOS-Style Menu Bar
                    </h1>
                    <p className="text-text-secondary mb-6">
                        Click on any menu item in the menu bar above to see the dropdown. When a menu is
                        open, you can hover over other menus to switch between them.
                    </p>
                    <div className="p-6 bg-surface-primary rounded-lg">
                        <h3 className="text-lg font-semibold text-text-primary mb-3">Features</h3>
                        <ul className="space-y-2 text-text-secondary">
                            <li>• Click to open/close menus</li>
                            <li>• Hover to switch between open menus</li>
                            <li>• Press ESC to close active menu</li>
                            <li>• Support for icons and keyboard shortcuts</li>
                            <li>• Dividers for menu organization</li>
                            <li>• Disabled items support</li>
                            <li>• Smooth animations</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    menus: [{
      id: 'file',
      label: 'File',
      items: [{
        id: 'new',
        label: 'New',
        shortcut: '⌘N',
        onSelect: () => {}
      }, {
        id: 'open',
        label: 'Open',
        shortcut: '⌘O',
        onSelect: () => {}
      }, {
        id: 'save',
        label: 'Save',
        shortcut: '⌘S',
        onSelect: () => {}
      }]
    }, {
      id: 'edit',
      label: 'Edit',
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
      }]
    }]
  },
  render: args => <div className="min-h-screen bg-background-secondary">
            <MenuBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Simple Menu Bar</h1>
                    <p className="text-text-secondary">
                        A minimal menu bar with just File and Edit menus.
                    </p>
                </div>
            </div>
        </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    menus: [{
      id: 'file',
      label: 'File',
      items: [{
        id: 'new',
        label: 'New File',
        icon: <FileIcon />,
        shortcut: '⌘N',
        onSelect: () => {}
      }, {
        id: 'open',
        label: 'Open...',
        icon: <FolderIcon />,
        shortcut: '⌘O',
        onSelect: () => {}
      }, {
        id: 'divider-1',
        label: '',
        divider: true
      }, {
        id: 'save',
        label: 'Save',
        icon: <SaveIcon />,
        shortcut: '⌘S',
        disabled: true,
        onSelect: () => {}
      }, {
        id: 'save-as',
        label: 'Save As...',
        shortcut: '⌘⇧S',
        disabled: true,
        onSelect: () => {}
      }, {
        id: 'divider-2',
        label: '',
        divider: true
      }, {
        id: 'print',
        label: 'Print',
        icon: <PrintIcon />,
        shortcut: '⌘P',
        onSelect: () => {}
      }]
    }],
    leftContent: <div className="flex items-center gap-2">
                <AppIcon />
                <span className="text-sm font-semibold text-text-primary">My App</span>
            </div>
  },
  render: args => <div className="min-h-screen bg-background-secondary">
            <MenuBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">
                        Menu Bar with Disabled Items
                    </h1>
                    <p className="text-text-secondary">
                        Some menu items are disabled (Save and Save As...).
                    </p>
                </div>
            </div>
        </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    menus: [{
      id: 'file',
      label: 'File',
      items: [{
        id: 'new',
        label: 'New',
        shortcut: '⌘N',
        onSelect: () => {}
      }, {
        id: 'open',
        label: 'Open',
        shortcut: '⌘O',
        onSelect: () => {}
      }, {
        id: 'divider-1',
        label: '',
        divider: true
      }, {
        id: 'save',
        label: 'Save',
        shortcut: '⌘S',
        onSelect: () => {}
      }, {
        id: 'close',
        label: 'Close',
        shortcut: '⌘W',
        onSelect: () => {}
      }]
    }, {
      id: 'edit',
      label: 'Edit',
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
        id: 'divider-1',
        label: '',
        divider: true
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
    }]
  },
  render: args => <div className="min-h-screen bg-background-secondary">
            <MenuBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">
                        Menu Bar without Icons
                    </h1>
                    <p className="text-text-secondary">
                        A clean menu bar with only text and shortcuts.
                    </p>
                </div>
            </div>
        </div>
}`,...u.parameters?.docs?.source}}};const _=["Default","Simple","WithDisabledItems","NoIcons"];export{c as Default,u as NoIcons,d as Simple,m as WithDisabledItems,_ as __namedExportsOrder,L as default};
