# ThemeToggle

> **v1.0.14** · stable

A macOS/iOS-style theme switcher component with light/dark mode and system preference support. Features smooth animations and persistent user preference.

## Installation

```bash
import { ThemeToggle } from '@/components/ui/ThemeToggle';
```

## Basic Usage

```tsx
<ThemeToggle />
```

## With Custom Label

```tsx
<ThemeToggle
  label="Appearance"
  description="Choose your preferred theme"
/>
```

## API

### Props

| Prop           | Type                              | Default     | Description                                    |
| -------------- | --------------------------------- | ----------- | ---------------------------------------------- |
| `defaultMode`  | `'light' \| 'dark' \| 'system'`   | `'system'`  | Initial theme mode                             |
| `storageKey`   | `string`                          | `'theme'`   | Key for localStorage persistence               |
| `label`        | `string`                          | `'Apariencia'` | Main label text                              |
| `description`  | `string`                          | -           | Custom status description                      |
| `allowSystem`  | `boolean`                         | `true`      | Show system preference button                 |
| `onModeChange` | `(mode: ThemeMode, theme: ThemeName) => void` | - | Callback when mode changes     |
| `className`    | `string`                          | -           | Additional classes                             |

### ThemeMode Type

`'light' | 'dark' | 'system'`

### ThemeName Type

`'light' | 'dark'`

## Examples

### Light Mode Default

```tsx
<ThemeToggle defaultMode="light" allowSystem={false} />
```

### Dark Mode Default

```tsx
<ThemeToggle defaultMode="dark" />
```

### Without System Option

```tsx
<ThemeToggle
  defaultMode="light"
  allowSystem={false}
  label="Theme"
/>
```

### With Mode Change Handler

```tsx
<ThemeToggle
  defaultMode="system"
  onModeChange={(mode, theme) => {
    console.log(`Mode: ${mode}, Applied theme: ${theme}`);
  }}
/>
```

### Custom Description

```tsx
<ThemeToggle
  label="Theme Settings"
  description="Switch between light and dark mode"
/>
```

## Notes

- Automatically applies theme to `<html>` element
- Persists user preference in localStorage
- Listens for system preference changes in real-time
- Uses Framer Motion for icon transitions (180ms)
- AnimatePresence enables smooth theme icon animations
- Glassmorphism-ready with backdrop blur support
- Fully accessible with proper ARIA attributes
- Supports dark mode via design tokens
- Uses React.forwardRef for the root element