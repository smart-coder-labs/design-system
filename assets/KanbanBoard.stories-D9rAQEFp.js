import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-Dan5ncgG.js";import{M as L,d as W,a as O,b as q,f as E,c as re}from"./Modal-BdssI1oh.js";import{I as ae,T as ne}from"./Input-DWo3NzoY.js";import{S as oe,a as ie,b as se,c as de,f as b}from"./Select-B_PnNQve.js";import{B as P}from"./Button-DwkrxhSZ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BYtYiog6.js";import"./index-DLahyr3v.js";import"./index-Q4GMJ2Et.js";import"./proxy-DCTGQFKY.js";import"./resolve-elements-juiWZL7b.js";import"./utils-CDN07tui.js";import"./chevron-down-bcZdxFZD.js";import"./createLucideIcon-jCLSnv7o.js";import"./check-SmOBS8Tu.js";const V=({columns:d,onCardMove:l,onCardClick:T,onAddCard:g,className:H="",variant:x="default",showCardCount:J=!0,showColumnLimit:G=!1})=>{const[A,$]=u.useState(d),[z,B]=u.useState(null),[Q,N]=u.useState(null),[a,R]=u.useState(null),[v,f]=u.useState(null),[o,h]=u.useState({title:"",description:"",priority:"medium"}),U=(t,n)=>{B({card:t,columnId:n})},_=(t,n)=>{t.preventDefault(),N(n)},Y=()=>{N(null)},X=(t,n,c)=>{if(t.preventDefault(),N(null),!z)return;const{card:r,columnId:C}=z;if(C===n){B(null);return}const i=A.map(s=>{if(s.id===C)return{...s,cards:s.cards.filter(m=>m.id!==r.id)};if(s.id===n){const m=[...s.cards],y=m.length;return m.splice(y,0,r),{...s,cards:m}}return s});if($(i),B(null),l){const m=i.find(y=>y.id===n)?.cards.findIndex(y=>y.id===r.id)??0;l(r.id,C,n,m)}},M=t=>{switch(t){case"urgent":return"#FF3B30";case"high":return"#FF9500";case"medium":return"#007AFF";case"low":return"#34C759";default:return"#86868B"}},K=t=>t.split(" ").map(n=>n[0]).join("").toUpperCase().slice(0,2),Z=t=>{R(t),T?.(t)},ee=t=>{f(t),h({title:"",description:"",priority:"medium"})},te=()=>{if(!o.title.trim()||!v)return;const t={title:o.title,description:o.description||void 0,priority:o.priority};if(g)g(v,t);else{const n=A.map(c=>c.id===v?{...c,cards:[...c.cards,{...t,id:`card-${Date.now()}`}]}:c);$(n)}f(null),h({title:"",description:"",priority:"medium"})};return e.jsxs("div",{className:`kanban-board ${H}`,style:{display:"flex",gap:"16px",overflowX:"auto",padding:"16px",minHeight:"600px",backgroundColor:"var(--color-background-secondary)",borderRadius:"12px"},children:[A.map(t=>{const n=t.limit&&t.cards.length>t.limit,c=Q===t.id;return e.jsxs("div",{className:"kanban-column",onDragOver:r=>_(r,t.id),onDragLeave:Y,onDrop:r=>X(r,t.id),style:{flex:"0 0 320px",display:"flex",flexDirection:"column",backgroundColor:c?"var(--color-accent-blue-tint)":"var(--color-background-primary)",borderRadius:"8px",border:`2px solid ${c?"var(--color-accent-blue)":"var(--color-border-primary)"}`,transition:"all 0.3s var(--ease-apple)",maxHeight:"100%"},children:[e.jsxs("div",{style:{padding:"16px",borderBottom:"1px solid var(--color-border-primary)",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[t.color&&e.jsx("div",{style:{width:"8px",height:"8px",borderRadius:"9999px",backgroundColor:t.color}}),e.jsx("h3",{style:{margin:0,fontSize:"15px",fontWeight:"600",color:"var(--color-text-primary)"},children:t.title})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[J&&e.jsxs("span",{style:{fontSize:"13px",color:"var(--color-text-tertiary)",fontWeight:"500",backgroundColor:"var(--color-background-secondary)",padding:"4px 8px",borderRadius:"9999px"},children:[t.cards.length,G&&t.limit&&` / ${t.limit}`]}),n&&e.jsx("span",{style:{fontSize:"12px",color:"var(--color-status-error)",fontWeight:"500"},children:"⚠️"})]})]}),e.jsx("div",{style:{flex:1,overflowY:"auto",padding:"12px",display:"flex",flexDirection:"column",gap:"12px"},children:t.cards.map((r,C)=>e.jsxs("div",{draggable:!0,onDragStart:()=>U(r,t.id),onClick:()=>Z(r),className:"kanban-card",style:{backgroundColor:"var(--color-surface-primary)",borderRadius:"8px",padding:x==="compact"?"12px":"16px",border:"1px solid var(--color-border-primary)",cursor:"pointer",transition:"all 0.2s var(--ease-apple)",boxShadow:"var(--shadow-sm)"},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-2px)",i.currentTarget.style.boxShadow="var(--shadow-md)"},onMouseLeave:i=>{i.currentTarget.style.transform="translateY(0)",i.currentTarget.style.boxShadow="var(--shadow-sm)"},children:[r.priority&&e.jsx("div",{style:{width:"100%",height:"3px",backgroundColor:M(r.priority),borderRadius:"9999px",marginBottom:"12px"}}),e.jsx("h4",{style:{margin:0,fontSize:x==="compact"?"13px":"15px",fontWeight:"600",color:"var(--color-text-primary)",marginBottom:r.description?"8px":0},children:r.title}),r.description&&x!=="compact"&&e.jsx("p",{style:{margin:0,fontSize:"13px",color:"var(--color-text-secondary)",lineHeight:"1.5",marginBottom:"12px"},children:r.description}),r.tags&&r.tags.length>0&&x==="detailed"&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",marginBottom:"12px"},children:r.tags.map((i,s)=>e.jsx("span",{style:{fontSize:"12px",color:"var(--color-text-secondary)",backgroundColor:"var(--color-background-secondary)",padding:"4px 8px",borderRadius:"4px",fontWeight:"500"},children:i},s))}),e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:"12px",paddingTop:"12px",borderTop:"1px solid var(--color-border-secondary)"},children:[r.assignee&&e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{style:{width:"24px",height:"24px",borderRadius:"9999px",backgroundColor:r.assignee.avatar?"transparent":"var(--color-accent-blue)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",fontWeight:"600",color:"#FFFFFF",backgroundImage:r.assignee.avatar?`url(${r.assignee.avatar})`:void 0,backgroundSize:"cover",backgroundPosition:"center"},children:!r.assignee.avatar&&K(r.assignee.name)}),x==="detailed"&&e.jsx("span",{style:{fontSize:"13px",color:"var(--color-text-secondary)"},children:r.assignee.name})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[r.dueDate&&e.jsxs("span",{style:{fontSize:"12px",color:"var(--color-text-tertiary)",display:"flex",alignItems:"center",gap:"4px"},children:["📅 ",r.dueDate]}),r.attachments&&r.attachments>0&&e.jsxs("span",{style:{fontSize:"12px",color:"var(--color-text-tertiary)",display:"flex",alignItems:"center",gap:"4px"},children:["📎 ",r.attachments]}),r.comments&&r.comments>0&&e.jsxs("span",{style:{fontSize:"12px",color:"var(--color-text-tertiary)",display:"flex",alignItems:"center",gap:"4px"},children:["💬 ",r.comments]})]})]})]},r.id))}),g&&e.jsx("button",{onClick:()=>ee(t.id),style:{margin:"12px",padding:"12px",backgroundColor:"transparent",border:"2px dashed var(--color-border-primary)",borderRadius:"8px",color:"var(--color-text-tertiary)",fontSize:"13px",fontWeight:"500",cursor:"pointer",transition:"all 0.2s var(--ease-apple)"},onMouseEnter:r=>{r.currentTarget.style.borderColor="var(--color-accent-blue)",r.currentTarget.style.color="var(--color-accent-blue)",r.currentTarget.style.backgroundColor="var(--color-accent-blue-tint)"},onMouseLeave:r=>{r.currentTarget.style.borderColor="var(--color-border-primary)",r.currentTarget.style.color="var(--color-text-tertiary)",r.currentTarget.style.backgroundColor="transparent"},children:"+ Add Card"})]},t.id)}),e.jsxs(L,{open:!!a,onOpenChange:t=>!t&&R(null),size:"lg",children:[e.jsx(W,{}),e.jsxs(O,{children:[e.jsx(q,{children:a?.title}),a?.priority&&e.jsx("div",{style:{marginTop:"16px",width:"100%",height:"4px",backgroundColor:M(a.priority),borderRadius:"9999px",marginBottom:"24px"}})]}),e.jsxs(E,{children:[a?.description&&e.jsx("p",{className:"text-base text-text-secondary leading-relaxed mb-4",children:a.description}),a?.tags&&a.tags.length>0&&e.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:a.tags.map((t,n)=>e.jsx("span",{className:"text-sm text-text-secondary bg-background-secondary px-3 py-1 rounded-md font-medium",children:t},n))}),e.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[a?.assignee&&e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-text-tertiary mb-2",children:"Assignee"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-full bg-accent-blue flex items-center justify-center text-sm font-semibold text-white",children:K(a.assignee.name)}),e.jsx("span",{className:"text-base text-text-primary",children:a.assignee.name})]})]}),a?.dueDate&&e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-text-tertiary mb-2",children:"Due Date"}),e.jsxs("div",{className:"text-base text-text-primary",children:["📅 ",a.dueDate]})]}),a?.priority&&e.jsxs("div",{children:[e.jsx("div",{className:"text-sm text-text-tertiary mb-2",children:"Priority"}),e.jsx("div",{className:"text-base font-semibold capitalize",style:{color:M(a.priority)},children:a.priority})]})]}),e.jsxs("div",{className:"flex gap-4 mt-6",children:[a?.attachments&&a.attachments>0&&e.jsxs("div",{className:"text-sm text-text-secondary",children:["📎 ",a.attachments," attachments"]}),a?.comments&&a.comments>0&&e.jsxs("div",{className:"text-sm text-text-secondary",children:["💬 ",a.comments," comments"]})]})]})]}),e.jsxs(L,{open:!!v,onOpenChange:t=>!t&&f(null),size:"md",children:[e.jsx(W,{}),e.jsx(O,{children:e.jsx(q,{children:"Add New Card"})}),e.jsx(E,{children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(ae,{label:"Title",placeholder:"Enter card title",value:o.title,onChange:t=>h({...o,title:t.target.value}),required:!0}),e.jsx(ne,{placeholder:"Enter card description (optional)",value:o.description,onChange:t=>h({...o,description:t.target.value}),rows:4}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-sm font-medium text-text-primary mb-2",children:"Priority"}),e.jsxs(oe,{value:o.priority,onValueChange:t=>h({...o,priority:t}),children:[e.jsx(ie,{className:"w-full",children:e.jsx(se,{})}),e.jsxs(de,{children:[e.jsx(b,{value:"low",children:"Low"}),e.jsx(b,{value:"medium",children:"Medium"}),e.jsx(b,{value:"high",children:"High"}),e.jsx(b,{value:"urgent",children:"Urgent"})]})]})]})]})}),e.jsxs(re,{children:[e.jsx(P,{variant:"ghost",onClick:()=>f(null),children:"Cancel"}),e.jsx(P,{variant:"primary",onClick:te,disabled:!o.title.trim(),children:"Add Card"})]})]})]})};V.__docgenInfo={description:"",methods:[],displayName:"KanbanBoard",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"KanbanColumn"}],raw:"KanbanColumn[]"},description:""},onCardMove:{required:!1,tsType:{name:"signature",type:"function",raw:"(cardId: string, fromColumnId: string, toColumnId: string, newIndex: number) => void",signature:{arguments:[{type:{name:"string"},name:"cardId"},{type:{name:"string"},name:"fromColumnId"},{type:{name:"string"},name:"toColumnId"},{type:{name:"number"},name:"newIndex"}],return:{name:"void"}}},description:""},onCardClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(card: KanbanCard) => void",signature:{arguments:[{type:{name:"KanbanCard"},name:"card"}],return:{name:"void"}}},description:""},onAddCard:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnId: string, card: Omit<KanbanCard, 'id'>) => void",signature:{arguments:[{type:{name:"string"},name:"columnId"},{type:{name:"Omit",elements:[{name:"KanbanCard"},{name:"literal",value:"'id'"}],raw:"Omit<KanbanCard, 'id'>"},name:"card"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'detailed'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'detailed'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showCardCount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showColumnLimit:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const Fe={title:"Data Display/KanbanBoard",component:V,parameters:{layout:"fullscreen",docs:{description:{component:`
# Kanban Board

