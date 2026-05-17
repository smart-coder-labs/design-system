# AvatarGroup

A stacked avatar component for displaying multiple user profiles with overflow handling.

## Installation

```bash
import { AvatarGroup } from '@/components/ui/AvatarGroup';
```

## Basic Usage

```tsx
<AvatarGroup
  items={[
    { alt: 'John Doe', src: '/avatar1.jpg' },
    { alt: 'Jane Smith', src: '/avatar2.jpg' },
    { alt: 'Bob Wilson' },
  ]}
  max={3}
/>
```

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | AvatarGroupItem[] | - | Array of avatar items |
| max | number | 5 | Maximum visible avatars |
| size | 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' | 'md' | Size of each avatar |
| showTooltip | boolean | true | Show name tooltip on hover |
| className | string | - | Additional classes |

### AvatarGroupItem

| Prop | Type | Description |
|------|------|-------------|
| alt | string | Name for fallback/initials |
| src | string (optional) | Image URL |
| fallback | string (optional) | Custom fallback text |

## Notes

- Uses React.forwardRef
- Displays "+N" for remaining items beyond max
- Auto-generates initials from alt text
- Staggered entrance animation with Framer Motion