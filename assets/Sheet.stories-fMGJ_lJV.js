import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as o,a as n,b as d,c,d as h,e as m,f as p,g}from"./Sheet-CainfnLM.js";import{B as t}from"./Button-BlzVxrzH.js";import{L as a}from"./Label-BwNaakGx.js";import{I as i}from"./Input-DCLqsXWx.js";import"./iframe-ChONrTG_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C05mDT0f.js";import"./index-C1bw5jFo.js";import"./index-B_jtOnfb.js";import"./utils-CDN07tui.js";import"./x-Cg9q8tko.js";import"./createLucideIcon-CdJ-Xkq_.js";import"./proxy-CRCEyvcV.js";import"./resolve-elements-juiWZL7b.js";import"./Text-Dhy74_-M.js";const E={title:"Overlays/Sheet",component:o,tags:[]},s={render:()=>e.jsxs(o,{children:[e.jsx(n,{asChild:!0,children:e.jsx(t,{variant:"secondary",children:"Open Sheet"})}),e.jsxs(d,{children:[e.jsxs(c,{children:[e.jsx(h,{children:"Edit profile"}),e.jsx(m,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(i,{id:"name",value:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(i,{id:"username",value:"@peduarte",className:"col-span-3"})]})]}),e.jsx(p,{children:e.jsx(g,{asChild:!0,children:e.jsx(t,{type:"submit",children:"Save changes"})})})]})]})},r={render:()=>e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["top","right","bottom","left"].map(l=>e.jsxs(o,{children:[e.jsx(n,{asChild:!0,children:e.jsx(t,{variant:"secondary",children:l})}),e.jsxs(d,{side:l,children:[e.jsxs(c,{children:[e.jsx(h,{children:"Edit profile"}),e.jsx(m,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(i,{id:"name",value:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(a,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(i,{id:"username",value:"@peduarte",className:"col-span-3"})]})]}),e.jsx(p,{children:e.jsx(g,{asChild:!0,children:e.jsx(t,{type:"submit",children:"Save changes"})})})]})]},l))})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Sheet>
            <SheetTrigger asChild>
                <Button variant="secondary">Open Sheet</Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Edit profile</SheetTitle>
                    <SheetDescription>
                        Make changes to your profile here. Click save when you're done.
                    </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" value="Pedro Duarte" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Username
                        </Label>
                        <Input id="username" value="@peduarte" className="col-span-3" />
                    </div>
                </div>
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-2">
            {['top', 'right', 'bottom', 'left'].map(side => <Sheet key={side}>
                    <SheetTrigger asChild>
                        <Button variant="secondary">{side}</Button>
                    </SheetTrigger>
                    <SheetContent side={side as any}>
                        <SheetHeader>
                            <SheetTitle>Edit profile</SheetTitle>
                            <SheetDescription>
                                Make changes to your profile here. Click save when you're done.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input id="name" value="Pedro Duarte" className="col-span-3" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="username" className="text-right">
                                    Username
                                </Label>
                                <Input id="username" value="@peduarte" className="col-span-3" />
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>)}
        </div>
}`,...r.parameters?.docs?.source}}};const I=["Default","Side"];export{s as Default,r as Side,I as __namedExportsOrder,E as default};
