import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-524CuMck.js";import{t as r}from"./jsx-runtime-DaLCRA3n.js";import{n as i,t as a}from"./VirtualCardPreview-CI5k-h6H.js";var o,s,c,l,u,d,f,p,m,h,g,_;e((()=>{i(),o=t(n()),s=r(),c={title:`Fintech/Cards/VirtualCardPreview`,component:a,tags:[`autodocs`]},l={args:{cardHolder:`CESAR RUIZ`,cardNumber:`4532 7891 2345 6789`,expiry:`09/27`,cvv:`***`,brand:`visa`,isFrozen:!1}},u={args:{cardHolder:`CESAR RUIZ`,cardNumber:`5423 4567 8901 2345`,expiry:`12/28`,cvv:`***`,brand:`mastercard`,isFrozen:!1}},d={args:{cardHolder:`CESAR RUIZ`,cardNumber:`3782 822463 10005`,expiry:`03/29`,cvv:`***`,brand:`amex`,isFrozen:!1}},f={args:{cardHolder:`CESAR RUIZ`,cardNumber:`4532 7891 2345 6789`,expiry:`09/27`,cvv:`***`,brand:`visa`,isFrozen:!0}},p={args:{cardHolder:`CESAR RUIZ`,cardNumber:`4532 7891 2345 6789`,expiry:`09/27`,cvv:`123`,showCVV:!0,brand:`visa`,isFrozen:!1}},m={render:()=>{let[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1);return(0,s.jsxs)(`div`,{className:`space-y-4 max-w-sm`,children:[(0,s.jsx)(a,{cardHolder:`CESAR RUIZ`,cardNumber:`4532 7891 2345 6789`,expiry:`09/27`,cvv:`123`,showCVV:n,brand:`visa`,isFrozen:e}),(0,s.jsxs)(`div`,{className:`flex gap-3`,children:[(0,s.jsx)(`button`,{onClick:()=>t(!e),className:`flex-1 px-3 py-2 text-sm rounded-lg ${e?`bg-green-600 text-white`:`bg-red-500 text-white`}`,children:e?`Unfreeze Card`:`Freeze Card`}),(0,s.jsx)(`button`,{onClick:()=>r(!n),className:`px-3 py-2 text-sm bg-surface-secondary rounded-lg hover:bg-surface-tertiary`,children:n?`Hide CVV`:`Show CVV`})]})]})}},h={parameters:{themes:{themeOverride:`dark`}},args:{cardHolder:`CESAR RUIZ`,cardNumber:`4532 7891 2345 6789`,expiry:`09/27`,cvv:`***`,brand:`visa`,isFrozen:!1}},g={parameters:{docs:{description:{story:`VirtualCardPreview in a loading state, showing the card skeleton while card details are being fetched.`}}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    cardHolder: 'CESAR RUIZ',
    cardNumber: '4532 7891 2345 6789',
    expiry: '09/27',
    cvv: '***',
    brand: 'visa',
    isFrozen: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    cardHolder: 'CESAR RUIZ',
    cardNumber: '5423 4567 8901 2345',
    expiry: '12/28',
    cvv: '***',
    brand: 'mastercard',
    isFrozen: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    cardHolder: 'CESAR RUIZ',
    cardNumber: '3782 822463 10005',
    expiry: '03/29',
    cvv: '***',
    brand: 'amex',
    isFrozen: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    cardHolder: 'CESAR RUIZ',
    cardNumber: '4532 7891 2345 6789',
    expiry: '09/27',
    cvv: '***',
    brand: 'visa',
    isFrozen: true
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    cardHolder: 'CESAR RUIZ',
    cardNumber: '4532 7891 2345 6789',
    expiry: '09/27',
    cvv: '123',
    showCVV: true,
    brand: 'visa',
    isFrozen: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isFrozen, setIsFrozen] = useState(false);
    const [showCVV, setShowCVV] = useState(false);
    return <div className="space-y-4 max-w-sm">
                <VirtualCardPreview cardHolder="CESAR RUIZ" cardNumber="4532 7891 2345 6789" expiry="09/27" cvv="123" showCVV={showCVV} brand="visa" isFrozen={isFrozen} />
                <div className="flex gap-3">
                    <button onClick={() => setIsFrozen(!isFrozen)} className={\`flex-1 px-3 py-2 text-sm rounded-lg \${isFrozen ? 'bg-green-600 text-white' : 'bg-red-500 text-white'}\`}>
                        {isFrozen ? 'Unfreeze Card' : 'Freeze Card'}
                    </button>
                    <button onClick={() => setShowCVV(!showCVV)} className="px-3 py-2 text-sm bg-surface-secondary rounded-lg hover:bg-surface-tertiary">
                        {showCVV ? 'Hide CVV' : 'Show CVV'}
                    </button>
                </div>
            </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: 'dark'
    }
  },
  args: {
    cardHolder: 'CESAR RUIZ',
    cardNumber: '4532 7891 2345 6789',
    expiry: '09/27',
    cvv: '***',
    brand: 'visa',
    isFrozen: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'VirtualCardPreview in a loading state, showing the card skeleton while card details are being fetched.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Mastercard`,`Amex`,`Frozen`,`ShowCVV`,`InteractiveCard`,`DarkMode`,`LoadingState`]}))();export{d as Amex,h as DarkMode,l as Default,f as Frozen,m as InteractiveCard,g as LoadingState,u as Mastercard,p as ShowCVV,_ as __namedExportsOrder,c as default};