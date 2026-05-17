import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-B1a0g5t6.js";import{i as r,t as i,x as a}from"./lucide-react-BVeuibpS.js";import{n as o,t as s}from"./utils-ijcE-ZHT.js";import{t as c}from"./jsx-runtime-DaLCRA3n.js";import{a as l,i as u,s as d,t as f}from"./es-BBowbM95.js";import{n as p,t as m}from"./ConfirmDialog-CNhCrAWp.js";var h=e((()=>{p()})),g,_,v,y,b,x=e((()=>{g=t(n()),o(),f(),i(),h(),_=c(),v=80,y=g.forwardRef(({children:e,onDelete:t,onCancel:n,deleteLabel:i=`Delete`,cancelLabel:o=`Cancel`,deleteIcon:c=a,cancelIcon:f=r,threshold:p=v,disabled:h=!1,confirmDelete:y=!1,confirmMessage:b=`Are you sure?`,variant:x=`danger`,className:S,...C},w)=>{let[T,E]=(0,g.useState)(!1),[D,O]=(0,g.useState)(!1),[k,A]=(0,g.useState)(!1),j=l(0),M=u(j,[-p,0,p],[1,0,1]),N=u(j,[0,p],[0,1]),P=u(j,[0,-p],[0,1]),F={default:`bg-surface-secondary text-text-primary`,danger:`bg-status-error text-white`,warning:`bg-status-warning text-white`},I=async(e,t)=>{A(!1);let r=t.offset.x,i=t.velocity.x;if(r>p||i>500){if(y){O(!0),j.set(0);return}await L()}else (r<-p||i<-500)&&n&&n(),j.set(0)},L=async()=>{E(!0);try{await t(),j.set(1e3)}catch(e){console.error(`Delete error:`,e),j.set(0),E(!1)}},R=async()=>{O(!1),await L()},z=()=>{O(!1)};return T&&j.get()>500?null:(0,_.jsxs)(`div`,{ref:w,className:s(`relative overflow-hidden rounded-xl`,S),...C,children:[(0,_.jsxs)(`div`,{className:`absolute inset-0 flex`,children:[(0,_.jsx)(d.div,{className:s(`flex-1 flex items-center justify-end px-6`,F[x]),style:{opacity:N},children:(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,_.jsx)(`span`,{className:`text-sm font-medium`,children:i}),(0,_.jsx)(c,{className:`w-5 h-5`})]})}),n&&(0,_.jsx)(d.div,{className:`flex-1 flex items-center justify-start px-6 bg-surface-secondary text-text-primary`,style:{opacity:P},children:(0,_.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,_.jsx)(f,{className:`w-5 h-5`}),(0,_.jsx)(`span`,{className:`text-sm font-medium`,children:o})]})})]}),(0,_.jsx)(d.div,{drag:`x`,dragConstraints:{left:n?-p:0,right:p},dragElastic:.2,onDragStart:()=>A(!0),onDragEnd:I,style:{x:j},className:s(`relative bg-surface-primary border border-border-primary rounded-xl`,`cursor-grab active:cursor-grabbing`,h&&`opacity-50 cursor-not-allowed`,k&&`shadow-lg`),whileTap:h?{}:{scale:.98},transition:{type:`spring`,stiffness:300,damping:30},children:e}),!h&&(0,_.jsx)(d.div,{className:`absolute top-1/2 -translate-y-1/2 right-4 w-1 h-8 bg-border-primary rounded-full`,style:{opacity:M},initial:{opacity:0},animate:{opacity:k?.3:0}}),y&&(0,_.jsx)(m,{open:D,onOpenChange:O,title:`Confirm Delete`,description:b||`Are you sure you want to delete this item? This action cannot be undone.`,confirmLabel:`Delete`,cancelLabel:`Cancel`,onConfirm:R,onCancel:z,variant:x===`danger`?`destructive`:x===`warning`?`warning`:`default`})]})}),y.displayName=`SlideToDelete`,b=g.forwardRef(({title:e,subtitle:t,avatar:n,actions:r,children:i,className:a,...o},c)=>(0,_.jsx)(y,{ref:c,className:s(`mb-2`,a),...o,children:(0,_.jsxs)(`div`,{className:`flex items-center gap-4 p-4`,children:[n&&(0,_.jsx)(`div`,{className:`flex-shrink-0`,children:n}),(0,_.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[e&&(0,_.jsx)(`div`,{className:`text-sm font-medium text-text-primary truncate`,children:e}),t&&(0,_.jsx)(`div`,{className:`text-xs text-text-secondary truncate mt-0.5`,children:t}),i]}),r&&(0,_.jsx)(`div`,{className:`flex-shrink-0 flex items-center gap-2`,children:r})]})})),b.displayName=`SlideToDeleteItem`,y.__docgenInfo={description:``,methods:[],displayName:`SlideToDelete`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onDelete:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void | Promise<void>`,signature:{arguments:[],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:``},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},deleteLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Delete'`,computed:!1}},cancelLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Cancel'`,computed:!1}},deleteIcon:{required:!1,tsType:{name:`LucideIcon`},description:``,defaultValue:{value:`Trash2`,computed:!0}},cancelIcon:{required:!1,tsType:{name:`LucideIcon`},description:``,defaultValue:{value:`X`,computed:!0}},threshold:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`80`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},confirmDelete:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},confirmMessage:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Are you sure?'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'danger' | 'warning'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'warning'`}]},description:``,defaultValue:{value:`'danger'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}},b.__docgenInfo={description:``,methods:[],displayName:`SlideToDeleteItem`,props:{children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},onDelete:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void | Promise<void>`,signature:{arguments:[],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:``},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},deleteLabel:{required:!1,tsType:{name:`string`},description:``},cancelLabel:{required:!1,tsType:{name:`string`},description:``},deleteIcon:{required:!1,tsType:{name:`LucideIcon`},description:``},cancelIcon:{required:!1,tsType:{name:`LucideIcon`},description:``},threshold:{required:!1,tsType:{name:`number`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},confirmDelete:{required:!1,tsType:{name:`boolean`},description:``},confirmMessage:{required:!1,tsType:{name:`string`},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'danger' | 'warning'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'danger'`},{name:`literal`,value:`'warning'`}]},description:``},className:{required:!1,tsType:{name:`string`},description:``},title:{required:!1,tsType:{name:`string`},description:``},subtitle:{required:!1,tsType:{name:`string`},description:``},avatar:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},actions:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``}}}})),S,C,w,T,E,D,O,k,A,j,M,N,P,F,I;e((()=>{x(),S=c(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={title:`Gestures/SlideToDelete`,component:y,tags:[`autodocs`]},T={args:{onDelete:C(),children:(0,S.jsxs)(`div`,{className:`p-4 bg-surface-primary rounded-lg border border-border-primary`,children:[(0,S.jsx)(`p`,{className:`text-text-primary font-medium`,children:`Swipe right to delete this item`}),(0,S.jsx)(`p`,{className:`text-text-tertiary text-sm mt-1`,children:`Slide to reveal the delete action`})]})}},E={args:{onDelete:C(),deleteLabel:`Remove`,children:(0,S.jsxs)(`div`,{className:`p-4 bg-surface-primary rounded-lg border border-border-primary`,children:[(0,S.jsx)(`p`,{className:`text-text-primary font-medium`,children:`Transaction #12345`}),(0,S.jsx)(`p`,{className:`text-text-tertiary text-sm mt-1`,children:`$250.00 • May 10, 2026`})]})}},D={args:{onDelete:C(),children:(0,S.jsx)(`div`,{className:`p-3 bg-surface-primary rounded-lg border border-border-primary text-sm text-text-primary`,children:`Small item`})}},O={args:{onDelete:C(),deleteLabel:`Dismiss`,children:(0,S.jsx)(`div`,{className:`p-4 bg-surface-primary rounded-lg border border-border-primary`,children:(0,S.jsxs)(`div`,{className:`flex items-start gap-3`,children:[(0,S.jsx)(`div`,{style:{width:36,height:36,borderRadius:`50%`,backgroundColor:`#007AFF20`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,S.jsx)(`span`,{style:{fontSize:16},children:`🔔`})}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`p`,{className:`text-text-primary font-medium text-sm`,children:`Payment Received`}),(0,S.jsx)(`p`,{className:`text-text-tertiary text-xs mt-0.5`,children:`You received $320 from Alice Johnson`}),(0,S.jsx)(`p`,{className:`text-text-tertiary text-xs mt-0.5`,children:`2 min ago`})]})]})})}},k={args:{onDelete:C(),deleteLabel:`Delete`,children:(0,S.jsxs)(`div`,{className:`p-4 bg-surface-primary rounded-lg border border-border-primary flex items-center justify-between`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,S.jsx)(`div`,{style:{width:40,height:40,borderRadius:12,backgroundColor:`#FF950020`,display:`flex`,alignItems:`center`,justifyContent:`center`},children:(0,S.jsx)(`span`,{style:{fontSize:18},children:`💳`})}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`p`,{className:`text-text-primary font-medium text-sm`,children:`Uber Ride`}),(0,S.jsx)(`p`,{className:`text-text-tertiary text-xs`,children:`May 10, 2026`})]})]}),(0,S.jsx)(`p`,{className:`text-text-primary font-semibold`,children:`-$24.50`})]})}},A={args:{onDelete:C(),deleteLabel:`Remove`,children:(0,S.jsxs)(`div`,{className:`p-4 bg-surface-primary rounded-lg border border-border-primary flex items-center gap-3`,children:[(0,S.jsx)(`div`,{style:{width:44,height:44,borderRadius:`50%`,backgroundColor:`#007AFF`,display:`flex`,alignItems:`center`,justifyContent:`center`,color:`#fff`,fontWeight:600,fontSize:16},children:`AJ`}),(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`p`,{className:`text-text-primary font-medium`,children:`Alice Johnson`}),(0,S.jsx)(`p`,{className:`text-text-tertiary text-xs`,children:`@alicej • Last transfer 2h ago`})]})]})}},j={args:{onDelete:C(),onCancel:C(),cancelLabel:`Cancel`,children:(0,S.jsxs)(`div`,{className:`p-4 bg-surface-primary rounded-lg border border-border-primary`,children:[(0,S.jsx)(`p`,{className:`text-text-primary font-medium`,children:`Swipe left to cancel, right to delete`}),(0,S.jsx)(`p`,{className:`text-text-tertiary text-sm mt-1`,children:`Bi-directional swipe demo`})]})}},M={args:{onDelete:C(),disabled:!0,children:(0,S.jsxs)(`div`,{className:`p-4 bg-surface-primary rounded-lg border border-border-primary opacity-60`,children:[(0,S.jsx)(`p`,{className:`text-text-primary font-medium`,children:`Cannot be deleted`}),(0,S.jsx)(`p`,{className:`text-text-tertiary text-sm mt-1`,children:`Swipe is disabled for this item`})]})}},N={args:{onDelete:C(),confirmDelete:!0,confirmMessage:`Delete this transaction permanently?`,children:(0,S.jsxs)(`div`,{className:`p-4 bg-surface-primary rounded-lg border border-border-primary`,children:[(0,S.jsx)(`p`,{className:`text-text-primary font-medium`,children:`Large Transfer`}),(0,S.jsx)(`p`,{className:`text-text-tertiary text-sm mt-1`,children:`$5,000.00 to Savings Account`}),(0,S.jsx)(`p`,{className:`text-text-tertiary text-xs mt-0.5`,children:`Requires confirmation before deletion`})]})}},P={args:{onDelete:C(),variant:`warning`,deleteLabel:`Archive`,children:(0,S.jsxs)(`div`,{className:`p-4 bg-surface-primary rounded-lg border border-border-primary`,children:[(0,S.jsx)(`p`,{className:`text-text-primary font-medium`,children:`Old statement`}),(0,S.jsx)(`p`,{className:`text-text-tertiary text-sm mt-1`,children:`March 2026 — Archive instead of delete`})]})}},F={args:{onDelete:C(),threshold:40,deleteLabel:`Delete (easy)`,children:(0,S.jsxs)(`div`,{className:`p-4 bg-surface-primary rounded-lg border border-border-primary`,children:[(0,S.jsx)(`p`,{className:`text-text-primary font-medium`,children:`Easier to delete`}),(0,S.jsx)(`p`,{className:`text-text-tertiary text-sm mt-1`,children:`Lower swipe threshold (40px)`})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: fn(),
    children: <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <p className="text-text-primary font-medium">Swipe right to delete this item</p>
        <p className="text-text-tertiary text-sm mt-1">Slide to reveal the delete action</p>
      </div>
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: fn(),
    deleteLabel: 'Remove',
    children: <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <p className="text-text-primary font-medium">Transaction #12345</p>
        <p className="text-text-tertiary text-sm mt-1">$250.00 • May 10, 2026</p>
      </div>
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: fn(),
    children: <div className="p-3 bg-surface-primary rounded-lg border border-border-primary text-sm text-text-primary">
        Small item
      </div>
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: fn(),
    deleteLabel: 'Dismiss',
    children: <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <div className="flex items-start gap-3">
          <div style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          backgroundColor: '#007AFF20',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
            <span style={{
            fontSize: 16
          }}>🔔</span>
          </div>
          <div>
            <p className="text-text-primary font-medium text-sm">Payment Received</p>
            <p className="text-text-tertiary text-xs mt-0.5">You received $320 from Alice Johnson</p>
            <p className="text-text-tertiary text-xs mt-0.5">2 min ago</p>
          </div>
        </div>
      </div>
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: fn(),
    deleteLabel: 'Delete',
    children: <div className="p-4 bg-surface-primary rounded-lg border border-border-primary flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div style={{
          width: 40,
          height: 40,
          borderRadius: 12,
          backgroundColor: '#FF950020',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
            <span style={{
            fontSize: 18
          }}>💳</span>
          </div>
          <div>
            <p className="text-text-primary font-medium text-sm">Uber Ride</p>
            <p className="text-text-tertiary text-xs">May 10, 2026</p>
          </div>
        </div>
        <p className="text-text-primary font-semibold">-$24.50</p>
      </div>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: fn(),
    deleteLabel: 'Remove',
    children: <div className="p-4 bg-surface-primary rounded-lg border border-border-primary flex items-center gap-3">
        <div style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        backgroundColor: '#007AFF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 600,
        fontSize: 16
      }}>
          AJ
        </div>
        <div>
          <p className="text-text-primary font-medium">Alice Johnson</p>
          <p className="text-text-tertiary text-xs">@alicej • Last transfer 2h ago</p>
        </div>
      </div>
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: fn(),
    onCancel: fn(),
    cancelLabel: 'Cancel',
    children: <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <p className="text-text-primary font-medium">Swipe left to cancel, right to delete</p>
        <p className="text-text-tertiary text-sm mt-1">Bi-directional swipe demo</p>
      </div>
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: fn(),
    disabled: true,
    children: <div className="p-4 bg-surface-primary rounded-lg border border-border-primary opacity-60">
        <p className="text-text-primary font-medium">Cannot be deleted</p>
        <p className="text-text-tertiary text-sm mt-1">Swipe is disabled for this item</p>
      </div>
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: fn(),
    confirmDelete: true,
    confirmMessage: 'Delete this transaction permanently?',
    children: <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <p className="text-text-primary font-medium">Large Transfer</p>
        <p className="text-text-tertiary text-sm mt-1">$5,000.00 to Savings Account</p>
        <p className="text-text-tertiary text-xs mt-0.5">Requires confirmation before deletion</p>
      </div>
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: fn(),
    variant: 'warning',
    deleteLabel: 'Archive',
    children: <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <p className="text-text-primary font-medium">Old statement</p>
        <p className="text-text-tertiary text-sm mt-1">March 2026 — Archive instead of delete</p>
      </div>
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    onDelete: fn(),
    threshold: 40,
    deleteLabel: 'Delete (easy)',
    children: <div className="p-4 bg-surface-primary rounded-lg border border-border-primary">
        <p className="text-text-primary font-medium">Easier to delete</p>
        <p className="text-text-tertiary text-sm mt-1">Lower swipe threshold (40px)</p>
      </div>
  }
}`,...F.parameters?.docs?.source}}},I=[`Default`,`WithCustomLabel`,`SmallContent`,`NotificationCard`,`TransactionRow`,`ContactCard`,`WithCancel`,`Disabled`,`WithConfirmDialog`,`WarningVariant`,`CustomThreshold`]}))();export{A as ContactCard,F as CustomThreshold,T as Default,M as Disabled,O as NotificationCard,D as SmallContent,k as TransactionRow,P as WarningVariant,j as WithCancel,N as WithConfirmDialog,E as WithCustomLabel,I as __namedExportsOrder,w as default};