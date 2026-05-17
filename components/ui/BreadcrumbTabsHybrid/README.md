# BreadcrumbTabsHybrid

> **v1.0.32** · stable

A hybrid navigation component combining breadcrumbs for hierarchical navigation with tabbed sections for in-page navigation. Ideal for settings pages, dashboards, and data-rich interfaces where users need both context and segmented content.

## Installation

```bash
# The component is copied to your project with the add cli command
import { BreadcrumbTabsHybrid } from '@/components/ui/BreadcrumbTabsHybrid';
```

## Basic Usage

```tsx
import { BreadcrumbTabsHybrid } from '@/components/ui/BreadcrumbTabsHybrid';
import { Settings, Users, BarChart } from 'lucide-react';

const breadcrumbs = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Settings' },
];

const tabs = [
  { id: 'general', label: 'General', icon: <Settings className="w-4 h-4" /> },
  { id: 'users', label: 'Users', icon: <Users className="w-4 h-4" />, badge: 12 },
  { id: 'analytics', label: 'Analytics', icon: <BarChart className="w-4 h-4" /> },
];

<BreadcrumbTabsHybrid
  breadcrumbs={breadcrumbs}
  tabs={tabs}
  activeTab="general"
/>
```

## Variants

```tsx
// Default - standard border with background
<BreadcrumbTabsHybrid variant="default" ... />

// Compact - minimal styling without background
<BreadcrumbTabsHybrid variant="compact" ... />

// Elevated - card-like appearance with shadow
<BreadcrumbTabsHybrid variant="elevated" ... />
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `breadcrumbs` | `BreadcrumbItem[]` | Required | Array of breadcrumb items |
| `tabs` | `TabItem[]` | Required | Array of tab items |
| `activeTab` | `string` | First tab | Currently active tab (controlled) |
| `onTabChange` | `(tabId: string) => void` | - | Callback when tab changes |
| `onBreadcrumbClick` | `(index: number) => void` | - | Callback when breadcrumb is clicked |
| `variant` | `'default' \| 'compact' \| 'elevated'` | `'default'` | Visual style variant |
| `showHomeIcon` | `boolean` | `true` | Show home icon at start of breadcrumbs |
| `className` | `string` | - | Additional CSS classes |

### BreadcrumbItem

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Display text for the breadcrumb |
| `href` | `string` | Optional URL for navigation |
| `icon` | `ReactNode` | Optional icon to display |

### TabItem

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier for the tab |
| `label` | `string` | Display text for the tab |
| `icon` | `ReactNode` | Optional icon to display |
| `badge` | `number` | Optional badge count (shows as 99+ if > 99) |

## Examples

### With Badges

```tsx
const tabs = [
  { id: 'inbox', label: 'Inbox', badge: 24 },
  { id: 'sent', label: 'Sent' },
  { id: 'archived', label: 'Archived', badge: 5 },
];

<BreadcrumbTabsHybrid tabs={tabs} activeTab="inbox" />
```

### Without Home Icon

```tsx
<BreadcrumbTabsHybrid
  breadcrumbs={breadcrumbs}
  tabs={tabs}
  showHomeIcon={false}
/>
```

### Controlled with Callbacks

```tsx
const [activeTab, setActiveTab] = useState('general');

<BreadcrumbTabsHybrid
  breadcrumbs={breadcrumbs}
  tabs={tabs}
  activeTab={activeTab}
  onTabChange={(id) => setActiveTab(id)}
  onBreadcrumbClick={(index) => console.log('Breadcrumb clicked:', index)}
/>
```

### Long Breadcrumb Path

```tsx
const breadcrumbs = [
  { label: 'Organization', href: '/org' },
  { label: 'Workspace', href: '/workspace' },
  { label: 'Projects', href: '/projects' },
  { label: 'Settings' },
];

<BreadcrumbTabsHybrid breadcrumbs={breadcrumbs} tabs={tabs} />
```

## Notes

- Uses React.forwardRef for the root element
- Animated tab indicator follows active tab position
- Supports keyboard navigation via tab elements
- Full dark mode support via CSS tokens
- Uses Framer Motion for smooth indicator transitions
- ARIA labels for accessibility (role="tab", aria-selected, aria-controls)