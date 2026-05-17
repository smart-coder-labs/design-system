# Avatar

> **v1.0.13** · stable

A visual representation of a user with automatic image loading states and fallback content.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar';
```

## Basic Usage

```tsx
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/Avatar';

<Avatar>
    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
    <AvatarFallback>CN</AvatarFallback>
</Avatar>
```

## Sizes

```tsx
// Extra small (24px)
<Avatar size="xs">
    <AvatarImage src="image.jpg" />
    <AvatarFallback>XS</AvatarFallback>
</Avatar>

// Small (32px)
<Avatar size="sm">
    <AvatarImage src="image.jpg" />
    <AvatarFallback>SM</AvatarFallback>
</Avatar>

// Medium (40px) - default
<Avatar size="md">
    <AvatarImage src="image.jpg" />
    <AvatarFallback>MD</AvatarFallback>
</Avatar>

// Large (48px)
<Avatar size="lg">
    <AvatarImage src="image.jpg" />
    <AvatarFallback>LG</AvatarFallback>
</Avatar>

// Extra Large (64px)
<Avatar size="xl">
    <AvatarImage src="image.jpg" />
    <AvatarFallback>XL</AvatarFallback>
</Avatar>

// 2XL (96px)
<Avatar size="2xl">
    <AvatarImage src="image.jpg" />
    <AvatarFallback>2XL</AvatarFallback>
</Avatar>
```

## Shapes

```tsx
// Circle (default)
<Avatar shape="circle">
    <AvatarImage src="image.jpg" />
    <AvatarFallback>C</AvatarFallback>
</Avatar>

// Square (rounded corners)
<Avatar shape="square">
    <AvatarImage src="image.jpg" />
    <AvatarFallback>S</AvatarFallback>
</Avatar>
```

## API

### Avatar Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | `'md'` | Avatar size |
| `shape` | `'circle' \| 'square'` | `'circle'` | Avatar shape |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Avatar content |

### AvatarImage Props

| Prop | Type | Description |
|------|------|-------------|
| `src` | `string` | Image source URL |
| `alt` | `string` | Alt text for accessibility |
| `className` | `string` | Additional CSS classes |
| `onLoad` | `ReactEventHandler` | Load callback |
| `onError` | `ReactEventHandler` | Error callback |

### AvatarFallback Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |
| `children` | `ReactNode` | Fallback content (initials, icon, etc.) |

## Examples

### Without Image (Fallback Only)

```tsx
<Avatar>
    <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### With User Profile

```tsx
<Avatar size="lg" shape="circle">
    <AvatarImage 
        src="https://example.com/avatar.jpg" 
        alt="User profile" 
    />
    <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### Image Loading States

The Avatar component automatically handles image loading states:
- Shows the image when successfully loaded
- Shows the fallback when:
  - Image fails to load
  - No src provided
  - Image is still loading (prevents flash)

## Notes

- Uses React.forwardRef for the root element
- Uses context to communicate between Avatar, AvatarImage, and AvatarFallback
- Automatically detects if image is cached to prevent fallback flash
- Fully accessible with proper aria-hidden attributes
- Supports dark mode via design tokens
- Uses class-variance-authority for variants