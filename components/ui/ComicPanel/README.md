# ComicPanel

> **v1.0.27** · stable

A styled container component with comic-style borders and entry animations. Ideal for notifications, alerts, and call-to-action messages.

## Installation

```bash
import { ComicPanel } from '@/components/ui/ComicPanel';
```

## Basic Usage

```tsx
<ComicPanel>
  <h3>Portfolio Milestone!</h3>
  <p>Your investment portfolio just crossed $100,000!</p>
</ComicPanel>
```

## Direction Variants

```tsx
// Slide in from left (default)
<ComicPanel direction="left">
  <p>Content slides in from the left.</p>
</ComicPanel>

// Slide in from right
<ComicPanel direction="right">
  <p>Content slides in from the right.</p>
</ComicPanel>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | `'left' \| 'right'` | `'left'` | Entry animation direction |
| `children` | `ReactNode` | - | Panel content |
| `className` | `string` | - | Additional CSS classes |

Extends all `HTMLMotionProps<"div">` from Framer Motion.

## Examples

### Financial Alert

```tsx
<ComicPanel direction="right">
  <div className="flex items-center gap-2">
    <span className="text-2xl">🚨</span>
    <h3 className="text-lg font-bold text-red-600">Suspicious Activity</h3>
  </div>
  <p>A withdrawal of $3,450.00 was attempted from an unrecognized device.</p>
</ComicPanel>
```

### Savings Achievement

```tsx
<ComicPanel direction="right">
  <div className="flex items-center gap-2">
    <span className="text-2xl">🚀</span>
    <h3 className="text-lg font-bold">Savings Goal Achieved!</h3>
  </div>
  <p>Congratulations! You've reached your vacation savings goal of $5,000.</p>
</ComicPanel>
```

### Financial Tip

```tsx
<ComicPanel direction="left">
  <p>💡 Did you know? Investing $500/month with an 8% annual return could grow to over $150,000 in 15 years thanks to compound interest.</p>
</ComicPanel>
```

### Monthly Summary

```tsx
<ComicPanel direction="left">
  <h3 className="text-lg font-bold mb-2">April in Review 📊</h3>
  <div className="text-sm">
    <p>Income: <span className="text-green-600 font-bold">+$12,450</span></p>
    <p>Expenses: <span className="text-red-600 font-bold">-$8,230</span></p>
    <p>Saved: <span className="text-green-600 font-bold">$4,220</span> (34% savings rate)</p>
  </div>
</ComicPanel>
```

### Large Notification

```tsx
<ComicPanel direction="right">
  <h3 className="text-lg font-bold mb-2">Large Deposit Received 🏦</h3>
  <p>A wire transfer of $250,000.00 from Acme Corp. has been deposited into your Business Checking account.</p>
</ComicPanel>
```

## Notes

- Uses Framer Motion for spring-based entry animations
- Panel slides in from the specified direction (left or right) when in viewport
- Features a subtle comic-style shadow offset on either the left or right
- Includes a subtle dot-grid background pattern
- Fully supports dark mode with appropriate color tokens
- Animates on every scroll into view (viewport once=false)
- Border radius is 3xl (large rounded corners)