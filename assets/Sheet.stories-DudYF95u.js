import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as a}from"./iframe-D5DOIGW8.js";import{r as F}from"./index-BUeZamlW.js";import{c as I}from"./index-B_jtOnfb.js";import{c}from"./utils-CDN07tui.js";import{X as R}from"./x-LsZhZSlf.js";import{B as S}from"./Button-yixddUw3.js";import{L as y}from"./Label-BwNaakGx.js";import{I as v}from"./Input-DwdL6bPe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-C-YHKKly.js";import"./createLucideIcon-DOQ0Nu6C.js";import"./proxy-BbTJ7w1C.js";import"./Text-Dhy74_-M.js";const E=a.createContext(null);function N(){const t=a.useContext(E);if(!t)throw new Error("Sheet components must be used within Sheet");return t}const j=({open:t,defaultOpen:s=!1,onOpenChange:r,children:n})=>{const[d,o]=a.useState(s),i=t??d,m=a.useRef(null),p=a.useCallback(h=>{t===void 0&&o(h),r?.(h)},[t,r]),f=a.useMemo(()=>({open:i,setOpen:p,triggerRef:m}),[i,p]);return e.jsx(E.Provider,{value:f,children:n})},b=a.forwardRef(({asChild:t=!1,children:s,className:r,onClick:n,...d},o)=>{const{open:i,setOpen:m,triggerRef:p}=N(),f=l=>{p.current=l,typeof o=="function"?o(l):o&&(o.current=l)},h=l=>{n?.(l),!l.defaultPrevented&&m(!i)};return t&&a.isValidElement(s)?a.cloneElement(s,{ref:f,onClick:l=>{s.props?.onClick?.(l),h(l)},className:c(s.props?.className,r),"aria-haspopup":"dialog","aria-expanded":i}):e.jsx("button",{type:"button",ref:f,onClick:h,"aria-haspopup":"dialog","aria-expanded":i,className:r,...d,children:s})});b.displayName="SheetTrigger";const u=a.forwardRef(({children:t,onClick:s,className:r,...n},d)=>{const{setOpen:o}=N();return e.jsx("button",{type:"button",ref:d,onClick:i=>{s?.(i),i.defaultPrevented||o(!1)},className:r,...n,children:t})});u.displayName="SheetClose";const O=({children:t})=>typeof document>"u"?null:F.createPortal(t,document.body),D=a.forwardRef(({className:t,...s},r)=>{const{open:n,setOpen:d}=N();return e.jsx("div",{ref:r,"data-state":n?"open":"closed",className:c("fixed inset-0 z-50 bg-black/20 backdrop-blur-sm",t),onClick:()=>d(!1),...s})});D.displayName="SheetOverlay";const L=I("fixed z-50 gap-4 bg-surface-primary p-6 shadow-lg transition ease-in-out",{variants:{side:{top:"inset-x-0 top-0 border-b border-border-primary",bottom:"inset-x-0 bottom-0 border-t border-border-primary",left:"inset-y-0 left-0 h-full w-3/4 border-r border-border-primary sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4 border-l border-border-primary sm:max-w-sm"}},defaultVariants:{side:"right"}}),C=a.forwardRef(({side:t="right",className:s,children:r,...n},d)=>{const{open:o,setOpen:i}=N();return a.useEffect(()=>{if(!o)return;const m=p=>{p.key==="Escape"&&i(!1)};return document.addEventListener("keydown",m),()=>document.removeEventListener("keydown",m)},[o,i]),o?e.jsxs(O,{children:[e.jsx(D,{}),e.jsxs("div",{ref:d,role:"dialog","aria-modal":"true","data-state":o?"open":"closed",className:c(L({side:t}),s),...n,children:[e.jsxs(u,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",children:[e.jsx(R,{className:"h-4 w-4"}),e.jsx("span",{className:"sr-only",children:"Close"})]}),r]})]}):null});C.displayName="SheetContent";const w=({className:t,...s})=>e.jsx("div",{className:c("flex flex-col space-y-2 text-center sm:text-left",t),...s});w.displayName="SheetHeader";const k=({className:t,...s})=>e.jsx("div",{className:c("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",t),...s});k.displayName="SheetFooter";const _=a.forwardRef(({className:t,...s},r)=>e.jsx("h2",{ref:r,className:c("text-lg font-semibold text-text-primary",t),...s}));_.displayName="SheetTitle";const T=a.forwardRef(({className:t,...s},r)=>e.jsx("p",{ref:r,className:c("text-sm text-text-secondary",t),...s}));T.displayName="SheetDescription";j.__docgenInfo={description:"",methods:[],displayName:"Sheet",props:{open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};D.__docgenInfo={description:"",methods:[],displayName:"SheetOverlay"};b.__docgenInfo={description:"",methods:[],displayName:"SheetTrigger",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"SheetClose"};C.__docgenInfo={description:"",methods:[],displayName:"SheetContent",props:{side:{defaultValue:{value:'"right"',computed:!1},required:!1}},composes:["VariantProps"]};w.__docgenInfo={description:"",methods:[],displayName:"SheetHeader"};k.__docgenInfo={description:"",methods:[],displayName:"SheetFooter"};_.__docgenInfo={description:"",methods:[],displayName:"SheetTitle"};T.__docgenInfo={description:"",methods:[],displayName:"SheetDescription"};const W={title:"Overlays/Sheet",component:j,tags:[]},g={render:()=>e.jsxs(j,{children:[e.jsx(b,{asChild:!0,children:e.jsx(S,{variant:"secondary",children:"Open Sheet"})}),e.jsxs(C,{children:[e.jsxs(w,{children:[e.jsx(_,{children:"Edit profile"}),e.jsx(T,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(y,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(v,{id:"name",value:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(y,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(v,{id:"username",value:"@peduarte",className:"col-span-3"})]})]}),e.jsx(k,{children:e.jsx(u,{asChild:!0,children:e.jsx(S,{type:"submit",children:"Save changes"})})})]})]})},x={render:()=>e.jsx("div",{className:"grid grid-cols-2 gap-2",children:["top","right","bottom","left"].map(t=>e.jsxs(j,{children:[e.jsx(b,{asChild:!0,children:e.jsx(S,{variant:"secondary",children:t})}),e.jsxs(C,{side:t,children:[e.jsxs(w,{children:[e.jsx(_,{children:"Edit profile"}),e.jsx(T,{children:"Make changes to your profile here. Click save when you're done."})]}),e.jsxs("div",{className:"grid gap-4 py-4",children:[e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(y,{htmlFor:"name",className:"text-right",children:"Name"}),e.jsx(v,{id:"name",value:"Pedro Duarte",className:"col-span-3"})]}),e.jsxs("div",{className:"grid grid-cols-4 items-center gap-4",children:[e.jsx(y,{htmlFor:"username",className:"text-right",children:"Username"}),e.jsx(v,{id:"username",value:"@peduarte",className:"col-span-3"})]})]}),e.jsx(k,{children:e.jsx(u,{asChild:!0,children:e.jsx(S,{type:"submit",children:"Save changes"})})})]})]},t))})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const Y=["Default","Side"];export{g as Default,x as Side,Y as __namedExportsOrder,W as default};
