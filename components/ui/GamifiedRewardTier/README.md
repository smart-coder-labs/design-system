# GamifiedRewardTier

> **v1.0.16** · stable

A gamified reward tier component displaying user points, current tier, progress to next tier, and active perks. Designed for loyalty programs and fintech applications.

## Installation

```bash
# The component is copied to your project with the add cli command
import { GamifiedRewardTier } from '@/components/ui/GamifiedRewardTier';
```

## Basic Usage

```tsx
import { GamifiedRewardTier } from '@/components/ui/GamifiedRewardTier';

<GamifiedRewardTier
  userName="Alex"
  points={2450}
  currentTier="Silver"
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `userName` | `string` | `"Alex"` | User's name |
| `points` | `number` | `2450` | Current points balance |
| `currentTier` | `'Bronze' \| 'Silver' \| 'Gold' \| 'Platinum'` | `"Silver"` | Current reward tier |

## Tier Thresholds

| Tier | Points Required |
|------|-----------------|
| Bronze | 0 - 999 |
| Silver | 1,000 - 4,999 |
| Gold | 5,000 - 14,999 |
| Platinum | 15,000+ |

## Examples

### Bronze Tier (Entry Level)

```tsx
<GamifiedRewardTier
  userName="Pedro"
  points={350}
  currentTier="Bronze"
/>
```

### Silver Tier

```tsx
<GamifiedRewardTier
  userName="Alex"
  points={2450}
  currentTier="Silver"
/>
```

### Gold Tier

```tsx
<GamifiedRewardTier
  userName="Maria"
  points={12500}
  currentTier="Gold"
/>
```

### Platinum Tier (Max)

```tsx
<GamifiedRewardTier
  userName="Laura"
  points={25000}
  currentTier="Platinum"
/>
```

### Near Promotion

```tsx
<GamifiedRewardTier
  userName="Carlos"
  points={4800}
  currentTier="Silver"
/>
```

## Visual Features

- **Tier Badge**: Icon indicating current tier (Shield, Star, Trophy, Gift)
- **Progress Bar**: Animated bar showing progress to next tier
- **Points Display**: Large formatted number with "Puntos Vida" label
- **Perks List**: Active benefits based on tier level
- **Locked Perks**: Grayed-out perks available at next tier (shown for non-Platinum users)

## Notes

- Uses Framer Motion for animated progress bar
- Gradient backgrounds based on tier color
- Responsive design (max-width recommended: 400px)
- Supports dark mode
- All perks are displayed with visual checkmarks for active status