import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CpZpVqtp.js";import{It as r,Pn as i,Pt as a,Qn as o,V as s,nn as c,t as l}from"./lucide-react-ClkQfjSy.js";import{t as u}from"./jsx-runtime-DaLCRA3n.js";var d,f,p,m,h=e((()=>{d=t(n()),l(),f=u(),p=()=>{let[e,t]=(0,d.useState)(0);return(0,f.jsxs)(`div`,{className:`bg-surface-primary rounded-2xl border border-border-primary p-6`,children:[(0,f.jsxs)(`div`,{className:`mb-6`,children:[(0,f.jsx)(`h3`,{className:`text-xl font-bold text-text-primary mb-2`,children:`Desbloqueo Progresivo`}),(0,f.jsx)(`p`,{className:`text-sm text-gray-500 dark:text-gray-400`,children:`En lugar de pedirte todo a la vez, solo pedimos lo que necesitas según cómo uses la app.`})]}),(0,f.jsxs)(`div`,{className:`relative`,children:[(0,f.jsx)(`div`,{className:`absolute top-0 bottom-0 left-[23px] w-0.5 bg-background-secondary`}),(0,f.jsx)(`div`,{className:`space-y-6 relative`,children:[{id:`contact`,title:`Datos Básicos`,description:`Crea tu perfil y accede al modo explorador.`,icon:a,accessLevel:`Ver Catálogo`,required:!0,isComplete:!0},{id:`identity`,title:`Verifica tu Identidad`,description:`Por ley, necesitamos saber que eres tú para iniciar transacciones.`,icon:s,accessLevel:`Recibir Dinero (Límite 3,000 MXN)`,required:!0,isComplete:!1},{id:`address`,title:`Domicilio Legal`,description:`Sube un comprobante para habilitar el envío de tu tarjeta física.`,icon:c,accessLevel:`Tarjeta Física & Sin Límites`,required:!1,isComplete:!1}].map((n,a)=>{let s=a===e,c=a<e||n.isComplete,l=a>e,u=n.icon;return(0,f.jsxs)(`div`,{className:`relative flex gap-5 group cursor-pointer ${l?`opacity-60 grayscale`:``}`,onClick:()=>!l&&t(a),children:[(0,f.jsx)(`div`,{className:`relative z-10 w-12 h-12 rounded-full border-4 ${c?`bg-green-500 border-green-100 dark:border-green-800 text-white`:s?`bg-blue-600 border-blue-100 dark:border-blue-800 text-white`:`bg-surface-primary border-border-primary text-gray-400`} flex items-center justify-center shrink-0 transition-colors`,children:c?(0,f.jsx)(m,{className:`w-5 h-5`}):(0,f.jsx)(u,{className:`w-5 h-5`})}),(0,f.jsx)(`div`,{className:`flex-1 pb-4`,children:(0,f.jsxs)(`div`,{className:`p-4 rounded-xl border transition-all ${s?`bg-blue-50/50 dark:bg-blue-900 border-blue-200 dark:border-blue-800 shadow-md ring-1 ring-blue-500/20`:`bg-surface-primary border-border-primary hover:border-gray-300 dark:hover:border-gray-700`}`,children:[(0,f.jsxs)(`div`,{className:`flex justify-between items-start mb-2`,children:[(0,f.jsx)(`h4`,{className:`font-semibold ${s?`text-blue-900 dark:text-blue-50`:`text-text-primary`}`,children:n.title}),n.required?(0,f.jsx)(`span`,{className:`text-[10px] font-bold uppercase tracking-wider bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-50 px-2 py-0.5 rounded-full`,children:`Obligatorio`}):(0,f.jsx)(`span`,{className:`text-[10px] font-bold uppercase tracking-wider bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400 px-2 py-0.5 rounded-full`,children:`Opcional`})]}),(0,f.jsx)(`p`,{className:`text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed`,children:n.description}),(0,f.jsxs)(`div`,{className:`flex items-center gap-2 bg-gray-50 dark:bg-gray-800 p-2.5 rounded-lg border border-border-primary`,children:[l?(0,f.jsx)(r,{className:`w-4 h-4 text-gray-400`}):(0,f.jsx)(i,{className:`w-4 h-4 ${s?`text-blue-500`:`text-green-500`}`}),(0,f.jsxs)(`span`,{className:`text-xs font-medium text-gray-700 dark:text-gray-300 flex-1`,children:[`Desbloquea: `,(0,f.jsx)(`span`,{className:l?`opacity-60`:`font-semibold`,children:n.accessLevel})]}),s&&(0,f.jsxs)(`button`,{className:`text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-3 py-1.5 rounded-md flex items-center gap-1`,children:[`Completar`,(0,f.jsx)(o,{className:`w-3 h-3`})]})]})]})})]},n.id)})})]})]})},m=({className:e})=>(0,f.jsx)(`svg`,{xmlns:`http://www.w3.org/2000/svg`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`,strokeLinejoin:`round`,className:e,children:(0,f.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),p.__docgenInfo={description:``,methods:[],displayName:`MicroCommitmentStepper`}})),g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{n(),h(),g=u(),_={title:`Fintech/Engagement/MicroCommitmentStepper`,component:p,tags:[`autodocs`],parameters:{layout:`centered`}},v={args:{steps:[{id:`1`,title:`Save $5/day`,description:`Skip one coffee`,completed:!0},{id:`2`,title:`Save $10/day`,description:`Cook dinner at home`,completed:!1},{id:`3`,title:`Save $25/day`,description:`Cancel unused subscription`,completed:!1}],onComplete:e=>console.log(`Completed:`,e)}},y={args:{steps:[{id:`1`,title:`Save $5 this week`,description:`Skip 1 takeout coffee`,completed:!0}],onComplete:e=>console.log(`Completed:`,e)}},b={args:{steps:[{id:`1`,title:`Save $5/day`,description:`Skip 1 coffee per day`,completed:!0},{id:`2`,title:`Save $10/day`,description:`Cook 1 extra meal at home`,completed:!0},{id:`3`,title:`Save $25/day`,description:`Cancel 1 subscription`,completed:!1}],onComplete:e=>console.log(`Completed:`,e)}},x={render:()=>(0,g.jsxs)(`div`,{className:`w-full max-w-md space-y-6`,children:[(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`h3`,{className:`text-sm font-bold text-text-primary`,children:`52-Week Savings Challenge`}),(0,g.jsx)(`p`,{className:`text-xs text-text-tertiary mt-1`,children:`Increase your savings by $1 every week`})]}),(0,g.jsx)(p,{steps:[{id:`w1`,title:`Week 1: Save $1`,description:`Start small, build momentum`,completed:!0},{id:`w2`,title:`Week 2: Save $2`,description:`Double it up`,completed:!0},{id:`w3`,title:`Week 3: Save $3`,description:`Keep the streak going`,completed:!0},{id:`w4`,title:`Week 4: Save $4`,description:`You're on a roll!`,completed:!1}],onComplete:e=>console.log(`Completed week:`,e)}),(0,g.jsxs)(`div`,{className:`p-4 bg-surface-secondary rounded-xl border border-border-primary`,children:[(0,g.jsx)(`p`,{className:`text-xs text-text-tertiary`,children:`Progress: 3/52 weeks`}),(0,g.jsx)(`p`,{className:`text-lg font-bold text-text-primary mt-1`,children:`$6 saved so far`})]})]})},S={args:{steps:[{id:`1`,title:`Pay $50 extra`,description:`Add $50 to your minimum payment`,completed:!0},{id:`2`,title:`Pay $100 extra`,description:`Find $100 in your budget`,completed:!1},{id:`3`,title:`Pay $200 extra`,description:`Cut one dining-out day per week`,completed:!1},{id:`4`,title:`Pay $500 extra`,description:`Sell something unused`,completed:!1}],onComplete:e=>console.log(`Completed:`,e)}},C={args:{steps:[{id:`1`,title:`Save $5/day`,description:`Skip one coffee`,completed:!0},{id:`2`,title:`Save $10/day`,description:`Cook dinner at home`,completed:!0}],onComplete:e=>console.log(`Completed:`,e)}},w={render:()=>(0,g.jsx)(`div`,{style:{padding:20},children:(0,g.jsx)(p,{steps:[{id:`1`,title:`Create Account`,description:`Set up your profile and preferences`,icon:()=>null,accessLevel:`basic`,required:!0,isComplete:!0},{id:`2`,title:`Verify Identity`,description:`Upload your government ID`,icon:()=>null,accessLevel:`basic`,required:!0,isComplete:!0},{id:`3`,title:`Fund Account`,description:`Add your first deposit`,icon:()=>null,accessLevel:`basic`,required:!0,isComplete:!1},{id:`4`,title:`Start Investing`,description:`Choose your first portfolio`,icon:()=>null,accessLevel:`basic`,required:!0,isComplete:!1}]})})},T={render:()=>(0,g.jsx)(`div`,{style:{padding:20},children:(0,g.jsx)(p,{steps:[{id:`1`,title:`Sign Up`,description:`Basic registration complete`,icon:()=>null,accessLevel:`basic`,required:!0,isComplete:!0},{id:`2`,title:`KYC Verification`,description:`Identity confirmed`,icon:()=>null,accessLevel:`basic`,required:!0,isComplete:!0},{id:`3`,title:`Enable 2FA`,description:`Extra security layer active`,icon:()=>null,accessLevel:`basic`,required:!0,isComplete:!0}]})})},E={render:()=>(0,g.jsx)(`div`,{style:{padding:20},children:(0,g.jsx)(p,{steps:[{id:`1`,title:`Welcome!`,description:`You are one step away from your first investment`,icon:()=>null,accessLevel:`basic`,required:!0,isComplete:!0},{id:`2`,title:`Add Funds`,description:`Deposit at least $10 to get started`,icon:()=>null,accessLevel:`basic`,required:!0,isComplete:!1}]})})},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: '1',
      title: 'Save $5/day',
      description: 'Skip one coffee',
      completed: true
    }, {
      id: '2',
      title: 'Save $10/day',
      description: 'Cook dinner at home',
      completed: false
    }, {
      id: '3',
      title: 'Save $25/day',
      description: 'Cancel unused subscription',
      completed: false
    }],
    onComplete: stepId => console.log('Completed:', stepId)
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: '1',
      title: 'Save $5 this week',
      description: 'Skip 1 takeout coffee',
      completed: true
    }],
    onComplete: stepId => console.log('Completed:', stepId)
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: '1',
      title: 'Save $5/day',
      description: 'Skip 1 coffee per day',
      completed: true
    }, {
      id: '2',
      title: 'Save $10/day',
      description: 'Cook 1 extra meal at home',
      completed: true
    }, {
      id: '3',
      title: 'Save $25/day',
      description: 'Cancel 1 subscription',
      completed: false
    }],
    onComplete: stepId => console.log('Completed:', stepId)
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="w-full max-w-md space-y-6">
      <div>
        <h3 className="text-sm font-bold text-text-primary">52-Week Savings Challenge</h3>
        <p className="text-xs text-text-tertiary mt-1">Increase your savings by $1 every week</p>
      </div>
      <MicroCommitmentStepper steps={[{
      id: 'w1',
      title: 'Week 1: Save $1',
      description: 'Start small, build momentum',
      completed: true
    }, {
      id: 'w2',
      title: 'Week 2: Save $2',
      description: 'Double it up',
      completed: true
    }, {
      id: 'w3',
      title: 'Week 3: Save $3',
      description: 'Keep the streak going',
      completed: true
    }, {
      id: 'w4',
      title: 'Week 4: Save $4',
      description: 'You\\'re on a roll!',
      completed: false
    }]} onComplete={id => console.log('Completed week:', id)} />
      <div className="p-4 bg-surface-secondary rounded-xl border border-border-primary">
        <p className="text-xs text-text-tertiary">Progress: 3/52 weeks</p>
        <p className="text-lg font-bold text-text-primary mt-1">$6 saved so far</p>
      </div>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: '1',
      title: 'Pay $50 extra',
      description: 'Add $50 to your minimum payment',
      completed: true
    }, {
      id: '2',
      title: 'Pay $100 extra',
      description: 'Find $100 in your budget',
      completed: false
    }, {
      id: '3',
      title: 'Pay $200 extra',
      description: 'Cut one dining-out day per week',
      completed: false
    }, {
      id: '4',
      title: 'Pay $500 extra',
      description: 'Sell something unused',
      completed: false
    }],
    onComplete: stepId => console.log('Completed:', stepId)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      id: '1',
      title: 'Save $5/day',
      description: 'Skip one coffee',
      completed: true
    }, {
      id: '2',
      title: 'Save $10/day',
      description: 'Cook dinner at home',
      completed: true
    }],
    onComplete: stepId => console.log('Completed:', stepId)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 20
  }}>
            <MicroCommitmentStepper steps={[{
      id: '1',
      title: 'Create Account',
      description: 'Set up your profile and preferences',
      icon: () => null,
      accessLevel: 'basic',
      required: true,
      isComplete: true
    }, {
      id: '2',
      title: 'Verify Identity',
      description: 'Upload your government ID',
      icon: () => null,
      accessLevel: 'basic',
      required: true,
      isComplete: true
    }, {
      id: '3',
      title: 'Fund Account',
      description: 'Add your first deposit',
      icon: () => null,
      accessLevel: 'basic',
      required: true,
      isComplete: false
    }, {
      id: '4',
      title: 'Start Investing',
      description: 'Choose your first portfolio',
      icon: () => null,
      accessLevel: 'basic',
      required: true,
      isComplete: false
    }]} />
        </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 20
  }}>
            <MicroCommitmentStepper steps={[{
      id: '1',
      title: 'Sign Up',
      description: 'Basic registration complete',
      icon: () => null,
      accessLevel: 'basic',
      required: true,
      isComplete: true
    }, {
      id: '2',
      title: 'KYC Verification',
      description: 'Identity confirmed',
      icon: () => null,
      accessLevel: 'basic',
      required: true,
      isComplete: true
    }, {
      id: '3',
      title: 'Enable 2FA',
      description: 'Extra security layer active',
      icon: () => null,
      accessLevel: 'basic',
      required: true,
      isComplete: true
    }]} />
        </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 20
  }}>
            <MicroCommitmentStepper steps={[{
      id: '1',
      title: 'Welcome!',
      description: 'You are one step away from your first investment',
      icon: () => null,
      accessLevel: 'basic',
      required: true,
      isComplete: true
    }, {
      id: '2',
      title: 'Add Funds',
      description: 'Deposit at least $10 to get started',
      icon: () => null,
      accessLevel: 'basic',
      required: true,
      isComplete: false
    }]} />
        </div>
}`,...E.parameters?.docs?.source}}},D=[`Default`,`FirstStep`,`TwoCompleted`,`FullChallenge`,`DebtFreeChallenge`,`CompletedChallenge`,`FourSteps`,`AllComplete`,`SingleStepComplete`]}))();export{T as AllComplete,C as CompletedChallenge,S as DebtFreeChallenge,v as Default,y as FirstStep,w as FourSteps,x as FullChallenge,E as SingleStepComplete,b as TwoCompleted,D as __namedExportsOrder,_ as default};