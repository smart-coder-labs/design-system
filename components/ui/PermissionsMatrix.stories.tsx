import type { Meta, StoryObj } from '@storybook/react';
import { PermissionsMatrix } from './PermissionsMatrix';

const meta = {
  title: 'Components/PermissionsMatrix',
  component: PermissionsMatrix,
  tags: ['autodocs'],
} satisfies Meta<typeof PermissionsMatrix>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    roles: ['Admin', 'Editor', 'Viewer'],
    permissions: ['Read', 'Write', 'Delete', 'Share'],
    matrix: {
      Admin: { Read: true, Write: true, Delete: true, Share: true },
      Editor: { Read: true, Write: true, Delete: false, Share: true },
      Viewer: { Read: true, Write: false, Delete: false, Share: false },
    },
  },
};

export const CryptoPermissions: Story = {
  args: {
    roles: ['Owner', 'Trader', 'Auditor'],
    permissions: ['View Balance', 'Trade', 'Withdraw', 'View History'],
    matrix: {
      Owner: { 'View Balance': true, Trade: true, Withdraw: true, 'View History': true },
      Trader: { 'View Balance': true, Trade: true, Withdraw: false, 'View History': true },
      Auditor: { 'View Balance': true, Trade: false, Withdraw: false, 'View History': true },
    },
  },
};

export const Editable: Story = {
  args: {
    roles: ['Admin', 'Member'],
    permissions: ['View', 'Comment', 'Edit'],
    matrix: {
      Admin: { View: true, Comment: true, Edit: true },
      Member: { View: true, Comment: true, Edit: false },
    },
    editable: true,
    onChange: (newMatrix: any) => console.log('Matrix changed:', newMatrix),
  },
};
