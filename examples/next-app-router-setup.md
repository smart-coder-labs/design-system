# Configuración para Next.js (App Router)

## 1. Instalar el paquete

```bash
npm install @smart-coder-labs/apple-design-system
# o
yarn add @smart-coder-labs/apple-design-system
# o
pnpm add @smart-coder-labs/apple-design-system
```

## 2. Instalar dependencias peer

```bash
npm install react@^19.2.0 react-dom@^19.2.0 tailwindcss@^3.4.0
```

## 3. Configurar Tailwind CSS

Crea o actualiza `tailwind.config.js` en la raíz de tu proyecto:

```javascript
import preset from '@smart-coder-labs/apple-design-system/tailwind.preset';

/** @type {import('tailwindcss').Config} */
export default {
  // Usa el preset del design system
  presets: [preset],

  // Define dónde buscar clases de Tailwind
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',

    // IMPORTANTE: Incluye los componentes del design system
    './node_modules/@smart-coder-labs/apple-design-system/dist/**/*.js',
  ],
};
```

## 4. Importar estilos globales

En tu `app/layout.tsx`:

```tsx
import '@smart-coder-labs/apple-design-system/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mi App',
  description: 'Descripción de mi app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
```

## 5. Usar componentes

```tsx
'use client';

import { Button, Card, CardHeader, CardTitle, CardContent } from '@smart-coder-labs/apple-design-system';

export default function HomePage() {
  return (
    <div className="p-8">
      <Card>
        <CardHeader>
          <CardTitle>Bienvenido</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Esta es una app usando el Apple Design System</p>
          <Button variant="primary" className="mt-4">
            Comenzar
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
```

## 6. Soporte para Dark Mode

La opción recomendada es usar el componente `ThemeToggle` del paquete, que ya resuelve el tema
persistido, el tema aplicado al `<html>` y la preferencia del sistema:

```tsx
'use client';

import { ThemeToggle } from '@smart-coder-labs/apple-design-system';

export function AppearanceSettings() {
  return <ThemeToggle />;
}
```

Si prefieres tu propio control, respeta estas dos reglas:

1. Al montar, si no hay preferencia guardada, **lee el tema ya aplicado al `<html>`** (tu script
   anti-flash ya lo puso) en lugar de sobrescribirlo.
2. Deriva el nombre accesible del switch del estado actual, nunca de una etiqueta estática: si no,
   anunciará "Cambiar a modo oscuro" cuando el modo oscuro ya está activo.

```tsx
'use client';

import { useEffect, useState } from 'react';
import { Switch } from '@smart-coder-labs/apple-design-system';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const isDarkMode =
      stored === 'dark' ||
      (stored !== 'light' &&
        // Respeta el tema que la app ya aplicó al <html> antes de mirar el sistema
        (document.documentElement.classList.contains('dark') ||
          window.matchMedia('(prefers-color-scheme: dark)').matches));

    setIsDark(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleTheme = (checked: boolean) => {
    setIsDark(checked);
    document.documentElement.classList.toggle('dark', checked);
    localStorage.setItem('theme', checked ? 'dark' : 'light');
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm">{isDark ? 'Modo oscuro activo' : 'Modo claro activo'}</span>
      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      />
    </div>
  );
}
```

## Notas adicionales

- **Tree-shaking**: Next.js automáticamente hace tree-shaking, solo importa lo que uses
- **SSR**: Todos los componentes con animaciones usan `'use client'`, son client components
- **Performance**: Los componentes están optimizados para producción
- **TypeScript**: El paquete incluye tipos TypeScript completos