A premium Kanban board component with drag-and-drop functionality, perfect for project management and workflow visualization.

## Features

- 🎯 **Drag & Drop**: Smooth card movement between columns
- 🎨 **Priority Indicators**: Visual priority levels (low, medium, high, urgent)
- 👤 **Assignee Avatars**: Display team member assignments
- 🏷️ **Tags**: Categorize cards with custom tags
- 📊 **Column Limits**: Set WIP limits with visual warnings
- 📅 **Metadata**: Due dates, attachments, and comment counts
- 🎭 **Variants**: Default, compact, and detailed views
- ✨ **Premium Animations**: Smooth transitions and hover effects

## Usage

\`\`\`tsx
import { KanbanBoard } from '@/components/KanbanBoard';

const columns = [
  {
    id: 'todo',
    title: 'To Do',
    color: '#86868B',
    cards: [
      {
        id: '1',
        title: 'Design new landing page',
        priority: 'high',
        assignee: { name: 'John Doe' },
        dueDate: 'Dec 15',
      },
    ],
  },
];

<KanbanBoard
  columns={columns}
  onCardMove={(cardId, from, to, index) => console.log('Card moved')}
  onCardClick={(card) => console.log('Card clicked', card)}
  onAddCard={(columnId) => console.log('Add card to', columnId)}
/>
\`\`\`
        `}}},tags:[],argTypes:{variant:{control:"select",options:["default","compact","detailed"],description:"Visual variant of the board"},showCardCount:{control:"boolean",description:"Show card count in column headers"},showColumnLimit:{control:"boolean",description:"Show column limits in headers"}}},le=[{id:"backlog",title:"Backlog",color:"#86868B",limit:10,cards:[{id:"card-1",title:"Research competitor features",description:"Analyze top 5 competitors and document their key features",priority:"low",assignee:{name:"Sarah Chen"},tags:["research","competitive-analysis"],dueDate:"Dec 20",attachments:3,comments:2},{id:"card-2",title:"Update documentation",description:"Refresh API documentation with latest endpoints",priority:"medium",assignee:{name:"Mike Johnson"},tags:["documentation"],dueDate:"Dec 18",comments:1}]},{id:"todo",title:"To Do",color:"#007AFF",limit:5,cards:[{id:"card-3",title:"Design new landing page",description:"Create high-fidelity mockups for the new product landing page",priority:"high",assignee:{name:"Emma Wilson"},tags:["design","ui/ux"],dueDate:"Dec 15",attachments:5,comments:8},{id:"card-4",title:"Implement authentication",description:"Add OAuth 2.0 authentication with Google and GitHub",priority:"urgent",assignee:{name:"Alex Rodriguez"},tags:["backend","security"],dueDate:"Dec 12",attachments:2,comments:12},{id:"card-5",title:"Setup CI/CD pipeline",priority:"medium",assignee:{name:"David Kim"},tags:["devops"],dueDate:"Dec 16"}]},{id:"in-progress",title:"In Progress",color:"#FF9500",limit:3,cards:[{id:"card-6",title:"Build dashboard analytics",description:"Create real-time analytics dashboard with charts and metrics",priority:"high",assignee:{name:"Lisa Anderson"},tags:["frontend","analytics"],dueDate:"Dec 14",attachments:7,comments:15},{id:"card-7",title:"Optimize database queries",description:"Improve performance of slow queries identified in monitoring",priority:"urgent",assignee:{name:"Tom Harris"},tags:["backend","performance"],dueDate:"Dec 13",attachments:1,comments:6}]},{id:"review",title:"In Review",color:"#5AC8FA",limit:4,cards:[{id:"card-8",title:"Mobile responsive fixes",description:"Fix layout issues on mobile devices",priority:"medium",assignee:{name:"Rachel Green"},tags:["frontend","mobile"],dueDate:"Dec 11",comments:4}]},{id:"done",title:"Done",color:"#34C759",cards:[{id:"card-9",title:"Setup project repository",description:"Initialize Git repository with proper structure",priority:"high",assignee:{name:"Chris Martin"},tags:["setup"],dueDate:"Dec 1",comments:3},{id:"card-10",title:"Create design system",description:"Build comprehensive design system with components",priority:"high",assignee:{name:"Emma Wilson"},tags:["design","ui/ux"],dueDate:"Dec 5",attachments:12,comments:25}]}],p={args:{columns:le,showCardCount:!0,showColumnLimit:!1,variant:"default",onCardMove:(d,l,T,g)=>{console.log(`Card ${d} moved from ${l} to ${T} at index ${g}`)},onCardClick:d=>{console.log("Card clicked:",d)},onAddCard:(d,l)=>{console.log("Add card to column:",d,"Card data:",l)}}},D={args:{...p.args,variant:"compact"}},w={args:{...p.args,variant:"detailed"}},j={args:{...p.args,showColumnLimit:!0}},k={args:{columns:[{id:"todo",title:"To Do",color:"#007AFF",cards:[{id:"card-1",title:"Task 1",priority:"medium"},{id:"card-2",title:"Task 2",priority:"high"}]},{id:"doing",title:"Doing",color:"#FF9500",cards:[{id:"card-3",title:"Task 3",priority:"urgent"}]},{id:"done",title:"Done",color:"#34C759",cards:[{id:"card-4",title:"Task 4",priority:"low"}]}],showCardCount:!0,variant:"compact"}},F={args:{columns:[{id:"todo",title:"To Do",color:"#007AFF",cards:[]},{id:"in-progress",title:"In Progress",color:"#FF9500",cards:[]},{id:"done",title:"Done",color:"#34C759",cards:[]}],showCardCount:!0,onAddCard:(d,l)=>{console.log("Add card to column:",d,"Card data:",l)}}},I={args:{columns:[{id:"tasks",title:"All Tasks",color:"#007AFF",cards:[{id:"card-1",title:"Complete project proposal",description:"Write and submit the Q1 project proposal",priority:"urgent",assignee:{name:"John Doe"},tags:["proposal","q1"],dueDate:"Dec 10",attachments:3,comments:7},{id:"card-2",title:"Review team feedback",priority:"medium",assignee:{name:"Jane Smith"},dueDate:"Dec 12",comments:2}]}],variant:"detailed"}},S={args:{columns:[{id:"ideas",title:"Ideas",color:"#AF52DE",cards:[{id:"c1",title:"Brainstorm features",priority:"low"}]},{id:"backlog",title:"Backlog",color:"#86868B",cards:[{id:"c2",title:"Research task",priority:"medium"}]},{id:"todo",title:"To Do",color:"#007AFF",cards:[{id:"c3",title:"Design mockups",priority:"high"}]},{id:"in-progress",title:"In Progress",color:"#FF9500",cards:[{id:"c4",title:"Build feature",priority:"urgent"}]},{id:"review",title:"Review",color:"#5AC8FA",cards:[{id:"c5",title:"Code review",priority:"high"}]},{id:"testing",title:"Testing",color:"#FF2D55",cards:[{id:"c6",title:"QA testing",priority:"medium"}]},{id:"done",title:"Done",color:"#34C759",cards:[{id:"c7",title:"Completed task",priority:"low"}]}],variant:"compact"}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    columns: sampleColumns,
    showCardCount: true,
    showColumnLimit: false,
    variant: 'default',
    onCardMove: (cardId, from, to, index) => {
      console.log(\`Card \${cardId} moved from \${from} to \${to} at index \${index}\`);
    },
    onCardClick: card => {
      console.log('Card clicked:', card);
    },
    onAddCard: (columnId, card) => {
      console.log('Add card to column:', columnId, 'Card data:', card);
    }
  }
}`,...p.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'compact'
  }
}`,...D.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    variant: 'detailed'
  }
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showColumnLimit: true
  }
}`,...j.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'todo',
      title: 'To Do',
      color: '#007AFF',
      cards: [{
        id: 'card-1',
        title: 'Task 1',
        priority: 'medium' as const
      }, {
        id: 'card-2',
        title: 'Task 2',
        priority: 'high' as const
      }]
    }, {
      id: 'doing',
      title: 'Doing',
      color: '#FF9500',
      cards: [{
        id: 'card-3',
        title: 'Task 3',
        priority: 'urgent' as const
      }]
    }, {
      id: 'done',
      title: 'Done',
      color: '#34C759',
      cards: [{
        id: 'card-4',
        title: 'Task 4',
        priority: 'low' as const
      }]
    }],
    showCardCount: true,
    variant: 'compact'
  }
}`,...k.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'todo',
      title: 'To Do',
      color: '#007AFF',
      cards: []
    }, {
      id: 'in-progress',
      title: 'In Progress',
      color: '#FF9500',
      cards: []
    }, {
      id: 'done',
      title: 'Done',
      color: '#34C759',
      cards: []
    }],
    showCardCount: true,
    onAddCard: (columnId, card) => {
      console.log('Add card to column:', columnId, 'Card data:', card);
    }
  }
}`,...F.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'tasks',
      title: 'All Tasks',
      color: '#007AFF',
      cards: [{
        id: 'card-1',
        title: 'Complete project proposal',
        description: 'Write and submit the Q1 project proposal',
        priority: 'urgent' as const,
        assignee: {
          name: 'John Doe'
        },
        tags: ['proposal', 'q1'],
        dueDate: 'Dec 10',
        attachments: 3,
        comments: 7
      }, {
        id: 'card-2',
        title: 'Review team feedback',
        priority: 'medium' as const,
        assignee: {
          name: 'Jane Smith'
        },
        dueDate: 'Dec 12',
        comments: 2
      }]
    }],
    variant: 'detailed'
  }
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'ideas',
      title: 'Ideas',
      color: '#AF52DE',
      cards: [{
        id: 'c1',
        title: 'Brainstorm features',
        priority: 'low' as const
      }]
    }, {
      id: 'backlog',
      title: 'Backlog',
      color: '#86868B',
      cards: [{
        id: 'c2',
        title: 'Research task',
        priority: 'medium' as const
      }]
    }, {
      id: 'todo',
      title: 'To Do',
      color: '#007AFF',
      cards: [{
        id: 'c3',
        title: 'Design mockups',
        priority: 'high' as const
      }]
    }, {
      id: 'in-progress',
      title: 'In Progress',
      color: '#FF9500',
      cards: [{
        id: 'c4',
        title: 'Build feature',
        priority: 'urgent' as const
      }]
    }, {
      id: 'review',
      title: 'Review',
      color: '#5AC8FA',
      cards: [{
        id: 'c5',
        title: 'Code review',
        priority: 'high' as const
      }]
    }, {
      id: 'testing',
      title: 'Testing',
      color: '#FF2D55',
      cards: [{
        id: 'c6',
        title: 'QA testing',
        priority: 'medium' as const
      }]
    }, {
      id: 'done',
      title: 'Done',
      color: '#34C759',
      cards: [{
        id: 'c7',
        title: 'Completed task',
        priority: 'low' as const
      }]
    }],
    variant: 'compact'
  }
}`,...S.parameters?.docs?.source}}};const Ie=["Default","Compact","Detailed","WithColumnLimits","MinimalBoard","EmptyBoard","SingleColumn","ManyColumns"];export{D as Compact,p as Default,w as Detailed,F as EmptyBoard,S as ManyColumns,k as MinimalBoard,I as SingleColumn,j as WithColumnLimits,Ie as __namedExportsOrder,Fe as default};
