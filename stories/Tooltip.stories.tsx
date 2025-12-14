import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipProvider } from '../components/Tooltip';
import { Button } from '../components/Button';

const meta: Meta<typeof Tooltip> = {
    title: 'Overlays/Tooltip',
    component: Tooltip,
    tags: [],
    decorators: [
        (Story) => (
            <TooltipProvider>
                <div className="p-10 flex justify-center">
                    <Story />
                </div>
            </TooltipProvider>
        ),
    ],
    argTypes: {
        side: {
            control: 'select',
            options: ['top', 'right', 'bottom', 'left'],
        },
        align: {
            control: 'select',
            options: ['start', 'center', 'end'],
        },
        delayDuration: {
            control: 'number',
        },
    },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        content: 'This is a tooltip',
        children: <Button>Hover me</Button>,
    },
};

export const Bottom: Story = {
    args: {
        content: 'Bottom tooltip',
        side: 'bottom',
        children: <Button>Hover me</Button>,
    },
};

export const Right: Story = {
    args: {
        content: 'Right tooltip',
        side: 'right',
        children: <Button>Hover me</Button>,
    },
};

export const Left: Story = {
    args: {
        content: 'Left tooltip',
        side: 'left',
        children: <Button>Hover me</Button>,
    },
};

export const RichContent: Story = {
    args: {
        content: (
            <div>
                <p className="font-semibold">Rich Tooltip</p>
                <p className="text-text-secondary">With multiple lines</p>
            </div>
        ),
        children: <Button>Hover me</Button>,
    },
};
