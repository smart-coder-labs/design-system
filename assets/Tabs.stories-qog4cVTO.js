import{j as e}from"./jsx-runtime-u17CrQMm.js";import{T as i,a as n,b as a,c as s}from"./Tabs-97NvYv-O.js";import"./iframe-B-5hg53G.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";import"./proxy-BFtQK4Qy.js";const g={title:"Navigation/Tabs",component:i,tags:[],argTypes:{defaultValue:{control:"text"}}},t={args:{defaultValue:"tab1",children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{children:[e.jsx(a,{value:"tab1",children:"Tab 1"}),e.jsx(a,{value:"tab2",children:"Tab 2"}),e.jsx(a,{value:"tab3",children:"Tab 3"})]}),e.jsx(s,{value:"tab1",children:e.jsx("div",{className:"p-4 bg-surface-secondary rounded-lg mt-2",children:e.jsx("p",{children:"Content for tab 1"})})}),e.jsx(s,{value:"tab2",children:e.jsx("div",{className:"p-4 bg-surface-secondary rounded-lg mt-2",children:e.jsx("p",{children:"Content for tab 2"})})}),e.jsx(s,{value:"tab3",children:e.jsx("div",{className:"p-4 bg-surface-secondary rounded-lg mt-2",children:e.jsx("p",{children:"Content for tab 3"})})})]})}},r={args:{defaultValue:"overview",children:e.jsxs(e.Fragment,{children:[e.jsxs(n,{variant:"segmented",children:[e.jsx(a,{value:"overview",children:"Overview"}),e.jsx(a,{value:"details",children:"Details"}),e.jsx(a,{value:"settings",children:"Settings"})]}),e.jsx(s,{value:"overview",children:e.jsx("div",{className:"p-4 mt-4",children:e.jsx("p",{children:"Overview content"})})}),e.jsx(s,{value:"details",children:e.jsx("div",{className:"p-4 mt-4",children:e.jsx("p",{children:"Details content"})})}),e.jsx(s,{value:"settings",children:e.jsx("div",{className:"p-4 mt-4",children:e.jsx("p",{children:"Settings content"})})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'tab1',
    children: <>
                <TabsList>
                    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                    <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value="tab1">
                    <div className="p-4 bg-surface-secondary rounded-lg mt-2">
                        <p>Content for tab 1</p>
                    </div>
                </TabsContent>
                <TabsContent value="tab2">
                    <div className="p-4 bg-surface-secondary rounded-lg mt-2">
                        <p>Content for tab 2</p>
                    </div>
                </TabsContent>
                <TabsContent value="tab3">
                    <div className="p-4 bg-surface-secondary rounded-lg mt-2">
                        <p>Content for tab 3</p>
                    </div>
                </TabsContent>
            </>
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 'overview',
    children: <>
                <TabsList variant="segmented">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                    <div className="p-4 mt-4">
                        <p>Overview content</p>
                    </div>
                </TabsContent>
                <TabsContent value="details">
                    <div className="p-4 mt-4">
                        <p>Details content</p>
                    </div>
                </TabsContent>
                <TabsContent value="settings">
                    <div className="p-4 mt-4">
                        <p>Settings content</p>
                    </div>
                </TabsContent>
            </>
  }
}`,...r.parameters?.docs?.source}}};const u=["Default","Segmented"];export{t as Default,r as Segmented,u as __namedExportsOrder,g as default};
