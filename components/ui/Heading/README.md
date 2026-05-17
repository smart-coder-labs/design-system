# Heading

> **v1.0.19** · stable

A simple heading component that wraps the Title component. Provides semantic HTML heading elements (h1-h6) with consistent typography styling.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Heading } from '@/components/ui/Heading';
```

## Basic Usage

```tsx
import { Heading } from '@/components/ui/Heading';

<Heading level="h1">Account Overview</Heading>
<Heading level="h2">Recent Transactions</Heading>
<Heading level="h3">Investment Portfolio</Heading>
```

## API

### Props

Extends all TitleProps:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `level` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'h5' \| 'h6'` | - | Heading level |
| `children` | `ReactNode` | - | Heading content |
| `className` | `string` | - | Additional classes |
| `...props` | `TitleProps` | - | All Title component props |

## Examples

### All Heading Levels

```tsx
<Heading level="h1">Page Title (H1)</Heading>
<Heading level="h2">Section Title (H2)</Heading>
<Heading level="h3">Subsection Title (H3)</Heading>
<Heading level="h4">Card Title (H4)</Heading>
<Heading level="h5">Small Title (H5)</Heading>
<Heading level="h6">Tiny Label (H6)</Heading>
```

### Dashboard Greeting

```tsx
<Heading level="h1" className="text-3xl">
  Good morning, Cesar
</Heading>
```

### Section Title

```tsx
<Heading level="h2">
  Your Portfolio at a Glance
</Heading>
```

### Muted/Sub Text

```tsx
<div className="space-y-2">
  <Heading level="h3">Available Balance</Heading>
  <span className="text-3xl font-bold">$45,892.18</span>
  <Heading level="h5" className="text-text-tertiary">
    Updated 2 min ago
  </Heading>
</div>
```

### Banking Dashboard Layout

```tsx
<div className="w-96 space-y-6">
  <Heading level="h1">FinBank Pro</Heading>
  
  <div>
    <Heading level="h2">Accounts</Heading>
    <p className="text-sm text-text-secondary mt-1">
      View and manage your accounts
    </p>
  </div>
  
  <div className="grid grid-cols-2 gap-4">
    <div className="p-4 bg-surface-secondary rounded-xl">
      <Heading level="h5">Checking</Heading>
      <p className="text-lg font-bold">$12,430.50</p>
    </div>
    <div className="p-4 bg-surface-secondary rounded-xl">
      <Heading level="h5">Savings</Heading>
      <p className="text-lg font-bold">$33,461.68</p>
    </div>
  </div>
  
  <Heading level="h3">Recent Activity</Heading>
</div>
```

## Notes

- Internally uses the Title component
- Supports all Title props like `as`, `weight`, `color`
- Semantic HTML: renders as h1-h6 by default
- Use `as` prop to render a different element while keeping the style
- Dark mode support via CSS tokens