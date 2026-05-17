import{n as e}from"./chunk-jRWAZmH_.js";import{a as t}from"./iframe-D0o8cdjS.js";import{It as n,V as r,qn as i,t as a}from"./lucide-react-yAgQzC9Q.js";import{t as o}from"./jsx-runtime-DaLCRA3n.js";import{s,t as c}from"./es-biEEKJuQ.js";var l,u,d=e((()=>{t(),c(),a(),l=o(),u=({amount:e,actionLabel:t=`transacción`,variant:a=`encryption`})=>{let o={encryption:{icon:n,title:`Cifrado de Extremo a Extremo`,desc:`Tu información viaja segura mediante encriptación bancaria de 256-bits a prueba de intercepciones.`,color:`bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900 dark:text-blue-50 dark:border-blue-800`,iconColor:`text-blue-500`},insurance:{icon:r,title:`Fondos Asegurados`,desc:e?`Tus fondos por ${e} están 100% protegidos por el seguro de depósitos nacionales.`:`Tus fondos están protegidos por el seguro de depósitos nacionales hasta el límite legal.`,color:`bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900 dark:text-emerald-50 dark:border-emerald-800`,iconColor:`text-emerald-500`},"fraud-protection":{icon:i,title:`Garantía Anti-Fraude`,desc:`Esta ${t} está monitoreada. Si no reconoces el cargo, tienes 90 días para cancelar sin costo.`,color:`bg-indigo-50 text-indigo-700 border-indigo-100 dark:bg-indigo-900 dark:text-indigo-50 dark:border-indigo-800`,iconColor:`text-indigo-500`}}[a],c=o.icon;return(0,l.jsxs)(s.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:`rounded-xl border p-4 flex gap-3 items-start shadow-sm backdrop-blur-sm ${o.color}`,children:[(0,l.jsx)(`div`,{className:`mt-0.5 ${o.iconColor}`,children:(0,l.jsx)(c,{size:20})}),(0,l.jsxs)(`div`,{children:[(0,l.jsx)(`h4`,{className:`font-semibold text-sm mb-1`,children:o.title}),(0,l.jsx)(`p`,{className:`text-xs opacity-90 leading-relaxed font-medium`,children:o.desc})]})]})},u.__docgenInfo={description:``,methods:[],displayName:`ContextualTrustBadge`,props:{amount:{required:!1,tsType:{name:`string`},description:``},actionLabel:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"transacción"`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'encryption' | 'insurance' | 'fraud-protection'`,elements:[{name:`literal`,value:`'encryption'`},{name:`literal`,value:`'insurance'`},{name:`literal`,value:`'fraud-protection'`}]},description:``,defaultValue:{value:`'encryption'`,computed:!1}}}}})),f,p,m,h,g,_,v,y,b,x,S,C;e((()=>{d(),t(),f=o(),p={title:`Fintech/Security/ContextualTrustBadge`,component:u,parameters:{layout:`centered`},tags:[`autodocs`]},m={args:{variant:`encryption`}},h={args:{variant:`insurance`,amount:`$3,000.00 MXN`}},g={args:{variant:`fraud-protection`,actionLabel:`transferencia internacional`}},_={args:{variant:`insurance`}},v={args:{variant:`fraud-protection`}},y={args:{variant:`insurance`,amount:`$250,000.00 MXN`}},b={render:()=>(0,f.jsxs)(`div`,{className:`max-w-md space-y-4 p-6 bg-background-primary rounded-2xl border border-border-primary`,children:[(0,f.jsx)(`h3`,{className:`text-lg font-bold`,children:`Confirmar Pago`}),(0,f.jsxs)(`div`,{className:`space-y-2 text-sm`,children:[(0,f.jsxs)(`div`,{className:`flex justify-between`,children:[(0,f.jsx)(`span`,{className:`text-text-secondary`,children:`Destino`}),(0,f.jsx)(`span`,{className:`font-medium`,children:`Amazon MX`})]}),(0,f.jsxs)(`div`,{className:`flex justify-between`,children:[(0,f.jsx)(`span`,{className:`text-text-secondary`,children:`Monto`}),(0,f.jsx)(`span`,{className:`font-bold`,children:`$1,250.00 MXN`})]})]}),(0,f.jsx)(u,{variant:`encryption`}),(0,f.jsx)(u,{variant:`fraud-protection`,actionLabel:`compra`}),(0,f.jsx)(`button`,{className:`w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors`,children:`Confirmar Pago`})]})},x={render:()=>(0,f.jsxs)(`div`,{className:`max-w-md space-y-4 p-6 bg-background-primary rounded-2xl border border-border-primary`,children:[(0,f.jsx)(`h3`,{className:`text-lg font-bold`,children:`Transferencia Internacional`}),(0,f.jsxs)(`div`,{className:`space-y-2 text-sm`,children:[(0,f.jsxs)(`div`,{className:`flex justify-between`,children:[(0,f.jsx)(`span`,{className:`text-text-secondary`,children:`Beneficiario`}),(0,f.jsx)(`span`,{className:`font-medium`,children:`Carlos Mendoza`})]}),(0,f.jsxs)(`div`,{className:`flex justify-between`,children:[(0,f.jsx)(`span`,{className:`text-text-secondary`,children:`Monto`}),(0,f.jsx)(`span`,{className:`font-bold`,children:`$3,000.00 MXN`})]})]}),(0,f.jsx)(u,{variant:`encryption`}),(0,f.jsx)(u,{variant:`insurance`,amount:`$3,000.00 MXN`}),(0,f.jsx)(u,{variant:`fraud-protection`,actionLabel:`transferencia internacional`}),(0,f.jsx)(`button`,{className:`w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors`,children:`Enviar Transferencia`})]})},S={render:()=>(0,f.jsxs)(`div`,{className:`max-w-md space-y-3`,children:[(0,f.jsx)(u,{variant:`encryption`}),(0,f.jsx)(u,{variant:`insurance`,amount:`$50,000.00 MXN`}),(0,f.jsx)(u,{variant:`fraud-protection`,actionLabel:`pago`})]})},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'encryption'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'insurance',
    amount: '$3,000.00 MXN'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fraud-protection',
    actionLabel: 'transferencia internacional'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'insurance'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'fraud-protection'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'insurance',
    amount: '$250,000.00 MXN'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-4 p-6 bg-background-primary rounded-2xl border border-border-primary">
      <h3 className="text-lg font-bold">Confirmar Pago</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-text-secondary">Destino</span>
          <span className="font-medium">Amazon MX</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-secondary">Monto</span>
          <span className="font-bold">$1,250.00 MXN</span>
        </div>
      </div>
      <ContextualTrustBadge variant="encryption" />
      <ContextualTrustBadge variant="fraud-protection" actionLabel="compra" />
      <button className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
        Confirmar Pago
      </button>
    </div>
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-4 p-6 bg-background-primary rounded-2xl border border-border-primary">
      <h3 className="text-lg font-bold">Transferencia Internacional</h3>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-text-secondary">Beneficiario</span>
          <span className="font-medium">Carlos Mendoza</span>
        </div>
        <div className="flex justify-between">
          <span className="text-text-secondary">Monto</span>
          <span className="font-bold">$3,000.00 MXN</span>
        </div>
      </div>
      <ContextualTrustBadge variant="encryption" />
      <ContextualTrustBadge variant="insurance" amount="$3,000.00 MXN" />
      <ContextualTrustBadge variant="fraud-protection" actionLabel="transferencia internacional" />
      <button className="w-full py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors">
        Enviar Transferencia
      </button>
    </div>
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className="max-w-md space-y-3">
      <ContextualTrustBadge variant="encryption" />
      <ContextualTrustBadge variant="insurance" amount="$50,000.00 MXN" />
      <ContextualTrustBadge variant="fraud-protection" actionLabel="pago" />
    </div>
}`,...S.parameters?.docs?.source}}},C=[`Encryption`,`Insurance`,`FraudProtection`,`InsuranceWithoutAmount`,`FraudProtectionDefaultAction`,`LargeAmount`,`PaymentFlow`,`TransferFlow`,`AllVariants`]}))();export{S as AllVariants,m as Encryption,g as FraudProtection,v as FraudProtectionDefaultAction,h as Insurance,_ as InsuranceWithoutAmount,y as LargeAmount,b as PaymentFlow,x as TransferFlow,C as __namedExportsOrder,p as default};