import type { Meta, StoryObj } from '@storybook/react';
import { WindowFrame } from './WindowFrame';

const meta = {
  title: 'Components/WindowFrame',
  component: WindowFrame,
  tags: ['autodocs'],
} satisfies Meta<typeof WindowFrame>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'finder',
    children: (
      <div className="p-6">
        <p className="text-text-primary">Window content goes here.</p>
      </div>
    ),
  },
};

export const WithoutControls: Story = {
  args: {
    title: 'Terminal',
    showControls: false,
    children: (
      <div className="p-6 bg-gray-950 text-green-400 font-mono text-sm">
        <p>$ npm run dev</p>
        <p className="opacity-50">&gt; dev</p>
        <p className="opacity-50">&gt; next dev</p>
        <p>ready - started server on 0.0.0.0:3000</p>
      </div>
    ),
  },
};

export const DarkVariant: Story = {
  args: {
    title: 'Code Editor',
    variant: 'dark',
    children: (
      <div className="p-6 text-gray-300 font-mono text-sm">
        <pre>{`const App = () => {
  return (
    <div>
      <h1>Hello, World!</h1>
    </div>
  );
};`}</pre>
      </div>
    ),
  },
};

export const NoTitle: Story = {
  args: {
    children: (
      <div className="p-6 text-text-primary">
        <p>Window without a title bar text.</p>
      </div>
    ),
  },
};

export const WithCallbacks: Story = {
  args: {
    title: 'Settings',
    onClose: () => alert('Close'),
    onMinimize: () => alert('Minimize'),
    onMaximize: () => alert('Maximize'),
    children: (
      <div className="p-6">
        <p className="text-text-primary">Window with working window controls.</p>
      </div>
    ),
  },
};
