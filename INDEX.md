# 📑 Índice General - Apple Design System

## 📖 Documentación

### 🚀 [QUICKSTART.md](./QUICKSTART.md)
**Inicio rápido** - Instalación y configuración en 5 minutos
- Instalación de dependencias
- Uso en Next.js, Vite o React
- Configuración de Tailwind
- Activar Dark Mode
- Ejemplo completo funcional
- Troubleshooting

### 📘 [README.md](./README.md)
**Documentación principal** - Guía completa del design system
- Características
- Instalación detallada
- Tokens explicados (colores, tipografía, espaciado, etc.)
- API de cada componente
- Props detalladas
- Personalización
- Dark mode
- SEO y accesibilidad

### 🎨 [DESIGN_DECISIONS.md](./DESIGN_DECISIONS.md)
**Decisiones de diseño** - Por qué cada elemento es como es
- Filosofía general
- Paleta de colores justificada
- Tipografía explicada
- Border radius
- Sombras y blur
- Animaciones fundamentadas
- Espaciado
- Cada componente explicado
- Accesibilidad
- Dark mode strategy

### 📂 [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
**Estructura del proyecto** - Organización y arquitectura
- Árbol de archivos
- Checklist de componentes (10/10 ✅)
- Dependencias
- Características destacadas
- Próximos pasos opcionales

### 📖 [EXAMPLES.md](./EXAMPLES.md)
**Guía de ejemplos** - Código listo para copiar
- Ejemplos de cada componente
- Todas las variantes
- Todos los estados
- Composiciones
- Formulario completo
- Dashboard example
- Dark mode toggle

### 📊 [SUMMARY.md](./SUMMARY.md)
**Resumen ejecutivo** - Vista general del proyecto
- Entregables completos
- Características destacadas
- Estadísticas (22 archivos, 3178 líneas)
- Cómo usar
- Puntos clave
- Conclusión

---

## 🎨 Archivos de Configuración

### [tokens.ts](./tokens.ts)
**Tokens del design system** - Variables de diseño
- Colores (light/dark)
- Tipografía
- Espaciado
- Border radius
- Sombras
- Blur
- Opacidades
- Animaciones
- Breakpoints
- Z-index

### [tailwind.config.ts](./tailwind.config.ts)
**Configuración de Tailwind** - Extensión con tokens
- Colores personalizados
- Timing functions Apple-like
- Shadows light/dark
- Backdrop blur

### [globals.css](./globals.css)
**Estilos globales** - CSS base
- Variables CSS light/dark
- Scrollbar macOS
- Efectos glass
- Utilidades
- Animaciones keyframes

### [tsconfig.json](./tsconfig.json)
**TypeScript config** - Configuración del compilador
- Strict mode
- Paths configurados
- JSX React

### [postcss.config.js](./postcss.config.js)
**PostCSS config** - Procesamiento de CSS
- Tailwind CSS
- Autoprefixer

### [package.json](./package.json)
**Dependencias** - Paquetes necesarios
- React 18+
- Framer Motion
- Radix UI
- Tailwind CSS
- TypeScript

---

## 🧩 Componentes

### [components/Button.tsx](./components/Button.tsx)
**Botones con animaciones**
- Variantes: primary, secondary, ghost, subtle
- Tamaños: sm, md, lg
- Estados: loading, disabled
- Íconos: left, right
- Animaciones: hover scale, tap feedback

### [components/Card.tsx](./components/Card.tsx)
**Tarjetas con variantes**
- Variantes: elevated, glass, outlined, flat
- Padding configurable
- Hoverable con elevación
- Sub-componentes: Header, Title, Description, Content, Footer

### [components/Input.tsx](./components/Input.tsx)
**Inputs y Textareas**
- Label, error, helper text
- Íconos: left, right
- Tamaños: sm, md, lg
- Focus elegante
- Textarea incluido

### [components/Modal.tsx](./components/Modal.tsx)
**Modales/Dialogs (Radix UI)**
- Animación VisionOS
- Backdrop blur
- Tamaños: sm, md, lg, xl, full
- Sub-componentes completos
- Close button

### [components/Dropdown.tsx](./components/Dropdown.tsx)
**Menús desplegables (Radix UI)**
- Animación flotante
- Items con íconos
- Separadores y labels
- Checkbox items
- Radio groups
- Items destructivos

### [components/Tooltip.tsx](./components/Tooltip.tsx)
**Tooltips (Radix UI)**
- Fade rápido (160ms)
- Posiciones: top, right, bottom, left
- Delay configurable
- Arrow opcional
- Provider incluido

### [components/Tabs.tsx](./components/Tabs.tsx)
**Tabs (Radix UI)**
- Variantes: default, segmented (iOS)
- Indicador animado (layoutId)
- Background animado
- Fade-in del contenido

### [components/Switch.tsx](./components/Switch.tsx)
**Toggle iOS (Radix UI)**
- Animación spring snappy
- Tamaños: sm, md, lg
- Label y description
- Estados: checked, disabled

### [components/Badge.tsx](./components/Badge.tsx)
**Badges y notificaciones**
- Variantes: default, primary, success, warning, error, info
- Tamaños: sm, md, lg
- Dot opcional
- NotificationBadge con contador

