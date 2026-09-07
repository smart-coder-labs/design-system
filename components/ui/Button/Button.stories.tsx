import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, Check, Download, Plus, Trash2, Send, Settings } from 'lucide-react';

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
    children: 'Delete account',
    variant: 'destructive',
    onClick: action('clicked'),
  },
};

/* ========================================
   SIZES
   ======================================== */

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
    onClick: action('clicked'),
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'md',
    onClick: action('clicked'),
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
    onClick: action('clicked'),
  },
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

export const FullWidth: Story = {
  render: () => (
    <div className="w-80">
      <Button variant="primary" fullWidth onClick={action('clicked')}>
        Sign In
      </Button>
    </div>
  ),
};

/* ========================================
   ICONS
   ======================================== */

export const WithLeftIcon: Story = {
  args: {
    children: 'Download',
    leftIcon: <Download className="w-4 h-4" />,
    variant: 'secondary',
    onClick: action('clicked'),
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Continue',
    rightIcon: <ArrowRight className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Send message',
    leftIcon: <Send className="w-4 h-4" />,
    rightIcon: <ArrowRight className="w-4 h-4" />,
    variant: 'outline',
    onClick: action('clicked'),
  },
};

export const IconOnly: Story = {
  args: {
    leftIcon: <Settings className="w-4 h-4" />,
    'aria-label': 'Open settings',
    variant: 'ghost',
    onClick: action('clicked'),
  },
};

/* ========================================
   COMPOSITION / REAL WORLD
   ======================================== */

export const FormActions: Story = {
  render: () => (
    <div className="flex items-center justify-end gap-3 p-4 bg-surface-primary rounded-xl border border-border-primary">
      <Button variant="ghost" onClick={action('cancel')}>
        Cancel
      </Button>
      <Button variant="primary" leftIcon={<Check className="w-4 h-4" />} onClick={action('save')}>
        Save changes
      </Button>
    </div>
  ),
};

export const DestructiveConfirm: Story = {
  render: () => (
    <div className="flex flex-col gap-3 w-80 p-4 bg-surface-primary rounded-xl border border-border-primary">
      <p className="text-sm text-text-secondary">
        This will permanently remove the project and all of its data.
      </p>
      <div className="flex gap-2">
        <Button variant="outline" fullWidth onClick={action('cancel')}>
          Keep it
        </Button>
        <Button
          variant="destructive"
          fullWidth
          leftIcon={<Trash2 className="w-4 h-4" />}
          onClick={action('delete')}
        >
          Delete
        </Button>
      </div>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="primary" loading size="sm" onClick={action('sm')}>
        Small
      </Button>
      <Button variant="primary" loading onClick={action('md')}>
        Medium
      </Button>
      <Button variant="primary" loading size="lg" onClick={action('lg')}>
        Large
      </Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm" leftIcon={<Plus className="w-3 h-3" />} onClick={action('sm')}>
        Small
      </Button>
      <Button size="md" leftIcon={<Plus className="w-4 h-4" />} onClick={action('md')}>
        Medium
      </Button>
      <Button size="lg" leftIcon={<Plus className="w-5 h-5" />} onClick={action('lg')}>
        Large
      </Button>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-3 gap-3">
      <Button variant="primary" onClick={action('primary')}>
        Primary
      </Button>
      <Button variant="secondary" onClick={action('secondary')}>
        Secondary
      </Button>
      <Button variant="ghost" onClick={action('ghost')}>
        Ghost
      </Button>
      <Button variant="subtle" onClick={action('subtle')}>
        Subtle
      </Button>
      <Button variant="outline" onClick={action('outline')}>
        Outline
      </Button>
      <Button variant="destructive" onClick={action('destructive')}>
        Destructive
      </Button>
    </div>
  ),
};
