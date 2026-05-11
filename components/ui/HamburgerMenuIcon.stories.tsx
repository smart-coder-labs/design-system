import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { HamburgerMenuIcon } from './HamburgerMenuIcon';
import { useState } from 'react';

const meta: Meta<typeof HamburgerMenuIcon> = {
  title: 'Components/HamburgerMenuIcon',
  component: HamburgerMenuIcon,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {
    isOpen: false,
  },
};

export const Open: Story = {
  args: {
    isOpen: true,
  },
};

export const Small: Story = {
  args: {
    isOpen: false,
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    isOpen: false,
    size: 'lg',
  },
};

export const PrimaryVariant: Story = {
  args: {
    isOpen: false,
    variant: 'primary',
  },
};

export const GhostVariant: Story = {
  args: {
    isOpen: false,
    variant: 'ghost',
  },
};

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <div className="flex items-center gap-4">
        <HamburgerMenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <span className="text-sm text-text-secondary">{isOpen ? 'Open (X)' : 'Closed (≡)'}</span>
      </div>
    );
  },
};
