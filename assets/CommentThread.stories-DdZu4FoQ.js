import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as F,r as x}from"./iframe-BMG7cCGY.js";import{c as f}from"./utils-CDN07tui.js";import{A as D,a as L,b as I}from"./Avatar-BhjovspH.js";import{B as v}from"./Button-b5E49-AF.js";import{T as S}from"./Textarea-DvEKJn1-.js";import{C as z}from"./Combobox-B-W19nff.js";import{H as J}from"./heart-PdHGoU3q.js";import{M}from"./message-square-Bg9tyAce.js";import{c as W}from"./createLucideIcon-11Koirjv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B_jtOnfb.js";import"./proxy-BFHmY9N3.js";import"./chevrons-up-down-IZi-VSvg.js";import"./index-pZkA2wgP.js";import"./search-Bhuei--_.js";const _=[["path",{d:"m15 10 5 5-5 5",key:"qqa56n"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]],H=W("corner-down-right",_),T=({comment:t,currentUser:n,depth:a=0,onReply:l,onLike:u,onEdit:c,onDelete:i})=>{const[r,o]=x.useState(!1),[s,p]=x.useState(!1),[d,h]=x.useState(""),[b,A]=x.useState(typeof t.content=="string"?t.content:""),q=()=>{d.trim()&&l&&(l(t.id,d),o(!1),h(""))},E=()=>{b.trim()&&c&&(c(t.id,b),p(!1))},U=n?.id===t.author.id;return e.jsxs("div",{className:f("group relative",a>0&&"mt-4"),children:[e.jsxs("div",{className:"flex gap-3",children:[e.jsxs(D,{className:"w-8 h-8 flex-none border border-border-primary/50",children:[e.jsx(L,{src:t.author.avatarSrc,alt:t.author.name}),e.jsx(I,{children:t.author.initials||t.author.name.charAt(0)})]}),e.jsxs("div",{className:"flex-1 min-w-0 space-y-1.5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm font-semibold text-text-primary",children:t.author.name}),e.jsx("span",{className:"text-xs text-text-tertiary",children:t.timestamp}),t.isEdited&&e.jsx("span",{className:"text-[10px] text-text-tertiary italic",children:"(edited)"})]}),(U||l)&&e.jsx("div",{className:"w-32",children:e.jsx(z,{items:[...l?[{value:"reply",label:"Reply"}]:[],...U&&c?[{value:"edit",label:"Edit"}]:[],...U&&i?[{value:"delete",label:"Delete"}]:[]],value:void 0,onChange:m=>{m==="reply"&&l&&o(!r),m==="edit"&&c&&p(!0),m==="delete"&&i&&i(t.id)},placeholder:"Actions",className:"h-6 text-xs"})})]}),s?e.jsxs("div",{className:"space-y-2",children:[e.jsx(S,{value:b,onChange:m=>A(m.target.value),className:"min-h-[80px] text-sm",autoFocus:!0}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(v,{size:"sm",variant:"ghost",onClick:()=>p(!1),children:"Cancel"}),e.jsx(v,{size:"sm",variant:"primary",onClick:E,children:"Save"})]})]}):e.jsx("div",{className:"text-sm text-text-secondary leading-relaxed break-words",children:t.content}),!s&&e.jsxs("div",{className:"flex items-center gap-4 pt-1",children:[u&&e.jsxs("button",{onClick:()=>u(t.id),className:f("flex items-center gap-1.5 text-xs font-medium transition-colors",t.isLiked?"text-status-error":"text-text-tertiary hover:text-text-secondary"),children:[e.jsx(J,{className:f("w-3.5 h-3.5",t.isLiked&&"fill-current")}),t.likes||0]}),l&&e.jsxs("button",{onClick:()=>o(!r),className:"flex items-center gap-1.5 text-xs font-medium text-text-tertiary hover:text-text-secondary transition-colors",children:[e.jsx(M,{className:"w-3.5 h-3.5"}),"Reply"]})]}),r&&e.jsxs("div",{className:"mt-3 flex gap-3 animate-in fade-in slide-in-from-top-2 duration-200",children:[e.jsx("div",{className:"relative",children:e.jsx(H,{className:"w-4 h-4 text-text-tertiary absolute -left-2 top-2"})}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(S,{placeholder:`Reply to ${t.author.name}...`,value:d,onChange:m=>h(m.target.value),className:"min-h-[80px] text-sm",autoFocus:!0}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(v,{size:"sm",variant:"ghost",onClick:()=>o(!1),children:"Cancel"}),e.jsx(v,{size:"sm",variant:"primary",onClick:q,children:"Reply"})]})]})]})]})]}),t.replies&&t.replies.length>0&&e.jsx("div",{className:f("pl-4 border-l-2 border-border-primary/30 ml-4",a>=3&&"border-l-0 pl-0 ml-0"),children:t.replies.map(m=>e.jsx(T,{comment:m,currentUser:n,depth:a+1,onReply:l,onLike:u,onEdit:c,onDelete:i},m.id))})]})},w=F.forwardRef(({comments:t,currentUser:n,onReply:a,onLike:l,onEdit:u,onDelete:c,className:i,...r},o)=>{const[s,p]=x.useState(""),d=()=>{s.trim()&&a&&(a("root",s),p(""))};return e.jsxs("div",{ref:o,className:f("space-y-8",i),...r,children:[n&&a&&e.jsxs("div",{className:"flex gap-4",children:[e.jsxs(D,{className:"w-10 h-10 flex-none",children:[e.jsx(L,{src:n.avatarSrc,alt:n.name}),e.jsx(I,{children:n.initials||n.name.charAt(0)})]}),e.jsxs("div",{className:"flex-1 space-y-2",children:[e.jsx(S,{placeholder:"Write a comment...",value:s,onChange:h=>p(h.target.value),className:"min-h-[100px]"}),e.jsx("div",{className:"flex justify-end",children:e.jsx(v,{variant:"primary",onClick:d,disabled:!s.trim(),children:"Post Comment"})})]})]}),e.jsx("div",{className:"space-y-6",children:t.map(h=>e.jsx(T,{comment:h,currentUser:n,onReply:a,onLike:l,onEdit:u,onDelete:c},h.id))})]})});w.displayName="CommentThread";w.__docgenInfo={description:"",methods:[],displayName:"CommentThread",props:{comments:{required:!0,tsType:{name:"Array",elements:[{name:"CommentData"}],raw:"CommentData[]"},description:""},currentUser:{required:!1,tsType:{name:"CommentUser"},description:""},onReply:{required:!1,tsType:{name:"signature",type:"function",raw:"(commentId: string, content: string) => void",signature:{arguments:[{type:{name:"string"},name:"commentId"},{type:{name:"string"},name:"content"}],return:{name:"void"}}},description:""},onLike:{required:!1,tsType:{name:"signature",type:"function",raw:"(commentId: string) => void",signature:{arguments:[{type:{name:"string"},name:"commentId"}],return:{name:"void"}}},description:""},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"(commentId: string, newContent: string) => void",signature:{arguments:[{type:{name:"string"},name:"commentId"},{type:{name:"string"},name:"newContent"}],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(commentId: string) => void",signature:{arguments:[{type:{name:"string"},name:"commentId"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const re={title:"Data Display/CommentThread",component:w,parameters:{layout:"padded"},tags:[]},g={id:"u1",name:"Alex Chen",initials:"AC"},R=[{id:"c1",author:{id:"u2",name:"Sarah Miller",initials:"SM"},content:"Has anyone tested this with the new React 19 RC? I heard there might be some hydration issues with the suspense boundaries.",timestamp:"2 hours ago",likes:12,isLiked:!0,replies:[{id:"c2",author:{id:"u3",name:"Mike Ross",initials:"MR"},content:"Yes, I ran the test suite yesterday. The hydration warnings are gone in the latest canary build.",timestamp:"1 hour ago",likes:4,replies:[{id:"c3",author:{id:"u1",name:"Alex Chen",initials:"AC"},content:"Great news! I will update the dependencies in the next PR.",timestamp:"15 mins ago",likes:1}]}]},{id:"c4",author:{id:"u4",name:"David Kim",initials:"DK"},content:"Could we add a screenshot of the new layout? It would help with the design review.",timestamp:"3 hours ago",likes:0}],k=t=>{const[n,a]=x.useState(t.comments||R),l=(i,r)=>{const o={id:`new-${Date.now()}`,author:g,content:r,timestamp:"Just now",likes:0};if(i==="root"){a([o,...n]);return}const s=p=>p.map(d=>d.id===i?{...d,replies:[...d.replies||[],o]}:d.replies?{...d,replies:s(d.replies)}:d);a(s(n))},u=i=>{const r=o=>o.map(s=>s.id===i?{...s,isLiked:!s.isLiked,likes:(s.likes||0)+(s.isLiked?-1:1)}:s.replies?{...s,replies:r(s.replies)}:s);a(r(n))},c=i=>{const r=o=>o.filter(s=>s.id!==i).map(s=>({...s,replies:s.replies?r(s.replies):void 0}));a(r(n))};return e.jsx("div",{className:"max-w-2xl mx-auto",children:e.jsx(w,{...t,comments:n,currentUser:g,onReply:l,onLike:u,onDelete:c})})},y={args:{comments:R,currentUser:g},render:t=>e.jsx(k,{...t})},j={name:"💻 Use Case: Code Review",args:{currentUser:g,comments:[{id:"cr1",author:{id:"u5",name:"Senior Dev",initials:"SD"},content:e.jsxs("div",{className:"space-y-2",children:[e.jsx("p",{children:"This logic seems a bit fragile. What happens if `user.preferences` is undefined?"}),e.jsx("div",{className:"bg-surface-secondary p-2 rounded text-xs font-mono border border-border-primary",children:"const theme = user.preferences.theme || 'light';"}),e.jsx("p",{children:"Consider using optional chaining:"}),e.jsx("div",{className:"bg-surface-secondary p-2 rounded text-xs font-mono border border-border-primary",children:"const theme = user?.preferences?.theme ?? 'light';"})]}),timestamp:"1 day ago",likes:3,replies:[{id:"cr2",author:{id:"u1",name:"Alex Chen",initials:"AC"},content:"Good catch! I missed that edge case. Updating now.",timestamp:"20 hours ago",likes:1}]}]},render:t=>e.jsx(k,{...t})},C={name:"📱 Use Case: Social Feed",args:{currentUser:g,comments:[{id:"s1",author:{id:"u6",name:"Emma Watson",initials:"EW"},content:"Just launched our new design system! 🚀 Check it out at design.example.com. Huge thanks to the team for the hard work.",timestamp:"5 mins ago",likes:89,isLiked:!0,replies:[{id:"s2",author:{id:"u7",name:"John Doe",initials:"JD"},content:"Looks amazing! Love the dark mode implementation.",timestamp:"2 mins ago",likes:5}]}]},render:t=>e.jsx(k,{...t})},N={name:"↳ Deeply Nested",args:{currentUser:g,comments:[{id:"n1",author:{id:"u1",name:"User 1",initials:"U1"},content:"Level 1: Root comment",timestamp:"1h",replies:[{id:"n2",author:{id:"u2",name:"User 2",initials:"U2"},content:"Level 2: First reply",timestamp:"50m",replies:[{id:"n3",author:{id:"u3",name:"User 3",initials:"U3"},content:"Level 3: Nested reply",timestamp:"40m",replies:[{id:"n4",author:{id:"u4",name:"User 4",initials:"U4"},content:"Level 4: Deeply nested (should stop indenting visually)",timestamp:"30m",replies:[{id:"n5",author:{id:"u5",name:"User 5",initials:"U5"},content:"Level 5: Still readable without excessive indentation",timestamp:"20m"}]}]}]}]}]},render:t=>e.jsx(k,{...t})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    comments: initialComments,
    currentUser: currentUser
  },
  render: args => <InteractiveThread {...args} />
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: '💻 Use Case: Code Review',
  args: {
    currentUser: currentUser,
    comments: [{
      id: 'cr1',
      author: {
        id: 'u5',
        name: 'Senior Dev',
        initials: 'SD'
      },
      content: <div className="space-y-2">
                        <p>This logic seems a bit fragile. What happens if \`user.preferences\` is undefined?</p>
                        <div className="bg-surface-secondary p-2 rounded text-xs font-mono border border-border-primary">
                            const theme = user.preferences.theme || 'light';
                        </div>
                        <p>Consider using optional chaining:</p>
                        <div className="bg-surface-secondary p-2 rounded text-xs font-mono border border-border-primary">
                            const theme = user?.preferences?.theme ?? 'light';
                        </div>
                    </div>,
      timestamp: '1 day ago',
      likes: 3,
      replies: [{
        id: 'cr2',
        author: {
          id: 'u1',
          name: 'Alex Chen',
          initials: 'AC'
        },
        content: 'Good catch! I missed that edge case. Updating now.',
        timestamp: '20 hours ago',
        likes: 1
      }]
    }]
  },
  render: args => <InteractiveThread {...args} />
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: '📱 Use Case: Social Feed',
  args: {
    currentUser: currentUser,
    comments: [{
      id: 's1',
      author: {
        id: 'u6',
        name: 'Emma Watson',
        initials: 'EW'
      },
      content: 'Just launched our new design system! 🚀 Check it out at design.example.com. Huge thanks to the team for the hard work.',
      timestamp: '5 mins ago',
      likes: 89,
      isLiked: true,
      replies: [{
        id: 's2',
        author: {
          id: 'u7',
          name: 'John Doe',
          initials: 'JD'
        },
        content: 'Looks amazing! Love the dark mode implementation.',
        timestamp: '2 mins ago',
        likes: 5
      }]
    }]
  },
  render: args => <InteractiveThread {...args} />
}`,...C.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: '↳ Deeply Nested',
  args: {
    currentUser: currentUser,
    comments: [{
      id: 'n1',
      author: {
        id: 'u1',
        name: 'User 1',
        initials: 'U1'
      },
      content: 'Level 1: Root comment',
      timestamp: '1h',
      replies: [{
        id: 'n2',
        author: {
          id: 'u2',
          name: 'User 2',
          initials: 'U2'
        },
        content: 'Level 2: First reply',
        timestamp: '50m',
        replies: [{
          id: 'n3',
          author: {
            id: 'u3',
            name: 'User 3',
            initials: 'U3'
          },
          content: 'Level 3: Nested reply',
          timestamp: '40m',
          replies: [{
            id: 'n4',
            author: {
              id: 'u4',
              name: 'User 4',
              initials: 'U4'
            },
            content: 'Level 4: Deeply nested (should stop indenting visually)',
            timestamp: '30m',
            replies: [{
              id: 'n5',
              author: {
                id: 'u5',
                name: 'User 5',
                initials: 'U5'
              },
              content: 'Level 5: Still readable without excessive indentation',
              timestamp: '20m'
            }]
          }]
        }]
      }]
    }]
  },
  render: args => <InteractiveThread {...args} />
}`,...N.parameters?.docs?.source}}};const oe=["Default","CodeReview","SocialFeed","DeeplyNested"];export{j as CodeReview,N as DeeplyNested,y as Default,C as SocialFeed,oe as __namedExportsOrder,re as default};
