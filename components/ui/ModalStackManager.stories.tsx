import type { Meta, StoryObj } from '@storybook/react';
import { ModalStackManager } from './ModalStackManager';

const meta = {
    title: 'Components/ModalStackManager',
    component: ModalStackManager,
    tags: ['autodocs'],
} satisfies Meta<typeof ModalStackManager>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        initialStack: [
            {
                title: 'Confirm Transfer',
                description: 'Please confirm the transfer details.',
                content: <p style={{ color: '#3C3C43', fontSize: 14 }}>You are about to transfer <strong>$1,500</strong> to Savings Account.</p>,
                size: 'sm',
            },
        ],
    },
};

export const MultiStep: Story = {
    args: {
        initialStack: [
            {
                title: 'Step 1: Select Account',
                description: 'Choose the account to transfer from.',
                content: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {['Checking (****1234) - $5,200', 'Savings (****5678) - $12,800'].map(acc => (
                            <div key={acc} style={{ padding: '12px 16px', border: '1px solid #E5E5EA', borderRadius: 8 }}>
                                {acc}
                            </div>
                        ))}
                    </div>
                ),
                size: 'md',
            },
        ],
    },
};
