import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from './CodeBlock';

const meta = {
    title: 'Typography/CodeBlock',
    component: CodeBlock,
    tags: ['autodocs'],
} satisfies Meta<typeof CodeBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleCode = `const calculateInterest = (
  principal: number,
  rate: number,
  time: number
): number => {
  return principal * rate * time / 100;
};

const result = calculateInterest(10000, 5, 2);
console.log(\`Interest: $\{result}\`);`;

export const Default: Story = {
    args: {
        code: sampleCode,
        language: 'typescript',
    },
};

export const WithLineNumbers: Story = {
    args: {
        code: sampleCode,
        language: 'typescript',
        showLineNumbers: true,
    },
};

export const Python: Story = {
    args: {
        code: `def calculate_interest(principal, rate, time):
    return principal * rate * time / 100

result = calculate_interest(10000, 5, 2)
print(f"Interest: {result}")`,
        language: 'python',
        showLineNumbers: true,
    },
};

export const JSON: Story = {
    args: {
        code: JSON.stringify({
            name: "Portfolio",
            assets: [
                { symbol: "AAPL", shares: 50, price: 198.45 },
                { symbol: "GOOGL", shares: 30, price: 175.20 },
            ],
            total: 15180.00,
        }, null, 2),
        language: 'json',
    },
};

export const Bash: Story = {
    args: {
        code: `#!/bin/bash
# Deploy script
git pull origin main
npm install
npm run build
pm2 restart app`,
        language: 'bash',
        showLineNumbers: true,
    },
};

export const ShortCode: Story = {
    args: {
        code: `console.log("Hello, World!");`,
        language: 'javascript',
    },
};

export const SQL: Story = {
    args: {
        code: `SELECT 
  u.name,
  SUM(t.amount) as total_transactions
FROM users u
JOIN transactions t ON u.id = t.user_id
GROUP BY u.id
HAVING total_transactions > 1000
ORDER BY total_transactions DESC;`,
        language: 'sql',
        showLineNumbers: true,
    },
};

export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
    themes: { themeOverride: 'dark' },
  },
  decorators: [
    (Story) => (
      <div className="dark bg-gray-950 min-h-screen p-8">
        <Story />
      </div>
    ),
  ],
};
