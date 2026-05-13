import type { Meta, StoryObj } from '@storybook/react';
import { CurrencyConverterWidget } from './CurrencyConverterWidget';

const meta = {
    title: 'Components/CurrencyConverterWidget',
    component: CurrencyConverterWidget,
    tags: ['autodocs'],
} satisfies Meta<typeof CurrencyConverterWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultCurrencies = [
    { code: 'USD', flag: '🇺🇸', name: 'US Dollar' },
    { code: 'EUR', flag: '🇪🇺', name: 'Euro' },
    { code: 'GBP', flag: '🇬🇧', name: 'British Pound' },
    { code: 'JPY', flag: '🇯🇵', name: 'Japanese Yen' },
    { code: 'MXN', flag: '🇲🇽', name: 'Mexican Peso' },
    { code: 'BRL', flag: '🇧🇷', name: 'Brazilian Real' },
    { code: 'CAD', flag: '🇨🇦', name: 'Canadian Dollar' },
    { code: 'CHF', flag: '🇨🇭', name: 'Swiss Franc' },
];

export const Default: Story = {
    args: {
        currencies: defaultCurrencies,
        exchangeRate: 0.92,
        feePercentage: 0.5,
        estimatedDelivery: 'In seconds',
    },
};

export const EURtoGBP: Story = {
    args: {
        currencies: defaultCurrencies,
        exchangeRate: 0.86,
        feePercentage: 0.3,
        estimatedDelivery: '1-2 business days',
    },
};

export const USDtoMXN: Story = {
    args: {
        currencies: defaultCurrencies,
        exchangeRate: 17.25,
        feePercentage: 1.0,
        estimatedDelivery: 'In seconds',
    },
};

export const HighFee: Story = {
    args: {
        currencies: defaultCurrencies,
        exchangeRate: 1.35,
        feePercentage: 3.5,
        estimatedDelivery: '2-3 business days',
    },
};

export const ZeroFee: Story = {
    args: {
        currencies: defaultCurrencies,
        exchangeRate: 1.12,
        feePercentage: 0,
        estimatedDelivery: 'In seconds',
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
export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'CurrencyConverterWidget used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};
