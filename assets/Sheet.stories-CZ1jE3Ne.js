import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-WZfjI2gv.js";import{a as n,c as r,i,l as a,n as o,o as s,r as c,s as l,t as u}from"./Sheet-CdoDubqz.js";import{t as d}from"./Input-JHOkdEF9.js";import{t as f}from"./Input-ppoF_Xzn.js";import{n as p,t as m}from"./Button-5ilXDwuV.js";import{t as h}from"./Label-D8DQJ2Pt.js";import{t as g}from"./Label-BhiMdh9J.js";var _,v,y,b,x;e((()=>{a(),m(),g(),f(),_=t(),v={title:`Overlays/Sheet`,component:u,tags:[]},y={render:()=>(0,_.jsxs)(u,{children:[(0,_.jsx)(r,{asChild:!0,children:(0,_.jsx)(p,{variant:`secondary`,children:`Open Sheet`})}),(0,_.jsxs)(c,{children:[(0,_.jsxs)(s,{children:[(0,_.jsx)(l,{children:`Edit profile`}),(0,_.jsx)(i,{children:`Make changes to your profile here. Click save when you're done.`})]}),(0,_.jsxs)(`div`,{className:`grid gap-4 py-4`,children:[(0,_.jsxs)(`div`,{className:`grid grid-cols-4 items-center gap-4`,children:[(0,_.jsx)(h,{htmlFor:`name`,className:`text-right`,children:`Name`}),(0,_.jsx)(d,{id:`name`,value:`Pedro Duarte`,className:`col-span-3`})]}),(0,_.jsxs)(`div`,{className:`grid grid-cols-4 items-center gap-4`,children:[(0,_.jsx)(h,{htmlFor:`username`,className:`text-right`,children:`Username`}),(0,_.jsx)(d,{id:`username`,value:`@peduarte`,className:`col-span-3`})]})]}),(0,_.jsx)(n,{children:(0,_.jsx)(o,{children:(0,_.jsx)(p,{type:`submit`,children:`Save changes`})})})]})]})},b={render:()=>(0,_.jsx)(`div`,{className:`grid grid-cols-2 gap-2`,children:[`top`,`right`,`bottom`,`left`].map(e=>(0,_.jsxs)(u,{children:[(0,_.jsx)(r,{asChild:!0,children:(0,_.jsx)(p,{variant:`secondary`,children:e})}),(0,_.jsxs)(c,{side:e,children:[(0,_.jsxs)(s,{children:[(0,_.jsx)(l,{children:`Edit profile`}),(0,_.jsx)(i,{children:`Make changes to your profile here. Click save when you're done.`})]}),(0,_.jsxs)(`div`,{className:`grid gap-4 py-4`,children:[(0,_.jsxs)(`div`,{className:`grid grid-cols-4 items-center gap-4`,children:[(0,_.jsx)(h,{htmlFor:`name`,className:`text-right`,children:`Name`}),(0,_.jsx)(d,{id:`name`,value:`Pedro Duarte`,className:`col-span-3`})]}),(0,_.jsxs)(`div`,{className:`grid grid-cols-4 items-center gap-4`,children:[(0,_.jsx)(h,{htmlFor:`username`,className:`text-right`,children:`Username`}),(0,_.jsx)(d,{id:`username`,value:`@peduarte`,className:`col-span-3`})]})]}),(0,_.jsx)(n,{children:(0,_.jsx)(o,{children:(0,_.jsx)(p,{type:`submit`,children:`Save changes`})})})]})]},e))})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
                    <SheetClose>
                        <Button type="submit">Save changes</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
                            <SheetClose>
                                <Button type="submit">Save changes</Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>)}
        </div>
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Side`]}))();export{y as Default,b as Side,x as __namedExportsOrder,v as default};