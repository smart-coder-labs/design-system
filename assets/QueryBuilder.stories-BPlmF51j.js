import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as q}from"./iframe-Dan5ncgG.js";import{B as p}from"./Button-DwkrxhSZ.js";import{I as F}from"./Input-DWo3NzoY.js";import{S as v,a as h,b,c as y,f as g}from"./Select-B_PnNQve.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-DCTGQFKY.js";import"./resolve-elements-juiWZL7b.js";import"./index-BYtYiog6.js";import"./index-DLahyr3v.js";import"./utils-CDN07tui.js";import"./chevron-down-bcZdxFZD.js";import"./createLucideIcon-jCLSnv7o.js";import"./check-SmOBS8Tu.js";const Q={equals:"Equals",not_equals:"Not Equals",contains:"Contains",starts_with:"Starts With",ends_with:"Ends With",gt:"Greater Than",lt:"Less Than",gte:"Greater or Equal",lte:"Less or Equal"},j={text:["equals","not_equals","contains","starts_with","ends_with"],number:["equals","not_equals","gt","lt","gte","lte"],date:["equals","not_equals","gt","lt","gte","lte"],select:["equals","not_equals"]},S=()=>Math.random().toString(36).substr(2,9),C=({fields:s,value:o,onChange:f,className:G=""})=>{const[d,R]=q.useState(o||{id:S(),combinator:"and",rules:[]});q.useEffect(()=>{o&&R(o)},[o]);const c=t=>{R(t),f?.(t)},u=(t,i,a)=>{const n=e=>e.id===t?{...e,rules:e.rules.map(l=>"fieldId"in l&&l.id===i?{...l,...a}:l)}:{...e,rules:e.rules.map(l=>"combinator"in l?n(l):l)};c(n(d))},N=t=>{const i=a=>{if(a.id===t){const n=s[0];return{...a,rules:[...a.rules,{id:S(),fieldId:n.id,operator:j[n.type][0],value:""}]}}return{...a,rules:a.rules.map(n=>"combinator"in n?i(n):n)}};c(i(d))},E=t=>{const i=a=>a.id===t?{...a,rules:[...a.rules,{id:S(),combinator:"and",rules:[]}]}:{...a,rules:a.rules.map(n=>"combinator"in n?i(n):n)};c(i(d))},w=(t,i)=>{const a=n=>n.id===t?{...n,rules:n.rules.filter(e=>!("fieldId"in e&&e.id===i))}:{...n,rules:n.rules.map(e=>"combinator"in e?a(e):e)};c(a(d))},T=(t,i)=>{const a=n=>n.id===t?{...n,rules:n.rules.filter(e=>!("combinator"in e&&e.id===i))}:{...n,rules:n.rules.map(e=>"combinator"in e?a(e):e)};c(a(d))},_=(t,i)=>{const a=n=>n.id===t?{...n,combinator:i}:{...n,rules:n.rules.map(e=>"combinator"in e?a(e):e)};c(a(d))},A=(t,i)=>{const a=s.find(e=>e.id===t.fieldId)||s[0],n=j[a.type]||[];return r.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",marginBottom:"8px"},children:[r.jsx("div",{style:{width:"150px"},children:r.jsxs(v,{value:t.fieldId,onValueChange:e=>{const l=s.find(D=>D.id===e);u(i,t.id,{fieldId:e,operator:j[l?.type||"text"][0],value:""})},children:[r.jsx(h,{children:r.jsx(b,{placeholder:"Select Field"})}),r.jsx(y,{children:s.map(e=>r.jsx(g,{value:e.id,children:e.label},e.id))})]})}),r.jsx("div",{style:{width:"150px"},children:r.jsxs(v,{value:t.operator,onValueChange:e=>u(i,t.id,{operator:e}),children:[r.jsx(h,{children:r.jsx(b,{placeholder:"Operator"})}),r.jsx(y,{children:n.map(e=>r.jsx(g,{value:e,children:Q[e]},e))})]})}),r.jsx("div",{style:{flex:1},children:a.type==="select"&&a.options?r.jsxs(v,{value:t.value,onValueChange:e=>u(i,t.id,{value:e}),children:[r.jsx(h,{children:r.jsx(b,{placeholder:"Select Value"})}),r.jsx(y,{children:a.options.map(e=>r.jsx(g,{value:e.value,children:e.label},e.value))})]}):r.jsx(F,{type:a.type==="number"?"number":a.type==="date"?"date":"text",value:t.value,onChange:e=>u(i,t.id,{value:e.target.value}),placeholder:"Value"})}),r.jsx(p,{variant:"ghost",size:"sm",onClick:()=>w(i,t.id),style:{color:"var(--color-accent-red)"},children:"✕"})]},t.id)},I=(t,i)=>r.jsxs("div",{style:{padding:"16px",backgroundColor:"var(--color-background-secondary)",borderRadius:"8px",border:"1px solid var(--color-border-primary)",display:"flex",flexDirection:"column",gap:"8px",marginBottom:"8px"},children:[r.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:"8px"},children:[r.jsxs("div",{style:{display:"flex",backgroundColor:"var(--color-background-primary)",borderRadius:"4px",padding:"2px",border:"1px solid var(--color-border-secondary)"},children:[r.jsx("button",{onClick:()=>_(t.id,"and"),style:{padding:"4px 12px",border:"none",background:t.combinator==="and"?"var(--color-accent-blue)":"transparent",color:t.combinator==="and"?"#fff":"var(--color-text-secondary)",borderRadius:"4px",cursor:"pointer",fontSize:"12px",fontWeight:"bold"},children:"AND"}),r.jsx("button",{onClick:()=>_(t.id,"or"),style:{padding:"4px 12px",border:"none",background:t.combinator==="or"?"var(--color-accent-blue)":"transparent",color:t.combinator==="or"?"#fff":"var(--color-text-secondary)",borderRadius:"4px",cursor:"pointer",fontSize:"12px",fontWeight:"bold"},children:"OR"})]}),r.jsx("div",{style:{flex:1}}),r.jsx(p,{variant:"outline",size:"sm",onClick:()=>N(t.id),children:"+ Rule"}),r.jsx(p,{variant:"outline",size:"sm",onClick:()=>E(t.id),children:"+ Group"}),i&&r.jsx(p,{variant:"ghost",size:"sm",onClick:()=>T(i,t.id),style:{color:"var(--color-accent-red)"},children:"Remove Group"})]}),t.rules.map(a=>"combinator"in a?I(a,t.id):A(a,t.id))]},t.id);return r.jsx("div",{className:`query-builder ${G}`,children:I(d)})};C.__docgenInfo={description:"",methods:[],displayName:"QueryBuilder",props:{fields:{required:!0,tsType:{name:"Array",elements:[{name:"Field"}],raw:"Field[]"},description:""},value:{required:!1,tsType:{name:"RuleGroup"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: RuleGroup) => void",signature:{arguments:[{type:{name:"RuleGroup"},name:"value"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const Z={title:"Forms/QueryBuilder",component:C,parameters:{layout:"padded",docs:{description:{component:`
# Query Builder

A component for constructing complex filtering logic with nested groups and various field types.

## Features

- 🌳 **Nested Logic**: Supports nested AND/OR groups.
- 📝 **Dynamic Fields**: Handles text, number, date, and select fields.
- 🔄 **Interactive**: Add, remove, and update rules and groups.
- 🎨 **Styled**: Consistent with the design system.
`}}},tags:[]},k=[{id:"firstName",label:"First Name",type:"text"},{id:"lastName",label:"Last Name",type:"text"},{id:"age",label:"Age",type:"number"},{id:"birthDate",label:"Birth Date",type:"date"},{id:"category",label:"Category",type:"select",options:[{label:"Electronics",value:"electronics"},{label:"Clothing",value:"clothing"},{label:"Home",value:"home"}]},{id:"status",label:"Status",type:"select",options:[{label:"Active",value:"active"},{label:"Inactive",value:"inactive"},{label:"Pending",value:"pending"}]}],B=s=>{const[o,f]=q.useState(s.value);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[r.jsx(C,{...s,value:o,onChange:f}),r.jsxs("div",{style:{padding:"10px",background:"var(--color-background-secondary)",borderRadius:"12px"},children:[r.jsx("strong",{children:"Current Query:"}),r.jsx("pre",{style:{fontSize:"12px",marginTop:"10px"},children:JSON.stringify(o,null,2)})]})]})},m={render:s=>r.jsx(B,{...s}),args:{fields:k}},x={render:s=>r.jsx(B,{...s}),args:{fields:k,value:{id:"root",combinator:"and",rules:[{id:"r1",fieldId:"firstName",operator:"starts_with",value:"John"},{id:"g1",combinator:"or",rules:[{id:"r2",fieldId:"age",operator:"gt",value:18},{id:"r3",fieldId:"status",operator:"equals",value:"active"}]}]}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <QueryBuilderWithState {...args} />,
  args: {
    fields: fields
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <QueryBuilderWithState {...args} />,
  args: {
    fields: fields,
    value: {
      id: 'root',
      combinator: 'and',
      rules: [{
        id: 'r1',
        fieldId: 'firstName',
        operator: 'starts_with',
        value: 'John'
      }, {
        id: 'g1',
        combinator: 'or',
        rules: [{
          id: 'r2',
          fieldId: 'age',
          operator: 'gt',
          value: 18
        }, {
          id: 'r3',
          fieldId: 'status',
          operator: 'equals',
          value: 'active'
        }]
      }]
    }
  }
}`,...x.parameters?.docs?.source}}};const ee=["Default","Prepopulated"];export{m as Default,x as Prepopulated,ee as __namedExportsOrder,Z as default};
