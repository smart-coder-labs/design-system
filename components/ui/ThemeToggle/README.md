# ThemeToggle

> **v1.0.3** · experimental

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

## Theme resolution order

On mount the component resolves the theme with this priority:

1. **Stored preference** — a valid `'light' | 'dark' | 'system'` value under `storageKey`.
2. **Theme already applied to `<html>`** — read from `data-theme` or the `dark` class. If the
   host app (or an anti-flash script) already applied a theme and nothing is stored, that theme
   is adopted instead of being overwritten by `defaultMode`.
3. **`defaultMode`** — resolved through `prefers-color-scheme` when it is `'system'`.

The DOM is only rewritten when it does not already match the resolved theme.

## Accessibility

- The switch always exposes an accessible name derived from the **current** theme, so it can
  never go stale: dark → `"Cambiar a modo claro"`, light → `"Cambiar a modo oscuro"`.
- Do not attach a static external label to the switch — it would contradict the live state.
- The `Auto` button reports `aria-pressed` while the component follows the system preference.

## Notes

- Automatically applies theme to `<html>` element (class `dark`, `data-theme`, `color-scheme`)
- Persists user preference in localStorage
- Listens for system preference changes in real-time
- Uses Framer Motion for icon transitions (180ms)
- AnimatePresence enables smooth theme icon animations
- Glassmorphism-ready with backdrop blur support
- Fully accessible with proper ARIA attributes
- Supports dark mode via design tokens
- Uses React.forwardRef for the root element