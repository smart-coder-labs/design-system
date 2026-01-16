# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is the **Apple Creative Design System** (`@smart-coder-labs/apple-design-system`), a comprehensive React component library inspired by macOS, iOS, and VisionOS design patterns. The system combines Radix UI primitives with Framer Motion animations and Tailwind CSS styling to deliver accessible, animated, and minimalist components.

**Key technologies:**
- React 19+ with TypeScript 5+
- Radix UI for accessible component primitives
- Framer Motion for fluid animations
- Tailwind CSS 3+ with custom preset
- Storybook for component documentation

## Commands

### Development

```bash
# Clean build artifacts
npm run clean

# Type checking only
npm run type-check

# Build the package (compiles TypeScript to JavaScript in dist/)
npm run build

# Lint the codebase
npm run lint

# Run Storybook for component development/documentation
npm run storybook

# Build Storybook for static hosting
npm run build-storybook

# Prepare for publishing (runs automatically before npm publish)
npm run prepublishOnly
```

### Testing Components

Since this is a component library, testing is primarily done through Storybook. Run `npm run storybook` and navigate to http://localhost:6006 to view and test all components interactively.

## Architecture

### Package Structure

This is a **library package** designed to be consumed by other projects. It's published to GitHub Package Registry at `@smart-coder-labs/apple-design-system`.

**Key source files:**
- `index.ts` - Main export file for all components (source)
- `globals.css` - Global styles (source)
- `tailwind.preset.ts` - Tailwind configuration preset (source)
- `tokens.ts` - Design tokens (colors, typography, spacing, etc.)

**Build output (dist/):**
- `dist/index.js` - Compiled main entry point with all components
- `dist/index.d.ts` - TypeScript type definitions
- `dist/globals.css` - Processed global styles
- `dist/tailwind.preset.js` - Compiled Tailwind preset
- `dist/tokens.js` - Compiled design tokens
- `dist/components/` - All compiled component files

### Component Philosophy

All components follow the **Apple Minimal** design philosophy documented in `AGENT.md`:

1. **Radix-first approach**: Always check if Radix UI provides a primitive for the component. If yes, extend it with Apple-style styling. If no, build from scratch.

2. **Framer Motion animations**: Components use subtle, smooth animations (150-260ms transitions, spring physics for interactive elements).

3. **Dark mode support**: All components work in both light and dark modes using Tailwind's `dark:` classes and design tokens.

4. **Accessibility**: Components follow WCAG 2.1 AA standards with proper ARIA labels, keyboard navigation, and focus management.

5. **Composable API**: Components expose sub-components for flexible composition (e.g., `Card`, `CardHeader`, `CardContent`).

### Design Tokens System

The `tokens.ts` file defines the complete design language:

- **Colors**: Separate palettes for light/dark modes (background, surface, text, border, accent, status)
- **Typography**: Font families (Inter/SF Pro), sizes, weights, line heights, letter spacing
- **Spacing**: Consistent spacing scale from 0 to 128
- **Radius**: Border radius values (xs to 2xl)
- **Shadows**: Elevation system with light and dark variants
- **Motion**: Duration and easing functions for animations
- **Z-index**: Layering system for overlays, modals, etc.

### Tailwind Preset Integration

**Critical for consumers:** The package exports a Tailwind preset that MUST be used in consuming projects. This preset:

- Extends Tailwind with all design tokens as utility classes
- Configures dark mode as class-based
- Adds custom animations and keyframes
- Maps token values to Tailwind's theme system

Consumers configure it in `tailwind.config.js`:

```javascript
import preset from '@smart-coder-labs/apple-design-system/tailwind.preset';

export default {
  presets: [preset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    // IMPORTANT: Include the compiled components from dist/
    './node_modules/@smart-coder-labs/apple-design-system/dist/**/*.js',
  ],
};
```

**Note:** The preset is compiled to `dist/tailwind.preset.js` during build and can be imported directly from the package.

### Component Structure Pattern

All components follow a consistent structure:

```tsx
'use client'; // For Next.js compatibility

import { motion } from 'framer-motion';
import * as RadixComponent from '@radix-ui/react-*'; // If using Radix
import { cn } from '../../lib/utils';; // Utility for className merging
import { tokens } from '../tokens'; // Design tokens

// 1. Type definitions
export interface ComponentProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  // ...
}

// 2. Style variants (Tailwind classes)
const variants = {
  primary: 'bg-accent-blue text-white',
  secondary: 'bg-surface text-text-primary',
};

// 3. Component implementation
export const Component = ({ variant, size, className, ...props }: ComponentProps) => {
  return (
    <motion.div
      className={cn(baseStyles, variants[variant], className)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      {...props}
    />
  );
};
```

### Utility Functions

**`cn()` function** (`lib/utils.ts`): Merges Tailwind classes using `clsx` and `tailwind-merge`. Always use this for className composition to avoid conflicts.

### Storybook Setup

Stories are located in:
- `stories/` - Organized story files
- `components/**/*.stories.tsx` - Co-located with components

Each component should have comprehensive stories showing:
- All variants and sizes
- Interactive states (hover, focus, disabled, loading)
- Real-world use cases (see `AGENT.md` for examples)
- Playground for experimentation

## Creating New Components

When adding a new component, follow this workflow:

1. **Check Radix UI**: Visit https://www.radix-ui.com/primitives/docs/components to see if a primitive exists.

2. **Create component file**: `components/ComponentName.tsx` with the standard structure.

3. **Use design tokens**: Never hardcode colors, spacing, or typography. Always reference `tokens`.

4. **Add Framer Motion**: Include subtle animations appropriate for the component (fade, scale, slide).

5. **Support dark mode**: Use `dark:` classes or token-based classes that adapt automatically.

6. **Export from index.ts**: Add the component export to the main index file.

7. **Create stories**: Add comprehensive stories showing all variants and use cases.

8. **Follow accessibility**: Ensure keyboard navigation, focus management, and ARIA attributes.

Refer to `AGENT.md` for the complete checklist and detailed guidelines.

## Important Notes

- **Build process**: The package compiles TypeScript source to JavaScript during build (`npm run build`). The compiled output is in the `dist/` directory. Only the `dist/` folder is published to npm.

- **Development vs Production**: When developing the library, work with source files in `components/`, `lib/`, etc. Consumers import from the compiled `dist/` files.

- **Type definitions**: TypeScript declarations (`.d.ts` files) are automatically generated alongside JavaScript files during build.

- **Peer dependencies**: React 19+ is a peer dependency. Ensure consuming projects have compatible React versions.

- **Path aliases**: The package uses `@/*` path aliases mapped to the root directory (for development only).

- **GitHub Package Registry**: This package is published to GitHub's registry, not npm. Authentication is required for installation (see `QUICKSTART.md`).

- **Migration guide**: When updating from older versions, check `MIGRATION.md` for breaking changes (especially v1.0.3+ which introduced the Tailwind preset requirement).

- **Publishing**: Always run `npm run build` before publishing. The `prepublishOnly` script does this automatically.

## Documentation Files

- `README.md` - Main documentation and overview
- `QUICKSTART.md` - Installation and setup guide
- `AGENT.md` - Component creation guidelines for AI agents
- `DESIGN_DECISIONS.md` - Design philosophy and rationale
- `EXAMPLES.md` - Code examples for all components
- `MIGRATION.md` - Version migration guide
- `PROJECT_STRUCTURE.md` - File organization overview
