# CodeBlock

> **v1.0.18** · stable

A syntax-highlighted code display component with copy functionality and optional line numbers.

## Installation

```bash
import { CodeBlock } from '@/components/ui/CodeBlock';
```

## Basic Usage

```tsx
<CodeBlock
  code={`const calculateInterest = (
  principal: number,
  rate: number,
  time: number
): number => {
  return principal * rate * time / 100;
};`}
  language="typescript"
/>
```

## With Line Numbers

```tsx
<CodeBlock
  code="console.log('Hello, World!');"
  language="javascript"
  showLineNumbers
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `code` | `string` | - | The code content to display (required) |
| `language` | `string` | `'typescript'` | Programming language for the label |
| `showLineNumbers` | `boolean` | `false` | Whether to display line numbers |
| `className` | `string` | - | Additional CSS classes |

## Examples

### TypeScript

```tsx
<CodeBlock
  code={`interface User {
  id: string;
  name: string;
  email: string;
}

const getUser = async (id: string): Promise<User> => {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
};`}
  language="typescript"
  showLineNumbers
/>
```

### JSON

```tsx
<CodeBlock
  code={JSON.stringify({
    name: "Portfolio",
    assets: [
      { symbol: "AAPL", shares: 50, price: 198.45 },
      { symbol: "GOOGL", shares: 30, price: 175.20 },
    ],
    total: 15180.00,
  }, null, 2)}
  language="json"
/>
```

### Python

```tsx
<CodeBlock
  code={`def calculate_interest(principal, rate, time):
    return principal * rate * time / 100

result = calculate_interest(10000, 5, 2)
print(f"Interest: {result}")`}
  language="python"
  showLineNumbers
/>
```

### Bash

```tsx
<CodeBlock
  code={`#!/bin/bash
# Deploy script
git pull origin main
npm install
npm run build
pm2 restart app`}
  language="bash"
  showLineNumbers
/>
```

## Notes

- Copy button automatically copies code to clipboard
- Shows checkmark feedback for 2 seconds after copying
- Language label is displayed in the header
- Supports dark mode with appropriate color tokens
- Uses monospace font for code content
- Overflow is handled with horizontal scrolling