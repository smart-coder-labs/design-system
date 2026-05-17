# PromptSuggestionChips

> **v1.0.0** · stable

A horizontal list of tappable suggestion chips designed for AI prompting interfaces. Each chip displays a suggestion with an optional icon and triggers an action when clicked.

## Installation

```bash
# The component is copied to your project with the add cli command
import { PromptSuggestionChips } from '@/components/ui/PromptSuggestionChips';
```

## Basic Usage

```tsx
import { PromptSuggestionChips } from '@/components/ui/PromptSuggestionChips';

const suggestions = [
  { id: '1', text: 'Explain quantum computing', icon: <Sparkles /> },
  { id: '2', text: 'Write a Python function', icon: <Code /> },
  { id: '3', text: 'Generate an image', icon: <Image /> },
  { id: '4', text: 'Summarize this document', icon: <FileText /> },
];

<PromptSuggestionChips
  suggestions={suggestions}
  onSuggestionClick={(suggestion) => console.log(suggestion.text)}
/>
```

## API

### Props

| Prop                | Type                              | Default   | Description                                    |
| ------------------- | --------------------------------- | --------- | ---------------------------------------------- |
| `suggestions`       | `PromptSuggestion[]`              | -         | Array of suggestion objects                    |
| `onSuggestionClick` | `(suggestion: PromptSuggestion) => void` | - | Callback when a suggestion is clicked |
| `maxVisible`        | `number`                          | `4`       | Maximum number of visible chips                |
| `variant`           | `'default' \| 'compact'`          | `'default'` | Size variant for the chips              |
| `className`         | `string`                          | -         | Additional CSS classes                         |

### PromptSuggestion

| Prop    | Type         | Description                    |
| ------- | ------------ | ------------------------------ |
| `id`    | `string`     | Unique identifier              |
| `text`  | `string`     | Display text for the chip      |
| `icon`  | `ReactNode`  | Optional icon (replaces default) |

## Examples

### Default (4 visible)

```tsx
<PromptSuggestionChips
  suggestions={[
    { id: '1', text: 'Explain quantum computing' },
    { id: '2', text: 'Write a Python function' },
    { id: '3', text: 'Generate an image' },
    { id: '4', text: 'Summarize this document' },
  ]}
  onSuggestionClick={(s) => console.log(s.text)}
/>
```

### With Custom Icons

```tsx
<PromptSuggestionChips
  suggestions={[
    { id: '1', text: 'Get creative ideas', icon: <Lightbulb className="text-yellow-500" /> },
    { id: '2', text: 'Write code', icon: <Code className="text-green-500" /> },
    { id: '3', text: 'Create image', icon: <Image className="text-purple-500" /> },
    { id: '4', text: 'Calculate', icon: <Calculator className="text-blue-500" /> },
  ]}
  onSuggestionClick={(s) => console.log(s.text)}
/>
```

### Compact Variant

```tsx
<PromptSuggestionChips
  suggestions={[
    { id: '1', text: 'Help' },
    { id: '2', text: 'Code' },
    { id: '3', text: 'Write' },
    { id: '4', text: 'Analyze' },
  ]}
  variant="compact"
  onSuggestionClick={(s) => console.log(s.text)}
/>
```

### Limited Visibility

```tsx
<PromptSuggestionChips
  suggestions={[
    { id: '1', text: 'Explain quantum computing' },
    { id: '2', text: 'Write a Python function' },
    { id: '3', text: 'Generate an image' },
    { id: '4', text: 'Summarize this document' },
    { id: '5', text: 'Translate text' },
    { id: '6', text: 'Analyze this data' },
  ]}
  maxVisible={3}
  onSuggestionClick={(s) => console.log(s.text)}
/>
```

### Long Text Suggestions

```tsx
<PromptSuggestionChips
  suggestions={[
    { id: '1', text: 'Help me understand the fundamental principles of machine learning' },
    { id: '2', text: 'Write a comprehensive guide to React hooks and their use cases' },
    { id: '3', text: 'Generate a detailed business plan for a tech startup' },
  ]}
  onSuggestionClick={(s) => console.log(s.text)}
/>
```

## Notes

- Uses Framer Motion for staggered entrance animations (50ms delay per chip)
- Hover animation scales chips to 1.05, tap animation scales to 0.95
- Default icon is a Sparkles icon (from lucide-react)
- Empty suggestions array returns null (renders nothing)
- Chips are fully accessible with proper button semantics
- Supports dark mode via design tokens
- Scrollable horizontally when chips exceed container width