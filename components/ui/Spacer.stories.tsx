import type { Meta, StoryObj } from '@storybook/react';
import { Spacer } from './Spacer';

const meta = {
    title: 'Components/Spacer',
    component: Spacer,
    tags: ['autodocs'],
} satisfies Meta<typeof Spacer>;

export default meta;
type Story = StoryObj<typeof meta>;

const DemoBox = ({ color }: { color?: string }) => (
    <div className="w-16 h-16 rounded-lg flex items-center justify-center text-sm font-medium" style={{ background: color || '#007AFF' }}>
        Box
    </div>
);

export const VerticalSpace: Story = {
    render: () => (
        <div className="flex flex-col">
            <DemoBox />
            <Spacer size="md" />
            <DemoBox />
            <Spacer size="md" />
            <DemoBox />
        </div>
    ),
};

export const HorizontalSpace: Story = {
    render: () => (
        <div className="flex items-center">
            <DemoBox />
            <Spacer axis="horizontal" size="md" />
            <DemoBox />
            <Spacer axis="horizontal" size="md" />
            <DemoBox />
        </div>
    ),
};

export const Sizes: Story = {
    render: () => (
        <div className="flex flex-col max-w-xs">
            <p className="text-xs text-text-secondary mb-1">xs (4px)</p>
            <div className="flex items-center">
                <DemoBox /><Spacer axis="horizontal" size="xs" /><DemoBox />
            </div>
            <Spacer size="sm" />
            <p className="text-xs text-text-secondary mb-1">sm (8px)</p>
            <div className="flex items-center">
                <DemoBox /><Spacer axis="horizontal" size="sm" /><DemoBox />
            </div>
            <Spacer size="sm" />
            <p className="text-xs text-text-secondary mb-1">md (16px)</p>
            <div className="flex items-center">
                <DemoBox /><Spacer axis="horizontal" size="md" /><DemoBox />
            </div>
            <Spacer size="sm" />
            <p className="text-xs text-text-secondary mb-1">lg (24px)</p>
            <div className="flex items-center">
                <DemoBox /><Spacer axis="horizontal" size="lg" /><DemoBox />
            </div>
            <Spacer size="sm" />
            <p className="text-xs text-text-secondary mb-1">xl (32px)</p>
            <div className="flex items-center">
                <DemoBox /><Spacer axis="horizontal" size="xl" /><DemoBox />
            </div>
        </div>
    ),
};

export const CustomNumberSize: Story = {
    render: () => (
        <div className="flex flex-col">
            <DemoBox color="#10B981" />
            <Spacer size={40} />
            <DemoBox color="#10B981" />
            <Spacer size={40} />
            <DemoBox color="#10B981" />
        </div>
    ),
};

export const FlexSpacer: Story = {
    render: () => (
        <div className="flex items-center border border-border-primary rounded-lg p-4">
            <DemoBox color="#8B5CF6" />
            <Spacer flex />
            <DemoBox color="#EC4899" />
            <Spacer axis="horizontal" size="sm" />
            <DemoBox color="#F59E0B" />
        </div>
    ),
};

export const FintechLayout: Story = {
    render: () => (
        <div className="border border-border-primary rounded-xl p-6">
            <h3 className="text-lg font-bold">Account Summary</h3>
            <Spacer size="xs" />
            <p className="text-sm text-text-secondary">Personal Checking ••••4582</p>
            <Spacer size="lg" />
            <p className="text-3xl font-bold">$12,450.80</p>
            <Spacer size="md" />
            <div className="flex items-center">
                <span className="text-sm text-green-600 font-medium">+2.4% this month</span>
                <Spacer flex />
                <span className="text-xs text-text-secondary">Updated 2m ago</span>
            </div>
            <Spacer size="md" />
            <button className="w-full py-2 bg-blue-600 text-white rounded-lg text-sm">View Transactions</button>
        </div>
    ),
};

export const DarkMode: Story = {
    parameters: {
        themes: { themeOverride: 'dark' },
    },
    render: () => (
        <div className="flex flex-col">
            <DemoBox color="#3B82F6" />
            <Spacer size="md" />
            <DemoBox color="#3B82F6" />
            <Spacer size="md" />
            <DemoBox color="#3B82F6" />
        </div>
    ),
};

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
