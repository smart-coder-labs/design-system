# TableOfContents

> **v1.0.33** · stable

A sticky sidebar navigation component that displays document headings with active section highlighting. Automatically scrolls to sections and supports nested heading hierarchies.

## Installation

```tsx
import { TableOfContents } from '@/components/ui/TableOfContents';
```

## Basic Usage

```tsx
<TableOfContents
  headings={[
    { id: 'intro', level: 2, text: 'Introduction', children: [] },
    { id: 'getting-started', level: 2, text: 'Getting Started', children: [] },
    { id: 'installation', level: 3, text: 'Installation', children: [] },
    { id: 'configuration', level: 3, text: 'Configuration', children: [] },
  ]}
  activeId={currentSection}
  onNavigate={setCurrentSection}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `headings` | `HeadingNode[]` | Required | Hierarchical heading data |
| `activeId` | `string \| null` | - | Currently visible heading ID |
| `onNavigate` | `(id: string) => void` | - | Callback when heading is clicked |

### HeadingNode

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique heading identifier |
| `level` | `2 \| 3 \| 4` | Heading level (h2, h3, h4) |
| `text` | `string` | Display text |
| `children` | `HeadingNode[]` | Nested subheadings |

## Examples

### Simple Document

```tsx
<TableOfContents
  headings={[
    { id: 'overview', level: 2, text: 'Overview', children: [] },
    { id: 'features', level: 2, text: 'Features', children: [] },
    { id: 'pricing', level: 2, text: 'Pricing', children: [] },
    { id: 'faq', level: 2, text: 'FAQ', children: [] },
  ]}
  activeId={activeId}
  onNavigate={(id) => setActiveId(id)}
/>
```

### Nested Headings

```tsx
<TableOfContents
  headings={[
    { 
      id: 'getting-started', 
      level: 2, 
      text: 'Getting Started', 
      children: [
        { id: 'installation', level: 3, text: 'Installation', children: [] },
        { id: 'quick-start', level: 3, text: 'Quick Start', children: [] },
      ]
    },
    { 
      id: 'advanced', 
      level: 2, 
      text: 'Advanced', 
      children: [
        { id: 'customization', level: 3, text: 'Customization', children: [] },
        { id: 'plugins', level: 3, text: 'Plugins', children: [] },
      ]
    },
  ]}
  activeId={activeId}
  onNavigate={handleNavigate}
/>
```

## Usage with Intersection Observer

To highlight the active section automatically:

```tsx
useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    },
    { rootMargin: '-20% 0px -60% 0px' }
  );

  document.querySelectorAll('h2, h3, h4').forEach((el) => {
    observer.observe(el);
  });

  return () => observer.disconnect();
}, []);
```

## Notes

- Hidden on smaller screens (lg:block and above)
- Sticky positioning keeps it visible while scrolling
- Respects `prefers-reduced-motion` for scroll behavior
- Supports up to 3 levels of nesting (h2, h3, h4)
- Uses React.memo for performance optimization