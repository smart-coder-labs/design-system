import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HamburgerMenuIcon } from './HamburgerMenuIcon';

const meta: Meta<typeof HamburgerMenuIcon> = {
  title: 'Components/HamburgerMenuIcon',
  component: HamburgerMenuIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClick: () => console.log('Menu toggled'),
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
    onClick: () => console.log('Menu toggled'),
  },
};

export const Small: Story = {
  args: {
    size: 20,
    onClick: () => console.log('Menu toggled'),
  },
};

export const Large: Story = {
  args: {
    size: 32,
    onClick: () => console.log('Menu toggled'),
  },
};

export const CustomColor: Story = {
  args: {
    color: '#3B82F6',
    onClick: () => console.log('Menu toggled'),
  },
};

export const MobileBankingHeader: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = React.useState(false);
    return (
      <div className="w-full max-w-sm p-4 bg-surface-primary border border-border-primary rounded-2xl">
        <div className="flex items-center justify-between">
          <p className="text-sm font-bold text-text-primary">FinFlow</p>
          <HamburgerMenuIcon isOpen={open} onClick={() => setOpen(!open)} />
        </div>
        {open && (
          <div className="mt-4 space-y-2 pt-4 border-t border-border-primary">
            <p className="text-sm text-text-primary font-medium px-2 py-2 hover:bg-surface-secondary rounded-lg cursor-pointer">Dashboard</p>
            <p className="text-sm text-text-primary font-medium px-2 py-2 hover:bg-surface-secondary rounded-lg cursor-pointer">Transactions</p>
            <p className="text-sm text-text-primary font-medium px-2 py-2 hover:bg-surface-secondary rounded-lg cursor-pointer">Accounts</p>
            <p className="text-sm text-text-primary font-medium px-2 py-2 hover:bg-surface-secondary rounded-lg cursor-pointer">Settings</p>
          </div>
        )}
      </div>
    );
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
export const FintechUseCase: Story = {
  parameters: {
    docs: {
      description: {
        story: 'HamburgerMenuIcon used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};
