# Accordion

> **v1.0.33** · stable

A collapsible content component with support for single or multiple open items.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Accordion } from '@/components/ui/Accordion';
```

## Basic Usage

```tsx
import { Accordion } from '@/components/ui/Accordion';

<Accordion type="single">
    <AccordionItem value="item-1">
        <AccordionTrigger>What is this?</AccordionTrigger>
        <AccordionContent>
            This is an accordion component that can be collapsed or expanded.
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
        <AccordionTrigger>How does it work?</AccordionTrigger>
        <AccordionContent>
            Click on the trigger to toggle the content visibility.
        </AccordionContent>
    </AccordionItem>
</Accordion>
```

## Multiple Open Items

```tsx
<Accordion type="multiple">
    <AccordionItem value="item-1">
        <AccordionTrigger>First Item</AccordionTrigger>
        <AccordionContent>Content of first item</AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
        <AccordionTrigger>Second Item</AccordionTrigger>
        <AccordionContent>Content of second item</AccordionContent>
    </AccordionItem>
</Accordion>
```

## Controlled

```tsx
const [value, setValue] = useState('item-1');

<Accordion type="single" value={value} onValueChange={setValue}>
    <AccordionItem value="item-1">
        <AccordionTrigger>Controlled Item</AccordionTrigger>
        <AccordionContent>Content</AccordionContent>
    </AccordionItem>
</Accordion>
```

## API

### Accordion Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'single' \| 'multiple'` | `'single'` | Allow single or multiple open items |
| `value` | `string \| string[]` | - | Controlled value(s) |
| `defaultValue` | `string \| string[]` | - | Initial value(s) |
| `onValueChange` | `(value: string \| string[]) => void` | - | Value change handler |
| `collapsible` | `boolean` | `true` | Allow all items to be closed |
| `variant` | `string` | - | Visual variant |
| `className` | `string` | - | Additional classes |
| `children` | `ReactNode` | - | Accordion content |

### AccordionItem Props

| Prop | Type | Description |
|------|------|-------------|
| `value` | `string` | Unique identifier for the item |
| `className` | `string` | Additional classes |
| `children` | `ReactNode` | Item content (Trigger + Content) |

### AccordionTrigger Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Trigger content (usually text) |
| `className` | `string` | Additional classes |
| `...buttonProps` | `ButtonHTMLAttributes` | Standard button props |

### AccordionContent Props

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Content to show when expanded |
| `className` | `string` | Additional classes |

## Examples

### Default (Single)

```tsx
<Accordion type="single" defaultValue="item-1">
    <AccordionItem value="item-1">
        <AccordionTrigger>Getting Started</AccordionTrigger>
        <AccordionContent>
            Welcome! Here's how to get started...
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
        <AccordionTrigger>Installation</AccordionTrigger>
        <AccordionContent>
            Run npm install to get started...
        </AccordionContent>
    </AccordionItem>
</Accordion>
```

### Multiple Open

```tsx
<Accordion type="multiple" defaultValue={['item-1']}>
    <AccordionItem value="item-1">
        <AccordionTrigger>Features</AccordionTrigger>
        <AccordionContent>
            List of features...
        </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
        <AccordionTrigger>Pricing</AccordionTrigger>
        <AccordionContent>
            Our pricing plans...
        </AccordionContent>
    </AccordionItem>
</Accordion>
```

## Notes

- Uses React.forwardRef for all components
- Fully accessible with ARIA attributes
- Supports keyboard navigation
- Uses class-variance-authority for variants
- Animations use Framer Motion
- Compound components pattern (Accordion.Item, Accordion.Trigger, Accordion.Content)