# TopActionBar

> **v1.0.0** · stable

A macOS/iOS-style top navigation bar with left, center, and right sections. Supports glassmorphism, sticky positioning, multiple sizes, and built-in button components.

## Installation

```bash
import { TopActionBar, TopActionBarButton, TopActionBarIconButton } from '@/components/ui/TopActionBar';
```

## Basic Usage

```tsx
<TopActionBar
  leftContent={<span className="font-bold text-lg">App</span>}
  centerContent={
    <div className="flex items-center gap-2">
      <TopActionBarButton variant="ghost">Home</TopActionBarButton>
      <TopActionBarButton variant="ghost">Settings</TopActionBarButton>
    </div>
  }
  rightContent={
    <TopActionBarIconButton icon={<Bell size={18} />} aria-label="Notifications" />
  }
/>
```

## API

### TopActionBar Props

| Prop            | Type                      | Default     | Description                           |
| --------------- | ------------------------- | ----------- | ------------------------------------- |
| `leftContent`  | `ReactNode`               | -           | Content for left section              |
| `centerContent` | `ReactNode`              | -           | Content for center section            |
| `rightContent` | `ReactNode`               | -           | Content for right section             |
| `glass`        | `boolean`                 | `false`     | Enable glassmorphism effect           |
| `sticky`       | `boolean`                 | `true`      | Make bar sticky                       |
| `showBorder`   | `boolean`                 | `true`      | Show bottom border                    |
| `size`         | `'sm' \| 'md' \| 'lg'`    | `'md'`      | Bar size                              |
| `className`    | `string`                  | -           | Additional classes                    |

### TopActionBarButton Props

| Prop        | Type                                    | Default      | Description                   |
| ----------- | --------------------------------------- | ------------ | ------------------------------ |
| `children`  | `ReactNode`                             | -            | Button content                 |
| `icon`      | `ReactNode`                             | -            | Icon to display               |
| `active`    | `boolean`                               | `false`      | Active state styling           |
| `variant`   | `'default' \| 'ghost' \| 'primary'`    | `'default'`  | Button variant                 |
| `className` | `string`                                | -            | Additional classes            |

### TopActionBarIconButton Props

| Prop        | Type                      | Default   | Description                      |
| ----------- | ------------------------- | --------- | -------------------------------- |
| `icon`      | `ReactNode`               | -         | Icon to display (required)       |
| `aria-label`| `string`                  | -         | Accessible label (required)      |
| `active`    | `boolean`                 | `false`   | Active state styling              |
| `badge`     | `string \| number`        | -         | Optional badge content           |
| `className` | `string`                  | -         | Additional classes               |

## Examples

### Glassmorphism Bar

```tsx
<TopActionBar
  glass
  sticky
  leftContent={<span className="font-bold text-lg">Wealth</span>}
  centerContent={
    <div className="flex items-center gap-1">
      <TopActionBarButton variant="ghost" icon={<Home size={18} />}>Dashboard</TopActionBarButton>
      <TopActionBarButton variant="ghost" icon={<TrendingUp size={18} />}>Markets</TopActionBarButton>
    </div>
  }
  rightContent={
    <div className="flex items-center gap-1">
      <TopActionBarIconButton icon={<Bell size={18} />} aria-label="Notifications" badge={3} />
      <TopActionBarIconButton icon={<Settings size={18} />} aria-label="Settings" />
    </div>
  }
/>
```

### Small Size

```tsx
<TopActionBar
  size="sm"
  leftContent={<span className="font-semibold text-sm">Mini</span>}
  centerContent={
    <div className="flex items-center gap-1">
      <TopActionBarButton variant="ghost">Files</TopActionBarButton>
      <TopActionBarButton variant="ghost" active>Edit</TopActionBarButton>
    </div>
  }
  rightContent={
    <TopActionBarButton variant="ghost" icon={<Search size={16} />}>Search</TopActionBarButton>
  }
/>
```

### Large Size with Primary Button

```tsx
<TopActionBar
  size="lg"
  leftContent={
    <div className="flex items-center gap-3">
      <ArrowLeft size={20} className="text-text-secondary" />
      <span className="font-bold text-xl">Portfolio</span>
    </div>
  }
  centerContent={
    <div className="flex items-center gap-2">
      <TopActionBarButton variant="ghost" icon={<BarChart3 size={18} />}>Overview</TopActionBarButton>
      <TopActionBarButton variant="ghost" icon={<TrendingUp size={18} />}>Performance</TopActionBarButton>
    </div>
  }
  rightContent={
    <div className="flex items-center gap-2">
      <TopActionBarButton variant="primary" icon={<Plus size={18} />}>Add Funds</TopActionBarButton>
      <TopActionBarIconButton icon={<Bell size={20} />} aria-label="Notifications" badge={7} />
    </div>
  }
/>
```

### Icon Buttons Only

```tsx
<TopActionBar
  glass
  sticky
  leftContent={<span className="font-bold text-lg">Nexus</span>}
  rightContent={
    <div className="flex items-center gap-1">
      <TopActionBarIconButton icon={<Search size={18} />} aria-label="Search" />
      <TopActionBarIconButton icon={<Bell size={18} />} aria-label="Notifications" badge={12} />
      <TopActionBarIconButton icon={<Settings size={18} />} aria-label="Settings" />
      <TopActionBarIconButton icon={<User size={18} />} aria-label="Profile" />
    </div>
  }
/>
```

### No Border

```tsx
<TopActionBar
  showBorder={false}
  sticky={false}
  leftContent={<span className="font-bold text-lg">Clean</span>}
  centerContent={
    <div className="flex items-center gap-2">
      <TopActionBarButton variant="ghost">One</TopActionBarButton>
      <TopActionBarButton variant="ghost">Two</TopActionBarButton>
      <TopActionBarButton variant="ghost">Three</TopActionBarButton>
    </div>
  }
  rightContent={
    <TopActionBarIconButton icon={<Settings size={18} />} aria-label="Settings" />
  }
/>
```

## Notes

- Uses Framer Motion for entrance animations (spring physics)
- All button components include hover and tap animations
- TopActionBarIconButton supports badge counts for notifications
- Fully accessible with keyboard navigation
- Supports dark mode via design tokens
- All components use React.forwardRef
- Glass effect uses backdrop-blur-xl for modern browsers
- Sticky positioning uses z-30 to stay above content