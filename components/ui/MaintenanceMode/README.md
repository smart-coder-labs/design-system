# MaintenanceMode

> **v1.0.13** · stable

A full-page or inline maintenance screen component that displays during scheduled system maintenance. Features an animated construction icon, estimated return time, and contact support option.

## Installation

```bash
# The component is copied to your project with the add cli command
import { MaintenanceMode } from '@/components/ui/MaintenanceMode';
```

## Basic Usage

```tsx
import { MaintenanceMode } from '@/components/ui/MaintenanceMode';

function MaintenancePage() {
  return <MaintenanceMode />;
}
```

## Custom Title and Description

```tsx
<MaintenanceMode
  title="Scheduled Maintenance"
  description="We are upgrading our core banking systems to provide faster, more secure transactions."
  estimatedReturnTime="4:00 AM EST"
/>
```

## Without Contact Support

```tsx
<MaintenanceMode
  title="System Upgrade"
  description="Our mobile banking platform is being upgraded with new features."
  showContactSupport={false}
/>
```

## Inline Widget Mode

Use `fullPage={false}` when embedding in a widget or card.

```tsx
<div className="w-full max-w-md">
  <MaintenanceMode
    title="Widget Unavailable"
    description="This feature is temporarily unavailable."
    fullPage={false}
  />
</div>
```

## With Custom Action

```tsx
<MaintenanceMode
  title="Under Maintenance"
  description="We'll be back shortly with improvements."
  customAction={
    <Button variant="primary" onClick={() => window.location.reload()}>
      Try Again
    </Button>
  }
/>
```

## API

### Props

| Prop                  | Type         | Default   | Description                                      |
|-----------------------|--------------|-----------|--------------------------------------------------|
| `title`               | `string`     | `"We'll be back soon"` | Title displayed on the page |
| `description`        | `string`     | `"We're currently performing some scheduled maintenance. We should be back shortly."` | Description text |
| `estimatedReturnTime` | `string`     | -         | Display estimated time when service returns     |
| `showContactSupport`  | `boolean`    | `true`    | Show "Contact Support" button                    |
| `customAction`        | `ReactNode`  | -         | Custom action button or link                     |
| `fullPage`           | `boolean`    | `true`    | Full viewport mode or inline mode                |
| `className`          | `string`     | -         | Additional CSS classes                           |
| `onContactSupport`    | `() => void` | -         | Callback when contact support is clicked        |

## Examples

### Banking System Maintenance

```tsx
<MaintenanceMode
  title="System Maintenance in Progress"
  description="Online banking is temporarily unavailable while we upgrade our systems. Your accounts and transactions are safe."
  estimatedReturnTime="3 hours"
  showContactSupport={true}
/>
```

### Short Maintenance Window

```tsx
<MaintenanceMode
  title="Quick Update"
  description="Back in 30 minutes!"
  estimatedReturnTime="30 minutes"
/>
```

### Crypto Exchange Downtime

```tsx
<MaintenanceMode
  title="CryptoVault Maintenance"
  description="Spot and futures trading are paused for scheduled maintenance. Withdrawals and deposits will resume automatically."
  estimatedReturnTime="4 hours"
  showContactSupport={true}
/>
```

## Notes

- Animated pulsing icon with blur effect
- Framer Motion entrance animation (500ms ease-out)
- Supports both full-page and inline modes
- Dark mode compatible via design tokens
- Uses semantic HTML (`h1`, `p` elements)
- System status indicator at the bottom