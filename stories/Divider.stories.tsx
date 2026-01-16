import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from '../components/ui/Divider';
import { Card } from '../components/ui/Card';

const meta: Meta<typeof Divider> = {
    title: 'Layout/Divider',
    component: Divider,
    tags: [],
    argTypes: {
        orientation: {
            control: 'radio',
            options: ['horizontal', 'vertical'],
        },
        label: {
            control: 'text',
        },
        labelPosition: {
            control: 'radio',
            options: ['left', 'center', 'right'],
        },
        variant: {
            control: 'select',
            options: ['solid', 'dashed', 'dotted'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
    render: (args) => (
        <div className="w-full max-w-md space-y-4">
            <p>Content above</p>
            <Divider {...args} />
            <p>Content below</p>
        </div>
    ),
    args: {
        orientation: 'horizontal',
    },
};

export const Variants: Story = {
    render: () => (
        <div className="w-full max-w-md space-y-8">
            <div>
                <p className="text-sm text-text-secondary mb-2">Solid (Default)</p>
                <Divider variant="solid" />
            </div>
            <div>
                <p className="text-sm text-text-secondary mb-2">Dashed</p>
                <Divider variant="dashed" />
            </div>
            <div>
                <p className="text-sm text-text-secondary mb-2">Dotted</p>
                <Divider variant="dotted" />
            </div>
        </div>
    ),
};

export const WithLabel: Story = {
    render: (args) => (
        <div className="w-full max-w-md space-y-4">
            <p>Section 1</p>
            <Divider {...args} />
            <p>Section 2</p>
        </div>
    ),
    args: {
        label: 'OR',
        labelPosition: 'center',
    },
};

export const LabelLeft: Story = {
    args: {
        label: 'Section Title',
        labelPosition: 'left',
    },
};

export const LabelRight: Story = {
    args: {
        label: 'Read More',
        labelPosition: 'right',
    },
};

export const Vertical: Story = {
    render: (args) => (
        <div className="flex items-center h-10 border border-border-primary rounded-lg p-2 w-fit">
            <span>Item 1</span>
            <Divider {...args} />
            <span>Item 2</span>
            <Divider {...args} />
            <span>Item 3</span>
        </div>
    ),
    args: {
        orientation: 'vertical',
    },
};

export const InCard: Story = {
    render: () => (
        <Card className="w-80">
            <div className="p-4">
                <h3 className="font-bold">Card Title</h3>
                <p className="text-sm text-text-secondary">Card description goes here.</p>
            </div>
            <Divider className="my-0" />
            <div className="p-4">
                <button className="text-sm font-medium text-accent-blue">Action</button>
            </div>
        </Card>
    ),
};
