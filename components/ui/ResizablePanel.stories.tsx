import type { Meta, StoryObj } from '@storybook/react';
import { ResizablePanel } from './ResizablePanel';

const meta = {
  title: 'Components/ResizablePanel',
  component: ResizablePanel,
  tags: ['autodocs'],
} satisfies Meta<typeof ResizablePanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultWidth: 300,
    minWidth: 200,
    maxWidth: 600,
    children: <div className="p-4"><p className="text-text-primary font-medium">Panel Content</p><p className="text-text-secondary text-sm mt-2">Resize this panel by dragging the right edge.</p></div>,
  },
};

export const SidebarPanel: Story = {
  args: {
    defaultWidth: 280,
    minWidth: 180,
    maxWidth: 400,
    side: 'left',
    children: (
      <div className="p-4 space-y-4">
        <p className="text-text-primary font-semibold">Navigation</p>
        <div className="space-y-2">
          {['Dashboard', 'Portfolio', 'Markets', 'Transactions', 'Settings'].map((item) => (
            <div key={item} className="px-3 py-2 rounded-lg bg-surface-secondary text-text-primary text-sm hover:bg-surface-tertiary cursor-pointer">{item}</div>
          ))}
        </div>
      </div>
    ),
  },
};

export const RightPanel: Story = {
  args: {
    defaultWidth: 320,
    minWidth: 200,
    maxWidth: 500,
    side: 'right',
    children: <div className="p-4"><p className="text-text-primary font-semibold">Details Panel</p><p className="text-text-secondary text-sm mt-2">Activity details and transaction info.</p></div>,
  },
};

export const HorizontalResize: Story = {
  args: {
    defaultWidth: 300,
    minWidth: 150,
    maxWidth: 800,
    direction: 'horizontal',
    children: <div className="p-4"><p className="text-text-primary">Resizable horizontally</p></div>,
  },
};
