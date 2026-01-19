import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as o}from"./iframe-Cb93e_Z8.js";import{c as d}from"./utils-CDN07tui.js";import{L as D}from"./Label-BwNaakGx.js";import{A as R}from"./index-BVqOlNMQ.js";import{m as N}from"./proxy-b22VB84a.js";import{X as E}from"./x-cLebVC1h.js";import"./preload-helper-PPVm8Dsz.js";import"./Text-Dhy74_-M.js";import"./createLucideIcon-DjNmKTqa.js";const i=({value:a=[],onChange:s,placeholder:r="Add tags...",label:f,error:c,helperText:y,disabled:n=!1,maxTags:h,className:S,onBlur:I})=>{const[x,T]=o.useState(""),[q,b]=o.useState(!1),v=o.useRef(null),k=e=>{e.key==="Enter"||e.key===","?(e.preventDefault(),w()):e.key==="Backspace"&&x===""&&a.length>0&&j(a.length-1)},w=()=>{const e=x.trim();if(e&&!a.includes(e)){if(h&&a.length>=h)return;s?.([...a,e]),T("")}},j=e=>{if(n)return;const l=[...a];l.splice(e,1),s?.(l)},C=()=>{n||v.current?.focus()};return t.jsxs("div",{className:d("w-full space-y-2",S),children:[f&&t.jsx(D,{className:"mb-2",children:f}),t.jsxs("div",{onClick:C,className:d("flex flex-wrap items-center gap-2 w-full min-h-[40px] px-3 py-2 rounded-xl border bg-surface-primary text-text-primary transition-all cursor-text",q?"ring-2 ring-accent-blue/20 border-accent-blue":"border-border-primary",c?"border-status-error focus-within:border-status-error focus-within:ring-status-error/20":"",n?"opacity-50 cursor-not-allowed bg-surface-secondary":""),children:[t.jsx(R,{mode:"popLayout",children:a.map((e,l)=>t.jsxs(N.span,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},layout:!0,className:d("inline-flex items-center gap-1 px-2 py-1 rounded-md text-sm font-medium bg-surface-tertiary text-text-primary",n&&"bg-surface-secondary text-text-secondary"),children:[e,!n&&t.jsx("button",{type:"button",onClick:A=>{A.stopPropagation(),j(l)},className:"p-0.5 rounded-full hover:bg-surface-secondary text-text-tertiary hover:text-text-primary transition-colors focus:outline-none",children:t.jsx(E,{className:"w-3 h-3"})})]},`${e}-${l}`))}),t.jsx("input",{ref:v,type:"text",value:x,onChange:e=>T(e.target.value),onKeyDown:k,onFocus:()=>b(!0),onBlur:()=>{b(!1),w(),I?.()},disabled:n,placeholder:a.length===0?r:"",className:"flex-1 min-w-[120px] bg-transparent border-none outline-none text-sm placeholder:text-text-tertiary disabled:cursor-not-allowed"})]}),(c||y)&&t.jsx(N.p,{initial:{opacity:0,y:-4},animate:{opacity:1,y:0},className:d("text-sm",c?"text-status-error":"text-text-secondary"),children:c||y})]})};i.displayName="TagsInput";i.__docgenInfo={description:"",methods:[],displayName:"TagsInput",props:{value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tags: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"tags"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Add tags...'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},maxTags:{required:!1,tsType:{name:"number"},description:""},className:{required:!1,tsType:{name:"string"},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const $={title:"Forms/TagsInput",component:i,tags:[],argTypes:{disabled:{control:"boolean"},error:{control:"text"},helperText:{control:"text"},maxTags:{control:"number"}}},u={render:a=>{const[s,r]=o.useState(["React","TypeScript"]);return t.jsx("div",{className:"max-w-md",children:t.jsx(i,{...a,value:s,onChange:r})})},args:{label:"Skills",placeholder:"Add a skill...",helperText:"Press Enter or Comma to add"}},m={render:a=>{const[s,r]=o.useState(["Design","Development"]);return t.jsx("div",{className:"max-w-md",children:t.jsx(i,{...a,value:s,onChange:r,maxTags:5})})},args:{label:"Interests (Max 5)",placeholder:"Add interest..."}},p={render:a=>{const[s,r]=o.useState([]);return t.jsx("div",{className:"max-w-md",children:t.jsx(i,{...a,value:s,onChange:r})})},args:{label:"Required Tags",error:"At least one tag is required"}},g={args:{label:"Read Only Tags",value:["Locked","Immutable"],disabled:!0}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tags, setTags] = useState<string[]>(['React', 'TypeScript']);
    return <div className="max-w-md">
                <TagsInput {...args} value={tags} onChange={setTags} />
            </div>;
  },
  args: {
    label: 'Skills',
    placeholder: 'Add a skill...',
    helperText: 'Press Enter or Comma to add'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tags, setTags] = useState<string[]>(['Design', 'Development']);
    return <div className="max-w-md">
                <TagsInput {...args} value={tags} onChange={setTags} maxTags={5} />
            </div>;
  },
  args: {
    label: 'Interests (Max 5)',
    placeholder: 'Add interest...'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tags, setTags] = useState<string[]>([]);
    return <div className="max-w-md">
                <TagsInput {...args} value={tags} onChange={setTags} />
            </div>;
  },
  args: {
    label: 'Required Tags',
    error: 'At least one tag is required'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read Only Tags',
    value: ['Locked', 'Immutable'],
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};const X=["Default","WithMaxTags","WithError","Disabled"];export{u as Default,g as Disabled,p as WithError,m as WithMaxTags,X as __namedExportsOrder,$ as default};
