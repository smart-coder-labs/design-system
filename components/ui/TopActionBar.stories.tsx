import type { Meta, StoryObj } from '@storybook/react';
import { TopActionBar } from './TopActionBar';
import { Bell, Search, Settings, ChevronLeft } from 'lucide-react';

const meta = {
  title: 'Components/TopActionBar',
  component: TopActionBar,
  tags: ['autodocs'],
} satisfies Meta<typeof TopActionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    leftContent: <span className="font-semibold text-text-primary">Portfolio</span>,
    centerContent: <span className="text-text-secondary text-sm">$125,430.50</span>,
    rightContent: (
      <div className="flex items-center gap-2">
        <Bell className="w-5 h-5 text-text-secondary" />
        <Settings className="w-5 h-5 text-text-secondary" />
      </div>
    ),
  },
};

export const WithBackButton: Story = {
  args: {
    leftContent: (
      <div className="flex items-center gap-2">
        <ChevronLeft className="w-5 h-5 text-text-secondary cursor-pointer" />
        <span className="font-semibold text-text-primary">Settings</span>
      </div>
    ),
    rightContent: <Search className="w-5 h-5 text-text-secondary" />,
  },
};

export const GlassEffect: Story = {
  args: {
    glass: true,
    leftContent: <span className="font-semibold text-text-primary">Wallet</span>,
    centerContent: <span className="text-text-secondary text-sm">$45,230</span>,
    rightContent: <Bell className="w-5 h-5 text-text-secondary" />,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    leftContent: <span className="font-medium text-text-primary text-sm">Dashboard</span>,
    rightContent: <Settings className="w-4 h-4 text-text-secondary" />,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    leftContent: <span className="text-lg font-bold text-text-primary">Markets</span>,
    rightContent: (
      <div className="flex items-center gap-3">
        <Search className="w-5 h-5 text-text-secondary" />
        <Bell className="w-5 h-5 text-text-secondary" />
      </div>
    ),
  },
};
