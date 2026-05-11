import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FABGroup, FABGroupAction } from './FABGroup';
import { Pen, Camera, FileText, Image } from 'lucide-react';
import { action } from '@storybook/addon-actions';

const actions: FABGroupAction[] = [
  { icon: Pen, label: 'Write Note', onClick: action('write-note') },
  { icon: Camera, label: 'Take Photo', onClick: action('take-photo') },
  { icon: FileText, label: 'Upload Document', onClick: action('upload-doc') },
  { icon: Image, label: 'Gallery', onClick: action('gallery') },
];

const meta: Meta<typeof FABGroup> = {
  title: 'Components/FABGroup',
  component: FABGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actions,
  },
};

export const PositionNone: Story = {
  args: {
    actions,
    position: 'none',
  },
};

export const TwoActions: Story = {
  args: {
    actions: [
      { icon: Pen, label: 'Edit', onClick: action('edit') },
      { icon: Camera, label: 'Capture', onClick: action('capture') },
    ],
  },
};
