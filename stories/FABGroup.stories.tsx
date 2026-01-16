import type { Meta, StoryObj } from '@storybook/react';
import { FABGroup } from '../components/ui/FABGroup';
import { Mail, Phone, MessageCircle, Video, Calendar } from 'lucide-react';

const meta: Meta<typeof FABGroup> = {
    title: 'Buttons/FABGroup',
    component: FABGroup,
    tags: [],
    argTypes: {
        position: {
            control: 'select',
            options: ['none', 'bottom-right', 'bottom-left', 'top-right', 'top-left'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof FABGroup>;

export const Default: Story = {
    args: {
        position: 'none',
        actions: [
            {
                icon: Mail,
                label: 'Send Email',
                onClick: () => alert('Send Email'),
                variant: 'secondary',
            },
            {
                icon: Phone,
                label: 'Call',
                onClick: () => alert('Call'),
                variant: 'secondary',
            },
            {
                icon: MessageCircle,
                label: 'Message',
                onClick: () => alert('Message'),
                variant: 'secondary',
            },
        ],
    },
    decorators: [
        (Story) => (
            <div className="p-12 flex justify-center items-center min-h-[400px]">
                <Story />
            </div>
        ),
    ],
};

export const WithPrimaryActions: Story = {
    args: {
        position: 'none',
        actions: [
            {
                icon: Video,
                label: 'Video Call',
                onClick: () => alert('Video Call'),
                variant: 'primary',
            },
            {
                icon: Phone,
                label: 'Voice Call',
                onClick: () => alert('Voice Call'),
                variant: 'primary',
            },
            {
                icon: Calendar,
                label: 'Schedule',
                onClick: () => alert('Schedule'),
                variant: 'secondary',
            },
        ],
    },
    decorators: [
        (Story) => (
            <div className="p-12 flex justify-center items-center min-h-[400px]">
                <Story />
            </div>
        ),
    ],
};
