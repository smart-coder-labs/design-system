import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { EmptyState } from './EmptyState';
import { Button } from './Button';
import { Inbox, SearchX, CloudOff } from 'lucide-react';

const meta: Meta<typeof EmptyState> = {
  title: 'Components/EmptyState',
  component: EmptyState,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'No items yet',
    description: 'Get started by adding your first item to this list.',
    icon: <Inbox />,
  },
};

export const WithAction: Story = {
  args: {
    title: 'No transactions found',
    description: 'Try adjusting your search or filter criteria.',
    icon: <SearchX />,
    action: <Button variant="primary" size="sm">Clear Filters</Button>,
  },
};

export const OfflineState: Story = {
  args: {
    title: 'No internet connection',
    description: 'Check your connection and try again.',
    icon: <CloudOff />,
    action: <Button variant="primary" size="sm">Retry</Button>,
  },
};

export const NoIcon: Story = {
  args: {
    title: 'Nothing here',
    description: 'This section is empty.',
  },
};

export const Minimal: Story = {
  args: {
    title: 'No notifications',
  },
};
