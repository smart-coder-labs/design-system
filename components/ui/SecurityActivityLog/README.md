# SecurityActivityLog

> **v1.0.29** · stable

A security-focused activity feed component for displaying authentication events, login attempts, and security-related activities. Visualizes events with appropriate icons and status colors.

## Installation

```bash
import { SecurityActivityLog, SecurityEvent, SecurityEventType } from '@/components/ui/SecurityActivityLog';
```

## Basic Usage

```tsx
import { SecurityActivityLog } from '@/components/ui/SecurityActivityLog';

const events = [
    { id: '1', type: 'login', description: 'Login from Chrome on macOS', timestamp: '2 minutes ago', ipAddress: '192.168.1.100', location: 'New York, US', status: 'success' },
    { id: '2', type: 'password_change', description: 'Password changed', timestamp: '1 day ago', ipAddress: '192.168.1.100', location: 'New York, US', status: 'success' },
];

<SecurityActivityLog events={events} />
```

## API

### SecurityActivityLog Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `events` | `SecurityEvent[]` | - | Array of security events |
| `onEventClick` | `(event: SecurityEvent) => void` | - | Click handler for events |
| `className` | `string` | - | Additional CSS classes |

### SecurityEvent

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique identifier |
| `type` | `SecurityEventType` | Event type |
| `description` | `string` | Event description |
| `timestamp` | `string` | Time string |
| `location` | `string` | Optional location |
| `ipAddress` | `string` | Optional IP address |
| `device` | `string` | Optional device info |
| `status` | `'success' \| 'warning' \| 'error'` | Event status |
| `user` | `string` | Optional user name |

### SecurityEventType

```ts
type SecurityEventType =
    | 'login'
    | 'logout'
    | 'password_change'
    | 'password_reset'
    | '2fa_enabled'
    | '2fa_disabled'
    | 'device_added'
    | 'device_removed'
    | 'suspicious_activity'
    | 'permission_granted'
    | 'permission_revoked';
```

## Examples

### Login History

```tsx
<SecurityActivityLog
    events={[
        { id: '1', type: 'login', description: 'Login from Chrome on macOS', timestamp: '2 min ago', ipAddress: '192.168.1.100', location: 'New York, US', status: 'success' },
        { id: '2', type: 'login', description: 'Login from Safari on iOS', timestamp: '1 hour ago', ipAddress: '203.0.113.45', location: 'San Francisco, US', status: 'success' },
        { id: '3', type: 'logout', description: 'Session ended', timestamp: '3 hours ago', status: 'success' },
    ]}
/>
```

### Security Alerts

```tsx
<SecurityActivityLog
    events={[
        { id: '1', type: 'suspicious_activity', description: 'Brute force attempt blocked', timestamp: '1m ago', ipAddress: '185.220.101.45', location: 'Tor Exit Node', status: 'error' },
        { id: '2', type: 'login', description: 'Failed login from unknown device', timestamp: '5m ago', ipAddress: '89.45.67.123', location: 'Moscow, RU', status: 'error' },
        { id: '3', type: 'password_change', description: 'Password reset requested', timestamp: '30m ago', ipAddress: '192.168.1.100', location: 'New York, US', status: 'warning' },
    ]}
/>
```

### Device Management

```tsx
<SecurityActivityLog
    events={[
        { id: '1', type: 'device_added', description: 'Chrome on Windows 11', timestamp: '5m ago', ipAddress: '192.168.1.100', device: 'Windows Desktop', location: 'Austin, TX', status: 'success' },
        { id: '2', type: 'device_removed', description: 'Safari on iPhone 15', timestamp: '2h ago', ipAddress: '203.0.113.50', device: 'iPhone 15 Pro', location: 'Austin, TX', status: 'success' },
    ]}
/>
```

## Notes

- Each event type has a corresponding icon (login, logout, password change, 2FA, device, etc.)
- Status colors: success (green), warning (yellow), error (red)
- Events display location, IP address, and device info when available
- Uses ActivityFeed component internally
- Supports dark mode via design tokens
- Fully accessible with proper ARIA attributes