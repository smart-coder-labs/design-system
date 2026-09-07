import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, Check, Download, Plus, Send, Settings, Trash2 } from 'lucide-react';

const meta = {
  title: 'Buttons/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Continue',
    onClick: action('clicked'),
  },
};

export const Primary: Story = {
  args: {
    children: 'Continue',
    onClick: action('clicked'),
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Go Back',
    onClick: action('clicked'),
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Learn More',
    onClick: action('clicked'),
    variant: 'ghost',
  },
};

export const Subtle: Story = {
  args: {
    children: 'Skip for now',
    onClick: action('clicked'),
    variant: 'subtle',
  },
};

export const Outline: Story = {
  args: {
    children: 'View Details',
    onClick: action('clicked'),
    variant: 'outline',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete Account',
    onClick: action('clicked'),
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    children: 'Save',
    onClick: action('clicked'),
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Save Changes',
    onClick: action('clicked'),
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Confirm Payment',
    onClick: action('clicked'),
    size: 'lg',
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

export const Loading: Story = {
  args: {
    children: 'Processing',
    onClick: action('clicked'),
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Continue',
    onClick: action('clicked'),
    disabled: true,
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Send Money',
    onClick: action('clicked'),
    leftIcon: <Send className="w-4 h-4" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Next Step',
    onClick: action('clicked'),
    rightIcon: <ArrowRight className="w-4 h-4" />,
  },
};

export const IconOnly: Story = {
  args: {
    'aria-label': 'Open settings',
    onClick: action('clicked'),
    variant: 'secondary',
    leftIcon: <Settings className="w-4 h-4" />,
  },
};

export const FullWidth: Story = {
  render: (args) => (
    <div className="w-80">
      <Button {...args} />
    </div>
  ),
  args: {
    children: 'Confirm $250.00 Payment',
    onClick: action('clicked'),
    fullWidth: true,
    leftIcon: <Check className="w-4 h-4" />,
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

export const FormActions: Story = {
  render: () => (
    <div className="w-96 p-5 space-y-4 bg-surface-primary rounded-2xl border border-border-primary">
      <div className="space-y-1">
        <p className="text-base font-semibold text-text-primary">Profile settings</p>
        <p className="text-sm text-text-secondary">
          Changes are applied to every device signed in to your account.
        </p>
      </div>
      <div className="flex items-center justify-end gap-2 pt-2 border-t border-border-primary">
        <Button variant="ghost" onClick={action('cancel')}>
          Cancel
        </Button>
        <Button variant="primary" leftIcon={<Check className="w-4 h-4" />} onClick={action('save')}>
          Save Changes
        </Button>
      </div>
    </div>
  ),
};

export const ToolbarActions: Story = {
  render: () => (
    <div className="flex items-center gap-2 p-2 bg-surface-primary rounded-xl border border-border-primary">
      <Button size="sm" variant="primary" leftIcon={<Plus className="w-3.5 h-3.5" />} onClick={action('create')}>
        New
      </Button>
      <Button size="sm" variant="outline" leftIcon={<Download className="w-3.5 h-3.5" />} onClick={action('export')}>
        Export
      </Button>
      <Button size="sm" variant="destructive" leftIcon={<Trash2 className="w-3.5 h-3.5" />} onClick={action('delete')}>
        Delete
      </Button>
    </div>
  ),
};
