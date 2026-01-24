import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as i}from"./iframe-FxOJXbvx.js";import{c as C}from"./utils-CDN07tui.js";import{m}from"./proxy-PznluMrK.js";import"./preload-helper-PPVm8Dsz.js";const o=i.forwardRef(({isOpen:t,onClick:a,size:r="md",variant:f="default",className:l="","aria-label":N="Toggle menu",...n},k)=>{const w={sm:{button:"w-8 h-8",width:16,gap:3,strokeWidth:2},md:{button:"w-10 h-10",width:20,gap:4,strokeWidth:2},lg:{button:"w-12 h-12",width:24,gap:5,strokeWidth:2.5}},z={default:"text-text-secondary hover:text-text-primary hover:bg-surface-secondary",primary:"text-white bg-accent-blue hover:bg-accent-blue/90",ghost:"text-text-secondary hover:text-text-primary hover:bg-transparent"},{button:S,width:s,gap:O,strokeWidth:j}=w[r];return e.jsx(m.button,{ref:k,onClick:a,className:C("inline-flex items-center justify-center rounded-md transition-colors","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue",S,z[f],l),whileHover:{scale:1.05},whileTap:{scale:.95},"aria-label":N,"aria-expanded":t,...n,children:e.jsxs("svg",{width:s,height:s,viewBox:`0 0 ${s} ${s}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx(m.line,{x1:"0",y1:"0",x2:s,y2:"0",stroke:"currentColor",strokeWidth:j,strokeLinecap:"round",animate:{rotate:t?45:0,translateY:t?s/2:O},transition:{duration:.3,ease:[.16,1,.3,1]},style:{originX:"50%",originY:"0px"}}),e.jsx(m.line,{x1:"0",y1:s/2,x2:s,y2:s/2,stroke:"currentColor",strokeWidth:j,strokeLinecap:"round",animate:{opacity:t?0:1,scaleX:t?0:1},transition:{duration:.2,ease:[.16,1,.3,1]},style:{originX:"50%",originY:"50%"}}),e.jsx(m.line,{x1:"0",y1:"0",x2:s,y2:"0",stroke:"currentColor",strokeWidth:j,strokeLinecap:"round",animate:{rotate:t?-45:0,translateY:t?s/2:s-O},transition:{duration:.3,ease:[.16,1,.3,1]},style:{originX:"50%",originY:"0px"}})]})})});o.displayName="HamburgerMenuIcon";o.__docgenInfo={description:"",methods:[],displayName:"HamburgerMenuIcon",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the menu is open (shows X) or closed (shows hamburger)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when icon is clicked"},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"Size variant",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'ghost'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'ghost'"}]},description:"Color variant",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling",defaultValue:{value:"''",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"Aria label for accessibility",defaultValue:{value:"'Toggle menu'",computed:!1}}},composes:["Omit"]};const M={title:"Navigation/HamburgerMenuIcon",component:o,tags:[],argTypes:{isOpen:{control:"boolean",description:"Whether the menu is open (shows X) or closed (shows hamburger)"},size:{control:"select",options:["sm","md","lg"],description:"Size variant"},variant:{control:"select",options:["default","primary","ghost"],description:"Color variant"},className:{control:!1},onClick:{action:"clicked"}}},c=t=>{const[a,r]=i.useState(t.isOpen??!1);return i.useEffect(()=>{r(t.isOpen)},[t.isOpen]),e.jsx("div",{className:"flex items-center justify-center min-h-[200px] bg-background-secondary p-8",children:e.jsxs("div",{className:"text-center",children:[e.jsx(o,{...t,isOpen:a,onClick:()=>{r(!a),t.onClick?.()}}),e.jsxs("p",{className:"mt-4 text-sm text-text-secondary",children:["Click to toggle: ",a?"Open (X)":"Closed (☰)"]})]})})},d={render:t=>e.jsx(c,{...t}),args:{isOpen:!1,size:"md",variant:"default"}},p={render:t=>e.jsx(c,{...t}),args:{isOpen:!1,size:"sm",variant:"default"}},x={render:t=>e.jsx(c,{...t}),args:{isOpen:!1,size:"lg",variant:"default"}},u={render:t=>e.jsx(c,{...t}),args:{isOpen:!1,size:"md",variant:"primary"}},g={render:t=>e.jsx(c,{...t}),args:{isOpen:!1,size:"md",variant:"ghost"}},b={render:()=>e.jsx("div",{className:"min-h-screen bg-background-secondary p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-8",children:"All Sizes"}),e.jsx("div",{className:"grid grid-cols-3 gap-8",children:["sm","md","lg"].map(t=>{const[a,r]=i.useState(!1);return e.jsxs("div",{className:"text-center p-6 bg-surface-primary rounded-lg",children:[e.jsx(o,{size:t,isOpen:a,onClick:()=>r(!a)}),e.jsx("p",{className:"mt-4 text-sm font-medium text-text-primary capitalize",children:t}),e.jsx("p",{className:"text-xs text-text-tertiary",children:a?"Open":"Closed"})]},t)})})]})})},h={render:()=>e.jsx("div",{className:"min-h-screen bg-background-secondary p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-8",children:"All Variants"}),e.jsx("div",{className:"grid grid-cols-3 gap-8",children:["default","primary","ghost"].map(t=>{const[a,r]=i.useState(!1);return e.jsxs("div",{className:"text-center p-6 bg-surface-primary rounded-lg",children:[e.jsx(o,{variant:t,isOpen:a,onClick:()=>r(!a)}),e.jsx("p",{className:"mt-4 text-sm font-medium text-text-primary capitalize",children:t}),e.jsx("p",{className:"text-xs text-text-tertiary",children:a?"Open":"Closed"})]},t)})})]})})},v={render:()=>{const[t,a]=i.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-background-secondary",children:[e.jsxs("div",{className:"h-16 px-4 bg-surface-primary border-b border-border-primary flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(o,{isOpen:t,onClick:()=>a(!t)}),e.jsx("span",{className:"text-lg font-semibold text-text-primary",children:"My App"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"px-4 py-2 text-sm text-text-secondary hover:text-text-primary",children:"About"}),e.jsx("button",{className:"px-4 py-2 text-sm text-text-secondary hover:text-text-primary",children:"Contact"})]})]}),e.jsx("div",{className:"p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h1",{className:"text-3xl font-bold text-text-primary mb-4",children:"Hamburger Icon in NavBar"}),e.jsx("p",{className:"text-text-secondary",children:"This example shows how the hamburger icon looks when integrated into a navigation bar. Click the icon to see the animation."})]})})]})}},y={render:()=>{const[t,a]=i.useState(!1),[r,f]=i.useState("md"),[l,N]=i.useState("default");return e.jsx("div",{className:"min-h-screen bg-background-secondary p-8",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-8",children:"Playground"}),e.jsxs("div",{className:"mb-8 p-6 bg-surface-primary rounded-lg",children:[e.jsx("div",{className:"flex items-center justify-center mb-8",children:e.jsx(o,{isOpen:t,size:r,variant:l,onClick:()=>a(!t)})}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-primary mb-2",children:"Size"}),e.jsx("div",{className:"flex gap-2",children:["sm","md","lg"].map(n=>e.jsx("button",{onClick:()=>f(n),className:`px-4 py-2 text-sm rounded-md transition-colors ${r===n?"bg-accent-blue text-white":"bg-surface-secondary text-text-secondary hover:bg-surface-tertiary"}`,children:n.toUpperCase()},n))})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-primary mb-2",children:"Variant"}),e.jsx("div",{className:"flex gap-2",children:["default","primary","ghost"].map(n=>e.jsx("button",{onClick:()=>N(n),className:`px-4 py-2 text-sm rounded-md transition-colors capitalize ${l===n?"bg-accent-blue text-white":"bg-surface-secondary text-text-secondary hover:bg-surface-tertiary"}`,children:n},n))})]})]})]})]})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveHamburger {...args} />,
  args: {
    isOpen: false,
    size: 'md',
    variant: 'default'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveHamburger {...args} />,
  args: {
    isOpen: false,
    size: 'sm',
    variant: 'default'
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveHamburger {...args} />,
  args: {
    isOpen: false,
    size: 'lg',
    variant: 'default'
  }
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveHamburger {...args} />,
  args: {
    isOpen: false,
    size: 'md',
    variant: 'primary'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <InteractiveHamburger {...args} />,
  args: {
    isOpen: false,
    size: 'md',
    variant: 'ghost'
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-background-secondary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-8">All Sizes</h2>
                <div className="grid grid-cols-3 gap-8">
                    {(['sm', 'md', 'lg'] as const).map(size => {
          const [isOpen, setIsOpen] = React.useState(false);
          return <div key={size} className="text-center p-6 bg-surface-primary rounded-lg">
                                <HamburgerMenuIcon size={size} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                                <p className="mt-4 text-sm font-medium text-text-primary capitalize">
                                    {size}
                                </p>
                                <p className="text-xs text-text-tertiary">
                                    {isOpen ? 'Open' : 'Closed'}
                                </p>
                            </div>;
        })}
                </div>
            </div>
        </div>
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-background-secondary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-8">All Variants</h2>
                <div className="grid grid-cols-3 gap-8">
                    {(['default', 'primary', 'ghost'] as const).map(variant => {
          const [isOpen, setIsOpen] = React.useState(false);
          return <div key={variant} className="text-center p-6 bg-surface-primary rounded-lg">
                                <HamburgerMenuIcon variant={variant} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                                <p className="mt-4 text-sm font-medium text-text-primary capitalize">
                                    {variant}
                                </p>
                                <p className="text-xs text-text-tertiary">
                                    {isOpen ? 'Open' : 'Closed'}
                                </p>
                            </div>;
        })}
                </div>
            </div>
        </div>
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <div className="min-h-screen bg-background-secondary">
                <div className="h-16 px-4 bg-surface-primary border-b border-border-primary flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <HamburgerMenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
                        <span className="text-lg font-semibold text-text-primary">
                            My App
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary">
                            About
                        </button>
                        <button className="px-4 py-2 text-sm text-text-secondary hover:text-text-primary">
                            Contact
                        </button>
                    </div>
                </div>
                <div className="p-8">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-3xl font-bold text-text-primary mb-4">
                            Hamburger Icon in NavBar
                        </h1>
                        <p className="text-text-secondary">
                            This example shows how the hamburger icon looks when integrated into a navigation bar.
                            Click the icon to see the animation.
                        </p>
                    </div>
                </div>
            </div>;
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [size, setSize] = React.useState<'sm' | 'md' | 'lg'>('md');
    const [variant, setVariant] = React.useState<'default' | 'primary' | 'ghost'>('default');
    return <div className="min-h-screen bg-background-secondary p-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-text-primary mb-8">Playground</h2>

                    <div className="mb-8 p-6 bg-surface-primary rounded-lg">
                        <div className="flex items-center justify-center mb-8">
                            <HamburgerMenuIcon isOpen={isOpen} size={size} variant={variant} onClick={() => setIsOpen(!isOpen)} />
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">
                                    Size
                                </label>
                                <div className="flex gap-2">
                                    {(['sm', 'md', 'lg'] as const).map(s => <button key={s} onClick={() => setSize(s)} className={\`px-4 py-2 text-sm rounded-md transition-colors \${size === s ? 'bg-accent-blue text-white' : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'}\`}>
                                            {s.toUpperCase()}
                                        </button>)}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-text-primary mb-2">
                                    Variant
                                </label>
                                <div className="flex gap-2">
                                    {(['default', 'primary', 'ghost'] as const).map(v => <button key={v} onClick={() => setVariant(v)} className={\`px-4 py-2 text-sm rounded-md transition-colors capitalize \${variant === v ? 'bg-accent-blue text-white' : 'bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'}\`}>
                                            {v}
                                        </button>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>;
  }
}`,...y.parameters?.docs?.source}}};const R=["Default","Small","Large","Primary","Ghost","AllSizes","AllVariants","InNavBar","Playground"];export{b as AllSizes,h as AllVariants,d as Default,g as Ghost,v as InNavBar,x as Large,y as Playground,u as Primary,p as Small,R as __namedExportsOrder,M as default};
