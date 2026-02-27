import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FintechDashboardPreview } from '../components/ui/FintechDashboardPreview';

const meta: Meta<typeof FintechDashboardPreview> = {
    title: 'Fintech/FintechDashboardPreview',
    component: FintechDashboardPreview,
    parameters: {
        layout: 'fullscreen',
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof FintechDashboardPreview>;

export const Default: Story = {
    args: {
        userName: 'Carlos',
    },
};

export const CustomUser: Story = {
    name: '👤 Custom User',
    args: {
        userName: 'Ana',
    },
};
