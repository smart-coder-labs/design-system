import type { Meta, StoryObj } from '@storybook/react';
import { ScatterPlot } from '../../components/ui/charts/ScatterPlot';

const performanceData = [
  { x: 12, y: 28, label: 'Project Alpha' },
  { x: 18, y: 42, label: 'Project Beta' },
  { x: 24, y: 35, label: 'Project Gamma' },
  { x: 31, y: 58, label: 'Project Delta' },
  { x: 38, y: 52, label: 'Project Epsilon' },
  { x: 45, y: 67, label: 'Project Zeta' },
  { x: 52, y: 45, label: 'Project Eta' },
  { x: 58, y: 73, label: 'Project Theta' },
  { x: 65, y: 61, label: 'Project Iota' },
  { x: 72, y: 82, label: 'Project Kappa' },
  { x: 78, y: 75, label: 'Project Lambda' },
  { x: 85, y: 91, label: 'Project Mu' },
  { x: 15, y: 38, label: 'Project Nu' },
  { x: 22, y: 31, label: 'Project Xi' },
  { x: 35, y: 48, label: 'Project Omicron' },
  { x: 42, y: 55, label: 'Project Pi' },
  { x: 48, y: 62, label: 'Project Rho' },
  { x: 55, y: 50, label: 'Project Sigma' },
  { x: 62, y: 78, label: 'Project Tau' },
  { x: 68, y: 69, label: 'Project Upsilon' },
  { x: 75, y: 85, label: 'Project Phi' },
  { x: 82, y: 72, label: 'Project Chi' },
  { x: 88, y: 88, label: 'Project Psi' },
  { x: 92, y: 95, label: 'Project Omega' },
  { x: 28, y: 22, label: 'Initiative A' },
  { x: 33, y: 40, label: 'Initiative B' },
  { x: 40, y: 36, label: 'Initiative C' },
  { x: 50, y: 58, label: 'Initiative D' },
  { x: 60, y: 54, label: 'Initiative E' },
  { x: 70, y: 64, label: 'Initiative F' },
  { x: 80, y: 79, label: 'Initiative G' },
];

