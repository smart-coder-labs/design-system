# ProgressiveDisclosurePanel

> **v1.0.7** · stable

A multi-level collapsible panel that progressively reveals information from summary to deep technical details. Designed for fintech applications to display transaction and account information at varying levels of detail.

## Installation

```bash
# The component is copied to your project with the add cli command
import { ProgressiveDisclosurePanel } from '@/components/ui/ProgressiveDisclosurePanel';
```

## Basic Usage

```tsx
import { ProgressiveDisclosurePanel } from '@/components/ui/ProgressiveDisclosurePanel';

<ProgressiveDisclosurePanel
  title="Transaction Details"
  summary={
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
        <Wallet className="text-gray-500" />
      </div>
      <div>
        <h4 className="font-bold">Payment to Merchant</h4>
        <p className="text-sm text-gray-500">Yesterday, 14:30</p>
      </div>
      <div className="ml-auto text-right">
        <p className="font-bold">-$125.00</p>
        <p className="text-xs text-green-500">Completed</p>
      </div>
    </div>
  }
  details={
    <div className="space-y-4 text-sm">
      <div className="flex justify-between border-b border-gray-200 pb-2">
        <span className="text-gray-500">Card Used</span>
        <span className="font-medium">Debit **** 4589</span>
      </div>
      <div className="flex justify-between border-b border-gray-200 pb-2">
        <span className="text-gray-500">Category</span>
        <span className="font-medium">Online Shopping</span>
      </div>
    </div>
  }
  deepDive={
    <pre>{JSON.stringify(rawData, null, 2)}</pre>
  }
/>
```

## API

### Props

| Prop            | Type           | Default     | Description                                      |
| --------------- | -------------- | ----------- | ------------------------------------------------ |
| `title`         | `string`       | -           | Optional title displayed above the summary       |
| `summary`       | `ReactNode`    | -           | The primary summarized information              |
| `details`       | `ReactNode`    | -           | The detailed content revealed on first expand   |
| `deepDive`      | `ReactNode`    | -           | Optional technical details for second expand     |
| `defaultExpanded` | `boolean`    | `false`     | Whether the panel starts expanded                |

## Examples

### Transaction Details

```tsx
<ProgressiveDisclosurePanel
  title="Detalle de Operación"
  summary={
    <div className="flex items-center gap-4">
      <Wallet className="text-gray-500" />
      <div>
        <h4 className="font-bold">Pago a Amazon</h4>
        <p className="text-sm text-gray-500">Ayer, 14:30 hrs</p>
      </div>
      <div className="ml-auto">
        <p className="font-bold">-$1,250.00 MXN</p>
      </div>
    </div>
  }
  details={
    <div className="space-y-4">
      <div className="flex justify-between">
        <span>Tarjeta</span>
        <span>Débito **** 4589</span>
      </div>
    </div>
  }
  deepDive={
    <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
  }
/>
```

### Account Summary

```tsx
<ProgressiveDisclosurePanel
  title="Account Summary"
  defaultExpanded={true}
  summary={
    <div className="flex items-center gap-3">
      <Info className="text-blue-500" />
      <span>3 active accounts — Total: $178,250.00</span>
    </div>
  }
  details={
    <div className="space-y-3">
      <div className="flex justify-between">
        <span>Checking</span>
        <span className="font-medium">$12,450.00</span>
      </div>
      <div className="flex justify-between">
        <span>Savings</span>
        <span className="font-medium">$45,800.00</span>
      </div>
    </div>
  }
/>
```

### Simple Alert

```tsx
<ProgressiveDisclosurePanel
  title="Important Notice"
  summary={
    <div className="flex items-center gap-3 text-sm">
      <CreditCard className="text-amber-500" />
      <span>Your card **** 4589 will expire in 30 days</span>
    </div>
  }
  details={
    <div className="text-sm">
      <p>You can request a replacement from the app.</p>
      <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg">
        Request Replacement
      </button>
    </div>
  }
/>
```

## Notes

- Uses Framer Motion for smooth expand/collapse animations (300ms ease-in-out)
- Three expansion levels: collapsed → details → deep dive
- Fully accessible with keyboard navigation
- Supports dark mode via CSS classes
- The deep dive section is only available when `deepDive` prop is provided
- Uses CSS-in-JS via Tailwind classes (no inline styles except for the panel container)