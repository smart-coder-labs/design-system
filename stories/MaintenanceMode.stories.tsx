import type { Meta, StoryObj } from '@storybook/react';
import { MaintenanceMode } from '../components/MaintenanceMode';
import { Button } from '../components/Button';
import { RefreshCw } from 'lucide-react';

const meta: Meta<typeof MaintenanceMode> = {
    title: 'Surfaces/MaintenanceMode',
    component: MaintenanceMode,
    tags: [],
    argTypes: {
        title: { control: 'text' },
        description: { control: 'text' },
        estimatedReturnTime: { control: 'text' },
        fullPage: { control: 'boolean' },
    },
    parameters: {
        layout: 'fullscreen',
    },
};

export default meta;
type Story = StoryObj<typeof MaintenanceMode>;

export const Default: Story = {
    args: {
        fullPage: true,
    },
};

export const WithTimeEstimate: Story = {
    args: {
        estimatedReturnTime: '2:00 PM EST',
        description: 'We are updating our servers to provide you with a better experience.',
    },
};

export const Embedded: Story = {
    parameters: {
        layout: 'centered',
    },
    args: {
        fullPage: false,
        className: 'w-[600px] h-[400px] shadow-xl border border-border-primary',
        title: 'Module Unavailable',
        description: 'This specific module is currently undergoing maintenance.',
        showContactSupport: false,
    },
};

export const CustomAction: Story = {
    args: {
        title: 'Scheduled Update',
        description: 'Please check back later or refresh the page to see if the service is back online.',
        customAction: (
            <Button variant="primary" leftIcon={<RefreshCw size={16} />}>
                Check Status
            </Button>
        ),
    },
};
