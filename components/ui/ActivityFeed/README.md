# ActivityFeed

> **v1.0.34** · stable

A social activity feed component for displaying user actions, commits, PRs, and more with connector lines and type-specific icons.

## Installation

```bash
import { ActivityFeed, ActivityItem } from '@/components/ui/ActivityFeed';
```

## Basic Usage

```tsx
<ActivityFeed>
  <ActivityItem
    actor={{ name: 'John Doe', avatarSrc: '/avatar.jpg', initials: 'JD' }}
    action="commented on"
    target="Pull Request #42"
    date="2 hours ago"
    type="comment"
  >
    Great work on this feature!
  </ActivityItem>
  <ActivityItem
    actor={{ name: 'Jane Smith', initials: 'JS' }}
    action="pushed to"
    target="main branch"
    date="3 hours ago"
    type="commit"
  />
</ActivityFeed>
```

## API

### ActivityFeed

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| items | ActivityItemProps[] | - | Array of activity items |
| showConnector | boolean | true | Show connector lines between items |
| className | string | - | Additional classes |
| children | ReactNode | - | ActivityItem children |

### ActivityItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| actor | ActivityActor | - | Actor who performed the action |
| action | ReactNode | - | Action description (required) |
| target | ReactNode | - | Target of the action |
| date | ReactNode | - | Timestamp (required) |
| type | ActivityType | 'default' | Activity type for styling |
| icon | LucideIcon | - | Custom icon (overrides default) |
| showConnector | boolean | true | Show connector line |
| isLast | boolean | false | Last item (internal) |
| className | string | - | Additional classes |

### ActivityActor

| Prop | Type | Description |
|------|------|-------------|
| name | string | Actor name (required) |
| avatarSrc | string | Avatar image URL |
| initials | string | Fallback initials |

### ActivityType

- `default` - Generic file icon, gray
- `comment` - Message icon, blue
- `commit` - Git commit icon, gray
- `pr` - Pull request icon, purple
- `review` - Check icon, green
- `alert` - Alert icon, red
- `success` - Check icon, green
- `file` - File icon, blue

## Notes

- Uses Avatar component for user avatars
- Each item uses Framer Motion for animations
- Supports React.forwardRef