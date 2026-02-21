import{j as e}from"./jsx-runtime-u17CrQMm.js";import{G as i,R as t,C as s}from"./GridSystem-DrOK6vxn.js";import"./iframe-CGazvlvx.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CDN07tui.js";const g={title:"Layout/GridSystem",component:i,tags:[],parameters:{layout:"fullscreen"}},r=({children:a,className:n=""})=>e.jsx("div",{className:`bg-surface-secondary border border-border-primary p-4 rounded-lg text-center text-sm font-medium ${n}`,children:a}),o={render:()=>e.jsxs(i,{className:"py-8",children:[e.jsx("h3",{className:"mb-4 font-bold",children:"12 Column Grid"}),e.jsx(t,{children:Array.from({length:12}).map((a,n)=>e.jsx(s,{xs:1,children:e.jsx(r,{children:n+1})},n))}),e.jsx("h3",{className:"my-4 font-bold",children:"Responsive Columns"}),e.jsxs(t,{children:[e.jsx(s,{xs:12,md:6,lg:4,children:e.jsx(r,{children:"Col 1 (12/6/4)"})}),e.jsx(s,{xs:12,md:6,lg:4,children:e.jsx(r,{children:"Col 2 (12/6/4)"})}),e.jsx(s,{xs:12,md:12,lg:4,children:e.jsx(r,{children:"Col 3 (12/12/4)"})})]}),e.jsx("h3",{className:"my-4 font-bold",children:"Auto Width"}),e.jsxs(t,{children:[e.jsx(s,{xs:"auto",children:e.jsx(r,{children:"Auto Width Content"})}),e.jsx(s,{xs:!0,children:e.jsx(r,{children:"Fill Remaining Space"})})]}),e.jsx("h3",{className:"my-4 font-bold",children:"Nested Grid"}),e.jsxs(t,{children:[e.jsx(s,{xs:8,children:e.jsxs("div",{className:"bg-surface-tertiary p-4 rounded-xl",children:[e.jsx("p",{className:"mb-2",children:"Parent Col-8"}),e.jsxs(t,{children:[e.jsx(s,{xs:6,children:e.jsx(r,{className:"bg-white",children:"Nested 6"})}),e.jsx(s,{xs:6,children:e.jsx(r,{className:"bg-white",children:"Nested 6"})})]})]})}),e.jsx(s,{xs:4,children:e.jsx(r,{className:"h-full flex items-center justify-center",children:"Col-4"})})]})]})},l={render:()=>e.jsx(i,{fluid:!0,className:"py-8 bg-surface-secondary",children:e.jsx(t,{children:e.jsx(s,{xs:12,children:e.jsx("div",{className:"bg-white p-4 rounded shadow-sm",children:"This container spans the full width of the viewport (fluid)."})})})})},d={render:()=>e.jsxs(i,{className:"py-8",children:[e.jsx("h3",{className:"mb-4 font-bold",children:"No Gutters (gutterX=0)"}),e.jsxs(t,{gutterX:0,gutterY:0,children:[e.jsx(s,{xs:4,gutterX:0,gutterY:0,children:e.jsx("div",{className:"bg-blue-100 p-4 text-center",children:"1"})}),e.jsx(s,{xs:4,gutterX:0,gutterY:0,children:e.jsx("div",{className:"bg-blue-200 p-4 text-center",children:"2"})}),e.jsx(s,{xs:4,gutterX:0,gutterY:0,children:e.jsx("div",{className:"bg-blue-300 p-4 text-center",children:"3"})})]}),e.jsx("h3",{className:"my-4 font-bold",children:"Large Gutters (gutterX=8)"}),e.jsxs(t,{gutterX:8,gutterY:8,children:[e.jsx(s,{xs:6,gutterX:8,gutterY:8,children:e.jsx(r,{children:"Wide Gutter 1"})}),e.jsx(s,{xs:6,gutterX:8,gutterY:8,children:e.jsx(r,{children:"Wide Gutter 2"})}),e.jsx(s,{xs:6,gutterX:8,gutterY:8,children:e.jsx(r,{children:"Wide Gutter 3"})}),e.jsx(s,{xs:6,gutterX:8,gutterY:8,children:e.jsx(r,{children:"Wide Gutter 4"})})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <GridContainer className="py-8">
            <h3 className="mb-4 font-bold">12 Column Grid</h3>
            <Row>
                {Array.from({
        length: 12
      }).map((_, i) => <Col key={i} xs={1}>
                        <Box>{i + 1}</Box>
                    </Col>)}
            </Row>

            <h3 className="my-4 font-bold">Responsive Columns</h3>
            <Row>
                <Col xs={12} md={6} lg={4}>
                    <Box>Col 1 (12/6/4)</Box>
                </Col>
                <Col xs={12} md={6} lg={4}>
                    <Box>Col 2 (12/6/4)</Box>
                </Col>
                <Col xs={12} md={12} lg={4}>
                    <Box>Col 3 (12/12/4)</Box>
                </Col>
            </Row>

            <h3 className="my-4 font-bold">Auto Width</h3>
            <Row>
                <Col xs="auto">
                    <Box>Auto Width Content</Box>
                </Col>
                <Col xs={true}>
                    <Box>Fill Remaining Space</Box>
                </Col>
            </Row>

            <h3 className="my-4 font-bold">Nested Grid</h3>
            <Row>
                <Col xs={8}>
                    <div className="bg-surface-tertiary p-4 rounded-xl">
                        <p className="mb-2">Parent Col-8</p>
                        <Row>
                            <Col xs={6}><Box className="bg-white">Nested 6</Box></Col>
                            <Col xs={6}><Box className="bg-white">Nested 6</Box></Col>
                        </Row>
                    </div>
                </Col>
                <Col xs={4}>
                    <Box className="h-full flex items-center justify-center">Col-4</Box>
                </Col>
            </Row>
        </GridContainer>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <GridContainer fluid className="py-8 bg-surface-secondary">
            <Row>
                <Col xs={12}>
                    <div className="bg-white p-4 rounded shadow-sm">
                        This container spans the full width of the viewport (fluid).
                    </div>
                </Col>
            </Row>
        </GridContainer>
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <GridContainer className="py-8">
            <h3 className="mb-4 font-bold">No Gutters (gutterX=0)</h3>
            <Row gutterX={0} gutterY={0}>
                <Col xs={4} gutterX={0} gutterY={0}><div className="bg-blue-100 p-4 text-center">1</div></Col>
                <Col xs={4} gutterX={0} gutterY={0}><div className="bg-blue-200 p-4 text-center">2</div></Col>
                <Col xs={4} gutterX={0} gutterY={0}><div className="bg-blue-300 p-4 text-center">3</div></Col>
            </Row>

            <h3 className="my-4 font-bold">Large Gutters (gutterX=8)</h3>
            <Row gutterX={8} gutterY={8}>
                <Col xs={6} gutterX={8} gutterY={8}><Box>Wide Gutter 1</Box></Col>
                <Col xs={6} gutterX={8} gutterY={8}><Box>Wide Gutter 2</Box></Col>
                <Col xs={6} gutterX={8} gutterY={8}><Box>Wide Gutter 3</Box></Col>
                <Col xs={6} gutterX={8} gutterY={8}><Box>Wide Gutter 4</Box></Col>
            </Row>
        </GridContainer>
}`,...d.parameters?.docs?.source}}};const C=["BasicGrid","FluidContainer","CustomGutters"];export{o as BasicGrid,d as CustomGutters,l as FluidContainer,C as __namedExportsOrder,g as default};
