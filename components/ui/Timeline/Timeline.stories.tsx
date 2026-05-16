import type { Meta, StoryObj } from '@storybook/react';
import { Timeline, TimelineItem } from './Timeline';

const meta = {
    title: 'Data Display/Timeline',
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

export const FincrimeAlert: Story = {
    render: () => (
        <Timeline>
            <TimelineItem
                title="Login Detected"
                description="New device login from Chrome on Windows"
                date="Today, 9:15 AM"
                status="info"
                icon="🔑"
                isActive
            />
            <TimelineItem
                title="Large Transfer Initiated"
                description="$15,000.00 to external account ****5678"
                date="Today, 9:20 AM"
                status="warning"
                icon="⚠️"
            />
            <TimelineItem
                title="2FA Challenge Sent"
                description="Verification code sent to registered phone"
                date="Today, 9:21 AM"
                status="loading"
                icon="📱"
            />
            <TimelineItem
                title="Flagged for Review"
                description="Transaction held — unusual pattern detected"
                date="Today, 9:25 AM"
                status="error"
                isLast
                icon="🚨"
            />
        </Timeline>
    ),
};

export const OnboardingFlow: Story = {
    render: () => (
        <Timeline>
            <TimelineItem
                title="Account Created"
                description="Personal account successfully created"
                date="Step 1"
                status="success"
                isActive
            />
            <TimelineItem
                title="Identity Verified"
                description="Government ID and selfie verified"
                date="Step 2"
                status="success"
            />
            <TimelineItem
                title="Bank Linked"
                description="Checking account linked via Plaid"
                date="Step 3"
                status="success"
            />
            <TimelineItem
                title="First Deposit"
                description="Minimum deposit of $10 required"
                date="Step 4"
                status="default"
                isLast
            />
        </Timeline>
    ),
};

export const AllStatuses: Story = {
    render: () => (
        <Timeline>
            <TimelineItem title="Order Received" description="Order #4521 received" date="10:00 AM" status="default" isActive />
            <TimelineItem title="Processing" description="Payment verified" date="10:05 AM" status="info" />
            <TimelineItem title="Quality Check" description="Product inspection in progress" date="10:10 AM" status="loading" />
            <TimelineItem title="Almost Ready" description="Stock levels confirmed" date="10:15 AM" status="warning" />
            <TimelineItem title="Shipped" description="Package dispatched successfully" date="10:20 AM" status="success" />
            <TimelineItem title="Delivery Failed" description="Address not found — returned to sender" date="10:25 AM" status="error" isLast />
        </Timeline>
    ),
};

export const MobileView: Story = {
    render: () => (
        <Timeline>
            <TimelineItem title="Payment Sent" description="$50.00 to Alice" date="2:30 PM" status="success" isActive />
            <TimelineItem title="Payment Received" description="$120.00 from Bob" date="1:00 PM" status="success" />
            <TimelineItem title="Transfer Initiated" description="To savings account" date="11:00 AM" status="info" />
            <TimelineItem title="Bill Paid" description="Electric bill $89.50" date="Yesterday" status="default" isLast />
        </Timeline>
    ),
    decorators: [
        (Story: any) => (
            <div className="max-w-sm mx-auto">
                <Story />
            </div>
        ),
    ],
};

export const DarkMode: Story = {
    render: () => (
        <Timeline>
            <TimelineItem
                title="DeFi Staking Rewards"
                description="Received 0.5 ETH staking rewards"
                date="Today"
                status="success"
                isActive
                icon="💰"
            />
            <TimelineItem
                title="Liquidity Added"
                description="Added $5,000 USDC/ETH to Uniswap pool"
                date="Yesterday"
                status="info"
                icon="💧"
            />
            <TimelineItem
                title="Airdrop Claimed"
                description="Claimed 500 ARB tokens"
                date="2 days ago"
                status="success"
                icon="🪂"
            />
            <TimelineItem
                title="Loan Liquidated"
                description="Position liquidated — collateral ratio breached"
                date="3 days ago"
                status="error"
                isLast
                icon="💥"
            />
        </Timeline>
    ),
    parameters: {
        backgrounds: { default: 'dark' },
    },
    decorators: [
        (Story: any) => (
            <div className="dark p-6 bg-zinc-900 rounded-xl">
                <Story />
            </div>
        ),
    ],
};
