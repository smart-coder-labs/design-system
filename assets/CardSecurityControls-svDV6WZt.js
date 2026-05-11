import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as s}from"./utils-CDN07tui.js";import{m as n}from"./proxy-CRCEyvcV.js";import{S as l}from"./shield-check-9axflegT.js";import{c as m}from"./createLucideIcon-CdJ-Xkq_.js";import{G as p}from"./gauge-0hwjSUX-.js";import{G as h}from"./globe-BCMU3biU.js";const u=[["path",{d:"m10 20-1.25-2.5L6 18",key:"18frcb"}],["path",{d:"M10 4 8.75 6.5 6 6",key:"7mghy3"}],["path",{d:"m14 20 1.25-2.5L18 18",key:"1chtki"}],["path",{d:"m14 4 1.25 2.5L18 6",key:"1b4wsy"}],["path",{d:"m17 21-3-6h-4",key:"15hhxa"}],["path",{d:"m17 3-3 6 1.5 3",key:"11697g"}],["path",{d:"M2 12h6.5L10 9",key:"kv9z4n"}],["path",{d:"m20 10-1.5 2 1.5 2",key:"1swlpi"}],["path",{d:"M22 12h-6.5L14 15",key:"1mxi28"}],["path",{d:"m4 10 1.5 2L4 14",key:"k9enpj"}],["path",{d:"m7 21 3-6-1.5-3",key:"j8hb9u"}],["path",{d:"m7 3 3 6h4",key:"1otusx"}]],y=m("snowflake",u),f=[{id:"freeze",label:"Freeze Card",description:"Temporarily block all card transactions",icon:e.jsx(y,{className:"w-5 h-5"}),checked:!1,variant:"danger"},{id:"limits",label:"Spending Limits",description:"Set daily spending and ATM withdrawal limits",icon:e.jsx(p,{className:"w-5 h-5"}),checked:!0},{id:"international",label:"International Purchases",description:"Allow transactions from foreign merchants",icon:e.jsx(h,{className:"w-5 h-5"}),checked:!1}],x=({control:a,onToggle:t,index:r})=>{const i=a.variant==="danger";return e.jsxs(n.div,{className:s("flex items-center gap-4 p-4 rounded-xl transition-colors","hover:bg-surface-secondary/40"),initial:{opacity:0,x:-8},animate:{opacity:1,x:0},transition:{delay:r*.06,duration:.25},children:[e.jsx("div",{className:s("w-10 h-10 rounded-xl flex items-center justify-center shrink-0",a.checked?i?"bg-status-error/10 text-status-error":"bg-accent-blue/10 text-accent-blue":"bg-surface-secondary text-text-tertiary"),children:a.icon}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-semibold text-text-primary",children:a.label}),e.jsx("p",{className:"text-xs text-text-tertiary mt-0.5",children:a.description})]}),e.jsx("button",{type:"button",role:"switch","aria-checked":a.checked,"aria-label":a.label,onClick:()=>t?.(a.id,!a.checked),className:s("w-11 h-6 rounded-full relative shrink-0 transition-colors duration-200","focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2",a.checked?i?"bg-status-error":"bg-accent-blue":"bg-surface-secondary"),children:e.jsx(n.span,{className:"block w-5 h-5 rounded-full bg-white shadow-sm",animate:{x:a.checked?20:2,y:2},transition:{type:"spring",stiffness:500,damping:30}})})]})},c=({controls:a=f,onToggle:t,title:r="Card Security",className:i=""})=>e.jsxs(n.div,{className:s("bg-surface-primary rounded-2xl border border-border-primary shadow-sm overflow-hidden",i),initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.3,ease:[.16,1,.3,1]},children:[e.jsxs("div",{className:"flex items-center gap-2 px-5 py-4 border-b border-border-secondary",children:[e.jsx(l,{className:"w-4 h-4 text-accent-blue"}),e.jsx("h3",{className:"text-sm font-bold text-text-primary",children:r})]}),e.jsx("div",{className:"divide-y divide-border-secondary/50 px-1",children:a.map((d,o)=>e.jsx(x,{control:d,onToggle:t,index:o},d.id))})]});c.displayName="CardSecurityControls";c.__docgenInfo={description:"",methods:[],displayName:"CardSecurityControls",props:{controls:{required:!1,tsType:{name:"Array",elements:[{name:"CardControl"}],raw:"CardControl[]"},description:"",defaultValue:{value:`[
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
]`,computed:!1}},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string, checked: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"id"},{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Card Security'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{c as C,y as S};
