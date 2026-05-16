import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { JargonTooltip } from './JargonTooltip';

const meta: Meta<typeof JargonTooltip> = {
  title: 'Fintech/Education/JargonTooltip',
  component: JargonTooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    term: 'APY',
    definition: 'Annual Percentage Yield — the real rate of return on your savings, including compound interest.',
    children: <span className="text-accent-blue underline decoration-dotted cursor-help">4.5% APY</span>,
  },
};

export const FintechTerms: Story = {
  render: () => (
    <div className="w-96 space-y-3 text-sm">
      <p className="text-text-primary">
        Your <JargonTooltip term="APR" definition="Annual Percentage Rate — the yearly cost of borrowing, including interest and fees.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">APR</span>
        </JargonTooltip> for this loan is 8.5%.
      </p>
      <p className="text-text-primary">
        This <JargonTooltip term="ACH" definition="Automated Clearing House — an electronic network for financial transactions in the US.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">ACH</span>
        </JargonTooltip> transfer will arrive in 2-3 business days.
      </p>
      <p className="text-text-primary">
        Your portfolio includes <JargonTooltip term="ETF" definition="Exchange-Traded Fund — a basket of securities that trades on an exchange like a stock.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">ETFs</span>
        </JargonTooltip> and individual stocks.
      </p>
    </div>
  ),
};

export const CryptoTerms: Story = {
  render: () => (
    <div className="w-96 space-y-3 text-sm">
      <p className="text-text-primary">
        Transaction requires 12 <JargonTooltip term="Confirmations" definition="The number of blocks added to the blockchain after a transaction is included. More confirmations = more secure.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">confirmations</span>
        </JargonTooltip> before funds are available.
      </p>
      <p className="text-text-primary">
        Your <JargonTooltip term="Gas Fee" definition="The fee paid to miners/validators for processing a transaction on a blockchain network.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">gas fee</span>
        </JargonTooltip> is currently 0.002 ETH.
      </p>
      <p className="text-text-primary">
        You can <JargonTooltip term="Staking" definition="Locking up cryptocurrency to support network operations in exchange for rewards.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">stake</span>
        </JargonTooltip> your ETH to earn up to 5% APY.
      </p>
    </div>
  ),
};

export const InvestmentTerms: Story = {
  render: () => (
    <div className="w-96 space-y-3 text-sm">
      <p>
        <JargonTooltip term="Diversification" definition="Spreading investments across different assets to reduce risk.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">Diversification</span>
        </JargonTooltip> is key to a healthy portfolio.
      </p>
      <p>
        This fund has a 0.75% <JargonTooltip term="Expense Ratio" definition="The annual fee charged by a fund to cover operating expenses, expressed as a percentage of assets.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">expense ratio</span>
        </JargonTooltip>.
      </p>
      <p>
        Your <JargonTooltip term="Cost Basis" definition="The original value of an asset for tax purposes, used to calculate capital gains or losses.">
          <span className="text-accent-blue underline decoration-dotted cursor-help">cost basis</span>
        </JargonTooltip> for BTC is $42,000.
      </p>
    </div>
  ),
};

export const InlineTerm: Story = {
  render: () => (
    <p className="text-sm text-text-primary">
      Opening a <JargonTooltip term="CD" definition="Certificate of Deposit — a time deposit with a fixed maturity date and interest rate offered by banks.">
        <span className="text-accent-blue underline decoration-dotted cursor-help font-semibold">CD</span>
      </JargonTooltip> can earn higher interest than a regular savings account.
    </p>
  ),
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
        story: 'JargonTooltip used in a realistic fintech/banking context, demonstrating how it integrates into a financial dashboard workflow.',
      },
    },
  },
};
