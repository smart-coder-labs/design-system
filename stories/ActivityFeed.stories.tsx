import type { Meta, StoryObj } from '@storybook/react';
import { ActivityFeed, ActivityItem } from '../components/ActivityFeed';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { FileCode, MessageSquare, GitMerge, ThumbsUp } from 'lucide-react';

const meta = {
    title: 'Data Display/ActivityFeed',
    component: ActivityFeed,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ActivityFeed>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <div className="max-w-2xl mx-auto">
            <ActivityFeed>
                <ActivityItem
                    actor={{ name: 'Sarah Chen', initials: 'SC' }}
                    action="commented on"
                    target="Issue #429"
                    date="2h ago"
                    type="comment"
                >
                    <p>I've updated the documentation to reflect the new API changes. Can someone review it?</p>
                </ActivityItem>
                
                <ActivityItem
                    actor={{ name: 'Mike Ross', initials: 'MR' }}
                    action="pushed 3 commits to"
                    target="feature/auth-v2"
                    date="4h ago"
                    type="commit"
                >
                    <div className="space-y-1 font-mono text-xs">
                        <div className="flex items-center gap-2">
                            <span className="text-accent-blue">a1b2c3d</span>
                            <span>feat: implement JWT rotation</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-accent-blue">d4e5f6g</span>
                            <span>fix: session timeout handling</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-accent-blue">h7i8j9k</span>
                            <span>chore: update dependencies</span>
                        </div>
                    </div>
                </ActivityItem>

                <ActivityItem
                    actor={{ name: 'Alex Morgan', initials: 'AM' }}
                    action="merged pull request"
                    target="#842: Timeline Component"
                    date="Yesterday"
                    type="pr"
                />

                <ActivityItem
                    actor={{ name: 'System', initials: 'SY' }}
                    action="deployed to"
                    target="Production"
                    date="Yesterday"
                    type="success"
                >
                    <div className="flex items-center gap-2">
                        <Badge variant="success" size="sm">Success</Badge>
                        <span className="text-xs text-text-secondary">Deployment #1024 completed in 45s</span>
                    </div>
                </ActivityItem>
            </ActivityFeed>
        </div>
    ),
};

export const CodeReview: Story = {
    render: () => (
        <div className="max-w-2xl mx-auto">
            <ActivityFeed>
                <ActivityItem
                    actor={{ name: 'David Kim', initials: 'DK' }}
                    action="requested changes on"
                    target="PR #850"
                    date="10m ago"
                    type="alert"
                >
                    <p className="mb-2">We need to handle the edge case where the user has no permissions.</p>
                    <div className="bg-surface-primary p-3 rounded border border-border-primary font-mono text-xs overflow-x-auto">
                        <span className="text-status-error">- if (user.role === 'admin')</span><br/>
                        <span className="text-status-success">+ if (hasPermission(user, 'manage_users'))</span>
                    </div>
                </ActivityItem>

                <ActivityItem
                    actor={{ name: 'Emily White', initials: 'EW' }}
                    action="replied"
                    date="5m ago"
                    type="comment"
                >
                    <p>Good catch! I'll update it right away.</p>
                    <div className="mt-3 flex gap-2">
                        <Button size="sm" variant="ghost" leftIcon={<ThumbsUp className="w-3 h-3" />}>Like</Button>
                        <Button size="sm" variant="ghost" leftIcon={<MessageSquare className="w-3 h-3" />}>Reply</Button>
                    </div>
                </ActivityItem>
            </ActivityFeed>
        </div>
    ),
};

export const DataDriven: Story = {
    args: {
        items: [
            {
                actor: { name: 'Bot', initials: 'B' },
                action: 'created ticket',
                target: 'OPS-123',
                date: 'Just now',
                type: 'default',
            },
            {
                actor: { name: 'Alice', initials: 'A' },
                action: 'assigned to',
                target: 'Bob',
                date: '1m ago',
                type: 'default',
            },
            {
                actor: { name: 'Bob', initials: 'B' },
                action: 'changed status to',
                target: 'In Progress',
                date: '30s ago',
                type: 'success',
            },
        ],
    },
    render: (args) => (
        <div className="max-w-xl mx-auto">
            <ActivityFeed {...args} />
        </div>
    ),
};
