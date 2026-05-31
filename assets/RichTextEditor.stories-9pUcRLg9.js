import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ba3ihGpN.js";import{E as r,T as i,Xt as a,_r as o,h as s,t as c,w as l}from"./lucide-react-B3llQuma.js";import{n as u,t as d}from"./utils-CcEteFRA.js";import{t as f}from"./jsx-runtime-WZfjI2gv.js";import{s as p,t as m}from"./es-CjJtNnI5.js";var h,g,_,v=e((()=>{h=t(n()),c(),u(),m(),g=f(),_=({value:e=``,onChange:t,placeholder:n=`Start typing...`,label:c,error:u,helperText:f,disabled:m=!1,className:_,minHeight:v=`150px`})=>{let y=(0,h.useRef)(null),[b,x]=(0,h.useState)(!1);(0,h.useEffect)(()=>{if(y.current&&y.current.innerHTML!==e){if(e===``&&y.current.innerHTML===`<br>`)return;y.current.innerHTML=e}},[e]);let S=()=>{y.current&&t&&t(y.current.innerHTML)},C=(e,t=void 0)=>{document.execCommand(e,!1,t),y.current?.focus(),S()},w=({icon:e,command:t,arg:n,title:r})=>(0,g.jsx)(`button`,{type:`button`,onMouseDown:e=>e.preventDefault(),onClick:()=>C(t,n),disabled:m,className:`p-1.5 rounded-md text-text-tertiary hover:text-text-primary hover:bg-surface-tertiary transition-colors focus:outline-none disabled:opacity-50`,title:r,children:(0,g.jsx)(e,{className:`w-4 h-4`})});return(0,g.jsxs)(`div`,{className:d(`w-full space-y-2`,_),children:[c&&(0,g.jsx)(`label`,{className:`block text-sm font-medium text-text-primary`,children:c}),(0,g.jsxs)(`div`,{className:d(`w-full rounded-xl border bg-surface-primary overflow-hidden transition-all`,b?`ring-2 ring-accent-blue/20 border-accent-blue`:`border-border-primary`,u?`border-status-error focus-within:border-status-error focus-within:ring-status-error/20`:``,m?`opacity-50 cursor-not-allowed bg-surface-secondary`:``),children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-1 p-2 border-b border-border-primary bg-surface-secondary/50`,children:[(0,g.jsx)(w,{icon:o,command:`bold`,title:`Bold`}),(0,g.jsx)(w,{icon:a,command:`italic`,title:`Italic`}),(0,g.jsx)(w,{icon:s,command:`underline`,title:`Underline`}),(0,g.jsx)(`div`,{className:`w-px h-4 bg-border-primary mx-1`}),(0,g.jsx)(w,{icon:l,command:`justifyLeft`,title:`Align Left`}),(0,g.jsx)(w,{icon:r,command:`justifyCenter`,title:`Align Center`}),(0,g.jsx)(w,{icon:i,command:`justifyRight`,title:`Align Right`})]}),(0,g.jsx)(`div`,{ref:y,contentEditable:!m,onInput:S,onFocus:()=>x(!0),onBlur:()=>x(!1),className:d(`w-full p-4 outline-none text-text-primary max-w-none`,`[&_b]:font-bold [&_strong]:font-bold`,`[&_i]:italic [&_em]:italic`,`[&_u]:underline`,`[&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-2`,`[&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-2`,`[&_h3]:text-lg [&_h3]:font-bold [&_h3]:mb-1`,`[&_blockquote]:border-l-4 [&_blockquote]:border-border-secondary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:my-2`,m&&`cursor-not-allowed`),style:{minHeight:v},"data-placeholder":n})]}),(u||f)&&(0,g.jsx)(p.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},className:d(`text-sm`,u?`text-status-error`:`text-text-secondary`),children:u||f})]})},_.displayName=`RichTextEditor`,_.__docgenInfo={description:``,methods:[],displayName:`RichTextEditor`,props:{value:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(html: string) => void`,signature:{arguments:[{type:{name:`string`},name:`html`}],return:{name:`void`}}},description:``},placeholder:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Start typing...'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:``},error:{required:!1,tsType:{name:`string`},description:``},helperText:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},minHeight:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'150px'`,computed:!1}}}}})),y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{v(),y=t(n()),b=f(),x={title:`Forms/RichTextEditor`,component:_,tags:[`autodocs`]},S={args:{placeholder:`Start typing...`,onChange:e=>console.log(`Content:`,e)}},C={args:{label:`Transaction Note`,placeholder:`Add a note to this transaction...`,onChange:e=>console.log(`Content:`,e)}},w={args:{label:`Investment Notes`,value:`<p>This investment is part of my <strong>retirement portfolio</strong> for long-term growth.</p><p><em>Target allocation:</em> 60% stocks, 30% bonds, 10% crypto.</p>`,onChange:e=>console.log(`Content:`,e)}},T={args:{label:`Support Message`,value:`<p>My transaction was not processed...</p>`,error:`Message exceeds 500 characters`,onChange:e=>console.log(`Content:`,e)}},E={args:{label:`Read-Only Notes`,value:`<p>This is a <strong>signed</strong> agreement that cannot be modified.</p>`,disabled:!0,onChange:e=>console.log(`Content:`,e)}},D={args:{label:`Transfer Description`,placeholder:`Describe the purpose of this transfer...`,helperText:`This note will be visible to the recipient.`,onChange:e=>console.log(`Content:`,e)}},O={render:()=>{let[e,t]=(0,y.useState)(`<p>Write your financial report here...</p>`);return(0,b.jsxs)(`div`,{className:`space-y-4`,children:[(0,b.jsx)(_,{label:`Quarterly Report`,value:e,onChange:t,minHeight:`200px`}),(0,b.jsxs)(`div`,{className:`p-3 bg-surface-secondary rounded-lg border border-border-primary`,children:[(0,b.jsx)(`h4`,{className:`text-xs font-semibold text-text-secondary mb-2`,children:`HTML Output Preview`}),(0,b.jsx)(`pre`,{className:`text-xs font-mono text-text-secondary whitespace-pre-wrap break-all overflow-auto max-h-32`,children:e})]})]})}},k={parameters:{themes:{themeOverride:`dark`}},args:{label:`Notes (Dark Mode)`,value:`<p><strong>Portfolio Review:</strong> Performance improved by 12% this quarter.</p>`,onChange:e=>console.log(`Content:`,e)}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Start typing...',
    onChange: html => console.log('Content:', html)
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Transaction Note',
    placeholder: 'Add a note to this transaction...',
    onChange: html => console.log('Content:', html)
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Investment Notes',
    value: '<p>This investment is part of my <strong>retirement portfolio</strong> for long-term growth.</p><p><em>Target allocation:</em> 60% stocks, 30% bonds, 10% crypto.</p>',
    onChange: html => console.log('Content:', html)
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Support Message',
    value: '<p>My transaction was not processed...</p>',
    error: 'Message exceeds 500 characters',
    onChange: html => console.log('Content:', html)
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read-Only Notes',
    value: '<p>This is a <strong>signed</strong> agreement that cannot be modified.</p>',
    disabled: true,
    onChange: html => console.log('Content:', html)
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Transfer Description',
    placeholder: 'Describe the purpose of this transfer...',
    helperText: 'This note will be visible to the recipient.',
    onChange: html => console.log('Content:', html)
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [content, setContent] = useState('<p>Write your financial report here...</p>');
    return <div className="space-y-4">
                <RichTextEditor label="Quarterly Report" value={content} onChange={setContent} minHeight="200px" />
                <div className="p-3 bg-surface-secondary rounded-lg border border-border-primary">
                    <h4 className="text-xs font-semibold text-text-secondary mb-2">HTML Output Preview</h4>
                    <pre className="text-xs font-mono text-text-secondary whitespace-pre-wrap break-all overflow-auto max-h-32">
                        {content}
                    </pre>
                </div>
            </div>;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    label: 'Notes (Dark Mode)',
    value: '<p><strong>Portfolio Review:</strong> Performance improved by 12% this quarter.</p>',
    onChange: html => console.log('Content:', html)
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithLabel`,`WithContent`,`WithError`,`Disabled`,`WithHelperText`,`InteractiveEditor`,`DarkMode`]}))();export{k as DarkMode,S as Default,E as Disabled,O as InteractiveEditor,w as WithContent,T as WithError,D as WithHelperText,C as WithLabel,A as __namedExportsOrder,x as default};