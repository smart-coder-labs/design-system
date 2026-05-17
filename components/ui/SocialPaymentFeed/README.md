# SocialPaymentFeed

> **v1.0.0** · stable

A social feed component for displaying P2P payment transactions with social features like likes and comments.

## Installation

```bash
# The component is copied to your project with the add cli command
import { SocialPaymentFeed } from '@/components/ui/SocialPaymentFeed';
```

## Basic Usage

```tsx
import { SocialPaymentFeed } from '@/components/ui/SocialPaymentFeed';

const payments = [
  {
    id: '1',
    senderName: 'Alice Johnson',
    receiverName: 'Bob Smith',
    note: 'Dinner split 🍕',
    amount: 45.00,
    timestamp: new Date(),
    likes: 12,
    comments: 3,
    privacy: 'friends',
  },
];

<SocialPaymentFeed 
  payments={payments}
  onLike={(id) => console.log('Liked:', id)}
  onComment={(id) => console.log('Comment:', id)}
/>
```

## With Avatars

```tsx
<SocialPaymentFeed
  payments={[
    {
      id: '1',
      senderName: 'Alice',
      senderAvatar: 'https://i.pravatar.cc/150?u=alice',
      receiverName: 'Bob',
      receiverAvatar: 'https://i.pravatar.cc/150?u=bob',
      note: 'Thanks for coffee! ☕',
      amount: 5.50,
      timestamp: new Date(),
      likes: 8,
      comments: 1,
      privacy: 'public',
    },
  ]}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `payments` | `SocialPaymentInfo[]` | - | Array of payment data |
| `className` | `string` | - | Additional classes |
| `onLike` | `(id: string) => void` | - | Called when payment is liked |
| `onComment` | `(id: string) => void` | - | Called when comment button clicked |

### SocialPaymentInfo

```typescript
interface SocialPaymentInfo {
  id: string;
  senderName: string;
  senderAvatar?: string;
  receiverName: string;
  receiverAvatar?: string;
  amount?: number;
  currency?: string;
  note: string;
  emoji?: string;
  gifUrl?: string;
  timestamp: Date;
  likes: number;
  comments: number;
  privacy: 'public' | 'friends' | 'private';
}
```

## Examples

### With Emojis and Media

```tsx
<SocialPaymentFeed
  payments={[
    {
      id: '1',
      senderName: 'Grace Hall',
      receiverName: 'Henry Lee',
      note: 'Concert tickets! 🎵',
      amount: 180.00,
      emoji: '🎵',
      timestamp: new Date(),
      likes: 34,
      comments: 12,
      privacy: 'public',
    },
  ]}
/>
```

### Privacy Modes

```tsx
// Public - Globe icon
{ privacy: 'public' }

// Friends only - User icon  
{ privacy: 'friends' }

// Private - Lock icon
{ privacy: 'private' }
```

### Empty Feed

```tsx
<SocialPaymentFeed payments={[]} />
```

## Notes

- Displays sender and receiver avatars in overlapping stack
- Supports like interaction with optimistic updates
- Auto-formats timestamps (e.g., "30m", "2h", "3d")
- Privacy indicator icons (globe, user, lock)
- Uses Framer Motion for list animations
- Amount formatted with Intl.NumberFormat
- Supports dark mode via design tokens