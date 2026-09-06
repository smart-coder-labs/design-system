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

export const Secondary: Story = {
  args: {
    children: 'Back',
    onClick: action('clicked'),
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    children: 'Cancel',
    onClick: action('clicked'),
    variant: 'ghost',
  },
};

export const Subtle: Story = {
  args: {
    children: 'Learn More',
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
    children: 'Small',
    onClick: action('clicked'),
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    onClick: action('clicked'),
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    onClick: action('clicked'),
    size: 'lg',
  },
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Download',
    onClick: action('clicked'),
    leftIcon: <Download className="w-4 h-4" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: 'Next',
    onClick: action('clicked'),
    rightIcon: <ArrowRight className="w-4 h-4" />,
  },
};

export const IconOnly: Story = {
  args: {
    onClick: action('clicked'),
    leftIcon: <Plus className="w-4 h-4" />,
    'aria-label': 'Add item',
  },
};

export const Loading: Story = {
  args: {
    children: 'Processing...',
    onClick: action('clicked'),
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Unavailable',
    onClick: action('clicked'),
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Sign In',
    onClick: action('clicked'),
    fullWidth: true,
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
      <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />} onClick={action('destructive')}>Destructive</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm" onClick={action('sm')}>Small</Button>
      <Button size="md" onClick={action('md')}>Medium</Button>
      <Button size="lg" leftIcon={<Check className="w-5 h-5" />} onClick={action('lg')}>Large</Button>
    </div>
  ),
};
