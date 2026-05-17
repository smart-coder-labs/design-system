# BehavioralAuthSimulator

> **v1.0.19** · stable

A component that simulates behavioral authentication analysis for KYC (Know Your Customer) flows. Displays a multi-step verification animation showing factors like location, device, biometrics, and behavioral patterns.

## Installation

```bash
import { BehavioralAuthSimulator } from '@/components/ui/BehavioralAuthSimulator';
```

## Basic Usage

```tsx
import { BehavioralAuthSimulator } from '@/components/ui/BehavioralAuthSimulator';

<BehavioralAuthSimulator 
  duration={3000}
  onComplete={() => console.log('Authentication complete')}
/>
```

## Custom Duration (Fast)

```tsx
<BehavioralAuthSimulator 
  duration={1500}
  analyzingText="Verificando identidad..."
  successText="Acceso autorizado"
/>
```

## Extended Analysis

```tsx
<BehavioralAuthSimulator 
  duration={8000}
  analyzingText="Analizando patrones de comportamiento avanzados con machine learning..."
  successText="Perfil conductual verificado al 100%"
/>
```

## Minimal Mode

```tsx
<BehavioralAuthSimulator 
  duration={2500}
  analyzingText="Autenticando..."
  successText="✓ Listo"
/>
```

## With Callback

```tsx
<BehavioralAuthSimulator 
  duration={3000}
  onComplete={() => {
    // Navigate to dashboard, set auth state, etc.
    router.push('/dashboard');
  }}
/>
```

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `analyzingText` | `string` | `'Protegiendo tu sesión silenciosamente...'` | Text shown during analysis |
| `successText` | `string` | `'Identidad confirmada por comportamiento'` | Text shown on completion |
| `duration` | `number` | `3000` | Total animation duration in ms |
| `onComplete` | `() => void` | - | Callback when simulation completes |
| `className` | `string` | - | Additional classes |

## Verification Factors

The component checks these behavioral factors (displayed in order):

1. **Ubicación Geográfica** (Geographic Location) - MapPin icon
2. **Dispositivo de Confianza** (Trusted Device) - Smartphone icon
3. **Biometría de Tecleo** (Keystroke Biometrics) - Fingerprint icon
4. **Patrón de Navegación** (Navigation Pattern) - Activity icon
5. **Horario Habitual** (Usual Schedule) - Clock icon

## Animation Flow

1. **Analyzing State**: 
   - Pulsing shield icon
   - Progress indicator cycling through each factor
   - Active factor highlighted in blue

2. **Success State**:
   - Green checkmark animation
   - All factors show green checkmarks
   - Success text displayed

## Accessibility

- Color is not the only indicator (icons and text provide context)
- Screen readers can access the status updates
- Uses semantic HTML elements

## Notes

- Uses AnimatePresence for smooth state transitions
- Uses Framer Motion for icon and list animations
- Auto-cycles through checks based on duration divided by number of factors
- Supports dark mode via CSS custom properties
- Designed for KYC/verification flows in fintech applications