# Card

> **v1.0.28** · stable

A flexible container component for grouping related content with multiple visual variants and optional hover effects.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
```

## Basic Usage

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

<Card>
    <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
    </CardHeader>
    <CardContent>
        <p>Card content...</p>
    </CardContent>
    <CardFooter>
        <Button>Action</Button>
    </CardFooter>
</Card>
```

## Variants

```tsx
// Elevated (default) - with shadow
<Card variant="elevated">
    <p>Elevated card</p>
</Card>

// Glass - with backdrop blur
<Card variant="glass">
    <p>Glass card</p>
</Card>

// Outlined - with border
<Card variant="outlined">
    <p>Outlined card</p>
</Card>

// Flat - no border, secondary background
<Card variant="flat">
    <p>Flat card</p>
</Card>
```

## Padding Options

```tsx
// No padding
<Card padding="none">
    <p>Custom padding</p>
</Card>

// Small padding
<Card padding="sm">
    <p>Small padding</p>
</Card>

// Medium padding (default)
<Card padding="md">
    <p>Medium padding</p>
</Card>

// Large padding
<Card padding="lg">
    <p>Large padding</p>
</Card>
```

## API

### Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'elevated' \| 'glass' \| 'outlined' \| 'flat'` | `'elevated'` | Visual style variant |
| `hoverable` | `boolean` | `false` | Enable hover animation |
| `padding` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'md'` | Internal padding |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Card content |

### CardHeader Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |
| `children` | `ReactNode` | Header content |

### CardTitle Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |
| `children` | `ReactNode` | Title content |

### CardDescription Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |
| `children` | `ReactNode` | Description content |

### CardContent Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |
| `children` | `ReactNode` | Content area |

### CardFooter Props

| Prop | Type | Description |
|------|------|-------------|
| `className` | `string` | Additional CSS classes |
| `children` | `ReactNode` | Footer content |

## Examples

### Hoverable Card

```tsx
<Card variant="glass" hoverable>
    <CardTitle>Interactive Card</CardTitle>
    <CardDescription>Hover to see animation</CardDescription>
</Card>
```

### Profile Card

```tsx
<Card variant="elevated">
    <CardHeader>
        <CardTitle>John Doe</CardTitle>
        <CardDescription>Software Engineer</CardDescription>
    </CardHeader>
    <CardContent>
        <p> Passionate about building great products.</p>
    </CardContent>
    <CardFooter>
        <Button variant="secondary">View Profile</Button>
        <Button variant="primary">Connect</Button>
    </CardFooter>
</Card>
```

### Pricing Card

```tsx
<Card variant="outlined" padding="lg">
    <CardHeader>
        <CardTitle>Pro Plan</CardTitle>
        <CardDescription>For growing teams</CardDescription>
    </CardHeader>
    <CardContent>
        <p className="text-3xl font-bold">$29/mo</p>
        <ul className="mt-4 space-y-2">
            <li>Unlimited projects</li>
            <li>Priority support</li>
            <li>Advanced analytics</li>
        </ul>
    </CardContent>
    <CardFooter>
        <Button variant="primary" fullWidth>Get Started</Button>
    </CardFooter>
</Card>
```

## Notes

- Uses React.forwardRef for the root element
- Uses Framer Motion for entrance animation (fade + slide up)
- Hover animation includes scale (1.01) and translateY (-4px)
- When hoverable with accessible name, adds role="region" for screen readers
- Supports dark mode via design tokens