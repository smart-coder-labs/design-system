# OTPInput

> **v1.0.32** · stable

Form input component for entering one-time passwords with multiple digit fields. Supports paste, auto-focus, keyboard navigation, and group separators.

## Installation

```bash
import { OTPInput } from '@/components/ui/OTPInput';
```

## Basic Usage

```tsx
const [otp, setOtp] = useState('');

<OTPInput 
  value={otp}
  onChange={setOtp}
  onComplete={(value) => console.log('OTP Complete:', value)}
/>
```

## 4-digit PIN

```tsx
<OTPInput 
  value={pin}
  onChange={setPin}
  length={4}
/>
```

## With Group Separator

```tsx
<OTPInput 
  value={otp}
  onChange={setOtp}
  length={8}
  groupSize={4}
  separator={<span className="text-text-tertiary mx-1">-</span>}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `length` | `number` | `6` | Number of OTP digits |
| `value` | `string` | `''` | Controlled OTP value |
| `onChange` | `(value: string) => void` | - | Handler as user types |
| `onComplete` | `(value: string) => void` | - | Handler when all digits entered |
| `disabled` | `boolean` | `false` | Disabled state |
| `error` | `boolean` | `false` | Error state styling |
| `separator` | `ReactNode` | `'-'` | Group separator element |
| `groupSize` | `number` | `3` | Digits per group |
| `className` | `string` | - | Container class |
| `autoFocus` | `boolean` | `false` | Auto-focus first input |

## Examples

### With Auto Focus

```tsx
<OTPInput 
  value={otp}
  onChange={setOtp}
  autoFocus
/>
```

### Controlled with onComplete

```tsx
const [otp, setOtp] = useState('');
const [isValid, setIsValid] = useState(false);

<OTPInput 
  value={otp}
  onChange={setOtp}
  onComplete={(value) => {
    setIsValid(value === '123456');
    if (value === '123456') {
      verifyOTP(value);
    }
  }}
/>
```

### Without Group Separator

```tsx
<OTPInput 
  value={otp}
  onChange={setOtp}
  groupSize={6}
/>
```

### Error State

```tsx
<OTPInput 
  value={otp}
  onChange={setOtp}
  error
/>
```

### Disabled State

```tsx
<OTPInput 
  value="123456"
  onChange={setOtp}
  disabled
/>
```

## Notes

- Supports paste functionality (pastes all digits at once)
- Auto-focuses next input on digit entry
- Backspace navigates to previous input and clears it
- Keyboard accessible with arrow key navigation (Left/Right)
- Uses Framer Motion for focus animations (scale + lift)
- Input uses `inputMode="numeric"` for mobile keyboard
- Only allows numeric input
- Supports dark mode via design tokens