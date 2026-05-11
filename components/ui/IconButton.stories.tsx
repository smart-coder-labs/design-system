import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { IconButton } from './IconButton';
import { Heart, Settings, Trash2, Bell, Pen, Share2 } from 'lucide-react';

const meta: Meta<typeof IconButton> = {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Heart,
    'aria-label': 'Like',
  },
};

export const Primary: Story = {
  args: {
    icon: Settings,
    variant: 'primary',
    'aria-label': 'Settings',
  },
};

export const Tertiary: Story = {
  args: {
    icon: Bell,
    variant: 'tertiary',
    'aria-label': 'Notifications',
  },
};

export const Ghost: Story = {
  args: {
    icon: Share2,
    variant: 'ghost',
    'aria-label': 'Share',
  },
};

export const Danger: Story = {
  args: {
    icon: Trash2,
    variant: 'danger',
    'aria-label': 'Delete',
  },
};

export const Loading: Story = {
  args: {
    icon: Pen,
    isLoading: true,
    'aria-label': 'Edit',
  },
};

export const WithTooltip: Story = {
  args: {
    icon: Settings,
    tooltip: 'Open settings',
    'aria-label': 'Settings',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton icon={Heart} size="xs" aria-label="xs" />
      <IconButton icon={Heart} size="sm" aria-label="sm" />
      <IconButton icon={Heart} size="md" aria-label="md" />
      <IconButton icon={Heart} size="lg" aria-label="lg" />
      <IconButton icon={Heart} size="xl" aria-label="xl" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    icon: Trash2,
    disabled: true,
    'aria-label': 'Delete',
  },
};
