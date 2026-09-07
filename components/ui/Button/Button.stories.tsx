import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, Download, Plus, Trash2 } from 'lucide-react';

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
    children: 'Button',
    onClick: action('clicked'),
  },
};

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
    children: 'Saving',
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

export const WithLeftIcon: Story = {
  args: {
    children: 'Download',
    leftIcon: <Download className="w-4 h-4" />,
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
    leftIcon: <Plus className="w-4 h-4" />,
    'aria-label': 'Add item',
    onClick: action('clicked'),
  },
};

export const FullWidth: Story = {
  render: () => (
    <div className="w-80">
      <Button fullWidth onClick={action('clicked')}>
        Continue
      </Button>
    </div>
  ),
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
      <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />} onClick={action('destructive')}>
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
    <div className="w-80 p-4 bg-surface-primary rounded-xl border border-border-primary">
      <p className="text-sm font-semibold text-text-primary">Profile settings</p>
      <p className="mt-1 text-xs text-text-secondary">Update your account details and save the changes.</p>
      <div className="mt-4 flex justify-end gap-2">
        <Button variant="secondary" onClick={action('cancel')}>
          Cancel
        </Button>
        <Button variant="primary" onClick={action('save')}>
          Save
        </Button>
      </div>
    </div>
  ),
};
