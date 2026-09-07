import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { ArrowRight, Download } from 'lucide-react';

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
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Continue',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Back',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Cancel',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
    children: 'Learn more',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Preview',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete account',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Download className="w-4 h-4" />,
    children: 'Download',
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'secondary',
    rightIcon: <ArrowRight className="w-4 h-4" />,
    children: 'Next step',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Processing...',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Unavailable',
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Sign In',
  },
  render: (args) => (
    <div className="w-80">
      <Button {...args} />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="subtle">Subtle</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
