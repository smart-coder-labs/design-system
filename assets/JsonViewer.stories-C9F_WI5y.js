import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-B_S8iqXg.js";import{Fn as r,Qn as i,er as a,t as o,tr as s}from"./lucide-react-D-LjNNxx.js";import{n as c,t as l}from"./utils-ijcE-ZHT.js";import{t as u}from"./jsx-runtime-DaLCRA3n.js";import{n as d,t as f}from"./Button-B4XCQzOE.js";var p,m,h,g,_,v=e((()=>{p=t(n()),o(),c(),f(),m=u(),h=e=>e===null?`null`:Array.isArray(e)?`array`:typeof e,g=({name:e,value:t,depth:n,isLast:r,indentSize:o,initiallyExpanded:s})=>{let[c,l]=(0,p.useState)(s),u=h(t),d=u===`object`||u===`array`,f=d&&Object.keys(t).length===0,_=e=>{e.stopPropagation(),l(!c)};return(0,m.jsxs)(`div`,{className:`font-mono text-sm leading-6`,style:{paddingLeft:n>0?o:0},children:[(0,m.jsxs)(`div`,{className:`flex items-start`,children:[(0,m.jsx)(`div`,{className:`w-5 h-6 flex items-center justify-center flex-none mr-1`,children:d&&!f&&(0,m.jsx)(`button`,{onClick:_,className:`text-gray-400 hover:text-gray-200 transition-colors focus:outline-none`,children:c?(0,m.jsx)(a,{className:`w-3.5 h-3.5`}):(0,m.jsx)(i,{className:`w-3.5 h-3.5`})})}),(0,m.jsxs)(`div`,{className:`flex-1 break-all`,children:[e&&(0,m.jsxs)(`span`,{className:`text-[#9cdcfe] mr-1`,children:[`"`,e,`":`]}),d?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`span`,{className:`text-[#da70d6]`,children:u===`array`?`[`:`{`}),!c&&!f&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`button`,{onClick:_,className:`mx-1 hover:bg-white/5 px-1 rounded cursor-pointer`,children:u===`array`?(0,m.jsxs)(`span`,{className:`text-gray-400`,children:[`Array(`,t.length,`)`]}):(0,m.jsx)(`span`,{className:`text-gray-400`,children:`{...}`})}),(0,m.jsx)(`span`,{className:`text-[#da70d6]`,children:u===`array`?`]`:`}`}),!r&&(0,m.jsx)(`span`,{className:`text-gray-400`,children:`,`})]}),f&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(`span`,{className:`text-[#da70d6]`,children:u===`array`?`]`:`}`}),!r&&(0,m.jsx)(`span`,{className:`text-gray-400`,children:`,`})]})]}):(0,m.jsxs)(m.Fragment,{children:[((e,t)=>{switch(t){case`string`:return(0,m.jsxs)(`span`,{className:`text-[#ce9178]`,children:[`"`,e,`"`]});case`number`:return(0,m.jsx)(`span`,{className:`text-[#b5cea8]`,children:e});case`boolean`:return(0,m.jsx)(`span`,{className:`text-[#569cd6]`,children:e?`true`:`false`});case`null`:return(0,m.jsx)(`span`,{className:`text-[#569cd6]`,children:`null`});default:return null}})(t,u),!r&&(0,m.jsx)(`span`,{className:`text-gray-400`,children:`,`})]})]})]}),d&&c&&!f&&(0,m.jsxs)(`div`,{children:[Object.entries(t).map(([e,t],r,i)=>(0,m.jsx)(g,{name:u===`array`?void 0:e,value:t,depth:n+1,isLast:r===i.length-1,indentSize:o,initiallyExpanded:s},e)),(0,m.jsxs)(`div`,{className:`pl-6 text-[#da70d6]`,children:[u===`array`?`]`:`}`,!r&&(0,m.jsx)(`span`,{className:`text-gray-400`,children:`,`})]})]})]})},_=({data:e,initiallyExpanded:t=!1,indentSize:n=20,className:i,showCopyButton:a=!0,maxHeight:o})=>{let[c,u]=(0,p.useState)(!1);return(0,m.jsxs)(`div`,{className:l(`relative rounded-xl border border-border-primary/50 bg-[#1e1e1e] text-white shadow-sm overflow-hidden`,i),children:[a&&(0,m.jsx)(`div`,{className:`absolute top-2 right-2 z-10`,children:(0,m.jsx)(d,{variant:`ghost`,size:`sm`,onClick:async()=>{try{await navigator.clipboard.writeText(JSON.stringify(e,null,2)),u(!0),setTimeout(()=>u(!1),2e3)}catch(e){console.error(`Failed to copy JSON:`,e)}},className:`h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-white/10 bg-[#1e1e1e]/80 backdrop-blur-sm`,children:c?(0,m.jsx)(s,{className:`w-4 h-4 text-green-400`}):(0,m.jsx)(r,{className:`w-4 h-4`})})}),(0,m.jsx)(`div`,{className:`p-4 overflow-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent`,style:{maxHeight:o},children:(0,m.jsx)(g,{value:e,depth:0,isLast:!0,indentSize:n,initiallyExpanded:t})})]})},_.__docgenInfo={description:``,methods:[],displayName:`JsonViewer`,props:{data:{required:!0,tsType:{name:`any`},description:`The JSON data to display`},initiallyExpanded:{required:!1,tsType:{name:`boolean`},description:`Whether nested objects/arrays should be expanded by default`,defaultValue:{value:`false`,computed:!1}},indentSize:{required:!1,tsType:{name:`number`},description:`Number of pixels to indent for each level`,defaultValue:{value:`20`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Optional class name for the container`},showCopyButton:{required:!1,tsType:{name:`boolean`},description:`Whether to show the copy button`,defaultValue:{value:`true`,computed:!1}},maxHeight:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Maximum height of the container before scrolling`}}}})),y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{v(),y={title:`Data Display/JsonViewer`,component:_,tags:[`autodocs`],parameters:{layout:`centered`}},b={transaction:{id:`trx_7a3b9f2e`,amount:250,currency:`USD`,status:`completed`,timestamp:`2025-04-15T14:32:21Z`,sender:{id:`usr_4821`,name:`Cesar Ruiz`},recipient:{id:`usr_7734`,name:`Alice Johnson`},metadata:{source:`web`,ip:`192.168.1.42`,user_agent:`Mozilla/5.0`}}},x={status:200,data:{accounts:[{id:`acc_1`,type:`checking`,balance:12430.5,currency:`USD`},{id:`acc_2`,type:`savings`,balance:33461.68,currency:`USD`}],total:45892.18},meta:{page:1,total_pages:5,count:42}},S={args:{data:b}},C={args:{data:b,title:`Transaction JSON`}},w={args:{data:x,title:`API Response`}},T={args:{data:b,collapsed:!0}},E={args:{data:{tx_hash:`0x7a3b9f2e8c4d1e5f6a7b8c9d0e1f2a3b4c5d6e7f`,from:`0x1234567890abcdef1234567890abcdef12345678`,to:`0x87654321fedcba0987654321fedcba0987654321`,value:`0.025 BTC`,fee:`0.0001 BTC`,confirmations:12,block_number:876543,status:`confirmed`},title:`Bitcoin Transaction`}},D={args:{data:{user:{profile:{name:`Cesar Ruiz`,email:`cesar@example.com`,settings:{theme:`dark`,notifications:{email:!0,push:!0,sms:!1}}}},accounts:{checking:{balance:12430.5,limit:25e3},savings:{balance:33461.68,apy:4.5}},recent_transactions:Array.from({length:3},(e,t)=>({id:`tx_${t}`,amount:t*100+50,status:[`completed`,`pending`,`completed`][t]}))},title:`Full User Data`}},O={args:{data:{},title:`Empty Response`}},k={args:{data:[`BTC`,`ETH`,`SOL`,`ADA`,`DOT`],title:`Supported Cryptocurrencies`}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: transactionData
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: transactionData,
    title: 'Transaction JSON'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    data: apiResponse,
    title: 'API Response'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: transactionData,
    collapsed: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      tx_hash: '0x7a3b9f2e8c4d1e5f6a7b8c9d0e1f2a3b4c5d6e7f',
      from: '0x1234567890abcdef1234567890abcdef12345678',
      to: '0x87654321fedcba0987654321fedcba0987654321',
      value: '0.025 BTC',
      fee: '0.0001 BTC',
      confirmations: 12,
      block_number: 876543,
      status: 'confirmed'
    },
    title: 'Bitcoin Transaction'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: {
      user: {
        profile: {
          name: 'Cesar Ruiz',
          email: 'cesar@example.com',
          settings: {
            theme: 'dark',
            notifications: {
              email: true,
              push: true,
              sms: false
            }
          }
        }
      },
      accounts: {
        checking: {
          balance: 12430.50,
          limit: 25000
        },
        savings: {
          balance: 33461.68,
          apy: 4.5
        }
      },
      recent_transactions: Array.from({
        length: 3
      }, (_, i) => ({
        id: \`tx_\${i}\`,
        amount: i * 100 + 50,
        status: ['completed', 'pending', 'completed'][i]
      }))
    },
    title: 'Full User Data'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    data: {},
    title: 'Empty Response'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    data: ['BTC', 'ETH', 'SOL', 'ADA', 'DOT'],
    title: 'Supported Cryptocurrencies'
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`TransactionJSON`,`APIResponse`,`Collapsed`,`CryptoTxJSON`,`NestedData`,`EmptyObject`,`ArrayData`]}))();export{w as APIResponse,k as ArrayData,T as Collapsed,E as CryptoTxJSON,S as Default,O as EmptyObject,D as NestedData,C as TransactionJSON,A as __namedExportsOrder,y as default};