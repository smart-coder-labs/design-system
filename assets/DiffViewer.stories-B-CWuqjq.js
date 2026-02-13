import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as j}from"./iframe-D5DOIGW8.js";import{c as d}from"./utils-CDN07tui.js";import{B as T}from"./Button-yixddUw3.js";import{c as L}from"./createLucideIcon-DOQ0Nu6C.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-BbTJ7w1C.js";const C=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],D=L("columns-2",C);const S=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]],V=L("rows-2",S),_=(p,g)=>{const c=p.split(`
`),m=g.split(`
`),u=c.length,f=m.length,o=Array(u+1).fill(0).map(()=>Array(f+1).fill(0));for(let n=1;n<=u;n++)for(let i=1;i<=f;i++)c[n-1]===m[i-1]?o[n][i]=o[n-1][i-1]+1:o[n][i]=Math.max(o[n-1][i],o[n][i-1]);const l=[];let s=u,a=f;for(;s>0||a>0;)s>0&&a>0&&c[s-1]===m[a-1]?(l.unshift({type:"unchanged",content:c[s-1],oldLineNumber:s,newLineNumber:a}),s--,a--):a>0&&(s===0||o[s][a-1]>=o[s-1][a])?(l.unshift({type:"added",content:m[a-1],newLineNumber:a}),a--):(l.unshift({type:"removed",content:c[s-1],oldLineNumber:s}),s--);return l},N=({oldText:p,newText:g,oldTitle:c="Original",newTitle:m="Modified",initialMode:u="unified",className:f,hideHeader:o=!1})=>{const[l,s]=j.useState(u),a=j.useMemo(()=>_(p,g),[p,g]),n=()=>e.jsx("div",{className:"font-mono text-xs",children:a.map((r,x)=>e.jsxs("div",{className:d("flex",r.type==="added"&&"bg-green-100/50 dark:bg-green-900/20",r.type==="removed"&&"bg-red-100/50 dark:bg-red-900/20",r.type==="unchanged"&&"hover:bg-black/5 dark:hover:bg-white/5"),children:[e.jsx("div",{className:"flex-none w-12 text-right pr-4 py-0.5 select-none text-text-tertiary border-r border-border-primary/30 opacity-50",children:r.oldLineNumber||""}),e.jsx("div",{className:"flex-none w-12 text-right pr-4 py-0.5 select-none text-text-tertiary border-r border-border-primary/30 opacity-50",children:r.newLineNumber||""}),e.jsxs("div",{className:d("flex-none w-8 text-center py-0.5 select-none font-bold",r.type==="added"&&"text-green-600 dark:text-green-400",r.type==="removed"&&"text-red-600 dark:text-red-400",r.type==="unchanged"&&"text-text-secondary"),children:[r.type==="added"&&"+",r.type==="removed"&&"-"]}),e.jsx("div",{className:d("flex-1 py-0.5 px-4 whitespace-pre-wrap break-all",r.type==="added"&&"text-green-900 dark:text-green-100",r.type==="removed"&&"text-red-900 dark:text-red-100 line-through opacity-70",r.type==="unchanged"&&"text-text-secondary"),children:r.content})]},x))}),i=()=>{const r=[],x=[];return a.forEach(t=>{t.type==="unchanged"?(r.push(t),x.push(t)):t.type==="removed"?(r.push(t),x.push({type:"unchanged",content:"",newLineNumber:void 0})):t.type==="added"&&(r.push({type:"unchanged",content:"",oldLineNumber:void 0}),x.push(t))}),e.jsxs("div",{className:"flex font-mono text-xs divide-x divide-border-primary/30",children:[e.jsx("div",{className:"flex-1 min-w-0",children:r.map((t,v)=>e.jsxs("div",{className:d("flex",t.type==="removed"&&"bg-red-100/50 dark:bg-red-900/20",!t.oldLineNumber&&t.content===""&&"bg-black/5 dark:bg-white/5"),children:[e.jsx("div",{className:"flex-none w-12 text-right pr-4 py-0.5 select-none text-text-tertiary border-r border-border-primary/30 opacity-50",children:t.oldLineNumber||""}),e.jsx("div",{className:d("flex-1 py-0.5 px-4 whitespace-pre-wrap break-all",t.type==="removed"?"text-red-900 dark:text-red-100":"text-text-secondary",!t.oldLineNumber&&"select-none"),children:t.content})]},v))}),e.jsx("div",{className:"flex-1 min-w-0",children:x.map((t,v)=>e.jsxs("div",{className:d("flex",t.type==="added"&&"bg-green-100/50 dark:bg-green-900/20",!t.newLineNumber&&t.content===""&&"bg-black/5 dark:bg-white/5"),children:[e.jsx("div",{className:"flex-none w-12 text-right pr-4 py-0.5 select-none text-text-tertiary border-r border-border-primary/30 opacity-50",children:t.newLineNumber||""}),e.jsx("div",{className:d("flex-1 py-0.5 px-4 whitespace-pre-wrap break-all",t.type==="added"?"text-green-900 dark:text-green-100":"text-text-secondary",!t.newLineNumber&&"select-none"),children:t.content})]},v))})]})};return e.jsxs("div",{className:d("border border-border-primary/50 rounded-lg overflow-hidden bg-surface-primary",f),children:[!o&&e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-surface-secondary border-b border-border-primary/50",children:[e.jsxs("div",{className:"flex items-center gap-4 text-sm",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-red-500/50"}),e.jsx("span",{className:"font-medium text-text-secondary",children:c})]}),e.jsx("span",{className:"text-text-tertiary",children:"→"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-green-500/50"}),e.jsx("span",{className:"font-medium text-text-secondary",children:m})]})]}),e.jsxs("div",{className:"flex bg-surface-primary rounded-md p-0.5 border border-border-primary/50",children:[e.jsxs(T,{variant:"ghost",size:"sm",onClick:()=>s("unified"),className:d("h-6 px-2 text-xs gap-1.5",l==="unified"?"bg-surface-secondary shadow-sm text-text-primary":"text-text-tertiary"),children:[e.jsx(V,{className:"w-3.5 h-3.5"}),"Unified"]}),e.jsxs(T,{variant:"ghost",size:"sm",onClick:()=>s("split"),className:d("h-6 px-2 text-xs gap-1.5",l==="split"?"bg-surface-secondary shadow-sm text-text-primary":"text-text-tertiary"),children:[e.jsx(D,{className:"w-3.5 h-3.5"}),"Split"]})]})]}),e.jsx("div",{className:"overflow-x-auto",children:l==="unified"?n():i()})]})};N.__docgenInfo={description:"",methods:[],displayName:"DiffViewer",props:{oldText:{required:!0,tsType:{name:"string"},description:""},newText:{required:!0,tsType:{name:"string"},description:""},oldTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Original'",computed:!1}},newTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Modified'",computed:!1}},initialMode:{required:!1,tsType:{name:"union",raw:"'unified' | 'split'",elements:[{name:"literal",value:"'unified'"},{name:"literal",value:"'split'"}]},description:"",defaultValue:{value:"'unified'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},hideHeader:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const J={title:"Data Display/DiffViewer",component:N,parameters:{layout:"padded"},tags:[]},k=`function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

