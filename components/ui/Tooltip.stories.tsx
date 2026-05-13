import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipProvider } from './Tooltip';

const meta = {
    title: 'Components/Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <TooltipProvider>
                <div className="flex items-center justify-center p-12">
                    <Story />
                </div>
            </TooltipProvider>
        ),
    ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Top: Story = {
    args: {
        content: 'Portfolio value: $124,532',
        children: <button className="px-4 py-2 bg-gray-900 text-white rounded-lg text-sm">Hover me</button>,
        side: 'top',
    },
};

export const Bottom: Story = {
    args: {
        content: 'Click to view transaction details',
        children: <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">View Details</button>,
        side: 'bottom',
    },
};

export const Right: Story = {
    args: {
        content: '24/7 Customer Support',
        children: <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">Help</button>,
        side: 'right',
    },
};

export const Left: Story = {
    args: {
        content: 'Total balance: $45,230.50',
        children: <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm">Balance</button>,
        side: 'left',
    },
};

export const RichContent: Story = {
    args: {
        content: (
            <div className="space-y-1">
                <p className="font-semibold">BTC - Bitcoin</p>
                <p className="text-green-400">+2.45% ▲ $67,432</p>
                <p className="text-xs text-gray-400">24h volume: $28.5B</p>
            </div>
        ),
        children: <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm">BTC Price</button>,
        side: 'top',
    },
};

export const RightSide: Story = {
    args: {
        children: <span style={{ padding: '8px 16px', background: '#e5e7eb', borderRadius: 6, display: 'inline-block' }}>Hover me</span>,
        content: 'Tooltip on the right side',
        side: 'right',
    },
};

export const BottomAlign: Story = {
    args: {
        children: <span style={{ padding: '8px 16px', background: '#e5e7eb', borderRadius: 6, display: 'inline-block' }}>Bottom tooltip</span>,
        content: 'This tooltip appears below with end alignment',
        side: 'bottom',
        align: 'end',
    },
};

export const FintechHelp: Story = {
    render: () => (
        <div className="space-y-4 p-6">
            <TooltipProvider>
                <div className="flex items-center gap-8 justify-center">
                    <Tooltip content="Your available balance after pending transactions">
                        <span className="underline decoration-dotted cursor-help">Available Balance: $3,420.50</span>
                    </Tooltip>
                    <Tooltip content="Annual Percentage Yield - Current rate: 4.5%">
                        <span className="underline decoration-dotted cursor-help">APY: 4.5%</span>
                    </Tooltip>
                </div>
            </TooltipProvider>
        </div>
    ),
    decorators: [
        (Story) => (
            <div style={{ padding: '80px 20px', display: 'flex', justifyContent: 'center' }}>
                <Story />
            </div>
        ),
    ],
};
