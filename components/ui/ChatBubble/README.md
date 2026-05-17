# ChatBubble

> **v1.0.9** · stable

A chat message component supporting sent and received messages, system notifications, and error states. Features customizable avatars, timestamps, delivery status indicators, and smooth entry animations.

## Installation

```bash
# The component is copied to your project with the add cli command
import { ChatBubble } from '@/components/ui/ChatBubble';
```

## Basic Usage

```tsx
import { ChatBubble } from '@/components/ui/ChatBubble';

// Received message
<ChatBubble
  message="Hey, can you review the latest designs?"
  sender="Alice"
  timestamp="10:42 AM"
  isOwn={false}
/>

// Sent message
<ChatBubble
  message="Sure, I'll take a look right now."
  timestamp="10:43 AM"
  isOwn={true}
/>
```

## Variants

```tsx
// Default - user message (blue for own, gray for received)
<ChatBubble message="Hello!" isOwn={false} />

// System - centered notification style
<ChatBubble
  message="Alice has joined the conversation"
  variant="system"
/>

// Error - failed message with retry option
<ChatBubble
  message="Failed to send. Tap to retry."
  variant="error"
  isOwn={true}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | Required | The message content |
| `sender` | `string` | - | Name of the sender (for received messages) |
| `avatar` | `string` | - | Avatar image URL |
| `timestamp` | `string` | - | Time string to display |
| `isOwn` | `boolean` | `false` | Whether message is from current user |
| `variant` | `'default' \| 'system' \| 'error'` | `'default'` | Visual style variant |
| `status` | `'sending' \| 'sent' \| 'delivered' \| 'read'` | - | Delivery status (own messages only) |
| `showAvatar` | `boolean` | `true` | Show avatar for received messages |
| `showTimestamp` | `boolean` | `true` | Show timestamp |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Additional content (attachments, actions) |

## Status Icons

| Status | Icon |
|--------|------|
| `sending` | ⏳ |
| `sent` | ✓ |
| `delivered` | ✓✓ |
| `read` | ✓✓ (styled) |

## Examples

### With Avatar

```tsx
<ChatBubble
  message="The new dashboard looks great!"
  sender="Bob Smith"
  avatar="https://example.com/avatar.jpg"
  timestamp="11:15 AM"
  isOwn={false}
/>
```

### With Delivery Status

```tsx
<ChatBubble
  message="The payment has been processed."
  timestamp="11:30 AM"
  isOwn={true}
  status="read"
/>
```

### Sending Status

```tsx
<ChatBubble
  message="Transferring funds..."
  timestamp="11:31 AM"
  isOwn={true}
  status="sending"
/>
```

### System Notification

```tsx
<ChatBubble
  message="Sarah joined the group"
  variant="system"
  showTimestamp={false}
/>
```

### Error State

```tsx
<ChatBubble
  message="Message failed to send. Tap to retry."
  variant="error"
  isOwn={true}
  timestamp="11:20 AM"
/>
```

### Long Message

```tsx
<ChatBubble
  message="Here is the detailed breakdown of the Q4 investment portfolio performance. We saw a 12.5% increase in equities, 3.2% in bonds, and crypto remained volatile. Overall portfolio return was 8.7%."
  sender="Analyst Bot"
  timestamp="2:00 PM"
  isOwn={false}
/>
```

### Without Avatar

```tsx
<ChatBubble
  message="Quick question about the project"
  sender="Alice"
  showAvatar={false}
  timestamp="9:00 AM"
/>
```

## Notes

- Uses React.forwardRef for the root element
- Framer Motion for smooth entry animation (fade + slide up)
- Message bubble uses distinct border-radius (rounded corners except inner corner)
- Supports whitespace and line breaks in message text
- Auto-generated avatar fallback using sender initial
- Full dark mode support via CSS tokens
- ARIA attributes for accessibility
- Extensible with children for attachments or interactive elements