import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FintechDashboardPreview } from './FintechDashboardPreview';

const meta: Meta<typeof FintechDashboardPreview> = {
  title: 'Components/FintechDashboardPreview',
  component: FintechDashboardPreview,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: 'Cesar',
  },
};
