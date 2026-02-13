import type { Meta, StoryObj } from '@storybook/react';
import { CandlestickChart } from '../../components/ui/charts/CandlestickChart';

const tradingData = [
  { label: 'Dec 2', open: 148.50, high: 152.80, low: 147.20, close: 151.40 },
  { label: 'Dec 3', open: 151.40, high: 155.20, low: 150.80, close: 154.60 },
  { label: 'Dec 4', open: 154.60, high: 156.90, low: 152.30, close: 153.10 },
  { label: 'Dec 5', open: 153.10, high: 157.40, low: 151.80, close: 156.80 },
  { label: 'Dec 6', open: 156.80, high: 159.20, low: 155.40, close: 158.50 },
  { label: 'Dec 9', open: 158.50, high: 162.10, low: 157.90, close: 161.30 },
  { label: 'Dec 10', open: 161.30, high: 163.80, low: 159.50, close: 160.20 },
  { label: 'Dec 11', open: 160.20, high: 164.50, low: 158.80, close: 163.70 },
  { label: 'Dec 12', open: 163.70, high: 166.20, low: 162.10, close: 165.40 },
  { label: 'Dec 13', open: 165.40, high: 168.90, low: 164.20, close: 167.80 },
  { label: 'Dec 16', open: 167.80, high: 170.50, low: 165.60, close: 166.30 },
  { label: 'Dec 17', open: 166.30, high: 169.80, low: 164.50, close: 168.90 },
  { label: 'Dec 18', open: 168.90, high: 172.30, low: 167.40, close: 171.50 },
  { label: 'Dec 19', open: 171.50, high: 174.80, low: 170.20, close: 173.60 },
  { label: 'Dec 20', open: 173.60, high: 175.20, low: 169.80, close: 170.40 },
  { label: 'Dec 23', open: 170.40, high: 173.50, low: 168.90, close: 172.80 },
  { label: 'Dec 24', open: 172.80, high: 176.10, low: 171.50, close: 175.30 },
  { label: 'Dec 26', open: 175.30, high: 178.60, low: 174.10, close: 177.90 },
  { label: 'Dec 27', open: 177.90, high: 180.40, low: 175.80, close: 176.50 },
  { label: 'Dec 30', open: 176.50, high: 179.80, low: 174.20, close: 178.60 },
];

const meta: Meta<typeof CandlestickChart> = {
  title: 'Charts/CandlestickChart',
  component: CandlestickChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showLabels: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl p-6">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CandlestickChart>;

export const Default: Story = {
  args: {
    data: tradingData,
    showTooltip: true,
    showLabels: true,
    title: 'Daily Price Action',
    subtitle: 'December 2024 — 20 Trading Days',
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <CandlestickChart key={v} data={tradingData} variant={v} title={v} />
      ))}
    </div>
  ),
};

export const DarkMode: Story = {
  name: '🌙 Dark Mode',
  decorators: [
    (Story) => (
      <div className="dark bg-[#000] p-6 rounded-2xl w-full max-w-3xl">
        <Story />
      </div>
    ),
  ],
  args: {
    data: tradingData,
    variant: 'bordered',
    showTooltip: true,
    showLabels: true,
    title: 'Price Action',
    subtitle: 'Dark Mode Preview',
  },
};

export const AAPLWeeklyChart: Story = {
  name: '📈 AAPL Weekly Chart',
  args: {
    data: [
      { label: 'Jun W1', open: 192.50, high: 198.20, low: 190.80, close: 196.40 },
      { label: 'Jun W2', open: 196.40, high: 201.30, low: 194.10, close: 199.80 },
      { label: 'Jun W3', open: 199.80, high: 203.50, low: 196.20, close: 197.60 },
      { label: 'Jun W4', open: 197.60, high: 202.80, low: 195.40, close: 201.50 },
      { label: 'Jul W1', open: 201.50, high: 207.20, low: 200.10, close: 205.80 },
      { label: 'Jul W2', open: 205.80, high: 210.60, low: 203.40, close: 208.90 },
      { label: 'Jul W3', open: 208.90, high: 213.40, low: 206.50, close: 211.20 },
      { label: 'Jul W4', open: 211.20, high: 215.80, low: 208.30, close: 209.70 },
      { label: 'Aug W1', open: 209.70, high: 214.50, low: 207.80, close: 213.10 },
      { label: 'Aug W2', open: 213.10, high: 218.30, low: 211.60, close: 216.80 },
      { label: 'Aug W3', open: 216.80, high: 221.50, low: 214.20, close: 219.40 },
      { label: 'Aug W4', open: 219.40, high: 223.80, low: 215.90, close: 217.20 },
      { label: 'Sep W1', open: 217.20, high: 222.10, low: 214.50, close: 220.60 },
      { label: 'Sep W2', open: 220.60, high: 225.40, low: 218.30, close: 223.80 },
      { label: 'Sep W3', open: 223.80, high: 228.50, low: 221.10, close: 226.90 },
      { label: 'Sep W4', open: 226.90, high: 230.20, low: 222.80, close: 224.50 },
      { label: 'Oct W1', open: 224.50, high: 229.80, low: 221.30, close: 228.10 },
      { label: 'Oct W2', open: 228.10, high: 233.50, low: 226.40, close: 231.70 },
      { label: 'Oct W3', open: 231.70, high: 236.20, low: 228.80, close: 234.50 },
      { label: 'Oct W4', open: 234.50, high: 238.90, low: 231.20, close: 233.10 },
      { label: 'Nov W1', open: 233.10, high: 238.40, low: 230.50, close: 236.80 },
      { label: 'Nov W2', open: 236.80, high: 241.20, low: 234.10, close: 239.50 },
      { label: 'Nov W3', open: 239.50, high: 244.80, low: 237.30, close: 242.90 },
      { label: 'Nov W4', open: 242.90, high: 247.50, low: 239.80, close: 241.20 },
      { label: 'Dec W1', open: 241.20, high: 246.30, low: 238.50, close: 244.80 },
      { label: 'Dec W2', open: 244.80, high: 249.60, low: 242.10, close: 247.30 },
      { label: 'Dec W3', open: 247.30, high: 252.80, low: 245.40, close: 250.60 },
      { label: 'Dec W4', open: 250.60, high: 255.20, low: 247.80, close: 253.40 },
      { label: 'Jan W1', open: 253.40, high: 258.10, low: 250.20, close: 256.70 },
      { label: 'Jan W2', open: 256.70, high: 261.50, low: 254.30, close: 259.80 },
    ],
    showTooltip: true,
    showLabels: true,
    variant: 'glass',
    size: 'lg',
    animated: true,
    interactive: true,
    title: 'AAPL — Weekly Price Chart',
    subtitle: 'Jun 2024 – Jan 2025 — 30 Weeks',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: tradingData,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showTooltip: true,
    showLabels: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
