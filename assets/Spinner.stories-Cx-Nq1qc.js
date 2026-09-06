import{n as e}from"./chunk-jRWAZmH_.js";import{t}from"./jsx-runtime-WZfjI2gv.js";import{n,t as r}from"./Spinner-Cg8fBj8W.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`Feedback/Spinner`,component:r,tags:[],argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]},color:{control:`select`,options:[`default`,`white`,`blue`]}}},o={args:{size:`md`,color:`default`}},s={render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-4`,children:[(0,i.jsx)(r,{size:`sm`}),(0,i.jsx)(r,{size:`md`}),(0,i.jsx)(r,{size:`lg`})]})},c={render:()=>(0,i.jsxs)(`div`,{className:`flex items-center gap-4 p-4 bg-surface-secondary rounded-lg`,children:[(0,i.jsx)(r,{color:`default`}),(0,i.jsx)(r,{color:`blue`}),(0,i.jsx)(`div`,{className:`bg-black p-2 rounded`,children:(0,i.jsx)(r,{color:`white`})})]})},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    color: 'default'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
        </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 p-4 bg-surface-secondary rounded-lg">
            <Spinner color="default" />
            <Spinner color="blue" />
            <div className="bg-black p-2 rounded">
                <Spinner color="white" />
            </div>
        </div>
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Sizes`,`Colors`]}))();export{c as Colors,o as Default,s as Sizes,l as __namedExportsOrder,a as default};