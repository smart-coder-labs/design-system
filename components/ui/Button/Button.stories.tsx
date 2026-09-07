import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, Download, Plus, Trash2, Check, Settings } from 'lucide-react';

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

export const Disabled: Story = {
  args: {
    children: 'Unavailable',
    disabled: true,
    onClick: action('clicked'),
  },
};

export const Loading: Story = {
  args: {
    children: 'Processing...',
    loading: true,
    onClick: action('clicked'),
  },
};

/* ========================================
   ICONS
   ======================================== */

export const WithLeftIcon: Story = {
  args: {
    children: 'Download',
    leftIcon: <Download className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Next step',
    rightIcon: <ArrowRight className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Save changes',
    variant: 'secondary',
    leftIcon: <Check className="w-4 h-4" />,
    rightIcon: <ArrowRight className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

export const IconOnly: Story = {
  args: {
    'aria-label': 'Open settings',
    variant: 'outline',
    leftIcon: <Settings className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

/* ========================================
   LAYOUT
   ======================================== */

export const FullWidth: Story = {
  render: () => (
    <div className="w-80 p-4 bg-surface-primary border border-border-primary rounded-xl">
      <Button fullWidth onClick={action('clicked')}>
        Sign in
      </Button>
    </div>
  ),
};

/* ========================================
   COMPOSITE
   ======================================== */

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

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm" onClick={action('sm')}>
        Small
      </Button>
      <Button size="md" onClick={action('md')}>
        Medium
      </Button>
      <Button size="lg" onClick={action('lg')}>
        Large
      </Button>
    </div>
  ),
};

export const FormActions: Story = {
  render: () => (
    <div className="w-96 p-5 bg-surface-primary border border-border-primary rounded-xl">
      <h3 className="text-base font-semibold text-text-primary">Profile settings</h3>
      <p className="mt-1 text-sm text-text-secondary">
        Update your display name and notification preferences.
      </p>
      <div className="mt-5 flex justify-end gap-3">
        <Button variant="ghost" onClick={action('cancel')}>
          Cancel
        </Button>
        <Button variant="primary" leftIcon={<Check className="w-4 h-4" />} onClick={action('save')}>
          Save
        </Button>
      </div>
    </div>
  ),
};

export const DestructiveConfirmation: Story = {
  render: () => (
    <div className="w-96 p-5 bg-surface-primary border border-border-primary rounded-xl">
      <h3 className="text-base font-semibold text-text-primary">Delete workspace</h3>
      <p className="mt-1 text-sm text-text-secondary">
        This action is permanent and cannot be undone.
      </p>
      <div className="mt-5 flex gap-3">
        <Button variant="outline" fullWidth onClick={action('keep')}>
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

/* ========================================
   PLAYGROUND
   ======================================== */

export const Playground: Story = {
  args: {
    children: 'Add item',
    variant: 'primary',
    size: 'md',
    loading: false,
    fullWidth: false,
    disabled: false,
    leftIcon: <Plus className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};
