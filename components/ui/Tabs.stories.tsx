import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

const meta = {
    title: 'Components/Tabs',
    component: Tabs,
    tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Tabs defaultValue="overview">
            <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="transactions">Transactions</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="overview">
                <div className="p-4 text-sm text-gray-600">
                    Account overview showing balance, recent activity, and key metrics.
                </div>
            </TabsContent>
            <TabsContent value="transactions">
                <div className="p-4 text-sm text-gray-600">
                    List of recent transactions with filtering and search options.
                </div>
            </TabsContent>
            <TabsContent value="analytics">
                <div className="p-4 text-sm text-gray-600">
                    Spending analytics with charts and category breakdown.
                </div>
            </TabsContent>
        </Tabs>
    ),
};

export const Segmented: Story = {
    args: {
        defaultValue: 'week',
    },
    render: () => (
        <Tabs defaultValue="week">
            <TabsList variant="segmented">
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="year">Year</TabsTrigger>
            </TabsList>
            <TabsContent value="day">Daily view content</TabsContent>
            <TabsContent value="week">Weekly view content</TabsContent>
            <TabsContent value="month">Monthly view content</TabsContent>
            <TabsContent value="year">Yearly view content</TabsContent>
        </Tabs>
    ),
};

export const DisabledTab: Story = {
    render: () => (
        <Tabs defaultValue="active">
            <TabsList>
                <TabsTrigger value="active">Active</TabsTrigger>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="archived" disabled>Archived</TabsTrigger>
            </TabsList>
            <TabsContent value="active">Active loans</TabsContent>
            <TabsContent value="pending">Pending approvals</TabsContent>
            <TabsContent value="archived">Archived records</TabsContent>
        </Tabs>
    ),
};

export const Controlled: Story = {
    render: () => {
        return (
            <Tabs defaultValue="send">
                <TabsList>
                    <TabsTrigger value="send">Send</TabsTrigger>
                    <TabsTrigger value="request">Request</TabsTrigger>
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                </TabsList>
                <TabsContent value="send">
                    <div className="p-4 text-sm text-gray-600">Transfer money to another account</div>
                </TabsContent>
                <TabsContent value="request">
                    <div className="p-4 text-sm text-gray-600">Request money from contacts</div>
                </TabsContent>
                <TabsContent value="schedule">
                    <div className="p-4 text-sm text-gray-600">Schedule recurring transfers</div>
                </TabsContent>
            </Tabs>
        );
    },
};
