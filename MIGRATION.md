# 🔄 Guía de Migración - Design System v1.0.3

## Migrando desde v1.0.2 o anterior

### ⚠️ Breaking Change

A partir de la versión **1.0.3**, es **obligatorio** usar el preset de Tailwind para que las clases personalizadas funcionen correctamente.

### Problema que se soluciona

Si experimentabas errores como:
```
[plugin:@tailwindcss/vite:generate:serve] Cannot apply unknown utility class `border-border-primary`
```

Esto ocurría porque tu configuración de Tailwind no tenía acceso a las definiciones de colores y tokens del design system.

---

## Pasos de Migración

### 1. Actualiza el paquete

```bash
npm install @smart-coder-labs/design-system@latest
```

### 2. Actualiza tu `tailwind.config.js`

#### Antes (❌ Ya no funciona):
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@smart-coder-labs/design-system/**/*.{js,ts,jsx,tsx}',
  ],
  // ... resto de configuración
}
```

#### Después (✅ Correcto):

**Para proyectos con ESM (Vite, Next.js con `type: "module"`):**
```javascript
// tailwind.config.js
import preset from '@smart-coder-labs/design-system/tailwind.preset';

export default {
  presets: [preset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@smart-coder-labs/design-system/**/*.{js,ts,jsx,tsx}',
  ],
  // ... resto de configuración
};
```

**Para proyectos con CommonJS:**
```javascript
// tailwind.config.cjs
const preset = require('@smart-coder-labs/design-system/tailwind.preset').default;

module.exports = {
  presets: [preset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@smart-coder-labs/design-system/**/*.{js,ts,jsx,tsx}',
  ],
};
```

### 3. Reinicia tu servidor de desarrollo

```bash
# Si usas Vite
npm run dev

# Si usas Next.js
npm run dev
```

---

## ¿Qué incluye el preset?

El preset de Tailwind incluye automáticamente:

- ✅ **Colores personalizados**: `background-primary`, `text-primary`, `border-primary`, etc.
- ✅ **Tipografía**: Font families, tamaños, pesos, line heights
- ✅ **Sombras**: `shadow-xs`, `shadow-sm`, `shadow-md`, etc.
- ✅ **Border radius**: `rounded-sm`, `rounded-md`, `rounded-lg`, etc.
- ✅ **Spacing**: Sistema de espaciado consistente
- ✅ **Animaciones**: Keyframes y animaciones predefinidas
- ✅ **Z-index**: Valores de z-index estandarizados
- ✅ **Dark mode**: Configuración `class` para dark mode

---

## Personalización (Opcional)

Si necesitas extender o sobrescribir valores del preset, puedes hacerlo en tu configuración:

```javascript
import preset from '@smart-coder-labs/design-system/tailwind.preset';

export default {
  presets: [preset],
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Agrega colores adicionales o sobrescribe existentes
        brand: '#FF6B6B',
      },
    },
  },
};
```

---

## Soporte

Si encuentras problemas durante la migración:

1. Verifica que tu archivo `tailwind.config.js` tenga la sintaxis correcta (ESM vs CommonJS)
2. Asegúrate de que Tailwind CSS esté instalado en tu proyecto (`npm list tailwindcss`)
3. Limpia el caché de Vite si es necesario: `rm -rf node_modules/.vite`
4. Consulta la sección **Troubleshooting** en [QUICKSTART.md](./QUICKSTART.md)

---

## Changelog

### v1.0.3
- ✨ **Nuevo**: Preset de Tailwind exportable (`tailwind.preset.ts`)
- 📦 **Mejora**: Exportaciones explícitas en `package.json`
- 📝 **Docs**: Actualización completa de `QUICKSTART.md`
- 🐛 **Fix**: Soluciona el error "Cannot apply unknown utility class"

### v1.0.2
- Primera versión publicada
