import type { Meta, StoryObj } from '@storybook/react';
import { Timeline, TimelineItem } from '../components/Timeline';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Mail, GitCommit, Package, CheckCircle2, AlertTriangle, Truck } from 'lucide-react';

const meta = {
    title: 'Data Display/Timeline',
    component: Timeline,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <Timeline>
            <TimelineItem
                date="09:00 AM"
                title="Daily Standup"
                description="Team sync via Zoom. Discussed blockers for the Q3 release."
                status="success"
                isActive
            />
            <TimelineItem
                date="10:30 AM"
                title="Design Review"
                description="Reviewing the new dashboard components with the UX team."
                status="info"
            />
            <TimelineItem
                date="02:00 PM"
                title="Client Meeting"
                description="Presentation of the initial prototype."
                status="default"
            />
            <TimelineItem
                date="04:30 PM"
                title="Code Freeze"
                description="Preparing for the weekly deployment."
                status="default"
            />
        </Timeline>
    ),
};

export const AlternateLayout: Story = {
    args: {
        layout: 'alternate',
    },
    render: (args) => (
        <Timeline {...args}>
            <TimelineItem
                date="2023-10-01"
                title="Project Kickoff"
                description="Initial meeting with stakeholders to define scope and requirements."
                status="success"
                icon={<CheckCircle2 className="w-4 h-4" />}
            />
            <TimelineItem
                date="2023-10-15"
                title="Design Phase"
                description="Creating wireframes and high-fidelity mockups."
                status="success"
                icon={<Package className="w-4 h-4" />}
            />
            <TimelineItem
                date="2023-11-01"
                title="Development Sprint 1"
                description="Setting up the infrastructure and core components."
                status="info"
                isActive
                icon={<GitCommit className="w-4 h-4" />}
            />
            <TimelineItem
                date="2023-11-15"
                title="Alpha Release"
                description="Internal testing of the first playable build."
                status="default"
            />
            <TimelineItem
                date="2023-12-01"
                title="Beta Launch"
                description="Public beta release for selected users."
                status="default"
            />
        </Timeline>
    ),
};

export const OrderTracking: Story = {
    render: () => (
        <Timeline>
            <TimelineItem
                date="Oct 24, 14:30"
                title="Order Placed"
                description="Your order #12345 has been confirmed."
                status="success"
            />
            <TimelineItem
                date="Oct 24, 16:45"
                title="Payment Confirmed"
                description="Payment of $129.00 received via Credit Card."
                status="success"
            />
            <TimelineItem
                date="Oct 25, 09:15"
                title="Processing"
                description="Your order is being packed at our warehouse."
                status="success"
            />
            <TimelineItem
                date="Oct 25, 18:20"
                title="Shipped"
                description="Package has left the facility."
                status="info"
                isActive
                icon={<Truck className="w-4 h-4" />}
            >
                <div className="mt-2 p-3 bg-surface-secondary rounded-lg border border-border-primary text-sm font-mono">
                    Tracking ID: 1Z999AA10123456784
                </div>
            </TimelineItem>
            <TimelineItem
                date="Estimated: Oct 27"
                title="Out for Delivery"
                status="default"
            />
            <TimelineItem
                title="Delivered"
                status="default"
            />
        </Timeline>
    ),
};

export const WithCards: Story = {
    args: {
        layout: 'alternate',
    },
    render: (args) => (
        <div className="max-w-4xl mx-auto">
            <Timeline {...args}>
                <TimelineItem
                    date="Just now"
                    status="warning"
                    icon={<AlertTriangle className="w-4 h-4" />}
                >
                    <Card className="p-4">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold">High CPU Usage</h4>
                            <Badge variant="warning">Warning</Badge>
                        </div>
                        <p className="text-sm text-text-secondary mb-3">
                            Server instance i-0123456789abcdef0 is reporting 95% CPU utilization for over 5 minutes.
                        </p>
                        <div className="flex gap-2">
                            <Button size="sm" variant="secondary">View Logs</Button>
                            <Button size="sm" variant="ghost">Dismiss</Button>
                        </div>
                    </Card>
                </TimelineItem>
                
                <TimelineItem
                    date="2 hours ago"
                    status="info"
                    icon={<Mail className="w-4 h-4" />}
                >
                    <Card className="p-4">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold">New Ticket Assigned</h4>
                            <Badge variant="info">Support</Badge>
                        </div>
                        <p className="text-sm text-text-secondary">
                            Ticket #492 "Login issues on Safari" has been assigned to you.
                        </p>
                    </Card>
                </TimelineItem>

                <TimelineItem
                    date="Yesterday"
                    status="success"
                    icon={<GitCommit className="w-4 h-4" />}
                >
                    <Card className="p-4">
                        <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold">Pull Request Merged</h4>
                            <Badge variant="success">Merged</Badge>
                        </div>
                        <p className="text-sm text-text-secondary">
                            feat: add new timeline component (#842)
                        </p>
                    </Card>
                </TimelineItem>
            </Timeline>
        </div>
    ),
};
