import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-D15PU-2o.js";import{H as n,L as r,ln as i,mn as a,t as o}from"./lucide-react-BwGO_ZZQ.js";import{n as s,t as c}from"./utils-ijcE-ZHT.js";import{t as l}from"./jsx-runtime-DaLCRA3n.js";import{s as u,t as d}from"./es-CNBxpAzP.js";var f,p,m,h,g=e((()=>{t(),d(),s(),o(),f=l(),p=[{id:`freeze`,label:`Freeze Card`,description:`Temporarily block all card transactions`,icon:(0,f.jsx)(r,{className:`w-5 h-5`}),checked:!1,variant:`danger`},{id:`limits`,label:`Spending Limits`,description:`Set daily spending and ATM withdrawal limits`,icon:(0,f.jsx)(a,{className:`w-5 h-5`}),checked:!0},{id:`international`,label:`International Purchases`,description:`Allow transactions from foreign merchants`,icon:(0,f.jsx)(i,{className:`w-5 h-5`}),checked:!1}],m=({control:e,onToggle:t,index:n})=>{let r=e.variant===`danger`;return(0,f.jsxs)(u.div,{className:c(`flex items-center gap-4 p-4 rounded-xl transition-apple`,`hover:bg-surface-secondary/40`),initial:{opacity:0,x:-8},animate:{opacity:1,x:0},transition:{delay:n*.06,duration:.25},children:[(0,f.jsx)(`div`,{className:c(`w-10 h-10 rounded-xl flex items-center justify-center shrink-0`,e.checked?r?`bg-status-error/10 text-status-error`:`bg-accent-blue/10 text-accent-blue`:`bg-surface-secondary text-text-tertiary`),children:e.icon}),(0,f.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,f.jsx)(`p`,{className:`text-sm font-semibold text-text-primary`,children:e.label}),(0,f.jsx)(`p`,{className:`text-xs text-text-tertiary mt-0.5`,children:e.description})]}),(0,f.jsx)(`button`,{type:`button`,role:`switch`,"aria-checked":e.checked,"aria-label":e.label,onClick:()=>t?.(e.id,!e.checked),className:c(`w-11 h-6 rounded-full relative shrink-0 transition-apple duration-200 flex items-center px-0.5`,`focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2`,e.checked?r?`bg-status-error`:`bg-accent-blue`:`bg-surface-secondary`),children:(0,f.jsx)(u.span,{className:`block w-5 h-5 rounded-full bg-white shadow-sm shrink-0`,animate:{x:e.checked?18:0},transition:{type:`spring`,stiffness:500,damping:30}})})]})},h=({controls:e=p,onToggle:t,title:r=`Card Security`,className:i=``})=>(0,f.jsxs)(u.div,{className:c(`bg-surface-primary rounded-2xl border border-border-primary shadow-sm overflow-hidden`,i),initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.3,ease:[.16,1,.3,1]},children:[(0,f.jsxs)(`div`,{className:`flex items-center gap-2 px-5 py-4 border-b border-border-secondary`,children:[(0,f.jsx)(n,{className:`w-4 h-4 text-accent-blue`}),(0,f.jsx)(`h3`,{className:`text-sm font-bold text-text-primary`,children:r})]}),(0,f.jsx)(`div`,{className:`divide-y divide-border-secondary/50 px-1`,children:e.map((e,n)=>(0,f.jsx)(m,{control:e,onToggle:t,index:n},e.id))})]}),h.displayName=`CardSecurityControls`,h.__docgenInfo={description:``,methods:[],displayName:`CardSecurityControls`,props:{controls:{required:!1,tsType:{name:`Array`,elements:[{name:`CardControl`}],raw:`CardControl[]`},description:``,defaultValue:{value:`[
    {
        id: 'freeze',
        label: 'Freeze Card',
        description: 'Temporarily block all card transactions',
        icon: <Snowflake className="w-5 h-5" />,
        checked: false,
        variant: 'danger',
    },
    {
        id: 'limits',
        label: 'Spending Limits',
        description: 'Set daily spending and ATM withdrawal limits',
        icon: <Gauge className="w-5 h-5" />,
        checked: true,
    },
    {
        id: 'international',
        label: 'International Purchases',
        description: 'Allow transactions from foreign merchants',
        icon: <Globe className="w-5 h-5" />,
        checked: false,
    },
]`,computed:!1}},onToggle:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string, checked: boolean) => void`,signature:{arguments:[{type:{name:`string`},name:`id`},{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},title:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'Card Security'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}}));export{g as n,h as t};