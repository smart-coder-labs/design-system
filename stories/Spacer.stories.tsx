import type { Meta, StoryObj } from '@storybook/react';
import { Spacer } from '../components/Spacer';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

const meta: Meta<typeof Spacer> = {
    title: 'Layout/Spacer',
    component: Spacer,
    tags: [],
    argTypes: {
        size: {
            control: 'select',
            options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', 100],
        },
        axis: {
            control: 'radio',
            options: ['vertical', 'horizontal'],
        },
        flex: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

const Box = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-surface-secondary border border-border-primary p-4 rounded-lg">
        {children}
    </div>
);

export const Vertical: Story = {
    render: (args) => (
        <div className="flex flex-col border border-dashed border-border-primary p-4 w-64">
            <Box>Item 1</Box>
            <Spacer {...args} />
            <Box>Item 2</Box>
            <Spacer {...args} />
            <Box>Item 3</Box>
        </div>
    ),
    args: {
        size: 'md',
        axis: 'vertical',
    },
};

export const Horizontal: Story = {
    render: (args) => (
        <div className="flex flex-row border border-dashed border-border-primary p-4">
            <Button>Button 1</Button>
            <Spacer {...args} />
            <Button variant="secondary">Button 2</Button>
            <Spacer {...args} />
            <Button variant="ghost">Button 3</Button>
        </div>
    ),
    args: {
        size: 'md',
        axis: 'horizontal',
    },
};

export const CustomSize: Story = {
    render: (args) => (
        <div className="flex flex-col border border-dashed border-border-primary p-4 w-64">
            <Box>Top</Box>
            <Spacer {...args} />
            <Box>Bottom (100px apart)</Box>
        </div>
    ),
    args: {
        size: 100,
        axis: 'vertical',
    },
};

export const FlexSpacer: Story = {
    render: (args) => (
        <Card className="w-full">
            <div className="flex items-center p-4">
                <div className="font-bold">Left Content</div>
                <Spacer {...args} />
                <div className="text-text-secondary">Right Content (Pushed)</div>
            </div>
        </Card>
    ),
    args: {
        flex: true,
    },
};
