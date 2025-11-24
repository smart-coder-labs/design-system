import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from '../components/CodeBlock';

const meta = {
    title: 'Data Display/CodeBlock',
    component: CodeBlock,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    argTypes: {
        language: {
            control: 'select',
            options: ['typescript', 'javascript', 'tsx', 'jsx', 'css', 'json', 'bash', 'python', 'go', 'rust'],
        },
    },
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const tsCode = `interface User {
  id: number;
  name: string;
  role: 'admin' | 'user';
}

function getUser(id: number): User {
  return {
    id,
    name: 'John Doe',
    role: 'admin'
  };
}`;

const reactCode = `import React, { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
};`;

const cssCode = `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
}`;

export const Default: Story = {
    args: {
        language: 'typescript',
        code: tsCode,
        filename: 'types.ts',
    },
};

export const ReactComponent: Story = {
    args: {
        language: 'tsx',
        code: reactCode,
        filename: 'Counter.tsx',
    },
};

export const CSS: Story = {
    args: {
        language: 'css',
        code: cssCode,
        filename: 'styles.css',
    },
};

export const NoLineNumbers: Story = {
    args: {
        language: 'typescript',
        code: tsCode,
        showLineNumbers: false,
        filename: 'snippet.ts',
    },
};

export const NoHeader: Story = {
    args: {
        language: 'bash',
        code: 'npm install @apple-design-system/core',
        filename: undefined,
        showCopyButton: true,
    },
};

export const TerminalStyle: Story = {
    args: {
        language: 'bash',
        code: `git clone https://github.com/example/repo.git
cd repo
npm install
npm run dev`,
        filename: undefined,
        showLineNumbers: false,
    },
    render: (args) => (
        <div className="max-w-2xl">
            <CodeBlock {...args} />
        </div>
    )
};
