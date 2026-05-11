import type { Meta, StoryObj } from '@storybook/react';
import { ModalStackManager, type ModalConfig } from './ModalStackManager';
import { Button } from './Button';
import { fn } from '@storybook/test';

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
                content: <p style={{ color: '#3C3C43', fontSize: 14 }}>You are about to transfer <strong>$1,500</strong> to Savings Account (••••5678).</p>,
                size: 'sm',
            },
        ],
        onCloseAll: fn(),
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
                        {['Checking (••••1234) - $5,200', 'Savings (••••5678) - $12,800', 'Investment (••••9012) - $34,000'].map(acc => (
                            <div key={acc} style={{
                                padding: '12px 16px', border: '1px solid #E5E5EA',
                                borderRadius: 8, cursor: 'pointer',
                                display: 'flex', alignItems: 'center', gap: 12,
                            }}>
                                <div style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid #C6C6C8' }} />
                                <span style={{ color: '#1C1C1E', fontSize: 14 }}>{acc}</span>
                            </div>
                        ))}
                    </div>
                ),
                size: 'md',
            },
        ],
        onCloseAll: fn(),
    },
};

export const LargeContent: Story = {
    args: {
        initialStack: [
            {
                title: 'Transaction History',
                description: 'Last 90 days of activity',
                content: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                        {[
                            { date: 'May 10', desc: 'Transfer to Savings', amount: '-$500', status: 'Completed' },
                            { date: 'May 9', desc: 'Salary Deposit', amount: '+$3,200', status: 'Completed' },
                            { date: 'May 8', desc: 'Netflix Subscription', amount: '-$15.99', status: 'Completed' },
                            { date: 'May 7', desc: 'Uber Ride', amount: '-$24.50', status: 'Completed' },
                            { date: 'May 6', desc: 'Amazon Purchase', amount: '-$89.99', status: 'Pending' },
                        ].map((tx, i) => (
                            <div key={i} style={{
                                display: 'flex', justifyContent: 'space-between',
                                padding: '10px 12px', borderBottom: '1px solid #F2F2F5',
                            }}>
                                <div>
                                    <div style={{ fontSize: 13, fontWeight: 500, color: '#1C1C1E' }}>{tx.desc}</div>
                                    <div style={{ fontSize: 11, color: '#8E8E93' }}>{tx.date}</div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: 13, fontWeight: 600, color: tx.amount.startsWith('+') ? '#30D158' : '#1C1C1E' }}>{tx.amount}</div>
                                    <div style={{ fontSize: 11, color: tx.status === 'Pending' ? '#FF9F0A' : '#30D158' }}>{tx.status}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ),
                size: 'lg',
            },
        ],
        onCloseAll: fn(),
    },
};

export const FullScreenModal: Story = {
    args: {
        initialStack: [
            {
                title: 'New Investment',
                description: 'Configure your investment portfolio',
                content: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        <div style={{ display: 'flex', gap: 12 }}>
                            {['BTC', 'ETH', 'SOL'].map(sym => (
                                <div key={sym} style={{
                                    flex: 1, padding: 16, borderRadius: 8,
                                    border: '2px solid #E5E5EA', textAlign: 'center',
                                }}>
                                    <div style={{ fontWeight: 700, fontSize: 16, color: '#1C1C1E' }}>{sym}</div>
                                    <div style={{ fontSize: 12, color: '#3C3C43' }}>
                                        {sym === 'BTC' ? '$43,250' : sym === 'ETH' ? '$2,280' : '$145'}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: 13, fontWeight: 500, color: '#3C3C43', marginBottom: 6 }}>Amount to invest</label>
                            <input
                                type="number"
                                defaultValue={1000}
                                style={{
                                    width: '100%', padding: '10px 14px', borderRadius: 8,
                                    border: '1px solid #E5E5EA', fontSize: 16, fontWeight: 600,
                                    outline: 'none',
                                }}
                            />
                        </div>
                    </div>
                ),
                size: 'full',
            },
        ],
        onCloseAll: fn(),
    },
};

export const StackedModals: Story = {
    args: {
        initialStack: [
            {
                title: 'Transfer Money',
                description: 'Set up a new transfer',
                content: (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <label style={{ fontSize: 12, color: '#8E8E93', fontWeight: 500 }}>From</label>
                            <div style={{ padding: '10px 14px', border: '1px solid #E5E5EA', borderRadius: 8, fontSize: 14, color: '#1C1C1E' }}>
                                Checking (••••1234) — $5,200
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <label style={{ fontSize: 12, color: '#8E8E93', fontWeight: 500 }}>To</label>
                            <div style={{ padding: '10px 14px', border: '1px solid #E5E5EA', borderRadius: 8, fontSize: 14, color: '#1C1C1E' }}>
                                Savings (••••5678)
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            <label style={{ fontSize: 12, color: '#8E8E93', fontWeight: 500 }}>Amount</label>
                            <input
                                type="number"
                                defaultValue={500}
                                style={{
                                    width: '100%', padding: '10px 14px', borderRadius: 8,
                                    border: '1px solid #E5E5EA', fontSize: 20, fontWeight: 700,
                                    outline: 'none',
                                }}
                            />
                        </div>
                    </div>
                ),
                size: 'md',
            },
        ],
        onCloseAll: fn(),
    },
};

export const SmallConfirmation: Story = {
    args: {
        initialStack: [
            {
                title: 'Delete Account?',
                description: 'This action cannot be undone.',
                content: (
                    <div style={{ textAlign: 'center', padding: '8px 0' }}>
                        <div style={{ fontSize: 40, marginBottom: 8 }}>⚠️</div>
                        <p style={{ color: '#3C3C43', fontSize: 14 }}>
                            Are you sure you want to delete your <strong>Savings Account</strong>? All funds will be transferred to your checking account.
                        </p>
                    </div>
                ),
                size: 'sm',
            },
        ],
        onCloseAll: fn(),
    },
};

export const EmptyStack: Story = {
    args: {
        initialStack: [],
        open: false,
        onCloseAll: fn(),
    },
};

export const TermsModal: Story = {
    args: {
        initialStack: [
            {
                title: 'Terms & Conditions',
                description: 'Please review before continuing',
                content: (
                    <div style={{ maxHeight: 300, overflowY: 'auto', fontSize: 13, color: '#3C3C43', lineHeight: 1.6 }}>
                        <p style={{ marginBottom: 12 }}><strong>1. Account Agreement.</strong> By using FinFlow, you agree to our terms of service...</p>
                        <p style={{ marginBottom: 12 }}><strong>2. Fees.</strong> Standard transfer fees apply. International transfers may incur additional charges...</p>
                        <p style={{ marginBottom: 12 }}><strong>3. Security.</strong> You are responsible for maintaining the confidentiality of your credentials...</p>
                        <p style={{ marginBottom: 12 }}><strong>4. Privacy.</strong> We collect and process personal data as described in our Privacy Policy...</p>
                        <p style={{ marginBottom: 12 }}><strong>5. Limitation of Liability.</strong> FinFlow is not liable for losses resulting from unauthorized access...</p>
                        <p style={{ marginBottom: 12 }}><strong>6. Termination.</strong> Either party may terminate this agreement with 30 days notice...</p>
                    </div>
                ),
                size: 'lg',
            },
        ],
        onCloseAll: fn(),
    },
};
