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
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'subtle', 'outline', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    loading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
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

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-center gap-2">
        <Button variant="primary" onClick={action('primary')}>Primary</Button>
        <span className="text-xs text-text-secondary">primary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="secondary" onClick={action('secondary')}>Secondary</Button>
        <span className="text-xs text-text-secondary">secondary</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="ghost" onClick={action('ghost')}>Ghost</Button>
        <span className="text-xs text-text-secondary">ghost</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="subtle" onClick={action('subtle')}>Subtle</Button>
        <span className="text-xs text-text-secondary">subtle</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="outline" onClick={action('outline')}>Outline</Button>
        <span className="text-xs text-text-secondary">outline</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Button variant="destructive" onClick={action('destructive')}>Destructive</Button>
        <span className="text-xs text-text-secondary">destructive</span>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm" onClick={action('sm')}>Small</Button>
      <Button size="md" onClick={action('md')}>Medium</Button>
      <Button size="lg" onClick={action('lg')}>Large</Button>
    </div>
  ),
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
    children: 'Next step',
    rightIcon: <ArrowRight className="w-4 h-4" />,
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
      <Button fullWidth onClick={action('clicked')}>Sign In</Button>
    </div>
  ),
};

export const IconOnly: Story = {
  args: {
    'aria-label': 'Delete item',
    variant: 'destructive',
    leftIcon: <Trash2 className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};

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
