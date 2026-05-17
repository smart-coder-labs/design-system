# SegmentedInput

> **v1.0.4** · stable

A multi-segment input component for entering codes like verification codes, PINs, or license keys. Each segment is a separate input field with auto-advance and paste support.

## Installation

```bash
import { SegmentedInput } from '@/components/ui/SegmentedInput';
```

## Basic Usage

```tsx
import { SegmentedInput } from '@/components/ui/SegmentedInput';

<SegmentedInput
    length={6}
    onComplete={(value) => console.log('Code:', value)}
/>
```

## Controlled

```tsx
import { SegmentedInput } from '@/components/ui/SegmentedInput';
import { useState } from 'react';

const [code, setCode] = useState('');

<SegmentedInput
    length={6}
    value={code}
    onChange={setCode}
    onComplete={verifyCode}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `length` | `number` | `6` | Number of segments |
| `value` | `string` | - | Controlled value |
| `onChange` | `(value: string) => void` | - | Called on each change |
| `onComplete` | `(value: string) => void` | - | Called when full |
| `disabled` | `boolean` | `false` | Disabled state |
| `error` | `boolean` | `false` | Error state |
| `type` | `'text' \| 'number' \| 'password'` | `'text'` | Input type |
| `placeholder` | `string` | - | Placeholder character |
| `className` | `string` | - | Additional CSS classes |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |

## Examples

### Four Digit PIN

```tsx
<SegmentedInput
    length={4}
    type="number"
    placeholder="0"
    onComplete={(pin) => validatePin(pin)}
/>
```

### Verification Code

```tsx
<SegmentedInput
    length={6}
    type="text"
    placeholder="*"
    onComplete={(code) => verify(code)}
/>
```

### With Error State

```tsx
<SegmentedInput
    length={6}
    error
    value="12345"
/>
```

### Different Sizes

```tsx
// Small
<SegmentedInput length={4} size="sm" />

// Medium (default)
<SegmentedInput length={4} size="md" />

// Large
<SegmentedInput length={4} size="lg" />
```

### Interactive Verification

```tsx
const [value, setValue] = useState('');
const [isVerified, setIsVerified] = useState(false);
const [isError, setIsError] = useState(false);

const handleChange = (v) => {
    setValue(v);
    setIsError(false);
    if (v.length === 6) {
        if (v === '000000') {
            setIsVerified(true);
        } else {
            setIsError(true);
        }
    }
};

return (
    <SegmentedInput
        length={6}
        value={value}
        onChange={handleChange}
        error={isError}
    />
);
```

## Notes

- Auto-advances to next input on digit entry
- Supports pasting full code at once
- Keyboard navigation: Arrow keys to move, Backspace to delete
- Framer Motion scale animation on focus
- Error state shows red border styling
- Disabled state reduces opacity
- Fully accessible with proper ARIA attributes
- Dark mode compatible via design tokens