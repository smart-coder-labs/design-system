import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-vYzePaRW.js";import{m as N}from"./proxy-DMGrdN83.js";import{B as j}from"./Button-Bvw_y_KB.js";import{C as I}from"./chevrons-up-down-DXJEmuLb.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-Ckxz52bH.js";const g=t.createContext(null),b=t.forwardRef(({open:o,defaultOpen:n=!1,onOpenChange:a,disabled:s,className:i,children:r,...d},l)=>{const[p,m]=t.useState(n),x=o!==void 0,c=x?o:p,y=t.useId(),C=t.useCallback(()=>{if(s)return;const v=!c;x||m(v),a?.(v)},[c,s,x,a]),w=t.useMemo(()=>({open:!!c,disabled:s,triggerId:`${y}-trigger`,contentId:`${y}-content`,toggle:C}),[y,c,s,C]);return e.jsx(g.Provider,{value:w,children:e.jsx("div",{ref:l,"data-state":c?"open":"closed","data-disabled":s?"":void 0,className:i,...d,children:r})})});b.displayName="Collapsible";const f=t.forwardRef(({className:o,children:n,...a},s)=>{const i=t.useContext(g);if(!i)throw new Error("CollapsibleTrigger must be used within Collapsible");const{open:r,toggle:d,triggerId:l,contentId:p,disabled:m}=i;return e.jsx("button",{ref:s,id:l,type:"button","aria-controls":p,"aria-expanded":r,onClick:d,disabled:m||a.disabled,"data-state":r?"open":"closed","data-disabled":m||a.disabled?"":void 0,className:o,...a,children:n})});f.displayName="CollapsibleTrigger";const h=t.forwardRef(({className:o,children:n,...a},s)=>{const i=t.useContext(g);if(!i)throw new Error("CollapsibleContent must be used within Collapsible");const{open:r,triggerId:d,contentId:l,disabled:p}=i;return e.jsx("div",{ref:s,id:l,role:"region","aria-labelledby":d,"aria-hidden":!r,"data-state":r?"open":"closed","data-disabled":p?"":void 0,className:o,...a,children:e.jsx(N.div,{initial:!1,animate:{height:r?"auto":0,opacity:r?1:0},transition:{duration:.2,ease:"easeInOut"},style:{overflow:"hidden"},children:n})})});h.displayName="CollapsibleContent";b.__docgenInfo={description:"",methods:[],displayName:"Collapsible",props:{open:{required:!1,tsType:{name:"boolean"},description:""},defaultOpen:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"CollapsibleTrigger"};h.__docgenInfo={description:"",methods:[],displayName:"CollapsibleContent"};const B={title:"Data Display/Collapsible",component:b,tags:[]},u={render:()=>{const[o,n]=t.useState(!1);return e.jsxs(b,{open:o,onOpenChange:n,className:"w-[280px] space-y-2 border border-border-primary rounded-lg p-3 bg-surface-primary shadow-sm",children:[e.jsx(f,{children:e.jsxs("div",{className:"flex items-center justify-between cursor-pointer select-none group",children:[e.jsx("h4",{className:"text-sm font-semibold text-text-primary",children:"@peduarte starred 3 repositories"}),e.jsxs(j,{variant:"ghost",size:"sm",className:"w-9 p-0 group-hover:bg-surface-secondary",children:[e.jsx(I,{className:"h-4 w-4 text-text-secondary"}),e.jsx("span",{className:"sr-only",children:"Toggle"})]})]})}),e.jsxs(h,{className:"space-y-2 mt-2",children:[e.jsx("div",{className:"rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary",children:"@radix-ui/primitives"}),e.jsx("div",{className:"rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary",children:"@radix-ui/colors"}),e.jsx("div",{className:"rounded-md border border-border-secondary px-3 py-2 text-sm text-text-secondary",children:"@stitches/react"})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const R=["Default"];export{u as Default,R as __namedExportsOrder,B as default};
