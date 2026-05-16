import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-Ns4lj-Vt.js";import{n as r,t as i}from"./utils-4pdYZGDS.js";import{t as a}from"./jsx-runtime-BK76Wfr-.js";import{l as o,s,t as c}from"./es-Bab7Eu6H.js";import{A as l,Tt as u,t as d,wt as f}from"./lucide-react-DM_OnbjU.js";import{n as p,t as m}from"./Switch-C647trcS.js";var h,g,_,v,y,b,x=e((()=>{h=t(n()),c(),d(),p(),r(),g=a(),_=typeof window<`u`,v=e=>e===`system`?_&&window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`:e,y=e=>e===`light`||e===`dark`||e===`system`,b=({defaultMode:e=`system`,storageKey:t=`theme`,label:n=`Apariencia`,description:r,allowSystem:a=!0,className:c,onModeChange:d})=>{let[p,b]=h.useState(e),[x,S]=h.useState(()=>v(e)),C=h.useCallback(e=>{if(!_)return;let t=document.documentElement;t.classList.toggle(`dark`,e===`dark`),t.style.colorScheme=e,t.dataset.theme=e},[]);h.useEffect(()=>{if(!_)return;let n=t?localStorage.getItem(t):null,r=y(n)?n:e,i=v(r);b(r),S(i),C(i)},[C,e,t]),h.useEffect(()=>{if(!_)return;let e=window.matchMedia(`(prefers-color-scheme: dark)`),t=e=>{if(p!==`system`)return;let t=e.matches?`dark`:`light`;S(t),C(t),d?.(`system`,t)};return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[C,p,d]);let w=e=>{let n=v(e);b(e),S(n),C(n),t&&localStorage.setItem(t,e),d?.(e,n)},T=e=>w(e?`dark`:`light`),E=()=>w(`system`),D=r||(p===`system`?`Siguiendo la preferencia del sistema`:x===`dark`?`Modo oscuro activo`:`Modo claro activo`);return(0,g.jsxs)(`div`,{className:i(`flex w-full items-center justify-between gap-4 rounded-2xl border border-border-primary bg-surface-secondary/80 px-4 py-3 shadow-sm backdrop-blur-sm`,c),children:[(0,g.jsxs)(`div`,{className:`flex items-center gap-3`,children:[(0,g.jsx)(`div`,{className:`relative flex h-11 w-11 items-center justify-center rounded-xl border border-border-secondary bg-gradient-to-br from-accent-blue/10 via-surface-primary to-accent-blue/30 text-accent-blue shadow-xs`,children:(0,g.jsx)(o,{mode:`wait`,initial:!1,children:(0,g.jsx)(s.span,{className:`flex items-center justify-center`,initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.18,ease:[.16,1,.3,1]},children:x===`dark`?(0,g.jsx)(f,{className:`h-5 w-5`}):(0,g.jsx)(l,{className:`h-5 w-5`})},x)})}),(0,g.jsxs)(`div`,{className:`space-y-0.5`,children:[(0,g.jsx)(`p`,{className:`text-sm font-semibold text-text-primary`,children:n}),(0,g.jsx)(`p`,{className:`text-xs text-text-secondary`,children:D})]})]}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2`,children:[a&&(0,g.jsxs)(`button`,{type:`button`,onClick:E,className:i(`group inline-flex items-center gap-1.5 rounded-full border border-border-secondary px-3 py-1 text-xs font-medium text-text-secondary transition-apple hover:border-border-primary hover:text-text-primary`,p===`system`&&`bg-surface-primary text-text-primary shadow-xs`),children:[(0,g.jsx)(u,{className:`h-3.5 w-3.5`}),`Auto`]}),(0,g.jsx)(m,{checked:x===`dark`,onCheckedChange:T})]})]})},b.__docgenInfo={description:``,methods:[],displayName:`ThemeToggle`,props:{defaultMode:{required:!1,tsType:{name:`union`,raw:`ThemeName | 'system'`,elements:[{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},{name:`literal`,value:`'system'`}]},description:"Modo inicial. `system` respeta la preferencia del SO.",defaultValue:{value:`'system'`,computed:!1}},storageKey:{required:!1,tsType:{name:`string`},description:"Clave usada para persistir la preferencia en `localStorage`.",defaultValue:{value:`'theme'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Texto principal del control.`,defaultValue:{value:`'Apariencia'`,computed:!1}},description:{required:!1,tsType:{name:`string`},description:`Texto secundario opcional. Si no se define, se genera automáticamente.`},allowSystem:{required:!1,tsType:{name:`boolean`},description:`Permite volver al modo automático (prefiere color scheme del sistema).`,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Clase adicional para el contenedor.`},onModeChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(mode: ThemeMode, theme: ThemeName) => void`,signature:{arguments:[{type:{name:`union`,raw:`ThemeName | 'system'`,elements:[{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},{name:`literal`,value:`'system'`}]},name:`mode`},{type:{name:`union`,raw:`'light' | 'dark'`,elements:[{name:`literal`,value:`'light'`},{name:`literal`,value:`'dark'`}]},name:`theme`}],return:{name:`void`}}},description:`Callback al cambiar el modo.`}}}})),S,C,w,T,E,D,O,k,A,j,M,N;e((()=>{x(),S=t(n()),C=a(),w={title:`Navigation/ThemeToggle`,component:b,tags:[`autodocs`]},T={args:{defaultMode:`system`,onModeChange:(e,t)=>console.log(`Mode:`,e,`Theme:`,t)}},E={args:{defaultMode:`light`,onModeChange:(e,t)=>console.log(`Mode:`,e)}},D={args:{defaultMode:`dark`,onModeChange:(e,t)=>console.log(`Mode:`,e)}},O={args:{label:`Appearance Settings`,description:`Choose between light, dark, or system theme`,defaultMode:`system`,onModeChange:(e,t)=>console.log(`Mode:`,e)}},k={args:{defaultMode:`light`,allowSystem:!1,onModeChange:(e,t)=>console.log(`Mode:`,e)}},A={render:()=>{let[e,t]=(0,S.useState)(`system`),[n,r]=(0,S.useState)(`light`);return(0,C.jsxs)(`div`,{className:`space-y-4`,children:[(0,C.jsx)(b,{defaultMode:e,onModeChange:(e,n)=>{t(e),r(n)},allowSystem:!0}),(0,C.jsxs)(`div`,{className:`p-3 bg-surface-secondary rounded-lg text-xs space-y-1`,children:[(0,C.jsxs)(`p`,{children:[`Current mode: `,(0,C.jsx)(`strong`,{children:e})]}),(0,C.jsxs)(`p`,{children:[`Resolved theme: `,(0,C.jsx)(`strong`,{children:n})]})]})]})}},j={parameters:{themes:{themeOverride:`dark`}},args:{defaultMode:`dark`,label:`Dark Theme Toggle`,onModeChange:(e,t)=>console.log(`Mode:`,e)}},M={parameters:{viewport:{defaultViewport:`mobile1`}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMode: 'system',
    onModeChange: (mode, theme) => console.log('Mode:', mode, 'Theme:', theme)
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMode: 'light',
    onModeChange: (mode, theme) => console.log('Mode:', mode)
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMode: 'dark',
    onModeChange: (mode, theme) => console.log('Mode:', mode)
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Appearance Settings',
    description: 'Choose between light, dark, or system theme',
    defaultMode: 'system',
    onModeChange: (mode, theme) => console.log('Mode:', mode)
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    defaultMode: 'light',
    allowSystem: false,
    onModeChange: (mode, theme) => console.log('Mode:', mode)
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [mode, setMode] = useState<'light' | 'dark' | 'system'>('system');
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    return <div className="space-y-4">
                <ThemeToggle defaultMode={mode} onModeChange={(m, t) => {
        setMode(m);
        setTheme(t);
      }} allowSystem />
                <div className="p-3 bg-surface-secondary rounded-lg text-xs space-y-1">
                    <p>Current mode: <strong>{mode}</strong></p>
                    <p>Resolved theme: <strong>{theme}</strong></p>
                </div>
            </div>;
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    defaultMode: 'dark',
    label: 'Dark Theme Toggle',
    onModeChange: (mode, theme) => console.log('Mode:', mode)
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...M.parameters?.docs?.source}}},N=[`Default`,`Light`,`Dark`,`CustomLabel`,`WithoutSystem`,`InteractiveTheme`,`DarkModeDefault`,`MobileView`]}))();export{O as CustomLabel,D as Dark,j as DarkModeDefault,T as Default,A as InteractiveTheme,E as Light,M as MobileView,k as WithoutSystem,N as __namedExportsOrder,w as default};