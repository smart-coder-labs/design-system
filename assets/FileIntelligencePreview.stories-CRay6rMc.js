import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as P,r as D}from"./iframe-B3ue83QT.js";import{c as F}from"./utils-CDN07tui.js";import{B as g}from"./Button-DObt_mRa.js";import{E as k}from"./eye-Cjfw9jX-.js";import{D as M}from"./download-RfLirCv0.js";import{I as T}from"./info-355lTM3e.js";import{A as B}from"./index-Cd7JNL-O.js";import{m as I}from"./proxy-f4HTbMBa.js";import{I as A}from"./image-BtHNrHw2.js";import{V as C}from"./video-wD6dtuHI.js";import{M as S}from"./music-CrDl0Iwa.js";import{F as z}from"./file-text-Bi264TLO.js";import{c as R}from"./createLucideIcon-DEqxIg5F.js";import{C as E}from"./code-BXQJCDZd.js";import{F as q}from"./file-BW9f-8M-.js";import"./preload-helper-PPVm8Dsz.js";const V=[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]],L=R("archive",V),W=a=>a.startsWith("image/")?e.jsx(A,{className:"w-8 h-8"}):a.startsWith("video/")?e.jsx(C,{className:"w-8 h-8"}):a.startsWith("audio/")?e.jsx(S,{className:"w-8 h-8"}):a.includes("pdf")?e.jsx(z,{className:"w-8 h-8"}):a.includes("zip")||a.includes("rar")?e.jsx(L,{className:"w-8 h-8"}):a.includes("code")||a.includes("text")?e.jsx(E,{className:"w-8 h-8"}):e.jsx(q,{className:"w-8 h-8"}),_=a=>a.includes("/")?a.split("/")[1].toUpperCase():a.toUpperCase(),p=P.forwardRef(({file:a,intelligence:t,onDownload:l,onPreview:u,showMetadata:f=!0,className:x,...y},w)=>{const[h,v]=D.useState(!1),j=()=>{if(u)u();else if(a.url||t?.preview){const n=a.url||t?.preview;n&&window.open(n,"_blank")}},b=()=>{if(l)l();else if(a.url){const n=document.createElement("a");n.href=a.url,n.download=a.name,document.body.appendChild(n),n.click(),document.body.removeChild(n)}};return e.jsxs("div",{ref:w,className:F("bg-surface-primary border border-border-primary rounded-xl overflow-hidden",x),...y,children:[e.jsx("div",{className:"p-4 border-b border-border-primary",children:e.jsxs("div",{className:"flex items-start gap-4",children:[e.jsx("div",{className:"flex-shrink-0 p-3 bg-surface-secondary rounded-lg text-text-tertiary",children:W(a.type)}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("h3",{className:"text-sm font-semibold text-text-primary truncate",children:a.name}),e.jsxs("p",{className:"text-xs text-text-secondary mt-0.5",children:[t?.type||_(a.type),t?.size&&` • ${t.size}`]})]}),e.jsxs("div",{className:"flex-shrink-0 flex items-center gap-2",children:[(a.url||t?.preview)&&e.jsx(g,{variant:"ghost",size:"sm",onClick:j,children:e.jsx(k,{className:"w-4 h-4"})}),a.url&&e.jsx(g,{variant:"ghost",size:"sm",onClick:b,children:e.jsx(M,{className:"w-4 h-4"})})]})]})}),t?.preview&&e.jsx("div",{className:"relative h-48 bg-surface-secondary",children:e.jsx("img",{src:t.preview,alt:a.name,className:"w-full h-full object-contain"})}),t&&e.jsxs("div",{className:"p-4 space-y-3",children:[t.summary&&e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-medium text-text-secondary mb-1",children:"Summary"}),e.jsx("p",{className:"text-sm text-text-primary",children:t.summary})]}),t.extractedText&&e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-medium text-text-secondary mb-1",children:"Extracted Text"}),e.jsx("p",{className:"text-sm text-text-secondary line-clamp-3",children:t.extractedText})]}),f&&t.metadata&&Object.keys(t.metadata).length>0&&e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>v(!h),className:"flex items-center gap-2 text-xs font-medium text-text-secondary hover:text-text-primary transition-colors",children:[e.jsx(T,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Metadata"})]}),e.jsx(B,{children:h&&e.jsx(I.div,{initial:{height:0,opacity:0},animate:{height:"auto",opacity:1},exit:{height:0,opacity:0},className:"mt-2 space-y-1 overflow-hidden",children:Object.entries(t.metadata).map(([n,N])=>e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsxs("span",{className:"text-text-tertiary",children:[n,":"]}),e.jsx("span",{className:"text-text-secondary",children:N})]},n))})})]})]})]})});p.displayName="FileIntelligencePreview";p.__docgenInfo={description:"",methods:[],displayName:"FileIntelligencePreview",props:{file:{required:!0,tsType:{name:"signature",type:"object",raw:`{
    name: string;
    url?: string;
    type: string;
}`,signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"url",value:{name:"string",required:!1}},{key:"type",value:{name:"string",required:!0}}]}},description:""},intelligence:{required:!1,tsType:{name:"FileIntelligence"},description:""},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPreview:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showMetadata:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const oe={title:"Components/FileIntelligencePreview",component:p,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{file:{name:"vacation-photo.jpg",type:"image/jpeg",url:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800"},intelligence:{type:"JPEG Image",size:"2.4 MB",dimensions:"4032 × 3024",preview:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400",summary:"A beautiful landscape photo taken during vacation",metadata:{Camera:"iPhone 15 Pro","Date Taken":"December 15, 2023",Location:"Yosemite National Park",ISO:"100",Aperture:"f/1.8"}},showMetadata:!0}},s={args:{file:{name:"annual-report-2023.pdf",type:"application/pdf"},intelligence:{type:"PDF Document",size:"1.8 MB",summary:"Annual financial report for fiscal year 2023",extractedText:"Executive Summary: This report presents the financial performance and strategic initiatives undertaken during the fiscal year 2023...",metadata:{Pages:"45",Author:"Finance Department",Created:"January 5, 2024",Modified:"January 10, 2024"}},onDownload:()=>console.log("Download PDF"),onPreview:()=>console.log("Preview PDF")}},o={args:{file:{name:"presentation-recording.mp4",type:"video/mp4"},intelligence:{type:"MP4 Video",size:"125 MB",dimensions:"1920 × 1080",duration:"15:32",summary:"Quarterly business review presentation recording",metadata:{Duration:"15 minutes 32 seconds",Codec:"H.264","Frame Rate":"30 fps",Bitrate:"8 Mbps"}}}},i={args:{file:{name:"app.tsx",type:"text/typescript"},intelligence:{type:"TypeScript",size:"12 KB",summary:"Main application component with routing and state management",extractedText:`import React from "react";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* App content */}
    </BrowserRouter>
  );
}`,metadata:{Lines:"245",Language:"TypeScript",Components:"8",Hooks:"12"}}}},m={args:{file:{name:"document.docx",type:"application/vnd.openxmlformats-officedocument.wordprocessingml.document"},onDownload:()=>console.log("Download file")}},c={args:{file:{name:"simple-image.png",type:"image/png"},intelligence:{type:"PNG Image",size:"450 KB",dimensions:"800 × 600",preview:"https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400"},showMetadata:!1}},d={args:{file:{name:"podcast-episode-42.mp3",type:"audio/mpeg"},intelligence:{type:"MP3 Audio",size:"45 MB",duration:"32:15",summary:"Tech podcast episode discussing AI advancements",metadata:{Duration:"32 minutes 15 seconds",Bitrate:"192 kbps","Sample Rate":"44.1 kHz",Artist:"Tech Talk Podcast"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    file: {
      name: 'document.docx',
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    },
    onDownload: () => console.log('Download file')
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const ie=["ImageFile","PDFDocument","VideoFile","CodeFile","WithoutIntelligence","WithoutMetadata","AudioFile"];export{d as AudioFile,i as CodeFile,r as ImageFile,s as PDFDocument,o as VideoFile,m as WithoutIntelligence,c as WithoutMetadata,ie as __namedExportsOrder,oe as default};
