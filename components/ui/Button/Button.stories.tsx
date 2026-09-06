import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, Check, Download, Plus, Trash2, Settings } from 'lucide-react';

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
      <Button fullWidth onClick={action('clicked')}>
        Sign in
      </Button>
    </div>
  ),
};

export const WithLeftIcon: Story = {
  args: {
    children: 'New project',
    leftIcon: <Plus className="w-4 h-4" />,
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

export const IconOnly: Story = {
  args: {
    'aria-label': 'Settings',
    leftIcon: <Settings className="w-4 h-4" />,
    variant: 'secondary',
    onClick: action('clicked'),
  },
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

export const DialogFooter: Story = {
  render: () => (
    <div className="w-96 p-5 bg-surface-primary rounded-2xl border border-border-primary">
      <h3 className="text-base font-semibold text-text-primary">Save changes?</h3>
      <p className="mt-1 text-sm text-text-secondary">
        Your edits to this workspace will be applied immediately for every member.
      </p>
      <div className="mt-5 flex justify-end gap-2">
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

export const DangerZone: Story = {
  render: () => (
    <div className="w-96 p-5 bg-surface-primary rounded-2xl border border-border-primary">
      <h3 className="text-base font-semibold text-text-primary">Danger zone</h3>
      <p className="mt-1 text-sm text-text-secondary">
        Export your data before removing this project. This action cannot be undone.
      </p>
      <div className="mt-5 flex gap-2">
        <Button
          variant="outline"
          leftIcon={<Download className="w-4 h-4" />}
          onClick={action('export')}
        >
          Export data
        </Button>
        <Button
          variant="destructive"
          leftIcon={<Trash2 className="w-4 h-4" />}
          onClick={action('delete')}
        >
          Delete project
        </Button>
      </div>
    </div>
  ),
};
