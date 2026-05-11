import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DockBar, DockBarItem } from './DockBar';
import { Home, Search, Mail, Calendar, Settings, User } from 'lucide-react';

const defaultItems: DockBarItem[] = [
  { id: 'finder', label: 'Finder', icon: <span className="text-xl">😊</span>, active: true },
  { id: 'mail', label: 'Mail', icon: <Mail className="w-5 h-5" />, badge: 3 },
  { id: 'calendar', label: 'Calendar', icon: <Calendar className="w-5 h-5" />, badge: '12' },
  { id: 'search', label: 'Spotlight', icon: <Search className="w-5 h-5" /> },
  { id: 'settings', label: 'Settings', icon: <Settings className="w-5 h-5" /> },
  { id: 'user', label: 'Profile', icon: <User className="w-5 h-5" /> },
];

const meta: Meta<typeof DockBar> = {
  title: 'Components/DockBar',
  component: DockBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

export const NoMagnification: Story = {
  args: {
    items: defaultItems,
    magnification: false,
  },
};

export const LeftPosition: Story = {
  args: {
    items: defaultItems,
    position: 'left',
  },
};

export const SmallSize: Story = {
  args: {
    items: defaultItems,
    size: 'sm',
  },
};

export const LargeSize: Story = {
  args: {
    items: defaultItems,
    size: 'lg',
  },
};
