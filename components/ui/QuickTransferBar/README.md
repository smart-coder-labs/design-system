# QuickTransferBar

> **v1.0.20** · stable

A horizontal scrolling bar for quick contact selection, commonly used in fintech and payment applications. Displays contacts as avatar circles with names, supporting optional "Add New" button and custom titles.

## Installation

```bash
# The component is copied to your project with the add cli command
import { QuickTransferBar } from '@/components/ui/QuickTransferBar';
```

## Basic Usage

```tsx
import { QuickTransferBar } from '@/components/ui/QuickTransferBar';

const contacts = [
  { id: '1', name: 'Alice Johnson', initials: 'AJ' },
  { id: '2', name: 'Bob Martinez', initials: 'BM' },
  { id: '3', name: 'Carol Smith', initials: 'CS' },
  { id: '4', name: 'Dave Wilson', initials: 'DW' },
  { id: '5', name: 'Eve Davis', initials: 'ED' },
];

<QuickTransferBar
  contacts={contacts}
  onSelect={(contact) => console.log(contact)}
  onAddNew={() => console.log('Add new contact')}
/>
```

## API

### Props

| Prop        | Type                      | Default         | Description                        |
|-------------|---------------------------|-----------------|------------------------------------|
| `contacts`  | `QuickContact[]`          | -               | Array of contact objects          |
| `onSelect`  | `(contact: QuickContact) => void` | -   | Callback when a contact is clicked |
| `onAddNew`  | `() => void`              | -               | Callback when "Add New" is clicked|
| `title`     | `string`                  | `'Quick Transfer'` | Section title               |
| `className` | `string`                  | -               | Additional CSS classes            |

### QuickContact

| Prop          | Type     | Description                        |
|---------------|----------|------------------------------------|
| `id`          | `string` | Unique contact identifier         |
| `name`        | `string` | Full name (used for display)      |
| `avatarUrl`   | `string` | Optional image URL for avatar     |
| `initials`    | `string` | Fallback initials (e.g., "AJ")    |
| `lastTransfer`| `string` | Optional last transfer description|

## Examples

### Default (5 contacts)

```tsx
<QuickTransferBar
  contacts={[
    { id: '1', name: 'Alice Johnson', initials: 'AJ', lastTransfer: '2h ago' },
    { id: '2', name: 'Bob Martinez', initials: 'BM', lastTransfer: 'Yesterday' },
    { id: '3', name: 'Carol Smith', initials: 'CS', lastTransfer: '3d ago' },
    { id: '4', name: 'Dave Wilson', initials: 'DW', lastTransfer: '1w ago' },
    { id: '5', name: 'Eve Davis', initials: 'ED', lastTransfer: '2w ago' },
  ]}
  onSelect={(c) => console.log(c)}
  onAddNew={() => console.log('add')}
/>
```

### Custom Title

```tsx
<QuickTransferBar
  contacts={contacts}
  title="Send to"
  onSelect={(c) => console.log(c)}
  onAddNew={() => console.log('add')}
/>
```

### With Avatar Images

```tsx
<QuickTransferBar
  contacts={[
    { id: '1', name: 'Alice Johnson', avatarUrl: 'https://i.pravatar.cc/150?u=alice', initials: 'AJ' },
    { id: '2', name: 'Bob Martinez', avatarUrl: 'https://i.pravatar.cc/150?u=bob', initials: 'BM' },
    { id: '3', name: 'Carol Smith', avatarUrl: 'https://i.pravatar.cc/150?u=carol', initials: 'CS' },
  ]}
  onSelect={(c) => console.log(c)}
  onAddNew={() => console.log('add')}
/>
```

### Minimal (single contact)

```tsx
<QuickTransferBar
  contacts={[
    { id: '1', name: 'Alice Johnson', initials: 'AJ' },
  ]}
  onSelect={(c) => console.log(c)}
  onAddNew={() => console.log('add')}
/>
```

### Many Contacts (scrollable)

```tsx
<QuickTransferBar
  contacts={[
    { id: '1', name: 'Alice Johnson', initials: 'AJ' },
    { id: '2', name: 'Bob Martinez', initials: 'BM' },
    { id: '3', name: 'Carol Smith', initials: 'CS' },
    { id: '4', name: 'Dave Wilson', initials: 'DW' },
    { id: '5', name: 'Eve Davis', initials: 'ED' },
    { id: '6', name: 'Frank Lee', initials: 'FL' },
    { id: '7', name: 'Grace Kim', initials: 'GK' },
  ]}
  onSelect={(c) => console.log(c)}
  onAddNew={() => console.log('add')}
/>
```

### No Contacts (empty)

```tsx
<QuickTransferBar
  contacts={[]}
  onSelect={(c) => console.log(c)}
  onAddNew={() => console.log('add')}
/>
```

## Features

- Horizontal scrolling for many contacts
- "Add New" button with dashed border styling
- Auto-generated avatar colors for contacts without images
- Hover animations (scale up, lift effect)
- "See all" link appears when more than 5 contacts
- Staggered entrance animations

## Notes

- Avatar colors rotate through: blue, emerald, violet, amber, pink, cyan, rose, indigo
- Contact names display first name only (truncated to 14 chars)
- Uses Framer Motion for hover and entrance animations
- Fully accessible with button semantics for contacts
- Supports dark mode via CSS classes