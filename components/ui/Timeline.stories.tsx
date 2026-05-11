import type { Meta, StoryObj } from '@storybook/react';
import { Timeline, TimelineItem } from './Timeline';

const meta = {
    title: 'Components/Timeline',
    component: Timeline,
    tags: ['autodocs'],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Timeline>
            <TimelineItem
                title="Payment Received"
                description="Received $2,450.00 from Alice Johnson"
                date="Today, 2:30 PM"
                status="success"
                isActive
            />
            <TimelineItem
                title="Transfer Initiated"
                description="Sent $500.00 to Savings Account"
                date="Today, 11:00 AM"
                status="info"
            />
            <TimelineItem
                title="Bill Payment"
                description="Electric bill of $124.50 paid"
                date="Yesterday, 8:15 AM"
                status="warning"
            />
            <TimelineItem
                title="Subscription Renewed"
                description="Netflix Premium - $19.99"
                date="2 days ago"
                status="default"
                isLast
            />
        </Timeline>
    ),
};

export const Alternate: Story = {
    args: {
        layout: 'alternate',
    },
    render: () => (
        <Timeline layout="alternate">
            <TimelineItem
                title="Account Created"
                description="Welcome! Your account is ready."
                date="Jan 15, 2025"
                status="success"
                isActive
                position="left"
            />
            <TimelineItem
                title="Identity Verified"
                description="Document verification completed"
                date="Jan 16, 2025"
                status="success"
                position="right"
            />
            <TimelineItem
                title="First Deposit"
                description="$1,000.00 deposited"
                date="Jan 17, 2025"
                status="info"
                position="left"
            />
            <TimelineItem
                title="All Set"
                description="You can now make transactions"
                date="Jan 18, 2025"
                status="default"
                isLast
                position="right"
            />
        </Timeline>
    ),
};

export const WithIcons: Story = {
    render: () => (
        <Timeline>
            <TimelineItem
                title="Order Placed"
                description="Your order #12345 has been placed"
                date="10:30 AM"
                status="success"
                icon="🛒"
                isActive
            />
            <TimelineItem
                title="Processing"
                description="Payment confirmed, preparing shipment"
                date="10:45 AM"
                status="loading"
                icon="📦"
            />
            <TimelineItem
                title="Shipped"
                description="Package is on its way"
                date="2:00 PM"
                status="info"
                icon="🚚"
            />
            <TimelineItem
                title="Delivered"
                description="Package delivered successfully"
                date="Mar 20"
                status="success"
                icon="✅"
                isLast
            />
        </Timeline>
    ),
};

export const ErrorState: Story = {
    render: () => (
        <Timeline>
            <TimelineItem
                title="Transaction Initiated"
                description="Sent $2,000.00 to Bob Smith"
                date="10:00 AM"
                status="info"
                isActive
            />
            <TimelineItem
                title="Processing"
                description="Awaiting confirmation from recipient bank"
                date="10:05 AM"
                status="loading"
            />
            <TimelineItem
                title="Failed"
                description="Transaction declined — insufficient funds"
                date="10:10 AM"
                status="error"
                isLast
            />
        </Timeline>
    ),
};
