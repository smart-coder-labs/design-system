import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, Download, Plus, Trash2, Check, Share2 } from 'lucide-react';

const meta = {
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
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Button>;

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
    children: 'Continue',
    variant: 'primary',
    onClick: action('clicked'),
  },
};

export const Secondary: Story = {
  args: {
    children: 'Learn More',
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
    children: 'Skip for now',
    variant: 'subtle',
    onClick: action('clicked'),
  },
};

export const Outline: Story = {
  args: {
    children: 'Add to Cart',
    variant: 'outline',
    onClick: action('clicked'),
  },
};

export const Destructive: Story = {
  args: {
    children: 'Delete Account',
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
    children: 'Unavailable',
    disabled: true,
    onClick: action('clicked'),
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Continue',
    fullWidth: true,
    onClick: action('clicked'),
  },
  parameters: {
    layout: 'padded',
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Add Item',
    leftIcon: <Plus className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Next Step',
    rightIcon: <ArrowRight className="w-4 h-4" />,
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

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm" onClick={action('sm')}>Small</Button>
      <Button size="md" onClick={action('md')}>Medium</Button>
      <Button size="lg" onClick={action('lg')}>Large</Button>
    </div>
  ),
};

export const FormActions: Story = {
  render: () => (
    <div className="w-80 p-5 bg-surface-primary rounded-2xl border border-border-primary">
      <h3 className="text-base font-semibold text-text-primary">Update profile</h3>
      <p className="mt-1 text-sm text-text-secondary">
        Your changes will be visible to everyone on your team.
      </p>
      <div className="mt-5 flex justify-end gap-3">
        <Button variant="ghost" onClick={action('cancel')}>Cancel</Button>
        <Button variant="primary" leftIcon={<Check className="w-4 h-4" />} onClick={action('submit')}>
          Save Changes
        </Button>
      </div>
    </div>
  ),
};

export const DangerZone: Story = {
  render: () => (
    <div className="w-80 p-5 bg-surface-primary rounded-2xl border border-border-primary">
      <h3 className="text-base font-semibold text-text-primary">Danger zone</h3>
      <p className="mt-1 text-sm text-text-secondary">
        Deleting this project cannot be undone.
      </p>
      <div className="mt-5 flex flex-col gap-3">
        <Button variant="outline" leftIcon={<Download className="w-4 h-4" />} fullWidth onClick={action('export')}>
          Export Data
        </Button>
        <Button variant="subtle" leftIcon={<Share2 className="w-4 h-4" />} fullWidth onClick={action('transfer')}>
          Transfer Ownership
        </Button>
        <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />} fullWidth onClick={action('delete')}>
          Delete Project
        </Button>
      </div>
    </div>
  ),
};
