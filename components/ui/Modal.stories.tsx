import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalHeader, ModalTitle, ModalDescription, ModalContent, ModalFooter, ModalClose, ModalCloseButton } from './Modal';
import React from 'react';

const meta = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl', 'full'],
        },
        position: {
            control: 'select',
            options: ['center', 'right', 'left', 'bottom', 'fullscreen'],
        },
    },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        open: true,
        onOpenChange: () => {},
        size: 'md',
        position: 'center',
        children: (
            <>
                <ModalCloseButton />
                <ModalHeader>
                    <ModalTitle>Confirm Transfer</ModalTitle>
                    <ModalDescription>
                        Please review the transfer details before confirming.
                    </ModalDescription>
                </ModalHeader>
                <ModalContent>
                    <div style={{ display: 'grid', gap: 12 }}>
                        <div><strong>Amount:</strong> $2,500.00</div>
                        <div><strong>To:</strong> Savings Account (****4821)</div>
                        <div><strong>Date:</strong> March 15, 2026</div>
                    </div>
                </ModalContent>
                <ModalFooter>
                    <ModalClose>
                        <button style={{ padding: '8px 20px', border: '1px solid #D1D1D6', borderRadius: 8, background: 'white', cursor: 'pointer' }}>Cancel</button>
                    </ModalClose>
                    <button style={{ padding: '8px 20px', backgroundColor: '#007AFF', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer' }}>Confirm</button>
                </ModalFooter>
            </>
        ),
    },
};

export const SmallModal: Story = {
    args: {
        ...Default.args,
        size: 'sm',
    },
};

export const LargeModal: Story = {
    args: {
        ...Default.args,
        size: 'lg',
    },
};

export const BottomSheet: Story = {
    args: {
        open: true,
        onOpenChange: () => {},
        size: 'md',
        position: 'bottom',
        children: (
            <>
                <ModalHeader>
                    <ModalTitle>Choose Payment Method</ModalTitle>
                </ModalHeader>
                <ModalContent>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                        {['Visa ****4242', 'Mastercard ****8888', 'Apple Pay', 'Bank Transfer'].map(method => (
                            <div key={method} style={{ padding: '12px 16px', border: '1px solid #E5E5EA', borderRadius: 8, cursor: 'pointer' }}>
                                {method}
                            </div>
                        ))}
                    </div>
                </ModalContent>
            </>
        ),
    },
};

export const RightPanel: Story = {
    args: {
        open: true,
        onOpenChange: () => {},
        size: 'md',
        position: 'right',
        children: (
            <>
                <ModalCloseButton />
                <ModalHeader>
                    <ModalTitle>Transaction Details</ModalTitle>
                </ModalHeader>
                <ModalContent>
                    <p>Detailed transaction information appears here.</p>
                </ModalContent>
            </>
        ),
    },
};

export const Fullscreen: Story = {
    args: {
        open: true,
        onOpenChange: () => {},
        size: 'full',
        position: 'fullscreen',
        children: (
            <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <h2>Fullscreen Modal</h2>
                <p>This modal covers the entire screen.</p>
            </div>
        ),
    },
};
