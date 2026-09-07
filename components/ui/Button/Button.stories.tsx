import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Button } from './Button';
import { action } from 'storybook/actions';
import { ArrowRight, Check, Download, Plus, Trash2, Send, Settings } from 'lucide-react';

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
    children: 'Delete account',
    variant: 'destructive',
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

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm" onClick={action('small')}>
        Small
      </Button>
      <Button size="md" onClick={action('medium')}>
        Medium
      </Button>
      <Button size="lg" onClick={action('large')}>
        Large
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button leftIcon={<Download className="w-4 h-4" />} onClick={action('download')}>
        Download
      </Button>
      <Button
        variant="secondary"
        rightIcon={<ArrowRight className="w-4 h-4" />}
        onClick={action('next')}
      >
        Next
      </Button>
      <Button
        variant="outline"
        leftIcon={<Plus className="w-4 h-4" />}
        rightIcon={<Check className="w-4 h-4" />}
        onClick={action('add')}
      >
        Add item
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button loading onClick={action('loading-primary')}>
        Processing
      </Button>
      <Button variant="secondary" loading onClick={action('loading-secondary')}>
        Saving
      </Button>
      <Button variant="destructive" loading onClick={action('loading-destructive')}>
        Deleting
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button disabled onClick={action('disabled-primary')}>
        Primary
      </Button>
      <Button variant="secondary" disabled onClick={action('disabled-secondary')}>
        Secondary
      </Button>
      <Button variant="outline" disabled onClick={action('disabled-outline')}>
        Outline
      </Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    children: 'Sign In',
    fullWidth: true,
    onClick: action('clicked'),
  },
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button aria-label="Settings" leftIcon={<Settings className="w-4 h-4" />} onClick={action('settings')} />
      <Button
        variant="outline"
        aria-label="Add item"
        leftIcon={<Plus className="w-4 h-4" />}
        onClick={action('add')}
      />
      <Button
        variant="destructive"
        aria-label="Delete item"
        leftIcon={<Trash2 className="w-4 h-4" />}
        onClick={action('delete')}
      />
    </div>
  ),
};

export const FormActions: Story = {
  render: () => (
    <div className="w-96 p-6 bg-surface-primary rounded-2xl border border-border-primary">
      <h3 className="text-base font-semibold text-text-primary">Send invitation</h3>
      <p className="mt-1 text-sm text-text-secondary">
        The recipient will get an email with a link to join your workspace.
      </p>
      <div className="mt-6 flex justify-end gap-3">
        <Button variant="ghost" onClick={action('cancel')}>
          Cancel
        </Button>
        <Button
          variant="primary"
          rightIcon={<Send className="w-4 h-4" />}
          onClick={action('submit')}
        >
          Send invite
        </Button>
      </div>
    </div>
  ),
};
