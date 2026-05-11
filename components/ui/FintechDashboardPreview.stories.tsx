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
