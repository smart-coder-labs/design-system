# Checkbox

> **v1.0.10** · stable

A form input component for boolean or tri-state selections with support for indeterminate state.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Checkbox } from '@/components/ui/Checkbox';
```

## Basic Usage

```tsx
import { Checkbox } from '@/components/ui/Checkbox';
import { Label } from '@/components/ui/Label';

<div className="flex items-center gap-3">
    <Checkbox id="terms" />
    <Label htmlFor="terms">Accept terms and conditions</Label>
</div>
```

## Controlled

```tsx
import { useState } from 'react';
import { Checkbox } from '@/components/ui/Checkbox';

const [checked, setChecked] = useState<boolean | 'indeterminate'>(false);

<Checkbox 
    checked={checked} 
    onCheckedChange={setChecked} 
/>
```

## Indeterminate State

```tsx
import { Checkbox } from '@/components/ui/Checkbox';

// Use 'indeterminate' for partially checked state
<Checkbox 
    checked="indeterminate"
    onCheckedChange={(checked) => console.log(checked)}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean \| 'indeterminate'` | - | Controlled checked state |
| `defaultChecked` | `boolean \| 'indeterminate'` | `false` | Initial unchecked state |
| `onCheckedChange` | `(checked: boolean \| 'indeterminate') => void` | - | Called when state changes |
| `disabled` | `boolean` | `false` | Disables the checkbox |
| `className` | `string` | - | Additional CSS classes |

## Examples

### With Label

```tsx
import { Checkbox } from '@/components/ui/Checkbox';
import { Label } from '@/components/ui/Label';

<div className="flex items-center gap-3">
    <Checkbox id="newsletter" />
    <Label htmlFor="newsletter">Subscribe to newsletter</Label>
</div>
```

### Disabled

```tsx
<Checkbox id="disabled" disabled />
<Checkbox id="checked-disabled" disabled checked />
```

### Form Integration

```tsx
import { useState } from 'react';
import { Checkbox } from '@/components/ui/Checkbox';
import { Label } from '@/components/ui/Label';

function TermsForm() {
    const [accepted, setAccepted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (accepted) {
            // Submit form
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-3">
                <Checkbox 
                    id="terms" 
                    checked={accepted}
                    onCheckedChange={setAccepted}
                />
                <Label htmlFor="terms">I agree to the terms and conditions</Label>
            </div>
            <Button type="submit">Continue</Button>
        </form>
    );
}
```

## Notes

- Uses React.forwardRef for the root element
- Supports three states: unchecked (false), checked (true), and indeterminate ('indeterminate')
- Fully accessible with role="checkbox" and proper aria-checked values
- Custom checkbox indicator using sibling selector pattern
- Check icon uses lucide-react (Check) and indeterminate uses Minus
- Supports all standard HTML input attributes (name, value, required, etc.)