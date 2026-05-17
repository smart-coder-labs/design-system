# StickyImageTextSwap

> **v1.0.7** · stable

An interactive scroll-driven component that swaps images while the user scrolls through text sections. The image stays sticky on one side while text scrolls on the other.

## Installation

```bash
import { StickyImageTextSwap } from '@/components/ui/StickyImageTextSwap';
```

## Basic Usage

```tsx
<StickyImageTextSwap
  items={[
    { id: 1, title: 'Smart Budgeting', description: 'AI-powered budgeting...', image: '/budget.jpg' },
    { id: 2, title: 'Investment Tracking', description: 'Real-time portfolio...', image: '/invest.jpg' },
    { id: 3, title: 'Secure Payments', description: 'Bank-grade encryption...', image: '/secure.jpg' },
  ]}
/>
```

## API

### Props

| Prop | Type | Description |
|------|------|-------------|
| `items` | `StickySectionItem[]` | Array of sections to display |
| `className` | `string` | Additional classes |
| `...HTMLAttributes` | `HTMLDivElement` | Standard div props |

### StickySectionItem

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string \| number` | Unique identifier |
| `title` | `string` | Section title |
| `description` | `string` | Section description text |
| `image` | `string` | Background image URL |

## Examples

### Fintech Onboarding

```tsx
<StickyImageTextSwap
  items={[
    { 
      id: 1, 
      title: 'Create Your Account', 
      description: 'Sign up in minutes with just your email and phone number. No paperwork required.',
      image: 'https://picsum.photos/seed/account/800/600'
    },
    { 
      id: 2, 
      title: 'Link Your Bank', 
      description: 'Connect your existing accounts securely using Plaid. Your data is always encrypted.',
      image: 'https://picsum.photos/seed/bank-link/800/600'
    },
    { 
      id: 3, 
      title: 'Start Investing', 
      description: 'Choose from curated portfolios or build your own. Start with as little as $10.',
      image: 'https://picsum.photos/seed/start-invest/800/600'
    },
    { 
      id: 4, 
      title: 'Track Your Growth', 
      description: 'Monitor your net worth, portfolio performance, and financial goals from one dashboard.',
      image: 'https://picsum.photos/seed/growth/800/600'
    },
  ]}
/>
```

### Three Features

```tsx
<StickyImageTextSwap
  items={[
    { id: 1, title: 'Real-time Analytics', description: 'See your spending patterns...', image: '/analytics.jpg' },
    { id: 2, title: 'Smart Alerts', description: 'Get notified about unusual spending...', image: '/alerts.jpg' },
    { id: 3, title: 'Goal Tracking', description: 'Set savings goals...', image: '/goals.jpg' },
  ]}
/>
```

### Two Items

```tsx
<StickyImageTextSwap
  items={[
    { id: 1, title: 'Financial Dashboard', description: 'Complete overview of your financial life...', image: '/dashboard.jpg' },
    { id: 2, title: 'AI Insights', description: 'Personalized recommendations...', image: '/insights.jpg' },
  ]}
/>
```

## Notes

- Uses Framer Motion for smooth crossfade transitions between images
- Left side: sticky image container with 60vh height
- Right side: scrollable text with large vertical gaps (70vh) between sections
- Image transitions: 500ms ease-in-out with scale and blur effects
- Text opacity animates based on viewport entry (whileInView)
- Responsive: stacks vertically on mobile (flex-col on md:flex-row)
- Images use background-image for proper cover positioning
- Dark mode support (adapts text colors automatically)