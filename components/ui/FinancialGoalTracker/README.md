# FinancialGoalTracker

> **v1.0.6** · stable

A financial goal progress tracker with animated progress bar, deposit functionality, and confetti celebration on goal completion. Features a polished card design with floating label showing current balance.

## Installation

```bash
# The component is copied to your project with the add cli command
import { FinancialGoalTracker } from '@/components/ui/FinancialGoalTracker';
```

## Basic Usage

```tsx
import { FinancialGoalTracker } from '@/components/ui/FinancialGoalTracker';
import { Plane } from 'lucide-react';

<FinancialGoalTracker 
  goalName="Viaje a Japón"
  targetAmount={50000}
  currentAmount={23500}
  icon={<Plane size={24} />}
  color="blue"
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `goalName` | `string` | `'Viaje a Japón'` | Name of the financial goal |
| `targetAmount` | `number` | `50000` | Target amount to reach |
| `currentAmount` | `number` | `23500` | Current saved amount |
| `icon` | `React.ReactNode` | - | Icon displayed next to goal name |
| `color` | `string` | `'blue'` | Theme color (blue, emerald, violet, etc.) |

## Examples

### Travel Goal

```tsx
<FinancialGoalTracker 
  goalName="Viaje a Japón"
  targetAmount={50000}
  currentAmount={23500}
  color="blue"
  icon={<Plane size={24} />}
/>
```

### Car Down Payment

```tsx
<FinancialGoalTracker 
  goalName="Enganche Auto"
  targetAmount={120000}
  currentAmount={90000}
  color="emerald"
  icon={<Car size={24} />}
/>
```

### Home Down Payment

```tsx
<FinancialGoalTracker 
  goalName="Casa Propia"
  targetAmount={500000}
  currentAmount={75000}
  color="purple"
  icon={<Home size={24} />}
/>
```

### Just Started

```tsx
<FinancialGoalTracker 
  goalName="Fondo de Emergencia"
  targetAmount={30000}
  currentAmount={1500}
  color="yellow"
  icon={<Plane size={24} />}
/>
```

### Almost Complete

```tsx
<FinancialGoalTracker 
  goalName="Curso Profesional"
  targetAmount={15000}
  currentAmount={14250}
  color="blue"
  icon={<GraduationCap size={24} />}
/>
```

### Fully Funded

```tsx
<FinancialGoalTracker 
  goalName="Vacaciones en Cancún"
  targetAmount={25000}
  currentAmount={25000}
  color="emerald"
  icon={<Plane size={24} />}
/>
```

### Long-Term Goal

```tsx
<FinancialGoalTracker 
  goalName="Retiro Adelantado"
  targetAmount={5000000}
  currentAmount={450000}
  color="purple"
/>
```

### Multiple Goals Dashboard

```tsx
<div className="space-y-4">
  <FinancialGoalTracker goalName="Emergency Fund" targetAmount={50000} currentAmount={32000} color="yellow" icon={<PiggyBank size={24} />} />
  <FinancialGoalTracker goalName="Home Down Payment" targetAmount={500000} currentAmount={310000} color="purple" icon={<Home size={24} />} />
  <FinancialGoalTracker goalName="New Car" targetAmount={350000} currentAmount={280000} color="emerald" icon={<Car size={24} />} />
  <FinancialGoalTracker goalName="Europe Trip" targetAmount={80000} currentAmount={12500} color="blue" icon={<Plane size={24} />} />
</div>
```

## Color Variants

Available color values: `'blue'`, `'emerald'`, `'violet'`, `'yellow'`, `'purple'`, `'rose'`, `'indigo'`, `'gray'`, `'red'`, `'pink'`

```tsx
// Red - for debt payoff goals
<FinancialGoalTracker 
  goalName="Debt Payoff"
  targetAmount={25000}
  currentAmount={18750}
  color="red"
  icon={<PiggyBank size={24} />}
/>

// Pink - for wedding/dress goals
<FinancialGoalTracker 
  goalName="Dream Wedding Dress"
  targetAmount={60000}
  currentAmount={42000}
  color="pink"
  icon={<Heart size={24} />}
/>
```

## Notes

- Animated progress bar with shimmer effect
- Floating balance label follows progress position
- "Abonar" (Deposit) button adds 1500 to balance (demo)
- "Auto-ahorro" (Auto-save) toggle button with "Activo" badge
- Confetti animation triggers when goal is reached
- Color theme affects icon background, progress bar, and text
- Uses canvas-confetti for celebration effect
- Progress percentage displayed as "X% completado"
- Supports dark mode via CSS tokens
- Spring physics for smooth animations