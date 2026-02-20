import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-BMG7cCGY.js";import{c}from"./utils-CDN07tui.js";import"./preload-helper-PPVm8Dsz.js";const n=m.forwardRef(({className:a,as:d="div",gap:s=4,style:r,...l},p)=>e.jsx(d,{ref:p,className:c("flex flex-col",a),style:{gap:typeof s=="number"?`${s*.25}rem`:s,...r},...l}));n.displayName="Stack";const u=m.forwardRef(({className:a,...d},s)=>e.jsx(n,{ref:s,className:c("flex-row items-center",a),...d}));u.displayName="HStack";const i=m.forwardRef(({className:a,...d},s)=>e.jsx(n,{ref:s,className:c("flex-col",a),...d}));i.displayName="VStack";const h=m.forwardRef(({className:a,as:d="div",columns:s=1,gap:r=4,style:l,...p},w)=>e.jsx(d,{ref:w,className:c("grid",a),style:{gridTemplateColumns:`repeat(${s}, minmax(0, 1fr))`,gap:typeof r=="number"?`${r*.25}rem`:r,...l},...p}));h.displayName="Grid";n.__docgenInfo={description:"",methods:[],displayName:"Stack",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:'"div"',computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"4",computed:!1}}}};u.__docgenInfo={description:"",methods:[],displayName:"HStack",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""}}};i.__docgenInfo={description:"",methods:[],displayName:"VStack",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"Grid",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:'"div"',computed:!1}},columns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"4",computed:!1}}}};const N={title:"Layout/Layout",component:n,tags:[]},o={render:()=>e.jsxs(i,{gap:8,children:[e.jsxs("div",{className:"border p-4 rounded",children:[e.jsx("h3",{className:"mb-2 font-bold",children:"VStack (Vertical Stack)"}),e.jsxs(i,{gap:4,className:"bg-surface-secondary p-4 rounded",children:[e.jsx("div",{className:"bg-white p-4 rounded shadow-sm",children:"Item 1"}),e.jsx("div",{className:"bg-white p-4 rounded shadow-sm",children:"Item 2"}),e.jsx("div",{className:"bg-white p-4 rounded shadow-sm",children:"Item 3"})]})]}),e.jsxs("div",{className:"border p-4 rounded",children:[e.jsx("h3",{className:"mb-2 font-bold",children:"HStack (Horizontal Stack)"}),e.jsxs(u,{gap:4,className:"bg-surface-secondary p-4 rounded",children:[e.jsx("div",{className:"bg-white p-4 rounded shadow-sm",children:"Item 1"}),e.jsx("div",{className:"bg-white p-4 rounded shadow-sm",children:"Item 2"}),e.jsx("div",{className:"bg-white p-4 rounded shadow-sm",children:"Item 3"})]})]})]})},t={render:()=>e.jsxs("div",{className:"border p-4 rounded",children:[e.jsx("h3",{className:"mb-2 font-bold",children:"Grid (3 Columns)"}),e.jsxs(h,{columns:3,gap:4,className:"bg-surface-secondary p-4 rounded",children:[e.jsx("div",{className:"bg-white p-4 rounded shadow-sm",children:"Col 1"}),e.jsx("div",{className:"bg-white p-4 rounded shadow-sm",children:"Col 2"}),e.jsx("div",{className:"bg-white p-4 rounded shadow-sm",children:"Col 3"}),e.jsx("div",{className:"bg-white p-4 rounded shadow-sm",children:"Col 4"}),e.jsx("div",{className:"bg-white p-4 rounded shadow-sm",children:"Col 5"}),e.jsx("div",{className:"bg-white p-4 rounded shadow-sm",children:"Col 6"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <VStack gap={8}>
            <div className="border p-4 rounded">
                <h3 className="mb-2 font-bold">VStack (Vertical Stack)</h3>
                <VStack gap={4} className="bg-surface-secondary p-4 rounded">
                    <div className="bg-white p-4 rounded shadow-sm">Item 1</div>
                    <div className="bg-white p-4 rounded shadow-sm">Item 2</div>
                    <div className="bg-white p-4 rounded shadow-sm">Item 3</div>
                </VStack>
            </div>

            <div className="border p-4 rounded">
                <h3 className="mb-2 font-bold">HStack (Horizontal Stack)</h3>
                <HStack gap={4} className="bg-surface-secondary p-4 rounded">
                    <div className="bg-white p-4 rounded shadow-sm">Item 1</div>
                    <div className="bg-white p-4 rounded shadow-sm">Item 2</div>
                    <div className="bg-white p-4 rounded shadow-sm">Item 3</div>
                </HStack>
            </div>
        </VStack>
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="border p-4 rounded">
            <h3 className="mb-2 font-bold">Grid (3 Columns)</h3>
            <Grid columns={3} gap={4} className="bg-surface-secondary p-4 rounded">
                <div className="bg-white p-4 rounded shadow-sm">Col 1</div>
                <div className="bg-white p-4 rounded shadow-sm">Col 2</div>
                <div className="bg-white p-4 rounded shadow-sm">Col 3</div>
                <div className="bg-white p-4 rounded shadow-sm">Col 4</div>
                <div className="bg-white p-4 rounded shadow-sm">Col 5</div>
                <div className="bg-white p-4 rounded shadow-sm">Col 6</div>
            </Grid>
        </div>
}`,...t.parameters?.docs?.source}}};const y=["Stacks","Grids"];export{t as Grids,o as Stacks,y as __namedExportsOrder,N as default};
