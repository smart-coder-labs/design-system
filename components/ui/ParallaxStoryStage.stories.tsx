import type { Meta, StoryObj } from '@storybook/react';
import { ParallaxStoryStage } from './ParallaxStoryStage';
import React from 'react';

const meta: Meta<typeof ParallaxStoryStage> = {
  title: 'UI/ParallaxStoryStage',
  component: ParallaxStoryStage,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ParallaxStoryStage>;

export const Default: Story = {
  render: () => (
    <ParallaxStoryStage />
  ),
};

export const WithCustomClass: Story = {
  render: () => (
    <ParallaxStoryStage className="opacity-90" />
  ),
};
