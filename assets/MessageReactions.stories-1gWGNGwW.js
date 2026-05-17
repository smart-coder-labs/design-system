import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-D0o8cdjS.js";import{C as r,Kt as i,Mr as a,S as o,in as s,t as c}from"./lucide-react-yAgQzC9Q.js";import{n as l,t as u}from"./utils-ijcE-ZHT.js";import{t as d}from"./jsx-runtime-DaLCRA3n.js";import{s as f,t as p}from"./es-biEEKJuQ.js";var m,h,g,_,v,y=e((()=>{m=t(n()),l(),p(),c(),h=d(),g={like:{icon:(0,h.jsx)(o,{className:`w-4 h-4`}),label:`Like`,color:`text-accent-blue`},love:{icon:(0,h.jsx)(s,{className:`w-4 h-4`}),label:`Love`,color:`text-status-error`},laugh:{icon:(0,h.jsx)(i,{className:`w-4 h-4`}),label:`Haha`,color:`text-status-warning`},angry:{icon:(0,h.jsx)(a,{className:`w-4 h-4`}),label:`Angry`,color:`text-status-error`},"thumbs-up":{icon:(0,h.jsx)(o,{className:`w-4 h-4`}),label:`Thumbs Up`,color:`text-accent-blue`},"thumbs-down":{icon:(0,h.jsx)(r,{className:`w-4 h-4`}),label:`Thumbs Down`,color:`text-text-tertiary`}},_=m.forwardRef(({reactions:e,onReactionClick:t,showCount:n=!0,showUsers:r=!1,className:i,...a},o)=>{let[s,c]=(0,m.useState)(null);return e.length===0?null:(0,h.jsx)(`div`,{ref:o,className:u(`flex flex-wrap gap-1.5 mt-2`,i),...a,children:e.map(e=>{let i=g[e.type],a=e.userReacted;return(0,h.jsxs)(f.button,{onClick:()=>t?.(e.type),onMouseEnter:()=>c(e.type),onMouseLeave:()=>c(null),className:u(`flex items-center gap-1.5 px-2 py-1 rounded-full`,`bg-surface-secondary border border-border-primary`,`hover:bg-surface-tertiary transition-colors`,`text-xs font-medium`,a&&`bg-accent-blue/10 border-accent-blue/30`,i.color),whileHover:{scale:1.05},whileTap:{scale:.95},children:[(0,h.jsx)(`span`,{className:u(`flex-shrink-0`,i.color),children:i.icon}),n&&e.count>0&&(0,h.jsx)(`span`,{className:u(`text-text-secondary`,a&&`text-accent-blue font-semibold`),children:e.count}),r&&s===e.type&&e.users&&e.users.length>0&&(0,h.jsxs)(f.div,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},className:`absolute bottom-full mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap z-50`,children:[e.users.slice(0,3).join(`, `),e.users.length>3&&` +${e.users.length-3} more`]})]},e.type)})})}),_.displayName=`MessageReactions`,v=({onReactionSelect:e,className:t})=>(0,h.jsx)(f.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},className:u(`flex items-center gap-1 p-1 bg-surface-primary border border-border-primary rounded-full shadow-lg`,t),children:[`like`,`love`,`laugh`,`thumbs-up`,`thumbs-down`,`angry`].map(t=>{let n=g[t];return(0,h.jsx)(f.button,{onClick:()=>e(t),className:u(`p-1.5 rounded-full hover:bg-surface-secondary transition-colors`,n.color),whileHover:{scale:1.2},whileTap:{scale:.9},title:n.label,children:n.icon},t)})}),v.displayName=`ReactionPicker`,_.__docgenInfo={description:``,methods:[],displayName:`MessageReactions`,props:{reactions:{required:!0,tsType:{name:`Array`,elements:[{name:`Reaction`}],raw:`Reaction[]`},description:``},onReactionClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(type: ReactionType) => void`,signature:{arguments:[{type:{name:`union`,raw:`'like' | 'love' | 'laugh' | 'angry' | 'thumbs-up' | 'thumbs-down'`,elements:[{name:`literal`,value:`'like'`},{name:`literal`,value:`'love'`},{name:`literal`,value:`'laugh'`},{name:`literal`,value:`'angry'`},{name:`literal`,value:`'thumbs-up'`},{name:`literal`,value:`'thumbs-down'`}]},name:`type`}],return:{name:`void`}}},description:``},showCount:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},showUsers:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}},v.__docgenInfo={description:``,methods:[],displayName:`ReactionPicker`,props:{onReactionSelect:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(type: ReactionType) => void`,signature:{arguments:[{type:{name:`union`,raw:`'like' | 'love' | 'laugh' | 'angry' | 'thumbs-up' | 'thumbs-down'`,elements:[{name:`literal`,value:`'like'`},{name:`literal`,value:`'love'`},{name:`literal`,value:`'laugh'`},{name:`literal`,value:`'angry'`},{name:`literal`,value:`'thumbs-up'`},{name:`literal`,value:`'thumbs-down'`}]},name:`type`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})),b,x,S,C,w,T,E,D,O,k,A,j;e((()=>{n(),y(),b=d(),{action:x}=__STORYBOOK_MODULE_ACTIONS__,S={title:`Data Display/MessageReactions`,component:_,tags:[`autodocs`],parameters:{layout:`centered`}},C={args:{reactions:[{emoji:`👍`,count:5,reacted:!1},{emoji:`❤️`,count:3,reacted:!0},{emoji:`😄`,count:2,reacted:!1},{emoji:`🎉`,count:1,reacted:!1}],onReact:x(`react`)}},w={args:{reactions:[{emoji:`👍`,count:12,reacted:!1}],onReact:x(`react`)}},T={args:{reactions:[{emoji:`👍`,count:42,reacted:!1},{emoji:`❤️`,count:28,reacted:!0},{emoji:`🔥`,count:15,reacted:!1},{emoji:`🎉`,count:12,reacted:!1},{emoji:`🚀`,count:8,reacted:!1},{emoji:`💯`,count:5,reacted:!1},{emoji:`👏`,count:3,reacted:!1}],onReact:x(`react`)}},E={args:{reactions:[{emoji:`👍`,count:10,reacted:!0},{emoji:`❤️`,count:7,reacted:!0},{emoji:`😂`,count:4,reacted:!0}],onReact:x(`react`)}},D={args:{reactions:[{emoji:`💪`,count:24,reacted:!1},{emoji:`🎯`,count:18,reacted:!0},{emoji:`💰`,count:12,reacted:!1},{emoji:`🔥`,count:9,reacted:!1}],onReact:x(`react`)}},O={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,b.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,b.jsx)(e,{})})]},k={parameters:{viewport:{defaultViewport:`mobile1`}}},A={parameters:{docs:{description:{story:`MessageReactions used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    reactions: [{
      emoji: '👍',
      count: 5,
      reacted: false
    }, {
      emoji: '❤️',
      count: 3,
      reacted: true
    }, {
      emoji: '😄',
      count: 2,
      reacted: false
    }, {
      emoji: '🎉',
      count: 1,
      reacted: false
    }],
    onReact: action('react')
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    reactions: [{
      emoji: '👍',
      count: 12,
      reacted: false
    }],
    onReact: action('react')
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    reactions: [{
      emoji: '👍',
      count: 42,
      reacted: false
    }, {
      emoji: '❤️',
      count: 28,
      reacted: true
    }, {
      emoji: '🔥',
      count: 15,
      reacted: false
    }, {
      emoji: '🎉',
      count: 12,
      reacted: false
    }, {
      emoji: '🚀',
      count: 8,
      reacted: false
    }, {
      emoji: '💯',
      count: 5,
      reacted: false
    }, {
      emoji: '👏',
      count: 3,
      reacted: false
    }],
    onReact: action('react')
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    reactions: [{
      emoji: '👍',
      count: 10,
      reacted: true
    }, {
      emoji: '❤️',
      count: 7,
      reacted: true
    }, {
      emoji: '😂',
      count: 4,
      reacted: true
    }],
    onReact: action('react')
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    reactions: [{
      emoji: '💪',
      count: 24,
      reacted: false
    }, {
      emoji: '🎯',
      count: 18,
      reacted: true
    }, {
      emoji: '💰',
      count: 12,
      reacted: false
    }, {
      emoji: '🔥',
      count: 9,
      reacted: false
    }],
    onReact: action('react')
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    themes: {
      themeOverride: 'dark'
    }
  },
  decorators: [Story => <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>]
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'MessageReactions used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...A.parameters?.docs?.source}}},j=[`Default`,`SingleReaction`,`ManyReactions`,`AllReacted`,`FinanceReactions`,`DarkMode`,`MobileView`,`FintechUseCase`]}))();export{E as AllReacted,O as DarkMode,C as Default,D as FinanceReactions,A as FintechUseCase,T as ManyReactions,k as MobileView,w as SingleReaction,j as __namedExportsOrder,S as default};