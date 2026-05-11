import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ImmersiveHero } from './ImmersiveHero';

const meta: Meta<typeof ImmersiveHero> = {
  title: 'Components/ImmersiveHero',
  component: ImmersiveHero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Smart Finance',
    subtitle: 'Take control of your financial future with intelligent tools and real-time insights.',
    backgroundImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80',
  },
};

export const Minimal: Story = {
  args: {
    title: 'Invest Smarter',
    backgroundImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=80',
  },
};

export const LongSubtitle: Story = {
  args: {
    title: 'Enterprise Banking',
    subtitle: 'Comprehensive financial solutions designed for modern businesses. Secure, scalable, and compliant with global standards.',
    backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80',
  },
};
