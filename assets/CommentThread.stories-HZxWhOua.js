import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-2Bdvr1RY.js";import{Ot as r,in as i,rt as a,t as o}from"./lucide-react-ChvDEqVS.js";import{n as s,t as c}from"./utils-CcEteFRA.js";import{t as l}from"./jsx-runtime-WZfjI2gv.js";import{n as u,r as d,t as f}from"./Avatar-DvAFaBEb.js";import{n as p,t as m}from"./Button-Tx-VQjvP.js";import{t as h}from"./Avatar-CfupQEgu.js";import{n as g,t as _}from"./Textarea-Dpd48OzM.js";import{t as v}from"./Combobox-BfOBRbV1.js";import{t as y}from"./Combobox-Dd-vU_Lk.js";var b,x,S,C,w=e((()=>{b=t(n()),s(),h(),m(),_(),o(),y(),x=l(),S=({comment:e,currentUser:t,depth:n=0,onReply:o,onLike:s,onEdit:l,onDelete:m})=>{let[h,_]=(0,b.useState)(!1),[y,C]=(0,b.useState)(!1),[w,T]=(0,b.useState)(``),[E,D]=(0,b.useState)(typeof e.content==`string`?e.content:``),O=()=>{w.trim()&&o&&(o(e.id,w),_(!1),T(``))},k=()=>{E.trim()&&l&&(l(e.id,E),C(!1))},A=t?.id===e.author.id;return(0,x.jsxs)(`div`,{className:c(`group relative`,n>0&&`mt-4`),children:[(0,x.jsxs)(`div`,{className:`flex gap-3`,children:[(0,x.jsxs)(f,{className:`w-8 h-8 flex-none border border-border-primary/50`,children:[(0,x.jsx)(d,{src:e.author.avatarSrc,alt:e.author.name}),(0,x.jsx)(u,{children:e.author.initials||e.author.name.charAt(0)})]}),(0,x.jsxs)(`div`,{className:`flex-1 min-w-0 space-y-1.5`,children:[(0,x.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,x.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,x.jsx)(`span`,{className:`text-sm font-semibold text-text-primary`,children:e.author.name}),(0,x.jsx)(`span`,{className:`text-xs text-text-tertiary`,children:e.timestamp}),e.isEdited&&(0,x.jsx)(`span`,{className:`text-[10px] text-text-tertiary italic`,children:`(edited)`})]}),(A||o)&&(0,x.jsx)(`div`,{className:`w-32`,children:(0,x.jsx)(v,{items:[...o?[{value:`reply`,label:`Reply`}]:[],...A&&l?[{value:`edit`,label:`Edit`}]:[],...A&&m?[{value:`delete`,label:`Delete`}]:[]],value:void 0,onChange:t=>{t===`reply`&&o&&_(!h),t===`edit`&&l&&C(!0),t===`delete`&&m&&m(e.id)},placeholder:`Actions`,className:`h-6 text-xs`})})]}),y?(0,x.jsxs)(`div`,{className:`space-y-2`,children:[(0,x.jsx)(g,{value:E,onChange:e=>D(e.target.value),className:`min-h-[80px] text-sm`,autoFocus:!0}),(0,x.jsxs)(`div`,{className:`flex gap-2 justify-end`,children:[(0,x.jsx)(p,{size:`sm`,variant:`ghost`,onClick:()=>C(!1),children:`Cancel`}),(0,x.jsx)(p,{size:`sm`,variant:`primary`,onClick:k,children:`Save`})]})]}):(0,x.jsx)(`div`,{className:`text-sm text-text-secondary leading-relaxed break-words`,children:e.content}),!y&&(0,x.jsxs)(`div`,{className:`flex items-center gap-4 pt-1`,children:[s&&(0,x.jsxs)(`button`,{onClick:()=>s(e.id),className:c(`flex items-center gap-1.5 text-xs font-medium transition-colors`,e.isLiked?`text-status-error`:`text-text-tertiary hover:text-text-secondary`),children:[(0,x.jsx)(i,{className:c(`w-3.5 h-3.5`,e.isLiked&&`fill-current`)}),e.likes||0]}),o&&(0,x.jsxs)(`button`,{onClick:()=>_(!h),className:`flex items-center gap-1.5 text-xs font-medium text-text-tertiary hover:text-text-secondary transition-colors`,children:[(0,x.jsx)(r,{className:`w-3.5 h-3.5`}),`Reply`]})]}),h&&(0,x.jsxs)(`div`,{className:`mt-3 flex gap-3 animate-in fade-in slide-in-from-top-2 duration-200`,children:[(0,x.jsx)(`div`,{className:`relative`,children:(0,x.jsx)(a,{className:`w-4 h-4 text-text-tertiary absolute -left-2 top-2`,style:{transform:`rotate(180deg)`}})}),(0,x.jsxs)(`div`,{className:`flex-1 space-y-2`,children:[(0,x.jsx)(g,{placeholder:`Reply to ${e.author.name}...`,value:w,onChange:e=>T(e.target.value),className:`min-h-[80px] text-sm`,autoFocus:!0}),(0,x.jsxs)(`div`,{className:`flex gap-2 justify-end`,children:[(0,x.jsx)(p,{size:`sm`,variant:`ghost`,onClick:()=>_(!1),children:`Cancel`}),(0,x.jsx)(p,{size:`sm`,variant:`primary`,onClick:O,children:`Reply`})]})]})]})]})]}),e.replies&&e.replies.length>0&&(0,x.jsx)(`div`,{className:c(`pl-4 border-l-2 border-border-primary/30 ml-4`,n>=3&&`border-l-0 pl-0 ml-0`),children:e.replies.map(e=>(0,x.jsx)(S,{comment:e,currentUser:t,depth:n+1,onReply:o,onLike:s,onEdit:l,onDelete:m},e.id))})]})},C=b.forwardRef(({comments:e,currentUser:t,onReply:n,onLike:r,onEdit:i,onDelete:a,className:o,...s},l)=>{let[m,h]=(0,b.useState)(``),_=()=>{m.trim()&&n&&(n(`root`,m),h(``))};return(0,x.jsxs)(`div`,{ref:l,className:c(`space-y-8`,o),...s,children:[t&&n&&(0,x.jsxs)(`div`,{className:`flex gap-4`,children:[(0,x.jsxs)(f,{className:`w-10 h-10 flex-none`,children:[(0,x.jsx)(d,{src:t.avatarSrc,alt:t.name}),(0,x.jsx)(u,{children:t.initials||t.name.charAt(0)})]}),(0,x.jsxs)(`div`,{className:`flex-1 space-y-2`,children:[(0,x.jsx)(g,{placeholder:`Write a comment...`,value:m,onChange:e=>h(e.target.value),className:`min-h-[100px]`}),(0,x.jsx)(`div`,{className:`flex justify-end`,children:(0,x.jsx)(p,{variant:`primary`,onClick:_,disabled:!m.trim(),children:`Post Comment`})})]})]}),(0,x.jsx)(`div`,{className:`space-y-6`,children:e.map(e=>(0,x.jsx)(S,{comment:e,currentUser:t,onReply:n,onLike:r,onEdit:i,onDelete:a},e.id))})]})}),C.displayName=`CommentThread`,C.__docgenInfo={description:``,methods:[],displayName:`CommentThread`,props:{comments:{required:!0,tsType:{name:`Array`,elements:[{name:`CommentData`}],raw:`CommentData[]`},description:``},currentUser:{required:!1,tsType:{name:`CommentUser`},description:``},onReply:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(commentId: string, content: string) => void`,signature:{arguments:[{type:{name:`string`},name:`commentId`},{type:{name:`string`},name:`content`}],return:{name:`void`}}},description:``},onLike:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(commentId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`commentId`}],return:{name:`void`}}},description:``},onEdit:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(commentId: string, newContent: string) => void`,signature:{arguments:[{type:{name:`string`},name:`commentId`},{type:{name:`string`},name:`newContent`}],return:{name:`void`}}},description:``},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(commentId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`commentId`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),T,E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{w(),T=l(),E={id:`me`,name:`Cesar Ruiz`,initials:`CR`},D={id:`alice`,name:`Alice Johnson`,initials:`AJ`},O=[{id:`1`,author:D,content:`Great work on the new dashboard! The charts look much cleaner now.`,timestamp:`2 hours ago`,likes:3,isLiked:!1,replies:[{id:`1-1`,author:E,content:`Thanks! I spent a lot of time on the animations.`,timestamp:`1 hour ago`,likes:1,isLiked:!1}]},{id:`2`,author:{id:`bob`,name:`Bob Smith`,initials:`BS`},content:`Should we also add a dark mode toggle to the settings page?`,timestamp:`30 min ago`,likes:5,isLiked:!0}],k={title:`Data Display/CommentThread`,component:C,tags:[`autodocs`]},A={args:{comments:O,currentUser:E}},j={args:{comments:[],currentUser:E}},M={args:{comments:[O[1]],currentUser:E}},N={args:{comments:[{id:`deep-1`,author:D,content:`This needs review.`,timestamp:`5 hours ago`,likes:2,replies:[{id:`deep-1-1`,author:E,content:`I'll take a look shortly.`,timestamp:`4 hours ago`,likes:0,replies:[{id:`deep-1-1-1`,author:D,content:`Any updates?`,timestamp:`3 hours ago`,likes:0}]}]}],currentUser:E}},P={args:{comments:Array.from({length:12},(e,t)=>({id:`many-${t}`,author:t%2==0?D:{id:`user-${t}`,name:`User ${t}`,initials:`U${t}`},content:`Comment number ${t+1} — this simulates a thread with many comments to test scrolling and rendering performance.`,timestamp:`${t*15} minutes ago`,likes:Math.floor(Math.random()*10),isLiked:t%3==0})),currentUser:E}},F={args:{comments:O,currentUser:E,onReply:(e,t)=>console.log(`Reply to`,e,`:`,t),onLike:e=>console.log(`Liked:`,e),onEdit:(e,t)=>console.log(`Edit`,e,`:`,t),onDelete:e=>console.log(`Delete:`,e)}},I={args:{comments:[{id:`long-1`,author:D,content:`I've been reviewing the latest pull request and noticed that the dynamic import pattern for lazy-loaded components could be optimized further. Specifically, if we use React.lazy with Suspense boundaries at the route level rather than the component level, we could reduce the initial bundle size by approximately 15-20%. Additionally, we should consider implementing code splitting for the charting library since it's only used on two pages.`,timestamp:`1 hour ago`,likes:7,replies:[{id:`long-1-1`,author:E,content:`Great catch! I'll refactor the Suspense boundaries in the next sprint. The charting library split alone should save us ~200KB.`,timestamp:`45 min ago`,likes:3}]},{id:`long-2`,author:{id:`bob`,name:`Bob Smith`,initials:`BS`},content:`This is a short reply.`,timestamp:`30 min ago`,likes:1}],currentUser:E}},L={args:{comments:O,currentUser:E},decorators:[e=>(0,T.jsx)(`div`,{className:`dark p-4 bg-gray-900 rounded-lg`,children:(0,T.jsx)(e,{})})]},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    comments: sampleComments,
    currentUser
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    comments: [],
    currentUser
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    comments: [sampleComments[1]],
    currentUser
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    comments: [{
      id: 'deep-1',
      author: otherUser,
      content: 'This needs review.',
      timestamp: '5 hours ago',
      likes: 2,
      replies: [{
        id: 'deep-1-1',
        author: currentUser,
        content: 'I\\'ll take a look shortly.',
        timestamp: '4 hours ago',
        likes: 0,
        replies: [{
          id: 'deep-1-1-1',
          author: otherUser,
          content: 'Any updates?',
          timestamp: '3 hours ago',
          likes: 0
        }]
      }]
    }],
    currentUser
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    comments: Array.from({
      length: 12
    }, (_, i) => ({
      id: \`many-\${i}\`,
      author: i % 2 === 0 ? otherUser : {
        id: \`user-\${i}\`,
        name: \`User \${i}\`,
        initials: \`U\${i}\`
      },
      content: \`Comment number \${i + 1} — this simulates a thread with many comments to test scrolling and rendering performance.\`,
      timestamp: \`\${i * 15} minutes ago\`,
      likes: Math.floor(Math.random() * 10),
      isLiked: i % 3 === 0
    })),
    currentUser
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    comments: sampleComments,
    currentUser,
    onReply: (commentId, content) => console.log('Reply to', commentId, ':', content),
    onLike: commentId => console.log('Liked:', commentId),
    onEdit: (commentId, newContent) => console.log('Edit', commentId, ':', newContent),
    onDelete: commentId => console.log('Delete:', commentId)
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    comments: [{
      id: 'long-1',
      author: otherUser,
      content: 'I\\'ve been reviewing the latest pull request and noticed that the dynamic import pattern for lazy-loaded components could be optimized further. Specifically, if we use React.lazy with Suspense boundaries at the route level rather than the component level, we could reduce the initial bundle size by approximately 15-20%. Additionally, we should consider implementing code splitting for the charting library since it\\'s only used on two pages.',
      timestamp: '1 hour ago',
      likes: 7,
      replies: [{
        id: 'long-1-1',
        author: currentUser,
        content: 'Great catch! I\\'ll refactor the Suspense boundaries in the next sprint. The charting library split alone should save us ~200KB.',
        timestamp: '45 min ago',
        likes: 3
      }]
    }, {
      id: 'long-2',
      author: {
        id: 'bob',
        name: 'Bob Smith',
        initials: 'BS'
      },
      content: 'This is a short reply.',
      timestamp: '30 min ago',
      likes: 1
    }],
    currentUser
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    comments: sampleComments,
    currentUser
  },
  decorators: [Story => <div className="dark p-4 bg-gray-900 rounded-lg">
                <Story />
            </div>]
}`,...L.parameters?.docs?.source}}},R=[`Default`,`Empty`,`SingleComment`,`DeeplyNested`,`ManyComments`,`WithCallbacks`,`LongContent`,`DarkMode`]}))();export{L as DarkMode,N as DeeplyNested,A as Default,j as Empty,I as LongContent,P as ManyComments,M as SingleComment,F as WithCallbacks,R as __namedExportsOrder,k as default};