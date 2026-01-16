import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from '../components/ui/CodeBlock';

const meta: Meta<typeof CodeBlock> = {
    title: 'Typography/CodeBlock',
    component: CodeBlock,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A component for displaying code snippets with syntax highlighting structure and copy functionality.',
            },
        },
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

const sampleCode = `import React from 'react';
import { Button } from './Button';

export const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Button>Click me</Button>
    </div>
  );
};`;

export const Default: Story = {
    args: {
        code: sampleCode,
        language: 'tsx',
    },
};

export const WithLineNumbers: Story = {
    args: {
        code: sampleCode,
        language: 'tsx',
        showLineNumbers: true,
    },
};

export const LongCode: Story = {
    args: {
        language: 'json',
        code: JSON.stringify(
            {
                name: 'design-system',
                version: '1.0.0',
                description: 'A premium design system',
                scripts: {
                    test: 'jest',
                    build: 'tsc',
                    storybook: 'storybook dev -p 6006',
                },
                dependencies: {
                    react: '^18.2.0',
                    'framer-motion': '^10.16.4',
                    'lucide-react': '^0.292.0',
                },
            },
            null,
            2
        ),
        showLineNumbers: true,
    },
    render: (args) => (
        <div className="w-[500px]">
            <CodeBlock {...args} />
        </div>
    ),
};
