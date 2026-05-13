import type { Meta, StoryObj } from '@storybook/react';
import { VirtualCardPreview } from './VirtualCardPreview';
import { useState } from 'react';

const meta = {
    title: 'Fintech/Cards/VirtualCardPreview',
    component: VirtualCardPreview,
    tags: ['autodocs'],
} satisfies Meta<typeof VirtualCardPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        cardHolder: 'CESAR RUIZ',
        cardNumber: '4532 7891 2345 6789',
        expiry: '09/27',
        cvv: '***',
        brand: 'visa',
        isFrozen: false,
    },
};

export const Mastercard: Story = {
    args: {
        cardHolder: 'CESAR RUIZ',
        cardNumber: '5423 4567 8901 2345',
        expiry: '12/28',
        cvv: '***',
        brand: 'mastercard',
        isFrozen: false,
    },
};

export const Amex: Story = {
    args: {
        cardHolder: 'CESAR RUIZ',
        cardNumber: '3782 822463 10005',
        expiry: '03/29',
        cvv: '***',
        brand: 'amex',
        isFrozen: false,
    },
};

export const Frozen: Story = {
    args: {
        cardHolder: 'CESAR RUIZ',
        cardNumber: '4532 7891 2345 6789',
        expiry: '09/27',
        cvv: '***',
        brand: 'visa',
        isFrozen: true,
    },
};

export const ShowCVV: Story = {
    args: {
        cardHolder: 'CESAR RUIZ',
        cardNumber: '4532 7891 2345 6789',
        expiry: '09/27',
        cvv: '123',
        showCVV: true,
        brand: 'visa',
        isFrozen: false,
    },
};

export const InteractiveCard: Story = {
    render: () => {
        const [isFrozen, setIsFrozen] = useState(false);
        const [showCVV, setShowCVV] = useState(false);
        return (
            <div className="space-y-4 max-w-sm">
                <VirtualCardPreview
                    cardHolder="CESAR RUIZ"
                    cardNumber="4532 7891 2345 6789"
                    expiry="09/27"
                    cvv="123"
                    showCVV={showCVV}
                    brand="visa"
                    isFrozen={isFrozen}
                />
                <div className="flex gap-3">
                    <button
                        onClick={() => setIsFrozen(!isFrozen)}
                        className={`flex-1 px-3 py-2 text-sm rounded-lg ${isFrozen ? 'bg-green-600 text-white' : 'bg-red-500 text-white'}`}
                    >
                        {isFrozen ? 'Unfreeze Card' : 'Freeze Card'}
                    </button>
                    <button
                        onClick={() => setShowCVV(!showCVV)}
                        className="px-3 py-2 text-sm bg-surface-secondary rounded-lg hover:bg-surface-tertiary"
                    >
                        {showCVV ? 'Hide CVV' : 'Show CVV'}
                    </button>
                </div>
            </div>
        );
    },
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    args: {
        cardHolder: 'CESAR RUIZ',
        cardNumber: '4532 7891 2345 6789',
        expiry: '09/27',
        cvv: '***',
        brand: 'visa',
        isFrozen: false,
    },
};

export const LoadingState: Story = {
  parameters: {
    docs: {
      description: {
        story: 'VirtualCardPreview in a loading state, showing the card skeleton while card details are being fetched.',
      },
    },
  },
};
