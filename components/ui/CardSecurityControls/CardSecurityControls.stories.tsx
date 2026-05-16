import type { Meta, StoryObj } from '@storybook/react';
import { CardSecurityControls } from './CardSecurityControls';

const meta = {
    title: 'Fintech/Cards/CardSecurityControls',
    component: CardSecurityControls,
    tags: ['autodocs'],
} satisfies Meta<typeof CardSecurityControls>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultControls = [
    {
        id: 'freeze',
        label: 'Freeze Card',
        description: 'Temporarily block all card transactions',
        icon: '❄️',
        checked: false,
        variant: 'danger' as const,
    },
    {
        id: 'limits',
        label: 'Spending Limits',
        description: 'Set daily spending and ATM withdrawal limits',
        icon: '📊',
        checked: true,
    },
    {
        id: 'international',
        label: 'International Purchases',
        description: 'Allow transactions from foreign merchants',
        icon: '🌐',
        checked: false,
    },
    {
        id: 'online',
        label: 'Online Payments',
        description: 'Enable card for online transactions',
        icon: '🛒',
        checked: true,
    },
];

export const Default: Story = {
    args: {
        controls: defaultControls,
        title: 'Card Controls',
    },
};

export const AllDisabled: Story = {
    args: {
        controls: defaultControls.map(c => ({ ...c, checked: false })),
        title: 'All Controls Disabled',
    },
};

export const AllEnabled: Story = {
    args: {
        controls: defaultControls.map(c => ({ ...c, checked: true, variant: c.id === 'freeze' ? 'danger' : 'default' })),
        title: 'All Controls Enabled',
    },
};

export const CustomTitle: Story = {
    args: {
        controls: defaultControls.slice(0, 2),
        title: 'Security Preferences',
    },
};

export const Empty: Story = {
    args: {
        controls: [],
        title: 'Card Controls',
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
        story: 'CardSecurityControls used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};
