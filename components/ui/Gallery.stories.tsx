import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Gallery } from './Gallery';
import { LightboxImage } from './Lightbox';

const images: LightboxImage[] = [
  { src: 'https://picsum.photos/seed/fintech1/600/600', alt: 'Dashboard preview', caption: 'Main Dashboard' },
  { src: 'https://picsum.photos/seed/fintech2/600/600', alt: 'Analytics chart', caption: 'Revenue Analytics' },
  { src: 'https://picsum.photos/seed/fintech3/600/600', alt: 'Payment flow', caption: 'Payment Flow Design' },
  { src: 'https://picsum.photos/seed/fintech4/600/600', alt: 'Profile page', caption: 'User Profile' },
  { src: 'https://picsum.photos/seed/fintech5/600/600', alt: 'Settings panel', caption: 'Settings Panel' },
  { src: 'https://picsum.photos/seed/fintech6/600/600', alt: 'Reports section', caption: 'Reports & Exports' },
];

const meta: Meta<typeof Gallery> = {
  title: 'Components/Gallery',
  component: Gallery,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images,
    columns: 3,
  },
};

export const TwoColumns: Story = {
  args: {
    images,
    columns: 2,
  },
};

export const FourColumns: Story = {
  args: {
    images: images.slice(0, 4),
    columns: 4,
  },
};

export const PortraitAspectRatio: Story = {
  args: {
    images,
    aspectRatio: 'portrait',
  },
};

export const VideoAspectRatio: Story = {
  args: {
    images: images.slice(0, 3),
    aspectRatio: 'video',
  },
};

export const AutoAspectRatio: Story = {
  args: {
    images: images.slice(0, 3),
    aspectRatio: 'auto',
  },
};
