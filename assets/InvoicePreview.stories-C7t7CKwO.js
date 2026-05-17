const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./html2canvas-ZnxK09OR.js","./chunk-jRWAZmH_.js","./jspdf.es.min-Db8Xw7IB.js","./preload-helper-Dowy-9fu.js","./typeof-ByfmUtBx.js"])))=>i.map(i=>d[i]);
import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{n,t as r}from"./preload-helper-Dowy-9fu.js";import{a as i}from"./iframe-B1a0g5t6.js";import{G as a,Jn as o,Rt as s,Un as c,Yn as l,bn as u,jn as d,lt as f,t as p}from"./lucide-react-BVeuibpS.js";import{t as m}from"./jsx-runtime-DaLCRA3n.js";import{n as h,t as g}from"./Button-CWySTvFo.js";var _,v,y,b=e((()=>{_=t(i()),p(),g(),v=m(),n(),y=({invoiceNumber:e,dateIssued:n,dueDate:i,status:p,from:m,to:g,items:y,subtotal:b,tax:x,taxRate:S,discount:C=0,total:w,currency:T=`$`,logo:E,notes:D,onDownload:O,onPrint:k,onShare:A,className:j=``})=>{let M=(0,_.useRef)(null),[N,P]=(0,_.useState)(!1);return(0,v.jsxs)(`div`,{className:`bg-surface-primary rounded-2xl shadow-sm border border-border-primary overflow-hidden ${j}`,children:[(0,v.jsxs)(`div`,{className:`flex items-center justify-between p-4 border-b border-border-primary bg-background-secondary/30 print:hidden`,children:[(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(`div`,{className:`w-8 h-8 rounded-lg bg-accent-blue/10 flex items-center justify-center`,children:(0,v.jsx)(u,{className:`w-4 h-4 text-accent-blue`})}),(0,v.jsx)(`span`,{className:`font-semibold text-text-primary`,children:`Invoice Preview`})]}),(0,v.jsxs)(`div`,{className:`flex items-center gap-2`,children:[(0,v.jsx)(h,{variant:`ghost`,size:`sm`,onClick:async()=>{if(A){A();return}if(navigator.share)try{await navigator.share({title:`Invoice ${e}`,text:`Invoice ${e} from ${m.name}`,url:window.location.href})}catch(e){console.error(`Error sharing:`,e)}else try{await navigator.clipboard.writeText(window.location.href),alert(`Link copied to clipboard!`)}catch(e){console.error(`Failed to copy:`,e)}},leftIcon:(0,v.jsx)(a,{className:`w-4 h-4`}),children:`Share`}),(0,v.jsx)(h,{variant:`ghost`,size:`sm`,onClick:()=>{if(k){k();return}window.print()},leftIcon:(0,v.jsx)(f,{className:`w-4 h-4`}),children:`Print`}),(0,v.jsx)(h,{variant:`outline`,size:`sm`,onClick:async()=>{if(O){O();return}if(M.current)try{P(!0);let n=(await r(async()=>{let{default:e}=await import(`./html2canvas-ZnxK09OR.js`).then(e=>t(e.default,1));return{default:e}},__vite__mapDeps([0,1]),import.meta.url)).default,i=(await r(async()=>{let{default:e}=await import(`./jspdf.es.min-Db8Xw7IB.js`);return{default:e}},__vite__mapDeps([2,1,3,4]),import.meta.url)).default,a=await n(M.current,{scale:2,useCORS:!0,logging:!1,backgroundColor:`#ffffff`}),o=a.toDataURL(`image/png`),s=new i({orientation:`portrait`,unit:`mm`,format:`a4`}),c=a.height*210/a.width;s.addImage(o,`PNG`,0,0,210,c),s.save(`invoice-${e}.pdf`)}catch(e){console.error(`Error generating PDF:`,e),alert(`Failed to generate PDF. Please try again.`)}finally{P(!1)}},disabled:N,leftIcon:N?(0,v.jsx)(s,{className:`w-4 h-4 animate-spin`}):(0,v.jsx)(d,{className:`w-4 h-4`}),children:N?`Generating...`:`Download`})]})]}),(0,v.jsxs)(`div`,{ref:M,className:`p-8 md:p-12 bg-white`,children:[(0,v.jsxs)(`div`,{className:`flex flex-col md:flex-row justify-between items-start gap-8 mb-12`,children:[(0,v.jsxs)(`div`,{children:[E?(0,v.jsx)(`img`,{src:E,alt:`Company Logo`,className:`h-12 mb-4`}):(0,v.jsx)(`div`,{className:`h-12 w-12 bg-accent-blue/10 rounded-xl flex items-center justify-center mb-4`,children:(0,v.jsx)(`span`,{className:`text-xl font-bold text-accent-blue`,children:m.name.charAt(0)})}),(0,v.jsx)(`h1`,{className:`text-3xl font-bold text-text-primary mb-2`,children:`Invoice`}),(0,v.jsxs)(`div`,{className:`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-sm font-medium capitalize ${(e=>{switch(e){case`paid`:return`text-status-success bg-status-success/10 border-status-success/20`;case`pending`:return`text-status-warning bg-status-warning/10 border-status-warning/20`;case`overdue`:return`text-status-error bg-status-error/10 border-status-error/20`;default:return`text-text-secondary bg-background-secondary border-border-primary`}})(p)}`,children:[(e=>{switch(e){case`paid`:return(0,v.jsx)(o,{className:`w-4 h-4`});case`pending`:return(0,v.jsx)(c,{className:`w-4 h-4`});case`overdue`:return(0,v.jsx)(l,{className:`w-4 h-4`});default:return null}})(p),p]})]}),(0,v.jsxs)(`div`,{className:`text-right`,children:[(0,v.jsx)(`h3`,{className:`text-lg font-semibold text-text-primary mb-1`,children:m.name}),(0,v.jsxs)(`div`,{className:`text-sm text-text-secondary space-y-1`,children:[(0,v.jsx)(`p`,{children:m.address}),(0,v.jsxs)(`p`,{children:[m.city,`, `,m.state,` `,m.zip]}),(0,v.jsx)(`p`,{children:m.country}),m.email&&(0,v.jsx)(`p`,{children:m.email})]})]})]}),(0,v.jsxs)(`div`,{className:`grid grid-cols-1 md:grid-cols-2 gap-8 mb-12`,children:[(0,v.jsxs)(`div`,{children:[(0,v.jsx)(`h4`,{className:`text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-4`,children:`Bill To`}),(0,v.jsx)(`h3`,{className:`text-lg font-semibold text-text-primary mb-2`,children:g.name}),(0,v.jsxs)(`div`,{className:`text-sm text-text-secondary space-y-1`,children:[(0,v.jsx)(`p`,{children:g.address}),(0,v.jsxs)(`p`,{children:[g.city,`, `,g.state,` `,g.zip]}),(0,v.jsx)(`p`,{children:g.country}),g.email&&(0,v.jsx)(`p`,{children:g.email})]})]}),(0,v.jsxs)(`div`,{className:`space-y-4`,children:[(0,v.jsxs)(`div`,{className:`flex justify-between md:justify-end gap-8`,children:[(0,v.jsxs)(`div`,{className:`text-right`,children:[(0,v.jsx)(`h4`,{className:`text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1`,children:`Invoice Number`}),(0,v.jsx)(`p`,{className:`font-medium text-text-primary`,children:e})]}),(0,v.jsxs)(`div`,{className:`text-right`,children:[(0,v.jsx)(`h4`,{className:`text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1`,children:`Date Issued`}),(0,v.jsx)(`p`,{className:`font-medium text-text-primary`,children:n})]})]}),(0,v.jsxs)(`div`,{className:`flex justify-between md:justify-end gap-8`,children:[(0,v.jsxs)(`div`,{className:`text-right`,children:[(0,v.jsx)(`h4`,{className:`text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1`,children:`Due Date`}),(0,v.jsx)(`p`,{className:`font-medium text-text-primary`,children:i})]}),(0,v.jsxs)(`div`,{className:`text-right`,children:[(0,v.jsx)(`h4`,{className:`text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-1`,children:`Amount Due`}),(0,v.jsxs)(`p`,{className:`font-bold text-xl text-text-primary`,children:[T,w.toFixed(2)]})]})]})]})]}),(0,v.jsx)(`div`,{className:`mb-12 overflow-hidden rounded-xl border border-border-primary`,children:(0,v.jsxs)(`table`,{className:`w-full text-left border-collapse`,children:[(0,v.jsx)(`thead`,{children:(0,v.jsxs)(`tr`,{className:`bg-background-secondary/50 border-b border-border-primary`,children:[(0,v.jsx)(`th`,{className:`py-3 px-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider`,children:`Description`}),(0,v.jsx)(`th`,{className:`py-3 px-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider text-right`,children:`Qty`}),(0,v.jsx)(`th`,{className:`py-3 px-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider text-right`,children:`Price`}),(0,v.jsx)(`th`,{className:`py-3 px-4 text-xs font-semibold text-text-tertiary uppercase tracking-wider text-right`,children:`Total`})]})}),(0,v.jsx)(`tbody`,{className:`divide-y divide-border-primary`,children:y.map(e=>(0,v.jsxs)(`tr`,{className:`group hover:bg-background-secondary/30 transition-colors`,children:[(0,v.jsx)(`td`,{className:`py-4 px-4 text-sm font-medium text-text-primary`,children:e.description}),(0,v.jsx)(`td`,{className:`py-4 px-4 text-sm text-text-secondary text-right`,children:e.quantity}),(0,v.jsxs)(`td`,{className:`py-4 px-4 text-sm text-text-secondary text-right`,children:[T,e.price.toFixed(2)]}),(0,v.jsxs)(`td`,{className:`py-4 px-4 text-sm font-medium text-text-primary text-right`,children:[T,e.total.toFixed(2)]})]},e.id))})]})}),(0,v.jsxs)(`div`,{className:`flex flex-col md:flex-row gap-8`,children:[(0,v.jsx)(`div`,{className:`flex-1 min-w-[200px]`,children:D&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(`h4`,{className:`text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-2`,children:`Notes`}),(0,v.jsx)(`p`,{className:`text-sm text-text-secondary leading-relaxed`,children:D})]})}),(0,v.jsxs)(`div`,{className:`w-full md:w-80 space-y-3`,children:[(0,v.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,v.jsx)(`span`,{className:`text-text-secondary`,children:`Subtotal`}),(0,v.jsxs)(`span`,{className:`font-medium text-text-primary`,children:[T,b.toFixed(2)]})]}),C>0&&(0,v.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,v.jsx)(`span`,{className:`text-text-secondary`,children:`Discount`}),(0,v.jsxs)(`span`,{className:`font-medium text-status-success`,children:[`-`,T,C.toFixed(2)]})]}),(0,v.jsxs)(`div`,{className:`flex justify-between text-sm`,children:[(0,v.jsxs)(`span`,{className:`text-text-secondary`,children:[`Tax `,S?`(${S}%)`:``]}),(0,v.jsxs)(`span`,{className:`font-medium text-text-primary`,children:[T,x.toFixed(2)]})]}),(0,v.jsxs)(`div`,{className:`flex justify-between items-baseline pt-4 mt-4 border-t border-border-primary`,children:[(0,v.jsx)(`span`,{className:`text-base font-bold text-text-primary`,children:`Total`}),(0,v.jsxs)(`span`,{className:`text-2xl font-bold text-text-primary`,children:[T,w.toFixed(2)]})]})]})]}),(0,v.jsxs)(`div`,{className:`mt-12 pt-8 border-t border-border-dashed text-center`,children:[(0,v.jsx)(`p`,{className:`text-sm text-text-tertiary`,children:`Thank you for your business!`}),(0,v.jsx)(`p`,{className:`text-xs text-text-tertiary mt-1`,children:`Please include invoice number on your check.`})]})]})]})},y.__docgenInfo={description:``,methods:[],displayName:`InvoicePreview`,props:{invoiceNumber:{required:!0,tsType:{name:`string`},description:``},dateIssued:{required:!0,tsType:{name:`string`},description:``},dueDate:{required:!0,tsType:{name:`string`},description:``},status:{required:!0,tsType:{name:`union`,raw:`'paid' | 'pending' | 'overdue'`,elements:[{name:`literal`,value:`'paid'`},{name:`literal`,value:`'pending'`},{name:`literal`,value:`'overdue'`}]},description:``},from:{required:!0,tsType:{name:`InvoiceParty`},description:``},to:{required:!0,tsType:{name:`InvoiceParty`},description:``},items:{required:!0,tsType:{name:`Array`,elements:[{name:`InvoiceItem`}],raw:`InvoiceItem[]`},description:``},subtotal:{required:!0,tsType:{name:`number`},description:``},tax:{required:!0,tsType:{name:`number`},description:``},taxRate:{required:!1,tsType:{name:`number`},description:``},discount:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}},total:{required:!0,tsType:{name:`number`},description:``},currency:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`'$'`,computed:!1}},logo:{required:!1,tsType:{name:`string`},description:``},notes:{required:!1,tsType:{name:`string`},description:``},onDownload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onPrint:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onShare:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}}}}})),x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;e((()=>{i(),b(),x=m(),S={title:`Fintech/Payments/InvoicePreview`,component:y,tags:[`autodocs`],parameters:{layout:`centered`}},C={args:{invoiceNumber:`INV-2025-4421`,date:`2025-04-15`,dueDate:`2025-05-15`,from:{name:`Cesar Ruiz`,email:`cesar@example.com`,address:`123 Main St, San Francisco, CA 94105`},to:{name:`Acme Corp`,email:`billing@acmecorp.com`,address:`456 Market St, San Francisco, CA 94105`},items:[{description:`UI Design Services`,quantity:40,rate:150},{description:`Frontend Development`,quantity:60,rate:175}],taxRate:8.5}},w={args:{invoiceNumber:`INV-2025-4430`,date:`2025-04-01`,dueDate:`2025-04-30`,from:{name:`Alice Johnson`,email:`alice@designstudio.com`},to:{name:`TechStartup Inc.`,email:`accounting@techstartup.io`},items:[{description:`Brand Identity Design`,quantity:1,rate:5e3},{description:`Website Redesign`,quantity:80,rate:150},{description:`Icon Set (48 icons)`,quantity:1,rate:1200}],taxRate:10,currency:`USD`,notes:`Payment due within 30 days. Late payments subject to 1.5% monthly interest.`}},T={args:{invoiceNumber:`INV-2025-4435`,date:`2025-04-10`,dueDate:`2025-04-25`,from:{name:`Strategic Partners LLC`,email:`finance@strategicpartners.com`,address:`100 Pine St, Suite 200, New York, NY 10005`},to:{name:`Global Bank Corp`,email:`ap@globalbank.com`,address:`500 Park Ave, New York, NY 10022`},items:[{description:`Financial Consulting — Q1 2025`,quantity:40,rate:350},{description:`Risk Assessment Report`,quantity:1,rate:5e3},{description:`Strategy Workshop (2 days)`,quantity:2,rate:7500}],taxRate:8.875,currency:`USD`,notes:`Thank you for your continued partnership.`}},E={args:{invoiceNumber:`INV-2025-1001`,date:`2025-04-01`,dueDate:`2025-05-01`,from:{name:`Maria Schmidt`,email:`maria@design.de`,address:`Berliner Str. 42, 10115 Berlin`},to:{name:`Tech GmbH`,email:`buchhaltung@techgmbh.de`,address:`Alexanderplatz 1, 10178 Berlin`},items:[{description:`UX Consulting`,quantity:20,rate:200},{description:`UI Design System`,quantity:1,rate:8e3}],taxRate:19,currency:`EUR`}},D={args:{invoiceNumber:`INV-2025-1002`,date:`2025-04-15`,dueDate:`2025-04-30`,from:{name:`Carlos Ruiz`,email:`carlos@email.com`},to:{name:`Client XYZ`,email:`client@xyz.com`},items:[{description:`Website Maintenance (Monthly)`,quantity:1,rate:500}],taxRate:0,notes:`Monthly maintenance retainer.`}},O={args:{invoiceNumber:`INV-2025-4440`,date:`2025-04-01`,dueDate:`2025-05-01`,discount:500,from:{name:`Design Studio`,email:`hello@designstudio.com`},to:{name:`Startup Co.`,email:`billing@startup.co`},items:[{description:`Product Design Sprint`,quantity:1,rate:15e3},{description:`User Testing Sessions`,quantity:3,rate:1e3}],taxRate:8.5,notes:`Early payment discount of $500 applied.`}},k={args:{invoiceNumber:`INV-2025-4450`,date:`2025-04-12`,dueDate:`2025-05-12`,from:{name:`FinFlow Ltd`,email:`billing@finflow.io`,address:`1 Fintech Square, London, EC2N 1HQ`},to:{name:`Tokyo Financial Inc`,email:`ap@tokyofin.co.jp`,address:`1-2-3 Marunouchi, Chiyoda-ku, Tokyo 100-0005`},items:[{description:`Software Licensing Q2 2025`,quantity:1,rate:12e3},{description:`Premium Support (Annual)`,quantity:1,rate:6e3}],taxRate:20,currency:`USD`,notes:`VAT reverse charge applies. Payment via SWIFT transfer.`}},A={args:{invoiceNumber:`INV-2025-4460`,date:`2025-05-01`,dueDate:`2025-05-31`,from:{name:`NonProfit Org`,email:`billing@nonprofit.org`},to:{name:`Donor Foundation`,email:`finance@donor.org`},items:[{description:`Grant Management Services`,quantity:1,rate:1e4}],taxRate:0,notes:`Tax-exempt under section 501(c)(3).`}},j={args:{invoiceNumber:`INV-2025-4470`,date:`2025-05-05`,dueDate:`2025-06-04`,from:{name:`Enterprise Solutions Inc`,email:`billing@enterprise.com`},to:{name:`Global Mega Corp`,email:`ap@megacorp.com`},items:Array.from({length:15},(e,t)=>({description:`Service Line Item #${t+1} — Monthly Recurring`,quantity:Math.floor(Math.random()*5)+1,rate:Math.round(Math.random()*500+50)})),taxRate:8.5}},M={args:{invoiceNumber:`INV-2025-4480`,date:`2025-05-10`,dueDate:`2025-06-09`,from:{name:`A Very Long Company Name That Keeps Going And Going For Testing Purposes LLC`,email:`billing@extremely-long-company-name-that-overflows.com`},to:{name:`Another Company With An Incredibly Long Name That Should Test Layout Boundaries Inc`,email:`accounting@longest-company-name-ever-registered.com`},items:[{description:`This is an extremely long item description that should absolutely test how well the invoice preview handles text overflow and wrapping in the table cell. Lorem ipsum dolor sit amet consectetur adipiscing elit.`,quantity:1,rate:9999.99}],taxRate:10,notes:`This invoice contains unusually long text values to verify layout robustness and text overflow handling across all screen sizes.`}},N={args:{invoiceNumber:`INV-2025-4490`,date:`2025-05-12`,dueDate:`2025-06-11`,from:{name:`London Fintech Ltd`,email:`finance@londonfintech.co.uk`,address:`30 St Mary Axe, London, EC3A 8BF`},to:{name:`Manchester Retail Co`,email:`ap@manchesterretail.co.uk`,address:`1 Corporation St, Manchester, M4 4AD`},items:[{description:`Payment Processing (Monthly)`,quantity:1,rate:2999},{description:`Fraud Detection License`,quantity:1,rate:1500}],taxRate:20,currency:`GBP`}},P={args:{invoiceNumber:`INV-2025-4500`,date:`2025-05-15`,dueDate:`2025-06-14`,from:{name:`Midnight Studio`,email:`hello@midnight.studio`},to:{name:`Dark Corp`,email:`billing@darkcorp.io`},items:[{description:`Dark Theme Design`,quantity:1,rate:3500},{description:`Night Mode UI Audit`,quantity:8,rate:200}],taxRate:8.5,notes:`Dark mode support included.`},decorators:[e=>(0,x.jsx)(`div`,{className:`dark`,children:(0,x.jsx)(e,{})})]},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    invoiceNumber: 'INV-2025-4421',
    date: '2025-04-15',
    dueDate: '2025-05-15',
    from: {
      name: 'Cesar Ruiz',
      email: 'cesar@example.com',
      address: '123 Main St, San Francisco, CA 94105'
    },
    to: {
      name: 'Acme Corp',
      email: 'billing@acmecorp.com',
      address: '456 Market St, San Francisco, CA 94105'
    },
    items: [{
      description: 'UI Design Services',
      quantity: 40,
      rate: 150
    }, {
      description: 'Frontend Development',
      quantity: 60,
      rate: 175
    }],
    taxRate: 8.5
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    invoiceNumber: 'INV-2025-4430',
    date: '2025-04-01',
    dueDate: '2025-04-30',
    from: {
      name: 'Alice Johnson',
      email: 'alice@designstudio.com'
    },
    to: {
      name: 'TechStartup Inc.',
      email: 'accounting@techstartup.io'
    },
    items: [{
      description: 'Brand Identity Design',
      quantity: 1,
      rate: 5000
    }, {
      description: 'Website Redesign',
      quantity: 80,
      rate: 150
    }, {
      description: 'Icon Set (48 icons)',
      quantity: 1,
      rate: 1200
    }],
    taxRate: 10,
    currency: 'USD',
    notes: 'Payment due within 30 days. Late payments subject to 1.5% monthly interest.'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    invoiceNumber: 'INV-2025-4435',
    date: '2025-04-10',
    dueDate: '2025-04-25',
    from: {
      name: 'Strategic Partners LLC',
      email: 'finance@strategicpartners.com',
      address: '100 Pine St, Suite 200, New York, NY 10005'
    },
    to: {
      name: 'Global Bank Corp',
      email: 'ap@globalbank.com',
      address: '500 Park Ave, New York, NY 10022'
    },
    items: [{
      description: 'Financial Consulting — Q1 2025',
      quantity: 40,
      rate: 350
    }, {
      description: 'Risk Assessment Report',
      quantity: 1,
      rate: 5000
    }, {
      description: 'Strategy Workshop (2 days)',
      quantity: 2,
      rate: 7500
    }],
    taxRate: 8.875,
    currency: 'USD',
    notes: 'Thank you for your continued partnership.'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    invoiceNumber: 'INV-2025-1001',
    date: '2025-04-01',
    dueDate: '2025-05-01',
    from: {
      name: 'Maria Schmidt',
      email: 'maria@design.de',
      address: 'Berliner Str. 42, 10115 Berlin'
    },
    to: {
      name: 'Tech GmbH',
      email: 'buchhaltung@techgmbh.de',
      address: 'Alexanderplatz 1, 10178 Berlin'
    },
    items: [{
      description: 'UX Consulting',
      quantity: 20,
      rate: 200
    }, {
      description: 'UI Design System',
      quantity: 1,
      rate: 8000
    }],
    taxRate: 19,
    currency: 'EUR'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    invoiceNumber: 'INV-2025-1002',
    date: '2025-04-15',
    dueDate: '2025-04-30',
    from: {
      name: 'Carlos Ruiz',
      email: 'carlos@email.com'
    },
    to: {
      name: 'Client XYZ',
      email: 'client@xyz.com'
    },
    items: [{
      description: 'Website Maintenance (Monthly)',
      quantity: 1,
      rate: 500
    }],
    taxRate: 0,
    notes: 'Monthly maintenance retainer.'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    invoiceNumber: 'INV-2025-4440',
    date: '2025-04-01',
    dueDate: '2025-05-01',
    discount: 500,
    from: {
      name: 'Design Studio',
      email: 'hello@designstudio.com'
    },
    to: {
      name: 'Startup Co.',
      email: 'billing@startup.co'
    },
    items: [{
      description: 'Product Design Sprint',
      quantity: 1,
      rate: 15000
    }, {
      description: 'User Testing Sessions',
      quantity: 3,
      rate: 1000
    }],
    taxRate: 8.5,
    notes: 'Early payment discount of $500 applied.'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    invoiceNumber: 'INV-2025-4450',
    date: '2025-04-12',
    dueDate: '2025-05-12',
    from: {
      name: 'FinFlow Ltd',
      email: 'billing@finflow.io',
      address: '1 Fintech Square, London, EC2N 1HQ'
    },
    to: {
      name: 'Tokyo Financial Inc',
      email: 'ap@tokyofin.co.jp',
      address: '1-2-3 Marunouchi, Chiyoda-ku, Tokyo 100-0005'
    },
    items: [{
      description: 'Software Licensing Q2 2025',
      quantity: 1,
      rate: 12000
    }, {
      description: 'Premium Support (Annual)',
      quantity: 1,
      rate: 6000
    }],
    taxRate: 20,
    currency: 'USD',
    notes: 'VAT reverse charge applies. Payment via SWIFT transfer.'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    invoiceNumber: 'INV-2025-4460',
    date: '2025-05-01',
    dueDate: '2025-05-31',
    from: {
      name: 'NonProfit Org',
      email: 'billing@nonprofit.org'
    },
    to: {
      name: 'Donor Foundation',
      email: 'finance@donor.org'
    },
    items: [{
      description: 'Grant Management Services',
      quantity: 1,
      rate: 10000
    }],
    taxRate: 0,
    notes: 'Tax-exempt under section 501(c)(3).'
  }
}`,...A.parameters?.docs?.source},description:{story:`Zero tax rate invoice`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    invoiceNumber: 'INV-2025-4470',
    date: '2025-05-05',
    dueDate: '2025-06-04',
    from: {
      name: 'Enterprise Solutions Inc',
      email: 'billing@enterprise.com'
    },
    to: {
      name: 'Global Mega Corp',
      email: 'ap@megacorp.com'
    },
    items: Array.from({
      length: 15
    }, (_, i) => ({
      description: \`Service Line Item #\${i + 1} — Monthly Recurring\`,
      quantity: Math.floor(Math.random() * 5) + 1,
      rate: Math.round(Math.random() * 500 + 50)
    })),
    taxRate: 8.5
  }
}`,...j.parameters?.docs?.source},description:{story:`Many line items — edge case`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    invoiceNumber: 'INV-2025-4480',
    date: '2025-05-10',
    dueDate: '2025-06-09',
    from: {
      name: 'A Very Long Company Name That Keeps Going And Going For Testing Purposes LLC',
      email: 'billing@extremely-long-company-name-that-overflows.com'
    },
    to: {
      name: 'Another Company With An Incredibly Long Name That Should Test Layout Boundaries Inc',
      email: 'accounting@longest-company-name-ever-registered.com'
    },
    items: [{
      description: 'This is an extremely long item description that should absolutely test how well the invoice preview handles text overflow and wrapping in the table cell. Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      quantity: 1,
      rate: 9999.99
    }],
    taxRate: 10,
    notes: 'This invoice contains unusually long text values to verify layout robustness and text overflow handling across all screen sizes.'
  }
}`,...M.parameters?.docs?.source},description:{story:`Long text edge case`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    invoiceNumber: 'INV-2025-4490',
    date: '2025-05-12',
    dueDate: '2025-06-11',
    from: {
      name: 'London Fintech Ltd',
      email: 'finance@londonfintech.co.uk',
      address: '30 St Mary Axe, London, EC3A 8BF'
    },
    to: {
      name: 'Manchester Retail Co',
      email: 'ap@manchesterretail.co.uk',
      address: '1 Corporation St, Manchester, M4 4AD'
    },
    items: [{
      description: 'Payment Processing (Monthly)',
      quantity: 1,
      rate: 2999
    }, {
      description: 'Fraud Detection License',
      quantity: 1,
      rate: 1500
    }],
    taxRate: 20,
    currency: 'GBP'
  }
}`,...N.parameters?.docs?.source},description:{story:`GBP currency invoice`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    invoiceNumber: 'INV-2025-4500',
    date: '2025-05-15',
    dueDate: '2025-06-14',
    from: {
      name: 'Midnight Studio',
      email: 'hello@midnight.studio'
    },
    to: {
      name: 'Dark Corp',
      email: 'billing@darkcorp.io'
    },
    items: [{
      description: 'Dark Theme Design',
      quantity: 1,
      rate: 3500
    }, {
      description: 'Night Mode UI Audit',
      quantity: 8,
      rate: 200
    }],
    taxRate: 8.5,
    notes: 'Dark mode support included.'
  },
  decorators: [Story => <div className="dark">
        <Story />
      </div>]
}`,...P.parameters?.docs?.source},description:{story:`Dark mode`,...P.parameters?.docs?.description}}},F=[`Default`,`FreelanceInvoice`,`ConsultingInvoice`,`EuroInvoice`,`SimpleInvoice`,`WithDiscount`,`InternationalInvoice`,`ZeroTax`,`ManyLineItems`,`LongDescription`,`GbpInvoice`,`DarkMode`]}))();export{T as ConsultingInvoice,P as DarkMode,C as Default,E as EuroInvoice,w as FreelanceInvoice,N as GbpInvoice,k as InternationalInvoice,M as LongDescription,j as ManyLineItems,D as SimpleInvoice,O as WithDiscount,A as ZeroTax,F as __namedExportsOrder,S as default};