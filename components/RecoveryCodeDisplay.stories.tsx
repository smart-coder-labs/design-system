import type { Meta, StoryObj } from '@storybook/react';
import { RecoveryCodeDisplay } from './RecoveryCodeDisplay';

const meta = {
    title: 'Components/RecoveryCodeDisplay',
    component: RecoveryCodeDisplay,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof RecoveryCodeDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCodes = [
    'A3F9-2K8L-P5Q7-R1M4',
    'B7N2-X4V6-W9Z3-T8Y1',
    'C5H8-J2K4-L6M9-N3P7',
    'D1Q4-R7S9-T2V5-W8X3',
    'E6Y9-Z3A1-B4C7-D2F5',
    'F8G2-H5J7-K1L4-M9N6',
    'G3P7-Q1R4-S8T2-V5W9',
    'H4X6-Y9Z2-A3B5-C8D1',
];

export const Default: Story = {
    args: {
        codes: sampleCodes,
    },
};

export const WithActions: Story = {
    args: {
        codes: sampleCodes,
        onCopy: (code) => console.log('Copied code:', code),
        onDownload: () => console.log('Downloaded codes'),
    },
};

export const CustomTitle: Story = {
    args: {
        codes: sampleCodes,
        title: 'Backup Codes',
        description: 'Store these backup codes in a secure location. Each code can only be used once.',
    },
};

export const WithoutWarning: Story = {
    args: {
        codes: sampleCodes,
        showWarning: false,
    },
};

export const FewCodes: Story = {
    args: {
        codes: [
            'A3F9-2K8L-P5Q7-R1M4',
            'B7N2-X4V6-W9Z3-T8Y1',
            'C5H8-J2K4-L6M9-N3P7',
        ],
        title: 'Emergency Access Codes',
        description: 'Use these codes if you lose access to your authenticator app.',
    },
};

export const ManyCodes: Story = {
    args: {
        codes: [
            ...sampleCodes,
            'I7K3-L9M2-N5P8-Q1R4',
            'J2S6-T9V3-W7X1-Y4Z8',
            'K5A9-B2C6-D3F7-G1H4',
            'L8J2-K5M9-N3P7-Q1R6',
        ],
    },
};

export const Interactive: Story = {
    render: () => {
        const handleCopy = (code: string) => {
            alert(`Copied: ${code}`);
        };

        const handleDownload = () => {
            alert('Recovery codes downloaded!');
        };

        return (
            <RecoveryCodeDisplay
                codes={sampleCodes}
                onCopy={handleCopy}
                onDownload={handleDownload}
                title="Your Recovery Codes"
                description="Save these codes securely. You'll need them to recover your account if you lose access."
            />
        );
    },
};
