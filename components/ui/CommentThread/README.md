# CommentThread

> **v1.0.22** · stable

A threaded comment component with nested replies, likes, edit, and delete functionality. Perfect for discussion sections, feedback threads, and social comments.

## Installation

```bash
import { CommentThread } from '@/components/ui/CommentThread';
```

## Basic Usage

```tsx
const comments = [
  {
    id: '1',
    author: { id: 'alice', name: 'Alice Johnson', initials: 'AJ' },
    content: 'Great work on the new dashboard!',
    timestamp: '2 hours ago',
    likes: 3,
    isLiked: false,
  },
];

<CommentThread
  comments={comments}
  currentUser={{ id: 'me', name: 'Cesar Ruiz', initials: 'CR' }}
/>
```

## With Replies

```tsx
const comments = [
  {
    id: '1',
    author: { id: 'alice', name: 'Alice Johnson', initials: 'AJ' },
    content: 'The charts look much cleaner now.',
    timestamp: '2 hours ago',
    likes: 3,
    replies: [
      {
        id: '1-1',
        author: { id: 'me', name: 'Cesar Ruiz', initials: 'CR' },
        content: 'Thanks! I spent a lot of time on the animations.',
        timestamp: '1 hour ago',
        likes: 1,
      },
    ],
  },
];

<CommentThread comments={comments} currentUser={currentUser} />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `comments` | `CommentData[]` | - | Array of comment objects (required) |
| `currentUser` | `CommentUser` | - | Current logged-in user |
| `onReply` | `(commentId: string, content: string) => void` | - | Handle new replies |
| `onLike` | `(commentId: string) => void` | - | Handle like/unlike |
| `onEdit` | `(commentId: string, newContent: string) => void` | - | Handle comment edits |
| `onDelete` | `(commentId: string) => void` | - | Handle comment deletion |
| `className` | `string` | - | Additional CSS classes |

### CommentUser

```typescript
interface CommentUser {
  id: string;
  name: string;
  avatarSrc?: string;
  initials?: string;
}
```

### CommentData

```typescript
interface CommentData {
  id: string;
  author: CommentUser;
  content: React.ReactNode;
  timestamp: string;
  likes?: number;
  isLiked?: boolean;
  replies?: CommentData[];
  isEdited?: boolean;
}
```

## Examples

### Empty State

```tsx
<CommentThread
  comments={[]}
  currentUser={{ id: 'me', name: 'Cesar Ruiz', initials: 'CR' }}
/>
```

### Deeply Nested

```tsx
const comments = [
  {
    id: 'deep-1',
    author: { id: 'alice', name: 'Alice Johnson', initials: 'AJ' },
    content: 'This needs review.',
    timestamp: '5 hours ago',
    likes: 2,
    replies: [
      {
        id: 'deep-1-1',
        author: { id: 'me', name: 'Cesar Ruiz', initials: 'CR' },
        content: "I'll take a look shortly.",
        timestamp: '4 hours ago',
        replies: [
          {
            id: 'deep-1-1-1',
            author: { id: 'alice', name: 'Alice Johnson', initials: 'AJ' },
            content: 'Any updates?',
            timestamp: '3 hours ago',
          },
        ],
      },
    ],
  },
];

<CommentThread comments={comments} currentUser={currentUser} />
```

### With Callbacks

```tsx
<CommentThread
  comments={comments}
  currentUser={currentUser}
  onReply={(commentId, content) => console.log('Reply to', commentId, ':', content)}
  onLike={(commentId) => console.log('Liked:', commentId)}
  onEdit={(commentId, newContent) => console.log('Edit', commentId, ':', newContent)}
  onDelete={(commentId) => console.log('Delete:', commentId)}
/>
```

### Without Current User (Read-only)

```tsx
<CommentThread
  comments={comments}
/>
```

## Features

- **Nested Replies**: Supports up to 3 levels of nesting
- **Like System**: Heart button with like count, supports liked state
- **Edit/Delete**: Authors can edit or delete their own comments
- **Reply**: Add replies to any comment
- **Actions Menu**: Combobox dropdown for reply, edit, delete actions
- **Timestamps**: Shows relative time (e.g., "2 hours ago")
- **Edited Indicator**: Shows "(edited)" for modified comments
- **Avatar Support**: Uses Avatar component with fallback to initials

## Notes

- Maximum nesting depth is 3 levels (deeper replies flatten)
- Actions menu (edit/delete) only shows for comment authors
- Reply input appears inline when replying
- Edit mode replaces content with textarea
- Supports dark mode with appropriate color tokens
- Uses Combobox internally for the actions menu