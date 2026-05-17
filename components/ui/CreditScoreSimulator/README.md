# CreditScoreSimulator

> **v1.0.10** · stable

An interactive credit score simulator that allows users to explore how different financial actions impact their credit score. Displays score on a semi-circular gauge with category labels.

## Installation

```bash
import { CreditScoreSimulator } from '@/components/ui/CreditScoreSimulator';
```

## Basic Usage

```tsx
<CreditScoreSimulator initialScore={650} />
```

## Excellent Score

```tsx
<CreditScoreSimulator initialScore={780} />
```

## Poor Score

```tsx
<CreditScoreSimulator initialScore={520} />
```

## Near Perfect

```tsx
<CreditScoreSimulator initialScore={830} />
```

## Minimum Score

```tsx
<CreditScoreSimulator initialScore={300} />
```

## Interactive Mode

Users can click on action buttons to see how they would impact their score:

```tsx
<CreditScoreSimulator initialScore={680} />
```

The component displays:
- **Positive actions**: Pay on time (+15 pts), Increase limit (+8 pts)
- **Negative actions**: New auto loan (-12 pts), 30-day delay (-45 pts)

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initialScore` | `number` | `650` | Starting credit score (300-850) |

## Score Ranges

| Range | Category | Color |
|-------|----------|-------|
| 750-850 | Excelente | Green |
| 680-749 | Bueno | Blue |
| 620-679 | Regular | Yellow/Orange |
| 550-619 | Malo | Red |
| 300-549 | Pobre | Red |

## Interactive Actions

The simulator includes four preset actions:
1. **Pagar a tiempo (3 meses)** - +15 points (positive)
2. **Aumentar Límite (+20%)** - +8 points (positive)
3. **Nuevo Préstamo Auto** - -12 points (negative)
4. **Atraso de 30 días** - -45 points (negative)

## Notes

- Score is clamped between 300 and 850
- Uses SVG for the animated gauge visualization
- Framer Motion handles the gauge fill animation with spring physics
- Action buttons show impact on hover
- Reset button appears after any simulation
- Dark mode support via design tokens
- Fully accessible with keyboard navigation