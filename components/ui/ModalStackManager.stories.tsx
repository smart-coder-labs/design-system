import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { ModalStackManager } from './ModalStackManager';
import { action } from 'storybook/actions';

const meta: Meta<typeof ModalStackManager> = {
  title: 'Overlays/ModalStackManager',
  component: ModalStackManager,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    modals: [],
  },
};

export const SingleModal: Story = {
  args: {
    modals: [
      { id: '1', title: 'Confirm Transfer', content: 'Send $250 to Alice?', onClose: action('close') },
    ],
  },
};

export const TwoModals: Story = {
  args: {
    modals: [
      { id: '1', title: 'Payment Confirmation', content: 'Send $250 to Alice Johnson?', onClose: action('close-1') },
      { id: '2', title: 'Two-Factor Auth', content: 'Enter your 6-digit code', onClose: action('close-2') },
    ],
  },
};

export const ThreeModals: Story = {
  args: {
    modals: [
      { id: '1', title: 'Step 1: Amount', content: 'Enter the amount to transfer', onClose: action('close-1') },
      { id: '2', title: 'Step 2: Confirm', content: 'Review transfer details', onClose: action('close-2') },
      { id: '3', title: 'Step 3: 2FA', content: 'Enter verification code', onClose: action('close-3') },
    ],
  },
};

export const PaymentFlowStack: Story = {
  args: {
    modals: [
      { id: '1', title: 'Send Money', content: 'Select recipient and amount ($250.00 to Alice Johnson)', onClose: action('close-1') },
      { id: '2', title: 'Confirm Payment', content: 'Review: $250.00 from Checking •••• 4821 to Alice Johnson', onClose: action('close-2') },
      { id: '3', title: 'Verify with 2FA', content: 'Enter the 6-digit code sent to your phone (•••• 4821)', onClose: action('close-3') },
    ],
  },
};

export const EmptyStack: Story = {
  args: {
    modals: [],
  },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
