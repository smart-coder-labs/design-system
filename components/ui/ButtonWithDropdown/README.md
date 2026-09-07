# ButtonWithDropdown

> **v1.0.3** · experimental

A button component with an attached dropdown menu for actions.

## Installation

```tsx
import { ButtonWithDropdown } from '@/components/ui/ButtonWithDropdown';
```

## Basic Usage

```tsx
import { Pencil, Trash2 } from 'lucide-react';

<ButtonWithDropdown
  label="Actions"
  variant="primary"
  actions={[
    { label: 'Edit', onClick: () => {}, icon: Pencil },
    { label: 'Delete', onClick: () => {}, icon: Trash2, disabled: true },
  ]}
/>
```

## API

### ButtonWithDropdown

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | - | Button text (required) |
| actions | ButtonWithDropdownAction[] | - | Dropdown items (required) |
| variant | 'primary' \| 'secondary' \| 'tertiary' | 'primary' | Visual style |
| size | 'sm' \| 'md' \| 'lg' | 'md' | Button size |
| disabled | boolean | false | Disabled state |
| className | string | - | Additional classes |

### ButtonWithDropdownAction

| Prop | Type | Description |
|------|------|-------------|
| label | string | Action label (required) |
| onClick | () => void | Click handler (required) |
| icon | React.ElementType | Icon rendered before the label |
| disabled | boolean | Disables the action item |

## Notes

- Uses React.forwardRef
- Click outside to close dropdown
- Animated dropdown with AnimatePresence
- Custom chevron rotation indicator