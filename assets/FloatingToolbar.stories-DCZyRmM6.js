import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m,R as J}from"./iframe-Dan5ncgG.js";import{c as i}from"./createLucideIcon-jCLSnv7o.js";import{X as Q}from"./x-CtAXLAxX.js";import{C}from"./copy-CYR4M-f-.js";import{D as T}from"./download-DaVlz-G9.js";import{S}from"./share-2-C1izKjZY.js";import{S as I}from"./star-ys1Y4dJz.js";import{H as q}from"./heart-C6Zylq8K.js";import{S as ee}from"./send-C2QSJEtG.js";import{Z as oe,R as te}from"./zoom-in-CrpuNTM-.js";import{M as ae}from"./maximize-D8nBXg2d.js";import{S as se,a as re}from"./skip-forward-D3eep-Nk.js";import{P as ie}from"./play-BQTc30zs.js";import{V as le}from"./volume-2-CIK0serW.js";import{S as z}from"./settings-F5-l3ViT.js";import{T as ne}from"./trash-2-CkHA_SCo.js";import{F as E}from"./funnel-B4REQdIz.js";import{L as _}from"./list-DyibYCxH.js";import"./preload-helper-PPVm8Dsz.js";const ce=[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]],de=i("arrow-up-narrow-wide",ce);const me=[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]],pe=i("bookmark",me);const xe=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],be=i("chevron-up",xe);const he=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]],ue=i("ellipsis",he);const ge=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],$=i("grid-3x3",ge);const ye=[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]],R=i("square-pen",ye);const Ne=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]],ve=i("zoom-out",Ne),t=({actions:o,position:s="bottom",variant:r="default",showLabels:d=!1,dismissible:D=!1,onDismiss:G,className:F="",offset:A=24,defaultActiveId:Z})=>{const[B,L]=m.useState(!0),[l,V]=m.useState(!1),[H,O]=m.useState(Z);m.useEffect(()=>{V(!0);const a=setTimeout(()=>V(!1),300);return()=>clearTimeout(a)},[]);const X=()=>{L(!1),G?.()},U=()=>{L(!0)},Y=a=>{O(a.id),a.onClick()},P={top:"top-0 left-1/2 -translate-x-1/2",bottom:"bottom-0 left-1/2 -translate-x-1/2","top-left":"top-0 left-0","top-right":"top-0 right-0","bottom-left":"bottom-0 left-0","bottom-right":"bottom-0 right-0"},M={default:"bg-surface-primary border border-border-primary shadow-lg",compact:"bg-surface-primary border border-border-primary shadow-md",glass:"glass border border-border-primary shadow-xl"},K={top:l?"animate-slide-down":"",bottom:l?"animate-slide-up":"","top-left":l?"animate-scale-in":"","top-right":l?"animate-scale-in":"","bottom-left":l?"animate-scale-in":"","bottom-right":l?"animate-scale-in":""},W=(a,c)=>{if(c)return"text-accent-blue border-b-2 border-accent-blue";switch(a){case"primary":return"text-accent-blue hover:bg-accent-blue/10";case"danger":return"text-status-error hover:bg-status-error/10";default:return"text-text-primary hover:bg-background-tertiary/50"}};return!B&&D?e.jsx("div",{className:`floating-toolbar-collapsed fixed ${P[s]} z-50 ${F}`,style:{margin:`${A}px`},children:e.jsx("button",{onClick:U,className:`${M[r]} rounded-full p-3 hover:scale-110 transition-all duration-200 animate-scale-in`,"aria-label":"Expand toolbar",children:e.jsx(be,{className:"w-5 h-5 text-text-primary"})})}):e.jsxs("div",{className:`floating-toolbar fixed ${P[s]} ${K[s]} z-50 ${F}`,style:{margin:`${A}px`},children:[e.jsxs("div",{className:`toolbar-container ${M[r]} rounded-2xl ${r==="compact"?"p-1.5":"p-2"} flex items-center gap-1`,children:[e.jsx("div",{className:"flex items-center gap-1",children:o.map(a=>{const c=H===a.id;return e.jsxs("button",{onClick:()=>Y(a),disabled:a.disabled,className:`toolbar-action relative flex items-center gap-2 ${r==="compact"?"px-2.5 py-2":"px-3 py-2.5"} rounded-xl font-medium text-sm transition-all duration-200 ${W(a.variant,c)} disabled:opacity-40 disabled:cursor-not-allowed group`,title:a.tooltip||a.label,"aria-label":a.label||a.tooltip,"aria-pressed":c,children:[e.jsx("span",{className:"flex-shrink-0 w-5 h-5",children:a.icon}),d&&a.label&&e.jsx("span",{className:"whitespace-nowrap",children:a.label}),a.tooltip&&!d&&!c&&e.jsxs("span",{className:"tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs font-medium rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap pointer-events-none shadow-lg",children:[a.tooltip,e.jsx("span",{className:"tooltip-arrow absolute top-full left-1/2 -translate-x-1/2 -mt-px border-4 border-transparent border-t-gray-900 dark:border-t-gray-100"})]})]},a.id)})}),D&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-px h-6 bg-border-primary mx-1"}),e.jsx("button",{onClick:X,className:`dismiss-button flex items-center justify-center ${r==="compact"?"w-8 h-8":"w-9 h-9"} rounded-xl text-text-secondary hover:text-text-primary hover:bg-background-tertiary/50 transition-all duration-200`,"aria-label":"Collapse toolbar",children:e.jsx(Q,{className:"w-4 h-4"})})]})]}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .floating-toolbar {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .toolbar-container {
          user-select: none;
          -webkit-user-select: none;
        }

        .toolbar-action {
          position: relative;
          overflow: visible;
        }

        .toolbar-action:not([aria-pressed="true"])::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 12px;
          background: currentColor;
          opacity: 0;
          transition: opacity 200ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .toolbar-action:not([aria-pressed="true"]):hover::before {
          opacity: 0.08;
        }

        .toolbar-action:not([aria-pressed="true"]):active::before {
          opacity: 0.12;
        }

        .toolbar-action:disabled::before {
          opacity: 0;
        }

        .tooltip {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 100;
        }

        .dark .tooltip {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(12px) translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-12px) translateX(-50%);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateX(-50%);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.92);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-slide-up {
          animation: slideUp 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slide-down {
          animation: slideDown 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-scale-in {
          animation: scaleIn 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        @media (max-width: 640px) {
          .floating-toolbar {
            max-width: calc(100vw - 32px);
          }

          .toolbar-container {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .toolbar-container::-webkit-scrollbar {
            display: none;
          }
        }
      `}})]})};t.__docgenInfo={description:"",methods:[],displayName:"FloatingToolbar",props:{actions:{required:!0,tsType:{name:"Array",elements:[{name:"FloatingToolbarAction"}],raw:"FloatingToolbarAction[]"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'top-right'"},{name:"literal",value:"'bottom-left'"},{name:"literal",value:"'bottom-right'"}]},description:"",defaultValue:{value:"'bottom'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'compact' | 'glass'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"},{name:"literal",value:"'glass'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showLabels:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},offset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"24",computed:!1}},defaultActiveId:{required:!1,tsType:{name:"string"},description:""}}};const Re={title:"Navigation/FloatingToolbar",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"A floating toolbar component that can be positioned anywhere on the screen. Perfect for contextual actions, media controls, or quick access tools. Features smooth animations, tooltips, and multiple variants."}}},tags:[]},n=[{id:"copy",icon:e.jsx(C,{className:"w-5 h-5"}),tooltip:"Copy",onClick:()=>console.log("Copy clicked")},{id:"download",icon:e.jsx(T,{className:"w-5 h-5"}),tooltip:"Download",onClick:()=>console.log("Download clicked")},{id:"share",icon:e.jsx(S,{className:"w-5 h-5"}),tooltip:"Share",onClick:()=>console.log("Share clicked")},{id:"edit",icon:e.jsx(R,{className:"w-5 h-5"}),tooltip:"Edit",onClick:()=>console.log("Edit clicked"),variant:"primary"}],p={args:{actions:n,position:"bottom"},render:o=>e.jsxs("div",{className:"min-h-screen bg-background-primary p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-4",children:"Floating Toolbar Demo"}),e.jsx("p",{className:"text-text-secondary mb-8",children:"The toolbar is positioned at the bottom center of the viewport. Hover over icons to see tooltips."}),e.jsx("div",{className:"bg-surface-secondary rounded-xl p-8 border border-border-primary",children:e.jsx("p",{className:"text-text-primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})})]}),e.jsx(t,{...o})]})},x={args:{actions:[{id:"copy",label:"Copy",icon:e.jsx(C,{className:"w-5 h-5"}),onClick:()=>console.log("Copy clicked")},{id:"download",label:"Download",icon:e.jsx(T,{className:"w-5 h-5"}),onClick:()=>console.log("Download clicked")},{id:"share",label:"Share",icon:e.jsx(S,{className:"w-5 h-5"}),onClick:()=>console.log("Share clicked")}],position:"bottom",showLabels:!0},render:o=>e.jsxs("div",{className:"min-h-screen bg-background-primary p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-4",children:"Toolbar with Labels"}),e.jsx("p",{className:"text-text-secondary",children:"Actions are displayed with text labels for better clarity."})]}),e.jsx(t,{...o})]})},b={args:{actions:n,position:"bottom",dismissible:!0,onDismiss:()=>console.log("Toolbar collapsed")},render:o=>{const[s,r]=J.useState(0);return e.jsxs("div",{className:"min-h-screen bg-background-primary p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-4",children:"Dismissible Toolbar"}),e.jsx("p",{className:"text-text-secondary mb-4",children:"Click the X button to collapse the toolbar. It will shrink to a small button that you can click to expand it again. Click the button below to reset the demo."}),e.jsx("button",{onClick:()=>r(d=>d+1),className:"px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue-hover transition-colors",children:"Reset Demo"})]}),e.jsx(t,{...o},s)]})}},h={args:{actions:n,position:"top"},render:o=>e.jsxs("div",{className:"min-h-screen bg-background-primary p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto mt-24",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-4",children:"Top Position"}),e.jsx("p",{className:"text-text-secondary",children:"Toolbar positioned at the top center of the viewport."})]}),e.jsx(t,{...o})]})},u={render:()=>e.jsxs("div",{className:"min-h-screen bg-background-primary p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-4",children:"Corner Positions"}),e.jsx("p",{className:"text-text-secondary",children:"Toolbars can be positioned in any corner of the viewport."})]}),e.jsx(t,{actions:[{id:"tl",icon:e.jsx(I,{className:"w-5 h-5"}),tooltip:"Top Left",onClick:()=>{}}],position:"top-left"}),e.jsx(t,{actions:[{id:"tr",icon:e.jsx(q,{className:"w-5 h-5"}),tooltip:"Top Right",onClick:()=>{}}],position:"top-right"}),e.jsx(t,{actions:[{id:"bl",icon:e.jsx(pe,{className:"w-5 h-5"}),tooltip:"Bottom Left",onClick:()=>{}}],position:"bottom-left"}),e.jsx(t,{actions:[{id:"br",icon:e.jsx(ee,{className:"w-5 h-5"}),tooltip:"Bottom Right",onClick:()=>{}}],position:"bottom-right"})]})},g={args:{actions:n,position:"bottom",variant:"glass"},render:o=>e.jsxs("div",{className:"min-h-screen p-8",style:{background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold text-white mb-4",children:"Glass Variant"}),e.jsx("p",{className:"text-white/80 mb-8",children:"Glassmorphism effect with backdrop blur for a modern look."}),e.jsx("div",{className:"bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20",children:e.jsx("p",{className:"text-white",children:"The glass variant works beautifully over colorful backgrounds."})})]}),e.jsx(t,{...o})]})},y={args:{actions:n,position:"bottom",variant:"compact"},render:o=>e.jsxs("div",{className:"min-h-screen bg-background-primary p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-4",children:"Compact Variant"}),e.jsx("p",{className:"text-text-secondary",children:"Smaller padding and spacing for a more condensed toolbar."})]}),e.jsx(t,{...o})]})},N={args:{actions:[{id:"zoom-in",icon:e.jsx(oe,{className:"w-5 h-5"}),tooltip:"Zoom In",onClick:()=>console.log("Zoom in")},{id:"zoom-out",icon:e.jsx(ve,{className:"w-5 h-5"}),tooltip:"Zoom Out",onClick:()=>console.log("Zoom out")},{id:"rotate",icon:e.jsx(te,{className:"w-5 h-5"}),tooltip:"Rotate",onClick:()=>console.log("Rotate")},{id:"fullscreen",icon:e.jsx(ae,{className:"w-5 h-5"}),tooltip:"Fullscreen",onClick:()=>console.log("Fullscreen")},{id:"download",icon:e.jsx(T,{className:"w-5 h-5"}),tooltip:"Download",onClick:()=>console.log("Download"),variant:"primary"}],position:"bottom",variant:"glass"},render:o=>e.jsxs("div",{className:"min-h-screen bg-background-secondary p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-4",children:"Image Viewer Controls"}),e.jsx("div",{className:"bg-background-tertiary rounded-xl aspect-video flex items-center justify-center border border-border-primary",children:e.jsx("p",{className:"text-text-secondary",children:"Image Preview Area"})})]}),e.jsx(t,{...o})]})},v={args:{actions:[{id:"skip-back",icon:e.jsx(se,{className:"w-5 h-5"}),tooltip:"Previous",onClick:()=>console.log("Previous")},{id:"play",icon:e.jsx(ie,{className:"w-5 h-5"}),tooltip:"Play",onClick:()=>console.log("Play"),variant:"primary"},{id:"skip-forward",icon:e.jsx(re,{className:"w-5 h-5"}),tooltip:"Next",onClick:()=>console.log("Next")},{id:"volume",icon:e.jsx(le,{className:"w-5 h-5"}),tooltip:"Volume",onClick:()=>console.log("Volume")},{id:"settings",icon:e.jsx(z,{className:"w-5 h-5"}),tooltip:"Settings",onClick:()=>console.log("Settings")}],position:"bottom",showLabels:!1},render:o=>e.jsxs("div",{className:"min-h-screen bg-black p-8",children:[e.jsx("div",{className:"max-w-4xl mx-auto",children:e.jsx("div",{className:"bg-gray-900 rounded-xl aspect-video flex items-center justify-center",children:e.jsx("p",{className:"text-white/60",children:"Video Player"})})}),e.jsx(t,{...o})]})},f={args:{actions:[{id:"edit",label:"Edit",icon:e.jsx(R,{className:"w-5 h-5"}),onClick:()=>console.log("Edit"),variant:"primary"},{id:"copy",label:"Copy",icon:e.jsx(C,{className:"w-5 h-5"}),onClick:()=>console.log("Copy")},{id:"share",label:"Share",icon:e.jsx(S,{className:"w-5 h-5"}),onClick:()=>console.log("Share")},{id:"delete",label:"Delete",icon:e.jsx(ne,{className:"w-5 h-5"}),onClick:()=>console.log("Delete"),variant:"danger"}],position:"top",showLabels:!0,dismissible:!0},render:o=>e.jsxs("div",{className:"min-h-screen bg-background-primary p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto mt-24",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-4",children:"Text Editor Actions"}),e.jsxs("div",{className:"bg-surface-secondary rounded-xl p-6 border border-border-primary",children:[e.jsx("p",{className:"text-text-primary mb-4",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."}),e.jsx("p",{className:"text-text-primary",children:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."})]})]}),e.jsx(t,{...o})]})},w={args:{actions:[{id:"filter",icon:e.jsx(E,{className:"w-5 h-5"}),tooltip:"Filter",onClick:()=>console.log("Filter")},{id:"sort",icon:e.jsx(de,{className:"w-5 h-5"}),tooltip:"Sort",onClick:()=>console.log("Sort")},{id:"grid",icon:e.jsx($,{className:"w-5 h-5"}),tooltip:"Grid View",onClick:()=>console.log("Grid view")},{id:"list",icon:e.jsx(_,{className:"w-5 h-5"}),tooltip:"List View",onClick:()=>console.log("List view"),variant:"primary"},{id:"more",icon:e.jsx(ue,{className:"w-5 h-5"}),tooltip:"More Options",onClick:()=>console.log("More")}],position:"top-right",variant:"compact"},render:o=>e.jsxs("div",{className:"min-h-screen bg-background-primary p-8",children:[e.jsxs("div",{className:"max-w-6xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-4",children:"Data Table"}),e.jsx("div",{className:"bg-surface-secondary rounded-xl p-6 border border-border-primary",children:e.jsxs("table",{className:"w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-border-primary",children:[e.jsx("th",{className:"text-left py-3 text-text-primary font-semibold",children:"Name"}),e.jsx("th",{className:"text-left py-3 text-text-primary font-semibold",children:"Status"}),e.jsx("th",{className:"text-left py-3 text-text-primary font-semibold",children:"Date"})]})}),e.jsx("tbody",{children:[1,2,3,4,5].map(s=>e.jsxs("tr",{className:"border-b border-border-primary",children:[e.jsxs("td",{className:"py-3 text-text-primary",children:["Item ",s]}),e.jsx("td",{className:"py-3 text-text-secondary",children:"Active"}),e.jsxs("td",{className:"py-3 text-text-secondary",children:["2024-01-",s]})]},s))})]})})]}),e.jsx(t,{...o})]})},k={args:{actions:n,position:"bottom",dismissible:!0},parameters:{backgrounds:{default:"dark"}},decorators:[o=>e.jsx("div",{className:"dark",children:e.jsx(o,{})})],render:o=>e.jsxs("div",{className:"min-h-screen bg-background-primary p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-4",children:"Dark Mode"}),e.jsx("p",{className:"text-text-secondary mb-8",children:"The toolbar adapts beautifully to dark mode."}),e.jsx("div",{className:"bg-surface-secondary rounded-xl p-8 border border-border-primary",children:e.jsx("p",{className:"text-text-primary",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})})]}),e.jsx(t,{...o})]})},j={render:()=>e.jsxs("div",{className:"min-h-screen bg-background-primary p-8",children:[e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsx("h2",{className:"text-2xl font-bold text-text-primary mb-4 text-center",children:"All Toolbar Positions"}),e.jsx("p",{className:"text-text-secondary text-center mb-8",children:"Toolbars positioned in all available locations"})]}),e.jsx(t,{actions:[{id:"top",label:"Top",icon:e.jsx(I,{className:"w-5 h-5"}),onClick:()=>{}}],position:"top",showLabels:!0,variant:"compact"}),e.jsx(t,{actions:[{id:"bottom",label:"Bottom",icon:e.jsx(q,{className:"w-5 h-5"}),onClick:()=>{}}],position:"bottom",showLabels:!0,variant:"compact"}),e.jsx(t,{actions:[{id:"tl",icon:e.jsx($,{className:"w-5 h-5"}),onClick:()=>{}}],position:"top-left",variant:"compact"}),e.jsx(t,{actions:[{id:"tr",icon:e.jsx(_,{className:"w-5 h-5"}),onClick:()=>{}}],position:"top-right",variant:"compact"}),e.jsx(t,{actions:[{id:"bl",icon:e.jsx(E,{className:"w-5 h-5"}),onClick:()=>{}}],position:"bottom-left",variant:"compact"}),e.jsx(t,{actions:[{id:"br",icon:e.jsx(z,{className:"w-5 h-5"}),onClick:()=>{}}],position:"bottom-right",variant:"compact"})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    actions: basicActions,
    position: 'bottom'
  },
  render: args => <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Floating Toolbar Demo
                </h2>
                <p className="text-text-secondary mb-8">
                    The toolbar is positioned at the bottom center of the viewport. Hover over
                    icons to see tooltips.
                </p>
                <div className="bg-surface-secondary rounded-xl p-8 border border-border-primary">
                    <p className="text-text-primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
            </div>
            <FloatingToolbar {...args} />
        </div>
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      id: 'copy',
      label: 'Copy',
      icon: <Copy className="w-5 h-5" />,
      onClick: () => console.log('Copy clicked')
    }, {
      id: 'download',
      label: 'Download',
      icon: <Download className="w-5 h-5" />,
      onClick: () => console.log('Download clicked')
    }, {
      id: 'share',
      label: 'Share',
      icon: <Share2 className="w-5 h-5" />,
      onClick: () => console.log('Share clicked')
    }],
    position: 'bottom',
    showLabels: true
  },
  render: args => <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Toolbar with Labels
                </h2>
                <p className="text-text-secondary">
                    Actions are displayed with text labels for better clarity.
                </p>
            </div>
            <FloatingToolbar {...args} />
        </div>
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    actions: basicActions,
    position: 'bottom',
    dismissible: true,
    onDismiss: () => console.log('Toolbar collapsed')
  },
  render: args => {
    const [key, setKey] = React.useState(0);
    return <div className="min-h-screen bg-background-primary p-8">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-text-primary mb-4">
                        Dismissible Toolbar
                    </h2>
                    <p className="text-text-secondary mb-4">
                        Click the X button to collapse the toolbar. It will shrink to a small button that you can click to expand it again. Click the button below to reset the demo.
                    </p>
                    <button onClick={() => setKey(k => k + 1)} className="px-4 py-2 bg-accent-blue text-white rounded-lg hover:bg-accent-blue-hover transition-colors">
                        Reset Demo
                    </button>
                </div>
                <FloatingToolbar key={key} {...args} />
            </div>;
  }
}`,...b.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    actions: basicActions,
    position: 'top'
  },
  render: args => <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto mt-24">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Top Position</h2>
                <p className="text-text-secondary">
                    Toolbar positioned at the top center of the viewport.
                </p>
            </div>
            <FloatingToolbar {...args} />
        </div>
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Corner Positions
                </h2>
                <p className="text-text-secondary">
                    Toolbars can be positioned in any corner of the viewport.
                </p>
            </div>

            <FloatingToolbar actions={[{
      id: 'tl',
      icon: <Star className="w-5 h-5" />,
      tooltip: 'Top Left',
      onClick: () => {}
    }]} position="top-left" />

            <FloatingToolbar actions={[{
      id: 'tr',
      icon: <Heart className="w-5 h-5" />,
      tooltip: 'Top Right',
      onClick: () => {}
    }]} position="top-right" />

            <FloatingToolbar actions={[{
      id: 'bl',
      icon: <Bookmark className="w-5 h-5" />,
      tooltip: 'Bottom Left',
      onClick: () => {}
    }]} position="bottom-left" />

            <FloatingToolbar actions={[{
      id: 'br',
      icon: <Send className="w-5 h-5" />,
      tooltip: 'Bottom Right',
      onClick: () => {}
    }]} position="bottom-right" />
        </div>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    actions: basicActions,
    position: 'bottom',
    variant: 'glass'
  },
  render: args => <div className="min-h-screen p-8" style={{
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  }}>
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-white mb-4">Glass Variant</h2>
                <p className="text-white/80 mb-8">
                    Glassmorphism effect with backdrop blur for a modern look.
                </p>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
                    <p className="text-white">
                        The glass variant works beautifully over colorful backgrounds.
                    </p>
                </div>
            </div>
            <FloatingToolbar {...args} />
        </div>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    actions: basicActions,
    position: 'bottom',
    variant: 'compact'
  },
  render: args => <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Compact Variant
                </h2>
                <p className="text-text-secondary">
                    Smaller padding and spacing for a more condensed toolbar.
                </p>
            </div>
            <FloatingToolbar {...args} />
        </div>
}`,...y.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      id: 'zoom-in',
      icon: <ZoomIn className="w-5 h-5" />,
      tooltip: 'Zoom In',
      onClick: () => console.log('Zoom in')
    }, {
      id: 'zoom-out',
      icon: <ZoomOut className="w-5 h-5" />,
      tooltip: 'Zoom Out',
      onClick: () => console.log('Zoom out')
    }, {
      id: 'rotate',
      icon: <RotateCw className="w-5 h-5" />,
      tooltip: 'Rotate',
      onClick: () => console.log('Rotate')
    }, {
      id: 'fullscreen',
      icon: <Maximize className="w-5 h-5" />,
      tooltip: 'Fullscreen',
      onClick: () => console.log('Fullscreen')
    }, {
      id: 'download',
      icon: <Download className="w-5 h-5" />,
      tooltip: 'Download',
      onClick: () => console.log('Download'),
      variant: 'primary' as const
    }],
    position: 'bottom',
    variant: 'glass'
  },
  render: args => <div className="min-h-screen bg-background-secondary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Image Viewer Controls
                </h2>
                <div className="bg-background-tertiary rounded-xl aspect-video flex items-center justify-center border border-border-primary">
                    <p className="text-text-secondary">Image Preview Area</p>
                </div>
            </div>
            <FloatingToolbar {...args} />
        </div>
}`,...N.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      id: 'skip-back',
      icon: <SkipBack className="w-5 h-5" />,
      tooltip: 'Previous',
      onClick: () => console.log('Previous')
    }, {
      id: 'play',
      icon: <Play className="w-5 h-5" />,
      tooltip: 'Play',
      onClick: () => console.log('Play'),
      variant: 'primary' as const
    }, {
      id: 'skip-forward',
      icon: <SkipForward className="w-5 h-5" />,
      tooltip: 'Next',
      onClick: () => console.log('Next')
    }, {
      id: 'volume',
      icon: <Volume2 className="w-5 h-5" />,
      tooltip: 'Volume',
      onClick: () => console.log('Volume')
    }, {
      id: 'settings',
      icon: <Settings className="w-5 h-5" />,
      tooltip: 'Settings',
      onClick: () => console.log('Settings')
    }],
    position: 'bottom',
    showLabels: false
  },
  render: args => <div className="min-h-screen bg-black p-8">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gray-900 rounded-xl aspect-video flex items-center justify-center">
                    <p className="text-white/60">Video Player</p>
                </div>
            </div>
            <FloatingToolbar {...args} />
        </div>
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      id: 'edit',
      label: 'Edit',
      icon: <Edit className="w-5 h-5" />,
      onClick: () => console.log('Edit'),
      variant: 'primary' as const
    }, {
      id: 'copy',
      label: 'Copy',
      icon: <Copy className="w-5 h-5" />,
      onClick: () => console.log('Copy')
    }, {
      id: 'share',
      label: 'Share',
      icon: <Share2 className="w-5 h-5" />,
      onClick: () => console.log('Share')
    }, {
      id: 'delete',
      label: 'Delete',
      icon: <Trash2 className="w-5 h-5" />,
      onClick: () => console.log('Delete'),
      variant: 'danger' as const
    }],
    position: 'top',
    showLabels: true,
    dismissible: true
  },
  render: args => <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto mt-24">
                <h2 className="text-2xl font-bold text-text-primary mb-4">
                    Text Editor Actions
                </h2>
                <div className="bg-surface-secondary rounded-xl p-6 border border-border-primary">
                    <p className="text-text-primary mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris.
                    </p>
                    <p className="text-text-primary">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur.
                    </p>
                </div>
            </div>
            <FloatingToolbar {...args} />
        </div>
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    actions: [{
      id: 'filter',
      icon: <Filter className="w-5 h-5" />,
      tooltip: 'Filter',
      onClick: () => console.log('Filter')
    }, {
      id: 'sort',
      icon: <SortAsc className="w-5 h-5" />,
      tooltip: 'Sort',
      onClick: () => console.log('Sort')
    }, {
      id: 'grid',
      icon: <Grid className="w-5 h-5" />,
      tooltip: 'Grid View',
      onClick: () => console.log('Grid view')
    }, {
      id: 'list',
      icon: <List className="w-5 h-5" />,
      tooltip: 'List View',
      onClick: () => console.log('List view'),
      variant: 'primary' as const
    }, {
      id: 'more',
      icon: <MoreHorizontal className="w-5 h-5" />,
      tooltip: 'More Options',
      onClick: () => console.log('More')
    }],
    position: 'top-right',
    variant: 'compact'
  },
  render: args => <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Data Table</h2>
                <div className="bg-surface-secondary rounded-xl p-6 border border-border-primary">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-border-primary">
                                <th className="text-left py-3 text-text-primary font-semibold">Name</th>
                                <th className="text-left py-3 text-text-primary font-semibold">
                                    Status
                                </th>
                                <th className="text-left py-3 text-text-primary font-semibold">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[1, 2, 3, 4, 5].map(i => <tr key={i} className="border-b border-border-primary">
                                    <td className="py-3 text-text-primary">Item {i}</td>
                                    <td className="py-3 text-text-secondary">Active</td>
                                    <td className="py-3 text-text-secondary">2024-01-{i}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
            <FloatingToolbar {...args} />
        </div>
}`,...w.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    actions: basicActions,
    position: 'bottom',
    dismissible: true
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  },
  decorators: [Story => <div className="dark">
                <Story />
            </div>],
  render: args => <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4">Dark Mode</h2>
                <p className="text-text-secondary mb-8">
                    The toolbar adapts beautifully to dark mode.
                </p>
                <div className="bg-surface-secondary rounded-xl p-8 border border-border-primary">
                    <p className="text-text-primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
            </div>
            <FloatingToolbar {...args} />
        </div>
}`,...k.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-background-primary p-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-text-primary mb-4 text-center">
                    All Toolbar Positions
                </h2>
                <p className="text-text-secondary text-center mb-8">
                    Toolbars positioned in all available locations
                </p>
            </div>

            {/* Top */}
            <FloatingToolbar actions={[{
      id: 'top',
      label: 'Top',
      icon: <Star className="w-5 h-5" />,
      onClick: () => {}
    }]} position="top" showLabels variant="compact" />

            {/* Bottom */}
            <FloatingToolbar actions={[{
      id: 'bottom',
      label: 'Bottom',
      icon: <Heart className="w-5 h-5" />,
      onClick: () => {}
    }]} position="bottom" showLabels variant="compact" />

            {/* Corners */}
            <FloatingToolbar actions={[{
      id: 'tl',
      icon: <Grid className="w-5 h-5" />,
      onClick: () => {}
    }]} position="top-left" variant="compact" />

            <FloatingToolbar actions={[{
      id: 'tr',
      icon: <List className="w-5 h-5" />,
      onClick: () => {}
    }]} position="top-right" variant="compact" />

            <FloatingToolbar actions={[{
      id: 'bl',
      icon: <Filter className="w-5 h-5" />,
      onClick: () => {}
    }]} position="bottom-left" variant="compact" />

            <FloatingToolbar actions={[{
      id: 'br',
      icon: <Settings className="w-5 h-5" />,
      onClick: () => {}
    }]} position="bottom-right" variant="compact" />
        </div>
}`,...j.parameters?.docs?.source}}};const Ge=["Default","WithLabels","Dismissible","TopPosition","CornerPositions","GlassVariant","CompactVariant","ImageViewer","MediaPlayer","TextEditor","DataTable","DarkMode","AllPositions"];export{j as AllPositions,y as CompactVariant,u as CornerPositions,k as DarkMode,w as DataTable,p as Default,b as Dismissible,g as GlassVariant,N as ImageViewer,v as MediaPlayer,f as TextEditor,h as TopPosition,x as WithLabels,Ge as __namedExportsOrder,Re as default};
