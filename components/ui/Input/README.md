# Input

> **v1.0.4** · stable

A text input component with support for labels, icons, error states, and helper text. Also includes a Textarea component for multi-line input.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Input, Textarea } from '@/components/ui/Input';
```

## Basic Usage

```tsx
import { Input } from '@/components/ui/Input';

<Input placeholder="Enter value..." />
```

## With Label

```tsx
<Input 
    label="Email Address" 
    placeholder="you@example.com" 
    type="email" 
/>
```

## With Icons

```tsx
import { Input } from '@/components/ui/Input';
import { Search } from 'lucide-react';

// Left icon
<Input 
    placeholder="Search transactions..." 
    leftIcon={<Search className="w-4 h-4" />}
/>

// Right icon
<Input 
    label="Password"
    type="password"
    placeholder="Enter password"
    rightIcon={<EyeOff className="w-4 h-4" />}
/>
```

## Error State

```tsx
<Input 
    label="Card Number"
    placeholder="1234 5678 9012 3456"
    error="Invalid card number"
    defaultValue="1234"
/>
```

## Helper Text

```tsx
<Input 
    label="Amount"
    placeholder="0.00"
    helperText="Minimum deposit is $10"
    type="number"
/>
```

## API

### Input Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text displayed above input |
| `error` | `string` | - | Error message to display |
| `helperText` | `string` | - | Helper text to display |
| `leftIcon` | `ReactNode` | - | Icon on the left side |
| `rightIcon` | `ReactNode` | - | Icon on the right side |
| `inputSize` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| `disabled` | `boolean` | `false` | Disables the input |
| `className` | `string` | - | Additional CSS classes |
| `...inputProps` | `InputHTMLAttributes` | - | Standard HTML input props |

### Textarea Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text displayed above textarea |
| `error` | `string` | - | Error message to display |
| `helperText` | `string` | - | Helper text to display |
| `resize` | `'none' \| 'vertical' \| 'horizontal' \| 'both'` | `'vertical'` | Resize behavior |
| `disabled` | `boolean` | `false` | Disables the textarea |
| `className` | `string` | - | Additional CSS classes |
| `...textareaProps` | `TextareaHTMLAttributes` | - | Standard HTML textarea props |

## Examples

### Sizes

```tsx
// Small
<Input inputSize="sm" placeholder="Small input" />

// Large
<Input inputSize="lg" placeholder="Large input" />
```

### Disabled

```tsx
<Input 
    label="Locked field"
    placeholder="Cannot edit"
    disabled
/>
```

### Textarea

```tsx
import { Textarea } from '@/components/ui/Input';

<Textarea
    label="Description"
    placeholder="Enter description..."
    rows={4}
/>
```

### Password Input with Toggle

```tsx
import { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Eye, EyeOff } from 'lucide-react';

function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Input
            label="Password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter password"
            rightIcon={
                <button 
                    onClick={() => setShowPassword(!showPassword)}
                    type="button"
                >
                    {showPassword ? <EyeOff /> : <Eye />}
                </button>
            }
        />
    );
}
```

## Notes

- Uses React.forwardRef for the root element
- Uses Framer Motion for focus animation (scale 1.005)
- Error state shows error message in red with border styling
- Helper text appears below input with transition animation
- Icon positioning adjusts based on input size
- Supports dark mode via design tokens
- Textarea has minimum height of 100px by default