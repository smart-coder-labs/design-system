import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ns4lj-Vt.js";import{t as r}from"./jsx-runtime-BK76Wfr-.js";import{s as i,t as a}from"./es-Bab7Eu6H.js";import{$n as o,Yn as s,Zt as c,mn as l,nr as u,nt as d,t as f}from"./lucide-react-DM_OnbjU.js";var p,m,h,g=e((()=>{p=t(n()),a(),f(),m=r(),h=({initialScore:e=650})=>{let[t,n]=(0,p.useState)(e),[r,a]=(0,p.useState)([]),f=[{id:`1`,title:`Pagar a tiempo (3 meses)`,impact:15,icon:s,type:`positive`},{id:`2`,title:`Aumentar Límite (+20%)`,impact:8,icon:o,type:`positive`},{id:`3`,title:`Nuevo Préstamo Auto`,impact:-12,icon:c,type:`negative`},{id:`4`,title:`Atraso de 30 días`,impact:-45,icon:u,type:`negative`}],h=e=>{a([...r,t]),n(Math.min(850,Math.max(300,t+e)))},g=()=>{n(e),a([])},_=(e=>e>=750?{label:`Excelente`,color:`bg-status-success`,text:`text-status-success`,bg:`bg-status-success/10 text-status-success border-status-success/20`}:e>=680?{label:`Bueno`,color:`bg-accent-blue`,text:`text-accent-blue`,bg:`bg-accent-blue-tint text-accent-blue border-accent-blue/20`}:e>=620?{label:`Regular`,color:`bg-status-warning`,text:`text-status-warning`,bg:`bg-status-warning/10 text-status-warning border-status-warning/20`}:e>=550?{label:`Malo`,color:`bg-status-error`,text:`text-status-error`,bg:`bg-status-error/10 text-status-error border-status-error/20`}:{label:`Pobre`,color:`bg-status-error`,text:`text-status-error`,bg:`bg-status-error/10 text-status-error border-status-error/20`})(t),v=t-e,y=Math.max(0,Math.min(100,(t-300)/550*100));return-90+y*1.8,(0,m.jsxs)(`div`,{className:`bg-surface-primary border border-border-primary p-6 rounded-3xl max-w-sm mx-auto shadow-sm`,children:[(0,m.jsxs)(`div`,{className:`flex justify-between items-center mb-6`,children:[(0,m.jsxs)(`h3`,{className:`font-bold text-text-primary flex items-center gap-2`,children:[(0,m.jsx)(l,{className:`text-accent-blue`}),`Simulador Crediticio`]}),r.length>0&&(0,m.jsxs)(`button`,{onClick:g,className:`text-xs font-semibold text-text-tertiary hover:text-text-primary flex items-center gap-1 transition-colors bg-background-secondary px-2 py-1 rounded-md`,children:[(0,m.jsx)(d,{size:12}),` Reiniciar`]})]}),(0,m.jsxs)(`div`,{className:`relative flex justify-center mb-8 h-40 overflow-hidden`,children:[(0,m.jsxs)(`svg`,{viewBox:`0 0 200 100`,className:`w-56 overflow-visible absolute inset-x-0 mx-auto mt-4`,children:[(0,m.jsx)(`path`,{d:`M 20 90 A 70 70 0 0 1 180 90`,fill:`none`,stroke:`currentColor`,strokeWidth:`16`,strokeLinecap:`round`,className:`text-border-primary`}),(0,m.jsx)(i.path,{d:`M 20 90 A 70 70 0 0 1 180 90`,fill:`none`,stroke:`currentColor`,strokeWidth:`16`,strokeLinecap:`round`,strokeDasharray:`220`,initial:{strokeDashoffset:220},animate:{strokeDashoffset:220-220*y/100},transition:{type:`spring`,stiffness:40,damping:10},className:_.text})]}),(0,m.jsxs)(`div`,{className:`absolute bottom-2 flex flex-col items-center`,children:[(0,m.jsx)(i.div,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},className:`text-4xl font-black text-text-primary tracking-tighter`,children:t},t),(0,m.jsx)(`div`,{className:`mt-1 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full border ${_.bg}`,children:_.label})]})]}),v!==0&&(0,m.jsxs)(i.div,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},className:`text-center font-bold text-sm mb-6 ${v>0?`text-status-success`:`text-status-error`}`,children:[`El puntaje `,v>0?`subiría`:`bajaría`,` `,Math.abs(v),` pt(s).`]}),(0,m.jsxs)(`div`,{children:[(0,m.jsx)(`p`,{className:`text-xs uppercase tracking-wider font-bold text-text-tertiary mb-3 px-1`,children:`¿Qué pasaría si...?`}),(0,m.jsx)(`div`,{className:`space-y-2`,children:f.map(e=>{let t=e.icon;return(0,m.jsxs)(`button`,{onClick:()=>h(e.impact),className:`w-full text-left p-3 rounded-xl border transition-all flex justify-between items-center group
                  ${e.type===`positive`?`border-border-primary hover:border-status-success/40 bg-surface-primary`:`border-border-primary hover:border-status-error/40 bg-surface-primary`}
                 `,children:[(0,m.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,m.jsx)(`div`,{className:`w-8 h-8 rounded-lg flex items-center justify-center transition-colors 
                     ${e.type===`positive`?`bg-status-success/10 text-status-success group-hover:bg-status-success/20`:`bg-status-error/10 text-status-error group-hover:bg-status-error/20`}
                   `,children:(0,m.jsx)(t,{size:16})}),(0,m.jsx)(`span`,{className:`font-semibold text-sm text-text-primary`,children:e.title})]}),(0,m.jsxs)(`span`,{className:`text-xs font-bold px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity ${e.type===`positive`?`bg-status-success/15 text-status-success`:`bg-status-error/15 text-status-error`}`,children:[e.impact>0?`+`:``,e.impact,` pts`]})]},e.id)})})]})]})},h.__docgenInfo={description:``,methods:[],displayName:`CreditScoreSimulator`,props:{initialScore:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`650`,computed:!1}}}}})),_,v,y,b,x,S,C,w,T,E,D;e((()=>{g(),n(),_=r(),v={title:`Fintech/Credit & BNPL/CreditScoreSimulator`,component:h,parameters:{layout:`centered`},tags:[`autodocs`]},y={args:{initialScore:650},render:e=>(0,_.jsx)(`div`,{className:`w-full min-w-[320px]`,children:(0,_.jsx)(h,{...e})})},b={args:{initialScore:780},render:e=>(0,_.jsx)(`div`,{className:`w-full min-w-[320px]`,children:(0,_.jsx)(h,{...e})})},x={args:{initialScore:520},render:e=>(0,_.jsx)(`div`,{className:`w-full min-w-[320px]`,children:(0,_.jsx)(h,{...e})})},S={args:{initialScore:830},render:e=>(0,_.jsx)(`div`,{className:`w-full min-w-[320px]`,children:(0,_.jsx)(h,{...e})})},C={args:{initialScore:300},render:e=>(0,_.jsx)(`div`,{className:`w-full min-w-[320px]`,children:(0,_.jsx)(h,{...e})})},w={render:()=>(0,_.jsxs)(`div`,{className:`flex flex-col items-center gap-4 w-full min-w-[320px]`,children:[(0,_.jsx)(`p`,{className:`text-xs text-text-secondary text-center max-w-xs`,children:`Simula acciones financieras para ver cómo afectan tu puntaje crediticio en tiempo real`}),(0,_.jsx)(h,{initialScore:680})]})},T={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,_.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,_.jsx)(e,{})})]},E={parameters:{viewport:{defaultViewport:`mobile1`}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    initialScore: 650
  },
  render: args => <div className="w-full min-w-[320px]"><CreditScoreSimulator {...args} /></div>
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    initialScore: 780
  },
  render: args => <div className="w-full min-w-[320px]"><CreditScoreSimulator {...args} /></div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    initialScore: 520
  },
  render: args => <div className="w-full min-w-[320px]"><CreditScoreSimulator {...args} /></div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    initialScore: 830
  },
  render: args => <div className="w-full min-w-[320px]"><CreditScoreSimulator {...args} /></div>
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    initialScore: 300
  },
  render: args => <div className="w-full min-w-[320px]"><CreditScoreSimulator {...args} /></div>
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col items-center gap-4 w-full min-w-[320px]">
      <p className="text-xs text-text-secondary text-center max-w-xs">
        Simula acciones financieras para ver cómo afectan tu puntaje crediticio en tiempo real
      </p>
      <CreditScoreSimulator initialScore={680} />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`ExcellentScore`,`PoorScore`,`NearPerfectScore`,`MinimumScore`,`Interactive`,`DarkMode`,`MobileView`]}))();export{T as DarkMode,y as Default,b as ExcellentScore,w as Interactive,C as MinimumScore,E as MobileView,S as NearPerfectScore,x as PoorScore,D as __namedExportsOrder,v as default};