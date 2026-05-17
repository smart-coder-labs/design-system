# Breadcrumb

> **v1.0.24** · stable

Navigation component for showing hierarchical path structure with accessible markup.

## Installation

```bash
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator, BreadcrumbEllipsis } from '@/components/ui/Breadcrumb';
```

## Basic Usage

```tsx
<Breadcrumb>
  <BreadcrumbList>
    <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbLink href="/products">Products</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
  </BreadcrumbList>
</Breadcrumb>
```

## API

### Components

| Component | Description |
|-----------|-------------|
| `Breadcrumb` | Root nav element with aria-label |
| `BreadcrumbList` | Ordered list container |
| `BreadcrumbItem` | List item wrapper |
| `BreadcrumbLink` | Clickable breadcrumb link |
| `BreadcrumbPage` | Current page (non-clickable) |
| `BreadcrumbSeparator` | Separator with icon |
| `BreadcrumbEllipsis` | Collapsed items trigger |

### Breadcrumb Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| separator | `ReactNode` | `<ChevronRight />` | Custom separator |
| className | `string` | - | Optional className |

### BreadcrumbLink Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| asChild | `boolean` | `false` | Use custom component |
| className | `string` | - | Optional className |

## Notes

- Uses React.forwardRef
- Supports dark mode via design tokens
- Accessible: proper ARIA labels and roles
- Uses lucide-react icons (ChevronRight, MoreHorizontal)
- Flexible separator customization
- Ellipsis for collapsed breadcrumb paths