import type { Meta, StoryObj } from '@storybook/react';
import {
    NavBar,
    NavBarBrand,
    NavBarContent,
    NavBarItem,
    NavBarSeparator,
    NavBarMobileToggle,
    NavBarMobileMenu,
    NavBarMobileMenuItem,
} from './NavBar';
import React from 'react';

const meta = {
    title: 'Navigation/NavBar',
    component: NavBar,
    tags: ['autodocs'],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <NavBar>
            <NavBarBrand>FinFlow</NavBarBrand>
            <NavBarContent align="center">
                <NavBarItem active>Dashboard</NavBarItem>
                <NavBarItem>Transactions</NavBarItem>
                <NavBarItem>Investments</NavBarItem>
                <NavBarItem>Settings</NavBarItem>
            </NavBarContent>
            <NavBarContent align="right">
                <NavBarSeparator />
                <NavBarItem>Sign Out</NavBarItem>
            </NavBarContent>
        </NavBar>
    ),
};

export const Glass: Story = {
    render: () => (
        <NavBar variant="glass">
            <NavBarBrand>FinFlow</NavBarBrand>
            <NavBarContent align="center">
                <NavBarItem active>Dashboard</NavBarItem>
                <NavBarItem>Transactions</NavBarItem>
                <NavBarItem>Analytics</NavBarItem>
            </NavBarContent>
        </NavBar>
    ),
};

export const Transparent: Story = {
    render: () => (
        <div style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: 20, borderRadius: 12 }}>
            <NavBar variant="transparent" sticky={false}>
                <NavBarBrand><span style={{ color: 'white' }}>FinFlow</span></NavBarBrand>
                <NavBarContent align="center">
                    <NavBarItem active><span style={{ color: 'white' }}>Home</span></NavBarItem>
                    <NavBarItem><span style={{ color: 'rgba(255,255,255,0.7)' }}>About</span></NavBarItem>
                </NavBarContent>
            </NavBar>
        </div>
    ),
};

export const NonSticky: Story = {
    render: () => (
        <NavBar sticky={false}>
            <NavBarBrand>FinFlow</NavBarBrand>
            <NavBarContent align="right">
                <NavBarItem active>Home</NavBarItem>
                <NavBarItem>Pricing</NavBarItem>
                <NavBarItem>Contact</NavBarItem>
            </NavBarContent>
        </NavBar>
    ),
};

/** Many navigation items — edge case for overflow */
export const ManyItems: Story = {
    render: () => (
        <NavBar>
            <NavBarBrand>FinFlow</NavBarBrand>
            <NavBarContent align="center">
                <NavBarItem active>Dashboard</NavBarItem>
                <NavBarItem>Transactions</NavBarItem>
                <NavBarItem>Investments</NavBarItem>
                <NavBarItem>Analytics</NavBarItem>
                <NavBarItem>Wallets</NavBarItem>
                <NavBarItem>Reports</NavBarItem>
                <NavBarItem>Settings</NavBarItem>
                <NavBarItem>Help</NavBarItem>
            </NavBarContent>
        </NavBar>
    ),
};

/** Brand with link (href) */
export const WithBrandLink: Story = {
    render: () => (
        <NavBar>
            <NavBarBrand href="https://finflow.app">FinFlow</NavBarBrand>
            <NavBarContent align="center">
                <NavBarItem active>Dashboard</NavBarItem>
                <NavBarItem>Transactions</NavBarItem>
            </NavBarContent>
            <NavBarContent align="right">
                <NavBarSeparator />
                <NavBarItem>Profile</NavBarItem>
            </NavBarContent>
        </NavBar>
    ),
};

/** Glass variant with multiple sections */
export const GlassFull: Story = {
    render: () => (
        <NavBar variant="glass">
            <NavBarBrand>FinFlow</NavBarBrand>
            <NavBarContent align="center">
                <NavBarItem active>Dashboard</NavBarItem>
                <NavBarItem>Transactions</NavBarItem>
                <NavBarItem>Analytics</NavBarItem>
                <NavBarItem>Wallets</NavBarItem>
            </NavBarContent>
            <NavBarContent align="right">
                <NavBarSeparator />
                <NavBarItem>Sign Out</NavBarItem>
            </NavBarContent>
        </NavBar>
    ),
};

/** Dark mode navbar */
export const DarkMode: Story = {
    render: () => (
        <div className="dark">
            <NavBar>
                <NavBarBrand>FinFlow</NavBarBrand>
                <NavBarContent align="center">
                    <NavBarItem active>Dashboard</NavBarItem>
                    <NavBarItem>Transactions</NavBarItem>
                    <NavBarItem>Investments</NavBarItem>
                </NavBarContent>
            </NavBar>
        </div>
    ),
};

