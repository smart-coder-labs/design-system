import type { Meta, StoryObj } from '@storybook/react';
import { HyperPersonalizedWidgetFeed } from './HyperPersonalizedWidgetFeed';
import React from 'react';

const meta: Meta<typeof HyperPersonalizedWidgetFeed> = {
  title: 'Fintech/HyperPersonalizedWidgetFeed',
  component: HyperPersonalizedWidgetFeed,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HyperPersonalizedWidgetFeed>;

export const Default: Story = {
  args: {},
};
