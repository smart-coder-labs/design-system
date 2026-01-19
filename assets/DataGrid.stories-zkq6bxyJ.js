import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as n}from"./iframe-vYzePaRW.js";import{c as ne}from"./utils-CDN07tui.js";import{T as se}from"./Table-D6By3erH.js";import{C as re}from"./Checkbox-Zozm4HNe.js";import{C as oe}from"./Combobox-Cv42c3jw.js";import{D as le}from"./download-DO7YiRJe.js";import{c as K}from"./createLucideIcon-Ckxz52bH.js";import{B as X}from"./Badge-Cot3l83C.js";import"./preload-helper-PPVm8Dsz.js";import"./arrow-up-down-DqoqPSpO.js";import"./proxy-DMGrdN83.js";import"./chevron-left-Bevhuhkz.js";import"./chevron-right-C1IyBY8C.js";import"./check-Bwk7sq60.js";import"./minus-RtFOX2Ge.js";import"./chevrons-up-down-DXJEmuLb.js";import"./index-4cmsJ5fh.js";import"./search-B_MjFKX0.js";const ie=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89",key:"znwnzq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11",key:"c9qhm2"}]],ce=K("pin-off",ie);const de=[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]],me=K("pin",de);const ue=[["path",{d:"M14 17H5",key:"gfn3mx"}],["path",{d:"M19 7h-9",key:"6i9tg"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],pe=K("settings-2",ue);function i({columns:a,data:t,selectable:m=!1,striped:l=!0,hoverable:c=!0,density:u="comfortable",page:p=1,pageSize:g=10,virtualScrolling:y=!1,maxHeight:b="600px",onPageChange:S,onSortChange:h,onCellEdit:B,onExport:$}){const[k,ye]=n.useState(null),[U,xe]=n.useState("asc"),[he,ve]=n.useState(new Set),[C,I]=n.useState(new Map(a.map(s=>[s.key,{visible:!0,pinned:null,width:s.width||150}]))),[O,be]=n.useState(new Map),[N,Q]=n.useState(null),[fe,Se]=n.useState(new Set),[Ce,je]=n.useState(null),[Ne,we]=n.useState(null),Y=s=>{I(x=>{const o=new Map(x),r=o.get(s);return r&&o.set(s,{...r,visible:!r.visible}),o})},Z=s=>{I(x=>{const o=new Map(x),r=o.get(s);if(r){const f=r.pinned==="left"?null:"left";o.set(s,{...r,pinned:f})}return o})},ee=()=>{if($)$();else{const s=a.filter(w=>C.get(w.key)?.visible),x=s.map(w=>w.header).join(","),o=j.map(w=>s.map(te=>{const D=w[te.key];return typeof D=="string"&&D.includes(",")?`"${D}"`:D}).join(",")).join(`
`),r=`${x}
${o}`,f=new Blob([r],{type:"text/csv"}),J=URL.createObjectURL(f),_=document.createElement("a");_.href=J,_.download="data-export.csv",_.click(),URL.revokeObjectURL(J)}};let j=n.useMemo(()=>{let s=[...t];return O.forEach((x,o)=>{s=s.filter(r=>String(r[o]).toLowerCase().includes(x.toLowerCase()))}),k&&s.sort((x,o)=>{const r=x[k],f=o[k];return r<f?U==="asc"?-1:1:r>f?U==="asc"?1:-1:0}),s},[t,O,k,U]);n.useMemo(()=>{if(!N)return null;const s=new Map;return j.forEach(x=>{const o=x[N];s.has(o)||s.set(o,[]),s.get(o).push(x)}),s},[j,N]),Math.ceil(j.length/g);const ae=y?j:j.slice((p-1)*g,p*g);return n.useMemo(()=>{const s=a.filter(r=>C.get(r.key)?.visible),x=s.filter(r=>C.get(r.key)?.pinned==="left"),o=s.filter(r=>!C.get(r.key)?.pinned);return[...x,...o]},[a,C]),e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-3 bg-surface-elevated border border-border-primary rounded-xl",children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsxs("select",{value:N?String(N):"",onChange:s=>Q(s.target.value||null),className:"px-3 py-1.5 text-sm bg-surface-secondary border border-border-primary rounded-lg text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue",children:[e.jsx("option",{value:"",children:"No grouping"}),a.filter(s=>s.groupable).map(s=>e.jsxs("option",{value:String(s.key),children:["Group by ",s.header]},String(s.key)))]})}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:ee,className:"flex items-center gap-1.5 px-3 py-1.5 text-sm bg-surface-secondary border border-border-primary rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-secondary/70 transition-all",children:[e.jsx(le,{className:"w-4 h-4"}),"Export CSV"]}),e.jsx(ge,{columns:a,columnStates:C,onToggleVisibility:Y,onTogglePin:Z})]})]}),e.jsx("div",{className:"overflow-auto border border-border-primary rounded-xl bg-surface-elevated shadow-lg",style:{maxHeight:y?b:void 0},children:e.jsx(se,{columns:a,data:ae,striped:l,hoverable:c,density:u,onSortChange:h,onPageChange:S,page:p,pageSize:g})})]})}function ge({columns:a,columnStates:t,onToggleVisibility:m,onTogglePin:l}){const[c,u]=n.useState(!1),[p,g]=n.useState(a[0]?String(a[0].key):""),y=n.useRef(null),b=a.find(h=>String(h.key)===p)??a[0],S=b?t.get(b.key):void 0;return n.useEffect(()=>{if(!c)return;const h=B=>{y.current&&!y.current.contains(B.target)&&u(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[c]),e.jsxs("div",{className:"relative",ref:y,children:[e.jsxs("button",{className:"flex items-center gap-1.5 px-3 py-1.5 text-sm bg-surface-secondary border border-border-primary rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-secondary/70 transition-all",onClick:()=>u(h=>!h),type:"button",children:[e.jsx(pe,{className:"w-4 h-4"}),"Columns"]}),c&&e.jsxs("div",{className:"absolute right-0 mt-2 z-50 w-[260px] p-3 bg-surface-elevated border border-border-primary rounded-xl shadow-lg space-y-3",children:[e.jsx(oe,{items:a.map(h=>({value:String(h.key),label:h.header})),value:p||void 0,onChange:h=>g(h),placeholder:"Select column",searchPlaceholder:"Search columns..."}),b&&S&&e.jsxs("div",{className:"flex items-center justify-between gap-2 text-sm text-text-primary",children:[e.jsxs("label",{className:"flex items-center gap-2 cursor-pointer",children:[e.jsx(re,{checked:S.visible,onCheckedChange:()=>m(b.key)}),e.jsx("span",{children:b.header})]}),b.pinnable&&e.jsx("button",{onClick:()=>l(b.key),className:ne("p-1 rounded-md transition-colors",S.pinned?"text-accent-blue bg-accent-blue/10":"text-text-tertiary hover:text-text-secondary"),children:S.pinned?e.jsx(me,{className:"w-3.5 h-3.5"}):e.jsx(ce,{className:"w-3.5 h-3.5"})})]})]})]})}i.__docgenInfo={description:"",methods:[],displayName:"DataGrid",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"DataGridColumn",elements:[{name:"T"}],raw:"DataGridColumn<T>"}],raw:"DataGridColumn<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},hoverable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},density:{required:!1,tsType:{name:"union",raw:'"comfortable" | "compact"',elements:[{name:"literal",value:'"comfortable"'},{name:"literal",value:'"compact"'}]},description:"",defaultValue:{value:'"comfortable"',computed:!1}},page:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},pageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},virtualScrolling:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"600px"',computed:!1}},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},onSortChange:{required:!1,tsType:{name:"signature",type:"function",raw:'(key: keyof T, direction: "asc" | "desc") => void',signature:{arguments:[{type:{name:"T"},name:"key"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""},onCellEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: T, key: keyof T, value: any) => void",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"T"},name:"key"},{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},onExport:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Be={title:"Data Display/DataGrid",component:i,parameters:{layout:"padded",docs:{description:{component:"An advanced data grid component with sorting, filtering, column resizing, pinning, grouping, cell editing, and export capabilities. Built with Apple design system aesthetics."}}},tags:["autodocs"]},d=[{id:1,name:"John Doe",email:"john.doe@company.com",department:"Engineering",role:"Senior Developer",salary:12e4,status:"active",joinDate:"2021-03-15"},{id:2,name:"Jane Smith",email:"jane.smith@company.com",department:"Marketing",role:"Marketing Manager",salary:95e3,status:"active",joinDate:"2020-07-22"},{id:3,name:"Bob Johnson",email:"bob.johnson@company.com",department:"Engineering",role:"DevOps Engineer",salary:11e4,status:"active",joinDate:"2022-01-10"},{id:4,name:"Alice Williams",email:"alice.williams@company.com",department:"Design",role:"UI/UX Designer",salary:9e4,status:"on-leave",joinDate:"2021-11-05"},{id:5,name:"Charlie Brown",email:"charlie.brown@company.com",department:"Sales",role:"Sales Representative",salary:7e4,status:"active",joinDate:"2023-02-14"},{id:6,name:"Diana Prince",email:"diana.prince@company.com",department:"Engineering",role:"Tech Lead",salary:14e4,status:"active",joinDate:"2019-05-20"},{id:7,name:"Ethan Hunt",email:"ethan.hunt@company.com",department:"Security",role:"Security Analyst",salary:85e3,status:"inactive",joinDate:"2022-08-30"},{id:8,name:"Fiona Gallagher",email:"fiona.gallagher@company.com",department:"HR",role:"HR Manager",salary:95e3,status:"active",joinDate:"2020-04-12"},{id:9,name:"George Miller",email:"george.miller@company.com",department:"Marketing",role:"Content Writer",salary:65e3,status:"active",joinDate:"2023-06-01"},{id:10,name:"Hannah Montana",email:"hannah.montana@company.com",department:"Design",role:"Graphic Designer",salary:75e3,status:"active",joinDate:"2021-09-18"},{id:11,name:"Ian Malcolm",email:"ian.malcolm@company.com",department:"Engineering",role:"Data Scientist",salary:13e4,status:"active",joinDate:"2020-12-03"},{id:12,name:"Julia Roberts",email:"julia.roberts@company.com",department:"Sales",role:"Sales Manager",salary:105e3,status:"active",joinDate:"2019-10-25"}],v=[{key:"id",header:"ID",width:80,sortable:!0,filterable:!0,resizable:!0,pinnable:!0},{key:"name",header:"Name",width:180,sortable:!0,filterable:!0,resizable:!0,pinnable:!0,editable:!0},{key:"email",header:"Email",width:220,sortable:!0,filterable:!0,resizable:!0},{key:"department",header:"Department",width:140,sortable:!0,filterable:!0,resizable:!0,groupable:!0},{key:"role",header:"Role",width:160,sortable:!0,filterable:!0,resizable:!0},{key:"salary",header:"Salary",width:120,sortable:!0,filterable:!0,resizable:!0,render:a=>e.jsxs("span",{className:"font-medium text-accent-blue",children:["$",a.toLocaleString()]})},{key:"status",header:"Status",width:120,sortable:!0,filterable:!0,resizable:!0,render:a=>{const t={active:"success",inactive:"error","on-leave":"warning"};return e.jsx(X,{variant:t[a],size:"sm",children:a})}},{key:"joinDate",header:"Join Date",width:120,sortable:!0,filterable:!0,resizable:!0}],P={render:()=>{const[a,t]=n.useState(1);return e.jsx(i,{columns:v,data:d,page:a,pageSize:5,onPageChange:t})}},E={render:()=>{const[a,t]=n.useState(1);return e.jsx(i,{columns:v,data:d,selectable:!0,page:a,pageSize:5,onPageChange:t})}},z={render:()=>{const[a,t]=n.useState(1);return e.jsx(i,{columns:v,data:d,density:"compact",page:a,pageSize:8,onPageChange:t})}},G={render:()=>{const[a,t]=n.useState(1),[m,l]=n.useState(null),[c,u]=n.useState("asc");return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-surface-secondary rounded-xl",children:[e.jsx("p",{className:"text-sm text-text-secondary",children:"Click on column headers with sort icons to sort the data"}),m&&e.jsxs("p",{className:"text-sm text-text-primary mt-2",children:["Sorted by:"," ",e.jsxs("span",{className:"font-medium",children:[m," (",c,")"]})]})]}),e.jsx(i,{columns:v,data:d,page:a,pageSize:5,onPageChange:t,onSortChange:(p,g)=>{l(p),u(g)}})]})}},V={render:()=>{const[a,t]=n.useState(1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-surface-secondary rounded-xl",children:e.jsx("p",{className:"text-sm text-text-secondary",children:"Click the filter icons next to column headers to filter data"})}),e.jsx(i,{columns:v,data:d,page:a,pageSize:5,onPageChange:t})]})}},T={render:()=>{const[a,t]=n.useState(1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-surface-secondary rounded-xl",children:e.jsx("p",{className:"text-sm text-text-secondary",children:'Use the "Group by" dropdown in the toolbar to group rows by department'})}),e.jsx(i,{columns:v,data:d,page:a,pageSize:20,onPageChange:t})]})}},M={render:()=>{const[a,t]=n.useState(1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-surface-secondary rounded-xl",children:e.jsx("p",{className:"text-sm text-text-secondary",children:"Hover over column borders and drag to resize columns"})}),e.jsx(i,{columns:v,data:d,page:a,pageSize:5,onPageChange:t})]})}},R={render:()=>{const[a,t]=n.useState(1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-surface-secondary rounded-xl",children:e.jsx("p",{className:"text-sm text-text-secondary",children:'Use the "Columns" menu to pin columns to the left (ID and Name are pinnable)'})}),e.jsx(i,{columns:v,data:d,page:a,pageSize:5,onPageChange:t})]})}},W={render:()=>{const[a,t]=n.useState(1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-surface-secondary rounded-xl",children:e.jsx("p",{className:"text-sm text-text-secondary",children:'Use the "Columns" menu to show/hide columns'})}),e.jsx(i,{columns:v,data:d,page:a,pageSize:5,onPageChange:t})]})}},L={render:()=>{const[a,t]=n.useState(1),[m,l]=n.useState(d);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-surface-secondary rounded-xl",children:e.jsx("p",{className:"text-sm text-text-secondary",children:'Click on the "Name" column cells to edit them (editable columns are configured)'})}),e.jsx(i,{columns:v,data:m,page:a,pageSize:5,onPageChange:t,onCellEdit:(c,u,p)=>{l(g=>g.map(y=>y.id===c.id?{...y,[u]:p}:y))}})]})}},q={render:()=>{const a=Array.from({length:100},(t,m)=>({...d[m%d.length],id:m+1}));return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-surface-secondary rounded-xl",children:e.jsx("p",{className:"text-sm text-text-secondary",children:"Virtual scrolling enabled for 100+ rows. Scroll through the data grid to see the performance"})}),e.jsx(i,{columns:v,data:a,virtualScrolling:!0,maxHeight:"500px"})]})}},A={render:()=>{const[a,t]=n.useState(1);return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-surface-secondary rounded-xl",children:e.jsx("p",{className:"text-sm text-text-secondary",children:'Click the "Export CSV" button in the toolbar to download the data as CSV'})}),e.jsx(i,{columns:v,data:d,page:a,pageSize:5,onPageChange:t})]})}},F={render:()=>{const[a,t]=n.useState(1),[m,l]=n.useState(d);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 bg-surface-secondary rounded-xl",children:[e.jsx("h3",{className:"text-lg font-semibold text-text-primary mb-2",children:"Full-Featured Data Grid"}),e.jsxs("ul",{className:"text-sm text-text-secondary space-y-1",children:[e.jsx("li",{children:"✓ Sortable columns (click headers)"}),e.jsx("li",{children:"✓ Filterable columns (filter icons)"}),e.jsx("li",{children:"✓ Resizable columns (drag borders)"}),e.jsx("li",{children:"✓ Pinnable columns (Columns menu)"}),e.jsx("li",{children:"✓ Column visibility (Columns menu)"}),e.jsx("li",{children:"✓ Row grouping (Group by dropdown)"}),e.jsx("li",{children:"✓ Cell editing (click Name cells)"}),e.jsx("li",{children:"✓ Row selection (checkboxes)"}),e.jsx("li",{children:"✓ CSV export (Export button)"}),e.jsx("li",{children:"✓ Pagination"})]})]}),e.jsx(i,{columns:v,data:m,selectable:!0,page:a,pageSize:5,onPageChange:t,onCellEdit:(c,u,p)=>{l(g=>g.map(y=>y.id===c.id?{...y,[u]:p}:y))}})]})}},H={render:()=>{const[a,t]=n.useState(1),m=[{key:"name",header:"Employee",width:220,sortable:!0,filterable:!0,resizable:!0,pinnable:!0,render:(l,c)=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center font-semibold text-sm",children:l.split(" ").map(u=>u[0]).join("")}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-text-primary",children:l}),e.jsx("div",{className:"text-xs text-text-tertiary",children:c.email})]})]})},{key:"department",header:"Department",width:140,sortable:!0,groupable:!0},{key:"role",header:"Role",width:160,sortable:!0},{key:"salary",header:"Annual Salary",width:140,sortable:!0,render:l=>e.jsxs("div",{className:"text-right",children:[e.jsxs("div",{className:"font-semibold text-text-primary",children:["$",l.toLocaleString()]}),e.jsxs("div",{className:"text-xs text-text-tertiary",children:["$",Math.round(l/12).toLocaleString(),"/mo"]})]})},{key:"status",header:"Status",width:120,sortable:!0,render:l=>{const c={active:{variant:"success",label:"Active",dot:!0},inactive:{variant:"error",label:"Inactive",dot:!0},"on-leave":{variant:"warning",label:"On Leave",dot:!0}},{variant:u,label:p,dot:g}=c[l];return e.jsx(X,{variant:u,size:"sm",dot:g,children:p})}}];return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-4 bg-surface-secondary rounded-xl",children:e.jsx("p",{className:"text-sm text-text-secondary",children:"Custom cell rendering with avatars, formatted values, and rich content"})}),e.jsx(i,{columns:m,data:d,page:a,pageSize:5,onPageChange:t})]})}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <DataGrid columns={employeeColumns} data={sampleEmployees} page={page} pageSize={5} onPageChange={setPage} />;
  }
}`,...P.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <DataGrid columns={employeeColumns} data={sampleEmployees} selectable page={page} pageSize={5} onPageChange={setPage} />;
  }
}`,...E.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <DataGrid columns={employeeColumns} data={sampleEmployees} density="compact" page={page} pageSize={8} onPageChange={setPage} />;
  }
}`,...z.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const [sortKey, setSortKey] = useState<keyof Employee | null>(null);
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
    return <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Click on column headers with sort icons to sort the data
                    </p>
                    {sortKey && <p className="text-sm text-text-primary mt-2">
                            Sorted by:{" "}
                            <span className="font-medium">
                                {sortKey} ({sortDirection})
                            </span>
                        </p>}
                </div>

                <DataGrid columns={employeeColumns} data={sampleEmployees} page={page} pageSize={5} onPageChange={setPage} onSortChange={(key, direction) => {
        setSortKey(key);
        setSortDirection(direction);
      }} />
            </div>;
  }
}`,...G.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Click the filter icons next to column headers to filter data
                    </p>
                </div>

                <DataGrid columns={employeeColumns} data={sampleEmployees} page={page} pageSize={5} onPageChange={setPage} />
            </div>;
  }
}`,...V.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Use the "Group by" dropdown in the toolbar to group rows by department
                    </p>
                </div>

                <DataGrid columns={employeeColumns} data={sampleEmployees} page={page} pageSize={20} onPageChange={setPage} />
            </div>;
  }
}`,...T.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Hover over column borders and drag to resize columns
                    </p>
                </div>

                <DataGrid columns={employeeColumns} data={sampleEmployees} page={page} pageSize={5} onPageChange={setPage} />
            </div>;
  }
}`,...M.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Use the "Columns" menu to pin columns to the left (ID and Name are
                        pinnable)
                    </p>
                </div>

                <DataGrid columns={employeeColumns} data={sampleEmployees} page={page} pageSize={5} onPageChange={setPage} />
            </div>;
  }
}`,...R.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Use the "Columns" menu to show/hide columns
                    </p>
                </div>

                <DataGrid columns={employeeColumns} data={sampleEmployees} page={page} pageSize={5} onPageChange={setPage} />
            </div>;
  }
}`,...W.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState(sampleEmployees);
    return <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Click on the "Name" column cells to edit them (editable columns are
                        configured)
                    </p>
                </div>

                <DataGrid columns={employeeColumns} data={data} page={page} pageSize={5} onPageChange={setPage} onCellEdit={(row, key, value) => {
        setData(prev => prev.map(item => item.id === (row as Employee).id ? {
          ...item,
          [key]: value
        } : item));
      }} />
            </div>;
  }
}`,...L.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    // Generate more data for virtual scrolling demo
    const largeDataset = Array.from({
      length: 100
    }, (_, i) => ({
      ...sampleEmployees[i % sampleEmployees.length],
      id: i + 1
    }));
    return <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Virtual scrolling enabled for 100+ rows. Scroll through the data grid
                        to see the performance
                    </p>
                </div>

                <DataGrid columns={employeeColumns} data={largeDataset} virtualScrolling maxHeight="500px" />
            </div>;
  }
}`,...q.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    return <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Click the "Export CSV" button in the toolbar to download the data as CSV
                    </p>
                </div>

                <DataGrid columns={employeeColumns} data={sampleEmployees} page={page} pageSize={5} onPageChange={setPage} />
            </div>;
  }
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const [data, setData] = useState(sampleEmployees);
    return <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                        Full-Featured Data Grid
                    </h3>
                    <ul className="text-sm text-text-secondary space-y-1">
                        <li>✓ Sortable columns (click headers)</li>
                        <li>✓ Filterable columns (filter icons)</li>
                        <li>✓ Resizable columns (drag borders)</li>
                        <li>✓ Pinnable columns (Columns menu)</li>
                        <li>✓ Column visibility (Columns menu)</li>
                        <li>✓ Row grouping (Group by dropdown)</li>
                        <li>✓ Cell editing (click Name cells)</li>
                        <li>✓ Row selection (checkboxes)</li>
                        <li>✓ CSV export (Export button)</li>
                        <li>✓ Pagination</li>
                    </ul>
                </div>

                <DataGrid columns={employeeColumns} data={data} selectable page={page} pageSize={5} onPageChange={setPage} onCellEdit={(row, key, value) => {
        setData(prev => prev.map(item => item.id === (row as Employee).id ? {
          ...item,
          [key]: value
        } : item));
      }} />
            </div>;
  }
}`,...F.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const customColumns: DataGridColumn<Employee>[] = [{
      key: "name",
      header: "Employee",
      width: 220,
      sortable: true,
      filterable: true,
      resizable: true,
      pinnable: true,
      render: (value: string, row: Employee) => <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-accent-blue/10 text-accent-blue flex items-center justify-center font-semibold text-sm">
                            {value.split(" ").map(n => n[0]).join("")}
                        </div>
                        <div>
                            <div className="font-medium text-text-primary">{value}</div>
                            <div className="text-xs text-text-tertiary">{row.email}</div>
                        </div>
                    </div>
    }, {
      key: "department",
      header: "Department",
      width: 140,
      sortable: true,
      groupable: true
    }, {
      key: "role",
      header: "Role",
      width: 160,
      sortable: true
    }, {
      key: "salary",
      header: "Annual Salary",
      width: 140,
      sortable: true,
      render: (value: number) => <div className="text-right">
                        <div className="font-semibold text-text-primary">
                            \${value.toLocaleString()}
                        </div>
                        <div className="text-xs text-text-tertiary">
                            \${Math.round(value / 12).toLocaleString()}/mo
                        </div>
                    </div>
    }, {
      key: "status",
      header: "Status",
      width: 120,
      sortable: true,
      render: (value: Employee["status"]) => {
        const config = {
          active: {
            variant: "success" as const,
            label: "Active",
            dot: true
          },
          inactive: {
            variant: "error" as const,
            label: "Inactive",
            dot: true
          },
          "on-leave": {
            variant: "warning" as const,
            label: "On Leave",
            dot: true
          }
        };
        const {
          variant,
          label,
          dot
        } = config[value];
        return <Badge variant={variant} size="sm" dot={dot}>
                            {label}
                        </Badge>;
      }
    }];
    return <div className="space-y-4">
                <div className="p-4 bg-surface-secondary rounded-xl">
                    <p className="text-sm text-text-secondary">
                        Custom cell rendering with avatars, formatted values, and rich content
                    </p>
                </div>

                <DataGrid columns={customColumns} data={sampleEmployees} page={page} pageSize={5} onPageChange={setPage} />
            </div>;
  }
}`,...H.parameters?.docs?.source}}};const $e=["Default","WithSelection","CompactDensity","WithSorting","WithFiltering","WithGrouping","WithResizableColumns","WithPinnedColumns","WithColumnVisibility","WithCellEditing","VirtualScrolling","WithExport","FullFeatured","CustomRendering"];export{z as CompactDensity,H as CustomRendering,P as Default,F as FullFeatured,q as VirtualScrolling,L as WithCellEditing,W as WithColumnVisibility,A as WithExport,V as WithFiltering,T as WithGrouping,R as WithPinnedColumns,M as WithResizableColumns,E as WithSelection,G as WithSorting,$e as __namedExportsOrder,Be as default};
