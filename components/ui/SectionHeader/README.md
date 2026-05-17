# SectionHeader

> **v1.0.32** · stable

A header component for sectioned content with optional title, description, and action buttons. Supports multiple sizes and optional divider line.

## Installation

```bash
import { SectionHeader } from '@/components/ui/SectionHeader';
```

## Basic Usage

```tsx
import { SectionHeader } from '@/components/ui/SectionHeader';

<SectionHeader
    title="Recent Transactions"
    description="View and manage your latest financial activities"
/>
```

## With Actions

```tsx
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';

<SectionHeader
    title="Your Portfolio"
    description="Track your investments and assets"
    actions={
        <>
            <Button variant="secondary" size="sm">View All</Button>
            <Button variant="primary" size="sm">Add New</Button>
        </>
    }
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `ReactNode` | - | Main title content |
| `description` | `ReactNode` | - | Optional description text |
| `actions` | `ReactNode` | - | Action buttons (right side) |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Header size |
| `divider` | `boolean` | `false` | Show bottom divider |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Compact Header

```tsx
<SectionHeader
    title="Quick Stats"
    size="sm"
/>
```

### With Divider

```tsx
<SectionHeader
    title="Account Settings"
    description="Manage your personal information"
    divider
/>
```

### Large Header

```tsx
<SectionHeader
    title="Dashboard Overview"
    description="Your complete financial summary"
    size="lg"
/>
```

### Dashboard Section

```tsx
<SectionHeader
    title="Dashboard Overview"
    description="Your financial summary for Q2 2025"
    actions={<Button variant="secondary">Export Report</Button>}
/>
```

## Notes

- Responsive: actions stack below title on mobile
- Uses design tokens for typography sizes
- Flexbox layout with space-between on larger screens
- Dark mode compatible via design tokens
- Accessible with proper heading hierarchy