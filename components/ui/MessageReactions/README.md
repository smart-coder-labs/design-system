# MessageReactions

> **v1.0.28** · stable

A reaction picker and display component for messages, similar to messaging platforms like iMessage or Slack. Supports multiple reaction types, user avatars, and animated interactions.

## Installation

```bash
# The component is copied to your project with the add cli command
import { MessageReactions, ReactionPicker } from '@/components/ui/MessageReactions';
```

## Basic Usage - Display Reactions

```tsx
import { MessageReactions } from '@/components/ui/MessageReactions';

function Example() {
  const reactions = [
    { type: 'like', count: 5, userReacted: false },
    { type: 'love', count: 3, userReacted: true },
    { type: 'laugh', count: 2, userReacted: false },
  ];

  return (
    <MessageReactions
      reactions={reactions}
      onReactionClick={(type) => console.log('Clicked:', type)}
    />
  );
}
```

## Reaction Picker

```tsx
import { ReactionPicker } from '@/components/ui/MessageReactions';

function Example() {
  return (
    <ReactionPicker
      onReactionSelect={(type) => console.log('Selected:', type)}
    />
  );
}
```

## Showing User Names on Hover

```tsx
<MessageReactions
  reactions={[
    { 
      type: 'like', 
      count: 12, 
      userReacted: true,
      users: ['Alice', 'Bob', 'Charlie', 'David', 'Eve']
    },
    { type: 'love', count: 8, userReacted: false, users: ['Frank', 'Grace'] },
  ]}
  showUsers={true}
  onReactionClick={handleReaction}
/>
```

## Without Count

```tsx
<MessageReactions
  reactions={reactions}
  showCount={false}
/>
```

## API

### MessageReactions Props

| Prop            | Type                     | Default   | Description                                      |
|-----------------|-------------------------|-----------|--------------------------------------------------|
| `reactions`     | `Reaction[]`            | -         | Array of reaction objects                        |
| `onReactionClick` | `(type: ReactionType) => void` | -    | Called when a reaction is clicked                |
| `showCount`     | `boolean`               | `true`    | Display the reaction count                       |
| `showUsers`     | `boolean`              | `false`   | Show user names on hover (requires `users` array) |
| `className`     | `string`                | -         | Additional CSS classes                           |

### Reaction Type

```typescript
type ReactionType = 'like' | 'love' | 'laugh' | 'angry' | 'thumbs-up' | 'thumbs-down';
```

### Reaction Object

| Prop          | Type         | Description                          |
|---------------|-------------|--------------------------------------|
| `type`        | `ReactionType` | The reaction type identifier       |
| `count`       | `number`    | Number of users who reacted          |
| `users`       | `string[]`  | Optional list of user names          |
| `userReacted` | `boolean`  | Whether the current user reacted     |

### ReactionPicker Props

| Prop               | Type                       | Description                          |
|--------------------|---------------------------|--------------------------------------|
| `onReactionSelect` | `(type: ReactionType) => void` | Called when a reaction is selected |
| `className`        | `string`                  | Additional CSS classes              |

## Reaction Icons

| Type         | Icon                    | Color                  |
|--------------|------------------------|------------------------|
| `like`       | ThumbsUp               | accent-blue            |
| `love`       | Heart                  | status-error           |
| `laugh`      | Laugh                  | status-warning         |
| `angry`      | Angry                  | status-error           |
| `thumbs-up`  | ThumbsUp               | accent-blue            |
| `thumbs-down`| ThumbsDown             | text-tertiary          |

## Examples

### Financial Dashboard Reactions

```tsx
<MessageReactions
  reactions={[
    { type: 'like', count: 24, userReacted: false },
    { type: 'love', count: 18, userReacted: true },
    { type: 'laugh', count: 12, userReacted: false },
  ]}
  onReactionClick={handleReaction}
/>
```

### Many Reactions

```tsx
<MessageReactions
  reactions={[
    { type: 'like', count: 42, userReacted: false },
    { type: 'love', count: 28, userReacted: true },
    { type: 'thumbs-up', count: 15, userReacted: false },
    { type: 'laugh', count: 12, userReacted: false },
  ]}
/>
```

### Dark Mode

```tsx
<div className="dark">
  <MessageReactions
    reactions={reactions}
    onReactionClick={handleReaction}
  />
</div>
```

## Notes

- Framer Motion animations for hover and tap states
- Active reaction highlighted with accent color
- Tooltip shows up to 3 user names + count for additional users
- ReactionPicker is an animated popover with all reaction options
- Supports dark mode via design tokens
- Fully accessible with button roles and ARIA attributes