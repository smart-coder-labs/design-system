import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, Check, Download, Plus, Search, Settings, Share2, Trash2 } from 'lucide-react';

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
    children: 'Disabled',
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
    children: 'Next',
    rightIcon: <ArrowRight className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

export const WithBothIcons: Story = {
  args: {
    children: 'Search',
    variant: 'secondary',
    leftIcon: <Search className="w-4 h-4" />,
    rightIcon: <ArrowRight className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

export const IconOnly: Story = {
  args: {
    'aria-label': 'Settings',
    variant: 'secondary',
    leftIcon: <Settings className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

/* ========================================
   LAYOUT
   ======================================== */

export const FullWidth: Story = {
  render: () => (
    <div className="w-80 flex flex-col gap-3">
      <Button fullWidth onClick={action('sign-in')}>
        Sign In
      </Button>
      <Button fullWidth variant="secondary" onClick={action('create-account')}>
        Create Account
      </Button>
    </div>
  ),
};

/* ========================================
   REAL-WORLD USE CASE
   ======================================== */

export const DialogFooter: Story = {
  render: () => (
    <div className="w-96 p-6 bg-surface-primary rounded-2xl border border-border-primary shadow-md">
      <h3 className="text-lg font-semibold text-text-primary">Delete project</h3>
      <p className="mt-2 text-sm text-text-secondary">
        This will permanently remove the project and all of its files. This action cannot be undone.
      </p>
      <div className="mt-6 flex justify-end gap-3">
        <Button variant="ghost" onClick={action('cancel')}>
          Cancel
        </Button>
        <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />} onClick={action('delete')}>
          Delete
        </Button>
      </div>
    </div>
  ),
};

export const Toolbar: Story = {
  render: () => (
    <div className="flex items-center gap-2 p-2 bg-surface-primary rounded-xl border border-border-primary">
      <Button size="sm" leftIcon={<Plus className="w-3 h-3" />} onClick={action('new')}>
        New
      </Button>
      <Button size="sm" variant="subtle" leftIcon={<Share2 className="w-3 h-3" />} onClick={action('share')}>
        Share
      </Button>
      <Button size="sm" variant="ghost" leftIcon={<Check className="w-3 h-3" />} onClick={action('save')}>
        Save
      </Button>
    </div>
  ),
};

/* ========================================
   PLAYGROUND
   ======================================== */

export const Playground: Story = {
  args: {
    children: 'Playground',
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    fullWidth: false,
    onClick: action('clicked'),
  },
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
};
