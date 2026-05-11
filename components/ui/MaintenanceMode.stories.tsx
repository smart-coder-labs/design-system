import type { Meta, StoryObj } from '@storybook/react';
import { MaintenanceMode } from './MaintenanceMode';

const meta = {
    title: 'Components/MaintenanceMode',
    component: MaintenanceMode,
    tags: ['autodocs'],
} satisfies Meta<typeof MaintenanceMode>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithEstimatedTime: Story = {
    args: {
        title: 'Scheduled Maintenance',
        description: 'We are upgrading our systems to provide you with a better experience.',
        estimatedReturnTime: '2:00 PM EST',
    },
};

export const CustomTitle: Story = {
    args: {
        title: 'System Upgrade in Progress',
        description: 'Our team is working hard to bring you new features. Thank you for your patience.',
        estimatedReturnTime: 'Approximately 4 hours',
    },
};

export const InlineMode: Story = {
    args: {
        fullPage: false,
        title: 'Widget Maintenance',
        description: 'This widget is temporarily unavailable.',
    },
};

export const CustomAction: Story = {
    args: {
        title: 'Annual Maintenance',
        description: 'We will be performing routine maintenance on our infrastructure.',
        estimatedReturnTime: '6:00 PM UTC',
        customAction: (
            <button
                style={{
                    padding: '8px 24px',
                    backgroundColor: '#007AFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontWeight: 600,
                }}
            >
                Check Status Page
            </button>
        ),
    },
};
