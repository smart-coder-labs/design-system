import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-B1a0g5t6.js";import{n as r,t as i}from"./utils-ijcE-ZHT.js";import{t as a}from"./jsx-runtime-DaLCRA3n.js";var o,s,c,l,u,d,f=e((()=>{o=t(n()),r(),s=a(),c=o.forwardRef(({className:e,as:t=`div`,gap:n=4,style:r,...a},o)=>(0,s.jsx)(t,{ref:o,className:i(`flex flex-col`,e),style:{gap:typeof n==`number`?`${n*.25}rem`:n,...r},...a})),c.displayName=`Stack`,l=o.forwardRef(({className:e,...t},n)=>(0,s.jsx)(c,{ref:n,className:i(`flex-row items-center`,e),...t})),l.displayName=`HStack`,u=o.forwardRef(({className:e,...t},n)=>(0,s.jsx)(c,{ref:n,className:i(`flex-col`,e),...t})),u.displayName=`VStack`,d=o.forwardRef(({className:e,as:t=`div`,columns:n=1,gap:r=4,style:a,...o},c)=>(0,s.jsx)(t,{ref:c,className:i(`grid`,e),style:{gridTemplateColumns:`repeat(${n}, minmax(0, 1fr))`,gap:typeof r==`number`?`${r*.25}rem`:r,...a},...o})),d.displayName=`Grid`,c.__docgenInfo={description:``,methods:[],displayName:`Stack`,props:{as:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:``,defaultValue:{value:`"div"`,computed:!1}},gap:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``,defaultValue:{value:`4`,computed:!1}}}},l.__docgenInfo={description:``,methods:[],displayName:`HStack`,props:{as:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:``},gap:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``}}},u.__docgenInfo={description:``,methods:[],displayName:`VStack`,props:{as:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:``},gap:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``}}},d.__docgenInfo={description:``,methods:[],displayName:`Grid`,props:{as:{required:!1,tsType:{name:`ReactElementType`,raw:`React.ElementType`},description:``,defaultValue:{value:`"div"`,computed:!1}},columns:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`1`,computed:!1}},gap:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:``,defaultValue:{value:`4`,computed:!1}}}}})),p,m,h,g,_;e((()=>{f(),p=a(),m={title:`Layout/Layout`,component:c,tags:[]},h={render:()=>(0,p.jsxs)(u,{gap:8,children:[(0,p.jsxs)(`div`,{className:`border p-4 rounded`,children:[(0,p.jsx)(`h3`,{className:`mb-2 font-bold`,children:`VStack (Vertical Stack)`}),(0,p.jsxs)(u,{gap:4,className:`bg-surface-secondary p-4 rounded`,children:[(0,p.jsx)(`div`,{className:`bg-white p-4 rounded shadow-sm`,children:`Item 1`}),(0,p.jsx)(`div`,{className:`bg-white p-4 rounded shadow-sm`,children:`Item 2`}),(0,p.jsx)(`div`,{className:`bg-white p-4 rounded shadow-sm`,children:`Item 3`})]})]}),(0,p.jsxs)(`div`,{className:`border p-4 rounded`,children:[(0,p.jsx)(`h3`,{className:`mb-2 font-bold`,children:`HStack (Horizontal Stack)`}),(0,p.jsxs)(l,{gap:4,className:`bg-surface-secondary p-4 rounded`,children:[(0,p.jsx)(`div`,{className:`bg-white p-4 rounded shadow-sm`,children:`Item 1`}),(0,p.jsx)(`div`,{className:`bg-white p-4 rounded shadow-sm`,children:`Item 2`}),(0,p.jsx)(`div`,{className:`bg-white p-4 rounded shadow-sm`,children:`Item 3`})]})]})]})},g={render:()=>(0,p.jsxs)(`div`,{className:`border p-4 rounded`,children:[(0,p.jsx)(`h3`,{className:`mb-2 font-bold`,children:`Grid (3 Columns)`}),(0,p.jsxs)(d,{columns:3,gap:4,className:`bg-surface-secondary p-4 rounded`,children:[(0,p.jsx)(`div`,{className:`bg-white p-4 rounded shadow-sm`,children:`Col 1`}),(0,p.jsx)(`div`,{className:`bg-white p-4 rounded shadow-sm`,children:`Col 2`}),(0,p.jsx)(`div`,{className:`bg-white p-4 rounded shadow-sm`,children:`Col 3`}),(0,p.jsx)(`div`,{className:`bg-white p-4 rounded shadow-sm`,children:`Col 4`}),(0,p.jsx)(`div`,{className:`bg-white p-4 rounded shadow-sm`,children:`Col 5`}),(0,p.jsx)(`div`,{className:`bg-white p-4 rounded shadow-sm`,children:`Col 6`})]})]})},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_=[`Stacks`,`Grids`]}))();export{g as Grids,h as Stacks,_ as __namedExportsOrder,m as default};