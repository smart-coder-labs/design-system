import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FABGroup, FABGroupAction } from './FABGroup';
import { Pen, Camera, FileText, Image, Send, CreditCard, PiggyBank, Shield, Wallet } from 'lucide-react';
import { action } from 'storybook/actions';

const defaultActions: FABGroupAction[] = [
    { icon: Pen, label: 'Write Note', onClick: action('write-note') },
    { icon: Camera, label: 'Take Photo', onClick: action('take-photo') },
    { icon: FileText, label: 'Upload Document', onClick: action('upload-doc') },
    { icon: Image, label: 'Gallery', onClick: action('gallery') },
];

const fintechActions: FABGroupAction[] = [
    { icon: Send, label: 'Send Money', onClick: action('send-money'), variant: 'primary' },
    { icon: CreditCard, label: 'Pay Card', onClick: action('pay-card') },
    { icon: PiggyBank, label: 'New Savings Goal', onClick: action('new-savings') },
    { icon: Shield, label: 'Enable Security', onClick: action('security'), variant: 'tertiary' },
];

const meta: Meta<typeof FABGroup> = {
    title: 'Components/FABGroup',
    component: FABGroup,
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        actions: defaultActions,
    },
    parameters: { layout: 'fullscreen' },
};

export const PositionNone: Story = {
    args: {
        actions: defaultActions,
        position: 'none',
    },
};

export const TwoActions: Story = {
    args: {
        actions: [
            { icon: Pen, label: 'Edit', onClick: action('edit') },
            { icon: Camera, label: 'Capture', onClick: action('capture') },
        ],
    },
    parameters: { layout: 'fullscreen' },
};

export const FintechActions: Story = {
    args: {
        actions: fintechActions,
        position: 'bottom-right',
    },
    parameters: { layout: 'fullscreen' },
};

export const BottomLeft: Story = {
    args: {
        actions: defaultActions,
        position: 'bottom-left',
    },
    parameters: { layout: 'fullscreen' },
};

export const TopRight: Story = {
    args: {
        actions: defaultActions,
        position: 'top-right',
    },
    parameters: { layout: 'fullscreen' },
};

export const TopLeft: Story = {
    args: {
        actions: defaultActions,
        position: 'top-left',
    },
    parameters: { layout: 'fullscreen' },
};

export const SingleAction: Story = {
    args: {
        actions: [
            { icon: Plus, label: 'Quick Add', onClick: action('quick-add'), variant: 'primary' },
        ],
    },
    parameters: { layout: 'fullscreen' },
};

export const ManyActions: Story = {
    args: {
        actions: [
            { icon: Send, label: 'Wire Transfer', onClick: action('wire'), variant: 'primary' },
            { icon: CreditCard, label: 'Freeze Card', onClick: action('freeze') },
            { icon: Wallet, label: 'View Balance', onClick: action('balance') },
            { icon: PiggyBank, label: 'Set Goal', onClick: action('goal') },
            { icon: Shield, label: 'Security Check', onClick: action('shield') },
            { icon: Camera, label: 'Deposit Check', onClick: action('deposit') },
            { icon: FileText, label: 'Statements', onClick: action('statements') },
        ],
        position: 'bottom-right',
    },
    parameters: { layout: 'fullscreen' },
};
