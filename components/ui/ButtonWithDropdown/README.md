# ButtonWithDropdown

> **v1.0.3** · experimental

A button component with an attached dropdown menu for actions.

## Installation

```tsx
import { ButtonWithDropdown } from '@/components/ui/ButtonWithDropdown';
```

## Basic Usage

```tsx
<ButtonWithDropdown
  label="Actions"
  variant="primary"
  actions={[
    { label: 'Edit', onClick: () => {} },
    { label: 'Delete', onClick: () => {}, variant: 'danger' },
  ]}
/>
```

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Button text |
| actions | ButtonWithDropdownAction[] | - | Dropdown items |
| variant | 'primary' \| 'secondary' \| 'tertiary' | 'primary' | Visual style |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| disabled | boolean | false | Disabled state |
| className | string | - | Additional classes |

### ButtonWithDropdownAction

| Prop | Type | Description |
|------|------|-------------|
| label | string | Action label |
| onClick | () => void | Click handler |
| icon | LucideIcon (optional) | Action icon |
| disabled | boolean | Disabled state |

## Notes

- Uses React.forwardRef
- Click outside to close dropdown
- Animated dropdown with AnimatePresence
- Custom chevron rotation indicator

## Accessibility

Implements the WAI-ARIA menu button pattern (hand-rolled, no Radix):

- Trigger exposes `aria-haspopup="menu"`, `aria-expanded`, `aria-controls` (while open) and a stable `id`.
- The dropdown is `role="menu"` labelled by the trigger via `aria-labelledby`; items are `role="menuitem"` with `aria-disabled` when disabled.
- Keyboard: `ArrowDown` / `ArrowUp` / `Enter` / `Space` open the menu and move focus to the first / last enabled item.
- Inside the menu: `ArrowDown` / `ArrowUp` roving focus (wraps, skips disabled items), `Home` / `End` jump to first / last, `Escape` closes and returns focus to the trigger, `Tab` closes and moves on.