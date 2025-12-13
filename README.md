# 🍏✨ Apple Creative Design System

<div align="center">

**Un design system completo inspirado en macOS, iOS y VisionOS**

*Construido con Framer Motion + Radix UI + Tailwind CSS*
<br>
*✨ Creado con Inteligencia Artificial ✨*

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18+-61dafb)](https://reactjs.org/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-10+-ff69b4)](https://www.framer.com/motion/)
[![Radix UI](https://img.shields.io/badge/Radix%20UI-Latest-purple)](https://www.radix-ui.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38bdf8)](https://tailwindcss.com/)
[![npm](https://img.shields.io/badge/npm-@smart--coder--labs/design--system-red)](https://github.com/smart-coder-labs/design-system/packages)

[📦 Instalación](#-inicio-rápido) •
[📖 Documentación](#-documentación) •
[🧩 Componentes](#-componentes) •
[🎨 Demo](#-demo)

</div>

---

## 📦 Instalación

```bash
npm install @smart-coder-labs/design-system
```

El paquete está publicado en **GitHub Package Registry**. Para configurar la autenticación, consulta la [guía de inicio rápido](./QUICKSTART.md).

---

## ✨ Características

- 🎨 **Estilo Apple Premium** - Minimalista, elegante y aireado
- 🌓 **Dark Mode Completo** - Soporte automático para modo oscuro
- ⚡ **Animaciones Fluidas** - Springs suaves y transiciones elegantes
- ♿ **Accesibilidad AA/AAA** - Componentes accesibles con Radix UI
- 🎯 **TypeScript** - Completamente tipado
- 📱 **Responsive** - Diseñado para todos los dispositivos
- 🎭 **Personalizable** - Tokens configurables fácilmente

---

## 📦 Contenido

### 🧩 10 Componentes Completos

| Componente | Descripción | Tecnología |
|------------|-------------|------------|
| **Button** | Botones con animaciones suaves | Framer Motion |
| **Card** | Tarjetas con efectos glass | Framer Motion |
| **Input** | Inputs con focus elegante | Framer Motion |
| **Modal** | Modales con animación VisionOS | Radix UI + Framer Motion |
| **Dropdown** | Menús desplegables | Radix UI + Framer Motion |
| **Tooltip** | Tooltips pequeños y elegantes | Radix UI + Framer Motion |
| **Tabs** | Segmented control iOS/macOS | Radix UI + Framer Motion |
| **Switch** | Toggle iOS con spring | Radix UI + Framer Motion |
| **Badge** | Indicadores de estado | Framer Motion |
| **NavBar** | Navegación minimal | Framer Motion |

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

### 1. Instalar el paquete

```bash
npm install @smart-coder-labs/design-system
```

> **Nota:** Este paquete está publicado en GitHub Package Registry. Necesitarás configurar la autenticación en tu archivo `.npmrc`:
> ```bash
> @smart-coder-labs:registry=https://npm.pkg.github.com
> //npm.pkg.github.com/:_authToken=TU_GITHUB_TOKEN
> ```
> [Ver guía completa de instalación →](./QUICKSTART.md)

### 2. Configurar Tailwind

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@smart-coder-labs/design-system/**/*.{js,ts,jsx,tsx}',
  ],
}
```

### 3. Usar en tu proyecto

```tsx
import { Button, Card, Input } from '@smart-coder-labs/design-system';
import '@smart-coder-labs/design-system/globals.css';

function App() {
  return (
    <Card>
      <Input label="Email" placeholder="your@email.com" />
      <Button variant="primary">Submit</Button>
    </Card>
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

![Apple Design System Demo](https://via.placeholder.com/800x400/007AFF/FFFFFF?text=Apple+Design+System+Demo)

**[🎬 Ver demo completa →](./DemoPage.tsx)**

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
import { Switch } from '@smart-coder-labs/design-system';

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
import { tokens } from '@smart-coder-labs/design-system';

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
📁 Archivos:         25
📝 Líneas de código: 3,178
🧩 Componentes:      10
🎨 Tokens:           100+
📖 Documentación:    7 archivos
```

---

## 🛠️ Tecnologías

- **React** 18+ - UI Library
- **TypeScript** 5+ - Type Safety
- **Framer Motion** 10+ - Animaciones
- **Radix UI** - Componentes accesibles
- **Tailwind CSS** 3+ - Estilos
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

## 📄 Licencia

MIT © 2025

---

## 🙏 Agradecimientos

Construido con:
- [Framer Motion](https://www.framer.com/motion/)
- [Radix UI](https://www.radix-ui.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/)

---

<div align="center">

**Hecho con ❤️ e IA inspirado en Apple**

[⬆ Volver arriba](#-apple-creative-design-system)

</div>
