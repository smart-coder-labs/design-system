# Arquitectura del Design System

## 1. Estructura de Archivos

### Componentes Grandes (>300 líneas)

Los componentes muy grandes se distribuyen en múltiples archivos para mejor mantenibilidad:

```
components/ui/
├── ActivityMonitor/
│   ├── ActivityMonitor.tsx       # Root component
│   ├── ActivityMonitor.types.ts  # Interfaces
│   ├── ActivityMonitor.tabs.tsx  # Tab components
│   ├── ActivityMonitor.metrics.tsx
│   ├── ActivityMonitor.processes.tsx
│   └── index.ts                  # Barrel export
├── Stepper/                      # 1331 líneas (el más grande)
├── Calendar/                     # 707 líneas
├── DataGrid/                     # 659 líneas
├── KanbanBoard/                  # 636 líneas
├── DatePicker/                   # 580 líneas
├── Select/                       # 522 líneas
├── ContextMenu/                  # 466 líneas
└── AchTransactionsVisualizer/    # 438 líneas
```

### Estructura de Archivos por Componente

Cada componente, sin importar su tamaño, debe seguir esta estructura de separación de responsabilidades:

```
components/ui/Calendar/
├── Calendar.tsx              # Root component (entry point)
├── Calendar.types.ts         # Todas las interfaces y tipos
├── Calendar.context.tsx     # Contextos (si hay estado compartido)
├── Calendar.utils.ts        # Funciones helper (format, validation, etc.)
├── Calendar.grid.tsx        # Subcomponentes específicos (MonthGrid)
├── Calendar.header.tsx      # Subcomponentes (MonthNav)
├── Calendar.day.tsx         # Subcomponentes (DayCell)
├── Calendar.styles.ts       # cva variants (opcional, si es complejo)
└── index.ts                 # Barrel export
```

### Regla de Separación (siempre aplica)

| Responsabilidad | Archivo | Ejemplo |
|-----------------|---------|---------|
| Tipos/Interfaces | `.types.ts` | `CalendarProps`, `DateInfo` |
| Estado compartido | `.context.tsx` | `CalendarContext` |
| Funciones helper | `.utils.ts` | `formatDate()`, `getMonthDays()` |
| Subcomponentes | `.{nombre}.tsx` | `CalendarGrid`, `CalendarHeader` |
| Estilos cva | `.styles.ts` | `calendarVariants` |
| Componente principal | `{Component}.tsx` | Entry point |

### Criterios de División por Tamaño

| Líneas | Acción |
|--------|--------|
| <150 | Un solo archivo okay |
| 150-300 | Separar `.types.ts` obligatoriamente |
| >300 | Carpeta completa con todos los archivos separados |

### Archivos Mock (Datos de Prueba)

Para cada componente, se puede crear un archivo de datos mock:

```
components/ui/Calendar/
├── Calendar.tsx              # Componente
├── Calendar.types.ts         # Tipos (si el componente no los tiene)
├── Calendar.mock.ts          # Datos mock de ejemplo
├── Calendar.styles.ts        # Estilos cva
├── Calendar.utils.ts         # Utilidades
└── index.ts                  # Barrel export
```

**Estructura de Calendar.mock.ts:**
```ts
export const mockEvents: CalendarEvent[] = [
    { id: '1', date: new Date(), title: 'Reunión', color: 'blue' },
    { id: '2', date: new Date(), title: 'Entrega', color: 'green' },
];

export const mockDates = {
    min: new Date('2024-01-01'),
    max: new Date('2024-12-31'),
};
```

### Backward Compatibility

- Los imports funcionan desde la carpeta: `import { Calendar } from './components/ui/Calendar'`
- El index.ts re-exporta todo automáticamente

---

## Componentes con Arquitectura Aplicada (Batches 1-2)

### Resumen de Carpetas Creadas

Se procesaron 17 componentes con estructura de carpeta:

