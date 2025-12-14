import type { Meta, StoryObj } from '@storybook/react';
import { DiffViewer } from '../components/DiffViewer';

const meta = {
    title: 'Data Display/DiffViewer',
    component: DiffViewer,
    parameters: {
        layout: 'padded',
    },
    tags: [],
} satisfies Meta<typeof DiffViewer>;

export default meta;
type Story = StoryObj<typeof meta>;

const oldCode = `function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

const user = {
  name: 'John',
  role: 'admin'
};`;

const newCode = `function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

const user = {
  name: 'John Doe',
  role: 'super-admin',
  lastLogin: new Date()
};`;

const oldConfig = `server:
  port: 8080
  host: "localhost"
  debug: true
database:
  url: "postgres://localhost:5432/db"
  pool: 5`;

const newConfig = `server:
  port: 3000
  host: "0.0.0.0"
  debug: false
  cors: true
database:
  url: "postgres://production-db:5432/db"
  pool: 20
  ssl: true`;

export const Unified: Story = {
    args: {
        oldText: oldCode,
        newText: newCode,
        oldTitle: 'utils.js (v1)',
        newTitle: 'utils.js (v2)',
        initialMode: 'unified',
    },
};

export const Split: Story = {
    args: {
        oldText: oldCode,
        newText: newCode,
        oldTitle: 'utils.js (v1)',
        newTitle: 'utils.js (v2)',
        initialMode: 'split',
    },
    render: (args) => (
        <div className="max-w-4xl">
            <DiffViewer {...args} />
        </div>
    )
};

export const ConfigDiff: Story = {
    args: {
        oldText: oldConfig,
        newText: newConfig,
        oldTitle: 'config.dev.yaml',
        newTitle: 'config.prod.yaml',
        initialMode: 'split',
    },
};

export const NoHeader: Story = {
    args: {
        oldText: 'Line 1\nLine 2\nLine 3',
        newText: 'Line 1\nLine 2 Modified\nLine 3',
        hideHeader: true,
    },
};
