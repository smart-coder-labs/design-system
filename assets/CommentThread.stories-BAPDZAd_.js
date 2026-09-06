import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C3uANx_z.js";import{On as r,Ot as i,in as a,rt as o,t as s}from"./lucide-react-h9NbdGwk.js";import{n as c,t as l}from"./utils-CcEteFRA.js";import{t as u}from"./jsx-runtime-WZfjI2gv.js";import{n as d,r as f,t as p}from"./Avatar-Bpjw78c7.js";import{n as m,t as h}from"./Button-DZsJlLci.js";import{t as g}from"./Avatar-DJUnCAtF.js";import{n as _,t as v}from"./Textarea-CAzYsOB7.js";import{i as y,n as b,r as x,t as S}from"./Popover-DxwkrdxS.js";var C=e((()=>{y()})),w,T,E,D,O=e((()=>{w=t(n()),c(),g(),h(),v(),s(),C(),T=u(),E=({comment:e,currentUser:t,depth:n=0,onReply:s,onLike:c,onEdit:u,onDelete:h})=>{let[g,v]=(0,w.useState)(!1),[y,C]=(0,w.useState)(!1),[D,O]=(0,w.useState)(``),[k,A]=(0,w.useState)(typeof e.content==`string`?e.content:``),[j,M]=(0,w.useState)(!1),N=()=>{D.trim()&&s&&(s(e.id,D),v(!1),O(``))},P=()=>{k.trim()&&u&&(u(e.id,k),C(!1))},F=t?.id===e.author.id;return(0,T.jsxs)(`div`,{className:l(`group relative`,n>0&&`mt-4`),children:[(0,T.jsxs)(`div`,{className:`flex gap-3`,children:[(0,T.jsxs)(p,{className:`w-8 h-8 flex-none border border-border-primary/50`,children:[(0,T.jsx)(f,{src:e.author.avatarSrc,alt:e.author.name}),(0,T.jsx)(d,{children:e.author.initials||e.author.name.charAt(0)})]}),(0,T.jsxs)(`div`,{className:`flex-1 min-w-0 space-y-1.5`,children:[(0,T.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,T.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,T.jsx)(`span`,{className:`text-sm font-semibold text-text-primary`,children:e.author.name}),(0,T.jsx)(`span`,{className:`text-xs text-text-tertiary`,children:e.timestamp}),e.isEdited&&(0,T.jsx)(`span`,{className:`text-[10px] text-text-tertiary italic`,children:`(edited)`})]}),(F||s)&&(0,T.jsxs)(S,{open:j,onOpenChange:M,children:[(0,T.jsx)(x,{asChild:!0,children:(0,T.jsx)(`button`,{className:`opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-bg-secondary text-text-tertiary hover:text-text-secondary`,children:(0,T.jsx)(r,{className:`w-4 h-4`})})}),(0,T.jsxs)(b,{align:`end`,sideOffset:4,className:`min-w-[120px] rounded-lg border border-border-primary bg-bg-elevated shadow-md p-1 z-50 text-sm flex flex-col gap-0.5`,children:[s&&(0,T.jsx)(`button`,{onClick:()=>{v(!g),M(!1)},className:`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer text-text-secondary hover:bg-bg-secondary hover:text-text-primary outline-none text-left w-full`,children:`Reply`}),F&&u&&(0,T.jsx)(`button`,{onClick:()=>{C(!0),M(!1)},className:`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer text-text-secondary hover:bg-bg-secondary hover:text-text-primary outline-none text-left w-full`,children:`Edit`}),F&&h&&(0,T.jsx)(`button`,{onClick:()=>{h(e.id),M(!1)},className:`flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer text-status-error hover:bg-status-error/10 outline-none text-left w-full`,children:`Delete`})]})]})]}),y?(0,T.jsxs)(`div`,{className:`space-y-2`,children:[(0,T.jsx)(_,{value:k,onChange:e=>A(e.target.value),className:`min-h-[80px] text-sm`,autoFocus:!0}),(0,T.jsxs)(`div`,{className:`flex gap-2 justify-end`,children:[(0,T.jsx)(m,{size:`sm`,variant:`ghost`,onClick:()=>C(!1),children:`Cancel`}),(0,T.jsx)(m,{size:`sm`,variant:`primary`,onClick:P,children:`Save`})]})]}):(0,T.jsx)(`div`,{className:`text-sm text-text-secondary leading-relaxed break-words`,children:e.content}),!y&&(0,T.jsxs)(`div`,{className:`flex items-center gap-4 pt-1`,children:[c&&(0,T.jsxs)(`button`,{onClick:()=>c(e.id),className:l(`flex items-center gap-1.5 text-xs font-medium transition-colors`,e.isLiked?`text-status-error`:`text-text-tertiary hover:text-text-secondary`),children:[(0,T.jsx)(a,{className:l(`w-3.5 h-3.5`,e.isLiked&&`fill-current`)}),e.likes||0]}),s&&(0,T.jsxs)(`button`,{onClick:()=>v(!g),className:`flex items-center gap-1.5 text-xs font-medium text-text-tertiary hover:text-text-secondary transition-colors`,children:[(0,T.jsx)(i,{className:`w-3.5 h-3.5`}),`Reply`]})]}),g&&(0,T.jsxs)(`div`,{className:`mt-3 flex gap-3 animate-in fade-in slide-in-from-top-2 duration-200`,children:[(0,T.jsx)(`div`,{className:`relative`,children:(0,T.jsx)(o,{className:`w-4 h-4 text-text-tertiary absolute -left-2 top-2`,style:{transform:`rotate(180deg)`}})}),(0,T.jsxs)(`div`,{className:`flex-1 space-y-2`,children:[(0,T.jsx)(_,{placeholder:`Reply to ${e.author.name}...`,value:D,onChange:e=>O(e.target.value),className:`min-h-[80px] text-sm`,autoFocus:!0}),(0,T.jsxs)(`div`,{className:`flex gap-2 justify-end`,children:[(0,T.jsx)(m,{size:`sm`,variant:`ghost`,onClick:()=>v(!1),children:`Cancel`}),(0,T.jsx)(m,{size:`sm`,variant:`primary`,onClick:N,children:`Reply`})]})]})]})]})]}),e.replies&&e.replies.length>0&&(0,T.jsx)(`div`,{className:l(`pl-4 border-l-2 border-border-primary/30 ml-4`,n>=3&&`border-l-0 pl-0 ml-0`),children:e.replies.map(e=>(0,T.jsx)(E,{comment:e,currentUser:t,depth:n+1,onReply:s,onLike:c,onEdit:u,onDelete:h},e.id))})]})},D=w.forwardRef(({comments:e,currentUser:t,onReply:n,onLike:r,onEdit:i,onDelete:a,className:o,...s},c)=>{let[u,h]=(0,w.useState)(``),g=()=>{u.trim()&&n&&(n(`root`,u),h(``))};return(0,T.jsxs)(`div`,{ref:c,className:l(`space-y-8`,o),...s,children:[t&&n&&(0,T.jsxs)(`div`,{className:`flex gap-4`,children:[(0,T.jsxs)(p,{className:`w-10 h-10 flex-none`,children:[(0,T.jsx)(f,{src:t.avatarSrc,alt:t.name}),(0,T.jsx)(d,{children:t.initials||t.name.charAt(0)})]}),(0,T.jsxs)(`div`,{className:`flex-1 space-y-2`,children:[(0,T.jsx)(_,{placeholder:`Write a comment...`,value:u,onChange:e=>h(e.target.value),className:`min-h-[100px]`}),(0,T.jsx)(`div`,{className:`flex justify-end`,children:(0,T.jsx)(m,{variant:`primary`,onClick:g,disabled:!u.trim(),children:`Post Comment`})})]})]}),(0,T.jsx)(`div`,{className:`space-y-6`,children:e.map(e=>(0,T.jsx)(E,{comment:e,currentUser:t,onReply:n,onLike:r,onEdit:i,onDelete:a},e.id))})]})}),D.displayName=`CommentThread`,D.__docgenInfo={description:``,methods:[],displayName:`CommentThread`,props:{comments:{required:!0,tsType:{name:`Array`,elements:[{name:`CommentData`}],raw:`CommentData[]`},description:``},currentUser:{required:!1,tsType:{name:`CommentUser`},description:``},onReply:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(commentId: string, content: string) => void`,signature:{arguments:[{type:{name:`string`},name:`commentId`},{type:{name:`string`},name:`content`}],return:{name:`void`}}},description:``},onLike:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(commentId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`commentId`}],return:{name:`void`}}},description:``},onEdit:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(commentId: string, newContent: string) => void`,signature:{arguments:[{type:{name:`string`},name:`commentId`},{type:{name:`string`},name:`newContent`}],return:{name:`void`}}},description:``},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(commentId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`commentId`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),k,A,j,M,N,P,F,I,L,R,z,B,V,H;e((()=>{O(),k=u(),A={id:`me`,name:`Cesar Ruiz`,initials:`CR`},j={id:`alice`,name:`Alice Johnson`,initials:`AJ`},M=[{id:`1`,author:j,content:`Great work on the new dashboard! The charts look much cleaner now.`,timestamp:`2 hours ago`,likes:3,isLiked:!1,replies:[{id:`1-1`,author:A,content:`Thanks! I spent a lot of time on the animations.`,timestamp:`1 hour ago`,likes:1,isLiked:!1}]},{id:`2`,author:{id:`bob`,name:`Bob Smith`,initials:`BS`},content:`Should we also add a dark mode toggle to the settings page?`,timestamp:`30 min ago`,likes:5,isLiked:!0}],N={title:`Data Display/CommentThread`,component:D,tags:[`autodocs`],decorators:[e=>(0,k.jsx)(`div`,{className:`bg-bg-primary p-4 rounded-xl`,children:(0,k.jsx)(e,{})})]},P={args:{comments:M,currentUser:A}},F={args:{comments:[],currentUser:A}},I={args:{comments:[M[1]],currentUser:A}},L={args:{comments:[{id:`deep-1`,author:j,content:`This needs review.`,timestamp:`5 hours ago`,likes:2,replies:[{id:`deep-1-1`,author:A,content:`I'll take a look shortly.`,timestamp:`4 hours ago`,likes:0,replies:[{id:`deep-1-1-1`,author:j,content:`Any updates?`,timestamp:`3 hours ago`,likes:0}]}]}],currentUser:A}},R={args:{comments:Array.from({length:12},(e,t)=>({id:`many-${t}`,author:t%2==0?j:{id:`user-${t}`,name:`User ${t}`,initials:`U${t}`},content:`Comment number ${t+1} — this simulates a thread with many comments to test scrolling and rendering performance.`,timestamp:`${t*15} minutes ago`,likes:Math.floor(Math.random()*10),isLiked:t%3==0})),currentUser:A}},z={args:{comments:M,currentUser:A,onReply:(e,t)=>console.log(`Reply to`,e,`:`,t),onLike:e=>console.log(`Liked:`,e),onEdit:(e,t)=>console.log(`Edit`,e,`:`,t),onDelete:e=>console.log(`Delete:`,e)}},B={args:{comments:[{id:`long-1`,author:j,content:`I've been reviewing the latest pull request and noticed that the dynamic import pattern for lazy-loaded components could be optimized further. Specifically, if we use React.lazy with Suspense boundaries at the route level rather than the component level, we could reduce the initial bundle size by approximately 15-20%. Additionally, we should consider implementing code splitting for the charting library since it's only used on two pages.`,timestamp:`1 hour ago`,likes:7,replies:[{id:`long-1-1`,author:A,content:`Great catch! I'll refactor the Suspense boundaries in the next sprint. The charting library split alone should save us ~200KB.`,timestamp:`45 min ago`,likes:3}]},{id:`long-2`,author:{id:`bob`,name:`Bob Smith`,initials:`BS`},content:`This is a short reply.`,timestamp:`30 min ago`,likes:1}],currentUser:A}},V={args:{comments:M,currentUser:A},decorators:[e=>(0,k.jsx)(`div`,{className:`dark p-4 bg-gray-900 rounded-lg`,children:(0,k.jsx)(e,{})})]},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    comments: sampleComments,
    currentUser
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    comments: [],
    currentUser
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    comments: [sampleComments[1]],
    currentUser
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    comments: sampleComments,
    currentUser,
    onReply: (commentId, content) => console.log('Reply to', commentId, ':', content),
    onLike: commentId => console.log('Liked:', commentId),
    onEdit: (commentId, newContent) => console.log('Edit', commentId, ':', newContent),
    onDelete: commentId => console.log('Delete:', commentId)
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    comments: sampleComments,
    currentUser
  },
  decorators: [Story => <div className="dark p-4 bg-gray-900 rounded-lg">
                <Story />
            </div>]
}`,...V.parameters?.docs?.source}}},H=[`Default`,`Empty`,`SingleComment`,`DeeplyNested`,`ManyComments`,`WithCallbacks`,`LongContent`,`DarkMode`]}))();export{V as DarkMode,L as DeeplyNested,P as Default,F as Empty,B as LongContent,R as ManyComments,I as SingleComment,z as WithCallbacks,H as __namedExportsOrder,N as default};