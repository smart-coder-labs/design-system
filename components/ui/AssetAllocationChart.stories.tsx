import type { Meta, StoryObj } from '@storybook/react';
import { AssetAllocationChart } from './AssetAllocationChart';

const meta = {
    title: 'Components/AssetAllocationChart',
    component: AssetAllocationChart,
    tags: ['autodocs'],
} satisfies Meta<typeof AssetAllocationChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleAssets = [
    { id: '1', name: 'US Tech Stocks', ticker: 'VGT', value: 45000, color: '#007AFF', riskLevel: 'high' as const },
    { id: '2', name: 'Government Bonds', ticker: 'BND', value: 25000, color: '#34C759', riskLevel: 'low' as const },
    { id: '3', name: 'Real Estate ETF', ticker: 'VNQ', value: 18000, color: '#FF9500', riskLevel: 'medium' as const },
    { id: '4', name: 'Crypto Index', ticker: 'CRYP', value: 12000, color: '#AF52DE', riskLevel: 'high' as const },
    { id: '5', name: 'International Equities', ticker: 'VXUS', value: 10000, color: '#5AC8FA', riskLevel: 'medium' as const },
];

export const Default: Story = {
    args: {
        assets: sampleAssets,
        currency: 'USD',
    },
};

export const EuroCurrency: Story = {
    args: {
        assets: sampleAssets,
        currency: 'EUR',
    },
};

export const TwoAssets: Story = {
    args: {
        assets: sampleAssets.slice(0, 2),
        currency: 'USD',
    },
};

export const SingleAsset: Story = {
    args: {
        assets: [sampleAssets[0]],
        currency: 'USD',
    },
};

export const ConservativePortfolio: Story = {
    args: {
        assets: [
            { id: '1', name: 'Government Bonds', ticker: 'BND', value: 60000, color: '#34C759', riskLevel: 'low' as const },
            { id: '2', name: 'T-Bills', ticker: 'TBIL', value: 25000, color: '#5AC8FA', riskLevel: 'low' as const },
            { id: '3', name: 'Dividend Stocks', ticker: 'VYM', value: 15000, color: '#007AFF', riskLevel: 'medium' as const },
        ],
        currency: 'USD',
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
        story: 'AssetAllocationChart used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};
