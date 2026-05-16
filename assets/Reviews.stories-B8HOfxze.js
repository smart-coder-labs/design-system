import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ns4lj-Vt.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";var o,s,c,l,u=e((()=>{o=t(n()),r(),s=a(),c=({value:e,defaultValue:t=0,max:n=5,readOnly:r=!1,size:a=`md`,onChange:c})=>{let l=typeof e==`number`,[u,d]=(0,o.useState)(t),f=l?e:u,p={sm:`w-4 h-4`,md:`w-5 h-5`,lg:`w-6 h-6`},m=e=>{r||(l||d(e),c?.(e))};return(0,s.jsx)(`div`,{className:i(`inline-flex items-center`,r?`pointer-events-none`:``),role:r?void 0:`radiogroup`,"aria-label":r?`Rating ${f} of ${n}`:`Rating`,children:Array.from({length:n}).map((e,t)=>{let n=t+1,o=n<=f;return(0,s.jsx)(`button`,{type:`button`,"aria-checked":o,role:r?void 0:`radio`,onClick:()=>m(n),className:i(`inline-flex items-center justify-center`,p[a],`rounded-sm`,o?`text-accent-blue`:`text-text-tertiary`,r?`cursor-default`:`hover:text-accent-blue`),"aria-label":`${n} star${n>1?`s`:``}`,children:(0,s.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,"aria-hidden":!0,className:`w-full h-full`,children:(0,s.jsx)(`path`,{d:`M12 .587l3.668 7.431 8.2 1.192-5.934 5.788 1.402 8.172L12 18.896l-7.336 3.874 1.402-8.172L.132 9.21l8.2-1.192z`})})},n)})})},l=({reviews:e,className:t=``,compact:n=!1})=>(0,s.jsx)(`div`,{className:i(`space-y-4`,t),children:e.map(e=>(0,s.jsxs)(`article`,{className:i(`flex gap-4 items-start`),children:[(0,s.jsx)(`div`,{className:`flex-shrink-0`,children:e.avatar??(0,s.jsx)(`div`,{className:`w-10 h-10 rounded-full bg-surface-secondary`})}),(0,s.jsxs)(`div`,{className:`flex-1`,children:[(0,s.jsxs)(`div`,{className:`flex items-center justify-between`,children:[(0,s.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,s.jsx)(`div`,{className:`font-medium text-text-primary`,children:e.author}),(0,s.jsx)(`div`,{className:`text-sm text-text-tertiary`,children:e.date})]}),(0,s.jsx)(`div`,{children:(0,s.jsx)(c,{value:e.rating,readOnly:!0,size:n?`sm`:`md`})})]}),e.text&&(0,s.jsx)(`p`,{className:`mt-2 text-text-primary`,children:e.text})]})]},e.id))}),c.__docgenInfo={description:``,methods:[],displayName:`RatingStars`,props:{value:{required:!1,tsType:{name:`number`},description:``},defaultValue:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`5`,computed:!1}},readOnly:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(v: number) => void`,signature:{arguments:[{type:{name:`number`},name:`v`}],return:{name:`void`}}},description:``}}},l.__docgenInfo={description:``,methods:[],displayName:`Reviews`,props:{reviews:{required:!0,tsType:{name:`Array`,elements:[{name:`Review`}],raw:`Review[]`},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},compact:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}}}}})),d,f,p,m,h,g,_,v,y,b,x,S;e((()=>{u(),d=t(n()),f=a(),p={title:`Data Display/ReviewsRatings`,component:l,tags:[`autodocs`]},m={args:{reviews:[{id:`1`,author:`Alice Johnson`,rating:5,date:`May 10, 2025`,text:`Excellent app! Very intuitive and easy to use for managing my investments.`},{id:`2`,author:`Bob Smith`,rating:4,date:`May 8, 2025`,text:`Great platform, but I wish there were more cryptocurrency options.`},{id:`3`,author:`Carol White`,rating:3,date:`May 5, 2025`,text:`Decent for basic banking. Advanced features need improvement.`}],onAddReview:e=>console.log(`New review:`,e)}},h={args:{reviews:[{id:`1`,author:`David Brown`,rating:5,date:`May 11, 2025`,text:`Best fintech app I have ever used. The interface is gorgeous.`},{id:`2`,author:`Eve Davis`,rating:4,date:`May 10, 2025`,text:`Highly recommend for budgeting and saving goals.`},{id:`3`,author:`Frank Green`,rating:5,date:`May 9, 2025`,text:`Customer support is amazing. Helped me resolve an issue in minutes.`},{id:`4`,author:`Grace Hall`,rating:2,date:`May 7, 2025`,text:`App crashes frequently on my device. Needs optimization.`},{id:`5`,author:`Henry Lee`,rating:4,date:`May 6, 2025`,text:`Solid platform for daily banking and occasional trading.`},{id:`6`,author:`Iris Wang`,rating:5,date:`May 4, 2025`,text:`The dark mode is beautiful. Love the attention to detail.`}],onAddReview:e=>console.log(`New review:`,e)}},g={args:{reviews:[],onAddReview:e=>console.log(`New review:`,e)}},_={render:()=>{let[e,t]=(0,d.useState)([{id:`1`,author:`Alice`,rating:5,date:`May 10, 2025`,text:`Great app!`}]),[n,r]=(0,d.useState)(0),[i,a]=(0,d.useState)(``);return(0,f.jsxs)(`div`,{className:`space-y-4`,children:[(0,f.jsx)(l,{reviews:e,onAddReview:e=>{t(t=>[...t,{...e,id:String(Date.now()),date:new Date().toLocaleDateString()}])}}),(0,f.jsxs)(`div`,{className:`p-4 border border-border-primary rounded-xl space-y-3`,children:[(0,f.jsx)(`h4`,{className:`text-sm font-semibold`,children:`Add Your Review`}),(0,f.jsx)(c,{value:n,onChange:r,size:`lg`}),(0,f.jsx)(`textarea`,{className:`w-full p-2 border border-border-primary rounded-lg text-sm resize-none`,rows:3,placeholder:`Write your review...`,value:i,onChange:e=>a(e.target.value)}),(0,f.jsx)(`button`,{disabled:!n||!i,onClick:()=>{t(e=>[...e,{id:String(Date.now()),author:`You`,rating:n,date:`Just now`,text:i}]),r(0),a(``)},className:`px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50`,children:`Submit Review`})]})]})}},v={parameters:{themes:{themeOverride:`dark`}},args:{reviews:[{id:`1`,author:`Alice Johnson`,rating:5,date:`May 10, 2025`,text:`Excellent app in dark mode too!`},{id:`2`,author:`Bob Smith`,rating:4,date:`May 8, 2025`,text:`Looks great with dark theme.`}],onAddReview:e=>console.log(`New review:`,e)}},y={args:{reviews:[{id:`1`,author:`Warren B.`,rating:5,date:`May 11, 2026`,text:`Best high-yield savings account. APY is unbeatable at 4.5%.`},{id:`2`,author:`Maria G.`,rating:4,date:`May 9, 2026`,text:`The robo-advisor feature really helps me stay on track with my goals.`},{id:`3`,author:`Carlos R.`,rating:1,date:`May 7, 2026`,text:`Customer service wait times are unacceptable. Been on hold for 45 minutes.`},{id:`4`,author:`Sarah K.`,rating:5,date:`May 5, 2026`,text:`Finally a bank that understands modern needs. Instant transfers are a game-changer.`}],onAddReview:e=>console.log(`New review:`,e)},parameters:{docs:{description:{story:`A product review section for a fintech app showing real user feedback on banking features like APY, robo-advisor, support, and transfer speed.`}}}},b={parameters:{viewport:{defaultViewport:`mobile1`}}},x={parameters:{docs:{description:{story:`Reviews used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: [{
      id: '1',
      author: 'Alice Johnson',
      rating: 5,
      date: 'May 10, 2025',
      text: 'Excellent app! Very intuitive and easy to use for managing my investments.'
    }, {
      id: '2',
      author: 'Bob Smith',
      rating: 4,
      date: 'May 8, 2025',
      text: 'Great platform, but I wish there were more cryptocurrency options.'
    }, {
      id: '3',
      author: 'Carol White',
      rating: 3,
      date: 'May 5, 2025',
      text: 'Decent for basic banking. Advanced features need improvement.'
    }],
    onAddReview: review => console.log('New review:', review)
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: [{
      id: '1',
      author: 'David Brown',
      rating: 5,
      date: 'May 11, 2025',
      text: 'Best fintech app I have ever used. The interface is gorgeous.'
    }, {
      id: '2',
      author: 'Eve Davis',
      rating: 4,
      date: 'May 10, 2025',
      text: 'Highly recommend for budgeting and saving goals.'
    }, {
      id: '3',
      author: 'Frank Green',
      rating: 5,
      date: 'May 9, 2025',
      text: 'Customer support is amazing. Helped me resolve an issue in minutes.'
    }, {
      id: '4',
      author: 'Grace Hall',
      rating: 2,
      date: 'May 7, 2025',
      text: 'App crashes frequently on my device. Needs optimization.'
    }, {
      id: '5',
      author: 'Henry Lee',
      rating: 4,
      date: 'May 6, 2025',
      text: 'Solid platform for daily banking and occasional trading.'
    }, {
      id: '6',
      author: 'Iris Wang',
      rating: 5,
      date: 'May 4, 2025',
      text: 'The dark mode is beautiful. Love the attention to detail.'
    }],
    onAddReview: review => console.log('New review:', review)
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: [],
    onAddReview: review => console.log('New review:', review)
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [reviews, setReviews] = useState([{
      id: '1',
      author: 'Alice',
      rating: 5,
      date: 'May 10, 2025',
      text: 'Great app!'
    }]);
    const [newRating, setNewRating] = useState(0);
    const [newText, setNewText] = useState('');
    return <div className="space-y-4">
                <Reviews reviews={reviews} onAddReview={review => {
        setReviews(prev => [...prev, {
          ...review,
          id: String(Date.now()),
          date: new Date().toLocaleDateString()
        }]);
      }} />
                <div className="p-4 border border-border-primary rounded-xl space-y-3">
                    <h4 className="text-sm font-semibold">Add Your Review</h4>
                    <RatingStars value={newRating} onChange={setNewRating} size="lg" />
                    <textarea className="w-full p-2 border border-border-primary rounded-lg text-sm resize-none" rows={3} placeholder="Write your review..." value={newText} onChange={e => setNewText(e.target.value)} />
                    <button disabled={!newRating || !newText} onClick={() => {
          setReviews(prev => [...prev, {
            id: String(Date.now()),
            author: 'You',
            rating: newRating,
            date: 'Just now',
            text: newText
          }]);
          setNewRating(0);
          setNewText('');
        }} className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50">
                        Submit Review
                    </button>
                </div>
            </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    reviews: [{
      id: '1',
      author: 'Alice Johnson',
      rating: 5,
      date: 'May 10, 2025',
      text: 'Excellent app in dark mode too!'
    }, {
      id: '2',
      author: 'Bob Smith',
      rating: 4,
      date: 'May 8, 2025',
      text: 'Looks great with dark theme.'
    }],
    onAddReview: review => console.log('New review:', review)
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: [{
      id: '1',
      author: 'Warren B.',
      rating: 5,
      date: 'May 11, 2026',
      text: 'Best high-yield savings account. APY is unbeatable at 4.5%.'
    }, {
      id: '2',
      author: 'Maria G.',
      rating: 4,
      date: 'May 9, 2026',
      text: 'The robo-advisor feature really helps me stay on track with my goals.'
    }, {
      id: '3',
      author: 'Carlos R.',
      rating: 1,
      date: 'May 7, 2026',
      text: 'Customer service wait times are unacceptable. Been on hold for 45 minutes.'
    }, {
      id: '4',
      author: 'Sarah K.',
      rating: 5,
      date: 'May 5, 2026',
      text: 'Finally a bank that understands modern needs. Instant transfers are a game-changer.'
    }],
    onAddReview: review => console.log('New review:', review)
  },
  parameters: {
    docs: {
      description: {
        story: 'A product review section for a fintech app showing real user feedback on banking features like APY, robo-advisor, support, and transfer speed.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Reviews used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`ManyReviews`,`NoReviews`,`InteractiveReview`,`DarkMode`,`FinancialProductReview`,`MobileView`,`FintechUseCase`]}))();export{v as DarkMode,m as Default,y as FinancialProductReview,x as FintechUseCase,_ as InteractiveReview,h as ManyReviews,b as MobileView,g as NoReviews,S as __namedExportsOrder,p as default};