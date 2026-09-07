import type { Meta, StoryObj } from '@storybook/react';
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
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    disabled: { control: 'boolean' },
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

export const Variants: Story = {
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

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button size="sm" onClick={action('sm')}>Small</Button>
      <Button size="md" onClick={action('md')}>Medium</Button>
      <Button size="lg" onClick={action('lg')}>Large</Button>
    </div>
  ),
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

export const WithIcons: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Button leftIcon={<Download className="w-4 h-4" />} onClick={action('download')}>Download</Button>
      <Button variant="secondary" rightIcon={<ArrowRight className="w-4 h-4" />} onClick={action('next')}>Next</Button>
      <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />} onClick={action('delete')}>Delete</Button>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    children: 'Sign In',
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

export const FormActions: Story = {
  render: () => (
    <div className="w-80 p-6 bg-surface-primary rounded-2xl border border-border-primary">
      <p className="text-sm font-semibold text-text-primary">Delete workspace</p>
      <p className="mt-1 text-sm text-text-secondary">This action cannot be undone.</p>
      <div className="mt-4 flex justify-end gap-2">
        <Button variant="ghost" size="sm" onClick={action('cancel')}>Cancel</Button>
        <Button variant="destructive" size="sm" leftIcon={<Trash2 className="w-4 h-4" />} onClick={action('confirm')}>Delete</Button>
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    children: 'Playground',
    variant: 'primary',
    size: 'md',
    loading: false,
    fullWidth: false,
    disabled: false,
    leftIcon: <Plus className="w-4 h-4" />,
    onClick: action('clicked'),
  },
};
