import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ba3ihGpN.js";import{t as r}from"./jsx-runtime-WZfjI2gv.js";import{i,n as a,t as o}from"./Reviews-BSWsDghy.js";var s,c,l,u,d,f,p,m,h,g,_,v;e((()=>{i(),s=t(n()),c=r(),l={title:`Data Display/ReviewsRatings`,component:a,tags:[`autodocs`]},u={args:{reviews:[{id:`1`,author:`Alice Johnson`,rating:5,date:`May 10, 2025`,text:`Excellent app! Very intuitive and easy to use for managing my investments.`},{id:`2`,author:`Bob Smith`,rating:4,date:`May 8, 2025`,text:`Great platform, but I wish there were more cryptocurrency options.`},{id:`3`,author:`Carol White`,rating:3,date:`May 5, 2025`,text:`Decent for basic banking. Advanced features need improvement.`}],onAddReview:e=>console.log(`New review:`,e)}},d={args:{reviews:[{id:`1`,author:`David Brown`,rating:5,date:`May 11, 2025`,text:`Best fintech app I have ever used. The interface is gorgeous.`},{id:`2`,author:`Eve Davis`,rating:4,date:`May 10, 2025`,text:`Highly recommend for budgeting and saving goals.`},{id:`3`,author:`Frank Green`,rating:5,date:`May 9, 2025`,text:`Customer support is amazing. Helped me resolve an issue in minutes.`},{id:`4`,author:`Grace Hall`,rating:2,date:`May 7, 2025`,text:`App crashes frequently on my device. Needs optimization.`},{id:`5`,author:`Henry Lee`,rating:4,date:`May 6, 2025`,text:`Solid platform for daily banking and occasional trading.`},{id:`6`,author:`Iris Wang`,rating:5,date:`May 4, 2025`,text:`The dark mode is beautiful. Love the attention to detail.`}],onAddReview:e=>console.log(`New review:`,e)}},f={args:{reviews:[],onAddReview:e=>console.log(`New review:`,e)}},p={render:()=>{let[e,t]=(0,s.useState)([{id:`1`,author:`Alice`,rating:5,date:`May 10, 2025`,text:`Great app!`}]),[n,r]=(0,s.useState)(0),[i,l]=(0,s.useState)(``);return(0,c.jsxs)(`div`,{className:`space-y-4`,children:[(0,c.jsx)(a,{reviews:e,onAddReview:e=>{t(t=>[...t,{...e,id:String(Date.now()),date:new Date().toLocaleDateString()}])}}),(0,c.jsxs)(`div`,{className:`p-4 border border-border-primary rounded-xl space-y-3`,children:[(0,c.jsx)(`h4`,{className:`text-sm font-semibold`,children:`Add Your Review`}),(0,c.jsx)(o,{value:n,onChange:r,size:`lg`}),(0,c.jsx)(`textarea`,{className:`w-full p-2 border border-border-primary rounded-lg text-sm resize-none`,rows:3,placeholder:`Write your review...`,value:i,onChange:e=>l(e.target.value)}),(0,c.jsx)(`button`,{disabled:!n||!i,onClick:()=>{t(e=>[...e,{id:String(Date.now()),author:`You`,rating:n,date:`Just now`,text:i}]),r(0),l(``)},className:`px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50`,children:`Submit Review`})]})]})}},m={parameters:{themes:{themeOverride:`dark`}},args:{reviews:[{id:`1`,author:`Alice Johnson`,rating:5,date:`May 10, 2025`,text:`Excellent app in dark mode too!`},{id:`2`,author:`Bob Smith`,rating:4,date:`May 8, 2025`,text:`Looks great with dark theme.`}],onAddReview:e=>console.log(`New review:`,e)}},h={args:{reviews:[{id:`1`,author:`Warren B.`,rating:5,date:`May 11, 2026`,text:`Best high-yield savings account. APY is unbeatable at 4.5%.`},{id:`2`,author:`Maria G.`,rating:4,date:`May 9, 2026`,text:`The robo-advisor feature really helps me stay on track with my goals.`},{id:`3`,author:`Carlos R.`,rating:1,date:`May 7, 2026`,text:`Customer service wait times are unacceptable. Been on hold for 45 minutes.`},{id:`4`,author:`Sarah K.`,rating:5,date:`May 5, 2026`,text:`Finally a bank that understands modern needs. Instant transfers are a game-changer.`}],onAddReview:e=>console.log(`New review:`,e)},parameters:{docs:{description:{story:`A product review section for a fintech app showing real user feedback on banking features like APY, robo-advisor, support, and transfer speed.`}}}},g={parameters:{viewport:{defaultViewport:`mobile1`}}},_={parameters:{docs:{description:{story:`Reviews used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.`}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    reviews: [],
    onAddReview: review => console.log('New review:', review)
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Reviews used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.'
      }
    }
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`ManyReviews`,`NoReviews`,`InteractiveReview`,`DarkMode`,`FinancialProductReview`,`MobileView`,`FintechUseCase`]}))();export{m as DarkMode,u as Default,h as FinancialProductReview,_ as FintechUseCase,p as InteractiveReview,d as ManyReviews,g as MobileView,f as NoReviews,v as __namedExportsOrder,l as default};