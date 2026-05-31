import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C-nBdNCE.js";import{t as r}from"./jsx-runtime-WZfjI2gv.js";import{s as i,t as a}from"./es-CfCMxUIg.js";import{n as o,t as s}from"./Button-kKG7d3zw.js";var c,l,u,d,f=e((()=>{c=t(n()),s(),a(),l=r(),u=({error:e,resetErrorBoundary:t})=>(0,l.jsxs)(i.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:`flex flex-col items-center justify-center p-8 text-center bg-surface-primary rounded-2xl border border-border-primary shadow-sm max-w-md mx-auto my-8`,children:[(0,l.jsx)(`div`,{className:`w-16 h-16 bg-status-error/10 text-status-error rounded-full flex items-center justify-center mb-6`,children:(0,l.jsxs)(`svg`,{width:`32`,height:`32`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,l.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,l.jsx)(`line`,{x1:`12`,y1:`8`,x2:`12`,y2:`12`}),(0,l.jsx)(`line`,{x1:`12`,y1:`16`,x2:`12.01`,y2:`16`})]})}),(0,l.jsx)(`h3`,{className:`text-xl font-semibold text-text-primary mb-2`,children:`Something went wrong`}),(0,l.jsx)(`p`,{className:`text-text-secondary mb-6 text-sm leading-relaxed`,children:e?.message||`An unexpected error occurred while rendering this component.`}),(0,l.jsxs)(`div`,{className:`flex gap-3`,children:[(0,l.jsx)(o,{variant:`secondary`,onClick:()=>window.location.reload(),children:`Reload Page`}),(0,l.jsx)(o,{variant:`primary`,onClick:t,children:`Try Again`})]}),!1]}),d=class extends c.Component{constructor(e){super(e),this.resetErrorBoundary=()=>{this.props.onReset&&this.props.onReset(),this.setState({hasError:!1,error:null})},this.state={hasError:!1,error:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,t){this.props.onError&&this.props.onError(e,t),console.error(`ErrorBoundary caught an error:`,e,t)}render(){return this.state.hasError?this.props.fallback?typeof this.props.fallback==`function`?this.props.fallback(this.state.error,this.resetErrorBoundary):this.props.fallback:(0,l.jsx)(u,{error:this.state.error,resetErrorBoundary:this.resetErrorBoundary}):this.props.children}},d.__docgenInfo={description:``,methods:[{name:`resetErrorBoundary`,docblock:null,modifiers:[],params:[],returns:null}],displayName:`ErrorBoundary`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},fallback:{required:!1,tsType:{name:`union`,raw:`ReactNode | ((error: Error, resetErrorBoundary: () => void) => ReactNode)`,elements:[{name:`ReactNode`},{name:`unknown`}]},description:``},onError:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(error: Error, errorInfo: ErrorInfo) => void`,signature:{arguments:[{type:{name:`Error`},name:`error`},{type:{name:`ErrorInfo`},name:`errorInfo`}],return:{name:`void`}}},description:``},onReset:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``}}}})),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{n(),f(),p=r(),m=()=>{throw Error(`Something went wrong in this component!`)},h=()=>{throw TypeError(`Cannot read properties of undefined (reading 'balance')`)},g=()=>{throw Error(`NetworkError: Failed to fetch transaction history. Status: 503`)},_={title:`Utils/ErrorBoundary`,component:d,tags:[`autodocs`]},v={args:{children:(0,p.jsx)(`div`,{className:`p-8 text-center text-text-primary`,children:`This renders normally.`})}},y={args:{children:(0,p.jsx)(m,{})}},b={args:{children:(0,p.jsx)(m,{}),fallback:(e,t)=>(0,p.jsxs)(`div`,{className:`flex flex-col items-center justify-center p-12 bg-surface-primary rounded-2xl m-8`,children:[(0,p.jsx)(`div`,{className:`w-16 h-16 bg-status-error/10 rounded-full flex items-center justify-center mb-4`,children:(0,p.jsx)(`span`,{className:`text-2xl`,children:`⚠️`})}),(0,p.jsx)(`h3`,{className:`text-lg font-bold text-text-primary mb-2`,children:`Custom Error UI`}),(0,p.jsx)(`p`,{className:`text-sm text-text-secondary mb-4`,children:e?.message||`An error occurred`}),(0,p.jsx)(`button`,{onClick:t,className:`px-4 py-2 bg-accent-blue text-white rounded-xl text-sm font-semibold`,children:`Try Again`})]})}},x={args:{children:(0,p.jsx)(h,{}),fallback:(e,t)=>(0,p.jsxs)(`div`,{className:`flex flex-col items-center justify-center p-10 bg-surface-primary rounded-2xl m-8 max-w-md mx-auto`,children:[(0,p.jsx)(`div`,{className:`w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-6`,children:(0,p.jsx)(`span`,{className:`text-4xl`,children:`💳`})}),(0,p.jsx)(`h3`,{className:`text-xl font-bold text-text-primary mb-2`,children:`Transaction Unavailable`}),(0,p.jsx)(`p`,{className:`text-sm text-text-secondary mb-2 text-center`,children:`We're having trouble loading your recent transactions.`}),(0,p.jsx)(`p`,{className:`text-xs text-text-tertiary mb-6 text-center font-mono bg-surface-secondary px-3 py-1 rounded-lg`,children:e?.message||`Unknown error`}),(0,p.jsxs)(`div`,{className:`flex gap-3`,children:[(0,p.jsx)(`button`,{onClick:t,className:`px-5 py-2.5 bg-accent-blue text-white rounded-xl text-sm font-semibold hover:bg-accent-blueHover transition-colors`,children:`Retry`}),(0,p.jsx)(`button`,{onClick:()=>window.location.reload(),className:`px-5 py-2.5 bg-surface-secondary text-text-primary rounded-xl text-sm font-semibold border border-border-primary hover:bg-surface-tertiary transition-colors`,children:`Refresh Page`})]})]})}},S={args:{children:(0,p.jsx)(g,{})}},C={args:{children:(0,p.jsx)(m,{}),fallback:(0,p.jsxs)(`div`,{className:`flex flex-col items-center justify-center p-12 bg-surface-primary rounded-2xl m-8`,children:[(0,p.jsx)(`div`,{className:`animate-spin w-10 h-10 border-4 border-accent-blue border-t-transparent rounded-full mb-4`}),(0,p.jsx)(`p`,{className:`text-sm text-text-secondary`,children:`Recovering connection...`})]})}},w={args:{children:(0,p.jsx)(m,{}),fallback:(e,t)=>(0,p.jsxs)(`div`,{className:`flex flex-col items-center gap-4 p-8`,children:[(0,p.jsx)(`span`,{className:`text-3xl`,children:`😵`}),(0,p.jsx)(`p`,{className:`text-sm text-text-secondary`,children:e?.message}),(0,p.jsx)(`button`,{onClick:t,className:`text-sm text-accent-blue underline underline-offset-2`,children:`Try again`})]})}},T={args:{children:(0,p.jsx)(m,{}),onError:e=>{console.log(`[Storybook] Error logged:`,e.message),alert(`Error caught: ${e.message}`)}}},E={args:{children:(0,p.jsx)(m,{}),fallback:(e,t)=>(0,p.jsxs)(`div`,{className:`flex flex-col items-center gap-4 p-12`,children:[(0,p.jsx)(`span`,{className:`text-6xl`,children:`🔁`}),(0,p.jsx)(`p`,{className:`text-text-secondary text-sm`,children:`Hit reset to recover (this component will re-render and throw again)`}),(0,p.jsx)(`button`,{onClick:t,className:`px-6 py-2 bg-accent-blue text-white rounded-xl text-sm font-semibold`,children:`Reset`})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: <div className="p-8 text-center text-text-primary">This renders normally.</div>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: <BuggyComponent />
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    children: <BuggyComponent />,
    fallback: (error, reset) => <div className="flex flex-col items-center justify-center p-12 bg-surface-primary rounded-2xl m-8">
                <div className="w-16 h-16 bg-status-error/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-2">Custom Error UI</h3>
                <p className="text-sm text-text-secondary mb-4">{error?.message || 'An error occurred'}</p>
                <button onClick={reset} className="px-4 py-2 bg-accent-blue text-white rounded-xl text-sm font-semibold">
                    Try Again
                </button>
            </div>
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: <BuggyAsyncComponent />,
    fallback: (error, reset) => <div className="flex flex-col items-center justify-center p-10 bg-surface-primary rounded-2xl m-8 max-w-md mx-auto">
                <div className="w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-6">
                    <span className="text-4xl">💳</span>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">Transaction Unavailable</h3>
                <p className="text-sm text-text-secondary mb-2 text-center">
                    We're having trouble loading your recent transactions.
                </p>
                <p className="text-xs text-text-tertiary mb-6 text-center font-mono bg-surface-secondary px-3 py-1 rounded-lg">
                    {error?.message || 'Unknown error'}
                </p>
                <div className="flex gap-3">
                    <button onClick={reset} className="px-5 py-2.5 bg-accent-blue text-white rounded-xl text-sm font-semibold hover:bg-accent-blueHover transition-colors">
                        Retry
                    </button>
                    <button onClick={() => window.location.reload()} className="px-5 py-2.5 bg-surface-secondary text-text-primary rounded-xl text-sm font-semibold border border-border-primary hover:bg-surface-tertiary transition-colors">
                        Refresh Page
                    </button>
                </div>
            </div>
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: <NetworkErrorComponent />
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: <BuggyComponent />,
    fallback: <div className="flex flex-col items-center justify-center p-12 bg-surface-primary rounded-2xl m-8">
                <div className="animate-spin w-10 h-10 border-4 border-accent-blue border-t-transparent rounded-full mb-4" />
                <p className="text-sm text-text-secondary">Recovering connection...</p>
            </div>
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: <BuggyComponent />,
    fallback: (error, reset) => <div className="flex flex-col items-center gap-4 p-8">
                <span className="text-3xl">😵</span>
                <p className="text-sm text-text-secondary">{error?.message}</p>
                <button onClick={reset} className="text-sm text-accent-blue underline underline-offset-2">
                    Try again
                </button>
            </div>
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: <BuggyComponent />,
    onError: error => {
      console.log('[Storybook] Error logged:', error.message);
      alert(\`Error caught: \${error.message}\`);
    }
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: <BuggyComponent />,
    fallback: (error, reset) => <div className="flex flex-col items-center gap-4 p-12">
                <span className="text-6xl">🔁</span>
                <p className="text-text-secondary text-sm">Hit reset to recover (this component will re-render and throw again)</p>
                <button onClick={reset} className="px-6 py-2 bg-accent-blue text-white rounded-xl text-sm font-semibold">
                    Reset
                </button>
            </div>
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`WithError`,`WithCustomFallback`,`FintechCustomFallback`,`NetworkErrorFintech`,`LoadingSkeletonThenError`,`MinimalistFallback`,`WithOnErrorCallback`,`ResetAfterError`]}))();export{v as Default,x as FintechCustomFallback,C as LoadingSkeletonThenError,w as MinimalistFallback,S as NetworkErrorFintech,E as ResetAfterError,b as WithCustomFallback,y as WithError,T as WithOnErrorCallback,D as __namedExportsOrder,_ as default};