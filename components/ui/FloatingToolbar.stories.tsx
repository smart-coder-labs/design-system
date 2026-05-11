import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FloatingToolbar, FloatingToolbarAction } from './FloatingToolbar';
import { action } from '@storybook/addon-actions';
import { Bold, Italic, Underline, Palette, Trash2, CreditCard, Send, ArrowUpDown, ScanQrCode, ImageUp, Check, X, Share2, Bookmark } from 'lucide-react';

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

export const PaymentActionsToolbar: Story = {
  args: {
    actions: [
      { id: 'send', icon: <Send className="w-4 h-4" />, label: 'Send', onClick: action('send'), tooltip: 'Send money' },
      { id: 'request', icon: <ArrowUpDown className="w-4 h-4" />, label: 'Request', onClick: action('request'), tooltip: 'Request money' },
      { id: 'scan', icon: <ScanQrCode className="w-4 h-4" />, label: 'Scan', onClick: action('scan'), tooltip: 'Scan QR' },
      { id: 'card', icon: <CreditCard className="w-4 h-4" />, label: 'Card', onClick: action('card'), tooltip: 'Card payment' },
    ],
    variant: 'glass',
    position: 'top',
    showLabels: true,
  },
};

export const MoneyReceiptActions: Story = {
  args: {
    actions: [
      { id: 'confirm', icon: <Check className="w-4 h-4" />, label: 'Approve', onClick: action('approve'), variant: 'success' },
      { id: 'reject', icon: <X className="w-4 h-4" />, label: 'Reject', onClick: action('reject'), variant: 'danger', tooltip: 'Reject transaction' },
      { id: 'share', icon: <Share2 className="w-4 h-4" />, label: 'Share', onClick: action('share'), tooltip: 'Share receipt' },
      { id: 'save', icon: <Bookmark className="w-4 h-4" />, label: 'Save', onClick: action('save'), tooltip: 'Save reference' },
    ],
    variant: 'glass',
    showLabels: true,
  },
};

export const MediaEditingToolbar: Story = {
  args: {
    actions: [
      { id: 'upload', icon: <ImageUp className="w-4 h-4" />, label: 'Upload', onClick: action('upload') },
      { id: 'bold', icon: <Bold className="w-4 h-4" />, label: 'Bold', onClick: action('bold'), disabled: true },
      { id: 'italic', icon: <Italic className="w-4 h-4" />, label: 'Italic', onClick: action('italic'), disabled: true },
      { id: 'delete', icon: <Trash2 className="w-4 h-4" />, label: 'Delete', onClick: action('delete'), variant: 'danger' },
    ],
    variant: 'compact',
    showLabels: true,
  },
};

export const SingleAction: Story = {
  args: {
    actions: [
      { id: 'delete', icon: <Trash2 className="w-4 h-4" />, label: 'Delete', onClick: action('delete'), variant: 'danger', tooltip: 'Delete item' },
    ],
  },
};
