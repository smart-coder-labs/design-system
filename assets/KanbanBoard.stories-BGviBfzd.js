import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-B_S8iqXg.js";import{t as r}from"./jsx-runtime-DaLCRA3n.js";import{n as i,t as a}from"./Input-CFg2OyIf.js";import{t as o}from"./Input-BAL2xgbx.js";import{n as s,t as c}from"./Button-B4XCQzOE.js";import{c as l,i as u,o as d,r as f,s as p,t as m}from"./Modal-CqRqaqJc.js";import{t as h}from"./Modal-D5YBdPcO.js";import{a as g,i as _,n as v,o as y,r as b}from"./Select-azhc86Ud.js";import{t as x}from"./Select-Dp-IOEVc.js";var S,C,w,T=e((()=>{S=t(n()),h(),o(),x(),c(),C=r(),w=({columns:e,onCardMove:t,onCardClick:n,onAddCard:r,className:o=``,variant:c=`default`,showCardCount:h=!0,showColumnLimit:x=!1})=>{let[w,T]=(0,S.useState)(e),[E,D]=(0,S.useState)(null),[O,k]=(0,S.useState)(null),[A,j]=(0,S.useState)(null),[M,N]=(0,S.useState)(null),[P,F]=(0,S.useState)({title:``,description:``,priority:`medium`}),I=(e,t)=>{D({card:e,columnId:t})},L=(e,t)=>{e.preventDefault(),k(t)},R=()=>{k(null)},z=(e,n,r)=>{if(e.preventDefault(),k(null),!E)return;let{card:i,columnId:a}=E;if(a===n){D(null);return}let o=w.map(e=>{if(e.id===a)return{...e,cards:e.cards.filter(e=>e.id!==i.id)};if(e.id===n){let t=[...e.cards],n=r===void 0?t.length:r;return t.splice(n,0,i),{...e,cards:t}}return e});if(T(o),D(null),t){let e=o.find(e=>e.id===n)?.cards.findIndex(e=>e.id===i.id)??0;t(i.id,a,n,e)}},B=e=>{switch(e){case`urgent`:return`#FF3B30`;case`high`:return`#FF9500`;case`medium`:return`#007AFF`;case`low`:return`#34C759`;default:return`#86868B`}},V=e=>e.split(` `).map(e=>e[0]).join(``).toUpperCase().slice(0,2),H=e=>{j(e),n?.(e)},U=e=>{N(e),F({title:``,description:``,priority:`medium`})};return(0,C.jsxs)(`div`,{className:`kanban-board ${o}`,style:{display:`flex`,gap:`16px`,overflowX:`auto`,padding:`16px`,minHeight:`600px`,backgroundColor:`var(--color-background-secondary)`,borderRadius:`12px`},children:[w.map(e=>{let t=e.limit&&e.cards.length>e.limit,n=O===e.id;return(0,C.jsxs)(`div`,{className:`kanban-column`,onDragOver:t=>L(t,e.id),onDragLeave:R,onDrop:t=>z(t,e.id),style:{flex:`0 0 320px`,display:`flex`,flexDirection:`column`,backgroundColor:n?`var(--color-accent-blue-tint)`:`var(--color-background-primary)`,borderRadius:`8px`,border:`2px solid ${n?`var(--color-accent-blue)`:`var(--color-border-primary)`}`,transition:`all 0.3s var(--ease-apple)`,maxHeight:`100%`},children:[(0,C.jsxs)(`div`,{style:{padding:`16px`,borderBottom:`1px solid var(--color-border-primary)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`8px`},children:[(0,C.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[e.color&&(0,C.jsx)(`div`,{style:{width:`8px`,height:`8px`,borderRadius:`9999px`,backgroundColor:e.color}}),(0,C.jsx)(`h3`,{style:{margin:0,fontSize:`15px`,fontWeight:`600`,color:`var(--color-text-primary)`},children:e.title})]}),(0,C.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[h&&(0,C.jsxs)(`span`,{style:{fontSize:`13px`,color:`var(--color-text-tertiary)`,fontWeight:`500`,backgroundColor:`var(--color-background-secondary)`,padding:`4px 8px`,borderRadius:`9999px`},children:[e.cards.length,x&&e.limit&&` / ${e.limit}`]}),t&&(0,C.jsx)(`span`,{style:{fontSize:`12px`,color:`var(--color-status-error)`,fontWeight:`500`},children:`⚠️`})]})]}),(0,C.jsx)(`div`,{style:{flex:1,overflowY:`auto`,padding:`12px`,display:`flex`,flexDirection:`column`,gap:`12px`},children:e.cards.map((t,n)=>(0,C.jsxs)(`div`,{draggable:!0,onDragStart:()=>I(t,e.id),onClick:()=>H(t),className:`kanban-card`,style:{backgroundColor:`var(--color-surface-primary)`,borderRadius:`8px`,padding:c===`compact`?`12px`:`16px`,border:`1px solid var(--color-border-primary)`,cursor:`pointer`,transition:`all 0.2s var(--ease-apple)`,boxShadow:`var(--shadow-sm)`},onMouseEnter:e=>{e.currentTarget.style.transform=`translateY(-2px)`,e.currentTarget.style.boxShadow=`var(--shadow-md)`},onMouseLeave:e=>{e.currentTarget.style.transform=`translateY(0)`,e.currentTarget.style.boxShadow=`var(--shadow-sm)`},children:[t.priority&&(0,C.jsx)(`div`,{style:{width:`100%`,height:`3px`,backgroundColor:B(t.priority),borderRadius:`9999px`,marginBottom:`12px`}}),(0,C.jsx)(`h4`,{style:{margin:0,fontSize:c===`compact`?`13px`:`15px`,fontWeight:`600`,color:`var(--color-text-primary)`,marginBottom:t.description?`8px`:0},children:t.title}),t.description&&c!==`compact`&&(0,C.jsx)(`p`,{style:{margin:0,fontSize:`13px`,color:`var(--color-text-secondary)`,lineHeight:`1.5`,marginBottom:`12px`},children:t.description}),t.tags&&t.tags.length>0&&c===`detailed`&&(0,C.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`8px`,marginBottom:`12px`},children:t.tags.map((e,t)=>(0,C.jsx)(`span`,{style:{fontSize:`12px`,color:`var(--color-text-secondary)`,backgroundColor:`var(--color-background-secondary)`,padding:`4px 8px`,borderRadius:`4px`,fontWeight:`500`},children:e},t))}),(0,C.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,marginTop:`12px`,paddingTop:`12px`,borderTop:`1px solid var(--color-border-secondary)`},children:[t.assignee&&(0,C.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`8px`},children:[(0,C.jsx)(`div`,{style:{width:`24px`,height:`24px`,borderRadius:`9999px`,backgroundColor:t.assignee.avatar?`transparent`:`var(--color-accent-blue)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`12px`,fontWeight:`600`,color:`#FFFFFF`,backgroundImage:t.assignee.avatar?`url(${t.assignee.avatar})`:void 0,backgroundSize:`cover`,backgroundPosition:`center`},children:!t.assignee.avatar&&V(t.assignee.name)}),c===`detailed`&&(0,C.jsx)(`span`,{style:{fontSize:`13px`,color:`var(--color-text-secondary)`},children:t.assignee.name})]}),(0,C.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[t.dueDate&&(0,C.jsxs)(`span`,{style:{fontSize:`12px`,color:`var(--color-text-tertiary)`,display:`flex`,alignItems:`center`,gap:`4px`},children:[`📅 `,t.dueDate]}),t.attachments&&t.attachments>0&&(0,C.jsxs)(`span`,{style:{fontSize:`12px`,color:`var(--color-text-tertiary)`,display:`flex`,alignItems:`center`,gap:`4px`},children:[`📎 `,t.attachments]}),t.comments&&t.comments>0&&(0,C.jsxs)(`span`,{style:{fontSize:`12px`,color:`var(--color-text-tertiary)`,display:`flex`,alignItems:`center`,gap:`4px`},children:[`💬 `,t.comments]})]})]})]},t.id))}),r&&(0,C.jsx)(`button`,{onClick:()=>U(e.id),style:{margin:`12px`,padding:`12px`,backgroundColor:`transparent`,border:`2px dashed var(--color-border-primary)`,borderRadius:`8px`,color:`var(--color-text-tertiary)`,fontSize:`13px`,fontWeight:`500`,cursor:`pointer`,transition:`all 0.2s var(--ease-apple)`},onMouseEnter:e=>{e.currentTarget.style.borderColor=`var(--color-accent-blue)`,e.currentTarget.style.color=`var(--color-accent-blue)`,e.currentTarget.style.backgroundColor=`var(--color-accent-blue-tint)`},onMouseLeave:e=>{e.currentTarget.style.borderColor=`var(--color-border-primary)`,e.currentTarget.style.color=`var(--color-text-tertiary)`,e.currentTarget.style.backgroundColor=`transparent`},children:`+ Add Card`})]},e.id)}),(0,C.jsxs)(m,{open:!!A,onOpenChange:e=>!e&&j(null),size:`lg`,children:[(0,C.jsx)(f,{}),(0,C.jsxs)(p,{children:[(0,C.jsx)(l,{children:A?.title}),A?.priority&&(0,C.jsx)(`div`,{style:{marginTop:`16px`,width:`100%`,height:`4px`,backgroundColor:B(A.priority),borderRadius:`9999px`,marginBottom:`24px`}})]}),(0,C.jsxs)(u,{children:[A?.description&&(0,C.jsx)(`p`,{className:`text-base text-text-secondary leading-relaxed mb-4`,children:A.description}),A?.tags&&A.tags.length>0&&(0,C.jsx)(`div`,{className:`flex flex-wrap gap-2 mb-4`,children:A.tags.map((e,t)=>(0,C.jsx)(`span`,{className:`text-sm text-text-secondary bg-background-secondary px-3 py-1 rounded-md font-medium`,children:e},t))}),(0,C.jsxs)(`div`,{className:`grid grid-cols-2 gap-4 mb-4`,children:[A?.assignee&&(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{className:`text-sm text-text-tertiary mb-2`,children:`Assignee`}),(0,C.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,C.jsx)(`div`,{className:`w-8 h-8 rounded-full bg-accent-blue flex items-center justify-center text-sm font-semibold text-white`,children:V(A.assignee.name)}),(0,C.jsx)(`span`,{className:`text-base text-text-primary`,children:A.assignee.name})]})]}),A?.dueDate&&(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{className:`text-sm text-text-tertiary mb-2`,children:`Due Date`}),(0,C.jsxs)(`div`,{className:`text-base text-text-primary`,children:[`📅 `,A.dueDate]})]}),A?.priority&&(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`div`,{className:`text-sm text-text-tertiary mb-2`,children:`Priority`}),(0,C.jsx)(`div`,{className:`text-base font-semibold capitalize`,style:{color:B(A.priority)},children:A.priority})]})]}),(0,C.jsxs)(`div`,{className:`flex gap-4 mt-6`,children:[A?.attachments&&A.attachments>0&&(0,C.jsxs)(`div`,{className:`text-sm text-text-secondary`,children:[`📎 `,A.attachments,` attachments`]}),A?.comments&&A.comments>0&&(0,C.jsxs)(`div`,{className:`text-sm text-text-secondary`,children:[`💬 `,A.comments,` comments`]})]})]})]}),(0,C.jsxs)(m,{open:!!M,onOpenChange:e=>!e&&N(null),size:`md`,children:[(0,C.jsx)(f,{}),(0,C.jsx)(p,{children:(0,C.jsx)(l,{children:`Add New Card`})}),(0,C.jsx)(u,{children:(0,C.jsxs)(`div`,{className:`space-y-4`,children:[(0,C.jsx)(a,{label:`Title`,placeholder:`Enter card title`,value:P.title,onChange:e=>F({...P,title:e.target.value}),required:!0}),(0,C.jsx)(i,{placeholder:`Enter card description (optional)`,value:P.description,onChange:e=>F({...P,description:e.target.value}),rows:4}),(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`label`,{className:`block text-sm font-medium text-text-primary mb-2`,children:`Priority`}),(0,C.jsxs)(v,{value:P.priority,onValueChange:e=>F({...P,priority:e}),children:[(0,C.jsx)(g,{className:`w-full`,children:(0,C.jsx)(y,{})}),(0,C.jsxs)(b,{children:[(0,C.jsx)(_,{value:`low`,children:`Low`}),(0,C.jsx)(_,{value:`medium`,children:`Medium`}),(0,C.jsx)(_,{value:`high`,children:`High`}),(0,C.jsx)(_,{value:`urgent`,children:`Urgent`})]})]})]})]})}),(0,C.jsxs)(d,{children:[(0,C.jsx)(s,{variant:`ghost`,onClick:()=>N(null),children:`Cancel`}),(0,C.jsx)(s,{variant:`primary`,onClick:()=>{if(!P.title.trim()||!M)return;let e={title:P.title,description:P.description||void 0,priority:P.priority};r?r(M,e):T(w.map(t=>t.id===M?{...t,cards:[...t.cards,{...e,id:`card-${Date.now()}`}]}:t)),N(null),F({title:``,description:``,priority:`medium`})},disabled:!P.title.trim(),children:`Add Card`})]})]})]})},w.__docgenInfo={description:``,methods:[],displayName:`KanbanBoard`,props:{columns:{required:!0,tsType:{name:`Array`,elements:[{name:`KanbanColumn`}],raw:`KanbanColumn[]`},description:``},onCardMove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(cardId: string, fromColumnId: string, toColumnId: string, newIndex: number) => void`,signature:{arguments:[{type:{name:`string`},name:`cardId`},{type:{name:`string`},name:`fromColumnId`},{type:{name:`string`},name:`toColumnId`},{type:{name:`number`},name:`newIndex`}],return:{name:`void`}}},description:``},onCardClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(card: KanbanCard) => void`,signature:{arguments:[{type:{name:`KanbanCard`},name:`card`}],return:{name:`void`}}},description:``},onAddCard:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(columnId: string, card: Omit<KanbanCard, 'id'>) => void`,signature:{arguments:[{type:{name:`string`},name:`columnId`},{type:{name:`Omit`,elements:[{name:`KanbanCard`},{name:`literal`,value:`'id'`}],raw:`Omit<KanbanCard, 'id'>`},name:`card`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'compact' | 'detailed'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'compact'`},{name:`literal`,value:`'detailed'`}]},description:``,defaultValue:{value:`'default'`,computed:!1}},showCardCount:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},showColumnLimit:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),E,D,O,k,A,j,M,N,P,F,I;e((()=>{n(),T(),E=r(),D={title:`Data Display/KanbanBoard`,component:w,tags:[`autodocs`],parameters:{layout:`fullscreen`}},O={args:{columns:[{id:`todo`,title:`To Do`,items:[{id:`1`,title:`Implement payment flow`,description:`Build wire transfer UI`,priority:`high`,assignee:`Cesar`},{id:`2`,title:`API integration`,description:`Connect to Plaid API`,priority:`medium`,assignee:`Alice`},{id:`3`,title:`Design review`,description:`Review new dashboard designs`,priority:`low`,assignee:`Bob`}]},{id:`in_progress`,title:`In Progress`,items:[{id:`4`,title:`KYC verification`,description:`Implement ID scanning`,priority:`high`,assignee:`Carol`},{id:`5`,title:`Budget calculator`,description:`Build monthly budget tool`,priority:`medium`,assignee:`David`}]},{id:`done`,title:`Done`,items:[{id:`6`,title:`Login screen`,description:`Build login with biometrics`,priority:`high`,assignee:`Cesar`,tags:[`auth`]},{id:`7`,title:`User onboarding`,description:`Create onboarding flow`,priority:`high`,assignee:`Alice`,tags:[`ux`]}]}],onCardMove:(e,t,n)=>console.log(`Move:`,e,t,n)}},k={args:{columns:[{id:`backlog`,title:`Backlog`,items:[]},{id:`todo`,title:`To Do`,items:[{id:`1`,title:`Implement dark mode`,priority:`low`,assignee:`Dev`}]},{id:`done`,title:`Done`,items:[{id:`2`,title:`Add 2FA`,priority:`high`,assignee:`Dev`,tags:[`security`]}]}]}},A={args:{columns:[{id:`backlog`,title:`Backlog`,items:Array.from({length:8},(e,t)=>({id:`b${t}`,title:`Task ${t+1}: Feature request`,priority:[`low`,`medium`,`high`][t%3],assignee:[`Alice`,`Bob`,`Carol`][t%3]}))},{id:`sprint`,title:`Sprint #12`,items:Array.from({length:5},(e,t)=>({id:`s${t}`,title:`Sprint task ${t+1}`,priority:`high`,assignee:`Cesar`,tags:[`sprint-12`]}))}]}},j={decorators:[e=>(0,E.jsx)(`div`,{className:`bg-gray-900 min-h-screen p-8`,children:(0,E.jsx)(e,{})})],args:{columns:[{id:`col1`,title:`Compliance Reviews`,items:[{id:`1`,title:`Review KYC docs #4821`,priority:`high`,assignee:`Compliance`,tags:[`urgent`]},{id:`2`,title:`Verify business license`,priority:`medium`,assignee:`Legal`}]},{id:`col2`,title:`Approved`,items:[{id:`3`,title:`Account activation #7734`,priority:`high`,assignee:`Ops`,tags:[`done`]}]}]}},M={args:{columns:[{id:`dev`,title:`Development`,items:[{id:`1`,title:`Implement SWIFT payments`,priority:`high`,assignee:`Backend`,tags:[`payments`,`swift`]},{id:`2`,title:`Add crypto wallet`,priority:`medium`,assignee:`Blockchain`,tags:[`crypto`]},{id:`3`,title:`Build notification system`,priority:`medium`,assignee:`Fullstack`,tags:[`notifications`]}]},{id:`qa`,title:`QA`,items:[{id:`4`,title:`Test transfer flow`,priority:`high`,assignee:`QA`,tags:[`e2e`,`critical`]}]}]}},N={args:{columns:[{id:`backlog`,title:`Backlog`,items:[{id:`b1`,title:`Add P2P notifications`,priority:`high`,tags:[`feature`,`push`],assignee:`Backend`},{id:`b2`,title:`Multi-currency wallet redesign`,priority:`medium`,tags:[`design`],assignee:`UX`},{id:`b3`,title:`Fraud detection v2`,priority:`urgent`,tags:[`backend`,`security`],assignee:`Security`}]},{id:`sprint`,title:`Sprint 12`,items:[{id:`s1`,title:`Instant ACH transfers`,priority:`urgent`,tags:[`payments`],assignee:`Backend`},{id:`s2`,title:`Dark mode transaction history`,priority:`medium`,tags:[`frontend`],assignee:`Frontend`},{id:`s3`,title:`Savings goal charts`,priority:`medium`,tags:[`charts`],assignee:`Fullstack`},{id:`s4`,title:`API rate limiting`,priority:`high`,tags:[`backend`],assignee:`Backend`}]},{id:`review`,title:`Review`,items:[{id:`r1`,title:`Transaction CSV export`,priority:`high`,assignee:`QA`,tags:[`feature`]},{id:`r2`,title:`Biometric auth for mobile-web`,priority:`high`,assignee:`QA`,tags:[`security`]}]},{id:`done`,title:`Done ✓`,items:[{id:`d1`,title:`Onboarding flow v3`,priority:`high`,assignee:`PM`,tags:[`ux`]},{id:`d2`,title:`Budget ML suggestions`,priority:`medium`,assignee:`Data`,tags:[`ai`]}]}]}},P={args:{columns:[{id:`urgent`,title:`🔴 Urgent`,items:[{id:`u1`,title:`P0: Production payments failing`,priority:`urgent`,assignee:`All Hands`,tags:[`p0`,`incident`]},{id:`u2`,title:`Security vulnerability patch`,priority:`urgent`,assignee:`Security`,tags:[`p0`,`security`]}]},{id:`high`,title:`🟠 High Priority`,items:[{id:`h1`,title:`KYC deadline compliance`,priority:`high`,assignee:`Compliance`,tags:[`regulatory`]},{id:`h2`,title:`Quarterly report data`,priority:`high`,assignee:`Data`,tags:[`reporting`]}]},{id:`medium`,title:`🟡 Medium`,items:[{id:`m1`,title:`Update FAQ pages`,priority:`medium`,assignee:`Content`,tags:[`docs`]}]},{id:`low`,title:`🟢 Backlog`,items:[{id:`l1`,title:`UI polish pass`,priority:`low`,assignee:`Design`,tags:[`ux`]}]}]}},F={args:{columns:[{id:`backlog`,title:`Backlog`,items:[]},{id:`todo`,title:`To Do`,items:[{id:`1`,title:`Implement dark mode`,priority:`low`,assignee:`Dev`}]},{id:`in-progress`,title:`In Progress`,items:[]},{id:`done`,title:`Done`,items:[{id:`2`,title:`Add 2FA`,priority:`high`,assignee:`Dev`,tags:[`security`]}]}]}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'todo',
      title: 'To Do',
      items: [{
        id: '1',
        title: 'Implement payment flow',
        description: 'Build wire transfer UI',
        priority: 'high',
        assignee: 'Cesar'
      }, {
        id: '2',
        title: 'API integration',
        description: 'Connect to Plaid API',
        priority: 'medium',
        assignee: 'Alice'
      }, {
        id: '3',
        title: 'Design review',
        description: 'Review new dashboard designs',
        priority: 'low',
        assignee: 'Bob'
      }]
    }, {
      id: 'in_progress',
      title: 'In Progress',
      items: [{
        id: '4',
        title: 'KYC verification',
        description: 'Implement ID scanning',
        priority: 'high',
        assignee: 'Carol'
      }, {
        id: '5',
        title: 'Budget calculator',
        description: 'Build monthly budget tool',
        priority: 'medium',
        assignee: 'David'
      }]
    }, {
      id: 'done',
      title: 'Done',
      items: [{
        id: '6',
        title: 'Login screen',
        description: 'Build login with biometrics',
        priority: 'high',
        assignee: 'Cesar',
        tags: ['auth']
      }, {
        id: '7',
        title: 'User onboarding',
        description: 'Create onboarding flow',
        priority: 'high',
        assignee: 'Alice',
        tags: ['ux']
      }]
    }],
    onCardMove: (cardId, targetColumn, targetIndex) => console.log('Move:', cardId, targetColumn, targetIndex)
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'backlog',
      title: 'Backlog',
      items: []
    }, {
      id: 'todo',
      title: 'To Do',
      items: [{
        id: '1',
        title: 'Implement dark mode',
        priority: 'low',
        assignee: 'Dev'
      }]
    }, {
      id: 'done',
      title: 'Done',
      items: [{
        id: '2',
        title: 'Add 2FA',
        priority: 'high',
        assignee: 'Dev',
        tags: ['security']
      }]
    }]
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'backlog',
      title: 'Backlog',
      items: Array.from({
        length: 8
      }, (_, i) => ({
        id: \`b\${i}\`,
        title: \`Task \${i + 1}: Feature request\`,
        priority: (['low', 'medium', 'high'] as const)[i % 3],
        assignee: ['Alice', 'Bob', 'Carol'][i % 3]
      }))
    }, {
      id: 'sprint',
      title: 'Sprint #12',
      items: Array.from({
        length: 5
      }, (_, i) => ({
        id: \`s\${i}\`,
        title: \`Sprint task \${i + 1}\`,
        priority: 'high' as const,
        assignee: 'Cesar',
        tags: ['sprint-12']
      }))
    }]
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div className="bg-gray-900 min-h-screen p-8">
        <Story />
      </div>],
  args: {
    columns: [{
      id: 'col1',
      title: 'Compliance Reviews',
      items: [{
        id: '1',
        title: 'Review KYC docs #4821',
        priority: 'high',
        assignee: 'Compliance',
        tags: ['urgent']
      }, {
        id: '2',
        title: 'Verify business license',
        priority: 'medium',
        assignee: 'Legal'
      }]
    }, {
      id: 'col2',
      title: 'Approved',
      items: [{
        id: '3',
        title: 'Account activation #7734',
        priority: 'high',
        assignee: 'Ops',
        tags: ['done']
      }]
    }]
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'dev',
      title: 'Development',
      items: [{
        id: '1',
        title: 'Implement SWIFT payments',
        priority: 'high',
        assignee: 'Backend',
        tags: ['payments', 'swift']
      }, {
        id: '2',
        title: 'Add crypto wallet',
        priority: 'medium',
        assignee: 'Blockchain',
        tags: ['crypto']
      }, {
        id: '3',
        title: 'Build notification system',
        priority: 'medium',
        assignee: 'Fullstack',
        tags: ['notifications']
      }]
    }, {
      id: 'qa',
      title: 'QA',
      items: [{
        id: '4',
        title: 'Test transfer flow',
        priority: 'high',
        assignee: 'QA',
        tags: ['e2e', 'critical']
      }]
    }]
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'backlog',
      title: 'Backlog',
      items: [{
        id: 'b1',
        title: 'Add P2P notifications',
        priority: 'high',
        tags: ['feature', 'push'],
        assignee: 'Backend'
      }, {
        id: 'b2',
        title: 'Multi-currency wallet redesign',
        priority: 'medium',
        tags: ['design'],
        assignee: 'UX'
      }, {
        id: 'b3',
        title: 'Fraud detection v2',
        priority: 'urgent',
        tags: ['backend', 'security'],
        assignee: 'Security'
      }]
    }, {
      id: 'sprint',
      title: 'Sprint 12',
      items: [{
        id: 's1',
        title: 'Instant ACH transfers',
        priority: 'urgent',
        tags: ['payments'],
        assignee: 'Backend'
      }, {
        id: 's2',
        title: 'Dark mode transaction history',
        priority: 'medium',
        tags: ['frontend'],
        assignee: 'Frontend'
      }, {
        id: 's3',
        title: 'Savings goal charts',
        priority: 'medium',
        tags: ['charts'],
        assignee: 'Fullstack'
      }, {
        id: 's4',
        title: 'API rate limiting',
        priority: 'high',
        tags: ['backend'],
        assignee: 'Backend'
      }]
    }, {
      id: 'review',
      title: 'Review',
      items: [{
        id: 'r1',
        title: 'Transaction CSV export',
        priority: 'high',
        assignee: 'QA',
        tags: ['feature']
      }, {
        id: 'r2',
        title: 'Biometric auth for mobile-web',
        priority: 'high',
        assignee: 'QA',
        tags: ['security']
      }]
    }, {
      id: 'done',
      title: 'Done ✓',
      items: [{
        id: 'd1',
        title: 'Onboarding flow v3',
        priority: 'high',
        assignee: 'PM',
        tags: ['ux']
      }, {
        id: 'd2',
        title: 'Budget ML suggestions',
        priority: 'medium',
        assignee: 'Data',
        tags: ['ai']
      }]
    }]
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'urgent',
      title: '🔴 Urgent',
      items: [{
        id: 'u1',
        title: 'P0: Production payments failing',
        priority: 'urgent',
        assignee: 'All Hands',
        tags: ['p0', 'incident']
      }, {
        id: 'u2',
        title: 'Security vulnerability patch',
        priority: 'urgent',
        assignee: 'Security',
        tags: ['p0', 'security']
      }]
    }, {
      id: 'high',
      title: '🟠 High Priority',
      items: [{
        id: 'h1',
        title: 'KYC deadline compliance',
        priority: 'high',
        assignee: 'Compliance',
        tags: ['regulatory']
      }, {
        id: 'h2',
        title: 'Quarterly report data',
        priority: 'high',
        assignee: 'Data',
        tags: ['reporting']
      }]
    }, {
      id: 'medium',
      title: '🟡 Medium',
      items: [{
        id: 'm1',
        title: 'Update FAQ pages',
        priority: 'medium',
        assignee: 'Content',
        tags: ['docs']
      }]
    }, {
      id: 'low',
      title: '🟢 Backlog',
      items: [{
        id: 'l1',
        title: 'UI polish pass',
        priority: 'low',
        assignee: 'Design',
        tags: ['ux']
      }]
    }]
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'backlog',
      title: 'Backlog',
      items: []
    }, {
      id: 'todo',
      title: 'To Do',
      items: [{
        id: '1',
        title: 'Implement dark mode',
        priority: 'low',
        assignee: 'Dev'
      }]
    }, {
      id: 'in-progress',
      title: 'In Progress',
      items: []
    }, {
      id: 'done',
      title: 'Done',
      items: [{
        id: '2',
        title: 'Add 2FA',
        priority: 'high',
        assignee: 'Dev',
        tags: ['security']
      }]
    }]
  }
}`,...F.parameters?.docs?.source}}},I=[`Default`,`EmptyColumn`,`ManyItems`,`DarkThemeBoard`,`WithTags`,`FintechSprint`,`PriorityBoard`,`EmptyColumns`]}))();export{j as DarkThemeBoard,O as Default,k as EmptyColumn,F as EmptyColumns,N as FintechSprint,A as ManyItems,P as PriorityBoard,M as WithTags,I as __namedExportsOrder,D as default};