import type { Meta, StoryObj } from '@storybook/react';
import { TopActionBar, TopActionBarButton, TopActionBarIconButton } from './TopActionBar';
import { Search, Bell, Settings, User, Home, TrendingUp, Wallet } from 'lucide-react';

const meta = {
    title: 'Components/TopActionBar',
    component: TopActionBar,
    tags: ['autodocs'],
} satisfies Meta<typeof TopActionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        leftContent: <span className="font-bold text-lg">FinTech</span>,
        centerContent: (
            <div className="flex items-center gap-2">
                <TopActionBarButton variant="ghost">Home</TopActionBarButton>
                <TopActionBarButton variant="ghost">Invest</TopActionBarButton>
                <TopActionBarButton variant="ghost">Cards</TopActionBarButton>
            </div>
        ),
        rightContent: (
            <div className="flex items-center gap-1">
                <TopActionBarButton variant="ghost" icon={<Search size={18} />}>Search</TopActionBarButton>
                <TopActionBarButton variant="ghost" icon={<Bell size={18} />}>Notifications</TopActionBarButton>
                <TopActionBarButton variant="ghost" icon={<User size={18} />}>Profile</TopActionBarButton>
            </div>
        ),
        sticky: false,
        showBorder: true,
    },
};

export const Glassmorphism: Story = {
    args: {
        leftContent: <span className="font-bold text-lg">Wealth</span>,
        centerContent: (
            <div className="flex items-center gap-1">
                <TopActionBarButton variant="ghost" icon={<Home size={18} />}>Dashboard</TopActionBarButton>
                <TopActionBarButton variant="ghost" icon={<TrendingUp size={18} />}>Markets</TopActionBarButton>
                <TopActionBarButton variant="ghost" icon={<Wallet size={18} />}>Portfolio</TopActionBarButton>
            </div>
        ),
        rightContent: (
            <div className="flex items-center gap-1">
                <TopActionBarIconButton icon={<Bell size={18} />} aria-label="Notifications" badge={3} />
                <TopActionBarIconButton icon={<Settings size={18} />} aria-label="Settings" />
            </div>
        ),
        glass: true,
        sticky: true,
        showBorder: false,
    },
};

export const WithActiveStates: Story = {
    args: {
        leftContent: <span className="font-bold text-lg">App</span>,
        centerContent: (
            <div className="flex items-center gap-2">
                <TopActionBarButton variant="ghost">Discover</TopActionBarButton>
                <TopActionBarButton variant="ghost" active>Social</TopActionBarButton>
                <TopActionBarButton variant="ghost">Feed</TopActionBarButton>
            </div>
        ),
        rightContent: (
            <div className="flex items-center gap-1">
                <TopActionBarButton variant="primary">+ New Post</TopActionBarButton>
            </div>
        ),
        size: 'sm',
        glass: true,
        showBorder: true,
    },
};
