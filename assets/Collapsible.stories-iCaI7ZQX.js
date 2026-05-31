import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ba3ihGpN.js";import{Xn as r,t as i}from"./lucide-react-B3llQuma.js";import{n as a,t as o}from"./utils-CcEteFRA.js";import{t as s}from"./jsx-runtime-WZfjI2gv.js";import{s as c,t as l}from"./es-CjJtNnI5.js";import{n as u,t as d}from"./Button-DSYoQGzG.js";var f,p,m,h,g,_,v=e((()=>{f=t(n()),l(),a(),p=s(),m=f.createContext(null),h=f.forwardRef(({open:e,defaultOpen:t=!1,onOpenChange:n,disabled:r,className:i,children:a,...s},c)=>{let[l,u]=f.useState(t),d=e!==void 0,h=d?e:l,g=f.useId(),_=f.useCallback(()=>{if(r)return;let e=!h;d||u(e),n?.(e)},[h,r,d,n]),v=f.useMemo(()=>({open:!!h,disabled:r,triggerId:`${g}-trigger`,contentId:`${g}-content`,toggle:_}),[g,h,r,_]);return(0,p.jsx)(m.Provider,{value:v,children:(0,p.jsx)(`div`,{ref:c,"data-state":h?`open`:`closed`,"data-disabled":r?``:void 0,className:o(`border border-border-primary rounded-lg p-3 bg-surface-primary shadow-sm`,i),...s,children:a})})}),h.displayName=`Collapsible`,g=f.forwardRef(({className:e,children:t,...n},r)=>{let i=f.useContext(m);if(!i)throw Error(`CollapsibleTrigger must be used within Collapsible`);let{open:a,toggle:s,triggerId:c,contentId:l,disabled:u}=i;return(0,p.jsx)(`button`,{ref:r,id:c,type:`button`,"aria-controls":l,"aria-expanded":a,onClick:s,disabled:u||n.disabled,"data-state":a?`open`:`closed`,"data-disabled":u||n.disabled?``:void 0,className:o(`w-full text-left`,e),...n,children:t})}),g.displayName=`CollapsibleTrigger`,_=f.forwardRef(({className:e,children:t,...n},r)=>{let i=f.useContext(m);if(!i)throw Error(`CollapsibleContent must be used within Collapsible`);let{open:a,triggerId:o,contentId:s,disabled:l}=i;return(0,p.jsx)(`div`,{ref:r,id:s,role:`region`,"aria-labelledby":o,"aria-hidden":!a,"data-state":a?`open`:`closed`,"data-disabled":l?``:void 0,className:e,...n,children:(0,p.jsx)(c.div,{initial:!1,animate:{height:a?`auto`:0,opacity:+!!a},transition:{duration:.2,ease:`easeInOut`},style:{overflow:`hidden`},children:t})})}),_.displayName=`CollapsibleContent`,h.__docgenInfo={description:``,methods:[],displayName:`Collapsible`,props:{open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`HTMLAttributes`]},g.__docgenInfo={description:``,methods:[],displayName:`CollapsibleTrigger`},_.__docgenInfo={description:``,methods:[],displayName:`CollapsibleContent`}})),y,b,x,S,C;e((()=>{v(),d(),i(),y=t(n()),b=s(),x={title:`Data Display/Collapsible`,component:h,tags:[]},S={render:()=>{let[e,t]=(0,y.useState)(!1);return(0,b.jsxs)(h,{open:e,onOpenChange:t,children:[(0,b.jsx)(g,{children:(0,b.jsxs)(`div`,{className:`flex items-center justify-between cursor-pointer select-none group`,children:[(0,b.jsx)(`h4`,{className:`text-sm font-semibold text-text-primary`,children:`@peduarte starred 3 repositories`}),(0,b.jsxs)(u,{variant:`ghost`,size:`sm`,className:`w-9 p-0 group-hover:bg-surface-secondary`,children:[(0,b.jsx)(r,{className:`h-4 w-4 text-text-secondary`}),(0,b.jsx)(`span`,{className:`sr-only`,children:`Toggle`})]})]})}),(0,b.jsxs)(_,{className:`space-y-2 mt-2`,children:[(0,b.jsx)(`div`,{className:`rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary`,children:`@radix-ui/primitives`}),(0,b.jsx)(`div`,{className:`rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary`,children:`@radix-ui/colors`}),(0,b.jsx)(`div`,{className:`rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary`,children:`@stitches/react`})]})]})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen}
    // className="border border-border-primary rounded-lg p-3 bg-surface-primary shadow-sm"
    >
                <CollapsibleTrigger>
                    <div className="flex items-center justify-between cursor-pointer select-none group">
                        <h4 className="text-sm font-semibold text-text-primary">
                            @peduarte starred 3 repositories
                        </h4>
                        <Button variant="ghost" size="sm" className="w-9 p-0 group-hover:bg-surface-secondary">
                            <ChevronsUpDown className="h-4 w-4 text-text-secondary" />
                            <span className="sr-only">Toggle</span>
                        </Button>
                    </div>
                </CollapsibleTrigger>

                {/* This content is always visible if outside CollapsibleContent, 
                    but let's put everything inside or make it clear. 
                    The user was confused by the "first option default". 
                    Let's hide the "always visible" part or make it part of the toggle.
                 */}

                <CollapsibleContent className="space-y-2 mt-2">
                    <div className="rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary">
                        @radix-ui/primitives
                    </div>
                    <div className="rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary">
                        @radix-ui/colors
                    </div>
                    <div className="rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary">
                        @stitches/react
                    </div>
                </CollapsibleContent>
            </Collapsible>;
  }
}`,...S.parameters?.docs?.source}}},C=[`Default`]}))();export{S as Default,C as __namedExportsOrder,x as default};