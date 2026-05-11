import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FloatingToolbar, FloatingToolbarAction } from './FloatingToolbar';
import { action } from '@storybook/addon-actions';
import { Bold, Italic, Underline, Palette, Trash2 } from 'lucide-react';

const editingActions: FloatingToolbarAction[] = [
  { id: 'bold', icon: <Bold className="w-4 h-4" />, label: 'Bold', onClick: action('bold'), tooltip: 'Bold (Ctrl+B)' },
  { id: 'italic', icon: <Italic className="w-4 h-4" />, label: 'Italic', onClick: action('italic'), tooltip: 'Italic (Ctrl+I)' },
  { id: 'underline', icon: <Underline className="w-4 h-4" />, label: 'Underline', onClick: action('underline'), tooltip: 'Underline (Ctrl+U)' },
  { id: 'color', icon: <Palette className="w-4 h-4" />, label: 'Color', onClick: action('color'), tooltip: 'Text color' },
  { id: 'delete', icon: <Trash2 className="w-4 h-4" />, label: 'Delete', onClick: action('delete'), variant: 'danger', tooltip: 'Delete' },
];

const meta: Meta<typeof FloatingToolbar> = {
  title: 'Components/FloatingToolbar',
  component: FloatingToolbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actions: editingActions,
    position: 'bottom',
  },
};

export const TopPosition: Story = {
  args: {
    actions: editingActions.slice(0, 4),
    position: 'top',
  },
};

export const CompactVariant: Story = {
  args: {
    actions: editingActions.slice(0, 3),
    variant: 'compact',
  },
};

export const GlassVariant: Story = {
  args: {
    actions: editingActions,
    variant: 'glass',
  },
};

export const WithLabels: Story = {
  args: {
    actions: editingActions.slice(0, 3),
    showLabels: true,
  },
};

export const Dismissible: Story = {
  args: {
    actions: editingActions.slice(0, 3),
    dismissible: true,
    onDismiss: action('dismissed'),
  },
};
