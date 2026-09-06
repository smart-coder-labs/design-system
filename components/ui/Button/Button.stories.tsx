import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { Plus, Trash2, ArrowRight, Download, Check } from 'lucide-react';

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
      table: { defaultValue: { summary: 'primary' } },
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Height, padding and font size of the button',
      table: { defaultValue: { summary: 'md' } },
    },
    loading: {
      control: 'boolean',
      description: 'Shows a spinner and disables the button',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Stretches the button to fill its container',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
    children: {
      control: 'text',
      description: 'Button label',
    },
    leftIcon: { control: false },
    rightIcon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   BASE
   ======================================== */

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
    <div className="flex flex-wrap items-center justify-center gap-3">
      <Button variant="primary" onClick={action('primary')}>Primary</Button>
      <Button variant="secondary" onClick={action('secondary')}>Secondary</Button>
      <Button variant="ghost" onClick={action('ghost')}>Ghost</Button>
      <Button variant="subtle" onClick={action('subtle')}>Subtle</Button>
      <Button variant="outline" onClick={action('outline')}>Outline</Button>
      <Button variant="destructive" onClick={action('destructive')}>Destructive</Button>
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
      <Button size="sm" onClick={action('sm')}>Small</Button>
      <Button size="md" onClick={action('md')}>Medium</Button>
      <Button size="lg" onClick={action('lg')}>Large</Button>
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
    children: 'Add item',
    leftIcon: <Plus className="w-4 h-4" />,
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

export const IconOnly: Story = {
  args: {
    leftIcon: <Trash2 className="w-4 h-4" />,
    variant: 'destructive',
    'aria-label': 'Delete item',
    onClick: action('clicked'),
  },
};

/* ========================================
   LAYOUT
   ======================================== */

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
   PLAYGROUND
   ======================================== */

export const Playground: Story = {
  args: {
    children: 'Download',
    variant: 'primary',
    size: 'md',
    loading: false,
    fullWidth: false,
    disabled: false,
    leftIcon: <Download className="w-4 h-4" />,
    rightIcon: <Check className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};
