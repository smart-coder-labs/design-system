import type { Meta, StoryObj } from '@storybook/react';
import { TopActionBar, TopActionBarButton, TopActionBarIconButton } from './TopActionBar';
import { Search, Bell, Settings, User, Home, TrendingUp, Wallet, Plus, ArrowLeft, CreditCard, BarChart3, PiggyBank, Shield, Menu, Download, RefreshCw, Mail } from 'lucide-react';

const meta = {
    title: 'Navigation/TopActionBar',
    component: TopActionBar,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'A macOS/iOS-style top navigation bar with left, center, and right sections. Supports glassmorphism, sticky positioning, multiple sizes, and built-in button components.',
            },
        },
    },
} satisfies Meta<typeof TopActionBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        leftContent: <span className="font-bold text-lg text-text-primary">FinTech</span>,
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
        leftContent: <span className="font-bold text-lg text-text-primary">Wealth</span>,
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
        leftContent: <span className="font-bold text-lg text-text-primary">App</span>,
        centerContent: (
            <div className="flex items-center gap-2">
                <TopActionBarButton variant="ghost">Discover</TopActionBarButton>
                <TopActionBarButton variant="ghost" active>Social</TopActionBarButton>
                <TopActionBarButton variant="ghost">Feed</TopActionBarButton>
            </div>
        ),
        rightContent: (
            <div className="flex items-center gap-1">
                <TopActionBarButton variant="primary">
                    <Plus size={16} />
                    New Post
                </TopActionBarButton>
            </div>
        ),
        size: 'sm',
        glass: true,
        showBorder: true,
    },
};

export const SizeSmall: Story = {
    args: {
        leftContent: <span className="font-semibold text-sm text-text-primary">Mini</span>,
        centerContent: (
            <div className="flex items-center gap-1">
                <TopActionBarButton variant="ghost">Files</TopActionBarButton>
                <TopActionBarButton variant="ghost" active>Edit</TopActionBarButton>
                <TopActionBarButton variant="ghost">View</TopActionBarButton>
            </div>
        ),
        rightContent: (
            <TopActionBarButton variant="ghost" icon={<Search size={16} />}>Search</TopActionBarButton>
        ),
        size: 'sm',
        showBorder: true,
    },
};

export const SizeLarge: Story = {
    args: {
        leftContent: (
            <div className="flex items-center gap-3">
                <ArrowLeft size={20} className="text-text-secondary cursor-pointer" />
                <span className="font-bold text-xl text-text-primary">Portfolio</span>
            </div>
        ),
        centerContent: (
            <div className="flex items-center gap-2">
                <TopActionBarButton variant="ghost" icon={<BarChart3 size={18} />}>Overview</TopActionBarButton>
                <TopActionBarButton variant="ghost" icon={<TrendingUp size={18} />}>Performance</TopActionBarButton>
                <TopActionBarButton variant="ghost" icon={<PiggyBank size={18} />}>Dividends</TopActionBarButton>
            </div>
        ),
        rightContent: (
            <div className="flex items-center gap-2">
                <TopActionBarButton variant="primary" icon={<Plus size={18} />}>Add Funds</TopActionBarButton>
                <TopActionBarIconButton icon={<Bell size={20} />} aria-label="Notifications" badge={7} />
            </div>
        ),
        size: 'lg',
        glass: true,
        sticky: false,
        showBorder: true,
    },
};

export const IconButtonsOnly: Story = {
    args: {
        leftContent: <span className="font-bold text-lg text-text-primary">Nexus</span>,
        centerContent: null,
        rightContent: (
            <div className="flex items-center gap-1">
                <TopActionBarIconButton icon={<Search size={18} />} aria-label="Search" />
                <TopActionBarIconButton icon={<Bell size={18} />} aria-label="Notifications" badge={12} />
                <TopActionBarIconButton icon={<Settings size={18} />} aria-label="Settings" />
                <TopActionBarIconButton icon={<User size={18} />} aria-label="Profile" />
            </div>
        ),
        glass: true,
        sticky: true,
        showBorder: false,
    },
};

