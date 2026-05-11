import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DiffViewer } from './DiffViewer';

const oldCode = `const calculateTotal = (items: Item[]): number => {
  let total = 0;
  for (const item of items) {
    total += item.price * item.quantity;
  }
  return total;
};`;

const newCode = `const calculateTotal = (items: Item[]): number => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};`;

const meta: Meta<typeof DiffViewer> = {
  title: 'Components/DiffViewer',
  component: DiffViewer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    oldText: oldCode,
    newText: newCode,
  },
};

export const SplitView: Story = {
  args: {
    oldText: oldCode,
    newText: newCode,
    initialMode: 'split',
  },
};

export const WithTitles: Story = {
  args: {
    oldText: oldCode,
    newText: newCode,
    oldTitle: 'Version 1.0',
    newTitle: 'Version 2.0',
  },
};

export const HiddenHeader: Story = {
  args: {
    oldText: oldCode,
    newText: newCode,
    hideHeader: true,
  },
};

export const LongDiff: Story = {
  args: {
    oldText: `function greet(name: string) {\n  return "Hello, " + name;\n}\n\nfunction farewell(name: string) {\n  return "Goodbye, " + name;\n}\n\nfunction formatCurrency(amount: number) {\n  return "$" + amount.toFixed(2);\n}`,
    newText: `function greet(name: string) {\n  return \`Hello, \${name}\`;\n}\n\nfunction farewell(name: string) {\n  return \`See you later, \${name}\`;\n}\n\nfunction formatCurrency(amount: number, currency = "USD") {\n  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);\n}`,
    oldTitle: 'Legacy',
    newTitle: 'Refactored',
  },
};

export const EmptyOld: Story = {
  args: {
    oldText: '',
    newText: 'console.log("Hello, world!");',
  },
};
