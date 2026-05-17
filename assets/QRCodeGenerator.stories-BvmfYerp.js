import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-CpZpVqtp.js";import{Fn as r,at as i,jn as a,t as o,tr as s}from"./lucide-react-ClkQfjSy.js";import{n as c,t as l}from"./utils-ijcE-ZHT.js";import{t as u}from"./jsx-runtime-DaLCRA3n.js";import{t as d}from"./Input-Ddeya_xi.js";import{t as f}from"./Input-GuD1wt5X.js";import{n as p,t as m}from"./Button-4ohWknFX.js";var h,g,_,v=e((()=>{h=t(n()),c(),m(),f(),o(),g=u(),_=({defaultValue:e=`https://example.com`,size:t=200,color:n=`#000000`,backgroundColor:o=`#FFFFFF`,showInput:c=!1,className:u})=>{let[f,m]=(0,h.useState)(e),[_,v]=(0,h.useState)(``),[y,b]=(0,h.useState)(!0),[x,S]=(0,h.useState)(!1),C=e=>e.replace(`#`,``);return(0,h.useEffect)(()=>{b(!0);let e=`https://api.qrserver.com/v1/create-qr-code/?size=${t}x${t}&data=${encodeURIComponent(f)}&color=${C(n)}&bgcolor=${C(o)}&margin=10`,r=new Image;r.src=e,r.onload=()=>{v(e),b(!1)}},[f,t,n,o]),(0,g.jsxs)(`div`,{className:l(`flex flex-col items-center gap-6 p-6 rounded-2xl bg-surface-primary border border-border-primary shadow-sm w-full max-w-sm`,u),children:[c&&(0,g.jsxs)(`div`,{className:`w-full space-y-2`,children:[(0,g.jsx)(`label`,{className:`text-sm font-medium text-text-secondary`,children:`Content`}),(0,g.jsx)(d,{value:f,onChange:e=>m(e.target.value),placeholder:`Enter URL or text...`,className:`w-full`})]}),(0,g.jsxs)(`div`,{className:`relative rounded-xl overflow-hidden bg-white shadow-inner border border-border-secondary`,style:{width:t,height:t},children:[y&&(0,g.jsx)(`div`,{className:`absolute inset-0 flex items-center justify-center bg-surface-secondary animate-pulse`,children:(0,g.jsx)(i,{className:`w-8 h-8 text-text-tertiary animate-spin`})}),_&&(0,g.jsx)(`img`,{src:_,alt:`QR Code`,className:l(`w-full h-full object-contain transition-opacity duration-300`,y?`opacity-0`:`opacity-100`)})]}),(0,g.jsxs)(`div`,{className:`flex items-center gap-2 w-full`,children:[(0,g.jsxs)(p,{variant:`outline`,className:`flex-1`,onClick:()=>{navigator.clipboard.writeText(f),S(!0),setTimeout(()=>S(!1),2e3)},title:`Copy content to clipboard`,children:[x?(0,g.jsx)(s,{className:`w-4 h-4 mr-2`}):(0,g.jsx)(r,{className:`w-4 h-4 mr-2`}),x?`Copied`:`Copy`]}),(0,g.jsxs)(p,{variant:`primary`,className:`flex-1`,onClick:async()=>{try{let e=await(await fetch(_)).blob(),t=window.URL.createObjectURL(e),n=document.createElement(`a`);n.href=t,n.download=`qrcode-${Date.now()}.png`,document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(t)}catch(e){console.error(`Error downloading QR code:`,e),window.open(_,`_blank`)}},children:[(0,g.jsx)(a,{className:`w-4 h-4 mr-2`}),`Download`]})]})]})},_.__docgenInfo={description:``,methods:[],displayName:`QRCodeGenerator`,props:{defaultValue:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"https://example.com"`,computed:!1}},size:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`200`,computed:!1}},color:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#000000"`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`"#FFFFFF"`,computed:!1}},showInput:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),y,b,x,S,C,w,T,E,D,O,k;e((()=>{v(),y={title:`Data Display/QRCodeGenerator`,component:_,tags:[`autodocs`]},b={args:{value:`https://example.com`}},x={args:{value:`bitcoin:bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh?amount=0.01`,label:`Bitcoin Address`}},S={args:{value:`0x1234567890abcdef1234567890abcdef12345678`,label:`Ethereum Address`}},C={args:{value:`https://app.cryptowallet.com/referral?code=ABC123`,size:256,label:`Referral Link`}},w={args:{value:`payment-12345`,size:128,label:`Payment Code`}},T={args:{defaultValue:`https://pay.bank.com/send?to=123456&amount=50.00`,size:200,showInput:!1,label:`Scan to Pay $50 USD`}},E={args:{defaultValue:`bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.01`,size:200,showInput:!1,label:`Bitcoin Receiving Address`}},D={args:{defaultValue:`https://fintech.app/profile/cesar`,size:180,color:`#007AFF`,backgroundColor:`#F2F2F7`,showInput:!0,label:`Profile QR Code`}},O={args:{defaultValue:`https://banking.app/invite/referral?code=CESAR2026`,size:300,showInput:!1,label:`Referral Code`}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'https://example.com'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'bitcoin:bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh?amount=0.01',
    label: 'Bitcoin Address'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    value: '0x1234567890abcdef1234567890abcdef12345678',
    label: 'Ethereum Address'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'https://app.cryptowallet.com/referral?code=ABC123',
    size: 256,
    label: 'Referral Link'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'payment-12345',
    size: 128,
    label: 'Payment Code'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://pay.bank.com/send?to=123456&amount=50.00',
    size: 200,
    showInput: false,
    label: 'Scan to Pay $50 USD'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'bitcoin:1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa?amount=0.01',
    size: 200,
    showInput: false,
    label: 'Bitcoin Receiving Address'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://fintech.app/profile/cesar',
    size: 180,
    color: '#007AFF',
    backgroundColor: '#F2F2F7',
    showInput: true,
    label: 'Profile QR Code'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'https://banking.app/invite/referral?code=CESAR2026',
    size: 300,
    showInput: false,
    label: 'Referral Code'
  }
}`,...O.parameters?.docs?.source}}},k=[`Default`,`BitcoinAddress`,`WithLabel`,`Large`,`Small`,`PaymentQR`,`BitcoinReceiveAddress`,`WithColor`,`LargeQR`]}))();export{x as BitcoinAddress,E as BitcoinReceiveAddress,b as Default,C as Large,O as LargeQR,T as PaymentQR,w as Small,D as WithColor,S as WithLabel,k as __namedExportsOrder,y as default};