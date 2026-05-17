# InteractiveBillSplitter

> **v1.0.13** · stable

A social bill splitting component for group dining and shared expenses. Allows users to add friends, select tip percentage, and see equal split calculations in real-time.

## Installation

```bash
# The component is copied to your project with the add cli command
import { InteractiveBillSplitter } from '@/components/ui/InteractiveBillSplitter';
```

## Basic Usage

```tsx
import { InteractiveBillSplitter } from '@/components/ui/InteractiveBillSplitter';

const friends = [
  { id: 'me', name: 'You', isUser: true },
  { id: 'ana', name: 'Ana García' },
  { id: 'carlos', name: 'Carlos Medina' },
];

<InteractiveBillSplitter
  billAmount={150.75}
  friends={friends}
  onSplitComplete={(splits) => console.log(splits)}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `billAmount` | `number` | `150.75` | Total bill amount before tip |
| `currency` | `string` | `'USD'` | Currency code for formatting |
| `friends` | `SplitContact[]` | - | Array of contacts to split with |
| `onSplitComplete` | `(splits: SplitResult[]) => void` | - | Called when split is confirmed |
| `className` | `string` | - | Additional CSS classes |

### SplitContact

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique contact identifier |
| `name` | `string` | Contact display name |
| `avatarUrl` | `string` | Optional avatar image URL |
| `isUser` | `boolean` | Whether this contact is the current user |

### SplitResult

| Prop | Type | Description |
|------|------|-------------|
| `contactId` | `string` | Contact identifier |
| `amount` | `number` | Calculated split amount |

## Examples

### Default Dinner Split

```tsx
const friends = [
  { id: 'me', name: 'You', isUser: true },
  { id: 'ana', name: 'Ana García' },
  { id: 'carlos', name: 'Carlos Medina' },
  { id: 'laura', name: 'Laura Pérez' },
];

<InteractiveBillSplitter
  billAmount={150.75}
  friends={friends}
  onSplitComplete={(splits) => console.log(splits)}
/>
```

### Two People Split

```tsx
<InteractiveBillSplitter
  billAmount={67.30}
  friends={[
    { id: 'me', name: 'You', isUser: true },
    { id: 'ana', name: 'Ana García' },
  ]}
/>
```

### Euro Currency

```tsx
<InteractiveBillSplitter
  billAmount={89.50}
  currency="EUR"
  friends={[
    { id: 'me', name: 'You', isUser: true },
    { id: 'ana', name: 'Ana García' },
    { id: 'carlos', name: 'Carlos Medina' },
  ]}
/>
```

### Large Group Dinner

```tsx
const largeGroup = [
  { id: 'me', name: 'You', isUser: true },
  { id: 'ana', name: 'Ana García' },
  { id: 'carlos', name: 'Carlos Medina' },
  // ... more contacts
];

<InteractiveBillSplitter
  billAmount={1250.00}
  currency="MXN"
  friends={largeGroup}
/>
```

### With Avatar URLs

```tsx
<InteractiveBillSplitter
  billAmount={200}
  friends={[
    { id: 'me', name: 'You', isUser: true, avatarUrl: '/me.jpg' },
    { id: 'ana', name: 'Ana', avatarUrl: '/ana.jpg' },
    { id: 'carlos', name: 'Carlos', avatarUrl: '/carlos.jpg' },
  ]}
/>
```

### With Custom Split Handler

```tsx
function PaymentRequest() {
  const handleSplitComplete = (splits) => {
    // Send payment requests to each participant
    splits.forEach(split => {
      console.log(`Request $${split.amount} from ${split.contactId}`);
    });
  };

  return (
    <InteractiveBillSplitter
      billAmount={150.75}
      friends={friends}
      onSplitComplete={handleSplitComplete}
    />
  );
}
```

## Notes

- Tip options: 10%, 15%, 20%
- Automatically calculates equal split among selected participants
- "You" label shown for current user's split
- Animated participant list updates when adding/removing
- Avatar fallbacks use first two letters of name
- Dark mode support via design tokens
- Scrollable friend selector for large groups
- Tap to select/deselect friends in edit mode