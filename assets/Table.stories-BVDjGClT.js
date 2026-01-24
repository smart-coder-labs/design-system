import{j as v}from"./jsx-runtime-u17CrQMm.js";import{T as x}from"./Table-CLIi3vJZ.js";import{T as P}from"./Tag-COlKtt7X.js";import{r as D}from"./iframe-B9hmpDEG.js";import"./utils-CDN07tui.js";import"./arrow-up-down-DsP2HUws.js";import"./createLucideIcon-Ct5Zk_dD.js";import"./proxy-Dckdfu8t.js";import"./chevron-left-DuU8Ie35.js";import"./chevron-right-CRIvc0JP.js";import"./check-83PbD5O-.js";import"./x-BlxxFCad.js";import"./preload-helper-PPVm8Dsz.js";const M={title:"Data Display/Table",component:x,tags:[],argTypes:{striped:{control:"boolean"},hoverable:{control:"boolean"},selectable:{control:"boolean"},density:{control:"select",options:["comfortable","compact"]}}},a=[{id:1,name:"John Doe",email:"john@example.com",role:"Admin",status:"Active"},{id:2,name:"Jane Smith",email:"jane@example.com",role:"User",status:"Active"},{id:3,name:"Bob Johnson",email:"bob@example.com",role:"User",status:"Inactive"},{id:4,name:"Alice Williams",email:"alice@example.com",role:"Manager",status:"Active"},{id:5,name:"Charlie Brown",email:"charlie@example.com",role:"User",status:"Pending"},{id:6,name:"Diana Prince",email:"diana@example.com",role:"Admin",status:"Active"},{id:7,name:"Eve Anderson",email:"eve@example.com",role:"User",status:"Active"},{id:8,name:"Frank Miller",email:"frank@example.com",role:"Manager",status:"Inactive"},{id:9,name:"Grace Lee",email:"grace@example.com",role:"User",status:"Active"},{id:10,name:"Henry Wilson",email:"henry@example.com",role:"User",status:"Pending"},{id:11,name:"Ivy Chen",email:"ivy@example.com",role:"Admin",status:"Active"},{id:12,name:"Jack Ryan",email:"jack@example.com",role:"User",status:"Active"}],t=[{key:"id",header:"ID",width:"80px",sortable:!0},{key:"name",header:"Name",sortable:!0},{key:"email",header:"Email",sortable:!0},{key:"role",header:"Role",sortable:!0},{key:"status",header:"Status",sortable:!0,render:e=>{const r=e==="Active"?"success":e==="Inactive"?"error":"warning";return v.jsx(P,{label:e,variant:r,size:"sm"})}}],i={args:{columns:t,data:a}},d={args:{columns:t,data:a,striped:!0}},p={args:{columns:t,data:a,density:"compact"}},u={args:{columns:t,data:a,hoverable:!1}},g={args:{columns:t,data:a,selectable:!0}},b={args:{columns:t,data:a},render:()=>{const[e,r]=D.useState(1);return v.jsx(x,{columns:t,data:a,page:e,pageSize:5,onPageChange:r})}},h={args:{columns:t,data:a},render:()=>{const[e,r]=D.useState(a),f=(s,n)=>{const o=[...e].sort((c,y)=>{const l=c[s],m=y[s];return l<m?n==="asc"?-1:1:l>m?n==="asc"?1:-1:0});r(o)};return v.jsx(x,{columns:t,data:e,onSortChange:f})}},S={args:{columns:t,data:a},render:()=>{const[e,r]=D.useState(a),[f,s]=D.useState(1),n=(o,c)=>{const y=[...e].sort((l,m)=>{const V=l[o],k=m[o];return V<k?c==="asc"?-1:1:V>k?c==="asc"?1:-1:0});r(y)};return v.jsx(x,{columns:t,data:e,selectable:!0,striped:!0,hoverable:!0,page:f,pageSize:5,onPageChange:s,onSortChange:n})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    striped: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    density: 'compact'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    hoverable: false
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData,
    selectable: true
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData
  },
  render: () => {
    const [page, setPage] = useState(1);
    return <Table columns={columns} data={sampleData} page={page} pageSize={5} onPageChange={setPage} />;
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData
  },
  render: () => {
    const [data, setData] = useState(sampleData);
    const handleSort = (key: keyof User, direction: 'asc' | 'desc') => {
      const sorted = [...data].sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];
        if (aVal < bVal) return direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return direction === 'asc' ? 1 : -1;
        return 0;
      });
      setData(sorted);
    };
    return <Table columns={columns} data={data} onSortChange={handleSort} />;
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    columns,
    data: sampleData
  },
  render: () => {
    const [data, setData] = useState(sampleData);
    const [page, setPage] = useState(1);
    const handleSort = (key: keyof User, direction: 'asc' | 'desc') => {
      const sorted = [...data].sort((a, b) => {
        const aVal = a[key];
        const bVal = b[key];
        if (aVal < bVal) return direction === 'asc' ? -1 : 1;
        if (aVal > bVal) return direction === 'asc' ? 1 : -1;
        return 0;
      });
      setData(sorted);
    };
    return <Table columns={columns} data={data} selectable striped hoverable page={page} pageSize={5} onPageChange={setPage} onSortChange={handleSort} />;
  }
}`,...S.parameters?.docs?.source}}};const R=["Default","Striped","Compact","WithoutHover","Selectable","WithPagination","WithSorting","FullFeatured"];export{p as Compact,i as Default,S as FullFeatured,g as Selectable,d as Striped,b as WithPagination,h as WithSorting,u as WithoutHover,R as __namedExportsOrder,M as default};
