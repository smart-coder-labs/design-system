import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, Check, Download, Plus, Trash2, Save, X, Share2 } from 'lucide-react';

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
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
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
    children: 'Back',
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
    children: 'Download',
    leftIcon: <Download className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Next step',
    rightIcon: <ArrowRight className="w-4 h-4" />,
    variant: 'secondary',
    onClick: action('clicked'),
  },
};

export const IconOnly: Story = {
  args: {
    leftIcon: <Plus className="w-4 h-4" />,
    'aria-label': 'Add item',
    className: 'px-0 w-10',
    onClick: action('clicked'),
  },
};

/* ========================================
   LAYOUT
   ======================================== */

export const FullWidth: Story = {
  render: () => (
    <div className="w-80">
      <Button fullWidth onClick={action('sign in')}>
        Sign In
      </Button>
    </div>
  ),
};

/* ========================================
   SHOWCASES
   ======================================== */

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-3 flex-wrap">
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

export const LoadingStates: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button variant="primary" loading aria-label="Saving">
        Saving
      </Button>
      <Button variant="secondary" loading aria-label="Syncing">
        Syncing
      </Button>
      <Button variant="destructive" loading aria-label="Deleting">
        Deleting
      </Button>
    </div>
  ),
};

/* ========================================
   REAL-WORLD USE CASES
   ======================================== */

export const DialogFooter: Story = {
  render: () => (
    <div className="w-96 p-5 bg-surface-primary rounded-2xl border border-border-primary">
      <h3 className="text-base font-semibold text-text-primary">Delete transaction</h3>
      <p className="mt-1 text-sm text-text-secondary">
        This action cannot be undone. The transaction will be permanently removed from your records.
      </p>
      <div className="mt-5 flex items-center justify-end gap-3">
        <Button variant="ghost" leftIcon={<X className="w-4 h-4" />} onClick={action('cancel')}>
          Cancel
        </Button>
        <Button
          variant="destructive"
          leftIcon={<Trash2 className="w-4 h-4" />}
          onClick={action('delete')}
        >
          Delete
        </Button>
      </div>
    </div>
  ),
};

export const FormSubmitRow: Story = {
  render: () => (
    <div className="w-96 p-5 bg-surface-primary rounded-2xl border border-border-primary">
      <label className="block text-sm font-medium text-text-primary" htmlFor="workspace-name">
        Workspace name
      </label>
      <input
        id="workspace-name"
        defaultValue="Acme Inc."
        className="mt-2 w-full h-10 px-3 rounded-xl bg-surface-secondary border border-border-primary text-base text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
      />
      <p className="mt-2 text-xs text-text-secondary">Visible to everyone on your team.</p>
      <div className="mt-5 flex items-center gap-3">
        <Button
          variant="primary"
          leftIcon={<Save className="w-4 h-4" />}
          onClick={action('save changes')}
        >
          Save changes
        </Button>
        <Button variant="outline" onClick={action('discard')}>
          Discard
        </Button>
      </div>
    </div>
  ),
};

export const ToolbarActions: Story = {
  render: () => (
    <div className="flex items-center gap-3 p-3 bg-surface-primary rounded-xl border border-border-primary">
      <Button size="sm" variant="primary" leftIcon={<Check className="w-3 h-3" />} onClick={action('approve')}>
        Approve
      </Button>
      <Button size="sm" variant="secondary" leftIcon={<Share2 className="w-3 h-3" />} onClick={action('share')}>
        Share
      </Button>
      <Button size="sm" variant="ghost" leftIcon={<Download className="w-3 h-3" />} onClick={action('export')}>
        Export
      </Button>
    </div>
  ),
};
