import type { Meta, StoryObj } from '@storybook/react';
import { NavBar, NavBarBrand, NavBarContent, NavBarItem, NavBarSeparator } from './NavBar';
import { NavBarMobileTrigger, NavBarMobileMenu } from './NavBar.mobile';
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

/**
 * Mobile menu — resize the viewport below `md` (768px) to see the hamburger.
 * The panel uses an opaque `bg-surface-primary` surface so links stay readable
 * over any content behind the navbar.
 */
export const MobileMenu: Story = {
    render: () => (
        <div>
            <NavBar sticky={false}>
                <NavBarBrand>FinFlow</NavBarBrand>
                <NavBarContent align="center" className="hidden md:flex">
                    <NavBarItem active href="#dashboard">Dashboard</NavBarItem>
                    <NavBarItem href="#transactions">Transactions</NavBarItem>
                    <NavBarItem href="#investments">Investments</NavBarItem>
                </NavBarContent>
                <NavBarContent align="right">
                    <NavBarMobileTrigger aria-label="Open navigation menu" />
                </NavBarContent>
                {/* No `active` here: the desktop list above stays mounted and
                    `NavBarItem` shares a single `layoutId` for the indicator. */}
                <NavBarMobileMenu>
                    <NavBarItem href="#dashboard">Dashboard</NavBarItem>
                    <NavBarItem href="#transactions">Transactions</NavBarItem>
                    <NavBarItem href="#investments">Investments</NavBarItem>
                    <NavBarItem href="#settings">Settings</NavBarItem>
                </NavBarMobileMenu>
            </NavBar>
            <div className="p-8 space-y-2">
                <p className="text-2xl font-semibold text-text-primary">Page content behind the menu</p>
                <p className="text-text-secondary">The open panel must fully cover this copy.</p>
            </div>
        </div>
    ),
};

/** Mobile menu rendered open by default (controlled via `defaultOpen`) */
export const MobileMenuOpen: Story = {
    render: () => (
        <div>
            <NavBar sticky={false} defaultOpen>
                <NavBarBrand>FinFlow</NavBarBrand>
                <NavBarContent align="right">
                    <NavBarMobileTrigger aria-label="Open navigation menu" />
                </NavBarContent>
                <NavBarMobileMenu>
                    <NavBarItem href="#dashboard">Dashboard</NavBarItem>
                    <NavBarItem href="#transactions">Transactions</NavBarItem>
                    <NavBarItem href="#investments">Investments</NavBarItem>
                </NavBarMobileMenu>
            </NavBar>
            <div className="p-8 space-y-2">
                <p className="text-2xl font-semibold text-text-primary">Page content behind the menu</p>
                <p className="text-text-secondary">The open panel must fully cover this copy.</p>
            </div>
        </div>
    ),
};
