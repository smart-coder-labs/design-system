# Label

> **v1.0.13** · stable

A form label component for accessible form inputs with support for required indicators.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Label } from '@/components/ui/Label';
```

## Basic Usage

```tsx
import { Label } from '@/components/ui/Label';

<Label htmlFor="email">Email Address</Label>
```

## With Required Indicator

```tsx
<Label htmlFor="email" required>Email Address</Label>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `htmlFor` | `string` | - | ID of the associated form element |
| `required` | `boolean` | `false` | Shows asterisk indicator |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Label text content |

## Examples

### Form Field Label

```tsx
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';

<div>
    <Label htmlFor="username">Username</Label>
    <Input id="username" placeholder="Enter username" />
</div>
```

### Required Field

```tsx
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';

<div>
    <Label htmlFor="email" required>Email</Label>
    <Input id="email" type="email" placeholder="you@example.com" />
</div>
```

### With Checkbox

```tsx
import { Label } from '@/components/ui/Label';
import { Checkbox } from '@/components/ui/Checkbox';

<div className="flex items-center gap-3">
    <Checkbox id="terms" />
    <Label htmlFor="terms">Accept terms and conditions</Label>
</div>
```

## Notes

- Built on top of the Text component for consistent styling
- Uses small text size with medium font weight
- Required indicator shows a red asterisk (text-status-error)
- Fully accessible with proper htmlFor association
- Supports all standard label attributes