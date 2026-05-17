# ImmersiveHero

> **v1.0.4** · stable

A full-screen hero section with parallax scrolling effects, slow-scale background animation, and staggered text entrance animations.

## Installation

```bash
# The component is copied to your project with the add cli command
import { ImmersiveHero } from '@/components/ui/ImmersiveHero';
```

## Basic Usage

```tsx
import { ImmersiveHero } from '@/components/ui/ImmersiveHero';

<ImmersiveHero
  title="Smart Finance"
  subtitle="Take control of your financial future with intelligent tools."
  backgroundImage="https://example.com/hero.jpg"
/>
```

## Minimal Version

```tsx
<ImmersiveHero
  title="Wealth"
  backgroundImage="https://example.com/background.jpg"
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Main heading text |
| `subtitle` | `string` | - | Optional subtitle text |
| `backgroundImage` | `string` | - | Background image URL |
| `className` | `string` | - | Additional CSS classes |
| `...props` | `HTMLDivElement` | - | Standard div element props |

## Examples

### With Long Subtitle

```tsx
<ImmersiveHero
  title="Enterprise Banking"
  subtitle="Comprehensive financial solutions designed for modern businesses. Secure, scalable, and compliant with global standards."
  backgroundImage="https://example.com/banking.jpg"
/>
```

### Landing Page Hero

```tsx
<ImmersiveHero
  title="Crypto Vault"
  subtitle="Secure self-custody with multi-sig wallets and DeFi integrations."
  backgroundImage="https://example.com/crypto.jpg"
/>
```

### Very Long Title

```tsx
<ImmersiveHero
  title="International Wealth Management & Private Banking for High-Net-Worth Individuals"
  subtitle="Tailored financial strategies for those who demand excellence."
  backgroundImage="https://example.com/wealth.jpg"
/>
```

## Notes

- Full viewport height (`h-screen`) by default
- Background image scales from 1.1 to 1 on initial load (premium effect)
- Parallax scroll effect moves background slower than foreground
- Title uses spring physics animation (stiffness: 100, damping: 20)
- Subtitle fades in with delay (0.4s) after title
- Dark overlay (40% opacity) ensures text readability
- Responsive: font sizes adjust for mobile (`text-5xl md:text-7xl`)
- Use high-quality images with the `q=80` parameter for optimal loading