export const MobileView: Story = {
    parameters: {
        viewport: { defaultViewport: 'mobile1' },
    },
    args: {
        leftContent: (
            <TopActionBarIconButton icon={<Menu size={20} />} aria-label="Menu" />
        ),
        centerContent: <span className="font-bold text-sm text-text-primary">Home</span>,
        rightContent: (
            <div className="flex items-center gap-1">
                <TopActionBarIconButton icon={<Search size={18} />} aria-label="Search" />
                <TopActionBarIconButton icon={<Bell size={18} />} aria-label="Notifications" badge={5} />
            </div>
        ),
        size: 'sm',
        showBorder: true,
    },
};

export const BankingDashboard: Story = {
    args: {
        leftContent: (
            <div className="flex items-center gap-3">
                <Shield size={20} className="text-accent-blue" />
                <span className="font-bold text-lg text-text-primary">SecureBank</span>
            </div>
        ),
        centerContent: (
            <div className="flex items-center gap-2">
                <TopActionBarButton variant="ghost" active>Accounts</TopActionBarButton>
                <TopActionBarButton variant="ghost">Transfers</TopActionBarButton>
                <TopActionBarButton variant="ghost">Cards</TopActionBarButton>
                <TopActionBarButton variant="ghost">Loans</TopActionBarButton>
            </div>
        ),
        rightContent: (
            <div className="flex items-center gap-2">
                <TopActionBarButton variant="ghost" icon={<Download size={16} />}>Export</TopActionBarButton>
                <TopActionBarButton variant="ghost" icon={<RefreshCw size={16} />}>Sync</TopActionBarButton>
                <TopActionBarIconButton icon={<Bell size={18} />} aria-label="Notifications" badge={2} />
            </div>
        ),
        glass: true,
        sticky: true,
        showBorder: true,
        size: 'md',
    },
};

export const CryptoMarketBar: Story = {
    args: {
        leftContent: (
            <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-text-primary">CryptoWatch</span>
                <span className="text-xs text-status-success bg-status-success/10 px-2 py-0.5 rounded-full font-semibold">Live</span>
            </div>
        ),
        centerContent: (
            <div className="flex items-center gap-3 text-sm">
                <span className="text-text-primary">BTC <span className="text-status-success">+2.4%</span></span>
                <span className="text-text-primary">ETH <span className="text-status-success">+1.8%</span></span>
                <span className="text-text-primary">SOL <span className="text-status-error">-0.5%</span></span>
            </div>
        ),
        rightContent: (
            <div className="flex items-center gap-2">
                <TopActionBarButton variant="primary" size="sm">
                    <Wallet size={16} />
                    Connect
                </TopActionBarButton>
            </div>
        ),
        size: 'md',
        showBorder: true,
        glass: false,
    },
};

export const NoBorder: Story = {
    args: {
        leftContent: <span className="font-bold text-lg text-text-primary">Clean</span>,
        centerContent: (
            <div className="flex items-center gap-2">
                <TopActionBarButton variant="ghost">One</TopActionBarButton>
                <TopActionBarButton variant="ghost">Two</TopActionBarButton>
                <TopActionBarButton variant="ghost">Three</TopActionBarButton>
            </div>
        ),
        rightContent: (
            <TopActionBarIconButton icon={<Settings size={18} />} aria-label="Settings" />
        ),
        showBorder: false,
        sticky: false,
    },
};

export const HighBadgeCount: Story = {
    args: {
        leftContent: <span className="font-bold text-lg text-text-primary">Notifications</span>,
        centerContent: null,
        rightContent: (
            <div className="flex items-center gap-1">
                <TopActionBarIconButton icon={<Bell size={18} />} aria-label="Notifications" badge={99} />
                <TopActionBarIconButton icon={<Mail size={18} />} aria-label="Messages" badge={24} />
            </div>
        ),
        showBorder: true,
        glass: true,
    },
};
