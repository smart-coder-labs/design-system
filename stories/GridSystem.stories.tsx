import type { Meta, StoryObj } from '@storybook/react';
import { GridContainer, Row, Col } from '../components/GridSystem';

const meta: Meta<typeof GridContainer> = {
    title: 'Layout/GridSystem',
    component: GridContainer,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof GridContainer>;

const Box = ({ children, className = '' }: { children?: React.ReactNode; className?: string }) => (
    <div className={`bg-surface-secondary border border-border-primary p-4 rounded-lg text-center text-sm font-medium ${className}`}>
        {children}
    </div>
);

export const BasicGrid: Story = {
    render: () => (
        <GridContainer className="py-8">
            <h3 className="mb-4 font-bold">12 Column Grid</h3>
            <Row>
                {Array.from({ length: 12 }).map((_, i) => (
                    <Col key={i} xs={1}>
                        <Box>{i + 1}</Box>
                    </Col>
                ))}
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
    ),
};

export const FluidContainer: Story = {
    render: () => (
        <GridContainer fluid className="py-8 bg-surface-secondary">
            <Row>
                <Col xs={12}>
                    <div className="bg-white p-4 rounded shadow-sm">
                        This container spans the full width of the viewport (fluid).
                    </div>
                </Col>
            </Row>
        </GridContainer>
    ),
};

export const CustomGutters: Story = {
    render: () => (
        <GridContainer className="py-8">
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
    ),
};
