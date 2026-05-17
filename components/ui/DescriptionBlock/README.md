# DescriptionBlock

> **v1.0.23** · stable

A versatile content block component for displaying rich information with titles, descriptions, metadata, and media. Perfect for dashboard cards, feature highlights, and information panels.

## Installation

```bash
# The component is copied to your project with the add cli command
import { DescriptionBlock } from '@/components/ui/DescriptionBlock';
```

## Basic Usage

```tsx
import { DescriptionBlock, DescriptionMetadataItem } from '@/components/ui/DescriptionBlock';

const metadata: DescriptionMetadataItem[] = [
  { label: 'Total Revenue', value: '$124,500' },
  { label: 'Active Users', value: '2,847' },
  { label: 'Growth Rate', value: '+12.5%' },
];

<DescriptionBlock
  title="Fintech Dashboard Pro"
  subtitle="Enterprise-grade financial dashboard"
  description="A comprehensive analytics platform designed for fintech companies."
  metadata={metadata}
/>
```

## Layout Variants

### Stacked Layout

```tsx
<DescriptionBlock
  title="Investment Portfolio"
  eyebrow="Q2 2026"
  description="Diversified portfolio with exposure to technology and healthcare sectors."
  layout="stacked"
  metadata={[
    { label: 'Total Value', value: '$285,000' },
    { label: 'ROI', value: '+8.3%' },
  ]}
/>
```

### Split Layout

```tsx
<DescriptionBlock
  title="Company Profile"
  subtitle="Acme Financial Services"
  description="Leading provider of digital banking solutions."
  layout="split"
  metadata={[
    { label: 'Founded', value: '2018' },
    { label: 'Employees', value: '340' },
    { label: 'Funding', value: '$12M Series B' },
  ]}
/>
```

## Visual Variants

### Default

Standard card with border and shadow.

```tsx
<DescriptionBlock title="Quick Overview" variant="default" />
```

### Soft

Subtle background with softer borders.

```tsx
<DescriptionBlock title="Quick Overview" variant="soft" />
```

### Panel

Elevated panel with stronger shadow.

```tsx
<DescriptionBlock title="Premium Account" variant="panel" />
```

### Glass

Glassmorphism effect for modern aesthetics.

```tsx
<DescriptionBlock title="Premium Account" variant="glass" />
```

## API

### Props

| Prop              | Type                              | Default      | Description                         |
| ----------------- | --------------------------------- | ------------ | ----------------------------------- |
| `title`           | `ReactNode`                       | -            | Main title (required)               |
| `eyebrow`         | `ReactNode`                       | -            | Eyebrow text above title            |
| `subtitle`        | `ReactNode`                       | -            | Subtitle below title                |
| `description`     | `ReactNode`                       | -            | Main description text               |
| `badges`          | `ReactNode[]`                     | -            | Badge elements to display           |
| `metadata`        | `DescriptionMetadataItem[]`       | -            | Metadata items with label/value     |
| `metadataColumns` | `1 \| 2 \| 3`                     | `2`          | Number of columns for metadata grid |
| `media`           | `ReactNode`                       | -            | Media content (images, charts)      |
| `actions`         | `ReactNode`                       | -            | Action buttons                      |
| `footer`          | `ReactNode`                       | -            | Footer content                      |
| `layout`          | `'stacked' \| 'split'`            | `'stacked'`  | Content layout                     |
| `variant`         | `'default' \| 'soft' \| 'panel' \| 'glass'` | `'default'` | Visual style |
| `align`           | `'start' \| 'center'`             | `'start'`    | Text alignment                      |
| `className`       | `string`                          | -            | Additional CSS classes              |

### DescriptionMetadataItem

| Prop       | Type        | Description              |
| ---------- | ----------- | ------------------------ |
| `label`    | `ReactNode` | Label text (uppercase)   |
| `value`    | `ReactNode` | Value text               |
| `icon`     | `ReactNode` | Optional icon            |
| `hint`     | `ReactNode` | Helper hint text         |

## Examples

### Centered Layout with Actions

```tsx
<DescriptionBlock
  title="Pending Approvals"
  description="Review and approve pending transactions."
  metadata={[
    { label: 'Today', value: '+$340' },
  ]}
  align="center"
  footer={<p className="text-sm text-text-tertiary">3 items pending review</p>}
/>
```

### With Badges

```tsx
import { Badge } from '@/components/ui/Badge';

<DescriptionBlock
  title="Active Project"
  badges={[<Badge variant="primary">Active</Badge>, <Badge variant="default">v2.4</Badge>]}
/>
```

### With Media

```tsx
<DescriptionBlock
  title="Analytics Overview"
  media={<img src="/chart.png" alt="Analytics" />}
/>
```

## Notes

- Uses Framer Motion for entrance animations (300ms)
- Supports dark mode via design tokens
- Responsive: collapses to single column on mobile
- Layout switches from stacked to split at `lg` breakpoint
- All props extend HTML section element attributes