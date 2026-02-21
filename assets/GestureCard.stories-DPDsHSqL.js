import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as J,r as h}from"./iframe-Dan5ncgG.js";import{c as v}from"./utils-CDN07tui.js";import{C as W,d as b,a as $,b as M,c as E}from"./Card-Bi9XUbhW.js";import{a as C,u as y}from"./use-transform-CqgZm8hS.js";import{u as N}from"./use-spring-D4T1G0yU.js";import{m as w}from"./proxy-DCTGQFKY.js";import{B as j}from"./Button-DwkrxhSZ.js";import"./preload-helper-PPVm8Dsz.js";import"./resolve-elements-juiWZL7b.js";const t=J.forwardRef(({children:s,intensity:a=15,perspective:G=1e3,glowEffect:S=!0,glowColor:T="rgba(0, 122, 255, 0.3)",variant:D="elevated",padding:R="md",className:B,...I},H)=>{const m=h.useRef(null),[f,g]=h.useState(!1),p=C(0),u=C(0),P=N(y(u,[-1,1],[a,-a]),{stiffness:300,damping:30}),q=N(y(p,[-1,1],[-a,a]),{stiffness:300,damping:30}),V=x=>{if(!m.current)return;const r=m.current.getBoundingClientRect(),Y=r.left+r.width/2,L=r.top+r.height/2,_=x.clientX-Y,O=x.clientY-L,k=Math.max(-1,Math.min(1,_/(r.width/2))),A=Math.max(-1,Math.min(1,O/(r.height/2)));p.set(k),u.set(A)},z=()=>{p.set(0),u.set(0),g(!1)},X=()=>{g(!0)};return e.jsx("div",{ref:H,className:v("relative",B),style:{perspective:`${G}px`},...I,children:e.jsx(w.div,{ref:m,onMouseMove:V,onMouseLeave:z,onMouseEnter:X,style:{rotateX:P,rotateY:q,transformStyle:"preserve-3d"},className:"relative",children:e.jsxs(W,{variant:D,padding:R,hoverable:!1,className:v("relative",f&&"shadow-xl"),children:[S&&f&&e.jsx(w.div,{className:"absolute inset-0 rounded-2xl opacity-0 blur-xl pointer-events-none",style:{background:`radial-gradient(circle at center, ${T}, transparent 70%)`},animate:{opacity:[0,.5,0]},transition:{duration:2,repeat:1/0}}),e.jsx("div",{className:"relative z-10",style:{transform:"translateZ(20px)"},children:s})]})})})});t.displayName="GestureCard";t.__docgenInfo={description:"",methods:[],displayName:"GestureCard",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},intensity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"15",computed:!1}},perspective:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1000",computed:!1}},glowEffect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},glowColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'rgba(0, 122, 255, 0.3)'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},variant:{defaultValue:{value:"'elevated'",computed:!1},required:!1},padding:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["Omit"]};const ne={title:"Surfaces/GestureCard",component:t,parameters:{layout:"centered",docs:{description:{component:"Card con efecto 3D estilo VisionOS que responde a gestos del mouse. El card se inclina y rota siguiendo el movimiento del cursor, creando una experiencia inmersiva."}}},tags:[],argTypes:{intensity:{control:{type:"number",min:5,max:30,step:1},description:"Intensidad de la rotación 3D"},perspective:{control:{type:"number",min:500,max:2e3,step:100},description:"Perspectiva 3D del contenedor"},glowEffect:{control:"boolean",description:"Mostrar efecto de brillo"}}},n={name:"Default",args:{intensity:20,perspective:1e3,glowEffect:!0,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Gesture Card"}),e.jsx("p",{className:"text-text-secondary",children:"Hover and tilt me!"})]})},render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})})},o={name:"Alta Intensidad",args:{intensity:40,perspective:800,glowEffect:!0,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"High Intensity"}),e.jsx("p",{className:"text-text-secondary",children:"Stronger tilt effect"})]})},render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})})},i={name:"Sin Resplandor",args:{intensity:20,perspective:1e3,glowEffect:!1,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"No Glow"}),e.jsx("p",{className:"text-text-secondary",children:"Just tilt, no shine"})]})},render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})})},d={name:"Color Personalizado",args:{intensity:20,perspective:1e3,glowEffect:!0,glowColor:"rgba(59, 130, 246, 0.5)",children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Blue Glow"}),e.jsx("p",{className:"text-text-secondary",children:"Custom glow color"})]})},render:s=>e.jsx("div",{className:"w-80",children:e.jsx(t,{...s})})},l={name:"Con Contenido Completo",args:{intensity:15,perspective:1e3,glowEffect:!0,children:e.jsx(e.Fragment,{})},render:s=>e.jsx("div",{className:"w-96",children:e.jsx(t,{...s,children:e.jsxs(b,{children:[e.jsxs($,{children:[e.jsx(M,{children:"Product Card"}),e.jsx(E,{children:"Premium Product"})]}),e.jsx("div",{className:"h-48 bg-surface-secondary rounded-xl mb-4 flex items-center justify-center",children:e.jsx("span",{className:"text-text-tertiary",children:"Image Preview"})}),e.jsx("p",{className:"text-sm text-text-secondary mb-4",children:"This is a product description that demonstrates the gesture card with full content."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(j,{variant:"primary",children:"Buy Now"}),e.jsx(j,{variant:"ghost",children:"Learn More"})]})]})})})},c={name:"Múltiples Cards",render:()=>e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl",children:[1,2,3].map(s=>e.jsx(t,{intensity:12,glowEffect:!0,children:e.jsxs(b,{children:[e.jsxs(M,{children:["Card ",s]}),e.jsx(E,{children:"Mueve el mouse sobre cada card"})]})},s))}),args:{children:null}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  args: {
    intensity: 20,
    perspective: 1000,
    glowEffect: true,
    children: <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Gesture Card</h3>
                <p className="text-text-secondary">Hover and tilt me!</p>
            </div>
  },
  render: args => <div className="w-80">
            <GestureCard {...args} />
        </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Alta Intensidad',
  args: {
    intensity: 40,
    perspective: 800,
    glowEffect: true,
    children: <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">High Intensity</h3>
                <p className="text-text-secondary">Stronger tilt effect</p>
            </div>
  },
  render: args => <div className="w-80">
            <GestureCard {...args} />
        </div>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Sin Resplandor',
  args: {
    intensity: 20,
    perspective: 1000,
    glowEffect: false,
    children: <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">No Glow</h3>
                <p className="text-text-secondary">Just tilt, no shine</p>
            </div>
  },
  render: args => <div className="w-80">
            <GestureCard {...args} />
        </div>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Color Personalizado',
  args: {
    intensity: 20,
    perspective: 1000,
    glowEffect: true,
    glowColor: 'rgba(59, 130, 246, 0.5)',
    // Blue glow
    children: <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Blue Glow</h3>
                <p className="text-text-secondary">Custom glow color</p>
            </div>
  },
  render: args => <div className="w-80">
            <GestureCard {...args} />
        </div>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Con Contenido Completo',
  args: {
    intensity: 15,
    perspective: 1000,
    glowEffect: true,
    children: <></>
  },
  render: args => <div className="w-96">
            <GestureCard {...args}>
                <CardContent>
                    <CardHeader>
                        <CardTitle>Product Card</CardTitle>
                        <CardDescription>Premium Product</CardDescription>
                    </CardHeader>
                    <div className="h-48 bg-surface-secondary rounded-xl mb-4 flex items-center justify-center">
                        <span className="text-text-tertiary">Image Preview</span>
                    </div>
                    <p className="text-sm text-text-secondary mb-4">
                        This is a product description that demonstrates the gesture card with full content.
                    </p>
                    <div className="flex gap-2">
                        <Button variant="primary">Buy Now</Button>
                        <Button variant="ghost">Learn More</Button>
                    </div>
                </CardContent>
            </GestureCard>
        </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Múltiples Cards',
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {[1, 2, 3].map(i => <GestureCard key={i} intensity={12} glowEffect={true}>
                    <CardContent>
                        <CardTitle>Card {i}</CardTitle>
                        <CardDescription>
                            Mueve el mouse sobre cada card
                        </CardDescription>
                    </CardContent>
                </GestureCard>)}
        </div>,
  args: {
    children: null // Dummy args to satisfy type if needed, but render overrides
  }
}`,...c.parameters?.docs?.source}}};const oe=["Default","HighIntensity","NoGlow","CustomColor","WithContent","MultipleCards"];export{d as CustomColor,n as Default,o as HighIntensity,c as MultipleCards,i as NoGlow,l as WithContent,oe as __namedExportsOrder,ne as default};
