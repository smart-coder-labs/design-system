import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as t}from"./iframe-BMG7cCGY.js";import{c as d}from"./utils-CDN07tui.js";import{C as B}from"./chevron-right-BztyvQxy.js";import"./preload-helper-PPVm8Dsz.js";import"./createLucideIcon-11Koirjv.js";const i=t.forwardRef(({...r},a)=>e.jsx("nav",{ref:a,"aria-label":"breadcrumb",...r}));i.displayName="Breadcrumb";const p=t.forwardRef(({className:r,...a},s)=>e.jsx("ol",{ref:s,className:d("flex flex-wrap items-center gap-1.5 break-words text-sm text-text-secondary sm:gap-2.5",r),...a}));p.displayName="BreadcrumbList";const m=t.forwardRef(({className:r,...a},s)=>e.jsx("li",{ref:s,className:d("inline-flex items-center gap-1.5",r),...a}));m.displayName="BreadcrumbItem";const o=t.forwardRef(({asChild:r,className:a,...s},l)=>{const b=r?t.Fragment:"a";return e.jsx(b,{ref:l,className:d("transition-colors hover:text-text-primary",a),...s})});o.displayName="BreadcrumbLink";const u=t.forwardRef(({className:r,...a},s)=>e.jsx("span",{ref:s,role:"link","aria-disabled":"true","aria-current":"page",className:d("font-normal text-text-primary",r),...a}));u.displayName="BreadcrumbPage";const c=({children:r,className:a,...s})=>e.jsx("li",{role:"presentation","aria-hidden":"true",className:d("[&>svg]:size-3.5",a),...s,children:r??e.jsx(B,{})});c.displayName="BreadcrumbSeparator";i.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbList"};m.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbItem"};o.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbLink",props:{asChild:{required:!1,tsType:{name:"boolean"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbPage"};c.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbSeparator"};const y={title:"Navigation/Breadcrumb",component:i,tags:[]},n={render:()=>e.jsx(i,{children:e.jsxs(p,{children:[e.jsx(m,{children:e.jsx(o,{href:"/",children:"Home"})}),e.jsx(c,{}),e.jsx(m,{children:e.jsx(o,{href:"/components",children:"Components"})}),e.jsx(c,{}),e.jsx(m,{children:e.jsx(u,{children:"Breadcrumb"})})]})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
}`,...n.parameters?.docs?.source}}};const I=["Default"];export{n as Default,I as __namedExportsOrder,y as default};
