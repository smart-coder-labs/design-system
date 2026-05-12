import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-CSCYuKHF.js";import{C as t,S as p}from"./CardSecurityControls-JNRMzxTy.js";import{G as g}from"./gauge-pUy__cia.js";import{G as h}from"./globe-b2g1SBAN.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-DCADjnpI.js";import"./proxy-DgdbOAE3.js";import"./resolve-elements-BeIloL1I.js";import"./shield-check-DBk54K9Q.js";import"./createLucideIcon-BvoP2Q-9.js";const j={title:"Fintech/Cards/CardSecurityControls",component:t,parameters:{layout:"centered"},tags:[]},r={args:{},decorators:[s=>e.jsx("div",{className:"w-[400px]",children:e.jsx(s,{})})]},a={name:"🔐 Caso de Uso: Interactive Controls",render:()=>{const[s,n]=m.useState([{id:"freeze",label:"Freeze Card",description:"Temporarily block all card transactions",icon:e.jsx(p,{className:"w-5 h-5"}),checked:!1,variant:"danger"},{id:"limits",label:"Spending Limits",description:"Set daily spending and ATM withdrawal limits",icon:e.jsx(g,{className:"w-5 h-5"}),checked:!0},{id:"international",label:"International Purchases",description:"Allow transactions from foreign merchants",icon:e.jsx(h,{className:"w-5 h-5"}),checked:!1}]),i=(c,l)=>{n(d=>d.map(o=>o.id===c?{...o,checked:l}:o))};return e.jsx("div",{className:"w-[400px]",children:e.jsx(t,{controls:s,onToggle:i})})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {},
  decorators: [Story => <div className="w-[400px]"><Story /></div>]
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '🔐 Caso de Uso: Interactive Controls',
  render: () => {
    const [controls, setControls] = useState<CardControl[]>([{
      id: 'freeze',
      label: 'Freeze Card',
      description: 'Temporarily block all card transactions',
      icon: <Snowflake className="w-5 h-5" />,
      checked: false,
      variant: 'danger'
    }, {
      id: 'limits',
      label: 'Spending Limits',
      description: 'Set daily spending and ATM withdrawal limits',
      icon: <Gauge className="w-5 h-5" />,
      checked: true
    }, {
      id: 'international',
      label: 'International Purchases',
      description: 'Allow transactions from foreign merchants',
      icon: <Globe className="w-5 h-5" />,
      checked: false
    }]);
    const handleToggle = (id: string, checked: boolean) => {
      setControls(prev => prev.map(c => c.id === id ? {
        ...c,
        checked
      } : c));
    };
    return <div className="w-[400px]">
                <CardSecurityControls controls={controls} onToggle={handleToggle} />
            </div>;
  }
}`,...a.parameters?.docs?.source}}};const T=["Default","Interactive"];export{r as Default,a as Interactive,T as __namedExportsOrder,j as default};
