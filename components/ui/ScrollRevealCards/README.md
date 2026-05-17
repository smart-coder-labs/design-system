# ScrollRevealCards

> **v1.0.19** · stable

A grid layout component that animates cards into view as the user scrolls. Cards stagger in with a spring animation, creating a smooth reveal effect perfect for feature showcases, pricing tables, or dashboard widgets.

## Installation

```bash
import { ScrollRevealCards, ScrollRevealCard } from '@/components/ui/ScrollRevealCards';
```

## Basic Usage

```tsx
import { ScrollRevealCards } from '@/components/ui/ScrollRevealCards';

const items = [
    { id: '1', title: 'Feature One', description: 'Description here', icon: '🚀' },
    { id: '2', title: 'Feature Two', description: 'Description here', icon: '💡' },
    { id: '3', title: 'Feature Three', description: 'Description here', icon: '⚡' },
];

<ScrollRevealCards items={items} columns={3} />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `ScrollRevealCard[]` | - | Array of card data |
| `columns` | `2 \| 3 \| 4` | `3` | Number of grid columns |
| `className` | `string` | - | Additional CSS classes |

### ScrollRevealCard

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string \| number` | Unique identifier |
| `title` | `string` | Card title |
| `description` | `string` | Card description |
| `icon` | `ReactNode` | Optional icon |

## Examples

### Two Column Layout

```tsx
<ScrollRevealCards
    items={[
        { id: '1', title: 'Quick Transfer', description: 'Send money instantly', icon: '💸' },
        { id: '2', title: 'Bill Pay', description: 'Schedule payments', icon: '📄' },
    ]}
    columns={2}
/>
```

### Four Column Premium Features

```tsx
<ScrollRevealCards
    items={[
        { id: '1', title: 'Priority Support', description: '24/7 dedicated support', icon: '⭐' },
        { id: '2', title: 'Advanced Analytics', description: 'Detailed insights', icon: '📊' },
    ]}
    columns={4}
/>
```

### Feature Showcase

```tsx
<ScrollRevealCards
    items={[
        { id: '1', title: 'Smart Investing', description: 'AI-powered insights for better returns', icon: '📈' },
        { id: '2', title: 'Secure Banking', description: 'Bank-grade encryption protects your data', icon: '🔒' },
        { id: '3', title: 'Real-time Analytics', description: 'Track performance with interactive charts', icon: '📊' },
        { id: '4', title: 'Goal Tracking', description: 'Set and achieve your financial goals', icon: '🎯' },
    ]}
    columns={3}
/>
```

## Notes

- Cards animate in with a spring physics animation
- Stagger delay of 100ms between each card
- Uses Framer Motion's `whileInView` with `viewport={{ once: true }}`
- Cards only animate once per page load
- Responsive: collapses to single column on mobile
- Supports dark mode via design tokens
- Glassmorphism effect with backdrop blur