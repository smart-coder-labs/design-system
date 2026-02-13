import type { Meta, StoryObj } from '@storybook/react';
import { LineChart } from '../../components/ui/charts/LineChart';

const monthlyFinancialData = [
  { label: 'Jan', values: [284000, 195000, 89000] },
  { label: 'Feb', values: [312000, 208000, 104000] },
  { label: 'Mar', values: [298000, 215000, 83000] },
  { label: 'Apr', values: [345000, 228000, 117000] },
  { label: 'May', values: [378000, 241000, 137000] },
  { label: 'Jun', values: [356000, 235000, 121000] },
  { label: 'Jul', values: [392000, 252000, 140000] },
  { label: 'Aug', values: [415000, 268000, 147000] },
  { label: 'Sep', values: [438000, 275000, 163000] },
  { label: 'Oct', values: [462000, 289000, 173000] },
  { label: 'Nov', values: [485000, 302000, 183000] },
  { label: 'Dec', values: [521000, 318000, 203000] },
];

const financialSeries = [
  { name: 'Revenue', color: '#007AFF' },
  { name: 'Costs', color: '#FF3B30' },
  { name: 'Profit', color: '#34C759' },
];

const meta: Meta<typeof LineChart> = {
  title: 'Charts/LineChart',
  component: LineChart,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showLegend: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showGrid: { control: 'boolean' },
    showDots: { control: 'boolean' },
    curved: { control: 'boolean' },
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
type Story = StoryObj<typeof LineChart>;

export const Default: Story = {
  args: {
    data: monthlyFinancialData,
    series: financialSeries,
    showLegend: true,
    showGrid: true,
    title: 'Revenue, Costs & Profit',
    subtitle: 'FY 2024 Monthly Trend',
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <LineChart
          key={v}
          data={monthlyFinancialData}
          series={financialSeries}
          variant={v}
          title={v}
          showLegend
        />
      ))}
    </div>
  ),
};

export const Sizes: Story = {
  name: '📐 Sizes',
  render: () => (
    <div className="space-y-6">
      {(['sm', 'md', 'lg'] as const).map((s) => (
        <LineChart
          key={s}
          data={monthlyFinancialData}
          series={financialSeries}
          size={s}
          title={s}
          variant="bordered"
          showLegend
        />
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
    data: monthlyFinancialData,
    series: financialSeries,
    variant: 'bordered',
    showLegend: true,
    curved: true,
    title: 'Revenue Trend',
    subtitle: 'Dark Mode Preview',
  },
};

export const StockMarketComparison: Story = {
  name: '📈 Stock Market Comparison',
  args: {
    data: [
      { label: 'W1', values: [182.5, 142.3, 378.2, 131.8] },
      { label: 'W2', values: [185.1, 145.7, 382.5, 134.2] },
      { label: 'W3', values: [183.8, 148.9, 375.1, 137.6] },
      { label: 'W4', values: [188.2, 151.2, 389.7, 140.1] },
      { label: 'W5', values: [191.6, 149.5, 395.3, 138.8] },
      { label: 'W6', values: [189.3, 153.8, 401.2, 142.5] },
      { label: 'W7', values: [194.7, 156.1, 398.6, 145.9] },
      { label: 'W8', values: [198.2, 154.3, 410.8, 143.2] },
      { label: 'W9', values: [195.8, 158.7, 415.2, 148.6] },
      { label: 'W10', values: [201.4, 161.2, 408.9, 151.3] },
      { label: 'W11', values: [205.9, 159.8, 422.5, 149.7] },
      { label: 'W12', values: [203.1, 163.4, 418.1, 153.2] },
      { label: 'W13', values: [208.6, 166.7, 431.6, 156.8] },
      { label: 'W14', values: [212.3, 164.2, 427.3, 154.1] },
      { label: 'W15', values: [215.8, 168.9, 435.8, 158.9] },
      { label: 'W16', values: [211.4, 171.5, 442.1, 161.5] },
      { label: 'W17', values: [218.2, 169.8, 438.7, 159.2] },
      { label: 'W18', values: [222.7, 173.2, 448.3, 163.8] },
      { label: 'W19', values: [219.5, 176.8, 445.9, 167.1] },
      { label: 'W20', values: [225.1, 174.5, 452.6, 164.5] },
      { label: 'W21', values: [228.9, 178.3, 458.2, 169.2] },
      { label: 'W22', values: [232.4, 175.9, 462.8, 166.8] },
      { label: 'W23', values: [229.8, 180.6, 468.5, 171.4] },
      { label: 'W24', values: [235.2, 183.1, 475.2, 174.9] },
    ],
    series: [
      { name: 'AAPL', color: '#007AFF' },
      { name: 'MSFT', color: '#34C759' },
      { name: 'NVDA', color: '#FF9500' },
      { name: 'GOOGL', color: '#FF2D55' },
    ],
    curved: true,
    showLegend: true,
    showGrid: true,
    showTooltip: true,
    variant: 'glass',
    size: 'lg',
    title: 'Tech Stock Performance',
    subtitle: '24-Week Price Comparison ($)',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const ClimateData: Story = {
  name: '🌡️ Climate Data',
  args: {
    data: [
      { label: 'Jan', values: [7.2, -1.8, 2.7] },
      { label: 'Feb', values: [9.1, -0.5, 4.3] },
      { label: 'Mar', values: [13.8, 2.9, 8.4] },
      { label: 'Apr', values: [18.5, 6.7, 12.6] },
      { label: 'May', values: [23.2, 11.4, 17.3] },
      { label: 'Jun', values: [28.6, 16.8, 22.7] },
      { label: 'Jul', values: [32.1, 20.3, 26.2] },
      { label: 'Aug', values: [31.4, 19.7, 25.6] },
      { label: 'Sep', values: [26.8, 15.2, 21.0] },
      { label: 'Oct', values: [20.3, 9.8, 15.1] },
      { label: 'Nov', values: [13.5, 4.1, 8.8] },
      { label: 'Dec', values: [8.6, -0.2, 4.2] },
    ],
    series: [
      { name: 'High °C', color: '#FF3B30' },
      { name: 'Low °C', color: '#007AFF' },
      { name: 'Average °C', color: '#FF9500' },
    ],
    showDots: true,
    showLegend: true,
    showGrid: true,
    showTooltip: true,
    curved: true,
    variant: 'bordered',
    size: 'lg',
    title: 'Annual Temperature Profile',
    subtitle: 'New York City — 2024 Monthly Averages',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
        <Story />
      </div>
    ),
  ],
};

export const Playground: Story = {
  name: '🎮 Playground',
  args: {
    data: monthlyFinancialData,
    series: financialSeries,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showLegend: true,
    showTooltip: true,
    showGrid: true,
    showDots: true,
    curved: false,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
