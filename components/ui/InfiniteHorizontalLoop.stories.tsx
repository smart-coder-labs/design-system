import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InfiniteHorizontalLoop } from './InfiniteHorizontalLoop';

const meta: Meta<typeof InfiniteHorizontalLoop> = {
  title: 'Components/InfiniteHorizontalLoop',
  component: InfiniteHorizontalLoop,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const cryptoLogos = [
  <div key="1" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Bitcoin</div>,
  <div key="2" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Ethereum</div>,
  <div key="3" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Solana</div>,
  <div key="4" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Cardano</div>,
  <div key="5" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Polkadot</div>,
  <div key="6" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Avalanche</div>,
];

const logos = [
  <div key="1" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Stripe</div>,
  <div key="2" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">PayPal</div>,
  <div key="3" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Square</div>,
  <div key="4" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Plaid</div>,
  <div key="5" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Revolut</div>,
  <div key="6" className="px-8 py-4 bg-surface-secondary rounded-2xl border border-border-primary font-bold text-text-primary text-lg">Nubank</div>,
];

export const Default: Story = {
  args: {
    items: logos,
    speed: 20,
  },
};

export const Fast: Story = {
  args: {
    items: logos,
    speed: 10,
  },
};

export const Slow: Story = {
  args: {
    items: logos,
    speed: 40,
  },
};

export const RightDirection: Story = {
  args: {
    items: logos,
    direction: 'right',
    speed: 25,
  },
};

/** Crypto-themed brand scroll */
export const CryptoScroll: Story = {
  args: {
    items: cryptoLogos,
    speed: 22,
    direction: 'left',
  },
};

/** Many items — edge case for performance */
export const ManyItems: Story = {
  args: {
    items: Array.from({ length: 20 }, (_, i) => (
      <div key={i} className="px-6 py-3 bg-surface-secondary rounded-xl border border-border-primary font-bold text-text-primary text-sm">
        Item {i + 1}
      </div>
    )),
    speed: 30,
  },
};

/** Single item — minimal edge case */
export const SingleItem: Story = {
  args: {
    items: [logos[0]],
    speed: 15,
    gap: 'gap-4',
  },
};

/** Fast right-scroll with custom gap */
export const FastRightCustomGap: Story = {
  args: {
    items: logos,
    speed: 8,
    direction: 'right',
    gap: 'gap-12',
  },
};

/** Dark mode version */
export const DarkMode: Story = {
  args: {
    items: logos,
    speed: 25,
  },
  decorators: [
    (Story) => (
      <div className="dark p-8 bg-gray-950 rounded-xl">
        <Story />
      </div>
    ),
  ],
};

/** Mobile responsive */
export const Mobile: Story = {
  args: {
    items: logos,
    speed: 20,
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm mx-auto">
        <Story />
      </div>
    ),
  ],
};
