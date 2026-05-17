# PeerTagInput

> **v1.0.25** · stable

A search input component for finding and selecting peer contacts (e.g., for P2P payments). Supports searching by username ($tag) or display name with keyboard navigation and verified user indicators.

## Installation

```bash
import { PeerTagInput } from '@/components/ui/PeerTagInput';
```

## Basic Usage

```tsx
import { useState } from 'react';
import { PeerTagInput, type PeerTagContact } from '@/components/ui/PeerTagInput';

function Example() {
  const contacts: PeerTagContact[] = [
    { id: '1', tag: '$alice', name: 'Alice Johnson', avatarUrl: '/avatars/alice.jpg', isVerified: true },
    { id: '2', tag: '$bob', name: 'Bob Smith', avatarUrl: '/avatars/bob.jpg' },
    { id: '3', tag: '$carol', name: 'Carol White', isVerified: true, recentActivity: 'Active now' },
  ];

  return (
    <PeerTagInput
      contacts={contacts}
      placeholder="Search $Name"
      onSelect={(contact) => console.log('Selected:', contact)}
    />
  );
}
```

## With Recent Activity

```tsx
<PeerTagInput
  contacts={contacts}
  placeholder="Search peers..."
  onSelect={handleSelect}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `contacts` | `PeerTagContact[]` | required | List of available contacts |
| `placeholder` | `string` | `'Search $Name'` | Placeholder text |
| `onSelect` | `(contact: PeerTagContact) => void` | - | Callback when a contact is selected |
| `className` | `string` | - | Additional classes |

### PeerTagContact

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `tag` | `string` | Username with $ prefix (e.g., `$alice`) |
| `name` | `string` | Display name |
| `avatarUrl?` | `string` | Avatar image URL |
| `isVerified?` | `boolean` | Show verified badge |
| `recentActivity?` | `string` | Activity status text |

## Examples

### P2P Payment Flow

```tsx
<PeerTagInput
  contacts={peers}
  placeholder="Send to $username"
  onSelect={(peer) => {
    setRecipient(peer);
    setStep('amount');
  }}
/>
```

### With Verified Users Only

```tsx
<PeerTagInput
  contacts={verifiedPeers}
  placeholder="Search verified peers..."
  onSelect={handleSelect}
/>
```

### Dark Mode

The component automatically adapts to dark mode using design tokens.

```tsx
<div className="dark">
  <PeerTagInput
    contacts={contacts}
    onSelect={handleSelect}
  />
</div>
```

## Keyboard Navigation

- **Arrow Down**: Navigate to next result
- **Arrow Up**: Navigate to previous result
- **Enter**: Select highlighted contact
- **Escape**: Close dropdown and blur input

## Notes

- Maximum 5 results shown for optimal performance
- Filters by both tag and name
- Uses Avatar component for contact images
- Verified users show a badge check icon
- Recent activity indicator shows for active contacts
- Uses Framer Motion for dropdown animations
- Click outside closes the dropdown
- Focus ring uses emerald color (consistent with payment/finance theme)
- Fully accessible with ARIA attributes