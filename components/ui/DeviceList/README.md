# DeviceList

> **v1.0.2** · experimental

A component for displaying a list of user devices with status indicators, icons, and management actions. Commonly used in security settings, session management, and account administration.

## Installation

```bash
# The component is copied to your project with the add cli command
import { DeviceList } from '@/components/ui/DeviceList';
```

## Basic Usage

```tsx
import { DeviceList, Device } from '@/components/ui/DeviceList';

const devices: Device[] = [
  {
    id: '1',
    name: 'MacBook Pro',
    type: 'laptop',
    os: 'macOS Sonoma',
    browser: 'Safari 17.2',
    lastActive: '2 minutes ago',
    location: 'San Francisco, CA',
    status: 'active',
    isCurrentDevice: true,
  },
  {
    id: '2',
    name: 'iPhone 15 Pro',
    type: 'phone',
    os: 'iOS 17.2',
    lastActive: '1 hour ago',
    status: 'active',
  },
];

<DeviceList devices={devices} />
```

## API

### Props

| Prop            | Type                    | Default   | Description                         |
| --------------- | ----------------------- | --------- | ----------------------------------- |
| `devices`       | `Device[]`              | -         | Array of device objects (required)  |
| `onRemove`      | `(device: Device) => void` | -     | Callback when remove is clicked    |
| `onMoreActions` | `(device: Device) => void` | -     | Callback when more actions clicked |
| `showActions`   | `boolean`               | `true`    | Show action buttons                 |
| `className`     | `string`                | -        | Additional CSS classes              |

### Device

| Prop              | Type                        | Description                   |
| ----------------- | --------------------------- | ----------------------------- |
| `id`              | `string`                    | Unique identifier            |
| `name`            | `string`                    | Device name                  |
| `type`            | `'phone' \| 'tablet' \| 'laptop' \| 'desktop' \| 'other'` | Device type |
| `os`              | `string?`                   | Operating system             |
| `browser`         | `string?`                   | Browser name and version     |
| `lastActive`      | `string?`                   | Last active timestamp        |
| `location`        | `string?`                   | Device location              |
| `ipAddress`       | `string?`                   | IP address                   |
| `status`          | `'active' \| 'inactive' \| 'suspended'` | Device status |
| `isCurrentDevice` | `boolean?`                  | Current session device       |

## Examples

### With Actions

```tsx
<DeviceList
  devices={devices}
  showActions={true}
  onRemove={(device) => console.log('Remove:', device.id)}
  onMoreActions={(device) => console.log('Actions for:', device.name)}
/>
```

### Without Actions (Read-only)

```tsx
<DeviceList devices={devices} showActions={false} />
```

### Single Device

```tsx
<DeviceList devices={[currentDevice]} showActions={true} />
```

### Mobile Devices Only

```tsx
<DeviceList
  devices={[
    {
      id: '1',
      name: 'iPhone 15 Pro Max',
      type: 'phone',
      os: 'iOS 17.2',
      lastActive: 'Just now',
      location: 'San Francisco, CA',
      status: 'active',
      isCurrentDevice: true,
    },
  ]}
/>
```

### Suspended Devices

```tsx
<DeviceList
  devices={[
    {
      id: '1',
      name: 'Old Laptop',
      type: 'laptop',
      os: 'Windows 10',
      lastActive: '3 months ago',
      location: 'Unknown',
      status: 'suspended',
    },
  ]}
/>
```

## Status Indicators

| Status      | Badge Variant | Description                |
| ----------- | ------------- | -------------------------- |
| `active`    | `success`     | Device is currently active |
| `inactive`  | `default`     | Device not used recently   |
| `suspended` | `error`       | Device has been suspended  |

The current device always shows a "Current Device" badge regardless of status.

## Notes

- Uses Framer Motion for staggered entrance animations
- Supports dark mode via design tokens
- Current device cannot be removed (remove button hidden)
- Icons automatically selected based on device type
- Fully accessible with proper ARIA labels