| Carpeta | Archivos | Estado |
|---------|----------|--------|
| **Calendar/** | types, styles, constants, utils, mock, tsx, index | ✅ Completo |
| **ActivityMonitor/** | types, utils, tsx, index | ✅ |
| **Accordion/** | types, styles, utils, tsx, index | ✅ |
| **AIThinkingIndicator/** | types, styles, tsx, index | ✅ |
| **AccessibleHighContrastMode/** | types, styles, tsx, index | ✅ |
| **ActivityFeed/** | types, tsx, index | ✅ Limpiado |
| **Badge/** | types, tsx, index | ✅ Limpiado |
| **Button/** | types, tsx, index | ✅ Limpiado |
| **AddressSelector/** | types, tsx, index | ⚠️ Tipos duplicados |
| **AudioPlayer/** | types, tsx, index | ⚠️ Tipos duplicados |
| **BalanceChart/** | types, tsx, index | ⚠️ Tipos duplicados |
| **BankAccountCard/** | types, tsx, index | ⚠️ Tipos duplicados |
| **BarcodeGenerator/** | types, tsx, index | ⚠️ Tipos duplicados |
| **BiometricPrompt/** | types, tsx, index | ⚠️ Tipos duplicados |
| **BottomNavigation/** | types, tsx, index | ⚠️ Tipos duplicados |
| **Card/** | types, tsx, index | ⚠️ Tipos duplicados |

### Pendientes (sin carpeta)

Componentes que no fueron procesados en Batches 1-2:
- Alert, Avatar, AvatarGroup, AssetAllocationChart, AssetPriceTicker, Blockquote, Breadcrumb, Callout, Caption, y otros

### Nota sobre tipos duplicados

Algunos archivos .tsx aún contienen exports de tipos que duplican los de .types.ts. Esto no rompe la funcionalidad pero genera warnings de TypeScript. Ejemplo:
```tsx
// En Component.tsx (duplicado)
export interface ComponentProps { }

// En Component.types.ts (original)
export interface ComponentProps { }
```

Para limpiar: quitar los exports duplicados del .tsx y dejar solo el import desde .types.ts.

### Estructura de carpeta creada

```
components/ui/ActivityMonitor/
├── ActivityMonitor.tsx        # Componente principal
├── ActivityMonitor.types.ts   # Interfaces
├── ActivityMonitor.utils.ts   # Funciones helper
└── index.ts                   # Barrel export

components/ui/Accordion/
├── Accordion.tsx             # Componente principal
├── Accordion.types.ts        # Interfaces
├── Accordion.styles.ts       # cva variants
├── Accordion.utils.ts        # Funciones helper
└── index.ts                  # Barrel export
```

---

## 2. Patrón de Componentes (Compound Components)

### Reglas del Proyecto

Todos los componentes deben seguir:

1. **`"use client"`** obligatorio al inicio
2. **React.forwardRef** en root y todos los subcomponentes
3. **displayName** en cada forwardRef
4. **cva variants** cuando hay variants visuales (size, variant, etc.)
5. **cn()** para todas las combinaciones de className
6. **Zero hardcoded data** - todo contenido via props
7. **CSS tokens** - usar tokens de globals.css en lugar de valores hardcodeados

### Cuándo Separar Archivos

#### Regla General

| Qué | Cuándo Separar |
|-----|-----------------|
| **Tipos** (.types.ts) | Siempre - para reuse y claridad |
| **Estilos cva** (.styles.ts) | Solo si son complejos (>50 líneas) |
| **Utils** (.utils.ts) | Solo si hay funciones reutilizables |
| **Context** (.context.tsx) | Solo si hay estado compartido complejo |

### Compound Components: Reglas de Diseño

Para **Compound Components** (`<Select>`, `<SearchInput>`, etc.), la regla de tamaño cambia. Aquí la proximidad y el acoplamiento conceptual son más importantes que el tamaño del archivo.

#### 🛑 MANTENER en el mismo archivo (Cohesión Local)

Un Compound Component debería nacer y vivir en un solo archivo. Solo muévelo si violate alguna regla de excepción.

**Regla 1: Comparten contexto estricto (`useContext`)**
- Si los subcomponentes dependen 100% del Contexto del padre, déjalos juntos.
- Ver de un vistazo qué provee el Context facilita el mantenimiento.

**Regla 2: JSX puramente semántico**
- Si subcomponentes como `<Card.Header>` solo añaden clases de Tailwind o etiquetas HTML estructurales, **nunca los separes**.
- Mover un componente de 5 líneas genera *file drilling* innecesario.

#### 🚀 MOVER a nuevos archivos

**Regla 3: Estado complejo independiente**
- Si un subcomponente tiene múltiples `useState`, `useRef`, o `useEffect` independientes del estado global, muévelo.

**Regla 4: Librerías externas pesadas**
- Si un subcomponente requiere librerías que el resto no necesita (ej. `react-markdown`), sepáralo.
- Permite *Lazy Loading* para optimizar bundle.

**Regla 5: Reutilización fuera del Padre**
- Si un subcomponente podría ser útil fuera del contexto del Compound Component, debe ser independiente.
- Ejemplo: `<Table.Avatar>` usado también en `<Navbar.Avatar>` → extraer a `/Avatar.tsx`.

**Regla 6: Archivo supera ~300 líneas de código denso**
- Si el archivo supera las 300-400 líneas, la legibilidad sufre.
- Estrategia: Crear carpeta dedicada y dividir ahí.

#### Estructura Recomendada

**Componente Simple (<300 líneas):**
```
Component/
├── Component.tsx        # Todo junto (tipos en .types.ts)
├── Component.types.ts   # Tipos siempre separados
└── index.ts
```

**Componente Complejo (>300 líneas):**
```
Component/
├── index.ts              # Exporta todo unificado
├── Component.tsx         # Padre + Contexto
├── ComponentTrigger.tsx # Subcomponente separado
├── ComponentContent.tsx # Subcomponente separado
└── Component.types.ts    # Tipos
```

### Estructura de Compound Component (en archivo principal)

```tsx
'use client';

import * as React from 'react';
import { cn } from '../../lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// ─── Variants (cva) ─────────────────────────────────────────────────────────
const componentVariants = cva('base-classes', {
  variants: {
    variant: { default: '...', ... },
    size: { sm: '...', md: '...', lg: '...' },
  },
  defaultVariants: { variant: 'default', size: 'md' },
});

// ─── Context (si hay estado compartido) ───────────────────────────────────────
interface ComponentContextValue { /* shared state */ }
const ComponentContext = React.createContext<ComponentContextValue | null>(null);

