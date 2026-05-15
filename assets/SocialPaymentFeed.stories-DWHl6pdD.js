import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-DL3IwwZJ.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{l as o,s,t as c}from"./es-CnNtA5mJ.js";import{At as l,Dn as u,G as d,Lt as f,in as p,p as m,t as h,un as g}from"./lucide-react-C3ayLXpj.js";import{i as _,n as v,r as y,t as b}from"./Avatar-C_dOVPGb.js";var x,S,C,w=e((()=>{x=t(n()),c(),h(),r(),_(),S=a(),C=({payments:e,className:t,onLike:n,onComment:r})=>{let[a,c]=(0,x.useState)(new Set),h=e=>{c(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n}),n?.(e)},_=e=>{let t=Math.floor((new Date().getTime()-e.getTime())/1e3);if(t<60)return`${t}s`;let n=Math.floor(t/60);if(n<60)return`${n}m`;let r=Math.floor(n/60);if(r<24)return`${r}h`;let i=Math.floor(r/24);return i<7?`${i}d`:e.toLocaleDateString()},C=e=>{switch(e){case`public`:return(0,S.jsx)(g,{className:`w-3 h-3`});case`friends`:return(0,S.jsx)(m,{className:`w-3 h-3`});case`private`:return(0,S.jsx)(f,{className:`w-3 h-3`})}};return(0,S.jsx)(`div`,{className:i(`w-full max-w-lg space-y-4`,t),children:(0,S.jsx)(o,{children:e.map(e=>{let t=a.has(e.id),n=e.likes+ +!!t;return(0,S.jsxs)(s.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,scale:.95},className:`bg-surface-primary rounded-[2rem] p-5 shadow-sm border border-border-primary`,children:[(0,S.jsxs)(`div`,{className:`flex justify-between items-start gap-3 mb-3`,children:[(0,S.jsxs)(`div`,{className:`flex items-center gap-3 min-w-0 flex-1`,children:[(0,S.jsxs)(`div`,{className:`relative flex`,children:[(0,S.jsxs)(b,{className:`w-10 h-10 ring-2 ring-surface-primary z-10`,children:[(0,S.jsx)(y,{src:e.senderAvatar,alt:e.senderName}),(0,S.jsx)(v,{children:e.senderName[0]})]}),(0,S.jsxs)(b,{className:`w-10 h-10 ring-2 ring-surface-primary -ml-4 z-0 opacity-80`,children:[(0,S.jsx)(y,{src:e.receiverAvatar,alt:e.receiverName}),(0,S.jsx)(v,{children:e.receiverName[0]})]})]}),(0,S.jsxs)(`div`,{children:[(0,S.jsxs)(`div`,{className:`text-sm font-medium text-text-primary flex items-center gap-1.5 flex-wrap`,children:[(0,S.jsx)(`span`,{className:`font-bold`,children:e.senderName}),(0,S.jsx)(`span`,{className:`text-text-tertiary font-normal`,children:`paid`}),(0,S.jsx)(`span`,{className:`font-bold`,children:e.receiverName})]}),(0,S.jsxs)(`div`,{className:`flex items-center gap-2 mt-0.5 text-xs text-text-tertiary`,children:[(0,S.jsx)(`span`,{className:`font-semibold text-text-tertiary dark:text-text-tertiary`,children:_(e.timestamp)}),(0,S.jsx)(`span`,{className:`w-1 h-1 rounded-full bg-border-primary`}),C(e.privacy)]})]})]}),(0,S.jsxs)(`div`,{className:`flex items-center gap-3 flex-shrink-0`,children:[e.amount!==void 0&&(0,S.jsx)(`span`,{className:`font-bold text-lg tracking-tight text-emerald-600 dark:text-emerald-400`,children:new Intl.NumberFormat(`en-US`,{style:`currency`,currency:e.currency||`USD`}).format(e.amount)}),(0,S.jsx)(`button`,{className:`text-text-tertiary hover:text-text-secondary dark:hover:text-text-primary transition-colors`,"aria-label":`More options`,children:(0,S.jsx)(u,{className:`w-5 h-5`})})]})]}),(0,S.jsxs)(`div`,{className:`pl-[3.25rem] pr-2`,children:[(0,S.jsxs)(`div`,{className:`bg-background-secondary rounded-2xl p-4 border border-border-primary/50 inline-block group hover:border-border-primary dark:hover:border-zinc-700 transition`,children:[(0,S.jsxs)(`p`,{className:`text-sm text-text-secondary font-medium`,children:[e.emoji&&(0,S.jsx)(`span`,{className:`text-xl mr-2 align-middle`,children:e.emoji}),e.note]}),e.gifUrl&&(0,S.jsx)(`div`,{className:`mt-3 rounded-xl overflow-hidden shadow-sm`,children:(0,S.jsx)(`img`,{src:e.gifUrl,alt:`GIF`,className:`w-full max-h-48 object-cover`,loading:`lazy`})})]}),(0,S.jsxs)(`div`,{className:`flex items-center gap-6 mt-4`,children:[(0,S.jsxs)(s.button,{whileTap:{scale:.9},onClick:()=>h(e.id),className:i(`flex items-center gap-1.5 text-xs font-bold transition-colors group cursor-pointer`,t?`text-pink-600 dark:text-pink-500`:`text-text-tertiary hover:text-pink-500`),children:[(0,S.jsx)(p,{className:i(`w-4 h-4 group-hover:scale-110 transition-transform`,t?`fill-current`:``)}),(0,S.jsx)(`span`,{children:n})]}),(0,S.jsxs)(s.button,{whileTap:{scale:.9},onClick:()=>r?.(e.id),className:`flex items-center gap-1.5 text-xs font-bold text-text-tertiary hover:text-blue-500 transition-colors group cursor-pointer`,children:[(0,S.jsx)(l,{className:`w-4 h-4 group-hover:scale-110 transition-transform`}),(0,S.jsx)(`span`,{children:e.comments})]}),(0,S.jsx)(`button`,{className:`flex items-center gap-1.5 text-xs font-bold text-text-tertiary hover:text-text-secondary dark:hover:text-text-primary ml-auto transition-colors`,"aria-label":`Share`,children:(0,S.jsx)(d,{className:`w-4 h-4`})})]})]})]},e.id)})})})},C.displayName=`SocialPaymentFeed`,C.__docgenInfo={description:``,methods:[],displayName:`SocialPaymentFeed`,props:{payments:{required:!0,tsType:{name:`Array`,elements:[{name:`SocialPaymentInfo`}],raw:`SocialPaymentInfo[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``},onLike:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``},onComment:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`void`}}},description:``}}}})),T,E,D,O,k,A,j,M,N,P,F,I,L;e((()=>{w(),T=t(n()),E=a(),D={title:`Fintech/Social & P2P/SocialPaymentFeed`,component:C,tags:[`autodocs`]},O={args:{payments:[{id:`1`,senderName:`Alice Johnson`,receiverName:`Bob Smith`,note:`Dinner split 🍕`,amount:45,timestamp:new Date(Date.now()-1e3*60*30),likes:12,comments:3,privacy:`friends`},{id:`2`,senderName:`Carol White`,receiverName:`David Brown`,note:`Birthday gift 🎂 🎉`,amount:100,timestamp:new Date(Date.now()-1e3*60*120),likes:24,comments:7,privacy:`public`},{id:`3`,senderName:`Eve Davis`,receiverName:`Frank Green`,note:`Rent for May 🏠`,amount:1500,timestamp:new Date(Date.now()-1e3*60*60*5),likes:5,comments:2,privacy:`private`}],onLike:e=>console.log(`Liked:`,e),onComment:e=>console.log(`Comment:`,e)}},k={args:{payments:[{id:`1`,senderName:`Alice Johnson`,senderAvatar:`https://i.pravatar.cc/150?u=alice`,receiverName:`Bob Smith`,receiverAvatar:`https://i.pravatar.cc/150?u=bob`,note:`Thanks for the coffee! ☕`,amount:5.5,timestamp:new Date(Date.now()-1e3*60*15),likes:8,comments:1,privacy:`public`},{id:`2`,senderName:`Carol White`,senderAvatar:`https://i.pravatar.cc/150?u=carol`,receiverName:`David Brown`,receiverAvatar:`https://i.pravatar.cc/150?u=david`,note:`Weekend trip expenses 🌴`,amount:250,timestamp:new Date(Date.now()-1e3*60*180),likes:15,comments:4,privacy:`friends`}],onLike:e=>console.log(`Liked:`,e)}},A={args:{payments:[{id:`1`,senderName:`Grace Hall`,receiverName:`Henry Lee`,note:`Concert tickets! 🎵🎸`,amount:180,emoji:`🎵`,timestamp:new Date(Date.now()-1e3*60*5),likes:34,comments:12,privacy:`public`},{id:`2`,senderName:`Iris Wang`,receiverName:`Jack Miller`,note:`Check out my new setup!`,amount:2999.99,emoji:`💻`,timestamp:new Date(Date.now()-1e3*60*60),likes:56,comments:23,privacy:`public`}],onLike:e=>console.log(`Liked:`,e)}},j={render:()=>{let[e,t]=(0,T.useState)([{id:`1`,senderName:`Alice`,receiverName:`Bob`,note:`Dinner 🍕`,amount:45,timestamp:new Date,likes:3,comments:0,privacy:`public`},{id:`2`,senderName:`Carol`,receiverName:`Dave`,note:`Gas ⛽`,amount:35.5,timestamp:new Date,likes:1,comments:0,privacy:`friends`}]);return(0,E.jsxs)(`div`,{className:`space-y-3`,children:[(0,E.jsx)(C,{payments:e,onLike:e=>console.log(`Liked:`,e)}),(0,E.jsx)(`button`,{onClick:()=>t(e=>[...e,{id:String(Date.now()),senderName:`New User`,receiverName:`Friend`,note:`Payment #${e.length+1} 🎉`,amount:Math.floor(Math.random()*200)+10,timestamp:new Date,likes:0,comments:0,privacy:`public`}]),className:`w-full px-3 py-2 text-sm bg-surface-secondary rounded-lg hover:bg-surface-tertiary`,children:`+ New Payment Activity`})]})}},M={args:{payments:[],onLike:e=>console.log(`Liked:`,e)}},N={args:{payments:[{id:`1`,senderName:`QuickTransfer`,receiverName:`You`,note:`Instant refund ✅`,amount:35,timestamp:new Date,likes:0,comments:0,privacy:`private`}],onLike:e=>console.log(`Liked:`,e)}},P={args:{payments:Array.from({length:8},(e,t)=>({id:String(t+1),senderName:[`Alice`,`Bob`,`Carol`,`Dave`,`Eve`,`Frank`,`Grace`,`Henry`][t],receiverName:[`Zoe`,`Yara`,`Xander`,`Wendy`,`Victor`,`Uma`,`Tom`,`Sara`][t],note:[`Coffee ☕`,`Lunch 🥪`,`Gift 🎁`,`Rent 🏠`,`Uber 🚗`,`Groceries 🛒`,`Drinks 🍻`,`Concert 🎵`][t],amount:Math.floor(Math.random()*200)+5,timestamp:new Date(Date.now()-1e3*60*60*(t+1)),likes:Math.floor(Math.random()*30),comments:Math.floor(Math.random()*10),privacy:[`public`,`friends`,`private`][t%3]})),onLike:e=>console.log(`Liked:`,e)}},F={args:{payments:[{id:`1`,senderName:`MobileUser`,receiverName:`Contact`,note:`Quick payment 📱`,amount:25,timestamp:new Date(Date.now()-1e3*60*2),likes:2,comments:0,privacy:`friends`}],onLike:e=>console.log(`Liked:`,e)},decorators:[e=>(0,E.jsx)(`div`,{className:`max-w-sm mx-auto`,children:(0,E.jsx)(e,{})})]},I={parameters:{themes:{themeOverride:`dark`}},args:{payments:[{id:`1`,senderName:`Alice Johnson`,receiverName:`Bob Smith`,note:`Late night snack run 🍔🌙`,amount:28.5,timestamp:new Date(Date.now()-1e3*60*10),likes:18,comments:5,privacy:`public`},{id:`2`,senderName:`Carol White`,receiverName:`David Brown`,note:`Game night contribution 🎲`,amount:15,timestamp:new Date(Date.now()-1e3*60*45),likes:9,comments:2,privacy:`friends`}],onLike:e=>console.log(`Liked:`,e)}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    payments: [{
      id: '1',
      senderName: 'Alice Johnson',
      receiverName: 'Bob Smith',
      note: 'Dinner split 🍕',
      amount: 45.00,
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      likes: 12,
      comments: 3,
      privacy: 'friends'
    }, {
      id: '2',
      senderName: 'Carol White',
      receiverName: 'David Brown',
      note: 'Birthday gift 🎂 🎉',
      amount: 100,
      timestamp: new Date(Date.now() - 1000 * 60 * 120),
      likes: 24,
      comments: 7,
      privacy: 'public'
    }, {
      id: '3',
      senderName: 'Eve Davis',
      receiverName: 'Frank Green',
      note: 'Rent for May 🏠',
      amount: 1500,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5),
      likes: 5,
      comments: 2,
      privacy: 'private'
    }],
    onLike: id => console.log('Liked:', id),
    onComment: id => console.log('Comment:', id)
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    payments: [{
      id: '1',
      senderName: 'Alice Johnson',
      senderAvatar: 'https://i.pravatar.cc/150?u=alice',
      receiverName: 'Bob Smith',
      receiverAvatar: 'https://i.pravatar.cc/150?u=bob',
      note: 'Thanks for the coffee! ☕',
      amount: 5.50,
      timestamp: new Date(Date.now() - 1000 * 60 * 15),
      likes: 8,
      comments: 1,
      privacy: 'public'
    }, {
      id: '2',
      senderName: 'Carol White',
      senderAvatar: 'https://i.pravatar.cc/150?u=carol',
      receiverName: 'David Brown',
      receiverAvatar: 'https://i.pravatar.cc/150?u=david',
      note: 'Weekend trip expenses 🌴',
      amount: 250.00,
      timestamp: new Date(Date.now() - 1000 * 60 * 180),
      likes: 15,
      comments: 4,
      privacy: 'friends'
    }],
    onLike: id => console.log('Liked:', id)
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    payments: [{
      id: '1',
      senderName: 'Grace Hall',
      receiverName: 'Henry Lee',
      note: 'Concert tickets! 🎵🎸',
      amount: 180.00,
      emoji: '🎵',
      timestamp: new Date(Date.now() - 1000 * 60 * 5),
      likes: 34,
      comments: 12,
      privacy: 'public'
    }, {
      id: '2',
      senderName: 'Iris Wang',
      receiverName: 'Jack Miller',
      note: 'Check out my new setup!',
      amount: 2999.99,
      emoji: '💻',
      timestamp: new Date(Date.now() - 1000 * 60 * 60),
      likes: 56,
      comments: 23,
      privacy: 'public'
    }],
    onLike: id => console.log('Liked:', id)
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [payments, setPayments] = useState([{
      id: '1',
      senderName: 'Alice',
      receiverName: 'Bob',
      note: 'Dinner 🍕',
      amount: 45.00,
      timestamp: new Date(),
      likes: 3,
      comments: 0,
      privacy: 'public' as const
    }, {
      id: '2',
      senderName: 'Carol',
      receiverName: 'Dave',
      note: 'Gas ⛽',
      amount: 35.50,
      timestamp: new Date(),
      likes: 1,
      comments: 0,
      privacy: 'friends' as const
    }]);
    return <div className="space-y-3">
                <SocialPaymentFeed payments={payments} onLike={id => console.log('Liked:', id)} />
                <button onClick={() => setPayments(prev => [...prev, {
        id: String(Date.now()),
        senderName: 'New User',
        receiverName: 'Friend',
        note: \`Payment #\${prev.length + 1} 🎉\`,
        amount: Math.floor(Math.random() * 200) + 10,
        timestamp: new Date(),
        likes: 0,
        comments: 0,
        privacy: 'public' as const
      }])} className="w-full px-3 py-2 text-sm bg-surface-secondary rounded-lg hover:bg-surface-tertiary">
                    + New Payment Activity
                </button>
            </div>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    payments: [],
    onLike: id => console.log('Liked:', id)
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    payments: [{
      id: '1',
      senderName: 'QuickTransfer',
      receiverName: 'You',
      note: 'Instant refund ✅',
      amount: 35.00,
      timestamp: new Date(),
      likes: 0,
      comments: 0,
      privacy: 'private'
    }],
    onLike: id => console.log('Liked:', id)
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    payments: Array.from({
      length: 8
    }, (_, i) => ({
      id: String(i + 1),
      senderName: ['Alice', 'Bob', 'Carol', 'Dave', 'Eve', 'Frank', 'Grace', 'Henry'][i],
      receiverName: ['Zoe', 'Yara', 'Xander', 'Wendy', 'Victor', 'Uma', 'Tom', 'Sara'][i],
      note: ['Coffee ☕', 'Lunch 🥪', 'Gift 🎁', 'Rent 🏠', 'Uber 🚗', 'Groceries 🛒', 'Drinks 🍻', 'Concert 🎵'][i],
      amount: Math.floor(Math.random() * 200) + 5,
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * (i + 1)),
      likes: Math.floor(Math.random() * 30),
      comments: Math.floor(Math.random() * 10),
      privacy: (['public', 'friends', 'private'] as const)[i % 3]
    })),
    onLike: id => console.log('Liked:', id)
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    payments: [{
      id: '1',
      senderName: 'MobileUser',
      receiverName: 'Contact',
      note: 'Quick payment 📱',
      amount: 25.00,
      timestamp: new Date(Date.now() - 1000 * 60 * 2),
      likes: 2,
      comments: 0,
      privacy: 'friends'
    }],
    onLike: id => console.log('Liked:', id)
  },
  decorators: [(Story: any) => <div className="max-w-sm mx-auto">
                <Story />
            </div>]
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    payments: [{
      id: '1',
      senderName: 'Alice Johnson',
      receiverName: 'Bob Smith',
      note: 'Late night snack run 🍔🌙',
      amount: 28.50,
      timestamp: new Date(Date.now() - 1000 * 60 * 10),
      likes: 18,
      comments: 5,
      privacy: 'public'
    }, {
      id: '2',
      senderName: 'Carol White',
      receiverName: 'David Brown',
      note: 'Game night contribution 🎲',
      amount: 15.00,
      timestamp: new Date(Date.now() - 1000 * 60 * 45),
      likes: 9,
      comments: 2,
      privacy: 'friends'
    }],
    onLike: id => console.log('Liked:', id)
  }
}`,...I.parameters?.docs?.source}}},L=[`Default`,`WithAvatars`,`WithEmojisAndMedia`,`InteractiveFeed`,`EmptyFeed`,`SinglePayment`,`ManyPayments`,`MobileView`,`DarkMode`]}))();export{I as DarkMode,O as Default,M as EmptyFeed,j as InteractiveFeed,P as ManyPayments,F as MobileView,N as SinglePayment,k as WithAvatars,A as WithEmojisAndMedia,L as __namedExportsOrder,D as default};