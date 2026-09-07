import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { action } from 'storybook/actions';
import { ArrowRight, Check, Download, Plus, Trash2 } from 'lucide-react';

import { Button } from './Button';
import type { ButtonSize, ButtonVariant } from './Button.types';

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
      options: [
        'primary',
        'secondary',
        'ghost',
        'subtle',
        'outline',
        'destructive',
      ] satisfies ButtonVariant[],
      description: 'Visual style of the button.',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'] satisfies ButtonSize[],
      description: 'Control height, padding and text size.',
    },
  },
  args: {
    children: 'Continue',
    onClick: action('clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/* ========================================
   BASE
   ======================================== */

export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Continue',
  },
};

/* ========================================
   VARIANTS
   ======================================== */

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
    children: 'Subtle',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Delete account',
  },
};

/* ========================================
   SIZES
   ======================================== */

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

/* ========================================
   STATES
   ======================================== */

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Processing...',
    'aria-label': 'Processing',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Unavailable',
  },
};

/* ========================================
   ICONS
   ======================================== */

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Plus className="w-4 h-4" />,
    children: 'New expense',
  },
};

export const WithRightIcon: Story = {
  args: {
    variant: 'secondary',
    rightIcon: <ArrowRight className="w-4 h-4" />,
    children: 'Next step',
  },
};

export const IconOnly: Story = {
  args: {
    variant: 'ghost',
    'aria-label': 'Download statement',
    leftIcon: <Download className="w-4 h-4" />,
  },
  render: (args) => <Button {...args}>{null}</Button>,
};

/* ========================================
   LAYOUT
   ======================================== */

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Sign in',
  },
  render: (args) => (
    <div className="w-80 rounded-xl border border-border-primary bg-surface-primary p-4">
      <Button {...args} />
    </div>
  ),
};

/* ========================================
   MATRIX
   ======================================== */

export const AllVariants: Story = {
  parameters: { layout: 'padded' },
  render: (args) => {
    const variants: ButtonVariant[] = [
      'primary',
      'secondary',
      'ghost',
      'subtle',
      'outline',
      'destructive',
    ];

    return (
      <div className="flex flex-wrap items-start gap-6">
        {variants.map((variant) => (
          <div key={variant} className="flex flex-col items-center gap-2">
            <Button {...args} variant={variant}>
              {variant.charAt(0).toUpperCase() + variant.slice(1)}
            </Button>
            <span className="text-xs text-text-secondary">{variant}</span>
          </div>
        ))}
      </div>
    );
  },
};

export const AllSizes: Story = {
  parameters: { layout: 'padded' },
  render: (args) => {
    const sizes: ButtonSize[] = ['sm', 'md', 'lg'];

    return (
      <div className="flex flex-wrap items-end gap-6">
        {sizes.map((size) => (
          <div key={size} className="flex flex-col items-center gap-2">
            <Button {...args} size={size}>
              Button {size}
            </Button>
            <span className="text-xs text-text-secondary">{size}</span>
          </div>
        ))}
      </div>
    );
  },
};

/* ========================================
   REAL-WORLD USAGE
   ======================================== */

export const CardFooterActions: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div className="w-96 rounded-2xl border border-border-primary bg-surface-primary p-6">
      <h3 className="text-lg font-semibold text-text-primary">
        Delete workspace
      </h3>
      <p className="mt-2 text-sm text-text-secondary">
        This will permanently remove the workspace and all of its data. This
        action cannot be undone.
      </p>

      <div className="mt-6 flex justify-end gap-3">
        <Button {...args} variant="ghost" onClick={action('cancel')}>
          Cancel
        </Button>
        <Button
          {...args}
          variant="destructive"
          leftIcon={<Trash2 className="w-4 h-4" />}
          onClick={action('delete')}
        >
          Delete
        </Button>
      </div>
    </div>
  ),
};

export const FormSubmitActions: Story = {
  parameters: { layout: 'padded' },
  render: (args) => (
    <div className="w-96 rounded-2xl border border-border-primary bg-surface-primary p-6">
      <h3 className="text-lg font-semibold text-text-primary">
        Profile details
      </h3>
      <p className="mt-2 text-sm text-text-secondary">
        Update how your name appears across shared expenses.
      </p>

      <div className="mt-6 flex flex-col gap-3">
        <Button
          {...args}
          variant="primary"
          fullWidth
          leftIcon={<Check className="w-4 h-4" />}
          onClick={action('save')}
        >
          Save changes
        </Button>
        <Button
          {...args}
          variant="outline"
          fullWidth
          onClick={action('discard')}
        >
          Discard
        </Button>
      </div>
    </div>
  ),
};
