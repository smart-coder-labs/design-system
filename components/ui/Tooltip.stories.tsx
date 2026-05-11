import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <span className="text-text-primary font-medium cursor-default">Hover me</span>,
  },
};

export const Top: Story = {
  args: {
    content: 'Tooltip on top',
    side: 'top',
    children: <span className="text-text-primary font-medium cursor-default">Top</span>,
  },
};

export const Bottom: Story = {
  args: {
    content: 'Tooltip on bottom',
    side: 'bottom',
    children: <span className="text-text-primary font-medium cursor-default">Bottom</span>,
  },
};

export const Left: Story = {
  args: {
    content: 'Tooltip on left',
    side: 'left',
    children: <span className="text-text-primary font-medium cursor-default">Left</span>,
  },
};

export const Right: Story = {
  args: {
    content: 'Tooltip on right',
    side: 'right',
    children: <span className="text-text-primary font-medium cursor-default">Right</span>,
  },
};

export const LongContent: Story = {
  args: {
    content: <div><p className="font-semibold">BTC Price Alert</p><p className="text-text-secondary text-xs">Set when BTC crosses $45,000</p></div>,
    children: <span className="text-accent-blue font-medium cursor-default">Price Alert</span>,
  },
};

export const Delayed: Story = {
  args: {
    content: 'Appears after 1 second',
    delayDuration: 1000,
    children: <span className="text-text-primary font-medium cursor-default">Delayed</span>,
  },
};
