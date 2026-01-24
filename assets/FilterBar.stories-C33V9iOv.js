import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-FxOJXbvx.js";import{B as T}from"./Button-C6s9DX-s.js";import{S as U}from"./SearchInput-DivBzzb6.js";import{F as q}from"./Select-DgAaF9Be.js";import{F}from"./funnel-HT5GQMQI.js";import{X as N}from"./x-dbi_dvs5.js";import{T as M}from"./tag-DxhVt0A4.js";import{S as V}from"./star-sNISUFfS.js";import{U as R}from"./users-Dtg9Vwag.js";import{M as D}from"./map-pin-gbK3vx9X.js";import{C as G}from"./calendar-Y_EsqgfH.js";import"./preload-helper-PPVm8Dsz.js";import"./proxy-PznluMrK.js";import"./utils-CDN07tui.js";import"./Spinner-CuE14keh.js";import"./Label-BwNaakGx.js";import"./Text-Dhy74_-M.js";import"./search-CE3Kdywg.js";import"./createLucideIcon-DJ7P2U_s.js";import"./index-BNHizxPa.js";import"./index-C4vxKodI.js";import"./index-DtfuD3r8.js";import"./chevron-down-CcY9uDiU.js";import"./check-XCcrJdEL.js";const n=({groups:s,activeFilters:r=[],onFilterChange:o,onClearAll:S,searchPlaceholder:j="Search...",showSearch:w=!0,showFilterCount:A=!0,className:C=""})=>{const[I,y]=u.useState(""),$=(t,l)=>{const a=s.find(c=>c.id===t);if(!a||!a.options)return;let i=[...r];if(a.type==="multiselect")i=i.filter(d=>d.groupId!==t),(Array.isArray(l)?l:[l]).forEach(d=>{const p=a.options?.find(E=>E.value===d);p&&i.push({groupId:t,optionId:p.id,label:p.label,value:p.value})});else{i=i.filter(d=>d.groupId!==t);const c=a.options?.find(d=>d.value===l);c&&i.push({groupId:t,optionId:c.id,label:c.label,value:c.value})}o?.(i)},k=t=>{const l=r.filter(a=>!(a.groupId===t.groupId&&a.optionId===t.optionId));o?.(l)},P=()=>{o?.([]),S?.(),y("")},B=t=>{const l=s.find(i=>i.id===t),a=r.filter(i=>i.groupId===t);if(!(!l||a.length===0))return l.type==="multiselect"?a.map(i=>i.value):a[0]?.value};return e.jsxs("div",{className:`bg-surface-primary border border-border-primary rounded-xl p-4 ${C}`,children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[w&&e.jsx("div",{className:"flex-1 min-w-[200px]",children:e.jsx(U,{value:I,onChange:y,placeholder:j})}),s.map(t=>{if(t.type==="custom")return e.jsx("div",{children:t.customContent},t.id);const l=t.options?.map(a=>({id:a.id,label:a.label,value:a.value,count:a.count}))||[];return e.jsx(q,{label:t.label,options:l,value:B(t.id),onChange:a=>$(t.id,a),icon:t.icon||e.jsx(F,{className:"w-4 h-4"}),multiselect:t.type==="multiselect"},t.id)}),A&&r.length>0&&e.jsxs("div",{className:"flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-secondary text-text-secondary text-sm",children:[e.jsx(F,{className:"w-4 h-4"}),e.jsxs("span",{children:[r.length," active"]})]}),r.length>0&&e.jsx(T,{variant:"ghost",size:"sm",onClick:P,leftIcon:e.jsx(N,{className:"w-4 h-4"}),children:"Clear all"})]}),r.length>0&&e.jsx("div",{className:"flex flex-wrap gap-2 mt-4 pt-4 border-t border-border-primary",children:r.map((t,l)=>e.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-blue/10 text-accent-blue text-sm",children:[e.jsx("span",{className:"font-medium",children:t.label}),e.jsx("button",{onClick:()=>k(t),className:"hover:bg-accent-blue/20 rounded-full p-0.5 transition-colors",children:e.jsx(N,{className:"w-3.5 h-3.5"})})]},`${t.groupId}-${t.optionId}-${l}`))})]})};n.__docgenInfo={description:"",methods:[],displayName:"FilterBar",props:{groups:{required:!0,tsType:{name:"Array",elements:[{name:"FilterGroup"}],raw:"FilterGroup[]"},description:""},activeFilters:{required:!1,tsType:{name:"Array",elements:[{name:"ActiveFilter"}],raw:"ActiveFilter[]"},description:"",defaultValue:{value:"[]",computed:!1}},onFilterChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(filters: ActiveFilter[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ActiveFilter"}],raw:"ActiveFilter[]"},name:"filters"}],return:{name:"void"}}},description:""},onClearAll:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search...'",computed:!1}},showSearch:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showFilterCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};const ve={title:"Components/FilterBar",component:n,parameters:{layout:"padded"},tags:[]},f=[{id:"category",label:"Category",type:"multiselect",icon:e.jsx(M,{className:"w-4 h-4"}),options:[{id:"electronics",label:"Electronics",value:"electronics",count:245},{id:"clothing",label:"Clothing",value:"clothing",count:189},{id:"books",label:"Books",value:"books",count:432},{id:"home",label:"Home & Garden",value:"home",count:156},{id:"sports",label:"Sports",value:"sports",count:98}]},{id:"price",label:"Price Range",type:"select",options:[{id:"under-25",label:"Under $25",value:"0-25"},{id:"25-50",label:"$25 - $50",value:"25-50"},{id:"50-100",label:"$50 - $100",value:"50-100"},{id:"100-plus",label:"$100+",value:"100+"}]},{id:"rating",label:"Rating",type:"select",icon:e.jsx(V,{className:"w-4 h-4"}),options:[{id:"4-plus",label:"4+ Stars",value:"4+",count:567},{id:"3-plus",label:"3+ Stars",value:"3+",count:892},{id:"2-plus",label:"2+ Stars",value:"2+",count:1024}]}],L=[{id:"status",label:"Status",type:"multiselect",options:[{id:"active",label:"Active",value:"active",count:1234},{id:"inactive",label:"Inactive",value:"inactive",count:456},{id:"pending",label:"Pending",value:"pending",count:89}]},{id:"role",label:"Role",type:"multiselect",icon:e.jsx(R,{className:"w-4 h-4"}),options:[{id:"admin",label:"Admin",value:"admin",count:12},{id:"editor",label:"Editor",value:"editor",count:45},{id:"viewer",label:"Viewer",value:"viewer",count:789}]},{id:"location",label:"Location",type:"select",icon:e.jsx(D,{className:"w-4 h-4"}),options:[{id:"us",label:"United States",value:"us"},{id:"uk",label:"United Kingdom",value:"uk"},{id:"ca",label:"Canada",value:"ca"},{id:"au",label:"Australia",value:"au"}]},{id:"date",label:"Date Range",type:"select",icon:e.jsx(G,{className:"w-4 h-4"}),options:[{id:"today",label:"Today",value:"today"},{id:"week",label:"Last 7 days",value:"week"},{id:"month",label:"Last 30 days",value:"month"},{id:"year",label:"Last year",value:"year"}]}],m={render:()=>{const[s,r]=u.useState([]);return e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{groups:f,activeFilters:s,onFilterChange:r,searchPlaceholder:"Search products..."}),e.jsx("div",{className:"p-4 bg-surface-secondary rounded-lg",children:e.jsxs("p",{className:"text-sm text-text-secondary",children:["Active filters: ",s.length===0?"None":s.map(o=>o.label).join(", ")]})})]})}},v={render:()=>{const[s,r]=u.useState([{groupId:"category",optionId:"electronics",label:"Electronics",value:"electronics"},{groupId:"category",optionId:"books",label:"Books",value:"books"},{groupId:"price",optionId:"25-50",label:"$25 - $50",value:"25-50"}]);return e.jsx(n,{groups:f,activeFilters:s,onFilterChange:r,searchPlaceholder:"Search products..."})}},h={render:()=>{const[s,r]=u.useState([]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold text-text-primary mb-2",children:"User Management"}),e.jsx("p",{className:"text-sm text-text-secondary",children:"Filter and search through your user base"})]}),e.jsx(n,{groups:L,activeFilters:s,onFilterChange:r,searchPlaceholder:"Search users by name or email..."}),e.jsx("div",{className:"bg-surface-primary border border-border-primary rounded-xl p-6",children:e.jsx("p",{className:"text-sm text-text-secondary",children:s.length===0?"Showing all users":`Filtered by: ${s.map(o=>o.label).join(", ")}`})})]})}},b={render:()=>{const[s,r]=u.useState([]);return e.jsx(n,{groups:f,activeFilters:s,onFilterChange:r,showSearch:!1})}},x={render:()=>{const[s,r]=u.useState([]),o=[{id:"status",label:"Status",type:"select",options:[{id:"all",label:"All",value:"all"},{id:"active",label:"Active",value:"active"},{id:"archived",label:"Archived",value:"archived"}]},{id:"sort",label:"Sort by",type:"select",options:[{id:"newest",label:"Newest first",value:"newest"},{id:"oldest",label:"Oldest first",value:"oldest"},{id:"name",label:"Name (A-Z)",value:"name"}]}];return e.jsx(n,{groups:o,activeFilters:s,onFilterChange:r,showSearch:!1,showFilterCount:!1})}},g={render:()=>{const[s,r]=u.useState([{groupId:"category",optionId:"electronics",label:"Electronics",value:"electronics"},{groupId:"rating",optionId:"4-plus",label:"4+ Stars",value:"4+"}]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary",children:"Products"}),e.jsx("p",{className:"text-sm text-text-secondary mt-1",children:"Manage your product catalog"})]}),e.jsx("div",{className:"text-sm text-text-tertiary",children:"1,234 products"})]}),e.jsx(n,{groups:f,activeFilters:s,onFilterChange:r,searchPlaceholder:"Search by name, SKU, or description..."}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[1,2,3,4,5,6].map(o=>e.jsxs("div",{className:"bg-surface-primary border border-border-primary rounded-xl p-4",children:[e.jsx("div",{className:"aspect-square bg-surface-secondary rounded-lg mb-3"}),e.jsxs("h4",{className:"font-semibold text-text-primary mb-1",children:["Product ",o]}),e.jsx("p",{className:"text-sm text-text-secondary",children:"$99.99"})]},o))})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<ActiveFilter[]>([]);
    return <div className="space-y-4">
                <FilterBar groups={productFilters} activeFilters={filters} onFilterChange={setFilters} searchPlaceholder="Search products..." />
                <div className="p-4 bg-surface-secondary rounded-lg">
                    <p className="text-sm text-text-secondary">
                        Active filters: {filters.length === 0 ? 'None' : filters.map(f => f.label).join(', ')}
                    </p>
                </div>
            </div>;
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<ActiveFilter[]>([{
      groupId: 'category',
      optionId: 'electronics',
      label: 'Electronics',
      value: 'electronics'
    }, {
      groupId: 'category',
      optionId: 'books',
      label: 'Books',
      value: 'books'
    }, {
      groupId: 'price',
      optionId: '25-50',
      label: '$25 - $50',
      value: '25-50'
    }]);
    return <FilterBar groups={productFilters} activeFilters={filters} onFilterChange={setFilters} searchPlaceholder="Search products..." />;
  }
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<ActiveFilter[]>([]);
    return <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-semibold text-text-primary mb-2">User Management</h3>
                    <p className="text-sm text-text-secondary">Filter and search through your user base</p>
                </div>
                <FilterBar groups={userFilters} activeFilters={filters} onFilterChange={setFilters} searchPlaceholder="Search users by name or email..." />
                <div className="bg-surface-primary border border-border-primary rounded-xl p-6">
                    <p className="text-sm text-text-secondary">
                        {filters.length === 0 ? 'Showing all users' : \`Filtered by: \${filters.map(f => f.label).join(', ')}\`}
                    </p>
                </div>
            </div>;
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<ActiveFilter[]>([]);
    return <FilterBar groups={productFilters} activeFilters={filters} onFilterChange={setFilters} showSearch={false} />;
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<ActiveFilter[]>([]);
    const compactFilters: FilterGroup[] = [{
      id: 'status',
      label: 'Status',
      type: 'select',
      options: [{
        id: 'all',
        label: 'All',
        value: 'all'
      }, {
        id: 'active',
        label: 'Active',
        value: 'active'
      }, {
        id: 'archived',
        label: 'Archived',
        value: 'archived'
      }]
    }, {
      id: 'sort',
      label: 'Sort by',
      type: 'select',
      options: [{
        id: 'newest',
        label: 'Newest first',
        value: 'newest'
      }, {
        id: 'oldest',
        label: 'Oldest first',
        value: 'oldest'
      }, {
        id: 'name',
        label: 'Name (A-Z)',
        value: 'name'
      }]
    }];
    return <FilterBar groups={compactFilters} activeFilters={filters} onFilterChange={setFilters} showSearch={false} showFilterCount={false} />;
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<ActiveFilter[]>([{
      groupId: 'category',
      optionId: 'electronics',
      label: 'Electronics',
      value: 'electronics'
    }, {
      groupId: 'rating',
      optionId: '4-plus',
      label: '4+ Stars',
      value: '4+'
    }]);
    return <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary">Products</h2>
                        <p className="text-sm text-text-secondary mt-1">Manage your product catalog</p>
                    </div>
                    <div className="text-sm text-text-tertiary">
                        1,234 products
                    </div>
                </div>

                <FilterBar groups={productFilters} activeFilters={filters} onFilterChange={setFilters} searchPlaceholder="Search by name, SKU, or description..." />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map(i => <div key={i} className="bg-surface-primary border border-border-primary rounded-xl p-4">
                            <div className="aspect-square bg-surface-secondary rounded-lg mb-3" />
                            <h4 className="font-semibold text-text-primary mb-1">Product {i}</h4>
                            <p className="text-sm text-text-secondary">$99.99</p>
                        </div>)}
                </div>
            </div>;
  }
}`,...g.parameters?.docs?.source}}};const he=["Default","WithActiveFilters","UserManagement","WithoutSearch","Compact","ECommerceDashboard"];export{x as Compact,m as Default,g as ECommerceDashboard,h as UserManagement,v as WithActiveFilters,b as WithoutSearch,he as __namedExportsOrder,ve as default};
