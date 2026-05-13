import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { MasonryLayout } from './MasonryLayout';

const meta: Meta<typeof MasonryLayout> = {
  title: 'Layout/MasonryLayout',
  component: MasonryLayout,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { id: '1', height: 200, label: 'Portfolio Summary', bg: 'bg-accent-blue/10' },
  { id: '2', height: 300, label: 'Revenue Chart', bg: 'bg-emerald-500/10' },
  { id: '3', height: 150, label: 'Quick Stats', bg: 'bg-amber-500/10' },
  { id: '4', height: 250, label: 'Transaction List', bg: 'bg-purple-500/10' },
  { id: '5', height: 180, label: 'Savings Goal', bg: 'bg-rose-500/10' },
  { id: '6', height: 220, label: 'Market News', bg: 'bg-cyan-500/10' },
];

export const Default: Story = {
  args: {
    columns: 3,
    gap: 'md',
    children: items.map(item => (
      <div key={item.id} className={`${item.bg} rounded-xl p-4`} style={{ height: item.height }}>
        <p className="text-sm font-semibold text-text-primary">{item.label}</p>
      </div>
    )),
  },
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
    gap: 'lg',
    children: items.map(item => (
      <div key={item.id} className={`${item.bg} rounded-xl p-4`} style={{ height: item.height * 1.2 }}>
        <p className="text-sm font-semibold text-text-primary">{item.label}</p>
      </div>
    )),
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    gap: 'sm',
    children: items.slice(0, 4).map(item => (
      <div key={item.id} className={`${item.bg} rounded-xl p-3`} style={{ height: item.height * 0.8 }}>
        <p className="text-xs font-semibold text-text-primary">{item.label}</p>
      </div>
    )),
  },
};

export const DashboardWidgets: Story = {
  args: {
    columns: 3,
    gap: 'md',
    children: [
      <div key="1" className="bg-gradient-to-br from-accent-blue/10 to-purple-500/10 rounded-xl p-5 h-48">
        <p className="text-xs text-text-tertiary uppercase font-semibold tracking-wide">Total Balance</p>
        <p className="text-2xl font-bold text-text-primary mt-2">$128,430</p>
        <p className="text-sm text-status-success font-semibold mt-1">+5.2% this month</p>
      </div>,
      <div key="2" className="bg-surface-secondary rounded-xl p-4 h-64">
        <p className="text-xs text-text-tertiary uppercase font-semibold tracking-wide mb-3">Recent Transactions</p>
        {['-$250.00', '+$5,400.00', '-$15.99', '-$89.50'].map((amt, i) => (
          <div key={i} className="flex justify-between py-2 border-b border-border-primary last:border-0">
            <span className="text-xs text-text-primary">Transaction {i + 1}</span>
            <span className={`text-xs font-semibold ${amt.startsWith('+') ? 'text-status-success' : 'text-text-primary'}`}>{amt}</span>
          </div>
        ))}
      </div>,
      <div key="3" className="bg-emerald-500/10 rounded-xl p-4 h-36">
        <p className="text-xs text-emerald-600 uppercase font-semibold tracking-wide">Income</p>
        <p className="text-2xl font-bold text-emerald-600 mt-1">$12,430</p>
        <p className="text-xs text-text-tertiary mt-1">+8.1% vs last month</p>
      </div>,
      <div key="4" className="bg-amber-500/10 rounded-xl p-4 h-36">
        <p className="text-xs text-amber-600 uppercase font-semibold tracking-wide">Expenses</p>
        <p className="text-2xl font-bold text-amber-600 mt-1">$8,210</p>
        <p className="text-xs text-text-tertiary mt-1">-3.4% vs last month</p>
      </div>,
      <div key="5" className="bg-purple-500/10 rounded-xl p-4 h-52">
        <p className="text-xs text-purple-600 uppercase font-semibold tracking-wide mb-2">Portfolio</p>
        <div className="space-y-2">
          {[{ name: 'BTC', val: '$52,340', chg: '+2.1%' }, { name: 'ETH', val: '$31,200', chg: '-0.8%' }, { name: 'SOL', val: '$18,750', chg: '+8.4%' }].map((a, i) => (
            <div key={i} className="flex justify-between text-xs">
              <span className="font-medium text-text-primary">{a.name}</span>
              <span className="text-text-primary">{a.val}</span>
              <span className={a.chg.startsWith('+') ? 'text-status-success' : 'text-status-error'}>{a.chg}</span>
            </div>
          ))}
        </div>
      </div>,
      <div key="6" className="bg-rose-500/10 rounded-xl p-4 h-40">
        <p className="text-xs text-rose-600 uppercase font-semibold tracking-wide mb-2">Savings Goal</p>
        <p className="text-xl font-bold text-text-primary">$32,000</p>
        <div className="w-full h-2 bg-surface-tertiary rounded-full mt-2 overflow-hidden">
          <div className="h-full bg-rose-500 rounded-full" style={{ width: '64%' }} />
        </div>
        <p className="text-xs text-text-tertiary mt-1">64% of $50,000 goal</p>
      </div>,
    ],
  },
};

export const FinancialWidgets: Story = {
    args: {
        columns: 3,
        gap: 12,
        children: [
            <div key="1" style={{ background: 'linear-gradient(135deg, #007AFF, #5856D6)', color: 'white', padding: '24px', borderRadius: '16px', fontWeight: 600, fontSize: 18 }}>
                <div style={{ fontSize: 12, opacity: 0.8, marginBottom: 4 }}>BALANCE</div>
                $45,230.80
            </div>,
            <div key="2" style={{ background: '#34C759', color: 'white', padding: '48px 16px', borderRadius: '12px', fontWeight: 600 }}>
                Portfolio +12.5%
            </div>,
            <div key="3" style={{ background: '#FF9500', color: 'white', padding: '32px 16px', borderRadius: '12px', fontWeight: 600 }}>
                Savings Goal<br /><span style={{ fontSize: 12 }}>75% complete</span>
            </div>,
            <div key="4" style={{ background: '#FF3B30', color: 'white', padding: '64px 16px', borderRadius: '12px', fontWeight: 600 }}>
                Spending -8%
            </div>,
            <div key="5" style={{ background: '#5856D6', color: 'white', padding: '40px 16px', borderRadius: '12px', fontWeight: 600 }}>
                Credit Score 780
            </div>,
            <div key="6" style={{ background: '#FF2D55', color: 'white', padding: '28px 16px', borderRadius: '12px', fontWeight: 600 }}>
                Recent Transactions
            </div>,
        ],
    },
};

export const PhotoGallery: Story = {
    args: {
        columns: 4,
        gap: 8,
        children: Array.from({ length: 8 }, (_, i) => (
            <div key={i} style={{
                height: 80 + Math.random() * 100,
                background: ['#FF6B6B','#4ECDC4','#45B7D1','#96CEB4','#FFEAA7','#DDA0DD','#98D8C8','#F7DC6F'][i],
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 600,
            }}>
                Item {i + 1}
            </div>
        )),
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
