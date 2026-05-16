import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ImageCarousel } from './ImageCarousel';

const images = [
  { src: 'https://picsum.photos/seed/dashboard1/800/400', alt: 'Dashboard Overview', caption: 'Main Dashboard View' },
  { src: 'https://picsum.photos/seed/chart1/800/400', alt: 'Revenue Chart', caption: 'Monthly Revenue — Q1 2025' },
  { src: 'https://picsum.photos/seed/app1/800/400', alt: 'Mobile App', caption: 'Mobile Banking App Interface' },
  { src: 'https://picsum.photos/seed/analytics1/800/400', alt: 'Analytics', caption: 'Advanced Analytics Dashboard' },
];

const meta: Meta<typeof ImageCarousel> = {
  title: 'Data Display/ImageCarousel',
  component: ImageCarousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    images,
  },
};

export const AutoPlay: Story = {
  args: {
    images,
    autoPlay: true,
    interval: 3000,
  },
};

export const NoArrows: Story = {
  args: {
    images,
    showArrows: false,
  },
};

export const NoIndicators: Story = {
  args: {
    images: images.slice(0, 3),
    showIndicators: false,
  },
};

export const SingleImage: Story = {
  args: {
    images: images.slice(0, 1),
  },
};

export const SlowAutoPlay: Story = {
  args: {
    images,
    autoPlay: true,
    interval: 6000,
  },
};

export const ProductShowcase: Story = {
  args: {
    images: [
      { src: 'https://picsum.photos/seed/product1/800/400', alt: 'Premium Card', caption: 'Premium Platinum Card' },
      { src: 'https://picsum.photos/seed/product2/800/400', alt: 'Mobile App', caption: 'Mobile Banking App' },
      { src: 'https://picsum.photos/seed/product3/800/400', alt: 'Dashboard', caption: 'Wealth Management Dashboard' },
    ],
    autoPlay: true,
    interval: 4000,
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
