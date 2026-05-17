# ButtonWithDropdown

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