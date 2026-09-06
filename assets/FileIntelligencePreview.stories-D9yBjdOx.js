import{n as e,o as t}from"./chunk-jRWAZmH_.js";import{a as n}from"./iframe-C3uANx_z.js";import{$t as r,Bn as i,St as a,Tn as o,Zt as s,bn as c,jn as l,jr as u,t as d,u as f,yn as p}from"./lucide-react-h9NbdGwk.js";import{n as m,t as h}from"./utils-CcEteFRA.js";import{t as g}from"./jsx-runtime-WZfjI2gv.js";import{l as _,s as v,t as y}from"./es-Y5rqk_dr.js";import{n as b,t as x}from"./Button-DZsJlLci.js";var S,C,w,T,E,D=e((()=>{S=t(n()),m(),y(),d(),x(),C=g(),w=e=>e.startsWith(`image/`)?(0,C.jsx)(r,{className:`w-8 h-8`}):e.startsWith(`video/`)?(0,C.jsx)(f,{className:`w-8 h-8`}):e.startsWith(`audio/`)?(0,C.jsx)(a,{className:`w-8 h-8`}):e.includes(`pdf`)?(0,C.jsx)(c,{className:`w-8 h-8`}):e.includes(`zip`)||e.includes(`rar`)?(0,C.jsx)(u,{className:`w-8 h-8`}):e.includes(`code`)||e.includes(`text`)?(0,C.jsx)(i,{className:`w-8 h-8`}):(0,C.jsx)(p,{className:`w-8 h-8`}),T=e=>e.includes(`/`)?e.split(`/`)[1].toUpperCase():e.toUpperCase(),E=S.forwardRef(({file:e,intelligence:t,onDownload:n,onPreview:r,showMetadata:i=!0,className:a,...c},u)=>{let[d,f]=(0,S.useState)(!1),p=()=>{if(r)r();else if(e.url||t?.preview){let n=e.url||t?.preview;n&&window.open(n,`_blank`)}},m=()=>{if(n)n();else if(e.url){let t=document.createElement(`a`);t.href=e.url,t.download=e.name,document.body.appendChild(t),t.click(),document.body.removeChild(t)}};return(0,C.jsxs)(`div`,{ref:u,className:h(`bg-surface-primary border border-border-primary rounded-xl overflow-hidden`,a),...c,children:[(0,C.jsx)(`div`,{className:`p-4 border-b border-border-primary`,children:(0,C.jsxs)(`div`,{className:`flex items-start gap-4`,children:[(0,C.jsx)(`div`,{className:`flex-shrink-0 p-3 bg-surface-secondary rounded-lg text-text-tertiary`,children:w(e.type)}),(0,C.jsxs)(`div`,{className:`flex-1 min-w-0`,children:[(0,C.jsx)(`h3`,{className:`text-sm font-semibold text-text-primary truncate`,children:e.name}),(0,C.jsxs)(`p`,{className:`text-xs text-text-secondary mt-0.5`,children:[t?.type||T(e.type),t?.size&&` • ${t.size}`]})]}),(0,C.jsxs)(`div`,{className:`flex-shrink-0 flex items-center gap-2`,children:[(e.url||t?.preview)&&(0,C.jsx)(b,{variant:`ghost`,size:`sm`,onClick:p,children:(0,C.jsx)(o,{className:`w-4 h-4`})}),e.url&&(0,C.jsx)(b,{variant:`ghost`,size:`sm`,onClick:m,children:(0,C.jsx)(l,{className:`w-4 h-4`})})]})]})}),t?.preview&&(0,C.jsx)(`div`,{className:`relative h-48 bg-surface-secondary`,children:(0,C.jsx)(`img`,{src:t.preview,alt:e.name,className:`w-full h-full object-contain`})}),t&&(0,C.jsxs)(`div`,{className:`p-4 space-y-3`,children:[t.summary&&(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{className:`text-xs font-medium text-text-secondary mb-1`,children:`Summary`}),(0,C.jsx)(`p`,{className:`text-sm text-text-primary`,children:t.summary})]}),t.extractedText&&(0,C.jsxs)(`div`,{children:[(0,C.jsx)(`p`,{className:`text-xs font-medium text-text-secondary mb-1`,children:`Extracted Text`}),(0,C.jsx)(`p`,{className:`text-sm text-text-secondary line-clamp-3`,children:t.extractedText})]}),i&&t.metadata&&Object.keys(t.metadata).length>0&&(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(`button`,{onClick:()=>f(!d),className:`flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors`,children:[(0,C.jsx)(s,{className:`w-3.5 h-3.5`}),(0,C.jsx)(`span`,{children:`Metadata`})]}),(0,C.jsx)(_,{children:d&&(0,C.jsx)(v.div,{initial:{height:0,opacity:0},animate:{height:`auto`,opacity:1},exit:{height:0,opacity:0},className:`mt-2 space-y-1 overflow-hidden`,children:Object.entries(t.metadata).map(([e,t])=>(0,C.jsxs)(`div`,{className:`flex justify-between text-xs`,children:[(0,C.jsxs)(`span`,{className:`text-text-tertiary`,children:[e,`:`]}),(0,C.jsx)(`span`,{className:`text-text-secondary`,children:t})]},e))})})]})]})]})}),E.displayName=`FileIntelligencePreview`,E.__docgenInfo={description:``,methods:[],displayName:`FileIntelligencePreview`,props:{file:{required:!0,tsType:{name:`signature`,type:`object`,raw:`{
    name: string;
    url?: string;
    type: string;
}`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`url`,value:{name:`string`,required:!1}},{key:`type`,value:{name:`string`,required:!0}}]}},description:``},intelligence:{required:!1,tsType:{name:`FileIntelligence`},description:``},onDownload:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onPreview:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},showMetadata:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`true`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})),O,k,A,j,M,N,P,F,I,L,R;e((()=>{D(),O=g(),k={title:`Data Display/FileIntelligencePreview`,component:E,parameters:{layout:`centered`},tags:[`autodocs`]},A={args:{file:{name:`vacation-photo.jpg`,type:`image/jpeg`,url:`https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800`},intelligence:{type:`JPEG Image`,size:`2.4 MB`,dimensions:`4032 × 3024`,preview:`https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400`,summary:`A beautiful landscape photo taken during vacation`,metadata:{Camera:`iPhone 15 Pro`,"Date Taken":`December 15, 2023`,Location:`Yosemite National Park`,ISO:`100`,Aperture:`f/1.8`}},showMetadata:!0}},j={args:{file:{name:`annual-report-2023.pdf`,type:`application/pdf`},intelligence:{type:`PDF Document`,size:`1.8 MB`,summary:`Annual financial report for fiscal year 2023`,extractedText:`Executive Summary: This report presents the financial performance and strategic initiatives undertaken during the fiscal year 2023...`,metadata:{Pages:`45`,Author:`Finance Department`,Created:`January 5, 2024`,Modified:`January 10, 2024`}},onDownload:()=>console.log(`Download PDF`),onPreview:()=>console.log(`Preview PDF`)}},M={args:{file:{name:`presentation-recording.mp4`,type:`video/mp4`},intelligence:{type:`MP4 Video`,size:`125 MB`,dimensions:`1920 × 1080`,duration:`15:32`,summary:`Quarterly business review presentation recording`,metadata:{Duration:`15 minutes 32 seconds`,Codec:`H.264`,"Frame Rate":`30 fps`,Bitrate:`8 Mbps`}}}},N={args:{file:{name:`app.tsx`,type:`text/typescript`},intelligence:{type:`TypeScript`,size:`12 KB`,summary:`Main application component with routing and state management`,extractedText:`import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* App content */}
    </BrowserRouter>
  );
}`,metadata:{Lines:`245`,Language:`TypeScript`,Components:`8`,Hooks:`12`}}}},P={args:{file:{name:`document.docx`,type:`application/vnd.openxmlformats-officedocument.wordprocessingml.document`},onDownload:()=>console.log(`Download file`)}},F={args:{file:{name:`simple-image.png`,type:`image/png`},intelligence:{type:`PNG Image`,size:`450 KB`,dimensions:`800 × 600`,preview:`https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400`},showMetadata:!1}},I={args:{file:{name:`podcast-episode-42.mp3`,type:`audio/mpeg`},intelligence:{type:`MP3 Audio`,size:`45 MB`,duration:`32:15`,summary:`Tech podcast episode discussing AI advancements`,metadata:{Duration:`32 minutes 15 seconds`,Bitrate:`192 kbps`,"Sample Rate":`44.1 kHz`,Artist:`Tech Talk Podcast`}}}},L={parameters:{backgrounds:{default:`dark`},themes:{themeOverride:`dark`}},decorators:[e=>(0,O.jsx)(`div`,{className:`dark bg-gray-950 min-h-screen p-8`,children:(0,O.jsx)(e,{})})]},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    file: {
      name: 'vacation-photo.jpg',
      type: 'image/jpeg',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800'
    },
    intelligence: {
      type: 'JPEG Image',
      size: '2.4 MB',
      dimensions: '4032 × 3024',
      preview: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
      summary: 'A beautiful landscape photo taken during vacation',
      metadata: {
        'Camera': 'iPhone 15 Pro',
        'Date Taken': 'December 15, 2023',
        'Location': 'Yosemite National Park',
        'ISO': '100',
        'Aperture': 'f/1.8'
      }
    },
    showMetadata: true
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    file: {
      name: 'annual-report-2023.pdf',
      type: 'application/pdf'
    },
    intelligence: {
      type: 'PDF Document',
      size: '1.8 MB',
      summary: 'Annual financial report for fiscal year 2023',
      extractedText: 'Executive Summary: This report presents the financial performance and strategic initiatives undertaken during the fiscal year 2023...',
      metadata: {
        'Pages': '45',
        'Author': 'Finance Department',
        'Created': 'January 5, 2024',
        'Modified': 'January 10, 2024'
      }
    },
    onDownload: () => console.log('Download PDF'),
    onPreview: () => console.log('Preview PDF')
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    file: {
      name: 'presentation-recording.mp4',
      type: 'video/mp4'
    },
    intelligence: {
      type: 'MP4 Video',
      size: '125 MB',
      dimensions: '1920 × 1080',
      duration: '15:32',
      summary: 'Quarterly business review presentation recording',
      metadata: {
        'Duration': '15 minutes 32 seconds',
        'Codec': 'H.264',
        'Frame Rate': '30 fps',
        'Bitrate': '8 Mbps'
      }
    }
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    file: {
      name: 'app.tsx',
      type: 'text/typescript'
    },
    intelligence: {
      type: 'TypeScript',
      size: '12 KB',
      summary: 'Main application component with routing and state management',
      extractedText: 'import React from "react";\\nimport { BrowserRouter } from "react-router-dom";\\n\\nfunction App() {\\n  return (\\n    <BrowserRouter>\\n      {/* App content */}\\n    </BrowserRouter>\\n  );\\n}',
      metadata: {
        'Lines': '245',
        'Language': 'TypeScript',
        'Components': '8',
        'Hooks': '12'
      }
    }
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    file: {
      name: 'document.docx',
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    },
    onDownload: () => console.log('Download file')
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    file: {
      name: 'simple-image.png',
      type: 'image/png'
    },
    intelligence: {
      type: 'PNG Image',
      size: '450 KB',
      dimensions: '800 × 600',
      preview: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400'
    },
    showMetadata: false
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    file: {
      name: 'podcast-episode-42.mp3',
      type: 'audio/mpeg'
    },
    intelligence: {
      type: 'MP3 Audio',
      size: '45 MB',
      duration: '32:15',
      summary: 'Tech podcast episode discussing AI advancements',
      metadata: {
        'Duration': '32 minutes 15 seconds',
        'Bitrate': '192 kbps',
        'Sample Rate': '44.1 kHz',
        'Artist': 'Tech Talk Podcast'
      }
    }
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`ImageFile`,`PDFDocument`,`VideoFile`,`CodeFile`,`WithoutIntelligence`,`WithoutMetadata`,`AudioFile`,`DarkMode`]}))();export{I as AudioFile,N as CodeFile,L as DarkMode,A as ImageFile,j as PDFDocument,M as VideoFile,P as WithoutIntelligence,F as WithoutMetadata,R as __namedExportsOrder,k as default};