const meta: Meta<typeof ScatterPlot> = {
  title: 'Charts/ScatterPlot',
  component: ScatterPlot,
  argTypes: {
    size: { control: 'radio', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['default', 'glass', 'bordered', 'elevated'] },
    animated: { control: 'boolean' },
    interactive: { control: 'boolean' },
    showTooltip: { control: 'boolean' },
    showGrid: { control: 'boolean' },
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
type Story = StoryObj<typeof ScatterPlot>;

export const Default: Story = {
  args: {
    data: performanceData,
    showGrid: true,
    showTooltip: true,
    title: 'Project Performance',
    subtitle: 'Effort vs. Impact Score',
  },
};

export const Variants: Story = {
  name: '🎨 Variants',
  render: () => (
    <div className="grid grid-cols-2 gap-6">
      {(['default', 'glass', 'bordered', 'elevated'] as const).map((v) => (
        <ScatterPlot key={v} data={performanceData} variant={v} title={v} showGrid />
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
    data: performanceData,
    variant: 'bordered',
    showGrid: true,
    title: 'Project Performance',
    subtitle: 'Dark Mode Preview',
  },
};

export const SalesVsMarketingSpend: Story = {
  name: '📊 Sales vs Marketing Spend',
  args: {
    data: [
      { x: 5200, y: 42000, label: 'Jan Promo', size: 8, color: '#007AFF' },
      { x: 8100, y: 58000, label: 'Feb Campaign', size: 12, color: '#007AFF' },
      { x: 12500, y: 71000, label: 'Mar Launch', size: 18, color: '#34C759' },
      { x: 6800, y: 45000, label: 'Apr Organic', size: 6, color: '#8E8E93' },
      { x: 15200, y: 89000, label: 'May Blitz', size: 22, color: '#34C759' },
      { x: 9400, y: 62000, label: 'Jun Steady', size: 10, color: '#007AFF' },
      { x: 18700, y: 105000, label: 'Jul Peak', size: 25, color: '#FF9500' },
      { x: 11200, y: 73000, label: 'Aug Back2School', size: 14, color: '#007AFF' },
      { x: 7500, y: 48000, label: 'Sep Reduced', size: 7, color: '#8E8E93' },
      { x: 22100, y: 128000, label: 'Oct Holiday Prep', size: 28, color: '#FF9500' },
      { x: 28500, y: 156000, label: 'Nov Black Friday', size: 35, color: '#FF2D55' },
      { x: 35200, y: 198000, label: 'Dec Holiday', size: 40, color: '#FF2D55' },
      { x: 4200, y: 35000, label: 'Q1 Email', size: 5, color: '#8E8E93' },
      { x: 6300, y: 41000, label: 'Q1 Social', size: 8, color: '#007AFF' },
      { x: 9800, y: 55000, label: 'Q2 Content', size: 11, color: '#007AFF' },
      { x: 13500, y: 78000, label: 'Q2 PPC', size: 16, color: '#34C759' },
      { x: 16800, y: 92000, label: 'Q3 Display', size: 20, color: '#34C759' },
      { x: 20300, y: 112000, label: 'Q3 Influencer', size: 24, color: '#FF9500' },
      { x: 24800, y: 135000, label: 'Q4 Retarget', size: 30, color: '#FF9500' },
      { x: 31200, y: 172000, label: 'Q4 Full Funnel', size: 38, color: '#FF2D55' },
      { x: 3800, y: 31000, label: 'Webinar A', size: 4, color: '#8E8E93' },
      { x: 7200, y: 52000, label: 'Webinar B', size: 9, color: '#007AFF' },
      { x: 10800, y: 68000, label: 'Trade Show', size: 15, color: '#34C759' },
      { x: 14100, y: 82000, label: 'Podcast Ads', size: 17, color: '#34C759' },
      { x: 17500, y: 96000, label: 'Sponsorship A', size: 21, color: '#FF9500' },
      { x: 21800, y: 118000, label: 'Sponsorship B', size: 26, color: '#FF9500' },
      { x: 26200, y: 142000, label: 'Co-Marketing', size: 32, color: '#FF2D55' },
      { x: 29800, y: 158000, label: 'Brand Collab', size: 36, color: '#FF2D55' },
      { x: 33500, y: 185000, label: 'Mega Campaign', size: 42, color: '#FF2D55' },
      { x: 8500, y: 53000, label: 'SEO Push', size: 10, color: '#007AFF' },
      { x: 11800, y: 65000, label: 'Affiliate', size: 13, color: '#34C759' },
      { x: 15800, y: 85000, label: 'Direct Mail', size: 19, color: '#34C759' },
      { x: 19200, y: 101000, label: 'Event Mktg', size: 23, color: '#FF9500' },
      { x: 23500, y: 125000, label: 'TV Spot', size: 29, color: '#FF9500' },
      { x: 27100, y: 148000, label: 'Radio', size: 33, color: '#FF2D55' },
      { x: 30800, y: 165000, label: 'OOH', size: 37, color: '#FF2D55' },
      { x: 34800, y: 192000, label: 'Super Bowl', size: 44, color: '#FF2D55' },
      { x: 5800, y: 39000, label: 'Community', size: 6, color: '#8E8E93' },
      { x: 9100, y: 57000, label: 'PR Launch', size: 11, color: '#007AFF' },
      { x: 12800, y: 74000, label: 'Newsletter', size: 15, color: '#34C759' },
    ],
    showGrid: true,
    showTooltip: true,
    showLabels: true,
    variant: 'glass',
    size: 'lg',
    animated: true,
    interactive: true,
    title: 'Marketing ROI Analysis',
    subtitle: 'Ad Spend ($) vs Revenue Generated ($)',
  },
  decorators: [
    (Story) => (
      <div className="w-full max-w-3xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 p-6 rounded-2xl">
        <Story />
      </div>
    ),
  ],
};

export const HousingPriceAnalysis: Story = {
  name: '🏘️ Housing Price Analysis',
  args: {
    data: [
      { x: 850, y: 185000, label: '1BR Apt' },
      { x: 920, y: 198000, label: '1BR Condo' },
      { x: 1050, y: 225000, label: '2BR Apt' },
      { x: 1180, y: 252000, label: '2BR Condo' },
      { x: 1320, y: 289000, label: '2BR House' },
      { x: 1450, y: 315000, label: '3BR Apt' },
      { x: 1580, y: 342000, label: '3BR Condo' },
      { x: 1720, y: 378000, label: '3BR Ranch' },
      { x: 1850, y: 412000, label: '3BR Colonial' },
      { x: 1980, y: 445000, label: '4BR Split' },
      { x: 2120, y: 485000, label: '4BR Ranch' },
      { x: 2280, y: 525000, label: '4BR Colonial' },
      { x: 2450, y: 568000, label: '4BR Tudor' },
      { x: 2600, y: 612000, label: '5BR Colonial' },
      { x: 2780, y: 658000, label: '5BR Victorian' },
      { x: 2950, y: 705000, label: '5BR Modern' },
      { x: 3100, y: 752000, label: '5BR Estate' },
      { x: 3300, y: 815000, label: '6BR Manor' },
      { x: 3500, y: 878000, label: '6BR Estate' },
      { x: 3750, y: 945000, label: 'Luxury Villa' },
      { x: 900, y: 210000, label: 'Studio Loft' },
      { x: 1100, y: 265000, label: '2BR Loft' },
      { x: 1350, y: 310000, label: '2BR Townhome' },
      { x: 1500, y: 355000, label: '3BR Townhome' },
      { x: 1650, y: 395000, label: '3BR Cape Cod' },
      { x: 1800, y: 430000, label: '3BR Craftsman' },
      { x: 2000, y: 468000, label: '4BR Craftsman' },
      { x: 2200, y: 510000, label: '4BR Modern' },
      { x: 2400, y: 555000, label: '4BR Farmhouse' },
      { x: 2650, y: 635000, label: '5BR Farmhouse' },
      { x: 2850, y: 682000, label: '5BR Cape Cod' },
      { x: 3050, y: 738000, label: '5BR Craftsman' },
      { x: 3250, y: 798000, label: '6BR Colonial' },
      { x: 3450, y: 862000, label: '6BR Victorian' },
      { x: 3650, y: 928000, label: 'Penthouse' },
      { x: 3850, y: 1050000, label: 'Mansion' },
      { x: 950, y: 192000, label: '1BR Loft' },
      { x: 1150, y: 248000, label: '2BR Flat' },
      { x: 1400, y: 298000, label: '2BR Duplex' },
      { x: 1550, y: 365000, label: '3BR Duplex' },
      { x: 1750, y: 408000, label: '3BR Split' },
      { x: 1900, y: 452000, label: '4BR Cape Cod' },
      { x: 2050, y: 478000, label: '4BR Victorian' },
      { x: 2350, y: 542000, label: '4BR Tudor' },
      { x: 2500, y: 592000, label: '5BR Split' },
      { x: 2700, y: 645000, label: '5BR Ranch' },
      { x: 2900, y: 695000, label: '5BR Tudor' },
      { x: 3150, y: 768000, label: '6BR Modern' },
      { x: 3400, y: 845000, label: '6BR Farmhouse' },
      { x: 3700, y: 962000, label: 'Grand Estate' },
    ],
    showGrid: true,
    showTooltip: true,
    variant: 'elevated',
    size: 'lg',
    animated: true,
    interactive: true,
    title: 'Housing Market Analysis',
    subtitle: 'Square Footage vs. Listing Price ($)',
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
    data: performanceData,
    size: 'md',
    variant: 'default',
    animated: true,
    interactive: true,
    showTooltip: true,
    showGrid: true,
    showLabels: true,
    title: 'Playground',
    subtitle: 'Adjust controls to customize',
  },
};
