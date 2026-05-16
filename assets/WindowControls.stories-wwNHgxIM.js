import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-jtk2jlYO.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{s as o,t as s}from"./es-DLZWAS6t.js";import{Et as c,M as l,i as u,t as d}from"./lucide-react-LrcM5b-z.js";var f,p,m,h=e((()=>{f=t(n()),r(),p=a(),s(),d(),m=f.forwardRef(({onClose:e,onMinimize:t,onMaximize:n,variant:r=`macos`,className:a,...s},d)=>r===`windows`?(0,p.jsxs)(`div`,{ref:d,className:i(`flex items-center gap-1`,a),...s,children:[t&&(0,p.jsx)(`button`,{onClick:t,className:`w-12 h-8 flex items-center justify-center hover:bg-surface-secondary transition-colors`,"aria-label":`Minimize`,children:(0,p.jsx)(c,{className:`w-4 h-4 text-text-secondary`})}),n&&(0,p.jsx)(`button`,{onClick:n,className:`w-12 h-8 flex items-center justify-center hover:bg-surface-secondary transition-colors`,"aria-label":`Maximize`,children:(0,p.jsx)(l,{className:`w-3.5 h-3.5 text-text-secondary`})}),e&&(0,p.jsx)(`button`,{onClick:e,className:`w-12 h-8 flex items-center justify-center hover:bg-status-error text-status-error transition-colors`,"aria-label":`Close`,children:(0,p.jsx)(u,{className:`w-4 h-4`})})]}):(0,p.jsxs)(`div`,{ref:d,className:i(`flex items-center gap-2`,a),...s,children:[e&&(0,p.jsx)(o.button,{onClick:e,className:`w-3 h-3 rounded-full bg-status-error flex items-center justify-center group`,whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":`Close`,children:(0,p.jsx)(u,{className:`w-2 h-2 text-status-error opacity-0 group-hover:opacity-100 transition-opacity`})}),t&&(0,p.jsx)(o.button,{onClick:t,className:`w-3 h-3 rounded-full bg-status-warning flex items-center justify-center group`,whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":`Minimize`,children:(0,p.jsx)(c,{className:`w-2 h-2 text-status-warning opacity-0 group-hover:opacity-100 transition-opacity`})}),n&&(0,p.jsx)(o.button,{onClick:n,className:`w-3 h-3 rounded-full bg-status-success flex items-center justify-center group`,whileHover:{scale:1.1},whileTap:{scale:.9},"aria-label":`Maximize`,children:(0,p.jsx)(l,{className:`w-1.5 h-1.5 text-status-success opacity-0 group-hover:opacity-100 transition-opacity`})})]})),m.displayName=`WindowControls`,m.__docgenInfo={description:``,methods:[],displayName:`WindowControls`,props:{onClose:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onMinimize:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onMaximize:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},variant:{required:!1,tsType:{name:`union`,raw:`'macos' | 'windows'`,elements:[{name:`literal`,value:`'macos'`},{name:`literal`,value:`'windows'`}]},description:``,defaultValue:{value:`'macos'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{h(),g=t(n()),_=a(),v={title:`Surfaces/WindowControls`,component:m,tags:[`autodocs`]},y={args:{onClose:()=>alert(`Close window`),onMinimize:()=>alert(`Minimize window`),onMaximize:()=>alert(`Maximize window`)}},b={args:{showClose:!1,showMaximize:!1,onMinimize:()=>alert(`Minimize window`)}},x={args:{showMinimize:!1,showMaximize:!1,onClose:()=>alert(`Close window`)}},S={render:()=>(0,_.jsxs)(`div`,{className:`border border-border-primary rounded-xl overflow-hidden`,children:[(0,_.jsx)(m,{onClose:()=>alert(`Close`),onMinimize:()=>alert(`Minimize`),onMaximize:()=>alert(`Maximize`)}),(0,_.jsxs)(`div`,{className:`p-4`,children:[(0,_.jsx)(`h3`,{className:`text-sm font-semibold`,children:`Transaction Details`}),(0,_.jsx)(`p`,{className:`text-xs text-text-secondary mt-1`,children:`$5,000 to Alice Johnson`})]})]})},C={render:()=>{let[e,t]=(0,g.useState)(`open`);return e===`closed`?(0,_.jsxs)(`div`,{className:`p-8 text-center text-sm text-text-secondary space-y-2`,children:[(0,_.jsx)(`p`,{children:`Window was closed.`}),(0,_.jsx)(`button`,{onClick:()=>t(`open`),className:`text-blue-500 hover:underline`,children:`Reopen`})]}):(0,_.jsxs)(`div`,{className:`border border-border-primary rounded-xl overflow-hidden transition-all ${e===`maximized`?`fixed inset-4 z-50`:`max-w-md`}`,children:[(0,_.jsx)(m,{onClose:()=>t(`closed`),onMinimize:()=>t(`minimized`),onMaximize:()=>t(e===`maximized`?`open`:`maximized`)}),e===`minimized`?(0,_.jsx)(`div`,{className:`p-4 text-sm text-text-secondary text-center`,children:`Window minimized`}):(0,_.jsxs)(`div`,{className:`p-4 space-y-3`,children:[(0,_.jsx)(`h3`,{className:`text-sm font-semibold`,children:`Account Settings`}),(0,_.jsxs)(`div`,{className:`space-y-2 text-sm`,children:[(0,_.jsx)(`div`,{className:`p-2 bg-surface-secondary rounded-lg`,children:`Profile Settings`}),(0,_.jsx)(`div`,{className:`p-2 bg-surface-secondary rounded-lg`,children:`Security & Privacy`}),(0,_.jsx)(`div`,{className:`p-2 bg-surface-secondary rounded-lg`,children:`Notifications`})]})]})]})}},w={parameters:{themes:{themeOverride:`dark`}},args:{onClose:()=>alert(`Close`),onMinimize:()=>alert(`Minimize`),onMaximize:()=>alert(`Maximize`)}},T={render:()=>(0,_.jsxs)(`div`,{className:`border border-border-primary rounded-xl overflow-hidden shadow-lg max-w-lg`,children:[(0,_.jsxs)(`div`,{className:`flex items-center justify-between px-4 py-3 bg-surface-secondary border-b border-border-primary`,children:[(0,_.jsx)(`span`,{className:`text-sm font-semibold`,children:`Portfolio Manager`}),(0,_.jsx)(m,{onClose:()=>alert(`Close`),onMinimize:()=>alert(`Minimize`),onMaximize:()=>alert(`Maximize`)})]}),(0,_.jsxs)(`div`,{className:`p-4 space-y-3`,children:[(0,_.jsxs)(`div`,{className:`flex justify-between`,children:[(0,_.jsx)(`span`,{className:`text-xs text-text-secondary`,children:`Balance`}),(0,_.jsx)(`span`,{className:`text-sm font-bold`,children:`$124,532`})]}),(0,_.jsxs)(`div`,{className:`flex justify-between`,children:[(0,_.jsx)(`span`,{className:`text-xs text-text-secondary`,children:`Investments`}),(0,_.jsx)(`span`,{className:`text-sm font-bold`,children:`18`})]})]})]})},E={parameters:{docs:{description:{story:`WindowControls in a disabled/loading state, showing the controls greyed out during a blocking operation.`}}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    onClose: () => alert('Close window'),
    onMinimize: () => alert('Minimize window'),
    onMaximize: () => alert('Maximize window')
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    showClose: false,
    showMaximize: false,
    onMinimize: () => alert('Minimize window')
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    showMinimize: false,
    showMaximize: false,
    onClose: () => alert('Close window')
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="border border-border-primary rounded-xl overflow-hidden">
            <WindowControls onClose={() => alert('Close')} onMinimize={() => alert('Minimize')} onMaximize={() => alert('Maximize')} />
            <div className="p-4">
                <h3 className="text-sm font-semibold">Transaction Details</h3>
                <p className="text-xs text-text-secondary mt-1">$5,000 to Alice Johnson</p>
            </div>
        </div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [state, setState] = useState<'open' | 'minimized' | 'maximized' | 'closed'>('open');
    if (state === 'closed') {
      return <div className="p-8 text-center text-sm text-text-secondary space-y-2">
                    <p>Window was closed.</p>
                    <button onClick={() => setState('open')} className="text-blue-500 hover:underline">Reopen</button>
                </div>;
    }
    return <div className={\`border border-border-primary rounded-xl overflow-hidden transition-all \${state === 'maximized' ? 'fixed inset-4 z-50' : 'max-w-md'}\`}>
                <WindowControls onClose={() => setState('closed')} onMinimize={() => setState('minimized')} onMaximize={() => setState(state === 'maximized' ? 'open' : 'maximized')} />
                {state === 'minimized' ? <div className="p-4 text-sm text-text-secondary text-center">Window minimized</div> : <div className="p-4 space-y-3">
                        <h3 className="text-sm font-semibold">Account Settings</h3>
                        <div className="space-y-2 text-sm">
                            <div className="p-2 bg-surface-secondary rounded-lg">Profile Settings</div>
                            <div className="p-2 bg-surface-secondary rounded-lg">Security & Privacy</div>
                            <div className="p-2 bg-surface-secondary rounded-lg">Notifications</div>
                        </div>
                    </div>}
            </div>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    onClose: () => alert('Close'),
    onMinimize: () => alert('Minimize'),
    onMaximize: () => alert('Maximize')
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="border border-border-primary rounded-xl overflow-hidden shadow-lg max-w-lg">
            <div className="flex items-center justify-between px-4 py-3 bg-surface-secondary border-b border-border-primary">
                <span className="text-sm font-semibold">Portfolio Manager</span>
                <WindowControls onClose={() => alert('Close')} onMinimize={() => alert('Minimize')} onMaximize={() => alert('Maximize')} />
            </div>
            <div className="p-4 space-y-3">
                <div className="flex justify-between"><span className="text-xs text-text-secondary">Balance</span><span className="text-sm font-bold">$124,532</span></div>
                <div className="flex justify-between"><span className="text-xs text-text-secondary">Investments</span><span className="text-sm font-bold">18</span></div>
            </div>
        </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'WindowControls in a disabled/loading state, showing the controls greyed out during a blocking operation.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`MinimizeOnly`,`CloseOnly`,`NoTitleBar`,`InteractiveWindow`,`DarkMode`,`WindowFrameIntegration`,`LoadingState`]}))();export{x as CloseOnly,w as DarkMode,y as Default,C as InteractiveWindow,E as LoadingState,b as MinimizeOnly,S as NoTitleBar,T as WindowFrameIntegration,D as __namedExportsOrder,v as default};