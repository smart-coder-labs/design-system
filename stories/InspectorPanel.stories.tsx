import type { Meta, StoryObj } from '@storybook/react';
import { InspectorPanel, InspectorField } from '../components/InspectorPanel';
import { Input } from '../components/Input';
import { Select } from '../components/Select';

const meta: Meta<typeof InspectorPanel> = {
    title: 'Surfaces/InspectorPanel',
    component: InspectorPanel,
    tags: [],
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof InspectorPanel>;

export const Default: Story = {
    render: (args) => (
        <div className="flex h-screen">
            <div className="flex-1 bg-surface-primary p-8">
                <h1 className="text-2xl font-bold text-text-primary mb-4">Main Content Area</h1>
                <p className="text-text-secondary">
                    The inspector panel is on the right side, similar to Xcode's inspector.
                </p>
            </div>
            <InspectorPanel {...args} />
        </div>
    ),
    args: {
        sections: [
            {
                id: 'properties',
                title: 'Properties',
                defaultExpanded: true,
                content: (
                    <>
                        <InspectorField label="Name">
                            <Input placeholder="Component name" />
                        </InspectorField>
                        <InspectorField label="Type">
                            <Select>
                                <option>Button</option>
                                <option>Input</option>
                                <option>Card</option>
                            </Select>
                        </InspectorField>
                        <InspectorField label="ID">
                            <Input placeholder="unique-id" />
                        </InspectorField>
                    </>
                ),
            },
            {
                id: 'layout',
                title: 'Layout',
                defaultExpanded: true,
                content: (
                    <>
                        <InspectorField label="Width">
                            <Input placeholder="auto" />
                        </InspectorField>
                        <InspectorField label="Height">
                            <Input placeholder="auto" />
                        </InspectorField>
                        <InspectorField label="Padding">
                            <Input placeholder="16px" />
                        </InspectorField>
                        <InspectorField label="Margin">
                            <Input placeholder="0px" />
                        </InspectorField>
                    </>
                ),
            },
            {
                id: 'appearance',
                title: 'Appearance',
                defaultExpanded: false,
                content: (
                    <>
                        <InspectorField label="Background">
                            <Input type="color" />
                        </InspectorField>
                        <InspectorField label="Border Radius">
                            <Input placeholder="8px" />
                        </InspectorField>
                        <InspectorField label="Opacity">
                            <Input type="range" min="0" max="100" />
                        </InspectorField>
                    </>
                ),
            },
            {
                id: 'advanced',
                title: 'Advanced',
                defaultExpanded: false,
                content: (
                    <>
                        <InspectorField label="Class Name">
                            <Input placeholder="custom-class" />
                        </InspectorField>
                        <InspectorField label="Data Attribute">
                            <Input placeholder="data-value" />
                        </InspectorField>
                    </>
                ),
            },
        ],
    },
};
