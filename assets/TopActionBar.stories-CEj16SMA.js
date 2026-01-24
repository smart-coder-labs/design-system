import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as T}from"./iframe-FxOJXbvx.js";import{c as w}from"./utils-CDN07tui.js";import{m as A}from"./proxy-PznluMrK.js";import"./preload-helper-PPVm8Dsz.js";const o=T.forwardRef(({leftContent:a,centerContent:r,rightContent:s,glass:l=!1,sticky:d=!0,showBorder:m=!0,size:p="md",className:B="",...v},S)=>{const k=`
            ${{sm:"h-12 px-3",md:"h-14 px-4",lg:"h-16 px-6"}[p]}
            w-full
            flex items-center justify-between
            ${d?"sticky top-0 z-sticky":""}
            ${l?"bg-surface-glass backdrop-blur-xl":"bg-surface-primary"}
            ${m?"border-b border-border-primary":""}
            transition-apple
        `;return e.jsxs(A.header,{ref:S,className:w(k,B),initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:300,damping:30},...v,children:[e.jsx("div",{className:"flex items-center gap-2 flex-1 min-w-0",children:a}),r&&e.jsx("div",{className:"flex items-center justify-center gap-2 flex-shrink-0 px-4",children:r}),e.jsx("div",{className:"flex items-center justify-end gap-2 flex-1 min-w-0",children:s})]})});o.displayName="TopActionBar";const n=T.forwardRef(({children:a,icon:r,active:s=!1,variant:l="default",className:d="",...m},p)=>{const B={default:`
                text-text-secondary hover:text-text-primary
                hover:bg-surface-secondary
            `,ghost:`
                text-text-secondary hover:text-text-primary
                hover:bg-surface-secondary/50
            `,primary:`
                bg-accent-blue text-white
                hover:bg-accent-blue/90
            `},v=`
            inline-flex items-center gap-2
            px-3 py-1.5
            rounded-md
            text-sm font-medium
            transition-apple
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
            active:scale-95
            ${s?"bg-surface-secondary text-text-primary":""}
        `;return e.jsxs(A.button,{ref:p,className:w(v,B[l],d),whileHover:{scale:1.02},whileTap:{scale:.98},...m,children:[r&&e.jsx("span",{className:"inline-flex",children:r}),a]})});n.displayName="TopActionBarButton";const t=T.forwardRef(({icon:a,active:r=!1,badge:s,className:l="",...d},m)=>{const p=`
            relative
            inline-flex items-center justify-center
            w-9 h-9
            rounded-md
            text-text-secondary hover:text-text-primary
            hover:bg-surface-secondary
            transition-apple
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue
            active:scale-95
            ${r?"bg-surface-secondary text-text-primary":""}
        `;return e.jsxs(A.button,{ref:m,className:w(p,l),whileHover:{scale:1.05},whileTap:{scale:.95},...d,children:[a,s&&e.jsx("span",{className:"absolute -top-1 -right-1 inline-flex items-center justify-center min-w-[1.25rem] h-5 px-1 text-xs font-semibold rounded-full bg-accent-blue text-white",children:s})]})});t.displayName="TopActionBarIconButton";o.__docgenInfo={description:"",methods:[],displayName:"TopActionBar",props:{leftContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content for the left section"},centerContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content for the center section"},rightContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content for the right section"},glass:{required:!1,tsType:{name:"boolean"},description:"Whether to use glassmorphism effect",defaultValue:{value:"false",computed:!1}},sticky:{required:!1,tsType:{name:"boolean"},description:"Whether the bar should be sticky",defaultValue:{value:"true",computed:!1}},showBorder:{required:!1,tsType:{name:"boolean"},description:"Whether to show bottom border",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling",defaultValue:{value:"''",computed:!1}}},composes:["Omit"]};n.__docgenInfo={description:"",methods:[],displayName:"TopActionBarButton",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Button content"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display"},active:{required:!1,tsType:{name:"boolean"},description:"Whether button is active",defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'ghost' | 'primary'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'ghost'"},{name:"literal",value:"'primary'"}]},description:"Button variant",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className",defaultValue:{value:"''",computed:!1}}},composes:["Omit"]};t.__docgenInfo={description:"",methods:[],displayName:"TopActionBarIconButton",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display"},"aria-label":{required:!0,tsType:{name:"string"},description:"Accessible label"},active:{required:!1,tsType:{name:"boolean"},description:"Whether button is active",defaultValue:{value:"false",computed:!1}},badge:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Optional badge content"},className:{required:!1,tsType:{name:"string"},description:"Optional className",defaultValue:{value:"''",computed:!1}}},composes:["Omit"]};const i=()=>e.jsx("span",{children:"☰"}),j=()=>e.jsx("span",{children:"🔍"}),x=()=>e.jsx("span",{children:"🔔"}),c=()=>e.jsx("span",{children:"👤"}),C=()=>e.jsx("span",{children:"⚙️"}),R=()=>e.jsx("span",{children:"🏠"}),I=()=>e.jsx("span",{children:"➕"}),_={title:"Navigation/TopActionBar",component:o,tags:[],argTypes:{glass:{control:"boolean",description:"Whether to use glassmorphism effect"},sticky:{control:"boolean",description:"Whether the bar should be sticky"},showBorder:{control:"boolean",description:"Whether to show bottom border"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},className:{control:!1}}},u={args:{leftContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(i,{}),"aria-label":"Menu"}),e.jsx("span",{className:"text-lg font-semibold text-text-primary",children:"Smart Coder"})]}),rightContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(j,{}),"aria-label":"Search"}),e.jsx(t,{icon:e.jsx(x,{}),"aria-label":"Notifications",badge:"3"}),e.jsx(t,{icon:e.jsx(c,{}),"aria-label":"Profile"})]}),sticky:!0,showBorder:!0,size:"md"},render:a=>e.jsxs("div",{className:"min-h-screen bg-background-secondary",children:[e.jsx(o,{...a}),e.jsx("div",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-text-primary mb-4",children:"Page Content"}),e.jsx("p",{className:"text-text-secondary mb-8",children:"The Top Action Bar is sticky and will remain at the top as you scroll."}),[...Array(20)].map((r,s)=>e.jsx("p",{className:"mb-4 text-text-secondary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},s))]})})]})},h={args:{leftContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(i,{}),"aria-label":"Menu"}),e.jsx("span",{className:"text-lg font-semibold text-text-primary",children:"Dashboard"})]}),centerContent:e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(n,{icon:e.jsx(R,{}),children:"Home"}),e.jsx(n,{children:"Projects"}),e.jsx(n,{active:!0,children:"Tasks"}),e.jsx(n,{children:"Team"})]}),rightContent:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"primary",icon:e.jsx(I,{}),children:"New Task"}),e.jsx(t,{icon:e.jsx(C,{}),"aria-label":"Settings"})]}),sticky:!0,showBorder:!0,size:"md"},render:a=>e.jsxs("div",{className:"min-h-screen bg-background-secondary",children:[e.jsx(o,{...a}),e.jsx("div",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-text-primary mb-4",children:"Dashboard"}),e.jsx("p",{className:"text-text-secondary",children:"This example shows a Top Action Bar with navigation in the center."})]})})]})},b={args:{leftContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(i,{}),"aria-label":"Menu"}),e.jsx("span",{className:"text-lg font-semibold text-text-primary",children:"App Name"})]}),rightContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(j,{}),"aria-label":"Search"}),e.jsx(t,{icon:e.jsx(x,{}),"aria-label":"Notifications",badge:"5"}),e.jsx(t,{icon:e.jsx(c,{}),"aria-label":"Profile"})]}),glass:!0,sticky:!0,showBorder:!1,size:"md"},render:a=>e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500",children:[e.jsx(o,{...a}),e.jsx("div",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-white mb-4",children:"Glassmorphism Effect"}),e.jsx("p",{className:"text-white/80 mb-8",children:"The Top Action Bar uses a glass effect with backdrop blur."}),[...Array(15)].map((r,s)=>e.jsx("p",{className:"mb-4 text-white/70",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},s))]})})]})},f={args:{leftContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(i,{}),"aria-label":"Menu"}),e.jsx("span",{className:"text-base font-semibold text-text-primary",children:"Compact"})]}),rightContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(x,{}),"aria-label":"Notifications"}),e.jsx(t,{icon:e.jsx(c,{}),"aria-label":"Profile"})]}),sticky:!0,showBorder:!0,size:"sm"},render:a=>e.jsxs("div",{className:"min-h-screen bg-background-secondary",children:[e.jsx(o,{...a}),e.jsx("div",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-2xl font-bold text-text-primary mb-4",children:"Small Size"}),e.jsx("p",{className:"text-text-secondary",children:"This is a compact version of the Top Action Bar."})]})})]})},g={args:{leftContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(i,{}),"aria-label":"Menu"}),e.jsx("span",{className:"text-xl font-semibold text-text-primary",children:"Large App"})]}),rightContent:e.jsxs(e.Fragment,{children:[e.jsx(n,{variant:"primary",icon:e.jsx(I,{}),children:"Create New"}),e.jsx(t,{icon:e.jsx(x,{}),"aria-label":"Notifications",badge:"12"}),e.jsx(t,{icon:e.jsx(c,{}),"aria-label":"Profile"})]}),sticky:!0,showBorder:!0,size:"lg"},render:a=>e.jsxs("div",{className:"min-h-screen bg-background-secondary",children:[e.jsx(o,{...a}),e.jsx("div",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-text-primary mb-4",children:"Large Size"}),e.jsx("p",{className:"text-text-secondary",children:"This is a larger version of the Top Action Bar with more spacing."})]})})]})},y={args:{leftContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(i,{}),"aria-label":"Menu"}),e.jsx("span",{className:"text-lg font-semibold text-text-primary",children:"Non-Sticky"})]}),rightContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(j,{}),"aria-label":"Search"}),e.jsx(t,{icon:e.jsx(c,{}),"aria-label":"Profile"})]}),sticky:!1,showBorder:!0,size:"md"},render:a=>e.jsxs("div",{className:"min-h-screen bg-background-secondary",children:[e.jsx(o,{...a}),e.jsx("div",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-text-primary mb-4",children:"Non-Sticky Bar"}),e.jsx("p",{className:"text-text-secondary mb-8",children:"This Top Action Bar is not sticky and will scroll away with the content."}),[...Array(20)].map((r,s)=>e.jsx("p",{className:"mb-4 text-text-secondary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},s))]})})]})},N={args:{leftContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(i,{}),"aria-label":"Menu"}),e.jsx("span",{className:"text-lg font-semibold text-text-primary",children:"Search App"})]}),centerContent:e.jsxs("div",{className:"relative w-full max-w-md",children:[e.jsx("input",{type:"search",placeholder:"Search...",className:"w-full h-9 pl-10 pr-4 rounded-lg bg-surface-secondary border border-border-primary text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all"}),e.jsx("span",{className:"absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary",children:e.jsx(j,{})})]}),rightContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{icon:e.jsx(x,{}),"aria-label":"Notifications",badge:"7"}),e.jsx(t,{icon:e.jsx(c,{}),"aria-label":"Profile"})]}),sticky:!0,showBorder:!0,size:"md"},render:a=>e.jsxs("div",{className:"min-h-screen bg-background-secondary",children:[e.jsx(o,{...a}),e.jsx("div",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-text-primary mb-4",children:"With Search Bar"}),e.jsx("p",{className:"text-text-secondary",children:"This example shows a search bar in the center of the Top Action Bar."})]})})]})};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <>
                <TopActionBarIconButton icon={<MenuIcon />} aria-label="Menu" />
                <span className="text-lg font-semibold text-text-primary">Smart Coder</span>
            </>,
    rightContent: <>
                <TopActionBarIconButton icon={<SearchIcon />} aria-label="Search" />
                <TopActionBarIconButton icon={<BellIcon />} aria-label="Notifications" badge="3" />
                <TopActionBarIconButton icon={<UserIcon />} aria-label="Profile" />
            </>,
    sticky: true,
    showBorder: true,
    size: 'md'
  },
  render: args => <div className="min-h-screen bg-background-secondary">
            <TopActionBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-text-primary mb-4">Page Content</h1>
                    <p className="text-text-secondary mb-8">
                        The Top Action Bar is sticky and will remain at the top as you scroll.
                    </p>
                    {[...Array(20)].map((_, i) => <p key={i} className="mb-4 text-text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>)}
                </div>
            </div>
        </div>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <>
                <TopActionBarIconButton icon={<MenuIcon />} aria-label="Menu" />
                <span className="text-lg font-semibold text-text-primary">Dashboard</span>
            </>,
    centerContent: <div className="flex items-center gap-2">
                <TopActionBarButton icon={<HomeIcon />}>Home</TopActionBarButton>
                <TopActionBarButton>Projects</TopActionBarButton>
                <TopActionBarButton active>Tasks</TopActionBarButton>
                <TopActionBarButton>Team</TopActionBarButton>
            </div>,
    rightContent: <>
                <TopActionBarButton variant="primary" icon={<PlusIcon />}>
                    New Task
                </TopActionBarButton>
                <TopActionBarIconButton icon={<SettingsIcon />} aria-label="Settings" />
            </>,
    sticky: true,
    showBorder: true,
    size: 'md'
  },
  render: args => <div className="min-h-screen bg-background-secondary">
            <TopActionBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-text-primary mb-4">Dashboard</h1>
                    <p className="text-text-secondary">
                        This example shows a Top Action Bar with navigation in the center.
                    </p>
                </div>
            </div>
        </div>
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <>
                <TopActionBarIconButton icon={<MenuIcon />} aria-label="Menu" />
                <span className="text-lg font-semibold text-text-primary">App Name</span>
            </>,
    rightContent: <>
                <TopActionBarIconButton icon={<SearchIcon />} aria-label="Search" />
                <TopActionBarIconButton icon={<BellIcon />} aria-label="Notifications" badge="5" />
                <TopActionBarIconButton icon={<UserIcon />} aria-label="Profile" />
            </>,
    glass: true,
    sticky: true,
    showBorder: false,
    size: 'md'
  },
  render: args => <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
            <TopActionBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-white mb-4">Glassmorphism Effect</h1>
                    <p className="text-white/80 mb-8">
                        The Top Action Bar uses a glass effect with backdrop blur.
                    </p>
                    {[...Array(15)].map((_, i) => <p key={i} className="mb-4 text-white/70">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>)}
                </div>
            </div>
        </div>
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <>
                <TopActionBarIconButton icon={<MenuIcon />} aria-label="Menu" />
                <span className="text-base font-semibold text-text-primary">Compact</span>
            </>,
    rightContent: <>
                <TopActionBarIconButton icon={<BellIcon />} aria-label="Notifications" />
                <TopActionBarIconButton icon={<UserIcon />} aria-label="Profile" />
            </>,
    sticky: true,
    showBorder: true,
    size: 'sm'
  },
  render: args => <div className="min-h-screen bg-background-secondary">
            <TopActionBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-2xl font-bold text-text-primary mb-4">Small Size</h1>
                    <p className="text-text-secondary">
                        This is a compact version of the Top Action Bar.
                    </p>
                </div>
            </div>
        </div>
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <>
                <TopActionBarIconButton icon={<MenuIcon />} aria-label="Menu" />
                <span className="text-xl font-semibold text-text-primary">Large App</span>
            </>,
    rightContent: <>
                <TopActionBarButton variant="primary" icon={<PlusIcon />}>
                    Create New
                </TopActionBarButton>
                <TopActionBarIconButton icon={<BellIcon />} aria-label="Notifications" badge="12" />
                <TopActionBarIconButton icon={<UserIcon />} aria-label="Profile" />
            </>,
    sticky: true,
    showBorder: true,
    size: 'lg'
  },
  render: args => <div className="min-h-screen bg-background-secondary">
            <TopActionBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-text-primary mb-4">Large Size</h1>
                    <p className="text-text-secondary">
                        This is a larger version of the Top Action Bar with more spacing.
                    </p>
                </div>
            </div>
        </div>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <>
                <TopActionBarIconButton icon={<MenuIcon />} aria-label="Menu" />
                <span className="text-lg font-semibold text-text-primary">Non-Sticky</span>
            </>,
    rightContent: <>
                <TopActionBarIconButton icon={<SearchIcon />} aria-label="Search" />
                <TopActionBarIconButton icon={<UserIcon />} aria-label="Profile" />
            </>,
    sticky: false,
    showBorder: true,
    size: 'md'
  },
  render: args => <div className="min-h-screen bg-background-secondary">
            <TopActionBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-text-primary mb-4">Non-Sticky Bar</h1>
                    <p className="text-text-secondary mb-8">
                        This Top Action Bar is not sticky and will scroll away with the content.
                    </p>
                    {[...Array(20)].map((_, i) => <p key={i} className="mb-4 text-text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>)}
                </div>
            </div>
        </div>
}`,...y.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    leftContent: <>
                <TopActionBarIconButton icon={<MenuIcon />} aria-label="Menu" />
                <span className="text-lg font-semibold text-text-primary">Search App</span>
            </>,
    centerContent: <div className="relative w-full max-w-md">
                <input type="search" placeholder="Search..." className="w-full h-9 pl-10 pr-4 rounded-lg bg-surface-secondary border border-border-primary text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-accent-blue transition-all" />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-tertiary">
                    <SearchIcon />
                </span>
            </div>,
    rightContent: <>
                <TopActionBarIconButton icon={<BellIcon />} aria-label="Notifications" badge="7" />
                <TopActionBarIconButton icon={<UserIcon />} aria-label="Profile" />
            </>,
    sticky: true,
    showBorder: true,
    size: 'md'
  },
  render: args => <div className="min-h-screen bg-background-secondary">
            <TopActionBar {...args} />
            <div className="p-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-text-primary mb-4">With Search Bar</h1>
                    <p className="text-text-secondary">
                        This example shows a search bar in the center of the Top Action Bar.
                    </p>
                </div>
            </div>
        </div>
}`,...N.parameters?.docs?.source}}};const L=["Default","WithCenterContent","Glass","Small","Large","NotSticky","WithSearchBar"];export{u as Default,b as Glass,g as Large,y as NotSticky,f as Small,h as WithCenterContent,N as WithSearchBar,L as __namedExportsOrder,_ as default};
