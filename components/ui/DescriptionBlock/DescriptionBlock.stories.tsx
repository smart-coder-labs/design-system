import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DescriptionBlock, DescriptionMetadataItem } from './DescriptionBlock';
import { Badge } from '../Badge';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const metadata: DescriptionMetadataItem[] = [
  { label: 'Total Revenue', value: '$124,500', icon: <DollarSign className="w-4 h-4" /> },
  { label: 'Active Users', value: '2,847', icon: <Users className="w-4 h-4" /> },
  { label: 'Growth Rate', value: '+12.5%', icon: <TrendingUp className="w-4 h-4" />, hint: 'vs last month' },
];

const meta: Meta<typeof DescriptionBlock> = {
  title: 'Data Display/DescriptionBlock',
  component: DescriptionBlock,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Fintech Dashboard Pro',
    subtitle: 'Enterprise-grade financial dashboard',
    description:
      'A comprehensive analytics platform designed for fintech companies. Track revenue, monitor user growth, and manage financial operations in real-time.',
    badges: [<Badge variant="primary">Active</Badge>, <Badge variant="default">v2.4</Badge>],
    metadata,
  },
};

export const Stacked: Story = {
  args: {
    title: 'Investment Portfolio',
    eyebrow: 'Q2 2026',
    description:
      'Diversified portfolio with exposure to technology, healthcare, and renewable energy sectors.',
    layout: 'stacked',
    metadata: [
      { label: 'Total Value', value: '$285,000' },
      { label: 'ROI', value: '+8.3%' },
    ],
  },
};

export const SplitLayout: Story = {
  args: {
    title: 'Company Profile',
    subtitle: 'Acme Financial Services',
    description: 'Leading provider of digital banking solutions in Latin America.',
    layout: 'split',
    metadata: [
      { label: 'Founded', value: '2018' },
      { label: 'Employees', value: '340' },
      { label: 'Funding', value: '$12M Series B' },
    ],
  },
};

export const GlassVariant: Story = {
  args: {
    title: 'Premium Account',
    variant: 'glass',
    metadata: [
      { label: 'Credit Limit', value: '$25,000' },
      { label: 'Available', value: '$18,400' },
    ],
  },
};

export const SoftVariant: Story = {
  args: {
    title: 'Quick Overview',
    variant: 'soft',
    metadata: [
      { label: 'Today', value: '+$340' },
    ],
    align: 'center',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Pending Approvals',
    description: 'Review and approve pending transactions.',
    metadata,
    footer: <p className="text-sm text-text-tertiary">3 items pending review</p>,
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
