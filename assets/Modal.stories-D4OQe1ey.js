import{j as e}from"./jsx-runtime-u17CrQMm.js";import{M as t,d as l,a as s,b as d,e as i,f as c,c as p,g as M}from"./Modal-CR_Tu7hD.js";import{B as a}from"./Button-DGE0rp2O.js";import{r as u}from"./iframe-Cb93e_Z8.js";import"./index-C-qY3IT9.js";import"./index-BWl-oFhJ.js";import"./index-BVqOlNMQ.js";import"./proxy-b22VB84a.js";import"./preload-helper-PPVm8Dsz.js";const T={title:"Overlays/Modal",component:t,tags:[],argTypes:{size:{control:"select",options:["sm","md","lg","xl","full"]}}},h={render:r=>{const[n,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>o(!0),children:"Open Modal"}),e.jsxs(t,{...r,open:n,onOpenChange:o,children:[e.jsx(l,{}),e.jsxs(s,{children:[e.jsx(d,{children:"Modal Title"}),e.jsx(i,{children:"This is a description of the modal content"})]}),e.jsx(c,{children:e.jsx("p",{children:"Modal content goes here..."})}),e.jsxs(p,{children:[e.jsx(M,{children:e.jsx(a,{variant:"ghost",children:"Cancel"})}),e.jsx(a,{variant:"primary",onClick:()=>o(!1),children:"Confirm"})]})]})]})},args:{size:"md"}},m={render:r=>{const[n,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>o(!0),children:"Abrir modal centrado"}),e.jsxs(t,{...r,open:n,onOpenChange:o,position:"center",size:"md",children:[e.jsx(l,{}),e.jsxs(s,{children:[e.jsx(d,{children:"Modal centrado"}),e.jsx(i,{children:"Modal en el centro de la pantalla."})]}),e.jsx(c,{children:e.jsx("p",{children:"Contenido del modal centrado."})}),e.jsxs(p,{children:[e.jsx(M,{children:e.jsx(a,{variant:"ghost",children:"Cerrar"})}),e.jsx(a,{variant:"primary",children:"Acción"})]})]})]})},args:{size:"md"}},j={render:r=>{const[n,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>o(!0),children:"Abrir modal derecha"}),e.jsxs(t,{...r,open:n,onOpenChange:o,position:"right",size:"md",children:[e.jsx(l,{}),e.jsxs(s,{children:[e.jsx(d,{children:"Modal derecha"}),e.jsx(i,{children:"Modal alineado a la derecha."})]}),e.jsx(c,{children:e.jsx("p",{children:"Contenido del modal derecha."})}),e.jsxs(p,{children:[e.jsx(M,{children:e.jsx(a,{variant:"ghost",children:"Cerrar"})}),e.jsx(a,{variant:"primary",children:"Acción"})]})]})]})},args:{size:"md"}},C={render:r=>{const[n,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>o(!0),children:"Abrir modal izquierda"}),e.jsxs(t,{...r,open:n,onOpenChange:o,position:"left",size:"md",children:[e.jsx(l,{}),e.jsxs(s,{children:[e.jsx(d,{children:"Modal izquierda"}),e.jsx(i,{children:"Modal alineado a la izquierda."})]}),e.jsx(c,{children:e.jsx("p",{children:"Contenido del modal izquierda."})}),e.jsxs(p,{children:[e.jsx(M,{children:e.jsx(a,{variant:"ghost",children:"Cerrar"})}),e.jsx(a,{variant:"primary",children:"Acción"})]})]})]})},args:{size:"md"}},x={render:r=>{const[n,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>o(!0),children:"Abrir modal abajo"}),e.jsxs(t,{...r,open:n,onOpenChange:o,position:"bottom",size:"full",children:[e.jsx(l,{}),e.jsxs(s,{children:[e.jsx(d,{children:"Modal abajo"}),e.jsx(i,{children:"Modal alineado abajo."})]}),e.jsx(c,{children:e.jsx("p",{children:"Contenido del modal abajo."})}),e.jsxs(p,{children:[e.jsx(M,{children:e.jsx(a,{variant:"ghost",children:"Cerrar"})}),e.jsx(a,{variant:"primary",children:"Acción"})]})]})]})},args:{size:"md"}},g={render:r=>{const[n,o]=u.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:()=>o(!0),children:"Abrir modal pantalla completa"}),e.jsxs(t,{...r,open:n,onOpenChange:o,position:"fullscreen",size:"full",children:[e.jsx(l,{}),e.jsxs(s,{children:[e.jsx(d,{children:"Modal pantalla completa"}),e.jsx(i,{children:"Modal ocupa toda la pantalla."})]}),e.jsx(c,{children:e.jsx("p",{children:"Contenido del modal fullscreen."})}),e.jsxs(p,{children:[e.jsx(M,{children:e.jsx(a,{variant:"ghost",children:"Cerrar"})}),e.jsx(a,{variant:"primary",children:"Acción"})]})]})]})},args:{size:"full"}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Open Modal</Button>
                <Modal {...args} open={open} onOpenChange={setOpen}>
                    <ModalCloseButton />
                    <ModalHeader>
                        <ModalTitle>Modal Title</ModalTitle>
                        <ModalDescription>
                            This is a description of the modal content
                        </ModalDescription>
                    </ModalHeader>
                    <ModalContent>
                        <p>Modal content goes here...</p>
                    </ModalContent>
                    <ModalFooter>
                        <ModalClose>
                            <Button variant="ghost">Cancel</Button>
                        </ModalClose>
                        <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
                    </ModalFooter>
                </Modal>
            </>;
  },
  args: {
    size: 'md'
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Abrir modal centrado</Button>
                <Modal {...args} open={open} onOpenChange={setOpen} position="center" size="md">
                    <ModalCloseButton />
                    <ModalHeader>
                        <ModalTitle>Modal centrado</ModalTitle>
                        <ModalDescription>Modal en el centro de la pantalla.</ModalDescription>
                    </ModalHeader>
                    <ModalContent>
                        <p>Contenido del modal centrado.</p>
                    </ModalContent>
                    <ModalFooter>
                        <ModalClose>
                            <Button variant="ghost">Cerrar</Button>
                        </ModalClose>
                        <Button variant="primary">Acción</Button>
                    </ModalFooter>
                </Modal>
            </>;
  },
  args: {
    size: 'md'
  }
}`,...m.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Abrir modal derecha</Button>
                <Modal {...args} open={open} onOpenChange={setOpen} position="right" size="md">
                    <ModalCloseButton />
                    <ModalHeader>
                        <ModalTitle>Modal derecha</ModalTitle>
                        <ModalDescription>Modal alineado a la derecha.</ModalDescription>
                    </ModalHeader>
                    <ModalContent>
                        <p>Contenido del modal derecha.</p>
                    </ModalContent>
                    <ModalFooter>
                        <ModalClose>
                            <Button variant="ghost">Cerrar</Button>
                        </ModalClose>
                        <Button variant="primary">Acción</Button>
                    </ModalFooter>
                </Modal>
            </>;
  },
  args: {
    size: 'md'
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Abrir modal izquierda</Button>
                <Modal {...args} open={open} onOpenChange={setOpen} position="left" size="md">
                    <ModalCloseButton />
                    <ModalHeader>
                        <ModalTitle>Modal izquierda</ModalTitle>
                        <ModalDescription>Modal alineado a la izquierda.</ModalDescription>
                    </ModalHeader>
                    <ModalContent>
                        <p>Contenido del modal izquierda.</p>
                    </ModalContent>
                    <ModalFooter>
                        <ModalClose>
                            <Button variant="ghost">Cerrar</Button>
                        </ModalClose>
                        <Button variant="primary">Acción</Button>
                    </ModalFooter>
                </Modal>
            </>;
  },
  args: {
    size: 'md'
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Abrir modal abajo</Button>
                <Modal {...args} open={open} onOpenChange={setOpen} position="bottom" size="full">
                    <ModalCloseButton />
                    <ModalHeader>
                        <ModalTitle>Modal abajo</ModalTitle>
                        <ModalDescription>Modal alineado abajo.</ModalDescription>
                    </ModalHeader>
                    <ModalContent>
                        <p>Contenido del modal abajo.</p>
                    </ModalContent>
                    <ModalFooter>
                        <ModalClose>
                            <Button variant="ghost">Cerrar</Button>
                        </ModalClose>
                        <Button variant="primary">Acción</Button>
                    </ModalFooter>
                </Modal>
            </>;
  },
  args: {
    size: 'md'
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
                <Button onClick={() => setOpen(true)}>Abrir modal pantalla completa</Button>
                <Modal {...args} open={open} onOpenChange={setOpen} position="fullscreen" size="full">
                    <ModalCloseButton />
                    <ModalHeader>
                        <ModalTitle>Modal pantalla completa</ModalTitle>
                        <ModalDescription>Modal ocupa toda la pantalla.</ModalDescription>
                    </ModalHeader>
                    <ModalContent>
                        <p>Contenido del modal fullscreen.</p>
                    </ModalContent>
                    <ModalFooter>
                        <ModalClose>
                            <Button variant="ghost">Cerrar</Button>
                        </ModalClose>
                        <Button variant="primary">Acción</Button>
                    </ModalFooter>
                </Modal>
            </>;
  },
  args: {
    size: 'full'
  }
}`,...g.parameters?.docs?.source}}};const D=["Default","Center","Right","Left","Bottom","Fullscreen"];export{x as Bottom,m as Center,h as Default,g as Fullscreen,C as Left,j as Right,D as __namedExportsOrder,T as default};
