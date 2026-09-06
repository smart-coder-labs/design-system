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
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'subtle', 'outline', 'destructive'],
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Height, padding and font size of the button',
    },
    loading: {
      control: 'boolean',
      description: 'Replaces the content with a spinner and disables the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretches the button to fill its container',
    },
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
    children: 'Continue',
    variant: 'primary',
    onClick: action('clicked'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Go back',
    variant: 'secondary',
    onClick: action('clicked'),
  },
};

export const Ghost: Story = {
  args: {
    children: 'Cancel',
    variant: 'ghost',
    onClick: action('clicked'),
  },
};

export const Subtle: Story = {
  args: {
    children: 'Learn more',
    variant: 'subtle',
    onClick: action('clicked'),
  },
};

export const Outline: Story = {
  args: {
    children: 'Preview',
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
   STATES & FEATURES
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
    children: 'Next step',
    rightIcon: <ArrowRight className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Sign in',
    fullWidth: true,
    onClick: action('clicked'),
  },
  render: (args) => (
    <div className="w-80">
      <Button {...args} />
    </div>
  ),
};

/* ========================================
   COMPOSITES
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

export const DialogActions: Story = {
  render: () => (
    <div className="w-96 p-6 bg-surface-primary rounded-2xl border border-border-primary">
      <h3 className="text-lg font-semibold text-text-primary">Delete workspace</h3>
      <p className="mt-2 text-sm text-text-secondary">
        This will permanently remove the workspace and all of its projects. This action cannot be
        undone.
      </p>
      <div className="mt-6 flex justify-end gap-2">
        <Button variant="ghost" onClick={action('cancel')}>
          Cancel
        </Button>
        <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />} onClick={action('confirm-delete')}>
          Delete
        </Button>
      </div>
    </div>
  ),
};

export const FormActions: Story = {
  render: () => (
    <div className="w-96 p-6 bg-surface-primary rounded-2xl border border-border-primary">
      <h3 className="text-lg font-semibold text-text-primary">New payment method</h3>
      <p className="mt-2 text-sm text-text-secondary">
        Add a card to start sending and receiving payments.
      </p>
      <div className="mt-6 flex gap-2">
        <Button variant="primary" leftIcon={<Plus className="w-4 h-4" />} fullWidth onClick={action('add-card')}>
          Add card
        </Button>
        <Button variant="secondary" rightIcon={<Check className="w-4 h-4" />} onClick={action('done')}>
          Done
        </Button>
      </div>
    </div>
  ),
};
