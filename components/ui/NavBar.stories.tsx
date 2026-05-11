import type { Meta, StoryObj } from '@storybook/react';
import { NavBar, NavBarBrand, NavBarContent, NavBarItem, NavBarSeparator } from './NavBar';
import React from 'react';

const meta = {
    title: 'Components/NavBar',
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
