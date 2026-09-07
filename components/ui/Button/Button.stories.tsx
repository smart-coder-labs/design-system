import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, Check, Download, Plus, Trash2 } from 'lucide-react';

const meta: Meta<typeof Button> = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Continue',
    onClick: action('clicked'),
  },
};

/* ========================================
   VARIANTS
   ======================================== */

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
    onClick: action('clicked'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
    onClick: action('clicked'),
  },
};

export const Ghost: Story = {
  args: {
    children: 'Ghost',
    variant: 'ghost',
    onClick: action('clicked'),
  },
};

export const Subtle: Story = {
  args: {
    children: 'Subtle',
    variant: 'subtle',
    onClick: action('clicked'),
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
    onClick: action('clicked'),
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete',
    variant: 'destructive',
    onClick: action('clicked'),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" onClick={action('primary')}>Primary</Button>
      <Button variant="secondary" onClick={action('secondary')}>Secondary</Button>
      <Button variant="ghost" onClick={action('ghost')}>Ghost</Button>
      <Button variant="subtle" onClick={action('subtle')}>Subtle</Button>
      <Button variant="outline" onClick={action('outline')}>Outline</Button>
      <Button variant="destructive" onClick={action('destructive')}>Destructive</Button>
    </div>
  ),
};

/* ========================================
   SIZES
   ======================================== */

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm" onClick={action('sm')}>Small</Button>
      <Button size="md" onClick={action('md')}>Medium</Button>
      <Button size="lg" onClick={action('lg')}>Large</Button>
    </div>
  ),
};

/* ========================================
   STATES
   ======================================== */

export const Loading: Story = {
  args: {
    children: 'Processing...',
    loading: true,
    onClick: action('clicked'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Unavailable',
    disabled: true,
    onClick: action('clicked'),
  },
};

/* ========================================
   ICONS
   ======================================== */

export const WithLeftIcon: Story = {
  args: {
    children: 'Add item',
    leftIcon: <Plus className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Next',
    rightIcon: <ArrowRight className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Download',
    leftIcon: <Download className="w-4 h-4" />,
    rightIcon: <ArrowRight className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

export const IconOnly: Story = {
  args: {
    'aria-label': 'Delete item',
    variant: 'destructive',
    leftIcon: <Trash2 className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

/* ========================================
   LAYOUT
   ======================================== */

export const FullWidth: Story = {
  render: () => (
    <div className="w-80 p-4 rounded-xl bg-surface-primary border border-border-primary">
      <p className="mb-3 text-sm text-text-primary">Ready to continue?</p>
      <Button variant="primary" fullWidth leftIcon={<Check className="w-4 h-4" />} onClick={action('clicked')}>
        Confirm
      </Button>
    </div>
  ),
};

/* ========================================
   PLAYGROUND
   ======================================== */

export const Playground: Story = {
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'subtle', 'outline', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  args: {
    children: 'Playground',
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    fullWidth: false,
    onClick: action('clicked'),
  },
};
