# PermissionsMatrix

> **v1.0.22** · stable

A matrix component for managing role-based permissions. Displays permissions grouped by category with checkboxes for each role/permission combination. Supports batch toggling by category.

## Installation

```bash
import { PermissionsMatrix } from '@/components/ui/PermissionsMatrix';
```

## Basic Usage

```tsx
import { PermissionsMatrix, type Role, type Permission } from '@/components/ui/PermissionsMatrix';

function Example() {
  const roles: Role[] = [
    { id: 'admin', name: 'Admin', description: 'Full system access' },
    { id: 'editor', name: 'Editor', description: 'Can create and edit content' },
    { id: 'viewer', name: 'Viewer', description: 'Read-only access' },
  ];

  const permissions: Permission[] = [
    { id: 'read', name: 'Read', description: 'View documents', category: 'Content' },
    { id: 'write', name: 'Write', description: 'Create and edit documents', category: 'Content' },
    { id: 'delete', name: 'Delete', description: 'Remove documents', category: 'Content' },
    { id: 'share', name: 'Share', description: 'Share with external users', category: 'Collaboration' },
    { id: 'export', name: 'Export', description: 'Export to CSV/PDF', category: 'Collaboration' },
  ];

  const [rolePermissions, setRolePermissions] = useState({
    admin: ['read', 'write', 'delete', 'share', 'export'],
    editor: ['read', 'write', 'share'],
    viewer: ['read'],
  });

  return (
    <PermissionsMatrix
      roles={roles}
      permissions={permissions}
      rolePermissions={rolePermissions}
      onChange={(roleId, permissionIds) => {
        setRolePermissions(prev => ({ ...prev, [roleId]: permissionIds }));
      }}
    />
  );
}
```

## Crypto Wallet Permissions

```tsx
<PermissionsMatrix
  roles={[
    { id: 'owner', name: 'Owner', description: 'Full wallet control' },
    { id: 'trader', name: 'Trader', description: 'Can trade assets' },
    { id: 'auditor', name: 'Auditor', description: 'View-only for compliance' },
  ]}
  permissions={[
    { id: 'view-balance', name: 'View Balance', category: 'Read' },
    { id: 'view-history', name: 'View History', category: 'Read' },
    { id: 'trade', name: 'Trade', category: 'Write' },
    { id: 'withdraw', name: 'Withdraw', category: 'Write' },
    { id: 'api-access', name: 'API Access', category: 'Advanced' },
  ]}
  rolePermissions={rolePermissions}
  onChange={handleChange}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `roles` | `Role[]` | required | List of roles (columns) |
| `permissions` | `Permission[]` | required | List of permissions (rows) |
| `rolePermissions` | `{ [roleId: string]: string[] }` | required | Map of role ID to enabled permission IDs |
| `onChange` | `(roleId: string, permissionIds: string[]) => void` | - | Callback when permissions change |
| `className` | `string` | - | Additional classes |

### Role

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `name` | `string` | Display name |
| `description?` | `string` | Additional description |

### Permission

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `name` | `string` | Display name |
| `description?` | `string` | Additional description |
| `category?` | `string` | Grouping category |

## Examples

### All Permissions Granted

```tsx
<PermissionsMatrix
  roles={roles}
  permissions={permissions}
  rolePermissions={{
    admin: ['read', 'write', 'delete', 'share', 'export'],
    editor: ['read', 'write', 'delete', 'share', 'export'],
    viewer: ['read', 'write', 'delete', 'share', 'export'],
  }}
  onChange={handleChange}
/>
```

### No Permissions Granted

```tsx
<PermissionsMatrix
  roles={roles}
  permissions={permissions}
  rolePermissions={{
    admin: [],
    editor: [],
    viewer: [],
  }}
  onChange={handleChange}
/>
```

### Single Role (Super Admin)

```tsx
<PermissionsMatrix
  roles={[{ id: 'superadmin', name: 'Super Admin', description: 'All permissions' }]}
  permissions={permissions}
  rolePermissions={{ superadmin: ['read', 'write', 'delete', 'share', 'export'] }}
  onChange={handleChange}
/>
```

## Features

- **Category Grouping**: Permissions are automatically grouped by their `category` property
- **Batch Toggle**: Click the checkbox in a category header to toggle all permissions in that category at once
- **Horizontal Scroll**: The matrix supports horizontal scrolling for many roles
- **Responsive**: Works on different screen sizes with horizontal scrolling
- **Editable**: The `onChange` callback allows for full editing capability

## Notes

- Uses the Checkbox component for toggling
- Grouped permissions have a header row with the category name
- Category checkboxes reflect the state: checked (all), unchecked (none), or indeterminate (partial)
- Inline styles are used for the table to ensure proper rendering
- Supports dark mode via CSS custom properties