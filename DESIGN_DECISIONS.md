# 🎨 Decisiones de Diseño - Apple Design System

Este documento explica las decisiones clave de diseño tomadas en el desarrollo del design system.

---

## 🎯 Filosofía General

### Por qué "Apple-like"

Apple es reconocido mundialmente por su excelencia en diseño. Sus productos (macOS, iOS, VisionOS) establecen el estándar de:

1. **Minimalismo funcional**: Cada elemento tiene un propósito
2. **Elegancia premium**: Atención al detalle en cada píxel
3. **Consistencia**: Experiencia coherente en todos los productos
4. **Accesibilidad**: Diseño inclusivo por defecto

---

## 🎨 Paleta de Colores

### Neutrales

**Light Mode:**
- `#FFFFFF` - Background principal: Limpio y profesional
- `#F5F5F7` - Background secundario: Contraste sutil (3% de diferencia)
- `#1D1D1F` - Texto principal: Negro cálido, no puro (#000)
- `#6E6E73` - Texto secundario: Gris medio con buen contraste

**Dark Mode:**
- `#000000` - Background principal: Negro puro para OLED
- `#1C1C1E` - Background secundario: Gris muy oscuro
- `#FFFFFF` - Texto principal: Blanco puro
- `#98989D` - Texto secundario: Gris claro

**Decisión:** Usar grises cálidos en lugar de fríos para una sensación más humana y menos "digital".

### Acentos

**Light Mode:** `#007AFF` (Azul iOS)
**Dark Mode:** `#0A84FF` (Azul iOS oscuro, más brillante)

**Decisión:** El azul de Apple es icónico y universalmente reconocible. En dark mode, se aumenta la luminosidad para mantener el contraste.

### Estados

- **Success:** `#34C759` (Verde iOS)
- **Warning:** `#FF9500` (Naranja iOS)
- **Error:** `#FF3B30` (Rojo iOS)
- **Info:** `#5AC8FA` (Cyan iOS)

**Decisión:** Usar los colores exactos de iOS para familiaridad y consistencia.

---

## 📐 Tipografía

### Font Family

```
-apple-system, BlinkMacSystemFont, 'Inter', 'SF Pro Display', 'Segoe UI', Roboto, sans-serif
```

**Decisión:**
1. `-apple-system` primero para usar SF Pro en dispositivos Apple
2. `Inter` como fallback premium (similar a SF Pro)
3. Fuentes del sistema como último recurso

### Tamaños

Base: `15px` (0.9375rem)

**Decisión:** 15px es el tamaño base de iOS, perfecto para legibilidad en pantallas modernas.

### Pesos

- Regular: 400
- Medium: 500
- Semibold: 600
- Bold: 700

**Decisión:** Evitar extremos (100, 900) para mantener elegancia.

---

## 🔲 Border Radius

- `md`: 12px - Botones, inputs
- `lg`: 16px - Cards pequeñas
- `xl`: 20px - Cards grandes
- `2xl`: 24px - Modales

**Decisión:** 
- 12px es el estándar de iOS para botones
- Aumentar progresivamente para elementos más grandes
- Nunca usar bordes muy pequeños (<8px) o muy grandes (>24px)

---

## 🌫️ Sombras

### Light Mode

```css
sm: 0 2px 8px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.04)
md: 0 4px 16px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)
lg: 0 8px 32px rgba(0, 0, 0, 0.12), 0 4px 16px rgba(0, 0, 0, 0.06)
```

**Decisión:**
- Usar sombras dobles (una difusa, una nítida) para profundidad realista
- Opacidades muy bajas (4-12%) para sutileza
- Blur progresivo según tamaño

### Dark Mode

Opacidades aumentadas (24-48%) porque las sombras negras necesitan más intensidad en fondos oscuros.

---

## ⚡ Animaciones

### Duraciones

- **Fast:** 160ms - Hover, focus
- **Normal:** 220ms - Transiciones estándar
- **Slow:** 260ms - Modales, overlays

**Decisión:** 
- Basado en estudios de UX de Apple
- 220ms es el "sweet spot" para la mayoría de animaciones
- Nunca más de 300ms (se siente lento)

### Easing

```
cubic-bezier(0.16, 1, 0.3, 1)
```

**Decisión:**
- Curva personalizada tipo Apple
- Inicio lento, aceleración rápida, final suave
- Más natural que `ease-in-out` estándar

### Springs

```typescript
gentle: {
  stiffness: 300,
  damping: 30,
  mass: 0.8,
}
```

**Decisión:**
- Springs para elementos interactivos (botones, switches)
- Bounce mínimo (damping alto) para elegancia
- Mass bajo para respuesta rápida

---

## 💨 Blur y Glass

### Backdrop Blur

- `sm`: 4px
- `md`: 8px
- `lg`: 16px
- `xl`: 24px
- `2xl`: 40px

**Decisión:**
- 20px es el estándar para glass effect
- 40px para overlays de modales (más dramático)
- Nunca menos de 8px (no se nota)

### Glass Effect

```css
background: rgba(255, 255, 255, 0.72);
backdrop-filter: blur(20px);
```

**Decisión:**
- 72% de opacidad: balance entre translucidez y legibilidad
- Inspirado en macOS Big Sur y VisionOS

---

## 📏 Espaciado

Escala: `4px` base

```
1: 4px
2: 8px
3: 12px
4: 16px
6: 24px
8: 32px
```

**Decisión:**
- Múltiplos de 4 para consistencia
- Saltos no lineales (4, 8, 12, 16, 24, 32) para flexibilidad
- 16px (1rem) como unidad base de padding

---

## 🧩 Componentes

### Button

**Altura:**
- Small: 32px (8 * 4)
- Medium: 40px (10 * 4)
- Large: 48px (12 * 4)

**Decisión:** 
- 40px es el mínimo recomendado para touch targets (iOS HIG)
- 48px para CTAs principales

**Hover:**
- Scale: 1.02 (micro-elevación)
- Tap: 0.98 (feedback táctil)

**Decisión:** Animaciones sutiles que no distraen pero dan feedback claro.

### Card

**Padding:**
- Small: 16px
- Medium: 24px
- Large: 32px

**Decisión:** 24px es el estándar de macOS para cards.

**Hover (opcional):**
- Y: -4px (elevación)
- Scale: 1.01 (crecimiento sutil)

**Decisión:** Hover solo cuando es interactivo (clickeable).

### Input

**Focus:**
- Border: Accent color
- Ring: 2px con 20% opacidad
- Scale: 1.005 (casi imperceptible)

**Decisión:**
- Ring sutil (no el típico 4px de Tailwind)
- Scale mínimo para feedback sin distracción

### Modal

**Animación:**
```typescript
initial: { opacity: 0, scale: 0.96 }
animate: { opacity: 1, scale: 1 }
```

**Decisión:**
- Scale desde 96% (no 90%, muy dramático)
- Spring suave para naturalidad
- Inspirado en VisionOS

**Overlay:**
- Background: `rgba(0, 0, 0, 0.4)`
- Blur: 24px (md)

**Decisión:**
- 40% de opacidad: oscurece sin bloquear completamente
- Blur para profundidad

### Tabs

**Indicador animado:**
```typescript
<motion.div layoutId="tab-indicator" />
```

**Decisión:**
- `layoutId` de Framer Motion para animación fluida entre tabs
- Spring para movimiento natural
- Inspirado en iOS segmented control

### Switch

**Animación:**
```typescript
spring: {
  stiffness: 500,
  damping: 35,
  mass: 0.5,
}
```

**Decisión:**
- Spring más rápido que otros componentes (iOS toggle es snappy)
- Damping alto para evitar bounce excesivo

---

## ♿ Accesibilidad

### Contraste

- Texto principal: 4.5:1 (AA)
- Texto grande: 3:1 (AA)
- Elementos interactivos: 3:1 (AA)

**Decisión:** Cumplir WCAG 2.1 nivel AA como mínimo.

### Focus Visible

```css
focus-visible:ring-2
focus-visible:ring-accent-blue
focus-visible:ring-offset-2
```

**Decisión:**
- Solo mostrar ring en navegación por teclado (`:focus-visible`)
- 2px de offset para separación clara

### Touch Targets

Mínimo: 40x40px (iOS HIG)

**Decisión:** Todos los elementos interactivos cumplen este mínimo.

---

## 🌓 Dark Mode

### Estrategia

- Clase `.dark` en `<html>`
- Variables CSS que cambian automáticamente

**Decisión:**
- Más flexible que `prefers-color-scheme`
- Permite toggle manual por el usuario

### Ajustes en Dark Mode

1. **Sombras más intensas** (24-48% vs 4-12%)
2. **Azul más brillante** (#0A84FF vs #007AFF)
3. **Bordes más visibles** (12% vs 8% opacidad)

**Decisión:** Dark mode no es solo "invertir colores", requiere ajustes específicos.

---

## 📱 Responsive

### Breakpoints

```typescript
sm: '640px',
md: '768px',
lg: '1024px',
xl: '1280px',
'2xl': '1536px',
```

**Decisión:** Usar los estándar de Tailwind (probados y optimizados).

### Mobile First

Todos los componentes diseñados primero para móvil.

**Decisión:** La mayoría del tráfico web es móvil.

---

## 🔧 Personalización

### Tokens en TypeScript

```typescript
export const tokens = { ... } as const;
```

**Decisión:**
- TypeScript para autocompletado
- `as const` para tipos literales
- Fácil de extender y personalizar

### Tailwind Extend

```typescript
theme: {
  extend: { ... }
}
```

**Decisión:**
- Extender en lugar de reemplazar
- Mantener utilidades de Tailwind
- Agregar nuestras personalizaciones

---

## 🎯 Conclusión

Cada decisión de diseño está fundamentada en:

1. **Principios de Apple**: Minimalismo, elegancia, funcionalidad
2. **Estándares de la industria**: WCAG, iOS HIG, Material Design
3. **Investigación UX**: Tiempos de animación, tamaños de touch targets
4. **Pruebas reales**: Iteración basada en feedback

El resultado es un design system que se siente **premium**, **familiar** y **accesible**.

---

**Última actualización:** 2025-11-22
