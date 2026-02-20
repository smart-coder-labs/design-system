import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as $,r as d}from"./iframe-B-5hg53G.js";import{c as T}from"./utils-CDN07tui.js";import{C as se}from"./ConfirmDialog-CN2ow6Jp.js";import{u as ie,a as P}from"./use-transform-Clv1Nuz-.js";import{m}from"./proxy-BFtQK4Qy.js";import{T as re}from"./trash-2-DUrD0Ve1.js";import{X as le}from"./x-DKBhG8T6.js";import{A as ne,a as de,b as oe}from"./Avatar-0Nk8hrcA.js";import{B as L}from"./Badge-ZlgzbVMC.js";import"./preload-helper-PPVm8Dsz.js";import"./Modal-WdXKKJBW.js";import"./index-CszqequZ.js";import"./index-uAxi7R27.js";import"./index-Bmz56CCF.js";import"./Button-Dumis5Wa.js";import"./createLucideIcon-CJTSccXv.js";import"./index-B_jtOnfb.js";const ce=80,r=$.forwardRef(({children:t,onDelete:s,onCancel:a,deleteLabel:i="Delete",cancelLabel:C="Cancel",deleteIcon:I=re,cancelIcon:A=le,threshold:l=ce,disabled:k=!1,confirmDelete:q=!1,confirmMessage:H="Are you sure?",variant:M="danger",className:Y,..._},J)=>{const[O,z]=d.useState(!1),[K,c]=d.useState(!1),[R,V]=d.useState(!1),n=ie(0),X=P(n,[-l,0,l],[1,0,1]),G=P(n,[0,l],[0,1]),Q=P(n,[0,-l],[0,1]),Z={default:"bg-surface-secondary text-text-primary",danger:"bg-status-error text-white",warning:"bg-status-warning text-white"},ee=async(E,U)=>{V(!1);const F=U.offset.x,W=U.velocity.x;if(F>l||W>500){if(q){c(!0),n.set(0);return}await B()}else(F<-l||W<-500)&&a&&a(),n.set(0)},B=async()=>{z(!0);try{await s(),n.set(1e3)}catch(E){console.error("Delete error:",E),n.set(0),z(!1)}},ae=async()=>{c(!1),await B()},te=()=>{c(!1)};return O&&n.get()>500?null:e.jsxs("div",{ref:J,className:T("relative overflow-hidden rounded-xl",Y),..._,children:[e.jsxs("div",{className:"absolute inset-0 flex",children:[e.jsx(m.div,{className:T("flex-1 flex items-center justify-end px-6",Z[M]),style:{opacity:G},children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-sm font-medium",children:i}),e.jsx(I,{className:"w-5 h-5"})]})}),a&&e.jsx(m.div,{className:"flex-1 flex items-center justify-start px-6 bg-surface-secondary text-text-primary",style:{opacity:Q},children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx(A,{className:"w-5 h-5"}),e.jsx("span",{className:"text-sm font-medium",children:C})]})})]}),e.jsx(m.div,{drag:"x",dragConstraints:{left:a?-l:0,right:l},dragElastic:.2,onDragStart:()=>V(!0),onDragEnd:ee,style:{x:n},className:T("relative bg-surface-primary border border-border-primary rounded-xl","cursor-grab active:cursor-grabbing",k&&"opacity-50 cursor-not-allowed",R&&"shadow-lg"),whileTap:k?{}:{scale:.98},transition:{type:"spring",stiffness:300,damping:30},children:t}),!k&&e.jsx(m.div,{className:"absolute top-1/2 -translate-y-1/2 right-4 w-1 h-8 bg-border-primary rounded-full",style:{opacity:X},initial:{opacity:0},animate:{opacity:R?.3:0}}),q&&e.jsx(se,{open:K,onOpenChange:c,title:"Confirm Delete",description:H||"Are you sure you want to delete this item? This action cannot be undone.",confirmLabel:"Delete",cancelLabel:"Cancel",onConfirm:ae,onCancel:te,variant:M==="danger"?"destructive":M==="warning"?"warning":"default"})]})});r.displayName="SlideToDelete";const o=$.forwardRef(({title:t,subtitle:s,avatar:a,actions:i,children:C,className:I,...A},l)=>e.jsx(r,{ref:l,className:T("mb-2",I),...A,children:e.jsxs("div",{className:"flex items-center gap-4 p-4",children:[a&&e.jsx("div",{className:"flex-shrink-0",children:a}),e.jsxs("div",{className:"flex-1 min-w-0",children:[t&&e.jsx("div",{className:"text-sm font-medium text-text-primary truncate",children:t}),s&&e.jsx("div",{className:"text-xs text-text-secondary truncate mt-0.5",children:s}),C]}),i&&e.jsx("div",{className:"flex-shrink-0 flex items-center gap-2",children:i})]})}));o.displayName="SlideToDeleteItem";r.__docgenInfo={description:"",methods:[],displayName:"SlideToDelete",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void | Promise<void>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},deleteLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Delete'",computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Cancel'",computed:!1}},deleteIcon:{required:!1,tsType:{name:"LucideIcon"},description:"",defaultValue:{value:"Trash2",computed:!0}},cancelIcon:{required:!1,tsType:{name:"LucideIcon"},description:"",defaultValue:{value:"X",computed:!0}},threshold:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"80",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},confirmDelete:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},confirmMessage:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Are you sure?'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'danger' | 'warning'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'danger'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"SlideToDeleteItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onDelete:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void | Promise<void>",signature:{arguments:[],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},deleteLabel:{required:!1,tsType:{name:"string"},description:""},cancelLabel:{required:!1,tsType:{name:"string"},description:""},deleteIcon:{required:!1,tsType:{name:"LucideIcon"},description:""},cancelIcon:{required:!1,tsType:{name:"LucideIcon"},description:""},threshold:{required:!1,tsType:{name:"number"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},confirmDelete:{required:!1,tsType:{name:"boolean"},description:""},confirmMessage:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'danger' | 'warning'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Ie={title:"Interaction/SlideToDelete",component:r,parameters:{layout:"padded",docs:{description:{component:"Componente que permite deslizar un elemento para revelar acciones de eliminación o cancelación. Perfecto para listas móviles y gestos táctiles. Inspirado en iOS y aplicaciones móviles modernas."}}},tags:[],argTypes:{variant:{control:"select",options:["default","danger","warning"],description:"Variante visual de la acción de eliminación"},threshold:{control:{type:"number",min:50,max:150,step:10},description:"Distancia en píxeles para activar la eliminación"},confirmDelete:{control:"boolean",description:"Mostrar confirmación antes de eliminar"},disabled:{control:"boolean",description:"Deshabilitar el deslizamiento"}}},p={args:{children:e.jsx("div",{children:"Sample content"}),onDelete:()=>{console.log("Item deleted"),alert("Item deleted!")},deleteLabel:"Delete",threshold:80},render:t=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(r,{...t,children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-base font-semibold text-text-primary",children:"Task Item"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"Desliza hacia la derecha para eliminar este elemento"})]})})})},u={name:"Con Cancelación",args:{children:e.jsx("div",{children:"Sample content"}),onDelete:()=>console.log("Delete clicked"),onCancel:()=>console.log("Cancel clicked"),deleteLabel:"Delete",cancelLabel:"Cancel",threshold:100},render:t=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(r,{...t,children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-base font-semibold text-text-primary",children:"Task Item"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"Desliza hacia la derecha para eliminar o hacia la izquierda para cancelar"})]})})})},x={name:"Con Confirmación",args:{children:e.jsx("div",{children:"Sample content"}),onDelete:()=>console.log("Delete confirmed"),deleteLabel:"Delete",confirmDelete:!0,confirmMessage:"Are you sure you want to delete this item?",threshold:100},render:t=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(r,{...t,children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-base font-semibold text-text-primary",children:"Important Task"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"Desliza para eliminar. Se pedirá confirmación antes de eliminar."})]})})})},g={name:"Variante Danger",args:{children:e.jsx("div",{children:"Sample content"}),onDelete:()=>console.log("Delete clicked"),deleteLabel:"Delete",variant:"danger",threshold:100},render:t=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(r,{...t,children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-base font-semibold text-text-primary",children:"Dangerous Action"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"Variante con color rojo para acciones peligrosas"})]})})})},h={name:"Variante Warning",args:{children:e.jsx("div",{children:"Sample content"}),onDelete:()=>console.log("Archive clicked"),deleteLabel:"Archive",variant:"warning",threshold:100},render:t=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(r,{...t,children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-base font-semibold text-text-primary",children:"Archive Item"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"Variante con color naranja para acciones de advertencia"})]})})})},f={name:"Deshabilitado",args:{children:e.jsx("div",{children:"Sample content"}),onDelete:()=>console.log("Delete clicked"),deleteLabel:"Delete",disabled:!0,threshold:100},render:t=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(r,{...t,children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-base font-semibold text-text-primary",children:"Disabled Item"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"Este elemento no se puede deslizar (deshabilitado)"})]})})})},y={name:"📋 Variante List Item",args:{children:e.jsx("div",{children:"Sample content"}),onDelete:async()=>{},deleteLabel:"Delete"},render:()=>{const[t,s]=d.useState([{id:1,name:"John Doe",email:"john@example.com",role:"Admin"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"Manager"}]);return e.jsx("div",{className:"max-w-md mx-auto space-y-2",children:t.map(a=>e.jsx(o,{title:a.name,subtitle:a.email,avatar:e.jsxs(ne,{children:[e.jsx(de,{src:""}),e.jsx(oe,{children:a.name.charAt(0)})]}),actions:e.jsx(L,{variant:"default",size:"sm",children:a.role}),onDelete:async()=>{s(t.filter(i=>i.id!==a.id))},deleteLabel:"Delete",children:e.jsx(e.Fragment,{})},a.id))})}},v={name:"✅ Caso de Uso: Lista con Confirmación",args:{children:e.jsx("div",{children:"Sample content"}),onDelete:async()=>{},deleteLabel:"Delete",confirmDelete:!0},render:()=>{const[t,s]=d.useState([{id:1,name:"Important Task",status:"Active",priority:"High"},{id:2,name:"Regular Task",status:"Active",priority:"Medium"},{id:3,name:"Low Priority Task",status:"Pending",priority:"Low"}]);return e.jsx("div",{className:"max-w-md mx-auto space-y-2",children:t.map(a=>e.jsx(o,{title:a.name,subtitle:`Status: ${a.status} • Priority: ${a.priority}`,actions:e.jsx(L,{variant:a.priority==="High"?"error":a.priority==="Medium"?"warning":"default",size:"sm",children:a.priority}),onDelete:async()=>{s(t.filter(i=>i.id!==a.id))},deleteLabel:"Delete",confirmDelete:!0,confirmMessage:"Delete this task?",children:e.jsx(e.Fragment,{})},a.id))})}},b={name:"↩️ Caso de Uso: Lista con Cancelación",args:{children:e.jsx("div",{children:"Sample content"}),onDelete:async()=>{},onCancel:()=>{},deleteLabel:"Delete",cancelLabel:"Cancel"},render:()=>{const[t,s]=d.useState([{id:1,name:"Email Notification",type:"Email"},{id:2,name:"SMS Notification",type:"SMS"},{id:3,name:"Push Notification",type:"Push"}]);return e.jsx("div",{className:"max-w-md mx-auto space-y-2",children:t.map(a=>e.jsx(o,{title:a.name,subtitle:`Type: ${a.type}`,onDelete:async()=>{s(t.filter(i=>i.id!==a.id))},onCancel:()=>{console.log("Cancel action")},deleteLabel:"Delete",cancelLabel:"Cancel",children:e.jsx(e.Fragment,{})},a.id))})}},N={name:"📝 Caso de Uso: Lista de Tareas",render:()=>{const[t,s]=d.useState([{id:1,text:"Buy groceries",completed:!1},{id:2,text:"Walk the dog",completed:!0},{id:3,text:"Read a book",completed:!1}]);return e.jsxs("div",{className:"max-w-md mx-auto bg-gray-50 p-6 rounded-xl",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Todo List"}),e.jsx("div",{className:"space-y-3",children:t.map(a=>e.jsx(o,{onDelete:async()=>{s(t.filter(i=>i.id!==a.id))},deleteLabel:"Delete",variant:"danger",children:e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm",children:[e.jsx("div",{className:`w-5 h-5 rounded-full border-2 flex items-center justify-center ${a.completed?"bg-green-500 border-green-500":"border-gray-300"}`,children:a.completed&&e.jsx("span",{className:"text-white text-xs",children:"✓"})}),e.jsx("span",{className:`flex-1 ${a.completed?"line-through text-gray-400":"text-gray-700"}`,children:a.text}),e.jsx(L,{variant:a.completed?"success":"default",size:"sm",children:a.completed?"Done":"Pending"})]})},a.id))})]})},args:{children:e.jsx("div",{children:"Sample content"}),onDelete:async()=>{},deleteLabel:"Delete"}},D={name:"💬 Caso de Uso: Mensajes",render:()=>{const[t,s]=d.useState([{id:1,sender:"Alice",text:"Hey, how are you?",time:"10:30 AM",unread:!0},{id:2,sender:"Bob",text:"Can we meet later?",time:"09:15 AM",unread:!1},{id:3,sender:"Charlie",text:"Project update attached",time:"Yesterday",unread:!0}]);return e.jsxs("div",{className:"max-w-md mx-auto bg-gray-50 p-6 rounded-xl",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Messages"}),e.jsx("div",{className:"space-y-3",children:t.map(a=>e.jsx(o,{onDelete:async()=>{s(t.filter(i=>i.id!==a.id))},deleteLabel:"Delete",variant:"danger",children:e.jsxs("div",{className:"flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm",children:[e.jsx("div",{className:"w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold",children:a.sender[0]}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsxs("div",{className:"flex justify-between items-baseline",children:[e.jsx("h4",{className:`text-sm font-medium ${a.unread?"text-gray-900":"text-gray-600"}`,children:a.sender}),e.jsx("span",{className:"text-xs text-gray-400",children:a.time})]}),e.jsx("p",{className:`text-sm truncate ${a.unread?"text-gray-900 font-medium":"text-gray-500"}`,children:a.text})]}),a.unread&&e.jsx("div",{className:"w-2.5 h-2.5 bg-blue-500 rounded-full mt-2"})]})},a.id))})]})},args:{children:e.jsx("div",{children:"Sample content"}),onDelete:async()=>{},deleteLabel:"Delete"}},j={name:"🔔 Caso de Uso: Notificaciones",render:()=>{const[t,s]=d.useState([{id:1,title:"New Message",subtitle:"You have a new message from Alice",time:"2m ago",type:"message"},{id:2,title:"System Update",subtitle:"System update completed successfully",time:"1h ago",type:"system"},{id:3,title:"Payment Failed",subtitle:"Your payment was declined",time:"3h ago",type:"alert"}]);return e.jsxs("div",{className:"max-w-md mx-auto bg-gray-50 p-6 rounded-xl",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Notifications"}),e.jsx("div",{className:"space-y-3",children:t.map(a=>e.jsx(o,{onDelete:async()=>{s(t.filter(i=>i.id!==a.id))},deleteLabel:"Clear",variant:"default",children:e.jsxs("div",{className:"flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm",children:[e.jsx("div",{className:"p-2 bg-blue-50 rounded-full text-blue-500",children:e.jsx("span",{className:"text-xl",children:"🔔"})}),e.jsxs("div",{className:"flex-1",children:[e.jsxs("div",{className:"flex justify-between items-start",children:[e.jsx("h4",{className:"font-medium text-sm",children:a.title}),e.jsx("span",{className:"text-xs text-gray-400",children:a.time})]}),e.jsx("p",{className:"text-sm text-gray-500 mt-1",children:a.subtitle})]}),e.jsx(L,{variant:a.type==="message"?"info":a.type==="alert"?"error":"default",size:"sm",children:a.type})]})},a.id))})]})},args:{children:e.jsx("div",{children:"Sample content"}),onDelete:async()=>{},deleteLabel:"Clear"}},w={name:"📁 Caso de Uso: Lista de Archivos",render:()=>{const[t,s]=d.useState([{id:1,name:"Project Proposal.pdf",size:"2.4 MB",modified:"2 hours ago"},{id:2,name:"Design Assets.zip",size:"156 MB",modified:"Yesterday"},{id:3,name:"Meeting Notes.docx",size:"14 KB",modified:"3 days ago"}]);return e.jsxs("div",{className:"max-w-md mx-auto bg-gray-50 p-6 rounded-xl",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Files"}),e.jsx("div",{className:"space-y-3",children:t.map(a=>e.jsx(o,{onDelete:async()=>{s(t.filter(i=>i.id!==a.id))},deleteLabel:"Delete",confirmDelete:!0,confirmMessage:"Are you sure you want to delete this file?",children:e.jsxs("div",{className:"flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm",children:[e.jsx("div",{className:"p-2 bg-gray-100 rounded-lg",children:e.jsx("span",{className:"text-xl",children:"📄"})}),e.jsxs("div",{className:"flex-1",children:[e.jsx("h4",{className:"font-medium",children:a.name}),e.jsx("p",{className:"text-sm text-gray-500",children:a.size})]})]})},a.id))})]})},args:{children:e.jsx("div",{children:"Sample content"}),onDelete:async()=>{},deleteLabel:"Delete"}},S={name:"🎨 Playground",args:{children:e.jsx("div",{children:"Sample content"}),onDelete:()=>console.log("Delete clicked"),deleteLabel:"Delete",threshold:100,variant:"danger",confirmDelete:!1,disabled:!1},render:t=>e.jsx("div",{className:"max-w-md mx-auto",children:e.jsx(r,{...t,children:e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-base font-semibold text-text-primary",children:"Playground Item"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"Experimenta con diferentes configuraciones usando los controles"})]})})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div>Sample content</div>,
    onDelete: () => {
      console.log('Item deleted');
      alert('Item deleted!');
    },
    deleteLabel: 'Delete',
    threshold: 80
  },
  render: args => <div className="max-w-md mx-auto">
            <SlideToDelete {...args}>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-text-primary">Task Item</h3>
                    <p className="text-sm text-text-secondary mt-1">
                        Desliza hacia la derecha para eliminar este elemento
                    </p>
                </div>
            </SlideToDelete>
        </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Con Cancelación',
  args: {
    children: <div>Sample content</div>,
    onDelete: () => console.log('Delete clicked'),
    onCancel: () => console.log('Cancel clicked'),
    deleteLabel: 'Delete',
    cancelLabel: 'Cancel',
    threshold: 100
  },
  render: args => <div className="max-w-md mx-auto">
            <SlideToDelete {...args}>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-text-primary">Task Item</h3>
                    <p className="text-sm text-text-secondary mt-1">
                        Desliza hacia la derecha para eliminar o hacia la izquierda para cancelar
                    </p>
                </div>
            </SlideToDelete>
        </div>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Con Confirmación',
  args: {
    children: <div>Sample content</div>,
    onDelete: () => console.log('Delete confirmed'),
    deleteLabel: 'Delete',
    confirmDelete: true,
    confirmMessage: 'Are you sure you want to delete this item?',
    threshold: 100
  },
  render: args => <div className="max-w-md mx-auto">
            <SlideToDelete {...args}>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-text-primary">Important Task</h3>
                    <p className="text-sm text-text-secondary mt-1">
                        Desliza para eliminar. Se pedirá confirmación antes de eliminar.
                    </p>
                </div>
            </SlideToDelete>
        </div>
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Variante Danger',
  args: {
    children: <div>Sample content</div>,
    onDelete: () => console.log('Delete clicked'),
    deleteLabel: 'Delete',
    variant: 'danger',
    threshold: 100
  },
  render: args => <div className="max-w-md mx-auto">
            <SlideToDelete {...args}>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-text-primary">Dangerous Action</h3>
                    <p className="text-sm text-text-secondary mt-1">
                        Variante con color rojo para acciones peligrosas
                    </p>
                </div>
            </SlideToDelete>
        </div>
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Variante Warning',
  args: {
    children: <div>Sample content</div>,
    onDelete: () => console.log('Archive clicked'),
    deleteLabel: 'Archive',
    variant: 'warning',
    threshold: 100
  },
  render: args => <div className="max-w-md mx-auto">
            <SlideToDelete {...args}>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-text-primary">Archive Item</h3>
                    <p className="text-sm text-text-secondary mt-1">
                        Variante con color naranja para acciones de advertencia
                    </p>
                </div>
            </SlideToDelete>
        </div>
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Deshabilitado',
  args: {
    children: <div>Sample content</div>,
    onDelete: () => console.log('Delete clicked'),
    deleteLabel: 'Delete',
    disabled: true,
    threshold: 100
  },
  render: args => <div className="max-w-md mx-auto">
            <SlideToDelete {...args}>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-text-primary">Disabled Item</h3>
                    <p className="text-sm text-text-secondary mt-1">
                        Este elemento no se puede deslizar (deshabilitado)
                    </p>
                </div>
            </SlideToDelete>
        </div>
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '📋 Variante List Item',
  args: {
    children: <div>Sample content</div>,
    onDelete: async () => {},
    deleteLabel: 'Delete'
  },
  render: () => {
    const [items, setItems] = useState([{
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Admin'
    }, {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'User'
    }, {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      role: 'Manager'
    }]);
    return <div className="max-w-md mx-auto space-y-2">
                {items.map(item => <SlideToDeleteItem key={item.id} title={item.name} subtitle={item.email} avatar={<Avatar>
                                <AvatarImage src="" />
                                <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                            </Avatar>} actions={<Badge variant="default" size="sm">{item.role}</Badge>} onDelete={async () => {
        setItems(items.filter(i => i.id !== item.id));
      }} deleteLabel="Delete">
                        <></>
                    </SlideToDeleteItem>)}
            </div>;
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '✅ Caso de Uso: Lista con Confirmación',
  args: {
    children: <div>Sample content</div>,
    onDelete: async () => {},
    deleteLabel: 'Delete',
    confirmDelete: true
  },
  render: () => {
    const [items, setItems] = useState([{
      id: 1,
      name: 'Important Task',
      status: 'Active',
      priority: 'High'
    }, {
      id: 2,
      name: 'Regular Task',
      status: 'Active',
      priority: 'Medium'
    }, {
      id: 3,
      name: 'Low Priority Task',
      status: 'Pending',
      priority: 'Low'
    }]);
    return <div className="max-w-md mx-auto space-y-2">
                {items.map(item => <SlideToDeleteItem key={item.id} title={item.name} subtitle={\`Status: \${item.status} • Priority: \${item.priority}\`} actions={<Badge variant={item.priority === 'High' ? 'error' : item.priority === 'Medium' ? 'warning' : 'default'} size="sm">
                                {item.priority}
                            </Badge>} onDelete={async () => {
        setItems(items.filter(i => i.id !== item.id));
      }} deleteLabel="Delete" confirmDelete={true} confirmMessage="Delete this task?">
                        <></>
                    </SlideToDeleteItem>)}
            </div>;
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: '↩️ Caso de Uso: Lista con Cancelación',
  args: {
    children: <div>Sample content</div>,
    onDelete: async () => {},
    onCancel: () => {},
    deleteLabel: 'Delete',
    cancelLabel: 'Cancel'
  },
  render: () => {
    const [items, setItems] = useState([{
      id: 1,
      name: 'Email Notification',
      type: 'Email'
    }, {
      id: 2,
      name: 'SMS Notification',
      type: 'SMS'
    }, {
      id: 3,
      name: 'Push Notification',
      type: 'Push'
    }]);
    return <div className="max-w-md mx-auto space-y-2">
                {items.map(item => <SlideToDeleteItem key={item.id} title={item.name} subtitle={\`Type: \${item.type}\`} onDelete={async () => {
        setItems(items.filter(i => i.id !== item.id));
      }} onCancel={() => {
        console.log('Cancel action');
      }} deleteLabel="Delete" cancelLabel="Cancel">
                        <></>
                    </SlideToDeleteItem>)}
            </div>;
  }
}`,...b.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '📝 Caso de Uso: Lista de Tareas',
  render: () => {
    const [todos, setTodos] = useState([{
      id: 1,
      text: 'Buy groceries',
      completed: false
    }, {
      id: 2,
      text: 'Walk the dog',
      completed: true
    }, {
      id: 3,
      text: 'Read a book',
      completed: false
    }]);
    return <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Todo List</h3>
                <div className="space-y-3">
                    {todos.map(todo => <SlideToDeleteItem key={todo.id} onDelete={async () => {
          setTodos(todos.filter(t => t.id !== todo.id));
        }} deleteLabel="Delete" variant="danger">
                            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                                <div className={\`w-5 h-5 rounded-full border-2 flex items-center justify-center \${todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-300'}\`}>
                                    {todo.completed && <span className="text-white text-xs">✓</span>}
                                </div>
                                <span className={\`flex-1 \${todo.completed ? 'line-through text-gray-400' : 'text-gray-700'}\`}>
                                    {todo.text}
                                </span>
                                <Badge variant={todo.completed ? 'success' : 'default'} size="sm">
                                    {todo.completed ? 'Done' : 'Pending'}
                                </Badge>
                            </div>
                        </SlideToDeleteItem>)}
                </div>
            </div>;
  },
  args: {
    children: <div>Sample content</div>,
    onDelete: async () => {},
    deleteLabel: 'Delete'
  }
}`,...N.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: '💬 Caso de Uso: Mensajes',
  render: () => {
    const [messages, setMessages] = useState([{
      id: 1,
      sender: 'Alice',
      text: 'Hey, how are you?',
      time: '10:30 AM',
      unread: true
    }, {
      id: 2,
      sender: 'Bob',
      text: 'Can we meet later?',
      time: '09:15 AM',
      unread: false
    }, {
      id: 3,
      sender: 'Charlie',
      text: 'Project update attached',
      time: 'Yesterday',
      unread: true
    }]);
    return <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Messages</h3>
                <div className="space-y-3">
                    {messages.map(message => <SlideToDeleteItem key={message.id} onDelete={async () => {
          setMessages(messages.filter(m => m.id !== message.id));
        }} deleteLabel="Delete" variant="danger">
                            <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold">
                                    {message.sender[0]}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-baseline">
                                        <h4 className={\`text-sm font-medium \${message.unread ? 'text-gray-900' : 'text-gray-600'}\`}>
                                            {message.sender}
                                        </h4>
                                        <span className="text-xs text-gray-400">{message.time}</span>
                                    </div>
                                    <p className={\`text-sm truncate \${message.unread ? 'text-gray-900 font-medium' : 'text-gray-500'}\`}>
                                        {message.text}
                                    </p>
                                </div>
                                {message.unread && <div className="w-2.5 h-2.5 bg-blue-500 rounded-full mt-2"></div>}
                            </div>
                        </SlideToDeleteItem>)}
                </div>
            </div>;
  },
  args: {
    children: <div>Sample content</div>,
    onDelete: async () => {},
    deleteLabel: 'Delete'
  }
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '🔔 Caso de Uso: Notificaciones',
  render: () => {
    const [notifications, setNotifications] = useState([{
      id: 1,
      title: 'New Message',
      subtitle: 'You have a new message from Alice',
      time: '2m ago',
      type: 'message'
    }, {
      id: 2,
      title: 'System Update',
      subtitle: 'System update completed successfully',
      time: '1h ago',
      type: 'system'
    }, {
      id: 3,
      title: 'Payment Failed',
      subtitle: 'Your payment was declined',
      time: '3h ago',
      type: 'alert'
    }]);
    return <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Notifications</h3>
                <div className="space-y-3">
                    {notifications.map(notification => <SlideToDeleteItem key={notification.id} onDelete={async () => {
          setNotifications(notifications.filter(n => n.id !== notification.id));
        }} deleteLabel="Clear" variant="default">
                            <div className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                                <div className="p-2 bg-blue-50 rounded-full text-blue-500">
                                    <span className="text-xl">🔔</span>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h4 className="font-medium text-sm">{notification.title}</h4>
                                        <span className="text-xs text-gray-400">{notification.time}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">{notification.subtitle}</p>
                                </div>
                                <Badge variant={notification.type === 'message' ? 'info' : notification.type === 'alert' ? 'error' : 'default'} size="sm">
                                    {notification.type}
                                </Badge>
                            </div>
                        </SlideToDeleteItem>)}
                </div>
            </div>;
  },
  args: {
    children: <div>Sample content</div>,
    onDelete: async () => {},
    deleteLabel: 'Clear'
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: '📁 Caso de Uso: Lista de Archivos',
  render: () => {
    const [files, setFiles] = useState([{
      id: 1,
      name: 'Project Proposal.pdf',
      size: '2.4 MB',
      modified: '2 hours ago'
    }, {
      id: 2,
      name: 'Design Assets.zip',
      size: '156 MB',
      modified: 'Yesterday'
    }, {
      id: 3,
      name: 'Meeting Notes.docx',
      size: '14 KB',
      modified: '3 days ago'
    }]);
    return <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Files</h3>
                <div className="space-y-3">
                    {files.map(file => <SlideToDeleteItem key={file.id} onDelete={async () => {
          setFiles(files.filter(f => f.id !== file.id));
        }} deleteLabel="Delete" confirmDelete confirmMessage="Are you sure you want to delete this file?">
                            <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm">
                                <div className="p-2 bg-gray-100 rounded-lg">
                                    <span className="text-xl">📄</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-medium">{file.name}</h4>
                                    <p className="text-sm text-gray-500">{file.size}</p>
                                </div>
                            </div>
                        </SlideToDeleteItem>)}
                </div>
            </div>;
  },
  args: {
    children: <div>Sample content</div>,
    onDelete: async () => {},
    deleteLabel: 'Delete'
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: '🎨 Playground',
  args: {
    children: <div>Sample content</div>,
    onDelete: () => console.log('Delete clicked'),
    deleteLabel: 'Delete',
    threshold: 100,
    variant: 'danger',
    confirmDelete: false,
    disabled: false
  },
  render: args => <div className="max-w-md mx-auto">
            <SlideToDelete {...args}>
                <div className="p-4">
                    <h3 className="text-base font-semibold text-text-primary">Playground Item</h3>
                    <p className="text-sm text-text-secondary mt-1">
                        Experimenta con diferentes configuraciones usando los controles
                    </p>
                </div>
            </SlideToDelete>
        </div>
}`,...S.parameters?.docs?.source}}};const Ae=["Default","WithCancel","WithConfirmation","DangerVariant","WarningVariant","Disabled","ListItem","ListItemWithConfirmation","ListItemWithCancel","TodoList","MessageList","NotificationList","FileList","Playground"];export{g as DangerVariant,p as Default,f as Disabled,w as FileList,y as ListItem,b as ListItemWithCancel,v as ListItemWithConfirmation,D as MessageList,j as NotificationList,S as Playground,N as TodoList,h as WarningVariant,u as WithCancel,x as WithConfirmation,Ae as __namedExportsOrder,Ie as default};
