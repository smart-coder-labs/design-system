import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconButton } from './IconButton';
import { action } from 'storybook/actions';
import { Bell, Settings, Search, X, Plus, Trash2, Heart, Share2, Edit, MoreHorizontal, ArrowLeft, CreditCard } from 'lucide-react';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Bell className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

export const Primary: Story = {
  args: {
    icon: <Settings className="w-4 h-4" />,
    onClick: action('clicked'),
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    icon: <Search className="w-4 h-4" />,
    onClick: action('clicked'),
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    icon: <X className="w-4 h-4" />,
    onClick: action('clicked'),
    variant: 'ghost',
  },
};

export const Danger: Story = {
  args: {
    icon: <Trash2 className="w-4 h-4" />,
    onClick: action('clicked'),
    variant: 'danger',
  },
};

export const Small: Story = {
  args: {
    icon: <Plus className="w-3 h-3" />,
    onClick: action('clicked'),
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    icon: <Heart className="w-5 h-5" />,
    onClick: action('clicked'),
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    icon: <Share2 className="w-4 h-4" />,
    onClick: action('clicked'),
    disabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    icon: <Edit className="w-4 h-4" />,
    label: 'Edit',
    onClick: action('clicked'),
  },
};

export const ActionRow: Story = {
  render: () => (
    <div className="flex items-center gap-2 p-2 bg-surface-primary rounded-xl border border-border-primary">
      <IconButton icon={<ArrowLeft className="w-4 h-4" />} variant="ghost" onClick={action('back')} />
      <span className="flex-1 text-sm font-semibold text-text-primary text-center">Transaction Details</span>
      <IconButton icon={<Heart className="w-4 h-4" />} variant="ghost" onClick={action('favorite')} />
      <IconButton icon={<MoreHorizontal className="w-4 h-4" />} variant="ghost" onClick={action('more')} />
    </div>
  ),
};

export const NotificationButton: Story = {
  render: () => (
    <div className="relative">
      <IconButton icon={<Bell className="w-4 h-4" />} variant="ghost" onClick={action('notifications')} />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-status-error text-white text-xs font-bold rounded-full flex items-center justify-center">
        3
      </span>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-3">
      <IconButton icon={<CreditCard className="w-4 h-4" />} variant="primary" onClick={action('primary')} />
      <IconButton icon={<CreditCard className="w-4 h-4" />} variant="secondary" onClick={action('secondary')} />
      <IconButton icon={<CreditCard className="w-4 h-4" />} variant="ghost" onClick={action('ghost')} />
      <IconButton icon={<Trash2 className="w-4 h-4" />} variant="danger" onClick={action('danger')} />
    </div>
  ),
};
