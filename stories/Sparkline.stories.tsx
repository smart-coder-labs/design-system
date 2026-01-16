import type { Meta, StoryObj } from '@storybook/react';
import { Sparkline } from '../components/ui/Sparkline';

const meta: Meta<typeof Sparkline> = {
    title: 'Components/Sparkline',
    component: Sparkline,
    parameters: {
        layout: 'centered',
    },
    tags: [],
    argTypes: {
        trend: {
            control: 'select',
            options: ['up', 'down', 'neutral'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Sparkline>;

// Sample data sets
const upwardTrend = [10, 15, 13, 18, 22, 25, 28, 30, 35, 40];
const downwardTrend = [40, 38, 35, 32, 30, 28, 25, 22, 20, 18];
const volatileData = [20, 25, 22, 28, 24, 30, 26, 32, 28, 35];
const steadyData = [20, 21, 20, 22, 21, 23, 22, 24, 23, 25];

export const Default: Story = {
    args: {
        data: upwardTrend,
        width: 100,
        height: 30,
    },
};

export const UpwardTrend: Story = {
    args: {
        data: upwardTrend,
        width: 100,
        height: 30,
        trend: 'up',
    },
};

export const DownwardTrend: Story = {
    args: {
        data: downwardTrend,
        width: 100,
        height: 30,
        trend: 'down',
    },
};

export const WithArea: Story = {
    args: {
        data: upwardTrend,
        width: 100,
        height: 30,
        showArea: true,
    },
};

export const WithDots: Story = {
    args: {
        data: volatileData,
        width: 100,
        height: 30,
        showDots: true,
    },
};

export const Large: Story = {
    args: {
        data: upwardTrend,
        width: 200,
        height: 60,
        strokeWidth: 3,
    },
};

export const Small: Story = {
    args: {
        data: upwardTrend,
        width: 60,
        height: 20,
        strokeWidth: 1.5,
    },
};

export const CustomColor: Story = {
    args: {
        data: steadyData,
        width: 100,
        height: 30,
        color: '#007AFF',
        fillColor: 'rgba(0, 122, 255, 0.1)',
        showArea: true,
    },
};

export const InTable: Story = {
    render: () => (
        <div className="bg-surface-primary rounded-xl border border-border-primary overflow-hidden">
            <table className="w-full">
                <thead>
                    <tr className="bg-background-secondary/50 border-b border-border-primary">
                        <th className="py-3 px-4 text-left text-xs font-semibold text-text-tertiary uppercase">Metric</th>
                        <th className="py-3 px-4 text-right text-xs font-semibold text-text-tertiary uppercase">Value</th>
                        <th className="py-3 px-4 text-right text-xs font-semibold text-text-tertiary uppercase">Trend</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-border-primary">
                    <tr className="hover:bg-background-secondary/30">
                        <td className="py-3 px-4 text-sm text-text-primary">Revenue</td>
                        <td className="py-3 px-4 text-sm text-text-primary text-right font-medium">$45,231</td>
                        <td className="py-3 px-4 text-right">
                            <Sparkline data={upwardTrend} width={80} height={24} />
                        </td>
                    </tr>
                    <tr className="hover:bg-background-secondary/30">
                        <td className="py-3 px-4 text-sm text-text-primary">Users</td>
                        <td className="py-3 px-4 text-sm text-text-primary text-right font-medium">12,543</td>
                        <td className="py-3 px-4 text-right">
                            <Sparkline data={volatileData} width={80} height={24} />
                        </td>
                    </tr>
                    <tr className="hover:bg-background-secondary/30">
                        <td className="py-3 px-4 text-sm text-text-primary">Bounce Rate</td>
                        <td className="py-3 px-4 text-sm text-text-primary text-right font-medium">32%</td>
                        <td className="py-3 px-4 text-right">
                            <Sparkline data={downwardTrend} width={80} height={24} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    ),
};

export const InCards: Story = {
    render: () => (
        <div className="grid grid-cols-3 gap-4">
            <div className="bg-surface-primary rounded-xl border border-border-primary p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-text-tertiary uppercase">Sales</span>
                    <span className="text-xs text-status-success">+12%</span>
                </div>
                <div className="text-2xl font-bold text-text-primary mb-3">$24,500</div>
                <Sparkline data={upwardTrend} width={150} height={40} showArea />
            </div>
            <div className="bg-surface-primary rounded-xl border border-border-primary p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-text-tertiary uppercase">Traffic</span>
                    <span className="text-xs text-status-error">-5%</span>
                </div>
                <div className="text-2xl font-bold text-text-primary mb-3">8,234</div>
                <Sparkline data={downwardTrend} width={150} height={40} showArea />
            </div>
            <div className="bg-surface-primary rounded-xl border border-border-primary p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-text-tertiary uppercase">Conversion</span>
                    <span className="text-xs text-text-secondary">~0%</span>
                </div>
                <div className="text-2xl font-bold text-text-primary mb-3">3.2%</div>
                <Sparkline data={steadyData} width={150} height={40} showArea trend="neutral" />
            </div>
        </div>
    ),
};
