import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as N,R as $}from"./iframe-Cb93e_Z8.js";import{c as G}from"./utils-CDN07tui.js";import{C as U,d as B,a as Z,b as H,c as P}from"./Card-PI0K4t1q.js";import{a as M,u as S}from"./use-transform-A5wsvXS_.js";import{f as K,i as q,J as Q,M as ee,m as D}from"./proxy-b22VB84a.js";import{B as T}from"./Button-DGE0rp2O.js";import"./preload-helper-PPVm8Dsz.js";function te(t,s,l){const n=t.get();let r=null,u=n,p;const f=typeof n=="string"?n.replace(/[\d.-]/g,""):void 0,m=()=>{r&&(r.stop(),r=null)},w=()=>{m(),r=new Q({keyframes:[V(t.get()),V(u)],velocity:t.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...l,onUpdate:p})};if(t.attach((o,i)=>{u=o,p=d=>i(R(d,f)),K.postRender(()=>{w(),t.events.animationStart?.notify(),r?.then(()=>{t.events.animationComplete?.notify()})})},m),q(s)){const o=s.on("change",d=>t.set(R(d,f))),i=t.on("destroy",o);return()=>{o(),i()}}return m}function R(t,s){return s?t+s:t}function V(t){return typeof t=="number"?t:parseFloat(t)}function I(t,s={}){const{isStatic:l}=N.useContext(ee),n=()=>q(t)?t.get():t;if(l)return M(n);const r=S(n());return N.useInsertionEffect(()=>te(r,t,s),[r,JSON.stringify(s)]),r}const a=$.forwardRef(({children:t,intensity:s=15,perspective:l=1e3,glowEffect:n=!0,glowColor:r="rgba(0, 122, 255, 0.3)",variant:u="elevated",padding:p="md",className:f,...m},w)=>{const o=N.useRef(null),[i,d]=N.useState(!1),j=S(0),b=S(0),A=I(M(b,[-1,1],[s,-s]),{stiffness:300,damping:30}),O=I(M(j,[-1,1],[-s,s]),{stiffness:300,damping:30}),z=E=>{if(!o.current)return;const c=o.current.getBoundingClientRect(),Y=c.left+c.width/2,L=c.top+c.height/2,_=E.clientX-Y,k=E.clientY-L,F=Math.max(-1,Math.min(1,_/(c.width/2))),W=Math.max(-1,Math.min(1,k/(c.height/2)));j.set(F),b.set(W)},J=()=>{j.set(0),b.set(0),d(!1)},X=()=>{d(!0)};return e.jsx("div",{ref:w,className:G("relative",f),style:{perspective:`${l}px`},...m,children:e.jsx(D.div,{ref:o,onMouseMove:z,onMouseLeave:J,onMouseEnter:X,style:{rotateX:A,rotateY:O,transformStyle:"preserve-3d"},className:"relative",children:e.jsxs(U,{variant:u,padding:p,hoverable:!1,className:G("relative",i&&"shadow-xl"),children:[n&&i&&e.jsx(D.div,{className:"absolute inset-0 rounded-2xl opacity-0 blur-xl pointer-events-none",style:{background:`radial-gradient(circle at center, ${r}, transparent 70%)`},animate:{opacity:[0,.5,0]},transition:{duration:2,repeat:1/0}}),e.jsx("div",{className:"relative z-10",style:{transform:"translateZ(20px)"},children:t})]})})})});a.displayName="GestureCard";a.__docgenInfo={description:"",methods:[],displayName:"GestureCard",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},intensity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"15",computed:!1}},perspective:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1000",computed:!1}},glowEffect:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},glowColor:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'rgba(0, 122, 255, 0.3)'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},variant:{defaultValue:{value:"'elevated'",computed:!1},required:!1},padding:{defaultValue:{value:"'md'",computed:!1},required:!1}},composes:["Omit"]};const le={title:"Surfaces/GestureCard",component:a,parameters:{layout:"centered",docs:{description:{component:"Card con efecto 3D estilo VisionOS que responde a gestos del mouse. El card se inclina y rota siguiendo el movimiento del cursor, creando una experiencia inmersiva."}}},tags:[],argTypes:{intensity:{control:{type:"number",min:5,max:30,step:1},description:"Intensidad de la rotación 3D"},perspective:{control:{type:"number",min:500,max:2e3,step:100},description:"Perspectiva 3D del contenedor"},glowEffect:{control:"boolean",description:"Mostrar efecto de brillo"}}},g={name:"Default",args:{intensity:20,perspective:1e3,glowEffect:!0,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Gesture Card"}),e.jsx("p",{className:"text-text-secondary",children:"Hover and tilt me!"})]})},render:t=>e.jsx("div",{className:"w-80",children:e.jsx(a,{...t})})},x={name:"Alta Intensidad",args:{intensity:40,perspective:800,glowEffect:!0,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"High Intensity"}),e.jsx("p",{className:"text-text-secondary",children:"Stronger tilt effect"})]})},render:t=>e.jsx("div",{className:"w-80",children:e.jsx(a,{...t})})},h={name:"Sin Resplandor",args:{intensity:20,perspective:1e3,glowEffect:!1,children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"No Glow"}),e.jsx("p",{className:"text-text-secondary",children:"Just tilt, no shine"})]})},render:t=>e.jsx("div",{className:"w-80",children:e.jsx(a,{...t})})},v={name:"Color Personalizado",args:{intensity:20,perspective:1e3,glowEffect:!0,glowColor:"rgba(59, 130, 246, 0.5)",children:e.jsxs("div",{className:"p-6",children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Blue Glow"}),e.jsx("p",{className:"text-text-secondary",children:"Custom glow color"})]})},render:t=>e.jsx("div",{className:"w-80",children:e.jsx(a,{...t})})},C={name:"Con Contenido Completo",args:{intensity:15,perspective:1e3,glowEffect:!0,children:e.jsx(e.Fragment,{})},render:t=>e.jsx("div",{className:"w-96",children:e.jsx(a,{...t,children:e.jsxs(B,{children:[e.jsxs(Z,{children:[e.jsx(H,{children:"Product Card"}),e.jsx(P,{children:"Premium Product"})]}),e.jsx("div",{className:"h-48 bg-surface-secondary rounded-xl mb-4 flex items-center justify-center",children:e.jsx("span",{className:"text-text-tertiary",children:"Image Preview"})}),e.jsx("p",{className:"text-sm text-text-secondary mb-4",children:"This is a product description that demonstrates the gesture card with full content."}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx(T,{variant:"primary",children:"Buy Now"}),e.jsx(T,{variant:"ghost",children:"Learn More"})]})]})})})},y={name:"Múltiples Cards",render:()=>e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl",children:[1,2,3].map(t=>e.jsx(a,{intensity:12,glowEffect:!0,children:e.jsxs(B,{children:[e.jsxs(H,{children:["Card ",t]}),e.jsx(P,{children:"Mueve el mouse sobre cada card"})]})},t))}),args:{children:null}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};const me=["Default","HighIntensity","NoGlow","CustomColor","WithContent","MultipleCards"];export{v as CustomColor,g as Default,x as HighIntensity,y as MultipleCards,h as NoGlow,C as WithContent,me as __namedExportsOrder,le as default};
