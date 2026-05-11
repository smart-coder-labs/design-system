import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ImageCropper } from './ImageCropper';
import { action } from '@storybook/addon-actions';

const meta: Meta<typeof ImageCropper> = {
  title: 'Components/ImageCropper',
  component: ImageCropper,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/seed/profile/1200/800',
    aspectRatio: 1,
    onCrop: action('cropped'),
    onCancel: action('cancelled'),
  },
};

export const Landscape: Story = {
  args: {
    src: 'https://picsum.photos/seed/landscape/1600/900',
    aspectRatio: 16 / 9,
    onCrop: action('cropped'),
    onCancel: action('cancelled'),
  },
};

export const Vertical: Story = {
  args: {
    src: 'https://picsum.photos/seed/portrait/800/1200',
    aspectRatio: 3 / 4,
    onCrop: action('cropped'),
    onCancel: action('cancelled'),
  },
};
