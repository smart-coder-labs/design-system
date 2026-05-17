# PasswordInput

> **v1.0.18** · stable

Form input component for password entry with built-in strength meter and validation requirements.

## Installation

```bash
import { PasswordInput } from '@/components/ui/PasswordInput';
```

## Basic Usage

```tsx
<PasswordInput 
  value={password}
  onChange={setPassword}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| value | string | required | Controlled password value |
| onChange | (value: string) => void | required | Handler when value changes |
| label | string | - | Label text |
| error | string | - | Error message |
| helperText | string | - | Helper text below input |
| showStrengthMeter | boolean | true | Show strength indicator |
| strengthRequirements | StrengthRequirement[] | default array | Custom requirements |
| disabled | boolean | false | Disabled state |
| className | string | - | Container class |

### StrengthRequirement

| Prop | Type | Description |
|------|------|-------------|
| regex | RegExp | Validation pattern |
| label | string | Display text |

## Examples

### Basic Usage

```tsx
<PasswordInput 
  value={password}
  onChange={setPassword}
/>
```

### With Label

```tsx
<PasswordInput 
  label="Password"
  value={password}
  onChange={setPassword}
/>
```

### With Error Message

```tsx
<PasswordInput 
  value={password}
  onChange={setPassword}
  error="Password is required"
/>
```

### With Helper Text

```tsx
<PasswordInput 
  value={password}
  onChange={setPassword}
  helperText="Must be at least 8 characters"
/>
```

### Without Strength Meter

```tsx
<PasswordInput 
  value={password}
  onChange={setPassword}
  showStrengthMeter={false}
/>
```

### Custom Requirements

```tsx
<PasswordInput 
  value={password}
  onChange={setPassword}
  strengthRequirements={[
    { regex: /.{12,}/, label: 'At least 12 characters' },
    { regex: /[0-9]/, label: 'Contains a number' },
    { regex: /[A-Z]/, label: 'Contains uppercase' },
  ]}
/>
```

### Disabled State

```tsx
<PasswordInput 
  value={password}
  onChange={setPassword}
  disabled
/>
```

## Notes

- Uses React.forwardRef pattern
- Toggle password visibility with eye icon
- Built-in strength meter with visual feedback
- Default requirements: 8+ chars, number, lowercase, uppercase, special char
- Uses Framer Motion for animations
- Supports dark mode via design tokens