### [components/NavBar.tsx](./components/NavBar.tsx)
**Barra de navegación**
- Variantes: default, glass, transparent
- Sticky opcional
- Sub-componentes: Brand, Content, Item, Separator
- Indicador animado
- Responsive

---

## 📦 Exportaciones

### [index.ts](./index.ts)
**Exportaciones centralizadas**
- Todos los componentes
- Todos los tipos
- Tokens
- Listo para importar

---

## 🎬 Demo

### [DemoPage.tsx](./DemoPage.tsx)
**Página de demostración completa**
- Navegación con glass effect
- Hero section
- Tabs con showcase
- Ejemplos de Cards
- Formulario completo
- Modal funcional
- Dark mode toggle
- Notification badges
- Footer

---

## 📊 Estadísticas

```
📁 Archivos totales:     24
📝 Líneas de código:     3,178
🧩 Componentes:          10
🎨 Tokens definidos:     100+
📖 Docs:                 6 archivos
💾 Tamaño total:         ~100 KB
```

---

## 🎯 Flujo de Trabajo Sugerido

### Para empezar:
1. **Lee** [QUICKSTART.md](./QUICKSTART.md) (5 min)
2. **Instala** dependencias
3. **Copia** ejemplos de [EXAMPLES.md](./EXAMPLES.md)
4. **Personaliza** tokens en [tokens.ts](./tokens.ts)

### Para entender el diseño:
1. **Lee** [DESIGN_DECISIONS.md](./DESIGN_DECISIONS.md)
2. **Revisa** [tokens.ts](./tokens.ts)
3. **Explora** [globals.css](./globals.css)

### Para usar componentes:
1. **Consulta** [README.md](./README.md) para API
2. **Copia** código de [EXAMPLES.md](./EXAMPLES.md)
3. **Personaliza** según necesites

### Para ver en acción:
1. **Ejecuta** [DemoPage.tsx](./DemoPage.tsx)
2. **Inspecciona** el código
3. **Experimenta** con variantes

---

## 🔍 Búsqueda Rápida

### ¿Buscas...?

**Cómo instalar?**
→ [QUICKSTART.md](./QUICKSTART.md)

**Cómo usar un componente?**
→ [EXAMPLES.md](./EXAMPLES.md)

**Por qué se diseñó así?**
→ [DESIGN_DECISIONS.md](./DESIGN_DECISIONS.md)

**Qué colores usar?**
→ [tokens.ts](./tokens.ts) → `colors`

**Qué tamaños de fuente?**
→ [tokens.ts](./tokens.ts) → `typography.fontSize`

**Cómo personalizar?**
→ [README.md](./README.md) → Sección "Personalización"

**Cómo activar dark mode?**
→ [QUICKSTART.md](./QUICKSTART.md) → Sección "Dark Mode"

**Ejemplo completo?**
→ [DemoPage.tsx](./DemoPage.tsx)

**Estructura del proyecto?**
→ [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

---

## 🎨 Componentes por Categoría

### Formularios
- [Input](./components/Input.tsx)
- [Textarea](./components/Input.tsx)
- [Switch](./components/Switch.tsx)

### Navegación
- [NavBar](./components/NavBar.tsx)
- [Tabs](./components/Tabs.tsx)

### Overlays
- [Modal](./components/Modal.tsx)
- [Dropdown](./components/Dropdown.tsx)
- [Tooltip](./components/Tooltip.tsx)

### Contenedores
- [Card](./components/Card.tsx)

### Acciones
- [Button](./components/Button.tsx)

### Indicadores
- [Badge](./components/Badge.tsx)

---

## 📱 Responsive

Todos los componentes son responsive por defecto.

**Breakpoints** (en [tokens.ts](./tokens.ts)):
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## ♿ Accesibilidad

Todos los componentes cumplen:
- ✅ WCAG 2.1 nivel AA
- ✅ Navegación por teclado
- ✅ Focus visible
- ✅ ARIA labels (Radix UI)
- ✅ Touch targets 40x40px mínimo

---

## 🌓 Dark Mode

Soporte completo en todos los componentes.

**Activar:**
```tsx
document.documentElement.classList.add('dark');
```

**Ver ejemplos:**
- [QUICKSTART.md](./QUICKSTART.md) → Dark Mode
- [DemoPage.tsx](./DemoPage.tsx) → Dark mode toggle

---

## 🚀 Próximos Pasos

1. **Instala** → [QUICKSTART.md](./QUICKSTART.md)
2. **Explora** → [DemoPage.tsx](./DemoPage.tsx)
3. **Usa** → [EXAMPLES.md](./EXAMPLES.md)
4. **Personaliza** → [README.md](./README.md)
5. **Entiende** → [DESIGN_DECISIONS.md](./DESIGN_DECISIONS.md)

---

## 📞 Ayuda

Si tienes dudas:
1. Busca en este índice
2. Lee la documentación relevante
3. Revisa los ejemplos
4. Inspecciona el código fuente

---

**Todo está documentado y listo para usar** ✨

*Última actualización: 2025-11-22*
