# Ejemplos de Configuración

Este directorio contiene guías de configuración para integrar el Apple Design System en diferentes frameworks de React.

## Guías Disponibles

### 📱 Frameworks Soportados

- **[Next.js App Router](./next-app-router-setup.md)** - Configuración para Next.js 13+ con App Router
- **[Vite + React](./vite-setup.md)** - Configuración para Vite con React y TypeScript

### 🎨 Configuración Base

- **[Tailwind Config Example](./tailwind.config.example.js)** - Ejemplo de configuración de Tailwind con el preset del design system

## Inicio Rápido

Todos los frameworks siguen un patrón similar:

### 1. Instalar el paquete

```bash
npm install @smart-coder-labs/apple-design-system
```

### 2. Configurar Tailwind CSS

```javascript
import preset from '@smart-coder-labs/apple-design-system/tailwind.preset';

export default {
  presets: [preset],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@smart-coder-labs/apple-design-system/dist/**/*.js',
  ],
};
```

### 3. Importar estilos globales

```tsx
import '@smart-coder-labs/apple-design-system/globals.css';
```

### 4. Usar componentes

```tsx
import { Button, Card } from '@smart-coder-labs/apple-design-system';
```

## Requisitos

Todos los proyectos necesitan:

- **React**: 19.2.0 o superior
- **Tailwind CSS**: 3.4.0 o superior
- **TypeScript**: 5.0 o superior (recomendado)

## Soporte Adicional

Para configuraciones más específicas o frameworks no listados, consulta:

- **[QUICKSTART.md](../QUICKSTART.md)** - Guía rápida de instalación
- **[README.md](../README.md)** - Documentación completa
- **[MIGRATION.md](../MIGRATION.md)** - Guía de migración entre versiones

## Solución de Problemas

### Las clases de Tailwind no se aplican

Asegúrate de:

1. Usar el preset en tu `tailwind.config.js`
2. Incluir `./node_modules/@smart-coder-labs/apple-design-system/dist/**/*.js` en el content
3. Importar los estilos globales en tu archivo principal

### Los componentes no se importan

Verifica que:

1. El paquete esté instalado correctamente
2. Estés importando desde `@smart-coder-labs/apple-design-system`
3. Tengas React 19+ instalado

### Dark mode no funciona

Agrega la clase `dark` al elemento `<html>`:

```tsx
document.documentElement.classList.add('dark');
```

## Contribuir

Si tienes una configuración para otro framework (Remix, Gatsby, Astro, etc.), ¡nos encantaría que contribuyas!

Crea un archivo siguiendo el formato:

```
framework-name-setup.md
```

Y envía un pull request.
