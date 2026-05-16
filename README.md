# 🍏✨ Apple Creative Design System

<div align="center">

**Un design system completo inspirado en macOS, iOS y VisionOS**

*Construido con Framer Motion + Tailwind CSS*
<br>
*✨ Creado con Inteligencia Artificial ✨*

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-61dafb)](https://reactjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12+-ff69b4)](https://www.framer.com/motion/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38bdf8)](https://tailwindcss.com/)
[![npm](https://img.shields.io/npm/v/@smart-coder-labs/apple-design-system)](https://www.npmjs.com/package/@smart-coder-labs/apple-design-system)

[📦 Instalación](#-inicio-rápido) •
[📖 Documentación](#-documentación) •
[🧩 Componentes](#-componentes) •
[🎨 Demo](#-demo) •
[📚 Storybook](#-storybook)

</div>

---

## 📦 Instalación

```bash
npm install -D @smart-coder-labs/apple-design-system
```

---

## 💻 CLI

El Design System incluye una CLI integrada inspirada en shadcn/ui — descargás el código fuente de los componentes directamente a tu proyecto, no importás un paquete.

### `init`

Configura tu proyecto. **Detecta automáticamente el framework** leyendo los archivos de config y `package.json`.

```bash
npx @smart-coder-labs/apple-design-system init
```

```
🍏 Apple Design System — Initialization

Detected framework: Next.js (App Router — RSC enabled)
Is this correct? › Yes

Project root directory? › ./src
Where to install components? › ./src/components/ui
Global CSS file path? › ./src/index.css
Install required dependencies now? › Yes
```

**Frameworks soportados:** Next.js (App Router y Pages Router), Vite, Astro, Remix / React Router.

La configuración se guarda en `design-system.json`:

```json
{
  "framework": "next",
  "rsc": true,
  "componentsDir": "./src/components/ui",
  "globalCss": "./src/index.css",
  "components": {}
}
```

> **`rsc: true`** — Next.js App Router. Los componentes conservan `'use client'`.  
> **`rsc: false`** — Vite, Astro, Remix, Next.js Pages Router. `'use client'` se elimina automáticamente al instalar.

---

### `add`

Añade componentes a tu proyecto. Detecta dependencias entre componentes automáticamente.

```bash
npx @smart-coder-labs/apple-design-system add Button Card
```

Sin argumentos abre un selector interactivo (instalar todo o elegir específicos).

---

### `update`

Actualiza los componentes ya instalados a la última versión del registry.

```bash
npx @smart-coder-labs/apple-design-system update
```

---

## ✨ Características

- 🎨 **Estilo Apple Premium** - Minimalista, elegante y aireado
- 🌓 **Dark Mode Completo** - Soporte automático para modo oscuro
- ⚡ **Animaciones Fluidas** - Springs suaves y transiciones elegantes con Framer Motion
- ♿ **Accesibilidad** - Componentes accesibles y semánticos
- 🎯 **TypeScript** - Completamente tipado
- 📱 **Responsive** - Diseñado para todos los dispositivos
- 🎭 **Personalizable** - Tokens configurables fácilmente

---

## 📦 Contenido

### 🧩 Componentes

| Componente | Descripción | Tecnología |
|------------|-------------|------------|
| **Button** | Botones con animaciones suaves | Framer Motion |
| **Card** | Tarjetas con efectos glass | Framer Motion |
| **Input** | Inputs con focus elegante | Framer Motion |
| **Modal** | Modales con animación VisionOS | Framer Motion |
| **Dropdown** | Menús desplegables | Framer Motion |
| **Tooltip** | Tooltips pequeños y elegantes | Framer Motion |
| **Tabs** | Segmented control iOS/macOS | Framer Motion |
| **Switch** | Toggle iOS con spring | Framer Motion |
| **Badge** | Indicadores de estado | Framer Motion |
| **NumberInput** | Input numérico con controles | Framer Motion |
| **Select** | Select nativo estilizado | Framer Motion |
| **Checkbox** | Checkbox animado | Framer Motion |
| **Textarea** | Area de texto expandible | Framer Motion |
| **Label** | Etiquetas accesibles | HTML/CSS |
| **NavBar** | Navegación minimal | Framer Motion |
| **Calendar** | Calendario completo | React Day Picker |
| **DataGrid** | Tabla avanzada con filtros | TanStack Table |
| **Kanban** | Tablero Trello-like | Dnd Kit |
| **Sheet** | Panel lateral deslizante | Framer Motion |
| **Command** | Menú de comandos (CMD+K) | CMDK |
| **Popover** | Contenido flotante | Framer Motion |
| **Toast** | Notificaciones tostada | Sonner |

### 🎨 Tokens Completos

- ✅ Colores (light/dark)
- ✅ Tipografía
- ✅ Espaciado
- ✅ Border Radius
- ✅ Sombras
- ✅ Blur
- ✅ Animaciones
- ✅ Breakpoints

### 📚 Documentación Extensa

- ✅ README completo
- ✅ Guía de inicio rápido
- ✅ Decisiones de diseño explicadas
- ✅ 50+ ejemplos de código
- ✅ Estructura del proyecto
- ✅ Índice general

---

## 🚀 Inicio Rápido

### 1. Inicializar el proyecto

Ejecuta el comando `init` para configurar automáticamente tu entorno:

```bash
npx @smart-coder-labs/apple-design-system init
```

Esto descargará los estilos base a `styles/apple-ds.css` y configurará las utilidades necesarias.

### 2. Usar en tu proyecto

```bash
npx @smart-coder-labs/apple-design-system add Button
```

```tsx
import { Button } from "@/components/ui/Button";

function App() {
  return (
    <Button variant="primary">Submit</Button>
  );
}
```

**[📖 Ver guía completa de inicio →](./QUICKSTART.md)**

---

## 🧩 Componentes

### Button

```tsx
<Button variant="primary" size="md">
  Click me
</Button>
```

**Variantes:** `primary` | `secondary` | `ghost` | `subtle`  
**Tamaños:** `sm` | `md` | `lg`  
**Estados:** `loading` | `disabled`

### Card

```tsx
<Card variant="glass" hoverable>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

**Variantes:** `elevated` | `glass` | `outlined` | `flat`

### Modal

```tsx
<Modal open={open} onOpenChange={setOpen}>
  <ModalHeader>
    <ModalTitle>Title</ModalTitle>
  </ModalHeader>
  <ModalContent>Content</ModalContent>
</Modal>
```

**Animación VisionOS-like con backdrop blur**

**[📖 Ver todos los componentes →](./EXAMPLES.md)**

---

## 🎨 Demo

Explora nuestra demostración interactiva de Storybook con una Landing Page completa construida con nuestro Sistema de Diseño. Experimenta el cambio de modo oscuro, diseño responsivo y varios componentes de UI en acción.

**[🎬 Ver demo completa →](https://smart-coder-labs.github.io/design-system/?path=/story/pages-landing-page--business-landing)**

---

## 📚 Storybook

Explora y prueba nuestros componentes de forma interactiva en nuestro Storybook oficial:

👉 **[https://smart-coder-labs.github.io/design-system/](https://smart-coder-labs.github.io/design-system/)**

---

## 📖 Documentación

| Archivo | Descripción |
|---------|-------------|
| **[INDEX.md](./INDEX.md)** | 📑 Índice general de todo el proyecto |
| **[QUICKSTART.md](./QUICKSTART.md)** | 🚀 Instalación y configuración rápida |
| **[README.md](./README.md)** | 📘 Documentación completa |
| **[EXAMPLES.md](./EXAMPLES.md)** | 📖 50+ ejemplos de código |
| **[DESIGN_DECISIONS.md](./DESIGN_DECISIONS.md)** | 🎨 Decisiones de diseño explicadas |
| **[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)** | 📂 Estructura del proyecto |
| **[SUMMARY.md](./SUMMARY.md)** | 📊 Resumen ejecutivo |

---

## 🎯 Filosofía de Diseño

### Minimalismo
- Espacio negativo amplio
- Elementos esenciales solamente
- Sin decoraciones innecesarias

### Elegancia
- Bordes suaves (12-20px)
- Sombras sutiles
- Transiciones fluidas (160-260ms)

### Premium
- Paleta neutra con acentos elegantes
- Tipografía cuidada (Inter/SF Pro)
- Efectos glass y translucidez

**[🎨 Ver decisiones completas →](./DESIGN_DECISIONS.md)**

---

## 🌓 Dark Mode

```tsx
import { Switch } from '@smart-coder-labs/apple-design-system';

const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  document.documentElement.classList.toggle('dark', darkMode);
}, [darkMode]);

<Switch
  checked={darkMode}
  onCheckedChange={setDarkMode}
  label="Dark Mode"
/>
```

---

## 🎨 Personalización

### Modificar colores

```typescript
import { tokens } from '@smart-coder-labs/apple-design-system';

const customTokens = {
  ...tokens,
  colors: {
    ...tokens.colors,
    light: {
      ...tokens.colors.light,
      accent: {
        blue: '#0066CC', // Tu color
      },
    },
  },
};
```

**[🔧 Ver guía completa →](./README.md#personalización)**

---

## 📊 Estadísticas

```
📁 Archivos:         150+
📝 Líneas de código: 10,000+
🧩 Componentes:      50+
🎨 Tokens:           100+
📖 Documentación:    7 archivos
```

---

## 🛠️ Tecnologías

- **React** 18+ - UI Library
- **TypeScript** 5+ - Type Safety
- **Framer Motion** 12+ - Animaciones
- **Tailwind CSS** 4+ - Estilos
- **PostCSS** - Procesamiento CSS

---

## ♿ Accesibilidad

✅ WCAG 2.1 nivel AA  
✅ Navegación por teclado  
✅ Focus visible  
✅ ARIA labels  
✅ Touch targets 40x40px  
✅ Screen reader friendly  

---

## 📱 Responsive

Todos los componentes son responsive por defecto.

**Breakpoints:**
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

---

## 🎯 Casos de Uso

- ✅ Aplicaciones web premium
- ✅ Dashboards administrativos
- ✅ Landing pages elegantes
- ✅ Aplicaciones SaaS
- ✅ Portfolios profesionales
- ✅ E-commerce moderno

---

## 📂 Estructura

```
apple-design-system/
├── 📄 Documentación (7 archivos)
├── 🎨 Configuración (tokens, tailwind, globals)
├── 🧩 Componentes (10 componentes)
├── 📦 Package.json
└── 🎬 DemoPage.tsx
```

**[📂 Ver estructura completa →](./PROJECT_STRUCTURE.md)**

---

## 🚀 Próximos Pasos

1. **[📖 Lee el índice](./INDEX.md)** - Vista general
2. **[🚀 Instalación rápida](./QUICKSTART.md)** - 5 minutos
3. **[📖 Copia ejemplos](./EXAMPLES.md)** - Código listo
4. **[🎨 Personaliza](./README.md)** - Hazlo tuyo
5. **[🎬 Ve la demo](./DemoPage.tsx)** - Inspiración

---

## 💡 Inspiración

Este design system está inspirado en:

- **macOS** System Preferences
- **iOS** Settings
- **VisionOS** Cards y UI
- **Apple Human Interface Guidelines**

---

## 🔄 Migración

### Actualizando desde v1.0.2 o anterior

A partir de **v1.0.3**, es necesario usar el preset de Tailwind:

```bash
npm install -D @smart-coder-labs/apple-design-system@latest
```

Actualiza tu `tailwind.config.js`:

```javascript
import preset from '@smart-coder-labs/apple-design-system/tailwind.preset';

export default {
  presets: [preset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@smart-coder-labs/apple-design-system/**/*.{js,ts,jsx,tsx}',
  ],
};
```

**[📖 Ver guía completa de migración →](./MIGRATION.md)**

---

## 📄 Licencia

MIT © 2025

---

## 🙏 Agradecimientos

Construido con:
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

---

<div align="center">

**Hecho con ❤️ e IA inspirado en Apple**

[⬆ Volver arriba](#-apple-creative-design-system)

</div>