function useComponentContext(name: string) {
  const ctx = React.useContext(ComponentContext);
  if (!ctx) throw new Error(`<${name}> must be used within <Component>`);
  return ctx;
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export interface ComponentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof componentVariants> {
  // content via props - zero hardcoded
}

const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(componentVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </div>
  )
);
Component.displayName = 'Component';

// ─── Subcomponents (en mismo archivo si no es complejo) ────────────────────────
const ComponentHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('...', className)} {...props} />
));
ComponentHeader.displayName = 'ComponentHeader';

// ─── Attach to root (Compound Component Pattern) ─────────────────────────────
type ComponentCompound = typeof Component & {
  Header: typeof ComponentHeader;
  Body: typeof ComponentBody;
  Footer: typeof ComponentFooter;
};
const Compound = Component as ComponentCompound;
Compound.Header = ComponentHeader;
// ...

export { Compound as Component };
```

---

## 3. Tokens CSS (globals.css)

### Colores

```css
/* Background */
--color-bg-primary: #ffffff;
--color-bg-secondary: #f5f5f7;
--color-bg-tertiary: #e8e8ed;

/* Surface */
--color-surface-primary: #ffffff;
--color-surface-secondary: #f5f5f7;

/* Text */
--color-text-primary: #1d1d1f;
--color-text-secondary: #6e6e73;
--color-text-tertiary: #86868b;

/* Border */
--color-border-primary: rgba(0, 0, 0, 0.08);

/* Accent */
--color-accent-blue: #007aff;
--color-accent-blue-hover: #0051d5;

/* Status */
--color-status-success: #34c759;
--color-status-warning: #ff9500;
--color-status-error: #ff3b30;
--color-status-info: #5ac8fa;
```

### Regla: No usar valores hardcodeados

❌ **Incorrecto:**
```tsx
color = 'rgb(0, 122, 255)'
color = '#007aff'
```

✅ **Correcto:**
```tsx
color = 'var(--color-accent-blue)'
```

---

## 4. Convenciones de Nomenclatura

| Tipo | Convención | Ejemplo |
|------|------------|---------|
| Componentes | PascalCase | `Accordion`, `Select` |
| Props interfaces | `{Component}Props` | `AccordionProps` |
| Subcomponentes | PascalCase | `AccordionTrigger` |
| Types/Interfaces | PascalCase | `ActivityType` |
| Funciones helper | camelCase | `formatCurrency` |

---

## 5. Testing

Cada componente refactorizado debe tener:
- `components/ui/{Component}.test.tsx`
- Tests para:
  - Renderizado sin errores
  - Todas las variants
  - className override
  - Props de contenido (ningún hardcoded)
  - Accesibilidad básica

---

## 6. CLI y Registro de Skills

### Instalación de componentes

Después de crear o modificar un componente, ejecuta el CLI para detectar e instalar dependencias:

```bash
npx @smart-coder-labs/apple-design-system add [ComponentName]
```

Ejemplo:
```bash
npx @smart-coder-labs/apple-design-system add SearchInput
# Output:
# ℹ Detected dependency: Spinner
# ℹ Detected dependency: Label
# ✔ Installed SearchInput
# ✔ Installed Spinner
# ✔ Installed Label
```

### Actualización del Skill Registry

Después de cada cambio significativo (nuevo componente, refactorización, nuevos patterns), actualiza el registry:

1. Ejecuta `/skill-registry` o usa la skill `skill-registry`
2. Esto actualiza los compact rules del proyecto con los nuevos patterns

### Flujo completo

```
1. Crear/modificar componente
2. npm run build (verificar TypeScript)
3. npx @smart-coder-labs/apple-design-system add [Component] (instalar deps)
4. /skill-registry (actualizar registry)
5. Commit
```

---

## 7. Próximos Batches

### Batch 2 (próximo)
BankAccountCard, BarcodeGenerator, BehavioralAuthSimulator, BiometricPrompt, Blockquote, BottomNavigation, Breadcrumb, BreadcrumbTabsHybrid, Button, ButtonWithDropdown, Calendar, Callout, Caption, Card, CardSecurityControls

### Batch 3
CartPreview, CashbackWidget, Chart, ChatBubble, ChatInput, Checkbox, Chip, CodeBlock, Collapsible, Combobox, CommandMenu, CommentThread, ConfirmDialog, ContextMenu, ContextualTrustBadge

### Batch 4
ControlCenterToggles, Counters, CountersListWithChart, CreditLimitManager, CreditScoreSimulator, CurrencyConverterWidget, DataGrid, DatePicker, DateRangePicker, DefinitionList, DescriptionBlock, DeviceList, DiffViewer, Divider, DocScanOverlay