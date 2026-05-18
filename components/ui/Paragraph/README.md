# Paragraph

> **v1.0.3** · experimental

A simple typography component for rendering body text with consistent styling. Extends the Text component with paragraph-specific defaults.

## Installation

```bash
# The component is copied to your project with the add cli command
import { Paragraph } from '@/components/ui/Paragraph';
```

## Basic Usage

```tsx
import { Paragraph } from '@/components/ui/Paragraph';

<Paragraph>
  This is a paragraph of text that will be rendered with standard body styling.
</Paragraph>
```

## Variants

```tsx
// Large variant - for introductory text or lead paragraphs
<Paragraph variant="large">
  Welcome to our platform. Here's how you can get started...
</Paragraph>

// Default (body) - standard paragraph text
<Paragraph variant="body">
  Standard paragraph content goes here.
</Paragraph>

// Small variant - for secondary content, footnotes
<Paragraph variant="small">
  Supplementary information or disclaimers.
</Paragraph>

// Muted variant - for hints or less prominent text
<Paragraph variant="muted">
  This text is less prominent.
</Paragraph>
```

## With Links

```tsx
<Paragraph>
  By continuing, you agree to our{' '}
  <a href="#" className="text-accent-blue hover:underline">Terms of Service</a>
  {' '}and{' '}
  <a href="#" className="text-accent-blue hover:underline">Privacy Policy</a>.
</Paragraph>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'large' \| 'body' \| 'small' \| 'muted'` | `'body'` | Text size variant |
| `color` | `string` | `'secondary'` | Text color (from tokens) |
| `className` | `string` | - | Additional CSS classes |
| `children` | `ReactNode` | - | Paragraph content |

Inherits all props from `TextProps` including `as`, `style`, and standard HTML paragraph attributes.

## Notes

- Extends the `Text` component with `as="p"` automatically applied
- Includes default bottom margin (`mb-4`) for proper spacing between paragraphs
- Supports dark mode via CSS tokens
- Color defaults to `secondary` for optimal readability