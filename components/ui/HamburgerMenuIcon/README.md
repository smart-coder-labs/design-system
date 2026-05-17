# HamburgerMenuIcon

> **v1.0.12** · stable

An animated hamburger menu icon that smoothly transitions between hamburger (three lines) and close (X) states. Perfect for mobile navigation toggles.

## Installation

```bash
# The component is copied to your project with the add cli command
import { HamburgerMenuIcon } from '@/components/ui/HamburgerMenuIcon';
```

## Basic Usage

```tsx
import { useState } from 'react';
import { HamburgerMenuIcon } from '@/components/ui/HamburgerMenuIcon';

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <span className="font-bold">FinFlow</span>
      <HamburgerMenuIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
}
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | `false` | Controls open/closed state |
| `onClick` | `() => void` | - | Click handler |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Icon size |
| `variant` | `'default' \| 'primary' \| 'ghost'` | `'default'` | Visual style |
| `className` | `string` | - | Additional classes |
| `aria-label` | `string` | `'Toggle menu'` | Accessibility label |
| `...props` | `HTMLMotionProps` | - | Framer Motion button props |

## Variants

### Default

```tsx
<HamburgerMenuIcon isOpen={isOpen} onClick={handleToggle} variant="default" />
```

### Primary (filled background)

```tsx
<HamburgerMenuIcon isOpen={isOpen} onClick={handleToggle} variant="primary" />
```

### Ghost (no background on hover)

```tsx
<HamburgerMenuIcon isOpen={isOpen} onClick={handleToggle} variant="ghost" />
```

## Sizes

### Small

```tsx
<HamburgerMenuIcon isOpen={isOpen} size="sm" onClick={handleToggle} />
```

### Medium (default)

```tsx
<HamburgerMenuIcon isOpen={isOpen} size="md" onClick={handleToggle} />
```

### Large

```tsx
<HamburgerMenuIcon isOpen={isOpen} size="lg" onClick={handleToggle} />
```

## Full Example

```tsx
import { useState } from 'react';
import { HamburgerMenuIcon } from '@/components/ui/HamburgerMenuIcon';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4 border rounded-xl">
      <div className="flex items-center justify-between">
        <span className="font-bold">FinFlow</span>
        <HamburgerMenuIcon 
          isOpen={isOpen} 
          onClick={() => setIsOpen(!isOpen)} 
          variant="default"
        />
      </div>
      
      {isOpen && (
        <nav className="mt-4 pt-4 border-t">
          <a className="block py-2">Dashboard</a>
          <a className="block py-2">Transactions</a>
          <a className="block py-2">Accounts</a>
          <a className="block py-2">Settings</a>
        </nav>
      )}
    </div>
  );
}
```

## Animation

The icon uses Framer Motion for smooth transitions:

- **Lines rotate** 45°/-45° to form X
- **Middle line fades** out and scales to 0
- **Duration**: 300ms with cubic-bezier easing
- **Hover/tap**: Scale effects (1.05 hover, 0.95 tap)

## Notes

- Uses Framer Motion for SVG line animations
- Fully accessible with `aria-expanded` attribute
- Supports keyboard focus states
- Dark mode support via CSS tokens