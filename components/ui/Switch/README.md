# Switch

> **v1.0.3** · experimental

A toggle switch component with animated thumb and optional label/description support.

## Installation

```bash
import { Switch } from '@/components/ui/Switch';
```

## Basic Usage

```tsx
const [checked, setChecked] = useState(false);

<Switch checked={checked} onCheckedChange={setChecked} />
```

## API

### Switch

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| checked | boolean | - | Controlled checked state |
| onCheckedChange | (checked: boolean) => void | - | Callback when state changes |
| disabled | boolean | false | Disable the switch |
| label | string | - | Label text (renders as accessible label) |
| description | string | - | Description text below label |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Switch size |
| className | string | - | Additional classes |
| aria-label | string | - | Accessible name to use when no visible label is provided |

## Examples

### Basic Switch

```tsx
<Switch checked={enabled} onCheckedChange={setEnabled} />
```

### Switch with Label

```tsx
<Switch
  checked={enabled}
  onCheckedChange={setEnabled}
  label="Enable notifications"
/>
```

### Switch with Label and Description

```tsx
<Switch
  checked={darkMode}
  onCheckedChange={setDarkMode}
  label="Dark Mode"
  description="Toggle between light and dark theme"
/>
```

### Different Sizes

```tsx
<Switch size="sm" checked={checked} onCheckedChange={setChecked} />
<Switch size="md" checked={checked} onCheckedChange={setChecked} />
<Switch size="lg" checked={checked} onCheckedChange={setChecked} />
```

### Disabled Switch

```tsx
<Switch
  checked={checked}
  onCheckedChange={setChecked}
  disabled
  label="Disabled switch"
/>
```

### Switch without a Visible Label

```tsx
<Switch
  checked={checked}
  onCheckedChange={setChecked}
  aria-label="Enable notifications"
/>
```

## Notes

- Uses Framer Motion for smooth thumb animation
- Accessible with role="switch" and aria-checked; the visible label is linked via aria-labelledby and the description via aria-describedby
- Use aria-label to provide an accessible name when there is no visible label
- Keyboard accessible (Enter/Space to toggle)
- Label wraps entire switch for click activation
- When label/description provided, renders as accessible label element
- Blue accent color when checked