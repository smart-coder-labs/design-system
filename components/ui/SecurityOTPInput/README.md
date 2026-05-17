# SecurityOTPInput

> **v1.0.9** · stable

A secure one-time password (OTP) input component for verification codes. Features automatic focus management, paste support, and visual feedback for different states.

## Installation

```bash
import { SecurityOTPInput, OTPStatus } from '@/components/ui/SecurityOTPInput';
```

## Basic Usage

```tsx
import { SecurityOTPInput } from '@/components/ui/SecurityOTPInput';

<SecurityOTPInput
    length={6}
    onComplete={(code) => console.log('Code:', code)}
/>
```

## Controlled

```tsx
import { SecurityOTPInput } from '@/components/ui/SecurityOTPInput';
import { useState } from 'react';

const [otp, setOtp] = useState('');

<SecurityOTPInput
    length={6}
    value={otp}
    onChange={setOtp}
    onComplete={(code) => verifyCode(code)}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `length` | `number` | `6` | Number of OTP digits |
| `onComplete` | `(code: string) => void` | - | Called when code is complete |
| `onChange` | `(code: string) => void` | - | Called on each digit change |
| `status` | `OTPStatus` | `'idle'` | Current status state |
| `errorMessage` | `string` | `'Invalid code. Please try again.'` | Error message text |
| `successMessage` | `string` | `'Verified successfully!'` | Success message text |
| `autoFocus` | `boolean` | `true` | Auto-focus first input |
| `disabled` | `boolean` | `false` | Disabled state |
| `className` | `string` | - | Additional CSS classes |
| `label` | `string` | `'Verification Code'` | Input label |
| `description` | `string` | `'Enter the 6-digit code sent to your device'` | Helper text |

### OTPStatus

```ts
type OTPStatus = 'idle' | 'loading' | 'success' | 'error';
```

## Examples

### Four Digit Code

```tsx
<SecurityOTPInput
    length={4}
    onComplete={(code) => console.log(code)}
/>
```

### With Custom Labels

```tsx
<SecurityOTPInput
    length={6}
    label="Two-Factor Authentication Code"
    description="Enter the code sent to your phone"
    onComplete={handleVerification}
/>
```

### Verification Flow

```tsx
const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

<SecurityOTPInput
    length={6}
    status={status}
    onComplete={async (code) => {
        setStatus('loading');
        const result = await verifyCode(code);
        setStatus(result ? 'success' : 'error');
    }}
/>
```

### Disabled State

```tsx
<SecurityOTPInput
    length={6}
    disabled
    value="123456"
/>
```

## Notes

- Auto-focuses first input on mount
- Supports pasting full code at once
- Keyboard navigation: Arrow keys to move between inputs, Backspace to delete
- Animated feedback: shake on error, scale on success
- Visual states: loading spinner, success checkmark, error alert
- Numeric input only (inputMode="numeric")
- Fully accessible with aria-label for each digit
- Uses Framer Motion for animations
- Dark mode compatible via design tokens