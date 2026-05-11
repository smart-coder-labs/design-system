import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ImageCropper } from './ImageCropper';

const meta: Meta<typeof ImageCropper> = {
  title: 'Components/ImageCropper',
  component: ImageCropper,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    onCrop: (data) => console.log('Cropped:', data),
  },
};

export const CircleAspect: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    aspectRatio: 1,
    shape: 'circle',
    onCrop: (data) => console.log('Cropped:', data),
  },
};

export const ProfilePicture: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop',
    aspectRatio: 1,
    shape: 'circle',
    maxWidth: 200,
    maxHeight: 200,
    onCrop: (data) => console.log('Cropped:', data),
  },
  render: (args) => (
    <div className="w-80 space-y-4">
      <p className="text-sm font-semibold text-text-primary">Upload Profile Picture</p>
      <ImageCropper {...args} />
    </div>
  ),
};

export const IDDocument: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    aspectRatio: 1.586,
    onCrop: (data) => console.log('Cropped:', data),
  },
};

export const WideBanner: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop',
    aspectRatio: 2,
    onCrop: (data) => console.log('Cropped:', data),
  },
};

export const Square: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop',
    aspectRatio: 1,
    onCrop: (data) => console.log('Cropped:', data),
  },
};

export const RestrictedSize: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    maxWidth: 300,
    maxHeight: 200,
    onCrop: (data) => console.log('Cropped:', data),
  },
};
