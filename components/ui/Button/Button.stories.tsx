import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { Bell, ArrowRight, Download, Plus, Trash2 } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'ghost', 'subtle', 'outline', 'destructive'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    loading: { control: { type: 'boolean' } },
    fullWidth: { control: { type: 'boolean' } },
    disabled: { control: { type: 'boolean' } },
  },
  args: {
    children: 'Button',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   VARIANTS
   ======================================== */

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete',
  },
};

/* ========================================
   SIZES
   ======================================== */

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

/* ========================================
   STATES
   ======================================== */

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Processing...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const FullWidth: Story = {
  parameters: {
    layout: 'padded',
  },
  args: {
    fullWidth: true,
    children: 'Sign In',
  },
};

/* ========================================
   ICONS
   ======================================== */

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Download className="w-4 h-4" />,
    children: 'Download',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <ArrowRight className="w-4 h-4" />,
    children: 'Continue',
  },
};

export const IconOnly: Story = {
  args: {
    children: undefined,
    leftIcon: <Bell className="w-4 h-4" />,
    'aria-label': 'Notifications',
  },
};

/* ========================================
   SHOWCASES
   ======================================== */

export const AllVariants: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />}>
        Destructive
      </Button>
    </div>
  ),
};

export const AllSizes: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button size="sm" leftIcon={<Plus className="w-3 h-3" />}>
        Small
      </Button>
      <Button size="md" leftIcon={<Plus className="w-4 h-4" />}>
        Medium
      </Button>
      <Button size="lg" leftIcon={<Plus className="w-5 h-5" />}>
        Large
      </Button>
    </div>
  ),
};