/** Mobile responsive */
export const Mobile: Story = {
    render: () => (
        <div className="max-w-sm mx-auto border border-border-primary rounded-lg overflow-hidden">
            <NavBar>
                <NavBarBrand>FinFlow</NavBarBrand>
                <NavBarContent align="center">
                    <NavBarItem active>Home</NavBarItem>
                </NavBarContent>
            </NavBar>
        </div>
    ),
};

const HeroPage = () => (
    <div className="px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-text-primary">
            Move your money the Apple way
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
            A hero headline sitting directly under the navbar. If the mobile panel
            were transparent, these words would bleed through the navigation links.
        </p>
    </div>
);

/**
 * Responsive navbar: desktop links collapse into an opaque dropdown panel on mobile.
 * Resize below `md` (768px) to reveal the hamburger toggle.
 */
export const WithMobileMenu: Story = {
    parameters: {
        viewport: { defaultViewport: 'mobile1' },
    },
    render: () => (
        <div className="min-h-[560px] bg-background-primary">
            <NavBar>
                <NavBarBrand href="/">FinFlow</NavBarBrand>
                <NavBarContent align="center" className="hidden md:flex">
                    <NavBarItem active href="/">Dashboard</NavBarItem>
                    <NavBarItem href="/transactions">Transactions</NavBarItem>
                    <NavBarItem href="/investments">Investments</NavBarItem>
                </NavBarContent>
                <NavBarMobileToggle />
                <NavBarMobileMenu>
                    <NavBarMobileMenuItem active href="/">Dashboard</NavBarMobileMenuItem>
                    <NavBarMobileMenuItem href="/transactions">Transactions</NavBarMobileMenuItem>
                    <NavBarMobileMenuItem href="/investments">Investments</NavBarMobileMenuItem>
                    <NavBarMobileMenuItem href="/settings">Settings</NavBarMobileMenuItem>
                </NavBarMobileMenu>
            </NavBar>
            <HeroPage />
        </div>
    ),
};

/**
 * Regression guard for the transparent-panel bug: the menu starts open over hero
 * copy, proving the panel background (`bg-surface-primary`) is fully opaque.
 */
export const MobileMenuOverContent: Story = {
    parameters: {
        viewport: { defaultViewport: 'mobile1' },
    },
    render: () => (
        <div className="min-h-[560px] bg-background-primary">
            <NavBar defaultOpen>
                <NavBarBrand href="/">FinFlow</NavBarBrand>
                <NavBarMobileToggle />
                <NavBarMobileMenu>
                    <NavBarMobileMenuItem active href="/">Dashboard</NavBarMobileMenuItem>
                    <NavBarMobileMenuItem href="/transactions">Transactions</NavBarMobileMenuItem>
                    <NavBarMobileMenuItem href="/investments">Investments</NavBarMobileMenuItem>
                </NavBarMobileMenu>
            </NavBar>
            <HeroPage />
        </div>
    ),
};

/** Controlled mobile menu — open state owned by the consumer. */
export const MobileMenuControlled: Story = {
    parameters: {
        viewport: { defaultViewport: 'mobile1' },
    },
    render: () => {
        const ControlledExample = () => {
            const [open, setOpen] = React.useState(false);

            return (
                <div className="min-h-[560px] bg-background-primary">
                    <NavBar open={open} onOpenChange={setOpen}>
                        <NavBarBrand href="/">FinFlow</NavBarBrand>
                        <NavBarMobileToggle />
                        <NavBarMobileMenu>
                            <NavBarMobileMenuItem href="/">Dashboard</NavBarMobileMenuItem>
                            <NavBarMobileMenuItem href="/transactions">Transactions</NavBarMobileMenuItem>
                        </NavBarMobileMenu>
                    </NavBar>
                    <div className="px-6 py-8 text-sm text-text-secondary">
                        Menu is {open ? 'open' : 'closed'}.
                    </div>
                </div>
            );
        };

        return <ControlledExample />;
    },
};

/** Mobile menu in dark mode — colors come from tokens, no hardcoded values. */
export const MobileMenuDarkMode: Story = {
    parameters: {
        viewport: { defaultViewport: 'mobile1' },
    },
    render: () => (
        <div className="dark min-h-[560px] bg-background-primary">
            <NavBar defaultOpen>
                <NavBarBrand href="/">FinFlow</NavBarBrand>
                <NavBarMobileToggle />
                <NavBarMobileMenu>
                    <NavBarMobileMenuItem active href="/">Dashboard</NavBarMobileMenuItem>
                    <NavBarMobileMenuItem href="/transactions">Transactions</NavBarMobileMenuItem>
                </NavBarMobileMenu>
            </NavBar>
            <HeroPage />
        </div>
    ),
};
