# DiffViewer

> **v1.0.34** · stable

A component for displaying text differences between two versions with support for unified and split views. Uses an LCS (Longest Common Subsequence) algorithm for accurate diff computation.

## Installation

```bash
# The component is copied to your project with the add cli command
import { DiffViewer } from '@/components/ui/DiffViewer';
```

## Basic Usage

```tsx
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

<DiffViewer oldText={oldCode} newText={newCode} />
```

## View Modes

### Unified View

Single column view showing all changes with line-by-line diff indicators.

```tsx
<DiffViewer oldText={oldCode} newText={newCode} initialMode="unified" />
```

### Split View

Side-by-side view comparing original and modified versions.

```tsx
<DiffViewer oldText={oldCode} newText={newCode} initialMode="split" />
```

## API

### Props

| Prop          | Type                        | Default     | Description                         |
| ------------- | --------------------------- | ----------- | ----------------------------------- |
| `oldText`     | `string`                    | -           | Original text (required)            |
| `newText`     | `string`                    | -           | Modified text (required)            |
| `oldTitle`    | `string`                    | `'Original'`| Title for original version          |
| `newTitle`    | `string`                    | `'Modified'`| Title for modified version         |
| `initialMode` | `'unified' \| 'split'`      | `'unified'` | Initial view mode                   |
| `hideHeader`  | `boolean`                   | `false`     | Hide the header with titles/toggle  |
| `className`   | `string`                    | -           | Additional CSS classes              |

## Visual Indicators

| Change Type   | Background Color          | Prefix Symbol |
| ------------- | ------------------------ | ------------- |
| Added         | Green (light/dark)       | `+`           |
| Removed       | Red with strikethrough   | `-`           |
| Unchanged     | Transparent              | (none)        |

## Examples

### With Custom Titles

```tsx
<DiffViewer
  oldText={oldCode}
  newText={newCode}
  oldTitle="Version 1.0"
  newTitle="Version 2.0"
/>
```

### Hidden Header

Useful when embedding in larger containers.

```tsx
<DiffViewer
  oldText={oldCode}
  newText={newCode}
  hideHeader={true}
/>
```

### Long Diff

```tsx
const legacyCode = `function greet(name: string) {
  return "Hello, " + name;
}

function farewell(name: string) {
  return "Goodbye, " + name;
}

function formatCurrency(amount: number) {
  return "$" + amount.toFixed(2);
}`;

const refactoredCode = `function greet(name: string) {
  return \`Hello, \${name}\`;
}

function farewell(name: string) {
  return \`See you later, \${name}\`;
}

function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
}`;

<DiffViewer
  oldText={legacyCode}
  newText={refactoredCode}
  oldTitle="Legacy"
  newTitle="Refactored"
/>
```

### Empty Original (New File)

```tsx
<DiffViewer
  oldText=""
  newText="console.log('Hello, world!');"
/>
```

## Notes

- Uses LCS algorithm for accurate diff computation
- Supports both unified and split view modes
- Toggle between modes via header buttons
- Line numbers displayed in both modes
- Color-coded for added (green) and removed (red) changes
- Supports dark mode with adjusted colors
- Horizontal scroll for long lines
- All props extend HTML div element attributes