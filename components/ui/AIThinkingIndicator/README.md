# AIThinkingIndicator

> **v1.0.3** · experimental

An animated loading indicator that shows AI processing states with three distinct animation variants. Perfect for AI-powered features, chatbots, and async operations.

## Installation

```bash
import { AIThinkingIndicator } from '@/components/ui/AIThinkingIndicator';
```

## Basic Usage

```tsx
<AIThinkingIndicator variant="dots" message="Analyzing..." />
```

## Variants

The component supports three animation styles:

- **dots** - Three dots pulsing sequentially (default)
- **pulse** - Single expanding/contracting circle
- **wave** - Four bars with wave-like motion

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'dots' \| 'pulse' \| 'wave'` | `'dots'` | Animation style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Indicator size |
| `color` | `string` | `var(--color-accent-blue)` | Custom color (hex/rgb) |
| `message` | `string` | - | Optional text message |
| `className` | `string` | - | Additional CSS classes |

## Examples

### Dots Variant (Default)

```tsx
<AIThinkingIndicator variant="dots" message="Thinking..." />
```

### Pulse Variant

```tsx
<AIThinkingIndicator variant="pulse" size="lg" color="#FF9500" />
```

### Wave Variant

```tsx
<AIThinkingIndicator variant="wave" size="sm" />
```

### Different Sizes

```tsx
// Small
<AIThinkingIndicator size="sm" message="Loading" />

// Medium (default)
<AIThinkingIndicator size="md" message="Processing" />

// Large
<AIThinkingIndicator size="lg" variant="pulse" message="Computing" />
```

### Custom Colors

```tsx
<AIThinkingIndicator color="#34C759" message="Success" />
<AIThinkingIndicator color="#FF3B30" message="Error" />
```

## Accessibility Notes

- Uses `role="status"` and `aria-live="polite"` when a message is provided
- Respects `prefers-reduced-motion` via CSS (consider adding media query in your own stylesheet)
- The animation is subtle and non-distracting
- Screen readers will announce the message when present