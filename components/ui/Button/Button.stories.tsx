import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, ArrowLeft, Download, Plus, Share2, Trash2, Cloud, Check } from 'lucide-react';

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
    children: 'Learn More',
    variant: 'subtle',
    onClick: action('clicked'),
  },
};

export const Outline: Story = {
  args: {
    children: 'Add to Library',
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

export const Loading: Story = {
  args: {
    children: 'Processing...',
    loading: true,
    onClick: action('clicked'),
  },
};

export const Disabled: Story = {
  args: {
    children: 'Continue',
    disabled: true,
    onClick: action('clicked'),
  },
};

export const FullWidth: Story = {
  args: {
    children: 'Sign In with Apple',
    fullWidth: true,
    onClick: action('clicked'),
  },
  parameters: {
    layout: 'padded',
  },
  render: (args) => (
    <div className="w-80">
      <Button {...args} />
    </div>
  ),
};

export const WithLeftIcon: Story = {
  args: {
    children: 'Back',
    variant: 'secondary',
    leftIcon: <ArrowLeft className="w-4 h-4" />,
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

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary" leftIcon={<Download className="w-4 h-4" />} onClick={action('download')}>
        Download
      </Button>
      <Button variant="secondary" leftIcon={<Share2 className="w-4 h-4" />} onClick={action('share')}>
        Share
      </Button>
      <Button variant="ghost" leftIcon={<Plus className="w-4 h-4" />} onClick={action('add')}>
        Add Item
      </Button>
      <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />} onClick={action('delete')}>
        Delete
      </Button>
      <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />} onClick={action('next')}>
        Next
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
      <Button variant="primary" size="sm" loading>
        Saving
      </Button>
      <Button variant="secondary" size="md" loading>
        Syncing
      </Button>
      <Button variant="outline" size="lg" loading>
        Uploading
      </Button>
    </div>
  ),
};

export const DialogActions: Story = {
  render: () => (
    <div className="w-80 p-5 bg-surface-primary rounded-2xl border border-border-primary">
      <h3 className="text-base font-semibold text-text-primary">Move to iCloud Drive?</h3>
      <p className="mt-1 text-sm text-text-secondary">
        Your files will be available on all of your devices.
      </p>
      <div className="mt-5 flex justify-end gap-2">
        <Button variant="ghost" size="sm" onClick={action('cancel')}>
          Cancel
        </Button>
        <Button variant="primary" size="sm" leftIcon={<Cloud className="w-4 h-4" />} onClick={action('move')}>
          Move
        </Button>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    children: 'Get Started',
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
      description: 'Visual style of the button',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Height, padding and font size',
    },
    loading: {
      control: 'boolean',
      description: 'Shows a spinner and disables interaction',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretches the button to fill its container',
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
  },
};

export const Confirmation: Story = {
  render: () => (
    <Button variant="primary" leftIcon={<Check className="w-4 h-4" />} onClick={action('confirm')}>
      Done
    </Button>
  ),
};
