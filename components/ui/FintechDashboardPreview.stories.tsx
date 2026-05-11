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

export const WithLongUserName: Story = {
    args: {
        userName: 'Dr. María Guadalupe Fernández del Valle',
    },
};

export const WithShortName: Story = {
    args: {
        userName: 'Ana',
    },
};

export const BusinessContext: Story = {
    args: {
        userName: 'Acme Corp.',
    },
};

export const DarkMode: Story = {
    args: {
        userName: 'Carlos',
    },
    decorators: [
        (Story) => (
            <div className="dark bg-background-primary min-h-screen">
                <Story />
            </div>
        ),
    ],
};

export const WithHighBalance: Story = {
    args: {
        userName: 'Elizabeth',
        accountBalance: 245000,
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows the dashboard for a high-net-worth user with $245K balance, demonstrating how the UI handles large monetary values.',
            },
        },
    },
};

export const WithLowBalance: Story = {
    args: {
        userName: 'Pablo',
        accountBalance: 45.30,
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows the dashboard for a user with minimal balance ($45.30), useful for testing edge case scenarios with small amounts.',
            },
        },
    },
};

export const PremiumFeaturesActive: Story = {
    args: {
        userName: 'PremiumUser',
        accountBalance: 52300,
        isPremium: true,
    },
    parameters: {
        docs: {
            description: {
                story: 'Dashboard preview for a premium-tier user, demonstrating any premium badge or feature indicators.',
            },
        },
    },
};
