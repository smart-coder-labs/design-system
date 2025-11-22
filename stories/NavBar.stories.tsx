import type { Meta, StoryObj } from '@storybook/react';
import { NavBar, NavBarBrand, NavBarContent, NavBarItem, NavBarSeparator } from '../components/NavBar';
import { Button } from '../components/Button';

const meta: Meta<typeof NavBar> = {
    title: 'Components/NavBar',
    component: NavBar,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'glass', 'transparent'],
        },
        sticky: {
            control: 'boolean',
        },
    },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Default: Story = {
    args: {
        children: (
            <>
                <NavBarBrand href="/">
                    <span>Brand</span>
                </NavBarBrand>
                <NavBarContent align="center">
                    <NavBarItem active href="#">Home</NavBarItem>
                    <NavBarItem href="#">Products</NavBarItem>
                    <NavBarItem href="#">About</NavBarItem>
                    <NavBarItem href="#">Contact</NavBarItem>
                </NavBarContent>
                <NavBarContent align="right">
                    <NavBarSeparator />
                    <Button variant="ghost">Sign In</Button>
                    <Button variant="primary">Sign Up</Button>
                </NavBarContent>
            </>
        ),
    },
};

export const Glass: Story = {
    args: {
        variant: 'glass',
        children: (
            <>
                <NavBarBrand href="/">
                    <span>Glass Brand</span>
                </NavBarBrand>
                <NavBarContent align="right">
                    <NavBarItem active href="#">Home</NavBarItem>
                    <NavBarItem href="#">About</NavBarItem>
                </NavBarContent>
            </>
        ),
    },
};
