import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-2Bdvr1RY.js";import{Dt as r,Rt as i,Tr as a,i as o,t as s,tr as c}from"./lucide-react-ChvDEqVS.js";import{t as l}from"./jsx-runtime-WZfjI2gv.js";import{l as u,s as d,t as f}from"./es-C1BYSDiB.js";var p,m,h,g=e((()=>{p=t(n()),f(),s(),m=l(),h=({isOpen:e,onClose:t})=>{let[n,s]=(0,p.useState)(`listening`),[l,f]=(0,p.useState)(``);return(0,p.useEffect)(()=>{if(!e){s(`listening`),f(``);return}if(n===`listening`){let e=[``,`Transfiere`,`Transfiere cincuenta`,`Transfiere cincuenta pesos a Carlos`],t=0,n=setInterval(()=>{f(e[t]),t++,t>=e.length&&(clearInterval(n),setTimeout(()=>s(`processing`),500))},700);return()=>clearInterval(n)}if(n===`processing`){let e=setTimeout(()=>{s(`confirming`)},1500);return()=>clearTimeout(e)}},[e,n]),(0,m.jsx)(u,{children:e&&(0,m.jsxs)(`div`,{className:`fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4`,children:[(0,m.jsx)(d.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:`absolute inset-0 bg-black/40 backdrop-blur-sm`,onClick:t}),(0,m.jsxs)(d.div,{initial:{opacity:0,y:100,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:100,scale:.95},className:`relative w-full max-w-sm bg-surface-primary rounded-[2rem] shadow-2xl p-6 border border-border-primary`,children:[(0,m.jsx)(`button`,{onClick:t,className:`absolute top-4 right-4 p-2 bg-background-secondary text-text-tertiary rounded-full hover:bg-background-secondary transition-colors`,children:(0,m.jsx)(o,{size:16})}),(0,m.jsx)(`div`,{className:`flex justify-center mt-4 mb-8 relative h-32 items-center`,children:(0,m.jsx)(u,{mode:`wait`,children:n===`listening`?(0,m.jsxs)(d.div,{className:`relative flex items-center justify-center`,children:[(0,m.jsx)(d.div,{animate:{scale:[1,1.5,1],opacity:[.5,0,.5]},transition:{duration:1.5,repeat:1/0,ease:`easeInOut`},className:`absolute w-24 h-24 bg-blue-500 rounded-full blur-xl`}),(0,m.jsx)(`div`,{className:`w-16 h-16 bg-blue-600 rounded-full text-white flex items-center justify-center shadow-xl shadow-blue-500/30 relative z-10`,children:(0,m.jsx)(r,{size:32})})]},`listen`):n===`processing`?(0,m.jsxs)(d.div,{className:`relative flex items-center justify-center flex-col text-blue-500`,children:[(0,m.jsx)(i,{size:40,className:`animate-spin mb-2`}),(0,m.jsx)(`span`,{className:`text-xs font-bold uppercase tracking-widest text-text-tertiary`,children:`Procesando AI`})]},`process`):(0,m.jsx)(d.div,{initial:{scale:.5},animate:{scale:1},className:`relative flex items-center justify-center`,children:(0,m.jsx)(`div`,{className:`w-16 h-16 bg-green-500 rounded-full text-white flex items-center justify-center shadow-xl shadow-green-500/30 relative z-10`,children:(0,m.jsx)(c,{size:32})})},`confirm`)})}),(0,m.jsx)(`div`,{className:`text-center min-h-[120px]`,children:n===`listening`||n===`processing`?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`h3`,{className:`text-xl font-medium text-text-primary h-14`,children:l||(0,m.jsx)(`span`,{className:`text-text-tertiary`,children:`Te escucho...`})}),(0,m.jsx)(`div`,{className:`flex justify-center gap-1 mt-6 h-6 items-center`,children:[1,2,3,4,5].map(e=>(0,m.jsx)(d.div,{animate:{height:n===`listening`&&l?[4,Math.random()*24+4,4]:4},transition:{duration:.5,repeat:1/0,delay:e*.1},className:`w-1.5 bg-blue-500 rounded-full`},e))})]}):(0,m.jsxs)(`div`,{className:`text-left bg-background-secondary dark:bg-gray-900 rounded-2xl p-5 border border-border-primary`,children:[(0,m.jsx)(`p`,{className:`text-sm font-semibold text-text-tertiary mb-4 uppercase tracking-wider`,children:`Entendido, ¿Confirmo la operación?`}),(0,m.jsxs)(`div`,{className:`flex justify-between items-center mb-6`,children:[(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`h4`,{className:`font-bold text-text-primary relative z-10`,children:`Transferencia`}),(0,m.jsx)(`p`,{className:`text-2xl font-black text-blue-600 dark:text-blue-400`,children:`$50.00 MXN`})]}),(0,m.jsxs)(`div`,{className:`text-right`,children:[(0,m.jsx)(`h4`,{className:`font-bold text-text-primary`,children:`Para`}),(0,m.jsx)(`p`,{className:`text-base font-medium text-text-secondary flex items-center gap-2`,children:`Carlos R.`})]})]}),(0,m.jsxs)(`button`,{className:`w-full bg-gray-900 text-white dark:bg-surface-primary dark:text-gray-900 py-3.5 rounded-xl font-bold flex justify-center items-center gap-2 shadow-lg hover:-translate-y-0.5 transition-transform active:scale-95`,children:[`Ejecutar orden verbal `,(0,m.jsx)(a,{size:18})]})]})})]})]})})},h.__docgenInfo={description:``,methods:[],displayName:`VoiceCommandOverlay`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),_,v,y,b,x,S,C,w,T,E,D,O,k;e((()=>{g(),_=t(n()),v=l(),y={title:`Fintech/Actions/VoiceCommandOverlay`,component:h,tags:[`autodocs`]},b={args:{isListening:!1,onResult:e=>console.log(`Voice result:`,e),onClose:()=>console.log(`Closed`)}},x={args:{isListening:!0,onResult:e=>console.log(`Voice result:`,e),onClose:()=>console.log(`Closed`)}},S={args:{isListening:!0,transcript:`Send $500 to Alice...`,onResult:e=>console.log(`Voice result:`,e),onClose:()=>console.log(`Closed`)}},C={args:{isListening:!1,transcript:`Transfer $500 to savings account`,command:`Transfer`,confidence:.95,onResult:e=>console.log(`Voice result:`,e),onClose:()=>console.log(`Closed`)}},w={args:{isListening:!1,transcript:`Pay bills...?`,confidence:.45,onResult:e=>console.log(`Voice result:`,e),onClose:()=>console.log(`Closed`)}},T={render:()=>{let[e,t]=(0,_.useState)(``),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)([]);return(0,v.jsxs)(`div`,{className:`space-y-4 max-w-lg`,children:[(0,v.jsx)(`div`,{className:`flex gap-2 flex-wrap`,children:(0,v.jsx)(`button`,{onClick:()=>r(!n),className:`px-4 py-2 text-sm rounded-lg ${n?`bg-red-500 text-white`:`bg-blue-600 text-white`}`,children:n?`Stop Listening`:`Start Voice Command`})}),n&&(0,v.jsx)(`div`,{className:`flex gap-2 flex-wrap`,children:[`Show my balance`,`Transfer $200 to savings`,`Buy $500 of Apple stock`,`What are my recent transactions?`,`Pay my credit card bill`].map((n,r)=>(0,v.jsx)(`button`,{onClick:()=>t(n),className:`px-2 py-1 text-xs rounded-lg ${e===n?`bg-blue-100 dark:bg-blue-900/30 border border-blue-300`:`bg-surface-secondary hover:bg-surface-tertiary`}`,children:n},r))}),(0,v.jsx)(h,{isListening:n,transcript:e,onResult:e=>{a(t=>[e,...t]),r(!1),t(``)},onClose:()=>r(!1)}),i.length>0&&(0,v.jsxs)(`div`,{className:`p-3 bg-surface-secondary rounded-lg`,children:[(0,v.jsx)(`h4`,{className:`text-xs font-semibold text-text-secondary mb-1`,children:`Command History`}),(0,v.jsx)(`div`,{className:`space-y-1`,children:i.map((e,t)=>(0,v.jsxs)(`p`,{className:`text-xs text-text-secondary`,children:[t+1,`. "`,e,`"`]},t))})]})]})}},E={parameters:{themes:{themeOverride:`dark`}},args:{isListening:!0,transcript:`Show my portfolio...`,onResult:e=>console.log(`Voice result:`,e),onClose:()=>console.log(`Closed`)}},D={parameters:{viewport:{defaultViewport:`mobile1`}}},O={parameters:{docs:{description:{story:`$f in a loading state, showing placeholder UI while data is being fetched.`}}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    isListening: false,
    onResult: text => console.log('Voice result:', text),
    onClose: () => console.log('Closed')
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    isListening: true,
    onResult: text => console.log('Voice result:', text),
    onClose: () => console.log('Closed')
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    isListening: true,
    transcript: 'Send $500 to Alice...',
    onResult: text => console.log('Voice result:', text),
    onClose: () => console.log('Closed')
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    isListening: false,
    transcript: 'Transfer $500 to savings account',
    command: 'Transfer',
    confidence: 0.95,
    onResult: text => console.log('Voice result:', text),
    onClose: () => console.log('Closed')
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    isListening: false,
    transcript: 'Pay bills...?',
    confidence: 0.45,
    onResult: text => console.log('Voice result:', text),
    onClose: () => console.log('Closed')
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [transcript, setTranscript] = useState('');
    const [isListening, setIsListening] = useState(false);
    const [history, setHistory] = useState<string[]>([]);
    const simulatedCommands = ['Show my balance', 'Transfer $200 to savings', 'Buy $500 of Apple stock', 'What are my recent transactions?', 'Pay my credit card bill'];
    const handleResult = (text: string) => {
      setHistory(prev => [text, ...prev]);
      setIsListening(false);
      setTranscript('');
    };
    return <div className="space-y-4 max-w-lg">
                <div className="flex gap-2 flex-wrap">
                    <button onClick={() => setIsListening(!isListening)} className={\`px-4 py-2 text-sm rounded-lg \${isListening ? 'bg-red-500 text-white' : 'bg-blue-600 text-white'}\`}>
                        {isListening ? 'Stop Listening' : 'Start Voice Command'}
                    </button>
                </div>
                {isListening && <div className="flex gap-2 flex-wrap">
                        {simulatedCommands.map((cmd, i) => <button key={i} onClick={() => setTranscript(cmd)} className={\`px-2 py-1 text-xs rounded-lg \${transcript === cmd ? 'bg-blue-100 dark:bg-blue-900/30 border border-blue-300' : 'bg-surface-secondary hover:bg-surface-tertiary'}\`}>
                                {cmd}
                            </button>)}
                    </div>}
                <VoiceCommandOverlay isListening={isListening} transcript={transcript} onResult={handleResult} onClose={() => setIsListening(false)} />
                {history.length > 0 && <div className="p-3 bg-surface-secondary rounded-lg">
                        <h4 className="text-xs font-semibold text-text-secondary mb-1">Command History</h4>
                        <div className="space-y-1">
                            {history.map((h, i) => <p key={i} className="text-xs text-text-secondary">{i + 1}. "{h}"</p>)}
                        </div>
                    </div>}
            </div>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    isListening: true,
    transcript: 'Show my portfolio...',
    onResult: text => console.log('Voice result:', text),
    onClose: () => console.log('Closed')
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: '$f in a loading state, showing placeholder UI while data is being fetched.'
      }
    }
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Listening`,`WithTranscript`,`CommandComplete`,`LowConfidence`,`InteractiveVoiceDemo`,`DarkMode`,`MobileView`,`LoadingState`]}))();export{C as CommandComplete,E as DarkMode,b as Default,T as InteractiveVoiceDemo,x as Listening,O as LoadingState,w as LowConfidence,D as MobileView,S as WithTranscript,k as __namedExportsOrder,y as default};