const user = {
  name: 'John',
  role: 'admin'
};`,M=`function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

const user = {
  name: 'John Doe',
  role: 'super-admin',
  lastLogin: new Date()
};`,q=`server:
  port: 8080
  host: "localhost"
  debug: true
database:
  url: "postgres://localhost:5432/db"
  pool: 5`,H=`server:
  port: 3000
  host: "0.0.0.0"
  debug: false
  cors: true
database:
  url: "postgres://production-db:5432/db"
  pool: 20
  ssl: true`,h={args:{oldText:k,newText:M,oldTitle:"utils.js (v1)",newTitle:"utils.js (v2)",initialMode:"unified"}},y={args:{oldText:k,newText:M,oldTitle:"utils.js (v1)",newTitle:"utils.js (v2)",initialMode:"split"},render:p=>e.jsx("div",{className:"max-w-4xl",children:e.jsx(N,{...p})})},b={args:{oldText:q,newText:H,oldTitle:"config.dev.yaml",newTitle:"config.prod.yaml",initialMode:"split"}},w={args:{oldText:`Line 1
Line 2
Line 3`,newText:`Line 1
Line 2 Modified
Line 3`,hideHeader:!0}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    oldText: oldCode,
    newText: newCode,
    oldTitle: 'utils.js (v1)',
    newTitle: 'utils.js (v2)',
    initialMode: 'unified'
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    oldText: oldCode,
    newText: newCode,
    oldTitle: 'utils.js (v1)',
    newTitle: 'utils.js (v2)',
    initialMode: 'split'
  },
  render: args => <div className="max-w-4xl">
            <DiffViewer {...args} />
        </div>
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    oldText: oldConfig,
    newText: newConfig,
    oldTitle: 'config.dev.yaml',
    newTitle: 'config.prod.yaml',
    initialMode: 'split'
  }
}`,...b.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    oldText: 'Line 1\\nLine 2\\nLine 3',
    newText: 'Line 1\\nLine 2 Modified\\nLine 3',
    hideHeader: true
  }
}`,...w.parameters?.docs?.source}}};const R=["Unified","Split","ConfigDiff","NoHeader"];export{b as ConfigDiff,w as NoHeader,y as Split,h as Unified,R as __namedExportsOrder,J as default};
