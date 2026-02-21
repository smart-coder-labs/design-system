import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as M,R as f}from"./iframe-CGazvlvx.js";import{M as v,d as y,a as b,b as R,e as N,f as B,c as F,g as z}from"./Modal-DSI_U2Rc.js";import{B as o}from"./Button-DiLt8not.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D6mcrAZ6.js";import"./index-CfB_ZJHU.js";import"./index-C-eQ3fKV.js";import"./proxy-BNOm_ZMq.js";import"./resolve-elements-juiWZL7b.js";const m=i=>{const{initialStack:a=[],className:r,open:g,onCloseAll:p}=i,[n,u]=M.useState(a),[k,h]=M.useState(a.length>0),S=g!==void 0?g:k;f.useEffect(()=>{S&&n.length===0&&a.length>0&&u(a)},[S,a,n.length]);const C=t=>{u(s=>[...s,t]),h(!0)},x=()=>{u(t=>t.slice(0,-1)),h(n.length>1),n.length<=1&&p&&p()},j=()=>{u([]),h(!1),p&&p()};return e.jsx(e.Fragment,{children:n.map((t,s)=>e.jsxs(v,{open:S&&s===n.length-1,onOpenChange:w=>{w||x()},size:t.size||"md",children:[e.jsx(y,{}),e.jsxs(b,{children:[e.jsx(R,{children:t.title}),t.description&&e.jsx(N,{children:t.description})]}),e.jsx(B,{children:t.content}),e.jsxs(F,{children:[e.jsx(z,{children:e.jsx(o,{variant:"ghost",children:"Cerrar"})}),s===n.length-1&&e.jsx(o,{variant:"primary",onClick:()=>C({title:"Modal Secundario",description:"Este modal se apila sobre el anterior.",content:e.jsx("p",{children:"Contenido del modal secundario."}),footer:e.jsx(o,{variant:"ghost",onClick:j,children:"Cerrar todo"}),size:"sm"}),children:"Abrir otro modal"}),t.footer]})]},s))})};m.__docgenInfo={description:`ModalStackManager: gestiona múltiples modales apilados estilo macOS/iOS
- Animación de entrada/salida con Framer Motion
- Cada modal puede abrir otro modal encima
- Cierre individual o en cascada`,methods:[],displayName:"ModalStackManager",props:{initialStack:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  title: string;
  description?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}`,signature:{properties:[{key:"title",value:{name:"string",required:!0}},{key:"description",value:{name:"string",required:!1}},{key:"content",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"footer",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}},{key:"size",value:{name:"union",raw:"'sm' | 'md' | 'lg' | 'xl' | 'full'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'full'"}],required:!1}}]}}],raw:"ModalConfig[]"},description:"Initial modals to show (array of modal configs)"},className:{required:!1,tsType:{name:"string"},description:"Optional className for root"},open:{required:!1,tsType:{name:"boolean"},description:"Controlled open state (optional)"},onCloseAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when all modals are closed"}}};const G={title:"Components/ModalStackManager",component:m},l=()=>{const[i,a]=f.useState(!1),r=[{title:"Modal Principal",description:"Este es el modal principal. Puedes abrir otro modal encima.",content:e.jsx("p",{children:"Contenido del modal principal."}),footer:e.jsx(o,{variant:"ghost",onClick:()=>a(!1),children:"Cerrar"}),size:"md"}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",onClick:()=>a(!0),children:"Abrir Modal Stack"}),i&&e.jsx(m,{initialStack:r})]})},c=()=>{const[i,a]=f.useState(!1),r=[{title:"Modal de Confirmación",description:"¿Deseas continuar con la acción?",content:e.jsx("p",{children:"Esta acción es irreversible."}),footer:e.jsx(o,{variant:"primary",onClick:()=>a(!1),children:"Confirmar"}),size:"sm"}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",onClick:()=>a(!0),children:"Abrir Confirmación"}),i&&e.jsx(m,{initialStack:r})]})},d=()=>{const[i,a]=f.useState(!1),r=[{title:"Paso 1: Información",description:"Completa la información básica.",content:e.jsx("p",{children:"Formulario de información básica."}),footer:e.jsx(o,{variant:"primary",onClick:()=>a(!1),children:"Siguiente"}),size:"md"}];return e.jsxs(e.Fragment,{children:[e.jsx(o,{variant:"primary",onClick:()=>a(!0),children:"Iniciar Flujo Multi-paso"}),i&&e.jsx(m,{initialStack:r})]})};l.__docgenInfo={description:"",methods:[],displayName:"Default"};c.__docgenInfo={description:"",methods:[],displayName:"NestedModals"};d.__docgenInfo={description:"",methods:[],displayName:"MultiStepFlow"};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const [show, setShow] = React.useState(false);
  const initialStack: ModalConfig[] = [{
    title: 'Modal Principal',
    description: 'Este es el modal principal. Puedes abrir otro modal encima.',
    content: <p>Contenido del modal principal.</p>,
    footer: <Button variant="ghost" onClick={() => setShow(false)}>Cerrar</Button>,
    size: 'md'
  }];
  return <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Abrir Modal Stack
      </Button>
      {show && <ModalStackManager initialStack={initialStack} />}
    </>;
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const [show, setShow] = React.useState(false);
  const initialStack: ModalConfig[] = [{
    title: 'Modal de Confirmación',
    description: '¿Deseas continuar con la acción?',
    content: <p>Esta acción es irreversible.</p>,
    footer: <Button variant="primary" onClick={() => setShow(false)}>Confirmar</Button>,
    size: 'sm'
  }];
  return <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Abrir Confirmación
      </Button>
      {show && <ModalStackManager initialStack={initialStack} />}
    </>;
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const [show, setShow] = React.useState(false);
  const initialStack: ModalConfig[] = [{
    title: 'Paso 1: Información',
    description: 'Completa la información básica.',
    content: <p>Formulario de información básica.</p>,
    footer: <Button variant="primary" onClick={() => setShow(false)}>Siguiente</Button>,
    size: 'md'
  }];
  return <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Iniciar Flujo Multi-paso
      </Button>
      {show && <ModalStackManager initialStack={initialStack} />}
    </>;
}`,...d.parameters?.docs?.source}}};const J=["Default","NestedModals","MultiStepFlow"];export{l as Default,d as MultiStepFlow,c as NestedModals,J as __namedExportsOrder,G as default};
