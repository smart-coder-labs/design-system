import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as f}from"./Spinner-Nh3MRrN9.js";import{c}from"./utils-CDN07tui.js";import{A as h}from"./index-C-eQ3fKV.js";import{m}from"./proxy-BNOm_ZMq.js";import{C as x,a as y,b as v,d as b}from"./Card-CjpEzcgw.js";import{B as w}from"./Button-DiLt8not.js";import{r as u}from"./iframe-CGazvlvx.js";import"./resolve-elements-juiWZL7b.js";import"./preload-helper-PPVm8Dsz.js";const r=({isLoading:a,message:s,fullPage:o=!1,blur:t=!0,className:p,spinnerSize:g="lg"})=>e.jsx(h,{children:a&&e.jsx(m.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},className:c("flex flex-col items-center justify-center z-50",o?"fixed inset-0":"absolute inset-0 rounded-inherit",t?"backdrop-blur-sm":"","bg-surface-primary/80",p),children:e.jsxs("div",{className:c("flex flex-col items-center gap-4",t?"p-4":"p-6 bg-surface-elevated rounded-xl shadow-lg border border-border-primary"),children:[e.jsx(f,{size:g}),s&&e.jsx(m.p,{initial:{opacity:0,y:5},animate:{opacity:1,y:0},className:"text-sm font-medium text-text-secondary",children:s})]})})});r.displayName="LoadingOverlay";r.__docgenInfo={description:"",methods:[],displayName:"LoadingOverlay",props:{isLoading:{required:!0,tsType:{name:"boolean"},description:"Whether the loading overlay is visible"},message:{required:!1,tsType:{name:"string"},description:"Optional message to display below the spinner"},fullPage:{required:!1,tsType:{name:"boolean"},description:`Whether to cover the entire viewport (fixed) or just the parent container (absolute)
@default false`,defaultValue:{value:"false",computed:!1}},blur:{required:!1,tsType:{name:"boolean"},description:`Whether to apply a blur effect to the backdrop
@default true`,defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom class name for the container"},spinnerSize:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size of the spinner
@default "lg"`,defaultValue:{value:"'lg'",computed:!1}}}};const B={title:"Surfaces/LoadingOverlay",component:r,tags:[],argTypes:{isLoading:{control:"boolean"},message:{control:"text"},fullPage:{control:"boolean"},blur:{control:"boolean"},spinnerSize:{control:"radio",options:["sm","md","lg"]}}},n={render:a=>e.jsxs("div",{className:"relative w-[400px] h-[300px] border border-border-primary rounded-xl overflow-hidden bg-surface-primary",children:[e.jsxs("div",{className:"p-6 space-y-4",children:[e.jsx("h3",{className:"text-lg font-bold",children:"Content Title"}),e.jsx("p",{className:"text-text-secondary",children:"This is some content that is being covered by the loading overlay. The overlay sits on top of this content to indicate a loading state."}),e.jsx("div",{className:"h-20 bg-surface-secondary rounded-lg"})]}),e.jsx(r,{...a})]}),args:{isLoading:!0,message:"Loading content...",fullPage:!1}},i={render:a=>{const[s,o]=u.useState(!1);return u.useEffect(()=>{if(s){const t=setTimeout(()=>o(!1),3e3);return()=>clearTimeout(t)}},[s]),e.jsxs("div",{children:[e.jsx(w,{onClick:()=>o(!0),children:"Show Full Page Loader (3s)"}),e.jsx(r,{...a,isLoading:s})]})},args:{isLoading:!1,fullPage:!0,message:"Loading application..."}},d={render:a=>e.jsxs(x,{className:"w-[400px] relative overflow-hidden",children:[e.jsx(y,{children:e.jsx(v,{children:"Data Processing"})}),e.jsxs(b,{children:[e.jsx("p",{className:"text-text-secondary mb-4",children:"We are currently processing your data. This might take a few moments."}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"h-4 bg-surface-secondary rounded w-3/4"}),e.jsx("div",{className:"h-4 bg-surface-secondary rounded w-1/2"}),e.jsx("div",{className:"h-4 bg-surface-secondary rounded w-5/6"})]})]}),e.jsx(r,{...a})]}),args:{isLoading:!0,message:"Processing...",blur:!0}},l={render:a=>e.jsxs("div",{className:"relative w-[300px] h-[200px] border border-border-primary rounded-xl overflow-hidden bg-surface-primary p-4",children:[e.jsx("p",{children:"Content without blur effect on overlay."}),e.jsx(r,{...a})]}),args:{isLoading:!0,blur:!1,message:"Loading..."}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <div className="relative w-[400px] h-[300px] border border-border-primary rounded-xl overflow-hidden bg-surface-primary">
            <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold">Content Title</h3>
                <p className="text-text-secondary">
                    This is some content that is being covered by the loading overlay.
                    The overlay sits on top of this content to indicate a loading state.
                </p>
                <div className="h-20 bg-surface-secondary rounded-lg" />
            </div>
            <LoadingOverlay {...args} />
        </div>,
  args: {
    isLoading: true,
    message: 'Loading content...',
    fullPage: false
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [show, setShow] = useState(false);
    useEffect(() => {
      if (show) {
        const timer = setTimeout(() => setShow(false), 3000);
        return () => clearTimeout(timer);
      }
    }, [show]);
    return <div>
                <Button onClick={() => setShow(true)}>Show Full Page Loader (3s)</Button>
                <LoadingOverlay {...args} isLoading={show} />
            </div>;
  },
  args: {
    isLoading: false,
    fullPage: true,
    message: 'Loading application...'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Card className="w-[400px] relative overflow-hidden">
            <CardHeader>
                <CardTitle>Data Processing</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-text-secondary mb-4">
                    We are currently processing your data. This might take a few moments.
                </p>
                <div className="space-y-2">
                    <div className="h-4 bg-surface-secondary rounded w-3/4" />
                    <div className="h-4 bg-surface-secondary rounded w-1/2" />
                    <div className="h-4 bg-surface-secondary rounded w-5/6" />
                </div>
            </CardContent>
            <LoadingOverlay {...args} />
        </Card>,
  args: {
    isLoading: true,
    message: 'Processing...',
    blur: true
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <div className="relative w-[300px] h-[200px] border border-border-primary rounded-xl overflow-hidden bg-surface-primary p-4">
            <p>Content without blur effect on overlay.</p>
            <LoadingOverlay {...args} />
        </div>,
  args: {
    isLoading: true,
    blur: false,
    message: 'Loading...'
  }
}`,...l.parameters?.docs?.source}}};const z=["Default","FullPage","InsideCard","NoBlur"];export{n as Default,i as FullPage,d as InsideCard,l as NoBlur,z as __namedExportsOrder,B as default};
