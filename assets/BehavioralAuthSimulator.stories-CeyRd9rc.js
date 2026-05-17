import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CpZpVqtp.js";import{H as r,Nt as i,Pr as a,R as o,Un as s,t as c,vn as l}from"./lucide-react-ClkQfjSy.js";import{t as u}from"./jsx-runtime-DaLCRA3n.js";import{l as d,s as f,t as p}from"./es-DgKUYGPE.js";var m,h,g,_=e((()=>{m=t(n()),p(),c(),h=u(),g=({analyzingText:e=`Protegiendo tu sesión silenciosamente...`,successText:t=`Identidad confirmada por comportamiento`,onComplete:n,duration:c=3e3})=>{let[u,p]=(0,m.useState)(`analyzing`),[g,_]=(0,m.useState)(0),v=[{icon:i,label:`Ubicación Geográfica`},{icon:o,label:`Dispositivo de Confianza`},{icon:l,label:`Biometría de Tecleo`},{icon:a,label:`Patrón de Navegación`},{icon:s,label:`Horario Habitual`}];return(0,m.useEffect)(()=>{let e=setInterval(()=>{_(e=>e<v.length-1?e+1:e)},c/v.length),t=setTimeout(()=>{p(`success`),clearInterval(e),n&&n()},c);return()=>{clearInterval(e),clearTimeout(t)}},[c,v.length,n]),(0,h.jsxs)(`div`,{className:`bg-surface-primary rounded-2xl border border-border-primary p-6 max-w-sm mx-auto shadow-sm`,children:[(0,h.jsxs)(`div`,{className:`flex flex-col items-center mb-6 text-center`,children:[(0,h.jsx)(`div`,{className:`relative w-16 h-16 mb-4 flex items-center justify-center`,children:(0,h.jsx)(d,{mode:`wait`,children:u===`analyzing`?(0,h.jsxs)(f.div,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.8},className:`absolute inset-0 flex items-center justify-center`,children:[(0,h.jsx)(`div`,{className:`absolute inset-0 border-4 border-blue-500/20 rounded-full animate-ping`,style:{animationDuration:`3s`}}),(0,h.jsx)(`div`,{className:`absolute inset-2 border-4 border-blue-500/40 rounded-full animate-ping`,style:{animationDuration:`2s`}}),(0,h.jsx)(r,{className:`w-8 h-8 text-blue-500 animate-pulse`})]},`analyzing`):(0,h.jsx)(f.div,{initial:{opacity:0,scale:.5,rotate:-90},animate:{opacity:1,scale:1,rotate:0},className:`bg-green-100 dark:bg-green-900 rounded-full p-3`,children:(0,h.jsx)(r,{className:`w-10 h-10 text-green-600 dark:text-green-50`})},`success`)})}),(0,h.jsx)(`h3`,{className:`text-lg font-semibold text-text-primary mb-1`,children:u===`analyzing`?e:t}),u===`analyzing`&&(0,h.jsxs)(`p`,{className:`text-sm text-gray-500 dark:text-gray-400`,children:[`Analizando `,v.length,` factores de riesgo`]})]}),(0,h.jsx)(`div`,{className:`space-y-3`,children:v.map((e,t)=>{let n=e.icon,r=u===`success`||t<g,i=u===`analyzing`&&t===g;return(0,h.jsxs)(f.div,{initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:t*.1},className:`flex items-center gap-3 p-3 rounded-xl transition-colors ${r?`bg-green-50 dark:bg-green-900 border border-green-100 dark:border-green-800`:i?`bg-blue-50 dark:bg-blue-900 border border-blue-100 dark:border-blue-800`:`bg-gray-50 dark:bg-gray-800 border border-transparent opacity-50`}`,children:[(0,h.jsx)(`div`,{className:`p-1.5 rounded-lg ${r?`text-green-600 dark:text-green-50 bg-green-100 dark:bg-green-800`:i?`text-blue-600 dark:text-blue-50 bg-blue-100 dark:bg-blue-800 animate-pulse`:`text-gray-400 bg-gray-100 dark:bg-gray-700`}`,children:(0,h.jsx)(n,{size:16})}),(0,h.jsx)(`span`,{className:`text-sm font-medium ${r?`text-green-700 dark:text-green-50`:i?`text-blue-700 dark:text-blue-50`:`text-gray-500 dark:text-gray-300`}`,children:e.label}),r&&(0,h.jsx)(f.div,{initial:{scale:0},animate:{scale:1},className:`ml-auto`,children:(0,h.jsx)(`div`,{className:`w-2 h-2 rounded-full bg-green-500`})}),i&&(0,h.jsx)(`div`,{className:`ml-auto w-4 h-4 rounded-full border-2 border-blue-400 border-t-transparent animate-spin`})]},t)})})]})},g.__docgenInfo={description:``,methods:[],displayName:`BehavioralAuthSimulator`,props:{analyzingText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Protegiendo tu sesión silenciosamente..."`,computed:!1}},successText:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"Identidad confirmada por comportamiento"`,computed:!1}},onComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},duration:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`3000`,computed:!1}}}}})),v,y,b,x,S,C,w,T,E,D,O;e((()=>{_(),n(),v=u(),y={title:`Fintech/KYC/BehavioralAuthSimulator`,component:g,parameters:{layout:`centered`},tags:[`autodocs`]},b={args:{duration:4e3}},x={args:{duration:1500,analyzingText:`Verificando identidad...`,successText:`Acceso autorizado`}},S={args:{duration:8e3,analyzingText:`Analizando patrones de comportamiento avanzados con machine learning...`,successText:`Perfil conductual verificado al 100%`}},C={args:{duration:3e3,analyzingText:`🔒 Escaneando huella digital del dispositivo...`,successText:`✅ Dispositivo confiable confirmado`}},w={args:{duration:3e3,onComplete:()=>console.log(`Behavioral authentication completed successfully`)},render:e=>(0,v.jsxs)(`div`,{className:`flex flex-col items-center gap-4`,children:[(0,v.jsx)(`p`,{className:`text-xs text-text-secondary mb-2`,children:`Revisa la consola al completar`}),(0,v.jsx)(g,{...e})]})},T={args:{duration:2500,analyzingText:`Autenticando...`,successText:`✓ Listo`}},E={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,v.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,v.jsx)(e,{})})]},D={parameters:{viewport:{defaultViewport:`mobile1`}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 4000
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 1500,
    analyzingText: "Verificando identidad...",
    successText: "Acceso autorizado"
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 8000,
    analyzingText: "Analizando patrones de comportamiento avanzados con machine learning...",
    successText: "Perfil conductual verificado al 100%"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 3000,
    analyzingText: "🔒 Escaneando huella digital del dispositivo...",
    successText: "✅ Dispositivo confiable confirmado"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 3000,
    onComplete: () => console.log('Behavioral authentication completed successfully')
  },
  render: args => <div className="flex flex-col items-center gap-4">
      <p className="text-xs text-text-secondary mb-2">Revisa la consola al completar</p>
      <BehavioralAuthSimulator {...args} />
    </div>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    duration: 2500,
    analyzingText: "Autenticando...",
    successText: "✓ Listo"
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...D.parameters?.docs?.source}}},O=[`Default`,`FastAuth`,`ExtendedAnalysis`,`CustomMessages`,`WithCustomCallback`,`MinimalMode`,`DarkMode`,`MobileView`]}))();export{C as CustomMessages,E as DarkMode,b as Default,S as ExtendedAnalysis,x as FastAuth,T as MinimalMode,D as MobileView,w as WithCustomCallback,O as __namedExportsOrder,y as default};