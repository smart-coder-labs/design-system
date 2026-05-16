import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-B_S8iqXg.js";import{Xn as r,t as i}from"./lucide-react-D-LjNNxx.js";import{t as a}from"./jsx-runtime-DaLCRA3n.js";import{s as o,t as s}from"./es-BRhHMXe0.js";import{n as c,t as l}from"./Button-B4XCQzOE.js";var u,d,f,p,m,h,g=e((()=>{u=t(n()),s(),d=a(),f=u.createContext(null),p=u.forwardRef(({open:e,defaultOpen:t=!1,onOpenChange:n,disabled:r,className:i,children:a,...o},s)=>{let[c,l]=u.useState(t),p=e!==void 0,m=p?e:c,h=u.useId(),g=u.useCallback(()=>{if(r)return;let e=!m;p||l(e),n?.(e)},[m,r,p,n]),_=u.useMemo(()=>({open:!!m,disabled:r,triggerId:`${h}-trigger`,contentId:`${h}-content`,toggle:g}),[h,m,r,g]);return(0,d.jsx)(f.Provider,{value:_,children:(0,d.jsx)(`div`,{ref:s,"data-state":m?`open`:`closed`,"data-disabled":r?``:void 0,className:i,...o,children:a})})}),p.displayName=`Collapsible`,m=u.forwardRef(({className:e,children:t,...n},r)=>{let i=u.useContext(f);if(!i)throw Error(`CollapsibleTrigger must be used within Collapsible`);let{open:a,toggle:o,triggerId:s,contentId:c,disabled:l}=i;return(0,d.jsx)(`button`,{ref:r,id:s,type:`button`,"aria-controls":c,"aria-expanded":a,onClick:o,disabled:l||n.disabled,"data-state":a?`open`:`closed`,"data-disabled":l||n.disabled?``:void 0,className:e,...n,children:t})}),m.displayName=`CollapsibleTrigger`,h=u.forwardRef(({className:e,children:t,...n},r)=>{let i=u.useContext(f);if(!i)throw Error(`CollapsibleContent must be used within Collapsible`);let{open:a,triggerId:s,contentId:c,disabled:l}=i;return(0,d.jsx)(`div`,{ref:r,id:c,role:`region`,"aria-labelledby":s,"aria-hidden":!a,"data-state":a?`open`:`closed`,"data-disabled":l?``:void 0,className:e,...n,children:(0,d.jsx)(o.div,{initial:!1,animate:{height:a?`auto`:0,opacity:+!!a},transition:{duration:.2,ease:`easeInOut`},style:{overflow:`hidden`},children:t})})}),h.displayName=`CollapsibleContent`,p.__docgenInfo={description:``,methods:[],displayName:`Collapsible`,props:{open:{required:!1,tsType:{name:`boolean`},description:``},defaultOpen:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``}},composes:[`HTMLAttributes`]},m.__docgenInfo={description:``,methods:[],displayName:`CollapsibleTrigger`},h.__docgenInfo={description:``,methods:[],displayName:`CollapsibleContent`}})),_,v,y,b,x;e((()=>{g(),l(),i(),_=t(n()),v=a(),y={title:`Data Display/Collapsible`,component:p,tags:[]},b={render:()=>{let[e,t]=(0,_.useState)(!1);return(0,v.jsxs)(p,{open:e,onOpenChange:t,className:`w-[280px] space-y-2 border border-border-primary rounded-lg p-3 bg-surface-primary shadow-sm`,children:[(0,v.jsx)(m,{children:(0,v.jsxs)(`div`,{className:`flex items-center justify-between cursor-pointer select-none group`,children:[(0,v.jsx)(`h4`,{className:`text-sm font-semibold text-text-primary`,children:`@peduarte starred 3 repositories`}),(0,v.jsxs)(c,{variant:`ghost`,size:`sm`,className:`w-9 p-0 group-hover:bg-surface-secondary`,children:[(0,v.jsx)(r,{className:`h-4 w-4 text-text-secondary`}),(0,v.jsx)(`span`,{className:`sr-only`,children:`Toggle`})]})]})}),(0,v.jsxs)(h,{className:`space-y-2 mt-2`,children:[(0,v.jsx)(`div`,{className:`rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary`,children:`@radix-ui/primitives`}),(0,v.jsx)(`div`,{className:`rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary`,children:`@radix-ui/colors`}),(0,v.jsx)(`div`,{className:`rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary`,children:`@stitches/react`})]})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[280px] space-y-2 border border-border-primary rounded-lg p-3 bg-surface-primary shadow-sm">
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
}`,...b.parameters?.docs?.source}}},x=[`Default`]}))();export{b as Default,x as __namedExportsOrder,y as default};