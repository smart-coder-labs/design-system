# Collapsible

> **v1.0.35** · stable

A reveal/hide component for expandable content sections. Useful for accordions, FAQs, and nested information.

## Installation

```bash
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/Collapsible';
```

## Basic Usage

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/Collapsible';
import { ChevronsUpDown } from 'lucide-react';

<Collapsible>
  <CollapsibleTrigger className="flex items-center justify-between w-full p-3">
    <span>What is this component?</span>
    <ChevronsUpDown className="w-4 h-4" />
  </CollapsibleTrigger>
  <CollapsibleContent>
    <p className="p-3 text-sm text-text-secondary">
      This is a collapsible component that reveals hidden content when triggered.
    </p>
  </CollapsibleContent>
</Collapsible>
```

## Controlled Usage

```tsx
import { useState } from 'react';
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/Collapsible';

const [isOpen, setIsOpen] = useState(false);

<Collapsible open={isOpen} onOpenChange={setIsOpen}>
  <CollapsibleTrigger>Toggle Content</CollapsibleTrigger>
  <CollapsibleContent>
    <p>This content is controlled externally.</p>
  </CollapsibleContent>
</Collapsible>
```

## API

### Collapsible

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Controlled open state |
| `defaultOpen` | `boolean` | `false` | Initial open state (uncontrolled) |
| `onOpenChange` | `(open: boolean) => void` | - | Callback when state changes |
| `disabled` | `boolean` | `false` | Disables the collapsible |
| `className` | `string` | - | Additional CSS classes |

### CollapsibleTrigger

Extends `React.ButtonHTMLAttributes<HTMLButtonElement>`. The trigger is automatically connected to the collapsible state.

### CollapsibleContent

Extends `React.HTMLAttributes<HTMLDivElement>`. Contains the collapsible content with smooth animations.

## Examples

### With Default Open

```tsx
<Collapsible defaultOpen>
  <CollapsibleTrigger>Click to collapse</CollapsibleTrigger>
  <CollapsibleContent>
    <p>This content is visible by default.</p>
  </CollapsibleContent>
</Collapsible>
```

### Disabled State

```tsx
<Collapsible disabled>
  <CollapsibleTrigger>Cannot toggle</CollapsibleTrigger>
  <CollapsibleContent>
    <p>This content cannot be revealed.</p>
  </CollapsibleContent>
</Collapsible>
```

### FAQ Style

```tsx
<div className="space-y-2">
  <Collapsible className="border rounded-lg">
    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 font-medium">
      How do I reset my password?
      <ChevronsUpDown className="w-4 h-4" />
    </CollapsibleTrigger>
    <CollapsibleContent className="px-4 pb-4 text-sm text-text-secondary">
      Go to Settings > Security > Reset Password to update your credentials.
    </CollapsibleContent>
  </Collapsible>

  <Collapsible className="border rounded-lg">
    <CollapsibleTrigger className="flex items-center justify-between w-full p-4 font-medium">
      Where can I find my invoices?
      <ChevronsUpDown className="w-4 h-4" />
    </CollapsibleTrigger>
    <CollapsibleContent className="px-4 pb-4 text-sm text-text-secondary">
      All invoices are available in the Billing section of your dashboard.
    </CollapsibleContent>
  </Collapsible>
</div>
```

## Notes

- Uses React context to connect trigger and content
- Smooth height animation with Framer Motion (200ms ease-in-out)
- Fully accessible with proper ARIA attributes (aria-expanded, aria-controls)
- Supports both controlled and uncontrolled modes
- Uses data-state attribute for styling based on open/closed state
- Supports dark mode with appropriate color tokens